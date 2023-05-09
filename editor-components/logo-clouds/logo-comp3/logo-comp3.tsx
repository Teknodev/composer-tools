import * as React from "react";
import { LogoClouds } from "../../EditorComponent";
import styles from "./logo-comp3.module.scss";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";

type Item = {
  image: string;
};
type ISection = {
  section: Item[];
};
class LogoComp3Page extends LogoClouds {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Lorem ipsum dolor sit",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "description",
      value: PlaceholderFiller.shortText(),
    });
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
                    "https://static.thenounproject.com/png/105256-200.png",
                  displayer: "Image",
                },
                {
                  type: "image",
                  key: "image",
                  value:
                    "https://static.thenounproject.com/png/105256-200.png",
                  displayer: "Image",
                },
                {
                  type: "image",
                  key: "image",
                  value:
                    "https://static.thenounproject.com/png/105256-200.png",
                  displayer: "Image",
                },
                {
                  type: "image",
                  key: "image",
                  value:
                    "https://static.thenounproject.com/png/105256-200.png",
                  displayer: "Image",
                },
                {
                  type: "image",
                  key: "image",
                  value:
                    "https://static.thenounproject.com/png/105256-200.png",
                  displayer: "Image",
                },
                {
                  type: "image",
                  key: "image",
                  value:
                    "https://static.thenounproject.com/png/105256-200.png",
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
    return "Logo Comp 3";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("logo-comp3-page")}>
            <section>
              <center>
                {this.castToObject<ISection[]>("image-items").map(
                  (section: any, index: number) => (
                    <div key={index} className={this.decorateCSS("image-child")}>
                      {section.items.map((item: any, index: number) => (
                        <img key={index} width={50} height={50} src={item.value} />
                      ))}
                    </div>
                  )
                )}
              </center>
            </section>
            <h1>{this.getPropValue("title")}</h1>
            <h3>{this.getPropValue("description")}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default LogoComp3Page;
