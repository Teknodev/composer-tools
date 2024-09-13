import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header9.module.scss";

type ITab = {
  tabText: JSX.Element;
  image: string;
  tabUrl: string;
};

type ISocial = {
  socialLinkText: JSX.Element;
  socialUrl: string;
};

class Header9 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "socials",
      displayer: "Socials",
      value: [
        {
          type: "object",
          key: "social",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "socialLinkText",
              displayer: "Social Link Text",
              value: "Behance",
            },
            {
              type: "page",
              key: "socialUrl",
              displayer: "Url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "social",
          displayer: "Item",
          value: [
            {
              type: "page",
              key: "socialLinkText",
              displayer: "Social Link Text",
              value: "Instagram",
            },
            {
              type: "page",
              key: "socialUrl",
              displayer: "Url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "social",
          displayer: "Item",
          value: [
            {
              type: "page",
              key: "socialLinkText",
              displayer: "Social Link Text",
              value: "Twitter",
            },
            {
              type: "page",
              key: "socialUrl",
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
      additionalParams: {
        maxElementCount: 8,
      },
      value: [
        {
          type: "object",
          key: "tab",
          displayer: "Tab",
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
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666181aebd2970002c6247df?alt=media&timestamp=1719483639150",
            },
            {
              type: "page",
              key: "tabUrl",
              displayer: "Url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "tab",
          displayer: "Tab",
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
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666181aebd2970002c6247e2?alt=media&timestamp=1719483639150",
            },
            {
              type: "page",
              key: "tabUrl",
              displayer: "Url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "tab",
          displayer: "Tab",
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
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666181aebd2970002c6247e3?alt=media&timestamp=1719483639150",
            },
            {
              type: "page",
              key: "tabUrl",
              displayer: "Url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "tab",
          displayer: "Tab",
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
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666181aebd2970002c6247e0?alt=media&timestamp=1719483639150",
            },
            {
              type: "page",
              key: "tabUrl",
              displayer: "Url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "tab",
          displayer: "Tab",
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
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666181aebd2970002c6247e4?alt=media&timestamp=1719483639150",
            },
            {
              type: "page",
              key: "tabUrl",
              displayer: "Url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "tab",
          displayer: "Tab",
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
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666181aebd2970002c6247e1?alt=media&timestamp=1719483639150",
            },
            {
              type: "page",
              key: "tabUrl",
              displayer: "Url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "tab",
          displayer: "Tab",
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
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666181aebd2970002c6247de?alt=media&timestamp=1719483639150",
            },
            {
              type: "page",
              key: "tabUrl",
              displayer: "Url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "tab",
          displayer: "Tab",
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
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666181aebd2970002c6247dd?alt=media&timestamp=1719483639150",
            },
            {
              type: "page",
              key: "tabUrl",
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

    this.setComponentState("activeTab", 0);
  }

  handleMouseEnter(index: number) {
    this.setComponentState("activeTab", index);
  }

  getName(): string {
    return "Header 9";
  }

  render() {
    const textExist: string = this.getPropValue("text", { as_string: true });
    const socials = this.castToObject<ISocial[]>("socials");
    const featuredText: string = this.getPropValue("featuredText", {
      as_string: true,
    });
    const tabs = this.castToObject<ITab[]>("tabs");
    const activeTabIndex: number = this.getComponentState("activeTab");

    // this prevents crash when tabs.length === 0
    const currentImage = tabs[activeTabIndex]?.image ?? null;

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("tabs")}>
            <div className={this.decorateCSS("left-content")}>
              {tabs.length > 0 && (
                <div className={this.decorateCSS("buttons")}>
                  {textExist && (
                    <span className={this.decorateCSS("text")}>
                      {this.getPropValue("text")}
                    </span>
                  )}

                  <span className={this.decorateCSS("active-number")}>
                    {activeTabIndex + 1}
                  </span>
                  <span className={this.decorateCSS("slash")}>/</span>
                  <span className={this.decorateCSS("count")}>
                    {tabs.length}
                  </span>
                </div>
              )}
              <div className={this.decorateCSS("tab-buttons")}>
                {tabs.length > 0 &&
                  tabs.map((tab: ITab, index: number) => {
                    const url = tab.tabUrl;
                    return url ? (
                      <ComposerLink key={index} path={url}>
                        <div
                          className={
                            this.decorateCSS("tabText") +
                            " " +
                            (this.getComponentState("activeTab") === index &&
                              this.decorateCSS("active"))
                          }
                          onMouseEnter={() => this.handleMouseEnter(index)}
                        >
                          {this.castToString(tab.tabText)}
                        </div>
                      </ComposerLink>
                    ) : (
                      <div
                        key={index}
                        className={
                          this.decorateCSS("tabText") +
                          " " +
                          (this.getComponentState("activeTab") === index &&
                            this.decorateCSS("active"))
                        }
                        onMouseEnter={() => this.handleMouseEnter(index)}
                      >
                        {this.castToString(tab.tabText)}
                      </div>
                    );
                  })}
                {featuredText && (
                  <ComposerLink path={this.getPropValue("featuredLink")}>
                    <h2 className={this.decorateCSS("linkText")}>
                      {this.getPropValue("featuredText")}
                    </h2>
                  </ComposerLink>
                )}
              </div>
            </div>
            {currentImage && (
              <div className={this.decorateCSS("right-content")}>
                <img
                  src={currentImage}
                  alt="slider-image"
                  className={this.decorateCSS("image")}
                />
              </div>
            )}
            {socials.length > 0 && (
              <div className={this.decorateCSS("social")}>
                {socials.map((tab: ISocial, idx: number) => (
                  <div
                    style={{ width: `${100 / socials.length} %` }}
                    className={this.decorateCSS("social-item")}
                  >
                    <ComposerLink key={idx} path={tab.socialUrl}>
                      <div className={this.decorateCSS("social-link")}>
                        {tab.socialLinkText}
                      </div>
                    </ComposerLink>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Header9;
