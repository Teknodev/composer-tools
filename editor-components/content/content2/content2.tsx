import * as React from "react";
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
      value: [
        {
          type: "image",
          key: "image1",
          displayer: "Image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436ae1a68c3c2002cd2f9d0?alt=media&timestamp=1683295415432",
        },
        {
          type: "image",
          key: "image2",
          displayer: "Image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436ae1a68c3c2002cd2f9d5?alt=media&timestamp=1683295415432",
        },
        {
          type: "image",
          key: "image3",
          displayer: "Image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436ae1a68c3c2002cd2f9d1?alt=media&timestamp=1683295415432",
        },
        {
          type: "image",
          key: "image4",
          displayer: "Image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436ae1a68c3c2002cd2f9d2?alt=media&timestamp=1683295415432",
        },
        {
          type: "image",
          key: "image5",
          displayer: "Image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436ae1a68c3c2002cd2f9d3?alt=media&timestamp=1683295415432",
        },
        {
          type: "image",
          key: "image6",
          displayer: "Image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436ae1a68c3c2002cd2f9d4?alt=media&timestamp=1683295415432",
        },
      ],
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
