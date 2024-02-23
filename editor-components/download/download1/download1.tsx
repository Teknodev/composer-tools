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
  buttonColor: string

};
class DownloadCard1 extends BaseDownload {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title1",
      displayer: "Title-1",
      value: "DON'T WASTE TIME,",
    });

    this.addProp({
      type: "string",
      key: "title2",
      displayer: "Title-2",
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
            },
            {
             type: "color",
            key: "buttonColor",
            displayer: "Button Color",
            value: "LightGreen",
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
            },
            { type: "color",
            key: "buttonColor",
            displayer: "Button Color",
            value: "grey",
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
            },
            {
              type: "color",
              key: "buttonColor",
              displayer: "Button Color",
              value: "blue",
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
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>


          <p className={this.decorateCSS("title1")}>{this.getPropValue("title1")}</p>
          <p className={this.decorateCSS("title2")}>{this.getPropValue("title2")}</p>
          <p className={this.decorateCSS("description")}>{this.getPropValue("description")}</p>


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
                        className: this.decorateCSS("icon"),
                        color: item.buttonColor,
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
