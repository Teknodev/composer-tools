import * as React from "react";
import styles from "./pricing-table3.module.scss";
import { BasePricingTable } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";

type Card = {
  icon: string;
  title: JSX.Element;
  price: JSX.Element;
  tagSettings: TagSettings;
  items: { value: JSX.Element }[];
  button: Button;
};

type TagSettings = {
  tag: JSX.Element;
  showTag: boolean;
};

type Button = {
  text: JSX.Element;
  link: string;
  icon: string;
};

class PricingTable3 extends BasePricingTable {
  constructor(props?: any) {
    super(props, styles);

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
      value: "Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt labore et dolore magna ut enim.",
    });

    this.addProp({
      type: "object",
      key: "button",
      displayer: "button",
      value: [
        {
          type: "string",
          key: "text",
          displayer: "Button Text",
          value: "PRICING PLANS",
        },
        {
          type: "page",
          key: "link",
          displayer: "Button Link",
          value: "",
        },
        {
          type: "icon",
          key: "icon",
          displayer: "Icon",
          value: "FaArrowRight",
        },
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
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaUsers",
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
              type: "object",
              key: "button",
              displayer: "Card Button",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Button Text",
                  value: "CHOOSE PACKAGE",
                },
                {
                  type: "page",
                  key: "link",
                  displayer: "Button Link",
                  value: "",
                },
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "FaArrowRight",
                },
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
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaUsers",
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
              type: "object",
              key: "button",
              displayer: "Card Button",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Button Text",
                  value: "CHOOSE PACKAGE",
                },
                {
                  type: "page",
                  key: "link",
                  displayer: "Button Link",
                  value: "",
                },
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "FaArrowRight",
                },
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
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaUsers",
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
              type: "object",
              key: "button",
              displayer: "Card Button",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Button Text",
                  value: "CHOOSE PACKAGE",
                },
                {
                  type: "page",
                  key: "link",
                  displayer: "Button Link",
                  value: "",
                },
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "FaArrowRight",
                },
              ],
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Pricing Table 3";
  }

  render() {
    const cards = this.castToObject<Card[]>("cards");
    const featuredButton = this.castToObject<Button>("button");
    const titleExist = this.getPropValue("title", { as_string: true });
    const descExist = this.getPropValue("description", { as_string: true });
    const buttonExist = this.castToString(featuredButton.text);
    const hasCards = cards?.length > 0;
    const hasVisibleTag = cards?.some((card) => card.tagSettings.showTag);

    return (
      <Base.Container className={this.decorateCSS(hasVisibleTag ? "container-alternate" : "container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            {(titleExist || descExist || buttonExist) && (
              <Base.VerticalContent className={this.decorateCSS(hasCards ? "featured" : "featured-alternate")}>
                {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                {descExist && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
                {buttonExist && (
                  <ComposerLink path={featuredButton.link}>
                    <div className={this.decorateCSS("featured-button-container")}>
                      <button
                        className={`${this.decorateCSS("button")}
                      ${featuredButton.icon ? this.decorateCSS("has-icon") : ""}`}
                        onClick={(event) => {
                          event.preventDefault();
                        }}
                      >
                        {featuredButton.text}
                        <ComposerIcon
                          name={featuredButton.icon}
                          propsIcon={{
                            className: this.decorateCSS("button-icon"),
                          }}
                        />
                      </button>
                    </div>
                  </ComposerLink>
                )}
              </Base.VerticalContent>
            )}
            {hasCards && (
              <div className={this.decorateCSS(titleExist || descExist || buttonExist ? "cards-div" : "cards-div-alternate")}>
                {cards.map((card: Card, idx: number) => {
                  const showTag = card.tagSettings.showTag;
                  const titleExist = this.castToString(card.title);

                  return (
                    <div key={idx} className={`${this.decorateCSS("card-container")} ${showTag && this.decorateCSS("active")}`}>
                      <Base.VerticalContent className={this.decorateCSS("card")}>
                        {showTag && this.castToString(card.tagSettings.tag) && <div className={this.decorateCSS("tag")}>{card.tagSettings.tag}</div>}

                        <Base.VerticalContent className={this.decorateCSS("header")}>
                          {card.icon && (
                            <ComposerIcon
                              name={card.icon}
                              propsIcon={{
                                className: this.decorateCSS("icon"),
                              }}
                            />
                          )}
                          {titleExist && <Base.H3 className={this.decorateCSS("title")}>{card.title}</Base.H3>}
                          <Base.H1 className={this.decorateCSS("price")}>{card.price}</Base.H1>
                        </Base.VerticalContent>
                        {card.items.length > 0 && (
                          <div className={this.decorateCSS("body")}>
                            <Base.VerticalContent className={this.decorateCSS("items")}>
                              {card.items.map((item: { value: JSX.Element }, idx: number) => {
                                return (
                                  <Base.P key={idx} className={this.decorateCSS("item")}>
                                    {item.value}
                                  </Base.P>
                                );
                              })}
                            </Base.VerticalContent>
                          </div>
                        )}

                        {this.castToString(card.button.text) && (
                          <div className={this.decorateCSS("footer")}>
                            <ComposerLink path={card.button.link}>
                              <button
                                className={`${this.decorateCSS("button")}
                                       ${card.button.icon ? this.decorateCSS("has-icon") : ""}`}
                              >
                                {card.button.text}
                                {card.button.icon && (
                                  <ComposerIcon
                                    name={card.button.icon}
                                    propsIcon={{
                                      className: this.decorateCSS("button-icon"),
                                    }}
                                  />
                                )}
                              </button>
                            </ComposerLink>
                          </div>
                        )}
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
