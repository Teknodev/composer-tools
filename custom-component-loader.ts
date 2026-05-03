import React from "react";
import ReactDOM from "react-dom";
import ComponentsRegistery from "./editor-components/ComponentRegistery";
import { CATEGORIES, Component } from "./editor-components/EditorComponent";
import * as _EditorComponents from "./editor-components/EditorComponent";
import * as _BaseModule from "./composer-base-components/base/base";

export interface CustomComponentMeta {
  _id: string;
  name: string;
  category: string;
  version: number;
  bundle_url: string;
  bundle_content?: string;
  styles_url: string;
  styles_content?: string;
  props_schema: string;
  status: string;
}

declare global {
  interface Window {
    __CUSTOM_COMPONENTS__: Record<string, typeof Component>;
    React: typeof React;
    ReactDOM: typeof ReactDOM;
    ComposerTools: Record<string, unknown>;
  }
}

if (typeof window !== "undefined") {
  if (!window.__CUSTOM_COMPONENTS__) {
    window.__CUSTOM_COMPONENTS__ = {};
  }
  window.React = React;
  window.ReactDOM = ReactDOM;
  window.ComposerTools = { ..._EditorComponents, ..._BaseModule };
}

function execScript(code: string, label: string): void {
  if (!code.trim()) {
    throw new Error(`Empty script content for: ${label}`);
  }
  // eslint-disable-next-line no-eval
  (0, eval)(code);
}

export function scopeToPlayground(css: string): string {
  return css.replace(
    /^(\s*)([^@\s\/\n}][^{\n]*?)\s*\{/gm,
    (_match, indent, selector) => {
      const trimmed = selector.trim();
      if (!trimmed || trimmed.startsWith("#playground")) return _match;
      return `${indent}#playground ${trimmed} {`;
    }
  );
}

function injectStylesheet(css: string, key: string): void {
  if (!css.trim()) return;

  const scopedCss = scopeToPlayground(css);
  const customStyleLink = document.getElementById("custom-style");
  const existing = document.querySelector(`style[data-key="${key}"]`) as HTMLStyleElement | null;

  if (existing) {
    if (existing.textContent !== scopedCss) {
      existing.textContent = scopedCss;
    }
    if (customStyleLink && existing.compareDocumentPosition(customStyleLink) & Node.DOCUMENT_POSITION_PRECEDING) {
      document.head.insertBefore(existing, customStyleLink);
    }
    return;
  }

  const style = document.createElement("style");
  style.setAttribute("data-key", key);
  style.textContent = scopedCss;

  if (customStyleLink) {
    document.head.insertBefore(style, customStyleLink);
  } else {
    document.head.appendChild(style);
  }
}

export async function loadCustomComponentsFromMeta(
  components: CustomComponentMeta[],
  registry: ComponentsRegistery
): Promise<void> {
  if (!components || components.length === 0) return;

  const activeComponents = components.filter((c) => c.status === "active" && c.bundle_content);

  if (activeComponents.length === 0) {
    console.warn(
      `[CustomComponents] ${components.length} component(s) from API but none have active status with bundle_content.`,
      components.map((c) => ({ name: c.name, status: c.status, hasContent: !!c.bundle_content, content: c.bundle_content }))
    );
    return;
  }

  const componentsToRegister: (typeof Component)[] = [];

  for (const comp of activeComponents) {
    try {
      if (comp.styles_content) {
        injectStylesheet(comp.styles_content, comp._id);
      }

      if (!comp.bundle_content) {
        console.warn(`[CustomComponents] No bundle_content for "${comp.name}", skipping.`);
        continue;
      }

      execScript(comp.bundle_content, comp.name);

      const safeName = comp.name.replace(/[^a-zA-Z0-9_]/g, "");
      const windowKey = `${safeName}_v${comp.version}`;

      let BaseClass = window.__CUSTOM_COMPONENTS__?.[windowKey];
      if (!BaseClass) {
        BaseClass = window.__CUSTOM_COMPONENTS__?.[comp.name];
      }
      if (!BaseClass) {
        const loadedKeys = Object.keys(window.__CUSTOM_COMPONENTS__ || {});
        const match = loadedKeys.find(
          (key) => key.toLowerCase() === comp.name.toLowerCase()
        );
        if (match) {
          BaseClass = window.__CUSTOM_COMPONENTS__[match];
        } else {
          console.warn(
            `[CustomComponents] "${comp.name}" (key: "${windowKey}") not found on window.__CUSTOM_COMPONENTS__. Available keys:`,
            loadedKeys
          );
          continue;
        }
      }

      const displayName = comp.name;
      const displayVersion = comp.version;
      const VersionedClass = class extends (BaseClass as any) {
        static getName() { return displayName; }
        static getVersion() { return displayVersion; }
      };
      (VersionedClass as any).customComponentId = comp._id;
      (VersionedClass as any).customComponentVersion = comp.version;
      componentsToRegister.push(VersionedClass as unknown as typeof Component);
    } catch (err) {
      console.warn(`[CustomComponents] Failed to load "${comp.name}" v${comp.version}:`, err);
    }
  }

  if (componentsToRegister.length > 0) {
    registry.registerDynamic(componentsToRegister, CATEGORIES.CUSTOM);
  } else {
    console.warn(
      `[CustomComponents] No components registered. ${activeComponents.length} active component(s) loaded but none matched.`
    );
  }
}

export function getCustomComponentsFromPage(pageJson: string): string[] {
  try {
    const parsed = JSON.parse(pageJson);
    const components = Array.isArray(parsed) ? parsed : [parsed];
    return components
      .filter((c: any) => c.customComponentId)
      .map((c: any) => c.customComponentId);
  } catch {
    return [];
  }
}
