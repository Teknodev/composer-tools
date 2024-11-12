import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials5.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base"
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Autoplay } from "swiper";

interface LeftItem {
  subtitle: JSX.Element,
  title: JSX.Element,
  prevIcon: string,
  nextIcon: string
}

interface SliderItem {
  image: string,
  sliderTitle: JSX.Element,
  description: JSX.Element,
  nextIcon: string,
  star: number,
  starIcon: string
}

class Testimonials5Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "background-image",
      displayer: "Background Image",
      value: "https://craftohtml.themezaa.com/images/demo-travel-agency-home-bg-03.jpg",
    });
    this.addProp({
      type: "boolean",
      key: "lineIsActive",
      displayer: "Line Active",
      value: true,
    });

    this.addProp({
      type: "object",
      key: "leftItem",
      displayer: "Left Item",
      value: [
        {
          type: "string",
          key: "subtitle",
          displayer: "Subtitle",
          value: "TESTIMONIALS"
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Our happy traveller."
        },
        {
          type: "icon",
          key: "prevIcon",
          displayer: "PrevIcon",
          value: "GrLinkPrevious"
        },
        {
          type: "icon",
          key: "nextIcon",
          displayer: "NextIcon",
          value: "GrLinkNext"
        }
      ]
    })
    this.addProp({
      type: "array",
      key: "sliders",
      displayer: "Sliders",
      value: [
        {
          type: "object",
          key: "slider",
          displayer: "Slider",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Author Image",
              value: "https://craftohtml.themezaa.com/images/demo-travel-agency-home-18.png"
            },
            {
              type: "string",
              key: "sliderTitle",
              displayer: "Author Name",
              value: "Alexender Moore"
            },
            {
              type: "string",
              key: "description",
              displayer: "Review Text",
              value: "This is itinerary was a perfect combination of city sights, history and culture together with the peace of the amazon rainforest and the adventure."
            },
            {
              type: "number",
              key: "star",
              displayer: "Icon Number",
              value: 5
            },
            {
              type: "icon",
              key: "starIcon",
              displayer: "Icon",
              value: "FaStar"
            },
          ]
        },
        {
          type: "object",
          key: "slider",
          displayer: "Slider",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Author Image",
              value: "https://craftohtml.themezaa.com/images/demo-travel-agency-home-17.png"
            },
            {
              type: "string",
              key: "sliderTitle",
              displayer: "Author Name",
              value: "Alexender Moore"
            },
            {
              type: "string",
              key: "description",
              displayer: "Review Text",
              value: "This is itinerary was a perfect combination of city sights, history and culture together with the peace of the amazon rainforest and the adventure."
            },
            {
              type: "number",
              key: "star",
              displayer: "Icon Number",
              value: 5
            },
            {
              type: "icon",
              key: "starIcon",
              displayer: "Icon",
              value: "FaStar"
            },
          ]
        },
        {
          type: "object",
          key: "slider",
          displayer: "Slider",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Author Image",
              value: "https://craftohtml.themezaa.com/images/demo-travel-agency-home-15.png"
            },
            {
              type: "string",
              key: "sliderTitle",
              displayer: "Author Name",
              value: "Alexender Moore"
            },
            {
              type: "string",
              key: "description",
              displayer: "Review Text",
              value: "This is itinerary was a perfect combination of city sights, history and culture together with the peace of the amazon rainforest and the adventure."
            },
            {
              type: "number",
              key: "star",
              displayer: "Icon Number",
              value: 5
            },
            {
              type: "icon",
              key: "starIcon",
              displayer: "Icon",
              value: "FaStar"
            },
          ]
        }
      ]
    })
    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("active", 0);
    this.setComponentState("activeSlideIndex", 0);
  }

  getName(): string {
    return "Testimonials 5";
  }
  handleSlideChange(direction: "next" | "prev") {
    const currentIndex = this.getComponentState("activeSlideIndex");
    const lastIndex = this.getPropValue("sliders").length - 1;

    if (direction === "next") {
      if (currentIndex === lastIndex) {
        this.setComponentState("activeSlideIndex", 0);
        this.getComponentState("slider-ref").current.slickGoTo(0);
      } else {
        this.setComponentState("activeSlideIndex", currentIndex + 1);
        this.getComponentState("slider-ref").current.slickNext();
      }
    } else if (direction === "prev") {
      if (currentIndex === 0) {
        this.setComponentState("activeSlideIndex", lastIndex);
        this.getComponentState("slider-ref").current.slickGoTo(lastIndex);
      } else {
        this.setComponentState("activeSlideIndex", currentIndex - 1);
        this.getComponentState("slider-ref").current.slickPrev();
      }
    }
  }
  render() {
    const leftItem = this.castToObject<LeftItem>("leftItem");
    const sliderItem = this.castToObject<SliderItem[]>("sliders");
    const sliderRef = this.getComponentState("slider-ref");
    const hasLeftContent = Boolean(this.castToString(leftItem.subtitle) || this.castToString(leftItem.title) || leftItem.nextIcon || leftItem.prevIcon);
    var settings = {
      dots: false,
      autoplay: true,
      infinite: false,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (current: number, next: number) => {
        this.setComponentState("active", next);
        this.setComponentState("activeSlideIndex", next);
      },
    };
    return (
      <Base.Container className={this.decorateCSS("container")}
        style={{
          backgroundImage: `url(${this.getPropValue("background-image")})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
        <Base.MaxContent className={this.decorateCSS("maxContent")} >
          <div className={this.decorateCSS("containerGrid")} >
            {hasLeftContent && (
              <div className={this.decorateCSS("leftContainer")}>
                <Base.VerticalContent className={this.decorateCSS("leftContainerText")}>
                  {this.castToString(leftItem.subtitle) && (
                    <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                      {leftItem.subtitle}
                    </Base.SectionSubTitle>
                  )}
                  {this.castToString(leftItem.title) && (
                    <Base.SectionTitle className={this.decorateCSS("title")}>
                      {leftItem.title}
                    </Base.SectionTitle>
                  )}
                </Base.VerticalContent>

                {(leftItem.nextIcon || leftItem.prevIcon) && (
                  <div className={this.decorateCSS("arrow")}>
                    {leftItem.prevIcon && (
                      <button
                        onClick={() => this.handleSlideChange("prev")}
                        className={this.getPropValue("background-image") ? this.decorateCSS("prevArrow") : this.decorateCSS("prevArrowPrimary")}>
                        <ComposerIcon name={leftItem.prevIcon} propsIcon={{ className: this.decorateCSS("icon") }} />
                      </button>
                    )}
                    {leftItem.nextIcon && (
                      <button
                        onClick={() => this.handleSlideChange("next")}
                        className={this.getPropValue("background-image") ? this.decorateCSS("nextArrow") : this.decorateCSS("nextArrowPrimary")}>
                        <ComposerIcon name={leftItem.nextIcon} propsIcon={{ className: this.decorateCSS("icon") }} />
                      </button>
                    )}
                  </div>
                )}
                <div>
                </div>
              </div>
            )}

            <ComposerSlider {...settings} ref={sliderRef} className={hasLeftContent ? this.decorateCSS("slider") : this.decorateCSS("fullSlider")}>
              {sliderItem.map((item: SliderItem, index: number) => (
                <div >
                  {item.image && (
                    <img src={item.image} alt={item.image} className={this.decorateCSS("image")} />
                  )}

                  <div className={this.decorateCSS("rightWrapper")}>
                    {this.castToString(item.sliderTitle) && (
                      <Base.H3 className={this.getPropValue("background-image") ? this.decorateCSS("sliderTitle") : this.decorateCSS("sliderTitlePrimary")}>
                        {item.sliderTitle}
                      </Base.H3>
                    )}
                    {this.getPropValue("lineIsActive") && (
                      <div className={this.decorateCSS("lineContainer")}>
                        <div className={this.getPropValue("background-image") ? this.decorateCSS("line") : this.decorateCSS("linePrimary")}></div>
                      </div>
                    )}
                    <div className={this.decorateCSS("rightContainer")}>
                      {this.castToString(item.description) && (
                        <Base.P className={this.getPropValue("background-image") ? this.decorateCSS("description") : this.decorateCSS("descriptionPrimary")}>
                          {item.description}
                        </Base.P>
                      )}
                      {(item.starIcon && (item.star > 0)) && (
                        <div className={this.getPropValue("background-image") ? this.decorateCSS("stars") : this.decorateCSS("starsPrimary")}>
                          {[...Array(Number(item.star))].map(
                            (_: any, index: number) => (
                              <ComposerIcon name={item.starIcon} propsIcon={{ className: this.decorateCSS("star") }} />
                            )
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              ))}
            </ComposerSlider>

          </div>
        </Base.MaxContent>
      </Base.Container >

    );
  }
}

export default Testimonials5Page;
