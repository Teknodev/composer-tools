import * as React from "react";
import { LogoClouds } from "../../EditorComponent";
import styles from "./logo-comp2.module.scss";

type Item = {
  image: string;
};
type ISection = {
  section: Item[];
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
      type : "boolean",
      key : "isRow",
      displayer : "isRow",
      value : false,
    })

    this.addProp({
      type: "array",
      key: "image-items",
      displayer: "Images",
      value: [
        {
          type: "object",
          key: "section",
          displayer: "Section",
          value: [
            {
              type: "array",
              key: "items",
              displayer: "Items",
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
              ],
            },
          ],
        },
        {
          type: "object",
          key: "section",
          displayer: "Section",
          value: [
            {
              type: "array",
              key: "items",
              displayer: "Items",
              value: [
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
            },
          ],
        },
      ],
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
        <div className={`${this.decorateCSS("max-content")} ${this.getPropValue("isRow") ==true ? this.decorateCSS("row") : ""}`}>
          <div className={`${this.decorateCSS("logo-comp2-page")} ${this.getPropValue("isRow") == true ? this.decorateCSS("row") : ""}`}>
            <div className={`${this.decorateCSS("container-title-description")} ${this.getPropValue("isRow") == true ? this.decorateCSS("row") : ""}`}>
            <h1 className={`${this.decorateCSS("title")} ${this.getPropValue("isRow") == true ? this.decorateCSS("row") : ""}`}>{this.getPropValue("title")}</h1>
            <h3 className={`${this.decorateCSS("description")} ${this.getPropValue("isRow") == true ? this.decorateCSS("row") : ""}`}>{this.getPropValue("description")}</h3>
            </div>
            <section className={`${this.getPropValue("isRow") == true ? this.decorateCSS("row") : ""}`}>
              <center>
                {this.castToObject<ISection[]>("image-items").map(
                  (section: any, index: number) => (
                    <div key={index} className={this.decorateCSS("image-child")}>
                      {section.items.map((item: any, index: number) => (
                        <img key={index} width={180} height={90} src={item.value} alt=""/>
                      ))}
                    </div>
                  )
                )}
              </center>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default LogoComp2Page;
