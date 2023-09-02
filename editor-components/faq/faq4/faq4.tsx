import * as React from "react";
import styles from "./faq4.module.scss";
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
      value: "FAQ",
    });

    this.addProp({
      type: "string",
      key: "text",
      displayer: "Page Title Description",
      value: "FAQ stands for Frequently Asked Questions.It is a section of a website or document where common questions and their answers are provided to help users better understand a product, service, or topic. The purpose of an FAQ section is to address common concerns and provide helpful information to users, so they can make informed decisions.",
    });

    this.addProp({
      type: "string",
      key: "badge",
      displayer: "Badge",
      value: "FAQ",
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
              key: "title",
              displayer: "Title",
              value:
                "What are the shipping options available?",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "We offer standard and express shipping options. Standard shipping usually takes 5-7 business days, while express shipping takes 1-3 business days.",
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
              key: "title",
              displayer: "Title",
              value:
                "How can I track my order?",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Once your order has been shipped, you will receive a tracking number via email. You can use this tracking number to track your order on our website or on the carrier's ",
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
              key: "title",
              displayer: "Title",
              value:
                " What is your return policy?",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: " We offer a 30-day return policy for most products. If you are not satisfied with your purchase, you can return it within 30 days for a full refund or exchange.",
            },
          ],
        },{
          type: "object",
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value:
                " How can I contact customer support?",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "You can contact our customer support team by email or phone. Our email address and phone number can be found on our website's contact page.",
            },
          ],
        }
      ],
    });
  }

  getName(): string {
    return "FAQ-2";
  }

  activeIndex: number = -1;

  render() {
    const handleButton = (index: number) => {
      this.activeIndex = this.activeIndex === index ? -1 : index;
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
              <p>{this.getPropValue("text")}</p>
            </div>
            <div className={this.decorateCSS("down-page")}>
              {this.castToObject<Card[]>("card").map(
                (card: Card, indexCard: any) => {
                  return (
                    <div className={this.decorateCSS("card")} key={indexCard}>
                      <div className={this.decorateCSS("child-container")}>
                        <div className={this.decorateCSS("card-title")}>
                          <h3>{card.title}</h3>
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
        </div>
      </div>
    );
  }
}

export default FaqButton;
