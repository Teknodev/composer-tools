import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content18.module.scss";

type Item = {
  image: string;
};
type ISection = {
  section: Item[];
};
class Content18 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      value: "Company news",
      displayer: "Title",
    });
    this.addProp({
      type: "string",
      key: "description",
      value:
        "We publish our latest news, upcoming events, and special offers",
      displayer: "Description",
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
                      type: "image",
                      key: "image",
                      value:
                        "https://static.tildacdn.com/tild6530-3636-4835-b536-356533363530/erik-lucatero-d2MSDu.jpg",
                      displayer: "Image",
                    },
                    {
                      type: "string",
                      key: "subtitle",
                      value: "Rock climber Adrien Sragielli speaks to the La Roca magazine after the third victory in international competition",
                      displayer: "Subtitle",
                    },
                    {
                      type: "string",
                      key: "text",
                      value:
                        "Canadian rock climber Adrien Sragielli gives an interview",
                      displayer: "text",
                    },
                    {
                      type: "string",
                      key: "author",
                      value: "09.04.2021",
                      displayer: "Author",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "card",
                  displayer: "Card",
                  value: [
                    {
                      type: "image",
                      key: "image",
                      value:
                        "https://static.tildacdn.com/tild3463-3736-4766-a566-313332616665/bady-qb-VmYZe_yqxL0-.jpg",
                      displayer: "Image",
                    },
                    {
                      type: "string",
                      key: "subtitle",
                      value: "Our new big franchise store in Ottawa, at Vanier. Join our opening!",
                      displayer: "Subtitle",
                    },
                    {
                      type: "string",
                      key: "text",
                      value:
                        "As a software developer, my main responsibility is to design, code, and test software programs that meet the specific needs of clients or organizations.",
                      displayer: "text",
                    },
                    {
                      type: "string",
                      key: "author",
                      value: "14.03.2021",
                      displayer: "Author",
                    },
                    
                  ],
                },
                {
                  type: "object",
                  key: "card",
                  displayer: "Card",
                  value: [
                    {
                      type: "image",
                      key: "image",
                      value:
                        "https://static.tildacdn.com/tild3630-6361-4236-a430-336631356236/bruno-kelzer-b5R-Eet.jpg",
                      displayer: "Image",
                    },
                    {
                      type: "string",
                      key: "subtitle",
                      value: "Kids Sportive is a new program for juniors aged 15-19 in sport climbing. Classes are available in the Nepean district",
                      displayer: "Subtitle",
                    },
                    {
                      type: "string",
                      key: "text",
                      value:
                        "",
                      displayer: "text",
                    },
                    {
                      type: "string",
                      key: "author",
                      value: "23.02.2021",
                      displayer: "Author",
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
    return "Content 18";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("testimonials9")}>
            <div className={this.decorateCSS("title-card")}>
            <h1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h1>
            <h3 className={this.decorateCSS("description")}>{this.getPropValue("description")}</h3>
            </div>
            <section>
              {this.castToObject<ISection[]>("card-items").map(
                (section: any, index: number) => (
                  <div
                    key={`testimonials9-${index}`}
                    className={this.decorateCSS("card-child")}
                  >
                    {section.items.map((item: any, indexCard: number) => (
                      <div
                        key={`testimonials9-card-${indexCard}`}
                        className={this.decorateCSS("card")}
                      >
                      
                        <img width={200} height={140} src={item.value[0].value} alt=""/>
                        <div className={this.decorateCSS("content")}>
                          <span className={this.decorateCSS("item-value1")}>{item.value[1].value}</span>
                          <h5 className={this.decorateCSS("item-value2")}>{item.value[2].value}</h5>
                          <h4 className={this.decorateCSS("item-value3")}>{item.value[3].value}</h4>
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

export default Content18;
