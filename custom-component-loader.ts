import React from "react";
import ReactDOM from "react-dom";
import ComponentsRegistery from "./editor-components/ComponentRegistery";
import { CATEGORIES } from "./editor-components/EditorComponent";
import * as _EditorComponents from "./editor-components/EditorComponent";

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
    __CUSTOM_COMPONENTS__: Record<string, any>;
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
  window.ComposerTools = { ..._EditorComponents };
}

function execScript(code: string, label: string): void {
  if (typeof document === "undefined") throw new Error("No document");
  if (!code.trim()) throw new Error(`Empty script content for: ${label}`);

  const script = document.createElement("script");
  script.setAttribute("data-component", label);
  script.textContent = code;
  document.head.appendChild(script);
}

function injectStylesheet(css: string, key: string): void {
  if (typeof document === "undefined") return;
  if (!css.trim()) return;

  const existing = document.querySelector(`style[data-key="${key}"]`);
  if (existing) return;

  const style = document.createElement("style");
  style.setAttribute("data-key", key);
  style.textContent = css;
  document.head.appendChild(style);
}

export async function loadCustomComponents(
  apiUrl: string,
  resourceId: string,
  registry: ComponentsRegistery,
  apiKey?: string
): Promise<void> {
  try {
    const headers: Record<string, string> = {};
    if (apiKey) {
      headers["Authorization"] = `Bearer ${apiKey}`;
    }

    const response = await fetch(
      `${apiUrl}/fn-execute/resource/${resourceId}/custom-components`,
      { headers }
    );

    if (!response.ok) return;

    const components: CustomComponentMeta[] = await response.json();
    if (!components || components.length === 0) return;

    const loadPromises = components
      .filter((c) => c.status === "active" && c.bundle_content)
      .map(async (comp) => {
        try {
          if (comp.styles_content) {
            injectStylesheet(comp.styles_content, comp._id);
          }
          execScript(comp.bundle_content!, comp.name);
        } catch (err) {
          console.warn(`Failed to load custom component "${comp.name}":`, err);
        }
      });

    await Promise.all(loadPromises);

    const loadedComponents = Object.values(window.__CUSTOM_COMPONENTS__ || {});
    if (loadedComponents.length > 0) {
      registry.registerDynamic(loadedComponents, CATEGORIES.CUSTOM);
    }
  } catch (err) {
    console.warn("Failed to load custom components:", err);
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
