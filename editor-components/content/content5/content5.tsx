import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content5.module.scss";

type Contentcard = {
  itemText: string;
};

class Content5 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Build and Customize Your Perfect Page",
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "WELCOME TO COMPOSER PAGE",
    });

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64edc2f6057bdf002c2ad50c?alt=media&timestamp=1693303518223",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "First, it's important to remember that your description should be concise and to the point. You want to capture your audience's attention quickly and clearly convey your message. Keep your description under 150 words if possible, as people tend to skim through longer paragraphs.",
    });

    this.addProp({
      type: "array",
      key: "item",
      displayer: "Item",
      value: [
        {
          type: "object",
          key: "item-list",
          displayer: "Item List",
          value: [
            {
              type: "string",
              key: "itemText",
              displayer: "Item Text",
              value: "Get high conversion rates",
            },
          ],
        },
        {
          type: "object",
          key: "item-list",
          displayer: "Item List",
          value: [
            {
              type: "string",
              key: "itemText",
              displayer: "Item Text",
              value: "Engage more users",
            },
          ],
        },
        {
          type: "object",
          key: "item-list",
          displayer: "Item List",
          value: [
            {
              type: "string",
              key: "itemText",
              displayer: "Item Text",
              value: "Bring it to life again with us",
            },
          ],
        },
        {
          type: "object",
          key: "item-list",
          displayer: "Item List",
          value: [
            {
              type: "string",
              key: "itemText",
              displayer: "Item Text",
              value: "Virtual Private Server (VPS)",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Content 5";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("header")}>
            <span>{this.getPropValue("subtitle")}</span>
            <h2>{this.getPropValue("title")}</h2>
          </div>
          <div className={this.decorateCSS("card-child")}>
            <div className={this.decorateCSS("child-left")}>
              <img
                className={this.decorateCSS("image")}
                alt="server"
                src={this.getPropValue("image")}
              />
            </div>
            <div className={this.decorateCSS("child-right")}>
              <p>{this.getPropValue("description")}</p>
              {this.castToObject<Contentcard[]>("item").map(
                (data: any, index: number) => (
                  <div key={index} className={this.decorateCSS("items")}>
                    <div className={this.decorateCSS("logo-icon")}>
                      <img src="https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/646dc6fbfba070002b74c38e?alt=media&timestamp=1684915965833" />
                    </div>
                    <span>{data.itemText}</span>
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
