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
      displayer: "Background Media",
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
      this.setComponentState("imagePopupZoomed", false);
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
      this.setComponentState("imagePopupZoomed", false);

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
      this.setComponentState("imagePopupZoomed", false);
    };

    const rows = getProcessedRows();
    const popupRowIndex = this.getComponentState("imagePopupRow");
    const popupImageIndex = this.getComponentState("imagePopupIndex") ?? 0;
    const popupRow = typeof popupRowIndex === "number" ? rows[popupRowIndex] : undefined;
    const popupValue = popupRow?.images?.[popupImageIndex]?.media;
    const isPopupOpen = !!(this.getComponentState("imagePopupOpen") && popupValue);
    const isPopupZoomed = !!this.getComponentState("imagePopupZoomed");
    const handleTogglePopupZoom = () => {
      this.setComponentState("imagePopupZoomed", !isPopupZoomed);
    };
    
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const subtitle = this.getPropValue("subtitle");
    const hasTitle = this.castToString(title);
    const hasDescription = this.castToString(description);
    const hasSubtitle = this.castToString(subtitle);
    const backgroundMedia = this.getPropValue("background") as TypeMediaInputValue | undefined;
    const isBackgroundImage = !!backgroundMedia && backgroundMedia.type === "image";
    const backgroundImage = isBackgroundImage ? backgroundMedia.url || "" : "";
    const hasBackgroundMedia = !!backgroundMedia;
    const showOverlay = this.getPropValue("backgroundOverlay") && hasBackgroundMedia;
    const subtitleType = Base.getSectionSubTitleType();
    const baseSubtitleClass = this.decorateCSS("subtitle");
    const subtitleClassList = [baseSubtitleClass];
    if (hasBackgroundMedia) {
      subtitleClassList.push(this.decorateCSS("subtitle-with-bg"));
      if (subtitleType === "badge") {
        subtitleClassList.push(this.decorateCSS("subtitle-transparent"));
      }
    }
    const subtitleClasses = subtitleClassList.join(" ");
    const headingClasses = hasBackgroundMedia
      ? `${this.decorateCSS("heading")} ${this.decorateCSS("with-bg")}`
      : this.decorateCSS("heading");
    const showImageOverlay = !!this.getPropValue("imageOverlay");
    return (
      <Base.Container
        isFull
        className={this.decorateCSS("container")}
        style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
      >
        {backgroundMedia && backgroundMedia.type === "video" && (
          <div className={this.decorateCSS("background-media")}>
            <Base.Media value={backgroundMedia} className={this.decorateCSS("background-media-asset")} />
          </div>
        )}
        {showOverlay && <div className={this.decorateCSS("background-overlay")} />}
        <div className={this.decorateCSS("content")}>
          {(hasSubtitle || hasTitle || hasDescription) && (
            <div className={this.decorateCSS("text-wrapper")}>
              <div className={headingClasses}>
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

                const totalDuration = 420000;
                const slideDuration = 12000;
                const autoplaySpeed = 0;
                const slidesToShow = row.images.length;
                const sliderKey = `slider-${rowIndex}-${slidesToShow}-${isRightToLeft ? "rtl" : "ltr"}`;
                const rowClassName = isRightToLeft
                  ? `${this.decorateCSS("gallery-row")} ${this.decorateCSS("gallery-row-reverse")}`
                  : this.decorateCSS("gallery-row");

                const rowWrapperClass = `${rowClassName} ${this.decorateCSS("slider-wrapper")}`;
                return (
                  <div
                    className={rowWrapperClass}
                    key={`row-${rowIndex}`}
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
                          <div className={this.decorateCSS("image-media-wrapper")}>
                            <Base.Media value={mediaValue} className={this.decorateCSS("image-media")} />
                            {showImageOverlay && <div className={this.decorateCSS("image-overlay")} />}
                          </div>
                            </Base.Button>
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

                  <div className={this.decorateCSS("image-container")} onClick={handleTogglePopupZoom}>
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
        </div>
      </Base.Container>
    );
  }
}

export default ImageGallery11;

