import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BasePricingTable, TypeMediaInputValue, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./pricing-table1.module.scss";

import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type PopularSettings = {
  text: JSX.Element;
  is_popular: boolean;
};

type ListItem = {
  text: JSX.Element;
  buttonIcon: TypeMediaInputValue;
};

type RawButtonProp = {
  value?: TypeUsableComponentProps[];
};

type TitleItem = {
  text: JSX.Element;
  icon: TypeMediaInputValue;
};

type Pricing = {
  title: JSX.Element;
  subtitle: JSX.Element;
  description: JSX.Element;
  price: JSX.Element;
  buttons: RawButtonProp[];
  duration: JSX.Element;
  duration1: JSX.Element;
  list: ListItem[];
  note: JSX.Element;
  isActive: boolean;
  popular_settings: PopularSettings;
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
              key: "subtitle",
              displayer: "Pricing Subtitle",
              value: "STARTER",
            },
            {
              type: "string",
              key: "title",
              displayer: "Price Title",
              value: "Individual",
            },
            {
              type: "string",
              key: "description",
              displayer: "Pricing Description",
              value: "",
            },
            {
              type: "array",
              key: "list",
              displayer: "Feature List",
              value: [
                {
                  type: "object",
                  key: "futureItem",
                  displayer: "Future Item",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "List Item",
                      value: "Marketing strategy",
                    },
                    {
                      type: "media",
                      key: "buttonIcon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FaCheckCircle" },
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
                      key: "text",
                      displayer: "List Item",
                      value: "Competitive work analysis",
                    },
                    {
                      type: "media",
                      key: "buttonIcon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FaCheckCircle" },
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
                      key: "text",
                      displayer: "List Item",
                      value: "Social media share audit",
                    },
                    {
                      type: "media",
                      key: "buttonIcon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "IoMdCloseCircle" },
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
                      key: "text",
                      displayer: "List Item",
                      value: "Monthly management",
                    },
                    {
                      type: "media",
                      key: "buttonIcon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "IoMdCloseCircle" },
                    },
                  ],
                },
              ],
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$29",
            },
            {
              type: "string",
              key: "duration",
              displayer: "Duration",
              value: "Per user/month ",
            },
            {
              type: "string",
              key: "duration1",
              displayer: "Duration1",
              value: "billed annually*",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "Join this plan", "", "AiOutlineArrowRight", null, "Primary"),
              ],
            },
            {
              type: "string",
              key: "note",
              displayer: "Pricing Title",
              value: "Cancel anytime",
            },
            {
              type: "boolean",
              key: "isActive",
              displayer: "Card Active",
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
              key: "subtitle",
              displayer: "Pricing Subtitle",
              value: "PROFESSIONAL",
            },
            {
              type: "string",
              key: "title",
              displayer: "Pricing Title",
              value: "Business",
            },
            {
              type: "string",
              key: "description",
              displayer: "Pricing Description",
              value: "",
            },
            {
              type: "array",
              key: "list",
              displayer: "Feature List",
              value: [
                {
                  type: "object",
                  key: "futureItem",
                  displayer: "Future Item",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "List Item",
                      value: "Marketing strategy",
                    },
                    {
                      type: "media",
                      key: "buttonIcon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FaCheckCircle" },
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
                      key: "text",
                      displayer: "List Item",
                      value: "Competitive work analysis",
                    },
                    {
                      type: "media",
                      key: "buttonIcon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FaCheckCircle" },
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
                      key: "text",
                      displayer: "List Item",
                      value: "Social media share audit",
                    },
                    {
                      type: "media",
                      key: "buttonIcon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FaCheckCircle" },
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
                      key: "text",
                      displayer: "List Item",
                      value: "Monthly management",
                    },
                    {
                      type: "media",
                      key: "buttonIcon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "IoMdCloseCircle" },
                    },
                  ],
                },
              ],
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$39",
            },
            {
              type: "string",
              key: "duration",
              displayer: "Duration",
              value: "Per user/month",
            },
            {
              type: "string",
              key: "duration1",
              displayer: "Duration1",
              value: "billed annually*",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "Join this plan", "", "AiOutlineArrowRight", null, "Primary"),
              ],
            },
            {
              type: "string",
              key: "note",
              displayer: "Pricing Title",
              value: "Cancel anytime",
            },
            {
              type: "boolean",
              key: "isActive",
              displayer: "Card Active",
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
              key: "subtitle",
              displayer: "Pricing Subtitle",
              value: "ENTERPRISE",
            },
            {
              type: "string",
              key: "title",
              displayer: "Price Title",
              value: "Corporate",
            },
            {
              type: "string",
              key: "description",
              displayer: "Pricing Description",
              value: "",
            },
            {
              type: "array",
              key: "list",
              displayer: "Feature List",
              value: [
                {
                  type: "object",
                  key: "futureItem",
                  displayer: "Future Item",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "List Item",
                      value: "Marketing strategy",
                    },
                    {
                      type: "media",
                      key: "buttonIcon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FaCheckCircle" },
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
                      key: "text",
                      displayer: "List Item",
                      value: "Competitive work analysis",
                    },
                    {
                      type: "media",
                      key: "buttonIcon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FaCheckCircle" },
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
                      key: "text",
                      displayer: "List Item",
                      value: "Social media share audit",
                    },
                    {
                      type: "media",
                      key: "buttonIcon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FaCheckCircle" },
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
                      key: "text",
                      displayer: "List Item",
                      value: "Monthly management",
                    },
                    {
                      type: "media",
                      key: "buttonIcon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FaCheckCircle" },
                    },
                  ],
                },
              ],
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$59",
            },
            {
              type: "string",
              key: "duration",
              displayer: "Duration",
              value: "Per user/month",
            },
            {
              type: "string",
              key: "duration1",
              displayer: "Duration1",
              value: " billed annually*",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "Join this plan", "", "AiOutlineArrowRight", null, "Primary"),
              ],
            },
            {
              type: "string",
              key: "note",
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
      type: "object",
      key: "settings",
      displayer: "Settings",
      value: [
        {
          type: "boolean",
          key: "cardListLines",
          displayer: "Line",
          value: true,
        },
        {
          type: "number",
          key: "itemCount",
          displayer: "Item Count in a Row",
          value: 3,
          max: 6,
        },
        {
          type: "multiSelect",
          key: "animations",
          displayer: "Animations",
          value: ["animation1", "animation2"],
          additionalParams: {
            selectItems: ["animation1", "animation2"],
          },
        },
      ],
    });
  }

  static getName(): string {
    return "Pricing 1";
  }

  getButtonsFromItem = (item: Pricing) => {
    if (!item?.buttons) return [];
    return item.buttons.map((btn) => {
      const parent = btn?.value;
      return {
        text: this.getPropValue("text", { parent_object: parent }),
        type: this.getPropValue("type", { parent_object: parent }),
        url: this.getPropValue("url", { parent_object: parent }),
        media: this.getPropValue("icon", { parent_object: parent }),
      };
    });
  };

  render() {
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const hasValidButtons = buttons.some((btn) => {
      const buttonText = this.castToString(btn.text);
      const iconExist = btn.icon && btn.icon.name;
      return buttonText || iconExist;
    });

    const settings = this.castToObject<{ cardListLines: boolean; itemCount: number; animations: string[] }>("settings");
    const showListLines = settings.cardListLines;
    const animationClasses = (settings.animations as string[] || [])
      .map((a) => this.decorateCSS(a))
      .join(" ");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("upper-section")}>
            {(subtitleExist || titleExist || descriptionExist || hasValidButtons) && (
              <Base.VerticalContent className={this.decorateCSS("top-titles")}>
                {subtitleExist && (
                  <Base.SectionSubTitle
                    className={this.decorateCSS("subtitle")}
                  >
                    {this.getPropValue("subtitle")}
                  </Base.SectionSubTitle>
                )}
                {titleExist && (
                  <Base.SectionTitle className={this.decorateCSS("title")}>
                    {this.getPropValue("title")}
                  </Base.SectionTitle>
                )}
                {descriptionExist && (
                  <Base.SectionDescription
                    className={this.decorateCSS("description")}
                  >
                    {this.getPropValue("description")}
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
                              <Base.P className={this.decorateCSS("button-text")}>
                                {item.text}
                              </Base.P>
                            )}
                            {iconExist && (
                              <Base.Media className={this.decorateCSS("button-icon")} value={item.icon!} />
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
              className={this.decorateCSS("items")}
            >
              {this.castToObject<Pricing[]>("pricingTableItem").map(
                (table: Pricing, index: number) => {
                  const popularText = this.castToString(
                    table.popular_settings.text
                  );
                  const popularBoxExist = popularText && table.popular_settings.is_popular;

                  const cardSubtitleExist = this.castToString(
                    table.subtitle
                  );
                  const cardTitleExist = this.castToString(table.title);
                  const cardDescriptionExist = this.castToString(table.description);

                  const cardPriceExist = this.castToString(table.price);
                  const durationExist = this.castToString(table.duration);
                  const duration1Exist = this.castToString(table.duration1);

                  const cardpricingTableTitleExist = this.castToString(
                    table.note
                  );

                  const buttons = this.getButtonsFromItem(table);

                  const hasCardList = table.list && table.list.some((listItem: ListItem) => {
                    const cardListItemExist = this.castToString(listItem.text);
                    const buttonIconExist = listItem.buttonIcon && (listItem.buttonIcon.type === "icon" ? listItem.buttonIcon.name : listItem.buttonIcon.url);
                    return cardListItemExist || buttonIconExist;
                  });

                  const hasButtons = buttons && buttons.some((btn) => {
                    const btnTextExist = this.castToString(btn.text);
                    const buttonMediaExist = btn.media && (btn.media.type === "icon" ? btn.media.name : btn.media.url);
                    return btnTextExist || buttonMediaExist;
                  });

                  const hasAnyContent = popularBoxExist || cardSubtitleExist || cardTitleExist || cardDescriptionExist ||
                    cardPriceExist || durationExist || duration1Exist ||
                    cardpricingTableTitleExist || hasCardList || hasButtons;

                  if (!hasAnyContent) return null;

                  return (
                    <div
                      key={index}
                      className={`${this.decorateCSS("item-card")} ${animationClasses} ${table.isActive ? this.decorateCSS("active") : ""}`}
                    >
                      <Base.VerticalContent className={this.decorateCSS("card-content")}>
                        {popularBoxExist && (
                          <div
                            className={`${this.decorateCSS("popular-box")} ${table.popular_settings.is_popular ? this.decorateCSS("active") : ""}`}
                          >
                            <Base.P className={this.decorateCSS("popular-text")}>
                              {table.popular_settings.text}
                            </Base.P>
                          </div>
                        )}
                        {(cardSubtitleExist || cardTitleExist || cardDescriptionExist) && (
                          <div className={this.decorateCSS("card-top-content")}>
                            {cardSubtitleExist && (
                              <div className={`${this.decorateCSS("cardsubtitle-wrapper")} ${this.decorateCSS("center")}`}>
                                <Base.SectionDescription className={this.decorateCSS("cardsubtitle")}>
                                  {table.subtitle}
                                </Base.SectionDescription>
                              </div>
                            )}
                            {(cardTitleExist || cardDescriptionExist) && (
                              <Base.VerticalContent className={this.decorateCSS("card-text-area")}>
                                {cardTitleExist && (
                                  <Base.H3 className={`${this.decorateCSS("card-title")} ${this.decorateCSS("center")}`}>
                                    {table.title}
                                  </Base.H3>
                                )}
                                {cardDescriptionExist && (
                                  <Base.P className={this.decorateCSS("card-description")}>
                                    {table.description}
                                  </Base.P>
                                )}
                              </Base.VerticalContent>
                            )}
                          </div>
                        )}
                        {hasCardList && (
                          <div className={this.decorateCSS("card-list")}>
                            {table.list.map((listItem: ListItem, listIdx: number) => {
                              const cardListItemExist = this.castToString(listItem.text);
                              const buttonIconExist = listItem.buttonIcon && (listItem.buttonIcon.type === "icon" ? listItem.buttonIcon.name : listItem.buttonIcon.url);
                              if (!buttonIconExist && !cardListItemExist) return null;
                              return (
                                <Base.Row
                                  key={listIdx}
                                  className={this.decorateCSS("card-list-item")}
                                >
                                  {showListLines && <div className={this.decorateCSS("card-list-line")} />}
                                  {buttonIconExist && (
                                    <Base.Media
                                      value={listItem.buttonIcon}
                                      className={this.decorateCSS("icon")}
                                    />
                                  )}
                                  {cardListItemExist && (
                                    <Base.H6 className={this.decorateCSS("list-item")}>
                                      {listItem.text}
                                    </Base.H6>
                                  )}
                                </Base.Row>
                              );
                            })}
                          </div>
                        )}

                        {(cardPriceExist || durationExist || duration1Exist || hasButtons || cardpricingTableTitleExist) && (
                          <div
                            className={`${this.decorateCSS("card-bottom")} ${table.isActive ? this.decorateCSS("active") : ""}`}
                          >
                            <Base.VerticalContent className={this.decorateCSS("card-bottom-content")}>
                              {(cardPriceExist || durationExist || duration1Exist) && (
                                <div
                                  className={`${this.decorateCSS("card-price")} ${table.isActive ? this.decorateCSS("active") : ""}`}
                                >
                                  {cardPriceExist && (
                                    <Base.P className={this.decorateCSS("price")}>
                                      {table.price}
                                    </Base.P>
                                  )}
                                  {(durationExist || duration1Exist) && (
                                    <div
                                      className={this.decorateCSS("card-duration")}
                                    >
                                      {durationExist && (
                                        <Base.P className={this.decorateCSS("duration")}>
                                          {table.duration}
                                        </Base.P>
                                      )}
                                      {duration1Exist && (
                                        <Base.P className={this.decorateCSS("duration1")}>
                                          {table.duration1}
                                        </Base.P>
                                      )}
                                    </div>
                                  )}
                                </div>
                              )}
                              {hasButtons && (
                                <div className={this.decorateCSS("button-wrapper")}>
                                  {buttons.map((btn, btnIndex: number) => {
                                    const buttonText = btn.text;
                                    const buttonMedia = btn.media;
                                    const buttonUrl = btn.url || "#";
                                    const buttonType = btn.type;

                                    const btnTextExist = this.castToString(buttonText);
                                    const buttonMediaExist = buttonMedia && (buttonMedia.type === "icon" ? buttonMedia.name : buttonMedia.url);

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
                              )}
                              {cardpricingTableTitleExist && (
                                <Base.P className={this.decorateCSS("pricingTitle")}>
                                  {table.note}
                                </Base.P>
                              )}
                            </Base.VerticalContent>
                          </div>
                        )}
                      </Base.VerticalContent>
                    </div>
                  );
                }
              )}
            </Base.ListGrid>
          </div>
          <div className={this.decorateCSS("titles")}>
            {this.castToObject<TitleItem[]>("titles").map((title: TitleItem, index: number) => {
              const text = title.text;
              const icon = title.icon;
              const textExist = this.castToString(text);
              const iconExist = icon && (icon.type === "icon" ? icon.name : icon.url);

              const titleBottomExist = textExist || iconExist;
              return (
                titleBottomExist && (
                  <div key={index} className={this.decorateCSS("title-bottom")}>
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
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default PricingTable1;