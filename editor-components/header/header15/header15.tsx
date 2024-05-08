import * as React from "react";
import styles from "./header15.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";


class HeaderComponent15 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "background-image",
      displayer: "Background Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64edc7b0057bdf002c2ad641?alt=media&timestamp=1693304729496",
    });
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64edc7b0057bdf002c2ad640?alt=media&timestamp=1693304729496",
    });

    this.addProp({
      type: "string",
      key: "header",
      displayer: "Header",
      value: "Shop Online",
    });

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
      type: "string",
      key: "email",
      displayer: "Placeholder",
      value: "E-mail",
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
  }

  getName(): string {
    return "Header-15";
  }

  render() {
    const button = this.getPropValue("button");
    const image = this.getPropValue("image");
    const background = this.getPropValue("background-image");
    const emailPlaceholder = this.getPropValue("email", { as_string: true });

    return (
      <div
        className={this.decorateCSS("container")}
      >
        <div className={this.decorateCSS("max-content")} style={{
          backgroundImage: `url(${this.getPropValue("background-image")})`,
        }}>
          <div className={`${this.decorateCSS("wrapper")} ${this.getPropValue("true") && this.decorateCSS("wrapper-reverse")
            }`} style={{ position: 'relative' }}>

            <div className={this.decorateCSS("left")}>
              <div className={this.decorateCSS("content")} >
                <div className={this.decorateCSS("centered-content")}></div>
                <h2 className={this.decorateCSS("header")}>{this.getPropValue("header")}</h2>
                <h1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h1>
                <p className={this.decorateCSS("description")}>{this.getPropValue("description")}</p>

                {emailPlaceholder && (<div className={this.decorateCSS("form-display")}>

                  <div className={this.decorateCSS("form")}>
                    <input
                      placeholder={emailPlaceholder}
                      type="email"
                      className={this.decorateCSS("email")}
                    />
                  </div>

                  <div className={this.decorateCSS("button-box")}>
                    {button[0].value && (
                      <ComposerLink path={button[1].value}>
                        <button className={this.decorateCSS("button")}>
                          {button[0].value}
                        </button>
                      </ComposerLink>
                    )}
                  </div>
                </div>
                )}
              </div>
            </div>

            <div className={this.decorateCSS("right")}>
              {image && <div className={this.decorateCSS("right-image")}>
                <img
                  className={`${this.decorateCSS("image")} ${!background && this.decorateCSS("without-background")}`}
                  src={this.getPropValue("image")}
                  alt=""
                />
              </div>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderComponent15;
