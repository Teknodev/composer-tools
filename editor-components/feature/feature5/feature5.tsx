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
          value: "https://demo.tagdiv.com/newspaper_lifestyle_pro/wp-content/uploads/2020/06/30-1068x1602.jpg",
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "The 10 Best Apps for Planning Your Next Trip",
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
              displayer: "link",
              value: "https://www.google.com/"
            }
          ]
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
              value: "https://demo.tagdiv.com/newspaper_lifestyle_pro/wp-content/uploads/2020/06/29-1068x1417.jpg",
            },
            {
              type: "page",
              key: "link",
              displayer: "link",
              value: "https://www.google.com/"
            }
          ]
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
              value: "https://demo.tagdiv.com/newspaper_lifestyle_pro/wp-content/uploads/2020/06/28-696x696.jpg",
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
              value: "https://www.google.com/"
            }
          ]
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
              value: "https://demo.tagdiv.com/newspaper_lifestyle_pro/wp-content/uploads/2020/06/27-696x870.jpg",
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
              value: "https://www.google.com/"
            }
          ]
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
              value: "https://demo.tagdiv.com/newspaper_lifestyle_pro/wp-content/uploads/2020/06/26-696x464.jpg",
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
              value: "https://www.google.com/"
            }
          ]
        },
      ],
    },
    );
  }

  getName(): string {
    return "Feature 5";
  }

  render() {
    const title = this.getPropValue("title", { as_string: true });
    const row1 = this.castToObject<{ left_image: string, title: JSX.Element }>("row1",);
    const row2 = this.castToObject<{
      left_item: {
        description: JSX.Element,
        button_text: JSX.Element,
        link: string
      }, right_item: {
        text: JSX.Element,
        image: string,
        link: string
      }
    }>("row2");

    const isRow1Visible = row1.left_image || this.castToString(row1.title);
    const isRow2LeftItemVisible = this.castToString(row2.left_item.description);
    const isRow2RightItemVisible = row2.right_item.image || this.castToString(row2.right_item.text);

    const isRow2Visible = isRow2LeftItemVisible || isRow2RightItemVisible;
    
    const row3 = this.castToObject<{
      image_and_subtitle_1: {
        image: string,
        sub_title: JSX.Element,
        link: string
      },
      image_and_subtitle_2: {
        image: string,
        sub_title: JSX.Element,
        link: string
      },
      image_and_subtitle_3: {
        image: string,
        sub_title: JSX.Element,
        link: string
      }
    }>("row3");

    const isRow3Visible = row3.image_and_subtitle_1.image || row3.image_and_subtitle_2.image || row3.image_and_subtitle_3.image;

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {
            title &&
            <h1 className={this.decorateCSS("title")}>
              {this.getPropValue("title")}
            </h1>
          }
          {isRow1Visible && <div className={this.decorateCSS("row1")}>

            {row1.left_image && <img className={this.decorateCSS("left-image")} src={
              row1.left_image
            } />}
            {this.castToString(row1.title) && <h1 className={this.decorateCSS("title")}>
              {row1.title}
            </h1>}

          </div>}

          {isRow2Visible && <div className={this.decorateCSS("row2")}>
            {isRow2LeftItemVisible && <div className={this.decorateCSS("left")}>
              <span className={this.decorateCSS("description")}>{row2.left_item.description}</span>
              {this.castToString(row2.left_item.button_text) && <ComposerLink path={row2.left_item.link}>
                <span className={this.decorateCSS("button-text")}>{this.castToString(row2.left_item.button_text)}</span>
              </ComposerLink>}
            </div>}
            {isRow2RightItemVisible && <div className={this.decorateCSS("right")}>
              <ComposerLink path={row2.right_item.link} isFullWidth={true}>

                <div className={this.decorateCSS("right-content")}>
                  {this.castToString(row2.right_item.text) && <span className={this.decorateCSS("text")}>{row2.right_item.text}</span>}
                  {row2.right_item.image && <img className={this.decorateCSS("image")} src={row2.right_item.image} />}
                </div>

              </ComposerLink></div>}
          </div>}
          {
            <div className={this.decorateCSS("row3")}>
              {isRow3Visible && <div className={this.decorateCSS("row3")}>
                {row3.image_and_subtitle_1.image && <div className={this.decorateCSS("image_and_subtitle_1")}>
                  <img className={this.decorateCSS("image")} src={row3.image_and_subtitle_1.image} />
                  <h1 className={this.decorateCSS("sub-title")}>{row3.image_and_subtitle_1.sub_title}</h1>
                </div>}
                {row3.image_and_subtitle_2.image && <div className={this.decorateCSS("image_and_subtitle_2")}>
                  <img className={this.decorateCSS("image")} src={row3.image_and_subtitle_2.image} />
                  <h1 className={this.decorateCSS("sub-title")}>{row3.image_and_subtitle_2.sub_title}</h1>
                </div>}
                {row3.image_and_subtitle_3.image && <div className={this.decorateCSS("image_and_subtitle_3")}>
                  <img className={this.decorateCSS("image")} src={row3.image_and_subtitle_3.image} />
                  <h1 className={this.decorateCSS("sub-title")}>{row3.image_and_subtitle_3.sub_title}</h1>
                </div>}
              </div>}
            </div>
          }
        </div>
      </div>
    )
  }
}

export default Feature5;
