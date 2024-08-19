import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content18.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

class Content18 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);
    interface Item {
      title: string;
      progress: number;
      progressText: string;
    }
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
      displayer: "2st Image",
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
              key: "progress-title",
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
              key: "progress-text",
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
              key: "progress-title",
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
              key: "progress-text",
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
              key: "progress-title",
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
              key: "progress-text",
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
              key: "progress-title",
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
              key: "progress-text",
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
                {this.getPropValue("items").map((item: any, index: number) => (
                  <div className={this.decorateCSS("item")} key={index}>
                    <div className={this.decorateCSS("progress-title-container")}>
                      <div className={this.decorateCSS("progress-title-icon")}>
                        <ComposerIcon
                          name={item.value[3].value}
                          propsIcon={{ className: this.decorateCSS("icon") }}
                        ></ComposerIcon>
                      </div>
                      <div className={this.decorateCSS("progress-title")}>
                        {item.value[0].value}
                      </div>
                    </div>

                    {this.getPropValue("progress-text-is-primary") && (
                      <div className={this.decorateCSS("progress-text-is-primary")}>
                        <div className={this.decorateCSS("progress-percent")}>
                          <div
                            className={this.decorateCSS("progress-text")}
                            style={{ marginLeft: `${item.value[1].value}%` }}
                          >
                            {item.value[2].value}
                          </div>
                        </div>
                        <div className={this.decorateCSS("progress-active")}>
                          <div
                            className={this.decorateCSS("progress-passive")}
                            style={{ width: `${item.value[1].value}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content18;
