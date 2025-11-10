import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats15.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type StatItem = {
  value: React.JSX.Element;
  label: React.JSX.Element;
};

class Stats15 extends BaseStats {
  interval: any;

  constructor(props?: any) {
    super(props, styles);

    this.addProp({ type: "string", key: "title", displayer: "Title", value: "Instant access to trade,<br> anytime and anywhere" });
    this.addProp({ type: "string", key: "description", displayer: "Description", value: "Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line." });

    this.addProp({
      type: "array",
      key: "stats",
      displayer: "Stats",
      value: [
        { type: "object", key: "stat", displayer: "Stat", value: [
          { type: "string", key: "value", displayer: "Value", value: "10k+" },
          { type: "string", key: "label", displayer: "Label", value: "Active Users" },
        ]},
        { type: "object", key: "stat", displayer: "Stat", value: [
          { type: "string", key: "value", displayer: "Value", value: "0.9%" },
          { type: "string", key: "label", displayer: "Label", value: "Commission Fee" },
        ]},
      ],
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Start Trading", "", null, null, "Primary"),
      ],
    });

    this.addProp({ type: "media", key: "background", displayer: "Background Image", additionalParams: { availableTypes: ["image"] }, value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/690cad863596a1002b203b24?alt=media" } });
    this.addProp({ type: "boolean", key: "overlay", displayer: "Overlay", value: true });
    this.addProp({ type: "number", key: "numberAnimationDuration", displayer: "Number Animation Duration (ms)", value: 2000 });
  }

  static getName(): string { return "Stats 15"; }

  init() {
    const stats = this.castToObject<StatItem[]>("stats");
    stats.forEach((_, index) => {
      this.setComponentState(`number-${index}`, "0");
      this.setComponentState(`numberForControl-${index}`, 0);
    });
  }

  isEqual(arr1: any[], arr2: any[]) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      const val1 = arr1[i];
      const val2 = arr2[i];
      if (val1 === null || val2 === null) continue;
      const num1 = parseFloat(String(val1).replace(/[^0-9.]/g, "")) || 0;
      const num2 = parseFloat(String(val2).replace(/[^0-9.]/g, "")) || 0;
      if (num1 !== num2) return false;
    }
    return true;
  }

  getStats() {
    const stats = this.castToObject<StatItem[]>("stats");
    return stats.map((stat: any) => {
      const value = this.castToString(stat?.value);
      return value || "";
    });
  }

  getNumbers() {
    const stats = this.castToObject<StatItem[]>("stats");
    return stats.map((_, index) => {
      const number = this.getComponentState(`numberForControl-${index}`);
      return number !== undefined ? number : 0;
    });
  }

  animate() {
    const animationDuration = this.getPropValue("numberAnimationDuration") || 2000;
    const stats = this.castToObject<StatItem[]>("stats");

    this.interval = setInterval(() => {
      if (this.isEqual(this.getStats(), this.getNumbers())) {
        clearInterval(this.interval);
        this.interval = null;
        return;
      }

      stats.forEach((stat: any, index: number) => {
        const valueText = String(this.castToString(stat?.value) || "0");
        const currentControl = this.getComponentState(`numberForControl-${index}`) || 0;

        const numericPart = valueText.replace(/[^0-9.]/g, "");
        const suffix = valueText.replace(/[0-9.]/g, "");
        const target = parseFloat(numericPart) || 0;
        const currentNumeric = typeof currentControl === "number" ? currentControl : (parseFloat(String(currentControl).replace(/[^0-9.]/g, "")) || 0);

        if (target !== currentNumeric) {
          const decimals = numericPart.includes(".") ? (numericPart.split(".")[1]?.length || 0) : 0;
          const steps = Math.max(1, Math.floor(animationDuration / 30));
          const increment = target / steps;
          const nextNumeric = Math.min(target, currentNumeric + increment);
          const formatted = decimals > 0 ? nextNumeric.toFixed(decimals) : Math.floor(nextNumeric).toString();
          const formattedValue = formatted + suffix;
          
          this.setComponentState(`number-${index}`, formattedValue);
          this.setComponentState(`numberForControl-${index}`, nextNumeric);
        }
      });
    }, 30);
  }

  render() {
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const stats = this.castToObject<StatItem[]>("stats");
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const background = this.getPropValue("background");
    const overlay = !!this.getPropValue("overlay");
    const alignment = Base.getContentAlignment();

    const titleText = this.castToString(title);
    const descriptionText = this.castToString(description);
    const hasHeader = titleText || descriptionText || buttons.some(b => this.castToString(b?.text));

    const containerStyle = { backgroundImage: `url('${background?.url || background || ""}')` } as React.CSSProperties;

    const statsValues = this.getStats();
    const numbersValues = this.getNumbers();
    
    if (statsValues.length > 0 && numbersValues.every((n: any) => n === 0 || n === "")) {
      this.init();
    }

    if (!this.interval && !this.isEqual(statsValues, numbersValues)) {
      this.animate();
    }

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${background ? this.decorateCSS("image-active") : ""} ${overlay && background ? this.decorateCSS("overlay-active") : ""}`} style={containerStyle}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={`${this.decorateCSS("wrapper")} ${alignment === "left" ? this.decorateCSS("alignment-left") : this.decorateCSS("alignment-center")}`}>

            {hasHeader && (
              <Base.VerticalContent className={this.decorateCSS("content")}>
                {titleText && (
                  <Base.SectionTitle className={`${this.decorateCSS("title")} ${background ? this.decorateCSS("with-bg") : ""}`}>
                    {title as any}
                  </Base.SectionTitle>
                )}
                {descriptionText && (
                  <Base.SectionDescription className={this.decorateCSS("description")}>{description as any}</Base.SectionDescription>
                )}
                {buttons.length > 0 && (() => {
                  const validButtons = buttons.filter((item) => {
                    const buttonText = this.castToString(item.text || "");
                    const iconName = (item as any)?.icon?.name || (item as any)?.icon;
                    return buttonText || iconName;
                  });
                  return validButtons.length > 0 ? (
                    <Base.Row className={this.decorateCSS("button-container")}>
                      {validButtons.map((item, index) => {
                        const buttonText = this.castToString(item.text || "");
                        const buttonUrl = item.url || "#";
                        const iconName = (item as any)?.icon?.name || (item as any)?.icon;
                        return (
                          <ComposerLink key={`stats15-btn-${index}`} path={buttonUrl}>
                            <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                              {iconName && (
                                <Base.Media className={this.decorateCSS("icon")} value={{ type: "icon", name: iconName }} />
                              )}
                              {buttonText && <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>}
                            </Base.Button>
                          </ComposerLink>
                        );
                      })}
                    </Base.Row>
                  ) : null;
                })()}
                {stats.length > 0 && (
                  <Base.Row className={this.decorateCSS("stats-row")}>
                    {stats.map((s: any, i: number) => {
                      const v = this.castToString(s?.value);
                      const l = this.castToString(s?.label);
                      const animatedValue = this.getComponentState(`number-${i}`);
                      const statValue = v === animatedValue ? s.value : (animatedValue || v || "0");
                      if (!v && !l) return null;
                      return (
                        <div key={`stat15-${i}`} className={this.decorateCSS("stat")}>
                          {v && (
                            <Base.H3 className={this.decorateCSS("stat-value")}>
                              {statValue}
                            </Base.H3>
                          )}
                          {l && <Base.P className={this.decorateCSS("stat-label")}>{s.label}</Base.P>}
                        </div>
                      );
                    })}
                  </Base.Row>
                )}
              </Base.VerticalContent>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Stats15;



