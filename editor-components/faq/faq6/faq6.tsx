import * as React from "react";
import styles from "./faq6.module.scss";
import { BaseFAQ } from "../../EditorComponent";

import { Base } from "../../../composer-base-components/base/base";

class Faq6 extends BaseFAQ {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "icon",
      displayer: "Inactive Icon",
      key: "inactive_icon",
      value: "FaMinus"
    })
    this.addProp({
      type: "icon",
      displayer: "Active Icon",
      key: "active_icon",
      value: "FaPlus"
    })

    this.addProp({
      type: "image",
      displayer: "Image",
      key: "image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661cd34bd2970002c62977c?alt=media&timestamp=1719584962578"
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
              displayer: "Title of Item",
              value: "Ut Neque Augue Interdum Ad Integer Tempus Convallis?"
            },
            {
              type: "string",
              key: "description",
              value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa sed elementum tempus egestas sed. Diam in arcu cursus euismod.",
              displayer: "Description of Item"
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
              displayer: "Title of Item",
              value: "Dictum Feugiat Tincidunt Nam Commodo?"
            },
            {
              type: "string",
              key: "description",
              value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa sed elementum tempus egestas sed. Diam in arcu cursus euismod.",
              displayer: "Description of Item"
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
              displayer: "Title of Item",
              value: "Scelerisque Metus Sem Nostra Pulvinar Sagittis?"
            },
            {
              type: "string",
              key: "description",
              value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa sed elementum tempus egestas sed. Diam in arcu cursus euismod.",
              displayer: "Description of Item"
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
              displayer: "Title of Item",
              value: "Consectetur Scelerisque Lacus Gravida Proin Dolor Sem?"
            },
            {
              type: "string",
              key: "description",
              value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa sed elementum tempus egestas sed. Diam in arcu cursus euismod.",
              displayer: "Description of Item"
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
                  {this.castToString(this.getPropValue("title")) && (
                    <Base.VerticalContent className={this.decorateCSS("title-wrapper")}>
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
                                <div className={this.decorateCSS("title-text")}>{item.getPropValue("title")}</div>
                              )}
                              {(this.getPropValue("inactive_icon") || this.getPropValue("active_icon")) && (
                                <Base.Icon
                                  propsIcon={{ className: `${this.decorateCSS("icon")} ${is_active ? this.decorateCSS("active") : ""}` }}
                                  name={is_active ? this.getPropValue("inactive_icon") : this.getPropValue("active_icon")}
                                />
                              )}
                            </div>
                          )}
                          {this.castToString(item.getPropValue("description")) && (
                            <div className={`${this.decorateCSS("description-box")} ${is_active && this.decorateCSS("active")}`}>
                              <div className={this.decorateCSS("description-text")}>{item.getPropValue("description")}</div>
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
                  <img className={this.decorateCSS("image")} src={this.getPropValue("image")} alt={this.getPropValue("image")} />
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
