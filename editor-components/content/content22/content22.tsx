import * as React from "react";
import styles from "./content22.module.scss";
import { BaseContent } from "../../EditorComponent";
class ContentComponent22 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "select",
      key: "type",
      displayer: "Type",
      additionalParams: {
        selectItems: ["Header One Image", "Header Two Image", "One Image", "Two Image", "Three Image"]
      },
      value: "Header Two Image"
    })

    this.addProp({
      type: "object",
      key: "header",
      displayer: "Header",
      value: [
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "PORTRAIT",
        },
        {
          type: "string",
          key: "sub_title",
          displayer: "Subtitle",
          value: "Portfolio",
        },
        {
          type: "boolean",
          key: "is_line_visible",
          displayer: "Line Visibility",
          value: true,
        },
      ]
    });

    this.addProp({
      type: "image",
      key: "image_one",
      displayer: "Image One",
      value: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    });

    this.addProp({
      type: "image",
      key: "image_two",
      displayer: "Image Two",
      value: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    });

    this.addProp({
      type: "image",
      key: "image_three",
      displayer: "Image Three",
      value: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    });
  }

  getName(): string {
    return "Content-22";
  }


  render() {

    let header, image_one: string | undefined, image_two: string | undefined, image_three: string | undefined;

    const type = this.getPropValue("type");

    switch (type) {
      case "Header One Image":
        header = this.getPropValue("header");
        image_one = this.getPropValue("image_one");
        break;

      case "Header Two Image":
        header = this.getPropValue("header");
        image_one = this.getPropValue("image_one");
        image_two = this.getPropValue("image_two");
        break;

      case "One Image":
        image_one = this.getPropValue("image_one");
        break;

      case "Two Image":
        image_one = this.getPropValue("image_one");
        image_two = this.getPropValue("image_two");
        break;

      case "Three Image":
        image_one = this.getPropValue("image_one");
        image_two = this.getPropValue("image_two");
        image_three = this.getPropValue("image_three");
        break;
    }



    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {
            header && <div className={this.decorateCSS("header")}>
              <span className={this.decorateCSS("title")}>{header[0].value}</span>
              {header[2].value && <div className={this.decorateCSS("line")}></div>}
              <p className={this.decorateCSS("subtitle")}>{header[1].value}</p>
            </div>
          }
          {
            image_one && <div className={this.decorateCSS("image-box")}><img className={this.decorateCSS("image")} src={image_one} /></div>
          }
          {
            image_two && <div className={this.decorateCSS("image-box")}><img className={this.decorateCSS("image")} src={image_two} /></div>
          }
          {
            image_three && <div className={this.decorateCSS("image-box")}><img className={this.decorateCSS("image")} src={image_three} /></div>
          }
        </div>
      </div>

    );
  }
}

export default ContentComponent22;
