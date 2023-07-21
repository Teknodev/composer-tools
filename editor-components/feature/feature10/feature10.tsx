import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature10.module.scss";

type listedListItem = {
  listedItem: string;
};
type Listed = {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  link: string;
  listedListItem: listedListItem[];
};
class Feature10 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      key: "listed-card",
      displayer: "Listed Card",
      value: [
        {
          type: "object",
          key: "listed",
          displayer: "Listed",
          value: [
            {
              type: "string",
              key: "title",
              value: "Vision",
              displayer: "Title",
            },
            {
              type: "string",
              key: "description",
              value: "Having a clear vision is essential for achieving success, as it provides direction and purpose, and helps to prioritize goals and actions.",
              displayer: "Description",
            },
            {
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436ac9768c3c2002cd2f948?alt=media&timestamp=1682585227355",
              displayer: "Image",
            },
            {
              type: "string",
              key: "buttonText",
              value: "LEARN MORE",
              displayer: "Button Text",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
            {
              type: "array",
              key: "listedListItem",
              displayer: "Listed Item",
              value: [
                {
                  type: "object",
                  key: "listItem",
                  displayer: "List Item",
                  value: [
                    {
                      type: "string",
                      key: "listedItem",
                      value: "Vision",
                      displayer: "Item",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "listed",
          displayer: "Listed",
          value: [
            {
              type: "string",
              key: "title",
              value: "Top 5 Must-Visit Tourist Attractions in Paris",
              displayer: "Title",
            },
            {
              type: "string",
              key: "description",
              value:
                "Paris is one of the most popular tourist destinations in the world, and for good reason. In this article, we'll take a look at the top 5 must-visit tourist attractions in Paris. From the iconic Eiffel Tower to the stunning Palace of Versailles, these attractions offer a glimpse into the rich history and culture of this beautiful city. ",
              displayer: "Description",
            },
            {
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/644a6ed1f72de2002caaa496?alt=media&timestamp=1682599647063",
              displayer: "Image",
            },
            {
              type: "string",
              key: "buttonText",
              value: "LEARN MORE",
              displayer: "Button Text",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
            {
              type: "array",
              key: "listedListItem",
              displayer: "Listed Item",
              value: [
                {
                  type: "object",
                  key: "listItem",
                  displayer: "List Item",
                  value: [
                    {
                      type: "string",
                      key: "listedItem",
                      value: "Must visit Paris",
                      displayer: "Item",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "listed",
          displayer: "Listed",
          value: [
            {
              type: "string",
              key: "title",
              value: "The Power of Positive Thinking",
              displayer: "Title",
            },
            {
              type: "string",
              key: "description",
              value: "Positive thinking is a mindset that can have a profound impact on one's life. When we focus on the good in every situation, we are able to approach challenges with a sense of optimism and resilience.",
              displayer: "Description",
            },
            {
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/644a6ed1f72de2002caaa495?alt=media&timestamp=1682599647064",
              displayer: "Image",
            },
            {
              type: "string",
              key: "buttonText",
              value: "LEARN MORE",
              displayer: "Button Text",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
            {
              type: "array",
              key: "listedListItem",
              displayer: "Listed Item",
              value: [
                {
                  type: "object",
                  key: "listItem",
                  displayer: "List Item",
                  value: [
                    {
                      type: "string",
                      key: "listedItem",
                      value: "Positive thinking",
                      displayer: "Item",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Feature 10";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {this.castToObject<Listed[]>("listed-card").map(
              (listed: any, index: number) => (
                <div key={index} className={this.decorateCSS("listed")}>
                  <img
                    className={this.decorateCSS("image")}
                    src={listed.image}
                  ></img>
                  <h3 className={this.decorateCSS("title")}>{listed.title}</h3>
                  <p className={this.decorateCSS("long-text")}>
                    {listed.description}
                  </p>

                  <ComposerLink path={listed.link}>
                    <span className={this.decorateCSS("button")}>
                      {listed.buttonText}
                    </span>
                  </ComposerLink>
                  <ul className={this.decorateCSS("list")}>
                    {listed.listedListItem.map(
                      (tableData: listedListItem, index: number) => {
                        return (
                          <li
                            className={this.decorateCSS("list-item")}
                            key={index}
                          >
                            {tableData.listedItem}
                          </li>
                        );
                      }
                    )}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Feature10;

