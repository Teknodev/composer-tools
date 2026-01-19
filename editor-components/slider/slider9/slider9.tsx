import * as React from "react";
import { BaseSlider, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./slider9.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type SliderItem = {
  media: TypeMediaInputValue;
  videoMedia: TypeMediaInputValue;
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
      type: "string",
      key: "price",
      displayer: "Price",
      value: "$100",
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

    this.addProp(
      INPUTS.SLIDER_SETTINGS("settings", "Slider Settings", {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
      })
    );

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

    this.setComponentState("vertical-slider-ref", React.createRef());
    this.setComponentState("horizontal-slider-ref", React.createRef());
    this.setComponentState("currentSlideIndex", 0);
    this.setComponentState("isFullscreen", false);
    this.setComponentState("isVideoModalOpen", false);
    this.setComponentState("videoUrl", null);
    this.setComponentState("hoveredIndex", null);
    this.setComponentState("originalSlideIndex", null);
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

  handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - container.left) / container.width) * 100;
    const y = ((e.clientY - container.top) / container.height) * 100;

    const imgElement = e.currentTarget.querySelector(`.${this.decorateCSS("slider-img")}`) as HTMLElement;
    if (imgElement) {
      imgElement.style.transformOrigin = `${x}% ${y}%`;
      imgElement.style.transform = "scale(1.5)";
    }
  };

  handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const imgElement = e.currentTarget.querySelector(`.${this.decorateCSS("img")}`) as HTMLElement;
    if (imgElement) {
      imgElement.style.transform = "scale(1)";
      imgElement.style.transformOrigin = "center";
    }
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

  render() {
    const title = this.getPropValue("title");
    const price = this.getPropValue("price");
    const description = this.getPropValue("description");
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

    const isFullscreen = this.getComponentState("isFullscreen");
    const isVideoModalOpen = this.getComponentState("isVideoModalOpen");
    const videoUrl = this.getComponentState("videoUrl");
    const hoveredIndex = this.getComponentState("hoveredIndex");
    const currentSlideIndex = this.getComponentState("currentSlideIndex");
    const verticalSliderRef = this.getComponentState("vertical-slider-ref");
    const horizontalSliderRef = this.getComponentState("horizontal-slider-ref");

    const sliderItems = this.castToObject<SliderItem[]>("sliderItems");
    const RightContentExist = title || price || description;

    const verticalSettings = {
      arrows: false,
      dots: false,
      infinite: false,
      speed: 500,
      autoplay: true,
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
      arrows: false,
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 1500,
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
            className={`${this.decorateCSS("content")} ${
              sliderItems.length < 1 ? this.decorateCSS("no-left-part") : ""
            }`}
          >
            {sliderItems.length > 0 && (
              <div
                className={`${this.decorateCSS("sliders-parent")} ${
                  !RightContentExist ? this.decorateCSS("empty-right-content") : ""
                }`}
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
                          <Base.Media value={verticalPreviousArrow} />
                        </div>
                      )}
                      {verticalNextArrow && (
                        <div
                          className={this.decorateCSS("verticalNextArrow")}
                          onClick={() => verticalSliderRef.current?.slickNext()}
                        >
                          <Base.Media value={verticalNextArrow} />
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
                          className={this.decorateCSS("img-container")}
                          onMouseMove={this.handleMouseMove}
                          onMouseLeave={this.handleMouseLeave}
                        >
                          <Base.Media value={item.media} className={this.decorateCSS("slider-img")} />
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
                          <Base.Media value={horizontalPreviousArrow} />
                        </div>
                      )}
                      {horizontalNextArrow && (
                        <div
                          className={this.decorateCSS("horizontalNextArrow")}
                          onClick={() => horizontalSliderRef.current?.slickNext()}
                        >
                          <Base.Media value={horizontalNextArrow} />
                        </div>
                      )}
                    </div>
                  )}

                  <div className={this.decorateCSS("buttons")}>
                    <div className={this.decorateCSS("button-wrapper")}>
                      <div className={this.decorateCSS("icon-wrapper")}>
                        <div className={this.decorateCSS("button")} onClick={this.handlePlayVideo}>
                          <Base.Media value={videoButton} />
                        </div>
                      </div>
                      <div className={this.decorateCSS("button-text-wrapper")}>
                        <span className={this.decorateCSS("button-text")}>{videoButtonText}</span>
                      </div>
                    </div>

                    <div className={this.decorateCSS("button-wrapper")}>
                      <div className={this.decorateCSS("icon-wrapper")}>
                        <div className={this.decorateCSS("button")} onClick={this.handleFullscreen}>
                          <Base.Media value={fsButton} />
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
                          <Base.Media value={overlayLeftArrow} />
                        </div>
                        <div
                          className={this.decorateCSS("overlay-right-button")}
                          onClick={(e) => {
                            e.stopPropagation();
                            this.fullscreenNextImage();
                          }}
                        >
                          <Base.Media value={overlayRightArrow} />
                        </div>
                        <button
                          className={this.decorateCSS("close-button-wrapper")}
                          onClick={this.handleCloseFullscreen}
                        >
                          <Base.Media value={exitButton} className={this.decorateCSS("close-button")} />
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
                          <Base.Media value={exitButton} className={this.decorateCSS("close-button")} />
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
                  {title && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
                  {price && <Base.P className={this.decorateCSS("price")}>{price}</Base.P>}
                  {description && (
                    <Base.SectionDescription className={this.decorateCSS("description")}>
                      {description}
                    </Base.SectionDescription>
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