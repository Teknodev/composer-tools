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
      key: "subtitle",
      displayer: "Subtitle",
      value: "Welcome to"
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Intro Section — Beautifully built with Composer"
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
            { type: "media", key: "icon", displayer: "Icon", value: { type: "icon", name: "FaRegLightbulb" } },
            { type: "string", key: "title", displayer: "Title", value: "Beautiful Intro" },
            { type: "string", key: "text", displayer: "Description", value: "Create a great first impression with this clean intro section." },
          ]
        },
        {
          type: "object",
          key: "item",
          displayer: "Description Item",
          value: [
            { type: "media", key: "icon", displayer: "Icon", value: { type: "icon", name: "FaRocket" } },
            { type: "string", key: "title", displayer: "Title", value: "Fast & Reliable" },
            { type: "string", key: "text", displayer: "Description", value: "Showcase a short pitch and a clear call to action on the left." },
          ]
        },
        {
          type: "object",
          key: "item",
          displayer: "Description Item",
          value: [
            { type: "media", key: "icon", displayer: "Icon", value: { type: "icon", name: "FaPlay" } },
            { type: "string", key: "title", displayer: "Title", value: "Media Ready" },
            { type: "string", key: "text", displayer: "Description", value: "Use the media on the right as an image or video with a thumbnail." },
          ]
        }
      ]
    });

    // media object contains video, thumbnail and videoIcon as media inputs
    this.addProp({
      type: "object",
      key: "media",
      displayer: "Media Object",
      value: [
        {
          type: "media",
          key: "video",
          displayer: "Video / Lottie",
          additionalParams: { availableTypes: ["video", "lottie"] },
          value: { type: "video", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/sample-video.mp4?alt=media" }
        },
        {
          type: "media",
          key: "thumbnail",
          displayer: "Thumbnail (image)",
          additionalParams: { availableTypes: ["image"] },
          value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/placeholder-image?alt=media" }
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
        INPUTS.BUTTON("button", "Primary Button", "Get Started", "", "FaArrowRight", null, "Primary"),
        INPUTS.BUTTON("button", "Secondary Button", "Learn More", "", "FaArrowRight", null, "Link"),
      ],
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
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
  const descriptions = this.castToObject<Array<any>>("description") || [];
  const mediaObj = this.castToObject<any>("media") || {};
  const video = mediaObj.video;
  const thumbnail = mediaObj.thumbnail;
  const videoIcon = mediaObj.videoIcon;
    const buttons = this.castToObject<Array<any>>("buttons") || [];
    const isPlaying = this.getComponentState("isPlaying");

  const isVideo = video && (video.type === "video" || video.type === "lottie");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            <div className={this.decorateCSS("content")}>
              {subtitle && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {subtitle}
                </Base.SectionSubTitle>
              )}

              {title && (
                <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>
              )}

              {descriptions.length > 0 && (
                <div className={this.decorateCSS("descriptions")}>
                  {descriptions.map((d: any, i: number) => (
                    <div key={i} className={this.decorateCSS("description-item")}>
                      <div className={this.decorateCSS("item-icon")}>
                        {d.icon && <Base.Media value={d.icon} className={this.decorateCSS("item-icon-media")} />}
                      </div>
                      <div className={this.decorateCSS("item-text")}>
                        {d.title && <Base.P className={this.decorateCSS("item-title")}>{this.castToString(d.title)}</Base.P>}
                        {d.text && <Base.SectionDescription className={this.decorateCSS("item-desc")}>{this.castToString(d.text)}</Base.SectionDescription>}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {buttons.length > 0 && (
                <div className={this.decorateCSS("buttons")}>
                  {buttons.map((btn: any, idx: number) => {
                    const btnText = this.castToString(btn.text) || "";
                    const url = btn.url || "#";
                    return (
                      <div key={idx} className={this.decorateCSS("button-item")}>
                        <ComposerLink path={url}>
                          <Base.Button buttonType={btn.type} className={this.decorateCSS("button") }>
                            {btnText && <Base.P className={this.decorateCSS("button-text")}>{btnText}</Base.P>}
                            {btn.icon && (
                              <Base.Media value={{ type: "icon", name: btn.icon }} className={this.decorateCSS("btn-icon")} />
                            )}
                          </Base.Button>
                        </ComposerLink>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div className={this.decorateCSS("visual")}>
              {!isPlaying && isVideo && (
                <div className={this.decorateCSS("media-thumb")} onClick={(e) => this.togglePlay(e)}>
                  {thumbnail && <Base.Media value={thumbnail} className={this.decorateCSS("thumb-image")} />}
                  <div className={this.decorateCSS("play-icon")}>
                    {videoIcon && <Base.Media value={videoIcon} />}
                  </div>
                </div>
              )}

              {(isPlaying && isVideo) && (
                <div className={this.decorateCSS("media-player")}>
                  <div className={this.decorateCSS("image-wrapper")}>
                    <Base.Media value={video} className={this.decorateCSS("player")} />
                  </div>
                </div>
              )}

              {!isVideo && thumbnail && (
                <div className={this.decorateCSS("image-wrapper")}>
                  <Base.Media value={thumbnail} className={this.decorateCSS("visual-image")} />
                </div>
              )}
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default IntroSection1;
