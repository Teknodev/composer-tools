import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseFooter } from "../../EditorComponent";
import styles from "./footer10.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type link = {
  title: string,
  page: string,
}

type icon = {
  icon: string,
  page: string,
}

class Footer10Page extends BaseFooter {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "boolean",
      key: "showLine",
      displayer: "Show Line",
      value: true,
    });
    this.addProp({
      type: "image",
      key: "logo",
      displayer: "Logo",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6763d3600655f8002ca92e43?alt=media",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Copyright © 2012 - 2024 All rights reserved.",
    });
    this.addProp({
        type: "string",
        key: "title2",
        displayer: "Ref Text",
        value: "TeknoDev"
    });
    this.addProp({
      type: "array",
      key: "links",
      displayer: "Links",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "About"
            },
            {
              type: "page",
              key: "page",
              displayer: "Page",
              value: ""
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
              key: "title",
              displayer: "Title",
              value: "Company"
            },
            {
              type: "page",
              key: "page",
              displayer: "Page",
              value: ""
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
              key: "title",
              displayer: "Title",
              value: "Services"
            },
            {
              type: "page",
              key: "page",
              displayer: "Page",
              value: ""
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
              key: "title",
              displayer: "Title",
              value: "Testimonials"
            },
            {
              type: "page",
              key: "page",
              displayer: "Page",
              value: ""
            },
          ],
        },
      ],
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
                "BiLogoFacebookCircle",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "page",
              displayer: "Page",
              value: ""
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
                "FaTwitter",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "page",
              displayer: "Page",
              value: ""
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
                "FaInstagram",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "page",
              displayer: "Page",
              value: ""
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
                "FaLinkedin",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "page",
              displayer: "Page",
              value: ""
            },
          ],
        },
      ],
    });
  }
  getName(): string {
    return "Footer 10";
  }
  render() {
    const links = this.castToObject<link[]>("links");
    const icons = this.castToObject<icon[]>("icons");
    const showLine = this.getPropValue("showLine");
    const logo = this.getPropValue("logo");
    const title1 = this.castToString(this.getPropValue("title"));
    const title2 = this.castToString(this.getPropValue("title2"));

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("section")}>
            <div className={this.decorateCSS("upper")}>
              {logo && (
                <div className={this.decorateCSS("logo-box")}>
                  <img src={logo} alt="logo" className={this.decorateCSS("logo")} />
                </div>
              )}
              <div className={this.decorateCSS("links")}>
                {links.length > 0 && links.map((item: link, index: number) => {
                  return(
                    <ComposerLink path={item.page}>
                      {item.title}
                    </ComposerLink>    
                  );
                })}
              </div>
            </div>
            {showLine && (
              <div className={this.decorateCSS("line")}></div>
            )}
            <div className={this.decorateCSS("lower")}>
              <div className={this.decorateCSS("text-area")}>
                <Base.P>{(title1 + " " + title2)}</Base.P>
              </div>
              <div className={this.decorateCSS("icons")}>
                {icons.length > 0 && icons.map((item: icon, index: number) => {
                  if (!item.icon) return null;
                  return(
                    <ComposerLink path={item.page}>
                      <ComposerIcon name={item.icon} />
                    </ComposerLink>    
                  );
                })}
              </div>
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Footer10Page;
