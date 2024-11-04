import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials11.module.scss";
import { Base } from "../../../composer-base-components/base/base";

interface CardItem {
  image: string,
  title: JSX.Element,
  subtitle: JSX.Element,
  description: JSX.Element,
}

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
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67239fe77acba6002c5d6377?alt=media",
    });
    this.addProp({
      type: "array",
      key: "items",
      displayer: "Item List",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Card Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617822bd2970002c623daf?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "title",
              displayer: "Card Title",
              value: "Sarah Lewin",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Card Subtitle",
              value: "Project manager in Pixels",
            },
            {
              type: "string",
              key: "description",
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
              key: "image",
              displayer: "Card Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617822bd2970002c623db0?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "title",
              displayer: "Card Title",
              value: "Gregory Tabot",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Card Subtitle",
              value: "Photographer",
            },
            {
              type: "string",
              key: "description",
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
              key: "image",
              displayer: "Card Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617822bd2970002c623db1?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "title",
              displayer: "Card Title",
              value: "Jess Simpson",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Card Subtitle",
              value: "Team lead in TBB",
            },
            {
              type: "string",
              key: "description",
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
              key: "image",
              displayer: "Card Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617822bd2970002c623db1?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "title",
              displayer: "Card Title",
              value: "Jess Simpson",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Card Subtitle",
              value: "Team lead in TBB",
            },
            {
              type: "string",
              key: "description",
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
              key: "image",
              displayer: "Card Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617822bd2970002c623db1?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "title",
              displayer: "Card Title",
              value: "Jess Simpson",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Card Subtitle",
              value: "Team lead in TBB",
            },
            {
              type: "string",
              key: "description",
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
              key: "image",
              displayer: "Card Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617822bd2970002c623db1?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "title",
              displayer: "Card Title",
              value: "Jess Simpson",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Card Subtitle",
              value: "Team lead in TBB",
            },
            {
              type: "string",
              key: "description",
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
    });
  }
  getName(): string {
    return "Testimonials 11";
  }

  render() {
    const cardList = this.castToObject<CardItem[]>("items");
    return (
      <Base.Container className={this.decorateCSS("container")}
        style={{
          backgroundImage: `url(${this.getPropValue("cover-image")})`
        }}>
        <Base.MaxContent className={this.getPropValue("cover-image") ? this.decorateCSS("max-content") : this.decorateCSS("max-content-no-background")}>
          <Base.VerticalContent className={this.decorateCSS("wrapper")}>
            {this.castToString(this.getPropValue("title")) && (
              <Base.SectionTitle className={this.getPropValue("cover-image") ? this.decorateCSS("title") : this.decorateCSS("title-no-background")}>
                {this.getPropValue("title")}
              </Base.SectionTitle>
            )}

            <Base.ListGrid gridCount={{ phone: 1, tablet: 2, pc: this.getPropValue("itemCount") }} className={this.decorateCSS("testimonials11")}>
              {cardList.map(
                (item: any, index: number) => (
                  <div className={this.getPropValue("cover-image") ? this.decorateCSS("cards") : this.decorateCSS("cards-no-background")}>
                    <div className={this.decorateCSS("card-top")}>
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.image}
                          className={this.decorateCSS("card-image")}
                        />
                      )}
                      <Base.VerticalContent className={this.decorateCSS("card-top-right")}>
                        {this.castToString(item.title) && (
                          <Base.H4 className={this.decorateCSS("card-title")}>
                            {item.title}
                          </Base.H4>
                        )}
                        {this.castToString(item.subtitle) && (
                          <Base.H5 className={this.decorateCSS("card-subtitle")}>
                            {item.subtitle}
                          </Base.H5>
                        )}
                      </Base.VerticalContent>
                    </div>
                    <Base.P className={this.decorateCSS("card-description")}>
                      {item.description}
                    </Base.P>
                  </div>
                )
              )}
            </Base.ListGrid>
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container >
    );
  }
}

export default Testimonials11Page;
