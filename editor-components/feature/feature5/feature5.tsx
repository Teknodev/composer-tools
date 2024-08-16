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
          key: "first_item",
          displayer: "Description and Link",
          value: [
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Newspaper is not only convenient to use, but it also uses very low resources and loads extremely fast. Welcome to the future!",
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
              displayer: "Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "second_item",
          displayer: "Description and Link",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Don't Let Your Summer Hard Work Go to Waste",
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
          key: "third_item",
          displayer: "Additional Content",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Additional Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a4c2a22f8a5b002ce6c03e?alt=media",
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
      first_item: {
        description: JSX.Element;
        button_text: JSX.Element;
        link: string;
      };
      second_item: {
        text: JSX.Element;
        link: string;
      };
      third_item: {
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

    const isFirstColumnVisible =
      this.castToString(row2.first_item.description) ||
      this.castToString(row2.first_item.button_text) ||
      row2.first_item.link;
    const isSecondColumnVisible = this.castToString(row2.second_item.text)
    const isThirdColumnVisible = row2.third_item.image
    const isFirstItemExist = (this.castToString(row2.first_item.description) ||
      this.castToString(row2.first_item.button_text))
    const isSecondItemExist = this.castToString(row2.second_item.text)
    const isThirdItemExist = row2.third_item.image
    const row2Status = (!isFirstItemExist || !isSecondItemExist || !isThirdItemExist)
    const isRow2Visible =
      isFirstColumnVisible || isSecondColumnVisible || isThirdColumnVisible;

    const isRow3Visible =
      row3.image_and_subtitle_1.image ||
      row3.image_and_subtitle_2.image ||
      row3.image_and_subtitle_3.image;
    const isFirstImageExist = row3.image_and_subtitle_1.image
    const isSecondImageExist = row3.image_and_subtitle_2.image
    const isThirdImageExist = row3.image_and_subtitle_3.image;
    const row3Status = (!isFirstImageExist || !isSecondImageExist || !isThirdImageExist)

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
                  (<img
                    className={`${this.decorateCSS("left-image")} 
                    ${!this.castToString(row1.title) &&
                      this.decorateCSS("row1-image-only")}`}
                    src={row1.left_image}
                  />)
                )}
                {this.castToString(row1.title) && (
                  <h1 className={`${this.decorateCSS("title")} ${!row1.left_image &&
                    this.decorateCSS("row1-title-only")} 
                        }`}>
                    {row1.title}
                  </h1>
                )}
              </div>
            </ComposerLink>
          )}

          {isRow2Visible && (
            <div
              className={`${this.decorateCSS("row2")} ${row2Status &&
                this.decorateCSS("row2-items-less")
                }`}
            >
              {isFirstColumnVisible && (
                <div
                  className={`${this.decorateCSS("first")} ${row2Status &&
                    this.decorateCSS("row2-items-less")
                    }`}
                >
                  {this.castToString(row2.first_item.description) && (
                    <span className={this.decorateCSS("description")}>
                      {row2.first_item.description}
                    </span>
                  )}
                  {this.castToString(row2.first_item.button_text) && (
                    <span className={this.decorateCSS("button-text")}>
                      <ComposerLink path={row2.first_item.link}>
                        {this.castToString(row2.first_item.button_text)}
                      </ComposerLink>
                    </span>
                  )}
                </div>
              )}
              {isSecondColumnVisible && (
                <div
                  className={`${this.decorateCSS("second")} ${row2Status &&
                    this.decorateCSS("row2-items-less")
                    }`}
                >
                  {this.castToString(row2.second_item.text) && (
                    <span className={this.decorateCSS("text")}>
                      <ComposerLink path={row2.second_item.link}>
                        {this.castToString(row2.second_item.text)}
                      </ComposerLink>
                    </span>
                  )}
                </div>
              )}
              {isThirdColumnVisible && (
                <div
                  className={`${this.decorateCSS("third")} ${row2Status &&
                    this.decorateCSS("row2-items-less")
                    }`}
                >
                  {row2.third_item.image && (
                    <ComposerLink path={row2.third_item.link}>
                      <img
                        className={`${this.decorateCSS("image")} ${row2Status &&
                          this.decorateCSS("row2-items-less")
                          }`}
                        src={row2.third_item.image}
                        alt="Third Column Image"
                      />
                    </ComposerLink>
                  )}
                </div>
              )}
            </div>
          )}
          {isRow3Visible && (
            <div className={this.decorateCSS("row3")}
            >

              {row3.image_and_subtitle_1.image && (
                <ComposerLink
                  path={row3.image_and_subtitle_1.link}
                  isFullWidth={true}
                >
                  <div className={this.decorateCSS("image_and_subtitle_1")}>
                    <img
                      className={`${this.decorateCSS("image")} 
                      ${row3Status && this.decorateCSS("row3-images-less")}
                      `}
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
                      className={`${this.decorateCSS("image")} 
                      ${row3Status && this.decorateCSS("row3-images-less")}
                      `}
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
                      className={`${this.decorateCSS("image")} 
                      ${row3Status && this.decorateCSS("row3-images-less")}
                      `}
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
