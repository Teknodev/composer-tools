import { BaseList } from "../../EditorComponent";
import React from "react";
import styles from "./list12.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type listItem = {
  item: React.JSX.Element;
  text: React.JSX.Element;
};

class List12 extends BaseList {
  static getName(): string {
    return "List 12";
  }

  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Background Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67484143506a40002c2f0020?alt=media",
    });
    this.addProp({
      type: "array",
      key: "list-items",
      displayer: "List Items",
      value: [
        {
          type: "object",
          key: "list-item",
          displayer: "List Item",
          value: [
            {
              type: "image",
              key: "item1",
              displayer: "Item",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b1d23a03b007002cc7aa52?alt=media",
            },
            {
              type: "string",
              key: "text1",
              displayer: "Text",
              value:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ab",
            },
          ],
        },
        {
          type: "object",
          key: "list-item",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Simplifying Payments",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "in Three Steps",
            },
            {
              type: "image",
              key: "item2",
              displayer: "Item",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b1d23a03b007002cc7aa52?alt=media",
            },
            {
              type: "string",
              key: "text2",
              displayer: "Text",
              value:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ab",
            },
          ],
        },
        {
          type: "object",
          key: "list-item",
          displayer: "List Item",
          value: [
            {
              type: "image",
              key: "item3",
              displayer: "Item",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b1d23a03b007002cc7aa52?alt=media",
            },
            {
              type: "string",
              key: "text3",
              displayer: "Text",
              value:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ab",
            },
          ],
        },
      ],
    });
  }

  render() {
    const listItems = this.castToObject<any[]>("list-items");

    return (
      <Base.Container
        className={this.decorateCSS("container")}
        style={{
          backgroundImage: `url(${this.getPropValue("image")})`,
          backgroundSize: "cover",
        }}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {listItems.length > 0 && (
            <div className={this.decorateCSS("section")}>
              {listItems.map((item: any, index: number) => (
                <div key={index} className={this.decorateCSS("boxes")}>
                  <div className={this.decorateCSS("leftBox")}>
                    {item.item1 && (
                      <div className={this.decorateCSS("circle")}>
                        <img
                          className={this.decorateCSS("img")}
                          src={item.item1}
                          alt="item1"
                        />
                      </div>
                    )}
                    {item.text1 && (
                      <div className={this.decorateCSS("titles")}>
                        <div className={this.decorateCSS("text1")}>
                          {item.text1}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className={this.decorateCSS("middleBox")}>
                    {(item.title || item.subtitle) && (
                      <div className={this.decorateCSS("section-wrapper")}>
                        {item.title && (
                          <div className={this.decorateCSS("title")}>
                            {item.title}
                          </div>
                        )}
                        {item.subtitle && (
                          <div className={this.decorateCSS("subtitle")}>
                            {item.subtitle}
                          </div>
                        )}
                      </div>
                    )}
                    {item.item2 && (
                      <div className={this.decorateCSS("circle")}>
                        <img
                          className={this.decorateCSS("img")}
                          src={item.item2}
                          alt="item2"
                        />
                      </div>
                    )}
                    {item.text2 && (
                      <div className={this.decorateCSS("titles")}>
                        <div className={this.decorateCSS("text2")}>
                          {item.text2}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className={this.decorateCSS("rightBox")}>
                    {item.item3 && (
                      <div className={this.decorateCSS("circle")}>
                        <img
                          className={this.decorateCSS("img")}
                          src={item.item3}
                          alt="item3"
                        />
                      </div>
                    )}
                    {item.text3 && (
                      <div className={this.decorateCSS("titles")}>
                        <div className={this.decorateCSS("text3")}>
                          {item.text3}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}
export default List12;
