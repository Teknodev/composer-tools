import * as React from "react";
import { BaseStats, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./stats10.module.scss";

import { Base } from "../../../composer-base-components/base/base";

type ProgressItem = {
  progressTitle: string;
  progress: number;
  progressText: React.JSX.Element;
  icon: string | TypeMediaInputValue;
};

class Stats10 extends BaseStats {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "media",
      key: "image1",
      displayer: "1st Image",
      additionalParams: { availableTypes: ["image", "video"] },
      value: {
        type: "image",
        url: "https://vzkit.rometheme.pro/persona/wp-content/uploads/sites/15/2024/01/psychologist-therapy-group-support-writing-notes-2023-11-27-05-30-45-utc.jpg",
      },
    });
    this.addProp({
      type: "media",
      key: "image2",
      displayer: "2nd Image",
      additionalParams: { availableTypes: ["image", "video"] },
      value: {
        type: "image",
        url: "https://vzkit.rometheme.pro/persona/wp-content/uploads/sites/15/2024/01/psychology-mental-health-and-support-with-a-woman-2023-11-27-05-29-05-utc.jpg",
      },
    });
    this.addProp({
      type: "media",
      key: "playIcon",
      displayer: "Play Icon",
      additionalParams: { availableTypes: ["image", "icon"] },
      value: { type: "icon", name: "FaRegPlayCircle" },
    });
    this.addProp({
      type: "media",
      displayer: "Video",
      key: "video",
      additionalParams: { availableTypes: ["video", "icon"] },
      value: {
        type: "video",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667e75d50181a1002c334f4f?alt=media&timestamp=1719563750188",
      },
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
      key: "stats",
      displayer: "Stats",
      value: [
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
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
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: { type: "icon", name: "CgPlayButtonO" },
            },
          ],
        },
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
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
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: { type: "icon", name: "CgPlayButtonO" },
            },
          ],
        },
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
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
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: { type: "icon", name: "CgPlayButtonO" },
            },
          ],
        },
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
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
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: { type: "icon", name: "CgPlayButtonO" },
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
    return "Stats 10";
  }

  render() {
    const badge = this.castToString(this.getPropValue("badge"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const itemsLength = (this.getPropValue("stats") || []).length;
    const image1 = this.getPropValue("image1") as TypeMediaInputValue;
    const image2 = this.getPropValue("image2") as TypeMediaInputValue;
    const video = this.getPropValue("video") as TypeMediaInputValue;
    const videoLinkExist = video && ("url" in video ? video.url : "name" in video ? video.name : "");
    const playIcon = this.getPropValue("playIcon") as TypeMediaInputValue;
    const playIconExist = playIcon && (playIcon?.name || playIcon?.url);
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            {(image1?.url || image2?.url) && (
              <div className={this.decorateCSS("left-page")}>
                {image1?.url && (
                  <div
                    className={`${this.decorateCSS("up-image")} ${!image2?.url && this.decorateCSS("without-image2")}`}
                    data-animation={this.getPropValue("hoverAnimation").join(" ")}
                  >
                    <Base.Media
                      className={this.decorateCSS("image1")}
                      value={image1}
                    />
                  </div>
                )}
                {image2?.url && (
                  <div
                    className={`${this.decorateCSS("down-image")}
                      ${!image1?.url && this.decorateCSS("without-image1")}
                      ${this.getComponentState("is_video_visible") ? this.decorateCSS("video-active") : ""}`
                    }
                    data-animation={this.getPropValue("hoverAnimation").join(" ")}
                  >
                    <Base.Media
                      className={this.decorateCSS("image2")}
                      value={image2}
                    />
                    <div className={this.decorateCSS("player-container")} onClick={() => {
                      this.setComponentState("is_video_visible", true)
                    }}>
                     {videoLinkExist && playIconExist && <div className={this.decorateCSS("icon-container")}>
                        <Base.Media value={this.getPropValue("playIcon")} className={this.decorateCSS("play-icon")} />
                      </div>}
                    </div>
                    {this.getComponentState("is_video_visible") && (
                      <div
                        className={this.decorateCSS("image")}
                        onClick={() => this.setComponentState("is_video_visible", false)}
                      >
                        {videoLinkExist && <div className={this.decorateCSS("player")} onClick={(event) => event.stopPropagation()}>
                          <Base.Media value={video} className={this.decorateCSS("image2")} />
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
                    {this.castToObject<ProgressItem[]>("stats").map(
                      (item: ProgressItem, index: number) => {
                        const iconExist = typeof item.icon === "object" ? (item.icon?.name || item.icon?.url) : item.icon;
                        const titleExist = this.castToString(item.progressTitle);
                        const textExist = this.castToString(item.progressText);
                        if (!iconExist && !titleExist && !textExist) return null;
                        return (
                        <div
                          className={this.decorateCSS("item")}
                          key={index}
                          data-animation={this.getPropValue("hoverAnimation").join(" ")}
                        >
                          {(iconExist || titleExist || textExist) && (
                          <div className={this.decorateCSS("progress-content")}>
                            {(iconExist || titleExist) && (
                            <div
                              className={this.decorateCSS("progress-title-container")}
                            >
                              {iconExist && (
                              <div
                                className={this.decorateCSS("progress-title-icon")}
                              >
                                  <Base.Media value={typeof item.icon === "object" ? item.icon : { type: "icon", name: item.icon }} className={this.decorateCSS("icon")} />
                              </div>
                              )}
                              {titleExist && (
                              <div className={this.decorateCSS("progress-title")}>
                                {item.progressTitle}
                              </div>
                              )}

                            </div>
                            )}
                            {textExist && (
                            <div className={this.decorateCSS("progress-text-container")}>
                              <div className={this.decorateCSS("progress-text")}>
                                {item.progressText}
                              </div>
                            </div>
                            )}
                          </div>
                          )}



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
                        );
                      }
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

export default Stats10;
