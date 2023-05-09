import * as React from "react";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseContent } from "../../EditorComponent";
import styles from "./content1.module.scss";

class Content1 extends BaseContent {
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
          value: "Are you ready to turn more ad clicks into conversions?",
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: PlaceholderFiller.string(),
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: PlaceholderFiller.shortText(),
        },
        {
          type: "string",
          key: "buttonText",
          displayer: "Button Text",
          value: PlaceholderFiller.string(),
        },
        {
          type: "string",
          key: "buttonTextTwo",
          displayer: "Button Text Two",
          value: PlaceholderFiller.string(),
        },
      ],
    });
  }
  getName(): string {
    return "Content 1";
  }
  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          <div
            className={this.decorateCSS("heading-page")}
            
          >
            <h1
              className={this.decorateCSS("heading-colored")}
              
            >
              {this.getPropValue("heading")[0].value}
            </h1>
            <h3>{this.getPropValue("heading")[2].value}</h3>
            <div
              className={this.decorateCSS("button-wrapper")}
              
            >
              <span className={this.decorateCSS("button")} >
                {this.getPropValue("heading")[3].value}
              </span>
              <span
                className={this.decorateCSS("button-reverse")}
                
              >
                {this.getPropValue("heading")[4].value}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content1;
