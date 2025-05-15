import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats8.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type CardData = {
  counter: React.JSX.Element;
  description: React.JSX.Element;
};

class Stats8Page extends BaseStats {
  interval: any;

  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "headerTitle",
      displayer: "Title",
      value: "Hello We are DSN Grid",
    });

    this.addProp({
      type: "string",
      key: "description1",
      displayer: "First Description",
      value: "We’re a creative agency with an expertise in make custom websites",
    });

    this.addProp({
      type: "boolean",
      key: "showLine",
      displayer: "Show Line",
      value: true,
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Second Description",
      value:
        "Founded in 2000, Dsn Grid has become one of the best Digital Agency in Themeforest. Blue money going forward, but deploy to production. First-order optimal strategies build on a culture of contribution and inclusion so those options. Established in 2001, Alpha Creative quickly rose to be a leading design studio on Dribbble. Green energy investments flourish, while scaling to mass adoption. High-performance solutions are built on innovation and teamwork, embracing creativity and forward-thinking.",
    });

    this.addProp({
      type: "string",
      key: "author",
      displayer: "Author",
      value: "Salvador Dali",
    });

    this.addProp({
      type: "string",
      key: "authorRole",
      displayer: "Author Role",
      value: "Digital Artist",
    });

    this.addProp({
      type: "boolean",
      key: "showBackground",
      displayer: "Show Background",
      value: true,
    });

    this.addProp({
      type: "array",
      key: "stats",
      displayer: "Stats",
      value: [
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            {
              type: "string",
              key: "counter",
              displayer: "Value",
              value: "37",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Business Partner",
            },
          ],
        },
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            {
              type: "string",
              key: "counter",
              displayer: "Value",
              value: "19",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Satisfied Customers",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "string",
      key: "overlayNumber",
      displayer: "Overlay Number",
      value: "25",
    });

    this.addProp({
      type: "string",
      key: "overlayDescription",
      displayer: "Overlay Description",
      value: "YEARS OF DIGITAL EXPERIENCE",
    });

    this.addProp({
      type: "image",
      key: "imageSrc",
      displayer: "Image Source",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a36aa42f8a5b002ce6a087?alt=media",
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
    this.castToObject<CardData[]>("stats").map((statsData, index) => {
      this.setComponentState(`number-${index}`, "");
      this.setComponentState(`numberForControl-${index}`, "");
    });
    this.setComponentState("overlayNumberDisplay", "");
    this.setComponentState("overlayNumberDisplayForControl", "");
  }

  isEqual(arr1: any[], arr2: any[]) {
    return arr1.every((value, index) => {
      const otherValue = arr2[index];
      return value === otherValue || (value === "" && otherValue === 0) || (value === 0 && otherValue === "");
    });
  }

  isOverlayNumbersEqual(value1: any, value2: any) {
    return String(value1) === String(value2);
  }

  getStats() {
    const statItems = this.castToObject<CardData[]>("stats");
    const stats = statItems.map((card: any) => (card.counter === "" ? "" : this.castToString(card.counter)));
    return stats;
  }

  getNumbers() {
    const statItems = this.castToObject<CardData[]>("stats");
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
      if (this.isAnimationComplete()) {
        clearInterval(this.interval);
        this.interval = null;
      }
      this.updateStats(incrementValue);
      this.updateOverlay(incrementValue);
    }, animationDuration);
  }

  isAnimationComplete() {
    const isStatsEqual = this.isEqual(this.getStats(), this.getNumbers());
    const isOverlayEqual = this.isOverlayNumbersEqual(this.castToString(this.getPropValue("overlayNumber")), this.getComponentState("overlayNumberDisplayForControl"));
    return isStatsEqual || isOverlayEqual;
  }

  updateStats(incrementValue: number) {
    this.castToObject<CardData[]>("stats").forEach((statData: CardData, index: number) => {
      const currentState = this.getComponentState(`number-${index}`);
      const { numberPart: currentNumber, prefix: currentNonNumericPrefix, suffix: currentNonNumericSuffix } = this.extractNumberParts(currentState);

      const counterString = this.castToString(statData.counter);
      const { numberPart: numericPart, prefix: newNonNumericPrefix, suffix: newNonNumericSuffix } = this.extractNumberParts(counterString);

      if (this.shouldUpdateValue(currentNumber, numericPart, currentNonNumericPrefix, currentNonNumericSuffix, newNonNumericPrefix, newNonNumericSuffix)) {
        const nextValue = this.calculateNextValue(currentNumber, numericPart, incrementValue);
        const updatedValue = this.formatValue(nextValue, newNonNumericPrefix, newNonNumericSuffix);
        this.setComponentState(`number-${index}`, updatedValue);
        this.setComponentState(`numberForControl-${index}`, updatedValue);
      }
    });
  }

  updateOverlay(incrementValue: number) {
    const overlayNumberState = this.getComponentState("overlayNumberDisplay");
    const { numberPart: currentOverlayNumber, prefix: currentOverlayPrefix, suffix: currentOverlaySuffix } = this.extractNumberParts(overlayNumberState);

    const overlayNumberProp = this.castToString(this.getPropValue("overlayNumber"));
    const { numberPart: overlayNumericPart, prefix: newOverlayPrefix, suffix: newOverlaySuffix } = this.extractNumberParts(overlayNumberProp);

    if (this.shouldUpdateValue(currentOverlayNumber, overlayNumericPart, currentOverlayPrefix, currentOverlaySuffix, newOverlayPrefix, newOverlaySuffix)) {
      const nextOverlayValue = this.calculateNextValue(currentOverlayNumber, overlayNumericPart, incrementValue);
      const updatedOverlayValue = this.formatValue(nextOverlayValue, newOverlayPrefix, newOverlaySuffix);
      this.setComponentState("overlayNumberDisplay", updatedOverlayValue);
      this.setComponentState("overlayNumberDisplayForControl", updatedOverlayValue);
    }
  }

  extractNumberParts(input: string | number) {
    const stringValue = typeof input === "string" ? input : "";
    const prefix = stringValue.match(/^\D+/)?.[0] || "";
    const suffix = stringValue.match(/\D+$/)?.[0] || "";
    const numberPart = parseInt(stringValue.replace(/\D+/g, ""), 10) || 0;
    return { numberPart, prefix, suffix };
  }

  shouldUpdateValue(currentNumber: number, newNumber: number, currentPrefix: string, currentSuffix: string, newPrefix: string, newSuffix: string) {
    return currentNumber !== newNumber || currentPrefix !== newPrefix || currentSuffix !== newSuffix;
  }

  calculateNextValue(currentNumber: number, targetNumber: number, incrementValue: number) {
    return Math.min(targetNumber, currentNumber + Math.ceil(targetNumber / Math.round(incrementValue / 30)));
  }

  formatValue(value: number, prefix: string, suffix: string) {
    const formattedValue = value ? value.toString() : "";
    const formattedWithDots = this.formatNumberWithDots(formattedValue) === "0" ? "" : this.formatNumberWithDots(formattedValue);
    return prefix + formattedWithDots + suffix;
  }

  static getName(): string {
    return "Stats 8";
  }

  render() {
    const statsData = this.castToObject<CardData[]>("stats");
    const imageSrc = this.getPropValue("imageSrc");
    const title = this.getPropValue("headerTitle");
    const isTitleExist = this.castToString(title);
    const description1 = this.getPropValue("description1");
    const isDescription1Exist = this.castToString(description1);
    const description = this.getPropValue("description");
    const isDesExist = this.castToString(description);
    const author = this.getPropValue("author");
    const isAuthorExist = this.castToString(author);
    const authorRole = this.getPropValue("authorRole");
    const isAuthorRoleExist = this.castToString(authorRole);
    const overlayDescription = this.castToString(this.getPropValue("overlayDescription"));
    const showBackground = this.getPropValue("showBackground");
    const isContentPresent = isTitleExist || isDescription1Exist || isDesExist || isAuthorExist || isAuthorRoleExist || statsData.length > 0;

    const statsEqual = this.isEqual(this.getStats(), this.getNumbers());
    const overlayNumberState = this.getComponentState("overlayNumberDisplayForControl");
    const overlayNumberProp = this.castToString(this.getPropValue("overlayNumber"));
    const overlayEqual = overlayNumberState === overlayNumberProp;

    if (!this.interval && (!statsEqual || !overlayEqual)) {
      this.animate();
    }

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {isContentPresent && (
            <Base.VerticalContent className={this.decorateCSS("stats8-page")}>
              <div className={this.decorateCSS("content")}>
                <Base.VerticalContent>{isTitleExist && <Base.SectionTitle className={this.decorateCSS("title") + " " + this.decorateCSS("text-uppercase")}>{title}</Base.SectionTitle>}</Base.VerticalContent>
                {isDescription1Exist && <Base.SectionDescription className={this.decorateCSS("description")}>{description1}</Base.SectionDescription>}

                {(isTitleExist || isDescription1Exist) && this.getPropValue("showLine") && <hr className={this.decorateCSS("line")} />}

                {isDesExist && <Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>}

                {isAuthorExist && <Base.P className={this.decorateCSS("author")}>{author}</Base.P>}
                {isAuthorRoleExist && (
                  <Base.Row className={this.decorateCSS("author-role-container")}>
                    <Base.P className={this.decorateCSS("author-role")}>
                      {showBackground && <span className={this.decorateCSS("author-role-background")}></span>}
                      {authorRole}
                    </Base.P>
                  </Base.Row>
                )}

                <Base.Row className={this.decorateCSS("stats")}>
                  {statsData.map((statData: CardData, indexStat: number) => {
                    return (
                      (this.castToString(statData.counter) || this.castToString(statData.description)) && (
                        <div className={`${this.decorateCSS("stat-border")} ${!imageSrc && this.decorateCSS("stat-border-full-width")}`}>
                          <div key={indexStat} className={`${this.decorateCSS("stat")} ${showBackground ? this.decorateCSS("with-background") : this.decorateCSS("no-background")}`}>
                            {this.getComponentState(`number-${indexStat}`) !== "0" && <span className={this.decorateCSS("stat-counter")}>{this.getComponentState(`number-${indexStat}`)}</span>}
                            <Base.P className={this.decorateCSS("stat-description")}>{statData.description}</Base.P>
                          </div>
                        </div>
                      )
                    );
                  })}
                </Base.Row>
              </div>
            </Base.VerticalContent>
          )}
          {imageSrc && (
            <div className={this.decorateCSS("stats8-page")}>
              <div className={this.decorateCSS("image-container")}>
                <div className={this.decorateCSS("image-container-border")}>
                  <img src={imageSrc} alt="" />
                  {(this.getComponentState("overlayNumberDisplay") || overlayDescription) && (
                    <div className={this.decorateCSS("overlay")}>
                      {this.getComponentState("overlayNumberDisplay") && <span className={this.decorateCSS("number")}>{this.getComponentState("overlayNumberDisplay")}</span>}
                      {overlayDescription && <Base.P className={this.decorateCSS("description")}>{this.getPropValue("overlayDescription")}</Base.P>}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Stats8Page;
