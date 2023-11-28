import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content16.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class Content16 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Get Affordable Dental Treatment",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Dental Excellence Turkey has the latest technology advancements that provide efficient solutions and the highest quality services.",
    });
    this.addProp({
      type: "image",
      key: "item1",
      displayer: "1st Image",
      value:
        "https://dentalexcellenceturkey.com/wp-content/themes/dectheme/images/de-daira.jpg",
    });
    this.addProp({
      type: "image",
      key: "item2",
      displayer: "2nd Image",
      value:
        "https://dentalexcellenceturkey.com/wp-content/themes/dectheme/images/de-daira-4.jpg",
    });
    this.addProp({
      type: "image",
      key: "item3",
      displayer: "3rd Image",
      value:
        "https://dentalexcellenceturkey.com/wp-content/themes/dectheme/images/de-daira-5.jpg",
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
                value: "ABOUT US",
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
    return "Content 16";
  }
  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("left-content")}>
              <div className={this.decorateCSS("left-column")}>
                <img
                  src={this.getPropValue("item1")}
                  alt="firstPhoto"
                  className={this.decorateCSS("item1")}
                />
              </div>
              <div className={this.decorateCSS("right-column")}>
                <img
                  src={this.getPropValue("item2")}
                  alt="firstPhoto"
                  className={this.decorateCSS("item2")}
                />
                <img
                  src={this.getPropValue("item3")}
                  alt="firstPhoto"
                  className={this.decorateCSS("item2")}
                />
              </div>
            </div>
            <div className={this.decorateCSS("right-content")}>
              <h2 className={this.decorateCSS("title")}>
                {this.getPropValue("title")}
              </h2>
              <p className={this.decorateCSS("description")}>
                {this.getPropValue("description")}
              </p>
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
          </div>
        </div>
      </div>
    );
  }
}

export default Content16;
