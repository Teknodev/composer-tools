import * as React from "react";
import styles from "./faq3.module.scss";
import { BaseFAQ } from "../../EditorComponent";

import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Faq = {
  title: React.JSX.Element;
  description: React.JSX.Element;
  index?: number;
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
      key: "mainTitle",
      displayer: "Title",
      value: "Got Questions? We’ve Got Answers!",
    });

    this.addProp({
      type: "string",
      key: "mainSubtitle",
      displayer: "Description",
      value:
        "Below is a list of frequently asked questions to help you understand how this works.",
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
              key: "title",
              displayer: "Title",
              value: "When can we get started?",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Tincidunt elit magnis nulla facilisis. Dolor sagittis maecenas. Sapien nunc amet ultrices, dolores sit ipsum velit purus aliquet, massa fringilla leo orci.",
            },
            {
              type: "number",
              key: "index",
              displayer: "Index",
              value: 1,
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
              key: "title",
              displayer: "Question",
              value: "How do I go about conducting market research?",
            },
            {
              type: "string",
              key: "description",
              displayer: "Answer",
              value:
                "Tincidunt elit magnis nulla facilisis. Dolor sagittis maecenas. Sapien nunc amet ultrices, dolores sit ipsum velit purus aliquet, massa fringilla leo orci.",
            },
            {
              type: "number",
              key: "index",
              displayer: "Index",
              value: 2,
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
              key: "title",
              displayer: "Title",
              value: "What do I need in order to start selling?",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Tincidunt elit magnis nulla facilisis. Dolor sagittis maecenas. Sapien nunc amet ultrices, dolores sit ipsum velit purus aliquet, massa fringilla leo orci.",
            },
            {
              type: "number",
              key: "index",
              displayer: "Index",
              value: 3,
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
              key: "title",
              displayer: "Title",
              value: "How much does it cost?",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Tincidunt elit magnis nulla facilisis. Dolor sagittis maecenas. Sapien nunc amet ultrices, dolores sit ipsum velit purus aliquet, massa fringilla leo orci.",
            },
            {
              type: "number",
              key: "index",
              displayer: "Index",
              value: 4,
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
              key: "title",
              displayer: "Title",
              value: "What other help is available?",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Tincidunt elit magnis nulla facilisis. Dolor sagittis maecenas. Sapien nunc amet ultrices, dolores sit ipsum velit purus aliquet, massa fringilla leo orci.",
            },
            {
              type: "number",
              key: "index",
              displayer: "Index",
              value: 5,
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "icon",
      displayer: "Active Icon",
      key: "active_icon",
      value: "FaPlus",
    });

    this.addProp({
      type: "icon",
      displayer: "Inactive Icon",
      key: "inactive_icon",
      value: "FaMinus",
    });

    this.addProp({
      type: "array",
      key: "infoArray",
      displayer: "INFORMATION",
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
    const mainTitleExist = this.castToString(this.getPropValue("mainTitle"));
    const mainSubtitleExist = this.castToString(this.getPropValue("mainSubtitle"));
    const infoArray = this.castToObject<InfoArrayItem[]>("infoArray");
    const faqItems = this.castToObject<Faq[]>("faqItems");
    const showLine = this.getPropValue("showLine");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {(mainTitleExist || mainSubtitleExist || showLine) && (
              <Base.VerticalContent className={this.decorateCSS("header")}>
                {mainTitleExist && (
                  <Base.SectionTitle className={this.decorateCSS("title")}>
                    {this.getPropValue("mainTitle")}
                  </Base.SectionTitle>
                )}
                {mainSubtitleExist && (
                  <Base.SectionDescription className={this.decorateCSS("description")}>
                    {this.getPropValue("mainSubtitle")}
                  </Base.SectionDescription>
                )}
              </Base.VerticalContent>
            )}
            {((faqItems?.length > 0) || (infoArray?.length > 0)) && (
              <div className={this.decorateCSS("contentContainer")}>
                {faqItems?.length > 0 && (
                  <div className={this.decorateCSS("content-left")}>
                    {faqItems.map((item: Faq, index: number) => {
                      const is_active =
                        this.getComponentState("active_index") == index;
                      const titleExist = this.castToString(item.title);
                      const descExist = this.castToString(item.description);

                      if (titleExist || descExist)
                        return (
                          <div
                            key={index}
                            className={this.decorateCSS("card")}
                            onClick={() => this.onItemClick(index)}
                          >
                            {(titleExist || descExist || item.index) && (
                              <div className={this.decorateCSS("top-card")}>
                                <div className={this.decorateCSS("card-left")}>
                                  {item.index && (
                                    <div className={this.decorateCSS("question-index")}>
                                      {item.index}.
                                    </div>
                                  )}
                                  {titleExist && (
                                    <div className={this.decorateCSS("card-subtitle")}>
                                      {item.title}
                                    </div>
                                  )}
                                </div>
                                {(this.getPropValue("inactive_icon") || this.getPropValue("active_icon")) && (
                                  <div className={this.decorateCSS("card-right")}>
                                    <Base.Icon
                                      propsIcon={{
                                        className: this.decorateCSS("icon"),
                                      }}
                                      name={
                                        is_active
                                          ? this.getPropValue("inactive_icon")
                                          : this.getPropValue("active_icon")
                                      }
                                    />
                                  </div>
                                )}
                              </div>
                            )}
                            {descExist && (
                              <div className={`${this.decorateCSS("text-box")} ${is_active && this.decorateCSS("active")}`} >
                                <div className={`${this.decorateCSS("card-text")} ${is_active && this.decorateCSS("active")}`}>
                                  {item.description}
                                </div>
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
                          <div className={this.decorateCSS("title-info")}>
                            {item.title}
                          </div>
                        )}
                        {this.castToString(item.description) && (
                          <Base.P className={this.decorateCSS("description-info")}>
                            {item.description}
                          </Base.P>
                        )}
                        {this.castToString(item.button.text) && (
                          <Base.Button buttonType={item.button.type} className={this.decorateCSS("button-info")}>
                            <ComposerLink path={item.button.url}>
                              {item.button.text}
                            </ComposerLink>
                          </Base.Button>
                        )}
                      </Base.VerticalContent>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Faq3;
