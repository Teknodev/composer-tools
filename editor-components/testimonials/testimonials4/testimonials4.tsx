import * as React from "react";
import { Testimonials, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./testimonials4.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type Item = {
  icon: TypeMediaInputValue;
  text: React.JSX.Element;
  author: {
    name: React.JSX.Element;
    subtitle: React.JSX.Element;
  };
  image: TypeMediaInputValue;
};

type Button = {
  text: React.JSX.Element;
  url: string;
  icon: TypeMediaInputValue;
  type: string;
};

class Testimonials4Page extends Testimonials {
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
      value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
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
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "ImQuotesRight" },
            },
            {
              type: "string",
              key: "text",
              displayer: "Review Text",
              value:
                "I really like the clean and simple aesthetic of flat design. It's great for creating a modern and minimal look, and it also works well for responsive design since it's easy to adapt to different screen sizes. Plus, the lack of textures and gradients makes it easier to focus on the content itself.",
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                {
                  type: "string",
                  key: "name",
                  displayer: "Name",
                  value: "Jerrie Corinna",
                },
                {
                  type: "string",
                  key: "subtitle",
                  displayer: "Position",
                  value: "UX Developer",
                },
              ],
            },
            {
              type: "media",
              key: "image",
              displayer: "Author Image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661701bbd2970002c623724?alt=media&timestamp=1719483639150",
              },
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
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "ImQuotesRight" },
            },
            {
              type: "string",
              key: "text",
              displayer: "Review Text",
              value: "This product has changed my life! It's incredibly useful and packed with creative features. I would highly recommend it to everyone!",
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                {
                  type: "string",
                  key: "name",
                  displayer: "Name",
                  value: "Kevin Corinna",
                },
                {
                  type: "string",
                  key: "subtitle",
                  displayer: "Position",
                  value: "Solutions Architect",
                },
              ],
            },
            {
              type: "media",
              key: "image",
              displayer: "Author Image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661701bbd2970002c623723?alt=media&timestamp=1719483639150",
              },
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
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "ImQuotesRight" },
            },
            {
              type: "string",
              key: "text",
              displayer: "Review Text",
              value: "I have been consistently impressed with the results achieved by this team. Their strategic approach and innovative ideas have greatly contributed to our marketing success.",
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                {
                  type: "string",
                  key: "name",
                  displayer: "Name",
                  value: "John Corinna",
                },
                {
                  type: "string",
                  key: "subtitle",
                  displayer: "Position",
                  value: "UX Developer",
                },
              ],
            },
            {
              type: "media",
              key: "image",
              displayer: "Author Image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661701bbd2970002c623726?alt=media&timestamp=1719483639150",
              },
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "media",
      key: "componentBackground",
      displayer: "Background Media",
      additionalParams: { availableTypes: ["image", "video"] },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661701bbd2970002c623725?alt=media&timestamp=1719483639150",
      },
    });
    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });
    this.addProp({
      type: "object",
      key: "arrows",
      displayer: "Arrows",
      value: [
        {
          type: "icon",
          key: "prevArrow",
          displayer: "Prev Icon",
          value: "GrLinkPrevious",
        },
        {
          type: "icon",
          key: "nextArrow",
          displayer: "Next Icon",
          value: "GrLinkNext",
        },
      ],
    });
    this.setComponentState("active_index", 0);
    this.setComponentState("slider-ref", React.createRef());
  }

  static getName(): string {
    return "Testimonials 4";
  }

  onImageClick(itemIndex: number) {
    this.setComponentState("active_index", itemIndex);
    this.getComponentState("slider-ref").current.slickGoTo(itemIndex);
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

    const componentBackground = this.getPropValue("componentBackground") as TypeMediaInputValue;
    const componentBackgroundExist = componentBackground && (componentBackground.type === "icon" ? componentBackground.name : componentBackground.url);

    const settings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 700,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      beforeChange: (oldIndex: number, nextIndex: number) => {
        this.setComponentState("active_index", nextIndex);
      },
    };
    const cardItems = this.castToObject<Item[]>("card-items");
    const sliderRef = this.getComponentState("slider-ref");
    const arrows = this.castToObject<any>("arrows");

    return (
      <Base.Container
        className={`${this.decorateCSS("container")} ${!componentBackgroundExist && this.decorateCSS("container-no-image")} ${this.getPropValue("overlay") ? this.decorateCSS("overlay") : ""}`}
      >
        {componentBackgroundExist && (
          <Base.Media value={componentBackground} className={this.decorateCSS("component-background")} />
        )}
        <Base.MaxContent className={`${this.decorateCSS("max-content")} ${!componentBackgroundExist && this.decorateCSS("max-content-no-image")}`}>
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

          <div className={this.decorateCSS("slider-wrapper")}>
            {arrows.prevArrow && cardItems.length > 1 && (
              <button
                className={this.decorateCSS("prevArrow")}
                onClick={() => {
                  sliderRef.current.slickPrev();
                }}
              >
                <Base.Icon name={arrows.prevArrow} propsIcon={{ className: `${this.decorateCSS("arrow")} ${!componentBackgroundExist && this.decorateCSS("arrow-dark")} ` }}></Base.Icon>
              </button>
            )}

            <div className={`${this.decorateCSS("testimonials4")} ${!(arrows.nextArrow || arrows.prevArrow) && this.decorateCSS("testimonials4-no-icon")}`}>
              <ComposerSlider {...settings} ref={this.getComponentState("slider-ref")}>
                {cardItems.map((item: Item, index: number) => {
                  const iconExist = item.icon && (item.icon.type === "icon" ? item.icon.name : item.icon.url);
                  const textExist = this.castToString(item.text);
                  const authorExist = item.author && (this.castToString(item.author.name) || this.castToString(item.author.subtitle));
                  const hasContent = iconExist || textExist || authorExist;

                  if (!hasContent) return null;

                  return (
                    <div key={index} className={this.decorateCSS("items")}>
                      {iconExist && (
                        <Base.Media value={item.icon} className={`${this.decorateCSS("icon")} ${!componentBackgroundExist && this.decorateCSS("icon-dark")}`} />
                      )}
                      {textExist && (
                        <Base.P className={`${this.decorateCSS("item-text")} ${!componentBackgroundExist && this.decorateCSS("item-text-dark")} `}>
                          {item.text}
                        </Base.P>
                      )}
                      {authorExist && (
                        <div className={this.decorateCSS("person-text")}>
                          {item.author.name && (
                            <div className={`${this.decorateCSS("item-name")} ${!componentBackgroundExist && this.decorateCSS("item-name-dark")} `}>
                              {item.author.name}
                            </div>
                          )}
                          {item.author.subtitle && (
                            <div className={`${this.decorateCSS("item-subtitle")} ${!componentBackgroundExist && this.decorateCSS("item-subtitle-dark")}`}>
                              {item.author.subtitle}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </ComposerSlider>
              {cardItems.length > 0 && (
                <div className={this.decorateCSS("images")}>
                  {cardItems.map((item: Item, itemIndex: number) => {
                    const isActive = this.getComponentState("active_index") === itemIndex;
                    return item.image ? (
                      <div key={itemIndex} onClick={() => this.onImageClick(itemIndex)}>
                        <Base.Media value={item.image} className={`${this.decorateCSS("image")} ${isActive ? this.decorateCSS("active") : ""}`} />
                      </div>
                    ) : null;
                  })}
                </div>
              )}
            </div>

            {arrows.nextArrow && cardItems.length > 1 && (
              <button
                className={this.decorateCSS("nextArrow")}
                onClick={() => {
                  sliderRef.current.slickNext();
                }}
              >
                <Base.Icon name={arrows.nextArrow} propsIcon={{ className: `${this.decorateCSS("arrow")} ${!componentBackgroundExist && this.decorateCSS("arrow-dark")} ` }}></Base.Icon>
              </button>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Testimonials4Page;

