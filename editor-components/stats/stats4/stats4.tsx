import * as React from "react";
import { BaseStats, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./stats4.module.scss";

import { Base } from "../../../composer-base-components/base/base";

type Faq = {
  title: React.JSX.Element;
  content: React.JSX.Element;
};

type Stat = {
  title: React.JSX.Element;
  content: React.JSX.Element;
  number: React.JSX.Element;
};

class Stats4Page extends BaseStats {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "BRANDING SERVICES",
    });
    this.addProp({
      type: "string",
      key: "title",
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
              type: "string",
              key: "number",
              displayer: "Stat Value",
              value: "300",
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
              type: "string",
              key: "number",
              displayer: "Stat Value",
              value: "500",
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
              type: "string",
              key: "number",
              displayer: "Stat Value",
              value: "750",
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
              type: "string",
              key: "number",
              displayer: "Stat Value",
              value: "856",
            },
          ],
        },
      ],
    });
    this.state["componentProps"]["selectedFaqIndex"] = null;

    this.addProp({
      type: "media",
      key: "expandIcon",
      displayer: "Inactive Icon",
      additionalParams: { availableTypes: ["image", "icon"] },
      value: { type: "icon", name: "FaPlus" },
    });

    this.addProp({
      type: "media",
      key: "collapseIcon",
      displayer: "Active Icon",
      additionalParams: { availableTypes: ["image", "icon"] },
      value: { type: "icon", name: "FaMinus" },
    });
    this.addProp({
      type: "media",
      key: "statIcon",
      displayer: "Stat Value Icon",
      additionalParams: { availableTypes: ["image", "icon"] },
      value: { type: "icon", name: "FaPlus" },
    });

    this.addProp({
      type: "object",
      key: "settings",
      displayer: "Settings",
      value: [
        {
          type: "boolean",
          key: "shouldAnimate",
          displayer: "Animate Numbers",
          value: true,
        },
        {
          type: "number",
          key: "animationDuration",
          displayer: "Animation Duration (ms)",
          value: 2000,
        },
        {
          type: "number",
          key: "itemCount",
          displayer: "Item Count in a Row",
          value: 4,
          max: 4,
        },
      ],
    });
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
    const alignment = Base.getContentAlignment();
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const faqs = this.castToObject<Faq[]>("faqItems");
    const statItems = this.castToObject<Stat[]>("stats");
    const expandIcon = this.getPropValue("expandIcon");
    const collapseIcon = this.getPropValue("collapseIcon");
    const statIcon: TypeMediaInputValue | string = this.getPropValue("statIcon");

    const settings = this.castToObject<any>("settings");
    const shouldAnimate = settings?.shouldAnimate ?? true;
    const animationDuration = (settings?.animationDuration ?? 2000) as number;
    const itemCount = settings?.itemCount ?? 4;

    const mediaExists = (m?: TypeMediaInputValue | string) => (typeof m === "object" ? m?.name || m?.url : m);
    const statIconExist = mediaExists(statIcon);

    const AnimatedStat = ({ item }: { item: Stat }) => {
      const ref = React.useRef<HTMLElement>(null);
      const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

      const rawNumber = (this.castToString(item.number) as string) || "";
      const prefix = rawNumber.match(/^[^\d]*/)?.[0] ?? "";
      const suffix = rawNumber.match(/[^\d]*$/)?.[0] ?? "";
      const core = rawNumber.slice(prefix.length, rawNumber.length - suffix.length);
      const isNumeric = /\d/.test(core);
      const target = isNumeric ? parseFloat(core.replace(/,/g, "")) : NaN;
      const decimals = core.includes(".") ? core.split(".")[1]?.length ?? 0 : 0;
      const useGrouping = /,/.test(core);
      const reduceMotion = typeof window !== "undefined" && !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
      const animatable = shouldAnimate && isNumeric && !reduceMotion;

      const format = (n: number) => prefix + n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals, useGrouping }) + suffix;

      const [display, setDisplay] = React.useState<string>(() => (rawNumber ? (animatable ? format(0) : rawNumber) : ""));

      React.useEffect(() => {
        if (!rawNumber) {
          setDisplay("");
          return;
        }
        if (!animatable) {
          setDisplay(rawNumber);
          return;
        }
        const node = ref.current;
        if (!node || typeof IntersectionObserver === "undefined") {
          setDisplay(rawNumber);
          return;
        }
        const clear = () => {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
        };
        const run = () => {
          clear();
          setDisplay(format(0));
          const steps = Math.max(1, Math.round(animationDuration / 30));
          const increment = target / steps;
          let current = 0;
          intervalRef.current = setInterval(() => {
            current += increment;
            if (current >= target) {
              clear();
              setDisplay(rawNumber);
              return;
            }
            setDisplay(format(current));
          }, 30);
        };
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                run();
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.4 }
        );
        observer.observe(node);
        return () => {
          observer.disconnect();
          clear();
        };
      }, [rawNumber, animatable, animationDuration, target]);

      const titleExist = this.castToString(item.title);
      const contentExist = this.castToString(item.content);

      if (!titleExist && !contentExist && !display) return null;

      return (
        <article ref={ref} className={this.decorateCSS("stat-item")}>
          {(titleExist || contentExist) && (
            <>
              {titleExist && <Base.P className={this.decorateCSS("stat-item-title")}>{item.title}</Base.P>}
              {contentExist && <Base.P className={this.decorateCSS("stat-item-content")}>{item.content}</Base.P>}
              <div className={this.decorateCSS("stat-line")} />
            </>
          )}
          {!!display && (
            <Base.P className={this.decorateCSS("stat-item-stat-value")}>
              {display}
              {statIconExist && (
                <span className={this.decorateCSS("stat-value-icon")}>
                  <Base.Media value={typeof statIcon === "object" ? statIcon : { type: "icon", name: statIcon }} className={this.decorateCSS("stat-icon")} />
                </span>
              )}
            </Base.P>
          )}
        </article>
      );
    };

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={`${this.decorateCSS("stats-container")} ${alignment === "center" ? this.decorateCSS("alignment-center") : ""}`}>
            <Base.ContainerGrid className={this.decorateCSS("upper-container")}>
              {(title || subtitle) && (
                <Base.VerticalContent className={this.decorateCSS("upper-container-main")}>
                  {subtitle && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
                  {title && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                </Base.VerticalContent>
              )}
              {faqs?.length > 0 && (
                <div className={this.decorateCSS("faq")}>
                  {faqs.map((item: any, index: number) => {
                    const titleExist = this.castToString(item.title);
                    const contentExist = this.castToString(item.content);
                    const expandIconExist = typeof expandIcon === "object" ? (expandIcon?.name || expandIcon?.url) : expandIcon;
                    const collapseIconExist = typeof collapseIcon === "object" ? (collapseIcon?.name || collapseIcon?.url) : collapseIcon;
                    const isSelected = this.getComponentState("selectedFaqIndex") === index;
                    const toggleIconExist = isSelected ? collapseIconExist : expandIconExist;

                    if (titleExist || contentExist || item.icon)
                      return (
                        <div className={this.decorateCSS("faq-item")} key={index}>
                          {(titleExist || toggleIconExist) && (
                            <header className={this.decorateCSS("faq-item-header")}>
                              {titleExist && <Base.H5 className={this.decorateCSS("faq-item-title")}>{item.title}</Base.H5>}
                              {toggleIconExist && (
                                <button
                                  className={this.decorateCSS("faq-item-button")}
                                  onClick={() => {
                                    this.toggleFaqItem(index);
                                  }}
                                >
                                  {isSelected ? (
                                    <Base.Media
                                      value={collapseIcon}
                                      className={this.decorateCSS("Icon")}
                                    />
                                  ) : (
                                    <Base.Media
                                      value={expandIcon}
                                      className={this.decorateCSS("Icon")}
                                    />
                                  )}
                                </button>
                              )}
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
              <Base.VerticalContent className={this.decorateCSS("bottom-container")}>
                <Base.ListGrid gridCount={{ pc: itemCount, tablet: 2, phone: 1 }} className={this.decorateCSS("stats")}>
                  {statItems.map((item: Stat, index: number) => (
                    <AnimatedStat key={index} item={item} />
                  ))}
                </Base.ListGrid>
              </Base.VerticalContent>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Stats4Page;
