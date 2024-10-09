import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseFooter } from "../../EditorComponent";
import styles from "./footer10.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

class Footer10Page extends BaseFooter {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "top-text",
      displayer: "Top Text",
      value: "© 2022 Dental Excellence Turkey | ",
    });
    this.addProp({
      type: "page",
      key: "ref-page",
      displayer: "Referral Url",
      value: "https://www.google.com/",
    });
    this.addProp({
      type: "color",
      key: "backgroundColor",
      displayer: "Background Color of Footer",
      value: "#212832",
    });
    this.addProp({
      type: "string",
      key: "ref-text",
      displayer: "Referral Text",
      value: "Privacy Policy",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "The information contained in the site is for providing support. It is not a substitute for the doctors to examine the patient for medical purposes, to make a diagnosis. This information should not be used in the diagnosis and treatment of disease.",
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
              value: "FaFacebook",
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
              type: "icon",
              key: "icon",
              value: "TfiYoutube",
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
              type: "icon",
              key: "icon",
              value: "FaTwitter",
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
              type: "icon",
              key: "icon",
              value: "FaInstagram",
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
  getName(): string {
    return "Footer 10";
  }
  render() {
    const styling = {
      backgroundColor: this.getPropValue("backgroundColor"),
    };
    return (
      <div className={this.decorateCSS("container")} style={styling}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("top-content")}>
              <span className={this.decorateCSS("top-text")}>
                {this.getPropValue("top-text")}
                <a href={this.getPropValue("ref-page")}>
                  {this.getPropValue("ref-text")}
                </a>
              </span>
              <div className={this.decorateCSS("icons-div")}>
                {this.getPropValue("icons").map((icon: any, index: number) => {
                  return (
                    <ComposerLink path={icon.value[1].value}>
                      <ComposerIcon
                        propsIcon={{ className: this.decorateCSS("item") }}
                        name={icon.value[0].value}
                      />
                      {/* <img
                        src={icon.value[0].value}
                        width={50}
                        height={50}
                        alt="icon-svg"
                      /> */}
                    </ComposerLink>
                  );
                })}
              </div>
            </div>
            <div className={this.decorateCSS("mid-content")}>
              <p className={this.decorateCSS("description")}>
                {this.getPropValue("description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer10Page;
