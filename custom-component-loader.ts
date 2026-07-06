import React from "react";
import ReactDOM from "react-dom";
import ComponentsRegistery, { CustomComponentLoadFailure } from "./editor-components/ComponentRegistery";
import { CATEGORIES, Component } from "./editor-components/EditorComponent";
import * as _EditorComponents from "./editor-components/EditorComponent";
import * as _BaseModule from "./composer-base-components/base/base";
import { logger } from "classes/Logger";

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

/**
 * The single scope every uploaded custom component is confined to. Nothing
 * an uploaded stylesheet declares may take effect at or above this node.
 */
const PLAYGROUND_SCOPE = "#playground";

/**
 * At-rules whose *body* is itself a list of qualified rules — their nested
 * selectors must be scoped just like top-level ones. Everything else with a
 * block (`@keyframes`, `@font-face`) is emitted verbatim: keyframe selectors
 * (`from`/`to`/`50%`) and font descriptors are NOT selectors and must not be
 * prefixed.
 */
const NESTED_RULE_AT_RULES = new Set([
  "media",
  "supports",
  "layer",
  "container",
  "scope",
  "document",
  "-moz-document",
]);

export interface CssScopeViolation {
  selector: string;
  reason: string;
}

/** Advance past a quoted string starting at `start`; returns index after the closing quote. */
function scanString(input: string, start: number): number {
  const quote = input[start];
  let i = start + 1;
  while (i < input.length) {
    const ch = input[i];
    if (ch === "\\") {
      i += 2;
      continue;
    }
    if (ch === quote) return i + 1;
    i++;
  }
  return input.length;
}

/** Return the index just past a CSS comment that begins at `start`. */
function scanComment(input: string, start: number): number {
  const end = input.indexOf("*/", start + 2);
  return end === -1 ? input.length : end + 2;
}

/** Index of the matching closer for an opener (`{`/`(`/`[`) at `openIdx`, comment/string aware. */
function findMatching(input: string, openIdx: number, open: string, close: string): number {
  let depth = 0;
  let i = openIdx;
  while (i < input.length) {
    const ch = input[i];
    if (ch === "/" && input[i + 1] === "*") {
      i = scanComment(input, i);
      continue;
    }
    if (ch === '"' || ch === "'") {
      i = scanString(input, i);
      continue;
    }
    if (ch === open) depth++;
    else if (ch === close) {
      depth--;
      if (depth === 0) return i;
    }
    i++;
  }
  return input.length;
}

/** Split `input` on top-level `delimiter`, ignoring delimiters inside (), [], strings, comments. */
function splitTopLevel(input: string, delimiter: string): string[] {
  const parts: string[] = [];
  let depth = 0;
  let current = "";
  let i = 0;
  while (i < input.length) {
    const ch = input[i];
    if (ch === "/" && input[i + 1] === "*") {
      const stop = scanComment(input, i);
      current += input.slice(i, stop);
      i = stop;
      continue;
    }
    if (ch === '"' || ch === "'") {
      const stop = scanString(input, i);
      current += input.slice(i, stop);
      i = stop;
      continue;
    }
    if (ch === "(" || ch === "[") depth++;
    else if (ch === ")" || ch === "]") depth = Math.max(0, depth - 1);
    if (ch === delimiter && depth === 0) {
      parts.push(current);
      current = "";
      i++;
      continue;
    }
    current += ch;
    i++;
  }
  parts.push(current);
  return parts;
}

/** Remove every pseudo-class / pseudo-element segment (`:x`, `::x`, `:x(...)`) from a compound. */
function stripPseudos(compound: string): string {
  let out = "";
  let i = 0;
  while (i < compound.length) {
    if (compound[i] === ":") {
      i++;
      if (compound[i] === ":") i++;
      while (i < compound.length && /[\w-]/.test(compound[i])) i++;
      if (compound[i] === "(") {
        i = findMatching(compound, i, "(", ")") + 1;
      }
      continue;
    }
    out += compound[i];
    i++;
  }
  return out;
}

/** A compound is "bare universal" when, ignoring pseudo-classes, it is just `*`. */
function isBareUniversal(compound: string): boolean {
  return stripPseudos(compound).trim() === "*";
}

/**
 * Does a single compound selector target global scope (`:root` / `html` /
 * `body` / universal `*`)? Unwraps `:is()/:where()/:matches()/:any()` and
 * tests each inner branch — if any branch targets global, so does the whole.
 */
