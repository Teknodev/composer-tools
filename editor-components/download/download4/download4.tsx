import * as React from "react";
import styles from "./download4.module.scss";
import { BaseDownload } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type Button = {
  buttonText: string;
  url: string;
  isPrimary: boolean;
};
class Download4 extends BaseDownload {
  constructor(props?: any) {
    super(props, styles);
 

    this.addProp({
      type: "string",
      key: "title2",
      value: "Connect With Customers.",
      displayer: "Title-2",
    });

   
    this.addProp({
      type: "string",
      key: "text2",
      value: "To connect with customers, businesses need to understand their needs, preferences, and behaviors. One effective way to do this is through personalized communication and engagement.",
      displayer: "Description-2",
    });

    this.addProp({
      type: "image",
      key: "image",
      value: "https://img.freepik.com/free-photo/close-up-woman-holding-smartphone_23-2148708802.jpg?size=626&ext=jpg&ga=GA1.1.1849377565.1680873032&semt=robertav1_2_sidr",
      displayer: "Image",
    });

    this.addProp({
      type: "boolean",
      key: "reverse",
      displayer: "Reverse",
      value: false,
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
              key: "buttonText",
              displayer: "Button Text",
              value: "Download Mobile App",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
            {
              type: "boolean",
              key: "isPrimary",
              displayer: "Is primary",
              value: false,
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Download-4";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div
            className={`${this.decorateCSS("basic-page")} ${
              this.getPropValue("reverse") &&
              this.decorateCSS("basic-page-reverse")
            }`}
          >
            <div
              className={`${this.decorateCSS("page-1")} ${
                this.getPropValue("reverse") &&
                this.decorateCSS("page-1-border")
              }`}
            >
              
              <div className={this.decorateCSS("box")}>
                <h1>{this.getPropValue("title2")}</h1>
              </div>
              <div className={this.decorateCSS("box")}>
                <p>
                  {this.getPropValue("text2")}
                </p>
               
              </div>
              <div className={this.decorateCSS("box")}>
                {this.castToObject<Button[]>("buttons").map(
                  (item: Button, index: number) => {
                    return (
                      <ComposerLink key={`dw-4-btn-${index}`}  path={item.url}>
                        <button
                          className={`${this.decorateCSS("button")} ${
                            item.isPrimary && this.decorateCSS("button-color")
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
            <div className={this.decorateCSS("page-2")}>
              <img className={this.decorateCSS("image")} src={this.getPropValue("image")} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Download4;
