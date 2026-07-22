import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats29.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "../../../custom-hooks/input-templates";

type StatItem = {
  prefix: string;
  prefixElement: JSX.Element;
  number: string;
  numberElement: JSX.Element;
  suffix: string;
  suffixElement: JSX.Element;
  subtitle: string;
  subtitleElement: JSX.Element;
  title: string;
  titleElement: JSX.Element;
  description: string;
  descriptionElement: JSX.Element;
};

class Stats29 extends BaseStats {
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
      value: "The course provides practice of design of digital products",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });


    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
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
            { type: "string", key: "prefix", displayer: "Prefix", value: "" },
            { type: "string", key: "number", displayer: "Value", value: "50" },
            { type: "string", key: "suffix", displayer: "Suffix", value: "%" },
            { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
            { type: "string", key: "title", displayer: "Title", value: "OF BUYERS" },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "bring to the table win-win survival strategies to ensure proactive domination. At the end of the day a new normal generation.",
            },
          ],
        },
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            { type: "string", key: "prefix", displayer: "Prefix", value: "" },
            { type: "string", key: "number", displayer: "Value", value: "85" },
            { type: "string", key: "suffix", displayer: "Suffix", value: "%" },
            { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
            { type: "string", key: "title", displayer: "Title", value: "OF BUYERS" },

            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "bring to the table win-win survival strategies to ensure proactive domination. At the end of the day a new normal generation.",
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
      max: 9,
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
    return "Stats 29";
  }

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const buttons: INPUTS.CastedButton[] = this.castToObject<INPUTS.CastedButton[]>("buttons");

    const isSubtitleExist = this.castToString(subtitle);
    const isTitleExist = this.castToString(title);
    const isDescriptionExist = this.castToString(description);
    const hasValidButtons = buttons.some((btn) => this.castToString(btn.text));
    const hasHeader = !!(isSubtitleExist || isTitleExist || isDescriptionExist || hasValidButtons);

    const statsItems = this.castToObject<StatItem[]>("stats");
    const stats: StatItem[] = statsItems.map((item: any) => {
      const prefix = this.castToString(item.prefix) || "";
      const number = this.castToString(item.number) || "";
      const suffix = this.castToString(item.suffix) || "";
      const subtitle = this.castToString(item.subtitle) || "";
      const title = this.castToString(item.title) || "";
      const description = this.castToString(item.description) || "";
      return { prefix, prefixElement: item.prefix, number, numberElement: item.number, suffix, suffixElement: item.suffix, subtitle, subtitleElement: item.subtitle, title, titleElement: item.title, description, descriptionElement: item.description };
    });

    const settings = this.castToObject<any>("settings");
    const shouldAnimate = settings?.shouldAnimate ?? true;
    const animationDuration = (settings?.animationDuration ?? 2000) as number;
    const itemCountInRow = this.getPropValue("itemCount") ?? 2;

    const alignment = Base.getContentAlignment();

    const AnimatedStat = ({ stat }: { stat: StatItem }) => {
      const ref = React.useRef<HTMLSpanElement>(null);
      const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

      const rawNumber = (this.castToString(stat.number) as string) || "";
      const innerPrefix = rawNumber.match(/^[^\d]*/)?.[0] ?? "";
      const innerSuffix = rawNumber.match(/[^\d]*$/)?.[0] ?? "";
      const core = rawNumber.slice(innerPrefix.length, rawNumber.length - innerSuffix.length);
      const isNumeric = /\d/.test(core);
      const target = isNumeric ? parseFloat(core.replace(/,/g, "")) : NaN;
      const decimals = core.includes(".") ? core.split(".")[1]?.length ?? 0 : 0;
      const useGrouping = /,/.test(core);
      const reduceMotion = typeof window !== "undefined" && !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
      const animatable = shouldAnimate && isNumeric && !reduceMotion;

      const format = (n: number) => innerPrefix + n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals, useGrouping }) + innerSuffix;

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

      const subtitleExist = this.castToString(stat.subtitle);
      const titleExist = this.castToString(stat.title);
      const descriptionExist = this.castToString(stat.description);
      const valueExist = this.castToString(stat.number);
      const prefixExist = this.castToString(stat.prefixElement);
      const suffixExist = this.castToString(stat.suffixElement);

      if (!valueExist && !suffixExist && !prefixExist && !subtitleExist && !titleExist && !descriptionExist) return null;

      return (
        <Base.VerticalContent className={this.decorateCSS("stat-item")}>
          {(valueExist || prefixExist || suffixExist) && (
            <span ref={ref} className={this.decorateCSS("stat-value")}>
              {prefixExist && (
                <span className={this.decorateCSS("stat-prefix")}>
                  {stat.prefixElement}
                </span>
              )}
              {valueExist && (
                <span className={this.decorateCSS("stat-number")}>
                  {display}
                </span>
              )}
              {suffixExist && (
                <span className={this.decorateCSS("stat-suffix")}>
                  {stat.suffixElement}
                </span>
              )}
            </span>
          )}
          {subtitleExist && (
            <Base.H4 className={this.decorateCSS("stat-subtitle")}>
              {stat.subtitleElement}
            </Base.H4>
          )}
          {titleExist && (
            <Base.H3 className={this.decorateCSS("stat-title")}>
              {stat.titleElement}
            </Base.H3>
          )}
          {descriptionExist && (
            <Base.P className={this.decorateCSS("stat-description")}>
              {stat.descriptionElement}
            </Base.P>
          )}
        </Base.VerticalContent>
      );
    };

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("card")}>
            <div className={`${this.decorateCSS("card-content")} ${alignment === "center" ? this.decorateCSS("center-alignment") : ""}`}>
              {hasHeader && (
                <div className={this.decorateCSS("header-container")}>
                  <Base.VerticalContent className={this.decorateCSS("header-content")}>
                    {isSubtitleExist && (
                      <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                        {this.getPropValue("subtitle")}
                      </Base.SectionSubTitle>
                    )}
                    {isTitleExist && (
                      <Base.SectionTitle className={this.decorateCSS("title")}>
                        {this.getPropValue("title")}
                      </Base.SectionTitle>
                    )}
                    {isDescriptionExist && (
                      <Base.SectionDescription className={this.decorateCSS("description")}>
                        {this.getPropValue("description")}
                      </Base.SectionDescription>
                    )}
                    {hasValidButtons && (
                      <div className={this.decorateCSS("button-container")}>
                        {buttons.map((button: INPUTS.CastedButton, index: number) => {
                          const buttonText = this.castToString(button.text);
                          return !!buttonText && (
                            <ComposerLink key={index} path={button.url}>
                              <Base.Button
                                buttonType={button.type}
                                className={this.decorateCSS("button")}
                              >
                                <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                              </Base.Button>
                            </ComposerLink>
                          );
                        })}
                      </div>
                    )}
                  </Base.VerticalContent>
                </div>
              )}

              {stats?.length > 0 && (
                <Base.ListGrid
                  gridCount={{ pc: itemCountInRow, tablet: 2, phone: 1 }}
                  className={this.decorateCSS("stats-grid")}
                >
                  {stats.map((stat: StatItem, index: number) => (
                    <AnimatedStat key={index} stat={stat} />
                  ))}
                </Base.ListGrid>
              )}
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Stats29;
