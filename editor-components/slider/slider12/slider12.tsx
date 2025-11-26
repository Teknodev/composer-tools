import * as React from "react";
import { BaseSlider } from "../../EditorComponent";
import styles from "./slider12.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import type { Settings } from "react-slick";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Card = {
  image?: string;
  media?: { type: "video" | "image"; url: string };
  header: React.JSX.Element;
  description: React.JSX.Element;
  navigateTo: string;
};

class Slider12 extends BaseSlider {
  private settings: Settings;
  private sliderRef = React.createRef<any>();
  private sliderParentRef = React.createRef<HTMLDivElement>();
  private headerRef = React.createRef<HTMLDivElement>();
  private resizeObserver: ResizeObserver | null = null;

  constructor(props?: any) {
    super(props, styles);

    this.setComponentState("slider-offset", 50);

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
              additionalParams: { availableTypes: ["video", "image"] },
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
              additionalParams: { availableTypes: ["video", "image"] },
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
              additionalParams: { availableTypes: ["video", "image"] },
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
              additionalParams: { availableTypes: ["video", "image"] },
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
              additionalParams: { availableTypes: ["video", "image"] },
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
              additionalParams: { availableTypes: ["video", "image"] },
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
        { breakpoint: 1280, settings: { slidesToShow: 3, dots: false } },
        { breakpoint: 1024, settings: { slidesToShow: 2, dots: false } },
        { breakpoint: 640, settings: { slidesToShow: 1, dots: false } },
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

    const elements = [
      this.headerRef.current,
      this.sliderParentRef.current,
    ].filter((el): el is HTMLDivElement => !!el);

    elements.forEach((el) => this.resizeObserver?.observe(el));
  };

  updateSliderOffset = () => {
    const headerEl = this.headerRef.current;
    const sliderParent = this.sliderParentRef.current;
    if (!headerEl || !sliderParent) {
      return;
    }

    const headerRect = headerEl.getBoundingClientRect();
    const sliderRect = sliderParent.getBoundingClientRect();
    const offset = Math.max(0, headerRect.left - sliderRect.left);
    const currentOffset = this.getComponentState("slider-offset") ?? 0;

    if (Math.abs(offset - currentOffset) > 0.5) {
      this.setComponentState("slider-offset", offset);
    }
  };

  render() {
    const items = this.castToObject<Card[]>("slider")?.filter(Boolean) ?? [];
    const prevMedia = this.getPropValue("previousArrow");
    const nextMedia = this.getPropValue("nextArrow");
    const title = this.getPropValue("title");
    const subtitle = this.getPropValue("subtitle");
    const description = this.getPropValue("description");
    const overlayEnabled = this.getPropValue("overlay");
    const titleStr = this.castToString(title);
    const subtitleStr = this.castToString(subtitle);
    const descStr = this.castToString(description);
    const button = this.castToObject<any>("button");
    const buttonContent = button?.text;
    const buttonText = this.castToString(buttonContent);

    return (
      <div className={this.decorateCSS("container")}>
        <Base.Container className={this.decorateCSS("upper-container")}>
          <Base.MaxContent className={this.decorateCSS("max-content")}>
            {(titleStr || descStr) && (
              <Base.VerticalContent
                className={this.decorateCSS("vertical-content")}
              >
                <div
                  className={this.decorateCSS("section-header")}
                  ref={this.headerRef}
                >
                  <Base.VerticalContent
                    className={this.decorateCSS("section-header-content")}
                  >
                    {subtitleStr ? (
                      <Base.SectionSubTitle className={this.decorateCSS("section-subtitle")}>
                        {subtitle}
                      </Base.SectionSubTitle>
                    ) : (
                      <div className={this.decorateCSS("section-subtitle")} />
                    )}
                    {titleStr && (
                      <Base.SectionTitle className={this.decorateCSS("section-title")}>
                        {title}
                      </Base.SectionTitle>
                    )}
                    {descStr && (
                      <Base.SectionDescription
                        className={this.decorateCSS("section-description")}
                      >
                        {description}
                      </Base.SectionDescription>
                    )}
                    {items.length > 1 && (prevMedia || nextMedia) && (
                      <div className={this.decorateCSS("arrows-wrap")}>
                        <div className={this.decorateCSS("arrows")}>
                          {prevMedia && (
                            <Base.Button
                              type="button"
                              buttonType="Link"
                              className={this.decorateCSS("prevArrow")}
                              onClick={() => this.sliderRef.current?.slickPrev()}
                            >
                              <Base.Media
                                value={prevMedia}
                                className={this.decorateCSS("arrow-media")}
                              />
                            </Base.Button>
                          )}
                          {nextMedia && (
                            <Base.Button
                              type="button"
                              buttonType="Link"
                              className={this.decorateCSS("nextArrow")}
                              onClick={() => this.sliderRef.current?.slickNext()}
                            >
                              <Base.Media
                                value={nextMedia}
                                className={this.decorateCSS("arrow-media")}
                              />
                            </Base.Button>
                          )}
                        </div>
                      </div>
                    )}
                  </Base.VerticalContent>
                </div>
              </Base.VerticalContent>
            )}
          </Base.MaxContent>
        </Base.Container>

        <div className={this.decorateCSS("wrap")}>
          {items.length > 0 && (
            <div
              className={this.decorateCSS("slider-parent")}
              ref={this.sliderParentRef}
              style={
                {
                  "--slider-offset": `${this.getComponentState("slider-offset") ?? 50}px`,
                } as React.CSSProperties
              }
            >
              <ComposerSlider ref={this.sliderRef} {...this.settings}>
                {items.map((item, i) => {
                  const media = item.media;
                  const mediaType =
                    media?.type ?? (item.image ? "image" : undefined);
                  const url = media?.url ?? item.image ?? "";
                  const hasMedia = mediaType && url;
                  const hasCardDescription = this.castToString(item.description);
                  const hasHeaderText = this.castToString(item.header);
                  const textClasses = [this.decorateCSS("text")];

                  const slideClasses = [this.decorateCSS("slide")];
                  if (i % 3 === 2) {
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
                              {mediaType === "video" ? (
                                <video
                                  key={`${url}-${i}`}
                                  autoPlay
                                  muted
                                  playsInline
                                  loop
                                  controls={false}
                                  className={this.decorateCSS("video")}
                                  src={url}
                                />
                              ) : (
                                <Base.Media
                                  value={{ type: "image", url }}
                                  className={this.decorateCSS("image")}
                                />
                              )}
                              {overlayEnabled && (
                                <div className={this.decorateCSS("media-overlay")} />
                              )}
                            </div>
                          )}

                          {(hasHeaderText || hasCardDescription) && (
                            <div className={textClasses.join(" ")}>
                              {hasHeaderText && (
                                <Base.H4
                                  className={this.decorateCSS("card-header")}
                                >
                                  {item.header}
                                </Base.H4>
                              )}
                              {hasCardDescription && (
                                <div className={this.decorateCSS("card-description")}>
                                  <Base.P>{item.description}</Base.P>
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
        </div>

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
      </div>
    );
  }
}

export default Slider12;

