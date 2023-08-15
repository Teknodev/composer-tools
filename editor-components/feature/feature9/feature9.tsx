import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature9.module.scss";

type Horizontals = {
  title: string;
  description: string;
  buttonText: string;
  image: string;
  link: string;
};
class Feature9 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      key: "horizontal",
      displayer: "Card",
      value: [
        {
          type: "object",
          key: "horizontals",
          displayer: "Horizontal",
          value: [
            {
              type: "string",
              key: "title",
              value: "5 Essential Tips for Starting a Small Business",
              displayer: "Title",
            },
            {
              type: "string",
              key: "description",
              value:
                "Starting a small business can be both exciting and challenging. If you're thinking about starting your own business, check out these 5 essential tips that can help you get started on the right foot.",
              displayer: "Description",
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
              displayer: "Button Link",
              value: "",
            },
            {
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/644a673cf72de2002caaa361?alt=media&timestamp=1682597705111",
              displayer: "Image",
            },
          ],
        },
        {
          type: "object",
          key: "horizontals",
          displayer: "Horizontal",
          value: [
            {
              type: "string",
              key: "title",
              value: "Top 5 Benefits of Yoga for Mind and Body",
              displayer: "Title",
            },
            {
              type: "string",
              key: "description",
              value:
                "Yoga is more than just a physical exercise - it's a practice that can benefit both your mind and body. In this article, we'll explore the top 5 benefits of yoga, including improved flexibility.",
              displayer: "Description",
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
              displayer: "Button Link",
              value: "",
            },
            {
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/644a673cf72de2002caaa360?alt=media&timestamp=1682597705111",
              displayer: "Image",
            },
          ],
        },
        {
          type: "object",
          key: "horizontals",
          displayer: "Horizontal",
          value: [
            {
              type: "string",
              key: "title",
              value: "Top 5 Destinations for a Winter Getaway",
              displayer: "Title",
            },
            {
              type: "string",
              key: "description",
              value:
                "Are you dreaming of a winter getaway? Look no further than these top 5 destinations for the perfect winter escape. From hitting the slopes in the Rocky Mountains for everyone.",
              displayer: "Description",
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
              displayer: "Button Link",
              value: "",
            },
            {
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/644a673cf72de2002caaa35f?alt=media&timestamp=1682597705111",
              displayer: "Image",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Feature 9";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {this.castToObject<Horizontals[]>("horizontal").map(
              (horizontals: any, index: number) => (
                <div className={this.decorateCSS("horizontal")} key={index}>
                  <img
                    className={this.decorateCSS("image")}
                    src={horizontals.image}
                  ></img>
                  <div className={this.decorateCSS("block")}>
                    <h3 className={this.decorateCSS("title")}>
                      {horizontals.title}
                    </h3>
                    <p className={this.decorateCSS("title-description")}>
                      {horizontals.description}
                    </p>
                    <ComposerLink path={horizontals.link}>
                      <span className={this.decorateCSS("button")}>
                        {horizontals.buttonText}
                      </span>
                    </ComposerLink>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Feature9;
