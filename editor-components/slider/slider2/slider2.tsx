import * as React from "react";
import {
  BaseSlider,
  TypeUsableComponentProps,
} from "../../EditorComponent";
import styles from "./slider2.module.scss";
import Slider from "react-slick";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type Button = {
  buttonText: string;
  url: string;
};

class Slider2 extends BaseSlider {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "header",
      displayer: "Header",
      value: "MY WORLD IS GAME",
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Description",
      value: "GAME WORLD FOR EVERYONE",
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
          value: "https://img.freepik.com/free-vector/games-time-neon-text-with-gamepad_1262-15457.jpg?w=1380&t=st=1680873095~exp=1680873695~hmac=68fd63985fe8fa217d304a45258b5742e42e7aa7d20dc10857050d9c9571cfa4",
        },
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value: "https://img.freepik.com/free-vector/video-game-controls-frame-neon-style-brick-wall_24908-58914.jpg?w=826&t=st=1680873122~exp=1680873722~hmac=30be9e015b094897d66645042ac78426bba2b8a26da11ffd9506c4eefa25af88",
        },
      ],
    });

    let button: TypeUsableComponentProps = {
      type: "object",
      key: "button",
      displayer: "Button",
      value: [
        {
          type: "string",
          key: "buttonText",
          displayer: "Button Text",
          value: "Get Now",
        },
        {
          type: "page",
          key: "url",
          displayer: "Url",
          value: "",
        },
      ],
    };

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [JSON.parse(JSON.stringify(button))],
    });
  }

  getName(): string {
    return "Slider 2";
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
            <Slider {...settings} className={this.decorateCSS("carousel")}>
              {this.getPropValue("slider").map(
                (item: any, indexSlider: number) => (
                  <img
                    src={item.value}
                    className={this.decorateCSS("img")}
                    key={indexSlider}
                  />
                )
              )}
            </Slider>
            <div className={this.decorateCSS("box")}>
              <h2>{this.getPropValue("header")}</h2>
              <h1>{this.getPropValue("subtitle")}</h1>
              <div className={this.decorateCSS("button-group")}>
                {this.castToObject<Button[]>("buttons").map(
                  (item: Button, indexButtons: number) => {
                    return (
                      <ComposerLink key={indexButtons} path={item.url}>
                        <button className={this.decorateCSS("button")}>
                          {item.buttonText}
                        </button>
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

export default Slider2;
