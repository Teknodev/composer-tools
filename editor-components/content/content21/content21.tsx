import * as React from "react";
import styles from "./content21.module.scss";
import { BaseContent } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";


interface Card {
  image: string;
  title: string;
  url: string;
}
class ContentComponent21 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Cards",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "card",
          value: [
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: ""
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "PORTRAIT",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c243bd2970002c628c76?alt=media&timestamp=1719564433797"
            }
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: ""
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "ARCHITECTURE",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c243bd2970002c628c79?alt=media&timestamp=1719564433797"
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: ""
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "COMMERCIAL",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c243bd2970002c628c75?alt=media&timestamp=1719564433797"
            }
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: ""
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "WEDDING",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c243bd2970002c628c75?alt=media&timestamp=1719564433797"
            }
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: ""
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "EDITORİAL",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c243bd2970002c628c75?alt=media&timestamp=1719564433797"
            }
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: ""
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "FOOD&BEVERAGE",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c243bd2970002c628c72?alt=media&timestamp=1719564433797"
            }
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: ""
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "EVENTS",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c243bd2970002c628c74?alt=media&timestamp=1719564433797"
            }
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: ""
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "CELEBRİTY",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c243bd2970002c628c78?alt=media&timestamp=1719564433797"
            }
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: ""
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "FASHION",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c243bd2970002c628c71?alt=media&timestamp=1719564433797"
            }
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: ""
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "DESIGN",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c243bd2970002c628c70?alt=media&timestamp=1719564433797"
            }
          ],
        },
      ],
    });
    this.addProp({
      type: "number",
      key: "reverse",
      displayer: "Item Count in a Row",
      value: 4,
      max: 4
    });

  }

  getName(): string {
    return "Content-21";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("image-container")}>
            {this.castToObject<Card[]>("cards").map(
              (item: Card, indexCards: number) => {
                return (
                  <div
                    key={indexCards}
                    className={this.decorateCSS("card")}
                    style={{ width: 90 / this.getPropValue("reverse") + "%" }}
                  >
                    <ComposerLink path={item.url} isFullWidth={true}>

                      {item.image && <img
                        src={item.image}
                        alt="category"
                        className={this.decorateCSS("image")}
                      />}
                      <div className={`${this.decorateCSS("category")} ${!item.image && this.decorateCSS("text-visible")}`}>
                        <h2 className={this.decorateCSS("title")}>{item.title}</h2>

                      </div>
                    </ComposerLink>

                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ContentComponent21;
