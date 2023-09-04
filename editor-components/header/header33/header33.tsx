import * as React from "react";
import styles from "./header33.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type playerButton = {
  url: string;
  image: string;
};
class HeaderComponent33 extends BaseHeader {
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
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64f5ed75057bdf002c2c2cb1?alt=media&timestamp=1693838686881",
        },
      ],
    });
    this.addProp({
      type: "object",
      key: "player-button",
      displayer: "Player Button",
      value: [
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
      ],
    });
  }

  getName(): string {
    return "Header-33";
  }

  render() {
    let items: any = this.castToObject("items");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            <div className={this.decorateCSS("background-1")}>
              <img src={items[1].value} alt={items[1].displayer} />
            </div>
            <div className={this.decorateCSS("items")}>
              <div className={this.decorateCSS("top")}>
                <div className={this.decorateCSS("content")}>
                  <h1 className={this.decorateCSS("title")}>
                    {items[0].title}
                  </h1>
                </div>
              </div>
              <div className={this.decorateCSS("bottom")}>
                <div className={this.decorateCSS("message")}>
                  {items[0].message}
                </div>
                <div className={this.decorateCSS("icon-button")}>
                  {this.castToObject<playerButton[]>("player-button").map(
                    (icon: any, index: number) => (
                      <ComposerLink key={index} path={icon.url}>
                        <div className={this.decorateCSS("icon-div")}>
                          <img
                            src={icon.image}
                            alt={`Player Button ${index + 1}`}
                            key={index}
                          />
                          <h4>{items[0].buttonDescription}</h4>
                        </div>
                      </ComposerLink>
                    )
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

export default HeaderComponent33;
