import * as React from "react";
import styles from "./faq1.module.scss";
import { BaseFAQ } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";

type FAQ = {
  subtitle: React.JSX.Element;
  text: React.JSX.Element;
  image: string;
};

class Faq1 extends BaseFAQ {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Frequently Asked Questions"
    })
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Have Any Questions?"
    })
    this.addProp({
      type: "media",
      key: "icon",
      displayer: "Icon",
      additionalParams: {
        availableTypes: ["icon"],
      },
      value: {
        type: "icon",
        name: "IoIosArrowDown",
      },
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

    this.setComponentState("selectCardIndex", null);
  }

  static getName(): string {
    return "FAQ 1";
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
          {(this.castToString(this.getPropValue("subtitle")) || this.castToString(this.getPropValue("title"))) && (
            <Base.VerticalContent className={this.decorateCSS("title-container")}>
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
            </Base.VerticalContent>
          )}
          {(this.getPropValue("card").length > 0) && (
            <div className={this.decorateCSS("page")}>
              {this.castToObject<FAQ[]>("card").map((card: FAQ, indexCard: number) => (
                <div
                  className={this.decorateCSS("card")}
                  onClick={() => {
                    this.cardClicked(indexCard);
                  }}
                >
                  {(this.castToString(card.subtitle) || this.getPropValue("icon")) && (
                    <div className={this.decorateCSS("in-box")}>
                      {this.castToString(card.subtitle) && (
                        <Base.H4 className={this.decorateCSS("card-subtitle")}>{card.subtitle}</Base.H4>
                      )}
                      {this.getPropValue("icon") && (
                        <Base.Media 
                          value={this.getPropValue("icon")} 
                          className={`${this.decorateCSS("icon")} 
                           ${this.getComponentState("selectCardIndex") === indexCard ? this.decorateCSS("rotate") : ""}`}
                        />
                      )}
                    </div>
                  )}
                  {this.castToString(card.text) && (
                    <div className={`${this.decorateCSS("card-inner")} ${this.getComponentState("selectCardIndex") === indexCard ? this.decorateCSS("cardActive") : ""}`}>
                      <Base.P className={this.decorateCSS("card-text")}>
                        {card.text}
                      </Base.P>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Faq1;
