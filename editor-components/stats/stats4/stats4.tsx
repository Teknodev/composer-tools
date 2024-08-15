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
      type: "number",
      key: "animation-duration",
      displayer: "Number Animation Duration (ms)",
      value: 500,
    });

    this.castToObject<Stat[]>("statItems").map((statsData, index) =>
      this.setComponentState(`number-${index}`, 0),
    );

    let x = setInterval(() => {
      this.castToObject<Stat[]>("statItems").map(
        (statsData: Stat, index: number) => {
          let statNumber = this.getComponentState(`number-${index}`);
          if (statNumber != statsData.stat) {
            this.setComponentState(
              `number-${index}`,
              Math.min(
                statsData.stat,
                statNumber +
                  Math.ceil(
                    statsData.stat /
                      Math.round(this.getPropValue("animation-duration") / 30),
                  ),
              ) || 0,
            );
          }
        },
      );
    }, 30);
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

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("stats-container")}>
            {mainTitle && (
              <header className={this.decorateCSS("main-header")}>
                <span className={this.decorateCSS("title-line")}></span>
                <h3 className={this.decorateCSS("title")}>
                  {this.getPropValue("mainTitle")}
                </h3>
              </header>
            )}
            <div className={this.decorateCSS("upper-container")}>
              {mainDescription && (
                <main className={this.decorateCSS("upper-container-main")}>
                  <p className={this.decorateCSS("main-description")}>
                    {this.getPropValue("mainDescription")}
                  </p>
                </main>
              )}
              {faqs.length > 0 && (
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
                                  className={this.decorateCSS("faq-item-title")}
                                >
                                  {item.title}
                                </h3>
                              )}
                              <button
                                className={this.decorateCSS("faq-item-button")}
                                onClick={() => {
                                  this.toggleFaqItem(index);
                                }}
                              >
                                {this.getComponentState("selectedFaqIndex") ===
                                index ? (
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
            <section className={this.decorateCSS("stats")}>
              {stats.map((item: Stat, index: number) => {
                const titleExist = this.castToString(item.title);
                const contentExist = this.castToString(item.content);

                return (
                  <article
                    className={this.decorateCSS("stat-item")}
                    key={index}
                  >
                    {(titleExist || contentExist) && (
                      <>
                        <div className={this.decorateCSS("stat-item-body")}>
                          {titleExist && (
                            <h4 className={this.decorateCSS("stat-item-title")}>
                              {item.title}
                            </h4>
                          )}
                          {contentExist && (
                            <p
                              className={this.decorateCSS("stat-item-content")}
                            >
                              {item.content}
                            </p>
                          )}
                        </div>
                        <div className={this.decorateCSS("stat-line")} />
                      </>
                    )}
                    <h3 className={this.decorateCSS("stat-item-stat-value")}>
                      {this.getComponentState(`number-${index}`)}
                      <span className={this.decorateCSS("stat-value-icon")}>
                        <ComposerIcon
                          propsIcon={{ className: this.decorateCSS("Icon") }}
                          name="FaPlus"
                        />
                      </span>
                    </h3>
                  </article>
                );
              })}
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Stats4Page;
