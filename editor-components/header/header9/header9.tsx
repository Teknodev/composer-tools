import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header9.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type ITabs = {
  tabText: string;
  //title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  image: string;
};
class Header9 extends BaseHeader {
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
              displayer: "Image of Card",
              value: "Color Flow",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image of Card",
              value:
                "https://preview.codeless.co/remake/default/wp-content/uploads/2020/02/Color-flow-4.jpg",
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
              value: "Color Flow",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image of Card",
              value:
                "https://preview.codeless.co/remake/default/wp-content/uploads/2020/02/Color-flow-4.jpg",
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
              value: "Color Flow",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image of Card",
              value:
                "https://preview.codeless.co/remake/default/wp-content/uploads/2020/02/Color-flow-4.jpg",
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
              value: "Color Flow",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image of Card",
              value:
                "https://preview.codeless.co/remake/default/wp-content/uploads/2020/02/Color-flow-4.jpg",
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
              value: "Color Flow",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image of Card",
              value:
                "https://preview.codeless.co/remake/default/wp-content/uploads/2020/02/Color-flow-4.jpg",
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
              value: "Pal",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image of Card",
              value:
                "https://images.unsplash.com/photo-1606944331229-f755b64d76ee?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },     
          ],
        },
        // {
        //   type: "object",
        //   key: "tab",
        //   displayer: "Button text",
        //   value: [
        //     {
        //       type: "string",
        //       key: "tabText",
        //       displayer: "Image of Card",
        //       value: "See all works",
        //     },         
        //   ],
        // },
      ],
    }); 
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "See All Works",
            },

            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "https://google.com",
            },
          ],
        },
      ],
    });

    const firstImage=this.getPropValue("tabs")[0].getPropValue("image")
    
    this.setActiveTab(0);
    this.setComponentState("image" ,firstImage);
  }
  setActiveTab(activeTabIndex: number) {
    this.setComponentState("activeTab", activeTabIndex);
    setTimeout(() => {
      this.setComponentState("startedIndex", activeTabIndex);
    },20)
  }

  handleMouseEnter(index: number, imageUrl: string) {
    this.setActiveTab(index);
    this.setComponentState("image", imageUrl);
  }

   handleButtonClick(buttonUrl: string) {
     window.open(buttonUrl, '_blank');
   }

  getName(): string {
    return "Header 9";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>

                <div className={this.decorateCSS("buttondiv")}>
{this.getPropValue("buttons").map(
(item: any, indexButtons: number) => {
return (
<ComposerLink
key={indexButtons}
path={item.value[1].value}
>
<button
className={`${this.decorateCSS("button")}`}
>
{item.value[0].value}
</button>
</ComposerLink>
);
}
)}
</div>
           
          <div className={this.decorateCSS("tabs")}>
            <div className={this.decorateCSS("tab-buttons")}>
              {this.castToObject<ITabs[]>("tabs").map(
                (tab: ITabs, index: number) => (
                  <div className={this.decorateCSS("tabText") + " " + ((this.getComponentState("activeTab") == index) && this.decorateCSS("active"))} 
                  onMouseEnter={() => this.handleMouseEnter(index, tab.image)}
                    onClick={() => this.handleButtonClick(tab.buttonUrl)}
                    >
                    {tab.tabText}
                  </div>
                )
              )}
            </div>
            {this.castToObject<ITabs[]>("tabs").map(
              (tab: ITabs, index: number) => (
                <div className={this.decorateCSS("tab") + " " + ((this.getComponentState("activeTab") == index) && this.decorateCSS("active")) + " " + ((this.getComponentState("startedIndex") == index) && styles["start"])}>
                  <div className={this.decorateCSS("content")}>

                    <div className={this.decorateCSS("image-container")}>
                    <img
                      className={this.decorateCSS("image")}
                      src={tab.image}
                    />
                  </div>
                   
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

export default Header9;
