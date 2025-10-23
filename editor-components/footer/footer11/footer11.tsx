import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseFooter, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./footer11.module.scss";

import { Base } from "../../../composer-base-components/base/base";

type Icons = {
  icon: TypeMediaInputValue;
  page: string;
};

class Footer11Page extends BaseFooter {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "select",
      key: "position",
      displayer: "Position",
      value: "Default",
      additionalParams: {
        selectItems: ["Default", "Absolute"],
      },
    });

    this.addProp({
      type: "string",
      key: "footerText",
      displayer: "Footer Text",
      value: "© 2024 Blinkpage. All rights reserved. Designed and developed by Blinkpage.",
    });

    this.addProp({
      type: "array",
      key: "socials",
      displayer: "Social Items",
      value: [
        {
          type: "object",
          key: "content",
          displayer: "Content Elements",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "FaPinterest",
              },
            },

            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "content",
          displayer: "Content Elements",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "FaFacebookF",
              },
            },

            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },

        {
          type: "object",
          key: "content",
          displayer: "Content Elements",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "FaXTwitter",
              },
            },

            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "content",
          displayer: "Content Elements",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "FaInstagram",
              },
            },

            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2", "animate3", "animate4", "animate5"]
      }
    });
  }
  static getName(): string {
    return "Footer 11";
  }
  render() {
    const socials = this.castToObject<Icons[]>("socials");

    const footerText = this.getPropValue("footerText");

    const footerTextExist = this.castToString(footerText);
    const position = this.getPropValue("position");

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${position === "Absolute" ? this.decorateCSS("absolute") : ""}`}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {socials.length > 0 && (
            <div className={this.decorateCSS("socials-container")}>
              {socials.map((item: any, index: number) => {
                return (
                  item.icon && (
                    <ComposerLink key={index} path={item.url}>
                      <div 
                        className={this.decorateCSS("socials-element")}
                        data-animation={item.url ? this.getPropValue("hoverAnimation").join(" ") : ""}
                      >
                        <Base.Media value={item.icon} className={this.decorateCSS("icon")} />
                      </div>
                    </ComposerLink>
                  )
                );
              })}
            </div>
          )}

          {footerTextExist && <Base.P className={this.decorateCSS("text")}>{this.getPropValue("footerText")}</Base.P>}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Footer11Page;
