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

function buildMediaItemsArrayProp(): TypeUsableComponentProps {
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
          {
            type: "media",
            key: "image",
            displayer: "Image",
            value: { type: "image", url: "https://example.com/image.jpg" },
          },
        ] as TypeUsableComponentProps[],
      } as TypeUsableComponentProps,
    ] as TypeUsableComponentProps[],
  } as TypeUsableComponentProps;
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

  it("preserves cleared nested media props when serializing props", async () => {
    const { Component } = await import("../EditorComponent");

    class TestComponent extends Component {
      static getName() { return "TestComponent"; }
      getName() { return "TestComponent"; }
      getInstanceName() { return "TestComponent"; }

      constructor(props: any) {
        super(props, { main: {} });
        this.addProp(buildMediaItemsArrayProp());
      }

      render() {
        return null as any;
      }
    }

    const instance = new (TestComponent as any)({ props: [buildMediaItemsArrayProp()] });
    const nextItems = JSON.parse(JSON.stringify(instance.getPropValue("items")));

    nextItems[0].value[0].value = null;
    instance.setProp("items", nextItems);

    const props = instance.getProps() as TypeUsableComponentProps[];
    const itemsProp = props.find((p: any) => p.key === "items")!;
    const mediaProp = ((itemsProp.value as TypeUsableComponentProps[])[0].value as TypeUsableComponentProps[])[0];

    expect(mediaProp).toMatchObject({ type: "media", key: "image", value: null });
    expect(JSON.stringify(props)).toContain('"value":null');
  });
});

function buildTestComponentClass(ComponentClass: any) {
  return class TestComponent extends ComponentClass {
    static getName() { return "TestComponent"; }
    getName() { return "TestComponent"; }
    getInstanceName() { return "TestComponent"; }

    constructor(props: any) {
      super(props, { main: {} });
    }

    render() {
      return null as any;
    }
  };
}

function buildProductionTriggerProp(): TypeUsableComponentProps {
  return {
    type: "array",
    key: "cards",
    displayer: "Cards",
    value: [
      {
        type: "object",
        key: "card",
        displayer: "Card",
        value: [
          { type: "string", key: "title", displayer: "Title", value: "<p>Card Title</p>" },
          {
            key: "icon",
            type: "object",
            displayer: "Icon",
            value: { type: "icon", name: "LuRocket" },
          },
        ] as TypeUsableComponentProps[],
      } as TypeUsableComponentProps,
    ] as TypeUsableComponentProps[],
  } as TypeUsableComponentProps;
}

describe("EditorComponent — malformed prop production trigger", () => {
  it("constructs without throwing when a nested prop declares type object but holds a plain object value", async () => {
    const { Component } = await import("../EditorComponent");
    const TestComponent = buildTestComponentClass(Component);

    let instance: any;
    expect(() => {
      instance = new (TestComponent as any)({ props: [buildProductionTriggerProp()] });
    }).not.toThrow();

    const cardsProp = instance.getProps().find((p: any) => p.key === "cards");
    const cardItem = (cardsProp.value as TypeUsableComponentProps[])[0];
    const iconProp = (cardItem.value as TypeUsableComponentProps[]).find(
      (p: any) => p.key === "icon"
    )!;
    const titleProp = (cardItem.value as TypeUsableComponentProps[]).find(
      (p: any) => p.key === "title"
    )!;

    expect(iconProp.malformed).toBe(true);
    expect(iconProp.value).toEqual({ type: "icon", name: "LuRocket" });
    expect(titleProp.id).toBeTruthy();
    expect(instance.getPropValue("title", { parent_object: cardItem.value })).toBeDefined();
  });
});

