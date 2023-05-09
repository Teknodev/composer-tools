import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/link";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BasePricingTable } from "../../EditorComponent";
import styles from "./pricing-table4.module.scss";

type PriceItem = {
  priceItem: string;
};
type PriceList = {
  title: string;
  price: string;
  duration: string;
  buttonText: string;
  link: string;
  pricingListItem: PriceItem[];
};
class PricingTable4 extends BasePricingTable {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      key: "price-list",
      displayer: "Price List",
      value: [
        {
          type: "object",
          key: "pricing-list",
          displayer: "Pricing List",
          value: [
            {
              type: "string",
              key: "title",
              value: "Enterprise",
              displayer: "Title",
            },
            {
              type: "string",
              key: "price",
              value: "$150",
              displayer: "Price",
            },
            {
              type: "string",
              key: "duration",
              value: "/month",
              displayer: "Duration",
            },
            {
              type: "string",
              key: "buttonText",
              value: "Get started",
              displayer: "Button Text",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
            {
              type: "array",
              key: "pricingListItem",
              displayer: "Pricing List Item",
              value: [
                {
                  type: "object",
                  key: "listItem",
                  displayer: "Pricing List Item",
                  value: [
                    {
                      type: "string",
                      key: "priceItem",
                      value: PlaceholderFiller.string(),
                      displayer: "Price Item",
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
    return "Pricing List";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        {this.castToObject<PriceList[]>("price-list").map(
          (pricing: any, index: number) => (
            <div
              key={index}
              className={this.decorateCSS("price")}
              
            >
              <h2 className={this.decorateCSS("title")} >
                {pricing.title}
              </h2>
              <h1
                className={this.decorateCSS("price-text")}
                
              >
                {pricing.price}
              </h1>
              <p
                className={this.decorateCSS("duration-text")}
                
              >
                {pricing.duration}
              </p>
              <ComposerLink path={pricing.link}>
                <a
                  className={this.decorateCSS("button")}
                  
                >
                  {pricing.buttonText}
                </a>
              </ComposerLink>
              <ul className={this.decorateCSS("list-group")}>
                {pricing.pricingListItem.map(
                  (tableData: PriceItem, index: number) => {
                    return <li key={index}>{tableData.priceItem}</li>;
                  }
                )}
              </ul>
            </div>
          )
        )}
      </div>
    );
  }
}

export default PricingTable4;
