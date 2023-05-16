import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content9.module.scss";

class Content9 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "The Power of Advertising",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Influencing Minds and Shaping Markets",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "From billboards to television commercials to social media ads, we are constantly bombarded with marketing messages trying to persuade us to buy, believe, or support something. The power of advertising is undeniable, as it has the ability to influence minds and shape markets.",
    });
    this.addProp({
      type: "string",
      key: "button",
      displayer: "Button",
      value: "More Info",
    });
  }

  getName(): string {
    return "Content 9";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("child")}>
            <div className={this.decorateCSS("card")}>
              <h2>{this.getPropValue("subtitle")}</h2>
              <h1>{this.getPropValue("title")}</h1>
              <p>{this.getPropValue("description")}</p>
              <a>{this.getPropValue("button")}</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content9;
