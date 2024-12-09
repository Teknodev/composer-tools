import * as React from "react";
import { BaseSlider, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./slider9.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type SliderItem = {
  image: string;
  video: string;
}

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
      value:
        "When we first checked out our new headphones, we noticed the box said “improved bass”. We had to wonder if this was marketing jargon or the real thing? But it only took a moment to realize that bass was not kidding.",
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
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/674dcc6d506a40002c305aa6?alt=media",
            },
            {
              type: "page",
              key: "video",
              displayer: "Video",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667e77bd0181a1002c334f66?alt=media&timestamp=1719564238038",
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
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/674dcc83506a40002c305ab2?alt=media",
            },
            {
              type: "page",
              key: "video",
              displayer: "Video",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b08ebb03b007002cc77877?alt=media",
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
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/674dcc99506a40002c305abc?alt=media",
            },
            {
              type: "page",
              key: "video",
              displayer: "Video",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667e77bd0181a1002c334f66?alt=media&timestamp=1719564238038",
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
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/674dccaa506a40002c305ac7?alt=media",
            },
            {
              type: "page",
              key: "video",
              displayer: "Video",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667e77bd0181a1002c334f66?alt=media&timestamp=1719564238038",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "icon",
      key: "verticalPreviousArrow",
      displayer: "Vertical Previous Arrow Icon",
      value: "MdOutlineKeyboardArrowUp"
    });
    this.addProp({
      type: "icon",
      key: "verticalNextArrow",
      displayer: "Vertical Next Arrow Icon",
      value: "MdOutlineKeyboardArrowDown"
    });

    this.addProp({
      type: "icon",
      key: "horizontalPreviousArrow",
      displayer: "Horizontal Previous Arrow Icon",
      value: "MdOutlineKeyboardArrowLeft"
    });
    this.addProp({
      type: "icon",
      key: "horizontalNextArrow",
      displayer: "Horizontal Next Arrow Icon",
      value: "MdOutlineKeyboardArrowRight"
    });
    this.addProp({
      type: "icon",
      key: "videoButton",
      displayer: "Video Button Icon",
      value: "CiPlay1"
    });
    this.addProp({
      type: "string",
      key: "videoButtonText",
      displayer: "Video Button Text",
      value: "Watch video"
    });
    this.addProp({
      type: "icon",
      key: "fsButton",
      displayer: "Fullscreen Button Icon",
      value: "TfiFullscreen"
    });
    this.addProp({
      type: "string",
      key: "fsButtonText",
      displayer: "Fullscreen Button Text",
      value: "Click to enlarge"
    });

    this.setComponentState("vertical-slider-ref", React.createRef());
    this.setComponentState("horizontal-slider-ref", React.createRef());
    this.setComponentState("currentSlideIndex", 0);

    this.setComponentState("isFullscreen", false);

    this.setComponentState("isVideoModalOpen", false);
    this.setComponentState("videoUrl", null);

  }

  handleFullscreen = () => {
    const currentIndex = this.getComponentState("currentSlideIndex");
    const sliderItems = this.castToObject<SliderItem[]>("sliderItems");
    const selectedImage = sliderItems[currentIndex]?.image;

    if (selectedImage) {
      this.setComponentState("isFullscreen", true);
    } else {
      this.setComponentState("isFullscreen", false);
    }
  };

  handleCloseFullscreen = () => {
    this.setComponentState("isFullscreen", false)
    this.setComponentState("fullscreenImageUrl", null);
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

  getName(): string {
    return "Slider 9";
  }

  handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - container.left) / container.width) * 100;
    const y = ((e.clientY - container.top) / container.height) * 100;

    const imgElement = e.currentTarget.querySelector("img");
    if (imgElement) {
      (imgElement as HTMLElement).style.transformOrigin = `${x}% ${y}%`;
      (imgElement as HTMLElement).style.transform = "scale(1.5)";
    }
  };

  handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const imgElement = e.currentTarget.querySelector("img");
    if (imgElement) {
      (imgElement as HTMLElement).style.transform = "scale(1)";
      (imgElement as HTMLElement).style.transformOrigin = "center";
    }
  };


  render() {
    const verticalSettings = {
      arrows: false,
      dots: false,
      infinite: false,
      speed: 700,
      autoplay: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      afterChange: (current: number) => {
        const horizontalSliderRef = this.getComponentState("horizontal-slider-ref");
        if (horizontalSliderRef.current) {
          horizontalSliderRef.current.slickGoTo(current);
        }

      },
      beforeChange: (oldIndex: number, newIndex: number) => {
        if (oldIndex === newIndex) return;
        if (this.getPropValue("textAnimation"))
          this.setComponentState("from", oldIndex > newIndex ? "left" : "right");

        this.setComponentState("active-index", newIndex);
      },
    };

    const horizontalSettings = {
      arrows: false,
      dots: false,
      infinite: false,
      speed: 800,
      autoplay: false,
      autoplaySpeed: 3000,
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

    return (
      <Base.Container className={this.decorateCSS("container")} >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.ContainerGrid className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("sliders-parent")}>
              <div className={this.decorateCSS("vertical-parent")}>

                <ComposerSlider
                  {...verticalSettings}
                  className={this.decorateCSS("carousel-vertical")}
                  ref={this.getComponentState("vertical-slider-ref")}
                >
                  {sliderItems.map(
                    (item: SliderItem, indexSlider: number) => {
                      const isActive = this.getComponentState("currentSlideIndex") === indexSlider;
                      const isHovered = hoveredIndex === indexSlider;

                      return (
                        <div
                          key={indexSlider}
                          className={this.decorateCSS("img-container")}
                          onClick={() => {
                            this.setComponentState("currentSlideIndex", indexSlider);
                            const horizontalSliderRef = this.getComponentState("horizontal-slider-ref");
                            if (horizontalSliderRef.current) {
                              horizontalSliderRef.current.slickGoTo(indexSlider);
                            }
                          }}
                          onMouseEnter={() => {
                            this.setComponentState("hoveredIndex", indexSlider);
                          }}
                          onMouseLeave={() => {
                            this.setComponentState("hoveredIndex", null);
                          }}
                        >
                          <img src={item.image} alt="" className={this.decorateCSS("img")} />
                          {(isActive || isHovered) && (
                            <div className={this.decorateCSS("overlay")}></div>
                          )}
                        </div>
                      );
                    }
                  )}
                </ComposerSlider>

                {(verticalPreviousArrow || verticalNextArrow) &&
                  <div className={this.decorateCSS("verticalArrows")}>
                    {verticalPreviousArrow &&
                      <ComposerIcon
                        name={verticalPreviousArrow}
                        propsIcon={{
                          className: this.decorateCSS("verticalPreviousArrow"),
                          onClick: () => {
                            const verticalSliderRef = this.getComponentState("vertical-slider-ref");
                            verticalSliderRef.current.slickPrev();
                          },
                        }}
                      />}
                    {verticalNextArrow &&
                      <ComposerIcon
                        name={verticalNextArrow}
                        propsIcon={{
                          className: this.decorateCSS("verticalNextArrow"),
                          onClick: () => {
                            const verticalSliderRef = this.getComponentState("vertical-slider-ref");
                            verticalSliderRef.current.slickNext();
                          },
                        }}
                      />}
                  </div>}
              </div>

              <div className={this.decorateCSS("horizontal-parent")}>
                <ComposerSlider
                  {...horizontalSettings}
                  className={this.decorateCSS("carousel-horizontal")}
                  ref={this.getComponentState("horizontal-slider-ref")}
                >
                  {sliderItems.map(
                    (item: SliderItem, indexSlider: number) => (
                      <div className={this.decorateCSS("img-container")} key={indexSlider}
                        onMouseMove={this.handleMouseMove}
                        onMouseLeave={this.handleMouseLeave}>
                        <img
                          src={item.image}
                          alt=""
                          className={this.decorateCSS("img")}
                        />
                      </div>
                    )
                  )}
                </ComposerSlider>

                {(horizontalPreviousArrow || horizontalNextArrow) &&
                  <div className={this.decorateCSS("horizontalArrows")}>
                    {horizontalPreviousArrow &&
                      <ComposerIcon name={horizontalPreviousArrow}
                        propsIcon={{
                          className: this.decorateCSS("horizontalPreviousArrow"),
                          onClick: () => {
                            const horizontalSliderRef = this.getComponentState("horizontal-slider-ref");
                            horizontalSliderRef.current.slickPrev();
                          },
                        }}
                      />}
                    {horizontalNextArrow &&
                      <ComposerIcon name={horizontalNextArrow}
                        propsIcon={{
                          className: this.decorateCSS("horizontalNextArrow"),
                          onClick: () => {
                            const horizontalSliderRef = this.getComponentState("horizontal-slider-ref");
                            horizontalSliderRef.current.slickNext();
                          },
                        }}
                      />}
                  </div>}

                <div className={this.decorateCSS("buttons")}>
                  <div className={this.decorateCSS("button-wrapper-video")}>
                    <div className={this.decorateCSS("icon-wrapper")}>
                      <ComposerIcon
                        name={videoButton}
                        propsIcon={{
                          className: this.decorateCSS("video-button"),
                          onClick: () => this.handlePlayVideo(),
                        }}
                      />
                    </div>
                    <div className={this.decorateCSS("button-text-wrapper-video")}>
                      <span className={this.decorateCSS("button-text")}>{videoButtonText}</span>
                    </div>
                  </div>

                  <div className={this.decorateCSS("button-wrapper-fs")}>
                    <div className={this.decorateCSS("icon-wrapper")}>
                      <ComposerIcon
                        name={fsButton}
                        propsIcon={{
                          className: this.decorateCSS("fs-button"),
                          onClick: () => this.handleFullscreen(),
                        }}
                      />
                    </div>
                    <div className={this.decorateCSS("button-text-wrapper-fs")}>
                      <span className={this.decorateCSS("button-text")}>{fsButtonText}</span>
                    </div>
                  </div>
                </div>

                {isFullscreen && (
                  <div className={this.decorateCSS("fullscreen-modal")}>
                    <div
                      className={this.decorateCSS("fullscreen-overlay")}
                      onClick={this.handleCloseFullscreen}
                    ></div>
                    <div className={this.decorateCSS("fullscreen-content")}>
                      <img
                        src={sliderItems[this.getComponentState("currentSlideIndex")]?.image}
                        alt="Fullscreen"
                        className={this.decorateCSS("fullscreen-image")}
                      />
                      <button className={this.decorateCSS("close-button-wrapper")}
                        onClick={this.handleCloseFullscreen}>
                        <ComposerIcon
                          name={"IoMdClose"}
                          propsIcon={{
                            className: this.decorateCSS("close-button"),
                          }}
                        />
                      </button>
                    </div>
                  </div>
                )}


                {this.getComponentState("isVideoModalOpen") && (
                  <div className={this.decorateCSS("video-modal")}>
                    <div
                      className={this.decorateCSS("video-overlay")}
                      onClick={this.handleCloseVideoModal}
                    ></div>
                    <div className={this.decorateCSS("video-content")}>
                      <button
                        className={this.decorateCSS("close-button-wrapper")}
                        onClick={this.handleCloseVideoModal}
                      >
                        <ComposerIcon name={"IoMdClose"}
                          propsIcon={{
                            className: this.decorateCSS("close-button"),
                          }}
                        />
                      </button>

                      <video
                        src={this.getComponentState("videoUrl")}
                        controls
                        className={this.decorateCSS("video-player")}
                        autoPlay
                      />
                    </div>
                  </div>
                )}

              </div>
            </div>
            <Base.VerticalContent className={this.decorateCSS("right-content")}>
              <Base.SectionTitle className={this.decorateCSS("title")}>
                {title}
              </Base.SectionTitle>
              <span className={this.decorateCSS("price")}>{price}</span>
              <Base.P className={this.decorateCSS("description")}>
                {description}
              </Base.P>
            </Base.VerticalContent>
          </Base.ContainerGrid>
        </Base.MaxContent >
      </Base.Container >
    );
  }
}

export default Slider9;
