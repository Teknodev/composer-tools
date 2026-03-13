import vm from "vm";
import fs from "fs";
import path from "path";
import React from "react";
import ReactDOM from "react-dom";
import ComponentsRegistery from "./editor-components/ComponentRegistery";
import { CATEGORIES } from "./editor-components/EditorComponent";
import * as _EditorComponents from "./editor-components/EditorComponent";

const COMPONENTS_DIR = path.join(process.cwd(), "custom-components");

export function loadCustomComponentsSSR(registry: ComponentsRegistery): void {
  const manifestPath = path.join(COMPONENTS_DIR, "manifest.json");
  if (!fs.existsSync(manifestPath)) return;

  const manifest: Array<{ _id: string; name: string }> = JSON.parse(
    fs.readFileSync(manifestPath, "utf-8")
  );

  if (manifest.length === 0) return;

  for (const comp of manifest) {
    const bundlePath = path.join(COMPONENTS_DIR, comp._id, "bundle.js");
    if (!fs.existsSync(bundlePath)) continue;

    const code = fs.readFileSync(bundlePath, "utf-8");
    const mockWindow: Record<string, any> = {
      __CUSTOM_COMPONENTS__: {},
    };

    const context = {
      React,
      ReactDOM,
      ComposerTools: { ..._EditorComponents },
      window: mockWindow,
      console,
    };

    try {
      vm.createContext(context);
      vm.runInContext(code, context);

      const loaded = Object.values(mockWindow.__CUSTOM_COMPONENTS__);
      if (loaded.length > 0) {
        registry.registerDynamic(loaded as any[], CATEGORIES.CUSTOM);
      }
    } catch (e: any) {
      console.warn(`[SSR] Failed to load custom component "${comp.name}":`, e?.message || e);
    }
  }
}
