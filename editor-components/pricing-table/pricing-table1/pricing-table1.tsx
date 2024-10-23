import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BasePricingTable } from "../../EditorComponent";
import styles from "./pricing-table1.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";

type Pricing = {
  buttonIcon: string;
  buttonText: string;
  link: string;
  cardTitle: string;
  cardsubtitle: string;
  cardPrice: string;
  cardButtonText: string;
  cardButtonLink: string;
  cardDuration: string;
  cardDuration1: string;
  cardList: string[];
  pricingTableTitle: string;
  buttonColor: string;
  isActive: boolean;
  popular_settings: any;
  text3: string;
};
class PricingTable1 extends BasePricingTable {

  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "pricing-table-subtitle",
      displayer: "subtitle",
      value: "PREDICTABLE PRICING",
    });
    this.addProp({
      type: "string",
      key: "pricing-table-title",
      displayer: "title",
      value: "Tailored pricing plans for everyone",
    });
    this.addProp({
      type: "array",
      key: "titles",
      displayer: "titles",
      value: [
        {
          type: "object",
          key: "title",
          displayer: "title",
          value: [{
            type: "string",
            key: "text",
            displayer: "text",
            value: "Get 30 day free trial",
          },
          {
            type: "icon",
            key: "icon",
            displayer: "icon",
            value: "LuCalendarCheck"
          }
          ]
        },
        {
          type: "object",
          key: "title",
          displayer: "title",
          value: [{
            type: "string",
            key: "text",
            displayer: "text",
            value: "No any hidden fees pay",
          },
          {
            type: "icon",
            key: "icon",
            displayer: "icon",
            value: "BsWallet2"
          }
          ]
        },
        {
          type: "object",
          key: "title",
          displayer: "title",
          value: [{
            type: "string",
            key: "text",
            displayer: "text",
            value: "You can cancel anytime",
          },
          {
            type: "icon",
            key: "icon",
            displayer: "icon",
            value: "FaRegClock"
          }
          ]
        }
      ]
    })

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
                  value: "POPULAR"
                },
                {
                  type: "boolean",
                  key: "is_popular",
                  displayer: "Is Popular?",
                  value: false
                },
              ]
            },
            {
              type: "string",
              key: "cardsubtitle",
              displayer: "Pricing Subtitle",
              value: "Starter"
            },
            {
              type: "string",
              key: "cardTitle",
              displayer: "Price Title",
              value: "Individual"
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
                      value: "Marketing strategy"
                    },
                    {
                      type: "icon",
                      key: "buttonIcon",
                      displayer: "In Button Icon",
                      value: "FaCheckCircle"
                    },
                    {
                      type: "color",
                      key: "buttonColor",
                      displayer: "Button Color",
                      value: "green",
                    }
                  ]
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
                      value: "Competitive work analysis"
                    },
                    {
                      type: "icon",
                      key: "buttonIcon",
                      displayer: "In Button Icon",
                      value: "FaCheckCircle"
                    },
                    {
                      type: "color",
                      key: "buttonColor",
                      displayer: "Button Color",
                      value: "green",
                    }
                  ]
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
                      value: "Social media share audit"
                    },
                    {
                      type: "icon",
                      key: "buttonIcon",
                      displayer: "In Button Icon",
                      value: "IoMdCloseCircle"
                    },
                    {
                      type: "color",
                      key: "buttonColor",
                      displayer: "Button Color",
                      value: "red",
                    }
                  ]
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
                      value: "Monthly management"
                    },
                    {
                      type: "icon",
                      key: "buttonIcon",
                      displayer: "In Button Icon",
                      value: "IoMdCloseCircle"
                    },
                    {
                      type: "color",
                      key: "buttonColor",
                      displayer: "Button Color",
                      value: "red",
                    }
                  ]
                },
              ],
            },
            {
              type: "string",
              key: "cardPrice",
              displayer: "Price",
              value: "$29"
            },
            {
              type: "string",
              key: "cardDuration",
              displayer: "Duration",
              value: "Per user/month "
            },
            {
              type: "string",
              key: "cardDuration1",
              displayer: "Duration1",
              value: "billed annually*"
            },

            {
              type: "string",
              key: "cardButtonText",
              displayer: "Button Text",
              value: "Join this plan"
            },
            {
              type: "page",
              key: "cardButtonLink",
              displayer: "Button Link",
              value: ""
            },
            {
              type: "string",
              key: "pricingTableTitle",
              displayer: "pricingTitle",
              value: "Cancel anytime",
            },
            {
              type: "boolean",
              key: "isActive",
              displayer: "ıs active",
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
                  value: "POPULAR"
                },
                {
                  type: "boolean",
                  key: "is_popular",
                  displayer: "Is Popular?",
                  value: true
                },
              ]
            },
            {
              type: "string",
              key: "cardsubtitle",
              displayer: "Pricing Subtitle",
              value: "PROFESSIONAL"
            },
            {
              type: "string",
              key: "cardTitle",
              displayer: "Price Title",
              value: "Business"
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
                      value: "Marketing strategy"
                    },
                    {
                      type: "icon",
                      key: "buttonIcon",
                      displayer: "In Button Icon",
                      value: "FaCheckCircle"
                    },
                    {
                      type: "color",
                      key: "buttonColor",
                      displayer: "Button Color",
                      value: "green",
                    }
                  ]
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
                      value: "Competitive work analysis"
                    },
                    {
                      type: "icon",
                      key: "buttonIcon",
                      displayer: "In Button Icon",
                      value: "FaCheckCircle"
                    },
                    {
                      type: "color",
                      key: "buttonColor",
                      displayer: "Button Color",
                      value: "green",
                    }
                  ]
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
                      value: "Social media share audit"
                    },
                    {
                      type: "icon",
                      key: "buttonIcon",
                      displayer: "In Button Icon",
                      value: "FaCheckCircle"
                    },
                    {
                      type: "color",
                      key: "buttonColor",
                      displayer: "Button Color",
                      value: "green",
                    }
                  ]
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
                      value: "Monthly management"
                    },
                    {
                      type: "icon",
                      key: "buttonIcon",
                      displayer: "In Button Icon",
                      value: "IoMdCloseCircle"
                    },
                    {
                      type: "color",
                      key: "buttonColor",
                      displayer: "Button Color",
                      value: "red",
                    }
                  ]
                },
              ],
            },
            {
              type: "string",
              key: "cardPrice",
              displayer: "Price",
              value: "$39"
            },
            {
              type: "string",
              key: "cardDuration",
              displayer: "Duration",
              value: "Per user/month"
            },
            {
              type: "string",
              key: "cardDuration1",
              displayer: "Duration1",
              value: " billed annually*"
            },
            {
              type: "string",
              key: "cardButtonText",
              displayer: "Button Text",
              value: "Join this plan"
            },
            {
              type: "page",
              key: "cardButtonLink",
              displayer: "Button Link",
              value: ""
            },
            {
              type: "string",
              key: "pricingTableTitle",
              displayer: "pricingTitle",
              value: "Cancel anytime",
            },
            {
              type: "boolean",
              key: "isActive",
              displayer: "ıs active",
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
                  value: "POPULAR"
                },
                {
                  type: "boolean",
                  key: "is_popular",
                  displayer: "Is Popular?",
                  value: false
                },
              ]
            },
            {
              type: "string",
              key: "cardsubtitle",
              displayer: "Pricing Subtitle",
              value: "ENTERPRISE"
            },
            {
              type: "string",
              key: "cardTitle",
              displayer: "Price Title",
              value: "Corporate"
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
                      value: "Marketing strategy"
                    },
                    {
                      type: "icon",
                      key: "buttonIcon",
                      displayer: "In Button Icon",
                      value: "FaCheckCircle"
                    },
                    {
                      type: "color",
                      key: "buttonColor",
                      displayer: "Button Color",
                      value: "green",
                    }
                  ]
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
                      value: "Competitive work analysis"
                    },
                    {
                      type: "icon",
                      key: "buttonIcon",
                      displayer: "In Button Icon",
                      value: "FaCheckCircle"
                    },
                    {
                      type: "color",
                      key: "buttonColor",
                      displayer: "Button Color",
                      value: "green",
                    }
                  ]
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
                      value: "Social media share audit"
                    },
                    {
                      type: "icon",
                      key: "buttonIcon",
                      displayer: "In Button Icon",
                      value: "FaCheckCircle"
                    },
                    {
                      type: "color",
                      key: "buttonColor",
                      displayer: "Button Color",
                      value: "green",
                    }
                  ]
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
                      value: "Monthly management"
                    },
                    {
                      type: "icon",
                      key: "buttonIcon",
                      displayer: "In Button Icon",
                      value: "FaCheckCircle"
                    },
                    {
                      type: "color",
                      key: "buttonColor",
                      displayer: "Button Color",
                      value: "green",
                    }
                  ]
                },
              ],
            },
            {
              type: "icon",
              key: "buttonIcon",
              displayer: "In Button Icon",
              value: "BsCheckCircle"
            },
            {
              type: "string",
              key: "cardPrice",
              displayer: "Price",
              value: "$59"
            },
            {
              type: "string",
              key: "cardDuration",
              displayer: "Duration",
              value: "Per user/month"
            },
            {
              type: "string",
              key: "cardDuration1",
              displayer: "Duration1",
              value: " billed annually*"
            },
            {
              type: "string",
              key: "cardButtonText",
              displayer: "Button Text",
              value: "Join this plan"
            },
            {
              type: "page",
              key: "cardButtonLink",
              displayer: "Button Link",
              value: ""
            },
            {
              type: "string",
              key: "pricingTableTitle",
              displayer: "pricingTitle",
              value: "Cancel anytime",
            },
            {
              type: "boolean",
              key: "isActive",
              displayer: "ıs active",
              value: false,
            }
          ],
        },
      ],
    });
  }
  getName(): string {
    return "Pricing Table 1";
  }
  render() {
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("table")}>
            <Base.VerticalContent className={this.decorateCSS("top-titles")}>
              <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("pricing-table-subtitle")}</Base.SectionSubTitle>
              <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("pricing-table-title")}</Base.SectionTitle>
            </Base.VerticalContent>
            <div className={this.decorateCSS("items")}>
              {this.castToObject<Pricing[]>("pricingTableItem").map(
                (table: Pricing, index: number) => {
                  return (

                    <div key={index} className={`${this.decorateCSS("item-card")} ${table.isActive && this.decorateCSS("active")}`}>
                      <div
                        className={`${this.decorateCSS("popular-box")} ${table.popular_settings.is_popular && this.decorateCSS("active")}`}>
                        <span className={this.decorateCSS("popular-text")}>{table.popular_settings.text}</span>
                      </div>
                      <Base.H3 className={this.decorateCSS("cardsubtitle")}>{table.cardsubtitle}</Base.H3>
                      <Base.H3 className={this.decorateCSS("card-title")}>{table.cardTitle}</Base.H3>
                      <div className={this.decorateCSS("card-list")}>
                        {table.cardList.map((listItem: any, index: number) => {
                          return (
                            <div key={index} className={this.decorateCSS("card-list-item")}>
                              <ComposerIcon name={listItem.buttonIcon} propsIcon={{
                                className: this.decorateCSS("icon"),
                                color: listItem.buttonColor
                              }} />
                              <span className={this.decorateCSS("list-item")}>
                                {listItem.cardListItem}</span>
                            </div>
                          );
                        })}


                      </div>

                      <div className={`${this.decorateCSS("card-bottom")}  ${table.isActive && this.decorateCSS("active")}`}>
                        <div className={`${this.decorateCSS("card-price")}  ${table.isActive && this.decorateCSS("active")}`}>
                          <span className={this.decorateCSS("price")}>{table.cardPrice}</span>
                          <div className={this.decorateCSS("card-duration")} >
                            <span className={this.decorateCSS("Duration")}>{table.cardDuration}</span>
                            <span className={this.decorateCSS("Duration1")}>{table.cardDuration1}</span>
                          </div>

                        </div>

                        <button className={this.decorateCSS("card-button")}>
                          <ComposerLink path={table.cardButtonLink}>
                            {table.cardButtonText}
                          </ComposerLink>
                        </button>

                        <span className={this.decorateCSS("pricingTitle")}>{table.pricingTableTitle}</span>
                      </div>
                    </div>

                  );
                }
              )}
            </div>
            <div className={this.decorateCSS("titles")}>
              {this.getPropValue("titles").map((title: any) =>
                <div className={this.decorateCSS("title-bottom")}>
                  <ComposerIcon name={title.getPropValue("icon")}></ComposerIcon>
                  <span className={this.decorateCSS("text")}>
                    {title.getPropValue("text")}
                  </span>
                </div>)


              }
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default PricingTable1;









