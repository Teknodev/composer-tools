import * as React from "react";
import { BaseSlider } from "../../EditorComponent";
import styles from "./slider9.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";


type SliderItem = {
  image: string;
  video: string;
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
      value: "When we first checked out our new headphones, we noticed the box said “improved bass”. We had to wonder if this was marketing jargon or the real thing? But it only took a moment to realize that bass was not kidding.",
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
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/674dcc6d506a40002c305aa6?alt=media",
            },
            {
              type: "page",
              key: "video",
              displayer: "Video",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667e77bd0181a1002c334f66?alt=media&timestamp=1719564238038",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/674dcc83506a40002c305ab2?alt=media",
            },
            {
              type: "page",
              key: "video",
              displayer: "Video",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b08ebb03b007002cc77877?alt=media",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/674dcc99506a40002c305abc?alt=media",
            },
            {
              type: "page",
              key: "video",
              displayer: "Video",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667e77bd0181a1002c334f66?alt=media&timestamp=1719564238038",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/674dccaa506a40002c305ac7?alt=media",
            },
            {
              type: "page",
              key: "video",
              displayer: "Video",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667e77bd0181a1002c334f66?alt=media&timestamp=1719564238038",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "icon",
      key: "verticalPreviousArrow",
      displayer: "Vertical Previous Arrow Icon",
      value: "MdOutlineKeyboardArrowUp",
    });
    this.addProp({
      type: "icon",
      key: "verticalNextArrow",
      displayer: "Vertical Next Arrow Icon",
      value: "MdOutlineKeyboardArrowDown",
    });

    this.addProp({
      type: "icon",
      key: "horizontalPreviousArrow",
      displayer: "Horizontal Previous Arrow Icon",
      value: "MdOutlineKeyboardArrowLeft",
    });
    this.addProp({
      type: "icon",
      key: "horizontalNextArrow",
      displayer: "Horizontal Next Arrow Icon",
      value: "MdOutlineKeyboardArrowRight",
    });
    this.addProp({
      type: "icon",
      key: "videoButton",
      displayer: "Video Button Icon",
      value: "CiPlay1",
    });
    this.addProp({
      type: "string",
      key: "videoButtonText",
      displayer: "Video Button Text",
      value: "Watch video",
    });
    this.addProp({
      type: "icon",
      key: "fsButton",
      displayer: "Fullscreen Button Icon",
      value: "TfiFullscreen",
    });
    this.addProp({
      type: "string",
      key: "fsButtonText",
      displayer: "Fullscreen Button Text",
      value: "Click to enlarge",
    });
    this.addProp({
      type: "icon",
      key: "exitButton",
      displayer: "Exit Button",
      value: "IoMdClose",
    });
    this.addProp({
      type: "icon",
      key: "overlayLeftArrow",
      displayer: "Fullscreen Left Arrow",
      value: "BiLeftArrowAlt",
    });
    this.addProp({
      type: "icon",
      key: "overlayRightArrow",
      displayer: "Fullscreen Right Arrow",
      value: "BiRightArrowAlt", //dd
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

  handleFullscreen = () => {
    const currentIndex = this.getComponentState("currentSlideIndex");
    const sliderItems = this.castToObject<SliderItem[]>("sliderItems");
    const selectedImage = sliderItems[currentIndex]?.image;

    if (selectedImage) {
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
    const selectedVideo = sliderItems[currentIndex]?.video;

    if (selectedVideo) {
      this.setComponentState("isVideoModalOpen", true);
      this.setComponentState("videoUrl", selectedVideo);
    }
  };

  handleCloseVideoModal = () => {
    this.setComponentState("isVideoModalOpen", false);
    this.setComponentState("videoUrl", null);
  };

  static getName(): string {
    return "Slider 9";
  }

  handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - container.left) / container.width) * 100;
    const y = ((e.clientY - container.top) / container.height) * 100;

    const imgElement = e.currentTarget.querySelector(`.${this.decorateCSS("slider9-image")}`);
    if (imgElement) {
      (imgElement as HTMLElement).style.transformOrigin = `${x}% ${y}%`;
      (imgElement as HTMLElement).style.transform = "scale(1.5)";
    }
  };

  handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const imgElement = e.currentTarget.querySelector(`.${this.decorateCSS("slider9-image")}`);
    if (imgElement) {
      (imgElement as HTMLElement).style.transform = "scale(1)";
      (imgElement as HTMLElement).style.transformOrigin = "center";
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
    const galleryCollection = this.castToObject<SliderItem[]>("sliderItems");
    const originalIndex: number = this.getComponentState("originalSlideIndex");

    return galleryCollection[originalIndex];
  }

  render() {
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
        const horizontalSliderRef = this.getComponentState("horizontal-slider-ref");
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

    const isFullscreen = this.getComponentState("isFullscreen");

    const sliderItems = this.castToObject<SliderItem[]>("sliderItems");
    const hoveredIndex = this.getComponentState("hoveredIndex");

    const RightContentExist = this.castToString(title) || this.castToString(price) || this.castToString(description);

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.ContainerGrid
            className={`${this.decorateCSS("content")}
          ${sliderItems.length < 1 && this.decorateCSS("no-left-part")}`}
          >
            {sliderItems.length > 0 && (
              <div
                className={`${this.decorateCSS("sliders-parent")}
              ${RightContentExist === "" ? this.decorateCSS("empty-right-content") : ""}`}
              >
                <div className={this.decorateCSS("vertical-parent")}>
                  <ComposerSlider {...verticalSettings} className={this.decorateCSS("carousel-vertical")} ref={this.getComponentState("vertical-slider-ref")}>
                    {sliderItems.map((item: SliderItem, indexSlider: number) => {
                      const isActive = this.getComponentState("currentSlideIndex") === indexSlider;
                      const isHovered = hoveredIndex === indexSlider;

                      return (
                        <div
                          key={indexSlider}
                          className={this.decorateCSS("img-container")}
                          onClick={() => {
                            if (!isFullscreen) {
                              this.setComponentState("currentSlideIndex", indexSlider);
                              this.setComponentState("hoveredIndex", indexSlider);
                              const horizontalSliderRef = this.getComponentState("horizontal-slider-ref");
                              if (horizontalSliderRef.current) {
                                horizontalSliderRef.current.slickGoTo(indexSlider);
                              }
                            }
                          }}
                          onMouseEnter={() => {
                            this.setComponentState("hoveredIndex", indexSlider);
                          }}
                          onMouseLeave={() => {
                            this.setComponentState("hoveredIndex", null);
                          }}
                        >
                          {item.image && <img src={item.image} alt="" className={this.decorateCSS("img")} />}
                          {!isFullscreen && (isActive || isHovered) && <div className={this.decorateCSS("overlay")}></div>}
                        </div>
                      );
                    })}
                  </ComposerSlider>

                  {(verticalPreviousArrow || verticalNextArrow) && (
                    <div className={this.decorateCSS("verticalArrows")}>
                      {verticalPreviousArrow && (
                        <Base.Icon
                          name={verticalPreviousArrow}
                          propsIcon={{
                            className: this.decorateCSS("verticalPreviousArrow"),
                            onClick: () => {
                              const verticalSliderRef = this.getComponentState("vertical-slider-ref");
                              verticalSliderRef.current.slickPrev();
                            },
                          }}
                        />
                      )}
                      {verticalNextArrow && (
                        <Base.Icon
                          name={verticalNextArrow}
                          propsIcon={{
                            className: this.decorateCSS("verticalNextArrow"),
                            onClick: () => {
                              const verticalSliderRef = this.getComponentState("vertical-slider-ref");
                              verticalSliderRef.current.slickNext();
                            },
                          }}
                        />
                      )}
                    </div>
                  )}
                </div>

                <div className={this.decorateCSS("horizontal-parent")}>
                  <ComposerSlider {...horizontalSettings} className={this.decorateCSS("carousel-horizontal")} ref={this.getComponentState("horizontal-slider-ref")}>
                    {sliderItems.map((item: SliderItem, indexSlider: number) => (
                      <div className={this.decorateCSS("img-container")} key={indexSlider} onMouseMove={this.handleMouseMove} onMouseLeave={this.handleMouseLeave}>
                        {item.image && <img src={item.image} alt="" className={this.decorateCSS("slider9-image")} />}
                      </div>
                    ))}
                  </ComposerSlider>

                  {(horizontalPreviousArrow || horizontalNextArrow) && (
                    <div className={this.decorateCSS("horizontalArrows")}>
                      {horizontalPreviousArrow && (
                        <Base.Icon
                          name={horizontalPreviousArrow}
                          propsIcon={{
                            className: this.decorateCSS("horizontalPreviousArrow"),
                            onClick: () => {
                              const horizontalSliderRef = this.getComponentState("horizontal-slider-ref");
                              horizontalSliderRef.current.slickPrev();
                            },
                          }}
                        />
                      )}
                      {horizontalNextArrow && (
                        <Base.Icon
                          name={horizontalNextArrow}
                          propsIcon={{
                            className: this.decorateCSS("horizontalNextArrow"),
                            onClick: () => {
                              const horizontalSliderRef = this.getComponentState("horizontal-slider-ref");
                              horizontalSliderRef.current.slickNext();
                            },
                          }}
                        />
                      )}
                    </div>
                  )}

                  <div className={this.decorateCSS("buttons")}>
                    <div className={this.decorateCSS("button-wrapper")}>
                      <div className={this.decorateCSS("icon-wrapper")}>
                        <Base.Icon
                          name={videoButton}
                          propsIcon={{
                            className: this.decorateCSS("button"),
                            onClick: () => this.handlePlayVideo(),
                          }}
                        />
                      </div>
                      <div className={this.decorateCSS("button-text-wrapper")}>
                        <span className={this.decorateCSS("button-text")}>{videoButtonText}</span>
                      </div>
                    </div>

                    <div className={this.decorateCSS("button-wrapper")}>
                      <div className={this.decorateCSS("icon-wrapper")}>
                        <Base.Icon
                          name={fsButton}
                          propsIcon={{
                            className: this.decorateCSS("button"),
                            onClick: () => this.handleFullscreen(),
                          }}
                        />
                      </div>
                      <div className={this.decorateCSS("button-text-wrapper")}>
                        <span className={this.decorateCSS("button-text")}>{fsButtonText}</span>
                      </div>
                    </div>
                  </div>

                  {isFullscreen && (
                    <div className={this.decorateCSS("fullscreen-modal")}>
                      <div className={this.decorateCSS("fullscreen-overlay")} onClick={this.handleCloseFullscreen}>
                        <Base.Icon
                          name={this.getPropValue("overlayLeftArrow")}
                          propsIcon={{
                            className: this.decorateCSS("overlay-left-button"),
                            onClick: (e: React.MouseEvent) => {
                              e.stopPropagation();
                              this.fullscreenPrevImage();
                              this.setComponentState("hoveredIndex", null);
                            },
                          }}
                        />
                        <Base.Icon
                          name={this.getPropValue("overlayRightArrow")}
                          propsIcon={{
                            className: this.decorateCSS("overlay-right-button"),
                            onClick: (e: React.MouseEvent) => {
                              e.stopPropagation();
                              this.fullscreenNextImage();
                            },
                          }}
                        />
                        <button className={this.decorateCSS("close-button-wrapper")} onClick={this.handleCloseFullscreen}>
                          <Base.Icon
                            name={this.getPropValue("exitButton")}
                            propsIcon={{
                              className: this.decorateCSS("close-button"),
                            }}
                          />
                        </button>
                      </div>
                      <div className={this.decorateCSS("fullscreen-content")}>{<img src={this.getCurrentFullscreenItem()?.image} alt="Fullscreen" className={this.decorateCSS("fullscreen-image")} />}</div>
                    </div>
                  )}

                  {this.getComponentState("isVideoModalOpen") && (
                    <div className={this.decorateCSS("video-modal")}>
                      <div className={this.decorateCSS("video-overlay")} onClick={this.handleCloseVideoModal}></div>
                      <div className={this.decorateCSS("video-content")}>
                        <button className={this.decorateCSS("close-button-wrapper")} onClick={this.handleCloseVideoModal}>
                          <Base.Icon
                            name={this.getPropValue("exitButton")}
                            propsIcon={{
                              className: this.decorateCSS("close-button"),
                            }}
                          />
                        </button>

                        <video src={this.getComponentState("videoUrl")} controls className={this.decorateCSS("video-player")} autoPlay />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
            {RightContentExist && (
              <div className={this.decorateCSS("right-content")}>
                <Base.VerticalContent className={this.decorateCSS("text-wrapper")}>
                  {this.castToString(title) && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
                  {this.castToString(price) && <span className={this.decorateCSS("price")}>{price}</span>}
                  {this.castToString(description) && <Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>}
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
