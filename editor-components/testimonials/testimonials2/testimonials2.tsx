import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials2.module.scss";

import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

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
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, molestias.",
    });
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Lorem", "", null, null, "Primary"),
      ],
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
    const subtitleExist = this.castToString(this.getPropValue("badge"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const buttons = this.castToObject<any[]>("buttons");
    const hasValidButtons = buttons.some((btn: any) => {
      const buttonText = this.castToString(btn.text);
      const iconExist = btn.icon && (btn.icon.type === "icon" ? btn.icon.name : btn.icon.url);
      return buttonText || iconExist;
    });

    const hasAnyTopContent = subtitleExist || titleExist || descriptionExist || hasValidButtons;

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
          breakpoint: 1024,
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
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {hasAnyTopContent && (
              <Base.VerticalContent className={this.decorateCSS("top-content")}>
                {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("badge")}>{this.getPropValue("badge")}</Base.SectionSubTitle>}
                {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
                {hasValidButtons && (
                  <div className={this.decorateCSS("button-container")}>
                    {buttons.map((item: any, index: number) => {
                      const buttonText = this.castToString(item.text);
                      const iconExist = item.icon && (item.icon.type === "icon" ? item.icon.name : item.icon.url);
                      if (!buttonText && !iconExist) return null;
                      return (
                        <ComposerLink key={index} path={item.url}>
                          <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                            {buttonText && <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>}
                            {iconExist && <Base.Media className={this.decorateCSS("button-icon")} value={item.icon!} />}
                          </Base.Button>
                        </ComposerLink>
                      );
                    })}
                  </div>
                )}
              </Base.VerticalContent>
            )}
        </Base.MaxContent>

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
