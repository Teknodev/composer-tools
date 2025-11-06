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
        INPUTS.BUTTON("button", "Button", "Start Trading", "", "", null, "Primary"),
      ],
    });

    this.addProp({ type: "media", key: "background", displayer: "Background Image", additionalParams: { availableTypes: ["image"] }, value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/690cad863596a1002b203b24?alt=media" } });
    this.addProp({ type: "boolean", key: "overlay", displayer: "Overlay", value: true });
    this.addProp({ type: "number", key: "numberAnimationDuration", displayer: "Number Animation Duration (ms)", value: 2000 });
  }

  static getName(): string { return "Stats 15"; }

  private AnimatedStat = ({ valueText, labelText, duration = 2000 }: { valueText: string; labelText?: string; duration?: number }) => {
    const [animatedNumber, setAnimatedNumber] = React.useState<string>("0");
    const ref = React.useRef<HTMLDivElement>(null);
    const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

    React.useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate();
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      if (ref.current) observer.observe(ref.current);
      return () => {
        if (ref.current) observer.unobserve(ref.current);
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }, [valueText, duration]);

    const animate = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      const match = (valueText || "0").toString();
      const numericPart = match.replace(/[^0-9.]/g, "");
      const suffix = match.replace(/[0-9.]/g, "");
      const target = parseFloat(numericPart) || 0;
      const decimals = numericPart.includes(".") ? (numericPart.split(".")[1]?.length || 0) : 0;
      const steps = Math.max(1, Math.floor((duration || 2000) / 30));
      let current = 0;
      const increment = target / steps;
      intervalRef.current = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(intervalRef.current!);
        }
        const formatted = decimals > 0 ? current.toFixed(decimals) : Math.floor(current).toString();
        setAnimatedNumber(formatted + suffix);
      }, 30);
    };

    return (
      <div ref={ref} className={this.decorateCSS("stat")}>
        <Base.H3 className={this.decorateCSS("stat-value")}>{animatedNumber}</Base.H3>
        {labelText && <Base.P className={this.decorateCSS("stat-label")}>{labelText}</Base.P>}
      </div>
    );
  };

  render() {
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const stats = this.castToObject<StatItem[]>("stats");
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const background = this.getPropValue("background");
    const overlay = !!this.getPropValue("overlay");
    const alignment = Base.getContentAlignment();
    const numberAnimationDuration = this.getPropValue("numberAnimationDuration") || 2000;

    const hasHeader = this.castToString(title) || this.castToString(description) || (Array.isArray(buttons) && buttons.some(b => this.castToString(b?.text)));

    const containerStyle = { backgroundImage: `url('${background?.url || background || ""}')` } as React.CSSProperties;

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${background ? this.decorateCSS("image-active") : ""} ${overlay && background ? this.decorateCSS("overlay-active") : ""}`} style={containerStyle}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={`${this.decorateCSS("wrapper")} ${alignment === "left" ? this.decorateCSS("alignment-left") : this.decorateCSS("alignment-center")}`}>

            {hasHeader && (
              <Base.VerticalContent className={this.decorateCSS("content")}>
                {this.castToString(title) && (
                  <Base.SectionTitle className={`${this.decorateCSS("title")} ${background ? this.decorateCSS("with-bg") : ""}`}>
                    {title as any}
                  </Base.SectionTitle>
                )}
                {this.castToString(description) && (
                  <Base.SectionDescription className={this.decorateCSS("description")}>{description as any}</Base.SectionDescription>
                )}
                {Array.isArray(buttons) && buttons.length > 0 && (
                  <Base.Row className={this.decorateCSS("button-container")}>
                    {buttons.map((item, index) => {
                      const buttonText = this.castToString(item.text || "");
                      const buttonUrl = item.url || "#";
                      const iconName = (item as any)?.icon?.name || (item as any)?.icon;
                      if (!buttonText) return null;
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
                )}
                {Array.isArray(stats) && stats.length > 0 && (
                  <Base.Row className={this.decorateCSS("stats-row")}>
                    {stats.map((s: any, i: number) => {
                      const v = this.castToString(s?.value);
                      const l = this.castToString(s?.label);
                      if (!v && !l) return null;
                      return (
                        <this.AnimatedStat key={`stat15-${i}`} valueText={v as any} labelText={l as any} duration={numberAnimationDuration} />
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


