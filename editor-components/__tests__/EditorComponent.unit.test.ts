import { describe, it, expect } from "vitest";
import {
  generateId,
  TypeUsableComponentProps,
} from "../EditorComponent";

// ── generateId ────────────────────────────────────────────────

describe("generateId", () => {
  it("returns key-<number> format", () => {
    const id = generateId("title");
    expect(id).toMatch(/^title-\d+$/);
  });

  it("generates different IDs on successive calls", () => {
    const ids = new Set(Array.from({ length: 50 }, () => generateId("title")));
    // With 50 calls and Math.random() * 1e9, collisions are near-impossible
    expect(ids.size).toBe(50);
  });
});

// ── attachPropId (tested indirectly via constructor) ──────────

/**
 * attachPropId is private, so we test it through the public contract:
 * after construction, every string prop in an array should have a unique id.
 *
 * We import the base Component class and create a minimal concrete subclass.
 */

// Helper: build a raw items prop structure (no IDs yet — simulating store data)
function buildItemsArrayProp(): TypeUsableComponentProps {
  return {
    type: "array",
    key: "items",
    displayer: "Items",
    value: [
      {
        type: "object",
        key: "item",
        displayer: "Item",
        value: [
          { type: "string", key: "title", displayer: "Title", value: "<p>Title A</p>" },
          { type: "string", key: "description", displayer: "Desc", value: "<p>Desc A</p>" },
        ] as TypeUsableComponentProps[],
      } as TypeUsableComponentProps,
      {
        type: "object",
        key: "item",
        displayer: "Item",
        value: [
          { type: "string", key: "title", displayer: "Title", value: "<p>Title B</p>" },
          { type: "string", key: "description", displayer: "Desc", value: "<p>Desc B</p>" },
        ] as TypeUsableComponentProps[],
      } as TypeUsableComponentProps,
      {
        type: "object",
        key: "item",
        displayer: "Item",
        value: [
          { type: "string", key: "title", displayer: "Title", value: "<p>Title C</p>" },
          { type: "string", key: "description", displayer: "Desc", value: "<p>Desc C</p>" },
        ] as TypeUsableComponentProps[],
      } as TypeUsableComponentProps,
    ] as TypeUsableComponentProps[],
  } as TypeUsableComponentProps;
}

// Helper: extract all title IDs from the items array
function extractTitleIds(itemsProp: TypeUsableComponentProps): string[] {
  return (itemsProp.value as TypeUsableComponentProps[]).map((item) => {
    const titleChild = (item.value as TypeUsableComponentProps[]).find(
      (c) => c.key === "title"
    );
    return titleChild?.id || "";
  });
}

describe("attachPropId via constructor — array item ID uniqueness", () => {
  it("assigns unique IDs to all title props across array items", async () => {
    // Dynamically import Component to avoid heavy side-effects at module level
    const { Component } = await import("../EditorComponent");

    // Create a minimal subclass that adds an items array prop
    class TestComponent extends Component {
      static getName() { return "TestComponent"; }
      getName() { return "TestComponent"; }
      getInstanceName() { return "TestComponent"; }
      
      constructor(props: any) {
        super(props, { main: {} });
        this.addProp(buildItemsArrayProp());
      }

      render() {
        return null as any;
      }
    }

    // Simulate a "store-loaded" component: pass props that already exist
    // but with NO IDs (simulating the global component store scenario)
    const storeProps = [buildItemsArrayProp()];

    const instance = new (TestComponent as any)({ props: storeProps });
    const props = instance.getProps() as TypeUsableComponentProps[];
    const itemsProp = props.find((p: any) => p.key === "items");

    expect(itemsProp).toBeDefined();

    const titleIds = extractTitleIds(itemsProp!);

    // All 3 title IDs should be non-empty
    titleIds.forEach((id) => expect(id).toBeTruthy());

    // All 3 title IDs should be UNIQUE (the bug was they were all the same)
    const uniqueIds = new Set(titleIds);
    expect(uniqueIds.size).toBe(3);
  });

  it("generates different IDs for two instances from the same store props", async () => {
    const { Component } = await import("../EditorComponent");

    class TestComponent extends Component {
      static getName() { return "TestComponent"; }
      getName() { return "TestComponent"; }
      getInstanceName() { return "TestComponent"; }
      
      constructor(props: any) {
        super(props, { main: {} });
        this.addProp(buildItemsArrayProp());
      }

      render() {
        return null as any;
      }
    }

    // Instance 1
    const instance1 = new (TestComponent as any)({ props: [buildItemsArrayProp()] });
    const props1 = instance1.getProps() as TypeUsableComponentProps[];
    const ids1 = extractTitleIds(props1.find((p: any) => p.key === "items")!);

    // Instance 2 (separate store props clone)
    const instance2 = new (TestComponent as any)({ props: [buildItemsArrayProp()] });
    const props2 = instance2.getProps() as TypeUsableComponentProps[];
    const ids2 = extractTitleIds(props2.find((p: any) => p.key === "items")!);

    // IDs within each instance should be unique (3 distinct IDs)
    expect(new Set(ids1).size).toBe(3);
    expect(new Set(ids2).size).toBe(3);

    // IDs between instances should be different (all 6 distinct)
    const allIds = [...ids1, ...ids2];
    expect(new Set(allIds).size).toBe(6);
  });
});
