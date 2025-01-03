import * as React from "react";
import styles from "./content12.module.scss";
import { BaseContent } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "composer-tools/composer-base-components/icon/icon";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class Content12 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);
    this.addProp(INPUTS.BUTTON("button", "Button", "Play me here", "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667e77bd0181a1002c334f66?alt=media&timestamp=1719564238038", "Link"));

    this.addProp({
      type: "image",
      displayer: "Cover image of video",
      key: "cover-image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661ba4ebd2970002c628732?alt=media&timestamp=1719563672206",
    });
    this.addProp({
      type: "icon",
      key: "closeIcon",
      displayer: "Close Button Icon",
      value: "RxCross2",
    });

    this.setComponentState("is_video_visible", false);
  }

  getName(): string {
    return "Content 12";
  }

  render() {
    const closeIcon: string = this.getPropValue("closeIcon");
    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

    return (
      <Base.Container
        className={this.decorateCSS("container")}
        style={{
          backgroundImage: `url(${this.getPropValue("cover-image")})`,
        }}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div
            className={this.decorateCSS("title-wrapper")}
            onClick={() => {
              this.setComponentState("is_video_visible", true);
            }}
          >
            <Base.Button buttonType={button.type} className={`${this.decorateCSS("title")} ${this.getPropValue("cover-image") && this.decorateCSS("image")}`}>
              {button.text}
            </Base.Button>
          </div>
          {(this.getComponentState("is_video_visible") && button.url) && (

            <Base.Overlay
              onClick={() => this.setComponentState("is_video_visible", false)}
              className={this.decorateCSS("overlay")}
            >
              <div className={this.decorateCSS("video-container")}>
                <div
                  className={this.decorateCSS("video")}
                >
                  <video
                    onClick={(event) => event.stopPropagation()}
                    controls
                    className={this.decorateCSS("player")}
                    src={button.url}
                  ></video>

                </div>
              </div>
              {closeIcon && (
                <div className={this.decorateCSS("close-icon-box")}>
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
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Content12;
