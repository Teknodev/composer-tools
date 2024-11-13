import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats8.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type CardData = {
  counter: JSX.Element;
  description: JSX.Element;
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
      key: "subtitle",
      displayer: "Subtitle",
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
      displayer: "Description",
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
      if (this.isEqual(this.getStats(), this.getNumbers()) || this.isOverlayNumbersEqual(this.castToString(this.getPropValue("overlayNumber")), this.getComponentState("overlayNumberDisplayForControl"))) {
        clearInterval(this.interval);
        this.interval = null;
      }
      this.castToObject<CardData[]>("stats").map((statData: CardData, index: number) => {
        let currentNumberState = this.getComponentState(`number-${index}`);
        const currentString = typeof currentNumberState === "string" ? currentNumberState : "";
        const currentNonNumericPrefix = currentString.match(/^\D+/)?.[0] || "";
        const currentNonNumericSuffix = currentString.match(/\D+$/)?.[0] || "";
        const currentNumber = parseInt(currentString.replace(/\D+/g, ""), 10) || 0;

        const counterString = this.castToString(statData.counter);
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

      const overlayNumberState = this.getComponentState("overlayNumberDisplay");

      const overlayString = typeof overlayNumberState === "string" ? overlayNumberState : "";
      const currentOverlayPrefix = overlayString.match(/^\D+/)?.[0] || "";
      const currentOverlaySuffix = overlayString.match(/\D+$/)?.[0] || "";
      const currentOverlayNumber = parseInt(overlayString.replace(/\D+/g, ""), 10) || 0;

      const overlayNumberProp = this.castToString(this.getPropValue("overlayNumber"));
      const newCurrentOverlayPrefix = overlayNumberProp.match(/^\D+/)?.[0] || "";
      const newCurrentOverlaySuffix = overlayNumberProp.match(/\D+$/)?.[0] || "";
      const overlayNumericPart = parseInt(overlayNumberProp.replace(/[^\d]/g, ""), 10) || 0;

      if (currentOverlayNumber !== overlayNumericPart || newCurrentOverlayPrefix !== currentOverlayPrefix || newCurrentOverlaySuffix !== currentOverlaySuffix) {
        let nextOverlayValue = Math.min(overlayNumericPart, currentOverlayNumber + Math.ceil(overlayNumericPart / Math.round(incrementValue / 30)));

        let formattedOverlayValue = nextOverlayValue ? nextOverlayValue.toString() : "";

        const formattedNextValueWithDots = this.formatNumberWithDots(formattedOverlayValue) === "0" ? "" : this.formatNumberWithDots(formattedOverlayValue);

        var updatedValue = currentOverlayNumber > 0 ? newCurrentOverlayPrefix + formattedNextValueWithDots + newCurrentOverlaySuffix : newCurrentOverlayPrefix + formattedNextValueWithDots;

        var updatedValueForControl = currentOverlayNumber > 0 ? newCurrentOverlayPrefix + formattedOverlayValue + newCurrentOverlaySuffix : newCurrentOverlayPrefix + formattedOverlayValue;

        this.setComponentState("overlayNumberDisplay", updatedValue);
        this.setComponentState("overlayNumberDisplayForControl", updatedValue);
      }
    }, animationDuration);
  }

  getName(): string {
    return "Stats 8";
  }

  render() {
    const statsData = this.castToObject<CardData[]>("stats");
    const imageSrc = this.getPropValue("imageSrc");
    const title = this.getPropValue("headerTitle");
    const isTitleExist = this.castToString(title);
    const subtitle = this.getPropValue("subtitle");
    const isSubTitleExist = this.castToString(subtitle);
    const description = this.getPropValue("description");
    const isDesExist = this.castToString(description);
    const author = this.getPropValue("author");
    const isAuthorExist = this.castToString(author);
    const authorRole = this.getPropValue("authorRole");
    const isAuthorRoleExist = this.castToString(authorRole);
    const overlayDescription = this.castToString(this.getPropValue("overlayDescription"));
    const showBackground = this.getPropValue("showBackground");
    const isContentPresent = isTitleExist || isSubTitleExist || isDesExist || isAuthorExist || isAuthorRoleExist || statsData.length > 0;

    console.log(isContentPresent, "isContentPresent");

    const statsEqual = this.isEqual(this.getStats(), this.getNumbers());
    const overlayNumberState = this.getComponentState("overlayNumberDisplayForControl");
    const overlayNumberProp = this.castToString(this.getPropValue("overlayNumber"));
    const overlayEqual = overlayNumberState === overlayNumberProp;

    if (!this.interval && (!statsEqual || !overlayEqual)) {
      this.animate();
    }

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={!isContentPresent ? this.decorateCSS("max-content") : this.decorateCSS("max-content")}>
          {isContentPresent && (
            <Base.VerticalContent className={this.decorateCSS("stats8-page")}>
              <div className={this.decorateCSS("content")}>
                <Base.VerticalContent>{isTitleExist && <Base.SectionTitle className={this.decorateCSS("title") + " " + this.decorateCSS("text-uppercase")}>{title}</Base.SectionTitle>}</Base.VerticalContent>
                {isSubTitleExist && <Base.P className={this.decorateCSS("subtitle")}>{subtitle}</Base.P>}

                {(isTitleExist || isSubTitleExist) && this.getPropValue("showLine") && <hr className={this.decorateCSS("line")} />}

                {isDesExist && <Base.P className={this.decorateCSS("description")}>{description}</Base.P>}

                {isAuthorExist && <Base.P className={this.decorateCSS("author")}>{author}</Base.P>}
                {isAuthorRoleExist && (
                  <div className={this.decorateCSS("author-role-container")}>
                    <Base.P className={this.decorateCSS("author-role")}>
                      {showBackground && <span className={this.decorateCSS("author-role-background")}></span>}
                      {authorRole}
                    </Base.P>
                  </div>
                )}

                <Base.ContainerGrid className={this.decorateCSS("stats")}>
                  {statsData.map((statData: CardData, indexStat: number) => {
                    return (
                      (this.castToString(statData.counter) || this.castToString(statData.description)) && (
                        <div className={`${this.decorateCSS("stat-border")} ${!imageSrc ? this.decorateCSS("stat-border-full-width") : ""}`}>
                          <div key={indexStat} className={`${this.decorateCSS("stat")} ${showBackground ? this.decorateCSS("with-background") : this.decorateCSS("no-background")}`}>
                            {this.getComponentState(`number-${indexStat}`) !== "0" && <span className={this.decorateCSS("stat-counter")}>{this.getComponentState(`number-${indexStat}`)}</span>}
                            <Base.P className={this.decorateCSS("stat-description")}>{statData.description}</Base.P>
                          </div>
                        </div>
                      )
                    );
                  })}
                </Base.ContainerGrid>
              </div>
            </Base.VerticalContent>
          )}
          {imageSrc && (
            <div className={this.decorateCSS("stats8-page")}>
              <div className={this.decorateCSS("image-container")}>
                <div className={this.decorateCSS("image-container-border")}>
                  <img src={imageSrc} alt="Digital Experience" />
                  {(this.getComponentState("overlayNumberDisplay") !== "0" || overlayDescription) && (
                    <div className={this.decorateCSS("overlay")}>
                      {this.getComponentState("overlayNumberDisplay") !== "0" && <span className={this.decorateCSS("number")}>{this.getComponentState("overlayNumberDisplay")}</span>}
                      {overlayDescription && <Base.P className={this.decorateCSS("description")}>{overlayDescription}</Base.P>}
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
