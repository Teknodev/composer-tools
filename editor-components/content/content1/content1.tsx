import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content1.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

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
          value: "business",
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value:
            "This statement is a call to action aimed at businesses or individuals looking to improve the effectiveness of their online advertising campaigns. ",
        },
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Yes",
            },
            {
              type: "page",
              key: "link",
              displayer: "Button Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "buttontwo",
          displayer: "Second Button",
          value: [
            {
              type: "string",
              key: "buttonTextTwo",
              displayer: "Button Text Two",
              value: "Thanks",
            },
            {
              type: "page",
              key: "link2",
              displayer: "Button Link",
              value: "",
            },
          ],
        },
      ],
    });
  }
  getName(): string {
    return "Content 1";
  }
  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("heading-page")}>
            <h1 className={this.decorateCSS("heading-h1")}>
              {this.getPropValue("heading")[0].value}
            </h1>
            <h3 className={this.decorateCSS("heading")}>
              {this.getPropValue("heading")[2].value}
            </h3>
            <div className={this.decorateCSS("button-wrapper")}>
              <div className={this.decorateCSS("button")}>
                <ComposerLink
                  path={this.getPropValue("heading")[3].value[1].value}
                >
                  {this.getPropValue("heading")[3].value[0].value}
                </ComposerLink>
              </div>
              <div className={this.decorateCSS("button")}>
                <ComposerLink
                  path={this.getPropValue("heading")[4].value[1].value}
                >
                  {this.getPropValue("heading")[4].value[0].value}
                </ComposerLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content1;
