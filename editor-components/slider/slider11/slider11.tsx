import * as React from "react";
import { BaseSlider, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./slider11.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Button = INPUTS.CastedButton;

type ISliderItem = {
  title: string;
  description: string;
  media: TypeMediaInputValue;
  linkText: string;
  path: string;
  icon: TypeMediaInputValue;
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
      value:
        "Create beautiful sites with ultimate design flexibility, backed by ultra-reliable infrastructure and unbeatable performance.",
    });

    this.addProp(INPUTS.SLIDER_SETTINGS("slider-settings", "Slider Settings"));

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "Get Started", "", null, null, "Primary"), INPUTS.BUTTON("button", "Button", "Learn More", "", null, null, "Primary")],
    });

    this.addProp({
      type: "array",
      key: "sliderItems",
      displayer: "Slider Items",
      value: [
        {
          type: "object",
          key: "sliderItem",
          displayer: "Slider Item",
          value: [
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
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/687f951fa85f1c002bbaf9cf?alt=media",
              },
            },
            {
              type: "string",
              key: "linkText",
              displayer: "Link Text",
              value: "SEO and Performance",
            },
            {
              type: "page",
              key: "path",
              displayer: "Link URL",
              value: "",
            },
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
          key: "sliderItem",
          displayer: "Slider Item",
          value: [
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
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/687f9530a85f1c002bbaf9f2?alt=media",
              },
            },
            {
              type: "string",
              key: "linkText",
              displayer: "Link Text",
              value: "Security and infrastructure",
            },
            {
              type: "page",
              key: "path",
              displayer: "Link URL",
              value: "",
            },
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
          key: "sliderItem",
          displayer: "Slider Item",
          value: [
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
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/687f951fa85f1c002bbaf9cf?alt=media",
              },
            },
            {
              type: "string",
              key: "linkText",
              displayer: "Link Text",
              value: "Sell online",
            },
            {
              type: "page",
              key: "path",
              displayer: "Link URL",
              value: "",
            },
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
      ] as any,
    });

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
    const sliderItems = this.castToObject<ISliderItem[]>("sliderItems");
    const current = (this.getComponentState("activeTab") as number) || 0;
    const next = (current + 1) % sliderItems.length;

    this.setActiveTab(next);
  }

  private prevSlide() {
    const sliderItems = this.castToObject<ISliderItem[]>("sliderItems");
    const current = (this.getComponentState("activeTab") as number) || 0;
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
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const buttons = this.castToObject<Button[]>("buttons");
    const sliderItems = this.castToObject<ISliderItem[]>("sliderItems");
    const active = this.getComponentState("activeTab") as number;
    const alignmentValue = Base.getContentAlignment();
    const isOverlayActive = this.getPropValue("overlay");

    const rawSettings = this.getPropValue("slider-settings");
    const settings = this.transformSliderValues(rawSettings);
    const speed = settings.autoplaySpeed || 5000;
    const autoplay = settings.autoplay ?? true;
    const showArrows = settings.arrows ?? true;
    const showDots = settings.dots ?? true;

    const titleExist = !!title;
    const descriptionExist = !!description;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(this.castToString(subtitle) || titleExist || descriptionExist || buttons.length > 0) && (
            <Base.VerticalContent className={this.decorateCSS("heading")}>
              {this.castToString(subtitle) && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {subtitle}
                </Base.SectionSubTitle>
              )}

              {titleExist && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {title}
                </Base.SectionTitle>
              )}

              {descriptionExist && (
                <Base.SectionDescription
                  className={this.decorateCSS("description")}
                >
                  {description}
                </Base.SectionDescription>
              )}

              {buttons.length > 0 && (
                <div className={this.decorateCSS("button-container")}>
                  {buttons.map((button: Button, index: number) => (
                    <ComposerLink key={index} path={button.url}>
                      {this.castToString(button.text) && (
                        <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                          <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                        </Base.Button>
                      )}
                    </ComposerLink>
                  ))}
                </div>
              )}
            </Base.VerticalContent>
          )}

          <div className={this.decorateCSS("tabs-layout")}>
            {sliderItems.length > 1 && showArrows && (
              <>
                <div
                  className={this.decorateCSS("arrow-prev")}
                  onClick={() => this.prevSlide()}
                />
                <div
                  className={this.decorateCSS("arrow-next")}
                  onClick={() => this.nextSlide()}
                />
              </>
            )}

            <div className={this.decorateCSS("tabs-left")}>
              {sliderItems.map((item: ISliderItem, index: number) => {
                const itemTitleExist = !!item.title;
                const itemDescExist = !!item.description;
                const linkTextExist = !!item.linkText;
                const iconExist = !!item.icon;

                return (
                  <div
                    key={index}
                    className={`${this.decorateCSS("tab-item")} ${active === index ? this.decorateCSS("active") : ""
                      }`}
                    onClick={() => this.setActiveTab(index)}
                  >
                    <div className={this.decorateCSS("tab-background")}>
                      <Base.Media
                        value={item.media}
                        className={this.decorateCSS("tab-bg-media")}
                      />
                      {isOverlayActive && (
                        <div className={this.decorateCSS("overlay")} />
                      )}
                    </div>

                    {itemTitleExist && (
                      <Base.H3 className={this.decorateCSS("tab-title")}>
                        {item.title}
                      </Base.H3>
                    )}
                    {itemDescExist && (
                      <Base.P className={this.decorateCSS("tab-desc")}>
                        {item.description}
                      </Base.P>
                    )}
                    {linkTextExist && (
                      <ComposerLink path={item.path}>
                        <div
                          className={`${this.decorateCSS("link-wrapper")} ${alignmentValue === "center"
                            ? this.decorateCSS("center")
                            : this.decorateCSS("left")
                            }`}
                        >
                          <Base.P className={this.decorateCSS("tab-link")}>
                            {item.linkText}
                          </Base.P>
                          {iconExist && (
                            <Base.Media
                              value={item.icon}
                              className={this.decorateCSS("icon")}
                            />
                          )}
                        </div>
                      </ComposerLink>
                    )}

                    {sliderItems.length > 1 && (
                      <div className={this.decorateCSS("progress-container")}>
                        <div className={this.decorateCSS("progress-track")}>
                          <div
                            className={`${this.decorateCSS("progress-fill")} ${active === index && autoplay
                              ? this.decorateCSS("animate")
                              : ""
                              }`}
                            style={{
                              animationDuration: autoplay ? `${speed}ms` : undefined,
                              width: !autoplay && active === index ? "100%" : undefined,
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className={this.decorateCSS("tabs-right")}>
              {sliderItems.map((item: ISliderItem, index: number) => (
                <div
                  key={index}
                  className={`${this.decorateCSS("tab-image-wrapper")} 
                    ${active === index ? this.decorateCSS("visible") : ""}`}
                >
                  <Base.Media
                    value={item.media}
                    className={this.decorateCSS("tab-image")}
                  />
                  {isOverlayActive && (
                    <div className={this.decorateCSS("overlay")} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {sliderItems.length > 1 && showDots && (
            <div className={this.decorateCSS("dots")}>
              {sliderItems.map((_, index) => (
                <div
                  key={`dot-${index}`}
                  className={`${this.decorateCSS("dot-item")} ${active === index ? this.decorateCSS("active") : ""
                    }`}
                  onClick={() => this.setActiveTab(index)}
                >
                  <Base.Button className={this.decorateCSS("dot-button")} />
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
