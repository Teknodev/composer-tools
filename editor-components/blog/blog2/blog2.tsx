import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseBlog } from "../../EditorComponent";
import styles from "./blog2.module.scss";

import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class Blog2 extends BaseBlog {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Latest News",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "We Think About Reflections On The Wisdom From The Planets",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Donec orci enim, vulputate et rutrum id, varius at nibh. Sed sagittis feugiat augue maximus hendrerit. Phasellus volutpat dictum sem, sed dignissim diam sodales eu. Suspendisse ut lorem posuere, tincidunt leo a, ultricies odio. Nulla porta sagittis turpis vel tristique. Curabitur ac maximus est. Proin placerat mauris eu eros varius imperdiet id at ligula.",
    });

    this.addProp({
      type: "object",
      key: "video-section",
      displayer: "Video Section",
      value: [
        {
          type: "media",
          key: "video",
          displayer: "Video Link",
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
          key: "videoImage",
          displayer: "Video Image",
          additionalParams: {
            availableTypes: ["image","video"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a3a08f2f8a5b002ce6b795?alt=media",
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
          key: "closeIcon",
          displayer: "Close Button Icon",
          additionalParams: {
            availableTypes: ["icon"],
          },
          value: {
            type: "icon",
            name: "RxCross2",
          },
        },
        {
          type: "media",
          key: "playIcon",
          displayer: "Play Icon",
          additionalParams: {
            availableTypes: ["icon"],
          },
          value: {
            type: "icon",
            name: "AiOutlinePlayCircle",
          },
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "line",
      displayer: "Left Line",
      value: true,
    });

    this.addProp({
      type: "media",
      key: "author-icon",
      displayer: "Author Icon",
      additionalParams: {
        availableTypes: ["icon"],
      },
      value: {
        type: "icon",
        name: "BiLogoWhatsapp",
      },
    });
    this.addProp({
      type: "string",
      key: "author-name",
      displayer: "Author Name",
      value: "Tarot & Horoscope",
    });
    this.addProp({
      type: "string",
      key: "author-description",
      displayer: "Author Description",
      value: "15 years of Experience with",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      additionalParams: {
        maxElementCount: 2,
      },
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Next", "", null, null, "Primary"),
        INPUTS.BUTTON("button", "Button", "Back", "", null, null, "Primary")
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
    return "Blog 2";
  }

  render() {
    const videoSection = this.castToObject<any>("video-section");
    const authorIcon = this.getPropValue("author-icon");
    const subtitle = this.getPropValue("subtitle");
    const description = this.getPropValue("description");
    const line = this.getPropValue("line");
    const authorName = this.getPropValue("author-name");
    const authorDescription = this.getPropValue("author-description");
    const titleText = this.getPropValue("title");

    const buttonItem = this.castToObject<INPUTS.CastedButton[]>("buttons");

    const displayContent =
      this.castToString(titleText) ||
      this.castToString(subtitle) ||
      this.castToString(description) ||
      this.castToString(authorDescription) ||
      this.castToString(authorName) ||
      buttonItem.length > 0;


    return (
      <Base.Container className={`${this.decorateCSS("container")} ${this.getComponentState("is_video_visible") && this.decorateCSS("with-overlay")}`}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.ContainerGrid>
            {videoSection && videoSection.videoImage && videoSection.videoImage.url && (
              <div 
                className={`${this.decorateCSS("video-part")} ${!displayContent ? this.decorateCSS("video-only") : ""}`}
                data-animation={this.getPropValue("hoverAnimation").join(" ")}
              >
                <Base.Media
                  value={videoSection.videoImage}
                  className={this.decorateCSS("video-image")}
                />
                {videoSection?.overlay && (
                  <div className={this.decorateCSS("overlay")} />
                )}
                <div className={this.decorateCSS("play-part")}>
                  <span
                    className={this.decorateCSS("as-play")}
                    onClick={() => {
                      this.setComponentState("is_video_visible", true);
                    }}
                  >
                    {videoSection?.playIcon && (
                      <div className={this.decorateCSS("play-container")}>
                        <div className={this.decorateCSS("outer-circle")}></div>
                        <div className={this.decorateCSS("inner-circle")}></div>
                        <Base.Media
                          value={videoSection.playIcon}
                          className={this.decorateCSS("play-image")}
                        />
                      </div>
                    )}
                  </span>
                </div>
              </div>
            )}
            {displayContent && (
              <Base.VerticalContent className={this.decorateCSS("text-side")}>
                {this.castToString(subtitle) && (
                  <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>
                )}
                {this.castToString(titleText) && (
                  <Base.SectionTitle className={this.decorateCSS("title")}>{titleText}</Base.SectionTitle>
                )}
                {(this.castToString(description) || line) && (
                  <div className={this.decorateCSS("description-div")}>
                    {(line && this.castToString(description)) && (
                      <hr className={this.decorateCSS("line")} />
                    )}
                    {this.castToString(description) && (
                      <Base.SectionDescription className={`${this.decorateCSS("description")} ${!line && this.decorateCSS("without-line")}`}>
                        {description}
                      </Base.SectionDescription>
                    )}
                  </div>
                )}

                <Base.Row className={this.decorateCSS("author")}>
                  {authorIcon && (
                    <div className={this.decorateCSS("author-icon")}>
                      <Base.Media
                        value={this.getPropValue("author-icon")}
                        className={this.decorateCSS("icon")}
                      />
                    </div>
                  )}
                  {(this.castToString(authorDescription) || this.castToString(authorName)) && (
                    <div className={this.decorateCSS("author-info")}>
                    {this.castToString(authorDescription) && (
                      <Base.P
                        className={this.decorateCSS("author-description")}
                      >
                        {authorDescription}
                      </Base.P>
                    )}
                    {this.castToString(authorName) && (
                      <Base.H5 className={this.decorateCSS("author-name")}>
                        {authorName}
                      </Base.H5>
                    )}  
                    </div>
                  )}
                </Base.Row>
                {buttonItem.length > 0 && (
                  <Base.Row className={this.decorateCSS("button-container")}>
                    {buttonItem.map(
                      (buttonObj, index: number) => {
                        const buttonText = this.castToString(buttonObj.text);
                          return buttonText && (
                            <ComposerLink key={index} path={buttonObj.url}>
                              <Base.Button buttonType={buttonObj.type} className={this.decorateCSS("button")}>
                                <Base.P className={this.decorateCSS("button-text")}>{buttonObj.text}</Base.P>
                              </Base.Button>
                            </ComposerLink>
                          );
                      }
                    )}
                  </Base.Row>
                )}
              </Base.VerticalContent>
            )}
          </Base.ContainerGrid>
          {this.getComponentState("is_video_visible") && (
            <Base.Overlay
              onClick={() => this.setComponentState("is_video_visible", false)} className={this.decorateCSS("overlay")}
              isVisible={true}
            >
              <div className={this.decorateCSS("video-container")}>
                <div className={this.decorateCSS("video")}>
                  <Base.Media
                    value={videoSection.video}
                    className={this.decorateCSS("player")}
                    onClick={(event: React.MouseEvent<HTMLVideoElement>) => event.stopPropagation()}
                  />

                </div>
              </div>
              {videoSection?.closeIcon && (
                <div
                  className={this.decorateCSS("close-icon-box")}
                  onClick={() => this.setComponentState("is_video_visible", false)}
                >
                  <Base.Media
                    value={videoSection.closeIcon}
                    className={this.decorateCSS("close-icon")}
                  />
                </div>
              )}
            </Base.Overlay>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Blog2;
