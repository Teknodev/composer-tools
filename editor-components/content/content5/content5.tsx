import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content5.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type ITabs = {
  tabText: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  text: string;
  image:string;
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
            // {
            //   type: "image",
            //   key: "img",
            //   displayer: "Image",
            //   value:
            //     "https://images.unsplash.com/photo-1606944331229-f755b64d76ee?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            // },          
            {
              type: "string",
              key: "tabText",
              displayer: "Button",
              value: "Business Strategy",
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
              value: "Search",
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
                "Search",
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
            // {
            //   type: "image",
            //   key: "img",
            //   displayer: "Image",
            //   value:
            //     "https://images.unsplash.com/photo-1606944331229-f755b64d76ee?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            // },          
            {
              type: "string",
              key: "tabText",
              displayer: "Button",
              value: "Ux Design",
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
            // {
            //   type: "image",
            //   key: "img",
            //   displayer: "Image",
            //   value:
            //     "https://images.unsplash.com/photo-1606944331229-f755b64d76ee?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            // },          
            {
              type: "string",
              key: "tabText",
              displayer: "Button",
              value: "Technology",
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
            // {
            //   type: "image",
            //   key: "img",
            //   displayer: "Image",
            //   value:
            //     "https://images.unsplash.com/photo-1606944331229-f755b64d76ee?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            // },          
            {
              type: "string",
              key: "tabText",
              displayer: "Button",
              value: "Creative",
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
                      <img 
                          className={this.decorateCSS("button-image")}
                          src={tab.image}
                          alt={tab.tabText}
                          />
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
                    <img
                      className={this.decorateCSS("image")}
                      src={tab.image}
                    />
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