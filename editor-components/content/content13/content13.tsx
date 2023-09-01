import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content13.module.scss";

type Card = {
  title: string;
  description: string;
  image: string;
};

class Content4 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);

    let serverimg1 = require("./server-1.png");
    let serverimg2 = require("./server-2.png");
    let serverimg3 = require("./server-3.png");

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Create a Landing Page In a Minute Not Weeks",
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Key Featured For Landing Page",
    });

    this.addProp({
      type: "array",
      key: "content-card",
      displayer: "Content Card",
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
              value: "Web Hosting",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Web hosting refers to the service of providing space on a server to host a website or web application on the internet. Web hosting providers offer various hosting plans and packages to suit different website requirements, including shared hosting, dedicated hosting.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: serverimg1,
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
              value: "Innovative Idea",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Innovative ideas often stem from identifying gaps in existing solutions or finding new ways to leverage technology or resources. They require a willingness to think outside the box, take risks, and challenge conventional thinking.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: serverimg2,
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
              value: "Dedicated Server",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "A dedicated server refers to a type of web hosting service where a single server is allocated exclusively to a single client or website. In other words, the entire physical server is dedicated to serving the needs of that client or website alone.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: serverimg3,
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
              value: "Dedicated Server",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "A dedicated server refers to a type of web hosting service where a single server is allocated exclusively to a single client or website. In other words, the entire physical server is dedicated to serving the needs of that client or website alone.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: serverimg3,
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 4,
    });
  }

  getName(): string {
    return "Content 4";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("header")}>
            <span>{this.getPropValue("subtitle")}</span>
            <h2>{this.getPropValue("title")}</h2>
          </div>
          <div className={this.decorateCSS("card-child")}>
            {this.castToObject<Card[]>("content-card").map(
              
              (card: Card, index: number) => (
                <div style={{
                  width: 90 / this.getPropValue("itemCount") + "%",
                }}>
                  <div key={`cnt-4-card-${index}`} className={this.decorateCSS("card")}>
                    <i>
                      <img alt="server" src={card.image} />
                    </i>
                    <h5>{card.title}</h5>
                    <p>{card.description}</p>
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

export default Content4;
