import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature11.module.scss";

type IMessages = {
  title: JSX.Element;
  description: JSX.Element;
  image: string;
  buttonText: JSX.Element;
};
class Feature11 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "message-bar-card",
      displayer: "Message Bar Card",
      value: [
        {
          type: "object",
          key: "message",
          displayer: "Message",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "The Advantages of Remote Work",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Remote work allows for greater flexibility, better work-life balance, and increased productivity. It also eliminates the need for lengthy commutes and reduces environmental impact. "
            },
          ],
        },
        {
          type: "object",
          key: "message",
          displayer: "Message",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "The Importance of Diversity in the Workplace",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "A diverse workplace not only fosters a culture of inclusivity and acceptance, but also enhances creativity and innovation.",
            },
          ],
        },
        {
          type: "object",
          key: "message",
          displayer: "Message",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "The Benefits of Learning a Second Language",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Learning a second language can improve cognitive function, enhance communication skills, and open up new opportunities for personal and professional growth.",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "borderThickness",
      displayer: "Border Thickness",
      value: false,
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 3,
    });
  }

  getName(): string {
    return "Feature 11";
  }

  render() {

    const list = this.castToObject<IMessages[]>("message-bar-card");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {list.length > 0 &&
              list.map(
                (message: IMessages, index: number) => {

                  const isTitleExist = this.castToString(message.title);
                  const isDescExist = this.castToString(message.description);

                  if (isTitleExist || isDescExist)
                    return (
                      <div
                        key={index}
                        className={this.decorateCSS("card-item-count")} style={{
                          width: 90 / this.getPropValue("itemCount") + "%",
                        }}
                      >
                        <div
                          className={`${this.decorateCSS("message")} ${this.getPropValue("borderThickness") == true ? this.decorateCSS("setBorderThickness") : ""}`}
                        >
                          {isTitleExist &&
                            <div className={this.decorateCSS("title")}>
                              <h3 className={this.decorateCSS("message-title")}>{message.title}</h3>
                            </div>
                          }
                          {isDescExist &&
                            <p className={this.decorateCSS("long-text")}>{message.description}</p>
                          }
                        </div>
                      </div>
                    );
                }
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default Feature11;
