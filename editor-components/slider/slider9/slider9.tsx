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
      key: "previousArrow",
      displayer: "Previous Arrow Icon",
      value: "MdOutlineKeyboardArrowUp"
    });
    this.addProp({
      type: "icon",
      key: "nextArrow",
      displayer: "Next Arrow Icon",
      value: "MdOutlineKeyboardArrowDown"
    });

    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("currentSlideIndex", 0);
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    const currentSlideIndex = this.getComponentState("currentSlideIndex");
    const sliderRef = this.getComponentState("slider-ref");

    // Eğer currentSlideIndex değiştiyse HorizontalSlider'ı güncelle
    if (currentSlideIndex !== prevState.currentSlideIndex) {
      if (sliderRef.current) {
        sliderRef.current.slickGoTo(currentSlideIndex);
      }
    }
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
    };

    const horizontalSettings = {
      arrows: true,
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const title = this.getPropValue("title");
    const price = this.getPropValue("price");
    const description = this.getPropValue("description");
    const nextArrow = this.getPropValue("nextArrow");
    const previousArrow = this.getPropValue("previousArrow");

    const sliderRef = this.getComponentState("slider-ref");
    const currentSlideIndex = this.getComponentState("currentSlideIndex");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.ContainerGrid className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("sliders-parent")}>
              <div className={this.decorateCSS("vertical-parent")}>

                <ComposerSlider
                  {...verticalSettings}
                  className={this.decorateCSS("carousel-vertical")}
                  ref={sliderRef}
                >
                  {this.getPropValue("sliderItems").map(
                    (item: any, indexSlider: number) => (
                      <div className={this.decorateCSS("img-container")}
                        onClick={() => this.setComponentState("currentSlideIndex", indexSlider)}
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
                {(previousArrow || nextArrow) &&
                  <div className={this.decorateCSS("arrows")}>
                    {previousArrow &&
                      <ComposerIcon
                        name={this.getPropValue("previousArrow")}
                        propsIcon={{
                          className: this.decorateCSS("prevArrow"),
                          onClick: () => {
                            sliderRef.current.slickPrev();
                          },
                        }}
                      />}
                    {nextArrow &&
                      <ComposerIcon
                        name={this.getPropValue("nextArrow")}
                        propsIcon={{
                          className: this.decorateCSS("nextArrow"),
                          onClick: () => {
                            sliderRef.current.slickNext();
                          },
                        }}
                      />}
                  </div>}
              </div>

              <div className={this.decorateCSS("horizontal-parent")}>
                <ComposerSlider
                  {...horizontalSettings}
                  className={this.decorateCSS("carousel-horizontal")}
                  ref={sliderRef}
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
