import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature18.module.scss";
import { Base } from "../../../composer-base-components/base/base";

class Feature18 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "mainTitle",
      displayer: "Main Title",
      value: "Meeting your needs",
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Reliable payouts engine, total dependability",
    });

    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Cards",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card 1 - Wide Card",
          value: [
            {
              type: "string",
              key: "title", 
              displayer: "Title",
              value: "One integration, all your transaction needs"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description", 
              value: "Every payment option covered. Designed to support diverse gaming setups, including online casinos, sportsbooks, bookmakers, lotteries, bingo, draws and raffles, and more."
            },
          ]
        },
        {
          type: "object", 
          key: "card",
          displayer: "Card 2 - Small Left",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Seamless setup, faster payments"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Streamlined onboarding that is quick, transparent, and efficient. Get full visibility at every step to help you speed up your market entry."
            },
          ]
        },
        {
          type: "object",
          key: "card",
          displayer: "Card 3 - Image 1", 
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://www.apcopay.com/_next/image?url=%2Fapi%2Fimage%3Furl%3D%252Fborn%252Fapi%252Fv1%252Fimage%252F144&w=1920&q=75"
            },
          ]
        },
        {
          type: "object",
          key: "card",
          displayer: "Card 4 - Image 2",
          value: [
            {
              type: "image", 
              key: "image",
              displayer: "Image",
              value: "https://www.apcopay.com/_next/image?url=%2Fapi%2Fimage%3Furl%3D%252Fborn%252Fapi%252Fv1%252Fimage%252F145&w=1920&q=75"
            },
          ]
        },
        {
          type: "object",
          key: "card",
          displayer: "Card 5 - Right Tall",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "New payment methods, made easy"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Providing eWallets, SMS top-ups, and various alternative payment methods to step-up your gaming operations."
            },
          ]
        },
        {
          type: "object",
          key: "card", 
          displayer: "Card 6 - Right Bottom",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title", 
              value: "Reliable payouts engine, total dependability"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Timely and consistent player payments guaranteed, so no payout is ever missed. Processed through a single API request."
            },
          ]
        },
      ],
    });
  }

  static getName(): string {
    return "Feature18";
  }

  render() {
    const mainTitle = this.getPropValue("mainTitle");
    const subtitle = this.getPropValue("subtitle");
    const cards = this.castToObject<any[]>("cards");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {mainTitle && (
            <Base.H1 className={this.decorateCSS("main-title")}>
              {mainTitle}
            </Base.H1>
          )}
          
          {subtitle && (
            <Base.H2 className={this.decorateCSS("subtitle")}>
              {subtitle}
            </Base.H2>
          )}

          {cards?.length > 0 && (
            <div className={this.decorateCSS("cards-container")}>
              {cards.map((card: any, index: number) => {
                // Kart özelliklerini al - Feature8'deki gibi
                const cardProps: any = {};
                if (card.value && Array.isArray(card.value)) {
                  card.value.forEach((prop: any) => {
                    if (prop && prop.key && prop.value !== undefined) {
                      cardProps[prop.key] = prop.value;
                    }
                  });
                }

                const hasImage = cardProps.image;
                const hasTitle = cardProps.title;
                const hasDescription = cardProps.description;

                return (
                  <div
                    key={index}
                    className={`${this.decorateCSS("card")} ${hasImage ? this.decorateCSS("image-card") : ""}`}
                  >
                    {hasImage && (
                      <img
                        src={cardProps.image}
                        alt={`Card ${index + 1}`}
                        className={this.decorateCSS("image")}
                      />
                    )}
                    {hasTitle && (
                      <Base.H3 className={this.decorateCSS("title")}>
                        {cardProps.title}
                      </Base.H3>
                    )}
                    {hasDescription && (
                      <Base.P className={this.decorateCSS("description")}>
                        {cardProps.description}
                      </Base.P>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature18;