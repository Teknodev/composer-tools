import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature5.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class Feature5 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Life Hacks",
    });

    this.addProp({
      type: "object",
      key: "row1",
      displayer: "first-row",
      value: [
        {
          type: "image",
          key: "left_image",
          displayer: "Left Image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a4c2642f8a5b002ce6c032?alt=media",
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "The 10 Best Apps for Planning Your Next Trip",
        },
        {
          type: "page",
          key: "link",
          displayer: "link",
          value: "",
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "row2",
      displayer: "second-row",
      value: [
        {
          type: "object",
          key: "left_item",
          displayer: "Description and Link",
          value: [
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Newspaper is not only convenient to use, but it also uses very low resources and loads extremely fast. Welcome to the future!",
            },
            {
              type: "string",
              displayer: "Button Text",
              key: "button_text",
              value: "EXPLORE",
            },
            {
              type: "page",
              key: "link",
              displayer: "link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "right_item",
          displayer: "Title and Image",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Don't Let Your Summer Hard Work Go to Waste",
            },
            {
              type: "image",
              key: "image",
              displayer: "Right Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a4c2a22f8a5b002ce6c03e?alt=media",
            },
            {
              type: "page",
              key: "link",
              displayer: "link",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "row3",
      displayer: "third-row",
      value: [
        {
          type: "object",
          key: "image_and_subtitle_1",
          displayer: "Image and Subtitle 1",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Left Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a4c2cc2f8a5b002ce6c04a?alt=media",
            },
            {
              type: "string",
              key: "sub_title",
              displayer: "Sub-Title",
              value: "Girl's Guide: Tricks to Save Time in the Morning",
            },
            {
              type: "page",
              key: "link",
              displayer: "link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "image_and_subtitle_2",
          displayer: "Image and Subtitle 2",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Middle Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a4c2ea2f8a5b002ce6c056?alt=media",
            },
            {
              type: "string",
              key: "sub_title",
              displayer: "Sub-Title",
              value: "Motivation Monday: Only 3 Days Left of Summer",
            },
            {
              type: "page",
              key: "link",
              displayer: "link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "image_and_subtitle_3",
          displayer: "Image and Subtitle 3",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Right Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a4c3032f8a5b002ce6c062?alt=media",
            },
            {
              type: "string",
              key: "sub_title",
              displayer: "Sub-Title",
              value: "Five Rules For a Long, Healthy and Happy Life",
            },
            {
              type: "page",
              key: "link",
              displayer: "link",
              value: "",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Feature 5";
  }

  render() {
    const title = this.getPropValue("title", { as_string: true });
    const row1 = this.castToObject<{
      left_image: string;
      title: JSX.Element;
      link: string;
    }>("row1");
    const row2 = this.castToObject<{
      left_item: {
        description: JSX.Element;
        button_text: JSX.Element;
        link: string;
      };
      right_item: {
        text: JSX.Element;
        image: string;
        link: string;
      };
    }>("row2");

    const row3 = this.castToObject<{
      image_and_subtitle_1: {
        image: string;
        sub_title: JSX.Element;
        link: string;
      };
      image_and_subtitle_2: {
        image: string;
        sub_title: JSX.Element;
        link: string;
      };
      image_and_subtitle_3: {
        image: string;
        sub_title: JSX.Element;
        link: string;
      };
    }>("row3");

    const isRow1Visible = row1.left_image || this.castToString(row1.title);
    const isRow2LeftItemVisible =
      this.castToString(row2.left_item.description) ||
      this.castToString(row2.left_item.button_text) ||
      row2.left_item.link;
    const isRow2RightItemVisible =
      row2.right_item.image ||
      this.castToString(row2.right_item.text) ||
      row2.right_item.link;
    const isRow2Visible = isRow2LeftItemVisible || isRow2RightItemVisible;
    const isRow3Visible =
      row3.image_and_subtitle_1.image ||
      row3.image_and_subtitle_2.image ||
      row3.image_and_subtitle_3.image;

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {title && (
            <h1 className={this.decorateCSS("title")}>
              {this.getPropValue("title")}
            </h1>
          )}
          {isRow1Visible && (
            <ComposerLink path={row1.link} isFullWidth={true}>
              <div className={this.decorateCSS("row1")}>
                {row1.left_image && (
                  <img
                    className={this.decorateCSS("left-image")}
                    src={row1.left_image}
                  />
                )}
                {this.castToString(row1.title) && (
                  <h1 className={this.decorateCSS("title")}>{row1.title}</h1>
                )}
              </div>
            </ComposerLink>
          )}

          {isRow2Visible && (
            <div className={this.decorateCSS("row2")}>
              {isRow2LeftItemVisible && (
                <div className={this.decorateCSS("left")}>
                  {this.castToString(row2.left_item.description) && (
                    <span className={this.decorateCSS("description")}>
                      {row2.left_item.description}
                    </span>
                  )}
                  {this.castToString(row2.left_item.button_text) && (
                    <span className={this.decorateCSS("button-text")}>
                      <ComposerLink path={row2.left_item.link}>
                        {this.castToString(row2.left_item.button_text)}
                      </ComposerLink>
                    </span>
                  )}
                </div>
              )}
              {isRow2RightItemVisible && (
                <div className={this.decorateCSS("right")}>
                  <ComposerLink path={row2.right_item.link} isFullWidth={true}>
                    <div className={this.decorateCSS("right-content")}>
                      {this.castToString(row2.right_item.text) && (
                        <span className={this.decorateCSS("text")}>
                          {row2.right_item.text}
                        </span>
                      )}
                      {row2.right_item.image && (
                        <img
                          className={this.decorateCSS("image")}
                          src={row2.right_item.image}
                        />
                      )}
                    </div>
                  </ComposerLink>
                </div>
              )}
            </div>
          )}

          {isRow3Visible && (
            <div className={this.decorateCSS("row3")}>
              {row3.image_and_subtitle_1.image && (
                <ComposerLink
                  path={row3.image_and_subtitle_1.link}
                  isFullWidth={true}
                >
                  <div className={this.decorateCSS("image_and_subtitle_1")}>
                    <img
                      className={this.decorateCSS("image")}
                      src={row3.image_and_subtitle_1.image}
                    />
                    {this.castToString(row3.image_and_subtitle_1.sub_title) && (
                      <span className={this.decorateCSS("subtitle")}>
                        {row3.image_and_subtitle_1.sub_title}
                      </span>
                    )}
                  </div>
                </ComposerLink>
              )}
              {row3.image_and_subtitle_2.image && (
                <ComposerLink
                  path={row3.image_and_subtitle_2.link}
                  isFullWidth={true}
                >
                  <div className={this.decorateCSS("image_and_subtitle_2")}>
                    <img
                      className={this.decorateCSS("image")}
                      src={row3.image_and_subtitle_2.image}
                    />
                    {this.castToString(row3.image_and_subtitle_2.sub_title) && (
                      <span className={this.decorateCSS("subtitle")}>
                        {row3.image_and_subtitle_2.sub_title}
                      </span>
                    )}
                  </div>
                </ComposerLink>
              )}
              {row3.image_and_subtitle_3.image && (
                <ComposerLink
                  path={row3.image_and_subtitle_3.link}
                  isFullWidth={true}
                >
                  <div className={this.decorateCSS("image_and_subtitle_3")}>
                    <img
                      className={this.decorateCSS("image")}
                      src={row3.image_and_subtitle_3.image}
                    />
                    {this.castToString(row3.image_and_subtitle_3.sub_title) && (
                      <span className={this.decorateCSS("subtitle")}>
                        {row3.image_and_subtitle_3.sub_title}
                      </span>
                    )}
                  </div>
                </ComposerLink>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Feature5;
