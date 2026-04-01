import * as React from "react";
import styles from "./pricing-table4.module.scss";
import {
  BasePricingTable,
  TypeUsableComponentProps,
  TypeMediaInputValue,
} from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type Pricing = {
  title: React.JSX.Element;
  list: TypeUsableComponentProps[];
  subtitle: React.JSX.Element;
  price: React.JSX.Element;
  buttons: INPUTS.CastedButton[];
  isFocus: boolean;
  icon: TypeMediaInputValue;
};

interface PricingTableSettings {
  itemCount: number;
  animations: string[];
}

class PricingMultiple extends BasePricingTable {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Pricing Plans",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Featured Products",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Pricing is a crucial element of any business strategy, and small businesses need to adopt effective pricing strategies to stay competitive.",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "", "", "", null, "Primary"),
      ],
    });

    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Card",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "boolean",
              key: "isFocus",
              displayer: "Card Active",
              value: false,
            },
            {
              type: "string",
              key: "title",
              displayer: "Title-1",
              value: "Enterprise",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Title-2",
              value: "Basic Solution",
            },
            {
              type: "string",
              key: "price",
              displayer: "Pricing",
              value: "$150",
            },
            {
              type: "array",
              key: "list",
              displayer: "List Items",
              value: [
                {
                  type: "object",
                  key: "li",
                  displayer: "List",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "List Item",
                      value: "One database",
                    },
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FaCheck" },
                    },
                  ],
                },
                {
                  type: "object",
                  key: "li",
                  displayer: "List",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "List Item",
                      value: "Unlimited websites",
                    },
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FaCheck" },
                    },
                  ],
                },
                {
                  type: "object",
                  key: "li",
                  displayer: "List",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "List Item",
                      value: "CMS Navigation",
                    },
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FaCheck" },
                    },
                  ],
                },
                {
                  type: "object",
                  key: "li",
                  displayer: "List",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "List Item",
                      value: "Free updates",
                    },
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FaCheck" },
                    },
                  ],
                },
                {
                  type: "object",
                  key: "li",
                  displayer: "List",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "List Item",
                      value: "Priority support",
                    },
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FaCheck" },
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
                INPUTS.BUTTON("buttonType", "Button", "CHOOSE PLAN", "", "", null, "Primary"),
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
              type: "boolean",
              key: "isFocus",
              displayer: "Card Active",
              value: true,
            },
            {
              type: "string",
              key: "title",
              displayer: "Title-1",
              value: "Professional",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Title-2",
              value: "Advanced Platform",
            },
            {
              type: "string",
              key: "price",
              displayer: "Pricing",
              value: "$150",
            },
            {
              type: "array",
              key: "list",
              displayer: "List Items",
              value: [
                {
                  type: "object",
                  key: "li",
                  displayer: "List",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "List Item",
                      value: "One database",
                    },
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FaCheck" },
                    },
                  ],
                },
                {
                  type: "object",
                  key: "li",
                  displayer: "List",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "List Item",
                      value: "Unlimited websites",
                    },
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FaCheck" },
                    },
                  ],
                },
                {
                  type: "object",
                  key: "li",
                  displayer: "List",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "List Item",
                      value: "CMS Navigation",
                    },
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FaCheck" },
                    },
                  ],
                },
                {
                  type: "object",
                  key: "li",
                  displayer: "List",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "List Item",
                      value: "Free updates",
                    },
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FaCheck" },
                    },
                  ],
                },
                {
                  type: "object",
                  key: "li",
                  displayer: "List",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "List Item",
                      value: "Priority support",
                    },
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FaCheck" },
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
                INPUTS.BUTTON("buttonType", "Button", "CHOOSE PLAN", "", null, null, "Primary"),
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
              type: "boolean",
              key: "isFocus",
              displayer: "Card Active",
              value: false,
            },
            {
              type: "string",
              key: "title",
              displayer: "Title-1",
              value: "Starter",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Title-2",
              value: "Customizable Platform",
            },
            {
              type: "string",
              key: "price",
              displayer: "Pricing",
              value: "$150",
            },
            {
              type: "array",
              key: "list",
              displayer: "List Items",
              value: [
                {
                  type: "object",
                  key: "li",
                  displayer: "List",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "List Item",
                      value: "One database",
                    },
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FaCheck" },
                    },
                  ],
                },
                {
                  type: "object",
                  key: "li",
                  displayer: "List",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "List Item",
                      value: "Unlimited websites",
                    },
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FaCheck" },
                    },
                  ],
                },
                {
                  type: "object",
                  key: "li",
                  displayer: "List",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "List Item",
                      value: "CMS Navigation",
                    },
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FaCheck" },
                    },
                  ],
                },
                {
                  type: "object",
                  key: "li",
                  displayer: "List",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "List Item",
                      value: "Free updates",
                    },
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FaCheck" },
                    },
                  ],
                },
                {
                  type: "object",
                  key: "li",
                  displayer: "List",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "List Item",
                      value: "Priority support",
                    },
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FaCheck" },
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
                INPUTS.BUTTON("buttonType", "Button", "CHOOSE PLAN", "", null, null, "Primary"),
              ],
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "object",
      key: "settings",
      displayer: "Settings",
      value: [
        {
          type: "number",
          key: "itemCount",
          displayer: "Item Count in a Row",
          value: 3,
          max: 4,
        },
        {
          type: "multiSelect",
          key: "animations",
          displayer: "Animations",
          value: ["animation1", "animation2", "animation3"],
          additionalParams: {
            selectItems: ["animation1", "animation2", "animation3"],
          },
        },
      ],
    });
  }

  private getButtonsFromItem(item: Pricing) {
    const buttonsArray = item?.buttons;
    if (!Array.isArray(buttonsArray)) return [];

    return buttonsArray.map((btn) => {
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
    if (!Array.isArray(buttons)) return false;
    return buttons.some(
      (b) =>
        this.castToString(b?.text) ||
        (b?.media && (b.media.name || b.media.url))
    );
  }

  static getName(): string {
    return "Pricing 4";
  }

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const settings = this.castToObject<PricingTableSettings>("settings");

    const hasSubtitle = this.castToString(subtitle);
    const hasTitle = this.castToString(title);
    const hasDescription = this.castToString(description);

    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const hasValidButtons = buttons.some((btn) => {
      const buttonText = this.castToString(btn.text);
      const iconExist = btn.icon && btn.icon.name;
      return buttonText || iconExist;
    });

    const hasHeaderContent =
      hasSubtitle || hasTitle || hasDescription || hasValidButtons;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("page")}>
            {hasHeaderContent && (
              <Base.VerticalContent className={this.decorateCSS("page-up")}>
                {hasSubtitle && (
                  <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                    {subtitle}
                  </Base.SectionSubTitle>
                )}
                {hasTitle && (
                  <Base.SectionTitle className={this.decorateCSS("title")}>
                    {title}
                  </Base.SectionTitle>
                )}
                {hasDescription && (
                  <Base.SectionDescription
                    className={this.decorateCSS("description")}
                  >
                    {description}
                  </Base.SectionDescription>
                )}
                {hasValidButtons && (
                  <div className={this.decorateCSS("top-level-buttons")}>
                    {buttons.map((btn, btnIndex: number) => {
                      const buttonText = this.castToString(btn.text);
                      const iconExist = btn.icon && btn.icon.name;

                      if (!buttonText && !iconExist) return null;

                      return (
                        <ComposerLink
                          path={btn.url}
                          key={`top-btn-${btnIndex}`}
                        >
                          <Base.Button
                            buttonType={btn.type}
                            className={this.decorateCSS("button")}
                          >
                            {iconExist && (
                              <Base.Media
                                value={btn.icon!}
                                className={this.decorateCSS("button-icon")}
                              />
                            )}
                            {buttonText && (
                              <Base.P
                                className={this.decorateCSS("button-text")}
                              >
                                {btn.text}
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

            <Base.ListGrid
              gridCount={{
                pc: settings.itemCount,
                tablet: 3,
                phone: 1,
              }}
              className={this.decorateCSS("page-down")}
            >
              {this.castToObject<Pricing[]>("cards").map(
                (price: Pricing, indexCards: number) => {
                  const title1 = this.castToString(price.title);
                  const title2 = this.castToString(price.subtitle);
                  const pricing = this.castToString(price.price);
                  const hasCardUp = title1 || title2 || pricing;

                  const hasList = price.list.some((item: any) => {
                    const textExist = this.castToString(item.text);
                    const iconExist =
                      item.icon && (item.icon.name || item.icon.url);
                    return textExist || iconExist;
                  });

                  const cardButtons = this.getButtonsFromItem(price);
                  const hasCardButtons = this.hasAnyButtonInItem(cardButtons);

                  const hasCardContent = hasCardUp || hasList || hasCardButtons;

                  if (!hasCardContent) return null;

                  return (
                    <Base.VerticalContent
                      key={indexCards}
                      className={`${this.decorateCSS("card")} ${price.isFocus && this.decorateCSS("focused")
                        } ${settings.animations &&
                        settings.animations
                          .map((animation: string) =>
                            this.decorateCSS(animation)
                          )
                          .join(" ")
                        } `}
                    >
                      {hasCardUp && (
                        <div className={this.decorateCSS("card-up")}>
                          <Base.VerticalContent
                            className={this.decorateCSS("card-up-texts")}
                          >
                            {title1 && (
                              <Base.H5
                                className={this.decorateCSS("price-title1")}
                              >
                                {price.title}
                              </Base.H5>
                            )}
                            {title2 && (
                              <Base.P
                                className={this.decorateCSS("price-title2")}
                              >
                                {price.subtitle}
                              </Base.P>
                            )}
                            {pricing && (
                              <Base.H1
                                className={this.decorateCSS("price-pricing")}
                              >
                                {price.price}
                              </Base.H1>
                            )}
                          </Base.VerticalContent>
                        </div>
                      )}

                      {hasList && (
                        <div className={this.decorateCSS("card-middle")}>
                          <Base.VerticalContent
                            className={this.decorateCSS("list-group")}
                          >
                            {price.list.map(
                              (item: any, indexListGroup: number) => {
                                const liElement = this.castToString(
                                  item.text
                                );
                                const hasIcon =
                                  item.icon &&
                                  (typeof item.icon === "object"
                                    ? item.icon.name || item.icon.url
                                    : true);

                                if (!liElement && !hasIcon) return null;

                                return (
                                  <div
                                    key={indexListGroup}
                                    className={this.decorateCSS(
                                      "list-element"
                                    )}
                                  >
                                    {hasIcon && (
                                      <div
                                        className={this.decorateCSS(
                                          "circle-icon"
                                        )}
                                      >
                                        <Base.Media
                                          value={item.icon}
                                          className={this.decorateCSS("icon")}
                                        />
                                      </div>
                                    )}
                                    {liElement && (
                                      <Base.P
                                        className={this.decorateCSS(
                                          "list-item-text"
                                        )}
                                      >
                                        {item.text}
                                      </Base.P>
                                    )}
                                  </div>
                                );
                              }
                            )}
                          </Base.VerticalContent>
                        </div>
                      )}

                      {hasCardButtons && (
                        <div className={this.decorateCSS("card-down")}>
                          {cardButtons.map((btn, btnIndex: number) => {
                            const buttonText = btn.text;
                            const buttonMedia = btn.media;
                            const buttonUrl = btn.url || "#";
                            const buttonType = btn.type;

                            const btnTextExist = this.castToString(buttonText);
                            const buttonMediaExist =
                              buttonMedia &&
                              (buttonMedia.name || buttonMedia.url);

                            if (!btnTextExist && !buttonMediaExist) return null;

                            return (
                              <ComposerLink
                                path={buttonUrl}
                                key={`card-btn-${indexCards}-${btnIndex}`}
                              >
                                <Base.Button
                                  buttonType={buttonType}
                                  className={this.decorateCSS("button")}
                                >
                                  {buttonMediaExist && (
                                    <Base.Media
                                      value={buttonMedia}
                                      className={this.decorateCSS(
                                        "button-icon"
                                      )}
                                    />
                                  )}
                                  {btnTextExist && (
                                    <Base.P
                                      className={this.decorateCSS(
                                        "button-text"
                                      )}
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
                  );
                }
              )}
            </Base.ListGrid>
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default PricingMultiple;