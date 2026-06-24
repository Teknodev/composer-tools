import * as React from "react";
import styles from "./faq3.module.scss";
import { BaseFAQ } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type Faq = {
  question: React.JSX.Element;
  answer: React.JSX.Element;
  index?: React.JSX.Element;
};

type InfoArrayItem = {
  title: React.JSX.Element;
  description: React.JSX.Element;
  button: INPUTS.CastedButton;
};

class Faq3 extends BaseFAQ {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Frequently Asked Questions",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Got Questions? We’ve Got Answers!",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Below is a list of frequently asked questions to help you understand how this works.",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
    });

    this.addProp({
      type: "array",
      key: "faqItems",
      displayer: "Card",
      value: [
        {
          type: "object",
          key: "faqItem",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "index",
              displayer: "Index",
              value: "1.",
            },
            {
              type: "string",
              key: "question",
              displayer: "Question",
              value: "When can we get started?",
            },
            {
              type: "string",
              key: "answer",
              displayer: "Answer",
              value:
                "Tincidunt elit magnis nulla facilisis. Dolor sagittis maecenas. Sapien nunc amet ultrices, dolores sit ipsum velit purus aliquet, massa fringilla leo orci.",
            },
          ],
        },
        {
          type: "object",
          key: "faqItem",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "index",
              displayer: "Index",
              value: "2.",
            },
            {
              type: "string",
              key: "question",
              displayer: "Question",
              value: "How do I go about conducting market research?",
            },
            {
              type: "string",
              key: "answer",
              displayer: "Answer",
              value:
                "Tincidunt elit magnis nulla facilisis. Dolor sagittis maecenas. Sapien nunc amet ultrices, dolores sit ipsum velit purus aliquet, massa fringilla leo orci.",
            },
          ],
        },
        {
          type: "object",
          key: "faqItem",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "index",
              displayer: "Index",
              value: "3.",
            },
            {
              type: "string",
              key: "question",
              displayer: "Question",
              value: "What do I need in order to start selling?",
            },
            {
              type: "string",
              key: "answer",
              displayer: "Answer",
              value:
                "Tincidunt elit magnis nulla facilisis. Dolor sagittis maecenas. Sapien nunc amet ultrices, dolores sit ipsum velit purus aliquet, massa fringilla leo orci.",
            },
          ],
        },
        {
          type: "object",
          key: "faqItem",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "index",
              displayer: "Index",
              value: "4.",
            },
            {
              type: "string",
              key: "question",
              displayer: "Question",
              value: "How much does it cost?",
            },
            {
              type: "string",
              key: "answer",
              displayer: "Answer",
              value:
                "Tincidunt elit magnis nulla facilisis. Dolor sagittis maecenas. Sapien nunc amet ultrices, dolores sit ipsum velit purus aliquet, massa fringilla leo orci.",
            },
          ],
        },
        {
          type: "object",
          key: "faqItem",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "index",
              displayer: "Index",
              value: "5.",
            },
            {
              type: "string",
              key: "question",
              displayer: "Question",
              value: "What other help is available?",
            },
            {
              type: "string",
              key: "answer",
              displayer: "Answer",
              value:
                "Tincidunt elit magnis nulla facilisis. Dolor sagittis maecenas. Sapien nunc amet ultrices, dolores sit ipsum velit purus aliquet, massa fringilla leo orci.",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "media",
      displayer: "Active Icon",
      key: "active_icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "FaPlus",
      },
    });

    this.addProp({
      type: "media",
      displayer: "Inactive Icon",
      key: "inactive_icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "FaMinus",
      },
    });

    this.addProp({
      type: "array",
      key: "infoArray",
      displayer: "Information",
      value: [
        {
          type: "object",
          key: "info",
          displayer: "Information",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Questions?",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Blandit justo vestibulum tincidunt, ipsum id non, volutpat neque pede eget donec.",
            },
            INPUTS.BUTTON("button", "Button", "Get Started", "", null, null, "Primary")
          ],
        },
        {
          type: "object",
          key: "info",
          displayer: "Information",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "About Us",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Etiam nisl cras, arcu dui, wisi aenean non sit quisque nulla, eget aut molestie. Rhoncus sociis, nulla luctus diam montes cubilia.",
            },
            INPUTS.BUTTON("button", "Button", "Get Started", "", null, null, "Primary")
          ],
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "line",
      displayer: "Line",
      value: true,
    });

    this.setComponentState("selectCardIndex", null);
  }

  static getName(): string {
    return "FAQ 3";
  }

  lineClicked(index: number) {
    if (this.getComponentState("selectCardIndex") === index) {
      this.setComponentState("selectCardIndex", null);
    } else {
      this.setComponentState("selectCardIndex", index);
    }
  }

  onItemClick(index: number) {
    const active_index = this.getComponentState("active_index");

    if (active_index == index) {
      this.setComponentState("active_index", -1);
    } else {
      this.setComponentState("active_index", index);
    }
  }

  render() {
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
    const hasContent = subtitle || title || description || buttons.length > 0;
    const infoArray = this.castToObject<InfoArrayItem[]>("infoArray");
    const faqItems = this.castToObject<Faq[]>("faqItems");
    const lineEnabled = this.getPropValue("line");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {hasContent && (
            <Base.VerticalContent className={this.decorateCSS("header")}>
              {subtitle && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {this.getPropValue("subtitle")}
                </Base.SectionSubTitle>
              )}
              {title && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {this.getPropValue("title")}
                </Base.SectionTitle>
              )}
              {description && (
                <Base.SectionDescription className={this.decorateCSS("description")}>
                  {this.getPropValue("description")}
                </Base.SectionDescription>
              )}
              {buttons.length > 0 && (
                <div className={this.decorateCSS("button-container")}>
                  {buttons.map((item: INPUTS.CastedButton, index: number) => {
                    return this.castToString(item.text) && (
                      <ComposerLink key={`button-${index}`} path={item.url}>
                        <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                          <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                        </Base.Button>
                      </ComposerLink>
                    );
                  })}
                </div>
              )}
            </Base.VerticalContent>
          )}
          {((faqItems?.length > 0) || (infoArray?.length > 0)) && (
            <div className={this.decorateCSS("bottom-container")}>
              {faqItems?.length > 0 && (
                <div className={this.decorateCSS("content-left")}>
                  {faqItems.map((item: Faq, index: number) => {
                    const is_active =
                      this.getComponentState("active_index") == index;
                    const titleExist = this.castToString(item.question);
                    const descExist = this.castToString(item.answer);
                    const indexExist = this.castToString(item.index);

                    if (titleExist || descExist || indexExist)
                      return (
                        <div
                          key={index}
                          className={`${this.decorateCSS("card")}${!lineEnabled ? ` ${this.decorateCSS("no-line")}` : ""}`}
                          onClick={() => this.onItemClick(index)}
                        >
                          {(titleExist || descExist || indexExist) && (
                            <div className={this.decorateCSS("top-card")}>
                              <div className={this.decorateCSS("card-left")}>
                                {indexExist && (
                                  <Base.H6 className={this.decorateCSS("question-index")}>
                                    {item.index}
                                  </Base.H6>
                                )}
                                {titleExist && (
                                  <Base.H6 className={this.decorateCSS("question-text")}>
                                    {item.question}
                                  </Base.H6>
                                )}
                              </div>
                              {(this.getPropValue("inactive_icon") || this.getPropValue("active_icon")) && (
                                <div className={this.decorateCSS("card-right")}>
                                  <Base.Media
                                    value={
                                      is_active
                                        ? this.getPropValue("inactive_icon")
                                        : this.getPropValue("active_icon")
                                    }
                                    className={this.decorateCSS("icon")}
                                  />
                                </div>
                              )}
                            </div>
                          )}
                          {descExist && (
                            <div className={`${this.decorateCSS("answer-box")} ${is_active && this.decorateCSS("active")}`} >
                              <Base.P className={`${this.decorateCSS("answer-text")} ${is_active && this.decorateCSS("active")}`}>
                                {item.answer}
                              </Base.P>
                            </div>
                          )}
                        </div>
                      );
                  })}
                </div>
              )}
              {infoArray?.length > 0 && (
                <div className={this.decorateCSS("content-right")}>
                  {infoArray.map((item: InfoArrayItem, index: number) => (
                    <Base.VerticalContent key={index} className={this.decorateCSS("info-items")}>
                      {this.castToString(item.title) && (
                        <Base.H6 className={this.decorateCSS("title-info")}>
                          {item.title}
                        </Base.H6>
                      )}
                      {this.castToString(item.description) && (
                        <Base.P className={this.decorateCSS("description-info")}>
                          {item.description}
                        </Base.P>
                      )}
                      {this.castToString(item.button.text) && (
                        <Base.Button buttonType={item.button.type} className={this.decorateCSS("button-info")}>
                          <ComposerLink path={item.button.url}>
                            <Base.P className={this.decorateCSS("button-text")}>{item.button.text}</Base.P>
                          </ComposerLink>
                        </Base.Button>
                      )}
                    </Base.VerticalContent>
                  ))}
                </div>
              )}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container >
    );
  }
}

export default Faq3;