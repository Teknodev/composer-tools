import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials4.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base"
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

interface SliderItem {
  icon: string,
  description: JSX.Element,
  title: JSX.Element,
  subtitle: JSX.Element,
  image: string,
}
interface ArrowItem {
  nextArrow: string,
  prevArrow: string
}


class Testimonials4Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "items",
      displayer: "Items",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "ImQuotesRight",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "I really like the clean and simple aesthetic of flat design. It's great for creating a modern and minimal look, and it also works well for responsive design since it's easy to adapt to different screen sizes. Plus, the lack of textures and gradients makes it easier to focus on the content itself.",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Jerrie Corinna",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "UX Developer",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661701bbd2970002c623724?alt=media&timestamp=1719483639150",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "ImQuotesRight",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "This product has changed my life! It's incredibly useful and packed with creative features. I would highly recommend it to everyone!",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Kevin Corinna",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Solutions Architect",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661701bbd2970002c623723?alt=media&timestamp=1719483639150",
            },

          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "ImQuotesRight",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "I have been consistently impressed with the results achieved by this team. Their strategic approach and innovative ideas have greatly contributed to our marketing success.",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "John Corinna",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "UX Developer",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661701bbd2970002c623726?alt=media&timestamp=1719483639150",
            },
          ],
        },
      ],
    }
    );

    this.addProp({
      type: "image",
      key: "cover-image",
      displayer: "Background Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661701bbd2970002c623725?alt=media&timestamp=1719483639150"
    });
    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true
    });
    this.addProp({
      type: "object",
      key: "arrows",
      displayer: "Arrows",
      value: [
        {
          type: "icon",
          key: "prevArrow",
          displayer: "Prev Icon",
          value: "GrLinkPrevious"
        },
        {
          type: "icon",
          key: "nextArrow",
          displayer: "Next Icon",
          value: "GrLinkNext"
        }

      ]
    });
    this.setComponentState("active_index", 0);
    this.setComponentState("slider-ref", React.createRef());
  }



  getName(): string {
    return "Testimonials 4";
  }

  onImageClick(itemIndex: number) {
    this.setComponentState("active_index", itemIndex)
    this.getComponentState("slider-ref").current.slickGoTo(itemIndex)
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 700,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      beforeChange: (oldIndex: number, nextIndex: number) => {
        this.setComponentState("active_index", nextIndex)
      }
    };
    const sliderItem = this.castToObject<SliderItem[]>("items");
    const sliderRef = this.getComponentState("slider-ref");
    const arrows = this.castToObject<ArrowItem>("arrows");
    return (
      <Base.Container
        className={`${this.decorateCSS("container")} ${this.getPropValue("overlay") ? this.decorateCSS("overlay") : ""}`}
        isFull="true"
        style={{
          backgroundImage: `url(${this.getPropValue("cover-image")})`,
        }}
      >
        <Base.MaxContent className={this.getPropValue("cover-image") ? this.decorateCSS("max-content") : this.decorateCSS("max-content-no-image")}>
          {arrows.prevArrow && (
            <button className={this.decorateCSS("prevArrow")} onClick={() => {
              sliderRef.current.slickPrev();
            }}>
              <ComposerIcon name={arrows.prevArrow} propsIcon={{ className: this.getPropValue("cover-image") ? this.decorateCSS("arrow") : this.decorateCSS("arrow-dark") }}></ComposerIcon>
            </button>
          )}

          <div className={this.decorateCSS("testimonials4")}>
            <ComposerSlider {...settings} ref={this.getComponentState("slider-ref")}>
              {sliderItem.map((item: any, index: number) => {
                const hasContent = item.icon || this.castToString(item.description) || this.castToString(item.title) || this.castToString(item.subtitle);
                return (
                  <div className={hasContent ? this.decorateCSS("items") : ""}>
                    {item.icon && (
                      <ComposerIcon name={item.icon} propsIcon={{ className: this.getPropValue("cover-image") ? this.decorateCSS("icon") : this.decorateCSS("icon-dark") }} />
                    )}
                    {(this.castToString(item.description) || this.castToString(item.title) || this.castToString(item.subtitle)) && (
                      <Base.VerticalContent className={this.decorateCSS("content")}>
                        {this.castToString(item.description) && (
                          <Base.P className={this.getPropValue("cover-image") ? this.decorateCSS("longtext") : this.decorateCSS("longtext-dark")}>
                            {item.description}
                          </Base.P>
                        )}
                        {this.castToString(item.title) && (
                          <div className={this.getPropValue("cover-image") ? this.decorateCSS("title") : this.decorateCSS("title-dark")}>
                            {item.title}
                          </div>
                        )}
                        {this.castToString(item.subtitle) && (
                          <div className={this.getPropValue("cover-image") ? this.decorateCSS("subtitle") : this.decorateCSS("subtitle-dark")}>
                            {item.subtitle}
                          </div>
                        )}
                      </Base.VerticalContent>
                    )}
                  </div>
                );
              })}
            </ComposerSlider>
            {sliderItem.length > 0 && (
              <div className={this.decorateCSS("images")}>
                {sliderItem.map((item: any, itemIndex: number) => {
                  return item.image ? (
                    <img
                      src={item.image}
                      className={`${this.decorateCSS("image")} ${this.getComponentState("active_index") === itemIndex ? this.decorateCSS("active") : ""}`}
                      onClick={() => this.onImageClick(itemIndex)}
                    />
                  ) : null;
                })}
              </div>
            )}

          </div>
          {arrows.nextArrow && (
            <button className={this.decorateCSS("nextArrow")} onClick={() => {
              sliderRef.current.slickNext();
            }}>
              <ComposerIcon name={arrows.nextArrow} propsIcon={{ className: this.decorateCSS("arrow") }}></ComposerIcon>
            </button>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}




export default Testimonials4Page;
