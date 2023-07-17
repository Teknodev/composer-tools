import * as React from "react";
import styles from "./header29.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class HeaderComponent29 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      displayer: "Items",
      key: "items",
      value: [
        {
          type: "object",
          displayer: "Item Left Top",
          key: "left-top-item",
          value: [
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "We Teach to Be Active and Creative",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value:
                "Anyway, you still use Lorem Ipsum and rightly so, as it will always have a place in the web workers toolbox, as things happen, not always.",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://woodmart.xtemos.com/wp-content/uploads/2021/06/w-education-top-bg.svg?id=38455",
            },
          ],
        },

        {
          type: "image",
          displayer: "Right Image",
          key: "rightImage",
          value:
            "https://a6n4d3q9.rocketcdn.me/wp-content/uploads/2021/06/w-education-slider-img-1-opt-1.jpg.webp",
        },
      ],
    });
    this.addProp({
      type: "array",
      key: "buttonprop",
      displayer: "Button Prop",
      value: [
        {
          type: "object",
          displayer: "Button",
          key: "button",
          value: [
            {
              type: "string",
              displayer: "Button Text",
              key: "text",
              value: "VIEW MORE",
            },
            {
              type: "page",
              displayer: "Button URL",
              key: "url",
              value: "",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Header-29";
  }

  render() {
    let items: any = this.castToObject("items");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            <div className={this.decorateCSS("background-image")}>
              <img src={items[0].image} alt={items[0].title} />
            </div>
            <div className={this.decorateCSS("left")}>
              <div className={this.decorateCSS("title")}>
                <h1>{items[0].title}</h1>
              </div>
              <div className={this.decorateCSS("description")}>
                <h3>{items[0].description}</h3>
              </div>

              {this.getPropValue("buttonprop").map(
                (button: any, index: number) => (
                  <ComposerLink path={button.value[0].value} key={index}>
                    <div className={this.decorateCSS("button-wrapper")}>
                      <a
                        className={this.decorateCSS("button")}
                        href={button.value[1].value}
                      >
                        {button.value[0].value}
                      </a>
                    </div>
                  </ComposerLink>
                )
              )}
            </div>
            <div className={this.decorateCSS("right")}>
              <div className={this.decorateCSS("image")}>
                <img src={items[1].value} alt={items[1].displayer} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderComponent29;
