import React from "react";
import ReactDOM from "react-dom";
import ComponentsRegistery, { CustomComponentLoadFailure } from "./editor-components/ComponentRegistery";
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

/**
 * Host-side contract gate for custom component bundles.
 *
 * Refuses to register a class that doesn't meet the editor's runtime
 * interface. Throws on violation — the caller's try/catch logs the
 * error and skips the component, leaving the editor stable instead of
 * exploding when a malformed component is dropped into the playground.
 *
 * Two checks:
 *   1. Class must extend `Component` from @blinkpage/composer-tools.
 *      Detected via `Class.prototype instanceof window.ComposerTools.Component`.
 *      A class that extends React.Component (or nothing) lacks `getProps`,
 *      `getPropValue`, `decorateCSS`, etc. — the picker, playground, and
 *      every editor panel call these on instances.
 *   2. Class must register at least one editable prop via `this.addProp(...)`.
 *      Verified by probe-instantiating the class with empty props and
 *      counting `state.componentProps.props`. A component with zero props
 *      has an empty Content tab and is functionally unusable.
 */
function validateCustomComponentContract(BaseClass: unknown, name: string): void {
  const ComposerToolsComponent =
    (window as any).ComposerTools?.Component as { new (...args: any[]): any } | undefined;
  if (typeof ComposerToolsComponent !== "function") {
    throw new Error(
      `window.ComposerTools.Component is not available — host-side validation cannot run.`,
    );
  }

  const klass = BaseClass as { prototype?: unknown; new (...args: any[]): any } | undefined;
  if (typeof klass !== "function" || !klass.prototype) {
    throw new Error(`Bundle for "${name}" did not export a class.`);
  }

  if (!(klass.prototype instanceof ComposerToolsComponent)) {
    throw new Error(
      `"${name}" does not extend Component from @blinkpage/composer-tools. ` +
        `Re-upload after fixing the TSX: extend Component (not React.Component) and call super(props, styles).`,
    );
  }

  let probe: any;
  try {
    probe = new klass({});
  } catch (probeErr) {
    const message = probeErr instanceof Error ? probeErr.message : String(probeErr);
    throw new Error(`"${name}" threw during probe construction: ${message}`);
  }

  const props = probe?.state?.componentProps?.props;
  const propCount = Array.isArray(props) ? props.length : 0;
  if (propCount === 0) {
    throw new Error(
      `"${name}" has no editable props. The component's constructor must call this.addProp({...}) at least once.`,
    );
  }
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
): Promise<CustomComponentLoadFailure[]> {
  // Shared by reference with the registry so pushes below are reflected;
  // reset up-front so a clean reload never shows stale failures.
  const failures: CustomComponentLoadFailure[] = [];
  registry.setCustomLoadFailures(failures);

  if (!components || components.length === 0) return failures;

  const activeComponents = components.filter((c) => c.status === "active" && c.bundle_content);

  if (activeComponents.length === 0) {
    console.warn(
      `[CustomComponents] ${components.length} component(s) from API but none have active status with bundle_content.`,
      components.map((c) => ({ name: c.name, status: c.status, hasContent: !!c.bundle_content, content: c.bundle_content }))
    );
    return failures;
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
          failures.push({
            name: comp.name,
            version: comp.version,
            customComponentId: comp._id,
            reason: "Bundle did not register a component. Re-upload it from the latest CLI / Component Studio build.",
          });
          continue;
        }
      }

      validateCustomComponentContract(BaseClass, comp.name);

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
      console.error(`[CustomComponents] Failed to load "${comp.name}" v${comp.version}:`, err);
      failures.push({
        name: comp.name,
        version: comp.version,
        customComponentId: comp._id,
        reason: err instanceof Error ? err.message : String(err),
      });
    }
  }

  if (componentsToRegister.length > 0) {
    registry.registerDynamic(componentsToRegister, CATEGORIES.CUSTOM);
  } else {
    console.warn(
      `[CustomComponents] No components registered. ${activeComponents.length} active component(s) loaded but none matched.`
    );
  }

  registry.setCustomLoadFailures(failures);
  return failures;
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
