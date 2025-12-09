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
      additionalParams: {
        availableTypes: ["image", "video"],
      },
    });

    this.addProp({
      type: "media",
      key: "thumbnail",
      displayer: "Thumbnail",
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6936735a496aa1002ca98cfa?alt=media",
      },
      additionalParams: {
        availableTypes: ["image"],
      },
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
      value: {
        type: "icon",
        name: "FaPlay",
      },
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
      ],
    });
  }

  static getName(): string {
    return "Intro Section 8";
  }

  handlePlayVideo = () => {
    this.setComponentState("isPlaying", true);
  };

  handleVideoPause = () => {
    this.setComponentState("isPlaying", false);
  };

  private hasTextContent(): boolean {
    return !!(
      this.castToString(this.getPropValue("subtitle")) ||
      this.castToString(this.getPropValue("title")) ||
      this.castToString(this.getPropValue("description"))
    );
  }

  private renderTextContent() {
    if (!this.hasTextContent()) return null;

    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const background = this.getPropValue("background");

    return (
      <div className={this.decorateCSS("text-content")}>
        {this.castToString(subtitle) && (
          <Base.SectionSubTitle
            className={`${this.decorateCSS("subtitle")} ${
              background ? this.decorateCSS("with-background") : "badge"
            }`}
          >
            {subtitle}
          </Base.SectionSubTitle>
        )}
        {this.castToString(title) && (
          <Base.SectionTitle
            className={`${this.decorateCSS("title")} ${
              background && this.decorateCSS("with-background")
            }`}
          >
            {title}
          </Base.SectionTitle>
        )}
        {this.castToString(description) && (
          <Base.SectionDescription
            className={`${this.decorateCSS("description")} ${
              background && this.decorateCSS("with-background")
            }`}
          >
            {description}
          </Base.SectionDescription>
        )}
      </div>
    );
  }

  private renderMediaButtons() {
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const validButtons = Array.isArray(buttons)
      ? buttons.filter((buttonItem) => this.castToString(buttonItem.text))
      : [];

    if (validButtons.length === 0) {
      return null;
    }

    return (
      <div className={this.decorateCSS("media-buttons")}>
        {validButtons.map((buttonItem, index) => {
          const text = buttonItem.text;
          const url = buttonItem.url;
          const type = buttonItem.type;
          const icon = buttonItem.icon;

          return (
            <ComposerLink key={index} path={url}>
              <Base.Button
                buttonType={type}
                className={this.decorateCSS("media-button")}
              >
                {icon && (
                  <Base.Icon
                    name={icon}
                    propsIcon={{
                      className: this.decorateCSS("media-button-icon"),
                    }}
                  />
                )}
                <Base.P className={this.decorateCSS("media-button-text")}>
                  {text}
                </Base.P>
              </Base.Button>
            </ComposerLink>
          );
        })}
      </div>
    );
  }

  private renderThumbnailContent(
    thumbnail: TypeMediaInputValue,
    overlay: boolean,
    playIcon: TypeMediaInputValue | null,
    hasPlayIcon: boolean
  ) {
    const thumbnailUrl = thumbnail.type === "image" ? thumbnail.url : "";

    return (
      <div
        className={this.decorateCSS("thumbnail-container")}
        onClick={this.handlePlayVideo}
      >
        {thumbnailUrl && (
          <Base.Media
            value={thumbnail}
            className={this.decorateCSS("thumbnail-image")}
          />
        )}
        {overlay && <div className={this.decorateCSS("overlay")} />}
        {hasPlayIcon && playIcon && (
          <div className={this.decorateCSS("play-icon-wrapper")}>
            <Base.Media
              value={playIcon}
              className={this.decorateCSS("icon")}
            />
          </div>
        )}
      </div>
    );
  }

  private renderVideoContent(mediaUrl: string) {
    return (
      <Base.Media
        value={{
          type: "video",
          url: mediaUrl,
          settings: { autoplay: true, controls: true },
        }}
        className={this.decorateCSS("video")}
      />
    );
  }

  private renderImageContent(media: TypeMediaInputValue, overlay: boolean) {
    return (
      <div className={this.decorateCSS("thumbnail-container")}>
        <Base.Media value={media} className={this.decorateCSS("image")} />
        {overlay && <div className={this.decorateCSS("overlay")} />}
      </div>
    );
  }

  private renderMediaContent() {
    const media = this.getPropValue("media") as TypeMediaInputValue | null;
    const overlay = this.getPropValue("overlay");
    const thumbnail = this.getPropValue("thumbnail") as TypeMediaInputValue;
    const playIcon = this.getPropValue("playIcon") as TypeMediaInputValue;

    const mediaUrl =
      media && media.type === "video"
        ? media.url
        : media && media.type === "image"
        ? media.url
        : "";

    const hasPlayIcon = !!(
      playIcon &&
      ((playIcon.type === "icon" && playIcon.name) ||
        (playIcon.type === "image" && playIcon.url))
    );

    const isPlaying = this.getComponentState("isPlaying");
    const isVideo = media?.type === "video";

    if (!mediaUrl) return null;

    return (
      <div className={this.decorateCSS("media-wrapper")}>
        {isVideo ? (
          !isPlaying ? (
            this.renderThumbnailContent(
              thumbnail,
              overlay,
              playIcon,
              hasPlayIcon
            )
          ) : (
            this.renderVideoContent(mediaUrl)
          )
        ) : (
          this.renderImageContent(media, overlay)
        )}
      </div>
    );
  }

  render() {
    const background = this.getPropValue("background");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        {background && <div className={this.decorateCSS("background")} />}
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("content")}>
            {this.renderTextContent()}
            {this.renderMediaButtons()}
            {this.renderMediaContent()}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default IntroSection8;
