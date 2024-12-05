import * as React from "react";
import styles from "./faq1.module.scss";
import { BaseFAQ } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type FAQ = {
  subtitle: string;
  text: string;
  image: string;
};

class Faq extends BaseFAQ {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "HAVE ANY QUESTIONS?"
    })
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Frequently Asked Questions"
    })
    this.addProp({
      type: "icon",
      key: "icon",
      displayer: "Icon",
      value: "IoIosArrowUp"
    })

    this.addProp({
      type: "array",
      key: "card",
      displayer: "Card",
      value: [
        {
          type: "object",
          key: "block",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Question",
              value: "Which payment options are available?",
            },
            {
              type: "string",
              key: "text",
              displayer: "Answer",
              value: "Cash",
            },
          ],
        },
        {
          type: "object",
          key: "block",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Question",
              value: "Which payment options are available?",
            },
            {
              type: "string",
              key: "text",
              displayer: "Answer",
              value: "Checks",
            },
          ],
        },
        {
          type: "object",
          key: "block",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Question",
              value: "Do you accept credit cards or other forms of payment?",
            },
            {
              type: "string",
              key: "text",
              displayer: "Answer",
              value: "Yes, I do",
            },
          ],
        },
      ],
    });

    this.state["componentProps"]["selectCardIndex"] = null;
  }

  getName(): string {
    return "FAQ-1";
  }

  cardClicked(index: number) {
    const currentSelectCardIndex = this.getComponentState("selectCardIndex");

    if (currentSelectCardIndex === index) {
      this.setComponentState("selectCardIndex", null);
    }
    else {
      this.setComponentState("selectCardIndex", index);
    }
  }

  render() {
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("title-container")}>
            <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
              {this.getPropValue("subtitle")}
            </Base.SectionSubTitle>
            <Base.SectionTitle className={this.decorateCSS("title")}>
              {this.getPropValue("title")}
            </Base.SectionTitle>
          </Base.VerticalContent>
          <div className={this.decorateCSS("page")}>
            {this.castToObject<FAQ[]>("card").map((card: FAQ, indexCard: number) => (
              <div
                className={`${this.decorateCSS("card")}`}
                onClick={() => {
                  this.cardClicked(indexCard);
                }}
              >
                <div className={this.decorateCSS("in-box")}>
                  <div className={this.decorateCSS("card-subtitle")}>{card.subtitle}</div>
                  <ComposerIcon name={this.getPropValue("icon")} propsIcon={{
                    className: `${this.decorateCSS("icon")} 
                  ${this.getComponentState("selectCardIndex") === indexCard ? this.decorateCSS("rotate") : ""}`
                  }}></ComposerIcon>
                </div>
                <div className={`${this.decorateCSS("card-inner")} ${this.getComponentState("selectCardIndex") === indexCard ? this.decorateCSS("cardActive") : ""}`}>
                  <div className={this.decorateCSS("card-text")}>
                    {card.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Faq;
