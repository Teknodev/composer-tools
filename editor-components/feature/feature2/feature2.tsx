import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature2.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Box = {
  title: JSX.Element;
  description: JSX.Element;
  icon: string;
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
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaGlobe",
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
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "SiAltiumdesigner",
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
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "CgIfDesign",
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
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaRegNewspaper",
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
  }

  getName(): string {
    return "Feature 2";
  }

  render() {
    const items = this.castToObject<Box[]>("items");
    const itemCount: number = this.getPropValue("itemCount");
    const showBadge = !!this.getPropValue("showBadge");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.ListGrid gridCount={{ pc: itemCount }} className={this.decorateCSS("wrapper")}>
            {items.map((item: Box, index: number) => {
              const titleExist = !!this.castToString(item.title);
              const descExist = !!this.castToString(item.description);
              const iconExist = !!item.icon;

              if (iconExist || titleExist || descExist) {
                return (
                  <Base.VerticalContent
                    key={index}
                    className={`
                      ${this.decorateCSS("item")}
                      ${(
                        (index % itemCount === 3) ||
                        (items[index + 1] && !items[index + 1]?.icon))
                        ? this.decorateCSS("remove-line")
                        : ""
                      }
                    `}
                  >
                    {iconExist && (
                      <>
                        {showBadge && (
                          <span className={this.decorateCSS("item-index")}>{index + 1}</span>
                        )}
                        <ComposerIcon
                          name={item.icon}
                          propsIcon={{ className: this.decorateCSS("icon") }}
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
                  </Base.VerticalContent>
                );
              }
              return null;
            })}
          </Base.ListGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature2;
