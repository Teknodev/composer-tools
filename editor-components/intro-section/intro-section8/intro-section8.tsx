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

    this.addProp({
        type: "icon",
        key: "closeIcon",
        displayer: "Close Icon",
        value: "RxCross2",
    });

    this.setComponentState("is_video_visible", false);
  }

  static getName(): string {
    return "Intro Section 8";
  }

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
    const isVideo = media?.type === "video";

    const thumbnail = this.getPropValue("thumbnail") as TypeMediaInputValue;
    const hasThumbnail = !!(thumbnail as any)?.url;

    const playIcon = this.getPropValue("playIcon");
    const hasPlayIcon = !!playIcon;
    const closeIcon = this.getPropValue("closeIcon");

    const containerClasses = [
      this.decorateCSS("container"),
      media ? this.decorateCSS("has-media") : "",
      showBackgroundShape ? this.decorateCSS("has-background") : ""
    ].filter(Boolean).join(" ");

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
                  <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                    {subtitle}
                  </Base.SectionSubTitle>
                )}
                {titleExist && (
                  <Base.SectionTitle className={this.decorateCSS("title")}>
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

            {media && (
              <div className={this.decorateCSS("media-wrapper")}>
                  <div 
                    className={this.decorateCSS("thumbnail-container")} 
                    onClick={() => {
                        if (isVideo) {
                            this.setComponentState("is_video_visible", true);
                        }
                    }}
                  >
                    {hasThumbnail ? (
                      <Base.Media value={thumbnail} className={this.decorateCSS("thumbnail-image")} />
                    ) : (
                      <Base.Media value={media} className={this.decorateCSS("thumbnail-image")} />
                    )}
                    
                    {overlay && <div className={this.decorateCSS("overlay")} />}
                    
                    {isVideo && hasPlayIcon && (
                        <div className={this.decorateCSS("play-icon-wrapper")}>
                           <Base.Icon 
                              name={playIcon} 
                              propsIcon={{ className: this.decorateCSS("icon") }} 
                           />
                        </div>
                    )}
                  </div>
              </div>
            )}

            {this.getComponentState("is_video_visible") && isVideo && (
                <Base.Overlay
                    onClick={() => this.setComponentState("is_video_visible", false)}
                    className={this.decorateCSS("video-overlay")}
                    isVisible={true}
                >
                    <div className={this.decorateCSS("video-popup-container")}>
                        <div className={this.decorateCSS("video-player-box")} onClick={(e) => e.stopPropagation()}>
                            <Base.Media
                                value={{
                                    ...media,
                                    settings: { autoplay: true, controls: true }
                                }}
                                className={this.decorateCSS("video-player")}
                            />
                        </div>
                        {closeIcon && (
                            <div 
                                className={this.decorateCSS("close-icon-box")}
                                onClick={() => this.setComponentState("is_video_visible", false)}
                            >
                                <Base.Icon name={closeIcon} propsIcon={{ className: this.decorateCSS("close-icon") }} />
                            </div>
                        )}
                    </div>
                </Base.Overlay>
            )}

          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default IntroSection8;