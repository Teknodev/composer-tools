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
  version: string;
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

function injectStylesheet(css: string, key: string): void {
  if (!css.trim()) return;

  const existing = document.querySelector(`style[data-key="${key}"]`);
  if (existing) return;

  const style = document.createElement("style");
  style.setAttribute("data-key", key);
  style.textContent = css;
  document.head.appendChild(style);
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

  const loadPromises = activeComponents.map(async (comp) => {
    try {
      if (comp.styles_content) {
        injectStylesheet(comp.styles_content, comp._id);
      }

      if (comp.bundle_content) {
        execScript(comp.bundle_content, comp.name);
      } else {
        console.warn(`[CustomComponents] No bundle_content for "${comp.name}", skipping.`);
      }
    } catch (err) {
      console.warn(`[CustomComponents] Failed to load "${comp.name}":`, err);
    }
  });

  await Promise.all(loadPromises);

  const allLoadedComponents = window.__CUSTOM_COMPONENTS__ || {};
  const loadedKeys = Object.keys(allLoadedComponents);
  const componentsToRegister = activeComponents
    .map((meta) => {
      let ComponentClass = allLoadedComponents[meta.name];
      if (!ComponentClass) {
        const match = loadedKeys.find(
          (key) => key.toLowerCase() === meta.name.toLowerCase()
        );
        if (match) {
          console.warn(
            `[CustomComponents] Name case mismatch for "${meta.name}" — found as "${match}". Using matched component.`
          );
          ComponentClass = allLoadedComponents[match];
        } else {
          console.warn(
            `[CustomComponents] "${meta.name}" not found on window.__CUSTOM_COMPONENTS__. Available keys:`,
            loadedKeys
          );
          return null;
        }
      }

      (ComponentClass as any).customComponentId = meta._id;
      (ComponentClass as any).customComponentVersion = meta.version;
      return ComponentClass;
    })
    .filter(Boolean) as (typeof Component)[];

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
