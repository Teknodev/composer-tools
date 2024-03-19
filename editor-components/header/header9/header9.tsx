import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header9.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type ITabs = {
  socialLink: string;
  tabText: string;
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
      key: "social",
      displayer: "Social",
      value: [
        {
          type: "object",
          key: "footer-social",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "socialLink",
              displayer: "Social Link",
              value: "Behance",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "https://www.behance.net/ ",
            },  
          ],
        },
        {
          type: "object",
          key: "footer-social",
          displayer: "Item",
          value: [
            {
              type: "page",
              key: "socialLink",
              displayer: "Social Link",
              value: "Instagram",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: " https://www.instagram.com/",
            },  
          ],
        },
        {
          type: "object",
          key: "footer-social",
          displayer: "Item",
          value: [

            {
              type: "page",
              key: "socialLink",
              displayer: "Social Link",
              value: "Twitter",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: " https://twitter.com/",
            },  
          ],
        },
      ],
    });
    this.addProp({
      type: "string",
      key: "footerDescription",
      displayer: "Footer Description",
      value: "see all works",
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
              displayer: "Image Title",
              value: "color flow",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image Title",
              value:
                "https://preview.codeless.co/remake/default/wp-content/uploads/2020/02/Color-flow-4.jpg",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
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
              displayer: "Image Title",
              value: "pal",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image Title",
              value:
                "https://preview.codeless.co/remake/default/wp-content/uploads/2020/02/Pal-2-min.jpg",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: " ",
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
              displayer: "Image Title",
              value: "the lofe",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image Title",
              value:
                "https://preview.codeless.co/remake/default/wp-content/uploads/2020/02/The-lofe-1-min.jpg",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: " ",
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
              displayer: "Image Title",
              value: "kia",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image Title",
              value:
                "https://preview.codeless.co/remake/default/wp-content/uploads/2020/02/Kla_1-min.jpg",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: " ",
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
              displayer: "Image Title",
              value: "reykjavik",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image Title",
              value:
                "https://preview.codeless.co/remake/default/wp-content/uploads/2020/02/vifa-reykjavik-portable-wireless-speaker-2.jpg-min.jpg",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: " ",
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
              displayer: "Image Title",
              value: "chanel",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image Title",
              value:
                "https://preview.codeless.co/remake/default/wp-content/uploads/2020/02/miguel-andrade-potCPE_Cw8A-unsplash-min.jpg",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: " ",
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
              displayer: "Image Title",
              value: "cazador",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image Title",
              value:
                "https://preview.codeless.co/remake/default/wp-content/uploads/2020/02/cazador-min.jpg",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: " ",
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
              displayer: "Image Title",
              value: "alabster co.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image Title",
              value: "https://preview.codeless.co/remake/default/wp-content/uploads/2020/03/alabaster-co-2r13qYSJEK8-unsplash-min-1.jpg",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: " ",
            },  
          ],
        },
      ],
    });

    this.addProp({
      type: "string",
      key: "text",
      displayer: "Text",
      value: "Project",
    });

    const firstImage = this.getPropValue("tabs")[0].getPropValue("image")
    this.setComponentState("image", firstImage);
    this.setComponentState("activeTab",0)
  }


  handleMouseEnter(index: number, imageUrl: string) {
    this.setComponentState("activeTab",index)
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

          <div className={this.decorateCSS("buttons")}>

            <span className={this.decorateCSS("text")}>
              {
                this.getPropValue("text")
              }
            </span>

            <span className={this.decorateCSS("active-number")}>{this.getComponentState("activeTab") + 1}</span>
            <span className={this.decorateCSS("slash")}>/</span>
            <span className={this.decorateCSS("count")}>{this.getPropValue("tabs").length}</span>
          </div>

          <div className={this.decorateCSS("tabs")}>
            <div className={this.decorateCSS("tab-buttons")}>
              {this.castToObject<ITabs[]>("tabs").map(
                (tab: any, index: number) => (
                  <div className={this.decorateCSS("tabText") + " " + ((this.getComponentState("activeTab") == index)
                   && this.decorateCSS("active"))}
                    onMouseEnter={() => this.handleMouseEnter(index, tab.image)}
                    onClick={() => this.handleButtonClick(tab.buttonUrl)}
                  >
                    <ComposerLink path={tab.url}>
                          {tab.tabText}
                    </ComposerLink>
                   
                  </div>
                )
              )}
              <div className={this.decorateCSS("footer-bottom")}>
                <h2 className={this.decorateCSS("footerDescription")}>{this.getPropValue("footerDescription")}</h2>
              </div>
             
                         
                       

              <div className={this.decorateCSS("social")}>
                <div className={this.decorateCSS("footer-social")}>
                  {this.castToObject<ITabs[]>("social").map(
                    (tab: any, index: number) => (
                      <div className={this.decorateCSS("socialLink") + " " + ((this.getComponentState("activeSocial") == index)
                        && this.decorateCSS("active"))}
                      > 
                        <ComposerLink path={tab.url}>
                          {tab.socialLink}
                        </ComposerLink>
                      </div>
                      
                    )
                  )}
                 
                </div>
              </div>
            </div>
            <img src={this.getComponentState("image")} alt="" className={this.decorateCSS("image")} />

          </div>
        </div>
      </div>
    );
  }
}

export default Header9;
