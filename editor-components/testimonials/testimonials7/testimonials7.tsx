import * as React from "react";
import { Testimonials, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./testimonials7.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type Item = {
  image: TypeMediaInputValue;
  description: React.JSX.Element;
  author: {
    name: React.JSX.Element;
    subtitle: React.JSX.Element;
  };
};

type Button = {
  text: React.JSX.Element;
  url: string;
  icon: TypeMediaInputValue;
  type: string;
};

class Testimonials7Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "",
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
      key: "componentBackground",
      displayer: "Background Image",
      additionalParams: { availableTypes: ["image"] },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617330bd2970002c623799?alt=media&timestamp=1719483639150",
      },
    });
    this.addProp({
      type: "boolean",
      key: "overlayActive",
      displayer: "Overlay",
      value: false,
    });
    this.addProp({
      type: "media",
      key: "prevIcon",
      displayer: "Prev Icon",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "HiArrowLeft" },
    });
    this.addProp({
      type: "media",
      key: "nextIcon",
      displayer: "Next Icon",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "HiArrowRight" },
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
              type: "string",
              key: "description",
              value: "'Our office is something we are pleased with. We consider it the little magnet; it is wanting to come here and afterward difficult to leave it. Our office is additionally a big name.'",
              displayer: "Description",
            },
            {
              type: "media",
              key: "image",
              additionalParams: { availableTypes: ["image"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617301bd2970002c623790?alt=media&timestamp=1719483639150",
              },
              displayer: "Image",
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                {
                  type: "string",
                  key: "name",
                  value: "Tomas Reuss",
                  displayer: "Name",
                },
                {
                  type: "string",
                  key: "subtitle",
                  value: "CLIENT OF CLUB",
                  displayer: "Name Id",
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
              type: "string",
              key: "description",
              value: "'Our office is something we are pleased with. We consider it the little magnet; it is wanting to come here and afterward difficult to leave it. Our office is additionally a big name.'",
              displayer: "Description",
            },
            {
              type: "media",
              key: "image",
              additionalParams: { availableTypes: ["image"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617301bd2970002c623791?alt=media&timestamp=1719483639150",
              },
              displayer: "Image",
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                {
                  type: "string",
                  key: "name",
                  value: "Monica Reuss",
                  displayer: "Name",
                },
                {
                  type: "string",
                  key: "subtitle",
                  value: "CLIENT OF CLUB",
                  displayer: "Name Id",
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
              type: "string",
              key: "description",
              value: "'‘Our office is something we are pleased with. We consider it the little magnet; it is wanting to come here and afterward difficult to leave it. Our office is additionally a big name.’'",
              displayer: "Description",
            },
            {
              type: "media",
              key: "image",
              additionalParams: { availableTypes: ["image"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617301bd2970002c623792?alt=media&timestamp=1719483639150",
              },
              displayer: "Image",
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                {
                  type: "string",
                  key: "name",
                  value: "Linda Anderson",
                  displayer: "Name",
                },
                {
                  type: "string",
                  key: "subtitle",
                  value: "CLIENT OF CLUB",
                  displayer: "Name Id",
                },
              ],
            },
          ],
        },
      ],
    });
    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("active", 0);
    this.setComponentState("activeSlideIndex", 0);
  }

  static getName(): string {
    return "Testimonials 7";
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

    const bgMedia = this.getPropValue("componentBackground") as TypeMediaInputValue;
    const backgroundImageUrl = bgMedia && bgMedia.url;
    const overlayActive = this.getPropValue("overlayActive");

    const prevIconMedia = this.getPropValue("prevIcon") as TypeMediaInputValue;
    const prevIconExist = prevIconMedia && (prevIconMedia.type === "icon" ? prevIconMedia.name : prevIconMedia.url);

    const nextIconMedia = this.getPropValue("nextIcon") as TypeMediaInputValue;
    const nextIconExist = nextIconMedia && (nextIconMedia.type === "icon" ? nextIconMedia.name : nextIconMedia.url);

    const sliderRef = this.getComponentState("slider-ref");

    const settings = {
      dots: false,
      infinite: true,
      speed: 700,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      beforeChange: (current: number, next: number) => {
        this.setComponentState("active", next);
        this.setComponentState("activeSlideIndex", next);
      },
      responsive: [
        {
          breakpoint: 450,
          settings: {
            dots: true,
          },
        },
      ],
    };

    return (
      <Base.Container
        style={backgroundImageUrl ? { backgroundImage: `url(${backgroundImageUrl})` } : {}}
        className={`${this.decorateCSS("container")} ${!backgroundImageUrl ? this.decorateCSS("container-no-image") : ""}`}
        isFull={backgroundImageUrl ? true : false}
      >
        <Base.MaxContent className={`${this.decorateCSS("contentWrapper")} ${!backgroundImageUrl ? this.decorateCSS("contentWrapper-no-image") : ""}`}>
          {backgroundImageUrl && <Base.Media value={bgMedia} className={this.decorateCSS("background-image")} />}
          {overlayActive && backgroundImageUrl && <div className={this.decorateCSS("overlay")} />}
          <div className={`${this.decorateCSS("testimonials7")} ${!backgroundImageUrl ? this.decorateCSS("testimonials7-no-image") : ""}`}>
            {hasAnyTopContent && (
              <Base.VerticalContent className={`${this.decorateCSS("top-content")} ${backgroundImageUrl ? this.decorateCSS("top-content-with-image") : ""}`}>
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
                      const iconExist = item.icon && (item.icon.type === "icon" ? item.icon.name : item.icon.url);
                      if (!buttonText && !iconExist) return null;
                      return (
                        <ComposerLink key={index} path={item.url}>
                          <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                            {buttonText && (
                              <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                            )}
                            {iconExist && (
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
            <div className={`${this.decorateCSS("slider-wrapper")} ${!backgroundImageUrl ? this.decorateCSS("slider-wrapper-no-image") : ""}`}>
              <ComposerSlider ref={sliderRef} {...settings} className={this.decorateCSS("slider-style")}>
                {this.castToObject<Item[]>("card-items").map((item: Item, index: number) => {
                  const cardClassName = (() => {
                    if (!backgroundImageUrl) {
                      if (!prevIconExist && !nextIconExist) return `${this.decorateCSS("card")} ${this.decorateCSS("card-no-image-padding")}`;
                      if (!prevIconExist) return `${this.decorateCSS("card")} ${this.decorateCSS("card-no-image-left")}`;
                      if (!nextIconExist) return `${this.decorateCSS("card")} ${this.decorateCSS("card-no-image-right")}`;
                      return `${this.decorateCSS("card")} ${this.decorateCSS("card-no-image")}`;
                    }
                    return this.decorateCSS("card");
                  })();
                  return (
                    <div key={index} className={cardClassName}>
                      {prevIconExist && (
                        <button
                          onClick={() => sliderRef.current.slickPrev()}
                          className={`${this.decorateCSS("button-left")} ${!backgroundImageUrl ? this.decorateCSS("button-left-no-image") : ""}`}
                        >
                          <Base.Media value={prevIconMedia} className={this.decorateCSS("arrow")} />
                        </button>
                      )}
                      {(this.castToString(item.description) || item.image || (item.author && (this.castToString(item.author.name) || this.castToString(item.author.subtitle)))) && (
                        <Base.VerticalContent className={this.decorateCSS("item-content")}>
                          {this.castToString(item.description) && (
                            <Base.P className={`${this.decorateCSS("item-description")} ${!backgroundImageUrl ? this.decorateCSS("item-description-no-image") : ""}`}>
                              {item.description}
                            </Base.P>
                          )}
                          {(item.image || (item.author && (this.castToString(item.author.name) || this.castToString(item.author.subtitle)))) && (
                            <div className={this.decorateCSS("profile")}>
                              {item.image && (
                                <Base.Media value={item.image} className={this.decorateCSS("image")} />
                              )}
                              {item.author && (this.castToString(item.author.name) || this.castToString(item.author.subtitle)) && (
                                <Base.VerticalContent className={this.decorateCSS("profile-text")}>
                                  {this.castToString(item.author.name) && (
                                    <Base.P className={`${this.decorateCSS("item-name")} ${!backgroundImageUrl ? this.decorateCSS("item-name-no-image") : ""}`}>
                                      {item.author.name}
                                    </Base.P>
                                  )}
                                  {this.castToString(item.author.subtitle) && (
                                    <Base.P className={`${this.decorateCSS("item-name-id")} ${!backgroundImageUrl ? this.decorateCSS("item-name-id-no-image") : ""}`}>
                                      {item.author.subtitle}
                                    </Base.P>
                                  )}
                                </Base.VerticalContent>
                              )}
                            </div>
                          )}
                        </Base.VerticalContent>
                      )}
                      {nextIconExist && (
                        <button
                          onClick={() => sliderRef.current.slickNext()}
                          className={`${this.decorateCSS("button-right")} ${!backgroundImageUrl ? this.decorateCSS("button-right-no-image") : ""}`}
                        >
                          <Base.Media value={nextIconMedia} className={this.decorateCSS("arrow")} />
                        </button>
                      )}
                    </div>
                  );
                })}
              </ComposerSlider>
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Testimonials7Page;
