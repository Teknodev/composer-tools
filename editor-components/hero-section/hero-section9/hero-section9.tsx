import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseHeroSection, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./hero-section9.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type ITab = {
  tabText: React.JSX.Element;
  image: TypeMediaInputValue;
  tabUrl: string;
};

type ISocial = {
  socialLinkText: React.JSX.Element;
  socialUrl: string;
};

class HeroSection9 extends BaseHeroSection {
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
              displayer: "Text",
              value: "Behance",
            },
            {
              type: "page",
              key: "socialUrl",
              displayer: "Navigate To",
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
              type: "string",
              key: "socialLinkText",
              displayer: "Text",
              value: "Instagram",
            },
            {
              type: "page",
              key: "socialUrl",
              displayer: "Navigate To",
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
              type: "string",
              key: "socialLinkText",
              displayer: "Text",
              value: "Twitter",
            },
            {
              type: "page",
              key: "socialUrl",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
      ],
    });
    this.addProp(INPUTS.BUTTON("featuredLink", "Button", "see all works", "", null, null, "Link"));
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
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666181aebd2970002c6247df?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "page",
              key: "tabUrl",
              displayer: "Navigate To",
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
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666181aebd2970002c6247e2?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "page",
              key: "tabUrl",
              displayer: "Navigate To",
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
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666181aebd2970002c6247e3?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "page",
              key: "tabUrl",
              displayer: "Navigate To",
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
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666181aebd2970002c6247e0?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "page",
              key: "tabUrl",
              displayer: "Navigate To",
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
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666181aebd2970002c6247e4?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "page",
              key: "tabUrl",
              displayer: "Navigate To",
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
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666181aebd2970002c6247e1?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "page",
              key: "tabUrl",
              displayer: "Navigate To",
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
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666181aebd2970002c6247de?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "page",
              key: "tabUrl",
              displayer: "Navigate To",
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
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666181aebd2970002c6247dd?alt=media&timestamp=1719483639150",
              },
            },
            {
              type: "page",
              key: "tabUrl",
              displayer: "Navigate To",
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
    this.addProp({
      type: "boolean",
      key: "isCounterActive",
      displayer: "Counter",
      value: true,
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: false,
    });

    this.setComponentState("activeTab", 0);
  }

  handleMouseEnter(index: number) {
    this.setComponentState("activeTab", index);
  }

  static getName(): string {
    return "Hero Section 9";
  }

  render() {
    const textExist: string = this.getPropValue("text", { as_string: true });
    const socials = this.castToObject<ISocial[]>("socials");
    const tabs = this.castToObject<ITab[]>("tabs");
    const activeTabIndex: number = this.getComponentState("activeTab");

    const currentImage = tabs[activeTabIndex]?.image ?? null;

    const socialHeight = window.document.getElementById("header9-social")?.clientHeight
    const isCounterActive = this.getPropValue("isCounterActive")
    const noTabs = ((tabs.length < 1 || !isCounterActive) && !textExist);

    const featured: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("featuredLink");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <Base.ContainerGrid className={this.decorateCSS("tabs")}>
            <Base.GridCell className={this.decorateCSS("left-content")}>
              {(tabs.length > 0 || textExist) && (
                <div className={this.decorateCSS("buttons")} style={{ paddingLeft: `calc((${socialHeight}px) + var(--composer-gap-xl))` }}>
                  {textExist && (
                    <Base.H4 className={this.decorateCSS("text")}>
                      {this.getPropValue("text")}
                    </Base.H4>
                  )}

                  {isCounterActive &&
                    <div className={this.decorateCSS("counter-wrapper")}>
                      <Base.H3 className={this.decorateCSS("active-number")}>
                        {activeTabIndex + 1}
                      </Base.H3>
                      <span className={this.decorateCSS("slash")}>/</span>
                      <Base.H5 className={this.decorateCSS("count")}>
                        {tabs.length}
                      </Base.H5>
                    </div>}
                </div>
              )}
              <Base.VerticalContent className={`${this.decorateCSS("tab-buttons")} ${noTabs && this.decorateCSS("no-tabs")}`}
                style={{
                  maxHeight: `calc(100% - (${socialHeight}px + var(--composer-gap-md) * 3))`
                }}>
                {tabs.length > 0 &&
                  tabs.map((tab: ITab, index: number) => {
                    const url = tab.tabUrl;
                    return (
                      <ComposerLink key={index} path={url}>
                        <div
                          className={`${this.decorateCSS("tabText")}
                            ${this.getComponentState("activeTab") === index &&
                            this.decorateCSS("active")}`}
                          onMouseEnter={() => this.handleMouseEnter(index)}
                        >
                          {this.castToString(tab.tabText)}
                        </div>
                      </ComposerLink>
                    ) 
                  })}
                {this.castToString(featured.text) && (
                  <ComposerLink path={featured.url}>
                    <Base.Button buttonType={featured.type} className={this.decorateCSS("linkText")}>
                      <Base.P className={this.decorateCSS("text")}>{featured.text}</Base.P>
                    </Base.Button>
                  </ComposerLink>
                )}
              </Base.VerticalContent>
            </Base.GridCell>
            {currentImage && (
              <Base.GridCell className={this.decorateCSS("right-content")}>
                <div className={this.decorateCSS("image-wrapper")}>
                  <Base.Media
                    value={currentImage}
                    className={this.decorateCSS("image")}
                  />
                  {this.getPropValue("overlay") && currentImage && currentImage.type === "image" && currentImage.url && (
                    <div className={this.decorateCSS("overlay")} />
                  )}
                </div>
              </Base.GridCell>
            )}
            {socials.length > 0 && (
              <div className={this.decorateCSS("social")} id={"header9-social"}>
                {socials.map((tab: ISocial, idx: number) => (
                  <div
                    style={{ width: `${100 / socials.length} %` }}
                    className={this.decorateCSS("social-item")}
                  >
                    <ComposerLink key={idx} path={tab.socialUrl}>
                      <Base.P className={this.decorateCSS("social-link")}>
                        {tab.socialLinkText}
                      </Base.P>
                    </ComposerLink>
                  </div>
                ))}
              </div>
            )}
          </Base.ContainerGrid>
        </div>
      </div >
    );
  }
}

export default HeroSection9;

