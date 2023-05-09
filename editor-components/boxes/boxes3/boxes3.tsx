import * as React from "react";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseBoxes, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./boxes3.module.scss";

type ISimpleBoxes = {
  title: string;
  description: string;
  image: string;
};
class Boxes3 extends BaseBoxes {
  constructor(props?: any) {
    super(props, styles);

    let box: TypeUsableComponentProps = {
      type: "object",
      key: "simple-boxes",
      displayer: "Simple Boxes",
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
          value: "https://static.thenounproject.com/png/105256-200.png",
        },
      ],
    }
    
    this.addProp({
      type: "array",
      key: "simple-boxes-content",
      displayer: "Simple Boxes Content",
      value: [
        JSON.parse(JSON.stringify(box)),
        JSON.parse(JSON.stringify(box)),
        JSON.parse(JSON.stringify(box)),
      ],
    });
  }

  getName(): string {
    return "Boxes 3";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
        {this.castToObject<ISimpleBoxes[]>("simple-boxes-content").map(
          (simplebox: any, index: number) => (
            <div
              className={this.decorateCSS("simple-boxes")}
              
              key={index}
            >
              <img
                className={this.decorateCSS("image")}
                
                src={simplebox.image}
              ></img>
              <h3 className={this.decorateCSS("title")} >
                {simplebox.title}
              </h3>
              <p
                className={this.decorateCSS("long-text")}
                
              >
                {simplebox.description}
              </p>
            </div>
          )
        )}
        </div>
      </div>
    );
  }
}

export default Boxes3;
