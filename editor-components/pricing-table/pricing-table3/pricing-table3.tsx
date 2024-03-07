import * as React from "react";
import styles from "./pricing-table3.module.scss";
import { BasePricingTable, TypeUsableComponentProps } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";


type Card = {

  title1: string;
  list: {
    liText: string;
  }[];
  title2: string;
  popular: boolean;
};

type Pricing = {
  title1: string;
  list: TypeUsableComponentProps[];
  title2: string;
  buttons: Array<Button>;
  card?: Card;
  popular_settings: {
    value: string;
    is_popular: boolean;
  }[];
  icon: string;
};


type Button = {
  buttonText: string;
  url: string;
};

class PricingTable3 extends BasePricingTable {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Conference packages",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt labore et dolore magna ut enim.",
    });

    this.addProp({
      type: "object",
      key: "button",
      displayer: "button",
      value: [
        {
          type: "string",
          key: "button-text",
          displayer: "Button Text",
          value: "PRICING PLANS",
        },
        {
          type: "page",
          key: "url",
          displayer: "Button Link",
          value: "",
        }
      ]
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 2,
    });

    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Cards",
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
              value: "$250",
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
                  value: "Regular seats",
                },
                {
                  type: "string",
                  key: "liText",
                  displayer: "List Item",
                  value: "Snacks and brunch",
                },
                {
                  type: "string",
                  key: "liText",
                  displayer: "List Item",
                  value: "Event certificate",
                }
              ],
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "MdPersonOutline",
            },
            {
              type: "string",
              key: "title2",
              displayer: "Title-2",
              value: "PERSONAL",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                {
                  type: "object",
                  key: "card-button",
                  displayer: "Card-Button",
                  value: [
                    {
                      type: "string",
                      key: "buttonText",
                      displayer: "Button Text",
                      value: "CHOOSE PACKAGE ",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Button Link",
                      value: "",
                    }
                  ]
                }
              ],
            },
            {
              type: "boolean",
              key: "popular",
              displayer: "Popular",
              value: false,
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
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
                }
              ]
            },
            {
              type: "string",
              key: "title1",
              displayer: "Title-1",
              value: "$450",
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
                  value: "Regular seats",
                },
                {
                  type: "string",
                  key: "liText",
                  displayer: "List Item",
                  value: "Snacks and brunch",
                },
                {
                  type: "string",
                  key: "liText",
                  displayer: "List Item",
                  value: "Photos allowed",
                },
                {
                  type: "string",
                  key: "liText",
                  displayer: "List Item",
                  value: "Event certificate",
                }
              ],
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "MdOutlineGroup",
            },
            {
              type: "string",
              key: "title2",
              displayer: "Title-2",
              value: "BUSİNESS",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                {
                  type: "object",
                  key: "card-button",
                  displayer: "Card-Button",
                  value: [
                    {
                      type: "string",
                      key: "buttonText",
                      displayer: "Button Text",
                      value: "CHOOSE PACKAGE",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Button Link",
                      value: "",
                    }
                  ]
                }
              ],
            },
          ],
        },
      ]
    });
  }

  getName(): string {
    return "Pricing Table 3";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            <div className={`${this.decorateCSS("child-page")} ${this.decorateCSS("child-page-left")}`}>
              <div className={this.decorateCSS("texts")}>
                <h1 className={this.decorateCSS("subtitle")}>

                  {this.getPropValue("subtitle")}
                </h1>
                <p className={this.decorateCSS("title")}>{this.getPropValue("title")}</p>
                <ComposerLink path={this.getPropValue("button")[0].value}>
                  <button className={this.decorateCSS("button")} onClick={(event) => { event.preventDefault(); }}>
                    {this.getPropValue("button")[0].value}
                  </button>
                </ComposerLink>
              </div>
            </div>
            <div className={this.decorateCSS("page-down")}>
              {this.castToObject<Pricing[]>("cards").map(
                (price: Pricing, indexCards: number) => {
                  const isPopular = price?.popular_settings && price?.popular_settings[1]?.value;
                  console.log(price);

                  return (
                    <div
                      key={indexCards}
                      className={`${this.decorateCSS("all-card")} ${isPopular && this.decorateCSS("popular-card")}`}
                      style={{
                        width: `calc(100% / ${this.getPropValue("itemCount")})`,
                      }}
                    >
                      <div className={this.decorateCSS("card")}>
                        {isPopular && (
                          <div className={`${this.decorateCSS("popular-box")} ${this.decorateCSS("active")}`}>
                            <h1 className={this.decorateCSS("popular-text")}>{price.popular_settings[0].value}</h1>
                          </div>
                        )}

                        <div className={this.decorateCSS("card-up")}>
                          <ComposerIcon name={price.icon} propsIcon={{ className: this.decorateCSS("icon") }} />
                          <div className={this.decorateCSS("card-up-texts")}>

                            <p className={this.decorateCSS("price-title2")}>{price.title2}</p>
                            <h1 className={this.decorateCSS("price-title1")}>{price.title1}</h1>
                          </div>
                        </div>
                        <div className={this.decorateCSS("card-middle")}>
                          {price.list.map((item: any, indexListGroup: number) => {
                            return (
                              <div key={indexListGroup} className={this.decorateCSS("list-item")}>
                                <p>{item.value}</p>
                              </div>
                            );
                          })}
                        </div>
                        <div className={this.decorateCSS("card-down")}>
                          {price.buttons.map((item: Button, indexButtons: number) => {
                            return (
                              <ComposerLink key={indexButtons} path={item.url}>
                                <button className={this.decorateCSS("button")}>
                                  {item.buttonText}
                                </button>
                              </ComposerLink>
                            );
                          })}
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

export default PricingTable3;