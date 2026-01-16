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
  topText: React.JSX.Element;
  bottomText: React.JSX.Element;
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
      displayer: "Title",
      value: "Event Schedule",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Lorem ipsum dolor consectetur eiusmod tempor incididunt labore exercitation tempor.",
    });
    this.addProp(INPUTS.BUTTON("button", "Button", "Download Schedule", "", "FaDownload", null, "Primary"));

    this.addProp({
      type: "array",
      key: "listItems",
      displayer: "List Item",
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
              displayer: "Text",
              value: [
                {
                  type: "object",
                  key: "text",
                  displayer: "Text",
                  value: [
                    { type: "string", key: "topText", displayer: "Top Text", value: "Psychologist - John Parker" },
                    { type: "string", key: "bottomText", displayer: "Bottom Text", value: "10:00 AM - 12:30 PM" },
                  ]
                },
                {
                  type: "object",
                  key: "text",
                  displayer: "Text",
                  value: [
                    { type: "string", key: "topText", displayer: "Top Text", value: "Sociology - Herman Miller" },
                    { type: "string", key: "bottomText", displayer: "Bottom Text", value: "02:00 PM - 04:30 PM" },
                  ]
                },
                {
                  type: "object",
                  key: "text",
                  displayer: "Text",
                  value: [
                    { type: "string", key: "topText", displayer: "Top Text", value: "Geologist - Jeremy Dupont" },
                    { type: "string", key: "bottomText", displayer: "Bottom Text", value: "05:00 PM - 07:30 PM" },
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
                  type: "object", key: "text", displayer: "Text", value: [
                    { type: "string", key: "topText", displayer: "Top Text", value: "Economy - Michal Ruheen" },
                    { type: "string", key: "bottomText", displayer: "Bottom Text", value: "10:00 AM - 12:30 PM" },
                  ]
                },
                {
                  type: "object", key: "text", displayer: "Text", value: [
                    { type: "string", key: "topText", displayer: "Top Text", value: "Engineer - Jessica Dover" },
                    { type: "string", key: "bottomText", displayer: "Bottom Text", value: "02:00 PM - 04:30 PM" },
                  ]
                },
                {
                  type: "object", key: "text", displayer: "Text", value: [
                    { type: "string", key: "topText", displayer: "Top Text", value: "Psychologist - John Parker" },
                    { type: "string", key: "bottomText", displayer: "Bottom Text", value: "05:00 PM - 07:30 PM" },
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
                  type: "object", key: "text", displayer: "Text", value: [
                    { type: "string", key: "topText", displayer: "Top Text", value: "Biologist - Saleena Fountain" },
                    { type: "string", key: "bottomText", displayer: "Bottom Text", value: "10:00 AM - 12:30 PM" },
                  ]
                },
                {
                  type: "object", key: "text", displayer: "Text", value: [
                    { type: "string", key: "topText", displayer: "Top Text", value: "Secretary - Paulina Morris" },
                    { type: "string", key: "bottomText", displayer: "Bottom Text", value: "02:00 PM - 04:30 PM" },
                  ]
                },
                {
                  type: "object", key: "text", displayer: "Text", value: [
                    { type: "string", key: "topText", displayer: "Top Text", value: "Politician - Wendaya Royin" },
                    { type: "string", key: "bottomText", displayer: "Bottom Text", value: "05:00 PM - 07:30 PM" },
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
    this.addProp({
      type: "boolean",
      key: "showLines",
      displayer: "Show Lines",
      value: true,
    });
  }

  render() {
    const title = this.getPropValue("title");
    const subtitle = this.getPropValue("subtitle");
    const description = this.getPropValue("description");
    const listItems = this.castToObject<Item[]>("listItems");
    const buttonType: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");
    const buttonIcon = this.getPropValue("button")?.icon;
    const iconExist = buttonIcon && buttonIcon.name;

    const alignment = Base.getContentAlignment();
    return (
      <Base.Container className={this.decorateCSS("container")} isFull="true">
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.ListGrid className={this.decorateCSS("cards-grid") + (alignment === "center" ? " " + this.decorateCSS("alignment-center") : "")} gridCount={{ pc: this.getPropValue("itemCount"), tablet: 2, phone: 1 }}>
            {(this.castToString(subtitle) || this.castToString(title) || this.castToString(description) || this.castToString(buttonType.text) || iconExist) && (
              <Base.VerticalContent className={this.decorateCSS("intro-card")} data-animation={this.getPropValue("hoverAnimation").join(" ")}>
                {(this.castToString(subtitle) || this.castToString(title) || this.castToString(description)) && (
                  <Base.VerticalContent className={this.decorateCSS("intro-content")}>
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
                {(this.castToString(buttonType.text) || iconExist) && (
                  <ComposerLink path={buttonType.url}>
                    <Base.Button buttonType={buttonType.type} className={this.decorateCSS("button")}>
                      {this.castToString(buttonType.text) && (
                        <Base.P className={this.decorateCSS("button-text")}>
                          {buttonType.text}
                        </Base.P>
                      )}
                      {iconExist && (
                        <Base.Media
                          value={buttonIcon}
                          className={this.decorateCSS("button-icon")}
                        />
                      )}
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
                      <Base.H4 className={this.decorateCSS("card-title")}>
                        {listItem.itemTitle}
                      </Base.H4>
                    )}
                    {listItem.texts.map((item: TextItem, tIndex: number) => (
                      <Base.VerticalContent key={tIndex} className={this.decorateCSS("event-item")}>
                        {this.getPropValue("showLines") && tIndex > 0 && (
                          <div className={this.decorateCSS("divider")}></div>
                        )}
                        {this.castToString(item.topText) && (
                          <Base.P className={this.decorateCSS("event-text-top")}>{item.topText}</Base.P>
                        )}
                        {this.castToString(item.bottomText) && (
                          <Base.P className={this.decorateCSS("event-text-bottom")}>{item.bottomText}</Base.P>
                        )}
                      </Base.VerticalContent>
                    ))}
                  </Base.VerticalContent>
                  {this.getPropValue("showCardNumber") && (
                    <Base.H1 className={this.decorateCSS("card-number")}>
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
