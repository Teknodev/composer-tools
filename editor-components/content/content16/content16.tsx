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
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661bbc6bd2970002c628818?alt=media&timestamp=1719564433797",
    });
    this.addProp({
      type: "image",
      key: "item2",
      displayer: "2nd Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661bbc6bd2970002c628816?alt=media&timestamp=1719564433797",
    });
    this.addProp({
      type: "image",
      key: "item3",
      displayer: "3rd Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661bbc6bd2970002c628817?alt=media&timestamp=1719564433797",
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
                value: "About Us",
              },
  
              {
                type: "page",
                key: "url",
                displayer: "Button Link",
                value: "https://www.google.com/",
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
                          className={`${this.decorateCSS("button")}`}
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
