import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials9.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";
type Card = {
  image: string;
  title: React.JSX.Element;
  subtitle: React.JSX.Element;
  description: React.JSX.Element;
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
      value: "RiDoubleQuotesL",
    });
    this.addProp({
      type: "icon",
      key: "right_icon",
      displayer: "Right İcon",
      value: "RiDoubleQuotesR",
    });
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
              displayer: "Author Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666176cabd2970002c623b38?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "title",
              value: "Thein N.",
              displayer: "Author Name",
            },
            {
              type: "string",
              key: "subtitle",
              value: "18th December 2022",
              displayer: "Subtitle",
            },
            {
              type: "string",
              key: "description",
              value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet velit id nunc posuere, et fringilla leo convallis. Nam ullamcorper, arcu id ullamcorper congue, turpis urna interdum ligula, id congue purus nunc ac sem.",
              displayer: "Review Text",
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
              displayer: "Author Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666176cabd2970002c623b33?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "title",
              value: "Bailey H.",
              displayer: "Author Name",
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
              displayer: "Review Text",
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
              displayer: "Author Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666176cabd2970002c623b34?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "title",
              value: "Ashley S.",
              displayer: "Author Name",
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
              displayer: "Review Text",
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
              displayer: "Author Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666176cabd2970002c623b37?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "title",
              value: "Tom H.",
              displayer: "Author Name",
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
              displayer: "Review Text",
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
              displayer: "Author Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666176cabd2970002c623b36?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "title",
              value: "Ronald R.",
              displayer: "Author Name",
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
              displayer: "Review Text",
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
              displayer: "Author Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666176cabd2970002c623b35?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "title",
              value: "Olivia D.",
              displayer: "Author Name",
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
              displayer: "Review Text",
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
              displayer: "Author Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617728bd2970002c623bd5?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "title",
              value: "Sarah B.",
              displayer: "Author Name",
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
              displayer: "Review Text",
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
              displayer: "Author Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666176cabd2970002c623b37?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "title",
              value: "Mary J.",
              displayer: "Author Name",
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
              displayer: "Review Text",
            },
          ],
        },
      ],
    });
    this.setComponentState("active-index", 1);
  }
  static getName(): string {
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
      slidesToShow: Math.min(Math.max(slider.length, 1), 4),
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: slider.length > 1,
      arrows: false,

      beforeChange: (newIndex: number) => {
        let adjustedIndex = (newIndex + 1) % this.castToObject<Card[]>("slider").length;
        this.setComponentState("active-index", adjustedIndex);
      },
    };
    const activeIndex = this.getComponentState("active-index");
    const title = this.getPropValue("title");
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            {this.castToString(title) && (
              <div className={this.decorateCSS("up-page")}>
                <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>
              </div>
            )}
            <Base.ContainerGrid className={this.decorateCSS("down-page")}>
              <Base.GridCell className={this.decorateCSS("carousel")}>
                <ComposerSlider {...settings}>
                  {this.castToObject<Card[]>("slider").map((item: Card, index: number) => {
                    return (
                      <div className={`${this.decorateCSS("card-inner")} ${activeIndex === index ? this.decorateCSS("active") : ""}`}>
                        {item.image && <img alt="" src={item.image} className={this.decorateCSS("img")} />}
                        {(this.castToString(item.title) || this.castToString(item.subtitle)) && (
                          <Base.VerticalContent className={this.decorateCSS("text")}>
                            {this.castToString(item.title) && <Base.H4 className={this.decorateCSS("title")}>{item.title}</Base.H4>}
                            {this.castToString(item.subtitle) && <Base.H5 className={this.decorateCSS("subtitle")}>{item.subtitle}</Base.H5>}
                          </Base.VerticalContent>
                        )}
                      </div>
                    );
                  })}
                </ComposerSlider>
              </Base.GridCell>
              <Base.GridCell className={this.decorateCSS("right-page")}>
                {this.getPropValue("left_icon") && (
                  <ComposerIcon
                    name={this.getPropValue("left_icon")}
                    propsIcon={{
                      className: this.decorateCSS("left-icon"),
                    }}
                  />
                )}
                {this.castToObject<Card[]>("slider").map((item: Card, index: number) => (
                  <div className={this.decorateCSS("text")}>{index === activeIndex && this.castToString(item.description) && <Base.H3 className={this.decorateCSS("description")}>{item.description}</Base.H3>}</div>
                ))}
                {this.getPropValue("right_icon") && (
                  <ComposerIcon
                    name={this.getPropValue("right_icon")}
                    propsIcon={{
                      className: this.decorateCSS("right-icon"),
                    }}
                  />
                )}
              </Base.GridCell>
            </Base.ContainerGrid>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Testimonials9Page;
