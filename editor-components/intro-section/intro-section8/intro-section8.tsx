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
      value: "FIND THE BEST SUITABLE SOLTION",
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
      displayer: "Video",
      value: {
        type: "video",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6925587a3596a1002b2ec2a1?alt=media",
      } as TypeMediaInputValue,
      additionalParams: {
        availableTypes: ["video", "image"],
      },
    });

    this.addProp({
      type: "media",
      key: "thumbnail",
      displayer: "Image",
      value: {
        type: "image",
        url: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      } as TypeMediaInputValue,
      additionalParams: {
        availableTypes: ["image", "video"],
      },
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: false,
    });

    this.addProp({
      type: "boolean",
      key: "showBackgroundShape",
      displayer: "Show Background",
      value: true,
    });

    this.addProp({
      type: "icon",
      key: "playIcon",
      displayer: "Play Icon",
      value: "FaPlay",
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

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const overlay = this.getPropValue("overlay");
    const showBackgroundShape = this.getPropValue("showBackgroundShape");

    const subtitleExist = this.castToString(subtitle);
    const titleExist = this.castToString(title);
    const descriptionExist = this.castToString(description);

    const media = this.getPropValue("media") as TypeMediaInputValue;
    const mediaUrl = (media as any)?.url;
    const hasMedia = !!mediaUrl;
    const isVideo = media?.type === "video";

    const thumbnail = this.getPropValue("thumbnail") as TypeMediaInputValue;
    const hasThumbnail = !!(thumbnail as any)?.url;

    const playIcon = this.getPropValue("playIcon");
    const hasPlayIcon = !!playIcon;

    const isPlaying = this.getComponentState("isPlaying");

    const subtitleType = Base.getSectionSubTitleType();
    const hasBackground = !!showBackgroundShape;

    const containerClasses = [
      this.decorateCSS("container"),
      hasMedia ? this.decorateCSS("has-media") : "",
      hasBackground ? this.decorateCSS("has-background") : ""
    ].filter(Boolean).join(" ");

    const subtitleClassName = [
      this.decorateCSS("subtitle"),
      hasBackground
        ? this.decorateCSS("subtitle-plain")
        : subtitleType === "badge"
        ? this.decorateCSS("subtitle-badge")
        : this.decorateCSS("subtitle-default")
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <Base.Container className={containerClasses}>
        {showBackgroundShape && (
          <div className={this.decorateCSS("background-shape")}></div>
        )}

        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
            {(subtitleExist || titleExist || descriptionExist) && (
              <div className={this.decorateCSS("text-wrapper")}>
                {subtitleExist && (
                  <Base.SectionSubTitle className={subtitleClassName}>
                    {subtitle}
                  </Base.SectionSubTitle>
                )}
                {titleExist && (
                  <Base.SectionTitle
                    className={this.decorateCSS("title")}
                    style={{
                      fontSize: "clamp(2.5rem, 3vw, 3.2rem)",
                      lineHeight: 1.1,
                      letterSpacing: "0.02em"
                    }}
                  >
                    {title}
                  </Base.SectionTitle>
                )}
                {descriptionExist && (
                  <Base.SectionDescription className={this.decorateCSS("description")}>
                    {description}
                  </Base.SectionDescription>
                )}
              </div>
            )}

            {hasMedia && (
              <div className={this.decorateCSS("media-wrapper")}>
                {isVideo ? (
                  !isPlaying ? (
                    <div
                      className={this.decorateCSS("thumbnail-container")}
                      onClick={this.handlePlayVideo}
                    >
                      {hasThumbnail && (
                        <Base.Media
                          value={thumbnail}
                          className={this.decorateCSS("thumbnail-image")}
                        />
                      )}
                      {overlay && <div className={this.decorateCSS("overlay")} />}
                      {hasPlayIcon && (
                        <div className={this.decorateCSS("play-icon-wrapper")}>
                          <Base.Icon
                            name={playIcon}
                            propsIcon={{ className: this.decorateCSS("icon") }}
                          />
                        </div>
                      )}
                    </div>
                  ) : (
                    <Base.Media
                      value={{
                        type: "video",
                        url: mediaUrl,
                        settings: {
                          autoplay: true,
                          controls: true
                        }
                      }}
                      className={this.decorateCSS("video")}
                      {...({ onEnded: this.handleVideoPause } as any)}
                    />
                  )
                ) : (
                  <div className={this.decorateCSS("thumbnail-container")}>
                    <Base.Media value={media} className={this.decorateCSS("image")} />
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
