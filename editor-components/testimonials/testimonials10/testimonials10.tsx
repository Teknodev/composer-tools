import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials10.module.scss";

class Testimonials10Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Testimonials",
    });
    this.addProp({
      type: "array",
      key: "item-list",
      displayer: "Item List",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://static.tildacdn.com/tild6231-3138-4531-b132-313863343037/28m.jpg",
            },
            {
              type: "string",
              key: "name",
              value: "Farrel Gulierm",
              displayer: "Name",
            },
            {
              type: "string",
              key: "subtitle",
              value: "Project manager in Pixels",
              displayer: "Job",
            },
            {
              type: "string",
              key: "description",
              value:
                "It was just a gradual development over the years. Last year was All You Need Is Love. This year it's Give Peace a Chance. Remember love. If you want to get peace, you can get it as soon as you like if we all pull together.",
              displayer: "Description",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://static.tildacdn.com/tild6561-3935-4730-b262-356263333238/14m.jpg",
            },
            {
              type: "string",
              key: "name",
              value: "Samuel Willson",
              displayer: "Name",
            },
            {
              type: "string",
              key: "subtitle",
              value: "Creative director in DD agency",
              displayer: "Job",
            },
            {
              type: "string",
              key: "description",
              value:
                "The principal element of Suprematism in painting, as in architecture, is its liberation from all social or materialist tendencies. Through Suprematism, art comes into its pure and unpolluted form.",
              displayer: "Description",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://static.tildacdn.com/tild3464-6638-4761-a639-316439366461/09w.jpg",
            },
            {
              type: "string",
              key: "name",
              value: "Sarah Lewin",
              displayer: "Name",
            },
            {
              type: "string",
              key: "subtitle",
              value: "Founder of Pic Pen Studio",
              displayer: "Job",
            },
            {
              type: "string",
              key: "description",
              value:
                "We were just building stuff 'cause we thought it was cool. I do remember having these specific conversations with my friends where we thought, you know, someone is gonna build this. Someone is gonna build something that makes it so that people can stay connected with their friends and their family.",
              displayer: "Description",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://static.tildacdn.com/tild3362-6266-4730-a533-333034363963/10m.jpg",
            },
            {
              type: "string",
              key: "name",
              value: "Alex Larkins",
              displayer: "Name",
            },
            {
              type: "string",
              key: "subtitle",
              value: "Creative direcetor SoSould Magazine",
              displayer: "Job",
            },
            {
              type: "string",
              key: "description",
              value:
                "Before incorporating visual aids into speeches, the speaker should understand that if used incorrectly, the visual will not be an aid, but a distraction. Before incorporating visual aids into speeches, the speaker should understand that if used incorrectly, the visual will not be an aid, but a distraction.",
              displayer: "Description",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 2,
      max: 3,
    });
  }
  getName(): string {
    return "Testimonials 10";
  }
  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
            <h1 className={this.decorateCSS("headered")}>{this.getPropValue("title")}</h1>
          <div className={this.decorateCSS("testimonials10")}>
            <div className={this.decorateCSS("item-content")}>
              {this.getPropValue("item-list").map(
                (item: any, index: number) => (
                  <div
                    key={index}
                    className={this.decorateCSS("top-content")}
                    style={{
                      width: 90 / this.getPropValue("itemCount") + "%",
                    }}
                  >
                    <div className={this.decorateCSS("description-box")}>
                      <div className={this.decorateCSS("description")}>
                        {item.value[3].value}
                      </div>
                    </div>
                    <div className={this.decorateCSS("image-box")}>
                      <img
                        src={item.value[0].value}
                        alt=""
                        className={this.decorateCSS("image")}
                      />
                      <div className={this.decorateCSS("namejob-box")}>
                        <div className={this.decorateCSS("name")}>
                          {item.value[1].value}
                        </div>
                        <div className={this.decorateCSS("job")}>
                          {item.value[2].value}
                        </div>
                      </div>
                    </div>
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

export default Testimonials10Page;
