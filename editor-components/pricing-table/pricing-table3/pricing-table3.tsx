import * as React from "react";
import styles from "./pricing-table3.module.scss";
import { BasePricingTable, TypeUsableComponentProps } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type Button = {
  buttonText: string;
  url: string;
  isPrimary: string;
};

class PricingTable3 extends BasePricingTable {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title1",
      displayer: "Subtitle",
      value: "Pricing Strategies for Small Businesses",
    });
    this.addProp({
      type: "string",
      key: "title2",
      displayer: "Title",
      value:
        "Pricing is a crucial element of any business strategy, and small businesses need to adopt effective pricing strategies to stay competitive.",
    });
    this.addProp({
      type: "string",
      key: "title3",
      displayer: "Description",
      value:
        "One important pricing strategy for small businesses is value-based pricing, which involves setting prices based on the perceived value of a product or service to the customer.",
    });
    this.addProp({
      type: "string",
      key: "title4",
      displayer: "Card Title",
      value: "Product",
    });
    this.addProp({
      type: "string",
      key: "title5",
      displayer: "Text-1",
      value: "Price",
    });
    this.addProp({
      type: "string",
      key: "title6",
      displayer: "Text-2",
      value: "Duration",
    });
    this.addProp({
      type: "string",
      key: "title7",
      displayer: "Text-3",
      value: "$250",
    });

    this.addProp({
      type: "string",
      key: "text1",
      displayer: "Text-4",
      value: "Monthly",
    });

    this.addProp({
      type: "array",
      key: "text2",
      displayer: "List Items",
      value: [
        {
          type: "string",
          key: "liText",
          displayer: "List Text",
          value: "100 Websites",
        },
        {
          type: "string",
          key: "liText",
          displayer: "List Text",
          value: "100 GB Disk Space",
        },
        {
          type: "string",
          key: "liText",
          displayer: "List Text",
          value: "Unlimited Bandwidth",
        },
        {
          type: "string",
          key: "liText",
          displayer: "List Text",
          value: "100 Email Accounts",
        },
        {
          type: "string",
          key: "liText",
          displayer: "List Text",
          value: "24/7/365 Support",
        },
      ],
    });

    let button: TypeUsableComponentProps = {
      type: "object",
      key: "button",
      displayer: "Button",
      value: [
        {
          type: "string",
          key: "buttonText",
          displayer: "Button Text",
          value: "GET STARTED",
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
          displayer: "Is Primary",
          value: false,
        },
      ],
    };

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [JSON.parse(JSON.stringify(button))],
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
            <div
              className={`${this.decorateCSS("child-page")} ${this.decorateCSS(
                "child-page-left"
              )}`}
            >
              <div className={this.decorateCSS("texts")}>
                <h1>{this.getPropValue("title1")}</h1>
                <p className={this.decorateCSS("title2")}>
                  {this.getPropValue("title2")}
                </p>
                <p>{this.getPropValue("title3")}</p>
              </div>
            </div>
            <div className={this.decorateCSS("child-page")}>
              <div className={this.decorateCSS("child-page-right")}>
                <div className={this.decorateCSS("right-up")}>
                  <h4>{this.getPropValue("title4")}</h4>
                  <ul className={this.decorateCSS("list-group")}>
                    {this.getPropValue("text2").map((price: any, indexText: number) => {
                      return (
                        <li className={this.decorateCSS("list-item")} key={indexText}>
                          <div className={this.decorateCSS("circle-icon")}>
                            <img src="https://cdn-icons-png.flaticon.com/512/33/33281.png" alt=""/>
                          </div>
                          {price.value}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className={this.decorateCSS("right-down")}>
                  <div className={this.decorateCSS("right-down-up")}>
                    <div className={this.decorateCSS("little")}>
                      <p>{this.getPropValue("title5")}</p>
                      <p>{this.getPropValue("title6")}</p>
                    </div>
                    <div
                      className={this.decorateCSS("little") + this.decorateCSS("other")}
                    >
                      <h2>{this.getPropValue("title7")}</h2>
                      <h2>{this.getPropValue("text1")}</h2>
                    </div>
                  </div>
                  <div className={this.decorateCSS("button-group")}>
                    {this.castToObject<Button[]>("buttons").map(
                      (item: Button, indexButtons: number) => {
                        return (
                          <ComposerLink key={indexButtons} path={item.url}>
                            <button
                              className={`${this.decorateCSS("button")} ${
                                item.isPrimary && this.decorateCSS("primary")
                              }`}
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PricingTable3;
