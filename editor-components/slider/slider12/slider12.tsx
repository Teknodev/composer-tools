"use client";

import * as React from "react";
import { BaseSlider } from "../../EditorComponent";
import styles from "./slider12.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

/* ==================== Video Player Component ==================== */
const VideoPlayer = React.memo(
  ({
    src,
    className,
    onReady,
    forwardedRef,
  }: {
    src: string;
    className?: string;
    onReady?: () => void;
    forwardedRef?: React.Ref<HTMLVideoElement | null>;
  }) => {
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const attemptedPlay = React.useRef(false);

    React.useImperativeHandle(forwardedRef, () => videoRef.current);

    React.useEffect(() => {
      const videoEl = videoRef.current;
      if (!videoEl) return;

      videoEl.muted = true;
      videoEl.loop = true;
      videoEl.playsInline = true;
      videoEl.autoplay = true;
      videoEl.preload = "auto";

      const attributes = {
        muted: "true",
        playsinline: "true",
        autoplay: "true",
        preload: "auto",
      };
      Object.entries(attributes).forEach(([attr, val]) =>
        videoEl.setAttribute(attr, val)
      );

      const tryPlay = () => {
        setTimeout(() => {
          if (videoEl && document.body.contains(videoEl)) {
            videoEl.play?.().catch(() => {
              if (!attemptedPlay.current) {
                attemptedPlay.current = true;
                setTimeout(() => videoEl.play?.().catch(() => {}), 120);
              }
            });
          }
        }, 10);
      };

      const handleLoaded = () => {
        onReady?.();
        tryPlay();
      };

      videoEl.addEventListener("loadedmetadata", handleLoaded);
      videoEl.addEventListener("loadeddata", handleLoaded);

      videoEl.load();
      tryPlay();

      return () => {
        videoEl.removeEventListener("loadedmetadata", handleLoaded);
        videoEl.removeEventListener("loadeddata", handleLoaded);
        try {
          videoEl.pause();
        } catch {}
      };
    }, [src, onReady]);

    return (
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
        className={className}
      />
    );
  }
);

const SlideCard = React.memo(
  ({
    url,
    isVideo,
    header,
    description,
    cardClassName,
    mediaClassName,
    contentClassName,
    titleClassName,
    descClassName,
  }: {
    url: string;
    isVideo: boolean;
    header: string;
    description: string;
    cardClassName: string;
    mediaClassName: string;
    contentClassName: string;
    titleClassName: string;
    descClassName: string;
  }) => {
    return (
      <div className={cardClassName}>
        <div className={mediaClassName}>
          {isVideo ? (
            <VideoPlayer src={url} />
          ) : (
            <img
              src={url || "/placeholder.svg"}
              alt=""
              decoding="async"
              loading="lazy"
            />
          )}
        </div>

        {(header || description) && (
          <Base.VerticalContent className={contentClassName}>
            {header && <Base.H2 className={titleClassName}>{header}</Base.H2>}
            {description && (
              <Base.P className={descClassName}>{description}</Base.P>
            )}
          </Base.VerticalContent>
        )}
      </div>
    );
  }
);

