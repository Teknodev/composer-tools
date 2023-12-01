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
            value: "High Quality",
          },
          {
            type: "string",
            key: "text",
            displayer: "Text",
            value: "We are a leading firm in providing value to our customers. Each member of our team has at least five years of legal experience. We love what we do.",
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
            value: "Good Support",
          },
          {
            type: "string",
            key: "text",
            displayer: "Text",
            value: "Our managers are always ready to answer your questions. You can call us during the weekends and at night. You can also visit our office for a personal consultation.",
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
            value: "Individual Approach",
          },
          {
            type: "string",
            key: "text",
            displayer: "Text",
            value: "Our company works according to the principle of individual approach to every client. This method allows us to achieve success in problems of all levels.",
          },
        ],
      });

      this.addProp({
        type: "object",
        key: "circle-1",
        displayer: "Circle-1",
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
            value: "1",
          },
          {
            type: "string",
            key: "text",
            displayer: "Text",
            value: "",
          },
        ],
      });

      this.addProp({
        type: "object",
        key: "circle-2",
        displayer: "Circle-2",
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
            value: "2",
          },
          {
            type: "string",
            key: "text",
            displayer: "Text",
            value: "",
          },
        ],
      });


      this.addProp({
        type: "object",
        key: "circle-3",
        displayer: "Circle-3",
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
            value: "3",
          },
          {
            type: "string",
            key: "text",
            displayer: "Text",
            value: "",
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
          <h1 className={this.decorateCSS("heading")}>{this.getPropValue("heading")[1].value}</h1>
        </div>
        <div className={this.decorateCSS("heading-page-2")}>
          <h3 className={this.decorateCSS("heading-2-h3")}>{this.getPropValue("heading-2")[1].value}</h3>
          <h4 className={this.decorateCSS("heading-2-h4")}>{this.getPropValue("heading-2")[2].value}</h4>
        </div>
      
        <div className={this.decorateCSS("heading-page-3")}>
          <h5 className={this.decorateCSS("heading-3-h5")}>{this.getPropValue("heading-3")[1].value}</h5>
          <h6 className={this.decorateCSS("heading-3-h5")}>{this.getPropValue("heading-3")[2].value}</h6>
        </div>

        <div className={this.decorateCSS("heading-page-4")}>
          <h5 className={this.decorateCSS("heading-4-h5")}>{this.getPropValue("heading-4")[1].value}</h5>
          <h6 className={this.decorateCSS("heading-4-h6")}>{this.getPropValue("heading-4")[2].value}</h6>
        </div>
        <div className={this.decorateCSS("circle-page-1")}>
          <h5 className={this.decorateCSS("circle-1")}>{this.getPropValue("circle-1")[1].value}</h5>
        </div>
        <div className={this.decorateCSS("circle-page-2")}>
          <h5 className={this.decorateCSS("circle-2")}>{this.getPropValue("circle-2")[1].value}</h5>
        </div>
        <div className={this.decorateCSS("circle-page-3")}>
          <h5 className={this.decorateCSS("circle-3")}>{this.getPropValue("circle-3")[1].value}</h5>
        </div>
        <div className={this.decorateCSS("line")}>
        </div>
        
      </div>
    );
  }
}

export default Content20;
