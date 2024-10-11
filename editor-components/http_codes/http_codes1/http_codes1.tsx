import React from "react";
import { BaseHTTPCodes } from "../../EditorComponent";
import styles from "./http_codes1.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type ButtonType = {
  icon?: string;
  text?: string;
  url?: string;
};

type IconType = {
  icon: string;
  url?: string;
};

type IconsArray = IconType[];
type ButtonsArray = ButtonType[];

class HTTP_CODES1 extends BaseHTTPCodes {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Oops!",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "description",
      value: "We couldn't find the page you were looking for",
    });

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6707c9da97fe08002c750ad5?alt=media&timestamp=1728563719607",
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
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaArrowLeft",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Go home",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "left-icons",
      displayer: "Left Icon",
      value: [
        {
          type: "object",
          key: "icons",
          displayer: "icons",
          value: [
            {
              type: "icon",
              key: "icon",
              value: "MdOutlineSubdirectoryArrowLeft",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "url",
              displayer: "url",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "right-icons",
      displayer: "Right Icon",
      value: [
        {
          type: "object",
          key: "icons",
          displayer: "icons",
          value: [
            {
              type: "icon",
              key: "icon",
              value: "MdCancel",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "HTTP Codes 1";
  }

  render() {
    const image = this.getPropValue("image");
    const left_icons = this.castToObject<IconsArray>("left-icons");
    const right_icons = this.castToObject<IconsArray>("right-icons");
    const buttons = this.castToObject<ButtonsArray>("buttons");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content-box")}>
            <div className={this.decorateCSS("icons")}>
              <div>
                {left_icons && (
                  <div className={this.decorateCSS("left-icons")}>
                    {left_icons.map((icon: IconType, index: number) => {
                      if (icon.icon)
                        return (
                          <div className={this.decorateCSS("icon-container")}>
                            <ComposerLink key={index} path={icon.url}>
                              <ComposerIcon
                                name={icon.icon}
                                propsIcon={{
                                  className: this.decorateCSS("icon"),
                                }}
                              />
                            </ComposerLink>
                          </div>
                        );
                    })}
                  </div>
                )}
              </div>
              <div>
                {right_icons && (
                  <div className={this.decorateCSS("right-icons")}>
                    {right_icons.map((icon: IconType, index: number) => {
                      if (icon.icon)
                        return (
                          <div className={this.decorateCSS("icon-container")}>
                            <ComposerLink key={index} path={icon.url}>
                              <ComposerIcon
                                name={icon.icon}
                                propsIcon={{
                                  className: this.decorateCSS("icon"),
                                }}
                              />
                            </ComposerLink>
                          </div>
                        );
                    })}
                  </div>
                )}
              </div>
            </div>

            <div className={this.decorateCSS("content")}>
              <div className={this.decorateCSS("left-side")}>
                {image && (
                  <div className={this.decorateCSS("image-box")}>
                    <img className={this.decorateCSS("image")} src={this.getPropValue("image")} alt="" />
                  </div>
                )}
              </div>
              <div className={this.decorateCSS("right-side")}>
                <h1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h1>
                <h1 className={this.decorateCSS("description")}>{this.getPropValue("description")}</h1>
                <div>
                  {buttons && (
                    <div className={this.decorateCSS("button")}>
                      {buttons.map((button: ButtonType, index: number) => {
                        return (
                          <div key={index} className={this.decorateCSS("button-container")}>
                            <ComposerLink path={button.url}>
                              <div className={this.decorateCSS("button-content")}>
                                <div className={this.decorateCSS("button-icon")}>{button.icon && <ComposerIcon name={button.icon} />}</div>
                                <div className={this.decorateCSS("button-text")}>{button.text && button.text}</div>
                              </div>
                            </ComposerLink>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HTTP_CODES1;
