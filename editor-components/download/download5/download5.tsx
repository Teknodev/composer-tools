import * as React from "react";
import styles from "./download5.module.scss";
import { BaseDownload } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Button = {
  buttonText1: JSX.Element;
  buttonText2: JSX.Element;
  url: string;
  icon: string;
};

class Download5 extends BaseDownload {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      value: "Available On All App Store",
      displayer: "Title",
    });

    this.addProp({
      type: "string",
      key: "description",
      value: "Download now & enjoy app with unlimited features",
      displayer: "Description",
    });

    this.addProp({
      type: "image",
      key: "backgroundImage",
      displayer: "Background Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66bb0c0a3292c6002b23e266?alt=media",
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: false
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Button",

      value: [
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "buttonText1",
              displayer: "Button Text 1",
              value: "Download on the",
            },
            {
              type: "string",
              key: "buttonText2",
              displayer: "Button Text 2",
              value: "Google Play",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Button Icon",
              value: "BsGooglePlay",
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
              key: "buttonText1",
              displayer: "Button Text 1",
              value: "Download on the",
            },
            {
              type: "string",
              key: "buttonText2",
              displayer: "Button Text 2",
              value: "App Store",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Button Icon",
              value: "BsApple",
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
  }

  getName(): string {
    return "Download-5";
  }

  render() {
    const backgroundImage = this.getPropValue("backgroundImage");
    const overlay = this.getPropValue("overlay");

    const title = this.getPropValue("title");
    const titleExist = this.getPropValue("title", { as_string: true });

    const desc = this.getPropValue("description");
    const descExist = this.getPropValue("description", { as_string: true });

    const buttons = this.castToObject<Button[]>("buttons");

    const widenContent = backgroundImage ? { width: "60%" } : {};

    return (
      <div
        className={this.decorateCSS("container")}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page-1")} style={widenContent}>
            {titleExist && (
              <div className={this.decorateCSS("box")}>
                <h1 className={this.decorateCSS("title1")}>
                  {title}
                </h1>
              </div>
            )}
            {descExist && (
              <div className={this.decorateCSS("box")}>
                <p className={this.decorateCSS("text1")}>
                  {desc}
                </p>
              </div>
            )}

            {buttons.length > 0 &&
              <div className={this.decorateCSS("buttons-box")}>
                {buttons.map(
                  (item: Button, index: number) => {
                    const text1Exist = this.castToString(item.buttonText1);
                    const text2Exist = this.castToString(item.buttonText2);

                    if (text1Exist || text2Exist || item.icon)
                      return (
                        <ComposerLink key={index} path={item.url}>
                          <div className={this.decorateCSS("button")}>
                            {item.icon && (
                              <div className={this.decorateCSS("icon-div")}>
                                <ComposerIcon
                                  name={item.icon}
                                  propsIcon={{
                                    className: this.decorateCSS("icon"),
                                  }}
                                />
                              </div>
                            )}
                            {(text1Exist || text2Exist) && (
                              <div className={this.decorateCSS("button-texts")}>
                                {text1Exist && (
                                  <p className={this.decorateCSS("up-text")}>
                                    {item.buttonText1}
                                  </p>
                                )}
                                {text2Exist && (
                                  <h1 className={this.decorateCSS("down-text")}>
                                    {item.buttonText2}
                                  </h1>
                                )}
                              </div>
                            )}
                          </div>
                        </ComposerLink>
                      );
                    return null;
                  },
                )}
              </div>
            }
          </div>
        </div>
        {overlay &&
          <div className={this.decorateCSS("overlay")} />
        }
      </div>
    );
  }
}

export default Download5;
