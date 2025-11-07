import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content8.module.scss";

import { Base } from "composer-tools/composer-base-components/base/base";

type ProgressItem = {
  progressTitle: string;
  progress: number;
  progressText: React.JSX.Element;
  icon: string;
};

class Content8 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "image1",
      displayer: "1st Image",
      value:
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
      type: "video",
      displayer: "Video",
      key: "video",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667e75d50181a1002c334f4f?alt=media&timestamp=1719563750188"
    });
    this.addProp({
      type: "string",
      key: "badge",
      displayer: "Badge",
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
    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2"]
      }
    });
  }
  static getName(): string {
    return "Content 8";
  }

  render() {
    const badge = this.castToString(this.getPropValue("badge"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const itemsLength = this.getPropValue("items").length;
    const image1 = this.getPropValue("image1");
    const image2 = this.getPropValue("image2");
    const videoLinkExist = this.getPropValue("video");
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            {(image1 || image2) && (
              <div className={this.decorateCSS("left-page")}>
                {image1 && (
                  <div 
                    className={`${this.decorateCSS("up-image")} ${!image2 && this.decorateCSS("without-image2")}`}
                    data-animation={this.getPropValue("hoverAnimation").join(" ")}
                  >
                    <img
                      className={this.decorateCSS("image1")}
                      src={this.getPropValue("image1")}
                      alt={this.getPropValue("image1")}
                    />
                  </div>
                )}
                {image2 && (
                  <div 
                    className={`${this.decorateCSS("down-image")} 
                      ${!image1 && this.decorateCSS("without-image1")}
                      ${this.getComponentState("is_video_visible") ? this.decorateCSS("video-active") : ""}`
                    }
                    data-animation={this.getPropValue("hoverAnimation").join(" ")}
                  >
                    <img
                      className={this.decorateCSS("image2")}
                      src={this.getPropValue("image2")}
                      alt={this.getPropValue("image2")}
                    />
                    <div className={this.decorateCSS("player-container")} onClick={() => {
                      this.setComponentState("is_video_visible", true)
                    }}>
                     {videoLinkExist && <div className={this.decorateCSS("icon-container")}>
                        <Base.Icon name={this.getPropValue("playIcon")} propsIcon={{ className: this.decorateCSS("play-icon") }} />
                      </div>}
                    </div>
                    {this.getComponentState("is_video_visible") && (
                      <div
                        className={this.decorateCSS("image")}
                        onClick={() => this.setComponentState("is_video_visible", false)}
                      >
                        {videoLinkExist && <div className={this.decorateCSS("player")}>
                          <video
                            onClick={(event) => event.stopPropagation()}
                            controls
                            className={this.decorateCSS("image2")}
                            src={this.getPropValue("video")}
                          ></video>
                        </div>}

                      </div>
                    )}

                  </div>
                )}
              </div>
            )}

            {(badge || title || description || (itemsLength > 0)) && (
              <Base.VerticalContent className={this.decorateCSS("right-page")}>
                {badge && (
                  <Base.SectionSubTitle className={this.decorateCSS("badge")}>
                    {this.getPropValue("badge")}
                  </Base.SectionSubTitle>
                )}
                {title && (
                  <Base.SectionTitle className={this.decorateCSS("title")}>
                    {this.getPropValue("title")}
                  </Base.SectionTitle>
                )}
                {description && (
                  <Base.SectionDescription className={this.decorateCSS("description")}>
                    {this.getPropValue("description")}
                  </Base.SectionDescription>
                )}

                {itemsLength > 0 && (
                  <Base.Row className={this.decorateCSS("progress-container")}>
                    {this.castToObject<ProgressItem[]>("items").map(
                      (item: ProgressItem, index: number) => (
                        <div 
                          className={this.decorateCSS("item")} 
                          key={index}
                          data-animation={this.getPropValue("hoverAnimation").join(" ")}
                        >
                          <div className={this.decorateCSS("progress-content")}>
                            <div
                              className={this.decorateCSS("progress-title-container")}
                            >
                              <div
                                className={this.decorateCSS("progress-title-icon")}
                              >
                               <Base.Icon
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
                                    '--progress-width': `${item.progress}%`,
                                  } as React.CSSProperties}
                                />
                              </div>

                            </div>
                          )}
                        </div>
                      )
                    )}
                  </Base.Row>
                )}
              </Base.VerticalContent>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Content8;
