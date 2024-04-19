import * as React from "react";
import styles from "./header14.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class HeaderComponent14 extends BaseHeader {
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
      displayer: "Slides",
      key: "slides",
      value: [
        {
          type: "object",
          displayer: "Slide",
          key: "slide",
          value: [
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Charge Your Phone Safely!",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value:
                "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64edc69e057bdf002c2ad5e4?alt=media&timestamp=1693304455863",
            },

            {
              type: "array",
              displayer: "Buttons",
              key: "buttons",
              value: [
                {
                  type: "object",
                  displayer: "Button",
                  key: "button",
                  value: [
                    {
                      type: "string",
                      displayer: "Button Text",
                      key: "button-text",
                      value: "TO SHOP",
                    },
                    {
                      type: "page",
                      displayer: "Button Link",
                      key: "button-url",
                      value: "",
                    },
                    {
                      type: "boolean",
                      displayer: "Is Primary",
                      key: "primary",
                      value: true,
                    },
                  ],
                },
                {
                  type: "object",
                  displayer: "Button",
                  key: "button",
                  value: [
                    {
                      type: "string",
                      displayer: "Button Text",
                      key: "button-text",
                      value: "READ MORE",
                    },
                    {
                      type: "page",
                      displayer: "Button Link",
                      key: "button-url",
                      value: "",
                    },
                    {
                      type: "boolean",
                      displayer: "Is Primary",
                      key: "primary",
                      value: false,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          displayer: "Second Slide",
          key: "second-slide",
          value: [
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "For Everything and Everyone",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value:
                "Even if your less into design and more into content strategy you may find some redeeming value with, wait for it, dummy copy.",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64edc69e057bdf002c2ad5e3?alt=media&timestamp=1693304455863",
            },
            {
              type: "array",
              displayer: "Buttons",
              key: "buttons",
              value: [
                {
                  type: "object",
                  displayer: "Button",
                  key: "button",
                  value: [
                    {
                      type: "string",
                      displayer: "Button Text",
                      key: "button-text",
                      value: "TO SHOP",
                    },
                    {
                      type: "page",
                      displayer: "Button Link",
                      key: "button-url",
                      value: "",
                    },
                    {
                      type: "boolean",
                      displayer: "Is Primary",
                      key: "primary",
                      value: true,
                    },
                  ],
                },
                {
                  type: "object",
                  displayer: "Button",
                  key: "button",
                  value: [
                    {
                      type: "string",
                      displayer: "Button Text",
                      key: "button-text",
                      value: "READ MORE",
                    },
                    {
                      type: "page",
                      displayer: "Button Link",
                      key: "button-url",
                      value: "",
                    },
                    {
                      type: "boolean",
                      displayer: "Is Primary",
                      key: "primary",
                      value: false,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          displayer: "Slide",
          key: "slide",
          value: [
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Featured Accessories",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value:
                "A client that's unhappy for a reason is a problem, a client that's unhappy though required he or her can't quite put a finger.",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64edc69e057bdf002c2ad5e2?alt=media&timestamp=1693304455863",
            },
            {
              type: "array",
              displayer: "Buttons",
              key: "buttons",
              value: [
                {
                  type: "object",
                  displayer: "Button",
                  key: "button",
                  value: [
                    {
                      type: "string",
                      displayer: "Button Text",
                      key: "button-text",
                      value: "TO SHOP",
                    },
                    {
                      type: "page",
                      displayer: "Button Link",
                      key: "button-url",
                      value: "",
                    },
                    {
                      type: "boolean",
                      displayer: "Is Primary",
                      key: "primary",
                      value: true,
                    },
                  ],
                },
                {
                  type: "object",
                  displayer: "Button",
                  key: "button",
                  value: [
                    {
                      type: "string",
                      displayer: "Button Text",
                      key: "button-text",
                      value: "READ MORE",
                    },
                    {
                      type: "page",
                      displayer: "Button Link",
                      key: "button-url",
                      value: "",
                    },
                    {
                      type: "boolean",
                      displayer: "Is Primary",
                      key: "primary",
                      value: false,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });
    this.setComponentState("slider-ref", React.createRef());
  }

  getName(): string {
    return "Header-14";
  }

  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      dotsClass: `slick-dots ${this.decorateCSS("customDots")}`,
    };
    return (
      <div className={this.decorateCSS("container")}>
        <ComposerSlider
          {...settings}
          className={this.decorateCSS("carousel")}
          ref={this.getComponentState("slider-ref")}
        >
          {this.getPropValue("slides").map((item: any, index: number) => (
            <div className={this.decorateCSS("slide")} key={`sld-8-${index}`}>
              <img src={item.getPropValue("image")} alt={item.getPropValue("title")} />
              <div className={this.decorateCSS("content")}>
                <h1 className={this.decorateCSS("title")}>
                  {item.getPropValue("title")}
                </h1>
                <h3 className={this.decorateCSS("description")}>
                  {item.getPropValue("description")}
                </h3>
                <div className={this.decorateCSS("buttons-container")}>
                  {item.getPropValue("buttons").map((buttonItem: any, index: number) => (
                    <div
                      className={`${this.decorateCSS("button")} ${
                        buttonItem.getPropValue("primary")
                          ? this.decorateCSS("primary-button")
                          : ""
                      }`}
                      key={`btn-${index}`}
                    >
                      <ComposerLink path={buttonItem.getPropValue("button-url")}>
                        <span>{buttonItem.getPropValue("button-text")}</span>
                      </ComposerLink>
                    </div>
                  ))}
                </div>
              </div>
              <ComposerIcon
                name={this.getPropValue("prev_icon")}
                propsIcon={{
                  className: `${this.decorateCSS("arrow")} ${this.decorateCSS(
                    "prev-icon"
                  )}`,
                  onClick: () => {
                    this.getComponentState("slider-ref").current.slickPrev();
                  },
                }}
              />
              <ComposerIcon
                name={this.getPropValue("next_icon")}
                propsIcon={{
                  className: `${this.decorateCSS("arrow")} ${this.decorateCSS(
                    "next-icon"
                  )}`,
                  onClick: () => {
                    this.getComponentState("slider-ref").current.slickNext();
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

export default HeaderComponent14;
