import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials3.module.scss";

import { Base } from "../../../composer-base-components/base/base";

interface CardItem {
  star: number;
  subtitle: React.JSX.Element;
  image: string;
}
class Testimonials3Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "icon",
      key: "star_icon",
      displayer: "Icon",
      value: "FaStar",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "295+ Customers gave their opinion",
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 3,
    });
    this.addProp({
      type: "array",
      key: "card-items",
      displayer: "Card Items",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "number",
              key: "star",
              value: 5,
              displayer: "Icon Number",
            },
            {
              type: "string",
              key: "subtitle",
              value: "Thanks to pagedone, I feel more informed and confident about my investment decisions than ever before.",
              displayer: "Review Text",
            },
            {
              type: "image",
              key: "image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645516a9f72de2002caaf056?alt=media&timestamp=1719584962573",
              displayer: "Image",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "number",
              key: "star",
              value: 5,
              displayer: "Icon Number",
            },
            {
              type: "string",
              key: "subtitle",
              value: "Pagedone has made it possible for me to stay on top of my portolio and make informed decisions quickly and easily.",
              displayer: "Review Text",
            },
            {
              type: "image",
              key: "image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645516a9f72de2002caaf055?alt=media&timestamp=1719584962573",
              displayer: "Image",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "number",
              key: "star",
              value: 5,
              displayer: "Icon Number",
            },
            {
              type: "string",
              key: "subtitle",
              value: "The customer service team at pagedone went above and beyond to help me resolve a billing issue.",
              displayer: "Review Text",
            },
            {
              type: "image",
              key: "image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645516a9f72de2002caaf054?alt=media&timestamp=1719584962573",
              displayer: "Image",
            },
          ],
        },
      ],
    });
  }
  static getName(): string {
    return "Testimonials 3";
  }
  render() {
    const card = this.castToObject<CardItem[]>("card-items");
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("testimonials3")}>
            {this.castToString(this.getPropValue("title")) && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
            <Base.ListGrid className={this.decorateCSS("card-container")} gridCount={{ pc: this.getPropValue("itemCount"), tablet: 2, phone: 1 }}>
              {card.map((card: any, index: number) => (
                <div className={this.decorateCSS("card")}>
                  {card.star > 0 && this.getPropValue("star_icon") && (
                    <div className={this.decorateCSS("stars")}>
                      {[...Array(Number(card.star))].map((_: any, index: number) => (
                        <Base.Icon propsIcon={{ className: this.decorateCSS("icon") }} name={this.getPropValue("star_icon")} />
                      ))}
                    </div>
                  )}
                  {this.castToString(card.subtitle) && <Base.P className={this.decorateCSS("cardSubtitle")}> {card.subtitle}</Base.P>}
                  {card.image && <img className={this.decorateCSS("image")} src={card.image} alt={card.image} />}
                </div>
              ))}
            </Base.ListGrid>
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Testimonials3Page;
