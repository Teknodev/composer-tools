import * as React from "react";
import { LogoClouds } from "../../EditorComponent";
import styles from "./logo-comp2.module.scss";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";

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
                    "https://thefocaltimes.com/wp-content/uploads/2021/10/LOGOIPSUM-01.png",
                  displayer: "Image",
                },
                {
                  type: "image",
                  key: "image",
                  value:
                    "https://thefocaltimes.com/wp-content/uploads/2021/10/LOGOIPSUM-01.png",
                  displayer: "Image",
                },
                {
                  type: "image",
                  key: "image",
                  value:
                    "https://thefocaltimes.com/wp-content/uploads/2021/10/LOGOIPSUM-01.png",
                  displayer: "Image",
                },
                {
                  type: "image",
                  key: "image",
                  value:
                    "https://thefocaltimes.com/wp-content/uploads/2021/10/LOGOIPSUM-01.png",
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
                    "https://thefocaltimes.com/wp-content/uploads/2021/10/LOGOIPSUM-01.png",
                  displayer: "Image",
                },
                {
                  type: "image",
                  key: "image",
                  value:
                    "https://thefocaltimes.com/wp-content/uploads/2021/10/LOGOIPSUM-01.png",
                  displayer: "Image",
                },
                {
                  type: "image",
                  key: "image",
                  value:
                    "https://thefocaltimes.com/wp-content/uploads/2021/10/LOGOIPSUM-01.png",
                  displayer: "Image",
                },
                {
                  type: "image",
                  key: "image",
                  value:
                    "https://thefocaltimes.com/wp-content/uploads/2021/10/LOGOIPSUM-01.png",
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
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("logo-comp2-page")}>
            <h1>{this.getPropValue("title")}</h1>
            <h3>{this.getPropValue("description")}</h3>
            <section>
              <center>
                {this.castToObject<ISection[]>("image-items").map(
                  (section: any, index: number) => (
                    <div key={index} className={this.decorateCSS("image-child")}>
                      {section.items.map((item: any, index: number) => (
                        <img key={index} width={180} height={90} src={item.value} />
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
