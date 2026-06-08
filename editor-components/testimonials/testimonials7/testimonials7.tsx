import * as React from "react";
import { Testimonials, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./testimonials7.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type Background = {
  componentBackground: TypeMediaInputValue;
  overlay: boolean;
};

type Item = {
  profileImage: TypeMediaInputValue;
  name: React.JSX.Element;
  nameId: React.JSX.Element;
  description: React.JSX.Element;
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
      type: "object",
      key: "background",
      displayer: "Background Media",
      value: [
        {
          type: "media",
          key: "componentBackground",
          displayer: "Background Media",
          additionalParams: { availableTypes: ["image", "video"] },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617330bd2970002c623799?alt=media&timestamp=1719483639150",
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
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "description",
              value: "'Our office is something we are pleased with. We consider it the little magnet; it is wanting to come here and afterward difficult to leave it. Our office is additionally a big name.'",
              displayer: "Description",
            },
            {
              type: "media",
              key: "profileImage",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617301bd2970002c623790?alt=media&timestamp=1719483639150",
              },
              displayer: "Media",
            },
            {
              type: "string",
              key: "name",
              value: "Tomas Reuss",
              displayer: "Name",
            },
            {
              type: "string",
              key: "nameId",
              value: "CLIENT OF CLUB",
              displayer: "Position",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "description",
              value: "'Our office is something we are pleased with. We consider it the little magnet; it is wanting to come here and afterward difficult to leave it. Our office is additionally a big name.'",
              displayer: "Description",
            },
            {
              type: "media",
              key: "profileImage",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617301bd2970002c623791?alt=media&timestamp=1719483639150",
              },
              displayer: "Media",
            },
            {
              type: "string",
              key: "name",
              value: "Monica Reuss",
              displayer: "Name",
            },
            {
              type: "string",
              key: "nameId",
              value: "CLIENT OF CLUB",
              displayer: "Position",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "description",
              value: "'\"Our office is something we are pleased with. We consider it the little magnet; it is wanting to come here and afterward difficult to leave it. Our office is additionally a big name.\"'",
              displayer: "Description",
            },
            {
              type: "media",
              key: "profileImage",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617301bd2970002c623792?alt=media&timestamp=1719483639150",
              },
              displayer: "Media",
            },
            {
              type: "string",
              key: "name",
              value: "Linda Anderson",
              displayer: "Name",
            },
            {
              type: "string",
              key: "nameId",
              value: "CLIENT OF CLUB",
              displayer: "Position",
            },
          ],
        },
      ],
    });
    this.addProp(INPUTS.SLIDER_SETTINGS("slider-settings", "Slider Settings", {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 700,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
    }));
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

    const prevIconVal = this.getPropValue("prevIcon") as TypeMediaInputValue;
    const prevIconExist = prevIconVal && (prevIconVal.type === "icon" ? prevIconVal.name : prevIconVal.url);
    const nextIconVal = this.getPropValue("nextIcon") as TypeMediaInputValue;
    const nextIconExist = nextIconVal && (nextIconVal.type === "icon" ? nextIconVal.name : nextIconVal.url);

    const rawSettings = this.getPropValue("slider-settings");
    const sliderSettings = Object.fromEntries((rawSettings as any[]).map((p: any) => [p.key, p.value]));
    const settings = {
      ...sliderSettings,
      arrows: false,
      dots: false,
      beforeChange: (current: number, next: number) => {
        this.setComponentState("active", next);
        this.setComponentState("activeSlideIndex", next);
      },
    };
    const sliderRef = this.getComponentState("slider-ref");
    const activeSlideIndex = this.getComponentState("activeSlideIndex") || 0;
    const items = this.castToObject<Item[]>("card-items");
    const bg = this.castToObject<Background>("background");
    const hasBackground = !!(bg.componentBackground && (bg.componentBackground.type === "icon" ? bg.componentBackground.name : bg.componentBackground.url));
    return (
      <Base.Container
        className={`${this.decorateCSS("container")} ${!hasBackground ? this.decorateCSS("no-background") : ""}`}
      >
        {hasBackground && <Base.Media value={bg.componentBackground} className={this.decorateCSS("background-image")} />}
        {bg.overlay && <div className={this.decorateCSS("overlay")} />}
        <Base.MaxContent className={this.decorateCSS("max-content")}>
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
          <div className={this.decorateCSS("testimonials7")}>
            <div className={this.decorateCSS("slider-wrapper")}>
              {sliderSettings.arrows && prevIconExist && items.length > 1 && (
                <button
                  onClick={() => { sliderRef.current.slickPrev(); }}
                  className={this.decorateCSS("button-left")}
                >
                  <Base.Media value={prevIconVal} className={this.decorateCSS("arrow")} />
                </button>
              )}
              <ComposerSlider ref={sliderRef} {...settings} className={this.decorateCSS("slider-style")}>
                {items.map((item: Item, index: number) => (
                  <div key={index} className={this.decorateCSS("card")}>
                    {(this.castToString(item.description) || item.profileImage || this.castToString(item.name) || this.castToString(item.nameId)) && (
                      <Base.VerticalContent className={this.decorateCSS("item-content")}>
                        {this.castToString(item.description) && (
                          <Base.P className={this.decorateCSS("item-description")}>{item.description}</Base.P>
                        )}
                        {(item.profileImage || this.castToString(item.name) || this.castToString(item.nameId)) && (
                          <div className={this.decorateCSS("profile")}>
                            {item.profileImage && <Base.Media value={item.profileImage} className={this.decorateCSS("image")} />}
                            <Base.VerticalContent className={this.decorateCSS("profile-text")}>
                              {this.castToString(item.name) && (
                                <div className={this.decorateCSS("item-name")}>{item.name}</div>
                              )}
                              {this.castToString(item.nameId) && (
                                <div className={this.decorateCSS("item-name-id")}>{item.nameId}</div>
                              )}
                            </Base.VerticalContent>
                          </div>
                        )}
                      </Base.VerticalContent>
                    )}
                  </div>
                ))}
              </ComposerSlider>
              {sliderSettings.arrows && nextIconExist && items.length > 1 && (
                <button
                  onClick={() => { sliderRef.current.slickNext(); }}
                  className={this.decorateCSS("button-right")}
                >
                  <Base.Media value={nextIconVal} className={this.decorateCSS("arrow")} />
                </button>
              )}
            </div>
            {sliderSettings.dots && items.length > 1 && (
              <div className={this.decorateCSS("dots-panel")}>
                {items.map((_: Item, dotIndex: number) => (
                  <button
                    key={dotIndex}
                    className={`${this.decorateCSS("dot")} ${activeSlideIndex === dotIndex ? this.decorateCSS("dot-active") : ""}`}
                    onClick={() => sliderRef.current.slickGoTo(dotIndex)}
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

export default Testimonials7Page;
