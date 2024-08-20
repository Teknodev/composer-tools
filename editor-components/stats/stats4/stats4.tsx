import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats4.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Faq = {
  title: JSX.Element;
  content: JSX.Element;
};

type Stat = {
  title: JSX.Element;
  content: JSX.Element;
  stat: number;
};

class Stats4Page extends BaseStats {
  stats: number[];
  numbers: number[];

  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "mainTitle",
      displayer: "Main Title",
      value: "Branding services",
    });
    this.addProp({
      type: "string",
      key: "mainDescription",
      displayer: "Main Description",
      value:
        "We create to brands and businesses to stand out in this digital era.",
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
              value:
                "We strive to develop real-world web solutions that are ideal for small to large project.",
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
              value:
                "We strive to develop real-world web solutions that are ideal for small to large project.",
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
              value:
                "We strive to develop real-world web solutions that are ideal for small to large project.",
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
              value: 3053,
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
              value: 1750,
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
              value: 50,
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
      type: "boolean",
      key: "lineExist",
      displayer: "Title Line",
      value: true,
    });

    this.addProp({
      type: "number",
      key: "animation-duration",
      displayer: "Stat Animation Duration (ms)",
      value: 30,
    });

    this.addProp({
      type: "number",
      key: "increment-value",
      displayer: "Stat Animation Increment Value",
      value: 2,
    });

    this.init();
    this.animate();

    const cards = this.castToObject<Stat[]>("statItems");

    this.stats = cards.map((e) => e.stat);
    this.numbers = cards
      .map((e, index) => this.getComponentState(`number-${index}`))
      .filter((e) => e !== undefined && e !== "");
  }

  init() {
    this.castToObject<Stat[]>("statItems").map((statsData, index) =>
      this.setComponentState(`number-${index}`, 0),
    );
  }

  x: NodeJS.Timeout;
  animate() {
    this.x = setInterval(() => {
      const statItems = this.castToObject<Stat[]>("statItems");
      statItems.forEach((item: Stat, index: number) => {
        let statNumber = this.getComponentState(`number-${index}`);
        if (statNumber !== item.stat) {
          this.setComponentState(
            `number-${index}`,
            Math.min(
              item.stat,
              statNumber + this.getPropValue("increment-value"),
            ) || 0,
          );
        }
      });

      const stats = statItems.map((card: any) =>
        card.stat === "" ? 0 : card.stat,
      );
      const numbers = statItems.map((_, index) =>
        this.getComponentState(`number-${index}`),
      );

      if (JSON.stringify(stats) === JSON.stringify(numbers)) {
        clearInterval(this.x);
        console.log("clear");
      }
    }, this.getPropValue("animation-duration"));
  }

  getName(): string {
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
    const mainTitle = this.getPropValue("mainTitle", { as_string: true });
    const mainDescription = this.getPropValue("mainDescription", {
      as_string: true,
    });
    const faqs = this.castToObject<Faq[]>("faqItems");
    const stats = this.castToObject<Stat[]>("statItems");

    const expandIcon = this.getPropValue("expandIcon");
    const collapseIcon = this.getPropValue("collapseIcon");
    const statIcon = this.getPropValue("statIcon");
    const lineExist = this.getPropValue("lineExist");

    console.log(this.stats);
    console.log(this.numbers);

    // if (JSON.stringify(this.stats) !== JSON.stringify(this.numbers)) {
    //   this.animate();
    // }

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("stats-container")}>
            {mainTitle && (
              <header className={this.decorateCSS("main-header")}>
                {lineExist && (
                  <span className={this.decorateCSS("title-line")} />
                )}
                <h3 className={this.decorateCSS("title")}>
                  {this.getPropValue("mainTitle")}
                </h3>
              </header>
            )}
            {(mainDescription || faqs?.length > 0) && (
              <div className={this.decorateCSS("upper-container")}>
                {mainDescription && (
                  <main className={this.decorateCSS("upper-container-main")}>
                    <p className={this.decorateCSS("main-description")}>
                      {this.getPropValue("mainDescription")}
                    </p>
                  </main>
                )}
                {faqs?.length > 0 && (
                  <div className={this.decorateCSS("faq")}>
                    {faqs.map((item: any, index: number) => {
                      const titleExist = this.castToString(item.title);
                      const contentExist = this.castToString(item.content);

                      if (titleExist || contentExist || item.icon)
                        return (
                          <div
                            className={this.decorateCSS("faq-item")}
                            key={index}
                          >
                            {(titleExist || item.icon) && (
                              <header
                                className={this.decorateCSS("faq-item-header")}
                              >
                                {titleExist && (
                                  <h3
                                    className={this.decorateCSS(
                                      "faq-item-title",
                                    )}
                                  >
                                    {item.title}
                                  </h3>
                                )}
                                <button
                                  className={this.decorateCSS(
                                    "faq-item-button",
                                  )}
                                  onClick={() => {
                                    this.toggleFaqItem(index);
                                  }}
                                >
                                  {this.getComponentState(
                                    "selectedFaqIndex",
                                  ) === index ? (
                                    <ComposerIcon
                                      propsIcon={{
                                        className: this.decorateCSS("Icon"),
                                      }}
                                      name={collapseIcon}
                                    />
                                  ) : (
                                    <ComposerIcon
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
                              <p
                                className={`${this.decorateCSS("faq-item-content")}  ${this.getComponentState("selectedFaqIndex") === index ? this.decorateCSS("show-faq-item") : ""}`}
                              >
                                {item.content}
                              </p>
                            )}
                          </div>
                        );
                      return null;
                    })}
                  </div>
                )}
              </div>
            )}
            {stats?.length > 0 && (
              <section className={this.decorateCSS("stats")}>
                {stats.map((item: Stat, index: number) => {
                  const titleExist = this.castToString(item.title);
                  const contentExist = this.castToString(item.content);

                  if (titleExist || contentExist || item.stat)
                    return (
                      <article
                        className={this.decorateCSS("stat-item")}
                        key={index}
                      >
                        {(titleExist || contentExist) && (
                          <>
                            <div className={this.decorateCSS("stat-item-body")}>
                              {titleExist && (
                                <h4
                                  className={this.decorateCSS(
                                    "stat-item-title",
                                  )}
                                >
                                  {item.title}
                                </h4>
                              )}
                              {contentExist && (
                                <p
                                  className={this.decorateCSS(
                                    "stat-item-content",
                                  )}
                                >
                                  {item.content}
                                </p>
                              )}
                            </div>
                            <div className={this.decorateCSS("stat-line")} />
                          </>
                        )}
                        {item.stat && (
                          <h3
                            className={this.decorateCSS("stat-item-stat-value")}
                          >
                            {this.getComponentState(`number-${index}`)
                              ? this.getComponentState(`number-${index}`)
                              : item.stat}
                            {statIcon && (
                              <span
                                className={this.decorateCSS("stat-value-icon")}
                              >
                                <ComposerIcon
                                  propsIcon={{
                                    className: this.decorateCSS("stat-icon"),
                                  }}
                                  name={statIcon}
                                />
                              </span>
                            )}
                          </h3>
                        )}
                      </article>
                    );
                  return null;
                })}
              </section>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Stats4Page;
