import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats22.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type StatItem = {
  number: number;
  suffix: string;
  label: React.ReactNode;
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
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 3,
      max: 6,
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
            { type: "number", key: "number", displayer: "Number", value: 350 },
            { type: "string", key: "suffix", displayer: "Suffix", value: "+" },
            { type: "string", key: "label", displayer: "Label", value: "Awesome Projects" },
          ],
        },
        {
          type: "object",
          key: "statItem",
          displayer: "Stat Item",
          value: [
            { type: "number", key: "number", displayer: "Number", value: 90 },
            { type: "string", key: "suffix", displayer: "Suffix", value: "+" },
            { type: "string", key: "label", displayer: "Label", value: "Satisfied Clients" },
          ],
        },
        {
          type: "object",
          key: "statItem",
          displayer: "Stat Item",
          value: [
            { type: "number", key: "number", displayer: "Number", value: 5 },
            { type: "string", key: "suffix", displayer: "Suffix", value: "+" },
            { type: "string", key: "label", displayer: "Label", value: "Years Experience" },
          ],
        },
      ],
    });
    this.addProp({
      type: "number",
      key: "animationDuration",
      displayer: "Number Animation Duration (ms)",
      value: 2000,
    });
  }

  static getName(): string {
    return "Stats 22";
  }

  private AnimatedStat = ({
    stat,
    animationDuration = 2000,
  }: {
    stat: StatItem;
    animationDuration?: number;
  }) => {
    const targetNumber = stat.number || 0;
    const [animatedNumber, setAnimatedNumber] = React.useState<string>("0");
    const ref = React.useRef<HTMLDivElement>(null);
    const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

    React.useEffect(() => {
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
    }, [targetNumber, animationDuration]);

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

    const hasLabel = stat.label && this.castToString(stat.label);
    const hasSuffix = stat.suffix && stat.suffix.trim() !== "";
    const hasNumber = targetNumber !== 0 || hasSuffix;

    if (!hasNumber && !hasSuffix && !hasLabel) return null;

    return (
      <div ref={ref} className={this.decorateCSS("card")}>
        {hasNumber && (
          <div className={this.decorateCSS("stat-value")}>
            <span className={this.decorateCSS("stat-number")}>
              {animatedNumber}
            </span>
            {hasSuffix && (
              <span className={this.decorateCSS("stat-suffix")}>
                {stat.suffix.replace(/<[^>]*>/g, "").trim()}
              </span>
            )}
          </div>
        )}
        {hasLabel && (
          <Base.P className={this.decorateCSS("stat-label")}>
            {stat.label}
          </Base.P>
        )}
      </div>
    );
  };

  render() {
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const itemCount = this.getPropValue("itemCount");
    const animationDuration = this.getPropValue("animationDuration") || 2000;
    const statItemsProp = this.getPropValue("statItems");
    const statItems: StatItem[] = statItemsProp.map((item: any) => {
      const number = parseFloat(item.getPropValue("number")) || 0;
      const suffix = String(this.castToString(item.getPropValue("suffix")) || "");
      const label = item.getPropValue("label");
      return { number, suffix, label };
    });

    const hasLeft = subtitle || title || buttons.length > 0;
    const hasRight = description || statItems.length > 0;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.ContainerGrid className={this.decorateCSS("wrapper")}>
            {hasLeft && (
              <Base.GridCell>
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
                  {buttons.length > 0 && (() => {
                    const validButtons = buttons.filter((item) => {
                      const buttonText = this.castToString(item.text || "");
                      return buttonText;
                    });
                    return validButtons.length > 0 ? (
                      <div className={this.decorateCSS("button-container")}>
                        {validButtons.map((item, index) => (
                          <ComposerLink key={`stats22-btn-${index}`} path={item.url}>
                            <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                              <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                            </Base.Button>
                          </ComposerLink>
                        ))}
                      </div>
                    ) : null;
                  })()}
                </Base.VerticalContent>
              </Base.GridCell>
            )}
            {hasRight && (
              <Base.GridCell>
                <Base.VerticalContent className={this.decorateCSS("right")}>
                  {description && (
                    <Base.SectionDescription className={this.decorateCSS("description")}>
                      {this.getPropValue("description")}
                    </Base.SectionDescription>
                  )}
                  {statItems.length > 0 && (
                    <Base.ListGrid
                      gridCount={{ pc: itemCount, tablet: itemCount, phone: 1 }}
                      className={this.decorateCSS("stats-grid")}
                    >
                      {statItems.map((item, index) => {
                        const hasLabel = this.castToString(item.label);
                        const hasSuffix = item.suffix && item.suffix.trim() !== "";
                        const hasNumber = item.number !== 0 || hasSuffix;
                        if (!hasNumber && !hasSuffix && !hasLabel) return null;
                        return (
                          <this.AnimatedStat
                            key={index}
                            stat={item}
                            animationDuration={animationDuration}
                          />
                        );
                      })}
                    </Base.ListGrid>
                  )}
                </Base.VerticalContent>
              </Base.GridCell>
            )}
          </Base.ContainerGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Stats22;
