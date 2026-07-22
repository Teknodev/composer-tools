import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats5.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "../../../custom-hooks/input-templates";

type Card = {
  number: React.JSX.Element;
  description: React.JSX.Element;
};

class Stats5Page extends BaseStats {
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
      value: "",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
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
              key: "number",
              displayer: "Value",
              value: "98",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Services",
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
              key: "number",
              displayer: "Value",
              value: "65",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Technicians",
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
              key: "number",
              displayer: "Value",
              value: "7",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Days a Week",
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
              key: "number",
              displayer: "Value",
              value: "10",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Offices",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 4,
      max: 4,
    });

    this.addProp({
      type: "boolean",
      key: "lines",
      displayer: "Line",
      value: true,
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

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "",
      value: [
        INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
      ],
    });
  }

  static getName(): string {
    return "Stats 5";
  }

  getCardClasses(index: number, itemCountInRow: number) {
    const totalCards = this.castToObject<Card[]>("stats").length;
    const isLastInRow = (index + 1) % itemCountInRow === 0 || index === totalCards - 1;

    return !isLastInRow && this.getPropValue("lines") ? this.decorateCSS("stick") : "";
  }

  render() {
    const cards = this.castToObject<Card[]>("stats");

    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");

    const isSubtitleExist = this.castToString(subtitle);
    const isTitleExist = this.castToString(title);
    const isDescriptionExist = this.castToString(description);

    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
    const visibleButtons = buttons.filter(btn => this.castToString(btn.text));

    const settings = this.castToObject<any>("settings");
    const shouldAnimate = settings?.shouldAnimate ?? true;
    const animationDuration = (settings?.animationDuration ?? 2000) as number;
    const itemCountInRow = this.getPropValue("itemCount") ?? 4;

    const AnimatedCard = ({ card, className }: { card: Card; className: string }) => {
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

      if (!isTextExist && !rawNumber) return null;

      return (
        <div ref={ref} className={className}>
          {!!display && <Base.SectionTitle className={this.decorateCSS("card-data-title")}>{display}</Base.SectionTitle>}
          {isTextExist && <Base.SectionDescription className={this.decorateCSS("card-data-description")}>{card.description}</Base.SectionDescription>}
        </div>
      );
    };

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(isSubtitleExist || isTitleExist || isDescriptionExist || visibleButtons.length > 0) && (
            <Base.VerticalContent className={this.decorateCSS("header-wrapper")}>
              {isSubtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>}
              {isTitleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
              {isDescriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>}
              {visibleButtons.length > 0 && (
                <div className={this.decorateCSS("button-container")}>
                  {visibleButtons.map((btn, index) => (
                    <ComposerLink key={index} path={btn.url}>
                      <Base.Button buttonType={btn.type} className={this.decorateCSS("button-text-wrapper")}>
                        {btn.text}
                      </Base.Button>
                    </ComposerLink>
                  ))}
                </div>
              )}
            </Base.VerticalContent>
          )}
          {cards?.length > 0 && (
            <Base.ListGrid gridCount={{ pc: itemCountInRow, tablet: 2, phone: 1 }} className={this.decorateCSS("bottom-child")}>
              {cards.map((item: Card, index: number) => {
                const classes = `${this.decorateCSS("card")} ${this.getCardClasses(index, itemCountInRow)}`.trim();
                return <AnimatedCard key={index} card={item} className={classes} />;
              })}
            </Base.ListGrid>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Stats5Page;
