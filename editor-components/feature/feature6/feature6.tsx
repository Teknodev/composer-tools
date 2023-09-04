import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature6.module.scss";

type IBasicBadge = {
  title: string;
  description: string;
  badge: string;
};
class Feature6 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      key: "basic-card-badge",
      displayer: "Basic Card",
      value: [
        {
          type: "object",
          key: "basic-badge",
          displayer: "Basic",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value:
                "Scientists Discover New Species of Butterfly in the Amazon Rainforest",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "A team of scientists has identified a new species of butterfly in the heart of the Amazon rainforest. The butterfly, which has been named Papilio amazonica, has distinctive markings and is the first new butterfly species to be discovered in the region in over a decade.",
            },
            {
              type: "boolean",
              key: "badgeCheck",
              displayer: "Badge",
              value: true,
            },
            {
              type: "string",
              key: "badge",
              displayer: "Badge Text",
              value: "NEW",
            },
          ],
        },
        {
          type: "object",
          key: "basic-badge",
          displayer: "Basic",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value:
                "The Benefits of Meditation for Mental and Physical Health",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Meditation has been shown to have numerous positive effects on both mental and physical health. From reducing stress and anxiety to improving sleep and focus, discover the many ways that meditation can help you live a happier and healthier life.",
            },
            {
              type: "boolean",
              key: "badgeCheck",
              displayer: "Badge",
              value: true,
            },
            {
              type: "string",
              key: "badge",
              displayer: "Badge Text",
              value: "NEW",
            },
          ],
        },
        {
          type: "object",
          key: "basic-badge",
          displayer: "Basic",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value:
                "The Importance of Time Management for Increased Productivity",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Time management is crucial for achieving your goals and maximizing productivity. Learn the essential strategies for effectively managing your time, including setting priorities, creating a schedule, and minimizing distractions. Start making the most of your time today!",
            },
            {
              type: "boolean",
              key: "badgeCheck",
              displayer: "Badge",
              value: true,
            },
            {
              type: "string",
              key: "badge",
              displayer: "Badge Text",
              value: "NEW",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Feature 6";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {this.castToObject<IBasicBadge[]>("basic-card-badge").map(
              (basic: any, index: number) => (
                <div className={this.decorateCSS("basic-badge")} key={index}>
                  <h3 className={this.decorateCSS("title")}>
                    {basic.badgeCheck && (<span className={this.decorateCSS("badge")}>{basic.badge}</span>)}
                    {basic.title}
                  </h3>
                  <p className={this.decorateCSS("long-text")}>{basic.description}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Feature6;
