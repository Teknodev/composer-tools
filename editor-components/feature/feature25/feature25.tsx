import { BaseFeature } from "../../EditorComponent";
import styles from "./feature25.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import React from "react";

type ITabs = {
  tabText: React.JSX.Element;
  title: React.JSX.Element;
  text: React.JSX.Element;
  image: string;
  description: React.JSX.Element;
  button: INPUTS.CastedButton;
};

class Feature25 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "tabs",
      displayer: "Tabs",
      value: [
        {
          type: "object",
          key: "tab",
          displayer: "Button Text",
          value: [
            {
              type: "string",
              key: "tabText",
              displayer: "Button",
              value: "Effortless Setup",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c55dbd2970002c6290b4?alt=media&timestamp=1719564433797",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "How it works",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Effortless Setup",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Get your online business ready to accept credit cards. We've worked with countless startups to become established brands, with our flexible, no-fuss setup process.",
            },
            INPUTS.BUTTON(
              "button",
              "Button",
              "Learn More",
              "",
              null,
              null,
              "Primary"
            ),
          ],
        },
        {
          type: "object",
          key: "tab",
          displayer: "Button Text",
          value: [
            {
              type: "string",
              key: "tabText",
              displayer: "Button",
              value: "Consolidated Payments",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c55dbd2970002c6290b4?alt=media&timestamp=1719564433797",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "How it works",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Consolidated Payments",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Manage all your payments through a single unified interface. Everything you need in one, organised place.",
            },
            INPUTS.BUTTON(
              "button",
              "Button",
              "Learn More",
              "",
              null,
              null,
              "Primary"
            ),
          ],
        },
        {
          type: "object",
          key: "tab",
          displayer: "Button Text",
          value: [
            {
              type: "string",
              key: "tabText",
              displayer: "Button",
              value: "Global Ready",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c55dbd2970002c6290b4?alt=media&timestamp=1719564433797",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "How it works",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Global Ready",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Reach the target markets you want. We keep your payments straightforward and efficient, no matter the complexity of the region.",
            },
            INPUTS.BUTTON(
              "button",
              "Button",
              "Learn More",
              "",
              null,
              null,
              "Primary"
            ),
          ],
        },
      ],
    });

    this.setActiveTab(0);
  }

  setActiveTab(activeTabIndex: number) {
    this.setComponentState("activeTab", activeTabIndex);
    setTimeout(() => {
      this.setComponentState("startedIndex", activeTabIndex);
    }, 5);
  }

  static getName(): string {
    return "Feature 25";
  }

  render() {
    const activeTabIndex = this.getComponentState("activeTab") || 0;
    const tabs = this.castToObject<ITabs[]>("tabs");
    const activeTab = tabs[activeTabIndex];

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("layout")}>
            {/* Sol sekme butonları */}
            <div className={this.decorateCSS("tab-buttons")}>
              {tabs.map((tab: ITabs, index: number) => (
                <div
                  key={index}
                  className={`${this.decorateCSS("tab-button")} ${
                    activeTabIndex === index ? this.decorateCSS("active") : ""
                  }`}
                  onClick={() => this.setActiveTab(index)}
                >
                  <Base.VerticalContent
                    className={this.decorateCSS("tab-text")}
                  >
                    <Base.P>{tab.tabText}</Base.P>
                  </Base.VerticalContent>
                </div>
              ))}
            </div>

            {/* Sağ içerik */}
            <div className={this.decorateCSS("content")}>
              <div className={this.decorateCSS("image-wrapper")}>
                <img
                  src={activeTab.image}
                  alt={String(this.castToString(activeTab.title) || "")}
                  className={this.decorateCSS("image")}
                />
              </div>
              <Base.VerticalContent
                className={this.decorateCSS("text-section")}
              >
                <Base.SectionSubTitle className={this.decorateCSS("text")}>
                  {activeTab.text}
                </Base.SectionSubTitle>
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {activeTab.title}
                </Base.SectionTitle>
                <Base.SectionDescription
                  className={this.decorateCSS("description")}
                >
                  {activeTab.description}
                </Base.SectionDescription>
                {this.castToString(activeTab.button.text) && (
                  <ComposerLink path={activeTab.button.url}>
                    <Base.Button
                      buttonType={activeTab.button.type}
                      className={this.decorateCSS("button")}
                    >
                      {activeTab.button.text}
                    </Base.Button>
                  </ComposerLink>
                )}
              </Base.VerticalContent>
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature25;
