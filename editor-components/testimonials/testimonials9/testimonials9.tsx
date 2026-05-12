import * as React from "react";
import { Testimonials, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./testimonials9.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type Card = {
  profileImage: TypeMediaInputValue;
  title: React.JSX.Element;
  subtitle: React.JSX.Element;
  description: React.JSX.Element;
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
      value: "Lorem",
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
      value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
          key: "slider object",
          displayer: "Slider Object",
          value: [
            {
              type: "media",
              key: "profileImage",
              displayer: "Author Image",
              additionalParams: { availableTypes: ["image"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666176cabd2970002c623b38?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "string",
              key: "title",
              value: "Thein N.",
              displayer: "Author Name",
            },
            {
              type: "string",
              key: "subtitle",
              value: "18th December 2022",
              displayer: "Subtitle",
            },
            {
              type: "string",
              key: "description",
              value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet velit id nunc posuere, et fringilla leo convallis. Nam ullamcorper, arcu id ullamcorper congue, turpis urna interdum ligula, id congue purus nunc ac sem.",
              displayer: "Review Text",
            },
          ],
        },
        {
          type: "object",
          key: "slider object",
          displayer: "Slider Object",
          value: [
            {
              type: "media",
              key: "profileImage",
              displayer: "Author Image",
              additionalParams: { availableTypes: ["image"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666176cabd2970002c623b33?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "string",
              key: "title",
              value: "Bailey H.",
              displayer: "Author Name",
            },
            {
              type: "string",
              key: "subtitle",
              value: "21st November 2022",
              displayer: "Subtitle",
            },
            {
              type: "string",
              key: "description",
              value: "Nulla facilisi. Fusce et justo eget tortor consectetur facilisis vel id turpis. Nam ullamcorper, arcu id ullamcorper congue, turpis urna interdum ligula, id congue purus nunc ac sem.",
              displayer: "Review Text",
            },
          ],
        },
        {
          type: "object",
          key: "slider object",
          displayer: "Slider Object",
          value: [
            {
              type: "media",
              key: "profileImage",
              displayer: "Author Image",
              additionalParams: { availableTypes: ["image"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666176cabd2970002c623b34?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "string",
              key: "title",
              value: "Ashley S.",
              displayer: "Author Name",
            },
            {
              type: "string",
              key: "subtitle",
              value: "2nd July 2022",
              displayer: "Subtitle",
            },
            {
              type: "string",
              key: "description",
              value: "Duis blandit est eu magna tristique, ut vestibulum orci feugiat. Integer nec semper neque. Nam ullamcorper, arcu id ullamcorper congue, turpis urna interdum ligula, id congue purus nunc ac sem.",
              displayer: "Review Text",
            },
          ],
        },
        {
          type: "object",
          key: "slider object",
          displayer: "Slider Object",
          value: [
            {
              type: "media",
              key: "profileImage",
              displayer: "Author Image",
              additionalParams: { availableTypes: ["image"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666176cabd2970002c623b37?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "string",
              key: "title",
              value: "Tom H.",
              displayer: "Author Name",
            },
            {
              type: "string",
              key: "subtitle",
              value: "15th June 2022",
              displayer: "Subtitle",
            },
            {
              type: "string",
              key: "description",
              value: "Quisque sodales justo nec ante vestibulum, ut dictum justo facilisis. Nam ullamcorper, arcu id ullamcorper congue, turpis urna interdum ligula, id congue purus nunc ac sem.",
              displayer: "Review Text",
            },
          ],
        },
        {
          type: "object",
          key: "slider object",
          displayer: "Slider Object",
          value: [
            {
              type: "media",
              key: "profileImage",
              displayer: "Author Image",
              additionalParams: { availableTypes: ["image"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666176cabd2970002c623b36?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "string",
              key: "title",
              value: "Ronald R.",
              displayer: "Author Name",
            },
            {
              type: "string",
              key: "subtitle",
              value: "18th December 2022",
              displayer: "Subtitle",
            },
            {
              type: "string",
              key: "description",
              value: "Sed id condimentum mi. Aliquam cursus scelerisque elit ut facilisis. Nam ullamcorper, arcu id ullamcorper congue, turpis urna interdum ligula, id congue purus nunc ac sem.",
              displayer: "Review Text",
            },
          ],
        },
        {
          type: "object",
          key: "slider object",
          displayer: "Slider Object",
          value: [
            {
              type: "media",
              key: "profileImage",
              displayer: "Author Image",
              additionalParams: { availableTypes: ["image"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666176cabd2970002c623b35?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "string",
              key: "title",
              value: "Olivia D.",
              displayer: "Author Name",
            },
            {
              type: "string",
              key: "subtitle",
              value: "21st November 2022",
              displayer: "Subtitle",
            },
            {
              type: "string",
              key: "description",
              value: "Vivamus nec sem quis enim iaculis gravida. Donec volutpat fermentum erat, sit amet cursus risus tincidunt quis. Nam ullamcorper, arcu id ullamcorper congue, turpis urna interdum ligula, id congue purus nunc ac sem.",
              displayer: "Review Text",
            },
          ],
        },
        {
          type: "object",
          key: "slider object",
          displayer: "Slider Object",
          value: [
            {
              type: "media",
              key: "profileImage",
              displayer: "Author Image",
              additionalParams: { availableTypes: ["image"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617728bd2970002c623bd5?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "string",
              key: "title",
              value: "Sarah B.",
              displayer: "Author Name",
            },
            {
              type: "string",
              key: "subtitle",
              value: "2nd July 2022",
              displayer: "Subtitle",
            },
            {
              type: "string",
              key: "description",
              value: "Aenean euismod, velit a lacinia fringilla, urna libero ultrices lectus, non interdum quam nunc eu elit. Ut non lobortis purus. Nam ullamcorper, id congue purus nunc ac sem.",
              displayer: "Review Text",
            },
          ],
        },
        {
          type: "object",
          key: "slider object",
          displayer: "Slider Object",
          value: [
            {
              type: "media",
              key: "profileImage",
              displayer: "Author Image",
              additionalParams: { availableTypes: ["image"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666176cabd2970002c623b37?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "string",
              key: "title",
              value: "Mary J.",
              displayer: "Author Name",
            },
            {
              type: "string",
              key: "subtitle",
              value: "15th June 2022",
              displayer: "Subtitle",
            },
            {
              type: "string",
              key: "description",
              value: "Curabitur a sapien ut neque eleifend vehicula id a sem. Phasellus sodales, ex sit amet eleifend consectetur, erat magna dictum elit, eu interdum nisi lacus id nunc.",
              displayer: "Review Text",
            },
          ],
        },
      ],
    });
    this.setComponentState("active-index", 1);
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
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2500,
      slidesToShow: Math.min(Math.max(slider.length, 1), 4),
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: slider.length > 1,
      arrows: false,
      beforeChange: (newIndex: number) => {
        let adjustedIndex = (newIndex + 1) % this.castToObject<Card[]>("slider").length;
        this.setComponentState("active-index", adjustedIndex);
      },
    };

    const activeIndex = this.getComponentState("active-index");

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
                <ComposerSlider {...settings}>
                  {this.castToObject<Card[]>("slider").map((item: Card, index: number) => (
                    <div key={index} className={`${this.decorateCSS("card-inner")} ${activeIndex === index ? this.decorateCSS("active") : ""}`}>
                      {item.profileImage && <Base.Media value={item.profileImage} className={this.decorateCSS("img")} />}
                      {(this.castToString(item.title) || this.castToString(item.subtitle)) && (
                        <Base.VerticalContent className={this.decorateCSS("text")}>
                          {this.castToString(item.title) && <Base.H4 className={this.decorateCSS("card-title")}>{item.title}</Base.H4>}
                          {this.castToString(item.subtitle) && <Base.H5 className={this.decorateCSS("card-subtitle")}>{item.subtitle}</Base.H5>}
                        </Base.VerticalContent>
                      )}
                    </div>
                  ))}
                </ComposerSlider>
              </Base.GridCell>
              <Base.GridCell className={this.decorateCSS("right-page")}>
                {leftIconExist && (
                  <Base.Media value={leftIconMedia} className={this.decorateCSS("left-icon")} />
                )}
                {this.castToObject<Card[]>("slider").map((item: Card, index: number) => (
                  <div key={index} className={this.decorateCSS("text")}>
                    {index === activeIndex && this.castToString(item.description) && (
                      <Base.H3 className={this.decorateCSS("description")}>{item.description}</Base.H3>
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
