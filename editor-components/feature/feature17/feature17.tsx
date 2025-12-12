import * as React from "react";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./feature17.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type ITabs = {
  tabText: React.JSX.Element;
  title: React.JSX.Element;
  subtitle?: React.JSX.Element;
  description: React.JSX.Element;
  buttons: INPUTS.CastedButton[];
  image: TypeMediaInputValue;
};

class Feature17 extends BaseFeature {
  private tabButtonsRef = React.createRef<HTMLDivElement>();
  private wrapperRef = React.createRef<HTMLDivElement>();
  private hasResizeListener = false;

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
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
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
                "This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables. You can also customize your own dynamic versions.",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Button",
              value: [
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
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/692da708496aa1002ca4c1c1?alt=media",
              },
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
              value: "Tool Workflow",
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
              value: "Connect every part of your entire business",
            },

            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Keep data consistent, with native CRM integrations that streamline your entire Tool workflow.",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Button",
              value: [
                INPUTS.BUTTON(
                  "button",
                  "Button",
                  "See all integrations",
                  "",
                  "FaArrowRight",
                  null,
                  "Bare"
                ),
              ],
            },

            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/692da716496aa1002ca4c1da?alt=media",
              },
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
              value: "Control your Apps",
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
              value: "Maintain compliance and control your apps",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Improve security and trust with built-in legally binding e-Signatures. Create pre-approved templates, content blocks and lock all legal information to prevent costly mistakes.",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Button",
              value: [
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
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/692da722496aa1002ca4c1e8?alt=media",
              },
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
              value: "Approvals",
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
              value: "Review quickly and confidently",
            },

            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Get real-time access to approvals, comments and version tracking. Smart features like variables and conditional logic help you eliminate Tool errors.",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Button",
              value: [
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
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/692da72d496aa1002ca4c1f9?alt=media",
              },
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: false,
    });

    this.setActiveTab(0);
  }

  setActiveTab(activeTabIndex: number) {
    this.setComponentState("activeTab", activeTabIndex);
  }

  private isDragging = false;
  private dragMoved = false;
  private startX = 0;
  private scrollLeft = 0;

  onTabClick = (e: React.MouseEvent, index: number) => {
    if (this.dragMoved) {
      this.dragMoved = false;
      e.preventDefault();
      return;
    }

    this.setActiveTab(index);
  };

  updateScrollbar = () => {
    const el = this.tabButtonsRef.current;
    const wrapper = this.wrapperRef.current;
    if (!el || !wrapper) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) {
      wrapper.style.setProperty("--thumb-width", "0%");
      return;
    }

    const thumbWidth = (el.clientWidth / el.scrollWidth) * 100;
    const thumbLeft = (el.scrollLeft / maxScroll) * (100 - thumbWidth);
    wrapper.style.setProperty("--thumb-width", `${thumbWidth}%`);
    wrapper.style.setProperty("--thumb-left", `${thumbLeft}%`);
  };

  handleDragScroll = (e: React.MouseEvent) => {
    const el = this.tabButtonsRef.current;
    if (!el) return;

    if (e.type === "mousedown") {
      this.isDragging = true;
      this.dragMoved = false;
      this.startX = e.pageX - el.offsetLeft;
      this.scrollLeft = el.scrollLeft;
      el.style.cursor = "grabbing";
      el.style.userSelect = "none";
    } else if (e.type === "mousemove") {
      if (!this.isDragging) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const dx = x - this.startX;
      if (Math.abs(dx) > 5) {
        this.dragMoved = true;
      }
      el.scrollLeft = this.scrollLeft - dx;
    } else if (e.type === "mouseup" || e.type === "mouseleave") {
      this.isDragging = false;
      el.style.cursor = "grab";
      el.style.userSelect = "";
    }
  };

  componentDidMount() {
    const el = this.tabButtonsRef.current;
    if (el) {
      el.addEventListener("scroll", this.updateScrollbar);
      if (!this.hasResizeListener) {
        window.addEventListener("resize", this.updateScrollbar);
        this.hasResizeListener = true;
      }
      this.updateScrollbar();
    }
  }

  componentWillUnmount() {
    const el = this.tabButtonsRef.current;
    if (el) {
      el.removeEventListener("scroll", this.updateScrollbar);
    }
    if (this.hasResizeListener) {
      window.removeEventListener("resize", this.updateScrollbar);
      this.hasResizeListener = false;
    }
  }

  static getName(): string {
    return "Feature 17";
  }
  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");

    const tabs = this.castToObject<ITabs[]>("tabs") || [];
    const activeTab = this.getComponentState("activeTab");
    const overlay = this.getPropValue("overlay");

    const hasTitle = this.castToString(title);
    const hasSubtitle = this.castToString(subtitle);
    const hasDescription = this.castToString(description);

    const alignment = Base.getContentAlignment();

    const filteredTabs = tabs.filter((tab: ITabs) => {
      const tabTextExist = this.castToString(tab.tabText);
      const tabSubtitleExist = this.castToString(tab.subtitle);
      const tabTitleExist = this.castToString(tab.title);
      const tabDescriptionExist = this.castToString(tab.description);

      const buttons = tab.buttons || [];
      const hasAnyButton = buttons.some(
        (btn) => this.castToString(btn.text) || (btn.icon as any)?.name
      );

      const hasImage = !!(tab.image && (tab.image as any).url);

      return (
        tabTextExist ||
        tabTitleExist ||
        tabSubtitleExist ||
        tabDescriptionExist ||
        hasAnyButton ||
        hasImage
      );
    });

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(hasTitle || hasDescription || hasSubtitle) && (
            <Base.VerticalContent className={this.decorateCSS("heading")}>
              {hasSubtitle && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {subtitle}
                </Base.SectionSubTitle>
              )}

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
            <div
              ref={this.wrapperRef}
              className={this.decorateCSS("tab-buttons-wrapper")}
            >
              <div
                ref={this.tabButtonsRef}
                className={this.decorateCSS("tab-buttons")}
                onMouseDown={this.handleDragScroll}
                onMouseLeave={this.handleDragScroll}
                onMouseUp={this.handleDragScroll}
                onMouseMove={this.handleDragScroll}
                style={{ cursor: "grab" }}
              >
                {filteredTabs.map((tab: ITabs, index: number) => (
                  <Base.H6
                    key={`feature17-tab-button-${index}`}
                    className={`${this.decorateCSS("tab-button")} ${
                      activeTab === index ? this.decorateCSS("active") : ""
                    }`}
                    onClick={(e: React.MouseEvent) => this.onTabClick(e, index)}
                  >
                    {tab.tabText}
                  </Base.H6>
                ))}
              </div>
              <div className={this.decorateCSS("custom-scrollbar")}>
                <div className={this.decorateCSS("custom-scrollbar-thumb")} />
              </div>
            </div>
            {filteredTabs.map((tab: ITabs, index: number) => {
              const tabSubtitleExist = this.castToString(tab.subtitle);
              const tabTitleExist = this.castToString(tab.title);
              const tabDescriptionExist = this.castToString(tab.description);

              const buttons = tab.buttons || [];
              const hasAnyButton = buttons.some(
                (btn) => this.castToString(btn.text) || (btn.icon as any)?.name
              );

              const contentExist =
                tabTitleExist ||
                tabSubtitleExist ||
                tabDescriptionExist ||
                hasAnyButton;

              const hasImage = !!(tab.image && (tab.image as any).url);

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
                      className={`${this.decorateCSS("content")} ${
                        alignment === "center" && hasImage
                          ? this.decorateCSS("center")
                          : ""
                      } ${
                        alignment === "center" && !hasImage
                          ? this.decorateCSS("no-image-center")
                          : ""
                      }`}
                    >
                      {tabSubtitleExist && (
                        <Base.H4
                          className={this.decorateCSS("content-subtitle")}
                        >
                          {tab.subtitle}
                        </Base.H4>
                      )}
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

                      {hasAnyButton && (
                        <div className={this.decorateCSS("action-buttons")}>
                          {buttons.map((button, btnIndex) => {
                            const buttonTextExist = this.castToString(
                              button.text
                            );
                            const iconExist = (button.icon as any)?.name;
                            const buttonExist = buttonTextExist || iconExist;

                            return (
                              buttonExist && (
                                <ComposerLink
                                  key={`feature17-button-${index}-${btnIndex}`}
                                  path={button.url}
                                >
                                  <Base.Button
                                    buttonType={button.type}
                                    className={this.decorateCSS("button")}
                                  >
                                    {buttonTextExist && (
                                      <Base.P
                                        className={this.decorateCSS(
                                          "button-text"
                                        )}
                                      >
                                        {button.text}
                                      </Base.P>
                                    )}
                                    {iconExist && (
                                      <Base.Media
                                        value={button.icon as any}
                                        className={this.decorateCSS(
                                          "button-icon"
                                        )}
                                      />
                                    )}
                                  </Base.Button>
                                </ComposerLink>
                              )
                            );
                          })}
                        </div>
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