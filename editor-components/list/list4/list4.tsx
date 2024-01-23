import * as React from "react";
import { BaseList } from "../../EditorComponent";
import styles from "./list4.module.scss";
import { Subtitles } from "@mui/icons-material";

type Card = {
  title: string;
  description: string;
  image: string;
  subtitle: string;
  
};

type Card2 = {
  title2: string;
  description2: string;
  subtitle2: string;
  image: string;
};

class list4 extends BaseList {
  constructor(props?: any) {
    super(props, styles);

    let contentimg1 = require("./content21v1.png");
    let contentimg2 = require("./content21v2.png");
    let contentimg3 = require("./content21v3.png");
    let contentimg4 = require("./content21v4.png");

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "We are delivering beautiful digital products for you.",
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Our Services",
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
                value: "1",
              },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Creative Idea",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Web design encompasses many different skills and disciplines in the production of all web.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: contentimg1,
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
                value: "2",
              },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "High Creative Minds",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Web design encompasses many different skills and disciplines in the production of all web.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: contentimg2,
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
                value: "3",
              },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Business Planning",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Web design encompasses many different skills and disciplines in the production of all web.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: contentimg3,
            },
          ],
        },      
      ],
    });

    this.addProp({
      type: "array",
      key: "content-card2",
      displayer: "Content Card2",
      value: [
        {
          type: "object",
          key: "card2",
          displayer: "Card2",
          value: [ {
            type: "string",
            key: "title2",
            displayer: "Title2",
            value: "4",
          },
            {
              type: "string",
              key: "subtitle2",
              displayer: "Subtitle2",
              value: "Mobile App Design",
            },
            {
              type: "string",
              key: "description2",
              displayer: "Description2",
              value:
                "Web design encompasses many different skills and disciplines in the production of all web.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: contentimg4,
            },
          ],
        },
        {
          type: "object",
          key: "card2",
          displayer: "Card2",
          value: [ {
            type: "string",
            key: "title2",
            displayer: "Title2",
            value: "5",
          },
            {
              type: "string",
              key: "subtitle2",
              displayer: "Subtitle2",
              value: "Mobile App Design",
            },
            {
              type: "string",
              key: "description2",
              displayer: "Description2",
              value:
                "Web design encompasses many different skills and disciplines in the production of all web.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: contentimg4,
            },
          ],
        },
        {
          type: "object",
          key: "card2",
          displayer: "Card2",
          value: [ {
            type: "string",
            key: "title2",
            displayer: "Title2",
            value: "6",
          },
            {
              type: "string",
              key: "subtitle2",
              displayer: "Subtitle2",
              value: "Mobile App Design",
            },
            {
              type: "string",
              key: "description2",
              displayer: "Description2",
              value:
                "Web design encompasses many different skills and disciplines in the production of all web.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: contentimg4,
            },
          ],
        },
      ]
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 3,
      max: 3,
    });
  }

  getName(): string {
    return "list 4";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("header")}>
            <span className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</span>
            <h2 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h2>           
          </div>
          <div className={this.decorateCSS("card-child")}>
            {this.castToObject<Card[]>("content-card").map(
              
              (card: any, index: number) => (
                <div
                key={index}
                className={this.decorateCSS("card-item-count")}
                style={{
                  width: 90 / this.getPropValue("itemCount") + "%",
                }}
              >
                  <div className={this.decorateCSS("line-box")}>
                     <div className={this.decorateCSS("line-1")}></div>
                     <div className={this.decorateCSS("line-2")}></div>
                     <div className={this.decorateCSS("line-3")}></div>
                     <div className={this.decorateCSS("line-4")}></div>
                   </div>
                  <div key={`cnt-4-card-${index}`} className={this.decorateCSS("card")}>
                    <div className={this.decorateCSS("color-box")}>
                    <i>
                      <img alt="server" src={card.image} />
                    </i>
                    <h4 className={this.decorateCSS("card-subtitle")}>{card.subtitle}</h4>
                    <h5 className={this.decorateCSS("card-title")}>{card.title}</h5>
                    <p className={this.decorateCSS("card-description")}>{card.description}</p>
                  </div>
                  </div>
              </div>
              )
            )}
          </div>
          <div className={this.decorateCSS("card-child2")}>
            {this.castToObject<Card2[]>("content-card2").map(
              
              (card2: any, index: number) => (
                <div
                key={index}
                className={this.decorateCSS("card-item-count")}
                style={{
                  width: 90 / this.getPropValue("itemCount") + "%",
                }}
              >
                   <div className={this.decorateCSS("line-box4")}>
          <div className={this.decorateCSS("line-4-1")}></div>
          <div className={this.decorateCSS("line-4-2")}></div>
          <div className={this.decorateCSS("line-4-3")}></div>
          <div className={this.decorateCSS("line-4-4")}></div>
          </div>
                  <div key={`cnt-4-card-${index}`} className={this.decorateCSS("card2")}>
                  <div className={this.decorateCSS("color-box2")}>
                    <i>
                      <img alt="server" src={card2.image} />
                    </i>
                    <h4 className={this.decorateCSS("card-subtitle2")}>{card2.subtitle2}</h4>
                    <h5 className={this.decorateCSS("card-title2")}>{card2.title2}</h5>
                    <p className={this.decorateCSS("card-description2")}>{card2.description2}</p>
                  </div>
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

export default list4;
