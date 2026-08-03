import * as React from "react";
import { BaseHeader, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./header9.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "../../../custom-hooks/input-templates";

type StatItem = {
  subtitle: string;
  subtitleElement: React.ReactNode;
  title: string;
  titleElement: React.ReactNode;
  description: string;
  descriptionElement: React.ReactNode;
  number: string;
  numberElement: React.ReactNode;
  prefix: string;
  prefixElement: React.ReactNode;
  suffix: string;
  suffixElement: React.ReactNode;
};

interface BackgroundSettings {
  componentBackground: TypeMediaInputValue;
  overlay: boolean;
}

interface AnimationSettings {
  statsAnimation: boolean;
  animationDuration: number;
}

class Header9 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "object",
      key: "backgroundSettings",
      displayer: "Background Media",
      value: [
        {
          type: "media",
          key: "componentBackground",
          displayer: "Background Media",
          additionalParams: { availableTypes: ["image"] },
          value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/690cad863596a1002b203b24?alt=media" }
        },
        { type: "boolean", key: "overlay", displayer: "Overlay", value: true }
      ]
    });

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
            { type: "string", key: "prefix", displayer: "Prefix", value: "" },
            { type: "string", key: "number", displayer: "Value", value: "10" },
            { type: "string", key: "suffix", displayer: "Suffix", value: "k+" },
            { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
            { type: "string", key: "title", displayer: "Title", value: "Active Users" },
            { type: "string", key: "description", displayer: "Description", value: "" },
          ]
        },
        {
          type: "object", key: "stat", displayer: "Stat", value: [
            { type: "string", key: "prefix", displayer: "Prefix", value: "" },
            { type: "string", key: "number", displayer: "Value", value: "0.9" },
            { type: "string", key: "suffix", displayer: "Suffix", value: "%" },
            { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
            { type: "string", key: "title", displayer: "Title", value: "Commission Fee" },
            { type: "string", key: "description", displayer: "Description", value: "" },
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


    this.addProp({
      type: "object",
      key: "animation",
      displayer: "Animation",
      value: [
        { type: "boolean", key: "statsAnimation", displayer: "Stats Animation", value: true },
        { type: "number", key: "animationDuration", displayer: "Animation Duration", value: 2000 }
      ]
    });
  }

  static getName(): string { return "Header 9"; }

  private AnimatedStat = ({ stat, animationDuration = 2000, statsAnimation, background }: { stat: StatItem; animationDuration?: number; statsAnimation: boolean; background: any }) => {
    const cleanNumber = (stat.number || "").replace(/[^\d.]/g, "");
    const targetNumber = parseFloat(cleanNumber);
    const isEmptyNumber = cleanNumber === "" || isNaN(targetNumber);

    const formatNumber = (num: number, originalString: string): string => {
      const decimals = originalString.includes(".") ? (originalString.split(".")[1]?.length || 0) : 0;
      return decimals > 0 ? num.toFixed(decimals) : Math.floor(num).toString();
    };

    const originalNumberString = String(stat.number || "0");
    const [animatedNumber, setAnimatedNumber] = React.useState<string>(
      isEmptyNumber ? "" : statsAnimation ? "0" : formatNumber(targetNumber, originalNumberString)
    );
    const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

    React.useEffect(() => {
      if (isEmptyNumber) {
        setAnimatedNumber("");
        return;
      }
      if (!statsAnimation) {
        setAnimatedNumber(formatNumber(targetNumber, originalNumberString));
        return;
      }

      animateNumber();

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }, [targetNumber, statsAnimation, animationDuration, originalNumberString, isEmptyNumber]);

    const animateNumber = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (isEmptyNumber || isNaN(targetNumber)) return;

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

    const hasSubtitle = stat.subtitle && stat.subtitle.trim() !== "";
    const hasTitle = stat.title && stat.title.trim() !== "";
    const hasDescription = stat.description && stat.description.trim() !== "";
    const hasPrefix = stat.prefix && stat.prefix.trim() !== "";
    const hasSuffix = stat.suffix && stat.suffix.trim() !== "";
    const hasNumber = (stat.number && stat.number.trim() !== "") || hasPrefix || hasSuffix;

    if (!hasNumber && !hasTitle) return null;

    return (
      <div className={this.decorateCSS("stat")}>
        {hasNumber && (
          <Base.H3 className={`${this.decorateCSS("stat-value")} ${background ? this.decorateCSS("with-bg") : ""}`}>
            {hasPrefix && (
              <span className={this.decorateCSS("stat-prefix")}>
                {stat.prefixElement}
              </span>
            )}
            <span className={this.decorateCSS("stat-number")}>
              {statsAnimation ? animatedNumber : stat.numberElement}
            </span>
            {hasSuffix && (
              <span className={this.decorateCSS("stat-suffix")}>
                {stat.suffixElement}
              </span>
            )}
          </Base.H3>
        )}
        {(hasSubtitle || hasTitle || hasDescription) && (
          <Base.VerticalContent className={this.decorateCSS("stat-vertical-content")}>
            {hasSubtitle && (
              <Base.H6 className={`${this.decorateCSS("stat-subtitle")} ${background ? this.decorateCSS("with-bg") : ""}`}>
                {stat.subtitleElement}
              </Base.H6>
            )}
            {hasTitle && (
              <Base.P className={`${this.decorateCSS("stat-label")} ${background ? this.decorateCSS("with-bg") : ""}`}>
                {stat.titleElement}
              </Base.P>
            )}
            {hasDescription && (
              <Base.P className={`${this.decorateCSS("stat-description")} ${background ? this.decorateCSS("with-bg") : ""}`}>
                {stat.descriptionElement}
              </Base.P>
            )}
          </Base.VerticalContent>
        )}
      </div>
    );
  };

  render() {
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const statsProp = this.getPropValue("stats");
    const stats = statsProp.map((item: any) => {
      const subtitle = this.castToString(item.getPropValue("subtitle")) || "";
      const itemTitle = this.castToString(item.getPropValue("title")) || "";
      const itemDescription = this.castToString(item.getPropValue("description")) || "";
      const number = this.castToString(item.getPropValue("number")) || "";
      const prefix = this.castToString(item.getPropValue("prefix")) || "";
      const suffix = this.castToString(item.getPropValue("suffix")) || "";
      return {
        subtitle,
        subtitleElement: item.getPropValue("subtitle"),
        title: itemTitle,
        titleElement: item.getPropValue("title"),
        description: itemDescription,
        descriptionElement: item.getPropValue("description"),
        number,
        numberElement: item.getPropValue("number"),
        prefix,
        prefixElement: item.getPropValue("prefix"),
        suffix,
        suffixElement: item.getPropValue("suffix"),
      };
    });
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const backgroundSettings = this.castToObject<BackgroundSettings>("backgroundSettings");
    const background = backgroundSettings?.componentBackground;
    const overlay = !!backgroundSettings?.overlay;
    const animationSettings = this.castToObject<AnimationSettings>("animation") || { statsAnimation: true, animationDuration: 2000 };
    const statsAnimation = !!animationSettings.statsAnimation;
    const alignment = Base.getContentAlignment();
    const subtitle = this.getPropValue("subtitle");
    const subtitleText = this.castToString(subtitle);

    const titleText = this.castToString(title);
    const descriptionText = this.castToString(description);
    const hasHeader = titleText || descriptionText || buttons.some(button => this.castToString(button?.text));
    const withBackground = !!background?.url;
    const subtitleClasses = `${this.decorateCSS("subtitle")} ${withBackground && this.decorateCSS("with-bg")}`;


    const containerStyle = { backgroundImage: `url('${background?.url || ""}')` } as React.CSSProperties;
    const animationDuration = animationSettings?.animationDuration || 2000;

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${withBackground ? this.decorateCSS("image-active") : ""} ${overlay && withBackground ? this.decorateCSS("overlay-active") : ""}`} style={withBackground ? containerStyle : undefined}>
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
                        animationDuration={animationDuration}
                        statsAnimation={statsAnimation}
                        background={withBackground}
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

export default Header9;
