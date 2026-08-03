import { describe, it, expect, vi } from "vitest";
import { render, act } from "@testing-library/react";
import * as React from "react";

// ComposerSlider wraps react-slick, which needs ResizeObserver / real layout
// machinery jsdom doesn't provide. HeroSection1 itself builds every slide's
// markup up front and hands it to ComposerSlider as `children` — mocking the
// slider to a transparent passthrough still exercises 100% of HeroSection1's
// own render logic (the thing under test) while sidestepping react-slick's
// jsdom limitations.
vi.mock("composer-tools/composer-base-components/slider/slider", () => ({
  default: React.forwardRef(function MockComposerSlider(props: any, ref: any) {
    React.useImperativeHandle(ref, () => ({ slickGoTo: vi.fn() }));
    return <div data-testid="mock-slider">{props.children}</div>;
  }),
}));

import HeroSection1 from "composer-tools/editor-components/hero-section/hero-section1/hero-section1";

describe("HeroSection1", () => {
  it("renders without throwing", () => {
    expect(() => render(<HeroSection1 />)).not.toThrow();
  });

  it("renders the first slider item's title text", () => {
    const { container } = render(<HeroSection1 />);
    // Default seed data's first slide title is "FORWARD" (see hero-section1.tsx).
    expect(container.textContent).toContain("FORWARD");
  });

  it("marks only the first (active, not-yet-slid) slide with is-entering + is-initial, and no others", () => {
    const { container } = render(<HeroSection1 />);

    const items = container.querySelectorAll(".return-container");
    expect(items.length).toBe(5); // 5 seeded sliders

    items.forEach((item, index) => {
      const cls = item.className;
      if (index === 0) {
        expect(cls).toMatch(/\bis-entering\b/);
        expect(cls).toMatch(/\bis-initial\b/);
      } else {
        expect(cls).not.toMatch(/\bis-entering\b/);
        expect(cls).not.toMatch(/\bis-initial\b/);
      }
      // is-leaving never applies pre-interaction (leavingTab starts null).
      expect(cls).not.toMatch(/\bis-leaving\b/);
    });
  });

  it("does NOT apply the dark modifier when background-layout holds an image", () => {
    const { container } = render(<HeroSection1 />);

    const title = container.querySelector(".title");
    const subtitle = container.querySelector(".subtitle");
    const sliderNumber = container.querySelector(".slider-number");

    expect(title).not.toBeNull();
    expect(subtitle).not.toBeNull();
    expect(sliderNumber).not.toBeNull();

    expect(title!.className).not.toMatch(/\bdark\b/);
    expect(subtitle!.className).not.toMatch(/\bdark\b/);
    expect(sliderNumber!.className).not.toMatch(/\bdark\b/);
  });

  it("applies the dark modifier to title/subtitle/slider-number when no background-layout media is set", () => {
    const ref = React.createRef<any>();
    const { container } = render(<HeroSection1 ref={ref} />);

    act(() => {
      ref.current.setProp("background-layout", null);
    });

    const title = container.querySelector(".title");
    const subtitle = container.querySelector(".subtitle");
    const sliderNumber = container.querySelector(".slider-number");

    expect(title).not.toBeNull();
    expect(subtitle).not.toBeNull();
    expect(sliderNumber).not.toBeNull();

    expect(title!.className).toMatch(/\bdark\b/);
    expect(subtitle!.className).toMatch(/\bdark\b/);
    expect(sliderNumber!.className).toMatch(/\bdark\b/);
  });
});
