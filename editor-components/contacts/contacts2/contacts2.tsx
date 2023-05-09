import * as React from "react";
import { BaseContacts } from "../../EditorComponent";
import styles from "./contacts2.module.scss";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";

type Item = {
  image: string;
};
type ISection = {
  section: Item[];
};
class Contacts2Page extends BaseContacts {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Lorem ipsum dolor sit",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: PlaceholderFiller.shortText(),
    });
    this.addProp({
      type: "array",
      key: "card-items",
      displayer: "Card Items",
      value: [
        {
          type: "object",
          key: "section",
          displayer: "Section",
          value: [
            {
              type: "array",
              key: "items",
              displayer: "Items",
              value: [
                {
                  type: "object",
                  key: "card",
                  displayer: "Card",
                  value: [
                    {
                      type: "image",
                      key: "image",
                      value:
                        "https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png",
                      displayer: "Image",
                    },
                    {
                      type: "string",
                      key: "title",
                      value: PlaceholderFiller.string(),
                      displayer: "1th Text",
                    },
                    {
                      type: "string",
                      key: "1th-text",
                      value: "lorem@mail.com",
                      displayer: "1th Text",
                    },
                    {
                      type: "string",
                      key: "2th-text",
                      value: "support@mail.com",
                      displayer: "2th Text",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "card",
                  displayer: "Card",
                  value: [
                    {
                      type: "image",
                      key: "image",
                      value:
                        "https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png",
                      displayer: "Image",
                    },
                    {
                      type: "string",
                      key: "title",
                      value: PlaceholderFiller.string(),
                      displayer: "1th Text",
                    },
                    {
                      type: "string",
                      key: "1th-text",
                      value: "lorem@mail.com",
                      displayer: "1th Text",
                    },
                    {
                      type: "string",
                      key: "2th-text",
                      value: "support@mail.com",
                      displayer: "2th Text",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "card",
                  displayer: "Card",
                  value: [
                    {
                      type: "image",
                      key: "image",
                      value:
                        "https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png",
                      displayer: "Image",
                    },
                    {
                      type: "string",
                      key: "card-title",
                      value: PlaceholderFiller.string(),
                      displayer: "Card Title",
                    },
                    {
                      type: "string",
                      key: "1th-text",
                      value: "lorem@mail.com",
                      displayer: "1th Text",
                    },
                    {
                      type: "string",
                      key: "2th-text",
                      value: "support@mail.com",
                      displayer: "2th Text",
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

  getName(): string {
    return "Contacts 2";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("contacts2")}>
            <h1>{this.getPropValue("title")}</h1>
            <p>{this.getPropValue("description")}</p>
            <section>
              {this.castToObject<ISection[]>("card-items").map(
                (section: any, index: number) => (
                  <div key={index} className={this.decorateCSS("card-child")}>
                    {section.items.map((item: any, index: number) => (
                      <div key={index} className={this.decorateCSS("card")}>
                        <img width={50} height={50} src={item.value[0].value} />
                        <div className={this.decorateCSS("card-box")}>
                          <h2>{item.value[1].value}</h2>
                          <h4>{item.value[2].value}</h4>
                          <h4>{item.value[3].value}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              )}
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts2Page;
