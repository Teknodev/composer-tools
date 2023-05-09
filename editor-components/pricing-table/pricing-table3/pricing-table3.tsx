import * as React from "react";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import styles from "./pricing-table3.module.scss";
import { BasePricingTable, TypeUsableComponentProps } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/link";

type Button = {
  buttonText: string,
  url: string,
  isPrimary: string,
}

class PricingTable3 extends BasePricingTable {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title1",
      displayer: "Subtitle",
      value: PlaceholderFiller.shortText(),
    });
    this.addProp({
      type: "string",
      key: "title2",
      displayer: "Title",
      value: PlaceholderFiller.shortText(),
    });
    this.addProp({
      type: "string",
      key: "title3",
      displayer: "Description",
      value: PlaceholderFiller.mediumText(),
    });
    this.addProp({
      type: "string",
      key: "title4",
      displayer: "Card Title",
      value: PlaceholderFiller.string(),
    });
    this.addProp({
      type: "string",
      key: "title5",
      displayer: "Text-1",
      value: PlaceholderFiller.string(),
    });
    this.addProp({
      type: "string",
      key: "title6",
      displayer: "Text-2",
      value: PlaceholderFiller.string(),
    });
    this.addProp({
      type: "string",
      key: "title7",
      displayer: "Text-3",
      value: PlaceholderFiller.string(),
    });

    this.addProp({
      type: "string",
      key: "text1",
      displayer: "Text-4",
      value: PlaceholderFiller.string(),
    });

    let item: TypeUsableComponentProps = {
      type: "string",
      key: "liText",
      displayer: "List Text",
      value: PlaceholderFiller.string()
    }

    this.addProp({
      type: "array",
      key: "text2",
      displayer: "List Items",
      value: [
        JSON.parse(JSON.stringify(item)),
        JSON.parse(JSON.stringify(item)),
        JSON.parse(JSON.stringify(item)),
        JSON.parse(JSON.stringify(item)),
        JSON.parse(JSON.stringify(item)),
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
          displayer: "URL",
          value: PlaceholderFiller.string(),
        },
        {
          type: "boolean",
          key: "isPrimary",
          displayer: "Is Primary",
          value: false
        }
      ]
    };

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [JSON.parse(JSON.stringify(button))]
    });

  }

  getName(): string {
    return "Pricing Table 3";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}
        >
          <div className={this.decorateCSS("page")} >
            <div
              className={`${this.decorateCSS("child-page")} ${this.decorateCSS("child-page-left")}`}
              
            >
              <div
                className={this.decorateCSS("texts")}
                
              >
                <h1>{this.getPropValue("title1")}</h1>
                <p className={this.decorateCSS("title2")}>{this.getPropValue("title2")}</p>
                <p>{this.getPropValue("title3")}</p>
              </div>
            </div>
            <div
              className={this.decorateCSS("child-page")}
              
            >
              <div
                className={this.decorateCSS("child-page-right")}
                
              >
                <div
                  className={this.decorateCSS("right-up")}
                  
                >
                  <h4>{this.getPropValue("title4")}</h4>
                  <ul className={this.decorateCSS("list-group")}>
                    {this.getPropValue("text2").map(
                      (price: any, index: number) => {
                        return <li key={index}><div className={this.decorateCSS("circle-icon")}>&#10004;</div>{price.value}</li>;
                      }
                    )}
                  </ul>
                </div>
                <div className={this.decorateCSS("right-down")}>
                  <div className={this.decorateCSS("right-down-up")}>
                    <div className={this.decorateCSS("little")}>
                      <p>{this.getPropValue("title5")}</p>
                      <p>{this.getPropValue("title6")}</p>
                    </div>
                    <div className={this.decorateCSS("little") + this.decorateCSS("other")}>
                      <h2>{this.getPropValue("title7")}</h2>
                      <h2>{this.getPropValue("text1")}</h2>
                    </div>
                  </div>
                  <div className={this.decorateCSS("button-group")}>
                    {this.castToObject<Button[]>("buttons").map((item: Button) => {
                      return (
                        <ComposerLink path={item.url}>
                          <button className={`${this.decorateCSS("button")} ${item.isPrimary && this.decorateCSS("primary")}`}>
                            {item.buttonText}
                          </button>
                        </ComposerLink>
                      )
                    })}
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

