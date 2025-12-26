import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BasePricingTable, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./pricing-table2.module.scss";
import { Base } from "../../../composer-base-components/base/base";

import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type PricingItems = {
  buttons?: INPUTS.CastedButton[];
  cardTitle: React.JSX.Element;
  cardPrice: React.JSX.Element;
  cardDuration: React.JSX.Element;
  cardIcon: TypeMediaInputValue;
  cardList: ListItem[];
  buttonType?: INPUTS.CastedButton;
};

type ListItem = {
  listIcon: TypeMediaInputValue;
  cardListItem: React.JSX.Element;
};

class PricingTable2 extends BasePricingTable {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "pricing-table-subtitle",
      displayer: "Subtitle",
      value: "WORK PACKAGES",
    });
    this.addProp({
      type: "string",
      key: "pricing-table-title",
      displayer: "Title",
      value: "Pricing Plans",
    });
    this.addProp({
      type: "string",
      key: "pricing-table-description",
      displayer: "Description",
      value:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 4,
      max: 5,
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
              key: "cardTitle",
              displayer: "Pricing Title",
              value: "Basic Package",
            },
            {
              type: "string",
              key: "cardPrice",
              displayer: "Price",
              value: "$450",
            },
            {
              type: "string",
              key: "cardDuration",
              displayer: "Duration",
              value: "/month",
            },
            {
              type: "media",
              key: "cardIcon",
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
                      key: "cardListItem",
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
                      key: "cardListItem",
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
                      key: "cardListItem",
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
                      key: "cardListItem",
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
                      key: "cardListItem",
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
        {
          type: "object",
          key: "tableItem",
          displayer: "Table Item",
          value: [
            {
              type: "string",
              key: "cardTitle",
              displayer: "Pricing Title",
              value: "Basic Package",
            },
            {
              type: "string",
              key: "cardPrice",
              displayer: "Price",
              value: "$450",
            },
            {
              type: "string",
              key: "cardDuration",
              displayer: "Duration",
              value: "/month",
            },
            {
              type: "media",
              key: "cardIcon",
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
                      key: "cardListItem",
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
                      key: "cardListItem",
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
                      key: "cardListItem",
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
                      key: "cardListItem",
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
                      key: "cardListItem",
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
        {
          type: "object",
          key: "tableItem",
          displayer: "Table Item",
          value: [
            {
              type: "string",
              key: "cardTitle",
              displayer: "Pricing Title",
              value: "Basic Package",
            },
            {
              type: "string",
              key: "cardPrice",
              displayer: "Price",
              value: "$450",
            },
            {
              type: "string",
              key: "cardDuration",
              displayer: "Duration",
              value: "/month",
            },
            {
              type: "media",
              key: "cardIcon",
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
                      key: "cardListItem",
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
                      key: "cardListItem",
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
                      key: "cardListItem",
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
                      key: "cardListItem",
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
                      key: "cardListItem",
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
        {
          type: "object",
          key: "tableItem",
          displayer: "Table Item",
          value: [
            {
              type: "string",
              key: "cardTitle",
              displayer: "Pricing Title",
              value: "Basic Package",
            },
            {
              type: "string",
              key: "cardPrice",
              displayer: "Price",
              value: "$450",
            },
            {
              type: "string",
              key: "cardDuration",
              displayer: "Duration",
              value: "/month",
            },
            {
              type: "media",
              key: "cardIcon",
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
                      key: "cardListItem",
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
                      key: "cardListItem",
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
                      key: "cardListItem",
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
                      key: "cardListItem",
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
                      key: "cardListItem",
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
      type: "multiSelect",
      key: "animations",
      displayer: "Animations",
      value: ["animation1"],
      additionalParams: {
        selectItems: ["animation1", "animation2"],
      },
    });
  }

  private getButtonsFromItem(item: PricingItems) {
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
    if (!Array.isArray(buttons)) return false;
    return buttons.some(
      (b: any) =>
        this.castToString(b?.text) ||
        (b?.media && ((b as any).media?.name || (b as any).media?.url))
    );
  }

  static getName(): string {
    return "Pricing 2";
  }

  render() {
    const subtitle = this.getPropValue("pricing-table-subtitle");
    const title = this.getPropValue("pricing-table-title");
    const description = this.getPropValue("pricing-table-description");

    const hasTitle = this.castToString(title);
    const hasSubtitle = this.castToString(subtitle);
    const hasDescription = this.castToString(description);
    const hasHeaderContent = hasSubtitle || hasTitle || hasDescription;

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
              </Base.VerticalContent>
            )}
            <Base.ListGrid
              gridCount={{
                pc: this.getPropValue("itemCount"),
                tablet: 2,
                phone: 1,
              }}
              className={this.decorateCSS("item-div")}
            >
              {this.castToObject<PricingItems[]>("pricingTableItem").map(
                (table: PricingItems, index: number) => {
                  const cardTitle = table.cardTitle;
                  const cardPrice = table.cardPrice;
                  const cardDuration = table.cardDuration;
                  const cardIcon = table.cardIcon;

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
                      this.castToString(listItem.cardListItem) ||
                      (!!listItem.listIcon &&
                        ((listItem.listIcon as any).name ||
                          (listItem.listIcon as any).url))
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
                      className={`${this.decorateCSS("card-item-count")} ${
                        this.getPropValue("animations") &&
                        this.getPropValue("animations")
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
                              <Base.H2
                                className={this.decorateCSS("card-title")}
                              >
                                {cardTitle}
                              </Base.H2>
                            )}
                            {(hasCardPrice || hasCardDuration) && (
                              <div className={this.decorateCSS("card-price")}>
                                {hasCardPrice && (
                                  <Base.H1
                                    className={this.decorateCSS("price")}
                                  >
                                    {cardPrice}
                                  </Base.H1>
                                )}
                                {hasCardDuration && (
                                  <Base.H2
                                    className={this.decorateCSS("duration")}
                                  >
                                    {cardDuration}
                                  </Base.H2>
                                )}
                              </div>
                            )}
                          </Base.VerticalContent>
                        )}

                        {hasBottomContent && (
                          <Base.VerticalContent
                          className={`${this.decorateCSS("card-bottom")} ${
                            
                            !hasUpperContent && this.decorateCSS("no-upper")
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
                                      listItem.cardListItem
                                    );
                                    const listIcon = listItem.listIcon;
                                    const listIconExists =
                                      !!listIcon &&
                                      ((listIcon as any).name ||
                                        (listIcon as any).url);

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
                                            {listItem.cardListItem}
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
