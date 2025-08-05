import * as React from "react";
import { LogoClouds } from "../../EditorComponent";
import styles from "./logo-comp8.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";

type TTextImageItem = {
  text: string;
  image: string;
  link: string;
};

class LogoComp8Page extends LogoClouds {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "text-image-items",
      displayer: "Text & Image Items",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Game Design",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6890c667d3784c002c8238f3?alt=media&timestamp=1754318447679",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Art Direction",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6890c667d3784c002c8238f3?alt=media&timestamp=1754318447679",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Multiplatform development",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6890c667d3784c002c8238f3?alt=media&timestamp=1754318447679",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Game development",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6890c667d3784c002c8238f3?alt=media&timestamp=1754318447679",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
          ],
        },
      ],
    });
  }

  static getName(): string {
    return "Logo Cloud 8";
  }

  render() {
    const originalItemsArray = this.castToObject<TTextImageItem[]>("text-image-items");
    let lineOfItems = [];
    for (let x = 0; x < Math.round(14 / originalItemsArray.length); x++) {
      lineOfItems.push(...originalItemsArray);
    }
    const items = [...lineOfItems, ...lineOfItems];

    return (
      <Base.Container
        isFull={true}
        className={this.decorateCSS("container")}
      >
        {items.length > 0 && (
          <div className={this.decorateCSS("gallery")}>
            <div
              className={this.decorateCSS("items-container")}
              style={{ animationDuration: `${items.length * 4}s` }}
            >
              {items.map((item: TTextImageItem, index: number) => (
                <ComposerLink path={item.link}>
                  <div className={this.decorateCSS("item-child")}>
                   {item.text && <span className={this.decorateCSS("text")}>
                      {item.text}
                    </span>}
                    {item.image && <div className={this.decorateCSS("image")}>
                      <img 
                        src={item.image}
                        alt={item.text}
                        className={this.decorateCSS("image-element")}
                      />
                    </div>}
                  </div>
                </ComposerLink>
              ))}
            </div>
          </div>
        )}
      </Base.Container>
    );
  }
}

export default LogoComp8Page; 