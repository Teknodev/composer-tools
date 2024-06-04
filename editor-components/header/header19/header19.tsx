import * as React from "react";
import styles from "./header19.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

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

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {itemLeft.visibility ? (
            <div className={this.decorateCSS("left")}>
              <div className={this.decorateCSS("item")}>
                <div className={this.decorateCSS("background-image")}>
                  <img src={itemLeft.image} alt={itemLeft.title} />
                </div>
                <div className={this.decorateCSS("content")}>
                  <div className={this.decorateCSS("title")}>{itemLeft.title}</div>
                  <div className={this.decorateCSS("description")}>
                    {itemLeft.description}
                  </div>
                  {itemLeft.button.buttontext ? (
                    <div>
                      <ComposerLink path={itemLeft.button.buttonurl}>
                        <button className={this.decorateCSS("button")}>
                          {itemLeft.button.buttontext}
                        </button>
                      </ComposerLink>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ) : null}

          <div className={this.decorateCSS("right")}>
            {itemRight.visibility ? (
              <div className={this.decorateCSS("top")}>
                <div className={this.decorateCSS("item")}>
                  <div className={this.decorateCSS("background-image")}>
                    <img src={itemRight.image} alt={itemRight.title} />
                  </div>
                  <div className={this.decorateCSS("content")}>
                    <div className={this.decorateCSS("title")}>{itemRight.title}</div>
                    <div className={this.decorateCSS("description")}>
                      {itemRight.description}
                    </div>
                    {itemRight.button.buttontext ? (
                      <div>
                        <ComposerLink path={itemRight.button.buttonurl}>
                          <button className={this.decorateCSS("button")}>
                            {itemRight.button.buttontext}
                          </button>
                        </ComposerLink>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            ) : null}

            <div className={this.decorateCSS("bottom")}>
              {itemBottomLeft.visibility ? (
                <div className={this.decorateCSS("item")}>
                  <div className={this.decorateCSS("background-image")}>
                    <img src={itemBottomLeft.image} alt={itemBottomLeft.title} />
                  </div>
                  <div className={this.decorateCSS("content")}>
                    <div className={this.decorateCSS("title")}>{itemBottomLeft.title}</div>
                    <div className={this.decorateCSS("description")}>
                      {itemBottomLeft.description}
                    </div>
                    {itemBottomLeft.button.buttontext ? (
                      <div>
                        <ComposerLink path={itemBottomLeft.button.buttonurl}>
                          <button className={this.decorateCSS("button")}>
                            {itemBottomLeft.button.buttontext}
                          </button>
                        </ComposerLink>
                      </div>
                    ) : null}
                  </div>
                </div>
              ) : null}
              {itemBottomRight.visibility ? (
                <div className={this.decorateCSS("item")}>
                  <div className={this.decorateCSS("background-image")}>
                    <img
                      src={itemBottomRight.image}
                      alt={itemBottomRight.title}
                    />
                  </div>
                  <div className={this.decorateCSS("content")}>
                    <div className={this.decorateCSS("title")}>
                      {itemBottomRight.title}
                    </div>
                    <div className={this.decorateCSS("description")}>
                      {itemBottomRight.description}
                    </div>
                    {itemBottomRight.button.buttontext ? (
                      <div>
                        <ComposerLink
                          path={
                            itemBottomRight.button.buttonurl
                          }
                        >
                          <button className={this.decorateCSS("button")}>
                            {
                              itemBottomRight.button.buttontext
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
