import * as React from "react";
import { BaseBoxes } from "../../EditorComponent";
import styles from "./boxes2.module.scss";

type IIconBoxes = {
  title: string;
  description: string;
  image: string;
};
class Boxes2 extends BaseBoxes {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      key: "icon-boxes-content",
      displayer: "Icon Boxes Content",
      value: [
        {
          type: "object",
          key: "icon-boxes",
          displayer: "Icon Boxes",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: " Bill Gates",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:"Bill Gates is a prominent American entrepreneur and philanthropist who co-founded Microsoft Corporation, one of the world's largest software companies. He is also known for his significant contributions to the development of computers."
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Question_mark_white_icon.svg/1200px-Question_mark_white_icon.svg.png",
            },
          ],
        },
        {
          type: "object",
          key: "icon-boxes",
          displayer: "Icon Boxes",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Walt Disney",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:"Walt Disney (1901-1966) was an American entrepreneur, animator, voice actor, and film producer. He was the co-founder of The Walt Disney Company, which has become one of the world's largest and most influential entertainment conglomerates.  "
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Question_mark_white_icon.svg/1200px-Question_mark_white_icon.svg.png",
            },
          ],
        },
        {
          type: "object",
          key: "icon-boxes",
          displayer: "Icon Boxes",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Steve Jobs",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Steve Jobs (1955-2011) was a famous American entrepreneur and business magnate, who is best known for co-founding Apple Inc. and playing a key role in the development of personal computing and mobile devices."
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Question_mark_white_icon.svg/1200px-Question_mark_white_icon.svg.png",
            },
          ],
        }
      ],
    });
  }

  getName(): string {
    return "Boxes 2";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
      >
        <div className={this.decorateCSS("max-content")}>
          {this.castToObject<IIconBoxes[]>("icon-boxes-content").map(
            (iconbox: any, index: number) => (
              <div
                className={this.decorateCSS("icon-boxes")}
                key={index}
              >
                <div
                  className={this.decorateCSS("image-background")}
                >
                  <img className={this.decorateCSS("image")} src={iconbox.image}></img>
                </div>
                <h3 className={this.decorateCSS("title")}>
                  {iconbox.title}
                </h3>
                <p
                  className={this.decorateCSS("long-text")}
                >
                  {iconbox.description}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}

export default Boxes2;
