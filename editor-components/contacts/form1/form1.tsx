import * as React from "react";
import { BaseContacts } from "../../EditorComponent";
import styles from "./form1.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Card = {
  icon: string;
  isIconFilled: boolean;
  title: JSX.Element;
  row1: JSX.Element;
  row2: JSX.Element;
};

class Form1Page extends BaseContacts {
  constructor(props?: any) {
    super(props, styles);

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
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "MdMail",
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
              type: "string",
              key: "row1",
              displayer: "Row 1",
              value: "info@mail.com",
            },
            {
              type: "string",
              key: "row2",
              displayer: "Row 2",
              value: "support@mail.com",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaPhone",
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
              type: "string",
              key: "row1",
              displayer: "Row 1",
              value: "+1 2222 333 44 55",
            },
            {
              type: "string",
              key: "row2",
              displayer: "Row 2",
              value: "+2 3333 444 55 66",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaLocationDot",
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
              type: "string",
              key: "row1",
              displayer: "Row 1",
              value: "380 st. Kilda Road, Acme Corp, 11111",
            },
            {
              type: "string",
              key: "row2",
              displayer: "Row 2",
              value: "Australia",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Form 1";
  }

  render() {
    const title = this.getPropValue("title");
    const titleExist = !!this.getPropValue("title", { as_string: true });

    const description = this.getPropValue("description");
    const descriptionExist = !!this.getPropValue("description", { as_string: true });

    const cards = this.castToObject<Card[]>("cards");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {titleExist && <Base.SectionTitle className={this.decorateCSS("section-title")}>{title}</Base.SectionTitle>}
          {descriptionExist && <Base.SectionDescription className={this.decorateCSS("section-description")}>{description}</Base.SectionDescription>}

          {cards?.length > 0 && (
            <Base.ListGrid gridCount={{ pc: 3 }} className={this.decorateCSS("cards-container")}>
              {cards.map((item: Card, index: number) => {
                const iconExist = !!item.icon;
                const titleExist = !!this.castToString(item.title);
                const row1Exist = !!this.castToString(item.row1);
                const row2Exist = !!this.castToString(item.row2);

                if (!iconExist && !titleExist && !row1Exist && !row2Exist) return null;

                return (
                  <Base.VerticalContent key={index} className={this.decorateCSS("card")}>
                    {iconExist && (
                      <div
                        className={`
                          ${this.decorateCSS("icon-container")}
                          ${item.isIconFilled ? this.decorateCSS("filled") : ""}
                        `}
                      >
                        <ComposerIcon
                          name={item.icon}
                          propsIcon={{
                            className: this.decorateCSS("icon"),
                          }}
                        />
                      </div>
                    )}
                    {titleExist && <Base.H3 className={this.decorateCSS("title")}>{item.title}</Base.H3>}
                    {row1Exist && <Base.P className={this.decorateCSS("row1")}>{item.row1}</Base.P>}
                    {row2Exist && <Base.P className={this.decorateCSS("row2")}>{item.row2}</Base.P>}
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

export default Form1Page;
