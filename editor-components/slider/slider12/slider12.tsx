import * as React from "react";
import { BaseSlider } from "../../EditorComponent";
import styles from "./slider12.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

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
  const innerRef = React.useRef<HTMLVideoElement>(null);
  const triedRef = React.useRef(false);

  React.useImperativeHandle(forwardedRef, () => innerRef.current);

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
            setTimeout(() => el.play?.().catch(() => {}), 120);
          }
        });
      }
    };

    const onLoaded = () => {
      onReady?.();
      tryPlay();
    };

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
      ref={innerRef}
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

type Card = {
  video: string;
  header: React.JSX.Element;
  description: React.JSX.Element;
  link: string;
};

class Slider12 extends BaseSlider {
  private resizeTimer?: number;

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

    this.setComponentState("centerSlide", 0);
    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState(
      "mediaRefs",
      [] as Array<React.RefObject<HTMLVideoElement | HTMLImageElement>>
    );
    this.setComponentState("imgWidths", [] as number[]);
    this.setComponentState("canPrev", false);
    this.setComponentState("canNext", true);

    const isDesktop =
      typeof window !== "undefined" ? window.innerWidth > 1220 : true;
    this.setComponentState("isVarWidth", isDesktop);
  }

  static getName(): string {
    return "Slider 12";
  }

  private computeIsVarWidth = () =>
    typeof window !== "undefined" ? window.innerWidth > 1220 : true;

  componentDidMount(): void {
    const sliderRef = this.getComponentState("slider-ref");
    sliderRef?.current?.slickPause?.();
    window.addEventListener("resize", this.handleResize);
    this.setComponentState("isVarWidth", this.computeIsVarWidth());
    this.playVisibleSlideVideos();
    this.wireMediaLoadHandlers();
    this.hardStopAutoplay();
    this.updateArrows(0);
  }

  componentDidUpdate(): void {
    const sliderRef = this.getComponentState("slider-ref");
    sliderRef?.current?.slickPause?.();
    this.playVisibleSlideVideos();
    this.wireMediaLoadHandlers();
    this.hardStopAutoplay();
    this.updateArrows();
  }

  componentWillUnmount(): void {
    window.removeEventListener("resize", this.handleResize);
    if (this.resizeTimer) window.clearTimeout(this.resizeTimer);
  }

  private handleResize = () => {
    if (this.resizeTimer) window.clearTimeout(this.resizeTimer);
    this.resizeTimer = window.setTimeout(() => {
      this.setComponentState("isVarWidth", this.computeIsVarWidth());
      this.updateAllWidths();
      this.updateArrows();
    }, 120) as unknown as number;
  };

  private ensureMediaRefs(len: number) {
    let refs = this.getComponentState("mediaRefs") as Array<
      React.RefObject<HTMLVideoElement | HTMLImageElement>
    >;
    if (refs.length !== len) {
      refs = Array.from(
        { length: len },
        (_, i) => refs[i] ?? React.createRef()
      );
      this.setComponentState("mediaRefs", refs);
    }
    return refs;
  }

  private updateWidthAt(index: number) {
    const isVarWidth = !!this.getComponentState("isVarWidth");
    if (!isVarWidth) return;

    const refs = this.getComponentState("mediaRefs") as Array<
      React.RefObject<HTMLVideoElement | HTMLImageElement>
    >;
    const el = refs[index]?.current;
    if (!el) return;

    let w = 0;

    if (el instanceof HTMLImageElement) {
      w = el.getBoundingClientRect().width;
      if (!w && el.naturalWidth && el.naturalHeight && el.clientHeight) {
        const h = el.clientHeight || 350;
        w = (el.naturalWidth * h) / el.naturalHeight;
      }
    } else if (el instanceof HTMLVideoElement) {
      const vw = el.videoWidth,
        vh = el.videoHeight;
      if (vw && vh && el.clientHeight) w = (vw * el.clientHeight) / vh;
      else w = el.getBoundingClientRect().width;
    }

    if (!w || w < 200) {
      const container = (refs[index]?.current as HTMLElement)?.closest(
        `.${this.decorateCSS("media-container")}`
      ) as HTMLElement | null;
      const h = container?.clientHeight || 350;
      w = Math.round((h * 16) / 9);
    }

    const widths = [...(this.getComponentState("imgWidths") as number[])];
    widths[index] = Math.round(w);
    this.setComponentState("imgWidths", widths);
  }

  private updateAllWidths() {
    const isVarWidth = !!this.getComponentState("isVarWidth");
    if (!isVarWidth) return;
    const items = this.castToObject<Card[]>("slider").filter(
      (i) => (i as any).media
    );
    for (let i = 0; i < items.length; i++) this.updateWidthAt(i);
  }

  private wireMediaLoadHandlers() {
    const isVarWidth = !!this.getComponentState("isVarWidth");
    if (!isVarWidth) return;

    const nodes = document.querySelectorAll(
      `.${this.decorateCSS("media-container")}`
    ) as NodeListOf<HTMLElement>;
    nodes.forEach((node) => {
      const idxStr = node.dataset.mediaIdx;
      const idx = idxStr ? parseInt(idxStr, 10) : -1;
      if (idx < 0) return;

      const img = node.querySelector("img") as HTMLImageElement | null;
      const video = node.querySelector("video") as HTMLVideoElement | null;

      if (img && !(img as any).__widthBound) {
        (img as any).__widthBound = true;
        img.addEventListener("load", () => this.updateWidthAt(idx), {
          once: true,
        });
      }

      if (video && !(video as any).__widthBound) {
        (video as any).__widthBound = true;
        video.addEventListener(
          "loadedmetadata",
          () => this.updateWidthAt(idx),
          { once: true }
        );
        video.addEventListener("loadeddata", () => this.updateWidthAt(idx), {
          once: true,
        });
      }
    });
  }

  private playVisibleSlideVideos() {
    const root = document.querySelector(
      `.${this.decorateCSS("slider-parent")}`
    );
    if (!root) return;

    const allVideos = Array.from(
      root.querySelectorAll("video")
    ) as HTMLVideoElement[];
    const activeSlides = Array.from(
      root.querySelectorAll(".slick-slide.slick-active")
    );

    allVideos.forEach((v) => {
      try {
        v.pause();
      } catch {}
    });

    activeSlides.forEach((slide) => {
      const vids = Array.from(
        slide.querySelectorAll("video")
      ) as HTMLVideoElement[];
      vids.forEach((v) => {
        v.muted = true;
        (v as any).playsInline = true;
        v.loop = true;
        v.autoplay = true;
        v.setAttribute("muted", "true");
        v.setAttribute("playsinline", "true");
        v.setAttribute("autoplay", "true");
        const p = v.play?.();
        if (p && typeof p.catch === "function") p.catch(() => {});
      });
    });
  }

  private hardStopAutoplay() {
    const s: any = this.getComponentState("slider-ref")?.current;
    if (!s) return;
    s.slickPause?.();
    const inner = s.innerSlider;
    inner?.pause?.();
    try {
      if (inner?.autoPlayTimer) {
        clearInterval(inner.autoPlayTimer);
        inner.autoPlayTimer = null;
      }
      if (inner && typeof inner.autoPlay === "function") {
        inner.autoPlay = () => {};
      }
    } catch {}
  }

  private getSlidesToShow(): number {
    const s: any = this.getComponentState("slider-ref")?.current;
    return s?.innerSlider?.props?.slidesToShow ?? 3;
  }

  /** ESKİ OK SİSTEMİ: geometri tabanlı durum */
  private updateArrows(nextIndex?: number) {
    if (typeof window === "undefined" || typeof document === "undefined")
      return;

    try {
      const root = document.querySelector(
        `.${this.decorateCSS("slider-parent")}`
      ) as HTMLElement | null;
      const listEl = root?.querySelector(".slick-list") as HTMLElement | null;
      const trackEl = root?.querySelector(".slick-track") as HTMLElement | null;

      if (listEl && trackEl) {
        const cs = window.getComputedStyle(listEl);
        const padL = parseFloat(cs.paddingLeft || "0");
        const padR = parseFloat(cs.paddingRight || "0");
        const listInnerW = listEl.getBoundingClientRect().width - padL - padR;
        const trackW = trackEl.getBoundingClientRect().width;
        const tr = window.getComputedStyle(trackEl).transform;

        let tx = 0;
        if (tr && tr !== "none") {
          const m3 = tr.match(/matrix3d\(([^)]+)\)/);
          if (m3) {
            const parts = m3[1].split(",");
            tx = parseFloat(parts[12] || "0");
          } else {
            const m2 = tr.match(/matrix\(([^)]+)\)/);
            if (m2) {
              const parts = m2[1].split(",");
              tx = parseFloat(parts[4] || "0");
            }
          }
        }

        const canPrev = tx < -1;
        const canNext = trackW + tx - listInnerW > 1;

        this.setComponentState("canPrev", canPrev);
        this.setComponentState("canNext", canNext);
        return;
      }
    } catch {}

    // Fallback (index tabanlı) – değişmeden bırakıyoruz
    const items = this.castToObject<Card[]>("slider").filter(
      (i) => (i as any).media
    );
    const slidesToShow = this.getSlidesToShow();
    const idx =
      typeof nextIndex === "number"
        ? nextIndex
        : this.getComponentState("centerSlide") ?? 0;
    const canPrev = idx > 0;
    const canNext = idx + slidesToShow < items.length;

    this.setComponentState("canPrev", canPrev);
    this.setComponentState("canNext", canNext);
  }

  render() {
    const items = this.castToObject<Card[]>("slider").filter(
      (item: Card) => (item as any).media
    );
    const isCardExist = items.length > 0;

    const nextArrow = this.getPropValue("nextArrow");
    const previousArrow = this.getPropValue("previousArrow");
    const arrowsExist = items.length > 1 && (previousArrow || nextArrow);

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
          backgroundColor: "transparent",
        }
      : undefined;

    const sliderRef = this.getComponentState("slider-ref");
    const mediaRefs = this.ensureMediaRefs(items.length);
    const imgWidths = (this.getComponentState("imgWidths") as number[]) || [];
    const canPrev = this.getComponentState("canPrev");
    const canNext = this.getComponentState("canNext");
    const isVarWidth: boolean = !!this.getComponentState("isVarWidth");

    const settings = {
      dots: false,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: isVarWidth,
      centerMode: false,
      arrows: false,
      cssEase: "cubic-bezier(.16,1,.3,1)",
      speed: 620,
      adaptiveHeight: false,
      draggable: true,
      swipe: true,
      touchMove: true,
      accessibility: true,
      autoplay: false,
      swipeToSlide: true,
      waitForAnimate: true,
      edgeFriction: 0.18,

      beforeChange: (_: number, next: number) => {
        this.setComponentState("centerSlide", next);
        this.updateArrows(next);
        setTimeout(() => this.playVisibleSlideVideos(), 0);
      },

      afterChange: () => {
        this.playVisibleSlideVideos();
        this.hardStopAutoplay();
        const s: any = this.getComponentState("slider-ref")?.current;
        const cur = s?.innerSlider?.state?.currentSlide ?? 0;
        requestAnimationFrame(() => this.updateArrows(cur));
      },

      responsive: [
        { breakpoint: 1220, settings: { slidesToShow: 2 } },
        { breakpoint: 1024, settings: { dots: false, slidesToShow: 1 } },
        { breakpoint: 640, settings: { dots: true, slidesToShow: 1 } },
      ],
    };

    return (
      <Base.Container
        className={this.decorateCSS("container")}
        style={containerStyle}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(this.castToString(title) ||
            this.castToString(description) ||
            arrowsExist) && (
            <div className={this.decorateCSS("header")}>
              {(this.castToString(description) || this.castToString(title)) && (
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
                </Base.VerticalContent>
              )}
            </div>
          )}

          <div className={this.decorateCSS("slider-parent")}>
            {arrowsExist && (
              <div className={this.decorateCSS("arrows")}>
                {previousArrow && (
                  <Base.Icon
                    name={prevName}
                    propsIcon={{
                      className: `${this.decorateCSS("prevArrow")} ${
                        !canPrev ? this.decorateCSS("disabled") : ""
                      }`,
                      role: "button",
                      tabIndex: 0,
                      "aria-label": "Previous",
                      "aria-disabled": !canPrev,
                      onClick: () => {
                        if (this.getComponentState("canPrev")) {
                          this.getComponentState(
                            "slider-ref"
                          ).current?.slickPrev();
                        }
                      },
                    }}
                  />
                )}
                {nextArrow && (
                  <Base.Icon
                    name={nextName}
                    propsIcon={{
                      className: `${this.decorateCSS("nextArrow")} ${
                        !canNext ? this.decorateCSS("disabled") : ""
                      }`,
                      role: "button",
                      tabIndex: 0,
                      "aria-label": "Next",
                      "aria-disabled": !canNext,
                      onClick: () => {
                        if (this.getComponentState("canNext")) {
                          this.getComponentState(
                            "slider-ref"
                          ).current?.slickNext();
                        }
                      },
                    }}
                  />
                )}
              </div>
            )}

            {isCardExist && (
              <ComposerSlider
                {...settings}
                ref={sliderRef}
                autoplay={false}
                autoplaySpeed={0}
                className={this.decorateCSS("carousel")}
              >
                {items.map((rawItem: any, index: number) => {
                  const mediaVal =
                    rawItem.media?.value ?? rawItem.media ?? null;
                  const url =
                    mediaVal?.url ??
                    mediaVal?.src ??
                    (Array.isArray(mediaVal?.sources)
                      ? mediaVal.sources[0]?.src
                      : "");
                  const isVideo = !!url && /\.(mp4|webm|ogg)$/i.test(url);
                  const slideW = imgWidths[index];
                  const ref = mediaRefs[index];

                  const widthStyle: React.CSSProperties | undefined =
                    isVarWidth && slideW
                      ? ({ width: `${slideW}px` } as React.CSSProperties)
                      : undefined;

                  const Inner = (
                    <div
                      className={this.decorateCSS("card")}
                      style={widthStyle}
                    >
                      <div
                        className={this.decorateCSS("media-container")}
                        data-media-idx={index}
                        style={widthStyle}
                      >
                        {isVideo ? (
                          <VideoPlayer
                            src={url}
                            forwardedRef={ref as React.Ref<HTMLVideoElement>}
                            onReady={() => this.updateWidthAt(index)}
                          />
                        ) : (
                          <img
                            ref={ref as React.RefObject<HTMLImageElement>}
                            src={url}
                            alt=""
                            onLoad={() => this.updateWidthAt(index)}
                          />
                        )}
                      </div>

                      {(this.castToString(rawItem.header) ||
                        this.castToString(rawItem.description)) && (
                        <Base.VerticalContent
                          className={this.decorateCSS("content-container")}
                          style={widthStyle}
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

                  const linkRaw = (rawItem as any).link;
                  const linkPath =
                    typeof linkRaw === "string"
                      ? linkRaw
                      : linkRaw?.path ?? linkRaw?.url ?? linkRaw?.href ?? "";
                  const hasLink = !!(linkPath && String(linkPath).trim());

                  return (
                    <div key={index}>
                      {hasLink ? (
                        <ComposerLink path={linkPath}>{Inner}</ComposerLink>
                      ) : (
                        Inner
                      )}
                    </div>
                  );
                })}

                {/* görünmez kısa tampon – sağda küçük bir pay */}
                <div aria-hidden="true">
                  <div
                    style={{
                      width: "var(--slider-gutter)",
                      height: 1,
                      pointerEvents: "none",
                      opacity: 0,
                    }}
                  />
                </div>
              </ComposerSlider>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Slider12;
