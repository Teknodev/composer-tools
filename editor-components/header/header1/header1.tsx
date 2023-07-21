import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header1.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class Header1 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value:
        "In this blog post, we'll explore some practical tips and techniques for managing your time more effectively. ",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "In this blog post, we'll explore some practical tips and techniques for managing your time more effectively, so you can be more productive, reduce stress, and achieve your goals.",
    });
    this.addProp({
      type: "array",
      key: "button",
      displayer: "Buttons",
      value: [
        {
          type: "object",
          key: "buttonObject",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Go There",
            },
            {
              type: "page",
              key: "link",
              displayer: "URL",
              value: "",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value:
        "https://visme.co/blog/wp-content/uploads/2022/12/15-Best-Practices-to-Help-You-Improve-Your-Time-Management-Skills-Thumbnail.jpg",
    });
    this.addProp({
      type: "page",
      key: "link",
      displayer: "URL",
      value: "",
    });
  }

  getName(): string {
    return "Header 1";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("header-page")}>
            <h3 className={this.decorateCSS("title")}>{this.getPropValue("subtitle")}</h3>
            <p className={this.decorateCSS("long-text")}>{this.getPropValue("title")}</p>
            <div className={this.decorateCSS("button-group")}>
              {this.castToObject<[]>("button").map((item: any, indexItem: number) => {
                return (
                  <ComposerLink key={indexItem} path={item.link}>
                    <button className={this.decorateCSS("button")}>
                      {item.buttonText}
                    </button>
                  </ComposerLink>
                );
              })}
            </div>
            <img
              className={this.decorateCSS("image")}
              src={this.getPropValue("image")}
            ></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Header1;
