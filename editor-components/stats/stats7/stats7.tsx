import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats7.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type Item = {
  title: React.JSX.Element;
  progress: number;
  progressText: React.JSX.Element;
};

class Stats7Page extends BaseStats {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Our Skills.",
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
      value: "Fierent abhorreant intellegam nam no. Eam minim di neglegentur te, ei etiamas corpora eam disentiun sea. Ut aeterno invidunt sententiae vel, assum adipisci eu vix. Ea ferri cetero ceteros eos, mea ne cibo dis entiet.",
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
              key: "title",
              displayer: "Progress Title",
              value: "Design",
            },
            {
              type: "number",
              key: "progress",
              displayer: "Progress",
              value: 75,
            },
            {
              type: "string",
              key: "progressText",
              displayer: "Progress Text",
              value: "75%",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Progress Title",
              value: "Brand Identity",
            },
            {
              type: "number",
              key: "progress",
              displayer: "Progress",
              value: 57,
            },
            {
              type: "string",
              key: "progressText",
              displayer: "Progress Text",
              value: "57%",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Progress Title",
              value: "Sketch",
            },
            {
              type: "number",
              key: "progress",
              displayer: "Progress",
              value: 84,
            },
            {
              type: "string",
              key: "progressText",
              displayer: "Progress Text",
              value: "84%",
            },
          ],
        },
      ],
    });
  }

  static getName(): string {
    return "Stats 7";
  }

  render() {
    const isSubtitleExist = this.castToString(this.getPropValue("subtitle"));
    const isTitleExist = this.castToString(this.getPropValue("title"));
    const isDescriptionExist = this.castToString(this.getPropValue("description"));
    const showDiv = isSubtitleExist || isTitleExist || isDescriptionExist;
    const items = this.castToObject<Item[]>("items");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {showDiv && (
            <Base.VerticalContent className={this.decorateCSS("title-child")}>
              {isSubtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
              {isTitleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
              {isDescriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
            </Base.VerticalContent>
          )}

          {items.length > 0 && (
            <Base.VerticalContent className={this.decorateCSS("progress-container")}>
              {items.map((item: Item, index: number) => {
                const { title, progress, progressText } = item;
                let percent = progress;
                let text = progressText ?? <>`${percent}%`</>;

                if (percent === 0) {
                  percent = 1;
                  text = <>"0%"</>;
                } else if (percent >= 100) {
                  percent = 100;
                }

                if (this.castToString(title) || this.castToString(progressText))
                  return (
                    <div className={this.decorateCSS("item")} key={index}>
                      {
                        <div className={this.decorateCSS("progress-title")}>
                          {this.castToString(title) && title}
                          {this.castToString(text) && (
                            <div className={this.decorateCSS("progress-percent")}>
                              <div className={this.decorateCSS("progress-text")}>{text}</div>
                            </div>
                          )}
                        </div>
                      }
                      {percent !== null && percent !== undefined && (
                        <div className={this.decorateCSS("progress-active")}>
                          <div className={this.decorateCSS("progress-passive")} style={{ width: `${percent}%` }}></div>
                        </div>
                      )}
                    </div>
                  );
              })}
            </Base.VerticalContent>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Stats7Page;
