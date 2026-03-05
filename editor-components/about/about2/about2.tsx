import * as React from "react";
import styles from "./about2.module.scss";
import { BaseAbout, TypeMediaInputValue } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type CoverMedia = {
  media: TypeMediaInputValue;
  overlay: boolean;
};

type VideoMedia = {
  media: TypeMediaInputValue;
  icon: TypeMediaInputValue;
};

class About2 extends BaseAbout {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "",
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
      value: [
        INPUTS.BUTTON("button", "Button", "Play me here", "", null, null, "Link"),
      ],
    });

    this.addProp({
      type: "object",
      key: "front-media",
      displayer: "Cover Media",
      value: [
        {
          type: "media",
          key: "media",
          displayer: "Media",
          additionalParams: {
            availableTypes: ["image", "video"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661ba4ebd2970002c628732?alt=media&timestamp=1719563672206",
          },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: true,
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "back-media",
      displayer: "Video Media",
      value: [
        {
          type: "media",
          key: "media",
          displayer: "Media",
          additionalParams: {
            availableTypes: ["video"],
          },
          value: {
            type: "video",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667e77bd0181a1002c334f66?alt=media&timestamp=1719564238038",
          },
        },
        {
          type: "media",
          key: "icon",
          displayer: "Media",
          additionalParams: {
            availableTypes: ["image", "icon"],
          },
          value: {
            type: "icon",
            name: "RxCross2",
          },
        },
      ],
    });

    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2"]
      }
    });

    this.setComponentState("is_video_visible", false);
  }

  static getName(): string {
    return "About 2";
  }

  render() {
    const videoProps = this.castToObject<VideoMedia>("back-media");
    const rawVideo = videoProps?.media;
    const closeIcon = videoProps?.icon;

    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const hasValidButtons = buttons.some((btn) => this.castToString(btn.text));

    const coverProps = this.castToObject<CoverMedia>("front-media");

    const cover = coverProps?.media;
    const coverOverlay = coverProps?.overlay;

    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));

    const hasMedia = !!cover;
    const hasContent = subtitle || title || description || hasValidButtons;

    return (
      <Base.Container
        className={`${this.decorateCSS("container")} ${this.getComponentState("is_video_visible") && this.decorateCSS("with-overlay")}`}
        data-animation={(this.getPropValue("hoverAnimation") || []).join(" ")}
      >

        {hasMedia && (
          <div className={this.decorateCSS("media-container")}>
            <Base.Media value={cover} className={this.decorateCSS("media")} />
            {coverOverlay && <div className={this.decorateCSS("overlay")} />}
          </div>
        )}

        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {hasContent && (
            <Base.VerticalContent
              className={`${this.decorateCSS("content")} ${hasMedia ? this.decorateCSS("with-media") : ""}`}
            >
              {subtitle && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {this.getPropValue("subtitle")}
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
              {hasValidButtons && (
                <div className={this.decorateCSS("button-container")}>
                  {buttons.map((item: INPUTS.CastedButton, index: number) => {
                    const buttonText = this.castToString(item.text);
                    if (!buttonText) return null;

                    if (this.castToString(item.url)) {
                      return (
                        <ComposerLink key={index} path={item.url}>
                          <Base.Button
                            buttonType={item.type}
                            className={`${this.decorateCSS("button")} ${hasMedia ? this.decorateCSS("with-image") : ""}`}
                          >
                            <Base.P className={this.decorateCSS("button-text")}>{buttonText}</Base.P>
                          </Base.Button>
                        </ComposerLink>
                      );
                    }

                    return (
                      <Base.Button
                        key={index}
                        onClick={() => {
                          this.setComponentState("is_video_visible", true);
                        }}
                        buttonType={item.type}
                        className={`${this.decorateCSS("button")} ${hasMedia ? this.decorateCSS("with-image") : ""}`}
                      >
                        <Base.P className={this.decorateCSS("button-text")}>{buttonText}</Base.P>
                      </Base.Button>
                    );
                  })}
                </div>
              )}
            </Base.VerticalContent>
          )}
          {this.getComponentState("is_video_visible") && rawVideo && (

            <Base.Overlay
              onClick={() => this.setComponentState("is_video_visible", false)}
              className={this.decorateCSS("video-overlay")}
              isVisible={true}
            >
              <div className={this.decorateCSS("video-container")}>
                <div className={this.decorateCSS("video-wrapper")} onClick={(event: React.MouseEvent) => event.stopPropagation()}>
                  <Base.Media
                    value={rawVideo}
                    className={this.decorateCSS("player")}
                    autoPlay={true}
                    loop={true}
                    controls={true}
                  // playsInline
                  />
                  {closeIcon && (
                    <div
                      className={this.decorateCSS("close-icon-box")}
                      onClick={(e) => {
                        e.stopPropagation();
                        this.setComponentState("is_video_visible", false);
                      }}
                    >
                      <Base.Media
                        value={closeIcon}
                        className={this.decorateCSS("close-icon")}
                      />
                    </div>
                  )}
                </div>
              </div>
            </Base.Overlay>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default About2;
