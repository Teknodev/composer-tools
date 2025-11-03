import * as React from "react";
import { BaseList } from "../../EditorComponent";
import styles from "./list4.module.scss";
import { Base } from "../../../composer-base-components/base/base";


type Card = {
  description: React.JSX.Element;
  icon: React.JSX.Element;
  title: React.JSX.Element;
};

class list4 extends BaseList {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Our Services",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "We are delivering beautiful digital products for you.",
    });

    this.addProp({
      type: "array",
      key: "content-card",
      displayer: "Content Card",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Creative Idea",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Web design encompasses many different skills and disciplines in the production of all web.",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              value: {
                type: "icon",
                name: "FaTooth",
              },
              additionalParams: {
                availableTypes: ["icon"],
              },
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "High Creative Minds",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Web design encompasses many different skills and disciplines in the production of all web.",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              value: {
                type: "icon",
                name: "FaPencilAlt",
              },
              additionalParams: {
                availableTypes: ["icon"],
              },
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Business Planning",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Web design encompasses many different skills and disciplines in the production of all web.",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              value: {
                type: "icon",
                name: "FaSuitcaseRolling",
              },
              additionalParams: {
                availableTypes: ["icon"],
              },
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 3,
    });
    this.addProp({
      type: "boolean",
      key: "showIndex",
      displayer: "Show Index",
      value: true,
    });

    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2", "animate3", "animate4"]
      }
    });
  }

  static getName(): string {
    return "List 4";
  }

  render() {
    return (
      <Base.Container className={this.decorateCSS("container")} >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("header")}>
            <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
              {this.getPropValue("subtitle") as any}
            </Base.SectionSubTitle>
            <Base.SectionTitle className={this.decorateCSS("title")}>
              {this.getPropValue("title") as any}
            </Base.SectionTitle>
          </Base.VerticalContent>
          <Base.ListGrid className={this.decorateCSS("services-grid")} gridCount={{ pc: this.getPropValue("itemCount"), tablet: 2 }}>
            {this.castToObject<Card[]>("content-card").map(
              (card: any, index: number) => (
                <div
                  key={index}
                  className={this.decorateCSS("service-item")}
                  data-animation={this.getPropValue("hoverAnimation").join(" ")}
                >
                  <div className={this.decorateCSS("border-frame")}>
                    <div className={this.decorateCSS("border-left")}></div>
                    <div className={this.decorateCSS("border-top")}></div>
                    <div className={this.decorateCSS("border-right")}></div>
                    <div className={this.decorateCSS("border-bottom")}></div>
                  </div>
                  <div className={`${this.decorateCSS("item-index")} ${this.getPropValue("showIndex") && this.decorateCSS("index")}`}
                    data-animation={this.getPropValue("hoverAnimation").join(" ")}>
                    {(index + 1).toLocaleString("en-US", {
                      minimumIntegerDigits: 2,
                      useGrouping: false,
                    })}
                  </div>
                  <div
                    key={`cnt-4-card-${index}`}
                    className={this.decorateCSS("card-content")}
                  >
                    <Base.VerticalContent
                      className={this.decorateCSS("card-body")}
                      data-animation={this.getPropValue("hoverAnimation").join(" ")}
                    >
                      {card.icon && (
                        <Base.Media
                          value={card.icon}
                          className={this.decorateCSS("icon")}
                        />
                      )}

                      <Base.VerticalContent className={this.decorateCSS("text-wrapper")}>
                        {this.castToString(card.title) && (
                          <Base.H3
                            className={this.decorateCSS("item-title")}
                          >
                            {card.title as any}
                          </Base.H3>
                        )}
                        {this.castToString(card.description) && (
                          <Base.P className={this.decorateCSS("item-description")}>
                            {card.description as any}
                          </Base.P>
                        )}
                      </Base.VerticalContent>
                    </Base.VerticalContent>
                  </div>
                </div>
              )
            )}
          </Base.ListGrid>
        </Base.MaxContent>
      </Base.Container >
    );
  }
}

export default list4;