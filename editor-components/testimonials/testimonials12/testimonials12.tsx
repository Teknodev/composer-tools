import * as React from "react";
import { Testimonials, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./testimonials12.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type Item = {
  text: React.JSX.Element;
  image: TypeMediaInputValue;
  author: {
    name: React.JSX.Element;
    position: React.JSX.Element;
  };
};

type Button = {
  text: React.JSX.Element;
  url: string;
  icon: TypeMediaInputValue;
  type: string;
};

class Testimonials12Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "TESTIMONIAL",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "What people are saying!",
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
      type: "media",
      key: "icon",
      displayer: "Icon",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "ImQuotesLeft" },
    });
    this.addProp({
      type: "media",
      key: "prevIcon",
      displayer: "Prev Icon",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "FaArrowLeft" },
    });
    this.addProp({
      type: "media",
      key: "nextIcon",
      displayer: "Next Icon",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "FaArrowRight" },
    });
    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Cards",
      value: [
        {
          type: "object",
          key: "card1",
          displayer: "Card 1",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "I love your system. Agency is both attractive and highly adaptable. Man, this thing is getting better and better as I learn more about it. I am so pleased with this product.",
            },
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666178b7bd2970002c623eba?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                { type: "string", key: "name", displayer: "Name", value: "Billu Gol" },
                { type: "string", key: "position", displayer: "Position", value: "CEO, Agrok Inc" },
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
              type: "string",
              key: "text",
              displayer: "Text",
              value: "I love your system. Agency is both attractive and highly adaptable. Man, this thing is getting better and better as I learn more about it. I am so pleased with this product.",
            },
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666178b7bd2970002c623ebb?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                { type: "string", key: "name", displayer: "Name", value: "Ani Jhon" },
                { type: "string", key: "position", displayer: "Position", value: "CEO, Agrok Inc" },
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
              type: "string",
              key: "text",
              displayer: "Text",
              value: "I love your system. Agency is both attractive and highly adaptable. Man, this thing is getting better and better as I learn more about it. I am so pleased with this product.",
            },
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666178b7bd2970002c623eba?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                { type: "string", key: "name", displayer: "Name", value: "Billu Gol" },
                { type: "string", key: "position", displayer: "Position", value: "CEO, Agrok Inc" },
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
              type: "string",
              key: "text",
              displayer: "Text",
              value: "I love your system. Agency is both attractive and highly adaptable. Man, this thing is getting better and better as I learn more about it. I am so pleased with this product.",
            },
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666178b7bd2970002c623ebb?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                { type: "string", key: "name", displayer: "Name", value: "Ani Jhon" },
                { type: "string", key: "position", displayer: "Position", value: "CEO, Agrok Inc" },
              ],
            },
          ],
        },
      ],
    });
    this.addProp(INPUTS.SLIDER_SETTINGS("slider-settings", "Slider Settings", {
      dots: false,
      arrows: true,
      infinite: false,
      speed: 700,
      autoplay: true,
      autoplaySpeed: 4000,
      slidesToShow: 2,
      slidesToScroll: 1,
    }));
    this.setComponentState("activeSlideIndex", 0);
    this.setComponentState("slider-ref", React.createRef());
  }

  static getName(): string {
    return "Testimonials 12";
  }

  handleSlideChange(direction: "next" | "prev") {
    const currentIndex = this.getComponentState("activeSlideIndex");
    const lastIndex = this.getPropValue("cards").length - 1;

    if (direction === "next") {
      if (currentIndex === lastIndex) {
        this.setComponentState("activeSlideIndex", 0);
        this.getComponentState("slider-ref").current.slickGoTo(0);
      } else {
        this.setComponentState("activeSlideIndex", currentIndex + 1);
        this.getComponentState("slider-ref").current.slickNext();
      }
    } else if (direction === "prev") {
      if (currentIndex === 0) {
        this.setComponentState("activeSlideIndex", lastIndex);
        this.getComponentState("slider-ref").current.slickGoTo(lastIndex);
      } else {
        this.setComponentState("activeSlideIndex", currentIndex - 1);
        this.getComponentState("slider-ref").current.slickPrev();
      }
    }
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

    const cards = this.castToObject<Item[]>("cards");

    const icon = this.getPropValue("icon") as TypeMediaInputValue;
    const iconExist = icon && (icon.type === "icon" ? icon.name : icon.url);

    const prevIcon = this.getPropValue("prevIcon") as TypeMediaInputValue;
    const prevIconExist = prevIcon && (prevIcon.type === "icon" ? prevIcon.name : prevIcon.url);

    const nextIcon = this.getPropValue("nextIcon") as TypeMediaInputValue;
    const nextIconExist = nextIcon && (nextIcon.type === "icon" ? nextIcon.name : nextIcon.url);

    const rawSettings = this.getPropValue("slider-settings");
    const sliderSettings = Object.fromEntries((rawSettings as any[]).map((p: any) => [p.key, p.value]));
    const settings = {
      ...sliderSettings,
      arrows: false,
      dots: false,
      responsive: [
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
      beforeChange: (_oldIndex: number, nextIndex: number) => {
        this.setComponentState("activeSlideIndex", nextIndex);
      },
    };

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            {(hasAnyTopContent || (sliderSettings.arrows && (prevIconExist || nextIconExist) && cards.length > 1)) && (
              <div className={this.decorateCSS("top-content")}>
                {hasAnyTopContent && (
                  <Base.VerticalContent className={this.decorateCSS("top-content-text")}>
                    {subtitleExist && (
                      <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                        {this.getPropValue("subtitle")}
                      </Base.SectionSubTitle>
                    )}
                    {titleExist && (
                      <Base.SectionTitle className={this.decorateCSS("title")}>
                        {this.getPropValue("title")}
                      </Base.SectionTitle>
                    )}
                    {descriptionExist && (
                      <Base.SectionDescription className={this.decorateCSS("description")}>
                        {this.getPropValue("description")}
                      </Base.SectionDescription>
                    )}
                    {hasValidButtons && (
                      <div className={this.decorateCSS("button-container")}>
                        {buttons.map((item: Button, index: number) => {
                          const buttonText = this.castToString(item.text);
                          const btnIconExist = item.icon && (item.icon.type === "icon" ? item.icon.name : item.icon.url);
                          if (!buttonText && !btnIconExist) return null;
                          return (
                            <ComposerLink key={index} path={item.url}>
                              <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                                {buttonText && (
                                  <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                                )}
                                {btnIconExist && (
                                  <Base.Media className={this.decorateCSS("button-icon")} value={item.icon!} />
                                )}
                              </Base.Button>
                            </ComposerLink>
                          );
                        })}
                      </div>
                    )}
                  </Base.VerticalContent>
                )}
                <div className={this.decorateCSS("arrows")}>
                  {sliderSettings.arrows && prevIconExist && cards.length > 1 && (
                    <button onClick={() => this.handleSlideChange("prev")} className={this.decorateCSS("arrow-button")}>
                      <Base.Media value={prevIcon} className={this.decorateCSS("prev-arrow")} />
                    </button>
                  )}
                  {sliderSettings.arrows && nextIconExist && cards.length > 1 && (
                    <button onClick={() => this.handleSlideChange("next")} className={this.decorateCSS("arrow-button")}>
                      <Base.Media value={nextIcon} className={this.decorateCSS("next-arrow")} />
                    </button>
                  )}
                </div>
              </div>
            )}
            <ComposerSlider {...settings} className={this.decorateCSS("slider-style")} ref={this.getComponentState("slider-ref")}>
              {cards.map((card: Item, index: number) => {
                const textExist = this.castToString(card.text);
                const imageExist = card.image && (card.image.type === "icon" ? card.image.name : card.image.url);
                const nameExist = card.author && this.castToString(card.author.name);
                const subtitleCardExist = card.author && this.castToString(card.author.position);
                const shouldRenderCard = textExist || imageExist || nameExist || subtitleCardExist;

                if (!shouldRenderCard) return null;

                return (
                  <div key={index} className={this.decorateCSS("card")}>
                    {iconExist && (
                      <Base.Media value={icon} className={this.decorateCSS("span-image")} />
                    )}
                    {textExist && (
                      <Base.P className={this.decorateCSS("card-description")}>{card.text}</Base.P>
                    )}
                    {(imageExist || nameExist || subtitleCardExist) && (
                      <div className={this.decorateCSS("below-content")}>
                        {imageExist && (
                          <Base.Media value={card.image} className={this.decorateCSS("card-image")} />
                        )}
                        {card.author && (nameExist || subtitleCardExist) && (
                          <Base.VerticalContent className={this.decorateCSS("below-right-content")}>
                            {nameExist && (
                              <Base.H4 className={this.decorateCSS("item-name")}>{card.author.name}</Base.H4>
                            )}
                            {subtitleCardExist && (
                              <Base.H5 className={this.decorateCSS("item-subtitle")}>{card.author.position}</Base.H5>
                            )}
                          </Base.VerticalContent>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </ComposerSlider>
            {sliderSettings.dots && cards.length > 1 && (
              <div className={this.decorateCSS("dots-panel")}>
                {cards.map((_: Item, dotIndex: number) => (
                  <button
                    key={dotIndex}
                    className={`${this.decorateCSS("dot")} ${(this.getComponentState("activeSlideIndex") || 0) === dotIndex ? this.decorateCSS("dot-active") : ""}`}
                    onClick={() => this.getComponentState("slider-ref").current.slickGoTo(dotIndex)}
                  />
                ))}
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Testimonials12Page;
