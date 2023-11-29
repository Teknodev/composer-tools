import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content20.module.scss";

class Content20 extends BaseContent {
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
          value: "",
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "How It Works",
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: "",
        },
      ],
    });
    this.addProp({
        type: "object",
        key: "heading-2",
        displayer: "Heading-2",
        value: [
          {
            type: "string",
            key: "titleColored",
            displayer: "Title Colored",
            value: "",
          },
          {
            type: "string",
            key: "title",
            displayer: "Title",
            value: "How It Works",
          },
          {
            type: "string",
            key: "text",
            displayer: "Text",
            value: "Our company works according to the principle of individual approach to every client. This method allows us to achieve success in problems of all levels",
          },
        ],
      });
      this.addProp({
        type: "object",
        key: "heading-3",
        displayer: "Heading-3",
        value: [
          {
            type: "string",
            key: "titleColored",
            displayer: "Title Colored",
            value: "",
          },
          {
            type: "string",
            key: "title",
            displayer: "Title",
            value: "How It Works",
          },
          {
            type: "string",
            key: "text",
            displayer: "Text",
            value: "Our company works according to the principle of individual approach to every client. This method allows us to achieve success in problems of all levels",
          },
        ],
      });
    
      this.addProp({
        type: "object",
        key: "heading-4",
        displayer: "Heading-4",
        value: [
          {
            type: "string",
            key: "titleColored",
            displayer: "Title Colored",
            value: "",
          },
          {
            type: "string",
            key: "title",
            displayer: "Title",
            value: "How It Works",
          },
          {
            type: "string",
            key: "text",
            displayer: "Text",
            value: "Our company works according to the principle of individual approach to every client. This method allows us to achieve success in problems of all levels",
          },
        ],
      });
  }

  getName(): string {
    return "Content 20";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
      
        <div className={this.decorateCSS("heading-page")}>
          <h1>{this.getPropValue("heading")[1].value}</h1>
        </div>
        <hr></hr>
        <div className={this.decorateCSS("heading-page-2")}>
          <h3>{this.getPropValue("heading-2")[1].value}</h3>
          <h4>{this.getPropValue("heading-2")[2].value}</h4>
        </div>
      
        <div className={this.decorateCSS("heading-page-3")}>
          <h5>{this.getPropValue("heading-3")[1].value}</h5>
          <h6>{this.getPropValue("heading-3")[2].value}</h6>
        </div>

        <div className={this.decorateCSS("heading-page-4")}>
          <h5>{this.getPropValue("heading-4")[1].value}</h5>
          <h6>{this.getPropValue("heading-4")[2].value}</h6>
        </div>
      </div>
    );
  }
}

export default Content20;
