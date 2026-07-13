import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats1.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "../../../custom-hooks/input-templates";

type CardData = {
  number: React.JSX.Element;
  description: React.JSX.Element;
};

class Stats1Page extends BaseStats {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "WE CREATED SPECIAL SITE WHERE YOU CAN GET",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Best reviews, media, video, Comparison and News",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Health and wellness are important aspects that many of us spend alot of time thinking about. Many people think of health and wellnessand think only of diet and exercise",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Register Now", "", null, null, "Primary"),
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
              value: "1002",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Active Users",
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
              value: "2999",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Articles",
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
              value: "97",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Authors",
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
      ],
    });
  }

  static getName(): string {
    return "Stats 1";
  }

  render() {
    const title = this.getPropValue("title");
    const isTitleExist = this.castToString(title);
    const subtitle = this.getPropValue("subtitle");
    const isSubtitleExist = this.castToString(subtitle);
    const description = this.getPropValue("description");
    const isDescExist = this.castToString(description);
    const cardList = this.castToObject<CardData[]>("stats");

    const settings = this.castToObject<any>("settings");
    const shouldAnimate = settings?.shouldAnimate ?? true;
    const animationDuration = (settings?.animationDuration ?? 2000) as number;

    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
    const visibleButtons = buttons.filter(btn => this.castToString(btn.text));
    const hasVisibleButtons = visibleButtons.length > 0;

    const badgeColors = ["var(--composer-primary-color)", "var(--composer-secondary-color)", "var(--composer-tertiary-color)"];

    const AnimatedNumber = ({ value, className, style }: { value: string; className: string; style?: React.CSSProperties }) => {
      const ref = React.useRef<HTMLSpanElement>(null);
      const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

      const prefix = value.match(/^[^\d]*/)?.[0] ?? "";
      const suffix = value.match(/[^\d]*$/)?.[0] ?? "";
      const core = value.slice(prefix.length, value.length - suffix.length);
      const isNumeric = /\d/.test(core);
      const target = isNumeric ? parseFloat(core.replace(/,/g, "")) : NaN;
      const decimals = core.includes(".") ? core.split(".")[1]?.length ?? 0 : 0;
      const useGrouping = /,/.test(core);
      const reduceMotion = typeof window !== "undefined" && !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
      const animatable = shouldAnimate && isNumeric && !reduceMotion;

      const format = (n: number) => prefix + n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals, useGrouping }) + suffix;

      const [display, setDisplay] = React.useState<string>(() => (animatable ? format(0) : value));

      React.useEffect(() => {
        if (!animatable) {
          setDisplay(value);
          return;
        }
        const node = ref.current;
        if (!node || typeof IntersectionObserver === "undefined") {
          setDisplay(value);
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
              setDisplay(value);
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
      }, [value, animatable, animationDuration, target]);

      return (
        <span ref={ref} className={className} style={style}>
          {display}
        </span>
      );
    };

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("stats1-page")}>
            {(isSubtitleExist || isTitleExist || isDescExist || hasVisibleButtons) && (
              <Base.VerticalContent className={this.decorateCSS("left-container")}>
                {isSubtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>}
                {isTitleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
                {isDescExist && <Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>}
                {hasVisibleButtons && (
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
              <div className={this.decorateCSS("right-container")}>
                <div className={this.decorateCSS("content-div")}>
                  {[...Array(5)].map((_, index) => (
                    <div key={index} className={this.decorateCSS("content-item")} style={{ transform: `scale(${1 - index * 0.2})` }}></div>
                  ))}

                  {cardList.map((cardData: CardData, indexCard: number) => {
                    const angle = (indexCard / cardList.length) * 360;
                    const numberStr = (this.castToString(cardData.number) as string) || "";
                    const isCardLabelExist = this.castToString(cardData.description);

                    if (!numberStr && !isCardLabelExist) return null;

                    const color = badgeColors[indexCard % badgeColors.length];

                    return (
                      <div key={indexCard} className={this.decorateCSS("card")} style={{ "--angle": `${angle}deg` } as Record<string, any>}>
                        {!!numberStr && (
                          <Base.H5 className={this.decorateCSS("counter-value")}>
                            <AnimatedNumber value={numberStr} className={this.decorateCSS("counter-value-inner")} style={{ color }} />
                          </Base.H5>
                        )}
                        {isCardLabelExist && <Base.P className={this.decorateCSS("counter-label")}>{cardData.description}</Base.P>}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Stats1Page;
