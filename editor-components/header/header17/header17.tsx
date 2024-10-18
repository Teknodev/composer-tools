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
              value:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://plus.unsplash.com/premium_photo-1677048147164-66c2b4111e91?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              type: "image",
              displayer: "Cover",
              key: "cover-image",
              value:
                "https://websiteseller.net/books-demo-theme/wp-content/uploads/sites/8/revslider/books/book-slider-s1-img.png",
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
              value:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://images.unsplash.com/photo-1484291470158-b8f8d608850d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              type: "image",
              displayer: "Cover",
              key: "cover-image",
              value:
                "https://websiteseller.net/books-demo-theme/wp-content/uploads/sites/8/revslider/books/book-slider-s3-img.png",
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
              value:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://images.unsplash.com/photo-1719344870842-d1d46896c9fa?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              type: "image",
              displayer: "Cover",
              key: "cover-image",
              value:
                "https://websiteseller.net/books-demo-theme/wp-content/uploads/sites/8/revslider/books/book-slider-s2-img.png",
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
    this.setComponentState("activeSlide", 0);
    this.setComponentState("mouseX", 0);
    this.setComponentState("mouseY", 0);
  }

  handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;

    const movementX = (clientX - window.innerWidth / 2) * -0.03;
    const movementY = (clientY - window.innerHeight / 2) * -0.03;

    this.setComponentState("mouseX", movementX);
    this.setComponentState("mouseY", movementY);
  };

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
      beforeChange: (_: number, newIndex: number) => {
        if (this.getComponentState("activeSlide") !== newIndex) {
          this.setComponentState("activeSlide", newIndex);
        }
      },
    };

    const movementX = this.getComponentState("mouseX");
    const movementY = this.getComponentState("mouseY");

    return (
      <div
        className={this.decorateCSS("container")}
        onMouseMove={this.handleMouseMove}
      >
        <ComposerSlider
          {...settings}
          ref={this.getComponentState("slider-ref")}
          className={this.decorateCSS("carousel")}
        >
          {this.getPropValue("slider").map((item: any, index: number) => {
            const isActive = this.getComponentState("activeSlide") === index;

            return (
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
                    <div
                      className={`${this.decorateCSS("left-side")} ${
                        isActive
                          ? this.decorateCSS("left-side-slide-animation")
                          : ""
                      }`}
                    >
                      {item.getPropValue("cover-image") && (
                        <img
                          src={item.getPropValue("cover-image")}
                          alt=""
                          className={this.decorateCSS("cover-image")}
                          style={{
                            transform: `translate(${movementX}px, ${movementY}px)`,
                          }}
                        />
                      )}

                      <div
                        className={this.decorateCSS("vertical-shadow-line")}
                      />
                    </div>

                    <div
                      className={`${this.decorateCSS("right-side")}  ${
                        isActive
                          ? this.decorateCSS("right-side-slide-animation")
                          : ""
                      }`}
                    >
                      <div className={`${this.decorateCSS("title-box")}`}>
                        {this.castToString(item.getPropValue("subtitle")) && (
                          <div className={this.decorateCSS("subtitle")}>
                            {item.getPropValue("subtitle")}
                          </div>
                        )}

                        {this.castToString(item.getPropValue("title")) && (
                          <h1 className={this.decorateCSS("title")}>
                            {item.getPropValue("title")}
                          </h1>
                        )}

                        {this.castToString(
                          item.getPropValue("description")
                        ) && (
                          <h3 className={this.decorateCSS("description")}>
                            {item.getPropValue("description")}
                          </h3>
                        )}

                        {this.castToString(
                          item.getPropValue("button-text")
                        ) && (
                          <div className={this.decorateCSS("view-button")}>
                            <ComposerLink
                              path={item.getPropValue("button-url")}
                            >
                              <div
                                className={this.decorateCSS("view-button-text")}
                              >
                                {this.castToString(
                                  item.getPropValue("button-text")
                                )}
                              </div>
                            </ComposerLink>
                          </div>
                        )}
                      </div>
                    </div>
                    <div
                      className={`${this.decorateCSS("text-overlay")} ${
                        isActive
                          ? this.decorateCSS("text-overlay-slide-animation")
                          : ""
                      }`}
                    />

                    <div className={this.decorateCSS("left-side")}></div>
                  </div>
                </div>
                <ComposerIcon
                  name={this.getPropValue("next_icon")}
                  propsIcon={{
                    className: `${this.decorateCSS(
                      "next-icon"
                    )} ${this.decorateCSS("arrow")} `,
                    size: 40,
                    onClick: () => {
                      this.getComponentState("slider-ref").current.slickNext();
                    },
                  }}
                />
                <ComposerIcon
                  name={this.getPropValue("prev_icon")}
                  propsIcon={{
                    className: `${this.decorateCSS(
                      "prev-icon"
                    )} ${this.decorateCSS("arrow")}`,
                    size: 40,
                    onClick: () => {
                      this.getComponentState("slider-ref").current.slickPrev();
                    },
                  }}
                />
              </div>
            );
          })}
        </ComposerSlider>
      </div>
    );
  }
}

export default Header17;
