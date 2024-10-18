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
        "https://vzkit.rometheme.pro/persona/wp-content/uploads/sites/15/2024/01/psychologist-therapy-group-support-writing-notes-2023-11-27-05-30-45-utc.jpg",
      "https://vzkit.rometheme.pro/persona/wp-content/uploads/sites/15/2024/01/psychologist-therapy-group-support-writing-notes-2023-11-27-05-30-45-utc.jpg",
    });
    this.addProp({
      type: "image",
      key: "image2",
      displayer: "2nd Image",
      value:
        "https://vzkit.rometheme.pro/persona/wp-content/uploads/sites/15/2024/01/psychology-mental-health-and-support-with-a-woman-2023-11-27-05-29-05-utc.jpg",
    });
    this.addProp({
      type: "icon",
      key: "playIcon",
      displayer: "Play Icon",
      value: "FaRegPlayCircle"

    });
    this.addProp({
      type: "page",
      displayer: "Video",
      key: "video",
      value: ""
    });
    this.addProp({
      type: "string",
      key: "badge",
      displayer: "Badge",
      value: "WHY CHOOSE US",
      value: "WHY CHOOSE US",
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
    this.setComponentState("is_video_visible", false);
    this.setComponentState("is_video_visible", false);
  }
  getName(): string {
    return "Content 18";
  }

  render() {
    const badge = this.castToString(this.getPropValue("badge"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const itemsLength = this.getPropValue("items").length;
    const image1 = this.getPropValue("image1");
    const image2 = this.getPropValue("image2");
    console.log("state", this.getComponentState("is_video_visible"))
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            {(image1 || image2) && (
              <div className={this.decorateCSS("left-page")}>
                {image1 && (
                  <div className={image2 ? this.decorateCSS("up-image") : this.decorateCSS("without-image2")}>
                    <img
                      className={this.decorateCSS("image1")}
                      src={this.getPropValue("image1")}
                      alt={this.getPropValue("image1")}
                    />
                  </div>
                )}
                {image2 && (
                  <div className={image1 ? this.decorateCSS("down-image") : this.decorateCSS("without-image1")}>

                    <img
                      className={this.decorateCSS("image2")}
                      src={this.getPropValue("image2")}
                      alt={this.getPropValue("image2")}
                    />

                    <div
                      className={this.decorateCSS("player-container")}
                      onClick={() => this.setComponentState("is_video_visible", !this.getComponentState("is_video_visible"))}
                    >
                      <div className={this.decorateCSS("icon-container")}>
                        <ComposerIcon name={this.getPropValue("playIcon")} propsIcon={{ className: this.decorateCSS("icon") }} />
                      </div>
                    </div>

                    {this.getPropValue("video") && (
                      <div className={this.decorateCSS("player-image")}>
                        {this.getComponentState("is_video_visible") && (
                          <div
                            className={this.decorateCSS(this.getPropValue("image1") ? "down-image-video" : "without-image1")}
                          >
                            <div className={this.decorateCSS("player")}>
                              <iframe
                                className={this.decorateCSS("image2")}
                                src={this.getPropValue("video")}
                              >
                              </iframe>
                              <div
                                className={this.decorateCSS("click-overlay")}
                                onClick={() => {
                                  console.log("Overlay clicked!");
                                  this.setComponentState("is_video_visible", false);
                                }}
                              ></div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

              </div>
            )}

            {(badge || title || description || (itemsLength > 0)) && (
              <div className={this.decorateCSS("right-page")}>
                {badge && (
                  <div className={this.decorateCSS("badge")}>
                    {this.getPropValue("badge")}
                  </div>
                )}
                {title && (
                  <div className={this.decorateCSS("title")}>
                    {this.getPropValue("title")}
                  </div>
                )}
                {description && (
                  <p className={this.decorateCSS("description")}>
                    {this.getPropValue("description")}
                  </p>
                )}
            )}

                {(badge || title || description || (itemsLength > 0)) && (
                  <div className={this.decorateCSS("right-page")}>
                    {badge && (
                      <div className={this.decorateCSS("badge")}>
                        {this.getPropValue("badge")}
                      </div>
                    )}
                    {title && (
                      <div className={this.decorateCSS("title")}>
                        {this.getPropValue("title")}
                      </div>
                    )}
                    {description && (
                      <p className={this.decorateCSS("description")}>
                        {this.getPropValue("description")}
                      </p>
                    )}

                    {itemsLength > 0 && (
                      <div className={this.decorateCSS("progress-container")}>
                        {this.castToObject<ProgressItem[]>("items").map(
                          (item: ProgressItem, index: number) => (
                            <div className={this.decorateCSS("item")} key={index}>
                              <div className={this.decorateCSS("progress-content")}>
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
                                <div className={this.decorateCSS("progress-text-container")}>
                                  <div className={this.decorateCSS("progress-text")}>
                                    {item.progressText}
                                  </div>
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

                                </div>
                              )}
                            </div>
                          )
                        )}
                      </div>

                    )}
                  </div>
                )}
              </div>
        </div>
        </div >
        );
  }
}

        export default Content18;
