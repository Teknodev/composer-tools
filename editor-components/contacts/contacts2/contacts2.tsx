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
      value: "If you want to contact we,",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "You can use this contact form to get in touch with us. The contact form serves as an effective tool for direct communication with us. If you have any questions, feedback, requests, or partnership proposals, please feel free to reach out to us through this form. ",
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
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/646cb8c5fba070002b74a852?alt=media&timestamp=1684846790397",
                      displayer: "Image",
                    },
                    {
                      type: "string",
                      key: "title",
                      value: "Adress",
                      displayer: "1th Text",
                    },
                    {
                      type: "string",
                      key: "1th-text",
                      value: "27 13 Lowe Haven",
                      displayer: "1th Text",
                    },
                    {
                      type: "string",
                      key: "2th-text",
                      value: "28 14 Lowe Haven",
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
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/646cb37dfba070002b74a624?alt=media&timestamp=1684845438304",
                      displayer: "Image",
                    },
                    {
                      type: "string",
                      key: "title",
                      value: "Phone",
                      displayer: "1th Text",
                    },
                    {
                      type: "string",
                      key: "1th-text",
                      value: "111 345 45 99",
                      displayer: "1th Text",
                    },
                    {
                      type: "string",
                      key: "2th-text",
                      value: "111 346 45 99",
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
                      value: "Email",
                      displayer: "Card Title",
                    },
                    {
                      type: "string",
                      key: "1th-text",
                      value: "business@info.com",
                      displayer: "1th Text",
                    },
                    {
                      type: "string",
                      key: "2th-text",
                      value: "support@info.com",
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
                        <div className={this.decorateCSS("img-child")}>
                        <img className={this.decorateCSS("image")} width={50} height={50} src={item.value[0].value} />
                        </div>
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
