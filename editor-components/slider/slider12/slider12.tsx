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

      // Configure video properties
      (videoEl as any).muted = true;
      (videoEl as any).loop = true;
      (videoEl as any).playsInline = true;
      (videoEl as any).autoplay = true;

      // Set required attributes
      const attributes = {
        muted: "true",
        playsinline: "true",
        autoplay: "true",
        preload: "auto",
      };
      Object.entries(attributes).forEach(([attr, val]) =>
        videoEl.setAttribute(attr, val)
      );

      // Handle play attempts
      const tryPlay = () => {
        const playPromise = videoEl.play?.();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(() => {
            if (!attemptedPlay.current) {
              attemptedPlay.current = true;
              setTimeout(() => videoEl.play?.().catch(() => {}), 120);
            }
          });
        }
      };

      // Event handlers
      const handleLoaded = () => {
        requestAnimationFrame(() => onReady?.());
        tryPlay();
      };

      videoEl.addEventListener("loadedmetadata", handleLoaded);
      videoEl.addEventListener("loadeddata", handleLoaded);
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

/* ==================== Slider Component ==================== */
class Slider12 extends BaseSlider {
  private resizeTimer?: number;

  constructor(props?: any) {
    super(props, styles);

    // Define component props
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

    // Initialize state
    this.setComponentState("current", 0);
    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("is-transitioning", false);
  }

  static getName(): string {
    return "Slider 12";
  }

  // Helper method to create slider items consistently
  private createSliderItem(item: {
    media: any;
    header: string;
    description: string;
  }) {
    return {
      type: "object",
      key: "item",
      displayer: "Slider Item",
      value: [
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
      ],
    };
  }

  // Extract slider items with optimized filtering
  private items() {
    return this.castToObject<any[]>("slider").filter(
      (item) => item?.media || (item.value && item.value.media)
    );
  }

  // Extract media URL and type
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

  // Extract link path
  private getLinkPath(raw: any): string {
    if (!raw) return "";
    return typeof raw === "string"
      ? raw
      : raw?.path ?? raw?.url ?? raw?.href ?? "";
  }

  // Get number of slides shown (FIXED ordering of breakpoints)
  private getSlidesToShow(): number {
    const slider = this.getComponentState("slider-ref")?.current;
    const windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;

    // Default values by screen size (<=1024:1, <=1440:2, otherwise 3)
    let defaultValue = 3;
    if (windowWidth > 0 && windowWidth <= 1024) {
      defaultValue = 1;
    } else if (windowWidth > 0 && windowWidth <= 1440) {
      defaultValue = 2;
    }

    return slider?.innerSlider?.props?.slidesToShow ?? defaultValue;
  }

  // Determine if prev/next buttons should be enabled
  private getNavigationState(current: number, totalSlides: number) {
    const slidesToShow = this.getSlidesToShow();
    return {
      canPrev: current > 0,
      canNext: current < Math.max(0, totalSlides - slidesToShow),
    };
  }

  // Lifecycle methods
  componentDidMount(): void {
    window.addEventListener("resize", this.handleResize);
    this.manageVideoPlayback();
  }

  componentWillUnmount(): void {
    window.removeEventListener("resize", this.handleResize);
    if (this.resizeTimer) window.clearTimeout(this.resizeTimer);
  }

  // Handle resize with debounce
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

  // Navigate to specific dot
  private navigateToSlide = (index: number) => {
    const slider = this.getComponentState("slider-ref").current;
    if (!slider) return;

    const totalSlides = this.items().length;
    const slidesToShow = this.getSlidesToShow();
    const maxStartIndex = Math.max(0, totalSlides - slidesToShow);
    const targetIndex = Math.min(index, maxStartIndex);

    slider.slickGoTo?.(targetIndex);
  };

