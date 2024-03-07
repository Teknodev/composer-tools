import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature1.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type ICircleBoxes = {
  title: string;
  description: string;
  icon: string;
};
class Feature1 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "circle-boxes-content",
      displayer: "Circle Boxes Content",
      value: [
        {
          type: "object",
          key: "circle-boxes",
          displayer: "Circle Boxes",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Elon Musk",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Elon Musk is a well-known entrepreneur, inventor, and engineer who was born in South Africa in 1971. He is the CEO of several successful companies, including SpaceX, Tesla Inc., Neuralink, and The Boring Company.",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value:
                "FaQuestion",
            },
          ],
        },
        {
          type: "object",
          key: "circle-boxes",
          displayer: "Circle Boxes",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Mark Zuckerberg",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Mark Zuckerberg is a technology entrepreneur and the co-founder of Facebook, one of the world's largest social media platforms. He was born on May 14, 1984, in New York, United States. Zuckerberg founded Facebook.",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value:
                "FaQuestion",
            },
          ],
        },
        {
          type: "object",
          key: "circle-boxes",
          displayer: "Circle Boxes",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Jeff Bezos",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Under Bezos' leadership, Amazon.com has grown into one of the world's most valuable companies, with a market capitalization of over $1 trillion. Bezos has also become one of the wealthiest people in the world, with a net worth of over $100 billion.",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value:
                "FaQuestion",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 3,
      max: 3
    });
    this.addProp({
      type: "select",
      key: "iconShape",
      displayer: "selectedShape",
      value: "Circle",
      additionalParams: {
        selectItems: ["Circle","Square"],
      } 
    });
  }

  getName(): string {
    return "Feature 1";
  }

  render() {
    const iconShape = this.getPropValue("iconShape");
    
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {this.castToObject<ICircleBoxes[]>("circle-boxes-content").map(
            (circlebox: ICircleBoxes, index: number) => (
              <div
                className={this.decorateCSS("card-item-count")}
                style={{
                  width: 90 / this.getPropValue("itemCount") + "%",
                }}
                key={index}
              >
                  <div className={this.decorateCSS(iconShape.toLowerCase())}>
                    <div className={this.decorateCSS("icon-background")}>
                      <ComposerIcon
                        propsIcon={{className: this.decorateCSS("icon")}}
                        name={circlebox.icon}
                      />
                    </div>
                    <h3 className={this.decorateCSS("title")}>{circlebox.title}</h3>
                    <p className={this.decorateCSS("long-text")}>
                      {circlebox.description}
                    </p>
                  </div>
              </div>
            )
          )}
        </div>
      </div>
    );
  }

}

export default Feature1;
