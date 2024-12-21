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
          value: "Porta Consectetur Imperdiet Frigilla",
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
      displayer: "Item Right Top",
      key: "item-right-top",
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
          value: "Feugiat Scelerisque Imperdiet",
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
          value: "Adipiscing Sodales",
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
    const itemRightTop = this.castToObject<any>("item-right-top")
    const itemBottomLeft = this.castToObject<any>("item-right-bottom-left")
    const itemBottomRight = this.castToObject<any>("item-right-bottom-right")

    const items = [
      { name: "Left", data: itemLeft },
      { name: "RightTop", data: itemRightTop },
      { name: "BottomLeft", data: itemBottomLeft },
      { name: "BottomRight", data: itemBottomRight },
    ];

    let visibleContents: any = {}

    items.forEach(({ name, data }) => {
      const isVisible = Boolean(
        this.castToString(data.title) ||
        this.castToString(data.description) ||
        this.castToString(data.button?.buttontext)
      );
      visibleContents[`isContentVisible${name}`] = isVisible;
    });

    const isContentVisibleLeft = visibleContents["isContentVisibleLeft"];
    const isContentVisibleRightTop = visibleContents["isContentVisibleRightTop"];
    const isContentVisibleBottomLeft = visibleContents["isContentVisibleBottomLeft"];
    const isContentVisibleBottomRight = visibleContents["isContentVisibleBottomRight"];

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {itemLeft.visibility &&
            <div className={this.decorateCSS("left")}>
              <div className={this.decorateCSS("item")}>
                {itemLeft.image &&
                  <div className={this.decorateCSS("background-image")}>
                    <img src={itemLeft.image} alt={itemLeft.title} className={this.decorateCSS("image")} />
                  </div>}
                {isContentVisibleLeft &&
                  <div className={`${this.decorateCSS("content")} ${!itemLeft.image && this.decorateCSS("no-bg-img")}`}>
                    {this.castToString(itemLeft.title) && <div className={this.decorateCSS("title")}>{itemLeft.title}</div>}
                    {this.castToString(itemLeft.description) &&
                      <div className={this.decorateCSS("description")}>
                        {itemLeft.description}
                      </div>}
                    {this.castToString(itemLeft.button.buttontext) &&
                      <ComposerLink path={itemLeft.button.buttonurl}>
                        <Base.Button className={this.decorateCSS("button")}>
                          {itemLeft.button.buttontext}
                        </Base.Button>
                      </ComposerLink>
                    }
                  </div>
                }
              </div>
            </div>
          }

          {(itemRightTop.visibility ||
            itemBottomLeft.visibility ||
            itemBottomRight.visibility) &&
            <div className={this.decorateCSS("right")}>
              {itemRightTop.visibility &&
                <div className={this.decorateCSS("top")}>
                  <div className={this.decorateCSS("item")}>
                    {itemRightTop.image &&
                      <div className={this.decorateCSS("background-image")}>
                        <img src={itemRightTop.image} alt={itemRightTop.title} className={this.decorateCSS("image")} />
                      </div>}
                    {isContentVisibleRightTop &&
                      <div className={`${this.decorateCSS("content")} ${!itemRightTop.image && this.decorateCSS("no-bg-img")}`}>
                        {this.castToString(itemRightTop.title) &&
                          <div className={this.decorateCSS("title")}>{itemRightTop.title}</div>}
                        {this.castToString(itemRightTop.description) &&
                          <div className={this.decorateCSS("description")}>
                            {itemRightTop.description}
                          </div>}
                        {this.castToString(itemRightTop.button.buttontext) &&
                          <div>
                            <ComposerLink path={itemRightTop.button.buttonurl}>
                              <Base.Button className={this.decorateCSS("button")}>
                                {itemRightTop.button.buttontext}
                              </Base.Button>
                            </ComposerLink>
                          </div>
                        }
                      </div>
                    }
                  </div>
                </div>
              }

              {(itemBottomLeft.visibility || itemBottomRight.visibility) &&
                <div className={this.decorateCSS("bottom")}>
                  {itemBottomLeft.visibility &&
                    <div className={`${this.decorateCSS("item")} ${this.decorateCSS("bottom-left")}`}>
                      {itemBottomLeft.image &&
                        <div className={this.decorateCSS("background-image")}>
                          <img src={itemBottomLeft.image} alt={itemBottomLeft.title} className={this.decorateCSS("image")} />
                        </div>}
                      {isContentVisibleBottomLeft &&
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
                                <Base.Button className={this.decorateCSS("button")}>
                                  {itemBottomLeft.button.buttontext}
                                </Base.Button>
                              </ComposerLink>
                            </div>
                          }
                        </div>
                      }
                    </div>
                  }
                  {itemBottomRight.visibility &&
                    <div className={`${this.decorateCSS("item")} ${this.decorateCSS("bottom-right")}`}>
                      {itemBottomRight.image &&
                        <div className={this.decorateCSS("background-image")}>
                          <img src={itemBottomRight.image} alt={itemBottomRight.title} className={this.decorateCSS("image")} />
                        </div>}
                      {isContentVisibleBottomRight &&
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
                                <Base.Button className={this.decorateCSS("button")}>
                                  {itemBottomRight.button.buttontext}
                                </Base.Button>
                              </ComposerLink>
                            </div>
                          }
                        </div>
                      }
                    </div>
                  }
                </div>}
            </div>}
        </Base.MaxContent>
      </Base.Container >
    );
  }
}

export default Header19;
