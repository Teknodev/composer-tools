import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats33.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "../../../custom-hooks/input-templates";

// Stat item type
type StatItem = {
  prefix: string;
  number: string;
  suffix: string;
  title: string;
  description: string;
};

class Stats33 extends BaseStats {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Years Of Experience",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.",
    });
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "About Us", "#", null, null, "Primary")],
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
            { type: "string", key: "number", displayer: "Value", value: "17" },
            { type: "string", key: "suffix", displayer: "Suffix", value: "" },
            { type: "string", key: "title", displayer: "Title", value: "Years Of Experience" },
            { type: "string", key: "description", displayer: "Description", value: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps." },
          ],
        },
      ],
    });
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
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
    return "Stats 33";
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
    const valueExist = this.castToString(originalString);
    const titleExist = this.castToString(stat.title);
    const descriptionExist = this.castToString(stat.description);
    if (!valueExist && !titleExist && !descriptionExist) return null;
    return (
      <React.Fragment>
        {valueExist && (
          <span className={this.decorateCSS("stat-value")}> 
            {stat.prefix && <span className={this.decorateCSS("stat-prefix")}>{stat.prefix}</span>}
            <span className={this.decorateCSS("stat-number")}>{statsAnimation ? formatNumber(animatedNumber) : formatNumber(targetNumber)}</span>
            {stat.suffix && <span className={this.decorateCSS("stat-suffix")}>{stat.suffix}</span>}
          </span>
        )}
        {titleExist && (
          <Base.H2 className={this.decorateCSS("stat-title")}>{stat.title}</Base.H2>
        )}
        {descriptionExist && (
          <Base.P className={this.decorateCSS("stat-description")}>{stat.description}</Base.P>
        )}
      </React.Fragment>
    );
  };

  render() {
    const statsItems = this.castToObject<StatItem[]>("stats");
    const stats: StatItem[] = statsItems.map((item: any) => {
      const prefix = this.castToString(item.prefix) || "";
      const number = this.castToString(item.number) || "0";
      const suffix = this.castToString(item.suffix) || "";
      const title = this.castToString(item.title) || "";
      const description = this.castToString(item.description) || "";
      return { prefix, number, suffix, title, description };
    });
    const animationProps = this.castToObject<{ statsAnimation: boolean; animationDuration: number }>("animation");
    const statsAnimation = !!animationProps?.statsAnimation;
    const animationDuration = animationProps?.animationDuration || 2000;
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const buttons: INPUTS.CastedButton[] = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const image = this.getPropValue("image");
    const isTitleExist = this.castToString(title);
    const isDescriptionExist = this.castToString(description);
    const hasValidButtons = buttons.some((btn) => this.castToString(btn.text));
    return (
      <Base.Container className={this.decorateCSS("container")}> 
        <Base.MaxContent className={this.decorateCSS("max-content")}> 
          <div className={this.decorateCSS("stats33-page")}> 
            <div className={this.decorateCSS("left-column")}> 
              {stats.length > 0 && (
                <this.AnimatedStat stat={stats[0]} animationDuration={animationDuration} statsAnimation={statsAnimation} />
              )}
              {isTitleExist && (
                <Base.SectionTitle className={this.decorateCSS("stat-title")}>{title}</Base.SectionTitle>
              )}
              {isDescriptionExist && (
                <Base.SectionDescription className={this.decorateCSS("stat-description")}>{description}</Base.SectionDescription>
              )}
              {hasValidButtons && (
                <div className={this.decorateCSS("button-container")}> 
                  {buttons.map((button: INPUTS.CastedButton, index: number) => {
                    const buttonText = this.castToString(button.text);
                    if (buttonText)
                      return (
                        <ComposerLink key={index} path={button.url}>
                          <Base.Button buttonType={button.type} className={this.decorateCSS("button")}> 
                            <span className={this.decorateCSS("button-text")}>{buttonText}</span>
                          </Base.Button>
                        </ComposerLink>
                      );
                    return null;
                  })}
                </div>
              )}
            </div>
            <div className={this.decorateCSS("right-column")}> 
              <div className={this.decorateCSS("image-wrapper")}> 
                <Base.Media value={image} className="base-media" />
              </div>
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Stats33;
