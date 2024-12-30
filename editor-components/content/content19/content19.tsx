import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseContent } from "../../EditorComponent";
import styles from "./content19.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";

type ButtonProps = {
  buttonText: JSX.Element;
  url: string;
};

class Content19 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "video",
      displayer: "Video Link",
      key: "video",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b9f4473292c6002b23c4b0?alt=media",
    });
    this.addProp({
      type: "image",
      key: "video-image",
      displayer: "Video Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a3a08f2f8a5b002ce6b795?alt=media",
    });
    this.addProp({
      type: "icon",
      key: "closeIcon",
      displayer: "Close Button Icon",
      value: "RxCross2",
    });

    this.addProp({
      type: "icon",
      key: "play-icon",
      displayer: "Play Image",
      value: "AiOutlinePlayCircle",
    });
    this.addProp({
      type: "string",
      key: "title-text",
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
      type: "boolean",
      key: "line",
      displayer: "Left Line",
      value: true,
    });

    this.addProp({
      type: "icon",
      key: "author-icon",
      displayer: "Author Icon",
      value: "BiLogoWhatsapp",
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
      displayer: "Button ",
      value: [
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Next",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Back",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
          ],
        },
      ],
    });

    this.setComponentState("is_video_visible", false);
  }

  getName(): string {
    return "Content 19";
  }

  render() {
    const videoImage = this.getPropValue("video-image");
    const authorIcon = this.getPropValue("author-icon");
    const playIcon = this.getPropValue("play-icon");
    const description = this.getPropValue("description");
    const line = this.getPropValue("line");
    const authorName = this.getPropValue("author-name");
    const authorDescription = this.getPropValue("author-description");
    const titleText = this.getPropValue("title-text");
    const closeIcon: string = this.getPropValue("closeIcon");

    const displayContent =
      this.castToString(titleText) ||
      this.castToString(description) ||
      this.castToString(authorDescription) ||
      this.castToString(authorName) ||
      this.castToObject<ButtonProps[]>("buttons").length > 0;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.ContainerGrid className={this.decorateCSS("content")}>
            {videoImage && (
              <div className={this.decorateCSS("video-part")}>
                <img
                  alt="video image"
                  src={videoImage}
                  className={this.decorateCSS("video-images")}
                />
                <div className={this.decorateCSS("play-part")}>
                  <span
                    className={this.decorateCSS("as-play")}
                    onClick={() => {
                      this.setComponentState("is_video_visible", true);
                    }}
                  >
                    {playIcon && (
                      <div className={this.decorateCSS("play-container")}>
                        <div className={this.decorateCSS("outer-circle")}></div>
                        <div className={this.decorateCSS("inner-circle")}></div>
                        <ComposerIcon
                          name={playIcon}
                          propsIcon={{
                            className: this.decorateCSS("play-image"),
                          }}
                        ></ComposerIcon>
                      </div>
                    )}
                  </span>
                </div>
              </div>
            )}
            {displayContent && (
              <Base.VerticalContent className={this.decorateCSS("text-side")}>
                {this.castToString(titleText) && (
                  <Base.SectionTitle className={this.decorateCSS("title-text")}>{titleText}</Base.SectionTitle>
                )}
                {this.castToString(description) && (
                  <div className={this.decorateCSS("description-div")}>
                    {this.castToString(description) && line && (
                      <hr className={this.decorateCSS("line")} />
                    )}
                    {this.castToString(description) && (
                      <Base.SectionDescription className={this.decorateCSS("description")}>
                        {description}
                      </Base.SectionDescription>
                    )}
                  </div>
                )}

                <div className={this.decorateCSS("description-author")}>
                  {authorIcon && (
                    <div className={this.decorateCSS("author-icon")}>
                      <ComposerIcon
                        name={authorIcon}
                        propsIcon={{
                          className: this.decorateCSS("author-icon-photo"),
                        }}
                      />
                    </div>
                  )}
                  <div className={this.decorateCSS("author-info")}>
                    {this.castToString(authorDescription) && (
                      <p
                        className={this.decorateCSS("author-description-text")}
                      >
                        {authorDescription}
                      </p>
                    )}
                    {this.castToString(authorName) && (
                      <h1 className={this.decorateCSS("author-name-text")}>
                        {authorName}
                      </h1>
                    )}
                  </div>
                </div>
                <div className={this.decorateCSS("button-container")}>
                  {this.castToObject<ButtonProps[]>("buttons").map(
                    (buttonObj, index) => {
                      const buttonData = buttonObj;
                      const buttonText = this.castToString(
                        buttonData.buttonText
                      );
                      const url = buttonData.url;
                      if (buttonText.trim() !== "") {
                        return (
                          <ComposerLink key={index} path={url}>
                            <Base.Button className={this.decorateCSS("button")}>
                              {buttonText}
                            </Base.Button>
                          </ComposerLink>
                        );
                      }
                    }
                  )}
                </div>
              </Base.VerticalContent>
            )}
          </Base.ContainerGrid>
        </Base.MaxContent>
        {this.getComponentState("is_video_visible") && (
          <Base.Overlay
            onClick={() => this.setComponentState("is_video_visible", false)} className={this.decorateCSS("overlay")}
          >
            <div className={this.decorateCSS("video-container")}>
              <div
                className={this.decorateCSS("video")}

              >
                <video
                  controls
                  className={this.decorateCSS("player")}
                  src={this.getPropValue("video")}
                  onClick={(event) => event.stopPropagation()}
                ></video>

              </div>
            </div>
            {closeIcon && (
              <div
                className={this.decorateCSS("close-icon-box")}
                onClick={() => this.setComponentState("is_video_visible", false)}
              >
                <ComposerIcon
                  propsIcon={{
                    className: this.decorateCSS("close-icon"),
                  }}
                  name={closeIcon}
                />
              </div>
            )}
          </Base.Overlay>
        )}
      </Base.Container>
    );
  }
}

export default Content19;
