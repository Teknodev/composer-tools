import * as React from "react";
import { BaseSlider, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./slider1.module.scss";

import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import ComposerSlider from "../../../composer-base-components/slider/slider";

interface Button {
  buttonText: string;
  url: string;
  isPrimary: boolean;
}

class Slider1 extends BaseSlider {
  constructor(props?: any) {
    super(props, styles);

    let button: TypeUsableComponentProps = {
      type: "object",
      key: "button",
      displayer: "Button",
      value: [
        {
          type: "string",
          key: "buttonText",
          displayer: "Button Text",
          value: "Go There",
        },
        {
          type: "page",
          key: "url",
          displayer: "Button Link",
          value: "",
        },
        {
          type: "boolean",
          key: "isPrimary",
          displayer: "Is Primary",
          value: true,
        },
      ],
    };

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Travel",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Exploring new places, experiencing different cultures, and meeting new people are all part of the joy of traveling.",
    });

    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Slider",
      value: [
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64550f97f72de2002caaeee3?alt=media&timestamp=1683296164904",
        },
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64550f97f72de2002caaeee2?alt=media&timestamp=1683296164904",
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [JSON.parse(JSON.stringify(button))],
    });
  }
  getName(): string {
    return "Slider 1";
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("slider-parent")}>
            <ComposerSlider {...settings} className={this.decorateCSS("carousel")}>
              {this.getPropValue("slider").map(
                (item: any, indexSlider: number) => (
                  <img
                    alt=""
                    src={item.value}
                    className={this.decorateCSS("img")}
                    key={indexSlider}
                  />
                )
              )}
            </ComposerSlider>
            <div className={this.decorateCSS("box")}>
              <div className={this.decorateCSS("title")}>
                <h1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h1>
              </div>
              <p className={this.decorateCSS("description")}>{this.getPropValue("description")}</p>
              <div className={this.decorateCSS("button-group")}>
                {this.castToObject<Button[]>("buttons").map(
                  (item: Button, indexButtons: number) => {
                    return (
                      <ComposerLink key={indexButtons} path={item.url}>
                        <div
                          className={`${this.decorateCSS("button")} ${
                            item.isPrimary && this.decorateCSS("primary")
                          }`}
                        >
                          {item.buttonText}
                        </div>
                      </ComposerLink>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider1;