describe("EditorComponent — malformed array/object values do not throw", () => {
  const malformedValues: Array<{ label: string; value: any }> = [
    { label: "string", value: "not-an-array" },
    { label: "number", value: 42 },
    { label: "null", value: null },
    { label: "undefined", value: undefined },
  ];

  malformedValues.forEach(({ label, value }) => {
    it(`type object with ${label} value never throws in attachPropId, castToObject, or decorateCSS`, async () => {
      const { Component } = await import("../EditorComponent");
      const TestComponent = buildTestComponentClass(Component);

      const malformedProp = {
        type: "object",
        key: "broken",
        displayer: "Broken",
        value,
      } as unknown as TypeUsableComponentProps;

      let instance: any;
      expect(() => {
        instance = new (TestComponent as any)({ props: [malformedProp] });
      }).not.toThrow();

      let castedResult: any;
      expect(() => {
        castedResult = instance.castToObject("broken");
      }).not.toThrow();
      expect(castedResult).toEqual({});

      expect(() => instance.decorateCSS("main")).not.toThrow();

      const brokenProp = instance.getProps().find((p: any) => p.key === "broken");
      expect(brokenProp.malformed).toBe(true);
      expect(brokenProp.value).toBe(value);
    });

    it(`type array with ${label} value never throws in attachPropId, castToObject, or decorateCSS`, async () => {
      const { Component } = await import("../EditorComponent");
      const TestComponent = buildTestComponentClass(Component);

      const malformedProp = {
        type: "array",
        key: "broken",
        displayer: "Broken",
        value,
      } as unknown as TypeUsableComponentProps;

      let instance: any;
      expect(() => {
        instance = new (TestComponent as any)({ props: [malformedProp] });
      }).not.toThrow();

      let castedResult: any;
      expect(() => {
        castedResult = instance.castToObject("broken");
      }).not.toThrow();
      expect(castedResult).toEqual([]);

      expect(() => instance.decorateCSS("main")).not.toThrow();

      const brokenProp = instance.getProps().find((p: any) => p.key === "broken");
      expect(brokenProp.malformed).toBe(true);
      expect(brokenProp.value).toBe(value);
    });
  });

  it("a malformed sibling prop does not break resolution of well-formed siblings", async () => {
    const { Component } = await import("../EditorComponent");
    const TestComponent = buildTestComponentClass(Component);

    const malformedProp = {
      type: "object",
      key: "broken",
      displayer: "Broken",
      value: "not-an-array",
    } as unknown as TypeUsableComponentProps;

    const wellFormedProp: TypeUsableComponentProps = {
      type: "string",
      key: "title",
      displayer: "Title",
      value: "<p>Still Works</p>",
    } as TypeUsableComponentProps;

    let instance: any;
    expect(() => {
      instance = new (TestComponent as any)({ props: [malformedProp, wellFormedProp] });
    }).not.toThrow();

    const titleProp = instance.getProps().find((p: any) => p.key === "title");
    expect(titleProp.malformed).toBeUndefined();
    expect(instance.getPropValue("title", { as_string: true })).toBe("<p>Still Works</p>");
  });
});

describe("EditorComponent — well-formed props are unaffected by hardening", () => {
  function buildWellFormedCardsProp(): TypeUsableComponentProps {
    return {
      type: "array",
      key: "cards",
      displayer: "Cards",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            { type: "string", key: "title", displayer: "Title", value: "<p>Alpha</p>" },
          ] as TypeUsableComponentProps[],
        } as TypeUsableComponentProps,
      ] as TypeUsableComponentProps[],
    } as TypeUsableComponentProps;
  }

  it("assigns ids to every nested prop and leaves malformed unset", async () => {
    const { Component } = await import("../EditorComponent");
    const TestComponent = buildTestComponentClass(Component);

    const instance: any = new (TestComponent as any)({ props: [buildWellFormedCardsProp()] });
    const cardsProp = instance.getProps().find((p: any) => p.key === "cards");
    const cardItem = (cardsProp.value as TypeUsableComponentProps[])[0];
    const titleProp = (cardItem.value as TypeUsableComponentProps[]).find(
      (p: any) => p.key === "title"
    )!;

    expect(cardsProp.malformed).toBeUndefined();
    expect(cardItem.id).toBeTruthy();
    expect(titleProp.id).toBeTruthy();
  });

  it("keeps castToObject output unchanged for well-formed props", async () => {
    const { Component } = await import("../EditorComponent");
    const TestComponent = buildTestComponentClass(Component);

    const instance: any = new (TestComponent as any)({ props: [buildWellFormedCardsProp()] });

    const castedCards = instance.castToObject("cards") as any[];
    expect(castedCards).toHaveLength(1);
    expect(castedCards[0].title).toBeDefined();
  });

  it("includes a well-formed cssClasses entry's class in decorateCSS output", async () => {
    const { Component } = await import("../EditorComponent");
    const TestComponent = buildTestComponentClass(Component);

    const instance: any = new (TestComponent as any)({
      props: [buildWellFormedCardsProp()],
      cssClasses: { main: [{ id: "x", class: "custom-cls" }] },
    });

    const decorated = instance.decorateCSS("main");
    expect(decorated).toContain("custom-cls");
  });
});

