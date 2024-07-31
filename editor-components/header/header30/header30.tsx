import * as React from "react";
import styles from "./header30.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

class HeaderComponent30 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "video",
      key: "video",
      displayer: "Background Video",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661a35bbd2970002c626c45?alt=media&timestamp=1719483639151",
    });

    this.addProp({
      type: "string",
      key: "title_first",
      displayer: "First Title",
      value: "WE MAKE",
    });
    this.addProp({
      type: "string",
      key: "title_second",
      displayer: "Second Title",
      value: "GAMES",
    });
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661a311bd2970002c626c17?alt=media&timestamp=1719483639151",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "An award-winning Prague-based indie game studio pushing the boundaries of narrative and serious games",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        {
          type: "object",
          key: "button_link",
          displayer: "Button Navigate",
          value: [
            {
              type: "page",
              key: "link",
              displayer: "Button",
              value: "",
            },
            {
              type: "string",
              key: "button_text",
              displayer: "Button Text",
              value: "OUR PROJECTS",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "GrLinkNext",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Header-30";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <video src={this.getPropValue("video")} autoPlay loop muted className={this.decorateCSS("video-section")}></video>

          <div className={this.decorateCSS("content")}>
            <h1 className={`${this.decorateCSS("titles")} ${this.decorateCSS("first-title")} `}>
              {this.getPropValue("title_first")}
            </h1>
            <div className={this.decorateCSS("title-with-image")}>
              {this.getPropValue("image") ? (
                <img
                  className={this.decorateCSS("title-image")}
                  src={this.getPropValue("image")}
                  alt=""
                />
              ) : null}

              <h1 className={`${this.decorateCSS("titles")} ${this.decorateCSS("second-title")} `}>
                {this.getPropValue("title_second")}
              </h1>
            </div>
            <p className={this.decorateCSS("description")}>{this.getPropValue("description")}</p>
            <div className={this.decorateCSS("buttons")}>
              {this.getPropValue("buttons").map((item: any, index: number) => (
                <div className={this.decorateCSS("button")} key={index}>
                  <ComposerLink path={item.getPropValue("link")}>
                    <div className={this.decorateCSS("navigate-button")}>
                      <span className={this.decorateCSS("button-text")}>
                        {item.getPropValue("button_text")}
                      </span>
                      <ComposerIcon
                        name={item.getPropValue("icon")}
                        propsIcon={{ className: `${this.decorateCSS("button-icon")}` }}
                      />
                    </div>
                  </ComposerLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderComponent30;
