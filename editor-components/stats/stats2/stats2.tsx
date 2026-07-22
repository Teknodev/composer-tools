import * as React from "react";
import { BaseStats, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./stats2.module.scss";

import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type Card = {
  number: React.JSX.Element;
  description: React.JSX.Element;
  icon?: TypeMediaInputValue | string;
  secondIcon?: TypeMediaInputValue | string;
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

    this.addProp(INPUTS.BUTTON("button", "Button", "LET'S TALK NOW", "", null, null, "Primary"));

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
              key: "description",
              displayer: "Description",
              value: "Users on marketplaces we've created in 2023.",
            },
            {
              type: "string",
              key: "number",
              displayer: "Value",
              value: "8500",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: { type: "icon", name: "IoMdArrowUp" },
            },
            {
              type: "media",
              key: "secondIcon",
              displayer: "Icon After Amount",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: { type: "icon", name: "FaPlus" },
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
              key: "description",
              displayer: "Description",
              value: "Successfully finished projects with creativity.",
            },
            {
              type: "string",
              key: "number",
              displayer: "Value",
              value: "660",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: { type: "icon", name: "IoMdArrowUp" },
            },
            {
              type: "media",
              key: "secondIcon",
              displayer: "Icon After Amount",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: { type: "icon", name: "FaPlus" },
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
              key: "description",
              displayer: "Description",
              value: "Monthly visitors on our e-Commerce platform.",
            },
            {
              type: "string",
              key: "number",
              displayer: "Value",
              value: "6834",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: { type: "icon", name: "IoMdArrowUp" },
            },
            {
              type: "media",
              key: "secondIcon",
              displayer: "Icon After Amount",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: { type: "icon", name: "FaPlus" },
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
              key: "description",
              displayer: "Description",
              value: "Onboarding conversions growth increased.",
            },
            {
              type: "string",
              key: "number",
              displayer: "Value",
              value: "300",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: { type: "icon", name: "IoMdArrowUp" },
            },
            {
              type: "media",
              key: "secondIcon",
              displayer: "Icon After Amount",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: { type: "icon", name: "FaPlus" },
            },
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

    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");
    const isButtonTextExist = this.castToString(button.text);

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
      const iconExist = mediaExists(card.icon);
      const secondIconExist = mediaExists(card.secondIcon);
      const hasAmountRow = !!display || !!iconExist || !!secondIconExist;

      if (!isTextExist && !hasAmountRow) return null;

      const conditionalClasses = [isFirstRow ? this.decorateCSS("border-top-none") : "", isLastRow ? this.decorateCSS("border-bottom-none") : ""].filter(Boolean).join(" ");
      const classes = `${this.decorateCSS("listed")} ${conditionalClasses}`.trim();

      return (
        <div ref={ref} className={classes}>
          {isTextExist && <Base.P className={this.decorateCSS("card-text")}>{card.description}</Base.P>}
          {hasAmountRow && (
            <div className={this.decorateCSS("card-amount-container")}>
              {iconExist && <Base.Media value={typeof card.icon === "object" ? card.icon : { type: "icon", name: card.icon }} className={this.decorateCSS("card-icon")} />}
              {!!display && <div className={this.decorateCSS("card-amount")}>{display}</div>}
              {secondIconExist && <Base.Media value={typeof card.secondIcon === "object" ? card.secondIcon : { type: "icon", name: card.secondIcon }} className={this.decorateCSS("card-icon-after")} />}
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
            {(isDescExist || isButtonTextExist) && (
              <Base.VerticalContent className={`${this.decorateCSS("description-column")} ${cardLength <= 0 ? this.decorateCSS("full-width") : ""} ${!isTitleExist ? this.decorateCSS("no-title") : ""}`}>
                {isDescExist && <Base.SectionDescription className={`${this.decorateCSS("description")} ${cardLength <= 0 ? this.decorateCSS("full-width") : ""}`}>{description}</Base.SectionDescription>}

                {isButtonTextExist && (
                  <div className={this.decorateCSS("button-content")}>
                    <ComposerLink path={button.url}>
                      <Base.Button buttonType={button.type} className={`${this.decorateCSS("contact-button")} ${cardLength <= 0 ? this.decorateCSS("button-full-width") : ""}`}>
                        {button.text}
                      </Base.Button>
                    </ComposerLink>
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
