import * as React from "react";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseList } from "../../EditorComponent";
import styles from "./list1.module.scss";

type linkAccordionItem = {
  accordionContent: string;
  listItem: string;
};
type linkMain = {
  linkTitle: string;
  linkAccordion: linkAccordionItem[];
};
class List1 extends BaseList {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      key: "link-main",
      displayer: "Link Main",
      value: [
        {
          type: "object",
          key: "title",
          displayer: "Title",
          value: [
            {
              type: "string",
              key: "linkTitle",
              displayer: "Link Title",
              value: PlaceholderFiller.string(),
            },
            {
              type: "array",
              key: "linkAccordion",
              displayer: "Link Accordion",
              value: [
                {
                  type: "object",
                  key: "linkAccordionItem",
                  displayer: "Link Accordion Item",
                  value: [
                    {
                      type: "string",
                      key: "listItem",
                      displayer: "List Item",
                      value: PlaceholderFiller.string(),
                    },
                    {
                      type: "string",
                      key: "accordionContent",
                      displayer: "Accordion Content",
                      value: PlaceholderFiller.shortText(),
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "List 1";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          {this.castToObject<linkMain[]>("link-main").map(
            (linkMain: any, index: number) => {
              return (
                <div
                  className={this.decorateCSS("feature-accordion")}
                  
                  key={index}
                >
                  <h3
                    className={this.decorateCSS("title")}
                    
                  >
                    {linkMain.linkTitle}
                  </h3>

                  <hr />

                  <div
                    className={this.decorateCSS("accordion-wrapper")}
                    
                  >
                    {linkMain.linkAccordion.map(
                      (linkAccordionItem: linkAccordionItem, index: number) => (
                        <div className={this.decorateCSS("accordion")} key={index}>
                          <input
                            type="radio"
                            name={"radio-check" + index}
                            id={"check__" + index}
                          />
                          <label
                            className={this.decorateCSS("accordion-label")}
                            htmlFor={"check__" + index}
                          >
                            {linkAccordionItem.listItem}
                          </label>
                          <div className={this.decorateCSS("accordion-content")}>
                            <p>{linkAccordionItem.accordionContent}</p>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    );
  }
}

export default List1;
