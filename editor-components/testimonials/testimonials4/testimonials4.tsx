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
      arrows: true,
      speed: 700,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      beforeChange: (oldIndex: number, nextIndex: number) => {
        this.setComponentState("active_index", nextIndex)
      }

    };
    const sliderItem = this.castToObject<SliderItem[]>("items");
    console.log("sliderItem", sliderItem)
    return (
      <div className={this.decorateCSS("overlay")} style={{
        backgroundImage: `url(${this.getPropValue("cover-image")})`,
      }}>
        <Base.Container className={this.decorateCSS("container")} >
          <Base.MaxContent className={this.decorateCSS("max-content")}>
            <div className={this.decorateCSS("testimonials4")}>
              <ComposerSlider {...settings} ref={this.getComponentState("slider-ref")}>
                {sliderItem.map((item: any, index: number) => (
                  <div className={this.decorateCSS("items")}>
                    <ComposerIcon name={item.icon} propsIcon={{ className: this.decorateCSS("icon") }}></ComposerIcon>
                    <Base.P className={this.decorateCSS("longtext")}>
                      {item.description}
                    </Base.P>
                    <h3 className={this.decorateCSS("title")}>
                      {item.title}
                    </h3>
                    <h4 className={this.decorateCSS("subtitle")}>
                      {item.subtitle}
                    </h4>
                  </div>
                ))}
              </ComposerSlider>
              <div className={this.decorateCSS("images")}>
                {sliderItem.map((item: any, itemIndex: number) => {
                  return <img
                    src={item.image}
                    className={`${this.decorateCSS("image")} ${this.getComponentState("active_index") == itemIndex && this.decorateCSS("active")}`}
                    onClick={() => this.onImageClick(itemIndex)} />
                }
                )}
              </div>
            </div>
          </Base.MaxContent>
        </Base.Container>
      </div >



    );
  }
}




export default Testimonials4Page;
