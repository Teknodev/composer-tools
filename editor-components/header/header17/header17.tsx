import * as React from "react";
import styles from "./header17.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

class Header17 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "icon",
      key: "prev_icon",
      displayer: "Prev icon",
      value: "GrFormPrevious",
    });
    this.addProp({
      type: "icon",
      key: "next_icon",
      displayer: "Next icon",
      value: "GrFormNext",
    });

    this.addProp({
      type: "array",
      displayer: "Slider",
      key: "slider",
      value: [
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "string",
              displayer: "Subtitle",
              key: "subtitle",
              value: "WORLD BESTSELLERS",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Scandinavian Style House",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666193cabd2970002c625d54?alt=media&timestamp=1719483639150",
            },
            {
              type: "image",
              displayer: "Cover",
              key: "cover-image",
              value: "https://websiteseller.net/books-demo-theme/wp-content/uploads/sites/8/revslider/books/book-slider-s1-img.png"
            },
            {
              type: "string",
              displayer: "Button Text",
              key: "button-text",
              value: "View Content",
            },
            {
              type: "page",
              displayer: "Button Link",
              key: "button-url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "string",
              displayer: "Subtitle",
              key: "subtitle",
              value: "WORLD BESTSELLERS",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Contemporary Style House",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666193cabd2970002c625d53?alt=media&timestamp=1719483639150",
            },
            {
              type: "image",
              displayer: "Cover",
              key: "cover-image",
              value:"https://websiteseller.net/books-demo-theme/wp-content/uploads/sites/8/revslider/books/book-slider-s3-img.png"
            },
            {
              type: "string",
              displayer: "Button Text",
              key: "button-text",
              value: "View Content",
            },
            {
              type: "page",
              displayer: "Button Link",
              key: "button-url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "string",
              displayer: "Subtitle",
              key: "subtitle",
              value: "WORLD BESTSELLERS",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Metal Facade Coatings",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666193cabd2970002c625d52?alt=media&timestamp=1719483639150",
            },
            {
              type: "image",
              displayer: "Cover",
              key: "cover-image",
              value:"https://websiteseller.net/books-demo-theme/wp-content/uploads/sites/8/revslider/books/book-slider-s2-img.png"
            },
            {
              type: "string",
              displayer: "Button Text",
              key: "button-text",
              value: "View Content",
            },
            {
              type: "page",
              displayer: "Button Link",
              key: "button-url",
              value: "",
            },
          ],
        },
      ],
    });

    this.setComponentState("slider-ref", React.createRef());
  }

  getName(): string {
    return "Header-17";
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 440,
      autoplay: false,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };

    return (
      <div className={this.decorateCSS("container")}>
        <ComposerSlider
          {...settings}
          ref={this.getComponentState("slider-ref")}
          className={this.decorateCSS("carousel")}
        >
          {this.getPropValue("slider").map((item: any, index: number) => (
            <div className={this.decorateCSS("content")} key={`key${index}`}>
              {item.getPropValue("image") && (
                <img
                  src={item.getPropValue("image")}
                  alt=""
                  className={this.decorateCSS("bg-img")}
                />
              )}

              <div className={this.decorateCSS("slider-item-container")}>


                <div className={this.decorateCSS("slider-item-content")}>

                  <div className={this.decorateCSS("left-side")}>

                    {item.getPropValue("cover-image") && (
                      <img
                        src={item.getPropValue("cover-image")}
                        alt=""
                        className={this.decorateCSS("cover-image")}
                      />
                    )}
                    
                    <div className={this.decorateCSS("vertical-shadow-line")} />
                  </div>

                  <div className={this.decorateCSS("right-side")}>



                    <div className={this.decorateCSS("title-box")}>
                      <span className={this.decorateCSS("subtitle")}>{item.getPropValue("subtitle")}</span>
                      <h1 className={this.decorateCSS("title")}>{item.getPropValue("title")}</h1>
                      <h3 className={this.decorateCSS("description")}>{item.getPropValue("description")}</h3>

                      <div className={this.decorateCSS("view-button")}>
                        <ComposerLink path={item.getPropValue("button-url")}>
                          <span className={this.decorateCSS("view-button-text")}>
                            {item.getPropValue("button-text")}
                          </span>
                        </ComposerLink>
                      </div>

                    </div>
                  </div>
                  <div className={this.decorateCSS("text-overlay")} />

                  <div className={this.decorateCSS("left-side")}></div>

                </div>

              </div>
              <ComposerIcon
                name={this.getPropValue("next_icon")}
                propsIcon={{
                  className: `${this.decorateCSS("next-icon")} ${this.decorateCSS("arrow")} `,
                  size: 40,
                  onClick: () => {
                    this.getComponentState("slider-ref").current.slickNext();
                  },
                }}
              />
              <ComposerIcon
                name={this.getPropValue("prev_icon")}
                propsIcon={{
                  className: `${this.decorateCSS("prev-icon")} ${this.decorateCSS("arrow")}`,
                  size: 40,
                  onClick: () => {
                    this.getComponentState("slider-ref").current.slickPrev();
                  },
                }}
              />
            </div>
          ))}
        </ComposerSlider>
      </div>
    );
  }
}

export default Header17;
