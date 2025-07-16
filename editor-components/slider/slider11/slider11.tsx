/* import * as React from "react";
import { BaseSlider } from "../../EditorComponent";
import styles from "./slider11.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type ITabs = {
  //added
  tabText: React.JSX.Element;
  image: string;
  //
  title: React.JSX.Element;
  description: React.JSX.Element;
};

class Slider11 extends BaseSlider {
  constructor(props?: any) {
    super(props, styles);
    //set an active tab to show
    this.setComponentState("activeTab", 0);
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
          key: "tab",
          displayer: "Button text",
          value: [
            {
              type: "string",
              key: "tabText",
              displayer: "Image of Card",
              value: "SEO and performance",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image of Card",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c387bd2970002c628e59?alt=media&timestamp=1719564433797",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Unbeatable performance",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Grow your clients’ businesses with reliable, high-performance sites born to rank and built to convert—no maintenance needed.",
            },
          ],
        },

        {
          type: "object",
          key: "tab",
          displayer: "Button text",
          value: [
            {
              type: "string",
              key: "tabText",
              displayer: "Image of Card",
              value: "Security and infrastructure",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image of Card",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c387bd2970002c628e59?alt=media&timestamp=1719564433797",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Rock-solid infrastructure",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Build sites that can weather any storm with reliable 99.95% uptime SLA, automatic backups, free SSL encryption, and more.",
            },
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
    }, 20);
  }
  static getName(): string {
    return "Slider 11";
  }

  render() {
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(this.castToString(description) || this.castToString(title)) && (
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

          <div className={this.decorateCSS("tabs")}>
            <div className={this.decorateCSS("tab-buttons")}>
              {this.castToObject<ITabs[]>("tabs").map(
                (tab: ITabs, index: number) => (
                  <div
                    className={`${this.decorateCSS("tab-button")} ${
                      this.getComponentState("activeTab") === index
                        ? this.decorateCSS("active")
                        : ""
                    }`}
                    onClick={() => this.setActiveTab(index)}
                  >
                    {tab.tabText}
                  </div>
                )
              )}
            </div>

            {this.castToObject<ITabs[]>("tabs").map(
              (tab: ITabs, index: number) => (
                <Base.ContainerGrid
                  className={`${this.decorateCSS("tab")} ${
                    this.getComponentState("activeTab") === index
                      ? this.decorateCSS("active")
                      : ""
                  }`}
                >
                  {(this.castToString(tab.title) ||
                    this.castToString(tab.description)) && (
                    <Base.VerticalContent
                      className={this.decorateCSS("content")}
                    >
                      {this.castToString(tab.title) && (
                        <Base.H2 className={this.decorateCSS("content-title")}>
                          {tab.title}
                        </Base.H2>
                      )}
                      {this.castToString(tab.description) && (
                        <Base.P
                          className={this.decorateCSS("content-description")}
                        >
                          {tab.description}
                        </Base.P>
                      )}
                    </Base.VerticalContent>
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

export default Slider11;
 */

import * as React from "react";
import { BaseSlider } from "../../EditorComponent";
import styles from "./slider11.module.scss";
import { Base } from "../../../composer-base-components/base/base";

// shape of a single tab
type ITabs = {
  title: React.JSX.Element;
  description: React.JSX.Element;
  tabText: React.JSX.Element;
  image: string;
};

class Slider11 extends BaseSlider {
  constructor(props?: any) {
    super(props, styles);

    // -- Main heading props
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
          key: "tab",
          displayer: "Tab",
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
              key: "tabText",
              displayer: "Button Text",
              value: "SEO and performance",
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
          key: "tab",
          displayer: "Tab",
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
              key: "tabText",
              displayer: "Button Text",
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

    // set initial active tab
    this.setComponentState("activeTab", 0);
  }

  setActiveTab(activeTabIndex: number) {
    this.setComponentState("activeTab", activeTabIndex);
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
    //const tabs = this.castToObject<ITab[]>("tabs");
    //const active = this.getComponentState("activeTab") as number;

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
                    <button
                      className={`${this.decorateCSS("tab-button")} ${
                        this.getComponentState("activeTab") === index
                          ? this.decorateCSS("active")
                          : ""
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
              {/*tabs.map((tab, i) => (*/}
              {this.castToObject<ITabs[]>("tabs").map(
                (tab: ITabs, index: number) => (
                  <div
                    key={index}
                    className={`${this.decorateCSS("tab-image")} 
                      ${
                        this.getComponentState("activeTab") === index
                          ? this.decorateCSS("visible")
                          : ""
                      }`}
                  >
                    <img src={tab.image} alt={"Image for link"} />
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
