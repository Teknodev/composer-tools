import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseFooter } from "../../EditorComponent";
import styles from "./footer9.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

class Footer9Page extends BaseFooter {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Company Name",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "We enjoy talking to our clients and sharing useful content. Follow us on social media and be happy!",
    });
    this.addProp({
      type: "image",
      key: "background-img",
      displayer: "Background Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661ab05bd2970002c6274d2?alt=media&timestamp=1719483639151",
    });
    this.addProp({
      type: "string",
      key: "under-text",
      displayer: "Text",
      value: "Email us: hello@mysite.com",
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
              type: "image",
              key: "icon",
              value: "FaFacebook",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "link",
              value: "google.com",
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
              value: "google.com",
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
              value: "google.com",
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
              value: "google.com",
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
              value: "FaLinkedin",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "link",
              value: "google.com",
              displayer: "Navigate To",
            },
          ],
        },
      ],
    });
  }
  getName(): string {
    return "Footer 9";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("background-image")}>
            <img
              src={this.getPropValue("background-img")}
              alt="backgroundPhoto"
              className={this.decorateCSS("img")}
            />
          </div>
          <div className={this.decorateCSS("content")}>
            <h1 className={this.decorateCSS("title")}>
              {this.getPropValue("title")}
            </h1>
            <h4 className={this.decorateCSS("description")}>
              {this.getPropValue("description")}
            </h4>
            <div className={this.decorateCSS("social-links")}>
              {this.getPropValue("icons").map((icon: any) => {
                return (
                  <ComposerLink path={icon.value[1].value}>
                    <ComposerIcon
                      propsIcon={{ className: this.decorateCSS("item") }}
                      name={icon.value[0].value}
                    />
                  </ComposerLink>
                );
              })}
            </div>
            <div className={this.decorateCSS("subtext")}>
              <p className={this.decorateCSS("under-text")}>
                {this.getPropValue("under-text")}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer9Page;
