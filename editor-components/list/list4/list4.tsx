import * as React from "react";
import { BaseList } from "../../EditorComponent";
import styles from "./list4.module.scss";

type Card = {
  title: string;
  description: string;
  image: string;
  subtitle: string;
};

type Card2 = {
  title2: string;
  description2: string;
  subtitle2: string;
  image: string;
};

class list4 extends BaseList {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "We are delivering beautiful digital products for you.",
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Our Services",
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
              displayer: "Title",
              value: "1",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Creative Idea",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Web design encompasses many different skills and disciplines in the production of all web.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://dentalexcellenceturkey.com/wp-content/themes/dectheme/images/steps/dental1.png",
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
              displayer: "Title",
              value: "2",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "High Creative Minds",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Web design encompasses many different skills and disciplines in the production of all web.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://dentalexcellenceturkey.com/wp-content/themes/dectheme/images/steps/dental2.png",
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
              displayer: "Title",
              value: "3",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Business Planning",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Web design encompasses many different skills and disciplines in the production of all web.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://dentalexcellenceturkey.com/wp-content/themes/dectheme/images/steps/dental3.png",
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
      max: 3,
    });
  }

  getName(): string {
    return "list 4";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("header")}>
            <span className={this.decorateCSS("subtitle")}>
              {this.getPropValue("subtitle")}
            </span>
            <h2 className={this.decorateCSS("title")}>
              {this.getPropValue("title")}
            </h2>
          </div>
          <div className={this.decorateCSS("card-child")}>
            {this.castToObject<Card[]>("content-card").map(
              (card: any, index: number) => (
                <div
                  key={index}
                  className={this.decorateCSS("card-item-count")}
                  style={{
                    width: 90 / this.getPropValue("itemCount") + "%",
                  }}
                >
                  <div className={this.decorateCSS("line-box")}>
                    <div className={this.decorateCSS("line-1")}></div>
                    <div className={this.decorateCSS("line-2")}></div>
                    <div className={this.decorateCSS("line-3")}></div>
                    <div className={this.decorateCSS("line-4")}></div>
                  </div>
                  <h5 className={this.decorateCSS("card-title")}>
                    {card.title}
                  </h5>
                  <div
                    key={`cnt-4-card-${index}`}
                    className={this.decorateCSS("card")}
                  >
                    <div className={this.decorateCSS("color-box")}>
                      <img alt="server" src={card.image} />
                      <h4 className={this.decorateCSS("card-subtitle")}>
                        {card.subtitle}
                      </h4>
                      <p className={this.decorateCSS("card-description")}>
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default list4;
