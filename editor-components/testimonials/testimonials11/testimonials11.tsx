import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials11.module.scss";

class Testimonials11Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Testimonials",
    });
    this.addProp({
      type: "image",
      key: "cover-image",
      displayer: "Background Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617848bd2970002c623df5?alt=media&timestamp=1719483639150",
    });
    this.addProp({
      type: "array",
      key: "item-list",
      displayer: "Item List",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              key: "item-image",
              displayer: "Card Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617822bd2970002c623daf?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "item-title",
              displayer: "Card Title",
              value: "Sarah Lewin",
            },
            {
              type: "string",
              key: "item-subtitle",
              displayer: "Card Subtitle",
              value: "Project manager in Pixels",
            },
            {
              type: "string",
              key: "item-description",
              displayer: "Card Description",
              value:
                "I think if you do something and it turns out pretty good, then you should go do something else wonderful, not dwell on it for too long.",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              key: "item-image",
              displayer: "Card Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617822bd2970002c623db0?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "item-title",
              displayer: "Card Title",
              value: "Gregory Tabot",
            },
            {
              type: "string",
              key: "item-subtitle",
              displayer: "Card Subtitle",
              value: "Photographer",
            },
            {
              type: "string",
              key: "item-description",
              displayer: "Card Description",
              value:
                "The principal element of Suprematism in painting, as in architecture, is its liberation from all social or materialist tendencies. Through Suprematism, art comes into its pure and unpolluted form.",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              key: "item-image",
              displayer: "Card Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617822bd2970002c623db1?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "item-title",
              displayer: "Card Title",
              value: "Jess Simpson",
            },
            {
              type: "string",
              key: "item-subtitle",
              displayer: "Card Subtitle",
              value: "Team lead in TBB",
            },
            {
              type: "string",
              key: "item-description",
              displayer: "Card Description",
              value:
                "I think if you do something and it turns out pretty good, then you should go do something else wonderful, not dwell on it for too long.",
            },
          ],
        },
        {
            type: "object",
            key: "item",
            displayer: "Item",
            value: [
              {
                type: "image",
                key: "item-image",
                displayer: "Card Image",
                value:
                  "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617822bd2970002c623db1?alt=media&timestamp=1719483639150",
              },
              {
                type: "string",
                key: "item-title",
                displayer: "Card Title",
                value: "Jess Simpson",
              },
              {
                type: "string",
                key: "item-subtitle",
                displayer: "Card Subtitle",
                value: "Team lead in TBB",
              },
              {
                type: "string",
                key: "item-description",
                displayer: "Card Description",
                value:
                  "I think if you do something and it turns out pretty good, then you should go do something else wonderful, not dwell on it for too long.",
              },
            ],
          },
          {
            type: "object",
            key: "item",
            displayer: "Item",
            value: [
              {
                type: "image",
                key: "item-image",
                displayer: "Card Image",
                value:
                  "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617822bd2970002c623db1?alt=media&timestamp=1719483639150",
              },
              {
                type: "string",
                key: "item-title",
                displayer: "Card Title",
                value: "Jess Simpson",
              },
              {
                type: "string",
                key: "item-subtitle",
                displayer: "Card Subtitle",
                value: "Team lead in TBB",
              },
              {
                type: "string",
                key: "item-description",
                displayer: "Card Description",
                value:
                  "I think if you do something and it turns out pretty good, then you should go do something else wonderful, not dwell on it for too long.",
              },
            ],
          },
          {
            type: "object",
            key: "item",
            displayer: "Item",
            value: [
              {
                type: "image",
                key: "item-image",
                displayer: "Card Image",
                value:
                  "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617822bd2970002c623db1?alt=media&timestamp=1719483639150",
              },
              {
                type: "string",
                key: "item-title",
                displayer: "Card Title",
                value: "Jess Simpson",
              },
              {
                type: "string",
                key: "item-subtitle",
                displayer: "Card Subtitle",
                value: "Team lead in TBB",
              },
              {
                type: "string",
                key: "item-description",
                displayer: "Card Description",
                value:
                  "I think if you do something and it turns out pretty good, then you should go do something else wonderful, not dwell on it for too long.",
              },
            ],
          },
      ],
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 3,
      max: 4,
    });
  }
  getName(): string {
    return "Testimonials 11";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div
            className={this.decorateCSS("cover-image")}
            style={{
              backgroundImage: `url(${this.getPropValue("cover-image")})`,
            }}
          >
            <div className={this.decorateCSS("title")}>
              {this.getPropValue("title")}
            </div>
            <div className={this.decorateCSS("testimonials11")}>
              {this.getPropValue("item-list").map(
                (item: any, index: number) => (
                  <div
                    key={index}
                    className={this.decorateCSS("cards")}
                    style={{
                      width: 90 / this.getPropValue("itemCount") + "%",
                    }}
                  >
                    <div className={this.decorateCSS("card-top")}>
                      <img
                        src={item.value[0].value}
                        alt="cardPhoto"
                        className={this.decorateCSS("card-image")}
                      />
                      <div className={this.decorateCSS("card-top-right")}>
                        <div className={this.decorateCSS("card-title")}>
                          {item.value[1].value}
                        </div>
                        <div className={this.decorateCSS("card-subtitle")}>
                          {item.value[2].value}
                        </div>
                      </div>
                    </div>
                    <div className={this.decorateCSS("card-description")}>
                      {item.value[3].value}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonials11Page;
