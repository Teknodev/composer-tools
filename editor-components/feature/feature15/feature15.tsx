import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature15.module.scss";

type CardItem = {
  image: string;
  title: string;
  text: string;
  buttonText: string;
  link: string;
};
class Feature15 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "See Collection",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Our Fine Home-Made Chocolate",
    });
    this.addProp({
      type: "string",
      key: "text",
      displayer: "Text",
      value: "Authorities in our business will tell in no uncertain terms that Lorem Ipsum is forever fastthat huge, forswear.",
    });
    this.addProp({
      type: "string",
      key: "buttonText",
      displayer: "Button Text",
      value: "READ MORE",
    });
    this.addProp({
      type: "page",
      key: "buttonLink",
      displayer: "Button Link",
      value: "",
    });

    this.addProp({
      type: "array",
      key: "item-card",
      displayer: "Item Card",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://cdn-icons-png.flaticon.com/512/2821/2821784.png",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Cupcakes",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "There are some redeeming factors in favor of greeking text",
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "LEARN MORE",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://cdn-icons-png.flaticon.com/512/2821/2821784.png",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Macaroons",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Merely the symptom of a worse problem to consideration",
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "LEARN MORE",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://cdn-icons-png.flaticon.com/512/2821/2821784.png",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Cakes",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "You sculpt information, you chisel away what’s not needed",
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "LEARN MORE",
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
    return "Feature 15";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("description-card")}>
              <span className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</span>
              <span className={this.decorateCSS("title")}>{this.getPropValue("title")}</span>
              <span className={this.decorateCSS("text")}>{this.getPropValue("text")}</span>
              <ComposerLink path={this.getPropValue("buttonLink")}>
                <span className={this.decorateCSS("button")}>
                  {this.getPropValue("buttonText")}
                </span>
              </ComposerLink>
            </div>

            {this.castToObject<CardItem[]>("item-card").map(
              (cardItem: any, index: number) => (
                <div key={index} className={this.decorateCSS("item-card")}>
                  <img src={cardItem.image} />
                  <span className={this.decorateCSS("title")}>{cardItem.title}</span>
                  <span className={this.decorateCSS("text")}>{cardItem.text}</span>
                  <ComposerLink path={cardItem.link}>
                    <span className={this.decorateCSS("button")}>
                      {cardItem.buttonText}
                    </span>
                  </ComposerLink>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Feature15;
