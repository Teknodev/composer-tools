import * as React from "react";
import { BaseSlider, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./slider9.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

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
          type: "image",
          key: "image",
          displayer: "Image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/674dcc6d506a40002c305aa6?alt=media",
        },
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/674dcc83506a40002c305ab2?alt=media",
        },
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/674dcc99506a40002c305abc?alt=media",
        },
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/674dccaa506a40002c305ac7?alt=media",
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

    this.setComponentState("vertical-slider-ref", React.createRef());
    this.setComponentState("horizontal-slider-ref", React.createRef());
    this.setComponentState("currentSlideIndex", 0);

  }

  getName(): string {
    return "Slider 9";
  }

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
      }
    };




    const horizontalSettings = {
      arrows: true,
      dots: false,
      infinite: false,
      speed: 800,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const title = this.getPropValue("title");
    const price = this.getPropValue("price");
    const description = this.getPropValue("description");
    const verticalNextArrow = this.getPropValue("verticalNextArrow");
    const verticalPreviousArrow = this.getPropValue("verticalPreviousArrow");

    const horizontalPreviousArrow = this.getPropValue("horizontalPreviousArrow");
    const horizontalNextArrow = this.getPropValue("horizontalNextArrow");
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
                  {this.getPropValue("sliderItems").map(
                    (item: any, indexSlider: number) => (
                      <div className={this.decorateCSS("img-container")}
                        onClick={() => {
                          this.setComponentState("currentSlideIndex", indexSlider);
                          const horizontalSliderRef = this.getComponentState("horizontal-slider-ref");
                          if (horizontalSliderRef.current) {
                            horizontalSliderRef.current.slickGoTo(indexSlider);
                          }
                        }}

                        key={indexSlider}
                      >
                        <img
                          src={item.value}
                          alt=""
                          className={this.decorateCSS("img")}
                        />
                      </div>
                    )
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
                  {this.getPropValue("sliderItems").map(
                    (item: any, indexSlider: number) => (
                      <div className={this.decorateCSS("img-container")} key={indexSlider}>
                        <img
                          src={item.value}
                          alt=""
                          className={this.decorateCSS("img")}
                        />
                      </div>
                    )
                  )}
                </ComposerSlider>

                {(horizontalPreviousArrow || horizontalNextArrow) &&
                  <div className={this.decorateCSS("verticalArrows")}>
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
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Slider9;
