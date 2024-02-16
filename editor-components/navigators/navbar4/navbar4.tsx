import { ReactNode } from "react";
import { BaseNavigator } from "../../EditorComponent";
import React from "react";
import styles from "./navbar4.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class Navbar4 extends BaseNavigator {
  getName(): string {
    return "Navbar 4";
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
              value: "Home",
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
              value: "About",
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
              value: "Contact",
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
      type: "string",
      key: "center-text",
      displayer: "Center Text",
      value: "Company Name",
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
              type: "image",
              key: "icon",
              value:
                "https://cdn3.iconfinder.com/data/icons/glypho-social-and-other-logos/64/logo-facebook-512.png",
              displayer: "Icon",
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
              type: "image",
              key: "icon",
              value:
                "https://cdn3.iconfinder.com/data/icons/picons-social/57/43-twitter-512.png",
              displayer: "Icon",
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
              type: "image",
              key: "icon",
              value:
                "https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png",
              displayer: "Icon",
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

  render(): ReactNode {
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
            <h1 className={this.decorateCSS("center-text")}>{this.getPropValue("center-text")}</h1>
            </div>

            <div className={this.decorateCSS("content-right")}>
            {this.getPropValue("right-items").map((leftItem: any) => {
              return (
                <ComposerLink path={leftItem.value[1].value}>
                  <img src={leftItem.value[0].value} />
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

export default Navbar4;
