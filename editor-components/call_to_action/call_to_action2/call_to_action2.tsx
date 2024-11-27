import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action2.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";

type Button = {
  text: JSX.Element;
  link: string;
  icon: string;
};

class CallToAction2Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      value: "GET STARTED",
      displayer: "Subtitle",
    });
    this.addProp({
      type: "string",
      key: "title",
      value: "Journey to Inner Peace: Yoga Sanctuary",
      displayer: "Title",
    });
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Start Your Free Trial",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "MdOutlineKeyboardArrowRight",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b9f51c3292c6002b23c4f6?alt=media",
    });

    this.addProp({
      type: "icon",
      key: "playIcon",
      displayer: "Play Button Icon",
      value: "FaPlay",
    });
    this.addProp({
      type: "icon",
      key: "closeIcon",
      displayer: "Close Button Icon",
      value: "RxCross2",
    });

    this.addProp({
      type: "page",
      displayer: "Video",
      key: "video",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b9f4473292c6002b23c4b0?alt=media",
    });
    this.setComponentState("isVideoVisible", false);
  }

  getName(): string {
    return "Call To Action 2";
  }

  showVideo = () => {
    this.setComponentState("isVideoVisible", true);
  };

  hideVideo = () => {
    this.setComponentState("isVideoVisible", false);
  };

  render() {
    const buttons = this.castToObject<Button[]>("buttons");

    const image = this.getPropValue("image");
    const playIcon: string = this.getPropValue("playIcon");
    const closeIcon: string = this.getPropValue("closeIcon");

    const titleExist = this.getPropValue("title", { as_string: true });
    const subtitleExist = this.getPropValue("subtitle", { as_string: true });

    const renderHeader: boolean =
      titleExist || subtitleExist || buttons.length > 0;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("background")}> </div>
        <Base.MaxContent className={this.decorateCSS("max-content")}>

          <div className={this.decorateCSS("wrapper")}>
            {renderHeader && (
              <div className={this.decorateCSS("header")}>
                {(titleExist || subtitleExist) && (
                  <div className={this.decorateCSS("titles")}>
                    {subtitleExist && (
                      <Base.H4 className={this.decorateCSS("subtitle")}>
                        {this.getPropValue("subtitle")}
                      </Base.H4>
                    )}
                    {titleExist && (
                      <Base.H1 className={this.decorateCSS("title")}>
                        {this.getPropValue("title")}
                      </Base.H1>
                    )}
                  </div>
                )}
                {buttons?.length > 0 && (
                  <div className={this.decorateCSS("button-container")}>
                    {buttons.map((button: Button, index: number) => (
                      <div
                        key={index}
                        className={this.decorateCSS("button")}
                      >
                        <ComposerLink path={button.link}>
                          <div className={this.decorateCSS("text")}>
                            {button.text}
                          </div>
                          {button.icon && (
                            <ComposerIcon name={button.icon} propsIcon={{ className: this.decorateCSS("icon") }} />
                          )}
                        </ComposerLink>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {image && (
              <div
                style={{
                  backgroundImage: `url(${this.getPropValue("image")})`,
                }}
                className={this.decorateCSS("image-container")}
                onClick={this.showVideo}
              >
                {playIcon && (
                  <div
                    className={this.decorateCSS("play-icon-box")}
                    onClick={this.showVideo}
                  >
                    <ComposerIcon
                      name={playIcon}
                      propsIcon={{ className: this.decorateCSS("play-icon") }}
                    />
                  </div>
                )}
              </div>
            )}
            {this.getComponentState("isVideoVisible") && (
              <div
                onClick={this.hideVideo}
                className={this.decorateCSS("overlay")}
              >
                <div className={this.decorateCSS("video-container")}>
                  <div
                    className={this.decorateCSS("video")}
                    onClick={this.hideVideo}
                  >
                    <video
                      controls
                      className={this.decorateCSS("player")}
                      src={this.getPropValue("video")}
                    ></video>
                    {closeIcon && (
                      <div
                        className={this.decorateCSS("close-icon-box")}
                        onClick={this.hideVideo}
                      >
                        <ComposerIcon
                          propsIcon={{
                            className: this.decorateCSS("close-icon"),
                          }}
                          name={closeIcon}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )

            }
          </div>

        </Base.MaxContent>

      </Base.Container >
    );
  }
}

export default CallToAction2Page;
