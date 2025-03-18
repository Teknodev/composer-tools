import * as React from "react";
import styles from "./image-gallery9.module.scss";
import { BaseImageGallery } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";

interface Card {
  image: string;
  title: string;
  subtitle: string;
  url: string;
}
class ImageGallery9 extends BaseImageGallery {
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
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669dfff22f8a5b002ce60115?alt=media",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Dubai",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Mankua Honey",
            },
            {
              type: "page",
              key: "url",
              displayer: "Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e003a2f8a5b002ce6012d?alt=media",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Ron Mcclenny",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Architecture, Interior",
            },
            {
              type: "page",
              key: "url",
              displayer: "Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e005b2f8a5b002ce60139?alt=media",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Curitiba Brasil",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Kemia Industrial Factory",
            },
            {
              type: "page",
              key: "url",
              displayer: "Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e00772f8a5b002ce60145?alt=media",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Architecture",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Red Sculpture",
            },
            {
              type: "page",
              key: "url",
              displayer: "Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c243bd2970002c628c71?alt=media&timestamp=1719564433797",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Creme",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Women Bag",
            },
            {
              type: "page",
              key: "url",
              displayer: "Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e00ba2f8a5b002ce6015d?alt=media",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Dublin",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Astronaut, Portraits",
            },
            {
              type: "page",
              key: "url",
              displayer: "Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e00d52f8a5b002ce60169?alt=media",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Annie",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Portraits, Giraffe",
            },
            {
              type: "page",
              key: "url",
              displayer: "Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e00f72f8a5b002ce60175?alt=media",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Ulitsa",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Mirror, Portraits",
            },
            {
              type: "page",
              key: "url",
              displayer: "Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e01132f8a5b002ce60181?alt=media",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Brabant",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "By The Cover",
            },
            {
              type: "page",
              key: "url",
              displayer: "Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://ruizarch-react.vercel.app/img/covers/5.jpg",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Interior",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Smart House By Molekule",
            },
            {
              type: "page",
              key: "url",
              displayer: "Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e00122f8a5b002ce60121?alt=media",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Snowy Swiss",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Interior Design Studio",
            },
            {
              type: "page",
              key: "url",
              displayer: "Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e01732f8a5b002ce6018d?alt=media",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Design",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Green, Portraits",
            },
            {
              type: "page",
              key: "url",
              displayer: "Link",
              value: "",
            },
          ],
        },
      ],
    });
  }

  static getName(): string {
    return "Image Gallery 9";
  }

  render() {
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("image-container")}>
            {this.castToObject<Card[]>("cards").map(
              (item: Card, indexCards: number) => {
                let isLarge = false;

                if (indexCards < 7) {
                  const patternIndex = indexCards % 4;
                  isLarge = patternIndex === 0 || patternIndex === 3;
                } else {
                  const secondPatternIndex = (indexCards - 7) % 3;
                  isLarge = secondPatternIndex === 2;
                }

                return (
                  <div
                    key={indexCards}
                    className={`${this.decorateCSS("card")} ${
                      isLarge ? this.decorateCSS("large") : ""
                    }`}
                  >
                    <div className={this.decorateCSS("image")}>
                      {(this.castToString(item.title) ||
                        this.castToString(item.subtitle) ||
                        item.image) && (
                        <div className={this.decorateCSS("image")}>
                          {item.image && (
                            <img
                              src={item.image}
                              alt={item.image}
                              className={this.decorateCSS("image")}
                            />
                          )}
                          {(this.castToString(item.title) ||
                            this.castToString(item.subtitle)) && (
                            <div className={this.decorateCSS("category")}>
                              {this.castToString(item.title) && (
                                <div className={this.decorateCSS("title")}>
                                  {item.title}
                                </div>
                              )}
                              <ComposerLink path={item.url}>
                                {this.castToString(item.subtitle) && (
                                  <div className={this.decorateCSS("subtitle")}>
                                    {item.subtitle}
                                  </div>
                                )}
                              </ComposerLink>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default ImageGallery9;
