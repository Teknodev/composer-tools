import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats1.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type CardData = {
  cardValue: JSX.Element;
  cardLabel: JSX.Element;
};

class Stats1Page extends BaseStats {
  interval: any;

  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "WE CREATED SPECIAL SITE WHERE YOU CAN GET",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Best reviews, media, video, Comparison and News",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Health and wellness are important aspects that many of us spend alot of time thinking about. Many people think of health and wellnessand think only of diet and exercise",
    });
    this.addProp({
      type: "string",
      key: "buttonText",
      displayer: "Button Text",
      value: "Register Now!",
    });
    this.addProp({
      type: "array",
      key: "card-list",
      additionalParams: {
        maxElementCount: 5,
      },
      displayer: "Card Content",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "cardValue",
              displayer: "Counter Value",
              value: "1002",
            },
            {
              type: "string",
              key: "cardLabel",
              displayer: "Counter Label",
              value: "Active Users",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "cardValue",
              displayer: "Counter Value",
              value: "2999",
            },
            {
              type: "string",
              key: "cardLabel",
              displayer: "Counter Label",
              value: "Articles",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "cardValue",
              displayer: "Counter Value",
              value: "97",
            },
            {
              type: "string",
              key: "cardLabel",
              displayer: "Counter Label",
              value: "Authors",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "number",
      key: "animationDuration",
      displayer: "Stat Animation Duration (ms)",
      value: 30,
    });
    this.addProp({
      type: "number",
      key: "incrementValue",
      displayer: "Stat Animation Increment Value",
      value: 200,
    });

    this.init();
    this.animate();
  }

  init() {
    this.castToObject<CardData[]>("card-list").map((statsData, index) => {
      this.setComponentState(`number-${index}`, "");
      this.setComponentState(`numberForControl-${index}`, "");
    });
  }

  isEqual(arr1: any[], arr2: any[]) {
    return arr1.every((value, index) => {
      const otherValue = arr2[index];
      return value === otherValue || (value === "" && otherValue === 0) || (value === 0 && otherValue === "");
    });
  }

  getStats() {
    const statItems = this.castToObject<CardData[]>("card-list");
    const stats = statItems.map((statsData: any) => (statsData.cardValue === "" ? "" : this.castToString(statsData.cardValue)));
    return stats;
  }

  getNumbers() {
    const statItems = this.castToObject<CardData[]>("card-list");
    const numbers = statItems.map((_, index) => {
      const number = this.getComponentState(`numberForControl-${index}`);
      return number !== undefined ? number : "";
    });
    return numbers;
  }

  formatNumberWithDots(value: any) {
    const number = Number(value);
    if (isNaN(number)) {
      return "";
    }
    return number.toLocaleString("tr-TR");
  }

  animate() {
    const animationDuration = this.getPropValue("animationDuration");
    const incrementValue = this.getPropValue("incrementValue");

    this.interval = setInterval(() => {
      if (this.isEqual(this.getStats(), this.getNumbers())) {
        clearInterval(this.interval);
        this.interval = null;
      }

      this.castToObject<CardData[]>("card-list").map((statData: CardData, index: number) => {
        let currentNumberState = this.getComponentState(`number-${index}`);
        const currentString = typeof currentNumberState === "string" ? currentNumberState : "";
        const currentNonNumericPrefix = currentString.match(/^\D+/)?.[0] || "";
        const currentNonNumericSuffix = currentString.match(/\D+$/)?.[0] || "";
        const currentNumber = parseInt(currentString.replace(/\D+/g, ""), 10) || 0;

        const counterString = this.castToString(statData.cardValue);
        const newNonNumericPrefix = counterString.match(/^\D+/)?.[0] || "";
        const newNonNumericSuffix = counterString.match(/\D+$/)?.[0] || "";
        const numericPart = parseInt(counterString.replace(/[^\d]/g, ""), 10) || 0;

        if (currentNumber !== numericPart || currentNonNumericPrefix !== newNonNumericPrefix || currentNonNumericSuffix !== newNonNumericSuffix) {
          let nextValue = Math.min(numericPart, currentNumber + Math.ceil(numericPart / Math.round(incrementValue / 30)));

          let formattedNextValue = nextValue ? nextValue.toString() : "";

          const formattedNextValueWithDots = this.formatNumberWithDots(formattedNextValue) === "0" ? "" : this.formatNumberWithDots(formattedNextValue);

          var updatedValue = currentNumber > 0 ? newNonNumericPrefix + formattedNextValueWithDots + newNonNumericSuffix : newNonNumericPrefix + formattedNextValueWithDots;

          var updatedValueForControl = currentNumber > 0 ? newNonNumericPrefix + formattedNextValue + newNonNumericSuffix : newNonNumericPrefix + formattedNextValue;

          this.setComponentState(`number-${index}`, updatedValue);

          this.setComponentState(`numberForControl-${index}`, updatedValueForControl);
        }
      });
    }, animationDuration);
  }

  getName(): string {
    return "Stats 1";
  }

  render() {
    const title = this.getPropValue("title");
    const isTitleExist = this.castToString(title);
    const subtitle = this.getPropValue("subtitle");
    const isSubtitleExist = this.castToString(subtitle);
    const description = this.getPropValue("description");
    const isDescExist = this.castToString(description);
    const buttonText = this.getPropValue("buttonText");
    const isButtonTextExist = this.castToString(buttonText);
    const cardList = this.castToObject<CardData[]>("card-list");

    const badgeColors = ["var(--composer-primary-color)", "var(--composer-secondary-color)", "var(--composer-tertiary-color)"];

    if (!this.interval && !this.isEqual(this.getStats(), this.getNumbers())) {
      this.animate();
    }

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("stats1-page")}>
            {(isSubtitleExist || isTitleExist || isDescExist || isButtonTextExist) && (
              <Base.VerticalContent className={this.decorateCSS("left-container")}>
                {isSubtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>}
                {isTitleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
                {isDescExist && <Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>}
                {isButtonTextExist && (
                  <ComposerLink>
                    <div className={this.decorateCSS("button-text-wrapper")}>
                      <span className={this.decorateCSS("button-text")}>{buttonText}</span>
                    </div>
                  </ComposerLink>
                )}
              </Base.VerticalContent>
            )}

            {cardList.length > 0 && (
              <div className={this.decorateCSS("right-container")}>
                <div className={this.decorateCSS("content-div")}>
                  {[...Array(5)].map((_, index) => (
                    <div key={index} className={this.decorateCSS("content-item")} style={{ transform: `scale(${1 - index * 0.2})` }}></div>
                  ))}

                  {cardList.map((cardData: CardData, indexCard: number) => {
                    const angle = (indexCard / cardList.length) * 360;
                    const iscardLabelExist = this.castToString(cardData.cardLabel);

                    if (this.getComponentState(`number-${indexCard}`) !== "0" || iscardLabelExist)
                      return (
                        <div key={indexCard} className={this.decorateCSS("card")} style={{ "--angle": `${angle}deg` } as Record<string, any>}>
                          {this.getComponentState(`number-${indexCard}`) !== "0" && (
                            <Base.H5
                              className={this.decorateCSS("counter-value")}
                              style={{
                                color: `${indexCard < 3 ? badgeColors[indexCard % badgeColors.length] : badgeColors[(indexCard % badgeColors.length) + 1]}`,
                              }}
                            >
                              {this.getComponentState(`number-${indexCard}`)}
                            </Base.H5>
                          )}
                          {iscardLabelExist && <Base.P className={this.decorateCSS("counter-label")}>{cardData.cardLabel}</Base.P>}
                        </div>
                      );
                  })}
                </div>
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Stats1Page;
