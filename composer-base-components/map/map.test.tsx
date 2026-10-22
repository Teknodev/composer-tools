import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import React from "react";

// The interactive map needs a Google Maps APIProvider; this test is about which map renders.
vi.mock("@vis.gl/react-google-maps", () => ({
  Map: ({ children }: any) => <div data-testid="interactive-map">{children}</div>,
  Marker: () => null,
  useMap: () => null,
}));

import ComposerMap, { ComposerMapsContext } from "./map";

const markers = [
  { lat: 41, lng: 29, icon: { url: "", scaledSize: { width: 32, height: 32 } } },
  { lat: 43, lng: 31, icon: { url: "", scaledSize: { width: 32, height: 32 } } },
];

describe("ComposerMap", () => {
  it("without the site owner's key, renders Google's keyless embed centred on the markers", () => {
    const { container, queryByTestId } = render(
      <ComposerMapsContext.Provider value={{ embedOnly: true }}>
        <ComposerMap markers={markers} className="m" defaultZoom={9} />
      </ComposerMapsContext.Provider>
    );
    const iframe = container.querySelector("iframe");
    expect(iframe?.getAttribute("src")).toBe("https://maps.google.com/maps?q=42,30&z=9&output=embed");
    expect(iframe?.className).toBe("m");
    expect(queryByTestId("interactive-map")).toBeNull();
  });

  it("renders nothing to embed without markers", () => {
    const { container } = render(
      <ComposerMapsContext.Provider value={{ embedOnly: true }}>
        <ComposerMap markers={[]} className="m" />
      </ComposerMapsContext.Provider>
    );
    expect(container.querySelector("iframe")).toBeNull();
  });

  it("is interactive by default (the editor, or a site with its own key)", () => {
    const { container, getByTestId } = render(<ComposerMap markers={markers} className="m" />);
    expect(getByTestId("interactive-map")).toBeTruthy();
    expect(container.querySelector("iframe")).toBeNull();
  });
});
