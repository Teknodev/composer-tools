import * as React from "react";
import styles from "./download6.module.scss";
import ComposerLink from "../../../composer-base-components/Link/link";
import { BaseDownload, TypeUsableComponentProps } from "../../EditorComponent";

type Button = {
  buttonText: string;
  url: string;
  isPrimary: boolean;
};

class Download6 extends BaseDownload {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Background Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64511b1df72de2002caab85b?alt=media&timestamp=1683036969323",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Card Title",
      value: "If you want to download it",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Download now by clicking the button",
    });

    let button: TypeUsableComponentProps = {
      type: "object",
      key: "button",
      displayer: "Displayer",
      value: [
        {
          type: "string",
          key: "buttonText",
          displayer: "Button Text",
          value: "Download Now",
        },
        {
          type: "page",
          key: "url",
          displayer: "Button Url",
          value: "",
        },
        {
          type: "boolean",
          key: "isPrimary",
          displayer: "Is Primary",
          value: true,
        },
      ],
    };

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [JSON.parse(JSON.stringify(button))],
    });
  }

  getName(): string {
    return "Download-6";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("section")}>
            <div className={this.decorateCSS("image-child")}>
              <img
                className={this.decorateCSS("image")}
                src={this.getPropValue("image")}
                alt="background-image"
              />
            </div>
            <div className={this.decorateCSS("text-container")}>
              <h1>{this.getPropValue("title")}</h1>
              <p>{this.getPropValue("description")}</p>
              <div className={this.decorateCSS("button-group")}>
                {this.castToObject<Button[]>("buttons").map(
                  (item: Button, index: number) => {
                    return (
                      <ComposerLink key={`dw-6-btn-${index}`} path={item.url}>
                        <button
                          className={`${this.decorateCSS("button")} ${
                            item.isPrimary && this.decorateCSS("primary")
                          }`}
                        >
                          {item.buttonText}
                        </button>
                      </ComposerLink>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Download6;
