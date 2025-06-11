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
  cardButtonText: React.JSX.Element;
  cardButtonLink: string;
  cardDuration: React.JSX.Element;
  cardDuration1: React.JSX.Element;
  cardList: string[];
  pricingTableTitle: React.JSX.Element;
  isActive: boolean;
  popular_settings: any;
  text3: string;
  buttonType: INPUTS.CastedButton;
};
class PricingTable1 extends BasePricingTable {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "pricing-table-subtitle",
      displayer: "Subtitle",
      value: "PREDICTABLE PRICING",
    });
    this.addProp({
      type: "string",
      key: "pricing-table-title",
      displayer: "Title",
      value: "Tailored pricing plans for everyone",
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
              value: "Starter",
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
                      type: "icon",
                      key: "buttonIcon",
                      displayer: "In Button Icon",
                      value: "FaCheckCircle",
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
                      type: "icon",
                      key: "buttonIcon",
                      displayer: "In Button Icon",
                      value: "FaCheckCircle",
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
                      type: "icon",
                      key: "buttonIcon",
                      displayer: "In Button Icon",
                      value: "IoMdCloseCircle",
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
                      type: "icon",
                      key: "buttonIcon",
                      displayer: "In Button Icon",
                      value: "IoMdCloseCircle",
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
            INPUTS.BUTTON("buttonType", "Button", "Join this plan", "", null, null, "Primary"),
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
                      type: "icon",
                      key: "buttonIcon",
                      displayer: "In Button Icon",
                      value: "FaCheckCircle",
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
                      type: "icon",
                      key: "buttonIcon",
                      displayer: "In Button Icon",
                      value: "FaCheckCircle",
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
                      type: "icon",
                      key: "buttonIcon",
                      displayer: "In Button Icon",
                      value: "FaCheckCircle",
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
                      type: "icon",
                      key: "buttonIcon",
                      displayer: "In Button Icon",
                      value: "IoMdCloseCircle",
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
            INPUTS.BUTTON("buttonType", "Button", "Join this plan", "", null, null, "Primary"),
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
                      type: "icon",
                      key: "buttonIcon",
                      displayer: "In Button Icon",
                      value: "FaCheckCircle",
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
                      type: "icon",
                      key: "buttonIcon",
                      displayer: "In Button Icon",
                      value: "FaCheckCircle",
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
                      type: "icon",
                      key: "buttonIcon",
                      displayer: "In Button Icon",
                      value: "FaCheckCircle",
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
                      type: "icon",
                      key: "buttonIcon",
                      displayer: "In Button Icon",
                      value: "FaCheckCircle",
                    },
                  ],
                },
              ],
            },
            {
              type: "icon",
              key: "buttonIcon",
              displayer: "In Button Icon",
              value: "BsCheckCircle",
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
            INPUTS.BUTTON("buttonType", "Button", "Join this plan", "", null, null, "Primary"),
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
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "LuCalendarCheck",
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
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "BsWallet2",
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
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaRegClock",
            },
          ],
        },
      ],
    });
    this.addProp({
      type:"multiSelect",
      key: "animations",
      displayer: "Animations",
      value: ["animation1", "animation2"],
      additionalParams:{
        selectItems:["animation1", "animation2"]
      }
    })
  }
  static getName(): string {
    return "Pricing 1";
  }
  render() {
    const subtitle = this.getPropValue("pricing-table-subtitle");
    const title = this.getPropValue("pricing-table-title");

    const subtitleExist = this.castToString(subtitle);
    const titleExist = this.castToString(title);

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("table")}>
            {(subtitleExist || titleExist) && (
              <Base.VerticalContent className={this.decorateCSS("top-titles")}>
                {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("pricing-table-subtitle")}</Base.SectionSubTitle>}
                {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("pricing-table-title")}</Base.SectionTitle>}
              </Base.VerticalContent>
            )}
            <div className={this.decorateCSS("items")}>
              {this.castToObject<Pricing[]>("pricingTableItem").map((table: Pricing, index: number) => {
                const popularText = this.castToString(table.popular_settings.text);
                const cardSubtitleExist = this.castToString(table.cardsubtitle);
                const cardTitleExist = this.castToString(table.cardTitle);

                const cardPriceExist = this.castToString(table.cardPrice);
                const durationExist = this.castToString(table.cardDuration);
                const duration1Exist = this.castToString(table.cardDuration1);

                const cardButtonTextExist = this.castToString(table.buttonType.text);
                const cardpricingTableTitleExist = this.castToString(table.pricingTableTitle);

                return (
                  <div key={index} className={`${this.decorateCSS("item-card")} ${this.getPropValue("animations") 
                  && this.getPropValue("animations").map((animation:string) => this.decorateCSS(animation)).join(" ")} 
                  ${table.isActive && this.decorateCSS("active")} `}>
                    {popularText && (
                      <div className={`${this.decorateCSS("popular-box")} ${table.popular_settings.is_popular && this.decorateCSS("active")}`}>
                        <Base.P className={this.decorateCSS("popular-text")}>{table.popular_settings.text}</Base.P>
                      </div>
                    )}
                    {cardSubtitleExist && <Base.H3 className={this.decorateCSS("cardsubtitle")}>{table.cardsubtitle}</Base.H3>}
                    {cardTitleExist && <Base.H3 className={this.decorateCSS("card-title")}>{table.cardTitle}</Base.H3>}
                    <div className={this.decorateCSS("card-list")}>
                      {table.cardList.map((listItem: any, index: number) => {
                        const cardListItemExist = this.castToString(listItem.cardListItem);
                        const cardExist = listItem.icon || cardListItemExist;

                        return (
                          cardExist && (
                            <Base.Row key={index} className={this.decorateCSS("card-list-item")}>
                              <Base.Icon
                                name={listItem.buttonIcon}
                                propsIcon={{
                                  className: this.decorateCSS("icon"),
                                }}
                              />
                              <span className={this.decorateCSS("list-item")}>{listItem.cardListItem}</span>
                            </Base.Row>
                          )
                        );
                      })}
                    </div>

                    <div className={`${this.decorateCSS("card-bottom")}  ${table.isActive && this.decorateCSS("active")}`}>
                      <div className={`${this.decorateCSS("card-bottom-content")} `}>
                        <div className={`${this.decorateCSS("card-price")}  ${table.isActive && this.decorateCSS("active")}`}>
                          {cardPriceExist && <span className={this.decorateCSS("price")}>{table.cardPrice}</span>}
                          {(durationExist || duration1Exist) && (
                              <div className={this.decorateCSS("card-duration")}>
                                {durationExist && <span className={this.decorateCSS("duration")}>{table.cardDuration}</span>}
                                {duration1Exist && <span className={this.decorateCSS("duration1")}>{table.cardDuration1}</span>}
                              </div>
                            )}
                        </div>
                     
                      {cardButtonTextExist && (
                        <Base.Button buttonType={table.buttonType.type} className={this.decorateCSS("card-button")}>
                          <ComposerLink path={table.buttonType.url}>{table.buttonType.text}</ComposerLink>
                        </Base.Button>
                      )}

                      {cardpricingTableTitleExist && <span className={this.decorateCSS("pricingTitle")}>{table.pricingTableTitle}</span>}
                    </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={this.decorateCSS("titles")}>
              {this.getPropValue("titles").map((title: any) => {
                const text = title.getPropValue("text");
                const icon = title.getPropValue("icon");
                const textExist = this.castToString(text);

                const titleBottomExist = textExist || icon;
                return (
                  titleBottomExist && (
                    <div className={this.decorateCSS("title-bottom")}>
                      {title.getPropValue("icon") && <Base.Icon name={title.getPropValue("icon")}></Base.Icon>}
                      {textExist && <span className={this.decorateCSS("text")}>{title.getPropValue("text")}</span>}
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
