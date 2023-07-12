import * as React from "react";
import styles from "./header17.module.scss";
import { BaseHeader } from "../../EditorComponent";
import { buttons } from "../../../../styles/theme.module";

class Header17 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "backgroundImage",
      displayer: "Background Image",
      value:
        "https://a6n4d3q9.rocketcdn.me/wp-content/uploads/2021/06/w-event-slider-img-2-opt.jpg",
    });

    this.addProp({
      type: "string",
      key: "title",
      value: "We're getting married!",
      displayer: "Title",
    });

    this.addProp({
      type: "string",
      key: "description",
      value: "THE BEST WEDDING DAY",
      displayer: "Description",
    });

    this.addProp({
      type: "object",
      key: "button",
      displayer: "Button",
      value: [
        {
          type: "string",
          key: "buttonText",
          displayer: "Button Text",
          value: "Discuss The Wedding",
        },
        {
          type: "page",
          key: "buttonClick",
          displayer: "Button Click",
          value: ""
        },
      ]});
    
  }

  getName(): string {
    return "Header-17";
  }

  render() {

    const button = this.getPropValue('button');
    
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div style={{backgroundImage: `url(${this.getPropValue("backgroundImage")})`}} className={this.decorateCSS("wrapper")}>
            <p>{this.getPropValue("description")}</p>
            <h1>{this.getPropValue("title")}</h1>
            <button className={this.decorateCSS("button")}>{button[0].value}</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header17;
