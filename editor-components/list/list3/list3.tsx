import * as React from "react";
import { BaseList } from "../../EditorComponent";
import styles from "./list3.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type Item = {
  itemTitle: JSX.Element;
  itemText1: JSX.Element;
  itemText2: JSX.Element;
  itemText3: JSX.Element;
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
              type: "string",
              key: "itemText1",
              displayer: "Item Text",
              value: "Psychologist - John parker 10:00 AM to 12:30 PM.",
            },
            {
              type: "string",
              key: "itemText2",
              displayer: "Item Text 2",
              value: "Sociology - Herman miller 02:00 PM to 04:30 PM",
            },
            {
              type: "string",
              key: "itemText3",
              displayer: "Item Text 3",
              value: "Geologist - Jeremy dupont 05:00 PM to 07:30 PM",
            },
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
              type: "string",
              key: "itemText1",
              displayer: "Item Text",
              value: "Economy - Michal ruheen 10:00 AM to 12:30 PM",
            },
            {
              type: "string",
              key: "itemText2",
              displayer: "Item Text 2",
              value: "Engineer - Jessica dover 02:00 PM to 04:30 PM",
            },
            {
              type: "string",
              key: "itemText3",
              displayer: "Item Text 3",
              value: "Psychologist - John parker 05:00 PM to 07:30 PM",
            },
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
              type: "string",
              key: "itemText1",
              displayer: "Item Text",
              value: "Biologist- Saleena fountain 10:00 AM to 12:30 PM",
            },
            {
              type: "string",
              key: "itemText2",
              displayer: "Item Text 2",
              value: "Secretary- Paulina morris 02:00 PM to 04:30 PM ",
            },
            {
              type: "string",
              key: "itemText3",
              displayer: "Item Text 3",
              value: "Politician - Wendaya royin 05:00 PM to 07:30 PM",
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

  render() {
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));

    const listItems = this.castToObject<Item[]>("listItems");
    const buttonExist = this.castToString(this.getPropValue("button"));

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div
            className={this.decorateCSS("row")}
            style={{
              gridTemplateColumns: `repeat(${this.getPropValue(
                "itemCount"
              )}, 1fr)`,
            }}
          >
            {(title || description) && (
              <div className={this.decorateCSS("first")}>
                <div className={this.decorateCSS("firstContent")}>
                  {title && (
                    <div className={this.decorateCSS("title")}>
                      <h1>{this.getPropValue("title")}</h1>
                    </div>
                  )}
                  {description && (
                    <div className={this.decorateCSS("description")}>
                      <p>{this.getPropValue("description")}</p>
                    </div>
                  )}
                  {buttonExist && (
                    <div className={this.decorateCSS("buttondiv")}>
                      <ComposerLink path={this.getPropValue("buttonUrl")}>
                        <button className={`${this.decorateCSS("button")}`}>
                          {this.getPropValue("button")}
                        </button>
                      </ComposerLink>
                    </div>
                  )}
                </div>
              </div>
            )}
            {listItems.map((listItem: Item, index: number) => {
              const itemTitle = this.castToString(listItem.itemTitle);
              const itemText1 = this.castToString(listItem.itemText1);
              const itemText2 = this.castToString(listItem.itemText2);
              const itemText3 = this.castToString(listItem.itemText3);

              return (
                <div key={index} className={this.decorateCSS("card")}>
                  <div className={this.decorateCSS("card-content")}>
                    {itemTitle && (
                      <p className={this.decorateCSS("itemTitle")}>
                        {listItem.itemTitle}
                      </p>
                    )}
                    {itemText1 && (
                      <p className={this.decorateCSS("itemText")}>
                        {listItem.itemText1}
                      </p>
                    )}
                    {itemText2 && (
                      <span className={this.decorateCSS("spanItem")}></span>
                    )}
                    {itemText2 && (
                      <p className={this.decorateCSS("itemText")}>
                        {listItem.itemText2}
                      </p>
                    )}
                    {itemText3 && (
                      <span className={this.decorateCSS("spanItem")}></span>
                    )}
                    {itemText3 && (
                      <p className={this.decorateCSS("itemText")}>
                        {listItem.itemText3}
                      </p>
                    )}
                  </div>
                  <h3 className={this.decorateCSS("index")}>
                    {index < 9 ? `0${index + 1}` : index + 1}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default List3;
