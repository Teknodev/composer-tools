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
      key: "title1",
      value: "Available On All App Store",
      displayer: "Title-1",
    });

    this.addProp({
      type: "string",
      key: "text1",
      value: "Download now & enjoy app with unlimited features",
      displayer: "Description-1",
    });

    this.addProp({
      type: "image",
      key: "image",
      value: "https://freakytheme.com/html/appol/image/bg-parallax-c.png",
      displayer: "Image",
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
              displayer: "Button Text",
              value: "Download on the",
            },
            {
              type: "string",
              key: "buttonText2",
              displayer: "Button Text",
              value: "Google Play",
            },
            {
              type: "icon",
              key: "icon",
              value: "BsGooglePlay",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "Button Link",
              displayer: "URL",
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
              displayer: "Button Text",
              value: "Download on the",
            },
            {
              type: "string",
              key: "buttonText2",
              displayer: "Button Text",
              value: "App Store",
            },
            {
              type: "icon",
              key: "icon",
              value: "BsApple",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "Button Link",
              displayer: "URL",
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
    const backgroundImage = this.getPropValue("image");

    const titleExist = this.getPropValue("title1", { as_string: true });
    const textExist = this.getPropValue("text1", { as_string: true });

    return (
      <div
        className={this.decorateCSS("container")}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page-1")}>
            {titleExist && (
              <div className={this.decorateCSS("box")}>
                <h1 className={this.decorateCSS("title1")}>
                  {this.getPropValue("title1")}
                </h1>
              </div>
            )}
            {textExist && (
              <div className={this.decorateCSS("box")}>
                <p className={this.decorateCSS("text1")}>
                  {this.getPropValue("text1")}
                </p>
              </div>
            )}

            <div className={this.decorateCSS("box")}>
              {this.castToObject<Button[]>("buttons").map(
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
                  return <></>;
                },
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Download5;
