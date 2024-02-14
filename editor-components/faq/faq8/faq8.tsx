import * as React from "react";
import styles from "./faq8.module.scss";
import { BaseFAQ } from "../../EditorComponent";

type Card = {
  title: string;
  description: string;
};

class FaqButton extends BaseFAQ {
  constructor(props?: any) {
    super(props, styles);

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
              value: "lorem ipsum",
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
                      value: "Question 1?",
                    },
                    {
                      type: "string",
                      key: "answer",
                      displayer: "Answer",
                      value: "Answer 1",
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
    return "FAQ-8";
  }

  activeIndex: number = -1;

  render() {
    const handleButton = (index: number) => {
      this.activeIndex = this.activeIndex === index ? -1 : index;
    };

    return (
      <div className={this.decorateCSS("container")}>
        {/* <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            <div className={this.decorateCSS("up-page")}>
              <div className={this.decorateCSS("badge")}>
                {this.getPropValue("badge")}
              </div>
              <h1 className={this.decorateCSS("subtitle")}>
                {this.getPropValue("subtitle")}
              </h1>
              <p className={this.decorateCSS("text-p")}>
                {this.getPropValue("text")}
              </p>
            </div>
            <div className={this.decorateCSS("down-page")}>
              {this.castToObject<Card[]>("card").map(
                (card: Card, indexCard: any) => {
                  return (
                    <div className={this.decorateCSS("card")} key={indexCard}>
                      <div className={this.decorateCSS("child-container")}>
                        <div className={this.decorateCSS("card-title")}>
                          <h3 className={this.decorateCSS("card-title-h3")}>
                            {card.title}
                          </h3>
                        </div>
                        <div className={this.decorateCSS("icon")}>
                          <img
                            alt=""
                            src={
                              this.activeIndex === indexCard
                                ? "https://cdn-icons-png.flaticon.com/512/130/130906.png"
                                : "https://cdn-icons-png.flaticon.com/512/656/656979.png"
                            }
                            onClick={() => handleButton(indexCard)}
                          />
                        </div>
                      </div>
                      <div></div>
                    </div>
                  );
                }
              )}
            </div>
            <div>
              {this.castToObject<Card[]>("card").map(
                (card: Card, indexCard: any) => {
                  return (
                    <div className={this.decorateCSS("card")} key={indexCard}>
                      <p
                        className={`${
                          this.activeIndex === indexCard
                            ? this.decorateCSS("text")
                            : this.decorateCSS("hide")
                        }`}
                      >
                        {card.description}
                      </p>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default FaqButton;
