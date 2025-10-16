import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials1.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";

import { Base } from "../../../composer-base-components/base/base";

class Testimonials1Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "background-image",
      displayer: "Background Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6729d54e7acba6002c5e6e52?alt=media&timestamp=1730794845964",
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
              displayer: "Review Text",
              value:
                "I really like the clean and simple aesthetic of flat design. It's great for creating a modern and minimal look, and it also works well for responsive design since it's easy to adapt to different screen sizes. Plus, the lack of textures and gradients makes it easier to focus on the content itself.",
            },
            {
              type: "string",
              key: "name",
              displayer: "Author Name",
              value: "Jerrie Corinna",
            },
            {
              type: "icon",
              key: "icons",
              displayer: "Icon",
              value: "RiDoubleQuotesL",
            },
            {
              type: "image",
              key: "imageButton",
              displayer: "Author Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66616deebd2970002c62361d?alt=media&timestamp=1719483639149",
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
              displayer: "Review Text",
              value: "This product has changed my life! It's incredibly useful and packed with creative features. I would highly recommend it to everyone!",
            },
            {
              type: "string",
              key: "name",
              displayer: "Author Name",
              value: "Kevin Corinna",
            },
            {
              type: "icon",
              key: "icons",
              displayer: "Icon",
              value: "RiDoubleQuotesL",
            },
            {
              type: "image",
              key: "imageButton",
              displayer: "Author Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66616deebd2970002c62361e?alt=media&timestamp=1719483639149",
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
              displayer: "Review Text",
              value: "This product has changed my life! It's incredibly useful and packed with creative features. I would highly recommend it to everyone!",
            },
            {
              type: "string",
              key: "name",
              displayer: "Author Name",
              value: "Kevin Corinna",
            },
            {
              type: "icon",
              key: "icons",
              displayer: "Icon",
              value: "RiDoubleQuotesL",
            },
            {
              type: "image",
              key: "imageButton",
              displayer: "Author Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66616deebd2970002c62361f?alt=media&timestamp=1719483639150",
            },
          ],
        },
      ],
    });

    this.setComponentState("active_index", 0);
    this.setComponentState("slider-ref", React.createRef());
  }

  static getName(): string {
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
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      beforeChange: (oldIndex: number, nextIndex: number) => {
        this.setComponentState("active_index", nextIndex);
      },
    };

    const imageExist = this.getPropValue("background-image");

    return (
      <Base.Container
        className={this.decorateCSS("container")}
        isFull={this.getPropValue("background-image") ? true : false}
        style={{
          backgroundImage: `url(${this.getPropValue("background-image")})`,
        }}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            <div className={this.decorateCSS("content-wrapper")}>
              <div className={`${this.decorateCSS("content")} ${!imageExist && this.decorateCSS("content-no-image")}`}>
                <ComposerSlider {...settings} ref={this.getComponentState("slider-ref")}>
                  {this.castToObject<any>("items").map((item: any, index: number) => (
                    <div className={this.decorateCSS("items")}>
                      {item.icons && <Base.Icon name={item.icons} propsIcon={{ className: `${this.decorateCSS("icons")} ${!imageExist && this.decorateCSS("icons-no-image")}` }} />}
                      {this.castToString(item.longtext) && <div className={`${this.decorateCSS("longtext")} ${!imageExist && this.decorateCSS("longtext-no-image")}`}>{item.longtext}</div>}
                      {this.castToString(item.name) && <div className={`${this.decorateCSS("name")} ${!imageExist && this.decorateCSS("name-no-image")}`}>{item.name}</div>}
                    </div>
                  ))}
                </ComposerSlider>
                <div className={this.decorateCSS("images")}>
                  {this.castToObject<any>("items").map((item: any, itemIndex: number) => {
                    const isActive = this.getComponentState("active_index") === itemIndex;
                    return (
                      <div className={this.decorateCSS("image-container")}>
                        {item.imageButton && <img src={item.imageButton} className={`${this.decorateCSS("image")} ${isActive && this.decorateCSS("active")}`} alt={item.imageButton} onClick={() => this.onImageClick(itemIndex)} />}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Testimonials1Page;
