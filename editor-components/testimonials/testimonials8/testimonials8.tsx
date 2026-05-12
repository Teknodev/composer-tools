import * as React from "react";
import { Testimonials, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./testimonials8.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type Item = {
  profileImage: TypeMediaInputValue;
  name: React.JSX.Element;
  nameId: React.JSX.Element;
  description: React.JSX.Element;
  starNumber: number;
  starIcon: TypeMediaInputValue;
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
      value: "Lorem",
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
      type: "boolean",
      key: "numberIsActive",
      displayer: "Icon Number Active",
      value: true,
    });
    this.addProp({
      type: "boolean",
      key: "lineActive",
      displayer: "Line Active",
      value: true,
    });
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
              type: "media",
              key: "profileImage",
              additionalParams: { availableTypes: ["image"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666173eabd2970002c62388a?alt=media&timestamp=1719483639150",
              },
              displayer: "Author Image",
            },
            {
              type: "string",
              key: "name",
              value: "Erle Philomena",
              displayer: "Author Name",
            },
            {
              type: "string",
              key: "nameId",
              value: "Product Designer",
              displayer: "Author Position",
            },
            {
              type: "string",
              key: "description",
              value: "I have been using pagedone for several months now, and I must say that it has made my life a lot easier. The platform's intuitive interface and ease of use have allowed me to manage my finances more effectively and make informed investment decisions.",
              displayer: "Review Text",
            },
            {
              type: "number",
              key: "starNumber",
              displayer: "Icon Number",
              value: 5,
            },
            {
              type: "media",
              key: "starIcon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "FaStar" },
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "profileImage",
              additionalParams: { availableTypes: ["image"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666173eabd2970002c62388b?alt=media&timestamp=1719483639150",
              },
              displayer: "Author Image",
            },
            {
              type: "string",
              key: "name",
              value: "Shonda Kadence",
              displayer: "Author Name",
            },
            {
              type: "string",
              key: "nameId",
              value: "Developer",
              displayer: "Author Position",
            },
            {
              type: "string",
              key: "description",
              value: "Grunge design is all about creating a rough, raw, and edgy look. It can be a great way to add personality and attitude to a design.",
              displayer: "Review Text",
            },
            {
              type: "number",
              key: "starNumber",
              displayer: "Icon Number",
              value: 5,
            },
            {
              type: "media",
              key: "starIcon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "FaStar" },
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "profileImage",
              additionalParams: { availableTypes: ["image"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661740cbd2970002c623895?alt=media&timestamp=1719483639150",
              },
              displayer: "Author Image",
            },
            {
              type: "string",
              key: "name",
              value: "Laurie Darwin",
              displayer: "Author Name",
            },
            {
              type: "string",
              key: "nameId",
              value: "Design Lead",
              displayer: "Author Position",
            },
            {
              type: "string",
              key: "description",
              value: "Responsive design is a must for modern websites and interfaces. It ensures that content is displayed optimally on different screen sizes and devices.",
              displayer: "Review Text",
            },
            {
              type: "number",
              key: "starNumber",
              displayer: "Icon Number",
              value: 5,
            },
            {
              type: "media",
              key: "starIcon",
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

    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 700,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (current: number, next: number) => {
        this.setComponentState("active_index", next);
      },
    };

    const arrows = this.castToObject<ArrowItem>("arrows");
    const prevArrowExist = arrows.prevArrow && (arrows.prevArrow.type === "icon" ? arrows.prevArrow.name : arrows.prevArrow.url);
    const nextArrowExist = arrows.nextArrow && (arrows.nextArrow.type === "icon" ? arrows.nextArrow.name : arrows.nextArrow.url);
    const sliderRef = this.getComponentState("slider-ref");
    const cards = this.castToObject<Item[]>("card-items");

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
              ${prevArrowExist && cards.length > 1 && this.decorateCSS("contentPaddingLeft")}
              ${nextArrowExist && cards.length > 1 && this.decorateCSS("contentPaddingRight")}`}
            >
              {prevArrowExist && cards.length > 1 && (
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
                  const starIconExist = item.starIcon && (item.starIcon.type === "icon" ? item.starIcon.name : item.starIcon.url);
                  return (
                    <div key={index} className={this.decorateCSS("card")}>
                      <Base.Row className={this.decorateCSS("topContainer")}>
                        {item.profileImage && <Base.Media value={item.profileImage} className={this.decorateCSS("image")} />}
                        <div className={this.decorateCSS("personal")}>
                          {this.castToString(item.name) && <div className={this.decorateCSS("name")}>{item.name}</div>}
                          {this.castToString(item.nameId) && <div className={this.decorateCSS("personTitle")}>{item.nameId}</div>}
                        </div>
                      </Base.Row>
                      {this.castToString(item.description) && (
                        <Base.P className={this.decorateCSS("description")}>{item.description}</Base.P>
                      )}
                      <Base.Row className={this.decorateCSS("bottomContainer")}>
                        {starIconExist && item.starNumber > 0 && (
                          <div className={this.decorateCSS("star")}>
                            {[...Array(Number(item.starNumber))].map((_: unknown, starIndex: number) => (
                              <Base.Media key={starIndex} value={item.starIcon} className={this.decorateCSS("icon")} />
                            ))}
                          </div>
                        )}
                        {this.getPropValue("lineActive") && <div className={this.decorateCSS("line")}></div>}
                        {item.starNumber > 0 && this.getPropValue("numberIsActive") && (
                          <div className={this.decorateCSS("starNumber")}>{item.starNumber}</div>
                        )}
                      </Base.Row>
                    </div>
                  );
                })}
              </ComposerSlider>
              {nextArrowExist && cards.length > 1 && (
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
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Testimonials8Page;
