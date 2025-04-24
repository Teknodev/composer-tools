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
                "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-16.jpg",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Drawing",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Moilee Corporal",
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
                "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-17.jpg",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Graphics",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "DITNB Dectruit",
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
                "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-21.jpg",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Drawing",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Design Videveste",
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
                "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-19.jpg",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Sports",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Man Shoes",
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
                "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-20.jpg",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Graphics",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Your Best Skin",
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
                "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-24.jpg",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Graphics",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Japan Letter",
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
                "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-22.jpg",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "GraphicsSports",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Yellow Architecture",
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
                "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-23.jpg",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Iconography",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Model Arbus Goldin",
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
                "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-18.jpg",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Iconography",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Intro to Data",
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
                "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-25.jpg",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Iconography",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Upp Design",
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
                "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-26.jpg",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "GraphicsSports",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Sample Box",
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
                "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-27.jpg",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Drawing",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Concrete Remedy",
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
    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["underline", "slideUp"],
      additionalParams: {
        selectItems: ["underline", "slideUp"],
      },
    });
  }

  static getName(): string {
    return "Image Gallery 9";
  }

  render() {
    const imageExist = this.getPropValue("image");
    return (
      <Base.Container className={this.decorateCSS("container")} isFull="true">
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
                    data-animation={this.getPropValue("hoverAnimation").join(
                      " "
                    )}
                  >
                    <div
                      className={`${this.decorateCSS("image")} ${
                        !imageExist && this.decorateCSS("noImage")
                      }`}
                    >
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
