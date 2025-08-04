import * as React from "react";
import { BaseSlider } from "../../EditorComponent";
import styles from "./slider11.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type ITabs = {
  title: React.JSX.Element;
  description: React.JSX.Element;
  image: string;
  text: React.JSX.Element;
  url: string;
  icon: string;
};

class Slider11 extends BaseSlider {
  private progressIntervalId?: NodeJS.Timeout;
  private readonly ANIMATION_DURATION = 10000;

  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Design eye-catching websites with next generation performance",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Create beautiful sites with ultimate design flexibility, backed by ultra-reliable infrastructure and unbeatable performance.",
    });

    this.addProp({
      type: "array",
      key: "tabs",
      displayer: "Tabs",
      value: [
        {
          type: "object",
          key: "tabs1",
          displayer: "Tabs 1",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Tab Title",
              value: "Unbeatable performance",
            },
            {
              type: "string",
              key: "description",
              displayer: "Tab Description",
              value:
                "Grow your clients' businesses with reliable, high-performance sites born to rank and built to convert—no maintenance needed.",
            },
            {
              type: "string",
              key: "text",
              displayer: "Link Title",
              value: "SEO and Performance",
            },
            {
              type: "page",
              key: "url",
              displayer: "Link URL",
              value: "",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "GoArrowRight",
            },

            {
              type: "image",
              key: "image",
              displayer: "Image URL",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/687f951fa85f1c002bbaf9cf?alt=media",
            },
          ],
        },
        {
          type: "object",
          key: "tabs2",
          displayer: "Tabs 2",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Tab Title",
              value: "Rock-solid infrastructure",
            },
            {
              type: "string",
              key: "description",
              displayer: "Tab Description",
              value:
                "Build sites that can weather any storm with reliable 99.95% uptime SLA, automatic backups, free SSL encryption, and more.",
            },
            {
              type: "string",
              key: "text",
              displayer: "Link Title",
              value: "Security and infrastructure",
            },

            {
              type: "page",
              key: "url",
              displayer: "Link URL",
              value: "",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "GoArrowRight",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image URL",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/687f9530a85f1c002bbaf9f2?alt=media",
            },
          ],
        },
        {
          type: "object",
          key: "tabs3",
          displayer: "Tabs 3",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Tab Title",
              value: "Sell anything, anytime",
            },
            {
              type: "string",
              key: "description",
              displayer: "Tab Description",
              value:
                "Create highly customizable, SEO-ready eCommerce sites for clients with all the features you need to sell anything to anyone.",
            },
            {
              type: "string",
              key: "text",
              displayer: "Link Title",
              value: "Sell online",
            },
            {
              type: "page",
              key: "url",
              displayer: "Link URL",
              value: "",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "GoArrowRight",
            },

            {
              type: "image",
              key: "image",
              displayer: "Image URL",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/687f951fa85f1c002bbaf9cf?alt=media",
            },
          ],
        },
      ],
    });

    this.setComponentState("activeTab", 0);
  }

  onComponentDidMount() {
    this.startProgressAnimation();
  }

  private startProgressAnimation() {
    if (this.progressIntervalId) {
      clearInterval(this.progressIntervalId);
    }

    this.progressIntervalId = setTimeout(() => {
      this.advanceToNextTab();
    }, this.ANIMATION_DURATION);
  }

  private advanceToNextTab() {
    const tabs = this.castToObject<ITabs[]>("tabs");
    const current = (this.getComponentState("activeTab") as number) || 0;
    const next = (current + 1) % tabs.length;

    this.setComponentState("activeTab", next);
    this.startProgressAnimation();
  }

  onComponentWillUnmount() {
    if (this.progressIntervalId !== undefined) {
      clearInterval(this.progressIntervalId);
    }
  }

  setActiveTab(activeTabIndex: number) {
    this.setComponentState("activeTab", activeTabIndex);
    this.startProgressAnimation();
  }

  static getName(): string {
    return "Slider 11";
  }

  render() {
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const tabs = this.castToObject<ITabs[]>("tabs");
    const active = this.getComponentState("activeTab") as number;
    const alignmentValue = Base.getContentAlignment();

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(this.castToString(title) || this.castToString(description)) && (
            <Base.VerticalContent className={this.decorateCSS("heading")}>
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

          <div className={this.decorateCSS("tabs-layout")}>
            <div className={this.decorateCSS("tabs-left")}>
              {tabs.map((tab: ITabs, index: number) => (
                                 <div
                   key={index}
                   className={`${this.decorateCSS("tab-item")} ${
                     active === index ? this.decorateCSS("active") : ""
                   }`}
                   onClick={() => this.setActiveTab(index)}
                 >
                   <div
                     className={this.decorateCSS("tab-background")}
                     style={{
                       backgroundImage: `url(${tab.image})`,
                     }}
                   />
                  {this.castToString(tab.title) && (
                    <Base.H3 className={this.decorateCSS("tab-title")}>
                      {tab.title}
                    </Base.H3>
                  )}
                  {this.castToString(tab.description) && (
                    <Base.P className={this.decorateCSS("tab-desc")}>
                      {tab.description}
                    </Base.P>
                  )}
                  {this.castToString(tab.text) && (
                    <ComposerLink path={tab.url}>
                      <div
                        className={`${this.decorateCSS("link-wrapper")} ${
                          alignmentValue === "center"
                            ? this.decorateCSS("center")
                            : this.decorateCSS("left")
                        }`}
                      >
                        <Base.P className={this.decorateCSS("tab-link")}>
                          {tab.text}
                        </Base.P>
                        <Base.Icon
                          name={tab.icon}
                          propsIcon={{
                            className: this.decorateCSS("icon"),
                          }}
                        />
                      </div>
                    </ComposerLink>
                  )}

                  {tabs.length > 1 && (
                    <div className={this.decorateCSS("progress-container")}>
                      <div className={this.decorateCSS("progress-track")}>
                                                 <div
                           className={`${this.decorateCSS("progress-fill")} ${
                             active === index ? this.decorateCSS("animate") : ""
                           }`}
                         />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className={this.decorateCSS("tabs-right")}>
              {tabs.map((tab: ITabs, index: number) => (
                <div
                  key={index}
                  className={`${this.decorateCSS("tab-image")} 
                    ${active === index ? this.decorateCSS("visible") : ""}`}
                >
                  <img src={tab.image} alt={this.castToString(tab.title)} />
                </div>
              ))}
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Slider11;
