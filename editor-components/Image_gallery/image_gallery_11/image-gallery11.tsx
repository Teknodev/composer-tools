import { BaseImageGallery, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./image-gallery11.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerSlider from "../../../composer-base-components/slider/slider";

type GalleryImageItem = { media: TypeMediaInputValue };

type RawGalleryRow = {
  speed?: number;
  images?: GalleryImageItem[];
};

type GalleryRow = {
  images: GalleryImageItem[];
  speed: number;
};

const MIN_DUPLICATED_SLIDES = 6;
const REPEAT_COUNT = 4;

const baseSettings = {
  dots: false,
  arrows: false,
  infinite: false,
  autoplay: false,
  cssEase: "linear",
  slidesToScroll: 1,
  variableWidth: true,
  swipe: false,
  draggable: false,
  touchMove: false,
  speed: 0,
  autoplaySpeed: 0,
};

class ImageGallery11 extends BaseImageGallery {
  private sliderRefs: any[] = [];
  private rowWrapperRefs: (HTMLDivElement | null)[] = [];
  private rowStates: any[] = [];
  private rafId: number | null = null;
  private animationDuration = 420000;

  constructor(props?: unknown) {
    super(props, styles);

    this.addProp({ type: "string", key: "subtitle", displayer: "Subtitle", value: "" });
    this.setComponentState("imagePopupZoomed", false);

    this.addProp({ type: "string", key: "title", displayer: "Title", value: "Studio Life" });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "As the studio continues to grow, our artists grow alongside it. We may be small, but everyone here is a jack-of-all-trades.",
    });

    this.addProp({
      type: "media",
      key: "background",
      displayer: "Background Image",
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689af25436675f002db98b79?alt=media",
      },
      additionalParams: { availableTypes: ["image", "video"] },
    });

    this.addProp({ type: "boolean", key: "backgroundOverlay", displayer: "Background Overlay", value: true });
    this.addProp({ type: "boolean", key: "imageOverlay", displayer: "Overlay", value: false });

    this.addProp({
      type: "array",
      key: "galleryRows",
      displayer: "Gallery Rows",
      value: [
        {
          type: "object",
          key: "row",
          displayer: "Row",
          value: [
            {
              type: "array",
              key: "images",
              displayer: "Images",
              value: [
                {
                  type: "object",
                  key: "image-item",
                  displayer: "Image",
                  value: [
                    {
                      type: "media",
                      key: "media",
                      displayer: "Image",
                      value: {
                        type: "image",
                        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b16de36675f002db9baf2?alt=media",
                      },
                      additionalParams: { availableTypes: ["image", "video"] },
                    },
                  ],
                },
                {
                  type: "object",
                  key: "image-item",
                  displayer: "Image",
                  value: [
                    {
                      type: "media",
                      key: "media",
                      displayer: "Image",
                      value: {
                        type: "image",
                        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b177536675f002db9bbfe?alt=media",
                      },
                      additionalParams: { availableTypes: ["image", "video"] },
                    },
                  ],
                },
                {
                  type: "object",
                  key: "image-item",
                  displayer: "Image",
                  value: [
                    {
                      type: "media",
                      key: "media",
                      displayer: "Image",
                      value: {
                        type: "image",
                        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b17fb36675f002db9bcd0?alt=media",
                      },
                      additionalParams: { availableTypes: ["image", "video"] },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "row",
          displayer: "Row",
          value: [
            {
              type: "array",
              key: "images",
              displayer: "Images",
              value: [
                {
                  type: "object",
                  key: "image-item",
                  displayer: "Image",
                  value: [
                    {
                      type: "media",
                      key: "media",
                      displayer: "Image",
                      value: {
                        type: "image",
                        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b1a6036675f002db9c11e?alt=media",
                      },
                      additionalParams: { availableTypes: ["image", "video"] },
                    },
                  ],
                },
                {
                  type: "object",
                  key: "image-item",
                  displayer: "Image",
                  value: [
                    {
                      type: "media",
                      key: "media",
                      displayer: "Image",
                      value: {
                        type: "image",
                        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b1c4636675f002db9c592?alt=media",
                      },
                      additionalParams: { availableTypes: ["image", "video"] },
                    },
                  ],
                },
                {
                  type: "object",
                  key: "image-item",
                  displayer: "Image",
                  value: [
                    {
                      type: "media",
                      key: "media",
                      displayer: "Image",
                      value: {
                        type: "image",
                        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b188936675f002db9bde7?alt=media",
                      },
                      additionalParams: { availableTypes: ["image", "video"] },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "media",
      key: "popupLeftIcon",
      displayer: "Left Icon",
      value: { type: "icon", name: "IoMdArrowDropleft" },
      additionalParams: { availableTypes: ["image", "icon"] },
    });

    this.addProp({
      type: "media",
      key: "popupRightIcon",
      displayer: "Right Icon",
      value: { type: "icon", name: "IoMdArrowDropright" },
      additionalParams: { availableTypes: ["image", "icon"] },
    });

    this.addProp({
      type: "media",
      key: "popupCloseIcon",
      displayer: "Close Icon",
      value: { type: "icon", name: "MdClose" },
      additionalParams: { availableTypes: ["image", "icon"] },
    });
  }

  static getName(): string {
    return "Image Gallery 11";
  }

  componentDidMount() {
    this.refreshRows();
    this.startRaf();
  }

  componentDidUpdate() {
    this.refreshRows();
  }

  componentWillUnmount() {
    this.rafId && cancelAnimationFrame(this.rafId);
  }

  private preventDefault = (e: any) => e.preventDefault();

  private setAllPaused(paused: boolean) {
    this.rowStates.forEach((s: any) => s && (s.paused = paused));
  }

  private setOffset = (i: number, wrap = true) => {
    const s = this.rowStates[i],
      el = this.rowWrapperRefs[i];
    if (!s || !el) return;
    wrap && (s.offset = ((s.offset % s.width) + s.width) % s.width - s.width);
    el.style.setProperty("--track-offset", s.offset + "px");
  };

  private getProcessedRows(): GalleryRow[] {
    const rawRows = (this.castToObject("galleryRows") || []) as RawGalleryRow[];
    return rawRows
      .filter(Boolean)
      .map((row) => ({
        speed: row.speed && row.speed > 0 ? row.speed : 1,
        images: (row.images || []).filter((img) => !!img?.media),
      }))
      .filter((row) => row.images.length > 0);
  }

  private refreshRows = () => {
    const rows: any[] = this.getProcessedRows();
    this.rowStates.length = rows.length;

    for (let i = 0; i < rows.length; i++) {
      const t: any = this.sliderRefs[i]?.innerSlider?.list?.querySelector(".slick-track");
      const w = t ? t.scrollWidth / REPEAT_COUNT : 0;
      if (!w) continue;

      const dir = i % 2 ? 1 : -1;
      const start = dir === 1 ? -w : 0;

      const s =
        (this.rowStates[i] ??= {
          offset: start,
          startOffset: start,
          startX: 0,
          moved: false,
          paused: false,
          dragging: false,
          width: w,
          speed: 0,
          dir,
        });

      s.width = w;
      s.dir = dir;
      s.speed = (w / this.animationDuration) * (rows[i].speed || 1);

      !s.dragging && this.setOffset(i);
    }
  };

  private startRaf = () => {
    if (this.rafId) return;
    let last = 0;

    const loop = (ts: number) => {
      const dt = last ? ts - last : 0;
      last = ts;

      for (let i = 0; i < this.rowStates.length; i++) {
        const s = this.rowStates[i];
        if (!s || s.paused || s.dragging) continue;
        s.offset += s.speed * s.dir * dt;
        this.setOffset(i);
      }

      this.rafId = requestAnimationFrame(loop);
    };

    this.rafId = requestAnimationFrame(loop);
  };

  private onDown = (i: number, e: any) => {
    const s = this.rowStates[i];
    if (!s) return;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    s.dragging = true;
    s.paused = true;
    s.moved = false;
    s.startX = e.clientX;
    s.startOffset = s.offset;
  };

  private onMove = (i: number, e: any) => {
    const s = this.rowStates[i];
    if (!s?.dragging) return;
    const dx = e.clientX - s.startX;
    s.moved ||= Math.abs(dx) > 5;
    s.offset = s.startOffset + dx;
    this.setOffset(i, false);
  };

  private onUp = (rows: any[], i: number, e: any) => {
    const s = this.rowStates[i];
    if (!s?.dragging) return;
    e.currentTarget.releasePointerCapture?.(e.pointerId);
    s.dragging = false;
    this.setOffset(i);
    !s.moved && this.tryOpenPopupFromPoint(rows, e.clientX, e.clientY);
    s.paused = false;
  };

  private tryOpenPopupFromPoint(rows: GalleryRow[], x: number, y: number) {
    const el = document.elementFromPoint(x, y) as HTMLElement | null;
    const btn = el?.closest("[data-image-row-index]") as HTMLElement | null;
    if (!btn) return;

    const r = parseInt(btn.getAttribute("data-image-row-index") || "", 10);
    const idx = parseInt(btn.getAttribute("data-image-original-index") || "", 10);
    const media = rows[r]?.images?.[idx]?.media;
    if (media) this.openPopup(rows, media, r, idx);
  }

  private buildRowImages(row: GalleryRow, rtl: boolean) {
    const min = Math.max(MIN_DUPLICATED_SLIDES, row.images.length);
    let base = row.images.length === 1 ? Array.from({ length: min }, () => row.images[0]) : [...row.images];
    while (base.length < min) base = [...base, ...row.images];

    const dup = Array.from({ length: REPEAT_COUNT }, () => base).flat();
    const rowImages = rtl ? [...dup].reverse() : dup;

    return { rowImages, slidesToShow: row.images.length };
  }

  private openPopup(rows: GalleryRow[], media: TypeMediaInputValue | undefined, rowIndex: number, imageIndex: number) {
    if (!media) return;

    this.setComponentState("imagePopupOpen", true);
    this.setComponentState("imagePopupValue", media);
    this.setComponentState("imagePopupRow", rowIndex);
    this.setComponentState("imagePopupIndex", imageIndex);
    this.setComponentState("imagePopupZoomed", false);

    this.setAllPaused(true);
  }

  private closePopup(rows: GalleryRow[]) {
    this.setComponentState("imagePopupOpen", false);
    this.setComponentState("imagePopupValue", null);
    this.setComponentState("imagePopupRow", null);
    this.setComponentState("imagePopupIndex", null);
    this.setComponentState("imagePopupZoomed", false);

    this.setAllPaused(false);
  }

  private navigatePopup(rows: GalleryRow[], direction: "prev" | "next") {
    const rowIndex = this.getComponentState("imagePopupRow");
    if (rowIndex == null) return;

    const row = rows[rowIndex];
    if (!row || row.images.length === 0) return;

    const currentIndex = this.getComponentState("imagePopupIndex") ?? 0;
    const total = row.images.length;
    const nextIndex = direction === "next" ? (currentIndex + 1) % total : (currentIndex - 1 + total) % total;

    this.setComponentState("imagePopupIndex", nextIndex);
    this.setComponentState("imagePopupValue", row.images[nextIndex].media);
    this.setComponentState("imagePopupZoomed", false);
  }

  render() {
    const rows = this.getProcessedRows();
    const popupValue = this.getComponentState("imagePopupValue") as TypeMediaInputValue | undefined;
    const isPopupOpen = !!this.getComponentState("imagePopupOpen");
    const isPopupZoomed = !!this.getComponentState("imagePopupZoomed");

    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");

    const subtitleText = this.castToString(subtitle);
    const titleText = this.castToString(title);
    const descriptionText = this.castToString(description);
    const hasTextContent = subtitleText || titleText || !!descriptionText;

    const backgroundMedia = this.getPropValue("background") as TypeMediaInputValue | undefined;
    const hasBackgroundMedia = !!backgroundMedia;
    const showOverlay = this.getPropValue("backgroundOverlay") && hasBackgroundMedia;
    const showImageOverlay = !!this.getPropValue("imageOverlay");

    const alignment = Base.getContentAlignment();
    const headingClasses = [this.decorateCSS("heading"), hasBackgroundMedia ? this.decorateCSS("with-bg") : ""]
      .filter(Boolean)
      .join(" ");
    const headingProps = alignment === "center" ? { "data-alignment": "center" as const } : {};

    return (
      <Base.Container isFull className={this.decorateCSS("container")}>
        {backgroundMedia && (
          <div className={this.decorateCSS("background-media")}>
            <Base.Media value={backgroundMedia} className={this.decorateCSS("background-media-content")} />
          </div>
        )}

        {showOverlay && <div className={this.decorateCSS("background-overlay")} />}

        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {hasTextContent && (
            <div className={this.decorateCSS("content")}>
              <div className={this.decorateCSS("text-wrapper")}>
                <Base.VerticalContent className={headingClasses} {...headingProps}>
                  {subtitleText && (
                    <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>
                  )}
                  {titleText && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
                  {descriptionText && (
                    <Base.SectionDescription className={this.decorateCSS("description")}>
                      {description}
                    </Base.SectionDescription>
                  )}
                </Base.VerticalContent>
              </div>
            </div>
          )}
        </Base.MaxContent>

        {rows.length > 0 && (
          <div className={this.decorateCSS("gallery")}>
            {rows.map((row: GalleryRow, rowIndex: number) => {
              const rtl = rowIndex % 2 !== 0;
              const { rowImages, slidesToShow } = this.buildRowImages(row, rtl);
              const sliderSettings = { ...baseSettings, slidesToShow, rtl };

              return (
                <div
                  className={`${this.decorateCSS("gallery-row")} ${this.decorateCSS("slider-wrapper")}`}
                  key={`row-${rowIndex}`}
                  ref={(el) => {
                    this.rowWrapperRefs[rowIndex] = el;
                    this.refreshRows();
                  }}
                  onDragStart={this.preventDefault}
                  onMouseEnter={() => this.rowStates[rowIndex] && (this.rowStates[rowIndex].paused = true)}
                  onMouseLeave={() => this.rowStates[rowIndex] && (this.rowStates[rowIndex].paused = false)}
                  onPointerDown={(e) => this.onDown(rowIndex, e)}
                  onPointerMove={(e) => this.onMove(rowIndex, e)}
                  onPointerUp={(e) => this.onUp(rows, rowIndex, e)}
                  onPointerCancel={(e) => this.onUp(rows, rowIndex, e)}
                >
                  <ComposerSlider
                    ref={(s: any) => {
                      this.sliderRefs[rowIndex] = s;
                      this.refreshRows();
                    }}
                    {...sliderSettings}
                    className={this.decorateCSS("slider")}
                    key={`slider-${rowIndex}-${slidesToShow}-${rtl ? "rtl" : "ltr"}`}
                  >
                    {rowImages.map((_, imageIndex) => {
                      const originalIndex = imageIndex % row.images.length;
                      const mediaValue = row.images[originalIndex]?.media;
                      if (!mediaValue) return null;

                      return (
                        <div className={this.decorateCSS("image-card")} key={`row-${rowIndex}-img-${imageIndex}`}>
                          <div
                            className={this.decorateCSS("image-button")}
                            draggable={false}
                            data-image-row-index={rowIndex}
                            data-image-original-index={originalIndex}
                            onDragStart={this.preventDefault}
                          >
                            <div className={this.decorateCSS("image-media-wrapper")}>
                              <Base.Media value={mediaValue} className={this.decorateCSS("image-media")} />
                              {showImageOverlay && <div className={this.decorateCSS("image-overlay")} />}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </ComposerSlider>
                </div>
              );
            })}
          </div>
        )}

        {isPopupOpen && (
          <Base.Overlay isVisible className={this.decorateCSS("overlay")} onClick={() => this.closePopup(rows)}>
            <div className={this.decorateCSS("modal-wrapper")} onClick={(e) => e.stopPropagation()}>
              <div className={this.decorateCSS("modal-content")}>
                <div className={this.decorateCSS("close")} onClick={() => this.closePopup(rows)}>
                  <Base.Media value={this.getPropValue("popupCloseIcon")} className={this.decorateCSS("icon")} />
                </div>

                <div
                  className={this.decorateCSS("image-container")}
                  onClick={() => this.setComponentState("imagePopupZoomed", !isPopupZoomed)}
                >
                  <Base.Media
                    value={popupValue}
                    className={`${this.decorateCSS("modal-image")} ${isPopupZoomed ? this.decorateCSS("zoom") : ""}`}
                  />
                </div>
              </div>
            </div>

            <div
              className={`${this.decorateCSS("nav")} ${this.decorateCSS("prev")}`}
              onClick={(e) => {
                e.stopPropagation();
                this.navigatePopup(rows, "prev");
              }}
            >
              <Base.Media value={this.getPropValue("popupLeftIcon")} className={this.decorateCSS("icon")} />
            </div>

            <div
              className={`${this.decorateCSS("nav")} ${this.decorateCSS("next")}`}
              onClick={(e) => {
                e.stopPropagation();
                this.navigatePopup(rows, "next");
              }}
            >
              <Base.Media value={this.getPropValue("popupRightIcon")} className={this.decorateCSS("icon")} />
            </div>
          </Base.Overlay>
        )}
      </Base.Container>
    );
  }
}

export default ImageGallery11;
