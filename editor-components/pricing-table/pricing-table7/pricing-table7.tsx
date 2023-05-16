import * as React from "react";
import { BasePricingTable } from "../../EditorComponent";
import styles from "./pricing-table7.module.scss";
import ComposerLink from "../../../composer-base-components/Link/link";

type PricingItem = {
  itemText: string;
};

type Pricing = {
  title: string;
  price: string;
  duration: string;
  buttonText: string;
  link: string;
  item: PricingItem[];
};
class PricingTable7 extends BasePricingTable {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      key: "price",
      displayer: "Price",
      value: [
        {
          type: "object",
          key: "pricing",
          displayer: "Pricing",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Free",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$0",
            },
            {
              type: "string",
              key: "duration",
              displayer: "Duration",
              value: "/ monthly",
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Try It Free Now",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
            {
              type: "array",
              key: "item",
              displayer: "Item",
              value: [
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Item List",
                  value: [
                    {
                      type: "string",
                      key: "itemText",
                      displayer: "Item Text",
                      value: "Up to 3 chat operators",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Item List",
                  value: [
                    {
                      type: "string",
                      key: "itemText",
                      displayer: "Item Text",
                      value: "100 ChatBot Triggers",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Item List",
                  value: [
                    {
                      type: "string",
                      key: "itemText",
                      displayer: "Item Text",
                      value: "24/7 Live Chat",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Item List",
                  value: [
                    {
                      type: "string",
                      key: "itemText",
                      displayer: "Item Text",
                      value: "Email Integration",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Item List",
                  value: [
                    {
                      type: "string",
                      key: "itemText",
                      displayer: "Item Text",
                      value: "Messenger Integration",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Item List",
                  value: [
                    {
                      type: "string",
                      key: "itemText",
                      displayer: "Item Text",
                      value: "Visitor Info",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Item List",
                  value: [
                    {
                      type: "string",
                      key: "itemText",
                      displayer: "Item Text",
                      value: "Mobile + Desktop Apps",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "pricing",
          displayer: "Pricing",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Starter",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$50",
            },
            {
              type: "string",
              key: "duration",
              displayer: "Duration",
              value: "/ monthly",
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Try It Free Now",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
            {
              type: "array",
              key: "item",
              displayer: "Item",
              value: [
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Item List",
                  value: [
                    {
                      type: "string",
                      key: "itemText",
                      displayer: "Item Text",
                      value: "Up to 3 chat operators",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Item List",
                  value: [
                    {
                      type: "string",
                      key: "itemText",
                      displayer: "Item Text",
                      value: "100 ChatBot Triggers",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Item List",
                  value: [
                    {
                      type: "string",
                      key: "itemText",
                      displayer: "Item Text",
                      value: "24/7 Live Chat",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Item List",
                  value: [
                    {
                      type: "string",
                      key: "itemText",
                      displayer: "Item Text",
                      value: "Email Integration",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Item List",
                  value: [
                    {
                      type: "string",
                      key: "itemText",
                      displayer: "Item Text",
                      value: "Messenger Integration",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Item List",
                  value: [
                    {
                      type: "string",
                      key: "itemText",
                      displayer: "Item Text",
                      value: "Visitor Info",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Item List",
                  value: [
                    {
                      type: "string",
                      key: "itemText",
                      displayer: "Item Text",
                      value: "Mobile + Desktop Apps",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "pricing",
          displayer: "Pricing",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Professional",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$80",
            },
            {
              type: "string",
              key: "duration",
              displayer: "Duration",
              value: "/ monthly",
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Try It Free Now",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
            {
              type: "array",
              key: "item",
              displayer: "Item",
              value: [
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Item List",
                  value: [
                    {
                      type: "string",
                      key: "itemText",
                      displayer: "Item Text",
                      value: "Up to 3 chat operators",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Item List",
                  value: [
                    {
                      type: "string",
                      key: "itemText",
                      displayer: "Item Text",
                      value: "100 ChatBot Triggers",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Item List",
                  value: [
                    {
                      type: "string",
                      key: "itemText",
                      displayer: "Item Text",
                      value: "24/7 Live Chat",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Item List",
                  value: [
                    {
                      type: "string",
                      key: "itemText",
                      displayer: "Item Text",
                      value: "Email Integration",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Item List",
                  value: [
                    {
                      type: "string",
                      key: "itemText",
                      displayer: "Item Text",
                      value: "Messenger Integration",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Item List",
                  value: [
                    {
                      type: "string",
                      key: "itemText",
                      displayer: "Item Text",
                      value: "Visitor Info",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Item List",
                  value: [
                    {
                      type: "string",
                      key: "itemText",
                      displayer: "Item Text",
                      value: "Mobile + Desktop Apps",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Pricing Table 7";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {this.castToObject<Pricing[]>("price").map((pricing: any, index: number) => (
            <div key={`price7-${index}`} className={this.decorateCSS("price")}>
              <h2 className={this.decorateCSS("title")}>{pricing.title}</h2>
              <h1 className={this.decorateCSS("price-text")}>
                {pricing.price}
                <p className={this.decorateCSS("duration-text")}>{pricing.duration}</p>
              </h1>
              <div className={this.decorateCSS("features")}>
                {pricing.item.map((data: any, index: number) => {
                  return (
                    <li key={`price7-list-${index}`}>
                      <img src="https://cdn-icons-png.flaticon.com/512/33/33281.png" />
                      {data.itemText}
                    </li>
                  );
                })}
              </div>
              <ComposerLink path={pricing.link}>
                <span className={this.decorateCSS("button")}>
                  <img src="https://cdn.iconscout.com/icon/free/png-256/whatshot-1782408-1512428.png" />
                  {pricing.buttonText}
                </span>
              </ComposerLink>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PricingTable7;
