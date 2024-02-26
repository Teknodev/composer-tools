import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content5.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { string } from "yup";

type ITabs = {
  tabText: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  text: string;
  icon:string;
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
              value:
                "Business Strategy",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value:
                "Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.",
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
              value:
                "Research",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur ",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value:
                "Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.",
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
              value:
                "Data Analysis",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur ",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value:
                "Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.",
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
              value:
                "UI Design",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur ",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value:
                "Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.",
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
              value:
                "Ux Design",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value:
                "Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.",
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
              value:
                "Technology",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value:
                "Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.",
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
              value:
                "Creative",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value:
                "Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.",
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
    },20);
  }
  
  getName(): string {
    return "content 5";
  }
  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("tabs")}>
            <div className={this.decorateCSS("tab-1")}>
            <div className={this.decorateCSS("tab-buttons")}>
              {this.castToObject<ITabs[]>("tabs").map(
                (tab: ITabs, index: number) => (
                  <div className={ this.decorateCSS("tab-button") +" " +
                      ((this.getComponentState("activeTab") == index) &&
                        this.decorateCSS("active"))}
                    onClick={() => this.setActiveTab(index)}>
                      <ComposerIcon name={tab.icon} propsIcon={{
                      className:this.decorateCSS("icon"),
                    }}/>
                          <div className={this.decorateCSS("kare")}></div>
                          {tab.tabText}
                  </div>
                )
              )}
            </div>
            </div>
            {this.castToObject<ITabs[]>("tabs").map(
              (tab: ITabs, index: number) => (
                <div className={this.decorateCSS("tab") +" " +
                    ((this.getComponentState("activeTab") == index) &&
                      this.decorateCSS("active")) +
                    " " + ((this.getComponentState("startedIndex") == index) &&
                      styles["start"])}>
                  <div className={this.decorateCSS("content")}>
                  <div className={this.decorateCSS("image-container")}>
                    <ComposerIcon name={tab.icon} propsIcon={{
                      className:this.decorateCSS("icon")
                    }}/>
                  </div>
                    <div className={this.decorateCSS("title")}>{tab.title}</div>
                    <div className={this.decorateCSS("description")}>
                      {tab.description}
                    </div>
                    <div className={this.decorateCSS("text")}>{tab.text}</div>
                    <button className={this.decorateCSS("button")}>
                      <ComposerLink path={tab.buttonUrl}>
                        {tab.buttonText}
                      </ComposerLink>
                    </button>
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
export default Content5;