import { PointerEvent } from "react";
import { BaseImageGallery, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./image-gallery11.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerSlider from "../../../composer-base-components/slider/slider";

type GalleryImageItem = {
  media: TypeMediaInputValue;
};

type RawGalleryRow = {
  speed?: number;
  images?: GalleryImageItem[];
};

type GalleryRow = {
  images: GalleryImageItem[];
};

type TrackState = {
  offset: number;
  loopWidth: number;
  lastTime: number;
  rafId: number | null;
  isPaused: boolean;
  isDragging: boolean;
  startX: number;
  startOffset: number;
  direction: number;
  speed: number;
  wasDragging: boolean;
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
  pauseOnHover: false,
  speed: 0,
  autoplaySpeed: 0,
};

class ImageGallery11 extends BaseImageGallery {
  private sliderRefs: any[] = [];
  private rowWrapperRefs: (HTMLDivElement | null)[] = [];
  private trackStates: TrackState[] = [];
  private animationDuration = 420000;
  private refreshRaf: number | null = null;

  constructor(props?: unknown) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
    });

    this.setComponentState("imagePopupZoomed", false);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Studio Life",
    });

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

    this.addProp({
      type: "boolean",
      key: "backgroundOverlay",
      displayer: "Background Overlay",
      value: true,
    });

    this.addProp({
      type: "boolean",
      key: "imageOverlay",
      displayer: "Overlay",
      value: false,
    });

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
                  key: "image-item-2",
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
                  key: "image-item-3",
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
          key: "row-2",
          displayer: "Row",
          value: [
            {
              type: "array",
              key: "images",
              displayer: "Images",
              value: [
                {
                  type: "object",
                  key: "image-item-4",
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
                  key: "image-item-5",
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
                  key: "image-item-6",
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
    this.scheduleRefresh();
  }

  componentDidUpdate() {
    this.refreshTrackStates();
  }

  componentWillUnmount() {
    if (this.refreshRaf) cancelAnimationFrame(this.refreshRaf);
    this.trackStates.forEach((s) => s?.rafId && cancelAnimationFrame(s.rafId));
  }

  private getState(i: number) {
    return this.trackStates[i];
  }

  private getWrapper(i: number) {
    return this.rowWrapperRefs[i];
  }

  private setDraggingClass(rowIndex: number, isOn: boolean) {
    const wrapper = this.getWrapper(rowIndex);
    if (!wrapper) return;
    const cls = this.decorateCSS("dragging").split(/\s+/).filter(Boolean);
    wrapper.classList[isOn ? "add" : "remove"](...cls);
  }

  private scheduleRefresh() {
    if (this.refreshRaf) return;
    this.refreshRaf = requestAnimationFrame(() => {
      this.refreshRaf = null;
      this.refreshTrackStates();
    });
  }

  private preventDefault = (event: any) => event.preventDefault();

  private setPaused(rowIndex: number, paused: boolean) {
    const state = this.getState(rowIndex);
    if (!state) return;

    state.isPaused = paused;
    state.lastTime = 0;

    if (paused) this.stopRowAnimation(rowIndex);
    else this.startRowAnimation(rowIndex);
  }

  private pauseAllRows(rows: GalleryRow[]) {
    rows.forEach((_, i) => this.pauseRow(i));
  }

  private resumeAllRows(rows: GalleryRow[]) {
    rows.forEach((_, i) => this.resumeRow(i));
  }

  private getProcessedRows(): GalleryRow[] {
    const rawRows = (this.castToObject("galleryRows") || []) as RawGalleryRow[];
    return rawRows
      .filter(Boolean)
      .map((row) => ({ images: (row.images || []).filter((img) => !!img?.media) }))
      .filter((row) => row.images.length > 0);
  }

  private normalizeOffset(offset: number, width: number) {
    const normalized = ((offset % width) + width) % width;
    return normalized - width;
  }

  private applyOffset(rowIndex: number, shouldWrap = true) {
    const state = this.getState(rowIndex);
    const wrapper = this.getWrapper(rowIndex);
    if (!state || !wrapper || !state.loopWidth) return;

    if (shouldWrap) state.offset = this.normalizeOffset(state.offset, state.loopWidth);
    wrapper.style.setProperty("--track-offset", `${state.offset}px`);
  }

  private startRowAnimation(rowIndex: number) {
    const state = this.getState(rowIndex);
    if (!state || state.isPaused || state.isDragging || !state.loopWidth || state.speed === 0) return;

    const step = (timestamp: number) => {
      if (state.isPaused || state.isDragging) return;

      if (!state.lastTime) state.lastTime = timestamp;
      const delta = timestamp - state.lastTime;
      state.lastTime = timestamp;

      state.offset += state.speed * state.direction * delta;
      this.applyOffset(rowIndex);

      state.rafId = requestAnimationFrame(step);
    };

    state.rafId = requestAnimationFrame(step);
  }

  private stopRowAnimation(rowIndex: number) {
    const state = this.getState(rowIndex);
    if (!state) return;

    if (state.rafId) {
      cancelAnimationFrame(state.rafId);
      state.rafId = null;
    }
    state.lastTime = 0;
  }

  private pauseRow(rowIndex: number) {
    this.setPaused(rowIndex, true);
  }

  private resumeRow(rowIndex: number) {
    const state = this.getState(rowIndex);
    if (!state || state.isDragging) return;
    this.setPaused(rowIndex, false);
  }

  private ensureTrackState(rowIndex: number, loopWidth: number, direction: number) {
    let state = this.trackStates[rowIndex];
    if (state) return state;

    const baseOffset = direction > 0 ? -loopWidth : 0;
    state = {
      offset: baseOffset,
      loopWidth,
      lastTime: 0,
      rafId: null,
      isPaused: false,
      isDragging: false,
      startX: 0,
      startOffset: baseOffset,
      direction,
      speed: 0,
      wasDragging: false,
    };
    this.trackStates[rowIndex] = state;
    return state;
  }

  private updateTrackState(rowIndex: number, loopWidth: number, direction: number) {
    const state = this.ensureTrackState(rowIndex, loopWidth, direction);

    state.loopWidth = loopWidth;
    state.direction = direction;
    state.speed = loopWidth / this.animationDuration;

    if (!state.isDragging && direction > 0 && state.offset === 0) {
      state.offset = -loopWidth;
      state.startOffset = state.offset;
    }

    this.applyOffset(rowIndex, !state.isDragging);

    if (!state.isPaused && !state.isDragging && !state.rafId) {
      this.startRowAnimation(rowIndex);
    }
  }

  private refreshTrackStates() {
    const rows = this.getProcessedRows();

    rows.forEach((_, rowIndex) => {
      const sliderRef = this.sliderRefs[rowIndex];
      const track = sliderRef?.innerSlider?.list?.querySelector(".slick-track") as HTMLElement | null;
      const wrapper = this.rowWrapperRefs[rowIndex];
      if (!track || !wrapper) return;

      const loopWidth = track.scrollWidth / REPEAT_COUNT;
      if (!loopWidth) return;

      const direction = rowIndex % 2 !== 0 ? 1 : -1;
      this.updateTrackState(rowIndex, loopWidth, direction);
    });

    for (let i = rows.length; i < this.trackStates.length; i += 1) {
      this.stopRowAnimation(i);
    }
  }

  private handleRowPointerDown(rowIndex: number, event: PointerEvent<HTMLDivElement>) {
    const state = this.getState(rowIndex);
    if (!state) return;

    event.currentTarget.setPointerCapture(event.pointerId);

    this.pauseRow(rowIndex);

    state.isDragging = true;
    state.startX = event.clientX;
    state.startOffset = state.offset;
    state.wasDragging = false;

    this.setDraggingClass(rowIndex, true);
  }

  private handleRowPointerMove(rowIndex: number, event: PointerEvent<HTMLDivElement>) {
    const state = this.getState(rowIndex);
    if (!state || !state.isDragging) return;

    const delta = event.clientX - state.startX;
    if (Math.abs(delta) > 5) state.wasDragging = true;

    state.offset = state.startOffset + delta;
    this.applyOffset(rowIndex, false);
  }

  private tryOpenPopupFromPoint(rows: GalleryRow[], x: number, y: number) {
    const el = document.elementFromPoint(x, y) as HTMLElement | null;
    const btn = el?.closest("[data-image-row-index]") as HTMLElement | null;
    if (!btn) return;

    const r = parseInt(btn.getAttribute("data-image-row-index") || "", 10);
    const idx = parseInt(btn.getAttribute("data-image-original-index") || "", 10);
    const media = rows[r]?.images?.[idx]?.media;
    if (media) this.openPopup(rows, media, r, idx);
  }

  private handleRowPointerUp(rowIndex: number, event: PointerEvent<HTMLDivElement>) {
    const state = this.getState(rowIndex);
    if (!state || !state.isDragging) return;

    event.currentTarget.releasePointerCapture(event.pointerId);

    state.isDragging = false;
    state.startX = 0;

    this.applyOffset(rowIndex);
    state.startOffset = state.offset;

    this.setDraggingClass(rowIndex, false);

    if (!state.wasDragging) {
      this.tryOpenPopupFromPoint(this.getProcessedRows(), event.clientX, event.clientY);
    }

    this.resumeRow(rowIndex);
  }

  private buildRowImages(row: GalleryRow, isRightToLeft: boolean) {
    const minLength = Math.max(MIN_DUPLICATED_SLIDES, row.images.length);

    let baseImages =
      row.images.length === 1 ? Array.from({ length: minLength }, () => row.images[0]) : [...row.images];

    while (baseImages.length < minLength) {
      baseImages = [...baseImages, ...row.images];
    }

    const duplicated = Array.from({ length: REPEAT_COUNT }, () => baseImages).flat();
    const rowImages = isRightToLeft ? [...duplicated].reverse() : duplicated;

    return { rowImages, slidesToShow: row.images.length };
  }

  private openPopup(rows: GalleryRow[], media: TypeMediaInputValue | undefined, rowIndex: number, imageIndex: number) {
    if (!media) return;

    this.setComponentState("imagePopupOpen", true);
    this.setComponentState("imagePopupValue", media);
    this.setComponentState("imagePopupRow", rowIndex);
    this.setComponentState("imagePopupIndex", imageIndex);
    this.setComponentState("imagePopupZoomed", false);

    this.pauseAllRows(rows);
  }

  private closePopup(rows: GalleryRow[]) {
    this.setComponentState("imagePopupOpen", false);
    this.setComponentState("imagePopupValue", null);
    this.setComponentState("imagePopupRow", null);
    this.setComponentState("imagePopupIndex", null);
    this.setComponentState("imagePopupZoomed", false);

    this.resumeAllRows(rows);
  }

  private navigatePopup(rows: GalleryRow[], direction: "prev" | "next") {
    const rowIndex = this.getComponentState("imagePopupRow");
    if (rowIndex == null) return;

    const row = rows[rowIndex];
    if (!row || row.images.length === 0) return;

    const currentIndex = this.getComponentState("imagePopupIndex") ?? 0;
    const total = row.images.length;

    const nextIndex =
      direction === "next" ? (currentIndex + 1) % total : (currentIndex - 1 + total) % total;

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

    const subtitleText = (this.castToString(subtitle));
    const titleText = (this.castToString(title));
    const descriptionText = (this.castToString(description));

    const hasSubtitle = !!subtitleText;
    const hasTitle = !!titleText;
    const hasDescription = !!descriptionText;

    const hasTextContent = hasSubtitle || hasTitle || hasDescription;

    const backgroundMedia = this.getPropValue("background") as TypeMediaInputValue | undefined;
    const hasBackgroundMedia = !!backgroundMedia;
    const showOverlay = this.getPropValue("backgroundOverlay") && hasBackgroundMedia;
    const showImageOverlay = !!this.getPropValue("imageOverlay");

    const subtitleType = Base.getSectionSubTitleType();
    const alignment = Base.getContentAlignment();

    const subtitleClasses = [
      this.decorateCSS("subtitle"),
      hasBackgroundMedia && this.decorateCSS("subtitle-with-bg"),
      hasBackgroundMedia && subtitleType === "badge" && this.decorateCSS("subtitle-transparent"),
      hasBackgroundMedia && subtitleType === "badge" && this.decorateCSS("subtitle-badge-hidden"),
    ]
      .filter(Boolean)
      .join(" ");

    const headingClasses = hasBackgroundMedia
      ? `${this.decorateCSS("heading")} ${this.decorateCSS("with-bg")}`
      : this.decorateCSS("heading");

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
                <div className={headingClasses} data-alignment={alignment}>
                  {hasSubtitle && (
                    <Base.SectionSubTitle className={subtitleClasses}>{subtitle}</Base.SectionSubTitle>
                  )}
                  {hasTitle && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
                  {hasDescription && (
                    <Base.SectionDescription className={this.decorateCSS("description")}>
                      {description}
                    </Base.SectionDescription>
                  )}
                </div>
              </div>
            </div>
          )}
        </Base.MaxContent>

        {rows.length > 0 && (
          <div
            className={`${this.decorateCSS("gallery")} ${
              hasTextContent ? this.decorateCSS("gallery-with-heading") : ""
            }`}
          >
            {rows.map((row: GalleryRow, rowIndex: number) => {
              const isRightToLeft = rowIndex % 2 !== 0;
              const { rowImages, slidesToShow } = this.buildRowImages(row, isRightToLeft);

              const sliderKey = `slider-${rowIndex}-${slidesToShow}-${isRightToLeft ? "rtl" : "ltr"}`;

              const rowClassName = isRightToLeft
                ? `${this.decorateCSS("gallery-row")} ${this.decorateCSS("gallery-row-reverse")}`
                : this.decorateCSS("gallery-row");

              const rowWrapperClass = `${rowClassName} ${this.decorateCSS("slider-wrapper")}`;

              const sliderSettings = {
                ...baseSettings,
                slidesToShow: Math.max(1, slidesToShow),
                rtl: isRightToLeft,
              };

              return (
                <div
                  className={rowWrapperClass}
                  key={`row-${rowIndex}`}
                  ref={(el) => {
                    this.rowWrapperRefs[rowIndex] = el;
                    this.scheduleRefresh();
                  }}
                  onDragStart={this.preventDefault}
                  onMouseEnter={() => this.pauseRow(rowIndex)}
                  onMouseLeave={() => this.resumeRow(rowIndex)}
                  onPointerDown={(event) => this.handleRowPointerDown(rowIndex, event)}
                  onPointerMove={(event) => this.handleRowPointerMove(rowIndex, event)}
                  onPointerUp={(event) => this.handleRowPointerUp(rowIndex, event)}
                  onPointerCancel={(event) => this.handleRowPointerUp(rowIndex, event)}
                >
                  <ComposerSlider
                    ref={(s: any) => {
                      this.sliderRefs[rowIndex] = s;
                      this.scheduleRefresh();
                    }}
                    {...sliderSettings}
                    className={this.decorateCSS("slider")}
                    key={sliderKey}
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
                    className={`${this.decorateCSS("modal-image")} ${
                      isPopupZoomed ? this.decorateCSS("zoom") : ""
                    }`}
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
