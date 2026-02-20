import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats15.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type StatItem = {
  number: number;
  suffix?: string;
  label: string;
};

class Stats15 extends BaseStats {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({ type: "string", key: "subtitle", displayer: "Subtitle", value: "" });
    this.addProp({ type: "string", key: "title", displayer: "Title", value: "Instant access to trade,anytime and anywhere" });
    this.addProp({ type: "string", key: "description", displayer: "Description", value: "Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line." });

    this.addProp({
      type: "array",
      key: "stats",
      displayer: "Stats",
      value: [
        {
          type: "object", key: "stat", displayer: "Stat", value: [
            { type: "string", key: "number", displayer: "Number", value: "10" },
            { type: "string", key: "suffix", displayer: "Suffix", value: "k+" },
            { type: "string", key: "label", displayer: "Label", value: "Active Users" },
          ]
        },
        {
          type: "object", key: "stat", displayer: "Stat", value: [
            { type: "string", key: "number", displayer: "Number", value: "0.9" },
            { type: "string", key: "suffix", displayer: "Suffix", value: "%" },
            { type: "string", key: "label", displayer: "Label", value: "Commission Fee" },
          ]
        },
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
    this.addProp({ type: "boolean", key: "statsAnimation", displayer: "Stats Animation", value: true });
    this.addProp({ type: "number", key: "animationDuration", displayer: "Number Animation Duration (ms)", value: 2000 });
  }

  static getName(): string { return "Stats 15"; }

  private AnimatedStat = ({ stat, item, animationDuration = 2000, statsAnimation, background }: { stat: StatItem; item: any; animationDuration?: number; statsAnimation: boolean; background: any }) => {
    const formatNumber = (num: number, originalString: string): string => {
      const decimals = originalString.includes(".") ? (originalString.split(".")[1]?.length || 0) : 0;
      return decimals > 0 ? num.toFixed(decimals) : Math.floor(num).toString();
    };

    const originalNumberString = String(this.castToString(item.getPropValue("number") || "0"));
    const [animatedNumber, setAnimatedNumber] = React.useState<string>(statsAnimation ? "0" : formatNumber(stat.number, originalNumberString));
    const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

    React.useEffect(() => {
      if (!statsAnimation) {
        setAnimatedNumber(formatNumber(stat.number, originalNumberString));
        return;
      }

      animateNumber();

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }, [stat.number, statsAnimation, animationDuration, originalNumberString]);

    const animateNumber = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      const targetNumber = stat.number;

      const steps = animationDuration / 30;
      let currentNumber = 0;
      const increment = targetNumber / steps;

      intervalRef.current = setInterval(() => {
        currentNumber += increment;

        if (currentNumber >= targetNumber) {
          currentNumber = targetNumber;
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
        }
        setAnimatedNumber(formatNumber(currentNumber, originalNumberString));
      }, 30);
    };

    const suffixExist = stat.suffix && stat.suffix !== "";
    const numberExist = stat.number != null && !isNaN(stat.number) && (stat.number !== 0 || suffixExist);
    const labelExist = stat.label && stat.label !== "";
    const displayNumber = statsAnimation ? animatedNumber : (numberExist ? formatNumber(stat.number, originalNumberString) : "0");

    if (!numberExist && !suffixExist && !labelExist) return null;

    return (
      <div className={this.decorateCSS("stat")}>
        {numberExist && (
          <Base.H3 className={`${this.decorateCSS("stat-value")} ${background ? this.decorateCSS("with-bg") : ""}`}>
            {displayNumber}
            {stat.suffix && (
              <span className={this.decorateCSS("stat-suffix")}>
                {stat.suffix.replace(/<[^>]*>/g, '')}
              </span>
            )}
          </Base.H3>
        )}
        {labelExist && (
          <Base.P className={`${this.decorateCSS("stat-label")} ${background ? this.decorateCSS("with-bg") : ""}`}>
            {item.getPropValue("label")}
          </Base.P>
        )}
      </div>
    );
  };

  render() {
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const statsProp = this.getPropValue("stats");
    const stats = statsProp.map((item: any) => {
      const numberString = String(this.castToString(item.getPropValue("number") || "0"));
      const number = parseFloat(numberString.replace(/[^\d.]/g, '')) || 0;
      const suffix = String(this.castToString(item.getPropValue("suffix")) || "");
      const label = String(this.castToString(item.getPropValue("label")) || "");
      return { number, suffix, label };
    });
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const background = this.getPropValue("background");
    const overlay = !!this.getPropValue("overlay");
    const statsAnimation = !!this.getPropValue("statsAnimation");
    const alignment = Base.getContentAlignment();
    const subtitle = this.getPropValue("subtitle");
    const subtitleText = this.castToString(subtitle);

    const titleText = this.castToString(title);
    const descriptionText = this.castToString(description);
    const hasHeader = titleText || descriptionText || buttons.some(button => this.castToString(button?.text));
    const withBackground = !!background;
    const subtitleClasses = `${this.decorateCSS("subtitle")} ${withBackground && this.decorateCSS("with-bg")}`;


    const containerStyle = { backgroundImage: `url('${background?.url || background || ""}')` } as React.CSSProperties;
    const animationDuration = this.getPropValue("animationDuration") || 2000;

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${background ? this.decorateCSS("image-active") : ""} ${overlay && background ? this.decorateCSS("overlay-active") : ""}`} style={containerStyle}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={`${this.decorateCSS("wrapper")} ${alignment === "left" ? this.decorateCSS("alignment-left") : this.decorateCSS("alignment-center")}`}>

            {hasHeader && (
              <Base.VerticalContent className={this.decorateCSS("content")}>
                {subtitleText && (
                  <Base.SectionSubTitle className={subtitleClasses}>
                    {subtitle}
                  </Base.SectionSubTitle>
                )}
                {titleText && (
                  <Base.SectionTitle className={`${this.decorateCSS("title")} ${background ? this.decorateCSS("with-bg") : ""}`}>
                    {title}
                  </Base.SectionTitle>
                )}
                {descriptionText && (
                  <Base.SectionDescription className={`${this.decorateCSS("description")} ${background ? this.decorateCSS("with-bg") : ""}`}>{description}</Base.SectionDescription>
                )}
                {buttons.length > 0 && (() => {
                  const validButtons = buttons.filter((item) => {
                    const buttonText = this.castToString(item.text || "");
                    const iconName = (item.icon as { name?: string })?.name;
                    const hasValidIcon = iconName && iconName !== "";
                    return buttonText || hasValidIcon;
                  });
                  return validButtons.length > 0 ? (
                    <Base.Row className={this.decorateCSS("button-container")}>
                      {validButtons.map((item, index) => {
                        const buttonText = this.castToString(item.text || "");
                        const buttonUrl = item.url || "#";
                        const iconName = (item.icon as { name?: string })?.name;
                        const hasValidIcon = iconName && iconName !== "";
                        return (
                          <ComposerLink key={`stats15-btn-${index}`} path={buttonUrl}>
                            <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                              {hasValidIcon && (
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
                <Base.Row className={this.decorateCSS("stats-row")}>
                  {statsProp.map((item: any, index: number) => {
                    const stat = stats[index];
                    return (
                      <this.AnimatedStat
                        key={`stat15-${index}`}
                        stat={stat}
                        item={item}
                        animationDuration={animationDuration}
                        statsAnimation={statsAnimation}
                        background={background}
                      />
                    );
                  })}
                </Base.Row>
              </Base.VerticalContent>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Stats15;



