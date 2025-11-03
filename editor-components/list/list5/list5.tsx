import { ReactNode } from "react";
import { BaseList } from "../../EditorComponent";
import React from "react";
import styles from "./list5.module.scss";

import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type ListItem = {
  title: React.JSX.Element;
  uppericon: React.JSX.Element;
  text: React.JSX.Element;
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
      key: "subtitle",
      displayer: "Subtitle",
      value: "Our Services",
    });
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
              type: "media",
              key: "uppericon",
              displayer: "Upper Icon",
              value: {
                type: "icon",
                name: "VscSettings",
              },
              additionalParams: {
                availableTypes: ["icon"],
              },
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "There are many variations passages Lorem Ipsum available the majority have suffered.",
            },
            {
              type: "media",
              key: "lowericon",
              displayer: "Lower Icon",
              value: {
                type: "icon",
                name: "FaLongArrowAltRight",
              },
              additionalParams: {
                availableTypes: ["icon"],
              },
            },
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
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
              type: "media",
              key: "uppericon",
              displayer: "Upper Icon",
              value: {
                type: "icon",
                name: "RiMoneyDollarCircleLine",
              },
              additionalParams: {
                availableTypes: ["icon"],
              },
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "There are many variations passages Lorem Ipsum available the majority have suffered.",
            },
            {
              type: "media",
              key: "lowericon",
              displayer: "Lower Icon",
              value: {
                type: "icon",
                name: "FaLongArrowAltRight",
              },
              additionalParams: {
                availableTypes: ["icon"],
              },
            },
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
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
              type: "media",
              key: "uppericon",
              displayer: "Upper Icon",
              value: {
                type: "icon",
                name: "RiSpeedUpFill",
              },
              additionalParams: {
                availableTypes: ["icon"],
              },
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "There are many variations passages Lorem Ipsum available the majority have suffered.",
            },
            {
              type: "media",
              key: "lowericon",
              displayer: "Lower Icon",
              value: {
                type: "icon",
                name: "FaLongArrowAltRight",
              },
              additionalParams: {
                availableTypes: ["icon"],
              },
            },
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
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
              type: "media",
              key: "uppericon",
              displayer: "Upper Icon",
              value: {
                type: "icon",
                name: "FaRegImages",
              },
              additionalParams: {
                availableTypes: ["icon"],
              },
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "There are many variations passages Lorem Ipsum available the majority have suffered.",
            },
            {
              type: "media",
              key: "lowericon",
              displayer: "Lower Icon",
              value: {
                type: "icon",
                name: "FaLongArrowAltRight",
              },
              additionalParams: {
                availableTypes: ["icon"],
              },
            },
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
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
    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2", "animate3", "animate4", "animate5", "animate6"]
      }
    });
  }
  render(): ReactNode {
    const ListItems = this.castToObject<ListItem[]>("list-items");
    const subtitle = this.getPropValue("subtitle");
    const header = this.getPropValue("header");
    const image = this.getPropValue("image");

    return (
      <>
        <Base.Container className={this.decorateCSS("container")}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover"
          }}
        >
          <Base.MaxContent className={this.decorateCSS("max-content")}>
            {(this.castToString(subtitle) || this.castToString(header)) && (
              <Base.VerticalContent className={this.decorateCSS("header")}>
                {this.castToString(subtitle) && (
                  <Base.SectionSubTitle className={`${this.decorateCSS("subtitle")} ${image && this.decorateCSS("dark")}`}>
                    {subtitle as any}
                  </Base.SectionSubTitle>
                )}
                {this.castToString(header) && (
                  <Base.SectionTitle className={`${this.decorateCSS("header-title")} ${image && this.decorateCSS("dark")}`}>
                    {header as any}
                  </Base.SectionTitle>
                )}
              </Base.VerticalContent>
            )}
            {(ListItems.length > 0) && (
              <Base.ListGrid
                className={this.decorateCSS("cards-grid")}
                gridCount={{ pc: this.getPropValue("itemCount") }}
              >
                {ListItems.map(
                  (listItem: any, index: number) => {
                    return (
                      <div className={this.decorateCSS("card-wrapper")}>
                        <ComposerLink path={listItem.url}>
                          <div
                            key={index}
                            className={this.decorateCSS("card")}
                            data-animation={this.getPropValue("hoverAnimation").join(" ")}
                          >
                            {(listItem.uppericon || this.getPropValue("showIndex")) && (
                              <div className={this.decorateCSS("card-header")}>
                                {listItem.uppericon && (
                                  <div className={this.decorateCSS("icon-section")}>
                                    <div className={this.decorateCSS("icon-badge")}>
                                      <div className={this.decorateCSS("icon-wrapper")}>
                                        <Base.Media
                                          value={listItem.uppericon}
                                          className={this.decorateCSS("icon")}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                )}
                                {this.getPropValue("showIndex") && (
                                  <div className={this.decorateCSS("index-section")}>
                                    <Base.H1 className={this.decorateCSS("item-index")}>
                                      {(index + 1).toLocaleString("en-US", {
                                        minimumIntegerDigits: 2,
                                        useGrouping: false,
                                      })}
                                    </Base.H1>
                                  </div>
                                )}
                              </div>
                            )}
                            {this.castToString(listItem.title) && (
                              <Base.H3 className={this.decorateCSS("card-title")}>
                                {listItem.title as any}
                              </Base.H3>
                            )}
                            {this.castToString(listItem.text) && (
                              <Base.P className={this.decorateCSS("card-description")}>
                                {listItem.text as any}
                              </Base.P>
                            )}
                            {listItem.lowericon && (
                              <Base.Media
                                value={listItem.lowericon}
                                className={this.decorateCSS("arrow-icon")}
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