import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content15.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { TypeUsableComponentProps } from "../../EditorComponent";

class Content15 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "first-text",
      displayer: "first-text",
      value: "Premium Quality Dental Core",
    });
    this.addProp({
      type: "string",
      key: "second-text",
      displayer: "second-text",
      value: "Where the excellent smile begins!",
    });
    this.addProp({
      type: "string",
      key: "third-text",
      displayer: "Description",
      value:
        "Dental Excellence Turkey – a team of highly qualified dentists providing top of the line dental services for adults and children. Dental Excellence offers gentle and compassionate care, without stress or anxiety in a comfortable environment. Our doctors take personal interest in you. Our practice pays special attention to quality, while providing patients the benefit of affordable, state-of-the-art medical and dental services. We are determined to give you the best in medical and dental care.",
    });
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Right Image",
      value:
        "https://dentalexcellenceturkey.com/wp-content/themes/dectheme/images/virtual-tour-img.jpg",
    });
    this.addProp({
      type: "array",
      key: "image-list",
      displayer: "Image List",
      value: [
        {
          type: "object",
          key: "image-item",
          displayer: "Image Item",
          value: [
            {
              type: "image",
              key: "image-of-item",
              displayer: "Image",
              value:
                "https://dentalexcellenceturkey.com/wp-content/themes/dectheme/images/review-us-on-trustpilot.png",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "https://www.google.com/",
            },
          ],
        },
        {
          type: "object",
          key: "image-item",
          displayer: "Image Item",
          value: [
            {
              type: "image",
              key: "image-of-item",
              displayer: "Image",
              value:
                "https://dentalexcellenceturkey.com/wp-content/themes/dectheme/images/review-us-on-google.png",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "https://www.google.com/",
            },
          ],
        },
        {
          type: "object",
          key: "image-item",
          displayer: "Image Item",
          value: [
            {
              type: "image",
              key: "image-of-item",
              displayer: "Image",
              value:
                "https://dentalexcellenceturkey.com/wp-content/themes/dectheme/images/review-us-on-facebook.png",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "https://www.google.com/",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "CLINIC",
            },

            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "https://www.google.com/",
            },
            {
              type: "boolean",
              key: "isPrimary",
              displayer: "Is Primary",
              value: false,
            },
          ],
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
              value: "360 VIRTUAl TOUR",
            },

            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "https://www.google.com/",
            },
            {
              type: "boolean",
              key: "isPrimary",
              displayer: "Is Primary",
              value: false,
            },
          ],
        },
      ],
    });
  }
  getName(): string {
    return "Content 15";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("left-content")}>
              <h6 className={this.decorateCSS("first-text")}>
                {this.getPropValue("first-text")}
              </h6>
              <h2 className={this.decorateCSS("second-text")}>
                {this.getPropValue("second-text")}
              </h2>
              <p className={this.decorateCSS("description")}>
                {this.getPropValue("third-text")}
              </p>
              <div className={this.decorateCSS("imagediv")}>
                {this.getPropValue("image-list").map(
                  (item: any, index: number) => {
                    return (
                      <div>
                        <a
                          href={item.value[1].value}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={item.value[0].value}
                            alt="linkImage"
                            className={this.decorateCSS("link-images")}
                          />
                        </a>
                      </div>
                    );
                  }
                )}
              </div>
              <div className={this.decorateCSS("buttondiv")}>
                {this.getPropValue("buttons").map(
                  (item: any, indexButtons: number) => {
                    return (
                      <ComposerLink
                        key={indexButtons}
                        path={item.value[1].value}
                      >
                        <button
                          className={`${this.decorateCSS("button")} ${
                            item.value[2].value
                              ? this.decorateCSS("primary")
                              : ""
                          }`}
                        >
                          {item.value[0].value}
                        </button>
                      </ComposerLink>
                    );
                  }
                )}
              </div>
            </div>
            <div className={this.decorateCSS("right-content")}>
              <img
                src={this.getPropValue("image")}
                alt="rightPhoto"
                className={this.decorateCSS("right-image")}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content15;
