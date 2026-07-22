import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats16.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type StatItem = {
  subtitle: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  number: string;
  prefix: string;
  prefixElement: JSX.Element;
  suffix: string;
  suffixElement: JSX.Element;
};

class Stats16 extends BaseStats {
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
      value: "Trusted by developers from over 80 countries",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
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
            { type: "string", key: "prefix", displayer: "Prefix", value: "" },
            { type: "string", key: "number", displayer: "Value", value: "100" },
            { type: "string", key: "suffix", displayer: "Suffix", value: "%" },
            { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
            { type: "string", key: "title", displayer: "Title", value: "Satisfaction" },
            { type: "string", key: "description", displayer: "Description", value: "" },
          ],
        },
        {
          type: "object",
          key: "statItem",
          displayer: "Stat Item",
          value: [
            { type: "string", key: "prefix", displayer: "Prefix", value: "" },
            { type: "string", key: "number", displayer: "Value", value: "75" },
            { type: "string", key: "suffix", displayer: "Suffix", value: "K" },
            { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
            { type: "string", key: "title", displayer: "Title", value: "Happy Users" },
            { type: "string", key: "description", displayer: "Description", value: "" },
          ],
        },
        {
          type: "object",
          key: "statItem",
          displayer: "Stat Item",
          value: [
            { type: "string", key: "prefix", displayer: "Prefix", value: "" },
            { type: "string", key: "number", displayer: "Value", value: "125" },
            { type: "string", key: "suffix", displayer: "Suffix", value: "k+" },
            { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
            { type: "string", key: "title", displayer: "Title", value: "Downloads" },
            { type: "string", key: "description", displayer: "Description", value: "" },
          ],
        },
      ],
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 3,
      max: 6,
    });
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "", "", null, null, "White"),
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
    return "Stats 16";
  }

  render() {
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const statItemsProp = this.getPropValue("statItems");
    const statItems: StatItem[] = statItemsProp.map((item: any) => {
      const subtitle = item.getPropValue("subtitle");
      const itemTitle = item.getPropValue("title");
      const itemDescription = item.getPropValue("description");
      const number = this.castToString(item.getPropValue("number")) || "0";
      const prefix = this.castToString(item.getPropValue("prefix")) || "";
      const suffix = this.castToString(item.getPropValue("suffix")) || "";
      return { subtitle, title: itemTitle, description: itemDescription, number, prefix, prefixElement: item.getPropValue("prefix"), suffix, suffixElement: item.getPropValue("suffix") };
    });

    const settings = this.castToObject<any>("settings");
    const shouldAnimate = settings?.shouldAnimate ?? true;
    const animationDuration = (settings?.animationDuration ?? 2000) as number;
    const itemCount = this.getPropValue("itemCount") ?? 3;

    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const hasValidButtons = buttons.some((btn) => this.castToString(btn.text));
    const hasHeader = subtitle || title || description;

    const AnimatedStat = ({ stat }: { stat: StatItem }) => {
      const ref = React.useRef<HTMLDivElement>(null);
      const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

      const rawNumber = (this.castToString(stat.number) as string) || "";
      const numPrefix = rawNumber.match(/^[^\d]*/)?.[0] ?? "";
      const numSuffix = rawNumber.match(/[^\d]*$/)?.[0] ?? "";
      const core = rawNumber.slice(numPrefix.length, rawNumber.length - numSuffix.length);
      const isNumeric = /\d/.test(core);
      const target = isNumeric ? parseFloat(core.replace(/,/g, "")) : NaN;
      const decimals = core.includes(".") ? core.split(".")[1]?.length ?? 0 : 0;
      const useGrouping = /,/.test(core);
      const reduceMotion = typeof window !== "undefined" && !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
      const animatable = shouldAnimate && isNumeric && !reduceMotion;

      const format = (n: number) => numPrefix + n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals, useGrouping }) + numSuffix;

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

      const hasSubtitle = stat.subtitle && this.castToString(stat.subtitle);
      const hasTitle = stat.title && this.castToString(stat.title);
      const hasDescription = stat.description && this.castToString(stat.description);
      const hasPrefix = stat.prefix && stat.prefix.trim() !== "";
      const hasSuffix = stat.suffix && stat.suffix.trim() !== "";
      const hasNumber = !!display || hasPrefix || hasSuffix;

      if (!hasNumber && !hasTitle) return null;

      return (
        <div ref={ref} className={this.decorateCSS("card")}>
          {hasNumber && (
            <div className={this.decorateCSS("stat-value")}>
              {hasPrefix && (
                <span className={this.decorateCSS("stat-prefix")}>
                  {stat.prefixElement}
                </span>
              )}
              {!!display && (
                <span className={this.decorateCSS("stat-number")}>
                  {display}
                </span>
              )}
              {hasSuffix && (
                <span className={this.decorateCSS("stat-suffix")}>
                  {stat.suffixElement}
                </span>
              )}
            </div>
          )}
          {(hasSubtitle || hasTitle || hasDescription) && (
            <Base.VerticalContent className={this.decorateCSS("stat-content")}>
              {hasSubtitle && (
                <Base.P className={this.decorateCSS("stat-subtitle")}>
                  {stat.subtitle}
                </Base.P>
              )}
              {hasTitle && (
                <Base.H6 className={this.decorateCSS("stat-title")}>
                  {stat.title}
                </Base.H6>
              )}
              {hasDescription && (
                <Base.P className={this.decorateCSS("stat-description")}>
                  {stat.description}
                </Base.P>
              )}
            </Base.VerticalContent>
          )}
        </div>
      );
    };

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {hasHeader && (
            <Base.VerticalContent className={this.decorateCSS("header")}>
              {subtitle && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {this.getPropValue("subtitle")}
                </Base.SectionSubTitle>
              )}
              {title && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {this.getPropValue("title")}
                </Base.SectionTitle>
              )}
              {description && (
                <Base.SectionDescription
                  className={this.decorateCSS("description")}
                >
                  {this.getPropValue("description")}
                </Base.SectionDescription>
              )}
            </Base.VerticalContent>
          )}
          <Base.VerticalContent className={this.decorateCSS("bottom")}>
            {statItems.length > 0 && (
              <Base.ListGrid
                gridCount={{ pc: itemCount, tablet: 3, phone: 1 }}
                className={this.decorateCSS("stats-grid")}
              >
                {statItems.map((item, index) => (
                  <AnimatedStat key={index} stat={item} />
                ))}
              </Base.ListGrid>
            )}
            {hasValidButtons && (
              <div className={this.decorateCSS("button-container")}>
                {buttons.map((item: INPUTS.CastedButton, index: number) =>
                  this.castToString(item.text) && (
                    <ComposerLink key={`stats17-btn-${index}`} path={item.url}>
                      <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                        <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                      </Base.Button>
                    </ComposerLink>
                  )
                )}
              </div>
            )}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Stats16;
