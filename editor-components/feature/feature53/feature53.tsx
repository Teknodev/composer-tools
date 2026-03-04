import * as React from "react";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./feature53.module.scss";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type ITab = {
  tabText: JSX.Element;
  subtitle: JSX.Element;
  title: JSX.Element;
  description: JSX.Element;
  cardMedia: {
    media?: TypeMediaInputValue;
    overlay?: boolean;
  };
  buttons: INPUTS.CastedButton[];
};

class Feature53 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "How we can help you",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
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
              displayer: "Tab Title",
              value: "Analytics",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Smart data analytics",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.\n\nNanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
            },
            {
              type: "object",
              key: "cardMedia",
              displayer: "Media",
              value: [
                {
                  type: "media",
                  key: "media",
                  displayer: "Media",
                  additionalParams: {
                    availableTypes: ["image", "video"],
                  },
                  value: {
                    type: "image",
                    url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/692da708496aa1002ca4c1c1?alt=media",
                  },
                },
                {
                  type: "boolean",
                  key: "overlay",
                  displayer: "Overlay",
                  value: false,
                },
              ],
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
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
              displayer: "Tab Title",
              value: "Web design",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Visual component of the project",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
            },
            {
              type: "object",
              key: "cardMedia",
              displayer: "Media",
              value: [
                {
                  type: "media",
                  key: "media",
                  displayer: "Media",
                  additionalParams: {
                    availableTypes: ["image", "video"],
                  },
                  value: {
                    type: "image",
                    url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/692da716496aa1002ca4c1da?alt=media",
                  },
                },
                {
                  type: "boolean",
                  key: "overlay",
                  displayer: "Overlay",
                  value: false,
                },
              ],
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
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
              displayer: "Tab Title",
              value: "Animation",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "CSS and JavaScript animation",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.User generated content in real-time will have multiple touchpoints for offshoring.",
            },
            {
              type: "object",
              key: "cardMedia",
              displayer: "Media",
              value: [
                {
                  type: "media",
                  key: "media",
                  displayer: "Media",
                  additionalParams: {
                    availableTypes: ["image", "video"],
                  },
                  value: {
                    type: "image",
                    url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/692da722496aa1002ca4c1e8?alt=media",
                  },
                },
                {
                  type: "boolean",
                  key: "overlay",
                  displayer: "Overlay",
                  value: false,
                },
              ],
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
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
              displayer: "Tab Title",
              value: "Marketing",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Tools for every business",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail.Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.",
            },
            {
              type: "object",
              key: "cardMedia",
              displayer: "Media",
              value: [
                {
                  type: "media",
                  key: "media",
                  displayer: "Media",
                  additionalParams: {
                    availableTypes: ["image", "video"],
                  },
                  value: {
                    type: "image",
                    url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/692da72d496aa1002ca4c1f9?alt=media",
                  },
                },
                {
                  type: "boolean",
                  key: "overlay",
                  displayer: "Overlay",
                  value: false,
                },
              ],
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
            },
          ],
        },
      ],
    });

    this.setComponentState("activeTab", -1);
  }

  setActiveTab(index: number) {
    const currentActive = this.getComponentState("activeTab");
    this.setComponentState("activeTab", currentActive === index ? -1 : index);
  }

  setDesktopTab(index: number) {
    this.setComponentState("activeTab", index);
  }

  static getName(): string {
    return "Feature 53";
  }

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const tabs = this.castToObject<ITab[]>("tabs") || [];
    const activeTab = this.getComponentState("activeTab") ?? -1;
    const desktopActive = activeTab === -1 ? 0 : activeTab;

    const hasSubtitle = this.castToString(subtitle);
    const hasTitle = this.castToString(title);
    const hasDescription = this.castToString(description);

    const filteredTabs = tabs.filter((tab: ITab) => {
      const cardMedia = tab.cardMedia;
      const mediaValue = cardMedia?.media as TypeMediaInputValue | undefined;
      const hasMedia = !!(mediaValue && (("url" in mediaValue && mediaValue.url) || ("name" in mediaValue && mediaValue.name)));
      const buttons = tab.buttons || [];
      const hasAnyButton = buttons.some((btn) => this.castToString(btn.text));

      return this.castToString(tab.tabText) || this.castToString(tab.title) || this.castToString(tab.subtitle) || this.castToString(tab.description) || hasMedia || hasAnyButton;
    });

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(hasSubtitle || hasTitle || hasDescription) && (
            <Base.VerticalContent className={this.decorateCSS("heading")}>
              {hasSubtitle && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>
              )}
              {hasTitle && (
                <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>
              )}
              {hasDescription && (
                <Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>
              )}
            </Base.VerticalContent>
          )}

          <Base.VerticalContent className={`${this.decorateCSS("tabs")} ${activeTab === -1 ? this.decorateCSS("tablet-closed-default") : ""}`}>
            <div className={this.decorateCSS("tab-buttons")}>
              {filteredTabs.map((tab: ITab, index: number) => {
                const tabTextExist = this.castToString(tab.tabText);
                return (
                  tabTextExist && (
                    <Base.H6
                      key={`feature53-tab-btn-${index}`}
                      className={`${this.decorateCSS("tab-button")} ${desktopActive === index ? this.decorateCSS("active") : ""}`}
                      onClick={() => this.setDesktopTab(index)}
                    >
                      {tab.tabText}
                    </Base.H6>
                  )
                );
              })}
            </div>

            <Base.VerticalContent className={this.decorateCSS("tab-content-area")}>
            {filteredTabs.map((tab: ITab, index: number) => {
              const tabTextExist = this.castToString(tab.tabText);
              const tabSubtitleExist = this.castToString(tab.subtitle);
              const tabTitleExist = this.castToString(tab.title);
              const tabDescriptionExist = this.castToString(tab.description);

              const cardMedia = tab.cardMedia;
              const mediaValue = cardMedia?.media as TypeMediaInputValue | undefined;
              const overlayEnabled = cardMedia?.overlay ?? false;
              const hasMedia = !!(mediaValue && (("url" in mediaValue && mediaValue.url) || ("name" in mediaValue && mediaValue.name)));

              const buttons = tab.buttons || [];
              const hasAnyButton = buttons.some((btn) => this.castToString(btn.text));
              const contentExist = tabSubtitleExist || tabTitleExist || tabDescriptionExist || hasAnyButton;

              return (
                <div
                  key={`feature53-tab-${index}`}
                  className={`${this.decorateCSS("tab")} ${desktopActive === index ? this.decorateCSS("active") : ""}`}
                >
                  {tabTextExist && (
                    <Base.H6
                      className={`${this.decorateCSS("tab-header")} ${activeTab === index ? this.decorateCSS("active") : ""}`}
                      onClick={() => this.setActiveTab(index)}
                    >
                      {tab.tabText}
                    </Base.H6>
                  )}

                  {(contentExist || hasMedia) && (
                    <div className={this.decorateCSS("tab-content")}>
                      {contentExist && (
                        <Base.VerticalContent className={this.decorateCSS("content")}>
                          {tabSubtitleExist && (
                            <Base.H4 className={this.decorateCSS("content-subtitle")}>{tab.subtitle}</Base.H4>
                          )}
                          {tabTitleExist && (
                            <Base.H2 className={this.decorateCSS("content-title")}>{tab.title}</Base.H2>
                          )}
                          {tabDescriptionExist && (
                            <Base.P className={this.decorateCSS("content-description")}>{tab.description}</Base.P>
                          )}
                          {hasAnyButton && (
                            <div className={this.decorateCSS("button-container")}>
                              {buttons.map((button, btnIndex) => {
                                const buttonTextExist = this.castToString(button.text);
                                return (
                                  buttonTextExist && (
                                    <ComposerLink key={`feature53-btn-${index}-${btnIndex}`} path={button.url}>
                                      <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                                        <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                                      </Base.Button>
                                    </ComposerLink>
                                  )
                                );
                              })}
                            </div>
                          )}
                        </Base.VerticalContent>
                      )}
                      {hasMedia && (
                        <div className={this.decorateCSS("media-container")}>
                          <Base.Media value={mediaValue} className={this.decorateCSS("media")} />
                          {overlayEnabled && <div className={this.decorateCSS("overlay")} />}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
            </Base.VerticalContent>
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature53;
