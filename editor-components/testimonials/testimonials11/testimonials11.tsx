import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials11.module.scss";
import { Base } from "../../../composer-base-components/base/base";

interface CardItem {
  image: string;
  title: React.JSX.Element;
  subtitle: React.JSX.Element;
  description: React.JSX.Element;
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
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67239fe77acba6002c5d6377?alt=media",
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
              displayer: "Author Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617822bd2970002c623daf?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "title",
              displayer: "Author Name",
              value: "Sarah Lewin",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Author Position",
              value: "Project manager in Pixels",
            },
            {
              type: "string",
              key: "description",
              displayer: "Review Text",
              value: "I think if you do something and it turns out pretty good, then you should go do something else wonderful, not dwell on it for too long.",
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
              displayer: "Author Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617822bd2970002c623db0?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "title",
              displayer: "Author Name",
              value: "Gregory Tabot",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Author Position",
              value: "Photographer",
            },
            {
              type: "string",
              key: "description",
              displayer: "Review Text",
              value: "The principal element of Suprematism in painting, as in architecture, is its liberation from all social or materialist tendencies. Through Suprematism, art comes into its pure and unpolluted form.",
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
              displayer: "Author Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617822bd2970002c623db1?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "title",
              displayer: "Author Name",
              value: "Jess Simpson",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Author Position",
              value: "Team lead in TBB",
            },
            {
              type: "string",
              key: "description",
              displayer: "Review Text",
              value: "I think if you do something and it turns out pretty good, then you should go do something else wonderful, not dwell on it for too long.",
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
              displayer: "Author Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617822bd2970002c623db1?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "title",
              displayer: "Author Name",
              value: "Jess Simpson",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Author Position",
              value: "Team lead in TBB",
            },
            {
              type: "string",
              key: "description",
              displayer: "Review Text",
              value: "I think if you do something and it turns out pretty good, then you should go do something else wonderful, not dwell on it for too long.",
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
              displayer: "Author Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617822bd2970002c623db1?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "title",
              displayer: "Author Name",
              value: "Jess Simpson",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Author Position",
              value: "Team lead in TBB",
            },
            {
              type: "string",
              key: "description",
              displayer: "Review Text",
              value: "I think if you do something and it turns out pretty good, then you should go do something else wonderful, not dwell on it for too long.",
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
              displayer: "Author Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617822bd2970002c623db1?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "title",
              displayer: "Author Name",
              value: "Jess Simpson",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Author Position",
              value: "Team lead in TBB",
            },
            {
              type: "string",
              key: "description",
              displayer: "Review Text",
              value: "I think if you do something and it turns out pretty good, then you should go do something else wonderful, not dwell on it for too long.",
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
  static getName(): string {
    return "Testimonials 11";
  }

  render() {
    const coverImage = this.getPropValue("cover-image");
    const cardList = this.castToObject<CardItem[]>("items");
    return (
      <Base.Container
        className={this.decorateCSS("container")}
        style={{
          backgroundImage: `url(${this.getPropValue("cover-image")})`,
        }}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            {this.castToString(this.getPropValue("title")) && <Base.SectionTitle className={`${this.decorateCSS("title")} ${this.getPropValue("cover-image") && this.decorateCSS("title-with-image")}`}>{this.getPropValue("title")}</Base.SectionTitle>}

            <Base.ListGrid gridCount={{ phone: 1, tablet: 2, pc: this.getPropValue("itemCount") }} className={this.decorateCSS("content")}>
              {cardList.map((item: any, index: number) => (
                <div className={`${this.decorateCSS("cards")} ${!coverImage && this.decorateCSS("cards-no-background")} `}>
                  <div className={this.decorateCSS("card-top")}>
                    {item.image && <img src={item.image} alt={item.image} className={this.decorateCSS("card-image")} />}
                    <div className={this.decorateCSS("card-top-right")}>
                      {this.castToString(item.title) && <Base.H4 className={this.decorateCSS("card-title")}>{item.title}</Base.H4>}
                      {this.castToString(item.subtitle) && <Base.H5 className={this.decorateCSS("card-subtitle")}>{item.subtitle}</Base.H5>}
                    </div>
                  </div>
                  <Base.P className={this.decorateCSS("card-description")}>{item.description}</Base.P>
                </div>
              ))}
            </Base.ListGrid>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Testimonials11Page;
