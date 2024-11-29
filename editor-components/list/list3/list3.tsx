import * as React from "react";
import { BaseList } from "../../EditorComponent";
import styles from "./list3.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Item = {
  itemTitle: string;
  itemText1: string;
  itemText2: string;
  itemText3: string;
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
      <Base.Container className={this.decorateCSS("container")} isFull="true">
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.ListGrid className={this.decorateCSS("row")} gridCount={{ pc: this.getPropValue("itemCount") }}>
            {(title || description) && (
              <div className={this.decorateCSS("first")}>
                <Base.VerticalContent>
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
                {buttonExist && (
                  <div className={this.decorateCSS("buttondiv")}>
                    <ComposerLink path={this.getPropValue("buttonUrl")}>
                      <button className={`${this.decorateCSS("button")}`}>
                        <span>
                          <span className={this.decorateCSS("btn-text")}>{this.getPropValue("button")}</span>
                          <span className={this.decorateCSS("btn-icon")}>
                            <ComposerIcon 
                              name={"FaArrowRightLong"}
                            />
                          </span>
                        </span>
                      </button>
                    </ComposerLink>
                  </div>
                )}
              </div>
            )}
            {listItems.map((listItem: Item, index: number) => {

              return (
                <div key={index} className={this.decorateCSS("card")}>
                  <div className={this.decorateCSS("card-content")}>
                    {listItem.itemTitle && (
                      <Base.SectionTitle className={this.decorateCSS("itemTitle")}>
                        {listItem.itemTitle}
                      </Base.SectionTitle>
                    )}
                    {listItem.itemText1 && (
                      <Base.SectionDescription className={this.decorateCSS("itemText")}>
                        {listItem.itemText1}
                      </Base.SectionDescription>
                    )}
                    {listItem.itemText2 && (
                      <span className={this.decorateCSS("spanItem")}></span>
                    )}
                    {listItem.itemText2 && (
                      <Base.SectionDescription className={this.decorateCSS("itemText")}>
                        {listItem.itemText2}
                      </Base.SectionDescription>
                    )}
                    {listItem.itemText3 && (
                      <span className={this.decorateCSS("spanItem")}></span>
                    )}
                    {listItem.itemText3 && (
                      <Base.SectionDescription className={this.decorateCSS("itemText")}>
                        {listItem.itemText3}
                      </Base.SectionDescription>
                    )}
                  </div>
                  <Base.H2 className={this.decorateCSS("index")}>
                    {index < 9 ? `0${index + 1}` : index + 1}
                  </Base.H2>
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
