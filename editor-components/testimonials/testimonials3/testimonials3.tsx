import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials3.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base"

interface CardItem {
  star: number,
  subtitle: JSX.Element,
  image: string
}

class Testimonials3Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "icon",
      key: "star_icon",
      displayer: "Star Icon",
      value: "FaStar"
    })
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "295+ Customers gave their opinion"
    })
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
              displayer: "Star",
            },
            {
              type: "string",
              key: "subtitle",
              value: "Thanks to pagedone, I feel more informed and confident about my investment decisions than ever before.",
              displayer: "Subtitle",
            },
            {
              type: "image",
              key: "image",
              value: "https://pagedone.io/block_preview_image/Testimonial-8.jpg",
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
              displayer: "Star",
            },
            {
              type: "string",
              key: "subtitle",
              value: "Pagedone has made it possible for me to stay on top of my portolio and make informed decisions quickly and easily.",
              displayer: "Subtitle",
            },
            {
              type: "image",
              key: "image",
              value: "https://pagedone.io/block_preview_image/Testimonial-8.jpg",
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
              displayer: "Star",
            },
            {
              type: "string",
              key: "subtitle",
              value: "The customer service team at pagedone went above and beyond to help me resolve a billing issue.",
              displayer: "Subtitle",
            },
            {
              type: "image",
              key: "Image",
              value: "https://pagedone.io/block_preview_image/Testimonial-8.jpg",
              displayer: "Image",
            },
          ],
        },
      ],
    },
    );
  }

  getName(): string {
    return "Testimonials 3";
  }


  render() {
    const card = this.castToObject<CardItem[]>("card-items")
    console.log(card[0].star)
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("testimonials3")}>
            <Base.H1 className={this.decorateCSS("title")}>
              {this.getPropValue("title")}
            </Base.H1>
            <div className={this.decorateCSS("card-container")}>
              {card.map((card: any, index: number) => (
                <Base.VerticalContent className={this.decorateCSS("card")}>
                  <div className={this.decorateCSS("stars")}>
                    {[...Array(Number(card.star))].map(
                      (_: any, index: number) => (
                        <ComposerIcon name={this.getPropValue("star_icon")} />
                      )
                    )}
                  </div>
                  <Base.P className={this.decorateCSS("cardSubtitle")} > {card.subtitle}</Base.P>
                  <img className={this.decorateCSS("image")} src={card.image}></img>
                </Base.VerticalContent>
              )
              )}
            </div>
          </div>
        </Base.MaxContent >
      </Base.Container >
    );
  }
}

export default Testimonials3Page;
