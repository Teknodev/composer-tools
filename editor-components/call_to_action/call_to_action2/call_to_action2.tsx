import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import {
  BaseCallToAction,
  TypeUsableComponentProps,
} from "../../EditorComponent";
import styles from "./call_to_action2.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Subtitles } from "@mui/icons-material";

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
      key: "name",
      displayer: "Icon",
      value: "FaYoutube",
    });
    this.addProp({
      type: "page",
      key: "url",
      displayer: "video-link",
      value: "https://www.youtube.com/",
    });
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
            {icon && (
              <div className={this.decorateCSS("icons-bar")}>
                <ComposerLink path={this.getPropValue("url")}>
                  <ComposerIcon
                    name={this.getPropValue("name")}
                    propsIcon={{ className: this.decorateCSS("icon") }}
                  />
                </ComposerLink>
              </div>
            )}
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
          { buttons &&   <div className={this.decorateCSS("call-to-action-buttons")}>
              <ComposerLink path={this.getPropValue("video-link")}>
                <span className={this.decorateCSS("button")}>
                  {this.getPropValue("ButtonText")}
                </span>
              </ComposerLink>
            </div>}
          </div>
        </div>
      </div>
    );
  }
}

export default CallToAction2Page;
