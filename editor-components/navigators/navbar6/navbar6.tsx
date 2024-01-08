import { BaseNavigator } from "../../EditorComponent";
import React from "react";
import styles from "./navbar6.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class Navbar6 extends BaseNavigator {
  getName(): string {
    return "Navbar 6";
  }
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "left-items",
      displayer: "Left Items",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "label",
              value: "ABOUT US",
              displayer: "Text",
            },
            {
              type: "page",
              key: "link",
              value: "https://www.google.com/",
              displayer: "Navigate To",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "label",
              value: "SERVICES",
              displayer: "Text",
            },
            {
              type: "page",
              key: "link",
              value: "https://www.google.com/",
              displayer: "Navigate To",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "label",
              value: "PRICING",
              displayer: "Text",
            },
            {
              type: "page",
              key: "link",
              value: "https://www.google.com/",
              displayer: "Navigate To",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "image",
      key: "center-image",
      displayer: "Center Image",
      value: "https://dstal.com.au/wp-content/uploads/2021/09/logoipsum.png",
    });

    this.addProp({
      type: "array",
      key: "right-items",
      displayer: "Right Items",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "label",
              value: "PORTFOLIO",
              displayer: "Text",
            },
            {
              type: "page",
              key: "link",
              value: "https://www.google.com/",
              displayer: "Navigate To",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "label",
              value: "BLOG",
              displayer: "Text",
            },
            {
              type: "page",
              key: "link",
              value: "https://www.google.com/",
              displayer: "Navigate To",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "label",
              value: "CONTACT",
              displayer: "Text",
            },
            {
              type: "page",
              key: "link",
              value: "https://www.google.com/",
              displayer: "Navigate To",
            },
          ],
        },
      ],
    });
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("content-left")}>
              {this.getPropValue("left-items").map((leftItem: any) => {
                return (
                  <ComposerLink path={leftItem.value[1].value}>
                    <span className={this.decorateCSS("text")}>
                      {leftItem.value[0].value}
                    </span>
                  </ComposerLink>
                );
              })}
            </div>

            <div className={this.decorateCSS("middle")}>
              <img src={this.getPropValue("center-image")} alt=""></img>
            </div>

            <div className={this.decorateCSS("content-right")}>
              {this.getPropValue("right-items").map((rightItem: any) => {
                return (
                  <ComposerLink path={rightItem.value[1].value}>
                    <span className={this.decorateCSS("right-item-value")}>{rightItem.value[0].value}</span>
                  </ComposerLink>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar6;
