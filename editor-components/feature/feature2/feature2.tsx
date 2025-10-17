import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature2.module.scss";
import { Base } from "../../../composer-base-components/base/base";


type Box = {
  title: React.JSX.Element;
  description: React.JSX.Element;
  icon: { type: "icon"; name: string };
};

class Feature2 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      key: "items",
      displayer: "List Items",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Consultation and initial meeting",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "The architecture company meets with the client to discuss their needs, budget, and timeline. They may also visit the site to get a better understanding of the project."
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              value: {
                type: "icon",
                name: "FaGlobe",
              },
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Concept design",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Based on the client's requirements, the architecture company creates a concept design that outlines the overall vision for the project. This may include sketches, 3D models, or computer-generated renderings."
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              value: {
                type: "icon",
                name: "SiAltiumdesigner",
              },
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Design development",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Once the client approves the concept design, the architecture company begins to develop detailed drawings and plans. This may involve collaborating with engineers, contractors, and other specialists to ensure that the design is feasible."
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              value: {
                type: "icon",
                name: "CgIfDesign",
              },
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Permitting and approvals",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Before construction can begin, the architecture company must obtain the necessary permits and approvals from local authorities. This may involve submitting plans and documents for review and responding to any questions or co"
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              value: {
                type: "icon",
                name: "FaRegNewspaper",
              },
            },
          ],
        }
      ],
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 4,
      max: 4
    });

    this.addProp({
      type: "boolean",
      key: "showBadge",
      displayer: "Show Badge",
      value: true
    });

    this.addProp({
      type: "boolean",
      key: "showLine",
      displayer: "Show Line",
      value: true,
    });

    window.addEventListener('resize', () => {this.setComponentState("windowWidth", window.innerWidth)});
  }

  static getName(): string {
    return "Feature 2";
  }

  getItemCount(): number {
    if (this.getComponentState("windowWidth") <= 1024) return 2;
    else if (this.getComponentState("windowWidth") <= 896) return 1;

    return this.getPropValue("itemCount");
  }

  render() {
    const items = this.castToObject<Box[]>("items");
    const itemCount: number = this.getItemCount();
    const showBadge = !!this.getPropValue("showBadge");
    const showLine = !!this.getPropValue("showLine");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.ListGrid gridCount={{ pc: itemCount }} className={this.decorateCSS("wrapper")}>
            {items.map((item: Box, index: number) => {
              const titleExist = !!this.castToString(item.title);
              const descExist = !!this.castToString(item.description);
              const iconExist = !!item.icon?.name;
              const shouldRender = titleExist || descExist || iconExist;

              if (!shouldRender) return null;

              return (
                <div
                  key={index}
                  className={`
                      ${this.decorateCSS("item")}
                      ${!showLine ?
                      this.decorateCSS("remove-line")
                      : (((index + 1) % itemCount === 0) ||
                        (items[index + 1] && !items[index + 1]?.icon?.name))
                        ? this.decorateCSS("remove-line")
                        : ""}
                    `}
                >
                  {iconExist && (
                    <>
                      {showBadge && (
                        <Base.P className={this.decorateCSS("item-index")}>{index + 1}</Base.P>
                      )}
                      <Base.Media
                        value={item.icon}
                        className={this.decorateCSS("icon")}
                      />
                    </>
                  )}
                  {titleExist && (
                    <Base.H2 className={this.decorateCSS("title")}>
                      {item.title}
                    </Base.H2>
                  )}
                  {descExist && (
                    <Base.P className={this.decorateCSS("description")}>
                      {item.description}
                    </Base.P>
                  )}
                </div>
              );
            })}
          </Base.ListGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature2;
