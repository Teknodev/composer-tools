import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action2.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

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
      type: "string",
      key: "buttonText",
      value: " Start Your Free Trial",
      displayer: "Button Text",
    });
    this.addProp({
      type: "page",
      key: "buttonLink",
      displayer: "Button Link",
      value: "",
    });
    this.addProp({
      type: "icon",
      key: "buttonIcon",
      displayer: "Button Icon",
      value: "FaArrowRight",
    });
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      type: "video",
      displayer: "Video",
      key: "video",
      value:
        "https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4",
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
    const image = this.getPropValue("image");
    const button: Button = {
      text: this.getPropValue("buttonText"),
      link: this.getPropValue("buttonLink"),
      icon: this.getPropValue("buttonIcon"),
    };
    const playIcon: string = this.getPropValue("playIcon");
    const closeIcon: string = this.getPropValue("closeIcon");
    const buttonIcon: string = this.getPropValue("buttonIcon");

    const titleExist = this.getPropValue("title", { as_string: true });
    const subtitleExist = this.getPropValue("subtitle", { as_string: true });

    const buttonTextExist = this.castToString(button.text);

    const renderHeader: boolean =
      titleExist || subtitleExist || buttonTextExist || buttonIcon;

    return (
      <div className={this.decorateCSS("container")}>
        <div
          style={
            this.getPropValue("image")
              ? { height: "550px" }
              : { height: "auto" }
          }
          className={this.decorateCSS("background")}
        >
          <div className={this.decorateCSS("max-content")}>
            <div className={this.decorateCSS("wrapper")}>
              {renderHeader && (
                <div className={this.decorateCSS("header")}>
                  {(titleExist || subtitleExist) && (
                    <div className={this.decorateCSS("titles")}>
                      {subtitleExist && (
                        <h3 className={this.decorateCSS("subtitle")}>
                          {this.getPropValue("subtitle")}
                        </h3>
                      )}
                      {titleExist && (
                        <h2 className={this.decorateCSS("title")}>
                          {this.getPropValue("title")}
                        </h2>
                      )}
                    </div>
                  )}
                  {(buttonTextExist || buttonIcon) && (
                    <div className={this.decorateCSS("button-container")}>
                      <ComposerLink path={button.link}>
                        <span className={this.decorateCSS("button")}>
                          {buttonIcon && <ComposerIcon name={buttonIcon} />}
                          {buttonTextExist && button.text}
                        </span>
                      </ComposerLink>
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
            </div>
          </div>
        </div>
        {this.getComponentState("isVideoVisible") &&
          this.getPropValue("video") && (
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
                      <ComposerIcon name={closeIcon} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
      </div>
    );
  }
}

export default CallToAction2Page;
