import * as React from "react";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseCard } from "../../EditorComponent";
import styles from "./card9.module.scss";

type IMessages = {
  title: string;
  description: string;
  image: string;
  buttonText: string;
};
class Card9 extends BaseCard {
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
  }

  getName(): string {
    return "Card 9";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {this.castToObject<IMessages[]>("message-card").map(
              (message: any, index: number) => (
                <div className={this.decorateCSS("message")} key={index}>
                  <h3 className={this.decorateCSS("title")}>{message.title}</h3>
                  <p className={this.decorateCSS("long-text")}>{message.description}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Card9;
