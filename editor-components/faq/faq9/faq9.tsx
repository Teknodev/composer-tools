import * as React from "react";
import styles from "./faq9.module.scss";
import { BaseFAQ } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";

type Question = {
  qq: string;
  answer: string;
};

class Faq9 extends BaseFAQ {
  private answerRefs: HTMLDivElement[] = [];
  private containerRef = React.createRef<HTMLDivElement>();

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
      type: "media",
      key: "icon",
      displayer: "Icon",
      additionalParams: {
        availableTypes: ["icon"],
      },
      value: {
        type: "icon",
        name: "SlArrowDown",
      },
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

    this.setComponentState("activeLeftQuestionIndex", 0);
    this.setComponentState("activeRightQuestionIndex", 3);
    this.setComponentState("isMobile", false);
  }

  static getName(): string {
    return "FAQ 9";
  }

  onComponentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  onComponentDidUpdate() {
    this.updateHeights();
  }

  onComponentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  private handleResize = () => {
    const el = this.containerRef.current;
    if (!el) return;

    const width = el.clientWidth;

    const phonePx = 768; 

    const isMobile = width <= phonePx;
    const wasMobile = this.getComponentState("isMobile");
    this.setComponentState("isMobile", isMobile);
    
    if (isMobile && !wasMobile) {
      this.setComponentState("activeLeftQuestionIndex", 0);
      this.setComponentState("activeRightQuestionIndex", -1);
    } else if (!isMobile && wasMobile) {
      this.setComponentState("activeLeftQuestionIndex", 0);
      this.setComponentState("activeRightQuestionIndex", 3);
    }

    this.updateHeights();
  }

  private updateHeights() {
    const isMobile = this.getComponentState("isMobile");
    const activeLeft = this.getComponentState("activeLeftQuestionIndex");
    const activeRight = this.getComponentState("activeRightQuestionIndex");
    const questions = this.castToObject<Question[]>("questions");
    const midPoint = Math.ceil(questions.length / 2);

    this.answerRefs.forEach((el, idx) => {
      if (!el) return;

      let isActive: boolean;
      if (isMobile) {
        isActive = idx === activeLeft;
      } else {
        const isRightColumn = idx >= midPoint;
        isActive = isRightColumn ? idx === activeRight : idx === activeLeft;
      }

      el.style.maxHeight = isActive ? `${el.scrollHeight}px` : "0px";
    });
  }

  private handleQuestion = (index: number) => {
    const isMobile = this.getComponentState("isMobile");
    const questions = this.castToObject<Question[]>("questions");
    const getNextIndex = (key: string) => {
      const current = this.getComponentState(key);
      return current === index ? -1 : index;
    };
    const leftKey = "activeLeftQuestionIndex";
    const rightKey = "activeRightQuestionIndex";
    if (isMobile) {
      this.setComponentState(leftKey, getNextIndex(leftKey));
      this.setComponentState(rightKey, -1); 
    } else {
      const midPoint = Math.ceil(questions.length / 2);
      const isRightCol = index >= midPoint;
      const key = isRightCol ? rightKey : leftKey;
      this.setComponentState(key, getNextIndex(key));
    }
    this.updateHeights();
  };

  render() {
    const activeLeft = this.getComponentState("activeLeftQuestionIndex");
    const activeRight = this.getComponentState("activeRightQuestionIndex");
    const questions = this.castToObject<Question[]>("questions");
    const isMobile = this.getComponentState("isMobile");
    const midPoint = isMobile
      ? questions.length
      : Math.ceil(questions.length / 2);
    const leftQuestions = questions.slice(0, midPoint);
    const rightQuestions = isMobile ? [] : questions.slice(midPoint);

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <div ref={this.containerRef}>
          <Base.MaxContent className={this.decorateCSS("max-content")}>
            <div className={this.decorateCSS("page")}>
              {(this.castToString(this.getPropValue("title")) ||
                this.castToString(this.getPropValue("description"))) && (
                <Base.VerticalContent className={this.decorateCSS("up-page")}>
                  {this.castToString(this.getPropValue("subtitle")) && (
                    <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                      {this.getPropValue("subtitle")}
                    </Base.SectionSubTitle>
                  )}
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
                            className={`${this.decorateCSS(
                              "child-container"
                            )} ${
                              activeLeft === idx
                                ? this.decorateCSS("active")
                                : ""
                            }`}
                          >
                            {questn.qq && (
                              <div
                                className={this.decorateCSS(
                                  "card-title-wrapper"
                                )}
                              >
                                <Base.H3
                                  className={`${this.decorateCSS(
                                    "card-title"
                                  )} ${
                                    activeLeft === idx
                                      ? this.decorateCSS("active")
                                      : ""
                                  }`}
                                >
                                  {questn.qq}
                                </Base.H3>
                              </div>
                            )}
                            {this.getPropValue("icon") && (
                              <div
                                className={`${this.decorateCSS(
                                  "icon-wrapper"
                                )} ${
                                  activeLeft === idx
                                    ? this.decorateCSS("active")
                                    : ""
                                }`}
                              >
                                <Base.Media
                                  value={this.getPropValue("icon")}
                                  className={this.decorateCSS("icon")}
                                />
                              </div>
                            )}
                          </div>
                        )}
                        {questn.answer && (
                          <div
                            ref={(el) => (this.answerRefs[idx] = el)}
                            className={`${this.decorateCSS("inner-card")} ${
                              activeLeft === idx
                                ? this.decorateCSS("active")
                                : ""
                            }`}
                          >
                              <Base.P className={this.decorateCSS("inner-text")}>
                              {questn.answer}
                            </Base.P>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                {!isMobile && rightQuestions.length > 0 && (
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
                              className={`${this.decorateCSS(
                                "child-container"
                              )} ${
                                activeRight === idx
                                  ? this.decorateCSS("active")
                                  : ""
                              }`}
                            >
                              {questn.qq && (
                                <div
                                  className={this.decorateCSS(
                                    "card-title-wrapper"
                                  )}
                                >
                                  <Base.H3
                                    className={`${this.decorateCSS(
                                      "card-title"
                                    )} ${
                                      activeRight === idx
                                        ? this.decorateCSS("active")
                                        : ""
                                    }`}
                                  >
                                    {questn.qq}
                                  </Base.H3>
                                </div>
                              )}
                              {this.getPropValue("icon") && (
                                <div
                                  className={`${this.decorateCSS(
                                    "icon-wrapper"
                                  )} ${
                                    activeRight === idx
                                      ? this.decorateCSS("active")
                                      : ""
                                  }`}
                                >
                                  <Base.Media
                                    value={this.getPropValue("icon")}
                                    className={this.decorateCSS("icon")}
                                  />
                                </div>
                              )}
                            </div>
                          )}
                          {questn.answer && (
                            <div
                              ref={(el) => (this.answerRefs[idx] = el)}
                              className={`${this.decorateCSS("inner-card")} ${
                                activeRight === idx
                                  ? this.decorateCSS("active")
                                  : ""
                              }`}
                            >
                              <Base.P className={this.decorateCSS("inner-text")}>
                                {questn.answer}
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
        </div>
      </Base.Container>
    );
  }
}

export default Faq9;
