import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header7.module.scss";

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
              type: "string",
              key: "pagepath",
              displayer: "Page Path",
              value: "",
            },
            {
              type: "string",
              key: "image",
              displayer: "Image",
              value:
                "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/t-showcase-img-3-scaled.jpg",
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
              type: "string",
              key: "pagepath",
              displayer: "Page Path",
              value: "",
            },
            {
              type: "string",
              key: "image",
              displayer: "Image",
              value:
                "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/t-showcase-img-6.jpeg",
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
              type: "string",
              key: "pagepath",
              displayer: "Page Path",
              value: "",
            },
            {
              type: "string",
              key: "image",
              displayer: "Image",
              value:
                "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/t-showcase-img-1-scaled.jpg",
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
              type: "string",
              key: "pagepath",
              displayer: "Page Path",
              value: "",
            },
            {
              type: "string",
              key: "image",
              displayer: "Image",
              value:
                "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/t-showcase-img-4.jpeg",
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
              type: "string",
              key: "pagepath",
              displayer: "Page Path",
              value: "",
            },
            {
              type: "string",
              key: "image",
              displayer: "Image",
              value:
                "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/t-showcase-img-2-scaled.jpg",
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
              type: "string",
              key: "pagepath",
              displayer: "Page Path",
              value: "",
            },
            {
              type: "string",
              key: "image",
              displayer: "Image",
              value:
                "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/t-showcase-img-5.jpeg",
            },
          ],
        },
      ],
    });
    this.setComponentState("hover", 0);
  }
  getName(): string {
    return "Header 7";
  }
  render() {
    const handleMouseOver = (index: any) => {
      this.setComponentState("hover", index);
    };

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("container")}>
            {this.castToObject<ISliderData[]>("pages").map(
              (item: ISliderData, index: number) => (
                <div
                  key={`index-${index}`}
                  className={`${this.decorateCSS("page")} `}
                >
                  <ComposerLink path={item.pagepath}>
                    <h2 onMouseOver={() => handleMouseOver(index)}>
                      {item.title}
                    </h2>
                  </ComposerLink>
                  <img
                    src={item.image}
                    className={`${this.decorateCSS("image")} ${
                      this.getComponentState("hover") === index
                        ? this.decorateCSS(`active`)
                        : ""
                    }`}
                    alt=""
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Header7;
