import * as React from "react";
import { Testimonials, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./testimonials9.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type Item = {
  image: TypeMediaInputValue;
  text: React.JSX.Element;
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

class Testimonials9Page extends Testimonials {
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
      value: "Testimonials",
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
      key: "left_icon",
      displayer: "Left Icon",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "RiDoubleQuotesL" },
    });
    this.addProp({
      type: "media",
      key: "right_icon",
      displayer: "Right Icon",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "RiDoubleQuotesR" },
    });
    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Slider",
      value: [
        {
          type: "object",
          key: "slider1",
          displayer: "Slider 1",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666176cabd2970002c623b38?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                { type: "string", key: "name", displayer: "Name", value: "Thein N." },
                { type: "string", key: "position", displayer: "Position", value: "18th December 2022" },
              ],
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet velit id nunc posuere, et fringilla leo convallis. Nam ullamcorper, arcu id ullamcorper congue, turpis urna interdum ligula, id congue purus nunc ac sem.",
            },
          ],
        },
        {
          type: "object",
          key: "slider2",
          displayer: "Slider 2",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666176cabd2970002c623b33?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                { type: "string", key: "name", displayer: "Name", value: "Bailey H." },
                { type: "string", key: "position", displayer: "Position", value: "21st November 2022" },
              ],
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Nulla facilisi. Fusce et justo eget tortor consectetur facilisis vel id turpis. Nam ullamcorper, arcu id ullamcorper congue, turpis urna interdum ligula, id congue purus nunc ac sem.",
            },
          ],
        },
        {
          type: "object",
          key: "slider3",
          displayer: "Slider 3",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666176cabd2970002c623b34?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                { type: "string", key: "name", displayer: "Name", value: "Ashley S." },
                { type: "string", key: "position", displayer: "Position", value: "2nd July 2022" },
              ],
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Duis blandit est eu magna tristique, ut vestibulum orci feugiat. Integer nec semper neque. Nam ullamcorper, arcu id ullamcorper congue, turpis urna interdum ligula, id congue purus nunc ac sem.",
            },
          ],
        },
        {
          type: "object",
          key: "slider4",
          displayer: "Slider 4",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666176cabd2970002c623b37?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                { type: "string", key: "name", displayer: "Name", value: "Tom H." },
                { type: "string", key: "position", displayer: "Position", value: "15th June 2022" },
              ],
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Quisque sodales justo nec ante vestibulum, ut dictum justo facilisis. Nam ullamcorper, arcu id ullamcorper congue, turpis urna interdum ligula, id congue purus nunc ac sem.",
            },
          ],
        },
        {
          type: "object",
          key: "slider5",
          displayer: "Slider 5",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666176cabd2970002c623b36?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                { type: "string", key: "name", displayer: "Name", value: "Ronald R." },
                { type: "string", key: "position", displayer: "Position", value: "18th December 2022" },
              ],
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Sed id condimentum mi. Aliquam cursus scelerisque elit ut facilisis. Nam ullamcorper, arcu id ullamcorper congue, turpis urna interdum ligula, id congue purus nunc ac sem.",
            },
          ],
        },
        {
          type: "object",
          key: "slider6",
          displayer: "Slider 6",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666176cabd2970002c623b35?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                { type: "string", key: "name", displayer: "Name", value: "Olivia D." },
                { type: "string", key: "position", displayer: "Position", value: "21st November 2022" },
              ],
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Vivamus nec sem quis enim iaculis gravida. Donec volutpat fermentum erat, sit amet cursus risus tincidunt quis. Nam ullamcorper, arcu id ullamcorper congue, turpis urna interdum ligula, id congue purus nunc ac sem.",
            },
          ],
        },
        {
          type: "object",
          key: "slider7",
          displayer: "Slider 7",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617728bd2970002c623bd5?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                { type: "string", key: "name", displayer: "Name", value: "Sarah B." },
                { type: "string", key: "position", displayer: "Position", value: "2nd July 2022" },
              ],
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Aenean euismod, velit a lacinia fringilla, urna libero ultrices lectus, non interdum quam nunc eu elit. Ut non lobortis purus. Nam ullamcorper, id congue purus nunc ac sem.",
            },
          ],
        },
        {
          type: "object",
          key: "slider8",
          displayer: "Slider 8",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666176cabd2970002c623b37?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                { type: "string", key: "name", displayer: "Name", value: "Mary J." },
                { type: "string", key: "position", displayer: "Position", value: "15th June 2022" },
              ],
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Curabitur a sapien ut neque eleifend vehicula id a sem. Phasellus sodales, ex sit amet eleifend consectetur, erat magna dictum elit, eu interdum nisi lacus id nunc.",
            },
          ],
        },
      ],
    });
    this.addProp(INPUTS.SLIDER_SETTINGS("slider-settings", "Slider Settings", {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }));
    this.setComponentState("active-index", 1);
    this.setComponentState("slider-ref", React.createRef());
  }

  static getName(): string {
    return "Testimonials 9";
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

    const leftIconMedia = this.getPropValue("left_icon") as TypeMediaInputValue;
    const leftIconExist = leftIconMedia && (leftIconMedia.type === "icon" ? leftIconMedia.name : leftIconMedia.url);
    const rightIconMedia = this.getPropValue("right_icon") as TypeMediaInputValue;
    const rightIconExist = rightIconMedia && (rightIconMedia.type === "icon" ? rightIconMedia.name : rightIconMedia.url);

    const slider = this.getPropValue("slider");
    const rawSettings = this.getPropValue("slider-settings");
    const sliderSettings = Object.fromEntries((rawSettings as any[]).map((p: any) => [p.key, p.value]));
    const settings = {
      ...sliderSettings,
      arrows: false,
      dots: false,
      vertical: true,
      slidesToShow: Math.min(Math.max(slider.length, 1), 4),
      verticalSwiping: slider.length > 1,
      beforeChange: (newIndex: number) => {
        let adjustedIndex = (newIndex + 1) % this.castToObject<Item[]>("slider").length;
        this.setComponentState("active-index", adjustedIndex);
      },
    };

    const activeIndex = this.getComponentState("active-index");
    const sliderRef = this.getComponentState("slider-ref");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
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
            <Base.ContainerGrid className={this.decorateCSS("down-page")}>
              <Base.GridCell className={this.decorateCSS("carousel")}>
                <div className={this.decorateCSS("carousel-inner")}>
                  <ComposerSlider {...settings} ref={sliderRef} className={this.decorateCSS("slider-style")}>
                    {this.castToObject<Item[]>("slider").map((item: Item, index: number) => (
                      <div key={index} className={`${this.decorateCSS("card-inner")} ${activeIndex === index ? this.decorateCSS("active") : ""}`}>
                        {item.image && <Base.Media value={item.image} className={this.decorateCSS("img")} />}
                        {item.author && (item.author.name || item.author.subtitle) && (
                          <Base.VerticalContent className={this.decorateCSS("bottom-container")}>
                            {item.author.name && (
                              <Base.H5 className={this.decorateCSS("item-name")}>{item.author.name}</Base.H5>
                            )}
                            {item.author.position && (
                              <Base.H5 className={this.decorateCSS("item-subtitle")}>{item.author.position}</Base.H5>
                            )}
                          </Base.VerticalContent>
                        )}
                      </div>
                    ))}
                  </ComposerSlider>
                  {sliderSettings.dots && slider.length > 1 && (
                    <div className={this.decorateCSS("v-dots")}>
                      {this.castToObject<Item[]>("slider").map((_: Item, idx: number) => (
                        <button
                          key={idx}
                          className={`${this.decorateCSS("v-dot")} ${activeIndex === idx ? this.decorateCSS("v-dot-active") : ""}`}
                          onClick={() => sliderRef?.current?.slickGoTo(idx)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </Base.GridCell>
              <Base.GridCell className={this.decorateCSS("right-page")}>
                {leftIconExist && (
                  <Base.Media value={leftIconMedia} className={this.decorateCSS("left-icon")} />
                )}
                {this.castToObject<Item[]>("slider").map((item: Item, index: number) => (
                  <div key={index} className={this.decorateCSS("text")}>
                    {index === activeIndex && this.castToString(item.text) && (
                      <Base.H6 className={this.decorateCSS("item-text")}>{item.text}</Base.H6>
                    )}
                  </div>
                ))}
                {rightIconExist && (
                  <Base.Media value={rightIconMedia} className={this.decorateCSS("right-icon")} />
                )}
              </Base.GridCell>
            </Base.ContainerGrid>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Testimonials9Page;
