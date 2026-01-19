import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BasePricingTable } from "../../EditorComponent";
import styles from "./pricing-table1.module.scss";

import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Pricing = {
  cardTitle: React.JSX.Element;
  cardsubtitle: React.JSX.Element;
  cardPrice: React.JSX.Element;
  buttons: any[];
  cardDuration: React.JSX.Element;
  cardDuration1: React.JSX.Element;
  cardList: string[];
  pricingTableTitle: React.JSX.Element;
  isActive: boolean;
  popular_settings: any;
};

class PricingTable1 extends BasePricingTable {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "PREDICTABLE PRICING",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Tailored pricing plans for everyone",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "boolean",
      key: "cardListLines",
      displayer: "Show card list dividers",
      value: true,
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 3,
      max: 5,
    });

    this.addProp({
      type: "array",
      key: "pricingTableItem",
      displayer: "Pricing Table Item",
      value: [
        {
          type: "object",
          key: "tableItem",
          displayer: "Table Item",
          value: [
            {
              type: "object",
              key: "popular_settings",
              displayer: "Popular Settings",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Text",
                  value: "POPULAR",
                },
                {
                  type: "boolean",
                  key: "is_popular",
                  displayer: "Is Popular?",
                  value: false,
                },
              ],
            },
            {
              type: "string",
              key: "cardsubtitle",
              displayer: "Pricing Subtitle",
              value: "STARTER",
            },
            {
              type: "string",
              key: "cardTitle",
              displayer: "Price Title",
              value: "Individual",
            },
            {
              type: "array",
              key: "cardList",
              displayer: "Feature List",
              value: [
                {
                  type: "object",
                  key: "futureItem",
                  displayer: "Future Item",
                  value: [
                    {
                      type: "string",
                      key: "cardListItem",
                      displayer: "List Item",
                      value: "Marketing strategy",
                    },
                    {
                      type: "media",
                      key: "buttonIcon",
                      displayer: "In Button Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {type: "icon", name: "FaCheckCircle"},
                    },
                  ],
                },
                {
                  type: "object",
                  key: "futureItem",
                  displayer: "Future Item",
                  value: [
                    {
                      type: "string",
                      key: "cardListItem",
                      displayer: "List Item",
                      value: "Competitive work analysis",
                    },
                    {
                      type: "media",
                      key: "buttonIcon",
                      displayer: "In Button Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {type: "icon", name: "FaCheckCircle"},
                    },
                  ],
                },
                {
                  type: "object",
                  key: "futureItem",
                  displayer: "Future Item",
                  value: [
                    {
                      type: "string",
                      key: "cardListItem",
                      displayer: "List Item",
                      value: "Social media share audit",
                    },
                    {
                      type: "media",
                      key: "buttonIcon",
                      displayer: "In Button Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {type: "icon", name: "IoMdCloseCircle"},
                      
                    },
                  ],
                },
                {
                  type: "object",
                  key: "futureItem",
                  displayer: "Future Item",
                  value: [
                    {
                      type: "string",
                      key: "cardListItem",
                      displayer: "List Item",
                      value: "Monthly management",
                    },
                    {
                      type: "media",
                      key: "buttonIcon",
                      displayer: "In Button Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {type: "icon", name: "IoMdCloseCircle"},
                    },
                  ],
                },
              ],
            },
            {
              type: "string",
              key: "cardPrice",
              displayer: "Price",
              value: "$29",
            },
            {
              type: "string",
              key: "cardDuration",
              displayer: "Duration",
              value: "Per user/month ",
            },
            {
              type: "string",
              key: "cardDuration1",
              displayer: "Duration1",
              value: "billed annually*",
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
                  "AiOutlineArrowRight",
                  null,
                  "Primary"
                ),
              ],
            },
            {
              type: "string",
              key: "pricingTableTitle",
              displayer: "Pricing Title",
              value: "Cancel anytime",
            },
            {
              type: "boolean",
              key: "isActive",
              displayer: "Is active",
              value: false,
            },
          ],
        },
        {
          type: "object",
          key: "tableItem",
          displayer: "Table Item",
          value: [
            {
              type: "object",
              key: "popular_settings",
              displayer: "Popular Settings",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Text",
                  value: "POPULAR",
                },
                {
                  type: "boolean",
                  key: "is_popular",
                  displayer: "Is Popular?",
                  value: true,
                },
              ],
            },
            {
              type: "string",
              key: "cardsubtitle",
              displayer: "Pricing Subtitle",
              value: "PROFESSIONAL",
            },
            {
              type: "string",
              key: "cardTitle",
              displayer: "Price Title",
              value: "Business",
            },
            {
              type: "array",
              key: "cardList",
              displayer: "Feature List",
              value: [
                {
                  type: "object",
                  key: "futureItem",
                  displayer: "Future Item",
                  value: [
                    {
                      type: "string",
                      key: "cardListItem",
                      displayer: "List Item",
                      value: "Marketing strategy",
                    },
                    {
                      type: "media",
                      key: "buttonIcon",
                      displayer: "In Button Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {type: "icon", name: "FaCheckCircle"},
                    },
                  ],
                },
                {
                  type: "object",
                  key: "futureItem",
                  displayer: "Future Item",
                  value: [
                    {
                      type: "string",
                      key: "cardListItem",
                      displayer: "List Item",
                      value: "Competitive work analysis",
                    },
                    {
                      type: "media",
                      key: "buttonIcon",
                      displayer: "In Button Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {type: "icon", name: "FaCheckCircle"},
                    },
                  ],
                },
                {
                  type: "object",
                  key: "futureItem",
                  displayer: "Future Item",
                  value: [
                    {
                      type: "string",
                      key: "cardListItem",
                      displayer: "List Item",
                      value: "Social media share audit",
                    },
                    {
                      type: "media",
                      key: "buttonIcon",
                      displayer: "In Button Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {type: "icon", name: "FaCheckCircle"},
                    },
                  ],
                },
                {
                  type: "object",
                  key: "futureItem",
                  displayer: "Future Item",
                  value: [
                    {
                      type: "string",
                      key: "cardListItem",
                      displayer: "List Item",
                      value: "Monthly management",
                    },
                    {
                      type: "media",
                      key: "buttonIcon",
                      displayer: "In Button Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {type: "icon", name: "IoMdCloseCircle"},
                    },
                  ],
                },
              ],
            },
            {
              type: "string",
              key: "cardPrice",
              displayer: "Price",
              value: "$39",
            },
            {
              type: "string",
              key: "cardDuration",
              displayer: "Duration",
              value: "Per user/month",
            },
            {
              type: "string",
              key: "cardDuration1",
              displayer: "Duration1",
              value: " billed annually*",
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
                  "AiOutlineArrowRight",
                  null,
                  "Primary"
                ),
              ],
            },
            {
              type: "string",
              key: "pricingTableTitle",
              displayer: "Pricing Title",
              value: "Cancel anytime",
            },
            {
              type: "boolean",
              key: "isActive",
              displayer: "Is active",
              value: true,
            },
          ],
        },
        {
          type: "object",
          key: "tableItem",
          displayer: "Table Item",
          value: [
            {
              type: "object",
              key: "popular_settings",
              displayer: "Popular Settings",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Text",
                  value: "POPULAR",
                },
                {
                  type: "boolean",
                  key: "is_popular",
                  displayer: "Is Popular?",
                  value: false,
                },
              ],
            },
            {
              type: "string",
              key: "cardsubtitle",
              displayer: "Pricing Subtitle",
              value: "ENTERPRISE",
            },
            {
              type: "string",
              key: "cardTitle",
              displayer: "Price Title",
              value: "Corporate",
            },
            {
              type: "array",
              key: "cardList",
              displayer: "Feature List",
              value: [
                {
                  type: "object",
                  key: "futureItem",
                  displayer: "Future Item",
                  value: [
                    {
                      type: "string",
                      key: "cardListItem",
                      displayer: "List Item",
                      value: "Marketing strategy",
                    },
                    {
                      type: "media",
                      key: "buttonIcon",
                      displayer: "In Button Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {type: "icon", name: "FaCheckCircle"},
                    },
                  ],
                },
                {
                  type: "object",
                  key: "futureItem",
                  displayer: "Future Item",
                  value: [
                    {
                      type: "string",
                      key: "cardListItem",
                      displayer: "List Item",
                      value: "Competitive work analysis",
                    },
                    {
                      type: "media",
                      key: "buttonIcon",
                      displayer: "In Button Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {type: "icon", name: "FaCheckCircle"},
                    },
                  ],
                },
                {
                  type: "object",
                  key: "futureItem",
                  displayer: "Future Item",
                  value: [
                    {
                      type: "string",
                      key: "cardListItem",
                      displayer: "List Item",
                      value: "Social media share audit",
                    },
                    {
                      type: "media",
                      key: "buttonIcon",
                      displayer: "In Button Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {type: "icon", name: "FaCheckCircle"},
                    },
                  ],
                },
                {
                  type: "object",
                  key: "futureItem",
                  displayer: "Future Item",
                  value: [
                    {
                      type: "string",
                      key: "cardListItem",
                      displayer: "List Item",
                      value: "Monthly management",
                    },
                    {
                      type: "media",
                      key: "buttonIcon",
                      displayer: "In Button Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {type: "icon", name: "FaCheckCircle"},
                    },
                  ],
                },
              ],
            },
            {
              type: "media",
              key: "buttonIcon",
              displayer: "In Button Icon",
              additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {type: "icon", name: "BsCheckCircle"},
              
            },
            {
              type: "string",
              key: "cardPrice",
              displayer: "Price",
              value: "$59",
            },
            {
              type: "string",
              key: "cardDuration",
              displayer: "Duration",
              value: "Per user/month",
            },
            {
              type: "string",
              key: "cardDuration1",
              displayer: "Duration1",
              value: " billed annually*",
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
                  "AiOutlineArrowRight",
                  null,
                  "Primary"
                ),
              ],
            },
            {
              type: "string",
              key: "pricingTableTitle",
              displayer: "Pricing Title",
              value: "Cancel anytime",
            },
            {
              type: "boolean",
              key: "isActive",
              displayer: "Is active",
              value: false,
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "titles",
      displayer: "Titles",
      value: [
        {
          type: "object",
          key: "title",
          displayer: "Title",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Get 30 day free trial",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: { type: "icon", name: "LuCalendarCheck" },
            },
          ],
        },
        {
          type: "object",
          key: "title",
          displayer: "Title",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "No any hidden fees pay",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: { type: "icon", name: "BsWallet2" },
            },
          ],
        },
        {
          type: "object",
          key: "title",
          displayer: "Title",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "You can cancel anytime",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: { type: "icon", name: "FaRegClock" },
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "multiSelect",
      key: "animations",
      displayer: "Animations",
      value: ["animation1", "animation2"],
      additionalParams: {
        selectItems: ["animation1", "animation2"],
      },
    });
  }

  static getName(): string {
    return "Pricing 1";
  }

  getButtonsFromItem = (item: Pricing) => {
    const buttonsArray = item?.buttons;
    if (!buttonsArray) return [];

    return buttonsArray.map((btn: { value?: any }) => {
      const parent = btn?.value;
      const icon = this.getPropValue("icon", { parent_object: parent });
      const media = icon || null;
      return {
        text: this.getPropValue("text", { parent_object: parent }),
        type: this.getPropValue("type", { parent_object: parent }),
        url: this.getPropValue("url", { parent_object: parent }),
        media,
      };
    });
  };

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");

    const subtitleExist = this.castToString(subtitle);
    const titleExist = this.castToString(title);
    const descriptionExist = this.castToString(description);
    
    const alignmentValue = Base.getContentAlignment();

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("table")}>
            {(subtitleExist || titleExist || descriptionExist) && (
              <Base.VerticalContent className={this.decorateCSS("top-titles")}>
                {subtitleExist && (
                  <div className={this.decorateCSS("subtitle-wrapper")}>
                    <Base.SectionSubTitle
                      className={this.decorateCSS("subtitle")}
                    >
                      {subtitle}
                    </Base.SectionSubTitle>
                  </div>
                )}
                {titleExist && (
                  <Base.SectionTitle className={this.decorateCSS("title")}>
                    {title}
                  </Base.SectionTitle>
                )}
                {descriptionExist && (
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
              className={this.decorateCSS("items")}
            >
              {this.castToObject<Pricing[]>("pricingTableItem").map(
                (table: Pricing, index: number) => {
                  const popularText = this.castToString(
                    table.popular_settings.text
                  );
                  const popularBoxExist = popularText && table.popular_settings.is_popular;
                  
                  const cardSubtitleExist = this.castToString(
                    table.cardsubtitle
                  );
                  const cardTitleExist = this.castToString(table.cardTitle);

                  const cardPriceExist = this.castToString(table.cardPrice);
                  const durationExist = this.castToString(table.cardDuration);
                  const duration1Exist = this.castToString(table.cardDuration1);

                  const cardpricingTableTitleExist = this.castToString(
                    table.pricingTableTitle
                  );

                  const buttons = this.getButtonsFromItem(table);

                  const hasCardList = table.cardList && table.cardList.some((listItem: any) => {
                    const cardListItemExist = this.castToString(listItem.cardListItem);
                    const buttonIconExist = listItem.buttonIcon && (listItem.buttonIcon.name || listItem.buttonIcon.url);
                    return cardListItemExist || buttonIconExist;
                  });

                  const hasButtons = buttons && buttons.some((btn) => {
                    const btnTextExist = this.castToString(btn.text);
                    const buttonMediaExist = btn.media && (btn.media.name || btn.media.url);
                    return btnTextExist || buttonMediaExist;
                  });

                  const hasAnyContent = popularBoxExist || cardSubtitleExist || cardTitleExist || 
                                       cardPriceExist || durationExist || duration1Exist || 
                                       cardpricingTableTitleExist || hasCardList || hasButtons;

                  if (!hasAnyContent) return null;

                  return (
                    <div
                      key={index}
                      className={`${this.decorateCSS("item-card")} ${
                        this.getPropValue("animations") &&
                        this.getPropValue("animations")
                          .map((animation: string) =>
                            this.decorateCSS(animation)
                          )
                          .join(" ")
                      } 
                  ${table.isActive && this.decorateCSS("active")} `}
                    >
                      {popularBoxExist && (
                        <div
                          className={`${this.decorateCSS("popular-box")} ${
                            table.popular_settings.is_popular &&
                            this.decorateCSS("active")
                          }`}
                        >
                          <Base.P className={this.decorateCSS("popular-text")}>
                            {table.popular_settings.text}
                          </Base.P>
                        </div>
                      )}
                      {cardSubtitleExist && (
                        <div 
                          className={`${this.decorateCSS("cardsubtitle-wrapper")} ${
                            alignmentValue === "center" ? this.decorateCSS("center") : ""
                          }`}
                        >
                          <Base.H3 className={this.decorateCSS("cardsubtitle")}>
                            {table.cardsubtitle}
                          </Base.H3>
                        </div>
                      )}
                      {cardTitleExist && (
                        <Base.H3 className={this.decorateCSS("card-title")}>
                          {table.cardTitle}
                        </Base.H3>
                      )}
                      <div className={this.decorateCSS("card-list")}>
                        {(() => {
                          const showListLines = this.getPropValue("cardListLines");
                          return table.cardList.map((listItem: any, index: number) => {
                            const cardListItemExist = this.castToString(
                              listItem.cardListItem
                            );
                            const buttonIconExist = listItem.buttonIcon && (listItem.buttonIcon.name || listItem.buttonIcon.url);
                            const cardExist = buttonIconExist || cardListItemExist;

                            return (
                              cardExist && (
                                <Base.Row
                                  key={index}
                                  className={`${this.decorateCSS("card-list-item")} ${
                                    !showListLines ? this.decorateCSS("no-lines") : ""
                                  }`}
                                >
                                  {buttonIconExist && (
                                    <Base.Media
                                      value={listItem.buttonIcon}
                                      className={this.decorateCSS("icon")}
                                    />
                                  )}
                                  {cardListItemExist && (
                                    <Base.P className={this.decorateCSS("list-item")}>
                                      {listItem.cardListItem}
                                    </Base.P>
                                  )}
                                </Base.Row>
                              )
                            );
                          });
                        })()}
                     </div>

                      <div
                        className={`${this.decorateCSS("card-bottom")}  ${
                          table.isActive && this.decorateCSS("active")
                        }`}
                      >
                        <div
                          className={`${this.decorateCSS(
                            "card-bottom-content"
                          )} `}
                        >
                          <div
                            className={`${this.decorateCSS("card-price")}  ${
                              table.isActive && this.decorateCSS("active")
                            }`}
                          >
                            {cardPriceExist && (
                              <Base.P className={this.decorateCSS("price")}>
                                {table.cardPrice}
                              </Base.P>
                            )}
                            {(durationExist || duration1Exist) && (
                              <div
                                className={this.decorateCSS("card-duration")}
                              >
                                {durationExist && (
                                  <Base.P className={this.decorateCSS("duration")}>
                                    {table.cardDuration}
                                  </Base.P>
                                )}
                                {duration1Exist && (
                                  <Base.P className={this.decorateCSS("duration1")}>
                                    {table.cardDuration1}
                                  </Base.P>
                                )}
                              </div>
                            )}
                          </div>
                            <div className={this.decorateCSS("button-wrapper")}>
                          {buttons.map((btn, btnIndex: number) => {
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
                                key={`pricing-btn-${btnIndex}`}
                              >
                                <Base.Button
                                  buttonType={buttonType}
                                  className={this.decorateCSS("card-button")}
                                >
                                  {btnTextExist && (
                                    <Base.P className={this.decorateCSS("button-text")}>{buttonText}</Base.P>
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
                          {cardpricingTableTitleExist && (
                            <Base.P className={this.decorateCSS("pricingTitle")}>
                              {table.pricingTableTitle}
                            </Base.P>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </Base.ListGrid>
            <div className={this.decorateCSS("titles")}>
              {this.getPropValue("titles").map((title: any) => {
                const text = title.getPropValue("text");
                const icon = title.getPropValue("icon");
                const textExist = this.castToString(text);
                const iconExist = icon && (icon.name || icon.url);

                const titleBottomExist = textExist || iconExist;
                return (
                  titleBottomExist && (
                    <div className={this.decorateCSS("title-bottom")}>
                      {iconExist && (
                        <Base.Media value={icon} className={this.decorateCSS("bottom-icon")} />
                      )}
                      {textExist && (
                        <Base.P className={this.decorateCSS("text")}>
                          {text}
                        </Base.P>
                        
                      )}
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default PricingTable1;