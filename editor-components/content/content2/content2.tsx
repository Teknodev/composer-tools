import * as React from "react";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseContent } from "../../EditorComponent";
import styles from "./content2.module.scss";

type Gallery = {
  value: string;
};
class Content2 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      key: "gallery",
      displayer: "gallery",
      value: Array(6)
        .fill(0)
        .map((_, index) => {
          return {
            type: "image",
            key: "image" + index,
            displayer: "Image",
            value: PlaceholderFiller.image(),
          };
        }),
    });
  }
  getName(): string {
    return "Content 2";
  }
  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("gallery")}>
            {this.castToObject<Gallery[]>("gallery").map(
              (v: Gallery, index: number) => (
                <div key={index}>
                  <img src={v.value}></img>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Content2;
