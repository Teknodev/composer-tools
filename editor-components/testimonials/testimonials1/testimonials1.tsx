import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials1.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";

class Testimonials1Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "background-image",
      displayer: "Background Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6718b887b4a116002cfd0e2a?alt=media&timestamp=1729673367650",
    });

    this.addProp({
      type: "array",
      key: "items",
      displayer: "Items",
      value: [
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "longtext",
              displayer: "Long Text",
              value:
                "I really like the clean and simple aesthetic of flat design. It's great for creating a modern and minimal look, and it also works well for responsive design since it's easy to adapt to different screen sizes. Plus, the lack of textures and gradients makes it easier to focus on the content itself.",
            },
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "Jerrie Corinna",
            },
            {
              type: "icon",
              key: "icons",
              displayer: "Icon",
              value: "RiDoubleQuotesL",
            },
            {
              type: "object",
              key: "button",
              displayer: "Button",
              value: [
                {
                  type: "image",
                  key: "image-button",
                  displayer: "Image-button",
                  value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66616deebd2970002c62361d?alt=media&timestamp=1719483639149",
                },
                {
                  type: "page",
                  key: "src",
                  displayer: "Button Link",
                  value: "",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "longtext",
              displayer: "Long Text",
              value:
                "This product has changed my life! It's incredibly useful and packed with creative features. I would highly recommend it to everyone!",
            },
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "Kevin Corinna",
            },
            {
              type: "icon",
              key: "icons",
              displayer: "Icon",
              value: "RiDoubleQuotesL",
            },
            {
              type: "object",
              key: "button",
              displayer: "Button",
              value: [
                {
                  type: "image",
                  key: "image-button",
                  displayer: "Image-button",
                  value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66616deebd2970002c62361e?alt=media&timestamp=1719483639149",
                },
                {
                  type: "page",
                  key: "src",
                  displayer: "Button Link",
                  value: "",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "longtext",
              displayer: "Long Text",
              value:
                "This product has changed my life! It's incredibly useful and packed with creative features. I would highly recommend it to everyone!",
            },
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "Kevin Corinna",
            },
            {
              type: "icon",
              key: "icons",
              displayer: "Icon",
              value: "RiDoubleQuotesL",
            },
            {
              type: "object",
              key: "button",
              displayer: "Button",
              value: [
                {
                  type: "image",
                  key: "image-button",
                  displayer: "Image-button",
                  value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66616deebd2970002c62361f?alt=media&timestamp=1719483639150",
                },
                {
                  type: "page",
                  key: "src",
                  displayer: "Button Link",
                  value: "",
                },
              ],
            },
          ],
        },
      ],
    });

    this.setComponentState("active_index", 0);
    this.setComponentState("slider-ref", React.createRef());
  }

  getName(): string {
    return "Testimonials 1";
  }

  onImageClick(itemIndex: number) {
    this.setComponentState("active_index", itemIndex);
    this.getComponentState("slider-ref").current.slickGoTo(itemIndex);
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 500,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      beforeChange: (oldIndex: number, nextIndex: number) => {
        this.setComponentState("active_index", nextIndex);
      },
    };

    return (
      <Base.Container
        className={this.decorateCSS("container")
        }
        style={{
          backgroundImage: `url(${this.getPropValue("background-image")})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            <div className={this.decorateCSS("content-wrapper")}>
              <div className={this.decorateCSS("content")}>
                <ComposerSlider {...settings} ref={this.getComponentState("slider-ref")}>
                  {this.castToObject<any>("items").map((item: any, index: number) => (
                    <div className={this.decorateCSS("items")}>
                      <ComposerIcon
                        name={item.icons}
                        propsIcon={{ className: this.decorateCSS("icons") }}
                      />
                      <Base.VerticalContent>
                        <Base.P className={this.decorateCSS("longtext")}>{item.longtext}</Base.P>
                        <div className={this.decorateCSS("name")}>{item.name}</div>
                      </Base.VerticalContent>
                    </div>
                  ))}
                </ComposerSlider>
                <Base.ListGrid className={this.decorateCSS("images")}>
                  {this.castToObject<any>("items").map((item: any, itemIndex: number) => {
                    const isActive = this.getComponentState("active_index") === itemIndex;
                    return (
                      <img
                        src={item.button["image-button"]}
                        className={`${this.decorateCSS("image")} ${isActive && this.decorateCSS("active")
                          }`}
                        alt="avatar"
                        onClick={() => this.onImageClick(itemIndex)}
                      />
                    );
                  })}
                </Base.ListGrid>
              </div>
            </div>
          </div>


        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Testimonials1Page;
