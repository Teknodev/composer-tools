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
  onReady?: () => void;
  forwardedRef?: React.Ref<HTMLVideoElement>;
};

const VideoPlayer = React.memo(function VideoPlayer({
  src,
  className,
  onReady,
  forwardedRef,
}: VideoPlayerProps) {
  const innerRef = React.useRef<HTMLVideoElement>(null);
  const triedRef = React.useRef(false);
  const [failed, setFailed] = React.useState(false);

  React.useImperativeHandle(
    forwardedRef,
    () => innerRef.current as unknown as HTMLVideoElement
  );

  React.useEffect(() => {
    setFailed(false);
  }, [src]);

  React.useEffect(() => {
    const el = innerRef.current;
    if (!el) return;

    el.muted = true;
    el.loop = true;
    (el as any).playsInline = true;
    el.setAttribute("muted", "true");
    el.setAttribute("playsinline", "true");
    el.setAttribute("preload", "auto");

    const tryPlay = () => {
      const p = el.play?.();
      if (p && typeof p.catch === "function") {
        p.catch(() => {
          if (!triedRef.current) {
            triedRef.current = true;
            setTimeout(() => el.play?.().catch(() => {}), 150);
          }
        });
      }
    };

    const onLoaded = () => {
      onReady?.();
      tryPlay();
    };

    const onError = () => {
      setFailed(true);
    };

    el.addEventListener("loadedmetadata", onLoaded);
    el.addEventListener("loadeddata", onLoaded);
    el.addEventListener("error", onError);
    tryPlay();

    return () => {
      el.removeEventListener("loadedmetadata", onLoaded);
      el.removeEventListener("loadeddata", onLoaded);
      el.removeEventListener("error", onError);
      try {
        if (!el.paused) el.pause();
      } catch {}
    };
  }, [src, onReady]);

  if (failed) {
    return (
      <div
        className={className}
        style={{ display: "grid", placeItems: "center" }}
      >
        <span style={{ fontSize: 12, opacity: 0.7 }}>Video yüklenemedi.</span>
      </div>
    );
  }

  return (
    <video
      ref={innerRef}
      autoPlay
      muted
      playsInline
      loop
      preload="auto"
      className={className}
      draggable={false}
      onDragStart={(e) => e.preventDefault()}
      crossOrigin="anonymous"
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
  private currentIndex = 0;
  private dragging = false;

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
                "Grant your clients white label access to the editor. Don’t worry, they won’t receive any branded communications from Duda. Your customers are your own.",
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
      { breakpoint: 640, settings: { slidesToShow: 1, dots: true } },
    ];

    this.settings = {
      dots: false,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: false,
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
      onSwipe: () => {
        this.dragging = true;
        window.setTimeout(() => (this.dragging = false), 180);
      },
      afterChange: (index: number) => {
        this.currentIndex = index;
        this.playOnlyVideoAt(index);
      },
      responsive: this.responsive,
    };
  }

  static getName(): string {
    return "Slider 12";
  }

  componentDidMount(): void {
    this.currentIndex = 0;
    this.playOnlyVideoAt(this.currentIndex);
  }

  componentWillUnmount(): void {
    const root = this.containerRef.current ?? document;
    const vids = root.querySelectorAll("video") as NodeListOf<HTMLVideoElement>;
    vids.forEach((v) => {
      try {
        if (!v.paused) v.pause();
      } catch {}
    });
  }

  private playOnlyVideoAt(index: number) {
    const root = this.containerRef.current ?? document;
    const slideSelector = `.${this.decorateCSS("slide")}`;
    const allVideos = root.querySelectorAll<HTMLVideoElement>(
      `${slideSelector} video`
    );
    allVideos.forEach((v, i) => {
      try {
        if (i === index) {
          setTimeout(() => v.play?.().catch(() => {}), 120);
        } else {
          if (!v.paused) v.pause();
          v.currentTime = 0;
        }
      } catch {}
    });
  }

  private SafeWrap: React.FC<React.PropsWithChildren<{ href?: string }>> = ({
    href,
    children,
  }) => {
    const hasLink = Boolean(href && href.trim());
    const onClick: React.MouseEventHandler = (e) => {
      if (this.dragging) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    return hasLink ? (
      <ComposerLink path={href!} isFullWidth={false} {...({ onClick } as any)}>
        {children}
      </ComposerLink>
    ) : (
      <>{children}</>
    );
  };

  render() {
    const rawItems = this.castToObject<Card[]>("slider");
    const items = rawItems
      .filter((item) => item?.media || item?.image)
      .filter((item) => {
        const url = item?.media?.url || item?.image;
        return Boolean(url);
      });

    const itemCount = items.length;
    if (itemCount === 0) return null;

    const prevMedia = this.getPropValue("previousArrow");
    const nextMedia = this.getPropValue("nextArrow");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");

    const prevName =
      (typeof prevMedia === "string" && prevMedia) ||
      (prevMedia as any)?.name ||
      (prevMedia as any)?.value?.name;

    const nextName =
      (typeof nextMedia === "string" && nextMedia) ||
      (nextMedia as any)?.name ||
      (nextMedia as any)?.value?.name;

    const hasTitle = Boolean(this.castToString(title));
    const hasDesc = Boolean(this.castToString(description));
    const showHeader = hasTitle || hasDesc;
    const hasPrev = Boolean(prevName);
    const hasNext = Boolean(nextName);

    const showArrows = itemCount > 1 && (hasPrev || hasNext);

    const bg = this.getPropValue("background-image");
    const bgUrl = typeof bg === "string" ? bg : bg?.url ?? "";
    const hasBg = Boolean(bgUrl);

    const SafeWrap = this.SafeWrap;

    return (
      <div ref={this.containerRef}>
        <Base.Container
          className={this.decorateCSS("container")}
          {...(hasBg ? { style: { backgroundImage: `url(${bgUrl})` } } : {})}
        >
          <Base.MaxContent className={this.decorateCSS("max-content")}>
            {showHeader && (
              <Base.VerticalContent>
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
                  </Base.VerticalContent>
                </div>
              </Base.VerticalContent>
            )}

            {showArrows && (
              <div className={this.decorateCSS("slider-wrap")}>
                <div className={this.decorateCSS("arrows")}>
                  <Base.Icon
                    name={prevName}
                    propsIcon={{
                      className: this.decorateCSS("prevArrow"),
                      onClick: () => this.sliderRef.current?.slickPrev(),
                    }}
                  />
                  <Base.Icon
                    name={nextName}
                    propsIcon={{
                      className: this.decorateCSS("nextArrow"),
                      onClick: () => this.sliderRef.current?.slickNext(),
                    }}
                  />
                </div>
              </div>
            )}

            <div className={this.decorateCSS("slider-parent")}>
              <ComposerSlider ref={this.sliderRef} {...this.settings}>
                {items.map((item, i) => {
                  const isWideDesktop = i % 3 === 2;

                  const media = item.media;
                  const isVideo = media?.type === "video";
                  const url = media?.url || item.image || "";
                  const rawPath = (item.link ?? "").trim();

                  const hasHeaderText = Boolean(item.header);
                  const hasCardDesc = Boolean(item.description);

                  const CardInner = (
                    <div
                      className={this.decorateCSS("card")}
                      onMouseDown={(e) => e.preventDefault()}
                    >
                      <div className={this.decorateCSS("media")}>
                        {isVideo ? (
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

                      {(hasHeaderText || hasCardDesc) && (
                        <div className={this.decorateCSS("text")}>
                          {hasHeaderText && (
                            <div className={this.decorateCSS("header")}>
                              {item.header}
                            </div>
                          )}
                          {hasCardDesc && (
                            <div className={this.decorateCSS("desc")}>
                              {item.description}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );

                  return (
                    <div
                      key={i}
                      className={
                        this.decorateCSS("slide") +
                        (isWideDesktop ? " " + this.decorateCSS("wide") : "")
                      }
                    >
                      <SafeWrap href={rawPath}>{CardInner}</SafeWrap>
                    </div>
                  );
                })}
              </ComposerSlider>
            </div>
          </Base.MaxContent>
        </Base.Container>
      </div>
    );
  }
}

export default Slider12;
