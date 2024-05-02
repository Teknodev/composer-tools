import * as React from "react";
import styles from "./pricing-table4.module.scss";
import {
  BasePricingTable,
  TypeUsableComponentProps,
} from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Pricing = {
  title1: string;
  list: TypeUsableComponentProps[];
  title2: string;
  pricing: string;
  buttons: Array<Button>;
  isFocus: boolean;
  icons:string;
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
      key: "subtitle",
      displayer: "SubTitle",
      value: "Pricing Plans",
    });

    this.addProp({
      type: "string",
      key: "heading",
      displayer: "Heading",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Pricing is a crucial element of any business strategy, and small businesses need to adopt effective pricing strategies to stay competitive.",
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 3,
      max: 4,
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
              type: "icon",
              key: "icons",
              displayer: "Icon",
              value: "FaCheck",
            },
            {
              type: "boolean",
              key: "isFocus",
              displayer: "isFocus",
              value: false,
            },
            {
              type: "string",
              key: "title1",
              displayer: "Title-1",
              value: "Enterprise",
            },
            {
              type: "string",
              key: "title2",
              displayer: "Title-2",
              value: "Basic Solution",
            },
            {
              type: "string",
              key: "pricing",
              displayer: "pricing",
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
                  value: "One database",
                },
                {
                  type: "string",
                  key: "liText",
                  displayer: "List Item",
                  value: "Unlimited websites",
                },
                {
                  type: "string",
                  key: "liText",
                  displayer: "List Item",
                  value: "CMS Navigation",
                },
                {
                  type: "string",
                  key: "liText",
                  displayer: "List Item",
                  value: "Free updates",
                },
                {
                  type: "string",
                  key: "liText",
                  displayer: "List Item",
                  value: "Priority support",
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
                      value: "CHOOSE PLAN",
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
                  ],
                },
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
              type: "icon",
              key: "icons",
              displayer: "Icon",
              value: "FaCheck",
            },
            {
              type: "boolean",
              key: "isFocus",
              displayer: "isFocus",
              value: true,
            },
            {
              type: "string",
              key: "title1",
              displayer: "Title-1",
              value: "Professional",
            },
            {
              type: "string",
              key: "title2",
              displayer: "Title-2",
              value: "Advanced Platform",
            },
            {
              type: "string",
              key: "pricing",
              displayer: "pricing",
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
                  value: "10 databases",
                },
                {
                  type: "string",
                  key: "liText",
                  displayer: "List Item",
                  value: "Unlimited websites",
                },
                {
                  type: "string",
                  key: "liText",
                  displayer: "List Item",
                  value: "CMS navigation",
                },
                {
                  type: "string",
                  key: "liText",
                  displayer: "List Item",
                  value: "Free Updates",
                },
                {
                  type: "string",
                  key: "liText",
                  displayer: "List Item",
                  value: "Priority support",
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
                      value: "CHOOSE PLAN",
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
                  ],
                },
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
              type: "icon",
              key: "icons",
              displayer: "Icon",
              value: "FaCheck",
            },
            {
              type: "boolean",
              key: "isFocus",
              displayer: "isFocus",
              value: false,
            },
            {
              type: "string",
              key: "title1",
              displayer: "Title-1",
              value: "Starter",
            },
            {
              type: "string",
              key: "title2",
              displayer: "Title-2",
              value: "Customizable Platform",
            },
            {
              type: "string",
              key: "pricing",
              displayer: "pricing",
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
                  value: "Unlimited databases",
                },
                {
                  type: "string",
                  key: "liText",
                  displayer: "List Item",
                  value: "Unlimited websites",
                },
                {
                  type: "string",
                  key: "liText",
                  displayer: "List Item",
                  value: "CMS navigation",
                },
                {
                  type: "string",
                  key: "liText",
                  displayer: "List Item",
                  value: "Free updates",
                },
                {
                  type: "string",
                  key: "liText",
                  displayer: "List Item",
                  value: "Priority support",
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
                      value: "CHOOSE PLAN",
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
    return "Pricing 4";
  }
  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            <div className={this.decorateCSS("page-up")}>
              <h1 className={this.decorateCSS("subtitle")}>
                {this.getPropValue("subtitle")}
              </h1>
              <h1 className={this.decorateCSS("heading")}>
                {this.getPropValue("heading")}
              </h1>
              <h1 className={this.decorateCSS("description")}>
                {this.getPropValue("description")}
              </h1>
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
                      <div
                        className={`${this.decorateCSS("card")} ${
                          price.isFocus && this.decorateCSS("focused")
                        }`}
                      >
                        <div className={this.decorateCSS("card-up")}>
                          <div className={this.decorateCSS("card-up-texts")}>
                            <h1 className={this.decorateCSS("price-title1")}>
                              {price.title1}
                            </h1>
                            <p className={this.decorateCSS("price-title2")}>
                              {price.title2}
                            </p>
                            <h1 className={this.decorateCSS("price-pricing")}>
                              {price.pricing}
                            </h1>
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
                                      
                                       <ComposerIcon name={price.icons} propsIcon={{ className: this.decorateCSS("icons") }} />
                                      
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
