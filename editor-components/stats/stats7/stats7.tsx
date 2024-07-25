import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats7.module.scss";


interface Item {
  title: string;
  progress: number;
  progressText: string;
}

class Stats7Page extends BaseStats {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "subtitle",
      value: "Our Skills."
    })

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

  }

  getName(): string {
    return "Stats 7";
  }

  render() {
    const subtitle = this.getPropValue("subtitle")
    const title = this.getPropValue("title")
    const description = this.getPropValue("description")
  


    return (
      <div className={this.decorateCSS("container")} >
        <div className={this.decorateCSS("max-content")}>

          {subtitle && <div className={this.decorateCSS("title-child")}>
            {subtitle && (
              <h1 className={this.decorateCSS("subtitle")}>{subtitle}</h1>
            )}
            {title && (
              <h1 className={this.decorateCSS("title")}>{title}</h1>
            )}
            {description && (
              <p className={this.decorateCSS("description")}>
                {description}
              </p>
            )}
          </div>}

          <div className={this.decorateCSS("progress-container")}>
            {this.getPropValue("items").map((item: any, index: number) => {
              const title = item.value[0].value;
              const percent = item.value[1].value;
              const text = item.value[2].value;

              if (percent === null || percent === undefined || text === "") {
                return null;
              }

              return (
                <div className={this.decorateCSS("item")} key={index}>
                  <div className={this.decorateCSS("progress-title")}>
                    {title}
                    <div className={this.decorateCSS("progress-percent")}>
                      <div className={this.decorateCSS("progress-text")}>
                        {text}
                      </div>
                    </div>
                  </div>
                  <div className={this.decorateCSS("progress-active")}>
                    <div
                      className={this.decorateCSS("progress-passive")}
                      style={{ width: `${percent}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    );
  }
}

export default Stats7Page;
