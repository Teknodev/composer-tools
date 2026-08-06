import * as React from "react";
import { BaseStats, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./stats2.module.scss";

import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type Card = {
  icon?: TypeMediaInputValue | string;
  prefix: React.JSX.Element;
  number: React.JSX.Element;
  suffix: React.JSX.Element;
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
};

class Stats2Page extends BaseStats {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Intuition and strategy integrate the research methodology that we also apply to traditional media.",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "We combine human empathy and intelligent data to provide the <span style='font-weight: 800;'>highest level of satisfaction</span>.",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "LET'S TALK NOW", "", null, null, "Primary")],
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
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: { type: "icon", name: "IoMdArrowUp" },
            },
            { type: "string", key: "prefix", displayer: "Prefix", value: "" },
            { type: "string", key: "number", displayer: "Value", value: "8500" },
            { type: "string", key: "suffix", displayer: "Suffix", value: "" },
            { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
            { type: "string", key: "title", displayer: "Title", value: "" },
            { type: "string", key: "description", displayer: "Description", value: "Users on marketplaces we've created in 2023." },
          ],
        },
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: { type: "icon", name: "IoMdArrowUp" },
            },
            { type: "string", key: "prefix", displayer: "Prefix", value: "" },
            { type: "string", key: "number", displayer: "Value", value: "660" },
            { type: "string", key: "suffix", displayer: "Suffix", value: "" },
            { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
            { type: "string", key: "title", displayer: "Title", value: "" },
            { type: "string", key: "description", displayer: "Description", value: "Successfully finished projects with creativity." },
          ],
        },
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: { type: "icon", name: "IoMdArrowUp" },
            },
            { type: "string", key: "prefix", displayer: "Prefix", value: "" },
            { type: "string", key: "number", displayer: "Value", value: "6834" },
            { type: "string", key: "suffix", displayer: "Suffix", value: "" },
            { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
            { type: "string", key: "title", displayer: "Title", value: "" },
            { type: "string", key: "description", displayer: "Description", value: "Monthly visitors on our e-Commerce platform." },
          ],
        },
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: { type: "icon", name: "IoMdArrowUp" },
            },
            { type: "string", key: "prefix", displayer: "Prefix", value: "" },
            { type: "string", key: "number", displayer: "Value", value: "300" },
            { type: "string", key: "suffix", displayer: "Suffix", value: "" },
            { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
            { type: "string", key: "title", displayer: "Title", value: "" },
            { type: "string", key: "description", displayer: "Description", value: "Onboarding conversions growth increased." },
          ],
        },
      ],
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 2,
      max: 4,
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
      ],
    });
  }

  static getName(): string {
    return "Stats 2";
  }

  render() {
    const cards = this.castToObject<Card[]>("stats");
    const cardLength = cards.length;

    const subtitle = this.getPropValue("subtitle");
    const isSubtitleExist = this.castToString(subtitle);
    const title = this.getPropValue("title");
    const isTitleExist = this.castToString(title);
    const description = this.getPropValue("description");
    const isDescExist = this.castToString(description);

    const settings = this.castToObject<any>("settings");
    const shouldAnimate = settings?.shouldAnimate ?? true;
    const animationDuration = (settings?.animationDuration ?? 2000) as number;
    const itemCount = this.getPropValue("itemCount") ?? 2;

    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
    const visibleButtons = buttons.filter((btn) => this.castToString(btn.text) || btn.icon);

    const totalRows = Math.ceil(cards.length / itemCount);

    const mediaExists = (m?: TypeMediaInputValue | string) => (typeof m === "object" ? m?.name || m?.url : m);

    const AnimatedCard = ({ card, isFirstRow, isLastRow }: { card: Card; isFirstRow: boolean; isLastRow: boolean }) => {
      const ref = React.useRef<HTMLDivElement>(null);
      const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

      const rawNumber = (this.castToString(card.number) as string) || "";
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

      const isTextExist = this.castToString(card.description);
      const subtitleExist = this.castToString(card.subtitle);
      const titleExist = this.castToString(card.title);
      const prefixExist = this.castToString(card.prefix);
      const suffixExist = this.castToString(card.suffix);
      const iconExist = mediaExists(card.icon);
      const hasAmountRow = !!display || prefixExist || suffixExist || !!iconExist;
      const hasText = isTextExist || subtitleExist || titleExist;

      if (!hasText && !hasAmountRow) return null;

      const conditionalClasses = [isFirstRow ? this.decorateCSS("border-top-none") : "", isLastRow ? this.decorateCSS("border-bottom-none") : ""].filter(Boolean).join(" ");
      const classes = `${this.decorateCSS("listed")} ${conditionalClasses}`.trim();

      return (
        <div ref={ref} className={classes}>
          {hasText && (
            <div className={this.decorateCSS("card-text-container")}>
              {subtitleExist && <Base.P className={this.decorateCSS("card-subtitle")}>{card.subtitle}</Base.P>}
              {titleExist && <Base.H5 className={this.decorateCSS("card-title")}>{card.title}</Base.H5>}
              {isTextExist && <Base.P className={this.decorateCSS("card-text")}>{card.description}</Base.P>}
            </div>
          )}
          {hasAmountRow && (
            <div className={this.decorateCSS("card-amount-container")}>
              {prefixExist && <div className={this.decorateCSS("card-prefix")}>{card.prefix}</div>}
              {!!display && <div className={this.decorateCSS("card-amount")}>{animatable ? display : card.number}</div>}
              {suffixExist && <div className={this.decorateCSS("card-suffix")}>{card.suffix}</div>}
              {iconExist && <Base.Media value={typeof card.icon === "object" ? card.icon : { type: "icon", name: card.icon }} className={this.decorateCSS("suffix-icon")} />}
            </div>
          )}
        </div>
      );
    };

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(isSubtitleExist || isTitleExist) && (
            <Base.VerticalContent className={`${this.decorateCSS("header-wrapper")} ${cardLength <= 0 ? this.decorateCSS("full-width") : ""}`}>
              {isSubtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>}
              {isTitleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
            </Base.VerticalContent>
          )}

          <Base.ContainerGrid className={this.decorateCSS("bottom-content")}>
            {(isDescExist || visibleButtons.length > 0) && (
              <Base.VerticalContent className={`${this.decorateCSS("description-column")} ${cardLength <= 0 ? this.decorateCSS("full-width") : ""} ${!isTitleExist ? this.decorateCSS("no-title") : ""}`}>
                {isDescExist && <Base.SectionDescription className={`${this.decorateCSS("description")} ${cardLength <= 0 ? this.decorateCSS("full-width") : ""}`}>{description}</Base.SectionDescription>}

                {visibleButtons.length > 0 && (
                  <div className={this.decorateCSS("button-content")}>
                    {visibleButtons.map((btn, index) => (
                      <ComposerLink key={index} path={btn.url}>
                        <Base.Button buttonType={btn.type} className={`${this.decorateCSS("contact-button")} ${cardLength <= 0 ? this.decorateCSS("button-full-width") : ""}`}>
                          {btn.text}
                        </Base.Button>
                      </ComposerLink>
                    ))}
                  </div>
                )}
              </Base.VerticalContent>
            )}

            {cardLength > 0 && (
              <Base.ListGrid gridCount={{ pc: itemCount, tablet: 2, phone: 1 }} className={this.decorateCSS("cards-container")}>
                {cards.map((card, index) => {
                  const currentRow = Math.floor(index / itemCount) + 1;
                  return <AnimatedCard key={index} card={card} isFirstRow={currentRow === 1} isLastRow={currentRow === totalRows} />;
                })}
              </Base.ListGrid>
            )}
          </Base.ContainerGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Stats2Page;
