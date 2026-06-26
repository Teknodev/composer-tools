import * as React from "react";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./feature18.module.scss";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type Button = {
  text: React.JSX.Element;
  url: string;
  icon: TypeMediaInputValue;
  type: string;
};

type ITabs = {
  tabText: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
  buttons: Button[];
  icon: TypeMediaInputValue;
};

class Feature18 extends BaseFeature {
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
          displayer: "Tab Item",
          value: [
            {
              type: "string",
              key: "tabText",
              displayer: "Tab Title",
              value: "Business Strategy",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "FaBox"
              },
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
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "Learn More", "", null, null, "Primary"),
              ],
            }
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
              value: "Research",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "HiBeaker"
              },
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
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "Learn More", "", null, null, "Primary"),
              ],
            }
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
              value: "Data Analysis",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "GrAnalytics"
              },
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
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "Learn More", "", null, null, "Primary"),
              ],
            }
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
              value: "UI Design",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "HiGlobeAlt"
              },
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
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "Learn More", "", null, null, "Primary"),
              ],
            }
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
              value: "Ux Design",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "SiAltiumdesigner"
              },
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
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "Learn More", "", null, null, "Primary"),
              ],
            }
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
              value: "Technology",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "SlBulb"
              },
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
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "Learn More", "", null, null, "Primary"),
              ],
            }
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
              value: "Creative",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "FiAperture"
              },
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
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "Learn More", "", null, null, "Primary"), 
              ],
            }
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
    return "Feature 18";
  }
  render() {
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("tabs")}>
            <div className={this.decorateCSS("tab-buttons")}>
              {this.castToObject<ITabs[]>("tabs").map(
                (tab: ITabs, index: number) => (this.castToString(tab.tabText) || tab.icon) && (
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
                    <Base.Media
                      value={tab.icon}
                      className={this.decorateCSS("tab-icon")}
                    />
                    <div className={this.decorateCSS("square")}></div>
                    <Base.H6 className={this.decorateCSS("tab-text")}>
                      {tab.tabText}
                    </Base.H6>
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
                        <Base.Media
                          value={tab.icon}
                          className={this.decorateCSS("icon")}
                        />
                      </Base.Row>
                    )}
                    {this.castToString(tab.title) && (
                      <Base.H4 className={this.decorateCSS("title")}>
                        {tab.title}
                      </Base.H4>
                    )}
                    {this.castToString(tab.description) && (
                      <Base.SectionDescription
                        className={this.decorateCSS("description")}
                      >
                        {tab.description}
                      </Base.SectionDescription>
                    )}
                    {tab.buttons && tab.buttons.some((btn: Button) => {
                      const buttonText = this.castToString(btn.text);
                      const iconExist = btn.icon && (btn.icon.type === "icon" ? btn.icon.name : btn.icon.url);
                      return buttonText || iconExist;
                    }) && (
                      <div className={this.decorateCSS("button-container")}>
                        {tab.buttons.map((item: Button, btnIndex: number) => {
                          const buttonText = this.castToString(item.text);
                          const iconExist = item.icon && (item.icon.type === "icon" ? item.icon.name : item.icon.url);
                          if (!buttonText && !iconExist) return null;
                          return (
                            <ComposerLink key={btnIndex} path={item.url}>
                              <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                                {buttonText && (
                                  <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                                )}
                                {iconExist && (
                                  <Base.Media className={this.decorateCSS("button-icon")} value={item.icon} />
                                )}
                              </Base.Button>
                            </ComposerLink>
                          );
                        })}
                      </div>
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
export default Feature18;
