import * as React from "react";
import styles from "./header19.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "composer-tools/composer-base-components/base/base";

class Header19 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "object",
      displayer: "Item Left",
      key: "item-left",
      value: [
        {
          type: "boolean",
          displayer: "Visibility",
          key: "visibility",
          value: true,
        },
        {
          type: "string",
          displayer: "Title",
          key: "title",
          value: "MATTIS LAOREET SAPIEN",
        },
        {
          type: "string",
          displayer: "Description",
          key: "description",
          value: "Porta\nConsectetur\nImperdiet\nFrigilla",
        },
        {
          type: "image",
          displayer: "Image",
          key: "image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661958fbd2970002c625f79?alt=media&timestamp=1719483639150",
        },
        {
          type: "object",
          displayer: "Button",
          key: "button",
          value: [
            {
              type: "string",
              displayer: "Button Text",
              key: "buttontext",
              value: "READ MORE",
            },
            {
              type: "page",
              displayer: "Button Link",
              key: "buttonurl",
              value: "",
            },
          ],
        },
      ],
    })
    this.addProp({
      type: "object",
      displayer: "Item Right",
      key: "item-right",
      value: [
        {
          type: "boolean",
          displayer: "Visibility",
          key: "visibility",
          value: true,
        },
        {
          type: "string",
          displayer: "Title",
          key: "title",
          value: "SEMPER",
        },
        {
          type: "string",
          displayer: "Description",
          key: "description",
          value: "Feugiat\nScelerisque\nImperdiet",
        },
        {
          type: "image",
          displayer: "Image",
          key: "image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661958fbd2970002c625f78?alt=media&timestamp=1719483639150",
        },
        {
          type: "object",
          displayer: "Button",
          key: "button",
          value: [
            {
              type: "string",
              displayer: "Button Text",
              key: "buttontext",
              value: "READ MORE",
            },
            {
              type: "page",
              displayer: "Button Link",
              key: "buttonurl",
              value: "",
            },
          ],
        },
      ],
    })

    this.addProp({
      type: "object",
      displayer: "Item Right Bottom Left",
      key: "item-right-bottom-left",
      value: [
        {
          type: "boolean",
          displayer: "Visibility",
          key: "visibility",
          value: true,
        },
        {
          type: "string",
          displayer: "Title",
          key: "title",
          value: "SEMPER",
        },
        {
          type: "string",
          displayer: "Description",
          key: "description",
          value: "Adipiscing\nSodales",
        },

        {
          type: "image",
          displayer: "Image",
          key: "image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661958fbd2970002c625f7a?alt=media&timestamp=1719483639150",
        },
        {
          type: "object",
          displayer: "Button",
          key: "button",
          value: [
            {
              type: "string",
              displayer: "Button Text",
              key: "buttontext",
              value: "READ MORE",
            },
            {
              type: "page",
              displayer: "Button Link",
              key: "buttonurl",
              value: "",
            },
          ],
        },
      ],
    })

    this.addProp({
      type: "object",
      displayer: "Item Right Bottom Right",
      key: "item-right-bottom-right",
      value: [
        {
          type: "boolean",
          displayer: "Visibility",
          key: "visibility",
          value: true,
        },
        {
          type: "string",
          displayer: "Title",
          key: "title",
          value: "",
        },
        {
          type: "string",
          displayer: "Description",
          key: "description",
          value: "",
        },

        {
          type: "image",
          displayer: "Image",
          key: "image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661958fbd2970002c625f7b?alt=media&timestamp=1719483639150",
        },
        {
          type: "object",
          displayer: "Button",
          key: "button",
          value: [
            {
              type: "string",
              displayer: "Button Text",
              key: "buttontext",
              value: "",
            },
            {
              type: "page",
              displayer: "Button Link",
              key: "buttonurl",
              value: "",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Header-19";
  }

  render() {

    const itemLeft = this.castToObject<any>("item-left")
    const itemRight = this.castToObject<any>("item-right")
    const itemBottomLeft = this.castToObject<any>("item-right-bottom-left")
    const itemBottomRight = this.castToObject<any>("item-right-bottom-right")

    const isContentVisible = (this.castToString(itemLeft.title) ||
      this.castToString(itemLeft.description) ||
      this.castToString(itemLeft.button.buttontext))

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {itemLeft.visibility &&
            <div className={this.decorateCSS("left")}>
              <div className={this.decorateCSS("item")}>
                {itemLeft.image &&
                  <div className={this.decorateCSS("background-image")}>
                    <img src={itemLeft.image} alt={itemLeft.title} />
                  </div>}
                {isContentVisible &&
                  <div className={`${this.decorateCSS("content")} ${!itemLeft.image && this.decorateCSS("no-bg-img")}`}>
                    {this.castToString(itemLeft.title) && <div className={this.decorateCSS("title")}>{itemLeft.title}</div>}
                    {this.castToString(itemLeft.description) &&
                      <div className={this.decorateCSS("description")}>
                        {itemLeft.description}
                      </div>}
                    {this.castToString(itemLeft.button.buttontext) &&
                      <div>
                        <ComposerLink path={itemLeft.button.buttonurl}>
                          <button className={this.decorateCSS("button")}>
                            {itemLeft.button.buttontext}
                          </button>
                        </ComposerLink>
                      </div>
                    }
                  </div>
                }
              </div>
            </div>
          }

          <div className={this.decorateCSS("right")}>
            {itemRight.visibility &&
              <div className={this.decorateCSS("top")}>
                <div className={this.decorateCSS("item")}>
                  {itemRight.image &&
                    <div className={this.decorateCSS("background-image")}>
                      <img src={itemRight.image} alt={itemRight.title} />
                    </div>}
                  {isContentVisible &&
                    <div className={`${this.decorateCSS("content")} ${!itemRight.image && this.decorateCSS("no-bg-img")}`}>
                      {this.castToString(itemRight.title) &&
                        <div className={this.decorateCSS("title")}>{itemRight.title}</div>}
                      {this.castToString(itemRight.description) &&
                        <div className={this.decorateCSS("description")}>
                          {itemRight.description}
                        </div>}
                      {this.castToString(itemRight.button.buttontext) &&
                        <div>
                          <ComposerLink path={itemRight.button.buttonurl}>
                            <button className={this.decorateCSS("button")}>
                              {itemRight.button.buttontext}
                            </button>
                          </ComposerLink>
                        </div>
                      }
                    </div>
                  }
                </div>
              </div>
            }

            <div className={this.decorateCSS("bottom")}>
              {itemBottomLeft.visibility &&
                <div className={this.decorateCSS("item")}>
                  {itemBottomLeft.image &&
                    <div className={this.decorateCSS("background-image")}>
                      <img src={itemBottomLeft.image} alt={itemBottomLeft.title} />
                    </div>}
                  {isContentVisible &&
                    <div className={`${this.decorateCSS("content")} ${!itemBottomLeft.image && this.decorateCSS("no-bg-img")}`}>
                      {this.castToString(itemBottomLeft.title) &&
                        <div className={this.decorateCSS("title")}>{itemBottomLeft.title}</div>}
                      {this.castToString(itemBottomLeft.description) &&
                        <div className={this.decorateCSS("description")}>
                          {itemBottomLeft.description}
                        </div>}
                      {itemBottomLeft.button.buttontext &&
                        <div>
                          <ComposerLink path={itemBottomLeft.button.buttonurl}>
                            <button className={this.decorateCSS("button")}>
                              {itemBottomLeft.button.buttontext}
                            </button>
                          </ComposerLink>
                        </div>
                      }
                    </div>
                  }
                </div>
              }
              {itemBottomRight.visibility &&
                <div className={this.decorateCSS("item")}>
                  {itemBottomRight.image &&
                    <div className={this.decorateCSS("background-image")}>
                      <img
                        src={itemBottomRight.image}
                        alt={itemBottomRight.title}
                      />
                    </div>}
                  {isContentVisible &&
                    <div className={`${this.decorateCSS("content")} ${!itemBottomRight.image && this.decorateCSS("no-bg-img")}`}>
                      {this.castToString(itemBottomRight.title) &&
                        <div className={this.decorateCSS("title")}>
                          {itemBottomRight.title}
                        </div>}
                      {this.castToString(itemBottomRight.description) &&
                        <div className={this.decorateCSS("description")}>
                          {itemBottomRight.description}
                        </div>}
                      {this.castToString(itemBottomRight.button.buttontext) &&
                        <div>
                          <ComposerLink path={itemBottomRight.button.buttonurl}>
                            <button className={this.decorateCSS("button")}>
                              {itemBottomRight.button.buttontext}
                            </button>
                          </ComposerLink>
                        </div>
                      }
                    </div>
                  }
                </div>
              }
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container >
    );
  }
}

export default Header19;
