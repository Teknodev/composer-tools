import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials9.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
type Card = {
  image: string;
  title: string;
  subtitle: string;
  description: string;
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
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Testimonials"
    })
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
                "https://static.tildacdn.com/tild3730-6561-4138-b835-303836373364/09w.jpg",
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
                "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
                "https://images.pexels.com/photos/716411/pexels-photo-716411.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
                "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
                "https://images.pexels.com/photos/1820934/pexels-photo-1820934.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
                "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
                "https://images.pexels.com/photos/1800456/pexels-photo-1800456.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
                "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2500,
      slidesToShow: 4,
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
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("up-page")}>
            {subtitle && <span className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</span>}
            {title && <span className={this.decorateCSS("title")}>{this.getPropValue("title")}</span>}
          </div>
          <div className={this.decorateCSS("down-page")}>
            <div className={this.decorateCSS("carousel")}>
              <ComposerSlider {...settings} >
                {this.castToObject<Card[]>("slider").map(
                  (item: Card, index: number) => (
                    <div className={`${this.decorateCSS("card-inner")} ${activeIndex === index ? this.decorateCSS("active") : ""}`}
                      key={index}
                    >
                      <img
                        alt=""
                        src={item.image}
                        className={this.decorateCSS("img")}
                      />
                      <div className={this.decorateCSS("text")}>
                        <span className={this.decorateCSS("title")}>{item.title}</span>
                        <span className={this.decorateCSS("subtitle")}>{item.subtitle}</span>
                      </div>
                    </div>
                  )
                )}
              </ComposerSlider>
            </div>
            <div className={this.decorateCSS("right-page")}>
              <ComposerIcon name={this.getPropValue("left_icon")} propsIcon={{
                className: this.decorateCSS("left_icon")
              }} />
              {this.castToObject<Card[]>("slider").map((item: Card, index: number) => (
                <div className={this.decorateCSS("text-container")} key={index}>
                  {index === activeIndex && (
                    <div className={this.decorateCSS("description")}>{item.description}</div>
                  )}
                </div>
              ))}
              <ComposerIcon name={this.getPropValue("right_icon")} propsIcon={{
                className: this.decorateCSS("right_icon")
              }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonials9Page;
