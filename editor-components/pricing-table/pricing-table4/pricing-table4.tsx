import * as React from "react";
import styles from "./pricing-table4.module.scss";
import {
  BasePricingTable,
  TypeUsableComponentProps,
  TypeMediaInputValue,
} from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Pricing = {
  title1: React.JSX.Element;
  list: TypeUsableComponentProps[];
  title2: React.JSX.Element;
  pricing: React.JSX.Element;
  buttons: INPUTS.CastedButton[];
  isFocus: boolean;
  icon: TypeMediaInputValue;
};

class PricingMultiple extends BasePricingTable {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "SubTitle",
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
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 3,
      max: 4,
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
              displayer: "Is focus",
              value: false,
            },
            {
              type: "string",
              key: "title1",
              displayer: "Title-1",
              value: "Enterprise",
            },
            {
              type: "string",
              key: "title2",
              displayer: "Title-2",
              value: "Basic Solution",
            },
            {
              type: "string",
              key: "pricing",
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
                      key: "liText",
                      displayer: "List Item",
                      value: "One database",
                    },
                    {
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FaCheck",
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
                      key: "liText",
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
                      key: "liText",
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
                      key: "liText",
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
                      key: "liText",
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
                INPUTS.BUTTON(
                  "buttonType",
                  "Button",
                  "CHOOSE PLAN",
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
              type: "boolean",
              key: "isFocus",
              displayer: "Is focus",
              value: true,
            },
            {
              type: "string",
              key: "title1",
              displayer: "Title-1",
              value: "Professional",
            },
            {
              type: "string",
              key: "title2",
              displayer: "Title-2",
              value: "Advanced Platform",
            },
            {
              type: "string",
              key: "pricing",
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
                      key: "liText",
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
                      key: "liText",
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
                      key: "liText",
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
                      key: "liText",
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
                      key: "liText",
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
                {
                  type: "object",
                  key: "button",
                  displayer: "Button",
                  value: [
                    INPUTS.BUTTON(
                      "buttonType",
                      "Button",
                      "CHOOSE PLAN",
                      "",
                      null,
                      null,
                      "Primary"
                    ),
                  ],
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
              type: "boolean",
              key: "isFocus",
              displayer: "Is focus",
              value: false,
            },
            {
              type: "string",
              key: "title1",
              displayer: "Title-1",
              value: "Starter",
            },
            {
              type: "string",
              key: "title2",
              displayer: "Title-2",
              value: "Customizable Platform",
            },
            {
              type: "string",
              key: "pricing",
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
                      key: "liText",
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
                      key: "liText",
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
                      key: "liText",
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
                      key: "liText",
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
                      key: "liText",
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
                {
                  type: "object",
                  key: "button",
                  displayer: "Button",
                  value: [
                    INPUTS.BUTTON(
                      "buttonType",
                      "Button",
                      "CHOOSE PLAN",
                      "",
                      null,
                      null,
                      "Primary"
                    ),
                  ],
                },
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

  private getButtonsFromItem(item: Pricing) {
    const buttonsArray = item?.buttons;
    if (!Array.isArray(buttonsArray)) return [];

    return buttonsArray.map((btn: any) => {
      const parent = btn?.value ?? btn;
      const icon = this.getPropValue("icon", { parent_object: parent });
      const image = this.getPropValue("image", { parent_object: parent });
      const media = icon || image || null;
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
      (b: any) =>
        this.castToString(b?.text) ||
        (b?.media && ((b as any).media?.name || (b as any).media?.url))
    );
  }

  static getName(): string {
    return "Pricing 4";
  }

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");

    const hasSubtitle = this.castToString(subtitle);
    const hasTitle = this.castToString(title);
    const hasDescription = this.castToString(description);

    const topLevelButtons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const hasTopLevelButtons = this.hasAnyButtonInItem(topLevelButtons);

    const hasHeaderContent = hasSubtitle || hasTitle || hasDescription || hasTopLevelButtons;

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

            <Base.ListGrid
              gridCount={{
                pc: this.getPropValue("itemCount"),
                tablet: 1,
                phone: 1,
              }}
              className={this.decorateCSS("page-down")}
            >
              {this.castToObject<Pricing[]>("cards").map(
                (price: Pricing, indexCards: number) => {
                  const title1 = this.castToString(price.title1);
                  const title2 = this.castToString(price.title2);
                  const pricing = this.castToString(price.pricing);
                  const hasCardUp = title1 || title2 || pricing;

                  const hasList = price.list.some(
                    (item: any) => this.castToString(item.liText)
                  );

                  const cardButtons = this.getButtonsFromItem(price);
                  const hasCardButtons = this.hasAnyButtonInItem(cardButtons);

                  const hasCardContent = hasCardUp || hasList || hasCardButtons;

                  if (!hasCardContent) return null;

                  return (
                    <div
                      key={indexCards}
                      className={this.decorateCSS("all-card")}
                    >
                      <Base.VerticalContent
                        className={`${this.decorateCSS("card")} ${
                          price.isFocus && this.decorateCSS("focused")
                        } ${
                          this.getPropValue("animations") &&
                          this.getPropValue("animations")
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
                                  {price.title1}
                                </Base.H5>
                              )}
                              {title2 && (
                                <Base.P
                                  className={this.decorateCSS("price-title2")}
                                >
                                  {price.title2}
                                </Base.P>
                              )}
                              {pricing && (
                                <Base.H1
                                  className={this.decorateCSS("price-pricing")}
                                >
                                  {price.pricing}
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
                                    item.liText
                                  );
                                  const hasIcon =
                                    item.icon &&
                                    (typeof item.icon === "object"
                                      ? item.icon.name || item.icon.url
                                      : true);

                                  if (!liElement) return null;

                                  return (
                                    <Base.P
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
                                      <div
                                        className={this.decorateCSS(
                                          "list-item-text"
                                        )}
                                      >
                                        {item.liText}
                                      </div>
                                    </Base.P>
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
                                ((buttonMedia as any).name ||
                                  (buttonMedia as any).url);

                              if (!btnTextExist && !buttonMediaExist)
                                return null;

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
                    </div>
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