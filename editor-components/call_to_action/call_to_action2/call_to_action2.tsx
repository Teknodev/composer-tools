import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BaseCallToAction, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./call_to_action2.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type MediaObject = {
  image: TypeMediaInputValue;
  overlay: boolean;
  playIcon: TypeMediaInputValue;
  video: TypeMediaInputValue;
};

class CallToAction2Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      value: "GET STARTED",
      displayer: "Subtitle",
    });

    this.addProp({
      type: "string",
      key: "title",
      value: "Journey to Inner Peace: Yoga Sanctuary",
      displayer: "Title",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "Start Your Free Trial", "", null, null, "Primary")],
    });

    this.addProp({
      type: "object",
      key: "mediaObject",
      displayer: "Media",
      value: [
        {
          type: "media",
          key: "image",
          displayer: "Media",
          additionalParams: {
            availableTypes: ["image", "video"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b9f51c3292c6002b23c4f6?alt=media",
          },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: true,
        },
        {
          type: "media",
          key: "playIcon",
          displayer: "Play Button Icon",
          additionalParams: {
            availableTypes: ["icon", "image"],
          },
          value: {
            type: "icon",
            name: "FaPlay",
          },
        },
        {
          type: "media",
          displayer: "Video",
          key: "video",
          additionalParams: {
            availableTypes: ["video"],
          },
          value: {
            type: "video",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b9f4473292c6002b23c4b0?alt=media",
          },
        },
      ],
    });
    this.setComponentState("isVideoVisible", false);
  }

  static getName(): string {
    return "Call To Action 2";
  }

  showVideo = () => {
    this.setComponentState("isVideoVisible", true);
  };

  hideVideo = () => {
    this.setComponentState("isVideoVisible", false);
  };

  render() {
    const alignment = Base.getContentAlignment();
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const mediaObject = this.castToObject<MediaObject>("mediaObject");

    const image = mediaObject.image;
    const overlay = mediaObject.overlay;
    const playIcon = mediaObject.playIcon;
    const video = mediaObject.video;

    const isPlaying = !!this.getComponentState("isVideoVisible");
    const isVideo = video && video.type === "video";

    const titleExist = this.castToString(this.getPropValue("title"));
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const description = this.getPropValue("description");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <div className={`${this.decorateCSS("background")} ${!image && this.decorateCSS("no-image")}`}> </div>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            {(titleExist || subtitleExist || descriptionExist || (buttons.length > 0)) && (
              <div
                className={`${this.decorateCSS("header")} ${alignment === "center" && this.decorateCSS("center")}`}
              >
                {(titleExist || subtitleExist || descriptionExist) && (
                  <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
                    {subtitleExist && (
                      <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                        {this.getPropValue("subtitle")}
                      </Base.SectionSubTitle>
                    )}
                    {titleExist && (
                      <Base.SectionTitle className={this.decorateCSS("title")}>
                        {this.getPropValue("title")}
                      </Base.SectionTitle>
                    )}
                    {descriptionExist && (
                      <Base.SectionDescription className={this.decorateCSS("description")}>
                        {description}
                      </Base.SectionDescription>
                    )}
                  </Base.VerticalContent>
                )}
                {buttons?.length > 0 && (
                  <div className={this.decorateCSS("button-container")}>
                    {buttons.map((button: INPUTS.CastedButton, index: number) => {

                      return this.castToString(button.text) && (
                        <ComposerLink path={button.url}>
                          <Base.Button className={this.decorateCSS("button")} buttonType={button.type}>
                            <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                          </Base.Button>
                        </ComposerLink>
                      )
                    })}
                  </div>
                )}
              </div>
            )}
            {image && (
              <div className={this.decorateCSS("media-wrapper")}>
                {isVideo && isPlaying ? (
                  <Base.Media
                    value={{ ...video, settings: { autoplay: true, controls: true } }}
                    className={this.decorateCSS("video-player")}
                  />
                ) : (
                  <div
                    className={this.decorateCSS("thumbnail-container")}
                    onClick={isVideo ? this.showVideo : undefined}
                  >
                    <Base.Media
                      value={image}
                      className={this.decorateCSS("image")}
                    />
                    {overlay && <div className={this.decorateCSS("image-overlay")} />}
                    {isVideo && playIcon && (
                      <div className={this.decorateCSS("play-icon-box")}>
                        <Base.Media
                          value={playIcon}
                          className={this.decorateCSS("play-icon")}
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container >
    );
  }
}

export default CallToAction2Page;
