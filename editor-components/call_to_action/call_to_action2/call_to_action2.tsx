import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action2.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Button = INPUTS.CastedButton;

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
      value: [INPUTS.BUTTON("button", "Button", "Start Your Free Trial", "", null, null, "Primary")],
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

  static getName(): string {
    return "Call To Action 2";
  }

  showVideo = () => {
    this.setComponentState("isVideoVisible", true);
  };

  hideVideo = () => {
    this.setComponentState("isVideoVisible", false);
  };

  render() {
    const alignment = Base.getContentAlignment();
    const buttons = this.castToObject<Button[]>("buttons");

    const image = this.getPropValue("image");
    const playIcon: string = this.getPropValue("playIcon");
    const closeIcon: string = this.getPropValue("closeIcon");

    const titleExist = this.castToString(this.getPropValue("title"));
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${this.getComponentState("isVideoVisible") && this.decorateCSS("with-overlay")}`}>
        <div className={`${this.decorateCSS("background")} ${!this.getPropValue("image") && this.decorateCSS("no-image")}`}> </div>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            {(titleExist || subtitleExist || (buttons.length > 0)) && (
              <div
                className={`${this.decorateCSS("header")} ${alignment === "center" && this.decorateCSS("center")}`}
              >
                {(titleExist || subtitleExist) && (
                  <Base.VerticalContent className={this.decorateCSS("titles")}>
                    {subtitleExist && (
                      <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                        {this.getPropValue("subtitle")}
                      </Base.SectionSubTitle>
                    )}
                    {titleExist && (
                      <Base.SectionTitle className={this.decorateCSS("title")}>
                        {this.getPropValue("title")}
                      </Base.SectionTitle>
                    )}
                  </Base.VerticalContent>
                )}
                {buttons?.length > 0 && (
                  <div className={this.decorateCSS("button-container")}>
                    {buttons.map((button: Button, index: number) => {

                      return (
                        <ComposerLink path={button.url}>
                          <Base.Button className={this.decorateCSS("button")} buttonType={button.type}>
                            {button.text}
                          </Base.Button>
                        </ComposerLink>
                      )
                    })}
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
            {(this.getComponentState("isVideoVisible") && this.getPropValue("video")) && (
              <Base.Overlay
                onClick={this.hideVideo}
                className={this.decorateCSS("overlay")}
                isVisible={true}
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
                  </div>
                </div>
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
              </Base.Overlay>
            )
            }
          </div>
        </Base.MaxContent>
      </Base.Container >
    );
  }
}

export default CallToAction2Page;
