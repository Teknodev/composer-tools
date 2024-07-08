import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats7.module.scss";
import { string } from "yup";

interface Item {
  title: string;
  progress: number;
  progressText: string;
}

class Stats7Page extends BaseStats {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "mainProps",
      displayer: "Maintitle",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key:"maintitle",
              displayer: "MainTitle",
              value:"Our Skills."
            }
          ]
        }
      ]
    });
    
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "We work with organisations immersive customer.",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Fierent abhorreant intellegam nam no. Eam minim di neglegentur te, ei etiamas corpora eam disentiun sea. Ut aeterno invidunt sententiae vel, assum adipisci eu vix. Ea ferri cetero ceteros eos, mea ne cibo dis entiet."
    });
    this.addProp({
      type: "array",
      key: "items",
      displayer: "Items",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "progess-title",
              displayer: "Progress Title",
              value: "Design"
            },
            {
              type: "number",
              key: "progres-percent",
              displayer: "Progress",
              value: 75,
            },
            {
              type: "string",
              key: "progress-text",
              displayer: "Progress Text",
              value: "75%"
            }
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "progess-title",
              displayer: "Progress Title",
              value: "Brand Identity"
            },
            {
              type: "number",
              key: "progres-percent",
              displayer: "Progress",
              value: 57,
            },
            {
              type: "string",
              key: "progress-text",
              displayer: "Progress Text",
              value: "57%"
            }
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "progess-title",
              displayer: "Progress Title",
              value: "Sketch"
            },
            {
              type: "number",
              key: "progres-percent",
              displayer: "Progress",
              value: 84,
            },
            {
              type: "string",
              key: "progress-text",
              displayer: "Progress Text",
              value: "84%"
            }
          ],
        }
      ]
    })

    this.addProp({
      type: "boolean",
      key: "progress-text-is-primary",
      displayer: "progress-text-is-primary",
      value: true,
    });

  }

  getName(): string {
    return "Stats 7";
  }

  render() {
    
    return (
      <div className={this.decorateCSS("container")} >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("stats1-page")}>
            <div className={this.decorateCSS("title-child")}>
           
              {this.castToObject<any []>("mainProps").map((item:any, key:number) => 
              (
                <h1 className={this.decorateCSS("maintitle")}> 
                {item.maintitle}</h1>
              ))}
                
              <h1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h1>
              <p className={this.decorateCSS("description")}>{this.getPropValue("description")}</p>
            </div>
            <div className={this.decorateCSS("progress-container")}>
              {this.getPropValue("items").map((item: any, index: number) => (
                <div className={this.decorateCSS("item")} key={index}>
                  <div className={this.decorateCSS("progress-title")}>
                    {item.value[0].value}
                    <div className={this.decorateCSS("progress-percent")}>
                      <div className={this.decorateCSS("progress-text")}>
                        {item.value[2].value}
                      </div>
                    </div>
                  </div>
                  {this.getPropValue("progress-text-is-primary") && (
                    <div className={this.decorateCSS("progress-text-is-primary")}>

                      <div className={this.decorateCSS("progress-active")}>
                        <div
                          className={this.decorateCSS("progress-passive")}
                          style={{ width: `${item.value[1].value}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Stats7Page;
