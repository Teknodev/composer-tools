import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats4.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Faq = {
  title: JSX.Element;
  content: JSX.Element;
  icon: string;
};

type Stat = {
  title: JSX.Element;
  content: JSX.Element;
  stat: number;
  icon: string;
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
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaPlus",
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
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaPlus",
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
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaPlus",
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
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaPlus",
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
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaPlus",
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
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaPlus",
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
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaPlus",
            },
          ],
        },
      ],
    });
    this.state["componentProps"]["selectedFaqIndex"] = null;

    this.addProp({
      type: "number",
      key: "animation-duration",
      displayer: "Number Animation Duration (ms)",
      value: 500,
    });

    this.castToObject<Stat[]>("statItems").map((_, index) =>
      this.setComponentState(`number-${index}`, 0)
    );
  }

  x = setInterval(() => {
    this.castToObject<Stat[]>("statItems").map((item: Stat, index: number) => {
      let statNumber: number = this.getComponentState(`number-${index}`);
      if (statNumber !== item.stat) {
        this.setComponentState(
          `number-${index}`,
          Math.min(
            item.stat,
            statNumber +
              Math.ceil(
                item.stat /
                  Math.round(this.getPropValue("animation-duration") / 30)
              )
          ) || 0
        );
      }
    });
    console.log("deneme")
  }, 30);

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
    const isMainTitleExist = this.getPropValue("mainTitle", {
      as_string: true,
    });
    const isMainDescriptionExist = this.getPropValue("mainDescription", {
      as_string: true,
    });
    const faqItems = this.castToObject<Stat[]>("faqItems");

    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("stats-container")}>
            <div className={this.decorateCSS("upper-container")}>
              {(isMainTitleExist || isMainDescriptionExist) && (
                <main className={this.decorateCSS("upper-container-main")}>
                  {isMainTitleExist && (
                    <header className={this.decorateCSS("main-header")}>
                      <span className={this.decorateCSS("title-line")}></span>
                      <h3 className={this.decorateCSS("title")}>
                        {this.getPropValue("mainTitle")}
                      </h3>
                    </header>
                  )}
                  {isMainDescriptionExist && (
                    <p className={this.decorateCSS("main-description")}>
                      {this.getPropValue("mainDescription")}
                    </p>
                  )}
                </main>
              )}
              {faqItems.length > 0 && (
                <div className={this.decorateCSS("faq")}>
                  {this.castToObject<Faq[]>("faqItems").map(
                    (item: Faq, index: number) => {
                      const isTitleExist = this.castToString(item.title);
                      const isContentExist = this.castToString(item.content);

                      return (
                        <div
                          className={this.decorateCSS("faq-item")}
                          key={index}
                        >
                          <header
                            className={this.decorateCSS("faq-item-header")}
                          >
                            {isTitleExist && <h3>{item.title}</h3>}
                            {item.icon && (
                              <button
                                className={this.decorateCSS("faq-item-button")}
                                onClick={() => {
                                  this.toggleFaqItem(index);
                                }}
                              >
                                <ComposerIcon
                                  propsIcon={{
                                    className: this.decorateCSS("Icon"),
                                  }}
                                  name={item.icon}
                                />
                              </button>
                            )}
                          </header>
                          {isContentExist && (
                            <p
                              className={`${this.decorateCSS(
                                "faq-item-content"
                              )}  ${
                                this.getComponentState("selectedFaqIndex") ===
                                index
                                  ? this.decorateCSS("show-faq-item")
                                  : ""
                              }`}
                            >
                              {item.content}
                            </p>
                          )}
                        </div>
                      );
                    }
                  )}
                </div>
              )}
            </div>
            <section className={this.decorateCSS("stats")}>
              {this.castToObject<Stat[]>("statItems").map(
                (item: Stat, index: number) => {
                  const isTitleExist = this.castToString(item.title);
                  const isContentExist = this.castToString(item.content);

                  if (this.getComponentState(`number-${index}`) === item.stat)
                    clearInterval(this.x);

                  return (
                    <article
                      className={this.decorateCSS("stat-item")}
                      key={index}
                    >
                      {(isTitleExist || isContentExist) && (
                        <>
                          <div className={this.decorateCSS("stat-item-body")}>
                            {isTitleExist && (
                              <h4
                                className={this.decorateCSS("stat-item-title")}
                              >
                                {item.title}
                              </h4>
                            )}
                            {isContentExist && (
                              <p
                                className={this.decorateCSS(
                                  "stat-item-content"
                                )}
                              >
                                {item.content}
                              </p>
                            )}
                          </div>
                          <hr />
                        </>
                      )}
                      <h3 className={this.decorateCSS("stat-item-stat-value")}>
                        {this.getComponentState(`number-${index}`)}
                        <span className={this.decorateCSS("stat-value-icon")}>
                          <ComposerIcon
                            propsIcon={{ className: this.decorateCSS("Icon") }}
                            name={item.icon}
                          />
                        </span>
                      </h3>
                    </article>
                  );
                }
              )}
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Stats4Page;
