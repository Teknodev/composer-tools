import * as React from "react";
import styles from "./faq1.module.scss";
import { BaseFAQ } from "../../EditorComponent";

type FAQ = {
  subtitle: string;
  text: string;
  image: string;
};

class Faq extends BaseFAQ {
  constructor(props?: any) {
    super(props, styles);

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

  cardClicked(index:number) {
    const currentSelectCardIndex=this.getComponentState("selectCardIndex");

     if(currentSelectCardIndex === index) {
      this.setComponentState("selectCardIndex",null);
     }
     else {
      this.setComponentState("selectCardIndex",index);
     }
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            {this.castToObject<FAQ[]>("card").map((card: FAQ, indexCard: number) => (
              <div
                key={indexCard}
                className={`${this.decorateCSS("card")}`}
                onClick={()=>{
                  this.cardClicked(indexCard);
                }}
              >
                <div className={this.decorateCSS("in-box")}>
                  <h2 className={this.decorateCSS("card-subtitle")}>{card.subtitle}</h2>
                  <img
                    alt=""
                    src={"https://www.svgrepo.com/show/80156/down-arrow.svg"}
                    className={`${this.decorateCSS("img-1")} ${this.getComponentState("selectCardIndex") === indexCard ? this.decorateCSS("rotate") : ""}`}
                  />
                </div>
                <p className={`${this.decorateCSS("card-text")} ${this.getComponentState("selectCardIndex") === indexCard ? this.decorateCSS("cardTextActive") : ""}`}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;
