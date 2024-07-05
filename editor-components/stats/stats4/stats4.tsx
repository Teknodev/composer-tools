import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats4.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type FAQ = {
  title: string;
  content: string;
}

type STAT = {
  title: string;
  content: string;
  stat: number;
}

class Stats4Page extends BaseStats {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "mainTitle",
      displayer: "Main Title",
      value: "Branding services"
    });
    this.addProp({
      type: "string",
      key: "mainDescription",
      displayer: "Main Description",
      value: "We create to brands and businesses to stand out in this digital era."
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
              value: "Research and strategy"
            },
            {
              type: "string",
              key: "content",
              displayer: "Content",
              value: "We strive to develop real-world web solutions that are ideal for small to large project."
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaPlus"
            }
          ]
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
              value: "Wireframes and design"
            },
            {
              type: "string",
              key: "content",
              displayer: "Content",
              value: "We strive to develop real-world web solutions that are ideal for small to large project."
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaPlus"
            }
          ]
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
              value: "Maintenance and support"
            },
            {
              type: "string",
              key: "content",
              displayer: "Content",
              value: "We strive to develop real-world web solutions that are ideal for small to large project."
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaPlus"
            }
          ]
        }
      ]
    })

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
              value: "Days of experience."
            },
            {
              type: "string",
              key: "content",
              displayer: "Content",
              value: "We have crafted beautiful and engaging web solutions."
            },
            {
              type: "number",
              key: "stat",
              displayer: "Stat Value",
              value: 3053
            }
          ]
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
              value: "Valuable happy clients."
            },
            {
              type: "string",
              key: "content",
              displayer: "Content",
              value: "We have crafted beautiful and engaging web solutions."
            },
            {
              type: "number",
              key: "stat",
              displayer: "Stat Value",
              value: 1750
            }
          ]
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
              value: "Presence in countries."
            },
            {
              type: "string",
              key: "content",
              displayer: "Content",
              value: "We have crafted beautiful and engaging web solutions."
            },
            {
              type: "number",
              key: "stat",
              displayer: "Stat Value",
              value: 50
            }
          ]
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
              value: "Worldwide projects."
            },
            {
              type: "string",
              key: "content",
              displayer: "Content",
              value: "We have crafted beautiful and engaging web solutions."
            },
            {
              type: "number",
              key: "stat",
              displayer: "Stat Value",
              value: 856
            }
          ]
        },

      ]
    })
    this.state["componentProps"]["selectedFaqIndex"] = null;

    this.addProp({
      type: "number",
      key: "animation-duration",
      displayer: "Number Animation Duration (ms)",
      value: 500,
    });

    this.castToObject<STAT[]>("statItems").map((statsData, index) =>
      this.setComponentState(`number-${index}`, 0)
    );

    let x = setInterval(() => {
      this.castToObject<STAT[]>("statItems").map(
        (statsData: STAT, index: number) => {
          let statNumber = this.getComponentState(`number-${index}`);
          if (statNumber != statsData.stat) {
            this.setComponentState(
              `number-${index}`,
              Math.min(
                statsData.stat,
                statNumber +
                Math.ceil(
                  statsData.stat /
                  Math.round(this.getPropValue("animation-duration") / 30)
                )
              ) || 0
            );
          }
        }
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
    }
    else {
      this.setComponentState("selectedFaqIndex", index);
    }
  }

  render() {
    const mainTitle = this.getPropValue("mainTitle", { as_string: true });
    const mainDescription = this.getPropValue("mainDescription", { as_string: true });
    const faqItems = this.getPropValue("faqItems");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("stats-container")}>
            <div className={this.decorateCSS("upper-container")}>
              {(mainTitle || mainDescription) &&
                <main className={this.decorateCSS("upper-container-main")}>
                  {mainTitle &&
                    <header className={this.decorateCSS("main-header")}>
                      <span className={this.decorateCSS("title-line")}></span>
                      <h3 className={this.decorateCSS("title")}>
                        {this.getPropValue("mainTitle")}
                      </h3>
                    </header>
                  }
                  {mainDescription &&
                    <p className={this.decorateCSS("main-description")}>
                      {this.getPropValue("mainDescription")}
                    </p>
                  }
                </main>
              }
              {faqItems.length > 0 &&
                <div className={this.decorateCSS("faq")}>
                  {this.castToObject<FAQ[]>("faqItems").map((faqItem: any, itemIndex: number) => (
                    <div className={this.decorateCSS("faq-item")} key={itemIndex}>
                      <header className={this.decorateCSS("faq-item-header")}>
                        <h3>{faqItem.title}</h3>
                        <button className={this.decorateCSS("faq-item-button")} onClick={() => { this.toggleFaqItem(itemIndex) }}>
                          <ComposerIcon
                            propsIcon={{ className: this.decorateCSS("Icon") }}
                            name={faqItem.icon}
                          />
                        </button>
                      </header>
                      <p className={`${this.decorateCSS("faq-item-content")}  ${this.getComponentState("selectedFaqIndex") === itemIndex ? this.decorateCSS("show-faq-item") : ""}`}>{faqItem.content}</p>
                    </div>
                  ))}
                </div>
              }
            </div>
            <section className={this.decorateCSS("stats")}>
              {this.castToObject<Array<STAT>>("statItems").map((statItem: any, index: number) => {
                const statItemTitle = this.getPropValue("statItems")[index].value[0].value
                const statItemContent = this.getPropValue("statItems")[index].value[1].value

                return (
                  <article className={this.decorateCSS("stat-item")} key={index}>
                    {(statItemTitle || statItemContent) &&
                      <>
                        <div className={this.decorateCSS("stat-item-body")}>
                          {statItemTitle !== "" &&
                            <h4 className={this.decorateCSS("stat-item-title")}>{statItem.title}</h4>
                          }
                          {statItemContent !== "" &&
                            <p className={this.decorateCSS("stat-item-content")}>{statItem.content}</p>
                          }
                        </div>
                        <hr />
                      </>
                    }
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
                )
              }
              )}
            </section>
          </div>
        </div>
      </div >
    );
  }
}

export default Stats4Page;
