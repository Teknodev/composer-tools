import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats3.module.scss";

type ICard = {
  title: string;
  description: string;
};
class Stats3Page extends BaseStats {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Daily user statistics",
    });
    this.addProp({
      type: "array",
      key: "card-content",
      displayer: "Card Content",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "20K+",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "total sales",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "35K+",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "total registers",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "2.5M+",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "categories",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Stats 3";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("stats3-page")}>
            <h1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h1>
            <div className={this.decorateCSS("bottom-child")}>
              {this.castToObject<ICard[]>("card-content").map(
                (cardData: any, indexCard: number) => (
                  <div key={indexCard} className={this.decorateCSS("card")}>
                    <h4 className={this.decorateCSS("card-data-title")}>{cardData.title}</h4>
                    <p className={this.decorateCSS("card-data-description")}>{cardData.description}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Stats3Page;
