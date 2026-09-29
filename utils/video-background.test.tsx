import React from "react";
import { render, cleanup } from "@testing-library/react";
import { vi, describe, it, expect, beforeAll, afterEach } from "vitest";
import { Base } from "../composer-base-components/base/base";
import { applyVideoBackgrounds, VIDEO_BG_VARS } from "./video-background";

const VIDEO_URL = "https://example.com/background.mp4";

const WRAPPERS: Array<[string, React.ComponentType<any>, Record<string, unknown>]> = [
  ["MaxContent", Base.MaxContent, {}],
  ["VerticalContent", Base.VerticalContent, {}],
  ["ListGrid", Base.ListGrid, { gridCount: { pc: 3, tablet: 2, phone: 1 } }],
  ["ContainerGrid", Base.ContainerGrid, {}],
  ["GridCell", Base.GridCell, {}],
  ["Card", Base.Card, {}],
  ["Row", Base.Row, {}],
];

const EXISTING_USERS: Array<[string, React.ComponentType<any>]> = [
  ["Container", Base.Container],
  ["H1", Base.H1],
  ["P", Base.P],
];

const RULE_CLASS = "video-bg-rule-target";
const CORE_WRAPPERS = WRAPPERS.filter(([name]) => ["MaxContent", "VerticalContent", "Card"].includes(name));

function setVideoRule(styleEl: HTMLStyleElement, url: string) {
  styleEl.textContent = `.${RULE_CLASS} { ${VIDEO_BG_VARS.URL}: ${url}; }`;
}

function renderWrapper(Wrapper: React.ComponentType<any>, props: Record<string, unknown> = {}) {
  const { container } = render(
    <Wrapper data-testid="target" {...props}>
      <span>content</span>
    </Wrapper>
  );
  return container.querySelector<HTMLElement>("[data-testid='target']")!;
}

