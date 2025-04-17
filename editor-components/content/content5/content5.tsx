import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content5.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type ITabs = {
  tabText: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
  button: INPUTS.CastedButton;
  icon: string;
};

class Content5 extends BaseContent {
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
          displayer: "Button text",
          value: [
            {
              type: "string",
              key: "tabText",
              displayer: "Button",
              value: "Business Strategy",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaBox",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Business Strategy",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur <br><br> Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.",
            },
            INPUTS.BUTTON("button", "Button", "Learn More", "", null, null, "Primary")
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
              displayer: "Button",
              value: "Research",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "HiBeaker",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Research",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur <br><br> Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.",
            },
            INPUTS.BUTTON("button", "Button", "Learn More", "", null, null, "Primary")
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
              displayer: "Button",
              value: "Data Analysis",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "GrAnalytics",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Data Analysis",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur <br><br> Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.",
            },
            INPUTS.BUTTON("button", "Button", "Learn More", "",null,null, "Primary")
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
              displayer: "Button",
              value: "UI Design",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "HiGlobeAlt",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "UI Design",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur <br><br> Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.",
            },
            INPUTS.BUTTON("button", "Button", "Learn More", "", null, null, "Primary")
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
              displayer: "Button",
              value: "Ux Design",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "SiAltiumdesigner",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Ux Design",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur <br><br> Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.",
            },
            INPUTS.BUTTON("button", "Button", "Learn More", "", null, null, "Primary")
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
              displayer: "Button",
              value: "Technology",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "SlBulb",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Technology",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur <br><br> Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.",
            },
            INPUTS.BUTTON("button", "Button", "Learn More", "", null, null, "Primary")
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
              displayer: "Button",
              value: "Creative",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FiAperture",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Creative",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur <br><br> Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.",
            },
            INPUTS.BUTTON("button", "Button", "Learn More", "", null, null, "Primary")
          ],
        },
      ],
    });
    this.setActiveTab(0);

    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1"]
      }
    });
  }

  setActiveTab(activeTabIndex: number) {
    this.setComponentState("activeTab", activeTabIndex);
    setTimeout(() => {
      this.setComponentState("startedIndex", activeTabIndex);
    }, 5);
  }

  static getName(): string {
    return "Content 5";
  }
  render() {
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("tabs")}>
            <div className={this.decorateCSS("tab-buttons")}>
              {this.castToObject<ITabs[]>("tabs").map(
                (tab: ITabs, index: number) => (
                  <div
                    className={
                      `${this.decorateCSS("tab-button")} ${this.getComponentState("activeTab") === index
                        ? this.decorateCSS("active")
                        : ""
                      }`
                    }
                    data-animation={this.getPropValue("hoverAnimation").join(" ")}
                    onClick={() => this.setActiveTab(index)}
                  >
                    <ComposerIcon
                      name={tab.icon}
                      propsIcon={{
                        className: this.decorateCSS("tab-icon"),
                      }}
                    />
                    <div className={this.decorateCSS("square")}></div>
                    <div className={this.decorateCSS("tab-text")}>
                      {tab.tabText}
                    </div>
                  </div>
                )
              )}
            </div>
            {this.castToObject<ITabs[]>("tabs").map(
              (tab: ITabs, index: number) => (
                <div
                  className={
                    `${this.decorateCSS("tab")} ${this.getComponentState("activeTab") === index
                      ? this.decorateCSS("active")
                      : ""
                    } ${this.getComponentState("startedIndex") === index
                      ? this.decorateCSS("start")
                      : ""
                    }`
                  }
                >
                  <Base.VerticalContent className={this.decorateCSS("content")}>
                    {tab.icon && (
                      <Base.Row className={this.decorateCSS("icon-wrapper")}>
                        <ComposerIcon
                          name={tab.icon}
                          propsIcon={{
                            className: this.decorateCSS("icon"),
                          }}
                        />
                      </Base.Row>
                    )}
                    {this.castToString(tab.title) && (
                      <Base.SectionTitle className={this.decorateCSS("title")}>
                        {tab.title}
                      </Base.SectionTitle>
                    )}
                    {this.castToString(tab.description) && (
                      <Base.SectionDescription
                        className={this.decorateCSS("description")}
                      >
                        {tab.description}
                      </Base.SectionDescription>
                    )}
                    {this.castToString(tab.button.text) && (
                      <ComposerLink path={tab.button.url}>
                        <Base.Button buttonType={tab.button.type} className={this.decorateCSS("button")}>
                          {tab.button.text}
                        </Base.Button>
                      </ComposerLink>
                    )}
                  </Base.VerticalContent>
                </div>
              )
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}
export default Content5;
