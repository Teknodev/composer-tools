import * as React from "react";
import styles from "./download1.module.scss";
import { BaseDownload } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Button = {
  buttonText: string;
  url: string;
  isPrimary: boolean;
  buttonIcon: string;

};
class DownloadCard1 extends BaseDownload {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "DON'T WASTE TIME,",
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Download Now!",

    });


    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Eleifend morbi velit porttitor sed ipsum imperdiet ac ullamcorper fusce.",

    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Button ",
      value: [
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "PLAYSTORE",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
            {
              type: "icon",
              key: "buttonIcon",
              displayer: "In Button Icon",
              value: "ImAndroid",
            }
          ],
        },
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "APPSTORE",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
            {
              type: "icon",
              key: "buttonIcon",
              displayer: "In Button Icon",
              value: "GrApple",
            }
          ],
        },
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "WINDOWS",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
            {
              type: "icon",
              key: "buttonIcon",
              displayer: "In Button Icon",
              value: "FaWindows",
            }
          ],
        },
      ],
    });

  }

  getName(): string {
      return "Download-1";
    }

  render() {
    const title = this.getPropValue("title", {as_string: true});
    const subtitle = this.getPropValue("subtitle", {as_string: true})
    const description = this.getPropValue("description", {as_string: true})
      return(
      <div className = { this.decorateCSS("container") } >
          <div className={this.decorateCSS("max-content")}>
            {title && (
            <p className={this.decorateCSS("title")}>{this.getPropValue("title")}</p>
            )}
            {subtitle && (
            <h1 className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</h1>
            )}
            {subtitle && (
            <div className={this.decorateCSS("line")}></div>
            )}        
            {description && (
            <p className={this.decorateCSS("description")}>{this.getPropValue("description")} </p>
            )}

            <div className={this.decorateCSS("box")}>
              {this.castToObject<Button[]>("buttons").map(
                (item: Button, index: number) => {
                  return (
                    <ComposerLink key={`dw-1-btn-${index}`} path={item.url} >
                      <button
                        className={`${this.decorateCSS("button")} ${item.isPrimary && this.decorateCSS("button-color")
                          }`}
                      >
                        <ComposerIcon name={item.buttonIcon} propsIcon={{
                          className: this.decorateCSS("icon")
                        }} />
                        {item.buttonText}
                      </button>
                    </ComposerLink>
                  );
                }
              )}
            </div>

          </div>
      </div>
    );
  }
}

export default DownloadCard1;
