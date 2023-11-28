import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseFooter } from "../../EditorComponent";
import styles from "./footer9.module.scss";

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
        "https://static.tildacdn.com/tild3562-3363-4766-a530-646430633066/photo1461773518188b3e86f98242f.jpg",
    });
    this.addProp({
        type: "string",
        key: "under-text",
        displayer: "Text",
        value:
          "Email us: hello@mysite.com",
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
                value:
                  "https://totalpng.com//public/uploads/preview/facebook-grey-logo-png-hd-copy-11656657462jfylzawrgd.png",
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
                type: "image",
                key: "icon",
                value:
                  "https://totalpng.com//public/uploads/preview/youtube-grey-logo-png-hd-copy-11656657528pafryryqkv.png",
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
                type: "image",
                key: "icon",
                value:
                  "https://totalpng.com//public/uploads/preview/vimeo-grey-logo-png-hd-copy-11656657514xbjrlcikez.png",
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
                type: "image",
                key: "icon",
                value:
                  "https://totalpng.com//public/uploads/preview/instagram-grey-logo-png-hd-copy-11656657483bsurpsft3i.png",
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
                type: "image",
                key: "icon",
                value:
                  "https://totalpng.com//public/uploads/preview/linkedin-grey-logo-png-hd-copy-11656657480wkwk802dka.png",
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
            <h1>{this.getPropValue("title")}</h1>
            <h4>{this.getPropValue("description")}</h4>
            <div className={this.decorateCSS("social-links")}>
            {this.getPropValue("icons").map((icon: any) => {
                return (
                  <ComposerLink path={icon.value[1].value}>
                    <img src={icon.value[0].value} width={50} height={50} alt="icon-svg" />
                  </ComposerLink>
                );
              })}
              </div>
              <div className={this.decorateCSS("subtext")}>
                <p>{this.getPropValue("under-text")}</p>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer9Page;