describe("EditorComponent — malformed cssClasses entries do not throw in decorateCSS", () => {
  it("excludes a string cssClasses entry from decorateCSS output", async () => {
    const { Component } = await import("../EditorComponent");
    const TestComponent = buildTestComponentClass(Component);

    const instance: any = new (TestComponent as any)({
      props: [],
      cssClasses: { main: "a-string" },
    });

    let decorated = "";
    expect(() => {
      decorated = instance.decorateCSS("main");
    }).not.toThrow();
    expect(decorated).not.toContain("a-string");
  });

  it("excludes a null cssClasses entry from decorateCSS output", async () => {
    const { Component } = await import("../EditorComponent");
    const TestComponent = buildTestComponentClass(Component);

    const instance: any = new (TestComponent as any)({
      props: [],
      cssClasses: { main: null },
    });

    let decorated = "";
    expect(() => {
      decorated = instance.decorateCSS("main");
    }).not.toThrow();
    expect(decorated).not.toContain("null");
  });
});

describe("EditorComponent — state-mutation guards do not throw on malformed values", () => {
  it("setProp does not throw when a prop's state value is a plain object instead of an array", async () => {
    const { Component } = await import("../EditorComponent");
    const TestComponent = buildTestComponentClass(Component);

    const malformedProp = {
      type: "array",
      key: "broken",
      displayer: "Broken",
      value: { not: "an-array" },
    } as unknown as TypeUsableComponentProps;

    const instance: any = new (TestComponent as any)({ props: [malformedProp] });

    expect(() => instance.setProp("broken", [])).not.toThrow();

    const brokenProp = instance.getProps().find((p: any) => p.key === "broken");
    expect(brokenProp.malformed).toBe(true);
    expect(brokenProp.value).toEqual([]);
  });

  it("syncComplexValue does not throw when reached via _syncShadowProps with malformed target values", async () => {
    const { Component } = await import("../EditorComponent");
    const TestComponent = buildTestComponentClass(Component);

    const shapeStateProp = {
      type: "array",
      key: "shape",
      displayer: "Shape",
      value: "not-an-array",
    } as unknown as TypeUsableComponentProps;

    const cardsStateProp: TypeUsableComponentProps = {
      type: "array",
      key: "cards",
      displayer: "Cards",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            { type: "string", key: "title", displayer: "Title", value: "orig" },
          ] as TypeUsableComponentProps[],
        } as TypeUsableComponentProps,
      ] as TypeUsableComponentProps[],
    } as TypeUsableComponentProps;

    const instance: any = new (TestComponent as any)({
      props: [shapeStateProp, cardsStateProp],
    });

    instance.addProp({
      type: "array",
      key: "shape",
      displayer: "Shape",
      value: [{ type: "string", key: "title", displayer: "Title", value: "x" }],
    });
    instance.addProp({
      type: "array",
      key: "cards",
      displayer: "Cards",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [{ type: "string", key: "title", displayer: "Title", value: "x" }],
        },
      ],
    });

    const cardsProp = instance.getProp("cards");
    const cardItem = (cardsProp.value as TypeUsableComponentProps[])[0];
    cardItem.value = "not-an-array";
    cardItem.malformed = undefined;

    expect(() => instance._syncShadowProps()).not.toThrow();

    expect(cardItem.malformed).toBe(true);
  });

  it("_syncShadowProps marks a prop malformed without throwing when its complex value collapses to a non-array", async () => {
    const { Component } = await import("../EditorComponent");
    const TestComponent = buildTestComponentClass(Component);

    const brokenStateProp: TypeUsableComponentProps = {
      type: "array",
      key: "broken",
      displayer: "Broken",
      value: [],
    } as TypeUsableComponentProps;

    const instance: any = new (TestComponent as any)({ props: [brokenStateProp] });

    instance.addProp({
      type: "array",
      key: "broken",
      displayer: "Broken",
      value: [{ type: "string", key: "title", displayer: "Title", value: "x" }],
    });

    const brokenProp = instance.getProp("broken");
    brokenProp.value = "not-an-array";
    brokenProp.malformed = undefined;

    expect(() => instance._syncShadowProps()).not.toThrow();
    expect(instance.getProp("broken").malformed).toBe(true);
  });
});
