import * as React from "react";
import styles from "./header29.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class HeaderComponent29 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "object",
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64edde21057bdf002c2adb30?alt=media&timestamp=1693310475090",
            },
          ],
        },

        {
          type: "image",
          displayer: "Right Image",
          key: "rightImage",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64edde21057bdf002c2adb2f?alt=media&timestamp=1693310475090",
        },
      ],
    });
    this.addProp({
      type: "object",
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
                <h1 className={this.decorateCSS("items")}>{items[0].title}</h1>
              </div>
              <div className={this.decorateCSS("description")}>
                <h3 className={this.decorateCSS("items-description")}>{items[0].description}</h3>
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
              <img src={items[1].value} alt={items[1].displayer} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderComponent29;
