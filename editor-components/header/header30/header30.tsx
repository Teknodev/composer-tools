import * as React from "react";
import styles from "./header30.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type playerButton = {
  url: string;
  image: string;
};
class HeaderComponent30 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "object",
      displayer: "Items",
      key: "items",
      value: [
        {
          type: "object",
          displayer: "Above of Dot",
          key: "top-of-dot",
          value: [
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "MERRY CHRISTMAS",
            },
            {
              type: "string",
              displayer: "Message",
              key: "message",
              value: "And Happy New Year",
            },
            {
              type: "string",
              displayer: "Button Description",
              key: "buttonDescription",
              value: "WATCH VIDEO",
            },
          ],
        },
        {
          type: "image",
          displayer: "Background Image 1",
          key: "background1",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64f5ed75057bdf002c2c2cb1?alt=media&timestamp=1693841998226",
        },
      ],
    });
    this.addProp(
      {
        type: "object",
        key: "box",
        displayer: "Player Button",
        value: [
          {
            type: "image",
            key: "image",
            value: "https://cdn-icons-png.flaticon.com/512/3039/3039386.png",
            displayer: "Image",
          },
          {
            type: "page",
            key: "url",
            displayer: "URL",
            value: "https://youtu.be/V5QPXhStb5I",
          },
        ],
      },
    );
  }

  getName(): string {
    return "Header-30";
  }

  render() {
    let items: any = this.castToObject("items");
    const box = this.castToObject<playerButton>("box");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            <div className={this.decorateCSS("background-1")}>
              <img src={items.background1} />
            </div>
            <div className={this.decorateCSS("items")}>
              <div className={this.decorateCSS("top")}>
                <div className={this.decorateCSS("content")}>
                  <h1 className={this.decorateCSS("title")}>
                    {items["top-of-dot"].title}
                  </h1>
                </div>
              </div>
              <div className={this.decorateCSS("bottom")}>
                <div className={this.decorateCSS("message")}>
                  {items["top-of-dot"].message}
                </div>
                <div className={this.decorateCSS("icon-button")}>

                  <ComposerLink path={box.url}>
                    <div className={this.decorateCSS("icon-div")}>
                      <img
                        src={box.image}
                      />
                      <h4 className={this.decorateCSS("button-description")}>{items["top-of-dot"].buttonDescription}</h4>
                    </div>
                  </ComposerLink>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderComponent30;
