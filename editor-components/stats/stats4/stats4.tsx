import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats4.module.scss";

import { Base } from "../../../composer-base-components/base/base";

type Faq = {
  title: React.JSX.Element;
  content: React.JSX.Element;
};

type Stat = {
  title: React.JSX.Element;
  content: React.JSX.Element;
  stat: React.JSX.Element;
};

class Stats4Page extends BaseStats {
  interval: any;

  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "mainTitle",
      displayer: "Subtitle",
      value: "BRANDING SERVICES",
    });
    this.addProp({
      type: "string",
      key: "mainDescription",
      displayer: "Title",
      value: "We create to brands and businesses to stand out in this digital era.",
    });

    this.addProp({
      type: "array",
      key: "faqItems",
      displayer: "FAQ Items",
      value: [
        {
          type: "object",
          key: "faqItem",
          displayer: "FAQ Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Research and strategy",
            },
            {
              type: "string",
              key: "content",
              displayer: "Content",
              value: "We strive to develop real-world web solutions that are ideal for small to large project.",
            },
          ],
        },
        {
          type: "object",
          key: "faqItem",
          displayer: "FAQ Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Wireframes and design",
            },
            {
              type: "string",
              key: "content",
              displayer: "Content",
              value: "We strive to develop real-world web solutions that are ideal for small to large project.",
            },
          ],
        },
        {
          type: "object",
          key: "faqItem",
          displayer: "FAQ Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Maintenance and support",
            },
            {
              type: "string",
              key: "content",
              displayer: "Content",
              value: "We strive to develop real-world web solutions that are ideal for small to large project.",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "statItems",
      displayer: "Stat Items",
      value: [
        {
          type: "object",
          key: "statItem",
          displayer: "Stat Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Days of experience.",
            },
            {
              type: "string",
              key: "content",
              displayer: "Content",
              value: "We have crafted beautiful and engaging web solutions.",
            },
            {
              type: "number",
              key: "stat",
              displayer: "Stat Value",
              value: 300,
            },
          ],
        },
        {
          type: "object",
          key: "statItem",
          displayer: "Stat Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Valuable happy clients.",
            },
            {
              type: "string",
              key: "content",
              displayer: "Content",
              value: "We have crafted beautiful and engaging web solutions.",
            },
            {
              type: "number",
              key: "stat",
              displayer: "Stat Value",
              value: 500,
            },
          ],
        },
        {
          type: "object",
          key: "statItem",
          displayer: "Stat Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Presence in countries.",
            },
            {
              type: "string",
              key: "content",
              displayer: "Content",
              value: "We have crafted beautiful and engaging web solutions.",
            },
            {
              type: "number",
              key: "stat",
              displayer: "Stat Value",
              value: 750,
            },
          ],
        },
        {
          type: "object",
          key: "statItem",
          displayer: "Stat Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Worldwide projects.",
            },
            {
              type: "string",
              key: "content",
              displayer: "Content",
              value: "We have crafted beautiful and engaging web solutions.",
            },
            {
              type: "number",
              key: "stat",
              displayer: "Stat Value",
              value: 856,
            },
          ],
        },
      ],
    });
    this.state["componentProps"]["selectedFaqIndex"] = null;

    this.addProp({
      type: "icon",
      key: "expandIcon",
      displayer: "Icon",
      value: "FaPlus",
    });

    this.addProp({
      type: "icon",
      key: "collapseIcon",
      displayer: "Icon",
      value: "FaMinus",
    });
    this.addProp({
      type: "icon",
      key: "statIcon",
      displayer: "Stat Value Icon",
      value: "FaPlus",
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
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 4,
      max: 4,
    });

    this.init();
    this.animate();
  }

  init() {
    this.castToObject<Stat[]>("statItems").map((_, index) => {
      this.setComponentState(`number-${index}`, 0);
      this.setComponentState(`numberForControl-${index}`, 0);
    });
  }

  isEqual(arr1: any[], arr2: any[]) {
    for (let i = 0; i < arr1.length; i++) {
      const val1 = arr1[i];
      const val2 = arr2[i];

      if (val1 === null || val2 === null) continue;

      if (Number(val1) !== Number(val2)) {
        return false;
      }
    }
    return true;
  }

  getStats() {
    const statItems = this.castToObject<Stat[]>("statItems");
    const stats = statItems.map((card: any) => (card.stat === "" ? null : card.stat));
    return stats;
  }

  getNumbers() {
    const statItems = this.castToObject<Stat[]>("statItems");
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
      const statItems = this.castToObject<Stat[]>("statItems");

      if (this.isEqual(this.getStats(), this.getNumbers())) {
        clearInterval(this.interval);
        this.interval = null;
      }

      statItems.forEach((item: Stat, index: number) => {
        let currentNumber = this.getComponentState(`number-${index}`) ?? 0;

        if (typeof currentNumber === "string") {
          currentNumber = parseInt(currentNumber.replace(/\D+/g, ""), 10) || 0;
        }

        if (typeof item.stat === "number") {
          if (currentNumber !== item.stat) {
            let nextValue = Math.min(item.stat, currentNumber + Math.ceil(item.stat / Math.round(incrementValue / 30)));

            const formattedNextValue = this.formatNumberWithDots(nextValue);

            this.setComponentState(`number-${index}`, formattedNextValue);
            this.setComponentState(`numberForControl-${index}`, nextValue);
          }
        }
      });
    }, animationDuration);
  }

  static getName(): string {
    return "Stats 4";
  }

  toggleFaqItem = (index: number) => {
    const currentSelectedFaqItem = this.getComponentState("selectedFaqIndex");

    if (currentSelectedFaqItem === index) {
      this.setComponentState("selectedFaqIndex", null);
    } else {
      this.setComponentState("selectedFaqIndex", index);
    }
  };

  render() {
    const mainTitle = this.castToString(this.getPropValue("mainTitle"));
    const mainDescription = this.castToString(this.getPropValue("mainDescription"));
    const faqs = this.castToObject<Faq[]>("faqItems");
    const statItems = this.castToObject<Stat[]>("statItems");
    const expandIcon = this.getPropValue("expandIcon");
    const collapseIcon = this.getPropValue("collapseIcon");
    const statIcon = this.getPropValue("statIcon");
    const itemCount = this.getPropValue("itemCount");

    if (!this.interval && !this.isEqual(this.getStats(), this.getNumbers())) {
      this.animate();
    }

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("stats-container")}>
            <Base.ContainerGrid className={this.decorateCSS("upper-container")}>
              {(mainDescription || mainTitle) && (
                <Base.VerticalContent className={this.decorateCSS("upper-container-main")}>
                  {mainTitle && <Base.SectionSubTitle className={this.decorateCSS("title")}>{this.getPropValue("mainTitle")}</Base.SectionSubTitle>}
                  {mainDescription && <Base.SectionTitle className={this.decorateCSS("main-description")}>{this.getPropValue("mainDescription")}</Base.SectionTitle>}
                </Base.VerticalContent>
              )}
              {faqs?.length > 0 && (
                <div className={this.decorateCSS("faq")}>
                  {faqs.map((item: any, index: number) => {
                    const titleExist = this.castToString(item.title);
                    const contentExist = this.castToString(item.content);

                    if (titleExist || contentExist || item.icon)
                      return (
                        <div className={this.decorateCSS("faq-item")} key={index}>
                          {(titleExist || item.icon) && (
                            <header className={this.decorateCSS("faq-item-header")}>
                              {titleExist && <Base.H5 className={this.decorateCSS("faq-item-title")}>{item.title}</Base.H5>}
                              <button
                                className={this.decorateCSS("faq-item-button")}
                                onClick={() => {
                                  this.toggleFaqItem(index);
                                }}
                              >
                                {this.getComponentState("selectedFaqIndex") === index ? (
                                  <Base.Icon
                                    propsIcon={{
                                      className: this.decorateCSS("Icon"),
                                    }}
                                    name={collapseIcon}
                                  />
                                ) : (
                                  <Base.Icon
                                    propsIcon={{
                                      className: this.decorateCSS("Icon"),
                                    }}
                                    name={expandIcon}
                                  />
                                )}
                              </button>
                            </header>
                          )}
                          {contentExist && (
                            <div className={`${this.decorateCSS("faq-item-content")}  ${this.getComponentState("selectedFaqIndex") === index ? this.decorateCSS("show-faq-item") : ""}`}>
                              <Base.P className={this.decorateCSS("faq-text")}>{item.content}</Base.P>
                            </div>
                          )}
                          <hr className={this.decorateCSS("bottom-line")} />
                        </div>
                      );
                    return null;
                  })}
                </div>
              )}
            </Base.ContainerGrid>
            {statItems?.length > 0 && (
              <Base.ListGrid gridCount={{ pc: itemCount, tablet: 2, phone: 1 }} className={this.decorateCSS("stats")}>
                {statItems.map((item: Stat, index: number) => {
                  const titleExist = this.castToString(item.title);
                  const contentExist = this.castToString(item.content);

                  const statValue = item.stat === this.getComponentState(`number-${index}`) ? item.stat : this.getComponentState(`number-${index}`);

                  if (titleExist || contentExist || item.stat)
                    return (
                      <article className={this.decorateCSS("stat-item")} key={index}>
                        {(titleExist || contentExist) && (
                          <>
                            <div className={this.decorateCSS("stat-item-body")}>
                              {titleExist && <Base.P className={this.decorateCSS("stat-item-title")}>{item.title}</Base.P>}
                              {contentExist && <Base.P className={this.decorateCSS("stat-item-content")}>{item.content}</Base.P>}
                            </div>
                            <div className={this.decorateCSS("stat-line")} />
                          </>
                        )}
                        {item.stat && (
                          <Base.P className={this.decorateCSS("stat-item-stat-value")}>
                            {statValue}
                            {statIcon && (
                              <span className={this.decorateCSS("stat-value-icon")}>
                                <Base.Icon
                                  propsIcon={{
                                    className: this.decorateCSS("stat-icon"),
                                  }}
                                  name={statIcon}
                                />
                              </span>
                            )}
                          </Base.P>
                        )}
                      </article>
                    );
                  return null;
                })}
              </Base.ListGrid>
            )}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Stats4Page;
