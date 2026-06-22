import * as React from "react";
import { Testimonials, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./testimonials1.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type Item = {
  description: React.JSX.Element;
  name: React.JSX.Element;
  icon: TypeMediaInputValue;
  profileImage: TypeMediaInputValue;
  iconBackground: boolean;
};

type Button = {
  text: React.JSX.Element;
  url: string;
  icon: TypeMediaInputValue;
  type: string;
};

type MediaWithOverlay = {
  media: TypeMediaInputValue;
  overlay: boolean;
};

class Testimonials1Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "object",
      key: "backgroundMedia",
      displayer: "Background Media",
      value: [
        {
          type: "media",
          key: "media",
          displayer: "Media",
          additionalParams: { availableTypes: ["image", "video"] },
          value: { type: "image", url: "" },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: false,
        },
      ],
    });

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
      type: "object",
      key: "leftMedia",
      displayer: "Left Media",
      value: [
        {
          type: "media",
          key: "media",
          displayer: "Media",
          additionalParams: { availableTypes: ["image", "video"] },
          value: {
            type: "image",
            url: "https://hq-blinkpage-dev-1b2e6.s3.eu-central-1.amazonaws.com/user_content/6a33c793ca8c4044f3e81980/6a33c7a802aa63fd0a48a293/library/demo-restaurant-home-07.jpg",
          },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: false,
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "rightMedia",
      displayer: "Right Media",
      value: [
        {
          type: "media",
          key: "media",
          displayer: "Media",
          additionalParams: { availableTypes: ["image", "video"] },
          value: {
            type: "image",
            url: "https://hq-blinkpage-dev-1b2e6.s3.eu-central-1.amazonaws.com/user_content/6a33c793ca8c4044f3e81980/6a33c7a802aa63fd0a48a293/library/demo-restaurant-home-08.jpg",
          },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: false,
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "items",
      displayer: "Items",
      value: [
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "description",
              displayer: "Text",
              value:
                "I really like the clean and simple aesthetic of flat design. It's great for creating a modern and minimal look, and it also works well for responsive design since it's easy to adapt to different screen sizes. Plus, the lack of textures and gradients makes it easier to focus on the content itself.",
            },
            {
              type: "string",
              key: "name",
              displayer: "Author Name",
              value: "Jerrie Corinna",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "RiDoubleQuotesL",
              },
            },
            {
              type: "media",
              key: "profileImage",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66616deebd2970002c62361d?alt=media&timestamp=1719483639149",
              },
            },
            {
              type: "boolean",
              key: "iconBackground",
              displayer: "Icon Background",
              value: true,
            },
          ],
        },
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "description",
              displayer: "Text",
              value: "This product has changed my life! It's incredibly useful and packed with creative features. I would highly recommend it to everyone!",
            },
            {
              type: "string",
              key: "name",
              displayer: "Author Name",
              value: "Kevin Corinna",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "RiDoubleQuotesL",
              },
            },
            {
              type: "media",
              key: "profileImage",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66616deebd2970002c62361e?alt=media&timestamp=1719483639149",
              },
            },
            {
              type: "boolean",
              key: "iconBackground",
              displayer: "Icon Background",
              value: true,
            },
          ],
        },
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "description",
              displayer: "Text",
              value: "This product has changed my life! It's incredibly useful and packed with creative features. I would highly recommend it to everyone!",
            },
            {
              type: "string",
              key: "name",
              displayer: "Author Name",
              value: "Kevin Corinna",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "RiDoubleQuotesL",
              },
            },
            {
              type: "media",
              key: "profileImage",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66616deebd2970002c62361f?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "boolean",
              key: "iconBackground",
              displayer: "Icon Background",
              value: true,
            },
          ],
        },
      ],
    });

    this.addProp(INPUTS.SLIDER_SETTINGS("slider-settings", "Slider Settings", {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
    }));

    this.setComponentState("active_index", 0);
    this.setComponentState("slider-ref", React.createRef());
  }

  static getName(): string {
    return "Testimonials 1";
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

    const rawSettings = this.getPropValue("slider-settings");
    const sliderSettings = Object.fromEntries((rawSettings as any[]).map((p: any) => [p.key, p.value]));
    const settings = {
      ...sliderSettings,
      dots: false,
      arrows: false,
      beforeChange: (_oldIndex: number, nextIndex: number) => {
        this.setComponentState("active_index", nextIndex);
      },
    };

    const prevIcon = this.getPropValue("prevIcon") as TypeMediaInputValue;
    const prevIconExist = prevIcon && (prevIcon.type === "icon" ? prevIcon.name : prevIcon.url);
    const nextIcon = this.getPropValue("nextIcon") as TypeMediaInputValue;
    const nextIconExist = nextIcon && (nextIcon.type === "icon" ? nextIcon.name : nextIcon.url);
    const sliderRef = this.getComponentState("slider-ref");
    const showArrows = !!sliderSettings.arrows && this.castToObject<Item[]>("items").length > 1;

    const bgData = this.castToObject<MediaWithOverlay>("backgroundMedia");
    const bgMedia = bgData?.media;
    const bgMediaExist = bgMedia && (bgMedia.type === "icon" ? bgMedia.name : bgMedia.url);
    const bgOverlay = bgData?.overlay;

    const leftData = this.castToObject<MediaWithOverlay>("leftMedia");
    const leftMedia = leftData?.media;
    const leftMediaExist = leftMedia && (leftMedia.type === "icon" ? leftMedia.name : leftMedia.url);
    const leftOverlay = leftData?.overlay;

    const rightData = this.castToObject<MediaWithOverlay>("rightMedia");
    const rightMedia = rightData?.media;
    const rightMediaExist = rightMedia && (rightMedia.type === "icon" ? rightMedia.name : rightMedia.url);
    const rightOverlay = rightData?.overlay;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        {bgMediaExist && (
          <Base.Media value={bgMedia} className={this.decorateCSS("background-media")} />
        )}
        {bgMediaExist && bgOverlay && (
          <div className={this.decorateCSS("background-overlay")} />
        )}
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            <div className={this.decorateCSS("content-wrapper")}>
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
                    <div className={this.decorateCSS("button-wrapper")}>
                      {buttons.map((button: Button, index: number) => {
                        const buttonTextExist = this.castToString(button.text);
                        const buttonIconExist = button.icon && (button.icon.type === "icon" ? button.icon.name : button.icon.url);

                        if (!buttonTextExist && !buttonIconExist) return null;

                        return (
                          <ComposerLink key={index} path={button.url}>
                            <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                              {buttonTextExist && <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>}
                              {buttonIconExist && <Base.Media className={this.decorateCSS("button-icon")} value={button.icon!} />}
                            </Base.Button>
                          </ComposerLink>
                        );
                      })}
                    </div>
                  )}
                </Base.VerticalContent>
              )}
              <div className={this.decorateCSS("slider-row")}>
                <div className={this.decorateCSS("side-image-left")}>
                  {leftMediaExist && (
                    <div className={this.decorateCSS("media-container")}>
                      <Base.Media value={leftMedia} className={this.decorateCSS("side-img")} />
                      {leftOverlay && <div className={this.decorateCSS("media-overlay")} />}
                    </div>
                  )}
                </div>
                <div className={this.decorateCSS("content")}>
                  <div className={this.decorateCSS("slider-container")}>
                    {showArrows && prevIconExist && (
                      <button
                        className={this.decorateCSS("prev-arrow-btn")}
                        onClick={() => sliderRef.current?.slickPrev()}
                      >
                        <Base.Media value={prevIcon} className={this.decorateCSS("arrow-icon")} />
                      </button>
                    )}

                    <ComposerSlider {...settings} ref={sliderRef} className={this.decorateCSS("slider")}>
                      {this.castToObject<Item[]>("items").map((item: Item, index: number) => {
                        const iconExist = item.icon && (item.icon.type === "icon" ? item.icon.name : item.icon.url);
                        return (
                          <div key={index} className={this.decorateCSS("items")}>
                            {iconExist && (
                              <Base.Media
                                value={item.icon}
                                className={`${this.decorateCSS("icon")} ${item.icon.type === "icon" ? this.decorateCSS("is-icon") : this.decorateCSS("is-image")} ${item.iconBackground ? this.decorateCSS("icon-bg") : ""}`}
                              />
                            )}
                            {this.castToString(item.description) && (
                              <Base.P className={this.decorateCSS("description")}>{item.description}</Base.P>
                            )}
                            {this.castToString(item.name) && (
                              <Base.P className={this.decorateCSS("name")}>{item.name}</Base.P>
                            )}
                          </div>
                        );
                      })}
                    </ComposerSlider>

                    {showArrows && nextIconExist && (
                      <button
                        className={this.decorateCSS("next-arrow-btn")}
                        onClick={() => sliderRef.current?.slickNext()}
                      >
                        <Base.Media value={nextIcon} className={this.decorateCSS("arrow-icon")} />
                      </button>
                    )}
                  </div>
                  <div className={this.decorateCSS("images")}>
                    {this.castToObject<Item[]>("items").map((item: Item, itemIndex: number) => {
                      const isActive = this.getComponentState("active_index") === itemIndex;
                      return (
                        <div
                          key={itemIndex}
                          className={this.decorateCSS("image-container")}
                          onClick={() => this.onImageClick(itemIndex)}
                        >
                          {item.profileImage && (
                            <Base.Media
                              value={item.profileImage}
                              className={`${this.decorateCSS("image")} ${isActive ? this.decorateCSS("active") : ""}`}
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {sliderSettings.dots && this.castToObject<Item[]>("items").length > 1 && (
                    <div className={this.decorateCSS("navigation-dots")}>
                      {this.castToObject<Item[]>("items").map((_: Item, index: number) => {
                        const isActive = this.getComponentState("active_index") === index;
                        return (
                          <div
                            key={index}
                            className={`${this.decorateCSS("navigation-dot")} ${isActive ? this.decorateCSS("active") : ""}`}
                            onClick={() => {
                              sliderRef.current?.slickGoTo(index);
                            }}
                          />
                        );
                      })}
                    </div>
                  )}
                </div>
                <div className={this.decorateCSS("side-image-right")}>
                  {rightMediaExist && (
                    <div className={this.decorateCSS("media-container")}>
                      <Base.Media value={rightMedia} className={this.decorateCSS("side-img")} />
                      {rightOverlay && <div className={this.decorateCSS("media-overlay")} />}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Testimonials1Page;
