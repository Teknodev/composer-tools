import * as React from "react";
import { BaseIntroSection } from "../../EditorComponent";
import styles from "./intro-section1.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class IntroSection1 extends BaseIntroSection {
  constructor(props?: any) {
    super(props, styles);


    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "The #1 Web Solution for Your Business"
    });

    this.addProp({
      type: "array",
      key: "description",
      displayer: "Descriptions",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Description Item",
          value: [
            { type: "media", key: "icon", displayer: "Icon", value: { type: "icon", name: "FaRegCheckCircle" } },
            { type: "string", key: "title", displayer: "Title", value: "Affordable" },
            { type: "string", key: "text", displayer: "Description", value: "Plans start at $19/month with free 7-day trial" },
          ]
        },
        {
          type: "object",
          key: "item",
          displayer: "Description Item",
          value: [
            { type: "media", key: "icon", displayer: "Icon", value: { type: "icon", name: "FaRegCheckCircle" } },
            { type: "string", key: "title", displayer: "Title", value: "Efficient" },
            { type: "string", key: "text", displayer: "Description", value: "1-minute integration & immediate turnaround" },
          ]
        },
        {
          type: "object",
          key: "item",
          displayer: "Description Item",
          value: [
            { type: "media", key: "icon", displayer: "Icon", value: { type: "icon", name: "FaRegCheckCircle" } },
            { type: "string", key: "title", displayer: "Title", value: "Compliant" },
            { type: "string", key: "text", displayer: "Description", value: "Accessibility statement and certifications" },
          ]
        }
      ]
    });


    this.addProp({
      type: "object",
      key: "videoSection",
      displayer: "Video Section",
      value: [
        {
          type: "media",
          key: "video",
          displayer: "Media",
          additionalParams: { availableTypes: ["video"] },
          value: { type: "video", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/690a09593596a1002b1d8421?alt=media" }
        },
        {
          type: "media",
          key: "thumbnail",
          displayer: "Thumbnail (image)",
          additionalParams: { availableTypes: ["image"] },
          value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/690b2d873596a1002b1e6a4d?alt=media" }
        },
        {
          type: "media",
          key: "videoIcon",
          displayer: "Video Icon",
          additionalParams: { availableTypes: ["icon"] },
          value: { type: "icon", name: "FaPlay" }
        }
      ]
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Primary Button", "Start Free Trial", "", "FaArrowRight", null, "Primary"),
        INPUTS.BUTTON("button", "Secondary Button", "Get A Demo", "", "FaPlay", null, "White"),
      ],
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: false,
    });

    this.setComponentState("isPlaying", false);
  }

  static getName(): string {
    return "Intro Section 1";
  }

  togglePlay(e?: React.MouseEvent) {
    e && e.preventDefault();
    const isPlaying = this.getComponentState("isPlaying");
    this.setComponentState("isPlaying", !isPlaying);
  }

  render() {
    const title = this.getPropValue("title");
  const descriptions = this.castToObject<Array<any>>("description") || [];
  const videoSection = this.castToObject<any>("videoSection") || {};
  const video = videoSection.video;
  const thumbnail = videoSection.thumbnail;
  const videoIcon = videoSection.videoIcon;
  const overlay = this.getPropValue("overlay");
  const buttons = this.castToObject<Array<any>>("buttons") || [];
  const isPlaying = this.getComponentState("isPlaying");
  const alignment = Base.getContentAlignment();

  const isVideo = !!(video && (video.type === "video") && video.url);
  const hasRightContainer = !!(isVideo || thumbnail);
  const hasAnyDescription = Array.isArray(descriptions) && descriptions.some((d: any) => this.castToString(d?.title) || this.castToString(d?.text) || d?.icon);
  const hasAnyButton = Array.isArray(buttons) && buttons.some((b: any) => this.castToString(b?.text) || b?.icon);
  const hasTitle = this.castToString(title);
  const hasLeftContainer = !!(hasTitle || hasAnyDescription || hasAnyButton);

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={`${this.decorateCSS("intro-wrapper")} ${alignment === "left" ? this.decorateCSS("alignment-left") : this.decorateCSS("alignment-center")} ${hasLeftContainer && !hasRightContainer ? this.decorateCSS("left-container-alone") : ""}`}>
            {hasLeftContainer && (
            <div className={this.decorateCSS("text-content")}> 
              {hasTitle && (
                <Base.SectionTitle className={this.decorateCSS("section-title")}>{title}</Base.SectionTitle>
              )}

              {hasAnyDescription && (
                <div className={this.decorateCSS("features-list")}>
                  {descriptions.map((d: any, i: number) => (
                    <div key={i} className={this.decorateCSS("feature-item")}>
                      <div className={this.decorateCSS("feature-head-row")}>
                        {d.icon && (
                          <div className={this.decorateCSS("feature-icon-wrapper")}>
                            <Base.Media value={d.icon} className={this.decorateCSS("feature-icon")} />
                          </div>
                        )}
                        {this.castToString(d.title) && (
                          <Base.P className={this.decorateCSS("feature-title")}>{d.title}</Base.P>
                        )}
                      </div>
                      {this.castToString(d.text) && (
                        <div className={this.decorateCSS("feature-description-wrapper")}>
                          <Base.P className={this.decorateCSS("feature-description")}>{d.text}</Base.P>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {hasAnyButton && (
                <div className={this.decorateCSS("action-buttons")}> 
                  {buttons.map((btn: any, idx: number) => {
                    const btnTextExist = this.castToString(btn.text);
                    const iconName = (btn?.icon && (btn.icon.name || btn.icon)) || null;
                    if (!btnTextExist && !iconName) {
                      return null;
                    }
                    const url = btn.url || "#";
                    return (
                      <div key={idx} className={this.decorateCSS("button-wrapper")}> 
                        <ComposerLink path={url}>
                          <Base.Button buttonType={btn.type} className={this.decorateCSS("button")}>
                            {iconName && (
                              <div className={this.decorateCSS("button-icon-wrapper")}>
                                <Base.Media value={{ type: "icon", name: iconName }} className={this.decorateCSS("button-icon")} />
                              </div>
                            )}
                            {btnTextExist && <Base.P className={this.decorateCSS("button-text")}>{btn.text}</Base.P>}
                          </Base.Button>
                        </ComposerLink>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            )}

            {hasRightContainer && (
              <div className={`${this.decorateCSS("media-container")} ${!hasLeftContainer ? this.decorateCSS("right-container-alone") : ""}`}> 
                {!isPlaying && isVideo && thumbnail && (
                  <div className={this.decorateCSS("video-thumbnail")} onClick={(e) => this.togglePlay(e)}>
                    {thumbnail && <Base.Media value={thumbnail} className={this.decorateCSS("thumbnail-image")} />}
                    {overlay && <div className={this.decorateCSS("thumbnail-overlay")} />}
                    <div className={this.decorateCSS("play-button")}>
                      {videoIcon && <Base.Media value={videoIcon} className={this.decorateCSS("play-icon")} />}
                    </div>
                  </div>
                )}

                {isVideo && (!thumbnail || isPlaying) && (
                  <div className={this.decorateCSS("video-player")}>
                    <div className={this.decorateCSS("video-wrapper")}>
                      <Base.Media value={video} className={this.decorateCSS("video-element")} />
                    </div>
                  </div>
                )}

                {!isVideo && thumbnail && (
                  <div className={this.decorateCSS("media-wrapper")}> 
                    <Base.Media value={thumbnail} className={this.decorateCSS("media-image")} />
                  </div>
                )}
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default IntroSection1;
