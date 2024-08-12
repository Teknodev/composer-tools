import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action2.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

class CallToAction2Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      value: "GET STARTED",
      displayer: "SubTitle",
    });
    this.addProp({
      type: "string",
      key: "title",
      value: "Journey to Inner Peace: Yoga Sanctuary",
      displayer: "Title",
    });
    this.addProp({
      type: "string",
      key: "ButtonText",
      value: " Start Your Free Trial",
      displayer: "Button Text",
    });
    this.addProp({
      type: "page",
      key: "ButtonLink",
      displayer: "Button Link",
      value: "",
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
      displayer: "Icon of play button",
      key: "play_icon",
      value: "FaPlay",
    });
    this.addProp({
      type: "video",
      displayer: "Video",
      key: "video",
      value:
        "https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4",
    });
    this.setComponentState("is_video_visible", false);
  }

  getName(): string {
    return "Call To Action 2";
  }

  render() {
    const image = this.getPropValue("image");
    const buttons = this.getPropValue("ButtonText", { as_string: true });
    const icon = this.getPropValue("name");
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("header-2")}>
            {image && (
              <div className={this.decorateCSS("image-container")}>
                <img
                  alt=""
                  className={this.decorateCSS("image")}
                  src={this.getPropValue("image")}
                ></img>
              </div>
            )}
          </div>
          <div className={this.decorateCSS("call-to-action")}>
            <div className={this.decorateCSS("header")}>
              <h1 className={this.decorateCSS("subtitle")}>
                {this.getPropValue("subtitle")}
              </h1>
              <h1 className={this.decorateCSS("title")}>
                {this.getPropValue("title")}
              </h1>
            </div>
            {buttons && (
              <div className={this.decorateCSS("call-to-action-buttons")}>
                <ComposerLink path={this.getPropValue("Button Link")}>
                  <span className={this.decorateCSS("button")}>
                    {this.getPropValue("ButtonText")}
                  </span>
                </ComposerLink>
              </div>
            )}
          </div>
          <div className={this.decorateCSS("video-container")}>
            <div
              className={this.decorateCSS("play-icon-box")}
              onClick={() => {
                this.setComponentState("is_video_visible", true);
              }}
            >
              <ComposerIcon
                name={this.getPropValue("play_icon")}
                propsIcon={{ className: this.decorateCSS("play-icon") }}
              />
            </div>
          </div>
          {this.getComponentState("is_video_visible") && (
            <div
              className={this.decorateCSS("video")}
              onClick={() => this.setComponentState("is_video_visible", false)}
            >
              <video
                onClick={(event) => event.stopPropagation()}
                controls
                className={this.decorateCSS("player")}
                src={this.getPropValue("video")}
              ></video>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default CallToAction2Page;
