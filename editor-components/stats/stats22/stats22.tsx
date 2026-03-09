import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats22.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type StatItem = {
  subtitle: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  number: string;
  prefix: string;
  suffix: string;
};

class Stats22 extends BaseStats {
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
      value: "Achieve Your Goals With Us",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
    });
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "ABOUT US", "", null, null, "Black"),
      ],
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
            { type: "string", key: "number", displayer: "Value", value: "350" },
            { type: "string", key: "suffix", displayer: "Suffix", value: "+" },
            { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
            { type: "string", key: "title", displayer: "Title", value: "Awesome Projects" },
            { type: "string", key: "description", displayer: "Description", value: "" },
          ],
        },
        {
          type: "object",
          key: "statItem",
          displayer: "Stat Item",
          value: [
            { type: "string", key: "prefix", displayer: "Prefix", value: "" },
            { type: "string", key: "number", displayer: "Value", value: "90" },
            { type: "string", key: "suffix", displayer: "Suffix", value: "+" },
            { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
            { type: "string", key: "title", displayer: "Title", value: "Satisfied Clients" },
            { type: "string", key: "description", displayer: "Description", value: "" },
          ],
        },
        {
          type: "object",
          key: "statItem",
          displayer: "Stat Item",
          value: [
            { type: "string", key: "prefix", displayer: "Prefix", value: "" },
            { type: "string", key: "number", displayer: "Value", value: "5" },
            { type: "string", key: "suffix", displayer: "Suffix", value: "+" },
            { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
            { type: "string", key: "title", displayer: "Title", value: "Years Experience" },
            { type: "string", key: "description", displayer: "Description", value: "" },
          ],
        },
      ],
    });
    this.addProp({
      type: "object",
      key: "animation",
      displayer: "Animation",
      value: [
        { type: "boolean", key: "statsAnimation", displayer: "Number Animation", value: true },
        { type: "number", key: "animationDuration", displayer: "Number Animation Duration (ms)", value: 2000 },
      ],
    });
    this.addProp({
      type: "number",
      key: "itemCountInRow",
      displayer: "Item Count in a Row",
      value: 3,
      max: 6,
    });
  }

  static getName(): string {
    return "Stats 22";
  }

  private AnimatedStat = ({
    stat,
    animationDuration = 2000,
    statsAnimation,
  }: {
    stat: StatItem;
    animationDuration?: number;
    statsAnimation: boolean;
  }) => {
    const cleanNumber = String(stat.number || "0").replace(/[^\d.]/g, "");
    const targetNumber = parseFloat(cleanNumber) || 0;
    const [animatedNumber, setAnimatedNumber] = React.useState<string>(statsAnimation ? "0" : Math.floor(targetNumber).toString());
    const ref = React.useRef<HTMLDivElement>(null);
    const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

    React.useEffect(() => {
      if (!statsAnimation) {
        setAnimatedNumber(Math.floor(targetNumber).toString());
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
    }, [targetNumber, animationDuration, statsAnimation]);

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
          <Base.VerticalContent className={this.decorateCSS("stat-vertical-content")}>
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
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const animationProps = this.castToObject<{ statsAnimation: boolean; animationDuration: number }>("animation");
    const statsAnimation = !!animationProps?.statsAnimation;
    const animationDuration = animationProps?.animationDuration || 2000;
    const statItemsProp = this.getPropValue("statItems");
    const statItems: StatItem[] = statItemsProp.map((item: any) => {
      const subtitle = item.getPropValue("subtitle");
      const itemTitle = item.getPropValue("title");
      const itemDescription = item.getPropValue("description");
      const number = String(this.castToString(item.getPropValue("number")) || "0");
      const prefix = String(this.castToString(item.getPropValue("prefix")) || "");
      const suffix = String(this.castToString(item.getPropValue("suffix")) || "");
      return { subtitle, title: itemTitle, description: itemDescription, number, prefix, suffix };
    });

    const visibleStatItems = statItems.filter((item) => {
      const hasTitle = this.castToString(item.title);
      const hasPrefix = item.prefix && item.prefix.trim() !== "";
      const hasSuffix = item.suffix && item.suffix.trim() !== "";
      const hasNumber = (parseFloat(item.number) || 0) !== 0 || hasPrefix || hasSuffix;
      return hasNumber || hasTitle;
    });

    const hasValidButtons = buttons.some((btn) => this.castToString(btn.text));
    const itemCountInRow = this.getPropValue("itemCountInRow") ?? 3;
    const hasLeft = subtitle || title || hasValidButtons;
    const hasRight = description || visibleStatItems.length > 0;
    const alignment = Base.getContentAlignment() || "left";

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={`${this.decorateCSS("content-wrapper")} ${alignment === "center" ? this.decorateCSS("alignment-center") : ""}`}>
            {hasLeft && (
              <Base.VerticalContent className={this.decorateCSS("left")}>
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
                {hasValidButtons && (
                  <div className={this.decorateCSS("button-container")}>
                    {buttons.map((button: INPUTS.CastedButton, index: number) =>
                      this.castToString(button.text) && (
                        <ComposerLink key={`stats22-btn-${index}`} path={button.url}>
                          <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                            <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                          </Base.Button>
                        </ComposerLink>
                      )
                    )}
                  </div>
                )}
              </Base.VerticalContent>
            )}
            {hasRight && (
              <Base.VerticalContent className={this.decorateCSS("right")}>
                {description && (
                  <Base.SectionDescription className={this.decorateCSS("description")}>
                    {this.getPropValue("description")}
                  </Base.SectionDescription>
                )}
                {visibleStatItems.length > 0 && (
                  <Base.ListGrid
                    gridCount={{ pc: itemCountInRow, tablet: 3, phone: 1 }}
                    className={this.decorateCSS("stats-grid")}
                  >
                    {visibleStatItems.map((item, index) => (
                      <this.AnimatedStat
                        key={index}
                        stat={item}
                        animationDuration={animationDuration}
                        statsAnimation={statsAnimation}
                      />
                    ))}
                  </Base.ListGrid>
                )}
              </Base.VerticalContent>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Stats22;
