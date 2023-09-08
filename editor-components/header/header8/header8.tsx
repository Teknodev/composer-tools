import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header8.module.scss";

class Header8 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "object",
      key: "heading",
      displayer: "Heading",
      value: [
        {
          type: "string",
          key: "titleColored",
          displayer: "Title Colored",
          value: "Travel",
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Explore the World of Adventure Travel",
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: "Get ready to embark on a journey of a lifetime with our adventure travel packages. From hiking in the mountains to surfing in the ocean, we offer a wide range of experiences that will challenge and excite you.",
        },
      ],
    });
  }

  getName(): string {
    return "Header 8";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
      >
        <div className={this.decorateCSS("heading-page")}>
          <h2 className={this.decorateCSS("heading-colored")}>
            {this.getPropValue("heading")[0].value}
          </h2>
          <h1>{this.getPropValue("heading")[1].value}</h1>
          <h3>{this.getPropValue("heading")[2].value}</h3>
        </div>
      </div>
    );
  }
}

export default Header8;