  // Optimize video playback based on visible slides
  private manageVideoPlayback = () => {
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
      const activeVideos: HTMLVideoElement[] = [];

      // Play videos in active slides
      activeSlides.forEach((slide) => {
        const videos = Array.from(
          slide.querySelectorAll("video")
        ) as HTMLVideoElement[];
        videos.forEach((video) => {
          (video as any).muted = true;
          (video as any).loop = true;
          (video as any).playsInline = true;
          (video as any).autoplay = true;
          video.play?.().catch(() => {});
          activeVideos.push(video);
        });
      });

      // Pause videos in inactive slides
      allVideos
        .filter((video) => !activeVideos.includes(video))
        .forEach((video) => {
          try {
            video.pause();
          } catch {}
        });
    });
  };

  render() {
    const items = this.items();
    const totalSlides = items.length;

    // Get component props
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const current = this.getComponentState("current") ?? 0;

    const { canPrev, canNext } = this.getNavigationState(current, totalSlides);
    const sliderRef = this.getComponentState("slider-ref");

    // Process arrow icons
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

    // Process background image
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

    // Slider settings
    const sliderSettings = {
      dots: false,
      infinite: false,
      slidesToShow: 3, // Default for large screens
      slidesToScroll: 1,
      variableWidth: false,
      centerMode: false,
      arrows: false,
      cssEase: "cubic-bezier(.16,1,.3,1)",
      speed: 620,
      waitForAnimate: false,
      adaptiveHeight: false,
      draggable: true,
      swipe: true,
      touchMove: true,
      accessibility: true,
      autoplay: false,
      swipeToSlide: true,
      edgeFriction: 0.18,
      beforeChange: () => this.setComponentState("is-transitioning", true),
      afterChange: (index: number) => {
        this.setComponentState("current", index);
        this.setComponentState("is-transitioning", false);
        this.manageVideoPlayback();
      },
      responsive: [
        {
          breakpoint: 1440, // Laptop
          settings: { slidesToShow: 2, variableWidth: false },
        },
        {
          breakpoint: 1024,
          settings: { slidesToShow: 1, variableWidth: false },
        },
        {
          breakpoint: 640,
          settings: { slidesToShow: 1, variableWidth: false },
        },
      ],
    };

    // Use real-time slidesToShow value to detect last set (FIX)
    const slidesToShowNow = this.getSlidesToShow();
    const isLastSlideSet =
      current >= Math.max(0, totalSlides - slidesToShowNow);

    const carouselClassName = `${this.decorateCSS("carousel")} ${
      isLastSlideSet ? this.decorateCSS("last-slide-visible") : ""
    }`;

    return (
      <Base.Container
        className={this.decorateCSS("container")}
        style={containerStyle}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {/* Header Section */}
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

                {/* Navigation Arrows */}
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

          {/* Slider Section */}
          <div
            className={this.decorateCSS("slider-parent")}
            data-last-slide-visible={isLastSlideSet ? "true" : "false"}
          >
            {totalSlides > 0 && (
              <ComposerSlider
                {...sliderSettings}
                ref={sliderRef}
                className={carouselClassName}
                data-transitioning={
                  this.getComponentState("is-transitioning")
                    ? "true"
                    : undefined
                }
              >
                {items.map((item: any, index: number) => {
                  // Extract item data
                  const mediaVal = item.media ?? item?.value ?? item;
                  const { url, isVideo } = this.getMediaInfo(mediaVal);
                  const linkPath = this.getLinkPath((item as any).link);
                  const eager = index < 2 && !isVideo;

                  // Card content
                  const CardContent = (
                    <div className={this.decorateCSS("card")}>
                      <div className={this.decorateCSS("media-container")}>
                        {isVideo ? (
                          <VideoPlayer src={url} />
                        ) : (
                          <img
                            src={url}
                            alt=""
                            loading={eager ? "eager" : "lazy"}
                            decoding="async"
                          />
                        )}
                      </div>

                      {(this.castToString(item.header) ||
                        this.castToString(item.description)) && (
                        <Base.VerticalContent
                          className={this.decorateCSS("content-container")}
                        >
                          {this.castToString(item.header) && (
                            <Base.H2
                              className={this.decorateCSS("content-title")}
                            >
                              {item.header}
                            </Base.H2>
                          )}
                          {this.castToString(item.description) && (
                            <Base.P
                              className={this.decorateCSS(
                                "content-description"
                              )}
                            >
                              {item.description}
                            </Base.P>
                          )}
                        </Base.VerticalContent>
                      )}
                    </div>
                  );

                  // Wrap with link if provided
                  return (
                    <div key={index}>
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

            {/* Dot Navigation (Mobile) */}
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
