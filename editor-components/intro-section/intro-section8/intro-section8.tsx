import * as React from "react";
import {
  BaseIntroSection,
  TypeMediaInputValue,
  TypeUsableComponentProps,
} from "../../EditorComponent";
import styles from "./intro-section8.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class IntroSection8 extends BaseIntroSection {
  constructor(props?: TypeUsableComponentProps) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Find the Best Suitable Solution",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Inspiration to Design and Create",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Completely iterate covalent strategic theme areas via accurate e-markets.",
    });

    this.addProp({
      type: "media",
      key: "media",
      displayer: "Media",
      value: {
        type: "video",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6925587a3596a1002b2ec2a1?alt=media",
      },
      additionalParams: { availableTypes: ["image", "video"] },
    });

    this.addProp({
      type: "media",
      key: "thumbnail",
      displayer: "Thumbnail",
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6936735a496aa1002ca98cfa?alt=media",
      },
      additionalParams: { availableTypes: ["image"] },
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });

    this.addProp({
      type: "boolean",
      key: "background",
      displayer: "Background",
      value: true,
    });

    this.addProp({
      type: "media",
      key: "playIcon",
      displayer: "Play Icon",
      value: { type: "icon", name: "FaPlay" },
      additionalParams: { availableTypes: ["icon", "image"] },
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
    });
  }

  static getName(): string {
    return "Intro Section 8";
  }

  handlePlayVideo = () => {
    this.setComponentState("isPlaying", true);
  };

  private hasMediaValue(value: TypeMediaInputValue | null | undefined): boolean {
    if (!value) return false;
    if (value.type === "icon") return !!value.name;
    return !!value.url;
  }

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");

    const subtitleText = this.castToString(subtitle);
    const titleText = this.castToString(title);
    const descriptionText = this.castToString(description);

    const hasBackground = !!this.getPropValue("background");
    const overlay = !!this.getPropValue("overlay");

    const media = this.getPropValue("media") as TypeMediaInputValue | null;
    const thumbnail = this.getPropValue("thumbnail") as TypeMediaInputValue | null;
    const playIcon = this.getPropValue("playIcon") as TypeMediaInputValue | null;

    const mediaUrl =
      media && (media.type === "video" || media.type === "image") ? media.url : "";

    const isVideo = media?.type === "video";
    const isPlaying = !!this.getComponentState("isPlaying");

    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
    const hasButtons =
      Array.isArray(buttons) &&
      buttons.some((b) => !!this.castToString(b?.text || ""));

    const alignmentValue = Base.getContentAlignment();
    const subtitleCenterClass =
      alignmentValue === "left" ? this.decorateCSS("subtitle-center") : "";

    return (
      <Base.Container className={this.decorateCSS("container")}>
        {hasBackground && <div className={this.decorateCSS("background")} />}

        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("content")}>
            {(subtitleText || titleText || descriptionText) && (
              <div className={this.decorateCSS("text-content")}>
                {subtitleText && (
                  <Base.SectionSubTitle
                    className={`${this.decorateCSS("subtitle")} ${subtitleCenterClass} ${
                      hasBackground ? this.decorateCSS("has-background") : ""
                    }`}
                  >
                    {subtitle}
                  </Base.SectionSubTitle>
                )}

                {titleText && (
                  <Base.SectionTitle
                    className={`${this.decorateCSS("title")} ${
                      hasBackground ? this.decorateCSS("with-background") : ""
                    }`}
                  >
                    {title}
                  </Base.SectionTitle>
                )}

                {descriptionText && (
                  <Base.SectionDescription
                    className={`${this.decorateCSS("description")} ${
                      hasBackground ? this.decorateCSS("with-background") : ""
                    }`}
                  >
                    {description}
                  </Base.SectionDescription>
                )}
              </div>
            )}

            {hasButtons && (
              <div className={this.decorateCSS("media-buttons")}>
                {buttons.map((buttonItem, index) => {
                  if (!this.castToString(buttonItem?.text || "")) return null;

                  const iconValue = (buttonItem as any)?.icon as TypeMediaInputValue | null;

                  return (
                    <ComposerLink
                      key={index}
                      path={buttonItem?.url}
                      className={this.decorateCSS("media-button-link")}
                    >
                      <Base.Button
                        buttonType={buttonItem?.type}
                        className={this.decorateCSS("media-button")}
                      >
                        {this.hasMediaValue(iconValue) && (
                          <Base.Media
                            value={iconValue as TypeMediaInputValue}
                            className={this.decorateCSS("media-button-icon")}
                          />
                        )}

                        <Base.P className={this.decorateCSS("media-button-text")}>
                          {buttonItem.text}
                        </Base.P>
                      </Base.Button>
                    </ComposerLink>
                  );
                })}
              </div>
            )}

            {mediaUrl && (
              <div className={this.decorateCSS("media-wrapper")}>
                {isVideo ? (
                  !isPlaying ? (
                    <div
                      className={this.decorateCSS("thumbnail-container")}
                      onClick={this.handlePlayVideo}
                    >
                      {this.hasMediaValue(thumbnail) && (
                        <Base.Media
                          value={thumbnail as TypeMediaInputValue}
                          className={this.decorateCSS("thumbnail-image")}
                        />
                      )}

                      {overlay && <div className={this.decorateCSS("overlay")} />}

                      {this.hasMediaValue(playIcon) && (
                        <div className={this.decorateCSS("play-icon-wrapper")}>
                          <Base.Media
                            value={playIcon as TypeMediaInputValue}
                            className={this.decorateCSS("icon")}
                          />
                        </div>
                      )}
                    </div>
                  ) : (
                    <Base.Media
                      value={{
                        type: "video",
                        url: mediaUrl,
                        settings: { autoplay: true, controls: true },
                      }}
                      className={this.decorateCSS("video")}
                    />
                  )
                ) : (
                  <div className={this.decorateCSS("thumbnail-container")}>
                    <Base.Media
                      value={media as TypeMediaInputValue}
                      className={this.decorateCSS("image")}
                    />
                    {overlay && <div className={this.decorateCSS("overlay")} />}
                  </div>
                )}
              </div>
            )}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default IntroSection8;
