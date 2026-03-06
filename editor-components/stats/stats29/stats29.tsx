import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats29.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "../../../custom-hooks/input-templates";

type StatItem = {
  prefix: string;
  number: string;
  suffix: string;
  subtitle: string;
  title: string;
  description: string;
  titleElement: JSX.Element;
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
      value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")
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
            { type: "string", key: "title", displayer: "Title", value: "OF BUYERS" },
            { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },

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
            { type: "string", key: "title", displayer: "Title", value: "OF BUYERS" },
            { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },

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
      type: "object",
      key: "animation",
      displayer: "Animation",
      value: [
        { type: "boolean", key: "statsAnimation", displayer: "Stats Animation", value: true },
        { type: "number", key: "animationDuration", displayer: "Animation Duration (ms)", value: 2000 },
      ],
    });
  }

  static getName(): string {
    return "Stats 29";
  }

  private AnimatedStat = ({ stat, animationDuration = 2000, statsAnimation }: { stat: StatItem; animationDuration?: number; statsAnimation: boolean }) => {
    const originalString = stat.number;
    const targetNumber = parseFloat(originalString) || 0;

    const formatNumber = (num: number): string => {
      const decimals = originalString.includes(".") ? (originalString.split(".")[1]?.length || 0) : 0;
      return decimals > 0 ? num.toFixed(decimals) : Math.floor(num).toString();
    };

    const [animatedNumber, setAnimatedNumber] = React.useState<number>(statsAnimation ? 0 : targetNumber);
    const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

    React.useEffect(() => {
      if (!statsAnimation) {
        setAnimatedNumber(targetNumber);
        return;
      }

      const steps = animationDuration / 30;
      let currentNumber = 0;
      const increment = targetNumber / steps;

      intervalRef.current = setInterval(() => {
        currentNumber += increment;
        if (currentNumber >= targetNumber) {
          currentNumber = targetNumber;
          clearInterval(intervalRef.current!);
        }
        setAnimatedNumber(currentNumber);
      }, 30);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }, [targetNumber, statsAnimation, animationDuration, originalString]);

    const subtitleExist = this.castToString(stat.subtitle);
    const titleExist = this.castToString(stat.title);
    const descriptionExist = this.castToString(stat.description);
    const valueExist = this.castToString(originalString);

    if (!valueExist && !subtitleExist && !titleExist && !descriptionExist) return null;

    return (
      <Base.VerticalContent className={this.decorateCSS("stat-item")}>
        {valueExist && (
          <span className={this.decorateCSS("stat-value")}>
            {stat.prefix && (
              <span className={this.decorateCSS("stat-prefix")}>
                {stat.prefix}
              </span>
            )}
            <span className={this.decorateCSS("stat-number")}>
              {statsAnimation ? formatNumber(animatedNumber) : formatNumber(targetNumber)}
            </span>
            {stat.suffix && (
              <span className={this.decorateCSS("stat-suffix")}>
                {stat.suffix}
              </span>
            )}
          </span>
        )}
        {(subtitleExist || titleExist || descriptionExist) && (
          <Base.VerticalContent className={this.decorateCSS("stat-content")}>
            {subtitleExist && (
              <Base.P className={this.decorateCSS("stat-subtitle")}>
                {stat.subtitle}
              </Base.P>
            )}
            {titleExist && (
              <Base.H2 className={this.decorateCSS("stat-title")}>
                {stat.title}
              </Base.H2>
            )}
            {descriptionExist && (
              <Base.P className={this.decorateCSS("stat-description")}>
                {stat.description}
              </Base.P>
            )}
          </Base.VerticalContent>
        )}
      </Base.VerticalContent>
    );
  };

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const buttons: INPUTS.CastedButton[] = this.castToObject<INPUTS.CastedButton[]>("buttons");

    const isSubtitleExist = this.castToString(subtitle);
    const isTitleExist = this.castToString(title);
    const isDescriptionExist = this.castToString(description);
    const hasValidButtons = buttons.some((btn) => this.castToString(btn.text));

    const statsItems = this.castToObject<StatItem[]>("stats");
    const stats: StatItem[] = statsItems.map((item: any) => {
      const prefix = this.castToString(item.prefix) || "";
      const number = this.castToString(item.number) || "0";
      const suffix = this.castToString(item.suffix) || "";
      const subtitle = this.castToString(item.subtitle) || "";
      const title = this.castToString(item.title) || "";
      const description = this.castToString(item.description) || "";
      return { prefix, number, suffix, subtitle, title, titleElement: item.title, description, descriptionElement: item.description };
    });

    const animationProps = this.castToObject<{ statsAnimation: boolean; animationDuration: number }>("animation");
    const statsAnimation = !!animationProps?.statsAnimation;
    const animationDuration = animationProps?.animationDuration || 2000;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("card")}>
            <div className={this.decorateCSS("card-content")}>
              <div className={this.decorateCSS("header-container")}>
                <Base.VerticalContent className={this.decorateCSS("left-container")}>
                  {isSubtitleExist && (
                    <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                      {subtitle}
                    </Base.SectionSubTitle>
                  )}
                  {isTitleExist && (
                    <Base.SectionTitle className={this.decorateCSS("title")}>
                      {title}
                    </Base.SectionTitle>
                  )}
                  {isDescriptionExist && (
                    <Base.SectionDescription className={this.decorateCSS("description")}>
                      {description}
                    </Base.SectionDescription>
                  )}
                  {hasValidButtons && (
                    <div className={this.decorateCSS("button-container")}>
                      {buttons.map((button: INPUTS.CastedButton, index: number) => {
                        const buttonText = this.castToString(button.text);
                        if (buttonText)
                          return (
                            <ComposerLink key={index} path={button.url}>
                              <Base.Button
                                buttonType={button.type}
                                className={this.decorateCSS("button")}
                              >
                                <span className={this.decorateCSS("button-text")}>{buttonText}</span>
                              </Base.Button>
                            </ComposerLink>
                          );
                        return null;
                      })}
                    </div>
                  )}
                </Base.VerticalContent>
              </div>

              {stats?.length > 0 && (
                <Base.ListGrid
                  gridCount={{ pc: 2, tablet: 1, phone: 1 }}
                  className={this.decorateCSS("stats-grid")}
                >
                  {stats.map((stat: StatItem, index: number) => (
                    <this.AnimatedStat
                      key={index}
                      stat={stat}
                      animationDuration={animationDuration}
                      statsAnimation={statsAnimation}
                    />
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
