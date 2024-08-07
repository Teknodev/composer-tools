import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content18.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type ProgressItem = {
  progressTitle: string;
  progress: number;
  progressText: JSX.Element;
  icon: string;
};

class Content18 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "image1",
      displayer: "1st Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661bc49bd2970002c62890e?alt=media&timestamp=1719564433797",
    });
    this.addProp({
      type: "image",
      key: "image2",
      displayer: "2nd Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661bc49bd2970002c62890f?alt=media&timestamp=1719564433797",
    });
    this.addProp({
      type: "string",
      key: "badge",
      displayer: "Badge",
      value: "Why Choose Us",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Committed to Your Mental Well-being",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    });
    this.addProp({
      type: "array",
      key: "items",
      displayer: "Items",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "progressTitle",
              displayer: "Progress Title",
              value: "Confidentiality",
            },
            {
              type: "number",
              key: "progress",
              displayer: "Progress",
              value: 90,
            },
            {
              type: "string",
              key: "progressText",
              displayer: "Progress Text",
              value: "90%",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "icon",
              value: "CgPlayButtonO",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "progressTitle",
              displayer: "Progress Title",
              value: "Consumer Satisfaction",
            },
            {
              type: "number",
              key: "progress",
              displayer: "Progress",
              value: 95,
            },

            {
              type: "string",
              key: "progressText",
              displayer: "Progress Text",
              value: "95%",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "icon",
              value: "CgPlayButtonO",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "progressTitle",
              displayer: "Progress Title",
              value: "Therapy",
            },
            {
              type: "number",
              key: "progress",
              displayer: "Progress",
              value: 98,
            },

            {
              type: "string",
              key: "progressText",
              displayer: "Progress Text",
              value: "98%",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "icon",
              value: "CgPlayButtonO",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "progressTitle",
              displayer: "Progress Title",
              value: "Counseling",
            },
            {
              type: "number",
              key: "progress",
              displayer: "Progress",
              value: 85,
            },

            {
              type: "string",
              key: "progressText",
              displayer: "Progress Text",
              value: "85%",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "icon",
              value: "CgPlayButtonO",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "boolean",
      key: "progress-text-is-primary",
      displayer: "progress-text-is-primary",
      value: true,
    });
  }
  getName(): string {
    return "Content 18";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            <div className={this.decorateCSS("left-page")}>
              <div className={this.decorateCSS("up-image")}>
                <img
                  className={this.decorateCSS("image1")}
                  src={this.getPropValue("image1")}
                  alt=""
                />
              </div>
              <div className={this.decorateCSS("down-image")}>
                <img
                  className={this.decorateCSS("image2")}
                  src={this.getPropValue("image2")}
                  alt=""
                />
              </div>
            </div>
            <div className={this.decorateCSS("right-page")}>
              <div className={this.decorateCSS("badge")}>
                {this.getPropValue("badge")}
              </div>
              <div className={this.decorateCSS("title")}>
                {this.getPropValue("title")}
              </div>
              <p className={this.decorateCSS("description")}>
                {this.getPropValue("description")}
              </p>

              <div className={this.decorateCSS("progress-container")}>
                {this.castToObject<ProgressItem[]>("items").map(
                  (item: ProgressItem, index: number) => (
                    <div className={this.decorateCSS("item")} key={index}>
                      <div
                        className={this.decorateCSS("progress-title-container")}
                      >
                        <div
                          className={this.decorateCSS("progress-title-icon")}
                        >
                          <ComposerIcon
                            name={item.icon}
                            propsIcon={{ className: this.decorateCSS("icon") }}
                          />
                        </div>
                        <div className={this.decorateCSS("progress-title")}>
                          {item.progressTitle}
                        </div>
                      </div>
                      {this.castToString(item.progressText) && (
                        <div
                          className={this.decorateCSS("progress-bar-container")}
                        >
                          <div className={this.decorateCSS("progress-bar")}>
                            <div
                              className={this.decorateCSS("progress")}
                              style={{
                                width: `${item.progress}%`,
                              }}
                            />
                          </div>
                          <span className={this.decorateCSS("progress-text")}>
                            {item.progressText}
                          </span>
                        </div>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content18;
