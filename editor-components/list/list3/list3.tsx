import * as React from "react";
import { ReactNode } from "react";
import { BaseList } from "../../EditorComponent";
import styles from "./list3.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

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
      value: "_Event Schedule",
    })
    this.addProp({
      type: "string",
      key: "description",
      displayer: "description",
      value: "Lorem ipsum dolor consectetur eiusmod tempor incididunt labore exercitation tempor.",
    })
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Download Schedule",
            },

            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "https://www.google.com/",
            },
          ],
        },
      ],
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
              key: "item-title",
              displayer: "Item Title",
              value:
                "Friday, Dec 24",
            },
            {
              type: "string",
              key: "item-text",
              displayer: "Item Text",
              value:
                "Psychologist - John parker 10:00 AM to 12:30 PM.",
            },
            {
              type: "string",
              key: "item-text",
              displayer: "Item Text 2",
              value:
                "Sociology - Herman miller 02:00 PM to 04:30 PM",
            },
            {
              type: "string",
              key: "item-text",
              displayer: "Item Text 3",
              value:
                "Geologist - Jeremy dupont 05:00 PM to 07:30 PM",
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
              key: "item-title",
              displayer: "Item Title",
              value:
                "Saturday, Dec 25",
            },
            {
              type: "string",
              key: "item-text",
              displayer: "Item Text",
              value:
                "Economy - Michal ruheen 10:00 AM to 12:30 PM",
            },
            {
              type: "string",
              key: "item-text",
              displayer: "Item Text 2",
              value:
                "Engineer - Jessica dover 02:00 PM to 04:30 PM",
            },
            {
              type: "string",
              key: "item-text",
              displayer: "Item Text 3",
              value:
                "Psychologist - John parker 05:00 PM to 07:30 PM",
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
              key: "item-title",
              displayer: "Item Title",
              value:
                "Sunday, Dec 26",
            },
            {
              type: "string",
              key: "item-text",
              displayer: "Item Text",
              value:
                "Biologist- Saleena fountain 10:00 AM to 12:30 PM",
            },
            {
              type: "string",
              key: "item-text",
              displayer: "Item Text 2",
              value:
                "Secretary- Paulina morris 02:00 PM to 04:30 PM "
            },
            {
              type: "string",
              key: "item-text",
              displayer: "Item Text 3",
              value:
                "Politician - Wendaya royin 05:00 PM to 07:30 PM",
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
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("first")}>
            <div className={this.decorateCSS("title")}>{this.getPropValue("title")}</div>
            <div className={this.decorateCSS("description")}>{this.getPropValue("description")}</div>
            <div className={this.decorateCSS("buttondiv")}>
              {this.getPropValue("buttons").map(
                (item: any, indexButtons: number) => {
                  return (
                    <ComposerLink
                      key={indexButtons}
                      path={item.value[1].value}
                    >
                      <button
                        className={`${this.decorateCSS("button")}`}
                      >
                        {item.value[0].value}
                      </button>
                    </ComposerLink>
                  );
                }
              )}
            </div>
          </div>
          {this.getPropValue("list-items").map(
            (listItem: any, index: number) => (
              <div
                key={index}
                className={this.decorateCSS("all-card")}
                style={{
                  width: 90 / this.getPropValue("itemCount") + "%",
                }}
              >

                <div className={this.decorateCSS("item-content")}>
                  <p className={this.decorateCSS("item-title")}>{listItem.value[0].value}</p>
                  <p className={this.decorateCSS("item-text")}>{listItem.value[1].value}</p>
                  <p className={this.decorateCSS("item-text")}>{listItem.value[2].value}</p>
                  <p className={this.decorateCSS("item-text3")}>{listItem.value[3].value}</p>


                  <h3 className={this.decorateCSS("index")}>{index < 9 ? `0${index + 1}` : index + 1}</h3>

                </div>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}

export default List3;
