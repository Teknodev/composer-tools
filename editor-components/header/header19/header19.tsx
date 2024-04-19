import * as React from "react";
import styles from "./header19.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class Header19 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "object",
      displayer: "Items",
      key: "items",
      value: [
        {
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64edce7d057bdf002c2ad87b?alt=media&timestamp=1693306471422",
            },
            {
              type: "object",
              displayer: "Button",
              key: "button",
              value: [
                {
                  type: "string",
                  displayer: "Button Text",
                  key: "button-text",
                  value: "READ MORE",
                },
                {
                  type: "page",
                  displayer: "Button Link",
                  key: "button-url",
                  value: "",
                },
              ],
            },
          ],
        },
        {
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64edce7d057bdf002c2ad87a?alt=media&timestamp=1693306471422",
            },
            {
              type: "object",
              displayer: "Button",
              key: "button",
              value: [
                {
                  type: "string",
                  displayer: "Button Text",
                  key: "button-text",
                  value: "READ MORE",
                },
                {
                  type: "page",
                  displayer: "Button Link",
                  key: "button-url",
                  value: "",
                },
              ],
            },
          ],
        },
        {
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
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64edce7d057bdf002c2ad878?alt=media&timestamp=1693306471422",
            },
            {
              type: "object",
              displayer: "Button",
              key: "button",
              value: [
                {
                  type: "string",
                  displayer: "Button Text",
                  key: "button-text",
                  value: "READ MORE",
                },
                {
                  type: "page",
                  displayer: "Button Link",
                  key: "button-url",
                  value: "",
                },
              ],
            },
          ],
        },
      ],
    });

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
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64edce7d057bdf002c2ad879?alt=media&timestamp=1693306471422",
        },
        {
          type: "object",
          displayer: "Button",
          key: "button",
          value: [
            {
              type: "string",
              displayer: "Button Text",
              key: "button-text",
              value: "",
            },
            {
              type: "page",
              displayer: "Button Link",
              key: "button-url",
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
    let items: any = this.castToObject("items");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {items[0].visibility ? (
            <div className={this.decorateCSS("left")}>
              <div className={this.decorateCSS("item")}>
                <div className={this.decorateCSS("background-image")}>
                  <img src={items[0].image} alt={items[0].title} />
                </div>
                <div className={this.decorateCSS("content")}>
                  <div className={this.decorateCSS("title")}>{items[0].title}</div>
                  <div className={this.decorateCSS("description")}>
                    {items[0].description}
                  </div>
                  {items[0].button[0].value ? (
                    <div>
                      <ComposerLink path={items[0].button[1].value}>
                        <button className={this.decorateCSS("button")}>
                          {items[0].button[0].value}
                        </button>
                      </ComposerLink>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ) : null}

          <div className={this.decorateCSS("right")}>
            {items[1].visibility ? (
              <div className={this.decorateCSS("top")}>
                <div className={this.decorateCSS("item")}>
                  <div className={this.decorateCSS("background-image")}>
                    <img src={items[1].image} alt={items[1].title} />
                  </div>
                  <div className={this.decorateCSS("content")}>
                    <div className={this.decorateCSS("title")}>{items[1].title}</div>
                    <div className={this.decorateCSS("description")}>
                      {items[1].description}
                    </div>
                    {items[1].button[0].value ? (
                      <div>
                        <ComposerLink path={items[1].button[1].value}>
                          <button className={this.decorateCSS("button")}>
                            {items[1].button[0].value}
                          </button>
                        </ComposerLink>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            ) : null}

            <div className={this.decorateCSS("bottom")}>
              {items[2].visibility ? (
                <div className={this.decorateCSS("item")}>
                  <div className={this.decorateCSS("background-image")}>
                    <img src={items[2].image} alt={items[2].title} />
                  </div>
                  <div className={this.decorateCSS("content")}>
                    <div className={this.decorateCSS("title")}>{items[2].title}</div>
                    <div className={this.decorateCSS("description")}>
                      {items[2].description}
                    </div>
                    {items[2].button[0].value ? (
                      <div>
                        <ComposerLink path={items[2].button[1].value}>
                          <button className={this.decorateCSS("button")}>
                            {items[2].button[0].value}
                          </button>
                        </ComposerLink>
                      </div>
                    ) : null}
                  </div>
                </div>
              ) : null}
              {this.getPropValue("item-right-bottom-right")[0].value ? (
                <div className={this.decorateCSS("item")}>
                  <div className={this.decorateCSS("background-image")}>
                    <img
                      src={this.getPropValue("item-right-bottom-right")[3].value}
                      alt={this.getPropValue("item-right-bottom-right")[1].value}
                    />
                  </div>
                  <div className={this.decorateCSS("content")}>
                    <div className={this.decorateCSS("title")}>
                      {this.getPropValue("item-right-bottom-right")[1].value}
                    </div>
                    <div className={this.decorateCSS("description")}>
                      {this.getPropValue("item-right-bottom-right")[2].value}
                    </div>
                    {this.getPropValue("item-right-bottom-right")[4].value[0].value ? (
                      <div>
                        <ComposerLink
                          path={
                            this.getPropValue("item-right-bottom-right")[4].value[1].value
                          }
                        >
                          <button className={this.decorateCSS("button")}>
                            {
                              this.getPropValue("item-right-bottom-right")[4].value[0]
                                .value
                            }
                          </button>
                        </ComposerLink>
                      </div>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header19;
