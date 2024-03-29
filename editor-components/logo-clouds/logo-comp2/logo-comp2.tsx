import * as React from "react";
import { LogoClouds } from "../../EditorComponent";
import styles from "./logo-comp2.module.scss";

type Item = {
  image: string;
};

class LogoComp2Page extends LogoClouds {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Logo Clouds",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "description",
      value: "Sponsors can range from small local businesses to multinational corporations and can sponsor everything from sports teams to music festivals to non-profit organizations.",
    });

    this.addProp({
      type: "boolean",
      key: "isRow",
      displayer: "isRow",
      value: false,
    })

    this.addProp({
      type: "array",
      key: "image-items",
      displayer: "Images",
      value: [
        {
          type: "image",
          key: "image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645516a9f72de2002caaf056?alt=media&timestamp=1683297977192",
          displayer: "Image",
        },
        {
          type: "image",
          key: "image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645516a9f72de2002caaf055?alt=media&timestamp=1683297977192",
          displayer: "Image",
        },
        {
          type: "image",
          key: "image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645516a9f72de2002caaf054?alt=media&timestamp=1683297977192",
          displayer: "Image",
        },
        {
          type: "image",
          key: "image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645516a9f72de2002caaf053?alt=media&timestamp=1683297977192",
          displayer: "Image",
        },
        {
          type: "image",
          key: "image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645516a9f72de2002caaf052?alt=media&timestamp=1683297977192",
          displayer: "Image",
        },
        {
          type: "image",
          key: "image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645516a9f72de2002caaf051?alt=media&timestamp=1683297977192",
          displayer: "Image",
        },
        {
          type: "image",
          key: "image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645516a9f72de2002caaf050?alt=media&timestamp=1683297977192",
          displayer: "Image",
        },
        {
          type: "image",
          key: "image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645516a9f72de2002caaf04f?alt=media&timestamp=1683297977192",
          displayer: "Image",

        },
      ],
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 4,
      max: 4,
    });

  }


  getName(): string {
    return "Logo Comp 2";
  }



  render() {
    return (
      <div
        className={`${this.decorateCSS("container")} ${this.getPropValue("isRow") == true ? this.decorateCSS("row") : ""}`}

      >
        <div className={`${this.decorateCSS("max-content")} ${this.getPropValue("isRow") == true ? this.decorateCSS("row") : ""}`}>
          <div className={`${this.decorateCSS("logo-comp2-page")} ${this.getPropValue("isRow") == true ? this.decorateCSS("row") : ""}`}>
            <div className={`${this.decorateCSS("container-title-description")} ${this.getPropValue("isRow") == true ? this.decorateCSS("row") : ""}`}>
              <h1 className={`${this.decorateCSS("title")} ${this.getPropValue("isRow") == true ? this.decorateCSS("row") : ""}`}>{this.getPropValue("title")}</h1>
              <h3 className={`${this.decorateCSS("description")} ${this.getPropValue("isRow") == true ? this.decorateCSS("row") : ""}`}>{this.getPropValue("description")}</h3>
            </div>
            <section className={`${this.getPropValue("isRow") == true ? this.decorateCSS("row") : ""}`}>
              <div className={this.decorateCSS("items-layout")}>
                {this.getPropValue("image-items").map(
                  (imageItems: any, index: number) => (
                    <div
                      key={index}
                      className={this.decorateCSS("all-images")}
                      style={{
                        width: 90 / this.getPropValue("itemCount") + "%",
                      }}
                    >
                      <div className={this.decorateCSS("image-child")}>
                        <img key={index} src={imageItems.value} alt="" />
                      </div>
                    </div>

                  )
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}


export default LogoComp2Page;