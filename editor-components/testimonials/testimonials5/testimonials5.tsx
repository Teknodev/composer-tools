import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials5.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base"
import ComposerSlider from "../../../composer-base-components/slider/slider";

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
              displayer: "Image",
              value: "https://craftohtml.themezaa.com/images/demo-travel-agency-home-18.png"
            },
            {
              type: "string",
              key: "sliderTitle",
              displayer: "Slider Title",
              value: "Alexender Moore"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Excellent travel company. We have already "
            },
            {
              type: "number",
              key: "star",
              displayer: "Star",
              value: 5
            },
            {
              type: "icon",
              key: "starIcon",
              displayer: "Star Icon",
              value: "FaStar"
            },
          ]
        }
      ]
    })

  }

  getName(): string {
    return "Testimonials 5";
  }

  render() {
    const leftItem = this.castToObject<LeftItem>("leftItem");
    const sliderItem = this.castToObject<SliderItem[]>("sliders");
    return (
      <Base.Container className={this.decorateCSS("container")} >
        <Base.MaxContent className={this.decorateCSS("maxContent")} >
          <Base.ContainerGrid className={this.decorateCSS("containerGrid")} >
            <div className={this.decorateCSS("leftContainer")}>
              {this.castToString(leftItem.subtitle) && (
                <Base.P className={this.decorateCSS("subtitle")}>
                  {leftItem.subtitle}
                </Base.P>
              )}
              {this.castToString(leftItem.title) && (
                <Base.H1 className={this.decorateCSS("title")}>
                  {leftItem.title}
                </Base.H1>
              )}
              {(leftItem.nextIcon || leftItem.prevIcon) && (
                <div className={this.decorateCSS("arrow")}>
                  {leftItem.prevIcon && (
                    <div className={this.decorateCSS("prevArrow")}>
                      <ComposerIcon name={leftItem.prevIcon} propsIcon={{ className: this.decorateCSS("icon") }} />
                    </div>
                  )}
                  {leftItem.nextIcon && (
                    <div className={this.decorateCSS("nextArrow")}>
                      <ComposerIcon name={leftItem.nextIcon} propsIcon={{ className: this.decorateCSS("icon") }} />
                    </div>
                  )}
                </div>
              )}
              <div>
              </div>
            </div>

            {sliderItem.map((item: SliderItem, index: number) => (
              <div className={this.decorateCSS("slider")}>
                <img src={item.image} alt={item.image} />

                <div className={this.decorateCSS("sliderTitle")}>
                  {item.sliderTitle}
                </div>
                <div className={this.decorateCSS("line")}>

                </div>
                <div className={this.decorateCSS("rightContainer")}>
                  <div className={this.decorateCSS("description")}>
                    {item.description}
                  </div>
                  <div className={this.decorateCSS("star")}>
                    {[...Array(Number(item.star))].map(
                      (_: any, index: number) => (
                        <ComposerIcon name={item.starIcon} />
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Base.ContainerGrid>
        </Base.MaxContent>
      </Base.Container >

    );
  }
}

export default Testimonials5Page;
