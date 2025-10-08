import * as React from "react";
import styles from "./faq6.module.scss";
import { BaseFAQ } from "../../EditorComponent";

import { Base } from "../../../composer-base-components/base/base";

class Faq6 extends BaseFAQ {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "media",
      displayer: "Inactive Icon",
      key: "inactive_icon",
      additionalParams: {
        availableTypes: ["icon"],
      },
      value: {
        type: "icon",
        name: "FaMinus",
      },
    })
    this.addProp({
      type: "media",
      displayer: "Active Icon",
      key: "active_icon",
      additionalParams: {
        availableTypes: ["icon"],
      },
      value: {
        type: "icon",
        name: "FaPlus",
      },
    })

    this.addProp({
      type: "media",
      displayer: "Image",
      key: "image",
      additionalParams: {
        availableTypes: ["image", "video"],
      },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661cd34bd2970002c62977c?alt=media&timestamp=1719584962578",
      },
    })

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "FAQ"
    })

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Frequently Asked Questions"
    },)

    this.addProp({
      type: "array",
      displayer: "List Items",
      key: "list_items",
      value: [
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Ut Neque Augue Interdum Ad Integer Tempus Convallis?"
            },
            {
              type: "string",
              key: "description",
              value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa sed elementum tempus egestas sed. Diam in arcu cursus euismod.",
              displayer: "Description"
            }
          ]
        },
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Dictum Feugiat Tincidunt Nam Commodo?"
            },
            {
              type: "string",
              key: "description",
              value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa sed elementum tempus egestas sed. Diam in arcu cursus euismod.",
              displayer: "Description"
            }
          ]
        },
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Scelerisque Metus Sem Nostra Pulvinar Sagittis?"
            },
            {
              type: "string",
              key: "description",
              value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa sed elementum tempus egestas sed. Diam in arcu cursus euismod.",
              displayer: "Description"
            }
          ]
        },
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Consectetur Scelerisque Lacus Gravida Proin Dolor Sem?"
            },
            {
              type: "string",
              key: "description",
              value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa sed elementum tempus egestas sed. Diam in arcu cursus euismod.",
              displayer: "Description"
            }
          ]
        }
      ]
    })

    this.setComponentState("active_index", 0);


  }
  static getName(): string {
    return "FAQ 6";
  }

  onItemClick(index: number) {
    const active_index = this.getComponentState("active_index");

    if (active_index == index) {
      this.setComponentState("active_index", -1);
    } else {
      this.setComponentState("active_index", index)
    }
  }

  render() {
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            <div className={this.decorateCSS("content")}>
              {(this.castToString(this.getPropValue("title")) || (this.getPropValue("list_items").length > 0)) && (
                <div className={this.decorateCSS("items-wrapper")}>
                  {(this.castToString(this.getPropValue("title")) || this.castToString(this.getPropValue("subtitle"))) && (
                    <Base.VerticalContent className={this.decorateCSS("header-wrapper")}>
                      {this.castToString(this.getPropValue("subtitle")) && (
                        <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                          {this.getPropValue("subtitle")}
                        </Base.SectionSubTitle>
                      )}

                      <Base.SectionTitle className={this.decorateCSS("title")}>
                        {this.getPropValue("title")}
                      </Base.SectionTitle>
                    </Base.VerticalContent>
                  )}
                  {(this.getPropValue("list_items").length > 0) && (
                    <div className={this.decorateCSS("items")}>
                      {this.getPropValue("list_items").map((item: any, index: number) => {
                        const is_active = this.getComponentState("active_index") == index;

                        return <div key={index} className={this.decorateCSS("item")} onClick={() => this.onItemClick(index)}>
                          {(this.castToString(item.getPropValue("title")) || this.getPropValue("inactive_icon") || this.getPropValue("active_icon")) && (
                            <div className={this.decorateCSS("title-box")}>
                              {this.castToString(item.getPropValue("title")) && (
                                <Base.H3 className={this.decorateCSS("title-text")}>{item.getPropValue("title")}</Base.H3>
                              )}
                              {(this.getPropValue("inactive_icon") || this.getPropValue("active_icon")) && (
                                <Base.Media
                                  value={is_active ? this.getPropValue("inactive_icon") : this.getPropValue("active_icon")}
                                  className={`${this.decorateCSS("icon")} ${is_active ? this.decorateCSS("active") : ""}`}
                                />
                              )}
                            </div>
                          )}
                          {this.castToString(item.getPropValue("description")) && (
                            <div className={`${this.decorateCSS("description-box")} ${is_active && this.decorateCSS("active")}`}>
                              <Base.P className={this.decorateCSS("description-text")}>{item.getPropValue("description")}</Base.P>
                            </div>
                          )}
                        </div>
                      })}
                    </div>
                  )}
                </div>
              )}
              {this.getPropValue("image") && (
                <div className={this.decorateCSS("image-box")}>
                  <Base.Media value={this.getPropValue("image")} className={this.decorateCSS("image")} />
                </div>
              )}
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Faq6;
