import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats3.module.scss";
import { SubTitle } from "chart.js";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class Stats3Page extends BaseStats {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subTitle",
      displayer: "subTitle",
      value: "ABOUT PERSONA",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Passionate Minds , Compassionate Hearts",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Nullam fermentum ullamcorper diam sit amet porta. Etiam ac enim velit.Ut ut mi sed turpis accumsan sagittis ac eu magna.Etiam ac nisi tellus.Morbi at velit nisl.Donec ut felis libero.",
    });
    this.addProp({
      type: "string",
      key: "descriptionMore",
      displayer: "DescriptionMore",
      value: "Nullam fermentum ullamcorper diam sit amet porta. Etiam ac enim velit.Ut ut mi sed turpis accumsan sagittis ac eu magna.",
    });
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Button",
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
              value: "Read More",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
            {
              type: "boolean",
              key: "isPrimary",
              displayer: "Is primary",
              value: false,
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "image",
      key: "backgroundImage",
      displayer: "Card Background Image",
      value:
        "https://c.files.bbci.co.uk/6422/production/_97143652_b864328e-3368-4f03-bb44-996ddfd7e7f2.jpg",
    }); 
    this.addProp({
      type: "array",
      key: "card-content",
      displayer: "Card Content",
      value: [
        {
          type: "object",
          key: "cards",
          displayer: "Cards",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "icon",
              value: "FaMedal",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "12 th",
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Years Experience",
            }
          ],
        },
        {
        type: "object",
        key: "cards",
        displayer: "Cards",
        value: [
          {
            type: "icon",
            key: "icon",
            displayer: "icon",
            value: "GoPeople",
          },
          {
            type: "string",
            key: "description",
            displayer: "Description",
            value: "800 +",
          },
          {
            type: "string",
            key: "buttonText",
            displayer: "Button Text",
            value: "Happy Clients",
          }
        ],
      },
      {
        type: "object",
        key: "cards",
        displayer: "Cards",
        value: [
          {
            type: "icon",
            key: "icon",
            displayer: "icon",
            value: "TbHeartPlus",
          },
          {
            type: "string",
            key: "description",
            displayer: "Description",
            value: "100 +",
          },
          {
            type: "string",
            key: "buttonText",
            displayer: "Button Text",
            value: "Psycologist",
          }
        ],
      }
      
      ]
    
      });
  }
  

  getName(): string {
    return "Stats 3";
  }

  render() {
    const styling = {
      backgroundImage: `url('${this.getPropValue("backgroundImage")}')`,
    };
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("stats3-page")}>
            <div className={this.decorateCSS("bottom-child")}>
              <div className={this.decorateCSS("title")}>
                <h1 className={this.decorateCSS("subTitle")}>{this.getPropValue("subTitle")}</h1>
                <h1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h1>
                <h1 className={this.decorateCSS("description")}>{this.getPropValue("description")}</h1>
                <h3 className={this.decorateCSS("descriptionMore")}>{this.getPropValue("descriptionMore")}</h3>
              </div>

              
              <div className={this.decorateCSS("box")}>
                {this.castToObject<any>("buttons").map(
                  (item: any, index: number) => {
                    return (
                      <ComposerLink key={`stats-${index}`} path={item.url}>
                        <button
                          className={`${this.decorateCSS("button")} ${item.isPrimary && this.decorateCSS("button-color")
                            }`}
                        >
                          {item.buttonText}
                          
                         
                        </button>
                      </ComposerLink>
                    );
                  }
                )}
              </div>
              
              <div className={this.decorateCSS("card")} style={styling}>  

              
              </div>
              
              <div className={this.decorateCSS("boxs")}>
              
                {this.castToObject<any>("card-content").map(
                  (item: any, index: number) => {
                    return (
                      <ComposerLink key={`stats-${index}`} path={item.url}>
                        <button
                          className={`${this.decorateCSS("cards")} ${item.isPrimary
                             && this.decorateCSS("card-color")
                            }`} 
                        >
                        <img src={item.icon} alt="icon" className={this.decorateCSS("icon-logo")} />
                        
                          {item.buttonText}
                          {item.description}
                        </button>
                      </ComposerLink>
                    );
                  }
                )}
              </div>



              

            </div>
          </div>
        </div>
      </div>
    )
  }
  }
      
export default Stats3Page;
