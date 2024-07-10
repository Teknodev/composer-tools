import Slider from "react-slick";
import * as React from "react";
import { BaseSlider } from "../../EditorComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./slider8.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Card = {
  image: string;
  backgroundImage: string;
  imagetitle: string;
  url: string;
};

type Button = {
  buttonText: string;
  url: string;
  buttonIcon: string;
};

type ButtonNav = {
  prevIcon: string;
  nextIcon: string;
};

class Slider8 extends BaseSlider {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "header",
      displayer: "Header",
      value: [
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "imagetitle",
              displayer: "Image Title",
              value: "The Petronas Twin Towers",
            },
            {
              type: "page",
              key: "url",
              displayer: "URL",
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/facade-modern-building-concept-with-glass-panels-with-straight-lines-by-day-copy-1.jpg",
            },
            {
              type: "image",
              key: "backgroundImage",
              displayer: "Background Image",
              value:
                "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/facade-modern-building-concept-with-glass-panels-with-straight-lines-by-day-copy-1.jpg",
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
              key: "imagetitle",
              displayer: "Image Title",
              value: "Multi-Family Housing",
            },
            {
              type: "page",
              key: "url",
              displayer: "URL",
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/architecture-3d-rendering-illustration-modern-minimal-house-with-natural-landscape-6.jpg",
            },
            {
              type: "image",
              key: "backgroundImage",
              displayer: "Background Image",
              value:
                "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/architecture-3d-rendering-illustration-modern-minimal-house-with-natural-landscape-6.jpg",
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
              key: "imagetitle",
              displayer: "Image Title",
              value: "The LightHouse",
            },
            {
              type: "page",
              key: "url",
              displayer: "URL",
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/daniel-stone-A4TtfFo_qRw-unsplash.jpg",
            },
            {
              type: "image",
              key: "backgroundImage",
              displayer: "Background Image",
              value:
                "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/daniel-stone-A4TtfFo_qRw-unsplash.jpg",
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
              key: "imagetitle",
              displayer: "Image Title",
              value: "The Arches",
            },
            {
              type: "page",
              key: "url",
              displayer: "URL",
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/architectural-3d-rendering-illustration-modern-minimal-house-with-natural-landscape.jpg",
            },
            {
              type: "image",
              key: "backgroundImage",
              displayer: "Background Image",
              value:
                "https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/architectural-3d-rendering-illustration-modern-minimal-house-with-natural-landscape.jpg",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "VIEW PROJECT",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
            {
              type: "icon",
              key: "buttonIcon",
              displayer: "Button Icon",
              value: "FaArrowRight",
            },
          ],
        },
      ],
      additionalParams: {
        maxElementCount: 2,
      },
    });

    this.addProp({
      type: "array",
      key: "nav-buttons",
      displayer: "Nav Buttons",
      value: [
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "icon",
              key: "prevIcon",
              displayer: "Button Icon",
              value: "FaArrowLeftLong",
            },
            {
              type: "icon",
              key: "nextIcon",
              displayer: "Button Icon",
              value: "FaArrowRightLong",
            },
          ],
        },
      ],
      additionalParams: {
        maxElementCount: 2,
      },
    });

    this.setComponentState("slider-ref", React.createRef());
  }

  getName(): string {
    return "Slider 8";
  }

  render() {
    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 1500,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
    };

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            <div className={this.decorateCSS("slider-parent")}>
              <Slider
                {...settings}
                className={this.decorateCSS("carousel")}
                ref={this.getComponentState("slider-ref")}
              >
                {this.castToObject<Card[]>("header").map(
                  (item: Card, index: number) => {
                    return (
                      <div
                        className={this.decorateCSS("slider-inner-div")}
                        key={`sld-8-${index}`}
                      >
                        <div
                          className={this.decorateCSS("content")}
                          style={{ backgroundImage: `url("${item.backgroundImage}")` }}
                        >
                          <div
                            className={this.decorateCSS("content-div")}
                          >
                            <div
                              className={this.decorateCSS("image")}
                              style={{ backgroundImage: `url(${item.image})` }}
                            >
                            </div>
                            <h3 className={this.decorateCSS("item-title")}>
                              {item.imagetitle}
                            </h3>
                            <div className={this.decorateCSS("buttons")}>
                              {this.castToObject<Button[]>("buttons").map(
                                (button: Button, index: number) => (
                                  <ComposerLink
                                    key={`dw-7-btn-left-${index}`}
                                    path={button.url}
                                  >
                                    <button className={this.decorateCSS("button")}>
                                      {button.buttonText}
                                      <ComposerIcon
                                        propsIcon={{
                                          className: this.decorateCSS("button-icon"),
                                        }}
                                        name={button.buttonIcon}
                                      />
                                    </button>
                                  </ComposerLink>
                                )
                              )}
                            </div>
                            <div className={this.decorateCSS("nav-buttons")}>
                              {this.castToObject<ButtonNav[]>("nav-buttons").map(
                                (button: ButtonNav, index: number) => (
                                  <button
                                    className={this.decorateCSS("nav-button")}
                                    onClick={() => {
                                      this.getComponentState("slider-ref").current.slickPrev();
                                    }}
                                  >
                                    <ComposerIcon
                                      name={button.prevIcon}
                                      propsIcon={{
                                        className: `${this.decorateCSS("arrow")}`,
                                        size: 20,
                                      }}
                                    />
                                  </button>
                                )
                              )}
                              {this.castToObject<ButtonNav[]>("nav-buttons").map(
                                (button: ButtonNav, index: number) => (
                                  <button
                                    className={this.decorateCSS("nav-button")}
                                    onClick={() => {
                                      this.getComponentState("slider-ref").current.slickNext();
                                    }}
                                  >
                                    <ComposerIcon
                                      name={button.nextIcon}
                                      propsIcon={{
                                        className: `${this.decorateCSS("arrow")}`,
                                        size: 20,
                                      }}
                                    />
                                  </button>
                                )
                              )}
                            </div>
                          </div>
                        </div>

                      </div>
                    )
                  }
                )}
              </Slider>
            </div>
          </div>
        </div >
      </div >
    );
  }
}

export default Slider8;
