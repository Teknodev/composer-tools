import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature12.module.scss";

type IMessages = {
  title: string;
  description: string;
  image: string;
  buttonText: string;
};
class Feature12 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      key: "message-card",
      displayer: "Message Card",
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
              value: "The Power of Positive Thinking",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Positive thinking can have a profound impact on mental health and overall well-being. By focusing on positive thoughts and reframing negative ones, individuals can experience reduced stress, increased resilience, and greater self-confidence.",
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
              value: "The Benefits of Volunteering",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Volunteering can provide numerous benefits, including increased social connections, improved mental health, and a sense of purpose and fulfillment. It can also develop new skills and enhance job prospects. ",
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
              value: "The Importance of Time Management",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Effective time management is essential for achieving goals, reducing stress, and increasing productivity. It involves setting priorities, breaking tasks into manageable chunks, and eliminating distractions. ",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 3,
    });
  }

  getName(): string {
    return "Feature 12";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {this.castToObject<IMessages[]>("message-card").map(
              (message: any, index: number) => (
                <div className={this.decorateCSS("card-item-count")} style={{
                  width: 90 / this.getPropValue("itemCount") + "%",
                }}>
                <div className={this.decorateCSS("message")} key={index}>
                  <h3 className={this.decorateCSS("title")}>{message.title}</h3>
                  <p className={this.decorateCSS("long-text")}>{message.description}</p>
                </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Feature12;
