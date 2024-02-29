import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BasePricingTable } from "../../EditorComponent";
import styles from "./pricing-table1.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Pricing = {
  title1: string;
  title: string;
  price: string;
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
      value: "Tailored pricing plans ",
    });
    this.addProp({
      type: "string",
      key: "pricing-table-title2",
      displayer: "title2",
      value: "Get 30 day free trial",
    });
    this.addProp({
      type: "string",
      key: "pricing-table-title3",
      displayer: "title3",
      value: "No any hidden fees pay",
    });
    this.addProp({
      type: "string",
      key: "pricing-table-title4",
      displayer: "title4",
      value: "You can cancel anytime",
    });
    this.addProp({
      type: "string",
      key: "pricing-table-title1",
      displayer: "title1",
      value: " for everyone",
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 3,
      max: 4
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
              displayer: "Title",
              value: "Cancel anytime",
            },
            {
              type: "boolean",
              key: "isActive",
              displayer: "ıs active",
              value: false,
            },
            {
              type: "string",
              key: "pricingTableTitle",
              displayer: "Title",
              value: "Cancel anytime",
            }
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
              displayer: "Title",
              value: "Cancel anytime",
            },
            {
              type: "boolean",
              key: "isActive",
              displayer: "ıs active",
              value: true,
            },
            {
              type: "string",
              key: "pricingTableTitle",
              displayer: "Title",
              value: "Cancel anytime",
            }
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
              displayer: "Title",
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
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("table")}>
            <h3 className={this.decorateCSS("subtitle")}>{this.getPropValue("pricing-table-subtitle")}</h3>
            <h1 className={this.decorateCSS("title")}>{this.getPropValue("pricing-table-title")}</h1>
            <h2 className={this.decorateCSS("title1")}>{this.getPropValue("pricing-table-title1")}</h2>

            <div className={this.decorateCSS("item-div")}>
              {this.castToObject<Pricing[]>("pricingTableItem").map(
                (table: Pricing, index: number) => {
                  return (
                    <div className={this.decorateCSS("card-item-count")} style={{
                      width: 100 / this.getPropValue("itemCount") + "%",
                    }}>
                      <div key={index} className={this.decorateCSS("item-card")}>

                        <div
                          className={`${this.decorateCSS("popular-box")} ${table.popular_settings[1].value && this.decorateCSS("active")}`}>
                          <h1 className={this.decorateCSS("popular-text")}>{table.popular_settings[0].value}</h1>
                        </div>

                        <div className={this.decorateCSS("card-upper")}>
                          <h3 className={this.decorateCSS("cardsubtitle")}>{table.cardsubtitle}</h3>
                          <h3 className={this.decorateCSS("card-title")}>{table.cardTitle}</h3>
                          <ul className={this.decorateCSS("card-list")}>

                            {table.cardList.map((listItem: any, index: number) => {
                              return (
                                <li key={index} className={this.decorateCSS("card-list-item")}>
                                  <ComposerIcon name={listItem.buttonIcon} propsIcon={{
                                    className: this.decorateCSS("icon"),
                                    color: listItem.buttonColor
                                  }} />
                                  <span className={this.decorateCSS("list-item")}>
                                    {listItem.cardListItem}</span>
                                </li>
                              );
                            })}
                          </ul>
                          <div className={`${this.decorateCSS("card-price")}  ${table.isActive && this.decorateCSS("active")}`}>
                            <span className={this.decorateCSS("price")}>{table.cardPrice}</span>
                            <span className={this.decorateCSS("Duration")}>{table.cardDuration}</span>
                            <span className={this.decorateCSS("Duration1")}>{table.cardDuration1}</span>

                          </div>

                        </div>
                        <div className={`${this.decorateCSS("card-bottom")}  ${table.isActive && this.decorateCSS("active")}`}>
                          <ComposerLink path={table.cardButtonLink}>
                            <button className={this.decorateCSS("card-button")}>{table.cardButtonText}</button>
                          </ComposerLink>
                          <h2 className={this.decorateCSS("Title")}>{table.pricingTableTitle}</h2>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
            <h2 className={this.decorateCSS("title2")}>{this.getPropValue("pricing-table-title2")}</h2>
            <h2 className={this.decorateCSS("title3")}>{this.getPropValue("pricing-table-title3")}</h2>
            <h2 className={this.decorateCSS("title4")}>{this.getPropValue("pricing-table-title4")}</h2>
          </div>


        </div>
      </div>


    );
  }
}

export default PricingTable1;









