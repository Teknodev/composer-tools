import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseContent } from "../../EditorComponent";
import styles from "./content19.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Button } from "@mui/material";

type ButtonProps = {
  buttonText: string;
  url: string;
};

class Content19 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "video",
      displayer: "Video Link",
      key: "video",
      value: "https://www.youtube.com/embed/yB7MtnWmYzI"
    });
    this.addProp({
      type:"image",
      key:"video-image",
      displayer:"Video Image",
      value:"https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a3a08f2f8a5b002ce6b795?alt=media"
    });
  
    this.addProp({
      type:"icon",
      key:"play-icon",
      displayer:"Play Image",
      value:"AiOutlinePlayCircle"
    });
    this.addProp({
      type: "string",
      key: "title-text",
      displayer: "Title",
      value: "We Think About Reflections On The Wisdom From The Planets"
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Donec orci enim, vulputate et rutrum id, varius at nibh. Sed sagittis feugiat augue maximus hendrerit. Phasellus volutpat dictum sem, sed dignissim diam sodales eu. Suspendisse ut lorem posuere, tincidunt leo a, ultricies odio. Nulla porta sagittis turpis vel tristique. Curabitur ac maximus est. Proin placerat mauris eu eros varius imperdiet id at ligula."
    });


    this.addProp({
      type:"icon",
      key:"author-icon",
      displayer:"Author Icon",
      value:"BiLogoWhatsapp"
    });
    this.addProp({
      type: "string",
      key: "author-name",
      displayer: "Author Name",
      value: "Tarot & Horoscope"
    });
    this.addProp({
      type: "string",
      key: "author-description",
      displayer: "Author Description",
      value: "15 years of Experience with"
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
            }
          ],
        }
      ]
    });

    this.setComponentState("is_video_visible", false);
  }

  getName(): string {
    return "Content 19";
  }
  
  render() {
    const videoImage = this.getPropValue("video-image");
    const authorImage = this.getPropValue("author-icon");
    const playIcon = this.getPropValue("play-icon");
    const description = this.getProp("description");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {videoImage && (
              <div className={this.decorateCSS("video-part")}>
                <img alt="" src={videoImage} className={this.decorateCSS("video-images")} />
                <div className={this.decorateCSS("play-part")}>
                  <span className="as-play" onClick={() => {
                    this.setComponentState("is_video_visible", true);
                  }}>
                    {playIcon && (
                      <div className={this.decorateCSS("play-container")}>
                        <div className={this.decorateCSS("outer-circle")}></div>
                        <div className={this.decorateCSS("inner-circle")}></div>
                        <ComposerIcon name={this.getPropValue("play-icon")} propsIcon={{
                          className: this.decorateCSS("play-image")
                        }}></ComposerIcon>
                      </div>
                    )}
                  </span>
                </div>
              </div>
            )}
            <div className={this.decorateCSS("text-side")}>
              {this.getProp("title-text").value && (
              <p className={this.decorateCSS("title-text")}>{this.getPropValue("title-text")}</p>
              )}
              {description.value && (
                <div className={this.decorateCSS("description-div")}>
                  <h2 className={this.decorateCSS("description")}>{this.getPropValue("description")}</h2>
                </div>
              )}
              <div className={this.decorateCSS("description-author")}>
                {authorImage && (
                  <div className={this.decorateCSS("author-icon")}>
                    <ComposerIcon name={this.getPropValue("author-icon")} propsIcon={{
                      className: this.decorateCSS("author-icon-photo")
                    }}></ComposerIcon>
                  </div>
                )}
                <div className={this.decorateCSS("author-info")}>
                  <p className={"author-description-text"}>{this.getPropValue("author-description")}</p>
                  <h1 className={"author--text"}>{this.getPropValue("author-name")}</h1>
                </div>
              </div>
          
              <div className={this.decorateCSS("button-container")}>
                {(this.getProp("buttons").value as any[]).map((buttonObj, index) => {
                  const buttonData = buttonObj.value;
                  const buttonText = buttonData.find((item: any) => item.key === "buttonText")?.value || "";
                  const url = buttonData.find((item: any) => item.key === "url")?.value || "";
                  if (buttonText.trim() !== "") {
                    return (
                      <ComposerLink key={index} path={url}>
                        <Button className={this.decorateCSS("button")}>{buttonText}</Button>
                      </ComposerLink>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
          {this.getComponentState("is_video_visible") && (
            <div className={this.decorateCSS("video")} onClick={() => this.setComponentState("is_video_visible", false)}>
              <video onClick={(event) => event.stopPropagation()} controls className={this.decorateCSS("player")} src={this.getPropValue("video")}></video>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Content19;
