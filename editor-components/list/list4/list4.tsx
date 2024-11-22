import * as React from "react";
import { BaseList } from "../../EditorComponent";
import styles from "./list4.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type Card = {
  title: string;
  description: string;
  image: string;
  subtitle: string;
};

class list4 extends BaseList {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Our Services",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "We are delivering beautiful digital products for you.",
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617c20bd2970002c6241eb?alt=media&timestamp=1719483639150",
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617c20bd2970002c6241ec?alt=media&timestamp=1719483639150",
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617c20bd2970002c6241ed?alt=media&timestamp=1719483639150",
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
      <Base.Container className={this.decorateCSS("container")} >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
        <Base.VerticalContent className={this.decorateCSS("header")}>
              <Base.H2 className={this.decorateCSS("subtitle")}>
                {this.getPropValue("subtitle")}
              </Base.H2>
              <Base.H2 className={this.decorateCSS("title")}>
                {this.getPropValue("title")}
              </Base.H2>
            </Base.VerticalContent>
            <Base.ListGrid className={this.decorateCSS("card-child")} gridCount={{pc: this.getPropValue("itemCount")}}>
              {this.castToObject<Card[]>("content-card").map(
                (card: any, index: number) => (
                  <div
                    key={index}
                    className={this.decorateCSS("card-item-count")}
                    style={{
                      width: 95 / this.getPropValue("itemCount") + "%",
                    }}
                  >
                    <div className={this.decorateCSS("line-box")}>
                      <div className={this.decorateCSS("line-1")}></div>
                      <div className={this.decorateCSS("line-2")}></div>
                      <div className={this.decorateCSS("line-3")}></div>
                      <div className={this.decorateCSS("line-4")}></div>
                    </div>
                    <Base.H5 className={this.decorateCSS("card-title")}>
                      {card.title}
                    </Base.H5>
                    <div
                      key={`cnt-4-card-${index}`}
                      className={this.decorateCSS("card")}
                    >
                      <div className={this.decorateCSS("color-box")}>
                        <img alt="server" src={card.image} />
                        <Base.H4 className={this.decorateCSS("card-subtitle")}>
                          {card.subtitle}
                        </Base.H4>
                        <Base.P className={this.decorateCSS("card-description")}>
                          {card.description}
                        </Base.P>
                      </div>
                    </div>
                  </div>
                )
              )}
            </Base.ListGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default list4;
