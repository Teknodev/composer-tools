import * as React from "react";
import { LogoClouds } from "../../EditorComponent";
import styles from "./logo-comp5.module.scss";

type Item = {
  image: string;
};
type ISection = {
  section: Item[];
};

class LogoComp5Page extends LogoClouds {
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
      value:
        "Sponsors can range from small local businesses to multinational corporations and can sponsor everything from sports teams to music festivals to non-profit organizations.",
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
                    "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661ce34bd2970002c6298ac?alt=media&timestamp=1719584962578",
                  displayer: "Image",
                },
                {
                  type: "image",
                  key: "image",
                  value:
                    "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661ce34bd2970002c6298ad?alt=media&timestamp=1719584962578",
                  displayer: "Image",
                },
                {
                  type: "image",
                  key: "image",
                  value:
                    "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661ce34bd2970002c6298ae?alt=media&timestamp=1719584962578",
                  displayer: "Image",
                },
                {
                  type: "image",
                  key: "image",
                  value:
                    "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661ce34bd2970002c6298af?alt=media&timestamp=1719584962578",
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
                    "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661ce34bd2970002c6298b0?alt=media&timestamp=1719584962578",
                  displayer: "Image",
                },
                {
                  type: "image",
                  key: "image",
                  value:
                    "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661ce34bd2970002c6298b1?alt=media&timestamp=1719584962578",
                  displayer: "Image",
                },
                {
                  type: "image",
                  key: "image",
                  value:
                    "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661ce34bd2970002c6298b2?alt=media&timestamp=1719584962578",
                  displayer: "Image",
                },
                {
                  type: "image",
                  key: "image",
                  value:
                    "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661ce34bd2970002c6298b3?alt=media&timestamp=1719584962578",
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
    return "Logo Comp 5";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("logo-comp5-page")}>
            <div className={this.decorateCSS("content-left")}>
              <h1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h1>
              <p className={this.decorateCSS("description")}>{this.getPropValue("description")}</p>
            </div>
            <section>
              <center>
                {this.castToObject<ISection[]>("image-items").map(
                  (section: any, index: number) => (
                    <div
                      key={index}
                      className={this.decorateCSS("image-child")}
                    >
                      {section.items.map((item: any, index: number) => (
                        <img
                          key={index}
                          width={180}
                          height={90}
                          src={item.value}
                          alt=""
                        />
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

export default LogoComp5Page;
