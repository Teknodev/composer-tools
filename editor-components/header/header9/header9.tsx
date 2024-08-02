import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header9.module.scss";

type ITabs = {
  tabText: JSX.Element;
  description: JSX.Element;
  image: string;
  url: string;
};

type Social = {
  text: JSX.Element;
  link: string;
};

class Header9 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "social",
      displayer: "Social",
      value: [
        {
          type: "object",
          key: "footer-social",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Social Link",
              value: "Behance",
            },
            {
              type: "page",
              key: "link",
              displayer: "Url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "footer-social",
          displayer: "Item",
          value: [
            {
              type: "page",
              key: "text",
              displayer: "Social Link",
              value: "Instagram",
            },
            {
              type: "page",
              key: "link",
              displayer: "Url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "footer-social",
          displayer: "Item",
          value: [
            {
              type: "page",
              key: "text",
              displayer: "Social Link",
              value: "Twitter",
            },
            {
              type: "page",
              key: "link",
              displayer: "Url",
              value: "",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "string",
      key: "featuredText",
      displayer: "Featured Link Text",
      value: "see all works",
    });
    this.addProp({
      type: "page",
      key: "featuredLink",
      displayer: "Featured Link URL",
      value: "",
    });
    this.addProp({
      type: "array",
      key: "tabs",
      displayer: "Tabs",
      value: [
        {
          type: "object",
          key: "tab",
          displayer: "Tab Item",
          value: [
            {
              type: "string",
              key: "tabText",
              displayer: "Image Title",
              value: "color flow",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image Title",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666181aebd2970002c6247df?alt=media&timestamp=1719483639150",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "tab",
          displayer: "Tab Item",
          value: [
            {
              type: "string",
              key: "tabText",
              displayer: "Image Title",
              value: "pal",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image Title",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666181aebd2970002c6247e2?alt=media&timestamp=1719483639150",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "tab",
          displayer: "Tab Item",
          value: [
            {
              type: "string",
              key: "tabText",
              displayer: "Image Title",
              value: "the lofe",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image Title",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666181aebd2970002c6247e3?alt=media&timestamp=1719483639150",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "tab",
          displayer: "Tab Item",
          value: [
            {
              type: "string",
              key: "tabText",
              displayer: "Image Title",
              value: "kia",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image Title",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666181aebd2970002c6247e0?alt=media&timestamp=1719483639150",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "tab",
          displayer: "Tab Item",
          value: [
            {
              type: "string",
              key: "tabText",
              displayer: "Image Title",
              value: "reykjavik",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image Title",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666181aebd2970002c6247e4?alt=media&timestamp=1719483639150",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "tab",
          displayer: "Tab Item",
          value: [
            {
              type: "string",
              key: "tabText",
              displayer: "Image Title",
              value: "chanel",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image Title",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666181aebd2970002c6247e1?alt=media&timestamp=1719483639150",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "tab",
          displayer: "Tab Item",
          value: [
            {
              type: "string",
              key: "tabText",
              displayer: "Image Title",
              value: "cazador",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image Title",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666181aebd2970002c6247de?alt=media&timestamp=1719483639150",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "tab",
          displayer: "Tab Item",
          value: [
            {
              type: "string",
              key: "tabText",
              displayer: "Image Title",
              value: "alabster co.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image Title",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666181aebd2970002c6247dd?alt=media&timestamp=1719483639150",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "string",
      key: "text",
      displayer: "Text",
      value: "Project",
    });

    const tabs = this.castToObject<ITabs[]>("tabs");

    const firstImage: string = tabs[0].image;
    this.setComponentState("image", firstImage);
    this.setComponentState("activeTab", 0);
  }

  handleMouseEnter(index: number, imageUrl: string) {
    this.setComponentState("activeTab", index);
    this.setComponentState("image", imageUrl);
  }

  handleButtonClick(buttonUrl: string) {
    window.open(buttonUrl, "_blank");
  }

  getName(): string {
    return "Header 9";
  }

  render() {
    const textExist = this.getPropValue("text", { as_string: true });
    const socials = this.castToObject<Social[]>("social");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("tabs")}>
            <div className={this.decorateCSS("buttons")}>
              {textExist && (
                <span className={this.decorateCSS("text")}>
                  {this.getPropValue("text")}
                </span>
              )}

              <span className={this.decorateCSS("active-number")}>
                {this.getComponentState("activeTab") + 1}
              </span>
              <span className={this.decorateCSS("slash")}>/</span>
              <span className={this.decorateCSS("count")}>
                {this.getPropValue("tabs").length}
              </span>
            </div>
            <div className={this.decorateCSS("tab-buttons")}>
              {this.castToObject<ITabs[]>("tabs").map(
                (tab: ITabs, index: number) => {
                  const tabTextExist = this.castToString(tab.tabText);

                  if (tabTextExist)
                    return (
                      <ComposerLink path={tab.url}>
                        <div
                          className={
                            this.decorateCSS("tabText") +
                            " " +
                            (this.getComponentState("activeTab") === index &&
                              this.decorateCSS("active"))
                          }
                          onMouseEnter={() =>
                            this.handleMouseEnter(index, tab.image)
                          }
                          onClick={() => this.handleButtonClick(tab.url)}
                        >
                          {tab.tabText}
                        </div>
                      </ComposerLink>
                    );
                }
              )}
              {this.getPropValue("featuredText", { as_string: true }) && (
                <ComposerLink path={this.getPropValue("featuredLink")}>
                  <h2 className={this.decorateCSS("linkText")}>
                    {this.getPropValue("featuredText")}
                  </h2>
                </ComposerLink>
              )}
            </div>
            <img
              src={this.getComponentState("image")}
              alt="image"
              className={this.decorateCSS("image")}
            />
          </div>
          <div className={this.decorateCSS("social")}>
            {socials.map((tab: Social, idx: number) => (
              <div
                style={{ width: `${100 / socials.length} %` }}
                className={this.decorateCSS("social-item")}
              >
                <ComposerLink key={idx} path={tab.link}>
                  <div className={this.decorateCSS("social-link")}>
                    {tab.text}
                  </div>
                </ComposerLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Header9;
