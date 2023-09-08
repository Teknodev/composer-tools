import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BasePricingTable } from "../../EditorComponent";
import styles from "./pricing-table1.module.scss";

type Pricing = {
  title: string;
  price: string;
  duration: string;
  buttonText: string;
  link: string;
};
class PricingTable1 extends BasePricingTable {
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
              value: "Enterprise",
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
              value: "/week",
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
              displayer: "Button Link",
              value: "",
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
              value: "Enterprise",
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
              value: "/month",
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
              displayer: "Button Link",
              value: "",
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
              value: "Enterprise",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$350",
            },
            {
              type: "string",
              key: "duration",
              displayer: "Duration",
              value: "/years",
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
              displayer: "Button Link",
              value: "",
            },
          ],
        }
      ],
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 3,
    });
  }

  getName(): string {
    return "Pricing Table 1";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {this.castToObject<Pricing[]>("price").map((pricing: any, index: number) => (
            <div className={this.decorateCSS("card-item-count")} style={{
                    width: 90 / this.getPropValue("itemCount") + "%",
                  }}>
              <div key={index} className={this.decorateCSS("price")}>
                <h2 className={this.decorateCSS("title")}>{pricing.title}</h2>
                <h1 className={this.decorateCSS("price-text")}>{pricing.price}</h1>
                <p className={this.decorateCSS("duration-text")}>{pricing.duration}</p>
                <ComposerLink path={pricing.link}>
                  <span className={this.decorateCSS("button")}>{pricing.buttonText}</span>
                </ComposerLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PricingTable1;
