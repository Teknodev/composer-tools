import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header5.module.scss";

class Header5 extends BaseHeader {
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
          displayer: "A",
          value: "Motivation",
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Simple Way to Boost Your Creativity and Spark Innovation",
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: "Looking to enhance your creative thinking skills and spark innovative ideas? In this blog post, we'll explore a simple way to boost your creativity that you can start implementing today.",
        },
        {
          type: "string",
          key: "buttonText",
          displayer: "Button Text",
          value: "Go There",
        },
        {
          type: "page",
          key: "link",
          displayer: "Button Link",
          value: "",
        },
      ],
    });
  }

  getName(): string {
    return "Header 5";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("heading-page")}>
            <h1 className={this.decorateCSS("heading-section-name")}>
              {this.getPropValue("heading")[0].value}
            </h1>
            <h2 className={this.decorateCSS("heading-title")}>{this.getPropValue("heading")[1].value}</h2>
            <h3 className={this.decorateCSS("heading-subtitle")}>{this.getPropValue("heading")[2].value}</h3>
            <ComposerLink path={this.getPropValue("heading")[4].value}>
              <span className={this.decorateCSS("button")}>
                {this.getPropValue("heading")[3].value}
              </span>
            </ComposerLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Header5;
