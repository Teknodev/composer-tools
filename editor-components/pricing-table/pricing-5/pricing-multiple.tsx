import * as React from "react";
import styles from "./pricing-multiple.module.scss";
import {
  BasePricingTable,
  TypeUsableComponentProps,
} from "../../EditorComponent";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import ComposerLink from "../../../composer-base-components/Link/link";

type Pricing = {
  title1: string;
  list: TypeUsableComponentProps[];
  title2: string;
  title3: string;
};

type Button = {
  url: string;
  buttonText: string;
  isPrimary: boolean;
};

class PricingMultiple extends BasePricingTable {
  constructor(props?: any) {
    super(props, styles);

    let placeholder: TypeUsableComponentProps = {
      type: "object",
      key: "card",
      displayer: "Card",
      value: [
        {
          type: "string",
          key: "title1",
          displayer: "Title-1",
          value: "$99/mo",
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
              value: PlaceholderFiller.string(),
            },
            {
              type: "string",
              key: "liText",
              displayer: "List Item",
              value: PlaceholderFiller.string(),
            },
            {
              type: "string",
              key: "liText",
              displayer: "List Item",
              value: PlaceholderFiller.string(),
            },
            {
              type: "string",
              key: "liText",
              displayer: "List Item",
              value: PlaceholderFiller.string(),
            },
            {
              type: "string",
              key: "liText",
              displayer: "List Item",
              value: PlaceholderFiller.string(),
            },
          ],
        },

        {
          type: "string",
          key: "title2",
          displayer: "Title-2",
          value: PlaceholderFiller.string(),
        },
        {
          type: "string",
          key: "title3",
          displayer: "Title-3",
          value: PlaceholderFiller.string(),
        },
      ],
    };

    this.addProp({
      type: "string",
      key: "tag",
      displayer: "Tag Title",
      value: PlaceholderFiller.string(),
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: PlaceholderFiller.string(),
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: PlaceholderFiller.string(),
    });

    this.addProp({
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
              displayer: "Link",
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
        JSON.parse(JSON.stringify(placeholder)),
        JSON.parse(JSON.stringify(placeholder)),
        JSON.parse(JSON.stringify(placeholder)),
      ],
    });
  }
  getName(): string {
    return "Multiple Pricing Card";
  }
  render() {
    const littleScreen = {
      width: "100%",
      display: "flex",
      flex: "wrap",
      justifyContent: "center",
    };

    const wideScreen = {
      width: 100 / this.getPropValue("itemCount") + "%",
      display: "flex",
      justifyContent: "center",
    };

    const mediumScreen = {
      width: "80%",
      display: "flex",
      flex: "wrap",
      justifyContent: "center",
    };

    let style = function () {
      if (window.innerWidth < 800) {
        return littleScreen;
      } else if (window.innerWidth > 1250) {
        return wideScreen;
      } else {
        return mediumScreen;
      }
    };

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            <div className={this.decorateCSS("page-up")}>
              <div className={this.decorateCSS("tag")}>
                <h4>{this.getPropValue("tag")}</h4>
              </div>
              <h1>{this.getPropValue("subtitle")}</h1>
              <p>{this.getPropValue("title")}</p>
            </div>
            <div className={this.decorateCSS("page-down")}>
              {this.castToObject<Pricing[]>("cards").map((price: Pricing) => {
                return (
                  <div style={style()}>
                    <div className={this.decorateCSS("card")}>
                      <div className={this.decorateCSS("card-up")}>
                        <div className={this.decorateCSS("tag")}>
                          <h4>{this.getPropValue("tag")}</h4>
                        </div>
                        <div className={this.decorateCSS("card-up-texts")}>
                          <p>{price.title2}</p>
                          <h1>{price.title1}</h1>
                          <h2>{price.title3}</h2>
                        </div>
                      </div>
                      <div className={this.decorateCSS("card-middle")}>
                        <ul className={this.decorateCSS("list-group")}>
                          {price.list.map((item: any) => {
                            return (
                              <li className={this.decorateCSS("li")}>
                                <img
                                  src="https://cdn-icons-png.flaticon.com/512/4315/4315445.png"
                                  alt=""
                                />
                                {item.value}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      <div className={this.decorateCSS("card-down")}>
                        {this.castToObject<Button[]>("buttons").map(
                          (item: Button) => {
                            return (
                              <ComposerLink path={item.url}>
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
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PricingMultiple;
