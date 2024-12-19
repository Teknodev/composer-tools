import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseFooter } from "../../EditorComponent";
import styles from "./footer11.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";

type Icons = {
  icon: string,
  page: string,
}

class Footer11Page extends BaseFooter {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "text",
      displayer: "Text",
      value: "© 2025 by The Art of Food. Powered and secured by ",
    });

    this.addProp({
      type: "string",
      key: "ref-text",
      displayer: "Referral Text",
      value: "TeknoDev"
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
    const Icons = this.castToObject<Icons[]>("icons");
    const title = this.castToString(this.getPropValue("text"));
    const title2 = this.castToString(this.getPropValue("ref-text"));

    return (
      <Base.Container className={this.decorateCSS("container")} >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("icons")}>
              {Icons.length > 0 && Icons.map((item: Icons, index: number) => {
                if (!item.icon) return null;
                return (
                  <ComposerLink path={item.page} key={index}>
                    <ComposerIcon
                      name={item.icon}
                      propsIcon={{
                        className: this.decorateCSS("icon"),
                      }}
                    />
                  </ComposerLink>
                );
              })}
            </div>
            {(title || title2) && (
              <div className={this.decorateCSS("title")}>
                <Base.P className={this.decorateCSS("text")}>{title + title2}</Base.P>
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Footer11Page;
