import * as React from "react";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseContent } from "../../EditorComponent";
import styles from "./content5.module.scss";

type Image = {
  image: string;
  desc: string;
};

class Content5 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      key: "imageList",
      displayer: "Image List",
      value: Array(7)
        .fill(0)
        .map(() => {
          return {
            type: "object",
            key: "image",
            displayer: "Image",
            value: [
              {
                type: "image",
                key: "image",
                displayer: "Image",
                value: PlaceholderFiller.image(),
              },
              {
                type: "string",
                key: "desc",
                displayer: "Description",
                value: "John Doe",
              },
            ],
          };
        }),
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: PlaceholderFiller.string(),
    });
  }
  getName(): string {
    return "Content 5";
  }
  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")} >
            <h2>{this.getPropValue("title")}</h2>
            <div
              className={this.decorateCSS("sponsors")}
              
            >
              {this.castToObject<Image[]>("imageList").map(
                (item: Image, index: number) => (
                  <div
                    key={index}
                    className={this.decorateCSS("img-wrapper")}
                    
                  >
                    <img src={item.image} />
                    <h4>{item.desc} </h4>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content5;
