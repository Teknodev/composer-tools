import * as React from "react";
import { BaseList, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./list4.module.scss";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type CardButton = Omit<INPUTS.CastedButton, "icon"> & {
  icon: TypeMediaInputValue | null;
};

type Card = {
  description: React.JSX.Element;
  icon: TypeMediaInputValue;
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
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "", "", "", null, "Primary")],
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
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const buttons = this.castToObject<CardButton[]>("buttons");
    const hasValidButtons = buttons.some((item: CardButton) => {
      const iconMedia = item.icon as TypeMediaInputValue;
      return this.castToString(item.text) || (iconMedia && iconMedia.type === "icon" && iconMedia.name);
    });
    const hasHeader = subtitleExist || titleExist || descriptionExist || hasValidButtons;

    return (
      <Base.Container className={this.decorateCSS("container")} >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {hasHeader && (
              <Base.VerticalContent className={this.decorateCSS("header")}>
                {subtitleExist && (
                  <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                    {this.getPropValue("subtitle")}
                  </Base.SectionSubTitle>
                )}
                {titleExist && (
                  <Base.SectionTitle className={this.decorateCSS("title")}>
                    {this.getPropValue("title")}
                  </Base.SectionTitle>
                )}
                {descriptionExist && (
                  <Base.SectionDescription className={this.decorateCSS("description")}>
                    {this.getPropValue("description")}
                  </Base.SectionDescription>
                )}
                {hasValidButtons && (
                  <div className={this.decorateCSS("button-container")}>
                    {buttons.map((item: CardButton, index: number) => {
                      const buttonText = this.castToString(item.text);
                      const iconMedia = item.icon as TypeMediaInputValue;
                      const iconExist =
                        iconMedia && iconMedia.type === "icon" && iconMedia.name;
                      if (!buttonText && !iconExist) return null;
                      return (
                        <ComposerLink key={index} path={item.url}>
                          <Base.Button
                            buttonType={item.type}
                            className={this.decorateCSS("button")}
                          >
                            {buttonText && (
                              <Base.P className={this.decorateCSS("button-text")}>
                                {item.text}
                              </Base.P>
                            )}
                            {iconExist && (
                              <Base.Media
                                className={this.decorateCSS("button-icon")}
                                value={iconMedia}
                              />
                            )}
                          </Base.Button>
                        </ComposerLink>
                      );
                    })}
                  </div>
                )}
              </Base.VerticalContent>
            )}
            <Base.ListGrid className={this.decorateCSS("services-grid")} gridCount={{ pc: this.getPropValue("itemCount"), tablet: 3 }}>
              {this.castToObject<Card[]>("content-card").map(
                (card: Card, index: number) => {
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
                            {hasTitle && (
                              <Base.H4
                                className={this.decorateCSS("item-title")}
                              >
                                {card.title}
                              </Base.H4>
                            )}
                            {hasDescription && (
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
          </div>
        </Base.MaxContent>
      </Base.Container >
    );
  }
}

export default List4;