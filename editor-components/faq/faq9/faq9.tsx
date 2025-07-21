// faq9.tsx
import * as React from "react";
import styles from "./faq9.module.scss";
import { BaseFAQ } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";

type Question = {
  qq: string;
  answer: string;
};

class Faq9 extends BaseFAQ {
  private answerRefs: Array<HTMLDivElement | null> = [];

  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "General Questions",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!",
    });
    this.addProp({
      type: "icon",
      key: "icon",
      displayer: "Icon",
      value: "SlArrowDown",
    });

    this.addProp({
      type: "array",
      key: "questions",
      displayer: "Questions",
      value: [
        {
          type: "object",
          key: "question1",
          displayer: "Question",
          value: [
            {
              type: "string",
              key: "qq",
              displayer: "Question",
              value: "How can we help your business?",
            },
            {
              type: "string",
              key: "answer",
              displayer: "Answer",
              value:
                "Lorem Khaled Ipsum is a major key to success. They don’t want us to win. Always remember in the jungle there’s a lot of they in there, after you overcome they, you will make it to paradise. Major key, don’t fall for the trap, stay focused. It’s the ones closest to you that want to see you fail. Major key, don’t fall for the trap, stay focused",
            },
          ],
        },
        {
          type: "object",
          key: "question2",
          displayer: "Question",
          value: [
            {
              type: "string",
              key: "qq",
              displayer: "Question",
              value: "How working process is simplified?",
            },
            {
              type: "string",
              key: "answer",
              displayer: "Answer",
              value:
                "Lorem Khaled Ipsum is a major key to success. They don’t want us to win. Always remember in the jungle there’s a lot of they in there, after you overcome they, you will make it to paradise. Major key, don’t fall for the trap, stay focused. It’s the ones closest to you that want to see you fail. Major key, don’t fall for the trap, stay focused",
            },
          ],
        },
        {
          type: "object",
          key: "question3",
          displayer: "Question",
          value: [
            {
              type: "string",
              key: "qq",
              displayer: "Question",
              value: "When will my card be charged for my order?",
            },
            {
              type: "string",
              key: "answer",
              displayer: "Answer",
              value:
                "Lorem Khaled Ipsum is a major key to success. They don’t want us to win. Always remember in the jungle there’s a lot of they in there, after you overcome they, you will make it to paradise. Major key, don’t fall for the trap, stay focused. It’s the ones closest to you that want to see you fail. Major key, don’t fall for the trap, stay focused",
            },
          ],
        },
        {
          type: "object",
          key: "question4",
          displayer: "Question",
          value: [
            {
              type: "string",
              key: "qq",
              displayer: "Question",
              value: "When will my card be charged for my order?",
            },
            {
              type: "string",
              key: "answer",
              displayer: "Answer",
              value:
                "Lorem Khaled Ipsum is a major key to success. They don’t want us to win. Always remember in the jungle there’s a lot of they in there, after you overcome they, you will make it to paradise. Major key, don’t fall for the trap, stay focused. It’s the ones closest to you that want to see you fail. Major key, don’t fall for the trap, stay focused",
            },
          ],
        },
        {
          type: "object",
          key: "question5",
          displayer: "Question",
          value: [
            {
              type: "string",
              key: "qq",
              displayer: "Question",
              value: "How long does it take for home delivery?",
            },
            {
              type: "string",
              key: "answer",
              displayer: "Answer",
              value:
                "Lorem Khaled Ipsum is a major key to success. They don’t want us to win. Always remember in the jungle there’s a lot of they in there, after you overcome they, you will make it to paradise. Major key, don’t fall for the trap, stay focused. It’s the ones closest to you that want to see you fail. Major key, don’t fall for the trap, stay focused",
            },
          ],
        },
        {
          type: "object",
          key: "question6",
          displayer: "Question",
          value: [
            {
              type: "string",
              key: "qq",
              displayer: "Question",
              value: "Which credit cards do you accept?",
            },
            {
              type: "string",
              key: "answer",
              displayer: "Answer",
              value:
                "Lorem Khaled Ipsum is a major key to success. They don’t want us to win. Always remember in the jungle there’s a lot of they in there, after you overcome they, you will make it to paradise. Major key, don’t fall for the trap, stay focused. It’s the ones closest to you that want to see you fail.",
            },
          ],
        },
      ],
    });

    this.setComponentState("activeQuestionIndex1", -1);
  }

  static getName(): string {
    return "FAQ 9";
  }

  componentDidMount() {
    this.updateHeights();
  }

  componentDidUpdate() {
    this.updateHeights();
  }

  private updateHeights() {
    const active = this.getComponentState("activeQuestionIndex1");
    this.answerRefs.forEach((el, idx) => {
      if (!el) return;
      el.style.maxHeight = idx === active ? `${el.scrollHeight}px` : "0px";
    });
  }

  handleQuestion(index: number) {
    const current = this.getComponentState("activeQuestionIndex1");
    const next = current === index ? -1 : index;
    this.setComponentState("activeQuestionIndex1", next);
  }

  render() {
    const active = this.getComponentState("activeQuestionIndex1");
    const questions = this.castToObject<Question[]>("questions");
    const midPoint = Math.ceil(questions.length / 2);
    const leftQuestions = questions.slice(0, midPoint);
    const rightQuestions = questions.slice(midPoint);

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            {(this.castToString(this.getPropValue("title")) ||
              this.castToString(this.getPropValue("description"))) && (
              <Base.VerticalContent className={this.decorateCSS("up-page")}>
                {this.castToString(this.getPropValue("title")) && (
                  <Base.SectionTitle className={this.decorateCSS("title")}>
                    {this.getPropValue("title")}
                  </Base.SectionTitle>
                )}
                {this.castToString(this.getPropValue("description")) && (
                  <Base.SectionDescription
                    className={this.decorateCSS("description")}
                  >
                    {this.getPropValue("description")}
                  </Base.SectionDescription>
                )}
              </Base.VerticalContent>
            )}

            <div className={this.decorateCSS("down-page")}>
              <div className={this.decorateCSS("questions-column")}>
                {leftQuestions.map((questn, i) => {
                  const idx = i;
                  return (
                    <div
                      className={this.decorateCSS("card")}
                      key={idx}
                      onClick={() => this.handleQuestion(idx)}
                    >
                      {(questn.qq || this.getPropValue("icon")) && (
                        <div
                          className={`${this.decorateCSS("child-container")} ${
                            active === idx ? this.decorateCSS("active") : ""
                          }`}
                        >
                          {questn.qq && (
                            <div
                              className={this.decorateCSS("card-title-wrapper")}
                            >
                              <div
                                className={`${this.decorateCSS("card-title")} ${
                                  active === idx
                                    ? this.decorateCSS("active")
                                    : ""
                                }`}
                              >
                                {questn.qq}
                              </div>
                            </div>
                          )}
                          {this.getPropValue("icon") && (
                            <div
                              className={`${this.decorateCSS("icon-wrapper")} ${
                                active === idx ? this.decorateCSS("active") : ""
                              }`}
                            >
                              <Base.Icon
                                name={this.getPropValue("icon")}
                                propsIcon={{
                                  className: this.decorateCSS("icon"),
                                }}
                              />
                            </div>
                          )}
                        </div>
                      )}
                      {questn.answer && (
                        <div
                          ref={(el) => (this.answerRefs[idx] = el)}
                          className={`${this.decorateCSS("inner-card")} ${
                            active === idx ? this.decorateCSS("active") : ""
                          }`}
                        >
                          <div className={this.decorateCSS("inner-text")}>
                            {questn.answer}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className={this.decorateCSS("questions-column")}>
                {rightQuestions.map((questn, i) => {
                  const idx = i + midPoint;
                  return (
                    <div
                      className={this.decorateCSS("card")}
                      key={idx}
                      onClick={() => this.handleQuestion(idx)}
                    >
                      {(questn.qq || this.getPropValue("icon")) && (
                        <div
                          className={`${this.decorateCSS("child-container")} ${
                            active === idx ? this.decorateCSS("active") : ""
                          }`}
                        >
                          {questn.qq && (
                            <div
                              className={this.decorateCSS("card-title-wrapper")}
                            >
                              <div
                                className={`${this.decorateCSS("card-title")} ${
                                  active === idx
                                    ? this.decorateCSS("active")
                                    : ""
                                }`}
                              >
                                {questn.qq}
                              </div>
                            </div>
                          )}
                          {this.getPropValue("icon") && (
                            <div
                              className={`${this.decorateCSS("icon-wrapper")} ${
                                active === idx ? this.decorateCSS("active") : ""
                              }`}
                            >
                              <Base.Icon
                                name={this.getPropValue("icon")}
                                propsIcon={{
                                  className: this.decorateCSS("icon"),
                                }}
                              />
                            </div>
                          )}
                        </div>
                      )}
                      {questn.answer && (
                        <div
                          ref={(el) => (this.answerRefs[idx] = el)}
                          className={`${this.decorateCSS("inner-card")} ${
                            active === idx ? this.decorateCSS("active") : ""
                          }`}
                        >
                          <div className={this.decorateCSS("inner-text")}>
                            {questn.answer}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Faq9;
