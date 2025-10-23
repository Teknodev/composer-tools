import * as React from "react";
import { BaseContacts } from "../../EditorComponent";
import styles from "./form1.module.scss";
import { Base } from "../../../composer-base-components/base/base";


class Form1 extends BaseContacts {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Contact Us",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Get connected",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, repellendus.",
    });

    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Cards",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "MdMail"
              },
            },
            {
              type: "boolean",
              key: "isIconFilled",
              displayer: "Is Icon Filled?",
              value: true,
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Send Email",
            },
            {
              type: "array",
              key: "rows",
              displayer: "Rows",
              value: [
                {
                  type: "object",
                  key: "item",
                  displayer: "Input",
                  value: [
                    {
                      type: "string",
                      key: "item",
                      displayer: "Item",
                      value: "info@mail.com",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item",
                  displayer: "Input",
                  value: [
                    {
                      type: "string",
                      key: "item",
                      displayer: "Item",
                      value: "support@mail.com",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "FaPhone"
              },
            },
            {
              type: "boolean",
              key: "isIconFilled",
              displayer: "Is Icon Filled?",
              value: false,
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Call Us",
            },
            {
              type: "array",
              key: "rows",
              displayer: "Rows",
              value: [
                {
                  type: "object",
                  key: "item",
                  displayer: "Input",
                  value: [
                    {
                      type: "string",
                      key: "item",
                      displayer: "Item",
                      value: "+1 2222 333 44 55",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item",
                  displayer: "Input",
                  value: [
                    {
                      type: "string",
                      key: "item",
                      displayer: "Item",
                      value: "+2 3333 444 55 66",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "FaLocationDot"
              },
            },
            {
              type: "boolean",
              key: "isIconFilled",
              displayer: "Is Icon Filled?",
              value: false,
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Address",
            },
            {
              type: "array",
              key: "rows",
              displayer: "Rows",
              value: [
                {
                  type: "object",
                  key: "item",
                  displayer: "Input",
                  value: [
                    {
                      type: "string",
                      key: "item",
                      displayer: "Item",
                      value: "380 st. Kilda Road, Acme Corp, 11111",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item",
                  displayer: "Input",
                  value: [
                    {
                      type: "string",
                      key: "item",
                      displayer: "Item",
                      value: "Australia",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });
  }

  static getName(): string {
    return "Form 1";
  }

  render() {
    const title = this.getPropValue("title");
    const subtitle = this.getPropValue("subtitle");
    const titleExist = this.castToString(title);
    const subtitleExist = this.castToString(subtitle);

    const description = this.getPropValue("description");
    const descriptionExist = this.castToString(description);

    const cards = this.castToObject<any>("cards");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(titleExist || subtitleExist || descriptionExist) && (
            <Base.VerticalContent className={this.decorateCSS("header")}>
              {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("section-subtitle")}>{subtitle}</Base.SectionSubTitle>}
              {titleExist && <Base.SectionTitle className={this.decorateCSS("section-title")}>{title}</Base.SectionTitle>}
              {descriptionExist && <Base.SectionDescription className={this.decorateCSS("section-description")}>{description}</Base.SectionDescription>}
            </Base.VerticalContent>
          )}

          {cards?.length > 0 && (
            <Base.ListGrid gridCount={{ pc: 3, tablet: 3, phone: 1 }} className={this.decorateCSS("cards-container")}>
              {cards.map((item: any, index: number) => {
                const iconExist = !!item.icon;
                const titleExist = !!this.castToString(item.title);

                if (!iconExist && !titleExist && !item.rows.length) return null;

                return (
                  <Base.VerticalContent key={index} className={this.decorateCSS("card")}>
                    {iconExist && (
                      <div
                        className={`
                    ${this.decorateCSS("icon-container")}
                    ${item.isIconFilled && this.decorateCSS("filled")}
                  `}
                      >
                        <Base.Media
                          value={item.icon}
                          className={this.decorateCSS("icon")}
                        />
                      </div>
                    )}
                    {titleExist && <Base.H3 className={this.decorateCSS("title")}>{item.title}</Base.H3>}
                    <Base.VerticalContent className={this.decorateCSS("rows")}>
                      {item.rows.map((row: any, rowIndex: number) => {
                        const itemExist = this.castToString(row.item);
                        return itemExist && <Base.P className={this.decorateCSS("row-item")}>{row.item}</Base.P>;
                      })}
                    </Base.VerticalContent>
                  </Base.VerticalContent>
                );
              })}
            </Base.ListGrid>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Form1;
