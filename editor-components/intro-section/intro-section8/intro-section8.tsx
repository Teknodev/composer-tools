import * as React from "react";
import { BaseIntroSection, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./intro-section8.module.scss";
import { Base } from "../../../composer-base-components/base/base";

class IntroSection8 extends BaseIntroSection {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "FIND THE BEST SUITABLE SOLUTION",
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
      value: "",
    });

    this.addProp({
      type: "media",
      key: "media",
      displayer: "Media",
      value: {
        type: "video",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6925587a3596a1002b2ec2a1?alt=media",
      } as TypeMediaInputValue,
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
        url: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      } as TypeMediaInputValue,
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
      key: "showBackgroundShape",
      displayer: "Colorful Background",
      value: true,
    });

    this.addProp({
      type: "media",
      key: "playIcon",
      displayer: "Play Icon",
      value: {
        type: "icon",
        name: "FaPlay"
      } as any,
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
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
    return !!(this.castToString(this.getPropValue("subtitle")) || 
             this.castToString(this.getPropValue("title")) || 
             this.castToString(this.getPropValue("description")));
  }

  private renderTextContent() {
    if (!this.hasTextContent()) return null;

    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");

    return (
      <div className={this.decorateCSS("text-content")}>
        {this.castToString(subtitle) && (
          <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
            {subtitle}
          </Base.SectionSubTitle>
        )}
        {this.castToString(title) && (
          <Base.SectionTitle className={this.decorateCSS("title")}>
            {title}
          </Base.SectionTitle>
        )}
        {this.castToString(description) && (
          <Base.SectionDescription className={this.decorateCSS("description")}>
            {description}
          </Base.SectionDescription>
        )}
      </div>
    );
  }

  private renderThumbnailContent(thumbnail: TypeMediaInputValue, overlay: boolean, playIcon: any, hasPlayIcon: boolean) {
    return (
      <div className={this.decorateCSS("thumbnail-container")} onClick={this.handlePlayVideo}>
        {!!(thumbnail as any)?.url && (
          <Base.Media value={thumbnail} className={this.decorateCSS("thumbnail-image")} />
        )}
        {overlay && <div className={this.decorateCSS("overlay")} />}
        {hasPlayIcon && (
          <div className={this.decorateCSS("play-icon-wrapper")}>
            <Base.Media value={playIcon} className={this.decorateCSS("icon")} />
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
          settings: { autoplay: true, controls: true }
        }}
        className={this.decorateCSS("video")}
        {...({ onEnded: this.handleVideoPause } as any)}
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
    const media = this.getPropValue("media") as TypeMediaInputValue;
    const mediaUrl = (media as any)?.url;
    const overlay = this.getPropValue("overlay");
    const thumbnail = this.getPropValue("thumbnail") as TypeMediaInputValue;
    const playIcon = this.getPropValue("playIcon") as any;
    const hasPlayIcon = !!(playIcon?.name || playIcon?.url);
    const isPlaying = this.getComponentState("isPlaying");
    const isVideo = media?.type === "video";

    if (!mediaUrl) return null;

    return (
      <div className={this.decorateCSS("media-wrapper")}>
        {isVideo ? (
          !isPlaying ? 
            this.renderThumbnailContent(thumbnail, overlay, playIcon, hasPlayIcon) :
            this.renderVideoContent(mediaUrl)
        ) : (
          this.renderImageContent(media, overlay)
        )}
      </div>
    );
  }

  render() {
    const showBackgroundShape = this.getPropValue("showBackgroundShape");
    const containerClass = showBackgroundShape ? 
      `${this.decorateCSS("container")} ${this.decorateCSS("has-background")}` :
      this.decorateCSS("container");

    return (
      <Base.Container className={containerClass}>
        {showBackgroundShape && (
          <div className={this.decorateCSS("background-shape")} />
        )}
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
            {this.renderTextContent()}
            {this.renderMediaContent()}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default IntroSection8;
