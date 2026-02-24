import ComponentsRegistery from "./editor-components/ComponentRegistery";
import { Component } from "./editor-components/EditorComponent";

export interface CustomComponentMeta {
  _id: string;
  name: string;
  category: string;
  version: string;
  bundle_url: string;
  styles_url: string;
  props_schema: string;
  status: string;
}

declare global {
  interface Window {
    __CUSTOM_COMPONENTS__: Record<string, typeof Component>;
  }
}

if (typeof window !== "undefined" && !window.__CUSTOM_COMPONENTS__) {
  window.__CUSTOM_COMPONENTS__ = {};
}

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) return resolve();

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.head.appendChild(script);
  });
}

function loadStylesheet(href: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`link[href="${href}"]`);
    if (existing) return resolve();

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.onload = () => resolve();
    link.onerror = () => reject(new Error(`Failed to load stylesheet: ${href}`));
    document.head.appendChild(link);
  });
}

export async function loadCustomComponentsFromMeta(
  components: CustomComponentMeta[],
  registry: ComponentsRegistery
): Promise<void> {
  if (!components || components.length === 0) return;

  const prevKeys = new Set(Object.keys(window.__CUSTOM_COMPONENTS__ || {}));

  const loadPromises = components
    .filter((c) => c.status === "active" && c.bundle_url)
    .map(async (comp) => {
      try {
        if (comp.styles_url) {
          await loadStylesheet(comp.styles_url).catch(() => {});
        }
        await loadScript(comp.bundle_url);
      } catch (err) {
        console.warn(`Failed to load custom component "${comp.name}":`, err);
      }
    });

  await Promise.all(loadPromises);

  const allComponents = window.__CUSTOM_COMPONENTS__ || {};
  const newComponents = Object.entries(allComponents)
    .filter(([key]) => !prevKeys.has(key))
    .map(([, value]) => value);

  if (newComponents.length > 0) {
    registry.registerDynamic(newComponents);
  }
}
