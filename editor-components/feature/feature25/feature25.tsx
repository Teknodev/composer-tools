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
  }

  static getName(): string {
    return "Feature 25";
  }

  render() {
    const tabs = this.castToObject<ITabs[]>("tabs");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("tabs-wrapper")}>
            {/* Tabs buttons */}
            <div className={this.decorateCSS("tab")}>
              {tabs.map((tab: ITabs, index: number) => (
                <Base.VerticalContent key={index}>
                  <Base.P>{tab.tabText}</Base.P>
                </Base.VerticalContent>
              ))}
            </div>

            {/* Tabs content */}
            <div className={this.decorateCSS("tab-contents")}>
              {tabs.map((tab: ITabs, index: number) => (
                <div key={index} className={this.decorateCSS("tab-content")}>
                  <div className={this.decorateCSS("image-wrapper")}>
                    <img src={tab.image} alt={tab.image} />
                  </div>

                  <div className={this.decorateCSS("text-content")}>
                    <Base.P>{tab.text}</Base.P>
                    <Base.SectionTitle>{tab.title}</Base.SectionTitle>
                    <Base.SectionDescription>
                      {tab.description}
                    </Base.SectionDescription>

                    {tab.button && (
                      <ComposerLink path={tab.button.url}>
                        <Base.Button>{tab.button.text}</Base.Button>
                      </ComposerLink>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature25;
