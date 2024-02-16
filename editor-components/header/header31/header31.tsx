import * as React from "react";
import styles from "./header31.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { TypeUsableComponentProps } from "../../EditorComponent";

type Button = {
  buttonText: string;
  url: string;
  isPrimary: string;
};

class Header31 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value:
        "https://dentalexcellenceturkey.com/wp-content/themes/dectheme/images/slide/main.jpg",
    });
    this.addProp({
      type: "string",
      key: "first-text",
      displayer: "1st Text",
      value: "Premium Quality Dental Care",
    });
    this.addProp({
      type: "string",
      key: "second-text",
      displayer: "2nd Text",
      value: " Dental treatments in Turkey",
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
          value: "Get Free Quote",
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
          value: false,
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
    return "Header-31";
  }
  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div
            className={this.decorateCSS("content")}
            style={{
              backgroundImage: `url(${this.getPropValue("image")})`,
            }}
          >
            <div
              className={this.decorateCSS("container")}>
              <h6 className={this.decorateCSS("first-text")}>
                {this.getPropValue("first-text")}
              </h6>
              <h3 className={this.decorateCSS("second-text")}>
                {this.getPropValue("second-text")}
              </h3>
              <div className={this.decorateCSS("buttondiv")}>
                {this.castToObject<Button[]>("buttons").map(
                  (item: Button, indexButtons: number) => {
                    return (
                      <ComposerLink key={indexButtons} path={item.url}>
                        <button
                          className={`${this.decorateCSS("button")} ${
                            item.isPrimary ? this.decorateCSS("primary") : ""
                          }`}
                        >
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

export default Header31;
