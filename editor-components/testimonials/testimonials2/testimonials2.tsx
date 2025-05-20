import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials2.module.scss";

import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";

type Item = {
  name: React.JSX.Element;
  description: React.JSX.Element;
  subtitle: React.JSX.Element;
  icon: string;
  star: number;
};

class Testimonials2Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "badge",
      displayer: "Subtitle",
      value: "WHAT OUR CLIENTS SAY",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Happy Clients' Testimonials",
    });
    this.addProp({
      type: "array",
      key: "card-items",
      displayer: "Card Items",
      value: [
        {
          type: "object",
          key: "card1",
          displayer: "Card1",
          value: [
            {
              type: "number",
              key: "star",
              value: 5,
              displayer: "Icon Number",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "RiStarSFill",
            },
            {
              type: "string",
              key: "description",
              displayer: "Review Text",
              value: "Flat design is characterized by simple, two-dimensional elements and a clean, minimal aesthetic. It's a great way to create a streamlined and modern look.",
            },
            {
              type: "string",
              key: "name",
              displayer: "Author Name",
              value: "Mary Sheram",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Author Position",
              value: "Designer",
            },
          ],
        },
        {
          type: "object",
          key: "card1",
          displayer: "Card1",
          value: [
            {
              type: "number",
              key: "star",
              value: 5,
              displayer: "Icon Number",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "RiStarSFill",
            },
            {
              type: "string",
              key: "description",
              displayer: "Review Text",
              value: "Flat design is characterized by simple, two-dimensional elements and a clean, minimal aesthetic. It's a great way to create a streamlined and modern look.",
            },
            {
              type: "string",
              key: "name",
              displayer: "Author Name",
              value: "Mary Sheram",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Author Position",
              value: "Designer",
            },
          ],
        },
        {
          type: "object",
          key: "card1",
          displayer: "Card1",
          value: [
            {
              type: "number",
              key: "star",
              value: 5,
              displayer: "Icon Number",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "RiStarSFill",
            },
            {
              type: "string",
              key: "description",
              displayer: "Review Text",
              value: "Flat design is characterized by simple, two-dimensional elements and a clean, minimal aesthetic. It's a great way to create a streamlined and modern look.",
            },
            {
              type: "string",
              key: "name",
              displayer: "Author Name",
              value: "Mary Sheram",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Author Position",
              value: "Designer",
            },
          ],
        },
        {
          type: "object",
          key: "card1",
          displayer: "Card1",
          value: [
            {
              type: "number",
              key: "star",
              value: 5,
              displayer: "Icon Number",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "RiStarSFill",
            },
            {
              type: "string",
              key: "description",
              displayer: "Review Text",
              value: "Flat design is characterized by simple, two-dimensional elements and a clean, minimal aesthetic. It's a great way to create a streamlined and modern look.",
            },
            {
              type: "string",
              key: "name",
              displayer: "Author Name",
              value: "Mary Sheram",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Author Position",
            },
          ],
        },
        {
          type: "object",
          key: "card1",
          displayer: "Card1",
          value: [
            {
              type: "number",
              key: "star",
              value: 5,
              displayer: "Icon Number",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "RiStarSFill",
            },
            {
              type: "string",
              key: "description",
              displayer: "Review Text",
              value: "Flat design is characterized by simple, two-dimensional elements and a clean, minimal aesthetic. It's a great way to create a streamlined and modern look.",
            },
            {
              type: "string",
              key: "name",
              displayer: "Author Name",
              value: "Mary Sheram",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Author Position",
              value: "Designer",
            },
          ],
        },
      ],
    });
  }

  static getName(): string {
    return "Testimonials 2";
  }

  render() {
    const cardCount = this.getPropValue("card-items").length;
    const settings = {
      arrows: false,
      dots: true,
      infinite: cardCount > 3,
      speed: 725,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 3.65,
      centerMode: true,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 1.65,
          },
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            centerMode: false,
            padding: "0px",
          },
        },
      ],
    };

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.Container className={this.decorateCSS("header")}>
          <Base.MaxContent className={this.decorateCSS("max-content")}>
            {(this.castToString(this.getPropValue("badge")) || this.castToString(this.getPropValue("title"))) && (
              <Base.VerticalContent className={this.decorateCSS("top-content")}>
                {this.castToString(this.getPropValue("badge")) && <Base.SectionSubTitle className={this.decorateCSS("badge")}>{this.getPropValue("badge")}</Base.SectionSubTitle>}
                {this.castToString(this.getPropValue("title")) && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
              </Base.VerticalContent>
            )}
          </Base.MaxContent>
        </Base.Container>

        <ComposerSlider {...settings} className={this.decorateCSS("slider-style")}>
          {this.castToObject<Item[]>("card-items").map((item: Item, index: number) => (
            <div className={this.decorateCSS("card")}>
              {(item.star > 0 || item.icon || this.castToString(item.description)) && (
                <Base.VerticalContent className={this.decorateCSS("top-container")}>
                  {(item.star > 0 || item.icon) && (
                    <Base.Row className={this.decorateCSS("icon-element")}>
                      {[...Array(Number(item.star))].map((_: any, index: number) => (
                        <Base.Icon propsIcon={{ className: this.decorateCSS("icon") }} name={item.icon} />
                      ))}
                    </Base.Row>
                  )}
                  {this.castToString(item.description) && <Base.P className={this.decorateCSS("item-description")}>{item.description}</Base.P>}
                </Base.VerticalContent>
              )}
              {(this.castToString(item.name) || this.castToString(item.subtitle)) && (
                <Base.VerticalContent className={this.decorateCSS("bottom-container")}>
                  {this.castToString(item.name) && <Base.P className={this.decorateCSS("item-name")}>{item.name}</Base.P>}
                  {this.castToString(item.subtitle) && <Base.P className={this.decorateCSS("item-subtitle")}>{item.subtitle}</Base.P>}
                </Base.VerticalContent>
              )}
            </div>
          ))}
        </ComposerSlider>
      </Base.Container>
    );
  }
}

export default Testimonials2Page;
