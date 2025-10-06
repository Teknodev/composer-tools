import * as React from "react";
import { BaseSlider } from "../../EditorComponent";
import styles from "./slider12.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

/* ==================== Video ==================== */
type VideoPlayerProps = {
  src: string;
  className?: string;
  onReady?: () => void;
  forwardedRef?: React.Ref<HTMLVideoElement | null>;
};

function VideoPlayer({
  src,
  className,
  onReady,
  forwardedRef,
}: VideoPlayerProps) {
  const ref = React.useRef<HTMLVideoElement>(null);
  const triedRef = React.useRef(false);
  React.useImperativeHandle(forwardedRef, () => ref.current);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const setup = () => {
      el.muted = true;
      el.loop = true;
      (el as any).playsInline = true;
      el.autoplay = true;
      el.setAttribute("muted", "true");
      el.setAttribute("playsinline", "true");
      el.setAttribute("autoplay", "true");
      el.setAttribute("preload", "auto");
    };

    const tryPlay = () => {
      const p = el.play?.();
      if (p && typeof p.catch === "function") {
        p.catch(() => {
          if (!triedRef.current) {
            triedRef.current = true;
            setTimeout(() => el.play?.().catch(() => {}), 120);
          }
        });
      }
    };

    const onLoaded = () => {
      requestAnimationFrame(() => onReady?.());
      tryPlay();
    };

    setup();
    el.addEventListener("loadedmetadata", onLoaded);
    el.addEventListener("loadeddata", onLoaded);
    tryPlay();

    return () => {
      el.removeEventListener("loadedmetadata", onLoaded);
      el.removeEventListener("loadeddata", onLoaded);
      try {
        el.pause();
      } catch {}
    };
  }, [src, onReady]);

  return (
    <video
      ref={ref}
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

/* ==================== Types ==================== */
type Card = {
  video?: string;
  header: React.JSX.Element;
  description: React.JSX.Element;
  link: string;
};

class Slider12 extends BaseSlider {
  private resizeTimer?: number;
  private debug = false;
  private d = (...args: any[]) => {
    if (this.debug) console.log("[Slider12]", ...args);
  };

  constructor(props?: any) {
    super(props, styles);

    // -------- Editor Props (değişmedi) --------
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
                type: "video",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689dc6a536675f002dbbfbfe?alt=media",
              },
              additionalParams: { availableTypes: ["video", "image"] },
            },
            {
              type: "string",
              key: "header",
              displayer: "Title",
              value: "Permission required",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Lock access to specific features behind ultra-customizable permissions for both client and team accounts.",
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

    // -------- State --------
    this.setComponentState("current", 0);
    this.setComponentState("slider-ref", React.createRef());
  }

  static getName(): string {
    return "Slider 12";
  }

  /* ---------- helpers ---------- */
  private items(): Card[] {
    return this.castToObject<Card[]>("slider").filter((i) => (i as any).media);
  }

  private mediaFrom(val: any) {
    const url =
      val?.value?.url ??
      val?.value?.src ??
      val?.url ??
      val?.src ??
      (Array.isArray(val?.sources) ? val.sources[0]?.src : "");
    const isVideo =
      !!url && (val?.type === "video" || /\.(mp4|webm|ogg)$/i.test(url));
    return { url, isVideo };
  }

  private linkPath(raw: any): string {
    return typeof raw === "string"
      ? raw
      : raw?.path ?? raw?.url ?? raw?.href ?? "";
  }

  private getSlidesToShow(): number {
    const s: any = this.getComponentState("slider-ref")?.current;
    return (
      s?.innerSlider?.props?.slidesToShow ??
      (typeof window !== "undefined" && window.innerWidth > 1024 ? 3 : 1)
    );
  }

  private canPrevNext(current: number, total: number) {
    const sts = this.getSlidesToShow();
    return {
      canPrev: current > 0,
      canNext: current < Math.max(0, total - sts),
    };
  }

  /* ---------- lifecycle ---------- */
  componentDidMount(): void {
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount(): void {
    window.removeEventListener("resize", this.handleResize);
    if (this.resizeTimer) window.clearTimeout(this.resizeTimer);
  }
  private handleResize = () => {
    const container = document.querySelector(
      `.${this.decorateCSS("container")}`
    ) as HTMLElement | null;
    if (container) container.setAttribute("data-resizing", "true");
    if (this.resizeTimer) window.clearTimeout(this.resizeTimer);
    this.resizeTimer = window.setTimeout(() => {
      // sadece flicker azaltma – ok/dotlar afterChange'te güncelleniyor
      if (container) container.removeAttribute("data-resizing");
    }, 120) as unknown as number;
  };

  private onDotGoTo = (i: number) => {
    const total = this.items().length;
    const sts = this.getSlidesToShow();
    const maxStart = Math.max(0, total - sts);
    const target = Math.min(i, maxStart);
    this.getComponentState("slider-ref").current?.slickGoTo?.(target, true);
  };

  /* ---------- render ---------- */
  render() {
    const items = this.items();
    const count = items.length;
    const hasCards = count > 0;

    const prevMedia = this.getPropValue("previousArrow");
    const nextMedia = this.getPropValue("nextArrow");
    const prevName =
      (typeof prevMedia === "string" && prevMedia) ||
      prevMedia?.name ||
      prevMedia?.value?.name ||
      "FiArrowLeft";
    const nextName =
      (typeof nextMedia === "string" && nextMedia) ||
      nextMedia?.name ||
      nextMedia?.value?.name ||
      "FiArrowRight";

    const current = this.getComponentState("current") ?? 0;
    const { canPrev, canNext } = this.canPrevNext(current, count);

    const title = this.getPropValue("title");
    const description = this.getPropValue("description");

    const bgRaw = this.getPropValue("background-image");
    const bgObj =
      bgRaw && typeof bgRaw === "object" && "value" in bgRaw
        ? (bgRaw as any).value
        : bgRaw;
    const bgUrl =
      typeof bgObj === "string"
        ? bgObj
        : bgObj?.url ??
          bgObj?.src ??
          (Array.isArray(bgObj?.sources) ? bgObj.sources[0]?.src : "");
    const containerStyle: React.CSSProperties | undefined = bgUrl
      ? {
          backgroundImage: `url("${bgUrl}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }
      : undefined;

    const sliderRef = this.getComponentState("slider-ref");

    const settings = {
      dots: false, // kendi dot bar’ımız var
      infinite: false,
      slidesToShow: 3, // masaüstü: 3
      slidesToScroll: 1,
      variableWidth: false, // sabit → stabil, son kart tam görünür
      centerMode: false,
      arrows: false,
      cssEase: "cubic-bezier(.16,1,.3,1)",
      speed: 620, // animasyon korunuyor
      waitForAnimate: false, // cooldown yok
      adaptiveHeight: false,
      draggable: true,
      swipe: true,
      touchMove: true,
      accessibility: true,
      autoplay: false,
      swipeToSlide: true,
      edgeFriction: 0.18,

      beforeChange: (_: number, next: number) => {
        // video flicker azaltma
        requestAnimationFrame(() => {
          const root = document.querySelector(
            `.${this.decorateCSS("slider-parent")}`
          );
          if (!root) return;
          const allVideos = Array.from(
            root.querySelectorAll("video")
          ) as HTMLVideoElement[];
          const actSlides = Array.from(
            root.querySelectorAll(".slick-slide.slick-active")
          );
          const actVids: HTMLVideoElement[] = [];
          actSlides.forEach((s) => {
            Array.from(s.querySelectorAll("video")).forEach(
              (v: HTMLVideoElement) => {
                v.muted = true;
                (v as any).playsInline = true;
                v.loop = true;
                v.autoplay = true;
                v.setAttribute("muted", "true");
                v.setAttribute("playsinline", "true");
                v.setAttribute("autoplay", "true");
                v.play?.().catch(() => {});
                actVids.push(v);
              }
            );
          });
          allVideos
            .filter((v) => !actVids.includes(v))
            .forEach((v) => {
              try {
                v.pause();
              } catch {}
            });
        });
      },

      afterChange: (idx: number) => {
        this.setComponentState("current", idx);
      },

      responsive: [
        {
          breakpoint: 1025,
          settings: { slidesToShow: 1, variableWidth: false },
        }, // tablet
        {
          breakpoint: 640,
          settings: { slidesToShow: 1, variableWidth: false },
        }, // telefon
      ],
    } as const;

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

                {/* OKLAR: description ALTINDA */}
                <div className={this.decorateCSS("arrows")}>
                  <Base.Icon
                    name={prevName}
                    propsIcon={{
                      className: `${this.decorateCSS("prevArrow")}`,
                      role: "button",
                      tabIndex: 0,
                      "aria-label": "Previous",
                      "aria-disabled": !canPrev,
                      onClick: () => {
                        if (
                          !this.canPrevNext(
                            this.getComponentState("current") ?? 0,
                            count
                          ).canPrev
                        )
                          return;
                        this.getComponentState(
                          "slider-ref"
                        ).current?.slickPrev();
                      },
                    }}
                  />
                  <Base.Icon
                    name={nextName}
                    propsIcon={{
                      className: `${this.decorateCSS("nextArrow")}`,
                      role: "button",
                      tabIndex: 0,
                      "aria-label": "Next",
                      "aria-disabled": !canNext,
                      onClick: () => {
                        if (
                          !this.canPrevNext(
                            this.getComponentState("current") ?? 0,
                            count
                          ).canNext
                        )
                          return;
                        this.getComponentState(
                          "slider-ref"
                        ).current?.slickNext();
                      },
                    }}
                  />
                </div>
              </Base.VerticalContent>
            </div>
          )}

          <div className={this.decorateCSS("slider-parent")}>
            {/* Slider */}
            {hasCards && (
              <ComposerSlider
                {...settings}
                ref={sliderRef}
                className={this.decorateCSS("carousel")}
              >
                {items.map((rawItem: any, index: number) => {
                  const mediaVal = rawItem.media ?? rawItem?.value ?? rawItem;
                  const { url, isVideo } = this.mediaFrom(mediaVal);
                  const eager = index < 2 && !isVideo;

                  const Inner = (
                    <div className={this.decorateCSS("card")}>
                      <div className={this.decorateCSS("media-container")}>
                        {isVideo ? (
                          <VideoPlayer src={url} onReady={() => {}} />
                        ) : (
                          <img
                            src={url}
                            alt=""
                            loading={eager ? "eager" : "lazy"}
                            decoding="async"
                          />
                        )}
                      </div>

                      {(this.castToString(rawItem.header) ||
                        this.castToString(rawItem.description)) && (
                        <Base.VerticalContent
                          className={this.decorateCSS("content-container")}
                        >
                          {this.castToString(rawItem.header) && (
                            <Base.H2
                              className={this.decorateCSS("content-title")}
                            >
                              {rawItem.header}
                            </Base.H2>
                          )}
                          {this.castToString(rawItem.description) && (
                            <Base.P
                              className={this.decorateCSS(
                                "content-description"
                              )}
                            >
                              {rawItem.description}
                            </Base.P>
                          )}
                        </Base.VerticalContent>
                      )}
                    </div>
                  );

                  const linkPath = this.linkPath((rawItem as any).link);
                  return (
                    <div key={index}>
                      {linkPath ? (
                        <ComposerLink path={linkPath}>{Inner}</ComposerLink>
                      ) : (
                        Inner
                      )}
                    </div>
                  );
                })}
              </ComposerSlider>
            )}

            {/* Custom Dots: her kart için bir tane, aktif = beyaz */}
            {hasCards && (
              <div className={this.decorateCSS("dot-nav")}>
                {items.map((_, i) => (
                  <button
                    key={i}
                    className={this.decorateCSS("dot")}
                    aria-current={
                      i === (this.getComponentState("current") ?? 0)
                        ? "true"
                        : "false"
                    }
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => this.onDotGoTo(i)}
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
