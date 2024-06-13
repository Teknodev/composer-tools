import React from "react";
import styles from "./header22.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class HeaderComponent22 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "background",
      displayer: "Background",
      value:
        "https://images.unsplash.com/photo-1614292264554-7dca1d6466d6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

    this.setComponentState("imageAnimation", true);
    this.setComponentState("textAnimation", true);

    this.setComponentState("imageSliderRef", React.createRef());
    this.setComponentState("textSliderRef", React.createRef());
  }

  getName(): string {
    return "Header-22";
  }

  handleBeforeChange = (oldIndex: any, newIndex: any) => {
    if (oldIndex !== newIndex) {
      this.setComponentState("imageAnimation", false);
      this.setComponentState("textAnimation", false);
  
      setTimeout(() => this.setComponentState("textAnimation", true), 100);
      setTimeout(() => this.setComponentState("imageAnimation", true), 300);
    }
  };

  render() {
    const imageSettings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 700,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (oldIndex: any, newIndex: any) => {
        this.handleBeforeChange(oldIndex, newIndex);
        this.getComponentState("textSliderRef").current.slickGoTo(newIndex);
      },
    };
    
    const textSettings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (oldIndex: any, newIndex: any) => {
        this.handleBeforeChange(oldIndex, newIndex);
        this.getComponentState("textSliderRef").current.slickGoTo(newIndex);
      },
    };

    const shouldHaveAnimationClass = this.getComponentState("imageAnimation");
    const textAnimationClass = this.getComponentState("textAnimation");
    this.setComponentState("currentSlide", 0);

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("image-container")}>
          <img
            className={this.decorateCSS("background")}
            src={this.getPropValue("background")}
            alt=""
          />
        </div>

        <Slider
          {...imageSettings}
          className={this.decorateCSS("carousel")}
          ref={this.getComponentState("imageSliderRef")}
        >
          {this.getPropValue("slider").map((item: any, indexSlider: any) => (
            <div className={this.decorateCSS("slider-images")} key={indexSlider}>
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
        </Slider>
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

        <Slider
          {...textSettings}
          className={this.decorateCSS("text-carousel")}
          ref={this.getComponentState("textSliderRef")}
        >
          {this.getPropValue("slider").map((item: any, indexSlider: any) => (
            <div className={this.decorateCSS("slider-texts")} key={indexSlider}>
              <div className={this.decorateCSS("content-container")}>
                <div className={this.decorateCSS("layout")}>
                  <div className={this.decorateCSS("content")}>
                    <div
                      className={`${this.decorateCSS("title-container")} ${
                        textAnimationClass && this.decorateCSS("textAnimation")
                      }`}
                    >
                      <h3
                        className={`${this.decorateCSS(
                          "subtitle1"
                        )} animate__animated ${this.getComponentState(
                          "titleAnimationClass"
                        )}`}
                      >
                        {item.getPropValue("title")}
                      </h3>
                      <h1
                        className={`${this.decorateCSS(
                          "title"
                        )} animate__animated ${this.getComponentState(
                          "titleAnimationClass"
                        )}`}
                      >
                        {item.getPropValue("title")}
                      </h1>
                      <h3
                        className={`${this.decorateCSS(
                          "subtitle2"
                        )} animate__animated ${this.getComponentState(
                          "titleAnimationClass"
                        )}`}
                      >
                        {item.getPropValue("title")}
                      </h3>
                    </div>
                    <p
                      className={`${this.decorateCSS("description")} ${
                        this.decorateCSS("slideText") 
                      }`}
                    >
                      {item.getPropValue("description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
           
        </Slider>
        <div className={this.decorateCSS("custom-dots")}>
          {this.getPropValue("slider").map((_: any, index: any) => (
            <div
              className={`${this.decorateCSS("custom-dot")} ${this.getComponentState("currentSlide") === index ? this.decorateCSS("active") : ""}`}
              key={index}
              onClick={() => this.getComponentState("textSliderRef").current.slickGoTo(index)}
            ></div>
          ))}
        </div>
        </div>
        <div className={this.decorateCSS("arrows")}>
          <div
            className={this.decorateCSS("prev-arrow")}
            onClick={() => {
              this.getComponentState("imageSliderRef").current.slickPrev();
              this.getComponentState("textSliderRef").current.slickPrev();
            }}
          >
            <ComposerIcon
              name={this.getPropValue("prev_icon")}
              propsIcon={{ className: `${this.decorateCSS("arrow")}`, size: 20 }}
            />
            <span className={this.decorateCSS("arrow-text")}>
              {this.getPropValue("prev-arrow-text")}
            </span>
          </div>
          <div className={this.decorateCSS("line")}></div>
          <div
            className={this.decorateCSS("next-arrow")}
            onClick={() => {
              this.getComponentState("imageSliderRef").current.slickNext();
              this.getComponentState("textSliderRef").current.slickNext();
            }}
          >
            <span className={this.decorateCSS("arrow-text")}>
              {this.getPropValue("next-arrow-text")}
            </span>
            <ComposerIcon
              name={this.getPropValue("next_icon")}
              propsIcon={{ className: `${this.decorateCSS("arrow")}`, size: 20 }}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default HeaderComponent22;
