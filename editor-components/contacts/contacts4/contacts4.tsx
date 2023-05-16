import * as React from "react";
import { BaseContacts } from "../../EditorComponent";
import styles from "./contacts4.module.scss";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";

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
      value: "We have great UI designs",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: PlaceholderFiller.shortText(),
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
              value: "info@mail.com",
              displayer: "1th Text",
            },
            {
              type: "string",
              key: "Text2th",
              value: "support@mail.com",
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
              value: "+1 111 2222 333",
              displayer: "1th Text",
            },
            {
              type: "string",
              key: "Text2th",
              value: "+1 111 2222 333",
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
              value: "5087 S Archer Ave",
              displayer: "1th Text",
            },
            {
              type: "string",
              key: "Text2th",
              value: "60632, Chicago",
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
