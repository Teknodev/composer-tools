import * as React from "react";
import { BaseSlider } from "../../EditorComponent";
import styles from "./slider12.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import type { Settings, ResponsiveObject } from "react-slick";

type VideoPlayerProps = {
  src: string;
  className?: string;
};

const VideoPlayer = React.memo(function VideoPlayer({
  src,
  className,
}: VideoPlayerProps) {
  return (
    <video
      autoPlay
      muted
      playsInline
      loop
      preload="auto"
      className={className}
      draggable={false}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
});

type Card = {
  image?: string;
  media?: { type: "video" | "image"; url: string };
  header: React.JSX.Element;
  description: React.JSX.Element;
  link: string;
};

class Slider12 extends BaseSlider {
  private responsive!: ResponsiveObject[];
  private settings!: Settings;
  private sliderRef = React.createRef<any>();
  private containerRef = React.createRef<HTMLDivElement>();

  constructor(props?: any) {
    super(props, styles);

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
      type: "image",
      key: "background-image",
      displayer: "Background Image",
      value: "",
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
              displayer: "Video / Image",
              value: {
                type: "video",
                url: "https://vid.cdn-website.com/a8ff2f1c/videos/E2xnAgaRzmoErKzfdTDC_upload+images+v2-v.mp4",
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
            { type: "page", key: "link", displayer: "Card Link", value: "" },
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
              displayer: "Video / Image",
              value: {
                type: "image",
                url: "https://lirp.cdn-website.com/a8ff2f1c/dms3rep/multi/opt/Frame+1171275952-a56ad42b-1920w.png",
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
            { type: "page", key: "link", displayer: "Card Link", value: "" },
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
              displayer: "Video / Image",
              value: {
                type: "video",
                url: "https://vid.cdn-website.com/a8ff2f1c/videos/AWajF0QTiOJfKkVco7PK_Permission-v.mp4",
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
            { type: "page", key: "link", displayer: "Card Link", value: "" },
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
              displayer: "Video / Image",
              value: {
                type: "image",
                url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1440&auto=format&fit=crop",
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
            { type: "page", key: "link", displayer: "Card Link", value: "" },
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
              displayer: "Video / Image",
              value: {
                type: "image",
                url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1440&auto=format&fit=crop",
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
            { type: "page", key: "link", displayer: "Card Link", value: "" },
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
              displayer: "Video / Image",
              value: {
                type: "image",
                url: "https://images.unsplash.com/photo-1528784351875-d797d86873a1?q=80&w=1440&auto=format&fit=crop",
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
            { type: "page", key: "link", displayer: "Card Link", value: "" },
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
              displayer: "Video / Image",
              value: {
                type: "image",
                url: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1440&auto=format&fit=crop",
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
            { type: "page", key: "link", displayer: "Card Link", value: "" },
          ],
        },
      ],
    });

    this.addProp({
      type: "icon",
      key: "previousArrow",
      displayer: "Previous Arrow Icon",
      value: "BsArrowLeftCircle",
    });
    this.addProp({
      type: "icon",
      key: "nextArrow",
      displayer: "Next Arrow Icon",
      value: "BsArrowRightCircle",
    });

    this.responsive = [
      { breakpoint: 1280, settings: { slidesToShow: 3, dots: false } },
      { breakpoint: 1024, settings: { slidesToShow: 2, dots: false } },
      { breakpoint: 640, settings: { slidesToShow: 1, dots: false } },
    ];

    this.settings = {
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      speed: 620,
      cssEase: "cubic-bezier(.22,.61,.36,1)",
      edgeFriction: 0.18,
      swipeToSlide: true,
      touchThreshold: 12,
      waitForAnimate: false,
      useCSS: true,
      useTransform: true,
      swipe: true,
      autoplay: false,
      variableWidth: true,
      responsive: this.responsive,
    };
  }

  static getName(): string {
    return "Slider 12";
  }

  render() {
    const items = this.castToObject<Card[]>("slider")?.filter(Boolean) ?? [];
    const itemCount = items.length;
    const prevMedia = this.getPropValue("previousArrow");
    const nextMedia = this.getPropValue("nextArrow");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const hasTitle = this.castToString(title);
    const hasDesc = this.castToString(description);
    const showSlider = itemCount > 0;
    const bgUrl = this.getPropValue("background-image")?.url || "";
    const showHeader = hasTitle || hasDesc;
    const showArrows = itemCount > 1 && (prevMedia || nextMedia);

    return (
      <div ref={this.containerRef} className={this.decorateCSS("container")}>
        <Base.Container
          className={this.decorateCSS("upper-container")}
          {...(bgUrl ? { style: { backgroundImage: `url(${bgUrl})` } } : {})}
        >
          <Base.MaxContent className={this.decorateCSS("max-content")}>
            {showHeader && (
              <Base.VerticalContent
                className={this.decorateCSS("vertical-content")}
              >
                <div className={this.decorateCSS("header")}>
                  <Base.VerticalContent
                    className={this.decorateCSS("header-content")}
                  >
                    {hasTitle && (
                      <Base.SectionTitle className={this.decorateCSS("title")}>
                        {title}
                      </Base.SectionTitle>
                    )}
                    {hasDesc && (
                      <Base.SectionDescription
                        className={this.decorateCSS("description")}
                      >
                        {description}
                      </Base.SectionDescription>
                    )}

                    {showArrows && (
                      <div className={this.decorateCSS("arrows-wrap")}>
                        <div className={this.decorateCSS("arrows")}>
                          <Base.Icon
                            name={prevMedia}
                            propsIcon={{
                              className: this.decorateCSS("prevArrow"),
                              onClick: () =>
                                this.sliderRef.current?.slickPrev(),
                            }}
                          />
                          <Base.Icon
                            name={nextMedia}
                            propsIcon={{
                              className: this.decorateCSS("nextArrow"),
                              onClick: () =>
                                this.sliderRef.current?.slickNext(),
                            }}
                          />
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
          {showSlider && (
            <>
              <div className={this.decorateCSS("slider-parent")}>
                <ComposerSlider ref={this.sliderRef} {...this.settings}>
                  {items.map((item, i) => {
                    const isWideDesktop = i % 3 === 2;
                    const media = item.media;
                    const mediaType =
                      media?.type ?? (item.image ? "image" : undefined);
                    const url = media?.url ?? item.image ?? "";
                    const hasMedia = mediaType && url;
                    const rawPath = item.link ?? "";
                    const hasCardDesc = this.castToString(item.description);
                    const hasHeaderText = this.castToString(item.header);
                    const textClassName =
                      this.decorateCSS("text") +
                      (!hasMedia
                        ? " " + this.decorateCSS("text-centered")
                        : "");

                    const CardInner = (
                      <div
                        className={this.decorateCSS("card")}
                        onMouseDown={(e) => e.preventDefault()}
                      >
                        {hasMedia && (
                          <div className={this.decorateCSS("media")}>
                            {mediaType === "video" ? (
                              <VideoPlayer
                                src={url}
                                className={this.decorateCSS("video")}
                              />
                            ) : (
                              <img
                                src={url}
                                alt=""
                                className={this.decorateCSS("image")}
                                draggable={false}
                                onDragStart={(e) => e.preventDefault()}
                              />
                            )}
                          </div>
                        )}

                        {(hasHeaderText || hasCardDesc) && (
                          <div className={textClassName}>
                            {hasHeaderText && (
                              <Base.H4 className={this.decorateCSS("header")}>
                                {item.header}
                              </Base.H4>
                            )}
                            {hasCardDesc && (
                              <div className={this.decorateCSS("desc")}>
                                <Base.P>{item.description}</Base.P>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );

                    const slideClasses = [
                      this.decorateCSS("slide"),
                      isWideDesktop && this.decorateCSS("wide"),
                      i === 0 && this.decorateCSS("first-slide"),
                    ]
                      .filter(Boolean)
                      .join(" ");

                    return rawPath ? (
                      <ComposerLink key={i} path={rawPath} isFullWidth={false}>
                        <div className={slideClasses}>{CardInner}</div>
                      </ComposerLink>
                    ) : (
                      <div key={i} className={slideClasses}>
                        {CardInner}
                      </div>
                    );
                  })}
                </ComposerSlider>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Slider12;
