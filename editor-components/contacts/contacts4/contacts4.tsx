import * as React from "react";
import { BaseContacts } from "../../EditorComponent";
import styles from "./contacts4.module.scss";

type Item = {
  title: string;
  Text1th: string;
  Text2th: string;
};
class Contacts4Page extends BaseContacts {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "We contact us",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:"You can use this contact form to get in touch with us. The contact form serves as an effective tool for direct communication with us. If you have any questions, feedback, requests, or partnership proposals, please feel free to reach out to us through this form. ",
    });
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://wallpaperaccess.com/full/84248.png",
    });

    this.addProp({
      type: "array",
      key: "info-items",
      displayer: "Info Items",
      value: [
        {
          type: "object",
          key: "info",
          displayer: "Info",
          value: [
            {
              type: "string",
              key: "title",
              value: "EMAIL",
              displayer: "Title",
            },
            {
              type: "string",
              key: "Text1th",
              value: "business@info.com",
              displayer: "1th Text",
            },
            {
              type: "string",
              key: "Text2th",
              value: "support@info.com",
              displayer: "2th Text",
            },
          ],
        },
        {
          type: "object",
          key: "info",
          displayer: "Info",
          value: [
            {
              type: "string",
              key: "title",
              value: "PHONE",
              displayer: "Title",
            },
            {
              type: "string",
              key: "Text1th",
              value: "111 345 45 99",
              displayer: "1th Text",
            },
            {
              type: "string",
              key: "Text2th",
              value: "111 346 45 99",
              displayer: "2th Text",
            },
          ],
        },
        {
          type: "object",
          key: "info",
          displayer: "Info",
          value: [
            {
              type: "string",
              key: "title",
              value: "ADDRESS",
              displayer: "Title",
            },
            {
              type: "string",
              key: "Text1th",
              value: "27 13 Lowe Haven",
              displayer: "1th Text",
            },
            {
              type: "string",
              key: "Text2th",
              value: "28 14 Lowe Haven",
              displayer: "2th Text",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Contacts 4";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <h1>{this.getPropValue("title")}</h1>
          <p>{this.getPropValue("description")}</p>
          <div className={this.decorateCSS("contacts4")}>
            <div className={this.decorateCSS("contact-left")}>
              <img
                src={this.getPropValue("image")}
                className={this.decorateCSS("image")}
              />
            </div>
            <div className={this.decorateCSS("contact-right")}>
              <div className={this.decorateCSS("contact-info")}>
                {this.castToObject<Item[]>("info-items").map(
                  (data: any, index: number) => (
                    <div key={index}>
                      <h3>{data.title}</h3>
                      <h2>{data.Text1th}</h2>
                      <h2 className={this.decorateCSS("margin-bottom")}>
                        {data.Text2th}
                      </h2>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts4Page;
