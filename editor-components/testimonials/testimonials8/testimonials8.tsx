import * as React from "react";
import { Testimonials, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./testimonials8.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type Item = {
  image: TypeMediaInputValue;
  author: {
    name: React.JSX.Element;
    position: React.JSX.Element;
  };
  text: React.JSX.Element;
  starNumber: number;
  icon: TypeMediaInputValue;
};

type Button = {
  text: React.JSX.Element;
  url: string;
  icon: TypeMediaInputValue;
  type: string;
};

interface ArrowItem {
  nextArrow: TypeMediaInputValue;
  prevArrow: TypeMediaInputValue;
}

class Testimonials8Page extends Testimonials {
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
      value: "Some of our valuable customers feedback",
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
      type: "boolean",
      key: "numberIsActive",
      displayer: "Number",
      value: true,
    });
    this.addProp({
      type: "boolean",
      key: "lineActive",
      displayer: "Line",
      value: true,
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
              type: "media",
              key: "image",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666173eabd2970002c62388a?alt=media&timestamp=1719483639150",
              },
              displayer: "Media",
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                {
                  type: "string",
                  key: "name",
                  value: "Erle Philomena",
                  displayer: "Name",
                },
                {
                  type: "string",
                  key: "position",
                  value: "Product Designer",
                  displayer: "Position",
                },
              ],
            },
            {
              type: "string",
              key: "text",
              value: "I have been using pagedone for several months now, and I must say that it has made my life a lot easier. The platform's intuitive interface and ease of use have allowed me to manage my finances more effectively and make informed investment decisions.",
              displayer: "Text",
            },
            {
              type: "number",
              key: "starNumber",
              displayer: "Icon Number",
              value: 5,
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "FaStar" },
            },
          ],
        },
        {
          type: "object",
          key: "card2",
          displayer: "Card 2",
          value: [
            {
              type: "media",
              key: "image",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666173eabd2970002c62388b?alt=media&timestamp=1719483639150",
              },
              displayer: "Media",
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                {
                  type: "string",
                  key: "name",
                  value: "Shonda Kadence",
                  displayer: "Name",
                },
                {
                  type: "string",
                  key: "position",
                  value: "Developer",
                  displayer: "Position",
                },
              ],
            },
            {
              type: "string",
              key: "text",
              value: "Grunge design is all about creating a rough, raw, and edgy look. It can be a great way to add personality and attitude to a design.",
              displayer: "Text",
            },
            {
              type: "number",
              key: "starNumber",
              displayer: "Icon Number",
              value: 5,
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "FaStar" },
            },
          ],
        },
        {
          type: "object",
          key: "card3",
          displayer: "Card 3",
          value: [
            {
              type: "media",
              key: "image",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661740cbd2970002c623895?alt=media&timestamp=1719483639150",
              },
              displayer: "Media",
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                {
                  type: "string",
                  key: "name",
                  value: "Laurie Darwin",
                  displayer: "Name",
                },
                {
                  type: "string",
                  key: "position",
                  value: "Design Lead",
                  displayer: "Position",
                },
              ],
            },
            {
              type: "string",
              key: "text",
              value: "Responsive design is a must for modern websites and interfaces. It ensures that content is displayed optimally on different screen sizes and devices.",
              displayer: "Text",
            },
            {
              type: "number",
              key: "starNumber",
              displayer: "Icon Number",
              value: 5,
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "FaStar" },
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "object",
      key: "arrows",
      displayer: "Arrows",
      value: [
        {
          type: "media",
          key: "prevArrow",
          displayer: "Prev Icon",
          additionalParams: { availableTypes: ["icon", "image"] },
          value: { type: "icon", name: "GrLinkPrevious" },
        },
        {
          type: "media",
          key: "nextArrow",
          displayer: "Next Icon",
          additionalParams: { availableTypes: ["icon", "image"] },
          value: { type: "icon", name: "GrLinkNext" },
        },
      ],
    });
    this.addProp(INPUTS.SLIDER_SETTINGS("slider-settings", "Slider Settings", {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 700,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
    }));
    this.setComponentState("active_index", 0);
    this.setComponentState("slider-ref", React.createRef());
  }

  static getName(): string {
    return "Testimonials 8";
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

    const rawSettings = this.getPropValue("slider-settings");
    const sliderSettings = Object.fromEntries((rawSettings as any[]).map((p: any) => [p.key, p.value]));
    const settings = {
      ...sliderSettings,
      arrows: false,
      dots: false,
      beforeChange: (current: number, next: number) => {
        this.setComponentState("active_index", next);
      },
    };

    const arrows = this.castToObject<ArrowItem>("arrows");
    const prevArrowExist = arrows.prevArrow && (arrows.prevArrow.type === "icon" ? arrows.prevArrow.name : arrows.prevArrow.url);
    const nextArrowExist = arrows.nextArrow && (arrows.nextArrow.type === "icon" ? arrows.nextArrow.name : arrows.nextArrow.url);
    const sliderRef = this.getComponentState("slider-ref");
    const cards = this.castToObject<Item[]>("card-items");
    const activeIndex = this.getComponentState("active_index") || 0;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("maxContent")}>
          <div className={this.decorateCSS("testimonials8")}>
            {hasAnyTopContent && (
              <Base.VerticalContent className={this.decorateCSS("top-content")}>
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
            <div
              className={`${this.decorateCSS("content")}
              ${sliderSettings.arrows && prevArrowExist && cards.length > 1 && this.decorateCSS("contentPaddingLeft")}
              ${sliderSettings.arrows && nextArrowExist && cards.length > 1 && this.decorateCSS("contentPaddingRight")}`}
            >
              {sliderSettings.arrows && prevArrowExist && cards.length > 1 && (
                <button
                  className={this.decorateCSS("prevArrow")}
                  onClick={() => {
                    sliderRef.current.slickPrev();
                  }}
                >
                  <Base.Media value={arrows.prevArrow} className={this.decorateCSS("arrow")} />
                </button>
              )}
              <ComposerSlider {...settings} ref={sliderRef}>
                {cards.map((item: Item, index: number) => {
                  const iconExist = item.icon && (item.icon.type === "icon" ? item.icon.name : item.icon.url);
                  return (
                    <Base.VerticalContent key={index} className={this.decorateCSS("card")}>
                      <Base.Row className={this.decorateCSS("topContainer")}>
                        {item.image && <Base.Media value={item.image} className={this.decorateCSS("image")} />}
                        {item.author && (item.author.name || item.author.position) && (
                          <div className={this.decorateCSS("personal")}>
                            {item.author.name && (
                              <Base.P className={this.decorateCSS("item-name")}>{item.author.name}</Base.P>
                            )}
                            {item.author.position && (
                              <Base.P className={this.decorateCSS("item-subtitle")}>{item.author.position}</Base.P>
                            )}
                          </div>
                        )}
                      </Base.Row>
                      {this.castToString(item.text) && (
                        <Base.P className={this.decorateCSS("item-text")}>{item.text}</Base.P>
                      )}
                      <Base.Row className={this.decorateCSS("bottomContainer")}>
                        {iconExist && item.starNumber > 0 && (
                          <div className={this.decorateCSS("star")}>
                            {[...Array(Number(item.starNumber))].map((_: unknown, starIndex: number) => (
                              <Base.Media key={starIndex} value={item.icon} className={this.decorateCSS("icon")} />
                            ))}
                          </div>
                        )}
                        {this.getPropValue("lineActive") && <div className={this.decorateCSS("line")}></div>}
                        {item.starNumber > 0 && this.getPropValue("numberIsActive") && (
                          <div className={this.decorateCSS("starNumber")}>{Number(item.starNumber).toFixed(1)}</div>
                        )}
                      </Base.Row>
                    </Base.VerticalContent>
                  );
                })}
              </ComposerSlider>
              {sliderSettings.arrows && nextArrowExist && cards.length > 1 && (
                <button
                  className={this.decorateCSS("nextArrow")}
                  onClick={() => {
                    sliderRef.current.slickNext();
                  }}
                >
                  <Base.Media value={arrows.nextArrow} className={this.decorateCSS("arrow")} />
                </button>
              )}
            </div>
            {sliderSettings.dots && cards.length > 1 && (
              <div className={this.decorateCSS("dot-panel")}>
                {cards.map((_: Item, idx: number) => (
                  <button
                    key={idx}
                    className={`${this.decorateCSS("dot")} ${activeIndex === idx ? this.decorateCSS("dot-active") : ""}`}
                    onClick={() => sliderRef.current.slickGoTo(idx)}
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

export default Testimonials8Page;
