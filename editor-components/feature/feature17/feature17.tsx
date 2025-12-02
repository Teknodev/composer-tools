import * as React from "react";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./feature17.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type ITabs = {
  tabText: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
  button: INPUTS.CastedButton;
  image: TypeMediaInputValue;
};

class Feature17 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Smart features for your business",
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
              value: "Audit Trial",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/692da708496aa1002ca4c1c1?alt=media",
              },
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Share tools quickly and confidently in minutes",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "This powerfull tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables. You can also customize your own dynamic versions.",
            },
            INPUTS.BUTTON(
              "button",
              "Button",
              "Let's find out",
              "",
              "FaArrowRight",
              null,
              "Bare"
            ),
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
              value: "Tool Workflow",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/692da716496aa1002ca4c1da?alt=media",
              },
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Connect every part of your entire business",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Keep data consistent, with native CRM integrations that streamline your entire Tool workflow.",
            },
            INPUTS.BUTTON(
              "button",
              "Button",
              "See all integrations",
              "",
              "FaArrowRight",
              null,
              "Link"
            ),
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
              value: "Control your Apps",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/692da722496aa1002ca4c1e8?alt=media",
              },
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Maintain compliance and control your apps",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Improve security and trust with built-in legally binding e-Signatures. Create pre-approved templates, content blocks and lock all legal information to prevent costly mistakes.",
            },
            INPUTS.BUTTON(
              "button",
              "Button",
              "Let's find out",
              "",
              "FaArrowRight",
              null,
              "Link"
            ),
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
              value: "Approvals",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/692da72d496aa1002ca4c1f9?alt=media",
              },
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Review quickly and confidently",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Get real-time access to approvals, comments and version tracking. Smart features like variables and conditional logic help you eliminate Tool errors.",
            },
            INPUTS.BUTTON(
              "button",
              "Button",
              "Let's find out",
              "",
              "FaArrowRight",
              null,
              "Link"
            ),
          ],
        },
      ],
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
  }

  static getName(): string {
    return "Feature 17";
  }
  render() {
    const overlay = this.getPropValue("overlay");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const tabs = this.castToObject<ITabs[]>("tabs") || [];
    const activeTab = this.getComponentState("activeTab");

    const hasTitle = this.castToString(title);
    const hasDescription = this.castToString(description);
    const alignment = Base.getContentAlignment();

    return (
      <Base.Container
        className={this.decorateCSS("container")}
        data-alignment={alignment}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(hasTitle || hasDescription) && (
            <Base.VerticalContent className={this.decorateCSS("heading")}>
              {hasTitle && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {title}
                </Base.SectionTitle>
              )}

              {hasDescription && (
                <Base.SectionDescription
                  className={this.decorateCSS("description")}
                >
                  {description}
                </Base.SectionDescription>
              )}
            </Base.VerticalContent>
          )}

          <div className={this.decorateCSS("tabs")}>
            <div className={this.decorateCSS("tab-buttons")}>
              {tabs.map((tab: ITabs, index: number) => (
                <Base.P
                  key={`feature17-tab-button-${index}`}
                  className={`${this.decorateCSS("tab-button")} ${
                    activeTab === index ? this.decorateCSS("active") : ""
                  }`}
                  onClick={() => this.setActiveTab(index)}
                >
                  {tab.tabText}
                </Base.P>
              ))}
            </div>
            {tabs.map((tab: ITabs, index: number) => {
              const tabTitleExist = this.castToString(tab.title);
              const tabDescriptionExist = this.castToString(tab.description);
              const buttonTextExist = this.castToString(tab.button.text);
              const iconExist = (tab.button.icon as any)?.name;
              const contentExist =
                tabTitleExist ||
                tabDescriptionExist ||
                buttonTextExist ||
                iconExist;
              const buttonExist = buttonTextExist || iconExist;

              return (
                <Base.ContainerGrid
                  key={`feature17-tab-${index}`}
                  className={`${this.decorateCSS("tab")} ${
                    activeTab === index ? this.decorateCSS("active") : ""
                  }`}
                >
                  {tab.image && (
                    <div className={this.decorateCSS("image-container")}>
                      <Base.Media
                        value={tab.image}
                        className={this.decorateCSS("image")}
                      />
                      {overlay && (
                        <div className={this.decorateCSS("overlay")} />
                      )}
                    </div>
                  )}

                  {contentExist && (
                    <Base.VerticalContent
                      className={this.decorateCSS("content")}
                    >
                      {tabTitleExist && (
                        <Base.H2 className={this.decorateCSS("content-title")}>
                          {tab.title}
                        </Base.H2>
                      )}

                      {tabDescriptionExist && (
                        <Base.P
                          className={this.decorateCSS("content-description")}
                        >
                          {tab.description}
                        </Base.P>
                      )}

                      {buttonExist && (
                        <ComposerLink path={tab.button.url}>
                          <Base.Button
                            buttonType={tab.button.type}
                            className={this.decorateCSS("button")}
                          >
                            {buttonTextExist && (
                              <Base.P
                                className={this.decorateCSS("button-text")}
                              >
                                {tab.button.text}
                              </Base.P>
                            )}
                            {iconExist && (
                              <Base.Media
                                value={tab.button.icon as any}
                                className={this.decorateCSS("button-icon")}
                              />
                            )}
                          </Base.Button>
                        </ComposerLink>
                      )}
                    </Base.VerticalContent>
                  )}
                </Base.ContainerGrid>
              );
            })}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature17;
