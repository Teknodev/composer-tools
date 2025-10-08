import * as React from "react";
import styles from "./faq8.module.scss";
import { BaseFAQ } from "../../EditorComponent";

import { Base } from "../../../composer-base-components/base/base";

type Category = {
  categoryName: React.JSX.Element;
  questions: Array<any>;
};

class Faq8 extends BaseFAQ {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "FAQ",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Frequently Asked Questions",
    });
    this.addProp({
      type: "media",
      key: "dot_icon",
      displayer: "Dot icon",
      additionalParams: {
        availableTypes: ["icon"],
      },
      value: {
        type: "icon",
        name: "GoDotFill",
      },
    });
    this.addProp({
      type: "media",
      key: "arrow-right",
      displayer: "Right Arrow icon",
      additionalParams: {
        availableTypes: ["icon"],
      },
      value: {
        type: "icon",
        name: "IoMdArrowRoundForward",
      },
    });
    this.addProp({
      type: "media",
      key: "arrow-down",
      displayer: "Down Arrow icon",
      additionalParams: {
        availableTypes: ["icon"],
      },
      value: {
        type: "icon",
        name: "FaAngleDown",
      },
    });

    this.addProp({
      type: "array",
      key: "categories",
      displayer: "Categories",
      value: [
        {
          type: "object",
          key: "questions",
          displayer: "Questions",
          value: [
            {
              type: "string",
              key: "categoryName",
              displayer: "Category Name",
              value: "Theme License",
            },
            {
              type: "array",
              key: "questions",
              displayer: "Questions",
              value: [
                {
                  type: "object",
                  key: "question",
                  displayer: "Question",
                  value: [
                    {
                      type: "string",
                      key: "qq",
                      displayer: "Question",
                      value: "How do I repair an item on envato market?",
                    },
                    {
                      type: "string",
                      key: "answer",
                      displayer: "Answer",
                      value: "b1",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "question",
                  displayer: "Question",
                  value: [
                    {
                      type: "string",
                      key: "qq",
                      displayer: "Question",
                      value: "My page is broken.How to solve it?",
                    },
                    {
                      type: "string",
                      key: "answer",
                      displayer: "Answer",
                      value: "b2",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "question",
                  displayer: "Question",
                  value: [
                    {
                      type: "string",
                      key: "qq",
                      displayer: "Question",
                      value: "What is required to use Classified Listing Pro?",
                    },
                    {
                      type: "string",
                      key: "answer",
                      displayer: "Answer",
                      value: "b3",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "question",
                  displayer: "Question",
                  value: [
                    {
                      type: "string",
                      key: "qq",
                      displayer: "Question",
                      value:
                        "Is it possible to customise the resarvation form?",
                    },
                    {
                      type: "string",
                      key: "answer",
                      displayer: "Answer",
                      value: "b4",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "question",
                  displayer: "Question",
                  value: [
                    {
                      type: "string",
                      key: "qq",
                      displayer: "Question",
                      value: "How to get notifications?",
                    },
                    {
                      type: "string",
                      key: "answer",
                      displayer: "Answer",
                      value: "b5",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "questions",
          displayer: "Questions",
          value: [
            {
              type: "string",
              key: "categoryName",
              displayer: "Category Name",
              value: "Pricing & Support",
            },
            {
              type: "array",
              key: "questions",
              displayer: "Questions",
              value: [
                {
                  type: "object",
                  key: "question",
                  displayer: "Question",
                  value: [
                    {
                      type: "string",
                      key: "qq",
                      displayer: "Question",
                      value: "How do I repair an item on envato market?",
                    },
                    {
                      type: "string",
                      key: "answer",
                      displayer: "Answer",
                      value: "b1",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "question",
                  displayer: "Question",
                  value: [
                    {
                      type: "string",
                      key: "qq",
                      displayer: "Question",
                      value: "My page is broken.How to solve it?",
                    },
                    {
                      type: "string",
                      key: "answer",
                      displayer: "Answer",
                      value: "b2",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "question",
                  displayer: "Question",
                  value: [
                    {
                      type: "string",
                      key: "qq",
                      displayer: "Question",
                      value: "What is required to use Classified Listing Pro?",
                    },
                    {
                      type: "string",
                      key: "answer",
                      displayer: "Answer",
                      value: "b3",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "question",
                  displayer: "Question",
                  value: [
                    {
                      type: "string",
                      key: "qq",
                      displayer: "Question",
                      value:
                        "Is it possible to customise the resarvation form?",
                    },
                    {
                      type: "string",
                      key: "answer",
                      displayer: "Answer",
                      value: "b4",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "question",
                  displayer: "Question",
                  value: [
                    {
                      type: "string",
                      key: "qq",
                      displayer: "Question",
                      value: "How to get notifications?",
                    },
                    {
                      type: "string",
                      key: "answer",
                      displayer: "Answer",
                      value: "b5",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "questions",
          displayer: "Questions",
          value: [
            {
              type: "string",
              key: "categoryName",
              displayer: "Category Name",
              value: "Purchasing Online",
            },
            {
              type: "array",
              key: "questions",
              displayer: "Questions",
              value: [
                {
                  type: "object",
                  key: "question",
                  displayer: "Question",
                  value: [
                    {
                      type: "string",
                      key: "qq",
                      displayer: "Question",
                      value: "How do I repair an item on envato market?",
                    },
                    {
                      type: "string",
                      key: "answer",
                      displayer: "Answer",
                      value:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, repellendus.",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "question",
                  displayer: "Question",
                  value: [
                    {
                      type: "string",
                      key: "qq",
                      displayer: "Question",
                      value: "My page is broken.How to solve it?",
                    },
                    {
                      type: "string",
                      key: "answer",
                      displayer: "Answer",
                      value:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, repellendus.",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "question",
                  displayer: "Question",
                  value: [
                    {
                      type: "string",
                      key: "qq",
                      displayer: "Question",
                      value: "What is required to use Classified Listing Pro?",
                    },
                    {
                      type: "string",
                      key: "answer",
                      displayer: "Answer",
                      value:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, repellendus.",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "question",
                  displayer: "Question",
                  value: [
                    {
                      type: "string",
                      key: "qq",
                      displayer: "Question",
                      value:
                        "Is it possible to customise the resarvation form?",
                    },
                    {
                      type: "string",
                      key: "answer",
                      displayer: "Answer",
                      value:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, repellendus.",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "question",
                  displayer: "Question",
                  value: [
                    {
                      type: "string",
                      key: "qq",
                      displayer: "Question",
                      value: "How to get notifications?",
                    },
                    {
                      type: "string",
                      key: "answer",
                      displayer: "Answer",
                      value:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, repellendus.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "questions",
          displayer: "Questions",
          value: [
            {
              type: "string",
              key: "categoryName",
              displayer: "Category Name",
              value: "Support Tickets",
            },
            {
              type: "array",
              key: "questions",
              displayer: "Questions",
              value: [
                {
                  type: "object",
                  key: "question",
                  displayer: "Question",
                  value: [
                    {
                      type: "string",
                      key: "qq",
                      displayer: "Question",
                      value: "How do I repair an item on envato market?",
                    },
                    {
                      type: "string",
                      key: "answer",
                      displayer: "Answer",
                      value:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, repellendus.",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "question",
                  displayer: "Question",
                  value: [
                    {
                      type: "string",
                      key: "qq",
                      displayer: "Question",
                      value: "My page is broken.How to solve it?",
                    },
                    {
                      type: "string",
                      key: "answer",
                      displayer: "Answer",
                      value:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, repellendus.",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "question",
                  displayer: "Question",
                  value: [
                    {
                      type: "string",
                      key: "qq",
                      displayer: "Question",
                      value: "What is required to use Classified Listing Pro?",
                    },
                    {
                      type: "string",
                      key: "answer",
                      displayer: "Answer",
                      value:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, repellendus.",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "question",
                  displayer: "Question",
                  value: [
                    {
                      type: "string",
                      key: "qq",
                      displayer: "Question",
                      value:
                        "Is it possible to customise the resarvation form?",
                    },
                    {
                      type: "string",
                      key: "answer",
                      displayer: "Answer",
                      value:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, repellendus.",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "question",
                  displayer: "Question",
                  value: [
                    {
                      type: "string",
                      key: "qq",
                      displayer: "Question",
                      value: "How to get notifications?",
                    },
                    {
                      type: "string",
                      key: "answer",
                      displayer: "Answer",
                      value:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, repellendus.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "questions",
          displayer: "Questions",
          value: [
            {
              type: "string",
              key: "categoryName",
              displayer: "Category Name",
              value: "Technical Support",
            },
            {
              type: "array",
              key: "questions",
              displayer: "Questions",
              value: [
                {
                  type: "object",
                  key: "question",
                  displayer: "Question",
                  value: [
                    {
                      type: "string",
                      key: "qq",
                      displayer: "Question",
                      value: "How do I repair an item on envato market?",
                    },
                    {
                      type: "string",
                      key: "answer",
                      displayer: "Answer",
                      value:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, repellendus.",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "question",
                  displayer: "Question",
                  value: [
                    {
                      type: "string",
                      key: "qq",
                      displayer: "Question",
                      value: "My page is broken.How to solve it?",
                    },
                    {
                      type: "string",
                      key: "answer",
                      displayer: "Answer",
                      value:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, repellendus.",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "question",
                  displayer: "Question",
                  value: [
                    {
                      type: "string",
                      key: "qq",
                      displayer: "Question",
                      value: "What is required to use Classified Listing Pro?",
                    },
                    {
                      type: "string",
                      key: "answer",
                      displayer: "Answer",
                      value:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, repellendus.",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "question",
                  displayer: "Question",
                  value: [
                    {
                      type: "string",
                      key: "qq",
                      displayer: "Question",
                      value:
                        "Is it possible to customise the resarvation form?",
                    },
                    {
                      type: "string",
                      key: "answer",
                      displayer: "Answer",
                      value:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, repellendus.",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "question",
                  displayer: "Question",
                  value: [
                    {
                      type: "string",
                      key: "qq",
                      displayer: "Question",
                      value: "How to get notifications?",
                    },
                    {
                      type: "string",
                      key: "answer",
                      displayer: "Answer",
                      value:
                        "Lorem ipsum dolar sit amet consectetur adipisicing elit.",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });

    this.setComponentState("activeIndex", 0);
    this.setComponentState("activeIndex2", -1);
  }

  static getName(): string {
    return "FAQ 8";
  }

  handleButton(index: number) {
    this.setComponentState("activeIndex", index);
    this.setComponentState("activeIndex2", -1);
  }

  handleAnswer(index: number) {
    this.setComponentState(
      "activeIndex2",
      this.getComponentState("activeIndex2") == index ? -1 : index
    );
  }

  render() {
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            {(this.castToString(this.getPropValue("subtitle")) || this.castToString(this.getPropValue("title"))) && (
              <Base.VerticalContent className={this.decorateCSS("up-page")}>
                {this.castToString(this.getPropValue("subtitle")) && (
                  <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>
                )}
                {this.castToString(this.getPropValue("title")) && (
                  <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>
                )}
              </Base.VerticalContent>
            )}

            <div className={this.decorateCSS("down-page")}>
              {(this.getPropValue("categories").length > 0) && (
                <div className={this.decorateCSS("category-container")}>
                  {this.castToObject<Category[]>("categories").map(
                    (category: Category, indexCategory: any) => {
                      return (
                        <div
                          className={`${this.decorateCSS("categories")} ${this.getComponentState("activeIndex") ==
                            indexCategory &&
                            this.decorateCSS("active-category")
                            }`}
                          onClick={() => this.handleButton(indexCategory)}
                        >
                          {(this.getPropValue("dot_icon") || this.getPropValue("arrow-right") || this.castToString(category.categoryName)) && (
                            <div className={this.decorateCSS("category")}>
                              {this.getPropValue("dot_icon") && (
                                <Base.Media
                                  value={this.getPropValue("dot_icon")}
                                  className={this.decorateCSS("bullet-icon")}
                                />
                              )}
                              {this.castToString(category.categoryName) && (
                                <Base.H3 className={this.decorateCSS("category-name")}>
                                  {category.categoryName}
                                </Base.H3>
                              )}
                            </div>
                          )}
                          {this.getPropValue("arrow-right") && (
                            <div className={this.decorateCSS("right")}>
                              <Base.Media
                                value={this.getPropValue("arrow-right")}
                                className={this.decorateCSS("arrow-right")}
                              />
                            </div>
                          )}
                        </div>
                      );
                    }
                  )}
                </div>
              )}
              {(this.castToObject<Category[]>("categories")[this.getComponentState("activeIndex")]?.questions.length > 0) && (
                <div className={this.decorateCSS("questions")}>
                  {this.castToObject<Category[]>("categories")[
                    this.getComponentState("activeIndex")
                  ]?.questions.map((question, questionIndex) => {
                    return (
                      <div
                        onClick={() => this.handleAnswer(questionIndex)}
                        className={this.decorateCSS("question-container")}
                      >
                        {(this.castToString(question.qq)) && (
                          <div className={this.decorateCSS("question")}>
                            <Base.H3 className={`${this.decorateCSS("question-title")} ${this.getComponentState("activeIndex2") === questionIndex ? this.decorateCSS("active") : ""}`}>
                              {question.qq}
                            </Base.H3>
                            <Base.Media value={this.getPropValue("arrow-down")} className={`${this.decorateCSS("question-icon")} ${this.getComponentState("activeIndex2") === questionIndex ? this.decorateCSS("active") : ""}`} />
                          </div>
                        )}
                        {this.castToString(question.answer) && (
                          <div className={`${this.decorateCSS("inner-text-wrapper")} ${this.getComponentState("activeIndex2") === questionIndex ? this.decorateCSS("active") : ""}`}>
                            <Base.P className={this.decorateCSS("inner-text")}>
                              {question.answer}
                            </Base.P>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Faq8;
