import * as React from "react";
import styles from "./pricing-table4.module.scss";
import {
  BasePricingTable,
  TypeUsableComponentProps,
} from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type Pricing = {
  title1: string;
  list: TypeUsableComponentProps[];
  title2: string;
  title3: string;
  buttons: Array<Button>;
};

type Button = {
  url: string;
  buttonText: string;
  isPrimary: boolean;
};

class PricingMultiple extends BasePricingTable {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "tag",
      displayer: "Tag Title",
      value: "pricing",
    });


    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value:
        "Pricing is a crucial element of any business strategy, and small businesses need to adopt effective pricing strategies to stay competitive.",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Pricing Strategies",
    });
    
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 3,
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
              type: "string",
              key: "title1",
              displayer: "Title-1",
              value: "$50",
            },
            {
              type: "array",
              key: "list",
              displayer: "List Items",
              value: [
                {
                  type: "string",
                  key: "liText",
                  displayer: "List Item",
                  value: "50 Websites",
                },
                {
                  type: "string",
                  key: "liText",
                  displayer: "List Item",
                  value: "50 GB Disk Space",
                },
                {
                  type: "string",
                  key: "liText",
                  displayer: "List Item",
                  value: "Unlimited Bandwidth",
                },
                {
                  type: "string",
                  key: "liText",
                  displayer: "List Item",
                  value: "50 Email Accounts",
                },
                {
                  type: "string",
                  key: "liText",
                  displayer: "List Item",
                  value: "24/7/365 Support",
                },
              ],
            },
            {
              type: "string",
              key: "title2",
              displayer: "Title-2",
              value: "Enterprise",
            },
            {
              type: "string",
              key: "title3",
              displayer: "Title-3",
              value: "/monthly",
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
                    {
                      type: "string",
                      key: "buttonText",
                      displayer: "Button Text",
                      value: "GET",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Button Link",
                      value: "",
                    },
                    {
                      type: "boolean",
                      key: "isPrimary",
                      displayer: "Is primary",
                      value: true,
                    },
                  ]
                }
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
              type: "string",
              key: "title1",
              displayer: "Title-1",
              value: "$100",
            },
            {
              type: "array",
              key: "list",
              displayer: "List Items",
              value: [
                {
                  type: "string",
                  key: "liText",
                  displayer: "List Item",
                  value: "100 Websites",
                },
                {
                  type: "string",
                  key: "liText",
                  displayer: "List Item",
                  value: "100 GB Disk Space",
                },
                {
                  type: "string",
                  key: "liText",
                  displayer: "List Item",
                  value: "Unlimited Bandwidth",
                },
                {
                  type: "string",
                  key: "liText",
                  displayer: "List Item",
                  value: "100 Email Accounts",
                },
                {
                  type: "string",
                  key: "liText",
                  displayer: "List Item",
                  value: "24/7/365 Support",
                },
              ],
            },

            {
              type: "string",
              key: "title2",
              displayer: "Title-2",
              value: "Business",
            },
            {
              type: "string",
              key: "title3",
              displayer: "Title-3",
              value: "/monthly",
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
                    {
                      type: "string",
                      key: "buttonText",
                      displayer: "Button Text",
                      value: "GET",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Button Link",
                      value: "",
                    },
                    {
                      type: "boolean",
                      key: "isPrimary",
                      displayer: "Is primary",
                      value: true,
                    },
                  ]
                }
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
              type: "string",
              key: "title1",
              displayer: "Title-1",
              value: "$150",
            },
            {
              type: "array",
              key: "list",
              displayer: "List Items",
              value: [
                {
                  type: "string",
                  key: "liText",
                  displayer: "List Item",
                  value: "200 Websites",
                },
                {
                  type: "string",
                  key: "liText",
                  displayer: "List Item",
                  value: "200 GB Disk Space",
                },
                {
                  type: "string",
                  key: "liText",
                  displayer: "List Item",
                  value: "Unlimited Bandwidth",
                },
                {
                  type: "string",
                  key: "liText",
                  displayer: "List Item",
                  value: "200 Email Accounts",
                },
                {
                  type: "string",
                  key: "liText",
                  displayer: "List Item",
                  value: "24/7/365 Support",
                },
              ],
            },

            {
              type: "string",
              key: "title2",
              displayer: "Title-2",
              value: "Professional",
            },
            {
              type: "string",
              key: "title3",
              displayer: "Title-3",
              value: "/monthly",
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
                    {
                      type: "string",
                      key: "buttonText",
                      displayer: "Button Text",
                      value: "GET",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Button Link",
                      value: "",
                    },
                    {
                      type: "boolean",
                      key: "isPrimary",
                      displayer: "Is primary",
                      value: true,
                    },
                  ]
                }
                ],
              },
          ],
        },
      ],
    });
  }
  getName(): string {
    return "Pricing 4";
  }
  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            <div className={this.decorateCSS("page-up")}>
              <h1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h1>
              <p className={this.decorateCSS("description")}>{this.getPropValue("description")}</p>
            </div>
            <div className={this.decorateCSS("page-down")}>
              {this.castToObject<Pricing[]>("cards").map(
                (price: Pricing, indexCards: number) => {
                  return (
                    <div
                      key={indexCards}
                      className={this.decorateCSS("all-card")}
                      style={{
                        width: 100 / this.getPropValue("itemCount") + "%",
                      }}
                    >
                      <div className={this.decorateCSS("card")}>
                        <div className={this.decorateCSS("card-up")}>
                          <div className={this.decorateCSS("tag")}>
                            <h4 className={this.decorateCSS("tag-h4")}>{this.getPropValue("tag")}</h4>
                          </div>
                          <div className={this.decorateCSS("card-up-texts")}>
                            <p className={this.decorateCSS("price-title2")}>{price.title2}</p>
                            <h1 className={this.decorateCSS("price-title1")}>{price.title1}</h1>
                            <h2 className={this.decorateCSS("price-title3")}>{price.title3}</h2>
                          </div>
                        </div>
                        <div className={this.decorateCSS("card-middle")}>
                          <ul className={this.decorateCSS("list-group")}>
                            {price.list.map(
                              (item: any, indexListGroup: number) => {
                                return (
                                  <li
                                    key={indexListGroup}
                                    className={this.decorateCSS("li")}
                                  >
                                    <div
                                      className={this.decorateCSS(
                                        "circle-icon"
                                      )}
                                    >
                                      <img src="https://cdn-icons-png.flaticon.com/512/33/33281.png" alt=""/>
                                    </div>
                                    {item.value}
                                  </li>
                                );
                              }
                            )}
                          </ul>
                        </div>
                        <div className={this.decorateCSS("card-down")}>
                                {price.buttons.map(
                                  (item: Button, indexButtons: number) => {
                                    return (
                                      <ComposerLink
                                        key={indexButtons}
                                        path={item.url}
                                      >
                                        <button
                                          className={
                                            this.decorateCSS("button") +
                                            " " +
                                            (item.isPrimary
                                              ? this.decorateCSS("primary")
                                              : this.decorateCSS("secondary"))
                                          }
                                        >
                                          {item.buttonText}
                                        </button>
                                      </ComposerLink>
                                    );
                                  }
                                )}
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PricingMultiple;
