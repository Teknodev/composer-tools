import * as React from "react";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseBoxes, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./boxes2.module.scss";

type IIconBoxes = {
  title: string;
  description: string;
  image: string;
};
class Boxes2 extends BaseBoxes {
  constructor(props?: any) {
    super(props, styles);
    let box: TypeUsableComponentProps = {
      type: "object",
      key: "icon-boxes",
      displayer: "Icon Boxes",
      value: [
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: PlaceholderFiller.string(),
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: PlaceholderFiller.shortText(),
        },
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Question_mark_white_icon.svg/1200px-Question_mark_white_icon.svg.png",
        },
      ],
    };
    this.addProp({
      type: "array",
      key: "icon-boxes-content",
      displayer: "Icon Boxes Content",
      value: [
        JSON.parse(JSON.stringify(box)),
        JSON.parse(JSON.stringify(box)),
        JSON.parse(JSON.stringify(box)),
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
                  className={this.decorateCSS("image")}
                >
                  <img src={iconbox.image}></img>
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
