import * as React from "react";
import { LogoClouds } from "../../EditorComponent";
import styles from "./logo-comp4.module.scss";

type Item = {
  image: string;
};
type ISection = {
  section: Item[];
};
class LogoComp4Page extends LogoClouds {
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
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Sponsors",
    });
    this.addProp({
      type: "image",
      key: "backgroundImage",
      displayer: "Background Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661cd92bd2970002c629817?alt=media&timestamp=1719584962578",
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
                    "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64551a0df72de2002caaf156?alt=media&timestamp=1719584962573",
                  displayer: "Image",
                },
                {
                  type: "image",
                  key: "image",
                  value:
                    "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64551a0df72de2002caaf155?alt=media&timestamp=1719584962573",
                  displayer: "Image",
                },
                {
                  type: "image",
                  key: "image",
                  value:
                    "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64551a0df72de2002caaf154?alt=media&timestamp=1719584962573",
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
    return "Logo Comp 4";
  }

  render() {
    const styling = {
      backgroundImage: `url('${this.getPropValue("backgroundImage")}')`,
    };
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")} style={styling}>
          <div className={this.decorateCSS("logo-comp4-page")}>
            <h1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h1>
            <h3 className={this.decorateCSS("description")}>{this.getPropValue("description")}</h3>
            <h4 className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</h4>
            <section>
              <center>
                {this.castToObject<ISection[]>("image-items").map(
                  (section: any, index: number) => (
                    <div key={index} className={this.decorateCSS("image-child")}>
                      {section.items.map((item: any, index: number) => (
                        <img className={this.decorateCSS("image")} key={index} width={180} height={90} src={item.value} alt=""/>
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

export default LogoComp4Page;
