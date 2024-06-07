import * as React from "react";
import styles from "./header22.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type IButton = {
  value: string;
};

interface IAnimationProps {
  animationState: string;
  startingAnimation: string;
  endingAnimation: string;
}

class HeaderComponent22 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "background",
      displayer: "Background",
      value:
        "https://images.unsplash.com/photo-1717244517670-4579a3a475c5?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    });

    this.addProp({
      type: "icon",
      key: "prev_icon",
      displayer: "Prev icon",
      value: "FaArrowLeftLong",
    });
    this.addProp({
      type: "icon",
      key: "next_icon",
      displayer: "Next icon",
      value: "FaArrowRightLong",
    });
    this.addProp({
      type: "array",
      displayer: "Slider Carousel",
      key: "slider",
      value: [
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "string",
              displayer: "Subtitle1",
              key: "subtitle1",
              value: "Case Study",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Car Showroom",
            },
            {
              type: "string",
              displayer: "Subtitle2",
              key: "subtitle2",
              value: "Masterpiece",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam quod quis culpa aperiam sint asperiores id atque odio ducimus. Quidem facilis ipsa explicabo, alias similique maxime quam vel quibusdam nulla.",
            },
            {
              type: "image",
              displayer: "Item",
              key: "image",
              value:
                "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              type: "object",
              key: "button",
              displayer: "Button",
              value: [
                {
                  type: "string",
                  key: "buttonText",
                  displayer: "Button Text",
                  value: "LINKEDIN",
                },
                {
                  type: "page",
                  key: "link",
                  displayer: "Link",
                  value: "",
                },
              ],
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
              displayer: "Subtitle1",
              key: "subtitle1",
              value: "Case Study",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Olympic Reflex",
            },
            {
              type: "string",
              displayer: "Subtitle2",
              key: "subtitle2",
              value: "Bussiness branding, Marketing",
            },

            {
              type: "string",
              displayer: "Description",
              key: "description",
              value:
                "Modern Hotel is the architecture of a new generation, a building  that exists not only in the dimension of space, but also in the dimension of time and communication.",
            },
            {
              type: "image",
              displayer: "Item",
              key: "image",
              value:
                "https://images.unsplash.com/photo-1566438480900-0609be27a4be?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              type: "object",
              key: "button",
              displayer: "Button",
              value: [
                {
                  type: "string",
                  key: "buttonText",
                  displayer: "Button Text",
                  value: "LINKEDIN",
                },
                {
                  type: "page",
                  key: "link",
                  displayer: "Link",
                  value: "",
                },
              ],
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
              displayer: "Subtitle1",
              key: "subtitle1",
              value: "Case Study",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Western Restaurant",
            },
            {
              type: "string",
              displayer: "Subtitle2",
              key: "subtitle2",
              value: "App, Website",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value:
                "Exhibition Center is the architecture of a new generation, a building that exists not only in the dimension of space, but also in the dimension of time and communication.  ",
            },
            {
              type: "image",
              displayer: "Item",
              key: "image",
              value:
                "https://images.unsplash.com/photo-1603201101485-e232d22ad18b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              type: "object",
              key: "button",
              displayer: "Button",
              value: [
                {
                  type: "string",
                  key: "buttonText",
                  displayer: "Button Text",
                  value: "LINKEDIN",
                },
                {
                  type: "page",
                  key: "link",
                  displayer: "Link",
                  value: "",
                },
              ],
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "icons",
      displayer: "Social Medias",
      value: [
        {
          type: "object",
          key: "icon",
          displayer: "Icon Item",
          value: [
            {
              type: "page",
              key: "navigate_icon",
              displayer: "Icon Link",
              value: "https://twitter.com/",
            },
            {
              type: "icon",
              key: "icon_name",
              displayer: "Icon",
              value: "FaTwitter",
            },
          ],
        },
        {
          type: "object",
          key: "icon",
          displayer: "Icon Item",
          value: [
            {
              type: "page",
              key: "navigate_icon",
              displayer: "Icon Link",
              value: "https://www.instagram.com/",
            },
            {
              type: "icon",
              key: "icon_name",
              displayer: "Icon",
              value: "FaInstagram",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "string",
      key: "next-arrow-text",
      displayer: "Next Arrow Text",
      value: "NEXT",
    });

    this.addProp({
      type: "string",
      key: "prev-arrow-text",
      displayer: "Prev Arrow Text",
      value: "PREV",
    });

    this.setComponentState("animation", true)
    this.setComponentState("active-index", 0);
    this.setComponentState("titleAnimationClass", "animate__fadeInRight");
    this.setComponentState("descriptionAnimationClass", "animate__fadeInUp");
    this.setComponentState("buttonAnimationClass", "animate__fadeInUp");

    this.setComponentState("slider-ref", React.createRef());
  }

  getName(): string {
    return "Header-22";
  }

  handleAnimationEnd = ({
    animationState,
    startingAnimation,
    endingAnimation,
  }: IAnimationProps) => {
    if (this.getComponentState(animationState) === endingAnimation) {
      this.setComponentState(animationState, startingAnimation);
    }
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 100,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (oldIndex: number, newIndex: number) => {
        this.setComponentState("animation", false);
        setTimeout(() => this.setComponentState("animation", true), 500);
        if (oldIndex == newIndex) return;
        setTimeout(() => {
          this.setComponentState("active-index", newIndex);
        }, 1200);
      },
    };

    const shouldHaveAnimationClass = this.getComponentState("animation");
    const imageAnimationClass = this.getComponentState("imageAnimationClass");

    const sliderCount = this.getPropValue("slider").length;
    const progressPercentage = ((this.getComponentState("active-index") + 1) / sliderCount) * 100;

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("image-container")}>
          <img
            className={this.decorateCSS("background")}
            src={this.getPropValue("background")}
            alt=""
          />
        </div>
        <ComposerSlider
          {...settings}
          className={this.decorateCSS("carousel")}
          ref={this.getComponentState("slider-ref")}
        >
          {this.getPropValue("slider").map((item: any, indexSlider: number) => (
            <div
              className={this.decorateCSS("slider-images")}
              key={indexSlider}
            >
              {item.getPropValue("image") && (
                <img
                  className={`${this.decorateCSS("slider-image")} ${
                    shouldHaveAnimationClass && this.decorateCSS("imageAnimationClass")
                  }`}
                  src={item.getPropValue("image")}
                  alt=""
                />
              )}
            </div>
          ))}
        </ComposerSlider>
        <div className={this.decorateCSS("item")}>
          <div className={this.decorateCSS("left-figure-container")}>
            <div className={this.decorateCSS("bottom-figure")}>
              <div className={this.decorateCSS("icons")}>
                {this.getPropValue("icons").map((item: any) => (
                  <ComposerLink path={item.getPropValue("navigate_icon")}>
                    <ComposerIcon
                      name={item.getPropValue("icon_name")}
                      propsIcon={{
                        className: `${this.decorateCSS("icon")}`,
                        size: 20,
                      }}
                    />
                  </ComposerLink>
                ))}
              </div>
              <div className={this.decorateCSS("line")}></div>
            </div>
          </div>
  
          <div className={this.decorateCSS("content-container")}>
            <div className={this.decorateCSS("layout")}>
              <div  className={`${this.decorateCSS("content")} ${
                    shouldHaveAnimationClass && this.decorateCSS("imageAnimationClass")
                  }`} >
                <div className={this.decorateCSS("title-container")}>
                  <h3
                    className={`${this.decorateCSS(
                      "subtitle1"
                    )}  animate__animated ${this.getComponentState(
                      "titleAnimationClass"
                    )}`}
                    onAnimationEnd={() => {
                      this.handleAnimationEnd({
                        animationState: "titleAnimationClass",
                        startingAnimation: "animate__fadeInRight",
                        endingAnimation: "animate__fadeOutDown",
                      });
                    }}
                  >
                    {this.getPropValue("slider")[
                      this.getComponentState("active-index")
                    ].getPropValue("title")}
                  </h3>
                  <h1
                    className={`${this.decorateCSS(
                      "title"
                    )}  animate__animated ${this.getComponentState(
                      "titleAnimationClass"
                    )}`}
                    onAnimationEnd={() => {
                      this.handleAnimationEnd({
                        animationState: "titleAnimationClass",
                        startingAnimation: "animate__fadeInRight",
                        endingAnimation: "animate__fadeOutDown",
                      });
                    }}
                  >
                    {this.getPropValue("slider")[
                      this.getComponentState("active-index")
                    ].getPropValue("title")}
                  </h1>
                  <h3
                    className={`${this.decorateCSS(
                      "subtitle2"
                    )}  animate__animated ${this.getComponentState(
                      "titleAnimationClass"
                    )}`}
                    onAnimationEnd={() => {
                      this.handleAnimationEnd({
                        animationState: "titleAnimationClass",
                        startingAnimation: "animate__fadeInRight",
                        endingAnimation: "animate__fadeOutDown",
                      });
                    }}
                  >
                    {this.getPropValue("slider")[
                      this.getComponentState("active-index")
                    ].getPropValue("title")}
                  </h3>

                  <div className={this.decorateCSS("btn-line")}></div>
                  <div>
                    {this.getPropValue("slider")[
                      this.getComponentState("active-index")
                    ].getPropValue("button")[0].value && (
                      <ComposerLink
                        path={
                          this.getPropValue("slider")[
                            this.getComponentState("active-index")
                          ].getPropValue("button")[1].value
                        }
                      >
                        <div
                          className={`${this.decorateCSS(
                            "button"
                          )} animate__animated ${this.getComponentState(
                            "buttonAnimationClass"
                          )}`}
                          onAnimationEnd={() => {
                            this.handleAnimationEnd({
                              animationState: "buttonAnimationClass",
                              startingAnimation: "animate__fadeInUp",
                              endingAnimation: "animate__fadeOutDown",
                            });
                          }}
                        >
                          <span className={this.decorateCSS("button-text")}>
                            {
                              this.getPropValue("slider")[
                                this.getComponentState("active-index")
                              ].getPropValue("button")[0].value
                            }
                          </span>
                        </div>
                      </ComposerLink>
                    )}
                  </div>
                </div>
                <p
                  className={`${this.decorateCSS(
                    "description"
                  )} animate__animated ${this.getComponentState(
                    "descriptionAnimationClass"
                  )} `}
                  onAnimationEnd={() => {
                    this.handleAnimationEnd({
                      animationState: "descriptionAnimationClass",
                      startingAnimation: "animate__fadeInUp",
                      endingAnimation: "animate__fadeOut",
                    });
                  }}
                >
                  {this.getPropValue("slider")[
                    this.getComponentState("active-index")
                  ].getPropValue("description")}
                </p>
              </div>
              <div className={this.decorateCSS("pagination")}>
                      <span className={this.decorateCSS("active-slide")}>
                        {(this.getComponentState("active-index") + 1).toString().padStart(2, "0")}
                      </span>
                      <div className={this.decorateCSS("progress-bar")}>
                        <div
                          className={this.decorateCSS("active")}
                          style={{ width: `${progressPercentage}%` }}
                        />
                      </div>
                      <span className={this.decorateCSS("slide-count")}>
                        {sliderCount.toString().padStart(2, "0")}
                      </span>
                    </div>
              
              <div className={this.decorateCSS("arrows")}>
                <div
                  className={this.decorateCSS("prev-arrow")}
                  onClick={() => {
                    this.getComponentState("slider-ref").current.slickPrev();
                  }}
                >
                  <ComposerIcon
                    name={this.getPropValue("prev_icon")}
                    propsIcon={{
                      className: `${this.decorateCSS("arrow")}`,
                      size: 20,
                    }}
                  />
                  <span className={this.decorateCSS("arrow-text")}>
                    {this.getPropValue("prev-arrow-text")}
                  </span>
                </div>
                <div className={this.decorateCSS("line")}></div>
                <div
                  className={this.decorateCSS("next-arrow")}
                  onClick={() => {
                    this.getComponentState("slider-ref").current.slickNext();
                  }}
                >
                  <span className={this.decorateCSS("arrow-text")}>
                    {this.getPropValue("next-arrow-text")}
                  </span>
                  <ComposerIcon
                    name={this.getPropValue("next_icon")}
                    propsIcon={{
                      className: `${this.decorateCSS("arrow")}`,
                      size: 20,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HeaderComponent22;
