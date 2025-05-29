import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header7.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type ISliderData = {
  title: string;
  image: string;
  pagepath: string;
};

class Header7 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      key: "pages",
      displayer: "Page",
      value: [
        {
          type: "object",
          key: "page1",
          displayer: "Page-1",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Black & White II",
            },
            {
              type: "page",
              key: "pagepath",
              displayer: "Page Path",
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/68380c6357d0a6002b5d5f9d?alt=media",
            },
          ],
        },
        {
          type: "object",
          key: "page2",
          displayer: "Page",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Balance",
            },
            {
              type: "page",
              key: "pagepath",
              displayer: "Page Path",
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/68380d3057d0a6002b5d5faf?alt=media",
            },
          ],
        },
        {
          type: "object",
          key: "page3",
          displayer: "Page",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "The Village",
            },
            {
              type: "page",
              key: "pagepath",
              displayer: "Page Path",
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/68380dcb57d0a6002b5d5fc0?alt=media",
            },
          ],
        },
        {
          type: "object",
          key: "page4",
          displayer: "Page",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Wonderland",
            },
            {
              type: "page",
              key: "pagepath",
              displayer: "Page Path",
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/68380fd557d0a6002b5d5fe4?alt=media",
            },
          ],
        },
        {
          type: "object",
          key: "page5",
          displayer: "Page",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Progressive",
            },
            {
              type: "page",
              key: "pagepath",
              displayer: "Page Path",
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/683810b257d0a6002b5d6009?alt=media",
            },
          ],
        },
        {
          type: "object",
          key: "page6",
          displayer: "Page",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Editorial Illustration",
            },
            {
              type: "page",
              key: "pagepath",
              displayer: "Page Path",
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/683811ca57d0a6002b5d61d5?alt=media",
            },
          ],
        },
      ],
    });
    this.setComponentState("active_image", this.castToObject<ISliderData[]>("pages")[0].image);
  }
  static getName(): string {
    return "Header 7";
  }
  render() {
    const handleMouseOver = (image: string) => {
      this.setComponentState("active_image", image);
    };

    const image = this.getComponentState("active_image");

    return (
      <Base.Container className={this.decorateCSS("container")} isFull={true}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={`${this.decorateCSS("content")} ${!image && this.decorateCSS("without-image")}`}>
            <div className={this.decorateCSS("items")}>
              {this.castToObject<ISliderData[]>("pages").map((item: ISliderData, index: number) => (
                <ComposerLink path={item.pagepath} key={index}>
                  <h2
                    onMouseOver={() => handleMouseOver(item.image)}
                    className={this.decorateCSS("text")}
                  >
                    {item.title}
                  </h2>
                </ComposerLink>
              ))}
            </div>
            {image && (
              <img src={image} className={this.decorateCSS("image")} alt="header-7" />
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Header7;
