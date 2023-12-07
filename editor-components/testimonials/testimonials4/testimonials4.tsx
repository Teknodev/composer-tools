import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials4.module.scss";

class Testimonials4Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      key: "items",
      displayer: "Items",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "longtext",
              displayer: "Long Text",
              value:
                "I really like the clean and simple aesthetic of flat design. It's great for creating a modern and minimal look, and it also works well for responsive design since it's easy to adapt to different screen sizes. Plus, the lack of textures and gradients makes it easier to focus on the content itself.",
            },
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "Jerrie Corinna",
            },
            {
              type: "string",
              key: "rank",
              displayer: "Rank",
              value: "UX Developer",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Testimonials 4";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("testimonials4")}>
            {this.getPropValue("items").map((item: any, index: number) => (
              <div className={this.decorateCSS("card")}>
                <h1 className={this.decorateCSS("longtext")}>
                  {item.value[0].value}
                </h1>
                <h3 className={this.decorateCSS("name")}>
                  {item.value[1].value}
                </h3>
                <h4 className={this.decorateCSS("rank")}>
                  {item.value[2].value}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonials4Page;
