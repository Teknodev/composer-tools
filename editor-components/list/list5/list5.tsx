import { ReactNode } from "react";
import { BaseList } from "../../EditorComponent";
import React from "react";
import styles from "./list5.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";

type ListItem = {
  title: string;
  uppericon: JSX.Element;
  text: string;
  lowericon: JSX.Element;
}

class List5 extends BaseList {
  getName(): string {
    return "List 5";
  }
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "header",
      displayer: "Header",
      value: "Bringing Your Vision to Life - AI Image Generation Service",
    });
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Background Layout",
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
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Customize & Refine",
            },
            {
              type: "icon",
              key: "uppericon",
              displayer: "Upper Icon",
              value: "VscSettings",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "There are many variations passages Lorem Ipsum available the majority have suffered.",
            },
            {
              type: "icon",
              key: "lowericon",
              displayer: "Lower Icon",
              value: "FaLongArrowAltRight",
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
              value: "Lower Cost",
            },
            {
              type: "icon",
              key: "uppericon",
              displayer: "Upper Icon",
              value: "RiMoneyDollarCircleLine",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "There are many variations passages Lorem Ipsum available the majority have suffered.",
            },
            {
              type: "icon",
              key: "lowericon",
              displayer: "Lower Icon",
              value: "FaLongArrowAltRight",
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
              value: "Speed & Efficiency",
            },
            {
              type: "icon",
              key: "uppericon",
              displayer: "Upper Icon",
              value: "RiSpeedUpFill",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "There are many variations passages Lorem Ipsum available the majority have suffered.",
            },
            {
              type: "icon",
              key: "lowericon",
              displayer: "LowerIcon",
              value: "FaLongArrowAltRight",
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
              value: "Quality & Realism",
            },
            {
              type: "icon",
              key: "uppericon",
              displayer: "Upper Icon",
              value: "FaRegImages",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "There are many variations passages Lorem Ipsum available the majority have suffered.",
            },
            {
              type: "icon",
              key: "lowericon",
              displayer: "Lower Icon",
              value: "FaLongArrowAltRight",
            },
          ],
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
  render(): ReactNode {
    const ListItems = this.castToObject<ListItem[]>("list-items");

    return (
      <>
        <Base.Container className={this.decorateCSS("container")}
          style={{
            backgroundImage: `url(${this.getPropValue("image")})`,
            backgroundSize: "cover"
          }}
        >
          <Base.MaxContent className={this.decorateCSS("max-content")}>
            <Base.VerticalContent>
              {this.castToString(this.getPropValue("header")).trim() && (
                <Base.SectionTitle className={this.getPropValue("image") ? this.decorateCSS("header-dark") : this.decorateCSS("header-light")}>
                  {this.getPropValue("header")}
                </Base.SectionTitle>
              )}
              <Base.ListGrid 
                className={this.decorateCSS("grid")} 
                gridCount={{pc: this.getPropValue("itemCount")}}
              >
                {ListItems.map(
                  (listItem: any, index: number) => {
                  return (
                    <div className={this.decorateCSS("item-box")}>
                      <div
                        key={index}
                        className={this.getPropValue("image") ? this.decorateCSS("item-container-dark") : this.decorateCSS("item-container")}
                      >
                        <Base.VerticalContent>
                          <div className={this.decorateCSS("header-line")}>
                            {listItem.uppericon && (
                              <div className={this.decorateCSS("out-icon")}>
                                <div className={this.decorateCSS("icon")}>
                                  <ComposerIcon
                                    name={listItem.uppericon}
                                    propsIcon={{
                                    className: this.decorateCSS("_icon"),
                                  }}
                                  />
                                </div>
                              </div>
                            )}
                            <div className={this.decorateCSS("item-index")}>
                              {(index + 1).toLocaleString("en-US", {
                              minimumIntegerDigits: 2,
                              useGrouping: false,
                              })}
                              </div>
                          </div>
                          {this.castToString(listItem.title).trim() && (
                            <Base.SectionTitle className={this.decorateCSS("list-item-value-h1")}>
                              {listItem.title}
                            </Base.SectionTitle>
                          )}
                          {this.castToString(listItem.text).trim() && (
                            <Base.SectionDescription className={this.decorateCSS("list-item-value-p")}>
                              {listItem.text}
                            </Base.SectionDescription>
                          )}
                          {listItem.lowericon && (
                            <ComposerIcon
                              name={listItem.lowericon}
                              propsIcon={{
                              className: this.decorateCSS("lower-icon"),
                              }} 
                            />
                          )}

                        </Base.VerticalContent>
                      </div>
                    </div>
                  );
                  }
                )}
              </Base.ListGrid>
            </Base.VerticalContent>
          </Base.MaxContent>
        </Base.Container>
      </>
    );
  }
}
export default List5;