import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials9.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";
type Card = {
  image: string;
  title: JSX.Element;
  subtitle: JSX.Element;
  description: JSX.Element;
};
class Testimonials9Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Testimonials",
    });
    this.addProp({
      type: "icon",
      key: "left_icon",
      displayer: "Left İcon",
      value: "RiDoubleQuotesL"
    });
    this.addProp({
      type: "icon",
      key: "right_icon",
      displayer: "Right İcon",
      value: "RiDoubleQuotesR"
    })
    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Slider",
      value: [
        {
          type: "object",
          key: "slider object",
          displayer: "Slider Object",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666176cabd2970002c623b38?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "title",
              value: "Thein N.",
              displayer: "Title",
            },
            {
              type: "string",
              key: "subtitle",
              value: "18th December 2022",
              displayer: "subtitle",
            },
            {
              type: "string",
              key: "description",
              value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet velit id nunc posuere, et fringilla leo convallis. Nam ullamcorper, arcu id ullamcorper congue, turpis urna interdum ligula, id congue purus nunc ac sem.",
              displayer: "Descripiton",
            },
          ],
        },
        {
          type: "object",
          key: "slider object",
          displayer: "Slider Object",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666176cabd2970002c623b33?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "title",
              value: "Bailey H.",
              displayer: "Title",
            },
            {
              type: "string",
              key: "subtitle",
              value: "21st November 2022",
              displayer: "subtitle",
            },
            {
              type: "string",
              key: "description",
              value: "Nulla facilisi. Fusce et justo eget tortor consectetur facilisis vel id turpis. Nam ullamcorper, arcu id ullamcorper congue, turpis urna interdum ligula, id congue purus nunc ac sem.",
              displayer: "Descripiton",
            },
          ],
        },
        {
          type: "object",
          key: "slider object",
          displayer: "Slider Object",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666176cabd2970002c623b34?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "title",
              value: "Ashley S.",
              displayer: "Title",
            },
            {
              type: "string",
              key: "subtitle",
              value: "2nd July 2022",
              displayer: "subtitle",
            },
            {
              type: "string",
              key: "description",
              value: "Duis blandit est eu magna tristique, ut vestibulum orci feugiat. Integer nec semper neque. Nam ullamcorper, arcu id ullamcorper congue, turpis urna interdum ligula, id congue purus nunc ac sem.",
              displayer: "Descripiton",
            },
          ],
        },
        {
          type: "object",
          key: "slider object",
          displayer: "Slider Object",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666176cabd2970002c623b37?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "title",
              value: "Tom H.",
              displayer: "Title",
            },
            {
              type: "string",
              key: "subtitle",
              value: "15th June 2022",
              displayer: "subtitle",
            },
            {
              type: "string",
              key: "description",
              value: "Quisque sodales justo nec ante vestibulum, ut dictum justo facilisis. Nam ullamcorper, arcu id ullamcorper congue, turpis urna interdum ligula, id congue purus nunc ac sem.",
              displayer: "Descripiton",
            },
          ],
        },
        {
          type: "object",
          key: "slider object",
          displayer: "Slider Object",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666176cabd2970002c623b36?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "title",
              value: "Ronald R.",
              displayer: "Title",
            },
            {
              type: "string",
              key: "subtitle",
              value: "18th December 2022",
              displayer: "subtitle",
            },
            {
              type: "string",
              key: "description",
              value: "Sed id condimentum mi. Aliquam cursus scelerisque elit ut facilisis. Nam ullamcorper, arcu id ullamcorper congue, turpis urna interdum ligula, id congue purus nunc ac sem.",
              displayer: "Descripiton",
            },
          ],
        },
        {
          type: "object",
          key: "slider object",
          displayer: "Slider Object",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666176cabd2970002c623b35?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "title",
              value: "Olivia D.",
              displayer: "Title",
            },
            {
              type: "string",
              key: "subtitle",
              value: "21st November 2022",
              displayer: "subtitle",
            },
            {
              type: "string",
              key: "description",
              value: "Vivamus nec sem quis enim iaculis gravida. Donec volutpat fermentum erat, sit amet cursus risus tincidunt quis. Nam ullamcorper, arcu id ullamcorper congue, turpis urna interdum ligula, id congue purus nunc ac sem.",
              displayer: "Descripiton",
            },
          ],
        },
        {
          type: "object",
          key: "slider object",
          displayer: "Slider Object",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617728bd2970002c623bd5?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "title",
              value: "Sarah B.",
              displayer: "Title",
            },
            {
              type: "string",
              key: "subtitle",
              value: "2nd July 2022",
              displayer: "subtitle",
            },
            {
              type: "string",
              key: "description",
              value: "Aenean euismod, velit a lacinia fringilla, urna libero ultrices lectus, non interdum quam nunc eu elit. Ut non lobortis purus. Nam ullamcorper, id congue purus nunc ac sem.",
              displayer: "Descripiton",
            },
          ],
        },
        {
          type: "object",
          key: "slider object",
          displayer: "Slider Object",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666176cabd2970002c623b37?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "title",
              value: "Mary J.",
              displayer: "Title",
            },
            {
              type: "string",
              key: "subtitle",
              value: "15th June 2022",
              displayer: "subtitle",
            },
            {
              type: "string",
              key: "description",
              value: "Curabitur a sapien ut neque eleifend vehicula id a sem. Phasellus sodales, ex sit amet eleifend consectetur, erat magna dictum elit, eu interdum nisi lacus id nunc.",
              displayer: "Descripiton",
            },
          ],
        },
      ],
    });
    this.setComponentState("active-index", 1);
  }
  getName(): string {
    return "Testimonials 9";
  }


  render() {
    const slider = this.getPropValue("slider");
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2500,
      slidesToShow: Math.min(slider.length, 4),
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      arrows: false,

      beforeChange: (oldIndex: number, newIndex: number) => {
        let adjustedIndex = (newIndex + 1) % this.castToObject<Card[]>("slider").length;
        if (oldIndex !== adjustedIndex) {
          this.setComponentState("active-index", adjustedIndex);
        }
      }
    };
    const activeIndex = this.getComponentState("active-index");
    const title = this.getPropValue("title");
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("wrapper")}>
            {this.castToString(title) && (
              <div className={this.decorateCSS("up-page")}>
                <Base.H1 className={this.decorateCSS("title")}>{title}</Base.H1>
              </div>
            )}
            <Base.ContainerGrid className={this.decorateCSS("down-page")}>
              <div className={this.decorateCSS("carousel")}>
                <ComposerSlider {...settings} >
                  {this.castToObject<Card[]>("slider").map(
                    (item: Card, index: number) => (
                      <div className={`${this.decorateCSS("card-inner")} ${activeIndex === index ? this.decorateCSS("active") : ""}`}
                        key={index}
                      >
                        {item.image && (
                          <img alt="" src={item.image} className={this.decorateCSS("img")} />
                        )}
                        <Base.VerticalContent className={this.decorateCSS("text")}>
                          {this.castToString(item.title) && (
                            <Base.H4 className={this.decorateCSS("title")}>{item.title}</Base.H4>
                          )}
                          {this.castToString(item.subtitle) && (
                            <Base.H5 className={this.decorateCSS("subtitle")}>{item.subtitle}</Base.H5>
                          )}
                        </Base.VerticalContent>
                      </div>
                    )
                  )}
                </ComposerSlider>
              </div>
              <div className={this.decorateCSS("right-page")}>
                <ComposerIcon name={this.getPropValue("left_icon")} propsIcon={{
                  className: this.decorateCSS("left-icon")
                }} />
                {this.castToObject<Card[]>("slider").map((item: Card, index: number) => (
                  <div className={this.decorateCSS("text")} key={index}>
                    {((index === activeIndex) && (this.castToString(item.description))) && (
                      <Base.H3 className={this.decorateCSS("description")}>{item.description}</Base.H3>
                    )}
                  </div>
                ))}
                <ComposerIcon name={this.getPropValue("right_icon")} propsIcon={{
                  className: this.decorateCSS("right-icon")
                }} />
              </div>
            </Base.ContainerGrid>
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Testimonials9Page;
