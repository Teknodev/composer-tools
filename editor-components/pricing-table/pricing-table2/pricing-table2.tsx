import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/link";
import { BasePricingTable } from "../../EditorComponent";
import styles from "./pricing-table2.module.scss";

type Pricing = {
  image: string;
  price: string;
  duration: string;
  buttonText: string;
  link: string;
};
class PricingTable2 extends BasePricingTable {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "object",
      key: "pricing-table",
      displayer: "Pricing Table",
      value: [
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Lorem ipsum dolor sit",
        },
      ],
    });
    this.addProp({
      type: "array",
      key: "pricing-table-item",
      displayer: "Pricing Table Item",
      value: [
        {
          type: "object",
          key: "table-item",
          displayer: "Table Item",
          value: [
            {
              type: "string",
              key: "image",
              displayer: "Image",
              value: "https://static.thenounproject.com/png/105256-200.png",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$150",
            },
            {
              type: "string",
              key: "duration",
              displayer: "Duration",
              value: "Enterprise",
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Get started",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Pricing Table 2";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
        <div className={this.decorateCSS("table")} >
          <h2 className={this.decorateCSS("title")} >
            {this.getPropValue("pricing-table")[0].value}
          </h2>
          <div className={this.decorateCSS("item-div")}>
            {this.castToObject<Pricing[]>("pricing-table-item").map(
              (table: any, index: number) => {
                return (
                  <div
                    className={this.decorateCSS("item")}
                    
                    key={index}
                  >
                    <img src={table.image} alt="icon" width={100} />
                    <p
                      className={this.decorateCSS("duration-text")}
                      
                    >
                      {table.duration}
                    </p>
                    <h1
                      className={this.decorateCSS("price-text")}
                      
                    >
                      {table.price}
                    </h1>
                    <ComposerLink path={table.link}>
                      <a
                        className={this.decorateCSS("button")}
                        
                      >
                        {table.buttonText}
                      </a>
                    </ComposerLink>
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

export default PricingTable2;
