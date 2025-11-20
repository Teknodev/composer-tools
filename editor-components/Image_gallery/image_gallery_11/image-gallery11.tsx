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

const MIN_DUPLICATED_SLIDES = 6;

const baseSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  cssEase: "linear",
  slidesToScroll: 1,
  variableWidth: true,
  swipe: false,
  draggable: false,
  touchMove: false,
  pauseOnHover: false,
};

class ImageGallery11 extends BaseImageGallery {
  private sliderRefs: any[] = [];

  constructor(props?: unknown) {
    super(props, styles);


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
      displayer: "Background Media",
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689af25436675f002db98b79?alt=media",
      },
      additionalParams: { availableTypes: ["image", "video"] },
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });

    this.addProp({
      type: "boolean",
      key: "cardOverlay",
      displayer: "Card Overlay",
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
                      additionalParams: { availableTypes: ["image"] },
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
                      additionalParams: { availableTypes: ["image"] },
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
                      additionalParams: { availableTypes: ["image"] },
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
                      additionalParams: { availableTypes: ["image"] },
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
                      additionalParams: { availableTypes: ["image"] },
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
                      additionalParams: { availableTypes: ["image"] },
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
      displayer: "Popup Left Icon",
      value: { type: "icon", name: "IoMdArrowDropleft" },
    });

    this.addProp({
      type: "media",
      key: "popupRightIcon",
      displayer: "Popup Right Icon",
      value: { type: "icon", name: "IoMdArrowDropright" },
    });

    this.addProp({
      type: "media",
      key: "popupCloseIcon",
      displayer: "Popup Close Icon",
      value: { type: "icon", name: "MdClose" },
    });



  }

  static getName(): string {
    return "Image Gallery 11";
  }

  render() {
    const getProcessedRows = (): GalleryRow[] => {
      const rawRows = (this.castToObject("galleryRows") || []) as RawGalleryRow[];
      return rawRows
        .filter((row): row is RawGalleryRow => !!row)
        .map((row: RawGalleryRow) => ({
          images: (row.images || []).filter((img) => !!img?.media),
        }))
        .filter((row) => row.images.length > 0);
    };

    const handleOpenPopup = (media: TypeMediaInputValue | undefined, rowIndex: number, imageIndex: number) => {
      if (!media) return;
      this.setComponentState("imagePopupOpen", true);
      this.setComponentState("imagePopupValue", media);
      this.setComponentState("imagePopupRow", rowIndex);
      this.setComponentState("imagePopupIndex", imageIndex);
      const slider = this.sliderRefs[rowIndex];
      if (slider) {
        if (slider?.slickPause) {
          slider.slickPause();
        } else if (slider?.innerSlider?.slickPause) {
          slider.innerSlider.slickPause();
        }
      }
    };

    const handleClosePopup = () => {
      this.setComponentState("imagePopupOpen", false);
      this.setComponentState("imagePopupValue", null);
      this.setComponentState("imagePopupRow", null);
      this.setComponentState("imagePopupIndex", null);

      (this.sliderRefs || []).forEach((r) => {
        if (!r) return;
        if (r?.slickPlay) {
          r.slickPlay();
        } else if (r?.innerSlider?.slickPlay) {
          r.innerSlider.slickPlay();
        }
      });
    };

    const handlePopupNavigate = (direction: "prev" | "next") => {
      const rowIndex = this.getComponentState("imagePopupRow");
      if (rowIndex == null) return;
      const rows = getProcessedRows();
      const row = rows[rowIndex];
      if (!row || row.images.length === 0) return;

      const currentIndex = this.getComponentState("imagePopupIndex") ?? 0;
      const total = row.images.length;
      const nextIndex = direction === "next" ? (currentIndex + 1) % total : (currentIndex - 1 + total) % total;

      this.setComponentState("imagePopupIndex", nextIndex);
      this.setComponentState("imagePopupValue", row.images[nextIndex].media);
    };

    const rows = getProcessedRows();
    const popupRowIndex = this.getComponentState("imagePopupRow");
    const popupImageIndex = this.getComponentState("imagePopupIndex") ?? 0;
    const popupRow = typeof popupRowIndex === "number" ? rows[popupRowIndex] : undefined;
    const popupValue = popupRow?.images?.[popupImageIndex]?.media;
    const isPopupOpen = !!(this.getComponentState("imagePopupOpen") && popupValue);
    
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const subtitle = this.getPropValue("subtitle");
    const hasTitle = this.castToString(title);
    const hasDescription = this.castToString(description);
    const hasSubtitle = this.castToString(subtitle);
    const rawBackground = this.getPropValue("background") as TypeMediaInputValue | string | undefined;
    const backgroundMedia: TypeMediaInputValue | undefined =
      typeof rawBackground === "string"
        ? { type: "image", url: rawBackground }
        : rawBackground;
    const backgroundImage =
      typeof backgroundMedia === "object" && backgroundMedia?.type === "image"
        ? backgroundMedia.url
        : typeof rawBackground === "string"
        ? rawBackground
        : "";
    const hasBackgroundMedia = !!backgroundMedia;
    const showOverlay = this.getPropValue("overlay") && hasBackgroundMedia;
    const subtitleType = Base.getSectionSubTitleType();
    const baseSubtitleClass = this.decorateCSS("subtitle");
    const subtitleWithBgClass = hasBackgroundMedia
      ? `${baseSubtitleClass} ${this.decorateCSS("subtitle-with-bg")}`
      : baseSubtitleClass;
    const subtitleClasses =
      hasBackgroundMedia && subtitleType === "badge"
        ? `${subtitleWithBgClass} ${this.decorateCSS("subtitle-transparent")}`
        : subtitleWithBgClass;
    const cardOverlayEnabled = !!this.getPropValue("cardOverlay");

    const headingClasses = hasBackgroundMedia
      ? `${this.decorateCSS("heading")} ${this.decorateCSS("with-bg")}`
      : this.decorateCSS("heading");
    const textWrapperClass = this.decorateCSS("text-wrapper");
    const textAlignmentStyles = { textAlign: "left", marginLeft: 0, marginRight: "auto" } as const;
    const containerStyle: Record<string, string> = {};
    if (backgroundImage) {
      containerStyle.backgroundImage = `url(${backgroundImage})`;
    }
    if (cardOverlayEnabled) {
      containerStyle["--image-overlay-color"] = "rgba(0, 0, 0, 0.35)";
    }
    return (
      <Base.Container
        isFull
        className={this.decorateCSS("container")}
        {...(Object.keys(containerStyle).length > 0 && { style: containerStyle })}
        data-overlay={showOverlay}
      >
        {backgroundMedia && backgroundMedia.type === "video" && (
          <div className={this.decorateCSS("background-media")}>
            <Base.Media value={backgroundMedia} className={this.decorateCSS("background-media-asset")} />
          </div>
        )}
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(hasSubtitle || hasTitle || hasDescription) && (
            <div className={textWrapperClass}>
              <div className={headingClasses}>
                {hasSubtitle && (
                  <Base.SectionSubTitle className={subtitleClasses} style={textAlignmentStyles}>
                    {subtitle}
                  </Base.SectionSubTitle>
                )}
                {hasTitle && (
                  <Base.SectionTitle className={this.decorateCSS("title")} style={textAlignmentStyles}>
                    {title}
                  </Base.SectionTitle>
                )}
                {hasDescription && (
                  <Base.SectionDescription className={this.decorateCSS("description")} style={textAlignmentStyles}>
                    {description}
                  </Base.SectionDescription>
                )}
              </div>
            </div>
          )}

          {rows.length > 0 && (
            <div className={this.decorateCSS("gallery")}>
              {rows.map((row: GalleryRow, rowIndex: number) => {
                const isRightToLeft = rowIndex % 2 !== 0;
                let duplicatedImages =
                  row.images.length === 1
                    ? Array.from({ length: MIN_DUPLICATED_SLIDES }, () => row.images[0])
                    : [...row.images];

                while (duplicatedImages.length < Math.max(MIN_DUPLICATED_SLIDES, row.images.length)) {
                  duplicatedImages = [...duplicatedImages, ...row.images];
                }

                const totalDuration = 60000;
                const slideDuration = 1200;
                const autoplaySpeed = 0;
                const slidesToShow = row.images.length;
                const sliderKey = `slider-${rowIndex}-${slidesToShow}-${isRightToLeft ? "rtl" : "ltr"}`;
                const rowClassName = isRightToLeft
                  ? `${this.decorateCSS("gallery-row")} ${this.decorateCSS("gallery-row-reverse")}`
                  : this.decorateCSS("gallery-row");

                return (
                  <div className={rowClassName} key={`row-${rowIndex}`}>
                    <div
                      className={this.decorateCSS("slider-wrapper")}
                      style={{ ["--track-duration" as any]: `${totalDuration}ms` }}
                    >
                      <ComposerSlider
                        ref={(s: any) => (this.sliderRefs[rowIndex] = s)}
                        {...baseSettings}
                        speed={slideDuration}
                        autoplaySpeed={autoplaySpeed}
                        slidesToShow={Math.max(1, slidesToShow)}
                        rtl={false}
                        className={this.decorateCSS("slider")}
                        key={sliderKey}
                      >
                        {(isRightToLeft ? [...duplicatedImages].reverse() : duplicatedImages).map((imageItem, imageIndex) => {
                          const originalIndex = (() => {
                            const foundIndex = row.images.indexOf(imageItem);
                            return foundIndex >= 0 ? foundIndex : imageIndex % row.images.length;
                          })();
                          const mediaValue = row.images[originalIndex]?.media;
                          if (!mediaValue) {
                            return null;
                          }
                          return (
                            <div className={this.decorateCSS("image-card")} key={`row-${rowIndex}-img-${imageIndex}`}>
                              <Base.Button
                                buttonType="Link"
                                className={this.decorateCSS("image-button")}
                                onClick={() => handleOpenPopup(mediaValue, rowIndex, originalIndex)}
                              >
                                <Base.Media value={mediaValue} className={this.decorateCSS("image-media")} />
                                {cardOverlayEnabled && <span className={this.decorateCSS("card-overlay")} />}
                              </Base.Button>
                            </div>
                          );
                        })}
                      </ComposerSlider>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {isPopupOpen && popupValue && (
            <Base.Overlay isVisible className={this.decorateCSS("popup-overlay")} onClick={handleClosePopup}>
              <div className={this.decorateCSS("popup-frame")} onClick={(e) => e.stopPropagation()}>
                <button className={this.decorateCSS("popup-close")} onClick={handleClosePopup}>
                  <Base.Media value={this.getPropValue("popupCloseIcon")} className={this.decorateCSS("arrow")} />
                </button>

                <div className={this.decorateCSS("popup-media-section")}>
                  <button
                    className={`${this.decorateCSS("popup-arrow")} ${this.decorateCSS("popup-arrow-left")}`}
                    onClick={() => handlePopupNavigate("prev")}
                    aria-label="Previous image"
                  >
                    <Base.Media value={this.getPropValue("popupLeftIcon")} className={this.decorateCSS("arrow")} />
                  </button>

                  <div className={this.decorateCSS("popup-image-wrapper")}>
                    <Base.Media value={popupValue} className={this.decorateCSS("popup-media")} />
                  </div>

                  <button
                    className={`${this.decorateCSS("popup-arrow")} ${this.decorateCSS("popup-arrow-right")}`}
                    onClick={() => handlePopupNavigate("next")}
                    aria-label="Next image"
                  >
                    <Base.Media value={this.getPropValue("popupRightIcon")} className={this.decorateCSS("arrow")} />
                  </button>
                </div>

                <div className={this.decorateCSS("popup-controls")}>
                  <span className={this.decorateCSS("popup-counter")}>
                    {(this.getComponentState("imagePopupIndex") ?? 0) + 1}/
                    {(() => {
                      if (popupRowIndex === null || popupRowIndex === undefined) {
                        return 1;
                      }
                      return rows[popupRowIndex]?.images.length || 1;
                    })()}
                  </span>
                </div>
              </div>
            </Base.Overlay>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default ImageGallery11;

