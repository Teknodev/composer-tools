import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseFooter } from "../../EditorComponent";
import styles from "./footer11.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

class Footer11Page extends BaseFooter {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "text",
      displayer: "Text",
      value: " All rights reserved  ©  ",
    });
    this.addProp({
      type: "string",
      key: "ref-text",
      displayer: "Referral Text",
      value: "Adam Smith"
    });

    this.addProp({
      type: "array",
      key: "icons",
      displayer: "Icons",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "icon",
              key: "icon",
              value:
                "FaFacebookF",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "link",
              value: "",
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
              type: "icon",
              key: "icon",
              value:
                "FaInstagram",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "link",
              value: "",
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
              type: "icon",
              key: "icon",
              value:
                "FaYoutube",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "link",
              value: "",
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
              type: "icon",
              key: "icon",
              value:
                "IoLogoPinterest",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
      ],
    });
  }
  getName(): string {
    return "Footer 11";
  }
  render() {

    return (
      <div className={this.decorateCSS("container")} >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <span className={this.decorateCSS("text")}>
              {this.getPropValue("text")}
              <span className={this.decorateCSS("ref-page")}>{this.getPropValue("ref-text")}</span>
            </span>
            <div className={this.decorateCSS("icons-div")}>
              {this.getPropValue("icons").map((icon: any, index: number) => {
                return (
                  <ComposerLink path={icon.value[1].value}>
                    <ComposerIcon
                      name={icon.value[0].value}
                      propsIcon={{ className: this.decorateCSS("icon") }}
                    />
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

export default Footer11Page;
