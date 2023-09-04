import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials6.module.scss";

type Item = {
  image: string;
};
type ISection = {
  section: Item[];
};
class Testimonials6Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      value: "Testimonials",
      displayer: "title",
    });
    this.addProp({
      type: "array",
      key: "card-items",
      displayer: "Card Items",
      value: [
        {
          type: "object",
          key: "section",
          displayer: "Section",
          value: [
            {
              type: "array",
              key: "items",
              displayer: "Items",
              value: [
                {
                  type: "object",
                  key: "card",
                  displayer: "Card",
                  value: [
                    {
                      type: "number",
                      key: "star",
                      value: 5,
                      displayer: "Star",
                    },
                    {
                      type: "string",
                      key: "subtitle",
                      value:
                        "Their design skills are truly exceptional, and they have a keen eye for aesthetics that sets them apart from others in the field.",
                      displayer: "Subtitle",
                    },
                    {
                      type: "image",
                      key: "profileImage",
                      value:
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/644933b3f72de2002caa9a16?alt=media&timestamp=1682518974394",
                      displayer: "Profile Image",
                    },
                    {
                      type: "string",
                      key: "name",
                      value: "Clover Ruth",
                      displayer: "Name",
                    },
                    {
                      type: "string",
                      key: "name-id",
                      value: "@clover_ruth",
                      displayer: "Name Id",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "card",
                  displayer: "Card",
                  value: [
                    {
                      type: "number",
                      key: "star",
                      value: 5,
                      displayer: "Star",
                    },
                    {
                      type: "string",
                      key: "subtitle",
                      value:
                        "An online learning platform can provide access to educational content from anywhere with an internet connection.",
                      displayer: "Subtitle",
                    },
                    {
                      type: "image",
                      key: "profileImage",
                      value:
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64493501f72de2002caa9a46?alt=media&timestamp=1682519308238",
                      displayer: "Profile Image",
                    },
                    {
                      type: "string",
                      key: "name",
                      value: "Jaylyn Kaleigh",
                      displayer: "Name",
                    },
                    {
                      type: "string",
                      key: "name-id",
                      value: "@Jaylyn_Kaleigh",
                      displayer: "Name Id",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "card",
                  displayer: "Card",
                  value: [
                    {
                      type: "number",
                      key: "star",
                      value: 5,
                      displayer: "Star",
                    },
                    {
                      type: "string",
                      key: "subtitle",
                      value:
                        "A personal finance website can be incredibly helpful for people looking to improve their financial literacy and manage their money better.",
                      displayer: "Subtitle",
                    },
                    {
                      type: "image",
                      key: "profileImage",
                      value:
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6449364af72de2002caa9ad0?alt=media&timestamp=1682519638602",
                      displayer: "Profile Image",
                    },
                    {
                      type: "string",
                      key: "name",
                      value: "Candyce Jeannine",
                      displayer: "Name",
                    },
                    {
                      type: "string",
                      key: "name-id",
                      value: "@Candyce_Jeannine",
                      displayer: "Name Id",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "section",
          displayer: "Section",
          value: [
            {
              type: "array",
              key: "items",
              displayer: "Items",
              value: [
                {
                  type: "object",
                  key: "card",
                  displayer: "Card",
                  value: [
                    {
                      type: "number",
                      key: "star",
                      value: 5,
                      displayer: "Star",
                    },
                    {
                      type: "string",
                      key: "subtitle",
                      value:
                        "An e-commerce website can provide a platform for businesses to sell their products online.",
                      displayer: "Subtitle",
                    },
                    {
                      type: "image",
                      key: "profileImage",
                      value:
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64493a97f72de2002caa9c7b?alt=media&timestamp=1682520738703",
                      displayer: "Profile Image",
                    },
                    {
                      type: "string",
                      key: "name",
                      value: "Kasey Kim",
                      displayer: "Name",
                    },
                    {
                      type: "string",
                      key: "name-id",
                      value: "@Kasey_Kim",
                      displayer: "Name Id",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "card",
                  displayer: "Card",
                  value: [
                    {
                      type: "number",
                      key: "star",
                      value: 5,
                      displayer: "Star",
                    },
                    {
                      type: "string",
                      key: "subtitle",
                      value:
                        "A travel blog can offer inspiration and advice for people planning their next trip.",
                      displayer: "Subtitle",
                    },
                    {
                      type: "image",
                      key: "profileImage",
                      value:
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64495a05f72de2002caa9d3c?alt=media&timestamp=1682532076862",
                      displayer: "Profile Image",
                    },
                    {
                      type: "string",
                      key: "name",
                      value: "Glen Percy",
                      displayer: "Name",
                    },
                    {
                      type: "string",
                      key: "name-id",
                      value: "@Glen_Percy",
                      displayer: "Name Id",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "card",
                  displayer: "Card",
                  value: [
                    {
                      type: "number",
                      key: "star",
                      value: 5,
                      displayer: "Star",
                    },
                    {
                      type: "string",
                      key: "subtitle",
                      value:
                        "A fitness website can provide resources for people looking to get in shape and lead a healthy lifestyle.",
                      displayer: "Subtitle",
                    },
                    {
                      type: "image",
                      key: "profileImage",
                      value:
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64496786f72de2002caa9def?alt=media&timestamp=1682532240936",
                      displayer: "Profile Image",
                    },
                    {
                      type: "string",
                      key: "name",
                      value: "Flo Katrina",
                      displayer: "Name",
                    },
                    {
                      type: "string",
                      key: "name-id",
                      value: "@Flo_Katrina",
                      displayer: "Name Id",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "card",
                  displayer: "Card",
                  value: [
                    {
                      type: "number",
                      key: "star",
                      value: 5,
                      displayer: "Star",
                    },
                    {
                      type: "string",
                      key: "subtitle",
                      value:
                        "A recipe sharing website could be a great resource for foodies and home cooks alike.",
                      displayer: "Subtitle",
                    },
                    {
                      type: "image",
                      key: "profileImage",
                      value:
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/644967f1f72de2002caa9df3?alt=media&timestamp=1682532348990",
                      displayer: "Profile Image",
                    },
                    {
                      type: "string",
                      key: "name",
                      value: "Milton Sierra",
                      displayer: "Name",
                    },
                    {
                      type: "string",
                      key: "name-id",
                      value: "@Milton_Sierra",
                      displayer: "Name Id",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Testimonials 6";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("testimonials6")}>
            <h1>{this.getPropValue("title")}</h1>
            <section>
              {this.castToObject<ISection[]>("card-items").map(
                (section: any, index: number) => (
                  <div
                    key={`testimonials6-${index}`}
                    className={this.decorateCSS("card-child")}
                  >
                    {section.items.map((item: any, indexCard: number) => (
                      <div
                        key={`testimonials6-card-${indexCard}`}
                        className={this.decorateCSS("card")}
                      >
                      <div className={styles["stars"]}>
                        {[...Array(Number(item.value[0].value))].map((item: any, index: number) => (
                          <img key={`star-testimonials6${index}`} 
                          alt=""
                          src="https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/646c7aa5fba070002b749808?alt=media&timestamp=1684830888295"/>
                        ))}
                      </div>
                        <span>{item.value[1].value}</span>
                        <div className={this.decorateCSS("profile")}>
                          <img
                            alt=""
                            width={50}
                            height={50}
                            src={item.value[2].value}
                          />
                          <div className={this.decorateCSS("profile-text")}>
                            <h2>{item.value[3].value}</h2>
                            <p>{item.value[4].value}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              )}
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonials6Page;
