import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content24.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type ITabs = {
  tabText: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  image: string;
};

class Content24 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Use Case",
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Use Case",
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
              value: "AI Sales Enablement",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image of Card",
              value:
                "https://images.unsplash.com/photo-1606944331229-f755b64d76ee?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Explore More",
            },
            {
              type: "page",
              key: "buttonUrl",
              displayer: "Button Link",
              value: "",
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
              value: "AI Sales Enablement",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image of Card",
              value:
                "https://images.unsplash.com/photo-1606944331229-f755b64d76ee?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Explore More",
            },
            {
              type: "page",
              key: "buttonUrl",
              displayer: "Button Link",
              value: "",
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
    },20)
  }

  getName(): string {
    return "content 24";
  }
  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
        <div className={this.decorateCSS("sub-title")}>
            {this.getPropValue("subtitle")}
          </div>
          <div className={this.decorateCSS("header")}>
            {this.getPropValue("title")}
          </div>
          <div className={this.decorateCSS("tabs")}>
            <div className={this.decorateCSS("tab-buttons")}>
              {this.castToObject<ITabs[]>("tabs").map(
                (tab: ITabs, index: number) => (
                  <div className={this.decorateCSS("tab-button") + " " + ((this.getComponentState("activeTab") == index) && this.decorateCSS("active"))} onClick={() => this.setActiveTab(index)}>
                    {tab.tabText}
                  </div>
                )
              )}
            </div>
            {this.castToObject<ITabs[]>("tabs").map(
              (tab: ITabs, index: number) => (
                <div className={this.decorateCSS("tab") + " " + ((this.getComponentState("activeTab") == index) && this.decorateCSS("active")) + " " + ((this.getComponentState("startedIndex") == index) && styles["start"])}>
                  <div className={this.decorateCSS("content")}>
                    <div className={this.decorateCSS("title")}>{tab.title}</div>
                    <div className={this.decorateCSS("description")}>
                      {tab.description}
                    </div>
                    <button className={this.decorateCSS("button")}>
                      <ComposerLink path={tab.buttonUrl}>
                        {tab.buttonText}
                      </ComposerLink>
                    </button>
                  </div>
                  <div className={this.decorateCSS("image-container")}>
                    <img
                      className={this.decorateCSS("image")}
                      src={tab.image}
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Content24;
