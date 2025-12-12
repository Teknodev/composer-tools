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
                      additionalParams: { availableTypes: ["image" , "video"] },
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
                      additionalParams: { availableTypes: ["image" , "video"] },
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
                      additionalParams: { availableTypes: ["image" , "video"] },
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
                      additionalParams: { availableTypes: ["image" , "video"] },
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
                      additionalParams: { availableTypes: ["image" , "video"] },
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
                      additionalParams: { availableTypes: ["image" , "video"] },
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
    requestAnimationFrame(() => this.refreshTrackStates());
  }

  componentDidUpdate() {
    this.refreshTrackStates();
  }

  componentWillUnmount() {
    this.trackStates.forEach((state) => {
      if (state && state.rafId) {
        cancelAnimationFrame(state.rafId);
      }
    });
  }

  private getProcessedRows(): GalleryRow[] {
    const rawRows = (this.castToObject("galleryRows") || []) as RawGalleryRow[];
    const rows = rawRows
      .filter((row) => !!row)
      .map((row: RawGalleryRow) => ({
        images: (row.images || []).filter((img) => !!img?.media),
      }));
    return rows.filter((row) => row.images.length > 0);
  }

  private applyOffset(rowIndex: number, shouldWrap = true) {
    const state = this.trackStates[rowIndex];
    const wrapper = this.rowWrapperRefs[rowIndex];
    if (!state || !wrapper || !state.loopWidth) {
      return;
    }
    if (shouldWrap) {
      const width = state.loopWidth;
      const normalized = ((state.offset % width) + width) % width;
      state.offset = normalized - width;
    }
    wrapper.style.setProperty("--track-offset", `${state.offset}px`);
  }

  private startRowAnimation(rowIndex: number) {
    const state = this.trackStates[rowIndex];
    if (!state || state.isPaused || state.isDragging || !state.loopWidth || state.speed === 0) {
      return;
    }
    const step = (timestamp: number) => {
      if (!state.lastTime) {
        state.lastTime = timestamp;
      }
      const delta = timestamp - state.lastTime;
      state.lastTime = timestamp;
      state.offset += state.speed * state.direction * delta;
      this.applyOffset(rowIndex);
      state.rafId = requestAnimationFrame(step);
    };
    state.rafId = requestAnimationFrame(step);
  }

  private stopRowAnimation(rowIndex: number) {
    const state = this.trackStates[rowIndex];
    if (!state) {
      return;
    }
    if (state.rafId) {
      cancelAnimationFrame(state.rafId);
      state.rafId = null;
    }
    state.lastTime = 0;
  }

  private pauseRow(rowIndex: number) {
    const state = this.trackStates[rowIndex];
    if (!state) {
      return;
    }
    state.isPaused = true;
    this.stopRowAnimation(rowIndex);
  }

  private resumeRow(rowIndex: number) {
    const state = this.trackStates[rowIndex];
    if (!state) {
      return;
    }
    state.isPaused = false;
    state.lastTime = 0;
    this.startRowAnimation(rowIndex);
  }

  private refreshTrackStates() {
    const rows = this.getProcessedRows();
    rows.forEach((_, rowIndex) => {
      const sliderRef = this.sliderRefs[rowIndex];
      const track = sliderRef?.innerSlider?.list?.querySelector(".slick-track") as HTMLElement | null;
      const wrapper = this.rowWrapperRefs[rowIndex];
      if (!track || !wrapper) {
        return;
      }
      const loopWidth = track.scrollWidth / REPEAT_COUNT;
      if (!loopWidth) {
        return;
      }
      const direction = rowIndex % 2 !== 0 ? 1 : -1;
      let state = this.trackStates[rowIndex];
      if (!state) {
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
        };
        this.trackStates[rowIndex] = state;
      }
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
    });
    for (let i = rows.length; i < this.trackStates.length; i += 1) {
      this.stopRowAnimation(i);
    }
  }

  private handleRowPointerDown(rowIndex: number, event: PointerEvent<HTMLDivElement>) {
    const state = this.trackStates[rowIndex];
    if (!state) {
      return;
    }
    this.pauseRow(rowIndex);
    state.isDragging = true;
    state.startX = event.clientX;
    state.startOffset = state.offset;
    const wrapper = this.rowWrapperRefs[rowIndex];
    if (wrapper) {
      wrapper.classList.add(this.decorateCSS("dragging"));
    }
  }

  private handleRowPointerMove(rowIndex: number, event: PointerEvent<HTMLDivElement>) {
    const state = this.trackStates[rowIndex];
    if (!state || !state.isDragging) {
      return;
    }
    state.offset = state.startOffset + (event.clientX - state.startX);
    this.applyOffset(rowIndex, false);
  }

  private handleRowPointerUp(rowIndex: number) {
    const state = this.trackStates[rowIndex];
    if (!state || !state.isDragging) {
      return;
    }
    state.isDragging = false;
    state.startX = 0;
    this.applyOffset(rowIndex);
    state.startOffset = state.offset;
    const wrapper = this.rowWrapperRefs[rowIndex];
    if (wrapper) {
      wrapper.classList.remove(this.decorateCSS("dragging"));
    }
    this.resumeRow(rowIndex);
  }

  render() {
    const rows = this.getProcessedRows();
    const handleOpenPopup = (media: TypeMediaInputValue | undefined, rowIndex: number, imageIndex: number) => {
      if (!media) return;
      this.setComponentState("imagePopupOpen", true);
      this.setComponentState("imagePopupValue", media);
      this.setComponentState("imagePopupRow", rowIndex);
      this.setComponentState("imagePopupIndex", imageIndex);
      this.setComponentState("imagePopupZoomed", false);
      rows.forEach((_, index) => this.pauseRow(index));
    };

    const handleClosePopup = () => {
      this.setComponentState("imagePopupOpen", false);
      this.setComponentState("imagePopupValue", null);
      this.setComponentState("imagePopupRow", null);
      this.setComponentState("imagePopupIndex", null);
      this.setComponentState("imagePopupZoomed", false);
      rows.forEach((_, index) => this.resumeRow(index));
    };

    const handlePopupNavigate = (direction: "prev" | "next") => {
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
    };

    const popupRowIndex = this.getComponentState("imagePopupRow");
    const popupImageIndex = this.getComponentState("imagePopupIndex") ?? 0;
    const popupRow = popupRowIndex !== null && popupRowIndex !== undefined ? rows[popupRowIndex] : undefined;
    const popupValue = popupRow?.images?.[popupImageIndex]?.media;
    const isPopupOpen = !!(this.getComponentState("imagePopupOpen") && popupValue);
    const isPopupZoomed = !!this.getComponentState("imagePopupZoomed");
    
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const subtitle = this.getPropValue("subtitle");
    const hasTitle = this.castToString(title);
    const hasDescription = this.castToString(description);
    const hasSubtitle = this.castToString(subtitle);
    const hasTextContent = !!(hasSubtitle || hasTitle || hasDescription);
    const backgroundMedia = this.getPropValue("background") as TypeMediaInputValue | undefined;
    const hasBackgroundMedia = !!backgroundMedia;
    const showOverlay = this.getPropValue("backgroundOverlay") && hasBackgroundMedia;
    const subtitleType = Base.getSectionSubTitleType();
    const alignment = Base.getContentAlignment();
    const baseSubtitleClass = this.decorateCSS("subtitle");
    let subtitleClasses = baseSubtitleClass;
    if (hasBackgroundMedia) {
      subtitleClasses += ` ${this.decorateCSS("subtitle-with-bg")}`;
      if (subtitleType === "badge") {
        subtitleClasses += ` ${this.decorateCSS("subtitle-transparent")} ${this.decorateCSS("subtitle-badge-hidden")}`;
      }
    }
    const headingClasses = hasBackgroundMedia
      ? `${this.decorateCSS("heading")} ${this.decorateCSS("with-bg")}`
      : this.decorateCSS("heading");
    const showImageOverlay = !!this.getPropValue("imageOverlay");
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
                    <Base.SectionSubTitle className={subtitleClasses}>
                      {subtitle}
                    </Base.SectionSubTitle>
                  )}
                  {hasTitle && (
                    <Base.SectionTitle className={this.decorateCSS("title")}>
                      {title}
                    </Base.SectionTitle>
                  )}
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
            className={`${this.decorateCSS("gallery")} ${hasTextContent ? this.decorateCSS("gallery-with-heading") : ""}`}
          >
              {rows.map((row: GalleryRow, rowIndex: number) => {
                const isRightToLeft = rowIndex % 2 !== 0;
                const minLength = Math.max(MIN_DUPLICATED_SLIDES, row.images.length);
                let baseImages =
                  row.images.length === 1
                    ? Array.from({ length: minLength }, () => row.images[0])
                    : [...row.images];
                while (baseImages.length < minLength) {
                  baseImages = [...baseImages, ...row.images];
                }
                const duplicatedImages = Array.from({ length: REPEAT_COUNT }, () => baseImages).flat();
                const rowImages = isRightToLeft ? [...duplicatedImages].reverse() : duplicatedImages;

                const slidesToShow = row.images.length;
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
                      this.refreshTrackStates();
                    }}
                    onDragStart={(event) => event.preventDefault()}
                    onMouseEnter={() => this.pauseRow(rowIndex)}
                    onMouseLeave={() => {
                      const state = this.trackStates[rowIndex];
                      if (state && !state.isDragging) {
                        this.resumeRow(rowIndex);
                      }
                    }}
                    onPointerDown={(event) => this.handleRowPointerDown(rowIndex, event)}
                    onPointerMove={(event) => this.handleRowPointerMove(rowIndex, event)}
                    onPointerUp={() => this.handleRowPointerUp(rowIndex)}
                    onPointerCancel={() => this.handleRowPointerUp(rowIndex)}
                  >
                    <ComposerSlider
                      ref={(s: any) => {
                        this.sliderRefs[rowIndex] = s;
                        this.refreshTrackStates();
                      }}
                      {...sliderSettings}
                      className={this.decorateCSS("slider")}
                      key={sliderKey}
                    >
                      {rowImages.map((_, imageIndex) => {
                        const originalIndex = imageIndex % row.images.length;
                        const mediaValue = row.images[originalIndex]?.media;
                        if (!mediaValue) {
                          return null;
                        }
                        return (
                          <div className={this.decorateCSS("image-card")} key={`row-${rowIndex}-img-${imageIndex}`}>
                            <div
                              className={this.decorateCSS("image-button")}
                              draggable={false}
                              onDragStart={(event) => event.preventDefault()}
                              onClick={() => handleOpenPopup(mediaValue, rowIndex, originalIndex)}
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

        {isPopupOpen && popupValue && (
          <Base.Overlay isVisible className={this.decorateCSS("overlay")} onClick={handleClosePopup}>
              <div className={this.decorateCSS("modal-wrapper")} onClick={(e) => e.stopPropagation()}>
                <div className={this.decorateCSS("modal-content")}>
                  <div className={this.decorateCSS("close")} onClick={handleClosePopup}>
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
                  handlePopupNavigate("prev");
                }}
              >
                <Base.Media value={this.getPropValue("popupLeftIcon")} className={this.decorateCSS("icon")} />
              </div>

              <div
                className={`${this.decorateCSS("nav")} ${this.decorateCSS("next")}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handlePopupNavigate("next");
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

