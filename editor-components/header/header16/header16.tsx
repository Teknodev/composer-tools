import * as React from "react";
import styles from "./header16.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";


class HeaderComponent16 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Take your online order within minutes",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "From local fare to restaurant favorites, our wide selection of food will definitely satisfy all your cravings.",
    });
    this.addProp({
      type: "object",
      key: "button",
      displayer: "Button",
      value: [
        {
          type: "string",
          key: "buttonText",
          displayer: "Button Text",
          value: "Make Order",
        },
        {
          type: "page",
          key: "buttonPath",
          displayer: "Button Link",
          value: "",
        },
      ],
    });
    this.addProp({
      type: "string",
      key: "email",
      displayer: "1th Placeholder",
      value: "E-mail",
    });
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64edc7b0057bdf002c2ad640?alt=media&timestamp=1693304729496",
    });
    this.addProp({
      type: "image",
      key: "background-image",
      displayer: "Background Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64edc7b0057bdf002c2ad641?alt=media&timestamp=1693304729496",
    });
    this.addProp({
      type: "boolean",
      key: "true",
      displayer: "Column direction",
      value: true,
    });
  }
  

  getName(): string {
    return "Header-16";
  }

  render() {
    const button = this.getPropValue("button");

    return (
      <div
        className={this.decorateCSS("container")}
      >
        <div className={this.decorateCSS("max-content")} style={{
          backgroundImage: `url(${this.getPropValue("background-image")})`,
        }}>
          <div className={`${this.decorateCSS("wrapper")} ${
              this.getPropValue("true") && this.decorateCSS("wrapper-reverse")
            }`}>
            <div className={this.decorateCSS("left")}>
              <div className={this.decorateCSS("content")}>
                <h1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h1>
                <p className={this.decorateCSS("description")}>{this.getPropValue("description")}</p>

                <div className={this.decorateCSS("form")}>
                  <input
                    placeholder="Your Name"
                    type="text"
                    className={this.decorateCSS("name")}
                  />
                  <input
                    placeholder="Phone Number"
                    type="text"
                    className={this.decorateCSS("phone")}
                  />
                  <ComposerLink path={this.getPropValue("button")[1].value}>
                    <button className={this.decorateCSS("button")}>
                      {button[0].value}
                    </button>
                  </ComposerLink>
                </div>
              </div>
            </div>
            <div className={this.decorateCSS("right")}>
              <img
                className={this.decorateCSS("image")}
                src={this.getPropValue("image")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderComponent16;
