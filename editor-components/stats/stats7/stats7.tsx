import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats7.module.scss";

type ICard = {
  subtitle: string;
  title: string;
  description: string;
};

class Stats7Page extends BaseStats {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "User Statistics on the Website",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Understanding user behavior on a website is important for improving user experience and engagement.",
    });
    this.addProp({
      type: "color",
      key: "backgroundColor",
      displayer: "Background Color",
      value:
        "#CDC1A9",
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
              key: "subtitle",
              displayer: "Subtitle",
              value: "Products",
            },
            {
              type: "number",
              key: "title",
              displayer: "Title",
              value: 300,
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
              key: "subtitle",
              displayer: "Subtitle",
              value: "Web Template",
            },
            {
              type: "number",
              key: "title",
              displayer: "Title",
              value: 85,
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
              key: "subtitle",
              displayer: "Subtitle",
              value: "Mobile Template",
            },
            {
              type: "number",
              key: "title",
              displayer: "Title",
              value: 200,
            },
            
          ],
        },
      ],
    });

  }

  getName(): string {
    return "Stats 7";
  }

  render() {
    const styling = {
      backgroundColor: this.getPropValue("backgroundColor"),
    };

    return (
      <div className={this.decorateCSS("container")} style={styling}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("stats1-page")}>
            <div className={this.decorateCSS("title-child")}>
              <h1>{this.getPropValue("title")}</h1>
              <h3>{this.getPropValue("description")}</h3>
            </div>
            <div className={this.decorateCSS("bottom-child")}>
              {this.castToObject<ICard[]>("card-content").map(
                (cardData: any, indexCard: number) => (
                  <div key={`sts-7-${indexCard}`} className={this.decorateCSS("card")}>
                    <h5>{cardData.subtitle}</h5>
                    <h4>{cardData.title}</h4>
                    <p>{cardData.description}</p>
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

export default Stats7Page;
