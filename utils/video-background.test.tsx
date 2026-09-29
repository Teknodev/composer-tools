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

  afterEach(() => cleanup());

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

  it("injects no video into an element without data-video-bg", () => {
    const { container } = render(<div data-testid="plain" />);
    const el = container.querySelector<HTMLElement>("[data-testid='plain']")!;
    el.style.setProperty(VIDEO_BG_VARS.URL, VIDEO_URL);

    applyVideoBackgrounds(document);

    expect(el.querySelector("video[data-bg-video]")).toBeNull();
  });
});
