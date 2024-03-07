import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials2.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Item = {
  image: string;
  name: string;
  nameId: string;
  description: string;
  time: string;
};

class Testimonials2Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "badge",
      displayer: "Badge",
      value: "WHAT OUR CLIENTS SAY",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Happy Clients' Testimonials",
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 5,
    });
    this.addProp({
      type: "array",
      key: "card-items",
      displayer: "Card Items",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Image",
              value:
                "RiStarSFill",
            },       
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Flat design is characterized by simple, two-dimensional elements and a clean, minimal aesthetic. It's a great way to create a streamlined and modern look.",           
            },
            {
              type: "string",
              key: "name",
              displayer: "name",
              value: "Mary Sheram",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Designer",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Image",
              value:
                "RiStarSFill",
            },       
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Flat design is characterized by simple, two-dimensional elements and a clean, minimal aesthetic. It's a great way to create a streamlined and modern look.",           
            },
            {
              type: "string",
              key: "name",
              displayer: "name",
              value: "Mary Sheram",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Designer",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Image",
              value:
                "RiStarSFill",
            },       
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Flat design is characterized by simple, two-dimensional elements and a clean, minimal aesthetic. It's a great way to create a streamlined and modern look.",           
            },
            {
              type: "string",
              key: "name",
              displayer: "name",
              value: "Mary Sheram",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Designer",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Image",
              value:
                "RiStarSFill",
            },       
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Flat design is characterized by simple, two-dimensional elements and a clean, minimal aesthetic. It's a great way to create a streamlined and modern look.",           
            },
            {
              type: "string",
              key: "name",
              displayer: "name",
              value: "Mary Sheram",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Designer",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Image",
              value:
                "RiStarSFill",
            },       
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Flat design is characterized by simple, two-dimensional elements and a clean, minimal aesthetic. It's a great way to create a streamlined and modern look.",           
            },
            {
              type: "string",
              key: "name",
              displayer: "name",
              value: "Mary Sheram",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Designer",
            },
          ],
        },
       
      ],
    });
  }

  getName(): string {
    return "Testimonials 2";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("badge")}>{this.getPropValue("badge")}</div>
            <h1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h1>
          <div className={this.decorateCSS("testimonials2")}>
              {this.castToObject<Item[]>("card-items").map(
                (item: Item, index: number) => (
                  <div style={{
                          width: 100 / this.getPropValue("itemCount") + "%",
                          display: "flex",
                          justifyContent:"center",
                          flexWrap: "wrap",
                          minWidth: "250px",
                        }}>
                  <div key={index} className={this.decorateCSS("card")} >
                    <div className={this.decorateCSS("icon")}></div>
                    <span className={this.decorateCSS("item-description")}>{item.description}</span>
                    <h5 className={this.decorateCSS("item-name")}>{item.name}</h5>
                  </div>
            </div>
                )
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonials2Page;