function isGlobalCompound(compound: string): boolean {
  const c = compound.trim();
  if (!c) return false;

  const wrap = c.match(/:(?:where|is|matches|any|-moz-any|-webkit-any)\(/i);
  if (wrap && wrap.index !== undefined) {
    const parenStart = wrap.index + wrap[0].length - 1;
    const parenEnd = findMatching(c, parenStart, "(", ")");
    const inner = c.slice(parenStart + 1, parenEnd);
    for (const branch of splitTopLevel(inner, ",")) {
      if (isGlobalSelector(branch)) return true;
    }
    const rest = c.slice(0, wrap.index) + c.slice(parenEnd + 1);
    return rest.trim() ? isGlobalCompound(rest) : false;
  }

  // The leading type capture is the FULL identifier (`[a-zA-Z][\w-]*`), so an
  // element-name match can never be a mere prefix of a longer ident: `bodyfoo`
  // captures as `"bodyfoo"` (no match), only a real `body`/`html` subject hits.
  const typeMatch = c.match(/^([a-zA-Z][\w-]*)/);
  const type = typeMatch ? typeMatch[1].toLowerCase() : "";
  if (type === "html" || type === "body") return true;
  // Match the real `:root` pseudo-class only — the char after `root` must not
  // be `[\w-]`, so `:root-thing` (a custom ident) is NOT treated as global.
  // Mirrors the backend gate's `/:root(?![\w-])/i` so all three surfaces agree.
  if (/:root(?![\w-])/i.test(c)) return true;
  if (isBareUniversal(c)) return true;
  return false;
}

/** Last compound of a complex selector (its subject), split on top-level combinators. */
function getSubjectCompound(selector: string): string {
  let depth = 0;
  let current = "";
  let last = "";
  let i = 0;
  const flush = () => {
    if (current.trim()) last = current.trim();
    current = "";
  };
  while (i < selector.length) {
    const ch = selector[i];
    if (ch === "/" && selector[i + 1] === "*") {
      const stop = scanComment(selector, i);
      current += selector.slice(i, stop);
      i = stop;
      continue;
    }
    if (ch === '"' || ch === "'") {
      const stop = scanString(selector, i);
      current += selector.slice(i, stop);
      i = stop;
      continue;
    }
    if (ch === "(" || ch === "[") {
      depth++;
      current += ch;
      i++;
      continue;
    }
    if (ch === ")" || ch === "]") {
      depth = Math.max(0, depth - 1);
      current += ch;
      i++;
      continue;
    }
    if (depth === 0 && (ch === ">" || ch === "+" || ch === "~" || /\s/.test(ch))) {
      flush();
      i++;
      continue;
    }
    current += ch;
    i++;
  }
  flush();
  return last;
}

/** A full selector targets global scope when its subject (last compound) does. */
function isGlobalSelector(selector: string): boolean {
  return isGlobalCompound(getSubjectCompound(selector));
}

/**
 * Scope one comma-separated selector list to the playground. Each selector is
 * prefixed individually; selectors that target global scope are dropped and
 * recorded. Returns the rebuilt list, or "" when every selector was dropped
 * (signalling the caller to drop the whole rule).
 */
function scopeSelectorList(selectorList: string, violations: CssScopeViolation[]): string {
  const kept: string[] = [];
  for (const raw of splitTopLevel(selectorList, ",")) {
    const sel = raw.trim();
    if (!sel) continue;
    if (sel.startsWith(PLAYGROUND_SCOPE)) {
      kept.push(sel);
      continue;
    }
    if (isGlobalSelector(sel)) {
      violations.push({
        selector: sel,
        reason:
          "targets global scope (:root/html/body/*); its declarations (including --custom-properties) would escape #playground",
      });
      continue;
    }
    kept.push(`${PLAYGROUND_SCOPE} ${sel}`);
  }
  return kept.join(", ");
}

/** Transform a single `prelude { inner }` rule. Returns "" when the rule is fully dropped. */
function transformRule(prelude: string, inner: string, violations: CssScopeViolation[]): string {
  const trimmed = prelude.trim();

  if (trimmed.startsWith("@")) {
    const atName = (trimmed.match(/^@([\w-]+)/)?.[1] || "").toLowerCase();
    if (NESTED_RULE_AT_RULES.has(atName)) {
      // Body is a rule list — recurse so nested selectors get scoped.
      return `${prelude}{${transformRuleList(inner, violations)}}`;
    }
    // @keyframes / @font-face / unknown at-rules with a block: emit verbatim.
    // Their inner "selectors" are keyframe stops or descriptors, not real
    // selectors, and they cannot reach outside the canvas on their own.
    return `${prelude}{${inner}}`;
  }

  // Qualified rule. The body is emitted verbatim: declarations pass through and
  // any natively-nested rules are already confined by the scoped parent.
  const leadingLen = prelude.length - prelude.trimStart().length;
  const leading = prelude.slice(0, leadingLen);
  const scoped = scopeSelectorList(trimmed, violations);
  if (!scoped) return "";
  return `${leading}${scoped} {${inner}}`;
}

/**
 * Walk a rule list (top-level stylesheet or the body of a conditional group
 * at-rule). Selectors are scoped, global-scope rules dropped, and stray
 * top-level custom-property declarations (which would otherwise leak to
 * document scope) are removed.
 */
function transformRuleList(css: string, violations: CssScopeViolation[]): string {
  let out = "";
  let buffer = "";
  let i = 0;
  const len = css.length;
  while (i < len) {
    const ch = css[i];
    if (ch === "/" && css[i + 1] === "*") {
      const stop = scanComment(css, i);
      buffer += css.slice(i, stop);
      i = stop;
      continue;
    }
    if (ch === '"' || ch === "'") {
      const stop = scanString(css, i);
      buffer += css.slice(i, stop);
      i = stop;
      continue;
    }
    if (ch === "{") {
      const close = findMatching(css, i, "{", "}");
      const inner = css.slice(i + 1, close);
      out += transformRule(buffer, inner, violations);
      buffer = "";
      i = close + 1;
      continue;
    }
    if (ch === ";") {
      const stmt = buffer + ";";
      buffer = "";
      const t = stmt.trim();
      if (t.startsWith("--")) {
        // A custom property declared outside any selector resolves at document
        // scope — never allow it above the canvas.
        violations.push({
          selector: t,
          reason: "custom property declared outside any selector — would apply above #playground",
        });
      } else {
        // At-rule statements (@import / @charset / @namespace / @layer name;) preserved.
        out += stmt;
      }
      i++;
      continue;
    }
    buffer += ch;
    i++;
  }
  out += buffer;
  return out;
}

/** Core pass shared by {@link scopeToPlayground} and {@link findCssScopeViolations}. */
function processCss(css: string): { css: string; violations: CssScopeViolation[] } {
  const violations: CssScopeViolation[] = [];
  const scoped = transformRuleList(css, violations);
  return { css: scoped, violations };
}

/**
 * Detect — without modifying the CSS — every selector that would escape the
 * playground scope: selectors targeting `:root`/`html`/`body`/`*`, and
 * custom-property declarations placed above the canvas. Shares its rule set
 * with {@link scopeToPlayground} so an upload-time gate can reason identically.
 */
export function findCssScopeViolations(css: string): CssScopeViolation[] {
  return processCss(css).violations;
}

/**
 * Confine an uploaded component's stylesheet to `#playground`.
 *
 * Tokenizer-based (not regex-only) so it is robust against multi-line/comma
 * selector lists, minified CSS, nested at-rules, comments and strings:
 *   - Every selector in a comma list is prefixed with `#playground`
 *     individually, even across newlines.
 *   - Selectors targeting global scope (`:root`/`html`/`body`/`*`, including
 *     `:is()/:where()` wrappers and leading combinators) are dropped so an
 *     uploaded component can never repaint the editor chrome; an emptied rule
 *     is removed entirely.
 *   - `@media`/`@supports`/`@layer`/`@container` bodies are recursed into so
 *     their nested selectors are scoped; `@keyframes`/`@font-face` are left
 *     intact; other at-rule statements are preserved.
 */
export function scopeToPlayground(css: string, componentKey?: string): string {
  logger.info.function("scopeToPlayground:start", {
    componentKey,
    length: css.length,
  });
  const { css: scoped, violations } = processCss(css);
  if (violations.length > 0) {
    logger.info.state("scopeToPlayground:neutralizedGlobalScope", {
      componentKey,
      count: violations.length,
      violations,
    });
  }
  return scoped;
}

function injectStylesheet(css: string, key: string): void {
  if (!css.trim()) return;

  const scopedCss = scopeToPlayground(css, key);
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
