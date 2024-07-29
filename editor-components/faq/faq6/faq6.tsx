import * as React from "react";
import styles from "./faq6.module.scss";
import { BaseFAQ } from "../../EditorComponent";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type ListItem = {
  title: JSX.Element;
  description: JSX.Element;
};

class FaqPost extends BaseFAQ {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "icon",
      displayer: "Inactive Icon",
      key: "inactive_icon",
      value: "FaMinus"
    });
    this.addProp({
      type: "icon",
      displayer: "Active Icon",
      key: "active_icon",
      value: "FaPlus"
    });

    this.addProp({
      type: "image",
      displayer: "Image",
      key: "image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661cd34bd2970002c62977c?alt=media&timestamp=1719584962578"
    });

    this.addProp({
      type: "string",
      displayer: "Title",
      value: "FAQ",
      key: "title"
    });

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
    });

    this.setComponentState("active_index", 0);
  }

  getName(): string {
    return "FAQ-6";
  }

  onItemClick(index: number) {
    const active_index = this.getComponentState("active_index");

    if (active_index == index) {
      this.setComponentState("active_index", -1);
    } else {
      this.setComponentState("active_index", index);
    }
  }

  render() {

    const listItems = this.castToObject<ListItem[]>("list_items");

    const image = this.getPropValue("image");
    const title = this.getPropValue("title");

    const isTitleExist = this.castToString(this.getPropValue("title"));

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {listItems.length > 0 &&
            <div className={this.decorateCSS("items")}>
              {listItems.map((item: ListItem, index: number) => {

                const is_active = this.getComponentState("active_index") == index;

                const isTitleExist = this.castToString(item.title);
                const isDescExist = this.castToString(item.description);

                if (isTitleExist)
                  return (
                    <div key={index} className={this.decorateCSS("item")} onClick={() => this.onItemClick(index)}>
                      <div className={this.decorateCSS("title-box")}>
                        {isTitleExist &&
                          <span className={this.decorateCSS("title-text")}>{item.title}</span>
                        }
                        <ComposerIcon
                          propsIcon={{
                            className: this.decorateCSS("icon")
                          }}
                          name={is_active ? this.getPropValue("inactive_icon") : this.getPropValue("active_icon")}
                        />
                      </div>
                      {isDescExist &&
                        <div className={`${this.decorateCSS("description-box")} ${is_active && this.decorateCSS("active")}`}>
                          <p className={this.decorateCSS("description-text")}>{item.description}</p>
                        </div>
                      }
                    </div>
                  );
              })}
            </div>
          }
          {(isTitleExist || image) &&
            <div className={this.decorateCSS("image-box")}>
              {image &&
                <img className={this.decorateCSS("image")} src={image} alt="faq image" />
              }
              {isTitleExist &&
                <h1 className={this.decorateCSS("title")}>{title}</h1>
              }
            </div>
          }
        </div>
      </div>
    );
  }
}

export default FaqPost;
