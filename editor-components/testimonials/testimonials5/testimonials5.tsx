import * as React from "react";
import { Testimonials, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./testimonials5.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type LeftItem = {
  prevIcon: TypeMediaInputValue;
  nextIcon: TypeMediaInputValue;
};

type SliderItem = {
  image: TypeMediaInputValue;
  author: {
    name: React.JSX.Element;
    position: React.JSX.Element;
  };
  description: React.JSX.Element;
  star: number;
  icon: TypeMediaInputValue;
};

type Button = {
  text: React.JSX.Element;
  url: string;
  icon: TypeMediaInputValue;
  type: string;
};

class Testimonials5Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "object",
      key: "background",
      displayer: "Background Media",
      value: [
        {
          type: "media",
          key: "componentBackground",
          displayer: "Background Media",
          additionalParams: { availableTypes: ["image", "video"] },
          value: { type: "image", url: "https://craftohtml.themezaa.com/images/demo-travel-agency-home-bg-03.jpg" },
        },
        {
          type: "boolean",
          key: "overlayActive",
          displayer: "Overlay",
          value: false,
        },
      ],
    });
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "TESTIMONIALS",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Our happy traveller.",
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
      key: "lineIsActive",
      displayer: "Line",
      value: true,
    });

    this.addProp({
      type: "object",
      key: "leftItem",
      displayer: "Left Item",
      value: [
        {
          type: "media",
          key: "prevIcon",
          displayer: "Prev Icon",
          additionalParams: { availableTypes: ["icon", "image"] },
          value: { type: "icon", name: "GrLinkPrevious" },
        },
        {
          type: "media",
          key: "nextIcon",
          displayer: "Next Icon",
          additionalParams: { availableTypes: ["icon", "image"] },
          value: { type: "icon", name: "GrLinkNext" },
        },
      ],
    });
    this.addProp({
      type: "array",
      key: "sliders",
      displayer: "Sliders",
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
              additionalParams: { availableTypes: ["image", "icon", "video"] },
              value: { type: "image", url: "https://craftohtml.themezaa.com/images/demo-travel-agency-home-18.png" },
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
                  value: "Alexender Moore",
                },
                {
                  type: "string",
                  key: "position",
                  displayer: "Position",
                  value: "",
                },
              ],
            },
            {
              type: "string",
              key: "description",
              displayer: "Text",
              value: "This is itinerary was a perfect combination of city sights, history and culture together with the peace of the amazon rainforest and the adventure.",
            },
            {
              type: "number",
              key: "star",
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
          key: "slider2",
          displayer: "Slider 2",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: { availableTypes: ["image", "icon", "video"] },
              value: { type: "image", url: "https://craftohtml.themezaa.com/images/demo-travel-agency-home-17.png" },
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
                  value: "Alexender Moore",
                },
                {
                  type: "string",
                  key: "position",
                  displayer: "Position",
                  value: "",
                },
              ],
            },
            {
              type: "string",
              key: "description",
              displayer: "Text",
              value: "This is itinerary was a perfect combination of city sights, history and culture together with the peace of the amazon rainforest and the adventure.",
            },
            {
              type: "number",
              key: "star",
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
          key: "slider3",
          displayer: "Slider 3",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: { availableTypes: ["image", "icon", "video"] },
              value: { type: "image", url: "https://craftohtml.themezaa.com/images/demo-travel-agency-home-15.png" },
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
                  value: "Alexender Moore",
                },
                {
                  type: "string",
                  key: "position",
                  displayer: "Position",
                  value: "",
                },
              ],
            },
            {
              type: "string",
              key: "description",
              displayer: "Text",
              value: "This is itinerary was a perfect combination of city sights, history and culture together with the peace of the amazon rainforest and the adventure.",
            },
            {
              type: "number",
              key: "star",
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
    this.addProp(INPUTS.SLIDER_SETTINGS("slider-settings", "Slider Settings", {
      dots: false,
      arrows: true,
      autoplay: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }));
    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("active", 0);
    this.setComponentState("activeSlideIndex", 0);
  }

  static getName(): string {
    return "Testimonials 5";
  }

  handleSlideChange(direction: "next" | "prev") {
    const currentIndex = this.getComponentState("activeSlideIndex");
    const lastIndex = this.getPropValue("sliders").length - 1;

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
    const alignmentValue = Base.getContentAlignment();
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

    const leftItem = this.castToObject<LeftItem>("leftItem");
    const sliderItem = this.castToObject<SliderItem[]>("sliders");
    const sliderRef = this.getComponentState("slider-ref");
    const prevIconExist = leftItem.prevIcon && (leftItem.prevIcon.type === "icon" ? leftItem.prevIcon.name : leftItem.prevIcon.url);
    const nextIconExist = leftItem.nextIcon && (leftItem.nextIcon.type === "icon" ? leftItem.nextIcon.name : leftItem.nextIcon.url);
    const hasLeftContent = Boolean(hasAnyTopContent || prevIconExist || nextIconExist);

    const background = this.castToObject<{ componentBackground: TypeMediaInputValue; overlayActive: boolean }>("background");
    const bgMedia = background.componentBackground as TypeMediaInputValue;
    const backgroundImageExist = bgMedia && bgMedia.url;
    const overlayActive = background.overlayActive;

    const rawSettings = this.getPropValue("slider-settings");
    const sliderSettings = Object.fromEntries((rawSettings as any[]).map((p: any) => [p.key, p.value]));
    const settings = {
      ...sliderSettings,
      arrows: false,
      beforeChange: (current: number, next: number) => {
        this.setComponentState("active", next);
        this.setComponentState("activeSlideIndex", next);
      },
    };

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${backgroundImageExist ? this.decorateCSS("with-background") : ""} ${alignmentValue === "center" ? this.decorateCSS("center") : ""}`}>
        {backgroundImageExist && (
          <Base.Media
            value={bgMedia}
            className={this.decorateCSS("component-background")}
          />
        )}
        {overlayActive && backgroundImageExist && <div className={this.decorateCSS("overlay")} />}
        <Base.MaxContent className={this.decorateCSS("maxContent")}>
          <div className={this.decorateCSS("containerGrid")}>
            {hasLeftContent && (
              <div className={this.decorateCSS("leftContainer")}>
                <Base.VerticalContent className={this.decorateCSS("leftContainerText")}>
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
                    <Base.SectionDescription className={this.decorateCSS("top-description")}>
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
                  {sliderSettings.arrows && (prevIconExist || nextIconExist) && sliderItem.length > 1 && (
                    <div className={this.decorateCSS("arrow")}>
                      {prevIconExist && (
                        <button onClick={() => this.handleSlideChange("prev")} className={this.decorateCSS("prevArrow")}>
                          <Base.Media value={leftItem.prevIcon} className={this.decorateCSS("icon")} />
                        </button>
                      )}
                      {nextIconExist && (
                        <button onClick={() => this.handleSlideChange("next")} className={this.decorateCSS("nextArrow")}>
                          <Base.Media value={leftItem.nextIcon} className={this.decorateCSS("icon")} />
                        </button>
                      )}
                    </div>
                  )}
                </Base.VerticalContent>
              </div>
            )}

            <ComposerSlider {...settings} ref={sliderRef} className={`${this.decorateCSS("slider")} ${!hasLeftContent ? this.decorateCSS("fullSlider") : ""}`}>
              {sliderItem.map((item: SliderItem, index: number) => {
                const imageExist = item.image && item.image.url;
                const itemIconExist = item.icon && (item.icon.type === "icon" ? item.icon.name : item.icon.url);
                return (
                  <div key={index}>
                    {imageExist && (
                      <Base.Media value={item.image} className={this.decorateCSS("image")} />
                    )}
                    <div className={this.decorateCSS("rightWrapper")}>
                      {item.author && (this.castToString(item.author.name) || this.castToString(item.author.position)) && (
                        <div className={this.decorateCSS("authorContainer")}>
                          {this.castToString(item.author.name) && (
                            <Base.H6 className={this.decorateCSS("sliderTitle")}>
                              {item.author.name}
                            </Base.H6>
                          )}
                          {this.castToString(item.author.position) && (
                            <Base.P className={this.decorateCSS("sliderPosition")}>
                              {item.author.position}
                            </Base.P>
                          )}
                        </div>
                      )}
                      {this.getPropValue("lineIsActive") && (
                        <div className={this.decorateCSS("lineContainer")}>
                          <div className={this.decorateCSS("line")}></div>
                        </div>
                      )}
                      <Base.VerticalContent className={this.decorateCSS("rightContainer")}>
                        {this.castToString(item.description) && (
                          <Base.P className={this.decorateCSS("description")}>
                            {item.description}
                          </Base.P>
                        )}
                        {itemIconExist && item.star > 0 && (
                          <div className={this.decorateCSS("stars")}>
                            {[...Array(Number(item.star))].map((_: unknown, starIndex: number) => (
                              <Base.Media key={starIndex} value={item.icon} className={this.decorateCSS("star")} />
                            ))}
                          </div>
                        )}
                      </Base.VerticalContent>
                    </div>
                  </div>
                );
              })}
            </ComposerSlider>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Testimonials5Page;
