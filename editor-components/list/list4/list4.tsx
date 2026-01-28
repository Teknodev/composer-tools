import * as React from "react";
import { BaseList } from "../../EditorComponent";
import styles from "./list4.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";


type Card = {
  description: React.JSX.Element;
  icon: React.JSX.Element;
  title: React.JSX.Element;
};

class List4 extends BaseList {
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
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });
    this.addProp(INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"));

    this.addProp({
      type: "array",
      key: "content-card",
      displayer: "List Item",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "List Item",
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
              displayer: "Media",
              value: {
                type: "icon",
                name: "FaTooth",
              },
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "List Item",
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
              displayer: "Media",
              value: {
                type: "icon",
                name: "FaPencilAlt",
              },
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "List Item",
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
              displayer: "Media",
              value: {
                type: "icon",
                name: "FaSuitcaseRolling",
              },
              additionalParams: {
                availableTypes: ["icon", "image"],
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
    const button = this.castToObject<any>("button");
    const buttonText = this.castToString(button?.text);
    return (
      <Base.Container className={this.decorateCSS("container")} >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(this.castToString(this.getPropValue("subtitle")) || this.castToString(this.getPropValue("title")) || this.castToString(this.getPropValue("description"))) && (
            <Base.VerticalContent className={this.decorateCSS("header")}>
              {this.castToString(this.getPropValue("subtitle")) && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {this.getPropValue("subtitle")}
                </Base.SectionSubTitle>
              )}
              {this.castToString(this.getPropValue("title")) && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {this.getPropValue("title")}
                </Base.SectionTitle>
              )}
              {this.castToString(this.getPropValue("description")) && (
                <Base.SectionDescription className={this.decorateCSS("description")}>
                  {this.getPropValue("description")}
                </Base.SectionDescription>
              )}
            </Base.VerticalContent>
          )}
          <Base.ListGrid className={this.decorateCSS("services-grid")} gridCount={{ pc: this.getPropValue("itemCount"), tablet: 3 }}>
            {this.castToObject<Card[]>("content-card").map(
              (card: any, index: number) => {
                const hasTitle = this.castToString(card.title);
                const hasDescription = this.castToString(card.description);
                const hasIcon = !!card.icon;

                if (!hasTitle && !hasDescription && !hasIcon) return null;
                return (
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
                    {this.getPropValue("showIndex") && (
                      <div
                        className={`${this.decorateCSS("item-index")} ${this.decorateCSS("index")}`}
                        data-animation={this.getPropValue("hoverAnimation").join(" ")}
                      >
                        {(index + 1).toLocaleString("en-US", {
                          minimumIntegerDigits: 2,
                          useGrouping: false,
                        })}
                      </div>
                    )}
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
                            className={`${this.decorateCSS("icon")} ${this.decorateCSS("media-el")}`}
                          />
                        )}

                        <Base.VerticalContent className={this.decorateCSS("text-wrapper")}>
                          {this.castToString(card.title) && (
                            <Base.H4
                              className={this.decorateCSS("item-title")}
                            >
                              {card.title}
                            </Base.H4>
                          )}
                          {this.castToString(card.description) && (
                            <Base.P className={this.decorateCSS("item-description")}>
                              {card.description}
                            </Base.P>
                          )}
                        </Base.VerticalContent>
                      </Base.VerticalContent>
                    </div>
                  </div>
                )
              }
            )}
          </Base.ListGrid>
          {buttonText && (
            <div className={this.decorateCSS("button-wrapper")}>
              <ComposerLink path={button?.url}>
                <Base.Button buttonType={button?.type} className={this.decorateCSS("button")}>
                  <Base.P className={this.decorateCSS("button-text")}>
                    {button?.text}
                  </Base.P>
                </Base.Button>
              </ComposerLink>
            </div>
          )}
        </Base.MaxContent>
      </Base.Container >
    );
  }
}

export default List4;
