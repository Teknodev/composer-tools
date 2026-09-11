import { describe, expect, it, beforeEach } from "vitest";
import ComponentsRegistery from "../ComponentRegistery";
import { CATEGORIES } from "../EditorComponent";

/**
 * A Block Builder save mints a new custom-component version with a new id, and
 * the list endpoint answers with one entry per name (plus versions a page still
 * references). registerDynamic only appends, so without a prune the superseded
 * version stayed in the picker for the rest of the session — both v1 and v2
 * showed until the tab was reloaded.
 */
const makeClass = (name: string, version: number, id: string) => {
  const C = class {
    static getName() { return name; }
    static getCategory() { return CATEGORIES.CUSTOM; }
  } as any;
  C.customComponentId = id;
  C.customComponentVersion = version;
  return C;
};

describe("ComponentsRegistery.pruneCustomComponents", () => {
  let registry: any;
  const listed = () => registry.getComponents()[CATEGORIES.CUSTOM];

  beforeEach(() => {
    registry = new (ComponentsRegistery as any)();
  });

  it("drops a version the authoritative list no longer carries", () => {
    registry.registerDynamic([makeClass("deneme", 1, "id-v1")], CATEGORIES.CUSTOM);
    registry.registerDynamic([makeClass("deneme", 2, "id-v2")], CATEGORIES.CUSTOM);
    expect(listed()).toHaveLength(2);

    const removed = registry.pruneCustomComponents(new Set(["id-v2"]));

    expect(removed.map((c: any) => c.customComponentVersion)).toEqual([1]);
    expect(listed()).toHaveLength(1);
    expect(listed()[0].customComponentVersion).toBe(2);
  });

  it("keeps an old version the list still carries (a page references it)", () => {
    registry.registerDynamic([makeClass("deneme", 1, "id-v1")], CATEGORIES.CUSTOM);
    registry.registerDynamic([makeClass("deneme", 2, "id-v2")], CATEGORIES.CUSTOM);

    registry.pruneCustomComponents(new Set(["id-v1", "id-v2"]));

    expect(listed()).toHaveLength(2);
  });

  it("leaves entries that carry no customComponentId", () => {
    const orphan = class { static getName() { return "x"; } static getCategory() { return CATEGORIES.CUSTOM; } } as any;
    registry.registerDynamic([orphan], CATEGORIES.CUSTOM);

    registry.pruneCustomComponents(new Set(["id-v2"]));

    expect(listed()).toHaveLength(1);
  });
});
