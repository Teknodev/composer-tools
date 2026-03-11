import React from "react";
import { BaseSlider, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./slider11.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type SliderItem = {
  subTitle: string;
  title: string;
  description: string;
  media: TypeMediaInputValue;
  button: INPUTS.CastedButton;
  icon: TypeMediaInputValue;
};

type LineSettings = {
  showLine: boolean;
  animateLine: boolean;
};

class Slider11 extends BaseSlider {
  private progressIntervalId?: NodeJS.Timeout;
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
      value: "Design eye-catching websites with next generation performance",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Create beautiful sites with ultimate design flexibility, backed by ultra-reliable infrastructure and unbeatable performance.",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value:
        [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
    });

    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Cards",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "subTitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Unbeatable performance",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Grow your clients' businesses with reliable, high-performance sites born to rank and built to convert—no maintenance needed.",
            },
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/687f951fa85f1c002bbaf9cf?alt=media",
              },
            },
            INPUTS.BUTTON("button", "Button", "SEO and Performance", "", null, null, "Link"),
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "GoArrowRight",
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
              type: "string",
              key: "subTitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Rock-solid infrastructure",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Build sites that can weather any storm with reliable 99.95% uptime SLA, automatic backups, free SSL encryption, and more.",
            },
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/687f9530a85f1c002bbaf9f2?alt=media",
              },
            },
            INPUTS.BUTTON("button", "Button", "Security and infrastructure", "", null, null, "Link"),
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "GoArrowRight",
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
              type: "string",
              key: "subTitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Sell anything, anytime",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Create highly customizable, SEO-ready eCommerce sites for clients with all the features you need to sell anything to anyone.",
            },
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/687f951fa85f1c002bbaf9cf?alt=media",
              },
            },
            INPUTS.BUTTON("button", "Button", "Sell online", "", null, null, "Link"),
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "GoArrowRight",
              },
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });

    this.addProp({
      type: "object",
      key: "line",
      displayer: "Line Settings",
      value: [
        {
          type: "boolean",
          key: "showLine",
          displayer: "Line",
          value: true,
        },
        {
          type: "boolean",
          key: "animateLine",
          displayer: "Line Animation",
          value: true,
        },
      ],
    });

    this.addProp(INPUTS.SLIDER_SETTINGS("slider-settings", "Slider Settings"));
    this.setComponentState("activeTab", 0);
  }

  onComponentDidMount() {
    this.startProgressAnimation();
  }

  private startProgressAnimation() {
    const rawSettings = this.getPropValue("slider-settings");
    const settings = this.transformSliderValues(rawSettings);
    const speed = settings.autoplaySpeed || 5000;
    const autoplay = settings.autoplay ?? true;

    if (this.progressIntervalId) {
      clearInterval(this.progressIntervalId);
    }

    if (autoplay) {
      this.progressIntervalId = setTimeout(() => {
        this.nextSlide();
      }, speed);
    }
  }

  private nextSlide() {
    const sliderItems = this.castToObject<SliderItem[]>("cards");
    const current = (this.getComponentState("activeTab")) || 0;
    const next = (current + 1) % sliderItems.length;
    this.setActiveTab(next);
  }

  private prevSlide() {
    const sliderItems = this.castToObject<SliderItem[]>("cards");
    const current = (this.getComponentState("activeTab")) || 0;
    const prev = (current - 1 + sliderItems.length) % sliderItems.length;
    this.setActiveTab(prev);
  }

  onComponentWillUnmount() {
    if (this.progressIntervalId !== undefined) {
      clearInterval(this.progressIntervalId);
    }
  }

  setActiveTab(activeTabIndex: number) {
    this.setComponentState("activeTab", activeTabIndex);
    this.startProgressAnimation();
  }

  static getName(): string {
    return "Slider 11";
  }

  render() {
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const validButtons = buttons.filter(b => !!this.castToString(b.text));
    const sliderItems = this.castToObject<SliderItem[]>("cards");
    const active = this.getComponentState("activeTab");
    const isOverlayActive = this.getPropValue("overlay");
    const lineSettings = this.castToObject<LineSettings>("line");
    const showDividerLines = lineSettings?.showLine ?? true;
    const enableLineAnimations = lineSettings?.animateLine ?? true;
    const hasContent = subtitle || title || description || validButtons.length > 0;
    const rawSettings = this.getPropValue("slider-settings");
    const settings = this.transformSliderValues(rawSettings);
    const speed = settings.autoplaySpeed || 5000;
    const autoplay = settings.autoplay ?? true;
    const showArrows = settings.arrows ?? true;
    const showDots = settings.dots ?? true;
    const activeItem = sliderItems[active];
    const activeItemHasMedia = !!(activeItem?.media)?.url;
    const noMediaAtAll = sliderItems.every(item => !(item.media)?.url);

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${!hasContent && this.decorateCSS("no-header")}`}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {hasContent && (
            <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
              {subtitle && (<Base.SectionSubTitle className={this.decorateCSS("subtitle")}> {subtitle}</Base.SectionSubTitle>)}
              {title && (<Base.SectionTitle className={this.decorateCSS("title")}> {title} </Base.SectionTitle>)}
              {(description || validButtons.length > 0) && (<div className={this.decorateCSS("content")}>
                {description && (<Base.SectionDescription className={this.decorateCSS("description")}> {description} </Base.SectionDescription>)}
                {validButtons.length > 0 && (
                  <div className={this.decorateCSS("button-container")}>
                    {validButtons.map((button: INPUTS.CastedButton, index: number) => (
                      <ComposerLink key={index} path={button.url}>
                        <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                          <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                        </Base.Button>
                      </ComposerLink>
                    ))}
                  </div>
                )}
              </div>)}
            </Base.VerticalContent>
          )}
          {sliderItems.length > 0 && (
            <div className={`${this.decorateCSS("tabs-layout")} ${noMediaAtAll && this.decorateCSS("all-no-media")} `}>
              <div className={`${this.decorateCSS("tabs-left")} ${(!activeItemHasMedia || noMediaAtAll) && this.decorateCSS("full-width")}`}>
                {sliderItems.map((item: SliderItem, index: number) => {
                  const itemTitleExist = !!this.castToString(item.title);
                  const itemDescExist = !!this.castToString(item.description);
                  const itemSubTitleExist = !!this.castToString(item.subTitle);
                  const buttonExist = !!item.button && !!this.castToString(item.button.text);
                  const hasCardContent = itemTitleExist || itemDescExist || itemSubTitleExist || buttonExist;

                  return (
                    <div key={index} className={`${this.decorateCSS("tab-item")} ${active === index && this.decorateCSS("active")}`} onClick={() => this.setActiveTab(index)}>
                      {(item.media)?.url && (
                        <div className={this.decorateCSS("tab-background")}>
                          <Base.Media value={item.media} className={this.decorateCSS("tab-bg-media")} />
                          {isOverlayActive && (<div className={this.decorateCSS("overlay")} />)}
                        </div>
                      )}
                      <Base.VerticalContent className={this.decorateCSS("card-content")}>
                        {itemSubTitleExist && (<Base.H6 className={this.decorateCSS("card-subtitle")}> {item.subTitle} </Base.H6>)}
                        {itemTitleExist && (<Base.H5 className={this.decorateCSS("card-title")}> {item.title} </Base.H5>)}
                        {itemDescExist && (<Base.P className={this.decorateCSS("card-description")}>{item.description}</Base.P>)}
                        {item.button && this.castToString(item.button.text) && (
                          <ComposerLink path={item.button.url}>
                            <Base.Row className={this.decorateCSS("button-wrapper")}>
                              <Base.Button buttonType={item.button.type} className={this.decorateCSS("card-button")}>
                                <Base.P className={this.decorateCSS("card-button-text")}>
                                  {item.button.text}
                                </Base.P>
                              </Base.Button>
                              {item.icon && (<Base.Media value={item.icon} className={`${this.decorateCSS("button-icon")} ${item.icon.type === "image" && this.decorateCSS("has-image")}`} />)}
                            </Base.Row>
                          </ComposerLink>
                        )}
                      </Base.VerticalContent>
                      {sliderItems.length > 1 && showDividerLines && (
                        <div className={this.decorateCSS("progress-container")}>
                          <div className={this.decorateCSS("progress-track")}>
                            <div
                              className={`${this.decorateCSS("progress-fill")} ${active === index && autoplay && enableLineAnimations && this.decorateCSS("animate")}`}
                              style={{ animationDuration: autoplay ? `${speed}ms` : undefined, width: !autoplay && active === index ? "100%" : undefined, }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              {activeItemHasMedia && !noMediaAtAll && (
                <div className={this.decorateCSS("tabs-right")}>
                  {sliderItems.map((item: SliderItem, index: number) => (
                    <div key={index} className={`${this.decorateCSS("tab-image-wrapper")} ${active === index && this.decorateCSS("visible")}`} >
                      <Base.Media value={item.media} className={this.decorateCSS("tab-image")} />
                      {isOverlayActive && (<div className={this.decorateCSS("overlay")} />)}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          {sliderItems.length > 1 && showDots && (
            <div className={this.decorateCSS("dots")}>
              {sliderItems.map((_, index) => (
                <div key={`dot-${index}`} className={`${this.decorateCSS("dot-item")} ${active === index && this.decorateCSS("active")}`} onClick={() => this.setActiveTab(index)} >
                  <button className={this.decorateCSS("dot-button")} />
                </div>
              ))}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Slider11;