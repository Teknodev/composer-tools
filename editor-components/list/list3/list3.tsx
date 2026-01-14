import * as React from "react";
import { BaseList } from "../../EditorComponent";
import styles from "./list3.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Item = {
  itemTitle: React.JSX.Element;
  texts: TextItem[];
};
type TextItem = {
  itemText: React.JSX.Element;
};

class List3 extends BaseList {
  static getName(): string {
    return "List 3";
  }
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Schedule",
    });
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
    this.addProp(INPUTS.BUTTON("button", "Button", "Download Schedule", "", null, null, "Primary"));

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
    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2", "animate3", "animate4", "animate5"]
      }
    });
  }

  render() {
    const title = this.getPropValue("title");
    const subtitle = this.getPropValue("subtitle");
    const description = this.getPropValue("description");
    const listItems = this.castToObject<Item[]>("listItems");
    const buttonType: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

    return (
      <Base.Container className={this.decorateCSS("container")} isFull="true">
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.ListGrid className={this.decorateCSS("row")} gridCount={{ pc: this.getPropValue("itemCount") }}>
            {(this.castToString(subtitle) || this.castToString(title) || this.castToString(description) || this.castToString(buttonType.text)) && (
              <Base.VerticalContent className={this.decorateCSS("first")} data-animation={this.getPropValue("hoverAnimation").join(" ")}>
                {(this.castToString(subtitle) || this.castToString(title) || this.castToString(description)) && (
                  <Base.VerticalContent className={this.decorateCSS("first-inner")}>
                    {this.castToString(subtitle) && (
                      <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                        {subtitle}
                      </Base.SectionSubTitle>
                    )}
                    {this.castToString(title) && (
                      <Base.SectionTitle className={this.decorateCSS("title")}>
                        {title}
                      </Base.SectionTitle>
                    )}
                    {this.castToString(description) && (
                      <Base.SectionDescription className={this.decorateCSS("description")}>
                        {description}
                      </Base.SectionDescription>
                    )}
                  </Base.VerticalContent>
                )}
                {this.castToString(buttonType.text) && (
                  <ComposerLink path={buttonType.url}>
                    <Base.Button buttonType={buttonType.type} className={this.decorateCSS("button")}>
                      <Base.P className={this.decorateCSS("button-text")}>
                        {buttonType.text}
                      </Base.P>
                      <Base.Icon
                        name={"FaArrowRight"}
                        propsIcon={{
                          className: this.decorateCSS("button-icon"),
                        }}
                      />
                    </Base.Button>
                  </ComposerLink>
                )}
              </Base.VerticalContent>
            )}
            {listItems.map((listItem: Item, index: number) => {
              return (
                <div
                  key={index}
                  className={this.decorateCSS("card")}
                  data-animation={this.getPropValue("hoverAnimation").join(" ")}
                >
                  <Base.VerticalContent className={this.decorateCSS("card-content")}>
                    {this.castToString(listItem.itemTitle) && (
                      <Base.H5 className={this.decorateCSS("itemTitle")}>
                        {listItem.itemTitle}
                      </Base.H5>
                    )}
                    {listItem.texts.map((item: TextItem, index: number) => (
                      <Base.VerticalContent className={this.decorateCSS("cardItem")}>
                        <div className={this.decorateCSS("spanItem")}></div>
                        <Base.P className={this.decorateCSS("itemText")}>
                          {item.itemText}
                        </Base.P>
                      </Base.VerticalContent>
                    ))}
                  </Base.VerticalContent>
                  {this.getPropValue("showCardNumber") && (
                    <Base.H1 className={this.decorateCSS("index")}>
                      {index < 9 ? `0${index + 1}` : index + 1}
                    </Base.H1>
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
