import * as React from "react";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseBoxes, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./boxes1.module.scss";

type ICircleBoxes = {
  title: string;
  description: string;
  image: string;
};
class Boxes1 extends BaseBoxes {
  constructor(props?: any) {
    super(props, styles);
    let box: TypeUsableComponentProps =
    {
      type: "object",
      key: "circle-boxes",
      displayer: "Circle Boxes",
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
    }
    this.addProp({
      type: "array",
      key: "circle-boxes-content",
      displayer: "Circle Boxes Content",
      value: [
        JSON.parse(JSON.stringify(box)),
        JSON.parse(JSON.stringify(box)),
        JSON.parse(JSON.stringify(box)),
      ],
    });
  }

  getName(): string {
    return "Boxes 1";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
      >
        <div className={this.decorateCSS("max-content")}>
          {this.castToObject<ICircleBoxes[]>("circle-boxes-content").map(
            (circlebox: any, index: number) => (
              <div
                className={this.decorateCSS("circle-boxes")}
                key={index}
              >
                <div
                  className={this.decorateCSS("image")}
                >
                  <img src={circlebox.image}></img>
                </div>
                <h3 className={this.decorateCSS("title")}>
                  {circlebox.title}
                </h3>
                <p
                  className={this.decorateCSS("long-text")}
                >
                  {circlebox.description}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}

export default Boxes1;
