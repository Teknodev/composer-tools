import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials2.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base"

type Item = {
  name: string;
  nameId: string;
  description: string;
  subtitle: string;
  icon: string;
  star: number;
};

class Testimonials2Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "badge",
      displayer: "Badge",
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
              displayer: "Star",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Image",
              value: "RiStarSFill",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Flat design is characterized by simple, two-dimensional elements and a clean, minimal aesthetic. It's a great way to create a streamlined and modern look.",
            },
            {
              type: "string",
              key: "name",
              displayer: "name",
              value: "Mary Sheram",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
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
              displayer: "Star",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Image",
              value: "RiStarSFill",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Flat design is characterized by simple, two-dimensional elements and a clean, minimal aesthetic. It's a great way to create a streamlined and modern look.",
            },
            {
              type: "string",
              key: "name",
              displayer: "name",
              value: "Mary Sheram",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
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
              displayer: "Star",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Image",
              value: "RiStarSFill",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Flat design is characterized by simple, two-dimensional elements and a clean, minimal aesthetic. It's a great way to create a streamlined and modern look.",
            },
            {
              type: "string",
              key: "name",
              displayer: "name",
              value: "Mary Sheram",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
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
              displayer: "Star",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Image",
              value: "RiStarSFill",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Flat design is characterized by simple, two-dimensional elements and a clean, minimal aesthetic. It's a great way to create a streamlined and modern look.",
            },
            {
              type: "string",
              key: "name",
              displayer: "name",
              value: "Mary Sheram",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
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
              displayer: "Star",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Image",
              value: "RiStarSFill",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Flat design is characterized by simple, two-dimensional elements and a clean, minimal aesthetic. It's a great way to create a streamlined and modern look.",
            },
            {
              type: "string",
              key: "name",
              displayer: "name",
              value: "Mary Sheram",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Designer",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Testimonials 2";
  }

  render() {
    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
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
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            centerMode: false,
            padding: "0px"
          }
        }
      ]
    };

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("testimonials2")}>
            <Base.VerticalContent className={this.decorateCSS("top-content")}>
              <Base.SectionSubTitle className={this.decorateCSS("badge")}>
                {this.getPropValue("badge")}
              </Base.SectionSubTitle>
              <Base.SectionTitle className={this.decorateCSS("title")}>
                {this.getPropValue("title")}
              </Base.SectionTitle>
            </Base.VerticalContent>

            <ComposerSlider
              {...settings}
              className={this.decorateCSS("slider-style")}
            >
              {this.castToObject<Item[]>("card-items").map(
                (item: Item, index: number) => (
                  <div key={`tsm-2-${index}`} className={this.decorateCSS("card-wrapper")}>
                    <div>
                      <div key={index} className={this.decorateCSS("card")}>
                        <Base.VerticalContent className={this.decorateCSS("top-container")}>
                          <div className={this.decorateCSS("icon")}>
                            <div className={this.decorateCSS("item-star")}>
                              {[...Array(Number(item.star))].map(
                                (_: any, index: number) => (
                                  <ComposerIcon name={item.icon} />
                                )
                              )}
                            </div>
                            <Base.P className={this.decorateCSS("item-description")}>
                              {item.description}
                            </Base.P>
                          </div>
                        </Base.VerticalContent>
                        <Base.VerticalContent className={this.decorateCSS("bottom-container")}>
                          <div className={this.decorateCSS("item-name")}>
                            {item.name}
                          </div>
                          <div className={this.decorateCSS("item-subtitle")}>
                            {item.subtitle}{" "}
                          </div>
                        </Base.VerticalContent>
                      </div>
                    </div>
                  </div>
                )
              )}
            </ComposerSlider>
          </div>
        </Base.MaxContent >
      </Base.Container >
    );
  }
}

export default Testimonials2Page;
