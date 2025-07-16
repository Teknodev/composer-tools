/*

import * as React from "react";
import { BaseSlider } from "../../EditorComponent";
import styles from "./slider11.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type ITabs = {
  title: React.JSX.Element;
  description: React.JSX.Element;
  //link: string;
  image: string;
  tabText: React.JSX.Element;
  url: string;
  number: React.JSX.Element;
};

class Slider11 extends BaseSlider {
  private rotateIntervalId?: number;

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
                "Grow your clients’ businesses with reliable, high-performance sites born to rank and built to convert—no maintenance needed.",
            },
            {
              type: "string",
              key: "url",
              displayer: "Link",
              value: "SEO and Performance",
            },
            {
              type: "string",
              key: "tabText",
              displayer: "Button Text",
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image URL",
              value:
                "https://actualitte.com/media/cache/width_944_webp/uploads/images/hayao-miyazaki-mes-jours-dans-les-longs-metrages-sont-finis-d217a5e0d5cd.jpg",
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
              key: "url",
              displayer: "Link",
              value: "Security & infrastructure",
            },
            {
              type: "string",
              key: "tabText",
              displayer: "Button Text",
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image URL",
              value:
                "https://actualitte.com/media/cache/width_944_webp/uploads/images/hayao-miyazaki-mes-jours-dans-les-longs-metrages-sont-finis-d217a5e0d5cd.jpg",
            },
          ],
        },
      ],
    });

    this.setComponentState("activeTab", 0);
  }

  componentDidMount() {
    this.scheduleNextRotation();
  }

  private scheduleNextRotation() {
    if (this.rotateIntervalId) {
      clearInterval(this.rotateIntervalId);
    }

    this.rotateIntervalId = window.setInterval(() => {
      const tabs = this.castToObject<ITabs[]>("tabs");
      const current = (this.getComponentState("activeTab") as number) || 0;
      const next = (current + 1) % tabs.length;
      this.setComponentState("activeTab", next);
    }, 10000);
  }

  componentWillUnmount() {
    if (this.rotateIntervalId !== undefined) {
      clearInterval(this.rotateIntervalId);
    }
  }

  setActiveTab(activeTabIndex: number) {
    this.setComponentState("activeTab", activeTabIndex);

    this.scheduleNextRotation();
    setTimeout(() => {
      this.setComponentState("startedIndex", activeTabIndex);
    }, 20);
  }

  static getName(): string {
    return "Slider 11";
  }

  render() {
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const tabs = this.castToObject<ITabs[]>("tabs");
    const active = this.getComponentState("activeTab") as number;

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
              {this.castToObject<ITabs[]>("tabs").map(
                (tab: ITabs, index: number) => (
                  <div key={index} className={this.decorateCSS("tab-item")}>
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
                    {tab.url && (
                      <Base.P className={this.decorateCSS("tab-link")}>
                        {tab.url}
                      </Base.P>
                    )}
                    <button
                      className={`${this.decorateCSS("tab-button")} ${
                        active === index ? this.decorateCSS("active") : ""
                      }`}
                      onClick={() => this.setActiveTab(index)}
                    >
                      {tab.tabText}
                    </button>
                  </div>
                )
              )}
            </div>
            <div className={this.decorateCSS("tabs-right")}>
              {this.castToObject<ITabs[]>("tabs").map(
                (tab: ITabs, index: number) => (
                  <div
                    key={index}
                    className={`${this.decorateCSS("tab-image")} 
                      ${active === index ? this.decorateCSS("visible") : ""}`}
                  >
                    <img src={tab.image} alt={this.castToString(tab.title)} />
                  </div>
                )
              )}
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Slider11;
*/

import * as React from "react";
import { BaseSlider } from "../../EditorComponent";
import styles from "./slider11.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type ITabs = {
  title: React.JSX.Element;
  description: React.JSX.Element;
  image: string;
  url: string;
};

class Slider11 extends BaseSlider {
  private progressIntervalId?: number;
  private readonly ANIMATION_DURATION = 10000; // 10 seconds

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
              key: "url",
              displayer: "Link",
              value: "SEO and Performance",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image URL",
              value:
                "https://actualitte.com/media/cache/width_944_webp/uploads/images/hayao-miyazaki-mes-jours-dans-les-longs-metrages-sont-finis-d217a5e0d5cd.jpg",
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
              key: "url",
              displayer: "Link",
              value: "Security & infrastructure",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image URL",
              value:
                "https://actualitte.com/media/cache/width_944_webp/uploads/images/hayao-miyazaki-mes-jours-dans-les-longs-metrages-sont-finis-d217a5e0d5cd.jpg",
            },
          ],
        },
      ],
    });

    this.setComponentState("activeTab", 0);
    this.setComponentState("progress", 0);
    this.setComponentState("isAnimating", false);
  }

  componentDidMount() {
    this.startProgressAnimation();
  }

  private startProgressAnimation() {
    // Clear any existing animation
    if (this.progressIntervalId) {
      clearInterval(this.progressIntervalId);
    }

    this.setComponentState("progress", 0);
    this.setComponentState("isAnimating", true);

    const startTime = Date.now();

    this.progressIntervalId = window.setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min((elapsed / this.ANIMATION_DURATION) * 100, 100);

      this.setComponentState("progress", progress);

      if (progress >= 100) {
        this.advanceToNextTab();
      }
    }, 50); // Update every 50ms for smooth animation
  }

  private advanceToNextTab() {
    const tabs = this.castToObject<ITabs[]>("tabs");
    const current = (this.getComponentState("activeTab") as number) || 0;
    const next = (current + 1) % tabs.length;

    this.setComponentState("activeTab", next);
    this.startProgressAnimation(); // Restart animation for next tab
  }

  componentWillUnmount() {
    if (this.progressIntervalId !== undefined) {
      clearInterval(this.progressIntervalId);
    }
  }

  setActiveTab(activeTabIndex: number) {
    this.setComponentState("activeTab", activeTabIndex);
    this.startProgressAnimation(); // Restart animation when manually switching tabs
  }

  static getName(): string {
    return "Slider 11";
  }

  render() {
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const tabs = this.castToObject<ITabs[]>("tabs");
    const active = this.getComponentState("activeTab") as number;
    const progress = this.getComponentState("progress") as number;

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
                  {tab.url && (
                    <Base.P className={this.decorateCSS("tab-link")}>
                      {tab.url}
                    </Base.P>
                  )}

                  {/* Progress Bar */}
                  <div className={this.decorateCSS("progress-container")}>
                    <div className={this.decorateCSS("progress-track")}>
                      <div
                        className={this.decorateCSS("progress-fill")}
                        style={{
                          width: active === index ? `${progress}%` : "0%",
                        }}
                      />
                    </div>
                  </div>
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
