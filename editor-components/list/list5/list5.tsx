import { ReactNode } from "react";
import { BaseList } from "../../EditorComponent";
import React from "react";
import styles from "./list5.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type ListItem = {
  title: React.JSX.Element;
  uppericon: React.JSX.Element;
  text: string;
  lowericon: React.JSX.Element;
  url: string;
}

class List5 extends BaseList {
  static getName(): string {
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
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
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
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
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
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
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
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 4
    });
    this.addProp({
      type: "boolean",
      key: "showIndex",
      displayer: "Show Index",
      value: true
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
            {this.castToString(this.getPropValue("header")) && (
              <Base.VerticalContent className={this.decorateCSS("header")}>
                <Base.SectionTitle className={`${this.decorateCSS("header-title")} ${this.getPropValue("image") && this.decorateCSS("dark")}`}>
                  {this.getPropValue("header")}
                </Base.SectionTitle>
              </Base.VerticalContent>
            )}
            {(ListItems.length > 0) && (
              <Base.ListGrid
                className={this.decorateCSS("grid")}
                gridCount={{ pc: this.getPropValue("itemCount") }}
              >
                {ListItems.map(
                  (listItem: any, index: number) => {
                    return (
                      <div className={this.decorateCSS("item-box")}>
                        <ComposerLink path={listItem.url}>
                          <div
                            key={index}
                            className={this.decorateCSS("item-container")}
                          >
                            {(listItem.uppericon || this.getPropValue("showIndex")) && (
                              <div className={this.decorateCSS("header-line")}>
                                {listItem.uppericon && (
                                  <div className={this.decorateCSS("left")}>
                                    <div className={this.decorateCSS("out-icon")}>
                                      <div className={this.decorateCSS("icon-wrapper")}>
                                        <ComposerIcon
                                          name={listItem.uppericon}
                                          propsIcon={{
                                            className: this.decorateCSS("icon"),
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                )}
                                {this.getPropValue("showIndex") && (
                                  <div className={this.decorateCSS("right")}>
                                    <div className={this.decorateCSS("item-index")}>
                                      {(index + 1).toLocaleString("en-US", {
                                        minimumIntegerDigits: 2,
                                        useGrouping: false,
                                      })}
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}
                            {this.castToString(listItem.title) && (
                              <div className={this.decorateCSS("list-item-value-h1")}>
                                {listItem.title}
                              </div>
                            )}
                            {this.castToString(listItem.text) && (
                              <div className={this.decorateCSS("list-item-value-p")}>
                                {listItem.text}
                              </div>
                            )}
                            {listItem.lowericon && (
                              <ComposerIcon
                                name={listItem.lowericon}
                                propsIcon={{
                                  className: this.decorateCSS("lower-icon"),
                                }}
                              />
                            )}
                          </div>
                        </ComposerLink>
                      </div>
                    );
                  }
                )}
              </Base.ListGrid>
            )}
          </Base.MaxContent>
        </Base.Container>
      </>
    );
  }
}
export default List5;