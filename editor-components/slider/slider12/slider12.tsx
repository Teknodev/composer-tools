import * as React from "react";
import { BaseSlider, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./slider12.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import type { Settings } from "react-slick";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Card = {
  image?: string;
  media?: TypeMediaInputValue;
  header: React.JSX.Element;
  description: React.JSX.Element;
  navigateTo: string;
};

const TABLET_BREAKPOINT = 1024;
const PHONE_BREAKPOINT = 640;

class Slider12 extends BaseSlider {
  private settings: Settings;
  private sliderRef = React.createRef<any>();
  private sliderParentRef = React.createRef<HTMLDivElement>();
  private resizeObserver: ResizeObserver | null = null;

  constructor(props?: any) {
    super(props, styles);

    this.setComponentState("slider-mode", "desktop");

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
      value: "Collaborative tools built for the pros. Like you",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Supercharge your productivity with client management and collaboration tools that let you do it all from a single dashboard.",
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: false,
    });

    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Slider",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Slider Item",
          value: [
            {
              type: "media",
              key: "media",
              displayer: "Media",
              value: {
                type: "video",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/691724ba3596a1002b27e4e0?alt=media",
              },
              additionalParams: { availableTypes: ["image" ,"video" ] },
            },
            {
              type: "string",
              key: "header",
              displayer: "Title",
              value: "Onboard effortlessly",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Leverage Duda's AI Content Collection form or White Label AI Site Builder to make client onboarding painless (finally).",
            },
            { type: "page", key: "navigateTo", displayer: "Navigate To", value: "" },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Slider Item",
          value: [
            {
              type: "media",
              key: "media",
              displayer: "Media",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/691724f13596a1002b27e544?alt=media",
              },
              additionalParams: { availableTypes: ["image" ,"video" ] },
            },
            {
              type: "string",
              key: "header",
              displayer: "Title",
              value: "Collabor-elated",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Work alongside clients and teammates with in-line comment threads that support image and file uploads, right where you need them.",
            },
            { type: "page", key: "navigateTo", displayer: "Navigate To", value: "" },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Media",
          value: [
            {
              type: "media",
              key: "media",
              displayer: "Media",
              value: {
                type: "video",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/691725323596a1002b27e599?alt=media",
              },
              additionalParams: { availableTypes: ["image" ,"video" ] },
            },
            {
              type: "string",
              key: "header",
              displayer: "Title",
              value: "Hands-off hand-offs",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Grant your clients white label access to the editor. Don't worry, they won't receive any branded communications from Duda. Your customers are your own.",
            },
            { type: "page", key: "navigateTo", displayer: "Navigate To", value: "" },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Slider Item",
          value: [
            {
              type: "media",
              key: "media",
              displayer: "Media",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/691725693596a1002b27e5e8?alt=media",
              },
              additionalParams: { availableTypes: ["image" ,"video" ] },
            },
            {
              type: "string",
              key: "header",
              displayer: "Title",
              value: "AI assist",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Draft content, summarize feedback and speed up routine tasks.",
            },
            { type: "page", key: "navigateTo", displayer: "Navigate To", value: "" },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Slider Item",
          value: [
            {
              type: "media",
              key: "media",
              displayer: "Media",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/691725f33596a1002b27e7af?alt=media",
              },
              additionalParams: { availableTypes: ["image" ,"video" ] },
            },
            {
              type: "string",
              key: "header",
              displayer: "Title",
              value: "File uploads",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Collect files in one place with version history and previews.",
            },
            { type: "page", key: "navigateTo", displayer: "Navigate To", value: "" },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Slider Item",
          value: [
            {
              type: "media",
              key: "media",
              displayer: "Media",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6917265a3596a1002b27e82c?alt=media",
              },
              additionalParams: { availableTypes: ["video", "image"] },
            },
            {
              type: "string",
              key: "header",
              displayer: "Title",
              value: "Custom branding",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Keep everything on-brand with logos, colors and typography.",
            },
            { type: "page", key: "navigateTo", displayer: "Navigate To", value: "" },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Slider Item",
          value: [
            {
              type: "media",
              key: "media",
              displayer: "Media",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6917269c3596a1002b27e8c4?alt=media",
              },
                additionalParams: { availableTypes: ["image" ,"video" ] },
            },
            {
              type: "string",
              key: "header",
              displayer: "Title",
              value: "Automation workflows",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Build multi-step approvals and notifications with role-based permissions.",
            },
            { type: "page", key: "navigateTo", displayer: "Navigate To", value: "" },
          ],
        },
      ],
    });

    this.addProp({
      type: "media",
      key: "previousArrow",
      displayer: "Previous Arrow",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: {
        type: "icon",
        name: "BsArrowLeftCircle",
      },
    });

    this.addProp({
      type: "media",
      key: "nextArrow",
      displayer: "Next Arrow",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: {
        type: "icon",
        name: "BsArrowRightCircle",
      },
    });

    this.addProp(
      INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")
    );

    this.settings = {
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      speed: 620,
      swipeToSlide: true,
      touchThreshold: 12,
      waitForAnimate: false,
      useCSS: true,
      useTransform: true,
      swipe: true,
      autoplay: false,
      variableWidth: true,
      responsive: [
        { breakpoint: 1280, settings: { slidesToShow: 3, dots: false, variableWidth: true } },
        { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1, dots: false, variableWidth: false } },
        { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1, dots: false, variableWidth: false } },
      ],
    };
  }

  static getName(): string {
    return "Slider 12";
  }

  componentDidMount() {
    this.observeElements();
    this.updateSliderOffset();
  }

  componentDidUpdate() {
    this.observeElements();
    this.updateSliderOffset();
  }

  componentWillUnmount() {
    this.resizeObserver?.disconnect();
    this.resizeObserver = null;
  }

  observeElements = () => {
    if (!globalThis.ResizeObserver) {
      return;
    }

    if (!this.resizeObserver) {
      this.resizeObserver = new ResizeObserver(() => {
        this.updateSliderOffset();
      });
    } else {
      this.resizeObserver.disconnect();
    }

    const elements = [this.sliderParentRef.current].filter(
      (el): el is HTMLDivElement => !!el,
    );

    elements.forEach((el) => this.resizeObserver?.observe(el));
  };

  updateSliderOffset = () => {
    const sliderParent = this.sliderParentRef.current;
    if (!sliderParent) {
      return;
    }

    const sliderRect = sliderParent.getBoundingClientRect();
    const sliderWidth = sliderRect.width;
    let nextMode: "desktop" | "tablet" | "mobile" = "desktop";
    if (sliderWidth <= PHONE_BREAKPOINT) {
      nextMode = "mobile";
    } else if (sliderWidth <= TABLET_BREAKPOINT) {
      nextMode = "tablet";
    }
    const currentMode = this.getComponentState("slider-mode");
    if (currentMode !== nextMode) {
      this.setComponentState("slider-mode", nextMode);
    }

  };

  getMediaUrl = (media?: TypeMediaInputValue, fallback?: string) => {
    const mediaWithUrl = media as { url?: string; value?: { url?: string } } | undefined;
    return mediaWithUrl?.url ?? mediaWithUrl?.value?.url ?? fallback ?? "";
  };

  render() {
    const items = this.castToObject<Card[]>("slider") ?? [];
    const prevMedia = this.getPropValue("previousArrow");
    const nextMedia = this.getPropValue("nextArrow");
    const title = this.getPropValue("title");
    const subtitle = this.getPropValue("subtitle");
    const description = this.getPropValue("description");
    const overlayEnabled = this.getPropValue("overlay");
    const titleStr = this.castToString(title);
    const subtitleStr = this.castToString(subtitle);
    const descStr = this.castToString(description);
    const hasSubtitle = !!subtitleStr;
    const hasTitle = !!titleStr;
    const hasDescription = !!descStr;
    const button = this.castToObject<any>("button");
    const buttonContent = button?.text;
    const buttonText = this.castToString(buttonContent);
    const sliderMode = this.getComponentState("slider-mode") || "desktop";
    const validItems = items.filter((item) => {
    const media = item.media;
    const mediaType = media?.type ?? (item.image ? "image" : undefined);
    const url = this.getMediaUrl(media, item.image);
    const hasMedia = mediaType && url;
    const hasCardDescription = this.castToString(item.description);
    const hasHeaderText = this.castToString(item.header);
    return hasMedia || hasHeaderText || hasCardDescription;
    });
    const hasNav = validItems.length > 1 && (prevMedia || nextMedia);
    const isMobile = sliderMode === "mobile";
    const isTablet = sliderMode === "tablet";
    const sliderSettings: Settings = {
      ...this.settings,
      slidesToShow: isMobile ? 1 : isTablet ? 2 : 3,
      slidesToScroll: 1,
      variableWidth: !isMobile && !isTablet,
      adaptiveHeight: isMobile || isTablet,
    };

    return (
      <div className={this.decorateCSS("container")}>
        <Base.Container className={this.decorateCSS("upper-container")}>
          <Base.MaxContent className={this.decorateCSS("max-content")}>
            {(hasSubtitle || hasTitle || hasDescription || hasNav) && (
              <div className={this.decorateCSS("section-header")}>
                <Base.VerticalContent className={this.decorateCSS("section-header-content")}>
                  {hasSubtitle && (
                    <Base.SectionSubTitle
                      className={`${this.decorateCSS("section-subtitle")} ${this.decorateCSS("section-subtitle-alt")}`}
                    >
                      {subtitle}
                    </Base.SectionSubTitle>
                  )}
                  {hasTitle && (
                    <Base.SectionTitle className={this.decorateCSS("section-title")}>
                      {title}
                    </Base.SectionTitle>
                  )}
                  {hasDescription && (
                    <Base.SectionDescription
                      className={this.decorateCSS("section-description")}
                    >
                      {description}
                    </Base.SectionDescription>
                  )}
                </Base.VerticalContent>
                {hasNav && (
                  <div className={this.decorateCSS("arrows-wrap")}>
                    <div className={this.decorateCSS("arrows")}>
                      {prevMedia && (
                        <div className={this.decorateCSS("arrow")}>
                          <div
                            className={this.decorateCSS("prevArrow")}
                            onClick={() => this.sliderRef.current?.slickPrev()}
                          >
                            <Base.Media value={prevMedia} className={this.decorateCSS("arrow-media")} />
                          </div>
                        </div>
                      )}
                      {nextMedia && (
                        <div className={this.decorateCSS("arrow")}>
                          <div
                            className={this.decorateCSS("nextArrow")}
                            onClick={() => this.sliderRef.current?.slickNext()}
                          >
                            <Base.Media value={nextMedia} className={this.decorateCSS("arrow-media")} />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </Base.MaxContent>
        </Base.Container>

        <Base.Container 
          className={`${this.decorateCSS("lower-container")} ${!buttonText ? this.decorateCSS("no-button") : ""}`}
        >
          <Base.MaxContent className={this.decorateCSS("wrap")}>
            {validItems.length > 0 && (
              <div
                className={this.decorateCSS("slider-parent")}
                ref={this.sliderParentRef}
              >
                <ComposerSlider key={sliderMode} ref={this.sliderRef} {...sliderSettings}>
                    {validItems.map((item, i) => {
                    const media = item.media;
                    const mediaType = media?.type ?? (item.image ? "image" : undefined);
                    const url = this.getMediaUrl(media, item.image);
                    const hasMedia = mediaType && url;
                    const hasCardDescription = this.castToString(item.description);
                    const hasHeaderText = this.castToString(item.header);

                    const slideClasses = [this.decorateCSS("slide")];
                    if (sliderMode !== "mobile" && i % 3 === 2) {
                      slideClasses.push(this.decorateCSS("wide"));
                    }
                    if (i === 0) {
                      slideClasses.push(this.decorateCSS("first-slide"));
                    }

                    return (
                      <ComposerLink
                        key={i}
                        path={item.navigateTo ?? ""}
                        isFullWidth={false}
                      >
                        <div className={slideClasses.join(" ")}>
                          <div
                            className={this.decorateCSS("card")}
                            onMouseDown={(e) => e.preventDefault()}
                          >
                            {hasMedia && (
                              <div className={this.decorateCSS("media")}>
                                <Base.Media
                                  value={
                                    mediaType === "video" && media && media.type === "video"
                                      ? { type: "video", url, settings: media.settings }
                                      : { type: "image", url }
                                  }
                                  className={
                                    mediaType === "video"
                                      ? this.decorateCSS("video")
                                      : this.decorateCSS("image")
                                  }
                                />
                                {overlayEnabled && (
                                  <div className={this.decorateCSS("media-overlay")} />
                                )}
                              </div>
                            )}

                            {(hasHeaderText || hasCardDescription) && (
                              <div className={this.decorateCSS("text")}>
                                {hasHeaderText && (
                                  <Base.H4
                                    className={this.decorateCSS("card-header")}
                                  >
                                    {item.header}
                                  </Base.H4>
                                )}
                                {hasCardDescription && (
                                  <div className={this.decorateCSS("card-description")}>
                                    <Base.P className={this.decorateCSS("card-description-text")}>{item.description}</Base.P>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </ComposerLink>
                    );
                  })}
                </ComposerSlider>
              </div>
            )}
            {buttonText && (
              <div className={this.decorateCSS("button-container")}>
                <ComposerLink path={button?.url}>
                  <Base.Button
                    buttonType={button?.type || "Primary"}
                    className={this.decorateCSS("button")}
                  >
                    <Base.P className={this.decorateCSS("button-text")}>
                      {buttonContent}
                    </Base.P>
                    {button?.icon && (
                      <Base.Media
                        value={button.icon}
                        className={this.decorateCSS("button-icon")}
                      />
                    )}
                  </Base.Button>
                </ComposerLink>
              </div>
            )}
          </Base.MaxContent>
        </Base.Container>
      </div>
    );
  }
}

export default Slider12;