/* ==================== Slider Component ==================== */
class Slider12 extends BaseSlider {
  private resizeTimer?: number;
  private transitionTimer?: number;
  private sliderObserver?: ResizeObserver;
  private isTransitioning = false;
  private dragStartTime = 0;
  private lastSlideChangeTime = 0;
  private isMobileOrTablet = false;
  private lastDeviceCheck = 0;

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
      displayer: "description",
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
        this.createSliderItem({
          media: {
            type: "video",
            url: "https://vid.cdn-website.com/a8ff2f1c/videos/E2xnAgaRzmoErKzfdTDC_upload+images+v2-v.mp4",
          },
          header: "Onboard effortlessly",
          description:
            "Leverage Duda's AI Content Collection form or White Label AI Site Builder to make client onboarding painless (finally).",
        }),
        this.createSliderItem({
          media: {
            type: "video",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689dc6a536675f002dbbfbfe?alt=media",
          },
          header: "Permission required",
          description:
            "Lock access to specific features behind ultra-customizable permissions for both client and team accounts.",
        }),
        this.createSliderItem({
          media: {
            type: "video",
            url: "https://vid.cdn-website.com/a8ff2f1c/videos/AWajF0QTiOJfKkVco7PK_Permission-v.mp4",
          },
          header: "Hands-off hand-offs",
          description:
            "Grant your clients white label access to the editor. Don't worry, they won't receive any branded communications from Duda. Your customers are your own.",
        }),
        this.createSliderItem({
          media: {
            type: "image",
            url: "https://lirp.cdn-website.com/a8ff2f1c/dms3rep/multi/opt/Frame+1171275952-a56ad42b-1920w.png",
          },
          header: "Collabor-elated",
          description:
            "Work alongside clients and teammates with in-line comment threads that support image and file uploads, right where you need them.",
        }),
        this.createSliderItem({
          media: {
            type: "image",
            url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1440&auto=format&fit=crop",
          },
          header: "AI assist",
          description:
            "Draft content, summarize feedback and speed up routine tasks.",
        }),
        this.createSliderItem({
          media: {
            type: "image",
            url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1440&auto=format&fit=crop",
          },
          header: "File uploads",
          description:
            "Collect files in one place with version history and previews.",
        }),
        this.createSliderItem({
          media: {
            type: "image",
            url: "https://images.unsplash.com/photo-1528784351875-d797d86873a1?q=80&w=1440&auto=format&fit=crop",
          },
          header: "Custom branding",
          description:
            "Keep everything on-brand with logos, colors and typography.",
        }),
      ],
    });
    this.addProp({
      type: "media",
      key: "previousArrow",
      displayer: "Previous Arrow Icon",
      value: { type: "icon", name: "FiArrowLeft" },
      additionalParams: { availableTypes: ["icon"] },
    });
    this.addProp({
      type: "media",
      key: "nextArrow",
      displayer: "Next Arrow Icon",
      value: { type: "icon", name: "FiArrowRight" },
      additionalParams: { availableTypes: ["icon"] },
    });

    this.setComponentState("current", 0);
    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("is-transitioning", false);
  }

  static getName(): string {
    return "Slider 12";
  }

  private createSliderItem(item: {
    media: any;
    header: string;
    description: string;
  }) {
    return [
      {
        type: "media",
        key: "media",
        displayer: "Video / Image",
        value: item.media,
        additionalParams: { availableTypes: ["video", "image"] },
      },
      {
        type: "string",
        key: "header",
        displayer: "Title",
        value: item.header,
      },
      {
        type: "string",
        key: "description",
        displayer: "Description",
        value: item.description,
      },
      { type: "page", key: "link", displayer: "Card Link", value: "" },
    ];
  }

  private items() {
    return this.castToObject<any[]>("slider").filter(
      (item) => item?.media || (item.value && item.value.media)
    );
  }

  private getMediaInfo(val: any) {
    if (!val) return { url: "", isVideo: false };

    const media = val.value ?? val;
    const url =
      media?.url ??
      media?.src ??
      (Array.isArray(media?.sources) ? media.sources[0]?.src : "");

    const isVideo =
      !!url && (media?.type === "video" || /\.(mp4|webm|ogg)$/i.test(url));

    return { url, isVideo };
  }

  private getLinkPath(raw: any): string {
    if (!raw) return "";
    return typeof raw === "string"
      ? raw
      : raw?.path ?? raw?.url ?? raw?.href ?? "";
  }

  private getSlidesToShow(): number {
    const slider = this.getComponentState("slider-ref")?.current;
    const windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;

    let defaultValue = 3;
    if (windowWidth > 0 && windowWidth <= 1024) {
      defaultValue = 1;
    } else if (windowWidth > 0 && windowWidth <= 1440) {
      defaultValue = 2;
    }

    return slider?.innerSlider?.props?.slidesToShow ?? defaultValue;
  }

  private getNavigationState(current: number, totalSlides: number) {
    const slidesToShow = this.getSlidesToShow();
    return {
      canPrev: current > 0,
      canNext: current < Math.max(0, totalSlides - slidesToShow),
    };
  }

  private checkDeviceType() {
    // Cache device check to avoid layout thrashing
    const now = Date.now();
    if (now - this.lastDeviceCheck < 1000) return this.isMobileOrTablet;

    this.lastDeviceCheck = now;
    const windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    this.isMobileOrTablet = windowWidth > 0 && windowWidth <= 1024;
    return this.isMobileOrTablet;
  }

  private handleBeforeChange = (oldIndex: number, newIndex: number) => {
    if (this.isTransitioning) return;

    this.isTransitioning = true;

    // Only update component state if not on mobile/tablet to prevent re-renders
    if (!this.checkDeviceType()) {
      this.setComponentState("is-transitioning", true);
    }

    const container = document.querySelector(
      `.${this.decorateCSS("slider-parent")}`
    );

    if (container) {
      container.setAttribute("data-transitioning", "true");
      container.setAttribute(
        "data-direction",
        newIndex > oldIndex ? "next" : "prev"
      );
    }
  };

  private handleAfterChange = (index: number) => {
    // Update the current slide index without triggering re-render on mobile
    if (!this.checkDeviceType()) {
      this.setComponentState("current", index);
    } else {
      // For mobile, just update the internal property without state change
      this.componentState["current"] = index;
    }

    this.lastSlideChangeTime = Date.now();

    if (this.transitionTimer) window.clearTimeout(this.transitionTimer);
    this.transitionTimer = window.setTimeout(() => {
      this.isTransitioning = false;

      // Only update state on non-mobile devices
      if (!this.checkDeviceType()) {
        this.setComponentState("is-transitioning", false);
      }

      const container = document.querySelector(
        `.${this.decorateCSS("slider-parent")}`
      );
      if (container) {
        container.removeAttribute("data-transitioning");
        container.removeAttribute("data-direction");
      }

      // Optimize video playback management for mobile
      if (!this.checkDeviceType()) {
        this.manageVideoPlayback();
      }
    }, 300) as unknown as number;
  };

  private handleSwipeStart = () => {
    this.dragStartTime = Date.now();
    const container = document.querySelector(
      `.${this.decorateCSS("slider-parent")}`
    );
    if (container) {
      container.setAttribute("data-swiping", "true");
    }
  };

  private handleSwipeEnd = () => {
    const container = document.querySelector(
      `.${this.decorateCSS("slider-parent")}`
    );
    if (container) {
      container.removeAttribute("data-swiping");
    }
  };

  componentDidMount(): void {
    window.addEventListener("resize", this.handleResize);
    this.manageVideoPlayback();

    this.sliderObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect) {
          const slider = this.getComponentState("slider-ref").current;
          if (slider && typeof slider.slickGoTo === "function") {
            const current = this.getComponentState("current") || 0;
            slider.slickGoTo(current, true);
          }
        }
      }
    });

    const sliderElement = document.querySelector(
      `.${this.decorateCSS("slider-parent")}`
    );
    if (sliderElement && this.sliderObserver) {
      this.sliderObserver.observe(sliderElement);
    }
  }

  componentWillUnmount(): void {
    window.removeEventListener("resize", this.handleResize);
    if (this.resizeTimer) window.clearTimeout(this.resizeTimer);
    if (this.transitionTimer) window.clearTimeout(this.transitionTimer);

    if (this.sliderObserver) {
      this.sliderObserver.disconnect();
    }
  }

  private handleResize = () => {
    const container = document.querySelector(
      `.${this.decorateCSS("container")}`
    ) as HTMLElement | null;
    if (container) container.setAttribute("data-resizing", "true");

    if (this.resizeTimer) window.clearTimeout(this.resizeTimer);
    this.resizeTimer = window.setTimeout(() => {
      if (container) container.removeAttribute("data-resizing");
    }, 120) as unknown as number;
  };

  private navigateToSlide = (index: number) => {
    const slider = this.getComponentState("slider-ref").current;
    if (!slider) return;

    const totalSlides = this.items().length;
    const slidesToShow = this.getSlidesToShow();
    const maxStartIndex = Math.max(0, totalSlides - slidesToShow);
    const targetIndex = Math.min(index, maxStartIndex);

    slider.slickGoTo?.(targetIndex);
  };

  private manageVideoPlayback = () => {
    // Skip video management on mobile/tablet to improve performance
    if (this.checkDeviceType()) return;

    requestAnimationFrame(() => {
      const sliderElement = document.querySelector(
        `.${this.decorateCSS("slider-parent")}`
      );
      if (!sliderElement) return;

      const activeSlides = Array.from(
        sliderElement.querySelectorAll(".slick-slide.slick-active")
      );

      const allVideos = Array.from(
        sliderElement.querySelectorAll("video")
      ) as HTMLVideoElement[];

      if (!allVideos.length) return;

      // Use Set for faster lookups
      const activeVideoSet = new Set<HTMLVideoElement>();

      activeSlides.forEach((slide) => {
        const videos = Array.from(
          slide.querySelectorAll("video")
        ) as HTMLVideoElement[];
        videos.forEach((video) => activeVideoSet.add(video));
      });

      // Batch video operations to minimize reflows
      const toPlay: HTMLVideoElement[] = [];
      const toPause: HTMLVideoElement[] = [];

      allVideos.forEach((video) => {
        if (activeVideoSet.has(video)) {
          toPlay.push(video);
        } else {
          toPause.push(video);
        }
      });

      // Execute batched video operations
      requestAnimationFrame(() => {
        toPlay.forEach((video) => {
          video.muted = true;
          video.loop = true;
          video.playsInline = true;
          video.play?.().catch(() => {});
        });

        toPause.forEach((video) => {
          try {
            video.pause();
          } catch {}
        });
      });
    });
  };

  render() {
    const items = this.items();
    const totalSlides = items.length;

    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const current = this.getComponentState("current") ?? 0;

    const { canPrev, canNext } = this.getNavigationState(current, totalSlides);
    const sliderRef = this.getComponentState("slider-ref");

    const prevIcon = this.getPropValue("previousArrow");
    const nextIcon = this.getPropValue("nextArrow");
    const prevIconName =
      typeof prevIcon === "string"
        ? prevIcon
        : prevIcon?.name || prevIcon?.value?.name || "FiArrowLeft";
    const nextIconName =
      typeof nextIcon === "string"
        ? nextIcon
        : nextIcon?.name || nextIcon?.value?.name || "FiArrowRight";

    const bgImage = this.getPropValue("background-image");
    const bgUrl =
      typeof bgImage === "string"
        ? bgImage
        : bgImage?.value?.url || bgImage?.url || "";
    const containerStyle = bgUrl
      ? {
          backgroundImage: `url("${bgUrl}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }
      : undefined;

    const sliderSettings = {
      dots: false,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: false,
      centerMode: false,
      arrows: false,
      speed: 400,
      cssEase: "cubic-bezier(0.2, 0, 0.15, 1)",
      waitForAnimate: true,
      adaptiveHeight: false,
      draggable: true,
      swipe: true,
      touchMove: true,
      swipeToSlide: true,
      touchThreshold: 5,
      useCSS: true,
      useTransform: true,
      accessibility: true,
      autoplay: false,
      beforeChange: this.handleBeforeChange,
      afterChange: this.handleAfterChange,
      swipeStart: this.handleSwipeStart,
      swipeEnd: this.handleSwipeEnd,
      pauseOnHover: true,
      pauseOnFocus: true,
      lazyLoad: "ondemand",
      responsive: [
        {
          breakpoint: 1440,
          settings: { slidesToShow: 2, variableWidth: false },
        },
        {
          breakpoint: 1024,
          settings: { slidesToShow: 1, variableWidth: false },
        },
        {
          breakpoint: 1280,
          settings: { slidesToShow: 1, variableWidth: false },
        },
        {
          breakpoint: 960,
          settings: { slidesToShow: 1, variableWidth: false },
        },
      ],
    };

    const slidesToShowNow = this.getSlidesToShow();
    const isLastSlideSet =
      current >= Math.max(0, totalSlides - slidesToShowNow);

    const carouselClassName = `${this.decorateCSS("carousel")} ${
      isLastSlideSet ? this.decorateCSS("last-slide-visible") : ""
    }`;

    const cardClassName = this.decorateCSS("card");
    const mediaClassName = this.decorateCSS("media-container");
    const contentClassName = this.decorateCSS("content-container");
    const titleClassName = this.decorateCSS("content-title");
    const descClassName = this.decorateCSS("content-description");

    return (
      <Base.Container
        className={this.decorateCSS("container")}
        style={containerStyle}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(this.castToString(title) || this.castToString(description)) && (
            <div className={this.decorateCSS("header")}>
              <Base.VerticalContent
                className={this.decorateCSS("header-content")}
              >
                {this.castToString(title) && (
                  <Base.SectionTitle className={this.decorateCSS("title")}>
                    {title}
                  </Base.SectionTitle>
                )}
                {this.castToString(description) && (
                  <Base.SectionDescription
                    className={this.decorateCSS("description")}
                  >
                    {description}
                  </Base.SectionDescription>
                )}

                <div className={this.decorateCSS("arrows")}>
                  <Base.Icon
                    name={prevIconName}
                    propsIcon={{
                      className: this.decorateCSS("prevArrow"),
                      role: "button",
                      tabIndex: 0,
                      "aria-label": "Previous",
                      "aria-disabled": !canPrev,
                      onClick: () => {
                        if (canPrev) {
                          sliderRef.current?.slickPrev();
                        }
                      },
                    }}
                  />
                  <Base.Icon
                    name={nextIconName}
                    propsIcon={{
                      className: this.decorateCSS("nextArrow"),
                      role: "button",
                      tabIndex: 0,
                      "aria-label": "Next",
                      "aria-disabled": !canNext,
                      onClick: () => {
                        if (canNext) {
                          sliderRef.current?.slickNext();
                        }
                      },
                    }}
                  />
                </div>
              </Base.VerticalContent>
            </div>
          )}

          <div
            className={this.decorateCSS("slider-parent")}
            data-last-slide-visible={isLastSlideSet ? "true" : "false"}
          >
            {totalSlides > 0 && (
              <ComposerSlider
                {...sliderSettings}
                ref={sliderRef}
                className={carouselClassName}
              >
                {items.map((item: any, index: number) => {
                  const mediaVal = item.media ?? item?.value ?? item;
                  const { url, isVideo } = this.getMediaInfo(mediaVal);
                  const linkPath = this.getLinkPath((item as any).link);

                  const header = this.castToString(item.header);
                  const description = this.castToString(item.description);

                  const CardContent = (
                    <SlideCard
                      url={url}
                      isVideo={isVideo}
                      header={header}
                      description={description}
                      cardClassName={cardClassName}
                      mediaClassName={mediaClassName}
                      contentClassName={contentClassName}
                      titleClassName={titleClassName}
                      descClassName={descClassName}
                    />
                  );

                  return (
                    <div key={`slide-${index}`}>
                      {linkPath ? (
                        <ComposerLink path={linkPath}>
                          {CardContent}
                        </ComposerLink>
                      ) : (
                        CardContent
                      )}
                    </div>
                  );
                })}
              </ComposerSlider>
            )}

            {totalSlides > 0 && (
              <div className={this.decorateCSS("dot-nav")}>
                {items.map((_, i) => (
                  <button
                    key={i}
                    className={this.decorateCSS("dot")}
                    aria-current={i === current ? "true" : "false"}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => this.navigateToSlide(i)}
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

export default Slider12;
