import * as React from "react";
import { BaseList } from "../../EditorComponent";
import styles from "./list3.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Item = {
  itemTitle: JSX.Element;
  texts: TextItem[];
};
type TextItem = {
  itemText: JSX.Element;
};

class List3 extends BaseList {
  getName(): string {
    return "List 3";
  }
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "title",
      value: "Event Schedule",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "description",
      value:
        "Lorem ipsum dolor consectetur eiusmod tempor incididunt labore exercitation tempor.",
    });

    this.addProp({
      type: "string",
      key: "button",
      displayer: "Button",
      value: "Download Schedule",
    });

    this.addProp({
      type: "page",
      key: "buttonUrl",
      displayer: "Button URL",
      value: "",
    });

    this.addProp({
      type: "array",
      key: "listItems",
      displayer: "List Items",
      value: [
        {
          type: "object",
          key: "listItem",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "itemTitle",
              displayer: "Item Title",
              value: "Friday, Dec 24",
            },
            {
              type: "array",
              key: "texts",
              displayer: "Texts",
              value: [
                {
                  type: "object",
                  key: "text",
                  displayer: "Text",
                  value: [
                    {
                      type: "string",
                      key: "itemText",
                      displayer: "Item Text",
                      value: "Psychologist - John parker 10:00 AM to 12:30 PM",
                    },
                  ]
                },
                {
                  type: "object",
                  key: "Text",
                  displayer: "Text",
                  value: [
                    {
                      type: "string",
                      key: "itemText",
                      displayer: "Item Text",
                      value: "Sociology - Herman miller 02:00 PM to 04:30 PM",
                    },
                  ]
                },
                {
                  type: "object",
                  key: "Text",
                  displayer: "Text",
                  value: [
                    {
                      type: "string",
                      key: "itemText",
                      displayer: "Item Text",
                      value: "Geologist - Jeremy dupont 05:00 PM to 07:30 PM",
                    },
                  ]
                },
              ]
            }
          ],
        },
        {
          type: "object",
          key: "listItem",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "itemTitle",
              displayer: "Item Title",
              value: "Saturday, Dec 25",
            },
            {
              type: "array",
              key: "texts",
              displayer: "Texts",
              value: [
                {
                  type: "object",
                  key: "text",
                  displayer: "Text",
                  value: [
                    {
                      type: "string",
                      key: "itemText",
                      displayer: "Item Text",
                      value: "Economy - Michal ruheen 10:00 AM to 12:30 PM",
                    },
                  ]
                },
                {
                  type: "object",
                  key: "Text",
                  displayer: "Text",
                  value: [
                    {
                      type: "string",
                      key: "itemText",
                      displayer: "Item Text",
                      value: "Engineer - Jessica dover 02:00 PM to 04:30 PM",
                    },
                  ]
                },
                {
                  type: "object",
                  key: "Text",
                  displayer: "Text",
                  value: [
                    {
                      type: "string",
                      key: "itemText",
                      displayer: "Item Text",
                      value: "Psychologist - John parker 05:00 PM to 07:30 PM",
                    },
                  ]
                },
              ]
            }
          ],
        },
        {
          type: "object",
          key: "listItem",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "itemTitle",
              displayer: "Item Title",
              value: "Sunday, Dec 26",
            },
            {
              type: "array",
              key: "texts",
              displayer: "Texts",
              value: [
                {
                  type: "object",
                  key: "text",
                  displayer: "Text",
                  value: [
                    {
                      type: "string",
                      key: "itemText",
                      displayer: "Item Text",
                      value: "Biologist- Saleena fountain 10:00 AM to 12:30 PM",
                    },
                  ]
                },
                {
                  type: "object",
                  key: "Text",
                  displayer: "Text",
                  value: [
                    {
                      type: "string",
                      key: "itemText",
                      displayer: "Item Text",
                      value: "Secretary- Paulina morris 02:00 PM to 04:30 PM",
                    },
                  ]
                },
                {
                  type: "object",
                  key: "Text",
                  displayer: "Text",
                  value: [
                    {
                      type: "string",
                      key: "itemText",
                      displayer: "Item Text",
                      value: "Politician - Wendaya royin 05:00 PM to 07:30 PM",
                    },
                  ]
                },
              ]
            }
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
    this.addProp({
      type: "boolean",
      key: "showCardNumber",
      displayer: "Show Card Number",
      value: true,
    });
  }

  render() {
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));

    const listItems = this.castToObject<Item[]>("listItems");
    const buttonExist = this.castToString(this.getPropValue("button"));

    return (
      <Base.Container className={this.decorateCSS("container")} isFull="true">
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.ListGrid className={this.decorateCSS("row")} gridCount={{ pc: this.getPropValue("itemCount") }}>
            {(title || description || buttonExist) && (
              <div className={this.decorateCSS("first")}>
                {(title || description) && (
                  <Base.VerticalContent className={this.decorateCSS("first-inner")}>
                    {title && (
                      <Base.SectionTitle className={this.decorateCSS("title")}>
                        {title}
                      </Base.SectionTitle>
                    )}
                    {description && (
                      <Base.SectionDescription className={this.decorateCSS("description")}>
                        {description}
                      </Base.SectionDescription>
                    )}
                  </Base.VerticalContent>
                )}
                {buttonExist && (
                  <ComposerLink path={this.getPropValue("buttonUrl")}>
                    <Base.Button className={this.decorateCSS("button")}>
                      {this.getPropValue("button")}
                    </Base.Button>
                  </ComposerLink>
                )}
              </div>
            )}
            {listItems.map((listItem: Item, index: number) => {
              return (
                <div key={index} className={this.decorateCSS("card")}>
                  <div className={this.decorateCSS("card-content")}>
                    {this.castToString(listItem.itemTitle) && (
                      <div className={this.decorateCSS("itemTitle")}>
                        {listItem.itemTitle}
                      </div>
                    )}
                    {listItem.texts.map((item: TextItem, index: number) => (
                      <div className={this.decorateCSS("cardItem")}>
                        <div className={this.decorateCSS("spanItem")}></div>
                        <div className={this.decorateCSS("itemText")}>
                          {item.itemText}
                        </div>
                      </div>
                    ))}
                  </div>
                  {this.getPropValue("showCardNumber") && (
                    <div className={this.decorateCSS("index")}>
                      {index < 9 ? `0${index + 1}` : index + 1}
                    </div>
                  )}
                </div>
              );
            })}
          </Base.ListGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default List3;
