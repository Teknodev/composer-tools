import * as React from "react";
import { Testimonials, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./testimonials2.module.scss";

import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type Item = {
  text: React.JSX.Element;
  icon: TypeMediaInputValue;
  star: number;
  author: {
    name: React.JSX.Element;
    position: React.JSX.Element;
    image: TypeMediaInputValue;
  };
};

type Button = {
  text: React.JSX.Element;
  url: string;
  icon: TypeMediaInputValue;
  type: string;
};

class Testimonials2Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
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
      value: "",
    });
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
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
          displayer: "Card 1",
          value: [
            {
              type: "number",
              key: "star",
              value: 5,
              displayer: "Count",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "RiStarSFill" },
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Flat design is characterized by simple, two-dimensional elements and a clean, minimal aesthetic. It's a great way to create a streamlined and modern look.",
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                {
                  type: "media",
                  key: "image",
                  displayer: "Media",
                  additionalParams: { availableTypes: ["image", "icon"] },
                  value: { type: "image", url: "" },
                },
                {
                  type: "string",
                  key: "name",
                  displayer: "Name",
                  value: "Mary Sheram",
                },
                {
                  type: "string",
                  key: "position",
                  displayer: "Position",
                  value: "Designer",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "card2",
          displayer: "Card 2",
          value: [
            {
              type: "number",
              key: "star",
              value: 5,
              displayer: "Count",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "RiStarSFill" },
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Flat design is characterized by simple, two-dimensional elements and a clean, minimal aesthetic. It's a great way to create a streamlined and modern look.",
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                {
                  type: "media",
                  key: "image",
                  displayer: "Media",
                  additionalParams: { availableTypes: ["image", "icon"] },
                  value: { type: "image", url: "" },
                },
                {
                  type: "string",
                  key: "name",
                  displayer: "Name",
                  value: "Mary Sheram",
                },
                {
                  type: "string",
                  key: "position",
                  displayer: "Position",
                  value: "Designer",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "card3",
          displayer: "Card 3",
          value: [
            {
              type: "number",
              key: "star",
              value: 5,
              displayer: "Count",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "RiStarSFill" },
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Flat design is characterized by simple, two-dimensional elements and a clean, minimal aesthetic. It's a great way to create a streamlined and modern look.",
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                {
                  type: "media",
                  key: "image",
                  displayer: "Media",
                  additionalParams: { availableTypes: ["image", "icon"] },
                  value: { type: "image", url: "" },
                },
                {
                  type: "string",
                  key: "name",
                  displayer: "Name",
                  value: "Mary Sheram",
                },
                {
                  type: "string",
                  key: "position",
                  displayer: "Position",
                  value: "Designer",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "card4",
          displayer: "Card 4",
          value: [
            {
              type: "number",
              key: "star",
              value: 5,
              displayer: "Count",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "RiStarSFill" },
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Flat design is characterized by simple, two-dimensional elements and a clean, minimal aesthetic. It's a great way to create a streamlined and modern look.",
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                {
                  type: "media",
                  key: "image",
                  displayer: "Media",
                  additionalParams: { availableTypes: ["image", "icon"] },
                  value: { type: "image", url: "" },
                },
                {
                  type: "string",
                  key: "name",
                  displayer: "Name",
                  value: "Mary Sheram",
                },
                {
                  type: "string",
                  key: "position",
                  displayer: "Position",
                  value: "Designer",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "card5",
          displayer: "Card 5",
          value: [
            {
              type: "number",
              key: "star",
              value: 5,
              displayer: "Count",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "RiStarSFill" },
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Flat design is characterized by simple, two-dimensional elements and a clean, minimal aesthetic. It's a great way to create a streamlined and modern look.",
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                {
                  type: "media",
                  key: "image",
                  displayer: "Media",
                  additionalParams: { availableTypes: ["image", "icon"] },
                  value: { type: "image", url: "" },
                },
                {
                  type: "string",
                  key: "name",
                  displayer: "Name",
                  value: "Mary Sheram",
                },
                {
                  type: "string",
                  key: "position",
                  displayer: "Position",
                  value: "Designer",
                },
              ],
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "media",
      key: "prevIcon",
      displayer: "Prev Icon",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "BsArrowLeftCircle" },
    });
    this.addProp({
      type: "media",
      key: "nextIcon",
      displayer: "Next Icon",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "BsArrowRightCircle" },
    });
    this.addProp(INPUTS.SLIDER_SETTINGS("slider-settings", "Slider Settings", {
      dots: true,
      infinite: true,
      speed: 725,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 3.65,
      centerMode: true,
      slidesToScroll: 1,
    }));
    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("activeSlideIndex", 0);
  }

  static getName(): string {
    return "Testimonials 2";
  }

  render() {
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const buttons = this.castToObject<Button[]>("buttons");
    const hasValidButtons = buttons.some((btn: Button) => {
      const buttonText = this.castToString(btn.text);
      const iconExist = btn.icon && (btn.icon.type === "icon" ? btn.icon.name : btn.icon.url);
      return buttonText || iconExist;
    });

    const hasAnyTopContent = subtitleExist || titleExist || descriptionExist || hasValidButtons;

    const cardCount = this.getPropValue("card-items").length;
    const prevIconVal = this.getPropValue("prevIcon") as TypeMediaInputValue;
    const prevIconExist = prevIconVal && (prevIconVal.type === "icon" ? prevIconVal.name : prevIconVal.url);
    const nextIconVal = this.getPropValue("nextIcon") as TypeMediaInputValue;
    const nextIconExist = nextIconVal && (nextIconVal.type === "icon" ? nextIconVal.name : nextIconVal.url);
    const sliderRef = this.getComponentState("slider-ref");
    const rawSettings = this.getPropValue("slider-settings");
    const sliderSettings = Object.fromEntries((rawSettings as any[]).map((p: any) => [p.key, p.value]));
    const showArrows = sliderSettings.arrows !== false;
    const hasNav = showArrows && (prevIconExist || nextIconExist) && cardCount > 1;

    const settings = {
      ...sliderSettings,
      arrows: false,
      infinite: cardCount > 3,
      beforeChange: (_current: number, next: number) => {
        this.setComponentState("activeSlideIndex", next);
      },
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2.5,
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
        <div className={this.decorateCSS("overlay")} />
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(hasAnyTopContent || hasNav) && (
            <div className={`${this.decorateCSS("section-header")} ${!showArrows && this.decorateCSS("no-arrows")}`}>
              <Base.VerticalContent className={this.decorateCSS("top-content")}>
                {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
                {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
                {hasValidButtons && (
                  <div className={this.decorateCSS("button-container")}>
                    {buttons.map((item: Button, index: number) => {
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
              {hasNav && (
                <div className={this.decorateCSS("arrows-wrap")}>
                  <div className={this.decorateCSS("arrows")}>
                    {prevIconExist && (
                      <div className={this.decorateCSS("arrow")}>
                        <div className={this.decorateCSS("prevArrow")} onClick={() => sliderRef?.current?.slickPrev()}>
                          <Base.Media value={prevIconVal} className={this.decorateCSS("arrow-media")} />
                        </div>
                      </div>
                    )}
                    {nextIconExist && (
                      <div className={this.decorateCSS("arrow")}>
                        <div className={this.decorateCSS("nextArrow")} onClick={() => sliderRef?.current?.slickNext()}>
                          <Base.Media value={nextIconVal} className={this.decorateCSS("arrow-media")} />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </Base.MaxContent>

        <ComposerSlider {...settings} ref={sliderRef} className={this.decorateCSS("slider-style")}>
          {this.castToObject<Item[]>("card-items").map((item: Item, index: number) => {
            const iconExist = item.icon && (item.icon.type === "icon" ? item.icon.name : item.icon.url);
            const textExist = this.castToString(item.text);
            const imageExist = item.author && item.author.image && (item.author.image.type === "image" ? item.author.image.url : item.author.image.name);
            const authorExist = item.author && (item.author.name || item.author.position || imageExist);

            return (
              <div className={this.decorateCSS("card")} key={index}>
                {((item.star > 0 && iconExist) || textExist) && (
                  <Base.VerticalContent className={this.decorateCSS("top-container")}>
                    {(item.star > 0 && iconExist) && (
                      <Base.Row className={this.decorateCSS("icon-element")}>
                        {[...Array(Number(item.star))].map((_: unknown, idx: number) => (
                          <Base.Media value={item.icon} className={this.decorateCSS("icon")} key={idx} />
                        ))}
                      </Base.Row>
                    )}
                    {textExist && <Base.P className={this.decorateCSS("item-text")}>{item.text}</Base.P>}
                  </Base.VerticalContent>
                )}
                {authorExist && (
                  <Base.VerticalContent className={this.decorateCSS("bottom-container")}>
                    {imageExist && (
                      <Base.Media value={item.author.image} className={this.decorateCSS("author-image")} />
                    )}
                    {item.author.name && <Base.P className={this.decorateCSS("item-name")}>{item.author.name}</Base.P>}
                    {item.author.position && <Base.P className={this.decorateCSS("item-subtitle")}>{item.author.position}</Base.P>}
                  </Base.VerticalContent>
                )}
              </div>
            );
          })}
        </ComposerSlider>
      </Base.Container>
    );
  }
}

export default Testimonials2Page;