describe("video background on Base wrappers", () => {
  beforeAll(() => {
    vi.spyOn(HTMLMediaElement.prototype, "play").mockResolvedValue(undefined);
    vi.spyOn(HTMLMediaElement.prototype, "pause").mockImplementation(() => undefined);
  });

  afterEach(() => {
    cleanup();
    document.head.querySelectorAll("style[data-video-rule]").forEach((el) => el.remove());
  });

  it.each(CORE_WRAPPERS)("%s gets exactly one video from a rule holding --bg-video-url", (_name, Wrapper, props) => {
    const styleEl = document.createElement("style");
    styleEl.setAttribute("data-video-rule", "");
    document.head.appendChild(styleEl);
    setVideoRule(styleEl, VIDEO_URL);
    const el = renderWrapper(Wrapper, { ...props, className: RULE_CLASS });

    applyVideoBackgrounds(document);
    applyVideoBackgrounds(document);

    expect(el.querySelectorAll("video[data-bg-video]")).toHaveLength(1);
    expect(el.querySelector(":scope > video[data-bg-video]")!.getAttribute("src")).toBe(VIDEO_URL);
    expect(el.style.isolation).toBe("isolate");
  });

  it.each(CORE_WRAPPERS)("%s loses the video and injected styles when the rule URL is cleared", (_name, Wrapper, props) => {
    const styleEl = document.createElement("style");
    styleEl.setAttribute("data-video-rule", "");
    document.head.appendChild(styleEl);
    setVideoRule(styleEl, VIDEO_URL);
    const el = renderWrapper(Wrapper, { ...props, className: RULE_CLASS });
    applyVideoBackgrounds(document);
    expect(el.querySelector("video[data-bg-video]")).not.toBeNull();

    styleEl.textContent = "";
    applyVideoBackgrounds(document);

    expect(el.querySelector("video[data-bg-video]")).toBeNull();
    expect(el.style.isolation).toBe("");
    expect(el.style.position).toBe("");
    expect(el.dataset.videoBgIsolated).toBeUndefined();
    expect(el.dataset.videoBgPositioned).toBeUndefined();
  });

  it.each(WRAPPERS)("%s renders the data-video-bg attribute on its root", (_name, Wrapper, props) => {
    const el = renderWrapper(Wrapper, props);
    expect(el.hasAttribute("data-video-bg")).toBe(true);
  });

  it.each(WRAPPERS)("%s receives an injected background video", (_name, Wrapper, props) => {
    const el = renderWrapper(Wrapper, props);
    el.style.setProperty(VIDEO_BG_VARS.URL, VIDEO_URL);

    applyVideoBackgrounds(document);

    const video = el.querySelector<HTMLVideoElement>(":scope > video[data-bg-video]");
    expect(video).not.toBeNull();
    expect(video!.getAttribute("src")).toBe(VIDEO_URL);
  });

  it("lets a caller override the data-video-bg attribute", () => {
    const el = renderWrapper(Base.MaxContent, { "data-video-bg": "custom" });
    expect(el.getAttribute("data-video-bg")).toBe("custom");
  });

  it("layers the video below the content inside an isolated stacking context", () => {
    const el = renderWrapper(Base.Card);
    el.style.setProperty(VIDEO_BG_VARS.URL, VIDEO_URL);

    applyVideoBackgrounds(document);

    const video = el.querySelector<HTMLVideoElement>(":scope > video[data-bg-video]")!;
    expect(video.style.zIndex).toBe("-1");
    expect(el.style.isolation).toBe("isolate");
    expect(el.dataset.videoBgIsolated).toBe("true");
  });

  it("removes the video and the isolation when the URL is cleared", () => {
    const el = renderWrapper(Base.Row);
    el.style.setProperty(VIDEO_BG_VARS.URL, VIDEO_URL);
    applyVideoBackgrounds(document);

    el.style.removeProperty(VIDEO_BG_VARS.URL);
    applyVideoBackgrounds(document);

    expect(el.querySelector("video[data-bg-video]")).toBeNull();
    expect(el.style.isolation).toBe("");
    expect(el.dataset.videoBgIsolated).toBeUndefined();
  });

  it("keeps an isolation that the element already declares", () => {
    const el = renderWrapper(Base.GridCell, { style: { isolation: "isolate" } });
    el.style.setProperty(VIDEO_BG_VARS.URL, VIDEO_URL);
    applyVideoBackgrounds(document);

    el.style.removeProperty(VIDEO_BG_VARS.URL);
    applyVideoBackgrounds(document);

    expect(el.style.isolation).toBe("isolate");
    expect(el.dataset.videoBgIsolated).toBeUndefined();
  });

  it.each(EXISTING_USERS)("%s keeps its content after one background video layered below it", (_name, Wrapper) => {
    const el = renderWrapper(Wrapper);
    el.style.setProperty(VIDEO_BG_VARS.URL, VIDEO_URL);

    applyVideoBackgrounds(document);
    applyVideoBackgrounds(document);

    const videos = el.querySelectorAll<HTMLVideoElement>(":scope > video[data-bg-video]");
    expect(videos).toHaveLength(1);
    expect(el.firstElementChild).toBe(videos[0]);
    expect(videos[0].nextElementSibling?.textContent).toBe("content");
    expect(videos[0].style.zIndex).toBe("-1");
    expect(videos[0].style.pointerEvents).toBe("none");
    expect(el.style.isolation).toBe("isolate");
  });

  it.each(EXISTING_USERS)("%s keeps its own position and z-index through a video add and clear", (_name, Wrapper) => {
    const el = renderWrapper(Wrapper, { style: { position: "absolute", zIndex: 3 } });
    el.style.setProperty(VIDEO_BG_VARS.URL, VIDEO_URL);
    applyVideoBackgrounds(document);

    expect(el.style.position).toBe("absolute");
    expect(el.style.zIndex).toBe("3");
    expect(el.dataset.videoBgPositioned).toBeUndefined();

    el.style.removeProperty(VIDEO_BG_VARS.URL);
    applyVideoBackgrounds(document);

    expect(el.querySelector("video[data-bg-video]")).toBeNull();
    expect(el.style.position).toBe("absolute");
    expect(el.style.zIndex).toBe("3");
    expect(el.style.isolation).toBe("");
    expect(el.textContent).toBe("content");
  });

  it("injects no video into an element without data-video-bg", () => {
    const { container } = render(<div data-testid="plain" />);
    const el = container.querySelector<HTMLElement>("[data-testid='plain']")!;
    el.style.setProperty(VIDEO_BG_VARS.URL, VIDEO_URL);

    applyVideoBackgrounds(document);

    expect(el.querySelector("video[data-bg-video]")).toBeNull();
  });
});
