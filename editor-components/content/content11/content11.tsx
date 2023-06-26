import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content11.module.scss";

type Card = {
  title: string;
  description: string;
  image: string;
  size: string;
};

class Content11 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Create advertising materials for each platform.",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value:
        "Reate creatives/banners for any advertising platform such as Facebook and Instagram Ads, Google Ads, LinkedIn Ads, Twitter Ads, Pinterest Ads, and any Display Advertising platform. A single tool that fulfills all your advertising design needs.",
    });
    this.addProp({
      type: "string",
      key: "subtitle2",
      displayer: "Outer title of the card",
      value: "Social Media Dimensions",
    });
    this.addProp({
      type: "string",
      key: "subtitle2-description",
      displayer: "Outer Description of the card",
      value: "The most common sizes for social media advertising",
    });

    this.addProp({
      type: "array",
      key: "content-card",
      displayer: "Content Card",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Card Title",
              value: "Post Size",
            },
            {
              type: "string",
              key: "description",
              displayer: "Card Description",
              value:
                "LinkedIn Feed, Twitter Feed... perfect for most used horizontal size online",
            },

            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/646f27eafba070002b74f3b7?alt=media&timestamp=1685006300589",
            },
            {
              type: "string",
              key: "size",
              displayer: "Size",
              value: "1080x1080",
            },
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
              displayer: "Card Title",
              value: "Land Size",
            },
            {
              type: "string",
              key: "description",
              displayer: "Card Description",
              value:
                "LinkedIn Feed, Twitter Feed... perfect for most used horizontal size online",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/646f27eafba070002b74f3b6?alt=media&timestamp=1685006300589",
            },
            {
              type: "string",
              key: "size",
              displayer: "Size",
              value: "1200x768",
            },
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
              displayer: "Card Title",
              value: "Story Size",
            },
            {
              type: "string",
              key: "description",
              displayer: "Card Description",
              value:
                "LinkedIn Feed, Twitter Feed... perfect for most used horizontal size online",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/646f27e2fba070002b74f3ae?alt=media&timestamp=1685006292040",
            },
            {
              type: "string",
              key: "size",
              displayer: "Size",
              value: "1080x1920",
            },
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
              displayer: "Card Title",
              value: "Pin Size",
            },
            {
              type: "string",
              key: "description",
              displayer: "Card Description",
              value:
                "LinkedIn Feed, Twitter Feed... perfect for most used horizontal size online",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/646f27eafba070002b74f3b7?alt=media&timestamp=1685006300589",
            },
            {
              type: "string",
              key: "size",
              displayer: "Size",
              value: "1200x768",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Content 11";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("header")}>
            <h2>{this.getPropValue("subtitle")}</h2>
            <span>{this.getPropValue("title")}</span>
            <h3>{this.getPropValue("subtitle2")}</h3>
            <span>{this.getPropValue("subtitle2-description")}</span>
          </div>

          <div className={this.decorateCSS("card-child")}>
            {this.castToObject<Card[]>("content-card").map(
              (card: Card, index: number) => (
                <div
                  key={`cnt-4-card-${index}`}
                  className={this.decorateCSS("card")}
                >
                  <i>
                    <img alt="server" src={card.image} />
                  </i>
                  <h5>{card.title}</h5>
                  <p>{card.description}</p>
                  <p className={this.decorateCSS("size-p")}>{card.size}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Content11;
