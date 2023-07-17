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
      type: "array",
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
              type: "image",
              displayer: "Side Image",
              key: "image",
              value:
                "https://woodmart.xtemos.com/wp-content/uploads/revslider/slider-christmas/xmas-tree.svg",
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
            "https://a6n4d3q9.rocketcdn.me/wp-content/uploads/revslider/slider-christmas/xmas-bg.jpg",
        },
        {
          type: "image",
          displayer: "Background Image 2",
          key: "background2",
          value:
            "https://a6n4d3q9.rocketcdn.me/wp-content/uploads/revslider/slider-christmas/xmas-l-1.png",
        },
        {
          type: "image",
          displayer: "Background Image 3",
          key: "background3",
          value:
            "https://a6n4d3q9.rocketcdn.me/wp-content/uploads/revslider/slider-christmas/xmas-l-2.png",
        },
        {
          type: "image",
          displayer: "Background Image 4",
          key: "background4",
          value:
            "https://a6n4d3q9.rocketcdn.me/wp-content/uploads/revslider/slider-christmas/xmas-l-3.png",
        },
        {
          type: "image",
          displayer: "Background Image 5",
          key: "background5",
          value:
            "https://a6n4d3q9.rocketcdn.me/wp-content/uploads/revslider/slider-christmas/xmas-l-4.png",
        },
        {
          type: "image",
          displayer: "Background Image 6",
          key: "background6",
          value:
            "https://a6n4d3q9.rocketcdn.me/wp-content/uploads/revslider/slider-christmas/xmas-snow-1.png",
        },
      ],
    });
    this.addProp({
      type: "array",
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
            <div className={this.decorateCSS("background-2")}>
              <img src={items[2].value} alt={items[2].displayer} />
            </div>
            <div className={this.decorateCSS("background-3")}>
              <img src={items[3].value} alt={items[3].displayer} />
            </div>
            <div className={this.decorateCSS("background-4")}>
              <img src={items[4].value} alt={items[4].displayer} />
            </div>
            <div className={this.decorateCSS("background-5")}>
              <img src={items[5].value} alt={items[5].displayer} />
            </div>
            <div className={this.decorateCSS("background-6")}>
              <img src={items[6].value} alt={items[6].displayer} />
            </div>
            <div className={this.decorateCSS("items")}>
              <div className={this.decorateCSS("top")}>
                <div className={this.decorateCSS("content")}>
                  <div className={this.decorateCSS("left-side")}>
                    <img
                      src={items[0].value[1].value}
                      alt={items[0].value[1].displayer}
                    />
                  </div>
                  <h1 className={this.decorateCSS("title")}>
                    {items[0].title}
                  </h1>
                  <div className={this.decorateCSS("right-side")}>
                    <img
                      src={items[0].value[1].value}
                      alt={items[0].value[1].displayer}
                    />
                  </div>
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
