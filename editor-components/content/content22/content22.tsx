import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content22.module.scss";
import { Base } from "../../../composer-base-components/base/base";

interface Item {
  image: string;
  sectionHeading: string;
  description: string;
}

class Content22 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "object",
      key: "mainTitle",
      displayer: "Main Title",
      value: [
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "High Quality Services",
        },
        {
          type: "string",
          key: "subtitle",
          displayer: "Subtitle",
          value: "Build a positive impact on your business. Check out what we have to offer.",
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "items",
      displayer: "Items",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image URL",
              value:
                "https://www.keydesign-themes.com/intact/business/wp-content/uploads/sites/2/2017/02/photo3.jpg",
            },
            {
              type: "string",
              key: "sectionHeading",
              displayer: "Section Heading",
              value: "Strategy",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco, consectetur adipisicing elit, sed do eiusmod.",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image URL",
              value:
                "https://www.keydesign-themes.com/intact/business/wp-content/uploads/sites/2/2017/02/photo2.jpg",
            },
            {
              type: "string",
              key: "sectionHeading",
              displayer: "Section Heading",
              value: "Planning",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco, consectetur adipisicing elit, sed do eiusmod.",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image URL",
              value:
                "https://www.keydesign-themes.com/intact/business/wp-content/uploads/sites/2/2017/02/photobox.jpg",
            },
            {
              type: "string",
              key: "sectionHeading",
              displayer: "Section Heading",
              value: "Development",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco, consectetur adipisicing elit, sed do eiusmod.",
            },
          ],
        },
      ],
    });
  }

  static getName(): string {
    return "Content 22";
  }

  render() {
    const mainTitle = this.castToObject<{ title: string; subtitle: string }>("mainTitle");
    const items = this.castToObject<Item[]>("items") || [];


    return (
      <Base.Container className={this.decorateCSS("section")}>
        <Base.MaxContent className={this.decorateCSS("wrapper")}>
          <div className={this.decorateCSS("header")}>
            <h2>{mainTitle.title}</h2>
            <div className={this.decorateCSS("line")}></div>
            <p>{mainTitle.subtitle}</p>
          </div>

          {items.map((item, i) => (
            <React.Fragment key={i}>
              <div
                className={`${this.decorateCSS("content")} ${
                  i % 2 === 1 ? this.decorateCSS("reverse") : ""
                }`}
              >
                <div className={this.decorateCSS("image-container")}>
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.sectionHeading}
                      className={this.decorateCSS("image")}
                    />
                  )}
                </div>
                <div className={this.decorateCSS("text")}>
                  <h3>{item.sectionHeading}</h3>
                  <p>{item.description}</p>
                  <Base.Button className={this.decorateCSS("read-more")}>READ MORE</Base.Button>
                </div>
              </div>
              {i < items.length - 1 && <div className={this.decorateCSS("divider")} />}
            </React.Fragment>
          ))}

        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Content22;
