import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content5.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";

type ITabs = {
  tabText: JSX.Element;
  title: JSX.Element;
  description: JSX.Element;
  buttonText: JSX.Element;
  buttonUrl: string;
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
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Learn More",
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
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Learn More",
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
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Learn More",
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
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Learn More",
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
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Learn More",
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
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Learn More",
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
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Learn More",
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
    }, 5);
  }

  getName(): string {
    return "content 5";
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
                      this.decorateCSS("tab-button") +
                      " " +
                      (this.getComponentState("activeTab") == index &&
                        this.decorateCSS("active"))
                    }
                    onClick={() => this.setActiveTab(index)}
                  >
                    <ComposerIcon
                      name={tab.icon}
                      propsIcon={{
                        className: this.decorateCSS("icon"),
                      }}
                    />
                    <div className={this.decorateCSS("square")}></div>
                    {tab.tabText}
                  </div>
                )
              )}
            </div>
            {this.castToObject<ITabs[]>("tabs").map(
              (tab: ITabs, index: number) => (
                <div
                  className={
                    this.decorateCSS("tab") +
                    " " +
                    (this.getComponentState("activeTab") == index &&
                      this.decorateCSS("active")) +
                    " " +
                    (this.getComponentState("startedIndex") == index &&
                      this.decorateCSS("start"))
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
                    {this.castToString(tab.buttonText) && (
                      <Base.Button className={this.decorateCSS("button")}>
                        <ComposerLink path={tab.buttonUrl}>
                          {tab.buttonText}
                        </ComposerLink>
                      </Base.Button>
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
