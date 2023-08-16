import * as React from "react";
import { BasePricingTable } from "../../EditorComponent";
import styles from "./pricing-table8.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type IIconBoxes = {
  list: any;
  title: string;
  description: string;
  image: string;
  price: string;
  link: string;
  buttons: Buttons[];
};
type Buttons = {
  buttonText: string;
  url: string;
};

class PricingTable8 extends BasePricingTable {
  constructor(props?: any) {
    super(props, styles);
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
              key: "title",
              displayer: "Title",
              value: "Basic",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$50",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6475d7f2fba070002b758890?alt=media&timestamp=1685444578453",
            },
            {
              type: "array",
              key: "list",
              displayer: "List Items",
              value: [
                {
                  type: "string",
                  key: "property",
                  displayer: "Property",
                  value: "Chart Annotations",
                },
                {
                  type: "string",
                  key: "property",
                  displayer: "Property",
                  value: "Uptime Monitoring",
                },
                {
                  type: "string",
                  key: "property",
                  displayer: "Property",
                  value: "Weekly Reports",
                },
                {
                  type: "string",
                  key: "property",
                  displayer: "Property",
                  value: "Security Audit",
                },
                {
                  type: "string",
                  key: "property",
                  displayer: "Property",
                  value: "On-Demand Audit",
                },
                {
                  type: "string",
                  key: "property",
                  displayer: "Property",
                  value: "Priority Support",
                },
              ],
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
                      value: "Get Started",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Link",
                      value: "",
                    },
                  ],
                },
              ],
            }
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Premium",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$100",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6475d7f2fba070002b758890?alt=media&timestamp=1685444578453",
            },
            {
              type: "array",
              key: "list",
              displayer: "List Items",
              value: [
                {
                  type: "string",
                  key: "property",
                  displayer: "Property",
                  value: "Chart Annotations",
                },
                {
                  type: "string",
                  key: "property",
                  displayer: "Property",
                  value: "Uptime Monitoring",
                },
                {
                  type: "string",
                  key: "property",
                  displayer: "Property",
                  value: "Weekly Reports",
                },
                {
                  type: "string",
                  key: "property",
                  displayer: "Property",
                  value: "Security Audit",
                },
                {
                  type: "string",
                  key: "property",
                  displayer: "Property",
                  value: "On-Demand Audit",
                },
                {
                  type: "string",
                  key: "property",
                  displayer: "Property",
                  value: "Priority Support",
                },
              ],
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
                      value: "Get Started",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Link",
                      value: "",
                    },
                  ],
                },
              ],
            }
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Ultimate",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$150",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6475d7f2fba070002b758890?alt=media&timestamp=1685444578453",
            },
            {
              type: "array",
              key: "list",
              displayer: "List Items",
              value: [
                {
                  type: "string",
                  key: "property",
                  displayer: "Property",
                  value: "Chart Annotations",
                },
                {
                  type: "string",
                  key: "property",
                  displayer: "Property",
                  value: "Uptime Monitoring",
                },
                {
                  type: "string",
                  key: "property",
                  displayer: "Property",
                  value: "Weekly Reports",
                },
                {
                  type: "string",
                  key: "property",
                  displayer: "Property",
                  value: "Security Audit",
                },
                {
                  type: "string",
                  key: "property",
                  displayer: "Property",
                  value: "On-Demand Audit",
                },
                {
                  type: "string",
                  key: "property",
                  displayer: "Property",
                  value: "Priority Support",
                },
              ],
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
                      value: "Get Started",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Link",
                      value: "",
                    },
                  ],
                },
              ],
            }
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Pricing Table 8";
  }

  render() {
  
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {this.castToObject<IIconBoxes[]>("cards").map((card: IIconBoxes, index: number) => (
            <div className={this.decorateCSS("pricing")} key={index}>
              <div className={this.decorateCSS("image-background")}>
                <img
                  className={this.decorateCSS("image")}
                  src={card.image}
                  alt={card.title}
                />
              </div>
              <h3 className={this.decorateCSS("title")}>{card.title}</h3>
              <p className={this.decorateCSS("description")}>
                {card.description}
              </p>
  
              <div>
                <ul className={this.decorateCSS("list-group")}>
                  {card.list.map((item: any, itemIndex: number) => (
                    <li className={this.decorateCSS("li")} key={itemIndex}><span>✓</span>{item.value}</li>
                  ))}
                </ul>
              </div>
  
              <p className={this.decorateCSS("price")}>{card.price}</p>
  
              {card.buttons.map((button: Buttons, buttonIndex: number) => (
                <ComposerLink path={button.url} key={buttonIndex}>
                  <button className={this.decorateCSS("get-started-button")}>
                    {button.buttonText}
                  </button>
                </ComposerLink>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }  
}  
export default PricingTable8;
