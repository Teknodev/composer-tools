import * as React from "react";
import styles from "./pricing-table3.module.scss";
import { BasePricingTable, TypeMediaInputValue } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Card = {
  icon: TypeMediaInputValue;
  title: React.JSX.Element;
  price: React.JSX.Element;
  tagSettings: TagSettings;
  items: { value: React.JSX.Element }[];
  buttons?: INPUTS.CastedButton[];
};

type TagSettings = {
  tag: React.JSX.Element;
  showTag: boolean;
};

class PricingTable3 extends BasePricingTable {
  constructor(props?: any) {
    super(props, styles);

this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Conference packages",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt labore et dolore magna ut enim.",
    });
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON(
          "button",
          "Button",
          "Join this plan",
          "",
          "",
          null,
          "Primary"
        ),
      ],
    });

    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Cards",
      additionalParams: {
        maxElementCount: 3,
      },
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "object",
              key: "tagSettings",
              displayer: "Tag Settings",
              value: [
                {
                  type: "string",
                  key: "tag",
                  displayer: "Tag",
                  value: "POPULAR",
                },
                {
                  type: "boolean",
                  key: "showTag",
                  displayer: "Show",
                  value: false,
                },
              ],
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: { type: "icon", name: "FaUsers" },
            },

            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "PERSONAL",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$ 250",
            },
            {
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
                      key: "value",
                      displayer: "",
                      value: "Regular seats",
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
                      key: "value",
                      displayer: "",
                      value: "Snacks and brunch",
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
                      key: "value",
                      displayer: "",
                      value: "Event certificate",
                    },
                  ],
                },
              ],
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON(
                  "button",
                  "Button",
                  "Join this plan",
                  "",
                  "",
                  null,
                  "Primary"
                ),
              ],
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "object",
              key: "tagSettings",
              displayer: "Tag Settings",
              value: [
                {
                  type: "string",
                  key: "tag",
                  displayer: "Tag",
                  value: "POPULAR",
                },
                {
                  type: "boolean",
                  key: "showTag",
                  displayer: "Show",
                  value: true,
                },
              ],
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: { type: "icon", name: "FaUsers" },
            },

            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "PERSONAL",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$ 250",
            },
            {
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
                      key: "value",
                      displayer: "",
                      value: "Regular seats",
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
                      key: "value",
                      displayer: "",
                      value: "Snacks and brunch",
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
                      key: "value",
                      displayer: "",
                      value: "Event certificate",
                    },
                  ],
                },
              ],
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON(
                  "button",
                  "Button",
                  "Join this plan",
                  "",
                  "",
                  null,
                  "Primary"
                ),
              ],
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "object",
              key: "tagSettings",
              displayer: "Tag Settings",
              value: [
                {
                  type: "string",
                  key: "tag",
                  displayer: "Tag",
                  value: "POPULAR",
                },
                {
                  type: "boolean",
                  key: "showTag",
                  displayer: "Show",
                  value: false,
                },
              ],
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: { type: "icon", name: "FaUsers" },
            },

            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "PERSONAL",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$ 250",
            },
            {
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
                      key: "value",
                      displayer: "",
                      value: "Regular seats",
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
                      key: "value",
                      displayer: "",
                      value: "Snacks and brunch",
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
                      key: "value",
                      displayer: "",
                      value: "Event certificate",
                    },
                  ],
                },
              ],
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON(
                  "button",
                  "Button",
                  "Join this plan",
                  "",
                  "",
                  null,
                  "Primary"
                ),
              ],
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "multiSelect",
      key: "animations",
      displayer: "Animations",
      value: ["animation1", "animation2", "animation3"],
      additionalParams: {
        selectItems: ["animation1", "animation2", "animation3"],
      },
    });
  }

  private getButtonsFromItem(item: Card) {
    const buttonsArray = item?.buttons;
    if (!Array.isArray(buttonsArray)) return [];

    return buttonsArray.map((btn: any) => {
      const parent = btn?.value ?? btn;
      const icon = this.getPropValue("icon", { parent_object: parent });
      
      const media = icon || null;
      return {
        text: this.getPropValue("text", { parent_object: parent }),
        type: this.getPropValue("type", { parent_object: parent }),
        url: this.getPropValue("url", { parent_object: parent }),
        media,
      };
    });
  }

  private hasAnyButtonInItem(
    buttons: { text?: string; media?: TypeMediaInputValue }[]
  ) {
    
    return buttons.some(
      (b: any) =>
        this.castToString(b?.text) ||
         ((b as any).icon?.name || (b as any).icon?.url)
    );
  }

  static getName(): string {
    return "Pricing 3";
  }

  render() {
    const cards = this.castToObject<Card[]>("cards");
    const title = this.getPropValue("title");
    const subtitle = this.getPropValue("subtitle");
    const description = this.getPropValue("description");


    const titleExist = this.castToString(title);
    const subtitleExist = this.castToString(subtitle);
    const descExist = this.castToString(description);

    const topLevelButtons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const hasTopLevelButtons = this.hasAnyButtonInItem(topLevelButtons);

    const hasCards = cards?.length > 0;
    const animations = this.getPropValue("animations")
      .map((animation: string) => this.decorateCSS(animation))
      .join(" ");

    return (
      <Base.Container
        className={this.decorateCSS("container")}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            {(titleExist || subtitleExist || descExist || hasTopLevelButtons) && (
              <Base.VerticalContent
                className={`${this.decorateCSS("featured")} ${
                  !hasCards && this.decorateCSS("featured-alternate")
                } `}
              >
                {subtitleExist && (
                  <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                    {subtitle}
                  </Base.SectionSubTitle>
                )}
                {titleExist && (
                  <Base.SectionTitle className={this.decorateCSS("title")}>
                    {title}
                  </Base.SectionTitle>
                )}
                {descExist && (
                  <Base.SectionDescription
                    className={this.decorateCSS("description")}
                  >
                    {description}
                  </Base.SectionDescription>
                )}
                {hasTopLevelButtons && (
                  <div className={this.decorateCSS("top-level-buttons")}>
                    {topLevelButtons.map((btn, btnIndex: number) => {
                      const buttonText = btn.text;
                      const buttonMedia = btn.icon;
                      const buttonUrl = btn.url || "#";
                      const buttonType = btn.type;

                      const btnTextExist = this.castToString(buttonText);
                      const buttonMediaExist =
                        buttonMedia &&
                        ((buttonMedia as any).name || (buttonMedia as any).url);

                      if (!btnTextExist && !buttonMediaExist) return null;

                      return (
                        <ComposerLink
                          path={buttonUrl}
                          key={`top-btn-${btnIndex}`}
                        >
                          <Base.Button
                            buttonType={buttonType}
                            className={this.decorateCSS("button")}
                          >
                            {buttonMediaExist && (
                              <Base.Media
                                value={buttonMedia}
                                className={this.decorateCSS("button-icon")}
                              />
                            )}
                            {btnTextExist && (
                              <Base.P
                                className={this.decorateCSS("button-text")}
                              >
                                {buttonText}
                              </Base.P>
                            )}
                          </Base.Button>
                        </ComposerLink>
                      );
                    })}
                  </div>
                )}
              </Base.VerticalContent>
            )}
            {hasCards && (
              <div
                className={`${this.decorateCSS("cards-div")} ${
                  !(titleExist || descExist || hasTopLevelButtons) &&
                  this.decorateCSS("cards-div-alternate")
                }`}
              >
                {cards.map((card: Card, idx: number) => {
                  const showTag = card.tagSettings.showTag;
                  const titleExist = this.castToString(card.title);
                  const cardButtons = this.getButtonsFromItem(card);
                  const hasCardButtons = this.hasAnyButtonInItem(cardButtons);

                  return (
                    <div
                      key={idx}
                      className={`${this.decorateCSS("card-container")} ${
                        showTag && this.decorateCSS("active")
                      } ${this.getPropValue("animations") && animations}`}
                    >
                      <Base.VerticalContent
                        className={this.decorateCSS("card")}
                      >
                        {showTag && this.castToString(card.tagSettings.tag) && (
                          <div className={this.decorateCSS("tag")}>
                            {card.tagSettings.tag}
                          </div>
                        )}
                        <Base.VerticalContent
                          className={`${this.decorateCSS("card-content")} }`}
                        >
                          <Base.VerticalContent
                            className={this.decorateCSS("header")}
                          >
                            {card.icon && (
                              <Base.Media
                                value={card.icon}
                                className={this.decorateCSS("icon")}
                              />
                            )}
                            {titleExist && (
                              <Base.H6 className={this.decorateCSS("title")}>
                                {card.title}
                              </Base.H6>
                            )}
                            {this.castToString(card.price) && (
                              <Base.H1 className={this.decorateCSS("price")}>
                                {card.price}
                              </Base.H1>
                            )}
                          </Base.VerticalContent>
                          {card.items.length > 0 && (
                            <div className={this.decorateCSS("body")}>
                              <Base.VerticalContent
                                className={this.decorateCSS("items")}
                              >
                                {card.items.map(
                                  (
                                    item: { value: React.JSX.Element },
                                    idx: number
                                  ) => {
                                    const itemExist = this.castToString(
                                      item.value
                                    );
                                    return (
                                      itemExist && (
                                        <Base.P
                                          key={idx}
                                          className={this.decorateCSS("item")}
                                        >
                                          {item.value}
                                        </Base.P>
                                      )
                                    );
                                  }
                                )}
                              </Base.VerticalContent>
                            </div>
                          )}

                          {hasCardButtons && (
                            <div className={this.decorateCSS("footer")}>
                              {cardButtons.map((btn, btnIndex: number) => {
                                console.log(btn);
                                
                                const buttonText = btn.text;
                                const buttonMedia = btn?.media;
                                const buttonUrl = btn.url || "#";
                                const buttonType = btn.type;

                                const btnTextExist =
                                  this.castToString(buttonText);
                                const buttonMediaExist =
                                  buttonMedia &&
                                  ((buttonMedia as any).name ||
                                    (buttonMedia as any).url);

                                if (!btnTextExist && !buttonMediaExist)
                                  return null;

                                return (
                                  <ComposerLink
                                    path={buttonUrl}
                                    key={`card-btn-${idx}-${btnIndex}`}
                                  >
                                    <Base.Button
                                      buttonType={buttonType}
                                      className={this.decorateCSS(
                                        "button"
                                      )}
                                    > 
                                      {btnTextExist && (
                                        <Base.P
                                          className={this.decorateCSS(
                                            "button-text"
                                          )}
                                        >
                                          {buttonText}
                                        </Base.P>
                                      )}
                                      {buttonMediaExist && (
                                        <Base.Media
                                          value={buttonMedia}
                                          className={this.decorateCSS(
                                            "button-icon"
                                          )}
                                        />
                                      )}
                                    </Base.Button>
                                  </ComposerLink>
                                );
                              })}
                            </div>
                          )}
                        </Base.VerticalContent>
                      </Base.VerticalContent>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default PricingTable3;
