import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats17.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type StatItem = {
  value: React.ReactNode;
  label: React.ReactNode;
};

class Stats17 extends BaseStats {
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
            { type: "string", key: "value", displayer: "Value", value: "100%" },
            { type: "string", key: "label", displayer: "Label", value: "Satisfaction" },
          ],
        },
        {
          type: "object",
          key: "statItem",
          displayer: "Stat Item",
          value: [
            { type: "string", key: "value", displayer: "Value", value: "75K" },
            { type: "string", key: "label", displayer: "Label", value: "Happy Users" },
          ],
        },
        {
          type: "object",
          key: "statItem",
          displayer: "Stat Item",
          value: [
            { type: "string", key: "value", displayer: "Value", value: "125k+" },
            { type: "string", key: "label", displayer: "Label", value: "Downloads" },
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
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
      ],
    });
  }

  static getName(): string {
    return "Stats 17";
  }

  private AnimatedStat = ({
    value,
    label,
    animationDuration = 2000,
  }: {
    value: string;
    label: string;
    animationDuration?: number;
  }) => {
    const prefix = value.match(/^\D*/)?.[0] || "";
    const suffix = value.match(/\D+$/)?.[0] || "";
    const numericStr = value.replace(/[^\d.]/g, "");
    const targetNumber = parseFloat(numericStr) || 0;
    const hasDecimals = numericStr.includes(".");

    const [animatedValue, setAnimatedValue] = React.useState<string>(
      numericStr ? prefix + "0" + suffix : value
    );
    const ref = React.useRef<HTMLDivElement>(null);
    const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

    React.useEffect(() => {
      if (!numericStr) {
        setAnimatedValue(value);
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
    }, [value, animationDuration]);

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

        const formatted = hasDecimals
          ? currentNumber.toFixed(1)
          : Math.floor(currentNumber).toString();
        setAnimatedValue(prefix + formatted + suffix);
      }, 30);
    };

    const valueDisplay = numericStr ? animatedValue : value;
    const hasLabel = label && label.trim() !== "";

    return (
      <div ref={ref} className={this.decorateCSS("card")}>
        <Base.H3 className={this.decorateCSS("stat-value")}>
          {valueDisplay}
        </Base.H3>
        {hasLabel && (
          <Base.P className={this.decorateCSS("stat-label")}>
            {label}
          </Base.P>
        )}
      </div>
    );
  };

  render() {
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const statItems = this.castToObject<StatItem[]>("statItems");
    const animationDuration = this.getPropValue("animationDuration") || 2000;
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const hasHeader = subtitle || title || description;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("wrapper")}>
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
            {statItems.length > 0 && (
              <Base.Row className={this.decorateCSS("stats-grid")}>
                {statItems.map((item, index) => {
                  const valueStr = this.castToString(item.value);
                  const labelStr = this.castToString(item.label);
                  if (!valueStr && !labelStr) return null;
                  return (
                    <this.AnimatedStat
                      key={index}
                      value={valueStr}
                      label={labelStr}
                      animationDuration={animationDuration}
                    />
                  );
                })}
              </Base.Row>
            )}
            {buttons.length > 0 && (() => {
              const validButtons = buttons.filter((item) => {
                const buttonText = this.castToString(item.text || "");
                return buttonText;
              });
              return validButtons.length > 0 ? (
                <div className={this.decorateCSS("button-container")}>
                  {validButtons.map((item, index) => (
                    <ComposerLink key={`stats17-btn-${index}`} path={item.url}>
                      <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                        <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                      </Base.Button>
                    </ComposerLink>
                  ))}
                </div>
              ) : null;
            })()}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Stats17;
