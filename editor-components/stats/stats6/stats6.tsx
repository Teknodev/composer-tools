import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats6.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "../../../custom-hooks/input-templates";

type CardData = {
  number: React.JSX.Element;
  description: React.JSX.Element;
};

class Stats6Page extends BaseStats {
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
      value: "Our Achievements",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Far far away.behind the word mountains, far from the countries Vokalia and Consanantia, there live the blind texts. Seperated they live in",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "",
      value: [
        INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
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
              key: "number",
              displayer: "Value",
              value: "400",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Customers are satisfied with our professional support",
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
              value: "1000",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Amazing preset options to be mixed an combined",
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
              value: "8000",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Average response time on live chat support channel",
            },
          ],
        },
      ],
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
          value: 3,
          max: 4,
        },
      ],
    });
  }

  static getName(): string {
    return "Stats 6";
  }

  render() {
    const cardList = this.castToObject<CardData[]>("stats");

    const subtitle = this.getPropValue("subtitle");
    const subtitleExist = this.castToString(subtitle);
    const title = this.getPropValue("title");
    const titleExist = this.castToString(title);
    const description = this.getPropValue("description");
    const descriptionExist = this.castToString(description);

    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
    const visibleButtons = buttons.filter(btn => this.castToString(btn.text));

    const shouldAnimate = this.castToObject<any>("settings")?.shouldAnimate ?? true;
    const animationDuration = (this.castToObject<any>("settings")?.animationDuration ?? 2000) as number;
    const itemCount = this.castToObject<any>("settings")?.itemCount ?? 3;

    const AnimatedCard = ({ card }: { card: CardData }) => {
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

      const isDescExist = this.castToString(card.description);

      if (!display && !isDescExist) return null;

      return (
        <div ref={ref} className={this.decorateCSS("card")}>
          <Base.VerticalContent className={this.decorateCSS("card-content")}>
            {!!display && <Base.P className={this.decorateCSS("data-card-title")}>{display}</Base.P>}
            {isDescExist && <Base.P className={this.decorateCSS("data-card-description")}>{card.description}</Base.P>}
          </Base.VerticalContent>
        </div>
      );
    };

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(titleExist || descriptionExist || subtitleExist || visibleButtons.length > 0) && (
            <Base.VerticalContent className={this.decorateCSS("banner")}>
              {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>}
              {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
              {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>}
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
          {cardList.length > 0 && (
            <Base.ListGrid gridCount={{ pc: itemCount, tablet: 2, phone: 1 }} className={this.decorateCSS("stats6-page")}>
              {cardList.map((data: CardData, index: number) => {
                return <AnimatedCard key={index} card={data} />;
              })}
            </Base.ListGrid>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Stats6Page;
