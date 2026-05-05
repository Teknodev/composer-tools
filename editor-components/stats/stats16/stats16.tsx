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
  suffix: string;
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
      additionalParams: { maxElementCount: 6 },
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
      type: "object",
      key: "numberAnimation",
      displayer: "Animation",
      value: [
        {
          type: "boolean",
          key: "enabled",
          displayer: "Stats Animation",
          value: true,
        },
        {
          type: "number",
          key: "duration",
          displayer: "Animation Duration (ms)",
          value: 2000,
        },
      ],
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
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 3,
      max: 6,
    });
  }

  static getName(): string {
    return "Stats 16";
  }

  private AnimatedStat = ({
    stat,
    animationEnabled = true,
    animationDuration = 2000,
  }: {
    stat: StatItem;
    animationEnabled?: boolean;
    animationDuration?: number;
  }) => {
    const cleanNumber = (stat.number || "0").replace(/[^\d.]/g, "");
    const targetNumber = parseFloat(cleanNumber) || 0;
    const [animatedNumber, setAnimatedNumber] = React.useState<string>("0");
    const ref = React.useRef<HTMLDivElement>(null);
    const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

    React.useEffect(() => {
      if (!animationEnabled) {
        setAnimatedNumber(String(targetNumber));
        return;
      }
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateValue();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }, [targetNumber, animationDuration, animationEnabled]);

    const animateValue = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      const steps = animationDuration / 30;
      let currentNumber = 0;
      const increment = targetNumber / steps;

      intervalRef.current = setInterval(() => {
        currentNumber += increment;

        if (currentNumber >= targetNumber) {
          currentNumber = targetNumber;
          if (intervalRef.current) clearInterval(intervalRef.current);
        }

        setAnimatedNumber(Math.floor(currentNumber).toString());
      }, 30);
    };

    const hasSubtitle = stat.subtitle && this.castToString(stat.subtitle);
    const hasTitle = stat.title && this.castToString(stat.title);
    const hasDescription = stat.description && this.castToString(stat.description);
    const hasPrefix = stat.prefix && stat.prefix.trim() !== "";
    const hasSuffix = stat.suffix && stat.suffix.trim() !== "";
    const hasNumber = targetNumber !== 0 || hasPrefix || hasSuffix;

    if (!hasNumber && !hasTitle) return null;

    return (
      <div ref={ref} className={this.decorateCSS("card")}>
        {hasNumber && (
          <div className={this.decorateCSS("stat-value")}>
            {hasPrefix && (
              <span className={this.decorateCSS("stat-prefix")}>
                {stat.prefix}
              </span>
            )}
            <span className={this.decorateCSS("stat-number")}>
              {animatedNumber}
            </span>
            {hasSuffix && (
              <span className={this.decorateCSS("stat-suffix")}>
                {stat.suffix}
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
      return { subtitle, title: itemTitle, description: itemDescription, number, prefix, suffix };
    });
    const animationProps = this.castToObject<{ enabled: boolean; duration: number }>("numberAnimation");
    const animationEnabled = animationProps?.enabled ?? true;
    const animationDuration = animationProps?.duration || 2000;
    const itemCount = this.getPropValue("itemCount");
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const hasHeader = subtitle || title || description;

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
                {statItems.map((item, index) => {
                  const hasTitle = this.castToString(item.title);
                  const hasPrefix = item.prefix && item.prefix.trim() !== "";
                  const hasSuffix = item.suffix && item.suffix.trim() !== "";
                  const hasNumber = (parseFloat(item.number) || 0) !== 0 || hasPrefix || hasSuffix;
                  if (!hasNumber && !hasTitle) return null;
                  return (
                    <this.AnimatedStat
                      key={index}
                      stat={item}
                      animationEnabled={animationEnabled}
                      animationDuration={animationDuration}
                    />
                  );
                })}
              </Base.ListGrid>
            )}
            {buttons.length > 0 && (
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
