import * as React from "react";
import styles from "./faq3.module.scss";
import { BaseFAQ } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type Card = {
  cardTitle: string;
  description: string;
};

type Button = {
  link: string;
  text: string;
  isPrimary: boolean;
};

class FaqContainerTwo extends BaseFAQ {
  constructor(props?: any) {
    super(props, styles);


    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Page Title",
      value: "FAQ",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title Description",
      value: "FAQ stands for Frequently Asked Questions.It is a section of a website or document where common questions and their answers are provided to help users better understand a product, service, or topic. The purpose of an FAQ section is to address common concerns and provide helpful information to users, so they can make informed decisions.",
    });

    this.addProp({
      type: "string",
      key: "badge",
      displayer: "Badge",
      value: "FAQ",
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Row",
      value: 3,
    });

    this.addProp({
      type: "array",
      key: "card",
      displayer: "Card",
      value: [
        {
          type: "object",
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "cardTitle",
              displayer: "Question",
              value:
                "How can I track my order?",
            },
            {
              type: "string",
              key: "description",
              displayer: "Answer",
              value:
                "We offer standard and express shipping options. Standard shipping usually takes 5-7 business days, while express shipping takes 1-3 business days.",
            },
          ],
        },
        {
          type: "object",
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "cardTitle",
              displayer: "Question",
              value:
                "What are the different shipping methods available for my order?",
            },
            {
              type: "string",
              key: "description",
              displayer: "Answer",
              value:
                "Once your order has been shipped, you will receive a tracking number via email. You can use this tracking number.",
            },
          ],
        },
        {
          type: "object",
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "cardTitle",
              displayer: "Question",
              value:
                "What is your return policy?",
            },
            {
              type: "string",
              key: "description",
              displayer: "Answer",
              value:
                "We offer a 30-day return policy for most products. If you are not satisfied with your purchase, you can return it within 30 days for a full refund or exchange.",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "FAQ MIDDLE 2";
  }

  render() {
    const littleScreen = {
      width: "100%",
      display: "flex",
      flex: "wrap",
      justifyContent: "center",
    };

    const wideScreen = {
      width: 90 / this.getPropValue("itemCount") + "%",
      display: "flex",
      justifyContent: "center",
    };

    let style = function () {
      if (window.innerWidth < 800) {
        return littleScreen;
      } else {
        return wideScreen;
      }
    };

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            <div className={this.decorateCSS("up-page")}>
              <div className={this.decorateCSS("badge")}>
                {this.getPropValue("badge")}
              </div>
              <h1>{this.getPropValue("subtitle")}</h1>
              <p>{this.getPropValue("title")}</p>
            </div>
            <div className={this.decorateCSS("card-page")}>
              {this.castToObject<Card[]>("card").map((item: Card, indexCard: number) => {
                return (
                  <div key={indexCard} style={style()}>
                    <div className={this.decorateCSS("card")}>
                      <div className={this.decorateCSS("icon")}>
                        <div>?</div>
                      </div>
                      <div className={this.decorateCSS("title")}>
                        <h2>{item.cardTitle}</h2>
                      </div>
                      <div className={this.decorateCSS("description")}>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* <div className={this.decorateCSS("down-container")}>
              <div className={this.decorateCSS("child-container")}>
                <h1>{this.getPropValue("title2")}</h1>
                <p>{this.getPropValue("description")}</p>
                <div className={this.decorateCSS("button-group")}>
                  {this.castToObject<Button[]>("buttons").map(
                    (button: Button, indexButtons: number) => {
                      return (
                        <ComposerLink key={indexButtons} path={button.link}>
                          <button
                            className={
                              this.decorateCSS("button") +
                              " " +
                              (button.isPrimary
                                ? this.decorateCSS("primary")
                                : this.decorateCSS("secondary"))
                            }
                          >
                            {button.text}
                          </button>
                        </ComposerLink>
                      );
                    }
                  )}
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default FaqContainerTwo;
