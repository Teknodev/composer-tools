import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature5.module.scss";

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
          key: "item1",
          displayer: "Description and Link",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Newspaper is not only convenient to use, but it also uses very low resources and loads extremely fast. Welcome to the future!",
            },
            {
              type: "string",
              displayer: "explore",
              key: "Explore-text",
              value: "Explore",
            },
            {
              type: "page",
              key: "link",
              displayer: "link",
              value: ""
            }
          ]
        },
        {
          type: "object",
          key: "item2",
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
              key: "right-image",
              displayer: "Right Image",
              value: "https://demo.tagdiv.com/newspaper_lifestyle_pro/wp-content/uploads/2020/06/29-1068x1417.jpg",
            },
            {
              type: "page",
              key: "link",
              displayer: "link",
              value: ""
            }
          ]
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "row3",
      displayer: "third-row",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              key: "image1",
              displayer: "Left Image",
              value: "https://demo.tagdiv.com/newspaper_lifestyle_pro/wp-content/uploads/2020/06/28-696x696.jpg",
            },
            {
              type: "string",
              key: "sub-title",
              displayer: "Sub-Title",
              value: "Girl's Guide: Tricks to Save Time in the Morning",
            },
            {
              type: "page",
              key: "link",
              displayer: "link",
              value: ""
            }
          ]
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              key: "image2",
              displayer: "Middle Image",
              value: "https://demo.tagdiv.com/newspaper_lifestyle_pro/wp-content/uploads/2020/06/27-696x870.jpg",
            },
            {
              type: "string",
              key: "sub-title",
              displayer: "Sub-Title",
              value: "Motivation Monday: Only 3 Days Left of Summer",
            },
            {
              type: "page",
              key: "link",
              displayer: "link",
              value: ""
            }
          ]
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              key: "image3",
              displayer: "Right Image",
              value: "	https://demo.tagdiv.com/newspaper_lifestyle_pro/wp-content/uploads/2020/06/26-696x464.jpg",
            },
            {
              type: "string",
              key: "sub-title",
              displayer: "Sub-Title",
              value: "Five Rules For a Long, Healthy and Happy Life",
            },
            {
              type: "page",
              key: "link",
              displayer: "link",
              value: ""
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

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {
            title &&
            <h1 className={this.decorateCSS("title")}>
              {this.getPropValue("title")}
            </h1>
          }
          {(row1.left_image || this.castToString(row1.title)) && <div className={this.decorateCSS("row1")}>

            {row1.left_image && <img className={this.decorateCSS("left-image")} src={
              row1.left_image
            } />}
            {this.castToString(row1.title) && <h1 className={this.decorateCSS("title")}>
              {row1.title}
            </h1>}

          </div>}
          {/* <div className={this.decorateCSS("row2")}>
            {this.getPropValue("row2").map((item: any) => {
              return (
                <div className={this.decorateCSS("basic")}>
                  <p className={this.decorateCSS("text")}>
                    {item.value[0].value}
                  </p>
                  <h1 className={this.decorateCSS("title")}>
                    {item.value[1].value}
                  </h1>
                </div>
              )
            })}
          </div>
          <div className={this.decorateCSS("row3")}>
            {this.getPropValue("row3").map((item: any) => {
              return (
                <div className={this.decorateCSS("basic")}>
                  <img className={this.decorateCSS("left-image")} src={
                    item.value[0].value
                  } alt="" />
                  <h1 className={this.decorateCSS("title")}>
                    {item.value[1].value}
                  </h1>
                </div>
              )
            })}
          </div> */}
        </div>
      </div>
    )
  }
}

export default Feature5;
