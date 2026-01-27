import * as React from "react";
import { BaseSlider, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./slider9.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import { getCurrencyInfo } from "../../../utils/currency";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type SliderItem = {
  media: TypeMediaInputValue;
  videoMedia: TypeMediaInputValue;
};

type WishlistItem = {
  wishlistIcon: TypeMediaInputValue;
  wishlistText: React.JSX.Element;
  wishlistUrl: string;
};

type ReviewItem = {
  reviewText: React.JSX.Element;
  reviewCount: number;
  starIcon: TypeMediaInputValue;
  starIconBorder: TypeMediaInputValue;
  point: number;
};

type CategoryOrTag = {
  title: React.JSX.Element;
  items: { category?: React.JSX.Element; tag?: React.JSX.Element }[];
};

type QuantitySection = {
  quantityText: React.JSX.Element;
  leftArrow: TypeMediaInputValue;
  rightArrow: TypeMediaInputValue;
  button: INPUTS.CastedButton;
  wishlist: WishlistItem;
};

class Slider9 extends BaseSlider {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Studio Headphones",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "When we first checked out our new headphones, we noticed the box said 'improved bass'. We had to wonder if this was marketing jargon or the real thing? But it only took a moment to realize that bass was not kidding.",
    });

    this.addProp({
      type: "currency",
      key: "price",
      displayer: "Price",
      value: {
        value: "100",
        currency: "USD",
      },
    });

    this.addProp({
      type: "object",
      key: "reviewItem",
      displayer: "Review Section",
      value: [
        {
          type: "string",
          key: "reviewText",
          displayer: "Text",
          value: "REVIEWS",
        },
        {
          type: "number",
          key: "reviewCount",
          displayer: "Count",
          value: 12,
        },
        {
          type: "number",
          key: "point",
          displayer: "Point",
          value: 5,
          max: 5,
        },
        {
          type: "media",
          key: "starIcon",
          displayer: "Rated Icon",
          additionalParams: {
            availableTypes: ["icon"],
          },
          value: {
            type: "icon",
            name: "MdOutlineStar",
          } as any,
        },
        {
          type: "media",
          key: "starIconBorder",
          displayer: "Unrated Icon",
          additionalParams: {
            availableTypes: ["icon"],
          },
          value: {
            type: "icon",
            name: "MdOutlineStarBorder",
          } as any,
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "quantitySection",
      displayer: "Quantity Section",
      value: [
        {
          type: "string",
          key: "quantityText",
          displayer: "Placeholder Text",
          value: "Quantity",
        },
        {
          type: "media",
          key: "leftArrow",
          displayer: "Left Arrow",
          additionalParams: {
            availableTypes: ["icon"],
          },
          value: {
            type: "icon",
            name: "IoMdArrowDropleft",
          } as any,
        },
        {
          type: "media",
          key: "rightArrow",
          displayer: "Right Arrow",
          additionalParams: {
            availableTypes: ["icon"],
          },
          value: {
            type: "icon",
            name: "IoMdArrowDropright",
          } as any,
        },
        INPUTS.BUTTON("button", "Button", "ADD TO CART", "", null, null, "Black"),
        {
          type: "object",
          key: "wishlist",
          displayer: "Wishlist",
          value: [
            {
              type: "media",
              key: "wishlistIcon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "FaHeart",
              } as any,
            },
            {
              type: "string",
              key: "wishlistText",
              displayer: "Text",
              value: "ADD TO WISHLIST",
            },
            {
              type: "page",
              key: "wishlistUrl",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "categoriesAndTags",
      displayer: "Information",
      value: [
        {
          type: "object",
          key: "section",
          displayer: "section",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Label",
              value: "SKU: ",
            },
            {
              type: "array",
              key: "items",
              displayer: "Items",
              value: [
                {
                  type: "object",
                  key: "item",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "category",
                      displayer: "Text",
                      value: "008",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "section",
          displayer: "section",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Label",
              value: "Categories: ",
            },
            {
              type: "array",
              key: "items",
              displayer: "Items",
              value: [
                {
                  type: "object",
                  key: "item",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "category",
                      displayer: "Text",
                      value: "Decoration",
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
      type: "array",
      key: "sliderItems",
      displayer: "Slider Items",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: { availableTypes: ["image", "video"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/674dcc6d506a40002c305aa6?alt=media",
              },
            },
            {
              type: "media",
              key: "videoMedia",
              displayer: "Video Media",
              additionalParams: { availableTypes: ["video"] },
              value: {
                type: "video",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667e77bd0181a1002c334f66?alt=media&timestamp=1719564238038",
              },
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: { availableTypes: ["image", "video"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/674dcc83506a40002c305ab2?alt=media",
              },
            },
            {
              type: "media",
              key: "videoMedia",
              displayer: "Video Media",
              additionalParams: { availableTypes: ["video"] },
              value: {
                type: "video",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b08ebb03b007002cc77877?alt=media",
              },
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: { availableTypes: ["image", "video"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/674dcc99506a40002c305abc?alt=media",
              },
            },
            {
              type: "media",
              key: "videoMedia",
              displayer: "Video Media",
              additionalParams: { availableTypes: ["video"] },
              value: {
                type: "video",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667e77bd0181a1002c334f66?alt=media&timestamp=1719564238038",
              },
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: { availableTypes: ["image", "video"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/674dccaa506a40002c305ac7?alt=media",
              },
            },
            {
              type: "media",
              key: "videoMedia",
              displayer: "Video Media",
              additionalParams: { availableTypes: ["video"] },
              value: {
                type: "video",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667e77bd0181a1002c334f66?alt=media&timestamp=1719564238038",
              },
            },
          ],
        },
      ],
    });

    this.addProp(INPUTS.SLIDER_SETTINGS("settings", "Slider Config"));

    this.addProp({
      type: "media",
      key: "verticalPreviousArrow",
      displayer: "Vertical Previous Arrow Icon",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "MdOutlineKeyboardArrowUp" },
    });

    this.addProp({
      type: "media",
      key: "verticalNextArrow",
      displayer: "Vertical Next Arrow Icon",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "MdOutlineKeyboardArrowDown" },
    });

    this.addProp({
      type: "media",
      key: "horizontalPreviousArrow",
      displayer: "Horizontal Previous Arrow Icon",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "MdOutlineKeyboardArrowLeft" },
    });

    this.addProp({
      type: "media",
      key: "horizontalNextArrow",
      displayer: "Horizontal Next Arrow Icon",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "MdOutlineKeyboardArrowRight" },
    });

    this.addProp({
      type: "media",
      key: "videoButton",
      displayer: "Video Button Icon",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "CiPlay1" },
    });

    this.addProp({
      type: "string",
      key: "videoButtonText",
      displayer: "Video Button Text",
      value: "Watch Video",
    });

    this.addProp({
      type: "media",
      key: "fsButton",
      displayer: "Fullscreen Button Icon",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "TfiFullscreen" },
    });

    this.addProp({
      type: "string",
      key: "fsButtonText",
      displayer: "Fullscreen Button Text",
      value: "Click To Enlarge",
    });

    this.addProp({
      type: "media",
      key: "exitButton",
      displayer: "Exit Button",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "IoMdClose" },
    });

    this.addProp({
      type: "media",
      key: "overlayLeftArrow",
      displayer: "Fullscreen Left Arrow",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "BiLeftArrowAlt" },
    });

    this.addProp({
      type: "media",
      key: "overlayRightArrow",
      displayer: "Fullscreen Right Arrow",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "BiRightArrowAlt" },
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: false,
    });

    this.setComponentState("count", 0);
    this.setComponentState("vertical-slider-ref", React.createRef());
    this.setComponentState("horizontal-slider-ref", React.createRef());
    this.setComponentState("currentSlideIndex", 0);
    this.setComponentState("isFullscreen", false);
    this.setComponentState("isVideoModalOpen", false);
    this.setComponentState("videoUrl", null);
    this.setComponentState("hoveredIndex", null);
    this.setComponentState("originalSlideIndex", null);
    this.setComponentState("isDragging", false);
    this.setComponentState("panX", 0);
    this.setComponentState("panY", 0);
    this.setComponentState("startX", 0);
    this.setComponentState("startY", 0);
    this.setComponentState("isZoomed", false);
  }

  static getName(): string {
    return "Slider 9";
  }

  handleFullscreen = () => {
    const currentIndex = this.getComponentState("currentSlideIndex");
    const sliderItems = this.castToObject<SliderItem[]>("sliderItems");
    const selectedMedia = sliderItems[currentIndex]?.media;

    if (selectedMedia) {
      this.setComponentState("isFullscreen", true);
      this.setComponentState("originalSlideIndex", currentIndex);
    } else {
      this.setComponentState("isFullscreen", false);
    }
  };

  handleCloseFullscreen = () => {
    this.setComponentState("isFullscreen", false);
    this.setComponentState("fullscreenImageUrl", null);
    this.setComponentState("hoveredIndex", null);
    this.setComponentState("originalSlideIndex", null);
  };

  handlePlayVideo = () => {
    const currentIndex = this.getComponentState("currentSlideIndex");
    const sliderItems = this.castToObject<SliderItem[]>("sliderItems");
    const selectedVideoMedia = sliderItems[currentIndex]?.videoMedia;

    if (selectedVideoMedia) {
      this.setComponentState("isVideoModalOpen", true);
      this.setComponentState("videoUrl", selectedVideoMedia);
    }
  };

  handleCloseVideoModal = () => {
    this.setComponentState("isVideoModalOpen", false);
    this.setComponentState("videoUrl", null);
  };

  handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    this.setComponentState("isDragging", true);
    this.setComponentState("startX", e.clientX - this.getComponentState("panX"));
    this.setComponentState("startY", e.clientY - this.getComponentState("panY"));
  };

  handleMouseMovePan = (e: React.MouseEvent<HTMLDivElement>) => {
    if (this.getComponentState("isDragging")) {
      const newPanX = e.clientX - this.getComponentState("startX");
      const newPanY = e.clientY - this.getComponentState("startY");

      const container = e.currentTarget.getBoundingClientRect();
      const scale = 1.5;

      const maxX = (container.width * (scale - 1)) / 2;
      const maxY = (container.height * (scale - 1)) / 2;

      const constrainedX = Math.max(-maxX, Math.min(maxX, newPanX));
      const constrainedY = Math.max(-maxY, Math.min(maxY, newPanY));

      this.setComponentState("panX", constrainedX);
      this.setComponentState("panY", constrainedY);
    }
  };

  handleMouseUp = () => {
    this.setComponentState("isDragging", false);
  };

  handleMouseEnter = () => {
    this.setComponentState("isZoomed", true);
  };

  handleMouseLeave = () => {
    this.setComponentState("isZoomed", false);
    this.setComponentState("isDragging", false);
    this.setComponentState("panX", 0);
    this.setComponentState("panY", 0);
  };

  fullscreenPrevImage = () => {
    const originalSlideIndex = this.getComponentState("originalSlideIndex");
    const sliderItems = this.castToObject<SliderItem[]>("sliderItems");
    const galleryLength = sliderItems.length;
    const newIndex = (originalSlideIndex - 1 + galleryLength) % galleryLength;
    this.setComponentState("originalSlideIndex", newIndex);
    this.setComponentState("hoveredIndex", null);
  };

  fullscreenNextImage = () => {
    const originalSlideIndex = this.getComponentState("originalSlideIndex");
    const sliderItems = this.castToObject<SliderItem[]>("sliderItems");
    const galleryLength = sliderItems.length;
    const newIndex = (originalSlideIndex + 1) % galleryLength;
    this.setComponentState("originalSlideIndex", newIndex);
    this.setComponentState("hoveredIndex", null);
  };

  getCurrentFullscreenItem(): SliderItem | undefined {
    const sliderItems = this.castToObject<SliderItem[]>("sliderItems");
    const originalIndex = this.getComponentState("originalSlideIndex");
    return sliderItems[originalIndex];
  }

  handleLeftClick = () => {
    let count = this.getComponentState("count");
    if (count > 0) {
      this.setComponentState("count", count - 1);
    }
  };

  handleRightClick = () => {
    let count = this.getComponentState("count");
    this.setComponentState("count", count + 1);
  };

  render() {
    const title = this.getPropValue("title");
    const titleExist = this.castToString(title);
    const price = this.getPropValue("price");
    const description = this.getPropValue("description");
    const descriptionExist = this.castToString(description);
    const reviewItem = this.castToObject<ReviewItem>("reviewItem");
    const quantitySection = this.castToObject<QuantitySection>("quantitySection");
    const categoriesAndTags = this.castToObject<CategoryOrTag[]>("categoriesAndTags");

    const verticalNextArrow = this.getPropValue("verticalNextArrow");
    const verticalPreviousArrow = this.getPropValue("verticalPreviousArrow");
    const horizontalPreviousArrow = this.getPropValue("horizontalPreviousArrow");
    const horizontalNextArrow = this.getPropValue("horizontalNextArrow");
    const videoButton = this.getPropValue("videoButton");
    const videoButtonText = this.getPropValue("videoButtonText");
    const fsButton = this.getPropValue("fsButton");
    const fsButtonText = this.getPropValue("fsButtonText");
    const exitButton = this.getPropValue("exitButton");
    const overlayLeftArrow = this.getPropValue("overlayLeftArrow");
    const overlayRightArrow = this.getPropValue("overlayRightArrow");
    const overlay = this.getPropValue("overlay");

    const isFullscreen = this.getComponentState("isFullscreen");
    const isVideoModalOpen = this.getComponentState("isVideoModalOpen");
    const videoUrl = this.getComponentState("videoUrl");
    const hoveredIndex = this.getComponentState("hoveredIndex");
    const currentSlideIndex = this.getComponentState("currentSlideIndex");
    const verticalSliderRef = this.getComponentState("vertical-slider-ref");
    const horizontalSliderRef = this.getComponentState("horizontal-slider-ref");

    const isDragging = this.getComponentState("isDragging");
    const panX = this.getComponentState("panX");
    const panY = this.getComponentState("panY");
    const isZoomed = this.getComponentState("isZoomed");
    const sliderItems = this.castToObject<SliderItem[]>("sliderItems");

    const buttonText = this.getPropValue("text", { parent_object: quantitySection.button as any });
    const buttonType = this.getPropValue("type", { parent_object: quantitySection.button as any });
    const buttonUrl = this.getPropValue("url", { parent_object: quantitySection.button as any });

    const RightContentExist =
      titleExist ||
      price.value ||
      reviewItem.point ||
      reviewItem.reviewCount ||
      this.castToString(reviewItem.reviewText) ||
      reviewItem.starIcon ||
      reviewItem.starIconBorder ||
      descriptionExist ||
      this.castToString(quantitySection.quantityText) ||
      quantitySection.leftArrow ||
      quantitySection.rightArrow ||
      this.castToString(buttonText) ||
      this.castToString(quantitySection.wishlist.wishlistText) ||
      quantitySection.wishlist.wishlistIcon ||
      categoriesAndTags.length > 0;

    const verticalSettings = {
      ...this.transformSliderValues(this.getPropValue("settings")),
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      afterChange: (current: number) => {
        this.setComponentState("currentSlideIndex", current);
        if (horizontalSliderRef.current) {
          horizontalSliderRef.current.slickGoTo(current);
        }
      },
    };

    const horizontalSettings = {
      ...this.transformSliderValues(this.getPropValue("settings")),
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: (currentIndex: number) => {
        this.setComponentState("currentSlideIndex", currentIndex);
      },
    };

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.ContainerGrid
            className={`${this.decorateCSS("content")} ${sliderItems.length < 1 ? this.decorateCSS("no-left-part") : ""} ${!RightContentExist ? this.decorateCSS("center-content") : ""}`}
          >
            {sliderItems.length > 0 && (
              <div
                className={`${this.decorateCSS("sliders-parent")} ${!RightContentExist && this.decorateCSS("empty-right-content")}`}
              >
                <div className={this.decorateCSS("vertical-parent")}>
                  <ComposerSlider
                    {...verticalSettings}
                    className={this.decorateCSS("carousel-vertical")}
                    ref={verticalSliderRef}
                  >
                    {sliderItems.map((item, indexSlider) => {
                      const isActive = currentSlideIndex === indexSlider;
                      const isHovered = hoveredIndex === indexSlider;

                      return (
                        <div className={this.decorateCSS("slick-slide-wrapper")} key={indexSlider}>
                          <div
                            className={this.decorateCSS("img-container")}
                            onClick={() => {
                              if (!isFullscreen) {
                                this.setComponentState("currentSlideIndex", indexSlider);
                                this.setComponentState("hoveredIndex", indexSlider);
                                if (horizontalSliderRef.current) {
                                  horizontalSliderRef.current.slickGoTo(indexSlider);
                                }
                              }
                            }}
                            onMouseEnter={() => this.setComponentState("hoveredIndex", indexSlider)}
                            onMouseLeave={() => this.setComponentState("hoveredIndex", null)}
                          >
                            <div className={this.decorateCSS("img")}>
                              <Base.Media value={item.media} className={this.decorateCSS("slider-img")} />
                            </div>
                            {!isFullscreen && (isActive || isHovered) && (
                              <div className={this.decorateCSS("overlay")}></div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </ComposerSlider>

                  {(verticalPreviousArrow || verticalNextArrow) && (
                    <div className={this.decorateCSS("verticalArrows")}>
                      {verticalPreviousArrow && (
                        <div
                          className={this.decorateCSS("verticalPreviousArrow")}
                          onClick={() => verticalSliderRef.current?.slickPrev()}
                        >
                          <Base.Media value={verticalPreviousArrow} className={this.decorateCSS("arrow-icon")} />
                        </div>
                      )}
                      {verticalNextArrow && (
                        <div
                          className={this.decorateCSS("verticalNextArrow")}
                          onClick={() => verticalSliderRef.current?.slickNext()}
                        >
                          <Base.Media value={verticalNextArrow} className={this.decorateCSS("arrow-icon")} />
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className={this.decorateCSS("horizontal-parent")}>
                  <ComposerSlider
                    {...horizontalSettings}
                    className={this.decorateCSS("carousel-horizontal")}
                    ref={horizontalSliderRef}
                  >
                    {sliderItems.map((item, indexSlider) => (
                      <div className={this.decorateCSS("slick-slide-wrapper")} key={indexSlider}>
                        <div
                          className={`${this.decorateCSS("img-container")} ${isDragging ? this.decorateCSS("dragging") : ""}`}
                          onMouseDown={this.handleMouseDown}
                          onMouseMove={this.handleMouseMovePan}
                          onMouseUp={this.handleMouseUp}
                          onMouseLeave={this.handleMouseLeave}
                          onMouseEnter={this.handleMouseEnter}
                          style={{ cursor: isZoomed ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in' }}
                        >
                          <div
                            className={this.decorateCSS("slider-img-wrapper")}
                            style={{
                              transform: isZoomed ? `scale(1.5) translate(${panX / 1.5}px, ${panY / 1.5}px)` : 'scale(1)',
                              transition: isDragging ? 'none' : 'transform 0.3s ease-out',
                              width: '100%',
                              height: '100%'
                            }}
                          >
                            <Base.Media
                              value={item.media}
                              className={this.decorateCSS("slider-img")}
                            />
                          </div>
                          {overlay && <div className={this.decorateCSS("overlay")} />}
                        </div>
                      </div>
                    ))}
                  </ComposerSlider>

                  {(horizontalPreviousArrow || horizontalNextArrow) && (
                    <div className={this.decorateCSS("horizontalArrows")}>
                      {horizontalPreviousArrow && (
                        <div
                          className={this.decorateCSS("horizontalPreviousArrow")}
                          onClick={() => horizontalSliderRef.current?.slickPrev()}
                        >
                          <Base.Media value={horizontalPreviousArrow} className={this.decorateCSS("arrow-icon")} />
                        </div>
                      )}
                      {horizontalNextArrow && (
                        <div
                          className={this.decorateCSS("horizontalNextArrow")}
                          onClick={() => horizontalSliderRef.current?.slickNext()}
                        >
                          <Base.Media value={horizontalNextArrow} className={this.decorateCSS("arrow-icon")} />
                        </div>
                      )}
                    </div>
                  )}

                  <div className={this.decorateCSS("buttons")}>
                    <div className={this.decorateCSS("button-wrapper")}>
                      <div className={this.decorateCSS("icon-wrapper")}>
                        <div className={this.decorateCSS("button")} onClick={this.handlePlayVideo}>
                          <Base.Media value={videoButton} className={this.decorateCSS("button-icon")} />
                        </div>
                      </div>
                      <div className={this.decorateCSS("button-text-wrapper")}>
                        <Base.P className={this.decorateCSS("button-text")}>{videoButtonText}</Base.P>
                      </div>
                    </div>

                    <div className={this.decorateCSS("button-wrapper")}>
                      <div className={this.decorateCSS("icon-wrapper")}>
                        <div className={this.decorateCSS("button")} onClick={this.handleFullscreen}>
                          <Base.Media value={fsButton} className={this.decorateCSS("button-icon")} />
                        </div>
                      </div>
                      <div className={this.decorateCSS("button-text-wrapper")}>
                        <Base.P className={this.decorateCSS("button-text")}>{fsButtonText}</Base.P>
                      </div>
                    </div>
                  </div>

                  {isFullscreen && (
                    <div className={this.decorateCSS("fullscreen-modal")}>
                      <div className={this.decorateCSS("fullscreen-overlay")} onClick={this.handleCloseFullscreen}>
                        <div
                          className={this.decorateCSS("overlay-left-button")}
                          onClick={(e) => {
                            e.stopPropagation();
                            this.fullscreenPrevImage();
                            this.setComponentState("hoveredIndex", null);
                          }}
                        >
                          <Base.Media value={overlayLeftArrow} className={this.decorateCSS("arrow-icon")} />
                        </div>
                        <div
                          className={this.decorateCSS("overlay-right-button")}
                          onClick={(e) => {
                            e.stopPropagation();
                            this.fullscreenNextImage();
                          }}
                        >
                          <Base.Media value={overlayRightArrow} className={this.decorateCSS("arrow-icon")} />
                        </div>
                        <button
                          className={this.decorateCSS("close-button-wrapper")}
                          onClick={this.handleCloseFullscreen}
                        >
                          <Base.Media value={exitButton} className={`${this.decorateCSS("close-button")} ${this.decorateCSS("button-icon")}`} />
                        </button>
                      </div>
                      <div className={this.decorateCSS("fullscreen-content")}>
                        <Base.Media
                          value={this.getCurrentFullscreenItem()?.media}
                          className={this.decorateCSS("fullscreen-image")}
                        />
                      </div>
                    </div>
                  )}

                  {isVideoModalOpen && (
                    <div className={this.decorateCSS("video-modal")}>
                      <div className={this.decorateCSS("video-overlay")} onClick={this.handleCloseVideoModal}></div>
                      <div className={this.decorateCSS("video-content")}>
                        <button
                          className={this.decorateCSS("close-button-wrapper")}
                          onClick={this.handleCloseVideoModal}
                        >
                          <Base.Media value={exitButton} className={`${this.decorateCSS("close-button")} ${this.decorateCSS("button-icon")}`} />
                        </button>

                        <video
                          src={videoUrl?.url || videoUrl}
                          controls
                          className={this.decorateCSS("video-player")}
                          autoPlay
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
            {RightContentExist && (
              <div className={this.decorateCSS("right-content")}>
                <Base.VerticalContent className={this.decorateCSS("text-wrapper")}>
                  {(titleExist || price.value) && (
                    <div className={this.decorateCSS("header")}>
                      {titleExist && (
                        <Base.SectionTitle className={this.decorateCSS("title")}>
                          {title}
                        </Base.SectionTitle>
                      )}
                      {price.value && (
                        <Base.H3 className={this.decorateCSS("price")}>
                          {getCurrencyInfo(price.currency)?.symbol}
                          {price.value}
                        </Base.H3>
                      )}
                    </div>
                  )}
                  {(reviewItem.point ||
                    reviewItem.reviewCount ||
                    this.castToString(reviewItem.reviewText) ||
                    reviewItem.starIcon ||
                    reviewItem.starIconBorder ||
                    descriptionExist) && (
                      <div className={this.decorateCSS("review-and-description")}>
                        {(reviewItem.point ||
                          reviewItem.reviewCount ||
                          this.castToString(reviewItem.reviewText) ||
                          reviewItem.starIcon ||
                          reviewItem.starIconBorder) && (
                            <div className={this.decorateCSS("review-area")}>
                              {(reviewItem.starIcon || reviewItem.starIconBorder || reviewItem.point) && (
                                <div className={this.decorateCSS("stars")}>
                                  {[...Array(5)].map((_, index) => {
                                    return (
                                      <Base.Media
                                        key={index}
                                        value={
                                          index < reviewItem.point
                                            ? reviewItem.starIcon
                                            : reviewItem.starIconBorder
                                        }
                                        className={this.decorateCSS("star")}
                                      />
                                    );
                                  })}
                                </div>
                              )}
                              {(reviewItem.reviewCount ||
                                this.castToString(reviewItem.reviewText)) && (
                                  <div className={this.decorateCSS("review")}>
                                    <span className={this.decorateCSS("brackets")}>(</span>
                                    {reviewItem.reviewCount && (
                                      <Base.P className={this.decorateCSS("review-count")}>
                                        {reviewItem.reviewCount}
                                      </Base.P>
                                    )}
                                    {this.castToString(reviewItem.reviewText) && (
                                      <Base.P className={this.decorateCSS("review-text")}>
                                        {reviewItem.reviewText}
                                      </Base.P>
                                    )}
                                    <span className={this.decorateCSS("brackets")}>)</span>
                                  </div>
                                )}
                            </div>
                          )}
                        {descriptionExist && (
                          <Base.SectionDescription className={this.decorateCSS("description")}>
                            {description}
                          </Base.SectionDescription>
                        )}
                      </div>
                    )}
                  {(this.castToString(quantitySection.quantityText) ||
                    quantitySection.leftArrow ||
                    quantitySection.rightArrow ||
                    this.castToString(buttonText)) && (
                      <div className={this.decorateCSS("inputs")}>
                        {(this.castToString(quantitySection.quantityText) ||
                          quantitySection.leftArrow ||
                          quantitySection.rightArrow) && (
                            <div
                              className={`${this.decorateCSS("count-input")} ${this.castToString(buttonText) && this.decorateCSS("with-button")}`}
                            >
                              {this.castToString(quantitySection.quantityText) && (
                                <Base.P className={this.decorateCSS("label")}>
                                  {quantitySection.quantityText}
                                </Base.P>
                              )}
                              {quantitySection.leftArrow && (
                                <div onClick={this.handleLeftClick} className={this.decorateCSS("left-icon")}>
                                  <Base.Media
                                    value={quantitySection.leftArrow}
                                  />
                                </div>
                              )}
                              <input
                                type="number"
                                min={1}
                                className={this.decorateCSS("input")}
                                value={
                                  this.getComponentState("count") !== undefined
                                    ? String(this.getComponentState("count"))
                                    : ""
                                }
                                onChange={(e) => {
                                  const value = e.target.value;
                                  if (value === "") {
                                    this.setComponentState("count", "");
                                    return;
                                  }

                                  const parsed = parseInt(value, 10);
                                  if (!isNaN(parsed) && parsed >= 1) {
                                    this.setComponentState("count", parsed);
                                  }
                                }}
                              />

                              {quantitySection.rightArrow && (
                                <div onClick={this.handleRightClick} className={this.decorateCSS("right-icon")}>
                                  <Base.Media
                                    value={quantitySection.rightArrow}
                                  />
                                </div>
                              )}
                            </div>
                          )}
                        {this.castToString(buttonText) && (
                          <ComposerLink path={buttonUrl}>
                            <Base.Button
                              className={this.decorateCSS("button")}
                              buttonType={buttonType}
                            >
                              <Base.P className={this.decorateCSS("button-text")}>
                                {buttonText}
                              </Base.P>
                            </Base.Button>
                          </ComposerLink>
                        )}
                      </div>
                    )}
                  {(this.castToString(quantitySection.wishlist.wishlistText) ||
                    quantitySection.wishlist.wishlistIcon) && (
                      <div className={this.decorateCSS("wishlist-container")}>
                        <ComposerLink path={quantitySection.wishlist.wishlistUrl}>
                          <div className={this.decorateCSS("wishlist")}>
                            <Base.Media
                              value={quantitySection.wishlist.wishlistIcon}
                              className={this.decorateCSS("heart-icon")}
                            />
                            {this.castToString(quantitySection.wishlist.wishlistText) && (
                              <span className={this.decorateCSS("cart-title")}>
                                {quantitySection.wishlist.wishlistText}
                              </span>
                            )}
                          </div>
                        </ComposerLink>
                      </div>
                    )}
                  {categoriesAndTags.length > 0 && (
                    <div className={this.decorateCSS("categories")}>
                      {categoriesAndTags.map((item, index) => (
                        <div key={index} className={this.decorateCSS("category")}>
                          {this.castToString(item.title) && (
                            <Base.P className={this.decorateCSS("categoryLabel")}>
                              {item.title}
                            </Base.P>
                          )}
                          {item.items.length > 0 && (
                            <div className={this.decorateCSS("categoryText")}>
                              {item.items.map((subItem, subIndex) => (
                                <Base.P key={subIndex} className={this.decorateCSS("text")}>
                                  {subItem.category || subItem.tag}
                                </Base.P>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </Base.VerticalContent>
              </div>
            )}
          </Base.ContainerGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Slider9;