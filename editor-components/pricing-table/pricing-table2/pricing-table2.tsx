import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BasePricingTable, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./pricing-table2.module.scss";
import { Base } from "../../../composer-base-components/base/base";

import { INPUTS } from "../../../custom-hooks/input-templates";

type PricingItems = {
  buttons?: INPUTS.CastedButton[];
  title: React.JSX.Element;
  price: React.JSX.Element;
  duration: React.JSX.Element;
  icon: TypeMediaInputValue;
  cardList: ListItem[];
  buttonType?: INPUTS.CastedButton;
};

type ListItem = {
  listIcon: TypeMediaInputValue;
  text: React.JSX.Element;
};

interface PricingTableSettings {
  itemCount: number;
  animations: string[];
}

class PricingTable2 extends BasePricingTable {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "WORK PACKAGES",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Pricing Plans",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
      ],
    });
    this.addProp({
      type: "array",
      key: "pricingTableItem",
      displayer: "Pricing Table",
      value: [
        {
          type: "object",
          key: "tableItem",
          displayer: "Table Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Pricing Title",
              value: "Basic Package",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$450",
            },
            {
              type: "string",
              key: "duration",
              displayer: "Duration",
              value: "/month",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: { type: "icon", name: "TfiAnnouncement" },
            },
            {
              type: "array",
              key: "cardList",
              displayer: "Feature List",
              value: [
                {
                  type: "object",
                  displayer: "List Item",
                  key: "listItem",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "List Item",
                      value: "Website Design",
                    },
                    {
                      type: "media",
                      key: "listIcon",
                      displayer: "List Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FaCheck" },
                    },
                  ],
                },
                {
                  type: "object",
                  displayer: "List Item",
                  key: "listItem",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "List Item",
                      value: "Website Design",
                    },
                    {
                      type: "media",
                      key: "listIcon",
                      displayer: "List Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FaCheck" },
                    },
                  ],
                },
                {
                  type: "object",
                  displayer: "List Item",
                  key: "listItem",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "List Item",
                      value: "Website Design",
                    },
                    {
                      type: "media",
                      key: "listIcon",
                      displayer: "List Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FaCheck" },
                    },
                  ],
                },
                {
                  type: "object",
                  displayer: "List Item",
                  key: "listItem",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "List Item",
                      value: "Website Design",
                    },
                    {
                      type: "media",
                      key: "listIcon",
                      displayer: "List Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FaCheck" },
                    },
                  ],
                },
                {
                  type: "object",
                  displayer: "List Item",
                  key: "listItem",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "List Item",
                      value: "Website Design",
                    },
                    {
                      type: "media",
                      key: "listIcon",
                      displayer: "List Icon",
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
                INPUTS.BUTTON("button", "Button", "Select Now", "", "", null, "Primary"),
              ],
            },
          ],
        },
        {
          type: "object",
          key: "tableItem",
          displayer: "Table Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Pricing Title",
              value: "Basic Package",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$450",
            },
            {
              type: "string",
              key: "duration",
              displayer: "Duration",
              value: "/month",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: { type: "icon", name: "FaExternalLinkAlt" },
            },
            {
              type: "array",
              key: "cardList",
              displayer: "Feature List",
              value: [
                {
                  type: "object",
                  displayer: "List Item",
                  key: "listItem",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "List Item",
                      value: "Website Design",
                    },
                    {
                      type: "media",
                      key: "listIcon",
                      displayer: "List Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FaCheck" },
                    },
                  ],
                },
                {
                  type: "object",
                  displayer: "List Item",
                  key: "listItem",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "List Item",
                      value: "Website Design",
                    },
                    {
                      type: "media",
                      key: "listIcon",
                      displayer: "List Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FaCheck" },
                    },
                  ],
                },
                {
                  type: "object",
                  displayer: "List Item",
                  key: "listItem",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "List Item",
                      value: "Website Design",
                    },
                    {
                      type: "media",
                      key: "listIcon",
                      displayer: "List Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FaCheck" },
                    },
                  ],
                },
                {
                  type: "object",
                  displayer: "List Item",
                  key: "listItem",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "List Item",
                      value: "Website Design",
                    },
                    {
                      type: "media",
                      key: "listIcon",
                      displayer: "List Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FaCheck" },
                    },
                  ],
                },
                {
                  type: "object",
                  displayer: "List Item",
                  key: "listItem",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "List Item",
                      value: "Website Design",
                    },
                    {
                      type: "media",
                      key: "listIcon",
                      displayer: "List Icon",
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
                INPUTS.BUTTON("button", "Button", "Select Now", "", "", null, "Primary"),
              ],
            },
          ],
        },
        {
          type: "object",
          key: "tableItem",
          displayer: "Table Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Pricing Title",
              value: "Basic Package",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$450",
            },
            {
              type: "string",
              key: "duration",
              displayer: "Duration",
              value: "/month",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: { type: "icon", name: "FaAnchor" },
            },
            {
              type: "array",
              key: "cardList",
              displayer: "Feature List",
              value: [
                {
                  type: "object",
                  displayer: "List Item",
                  key: "listItem",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "List Item",
                      value: "Website Design",
                    },
                    {
                      type: "media",
                      key: "listIcon",
                      displayer: "List Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FaCheck" },
                    },
                  ],
                },
                {
                  type: "object",
                  displayer: "List Item",
                  key: "listItem",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "List Item",
                      value: "Website Design",
                    },
                    {
                      type: "media",
                      key: "listIcon",
                      displayer: "List Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FaCheck" },
                    },
                  ],
                },
                {
                  type: "object",
                  displayer: "List Item",
                  key: "listItem",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "List Item",
                      value: "Website Design",
                    },
                    {
                      type: "media",
                      key: "listIcon",
                      displayer: "List Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FaCheck" },
                    },
                  ],
                },
                {
                  type: "object",
                  displayer: "List Item",
                  key: "listItem",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "List Item",
                      value: "Website Design",
                    },
                    {
                      type: "media",
                      key: "listIcon",
                      displayer: "List Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FaCheck" },
                    },
                  ],
                },
                {
                  type: "object",
                  displayer: "List Item",
                  key: "listItem",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "List Item",
                      value: "Website Design",
                    },
                    {
                      type: "media",
                      key: "listIcon",
                      displayer: "List Icon",
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
                INPUTS.BUTTON("button", "Button", "Select Now", "", "", null, "Primary"),
              ],
            },
          ],
        },
        {
          type: "object",
          key: "tableItem",
          displayer: "Table Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Pricing Title",
              value: "Basic Package",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$450",
            },
            {
              type: "string",
              key: "duration",
              displayer: "Duration",
              value: "/month",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: { type: "icon", name: "IoIosAirplane" },
            },
            {
              type: "array",
              key: "cardList",
              displayer: "Feature List",
              value: [
                {
                  type: "object",
                  displayer: "List Item",
                  key: "listItem",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "List Item",
                      value: "Website Design",
                    },
                    {
                      type: "media",
                      key: "listIcon",
                      displayer: "List Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FaCheck" },
                    },
                  ],
                },
                {
                  type: "object",
                  displayer: "List Item",
                  key: "listItem",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "List Item",
                      value: "Website Design",
                    },
                    {
                      type: "media",
                      key: "listIcon",
                      displayer: "List Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FaCheck" },
                    },
                  ],
                },
                {
                  type: "object",
                  displayer: "List Item",
                  key: "listItem",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "List Item",
                      value: "Website Design",
                    },
                    {
                      type: "media",
                      key: "listIcon",
                      displayer: "List Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FaCheck" },
                    },
                  ],
                },
                {
                  type: "object",
                  displayer: "List Item",
                  key: "listItem",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "List Item",
                      value: "Website Design",
                    },
                    {
                      type: "media",
                      key: "listIcon",
                      displayer: "List Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FaCheck" },
                    },
                  ],
                },
                {
                  type: "object",
                  displayer: "List Item",
                  key: "listItem",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "List Item",
                      value: "Website Design",
                    },
                    {
                      type: "media",
                      key: "listIcon",
                      displayer: "List Icon",
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
                  "button",
                  "Button",
                  "Select Now",
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
      type: "object",
      key: "settings",
      displayer: "Settings",
      value: [
        {
          type: "number",
          key: "itemCount",
          displayer: "Item Count in a Row",
          value: 4,
        },
        {
          type: "multiSelect",
          key: "animations",
          displayer: "Animations",
          value: ["animation1"],
          additionalParams: {
            selectItems: ["animation1", "animation2"],
          },
        },
      ],
    });
  }

  private getButtonsFromItem(item: PricingItems) {
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
        (b?.media && (b.media?.name || b.media?.url))
    );
  }

  static getName(): string {
    return "Pricing 2";
  }

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const settings = this.castToObject<PricingTableSettings>("settings");

    const hasTitle = this.castToString(title);
    const hasSubtitle = this.castToString(subtitle);
    const hasDescription = this.castToString(description);
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
          <div className={this.decorateCSS("table")}>
            {hasHeaderContent && (
              <Base.VerticalContent className={this.decorateCSS("up-content")}>
                {hasSubtitle && (
                  <Base.SectionSubTitle
                    className={this.decorateCSS("subtitle")}
                  >
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
                  <div className={this.decorateCSS("button-container")}>
                    {buttons.map((item: INPUTS.CastedButton, index: number) => {
                      const buttonText = this.castToString(item.text);
                      const iconExist = item.icon && item.icon.name;

                      if (!buttonText && !iconExist) return null;

                      return (
                        <ComposerLink key={index} path={item.url}>
                          <Base.Button
                            buttonType={item.type}
                            className={this.decorateCSS("button")}
                          >
                            {buttonText && (
                              <Base.P
                                className={this.decorateCSS("button-text")}
                              >
                                {item.text}
                              </Base.P>
                            )}
                            {iconExist && (
                              <Base.Media
                                value={item.icon}
                                className={this.decorateCSS("button-icon")}
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
            <Base.ListGrid
              gridCount={{
                pc: settings.itemCount,
                tablet: 2,
                phone: 1,
              }}
              className={this.decorateCSS("item-div")}
            >
              {this.castToObject<PricingItems[]>("pricingTableItem").map(
                (table: PricingItems, index: number) => {
                  const cardTitle = table.title;
                  const cardPrice = table.price;
                  const cardDuration = table.duration;
                  const cardIcon = table.icon;

                  const buttons = this.getButtonsFromItem(table);
                  const hasAnyButton = this.hasAnyButtonInItem(buttons);

                  const hasCardTitle = this.castToString(cardTitle);
                  const hasCardPrice = this.castToString(cardPrice);
                  const hasCardDuration = this.castToString(cardDuration);

                  const cardListArr: ListItem[] = Array.isArray(table.cardList)
                    ? table.cardList
                    : [];
                  const hasCardList = cardListArr.some(
                    (listItem: ListItem) =>
                      this.castToString(listItem.text) ||
                      (!!listItem.listIcon &&
                        (listItem.listIcon.name ||
                          listItem.listIcon.url))
                  );

                  const hasCardIcon =
                    cardIcon &&
                    typeof cardIcon === "object" &&
                    ("name" in cardIcon || "url" in cardIcon);

                  const hasUpperContent =
                    hasCardTitle || hasCardPrice || hasCardDuration;
                  const hasBottomContent =
                    hasCardIcon || hasCardList || hasAnyButton;
                  const hasCardContent = hasUpperContent || hasBottomContent;

                  if (!hasCardContent) return null;

                  return (
                    <Base.VerticalContent
                      key={index}
                      className={`${this.decorateCSS("card-item-count")} ${settings.animations &&
                        settings.animations
                          .map((animation: string) =>
                            this.decorateCSS(animation)
                          )
                          .join(" ")
                        }`}
                    >
                      <div className={this.decorateCSS("item-card")}>
                        {hasUpperContent && (
                          <Base.VerticalContent
                            className={this.decorateCSS("card-upper")}
                          >
                            {hasCardTitle && (
                              <Base.H4
                                className={this.decorateCSS("card-title")}
                              >
                                {cardTitle}
                              </Base.H4>
                            )}
                            {(hasCardPrice || hasCardDuration) && (
                              <div className={this.decorateCSS("card-price")}>
                                {hasCardPrice && (
                                  <Base.H2
                                    className={this.decorateCSS("price")}
                                  >
                                    {cardPrice}
                                  </Base.H2>
                                )}
                                {hasCardDuration && (
                                  <Base.H4
                                    className={this.decorateCSS("duration")}
                                  >
                                    {cardDuration}
                                  </Base.H4>
                                )}
                              </div>
                            )}
                          </Base.VerticalContent>
                        )}

                        {hasBottomContent && (
                          <Base.VerticalContent
                            className={`${this.decorateCSS("card-bottom")} ${!hasUpperContent && this.decorateCSS("no-upper")
                              }`}
                          >
                            {hasCardIcon && (
                              <div className={this.decorateCSS("card-img")}>
                                <Base.Media
                                  value={cardIcon}
                                  className={this.decorateCSS("icon")}
                                />
                              </div>
                            )}
                            {hasCardList && (
                              <Base.VerticalContent
                                className={this.decorateCSS("card-list")}
                              >
                                {cardListArr.map(
                                  (listItem: ListItem, listIndex: number) => {
                                    const cardListItemText = this.castToString(
                                      listItem.text
                                    );
                                    const listIcon = listItem.listIcon;
                                    const listIconExists =
                                      !!listIcon &&
                                      (listIcon.name ||
                                        listIcon.url);

                                    if (!cardListItemText && !listIconExists)
                                      return null;

                                    return (
                                      <div
                                        key={`card-list-${index}-${listIndex}`}
                                        className={this.decorateCSS(
                                          "card-list-item"
                                        )}
                                      >
                                        {listIconExists && (
                                          <Base.Media
                                            value={listIcon}
                                            className={this.decorateCSS(
                                              "list-icon"
                                            )}
                                          />
                                        )}
                                        {cardListItemText && (
                                          <Base.P
                                            className={this.decorateCSS(
                                              "list-item"
                                            )}
                                          >
                                            {listItem.text}
                                          </Base.P>
                                        )}
                                      </div>
                                    );
                                  }
                                )}
                              </Base.VerticalContent>
                            )}

                            {hasAnyButton && (
                              <div
                                className={this.decorateCSS("action-buttons")}
                              >
                                {buttons.map((btn, btnIndex: number) => {
                                  const buttonText = btn.text;
                                  const buttonMedia = btn.media;
                                  const buttonUrl = btn.url || "#";
                                  const buttonType = btn.type;

                                  const btnTextExist =
                                    this.castToString(buttonText);
                                  const buttonMediaExist =
                                    buttonMedia &&
                                    (buttonMedia.name || buttonMedia.url);

                                  if (!btnTextExist && !buttonMediaExist)
                                    return null;

                                  return (
                                    <ComposerLink
                                      path={buttonUrl}
                                      key={`pricing-btn-${index}-${btnIndex}`}
                                    >
                                      <Base.Button
                                        buttonType={buttonType}
                                        className={this.decorateCSS(
                                          "card-button"
                                        )}
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
                        )}
                      </div>
                    </Base.VerticalContent>
                  );
                }
              )}
            </Base.ListGrid>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default PricingTable2;
