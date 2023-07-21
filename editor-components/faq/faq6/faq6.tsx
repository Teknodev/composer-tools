import * as React from "react";
import styles from "./faq6.module.scss";
import { BaseFAQ } from "../../EditorComponent";

type Card = {
  title: string;
  description: string;
};

class FaqPost extends BaseFAQ {
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
      key: "title1",
      displayer: "Title",
      value: "FAQ stands for Frequently Asked Questions. It is a section of a website or document where common questions and their answers are provided to help users better understand a product, service, or topic. The purpose of an FAQ section is to address common concerns and provide helpful information to users, so they can make informed decisions.",
    });

    this.addProp({
      type: "image",
      key: "icon",
      displayer: "Icon",
      value: "https://cdn-icons-png.flaticon.com/512/4700/4700822.png",
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
                " How can I track my order?",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Once your order has been shipped, you will receive a tracking number via email. You can use this tracking number to track your order on our website or on the carrier's website.",
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
                "What is your return policy?",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "We offer a 30-day return policy for most products. If you are not satisfied with your purchase, you can return it within 30 days for a full refund or exchange.",
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
                "How can I contact customer support?",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: " You can contact our customer support team by email or phone. Our email address and phone number can be found on our website's contact page.",
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
                "Do you offer any discounts or promotions?",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Yes, we offer discounts and promotions from time to time. You can sign up for our newsletter to receive updates on our latest promotions.",
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
                "What payment methods do you accept?",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "We accept credit/debit cards, PayPal, and other digital payment methods. You can select your preferred payment method during checkout.",
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
                "Shipping and Delivery",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "This section of the website provides information on shipping options, delivery times, and tracking your order.",
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
                "Returns and Refunds",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "This section of the website explains the return policy, including the time frame for returns, the process for returning items, and how refunds are processed.",
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
                " Payment Methods",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "This section of the website provides information on the payment methods accepted, including credit/debit cards, PayPal, and other digital payment options. It may also include information on security measures in place to protect payment information.",
            },
          ],
        },
      ],
    });
  }
  getName(): string {
    return "FAQ POST";
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
              <p>{this.getPropValue("title1")}</p>
            </div>
            <div className={this.decorateCSS("down-page")}>
              {this.castToObject<Card[]>("card").map((card: Card, indexCard: any) => {
                return (
                  <div
                    key={indexCard}
                    style={style()}
                    className={this.decorateCSS("card")}
                  >
                    <div className={this.decorateCSS("icon")}>
                      <div>?</div>
                    </div>
                    <h1>{card.title}</h1>
                    <p>{card.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FaqPost;
