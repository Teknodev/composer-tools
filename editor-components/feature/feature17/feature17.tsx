import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature17.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type ITabs = {
  tabText: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
  button: INPUTS.CastedButton;
  image: { type: "image"; url: string };
};

class Feature17 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Use Case",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Use Case",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "We focus on helping you to make useful content more accessible with an utlimate goal for a good sharing profit as a content creator.",
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
              displayer: "Tab Title",
              value: "AI Sales Enablement",
            },
            {
              type: "media",
              key: "image",
              displayer: "Image",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c387bd2970002c628e59?alt=media&timestamp=1719564433797",
              },
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value:
                "Transform mundane text, PowerPoints & PDFs into compelling videos that will captivate your team",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Usually, our colleagues don't jump in the air when they hear e-learning but the AI videos created with Writebot have sparked motivation that we haven't seen before.",
            },
            INPUTS.BUTTON("button", "Button", "Explore More", "", null, null, "Primary")
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
              displayer: "Tab Title",
              value: "AI Sales Enablement",
            },
            {
              type: "media",
              key: "image",
              displayer: "Image",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c387bd2970002c628e59?alt=media&timestamp=1719564433797",
              },
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value:
                "Transform mundane text, PowerPoints & PDFs into compelling videos that will captivate your team",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Usually, our colleagues don't jump in the air when they hear e-learning but the AI videos created with Writebot have sparked motivation that we haven't seen before.",
            },
            INPUTS.BUTTON("button", "Button", "Explore More", "", null, null, "Primary")
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
        selectItems: ["animate1", "animate2"]
      }
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });
    
    this.setActiveTab(0);
  }

  setActiveTab(activeTabIndex: number) {
    this.setComponentState("activeTab", activeTabIndex);
    setTimeout(() => {
      this.setComponentState("startedIndex", activeTabIndex);
    }, 20);
  }

  static getName(): string {
    return "Feature 17";
  }
  render() {
    const subTitle = this.getPropValue("subtitle");
    const overlay = this.getPropValue("overlay");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(this.castToString(subTitle) ||
            this.castToString(title) ||
            this.castToString(description)) && (
              <Base.VerticalContent className={this.decorateCSS("heading")}>
                {this.castToString(subTitle) && (
                  <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                    {subTitle}
                  </Base.SectionSubTitle>
                )}

                {this.castToString(title) && (
                  <Base.SectionTitle className={this.decorateCSS("title")}>
                    {title}
                  </Base.SectionTitle>
                )}

                {this.castToString(description) && (
                  <Base.SectionDescription
                    className={this.decorateCSS("description")}
                  >
                    {description}
                  </Base.SectionDescription>
                )}
              </Base.VerticalContent>
            )}

          <div 
            className={this.decorateCSS("tabs")}
            data-animation={this.getPropValue("hoverAnimation").join(" ")}
          >
            <div className={this.decorateCSS("tab-buttons")}>
              {this.castToObject<ITabs[]>("tabs").map(
                (tab: ITabs, index: number) => (
                  <Base.P
                    className={
                      `${this.decorateCSS("tab-button")} ${this.getComponentState("activeTab") === index
                        ? this.decorateCSS("active")
                        : ""
                      }`
                    }
                    onClick={() => this.setActiveTab(index)}
                  >
                    {tab.tabText}
                  </Base.P>
                )
              )}
            </div>
            {this.castToObject<ITabs[]>("tabs").map(
              (tab: ITabs, index: number) => (
                <Base.ContainerGrid
                  className={
                    `${this.decorateCSS("tab")} ${this.getComponentState("activeTab") === index
                      ? this.decorateCSS("active")
                      : ""
                    }`
                  }
                >
                  {(this.castToString(tab.title) ||
                    this.castToString(tab.description) ||
                    this.castToString(tab.button.text)) && (
                      <Base.VerticalContent
                        className={this.decorateCSS("content")}
                      >
                        {this.castToString(tab.title) && (
                          <Base.H2 className={this.decorateCSS("content-title")}>
                            {tab.title}
                          </Base.H2>
                        )}
                        {this.castToString(tab.description) && (
                          <Base.P className={this.decorateCSS("content-description")}>
                            {tab.description}
                          </Base.P>
                        )}

                        {this.castToString(tab.button.text) && (
                          <ComposerLink path={tab.button.url}>
                            <Base.Button buttonType={tab.button.type} className={this.decorateCSS("button")}>
                              <Base.P className={this.decorateCSS("button-text")}>
                                {tab.button.text}
                              </Base.P>
                            </Base.Button>
                          </ComposerLink>
                        )}

                      </Base.VerticalContent>
                    )}

                  {tab.image?.url && (
                    <div className={this.decorateCSS("image-container")} style={{ position: "relative" }}>
                      <Base.Media
                        value={tab.image}
                        className={this.decorateCSS("image")}
                        data-animation={this.getPropValue("hoverAnimation").join(" ")}
                      />
                      {overlay && <div className={this.decorateCSS("overlay")} />}
                    </div>
                  )}
                </Base.ContainerGrid>
              )
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature17;
