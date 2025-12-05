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
  speed: number;
  images: GalleryImageItem[];
};

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
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Creative collaborators",
    });

    this.addProp({
      type: "image",
      key: "background",
      displayer: "Background Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689af25436675f002db98b79?alt=media",
    });

    this.addProp({
      type: "boolean",
      key: "backgroundOverlay",
      displayer: "Overlay",
      value: true,
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
            { type: "number", key: "speed", displayer: "Speed", value: 400 },
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
            { type: "number", key: "speed", displayer: "Speed", value: 400 },
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
        .map((row: RawGalleryRow) => ({
          speed: row.speed ?? 0,
          images: (row.images || []).filter((img) => img.media),
        }))
        .filter((row) => row.images.length > 0);
    };

    const handleOpenPopup = (media: TypeMediaInputValue | undefined, rowIndex: number, imageIndex: number) => {
      if (!media) return;
      this.setComponentState("imagePopupOpen", true);
      this.setComponentState("imagePopupValue", media);
      this.setComponentState("imagePopupRow", rowIndex);
      this.setComponentState("imagePopupIndex", imageIndex);
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
    const isPopupOpen = !!this.getComponentState("imagePopupOpen");
    const popupValue = this.getComponentState("imagePopupValue");
    
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const subtitle = this.getPropValue("subtitle");
    const hasTitle = this.castToString(title);
    const hasDescription = this.castToString(description);
    const hasSubtitle = this.castToString(subtitle);
    const backgroundImage = this.castToString(this.getPropValue("background"));
    const showOverlay = this.getPropValue("backgroundOverlay");

    const headingClasses = backgroundImage
      ? `${this.decorateCSS("heading")} ${this.decorateCSS("with-bg")}`
      : this.decorateCSS("heading");

    return (
      <Base.Container
        isFull
        className={this.decorateCSS("container")}
        {...(backgroundImage && { style: { backgroundImage: `url(${backgroundImage})` } })}
        data-overlay={showOverlay && !!backgroundImage}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(hasSubtitle || hasTitle || hasDescription) && (
            <div className={this.decorateCSS("text-wrapper")}>
              <div className={headingClasses}>
                {hasSubtitle && (
                  <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                    {subtitle}
                  </Base.SectionSubTitle>
                )}
                {hasTitle && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
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
                    ? Array.from({ length: 6 }, () => row.images[0])
                    : [...row.images];

                while (duplicatedImages.length < 6) {
                  duplicatedImages = [...duplicatedImages, ...row.images];
                }

                const totalDuration = row.speed > 0 ? row.speed * 1000 : 40000;
                const slideDuration = Math.max(500, Math.floor(totalDuration / row.images.length));
                const autoplaySpeed = 0;
                const slidesToShow = row.images.length;
                const sliderKey = `slider-${rowIndex}-${row.speed}-${slidesToShow}-${isRightToLeft ? "rtl" : "ltr"}`;
                const rowClassName = isRightToLeft
                  ? `${this.decorateCSS("gallery-row")} ${this.decorateCSS("gallery-row-reverse")}`
                  : this.decorateCSS("gallery-row");

                return (
                  <div className={rowClassName} key={`row-${rowIndex}`}>
                    <div className={this.decorateCSS("slider-wrapper")} style={{ ['--track-duration' as any]: `${totalDuration}ms` }}>
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
                        return (
                          <div className={this.decorateCSS("image-card")} key={`row-${rowIndex}-img-${imageIndex}`}>
                            <Base.Button
                              buttonType="Link"
                              className={this.decorateCSS("image-button")}
                              onClick={() => handleOpenPopup(row.images[originalIndex]?.media, rowIndex, originalIndex)}
                            >
                              <Base.Media value={row.images[originalIndex]?.media} className={this.decorateCSS("image-media")} />
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
            <div className={this.decorateCSS("popup-overlay")}>
              <div className={this.decorateCSS("popup-frame")}>
                <button className={this.decorateCSS("popup-close")} onClick={handleClosePopup}>
                  <Base.Media value={this.getPropValue("popupCloseIcon")} className={this.decorateCSS("arrow")} />
                </button>

                <div className={this.decorateCSS("popup-image-wrapper")}>
                  <Base.Media value={popupValue} className={this.decorateCSS("popup-media")} />
                </div>

                <div className={this.decorateCSS("popup-controls")}>
                  <button
                    className={this.decorateCSS("popup-arrow")}
                    onClick={() => handlePopupNavigate("prev")}
                  >
                    <Base.Media value={this.getPropValue("popupLeftIcon")} className={this.decorateCSS("arrow")} />
                  </button>

                  <span className={this.decorateCSS("popup-counter")}>
                    {(this.getComponentState("imagePopupIndex") ?? 0) + 1}/
                    {(() => {
                      const rowIndex = this.getComponentState("imagePopupRow");
                      if (rowIndex === null || rowIndex === undefined) {
                        return 1;
                      }
                      return rows[rowIndex]?.images.length || 1;
                    })()}
                  </span>

                  <button
                    className={this.decorateCSS("popup-arrow")}
                    onClick={() => handlePopupNavigate("next")}
                  >
                    <Base.Media value={this.getPropValue("popupRightIcon")} className={this.decorateCSS("arrow")} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default ImageGallery11;

