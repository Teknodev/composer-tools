import * as React from "react";
import styles from "./pricing-multiple.module.scss";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import {
  BasePricingTable,
  TypeUsableComponentProps,
} from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/link";

type Pricing = {
  cardTitle1: string;
  list: TypeUsableComponentProps[];
  buttons: { buttonTitle: string; url: string; isPrimary: boolean }[];
  price: string;
  description: string;
  activeTag: string;
  active: boolean;
  currency: string;
  per: string;
};

class PricingMultipleTwo extends BasePricingTable {
  constructor(props?: any) {
    super(props, styles);

    let li = {
      type: "string",
      key: "liText",
      displayer: "List Item",
      value: PlaceholderFiller.string(),
    };

    let placeholder: TypeUsableComponentProps = {
      type: "object",
      key: "listArray",
      displayer: "List Items",
      value: [
        {
          type: "string",
          key: "cardTitle1",
          displayer: "Card Title-1",
          value: "Medium",
        },
        {
          type: "string",
          key: "currency",
          displayer: "Currency",
          value: "$",
        },
        {
          type: "string",
          key: "price",
          displayer: "Price",
          value: "99",
        },
        {
          type: "string",
          key: "per",
          displayer: "Per",
          value: "per month",
        },

        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: "Basic features for up to 10 user",
        },
        {
          type: "string",
          key: "activeTag",
          displayer: "Active Tag",
          value: "POPULAR",
        },
        {
          type: "boolean",
          key: "active",
          displayer: "Is Popular",
          value: true,
        },
        {
          type: "array",
          key: "list",
          displayer: "List Items",
          value: [
            JSON.parse(JSON.stringify(li)),
            JSON.parse(JSON.stringify(li)),
            JSON.parse(JSON.stringify(li)),
            JSON.parse(JSON.stringify(li)),
            JSON.parse(JSON.stringify(li)),
          ],
        },
        {
          type: "array",
          key: "buttons",
          displayer: "Button",
          value: [
            {
              type: "object",
              key: "button",
              displayer: "Button",
              value: [
                {
                  type: "string",
                  key: "buttonTitle",
                  displayer: "Button Title",
                  value: "Get Started",
                },
                {
                  type: "page",
                  key: "url",
                  displayer: "URL",
                  value: PlaceholderFiller.string(),
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
    };

    this.addProp({
      type: "string",
      key: "badge",
      displayer: "Badge",
      value: "PRICING",
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: PlaceholderFiller.string(),
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: PlaceholderFiller.string(),
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 3,
    });

    this.addProp({
      type: "array",
      key: "card",
      displayer: "Card",
      value: [
        JSON.parse(JSON.stringify(placeholder)),
        JSON.parse(JSON.stringify(placeholder)),
      ],
    });
  }

  getName(): string {
    return "Multiple Pricing Card 2";
  }

  render() {
    const littleScreen = {
      width: "100%",
      display: "flex",
      flex: "wrap",
      justifyContent: "center",
    };

    const wideScreen = {
      width: 90 / this.getPropValue("itemCount") + "%",
      display: "flex",
      justifyContent: "center",
    };

    let style = function () {
      if (window.innerWidth < 800) {
        return littleScreen;
      } else {
        return wideScreen;
      }
    };

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            <div className={this.decorateCSS("up-page")}>
              <div className={this.decorateCSS("badge")}>
                {this.getPropValue("badge")}
              </div>
              <h1>{this.getPropValue("subtitle")}</h1>
              <p>{this.getPropValue("description")}</p>
            </div>

            <div className={this.decorateCSS("down-page")}>
              <div className={this.decorateCSS("cards")}>
                {this.castToObject<Pricing[]>("card").map((item: Pricing) => {
                  return (
                    <div style={style()}>
                      <div className={this.decorateCSS("card")}>
                        <div className={this.decorateCSS("card-up")}>
                          <div className={this.decorateCSS("up-elements")}>
                            <p>{item.cardTitle1}</p>
                            {item.active && (
                              <div className={this.decorateCSS("tag")}>
                                {item.activeTag}
                              </div>
                            )}
                          </div>
                          <div className={this.decorateCSS("pricing")}>
                            <div className={this.decorateCSS("price")}>
                              <h1>
                                {item.price}
                                <span>{item.per}</span>
                              </h1>
                              <div className={this.decorateCSS("currency")}>
                                <span>{item.currency}</span>
                              </div>
                            </div>
                            <p>{item.description}</p>
                          </div>
                          <div className={this.decorateCSS("button-group")}>
                            {item.buttons.map((b: any) => {
                              return (
                                <ComposerLink path={b.url}>
                                  <button
                                    className={
                                      this.decorateCSS("button") +
                                      " " +
                                      (b.isPrimary
                                        ? this.decorateCSS("primary")
                                        : this.decorateCSS("secondary"))
                                    }
                                  >
                                    {b.buttonTitle}
                                  </button>
                                </ComposerLink>
                              );
                            })}
                          </div>
                        </div>
                        <div className={this.decorateCSS("card-down")}>
                          <ul className={this.decorateCSS("list-group")}>
                            {item.list.map((el: any) => {
                              return (
                                <li className={this.decorateCSS("li")}>
                                  <div
                                    className={this.decorateCSS("circle-icon")}
                                  >
                                    &#10004;
                                  </div>
                                  {el.value}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PricingMultipleTwo;
