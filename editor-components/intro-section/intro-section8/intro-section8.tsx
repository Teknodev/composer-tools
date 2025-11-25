import * as React from "react";
import { BaseIntroSection, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./intro-section8.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

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
      displayer: "Image",
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
      displayer: "Video Thumbnail",
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
      value: false,
    });

    const playBtn = INPUTS.BUTTON(
      "playButton",
      "Button",
      "",
      "",
      "FaPlay",
      null,
      "Primary"
    );

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      max: 1,
      value: [playBtn],
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
    
    const subtitleExist = this.castToString(subtitle);
    const titleExist = this.castToString(title);
    const descriptionExist = this.castToString(description);

    const media = this.getPropValue("media") as TypeMediaInputValue;
    const mediaUrl = (media as any)?.url;
    const hasMedia = !!mediaUrl;
    const isVideo = media?.type === "video";

    const thumbnail = this.getPropValue("thumbnail") as TypeMediaInputValue;
    const hasThumbnail = !!(thumbnail as any)?.url;

    const buttons = this.castToObject<any[]>("buttons");
    const playButton = buttons && buttons.length > 0 ? buttons[0] : null;
    const hasPlayButton = !!playButton;

    const isPlaying = this.getComponentState("isPlaying");

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${hasMedia ? this.decorateCSS("has-media") : ""}`}>
        <div className={this.decorateCSS("background-shape")}></div>
        
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

            {hasMedia && (
              <div className={this.decorateCSS("media-wrapper")}>
                {isVideo ? (
                  !isPlaying ? (
                    <div 
                      className={this.decorateCSS("thumbnail-container")} 
                      onClick={this.handlePlayVideo}
                    >
                      {hasThumbnail && (
                        <Base.Media value={thumbnail} className={this.decorateCSS("thumbnail-image")} />
                      )}
                      {overlay && <div className={this.decorateCSS("overlay")} />}
                      
                      {hasPlayButton && (
                         <button 
                           type="button" 
                           className={this.decorateCSS("button")}
                         >
                           {playButton.icon && (
                               <Base.Media value={playButton.icon} className={this.decorateCSS("icon")} />
                           )}
                         </button>
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
                      {...{ onEnded: this.handleVideoPause } as any}
                    />
                  )
                ) : (
                  <div className={this.decorateCSS("thumbnail-container")}>
                    <Base.Media value={media} className={this.decorateCSS("image")} />
                    {overlay && <div className={this.decorateCSS("overlay")} />}
                    
                    {hasPlayButton && (
                        <button 
                          type="button" 
                          className={this.decorateCSS("button")}
                        >
                          {playButton.icon && (
                              <Base.Media value={playButton.icon} className={this.decorateCSS("icon")} />
                          )}
                        </button>
                    )}
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