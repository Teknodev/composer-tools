import * as React from "react";
import styles from "./faq8.module.scss";
import { BaseFAQ } from "../../EditorComponent";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Category = {
  categoryName: string;
  questions: Array<any>;
};

class FaqButton extends BaseFAQ {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "icon",
      key: "dot_icon",
      displayer: "Dot icon",
      value: "GoDotFill",
    });
    this.addProp({
      type: "icon",
      key: "arrow-right",
      displayer: "Arrow icon",
      value: "IoMdArrowRoundForward",
    });
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Page Title",
      value: "Frequently Asked Question",
    });

    this.addProp({
      type: "string",
      key: "badge",
      displayer: "Badge",
      value: "FAQS",
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

  getName(): string {
    return "FAQ-8";
  }

  handleButton(index: number) {
    this.setComponentState("activeIndex", index);
    this.setComponentState("activeIndex2", -1);
  }
  //   if (this.activeIndex == index) {
  //     ;
  //   } else {
  //     this.setComponentState("activeIndex", index);
  //   }
  // };

  handleAnswer(index: number) {
    this.setComponentState(
      "activeIndex2",
      this.getComponentState("activeIndex2") == index ? -1 : index
    );
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            <div className={this.decorateCSS("up-page")}>
              <div className={this.decorateCSS("badge")}>
                {this.getPropValue("badge")}
              </div>
              <h1 className={this.decorateCSS("subtitle")}>
                {this.getPropValue("subtitle")}
              </h1>
            </div>
            <div className={this.decorateCSS("down-page")}>
              <div className={this.decorateCSS("category-flex")}>
                {this.castToObject<Category[]>("categories").map(
                  (category: Category, indexCategory: any) => {
                    return (
                      <div
                        className={this.decorateCSS("categories-container")}
                        key={indexCategory}
                      >
                        <div
                          className={`${this.decorateCSS("categories")} ${
                            this.getComponentState("activeIndex") ==
                              indexCategory &&
                            this.decorateCSS("active-category")
                          }`}
                          onClick={() => this.handleButton(indexCategory)}
                        >
                          {/* inline icon */}
                          <p className={this.decorateCSS("category-name")}>
                            <span>
                              <ComposerIcon
                                name={this.getPropValue("dot_icon")}
                                propsIcon={{
                                  className: `${this.decorateCSS(
                                    "bullet-icon"
                                  )}`,
                                }}
                              />
                            </span>

                            {category.categoryName}
                          </p>
                          <span className={this.decorateCSS("arrow-right")}>
                            <ComposerIcon
                              name={this.getPropValue("arrow-right")}
                              // propsIcon={{
                              //   className: `${this.decorateCSS(
                              //     "bullet-icon"
                              //   )}`,
                              // }}
                            />
                          </span>
                        </div>

                        <div className={this.decorateCSS("line")}></div>
                      </div>
                    );
                  }
                )}
              </div>
              <div className={this.decorateCSS("questions")}>
                {this.castToObject<Category[]>("categories")[
                  this.getComponentState("activeIndex")
                ]?.questions.map((question, questionIndex) => {
                  return (
                    <div className={this.decorateCSS("categories-container")}>
                      <div
                        onClick={() => this.handleAnswer(questionIndex)}
                        className={`${this.decorateCSS("text")}`}
                      >
                        <div>
                          <p
                            className={
                              this.getComponentState("activeIndex2") ===
                                questionIndex && this.decorateCSS("active")
                            }
                          >
                            {question.qq}
                          </p>
                        </div>

                        <div
                          className={`${
                            this.getComponentState("activeIndex2") ===
                            questionIndex
                              ? `${this.decorateCSS("text")} ${this.decorateCSS(
                                  "answer-text"
                                )}`
                              : // this.decorateCSS("answer-text")
                                this.decorateCSS("hide")
                          }`}
                        >
                          <p>{question.answer}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FaqButton;
