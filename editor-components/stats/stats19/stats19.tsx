import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats19.module.scss";
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

class Stats19 extends BaseStats {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "ONE PLAN. MORE COVERAGE",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "No one can predict which issues might come their way",
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
      value: [
        INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
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
      key: "stats",
      displayer: "Stats",
      value: [
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            { type: "string", key: "prefix", displayer: "Prefix", value: "" },
            { type: "string", key: "number", displayer: "Value", value: "15" },
            { type: "string", key: "suffix", displayer: "Suffix", value: "K" },
            { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
            { type: "string", key: "title", displayer: "Title", value: "Covered Injuries" },
            { type: "string", key: "description", displayer: "Description", value: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition." },
          ],
        },
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            { type: "string", key: "prefix", displayer: "Prefix", value: "" },
            { type: "string", key: "number", displayer: "Value", value: "100" },
            { type: "string", key: "suffix", displayer: "Suffix", value: "%" },
            { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
            { type: "string", key: "title", displayer: "Title", value: "Guaranteed Issue" },
            { type: "string", key: "description", displayer: "Description", value: "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination." },
          ],
        },
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            { type: "string", key: "prefix", displayer: "Prefix", value: "" },
            { type: "string", key: "number", displayer: "Value", value: "5" },
            { type: "string", key: "suffix", displayer: "Suffix", value: "X" },
            { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
            { type: "string", key: "title", displayer: "Title", value: "More covered conditions" },
            { type: "string", key: "description", displayer: "Description", value: "Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line. User generated content in real-time will have multiple touchpoints for offshoring." },
          ],
        },
      ],
    });
  }

  static getName(): string {
    return "Stats 19";
  }

  render() {
    const subtitle = this.getPropValue("subtitle");
    const isSubtitleExist = this.castToString(subtitle);
    const title = this.getPropValue("title");
    const isTitleExist = this.castToString(title);
    const description = this.getPropValue("description");
    const isDescriptionExist = this.castToString(description);
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const hasValidButtons = buttons.some((btn) => this.castToString(btn.text));
    const itemCount = this.getPropValue("itemCount");
    const statsProp = this.getPropValue("stats");
    const stats: StatItem[] = statsProp.map((item: any) => {
      const subtitle = item.getPropValue("subtitle");
      const itemTitle = item.getPropValue("title");
      const itemDescription = item.getPropValue("description");
      const number = this.castToString(item.getPropValue("number")) || "";
      const prefix = this.castToString(item.getPropValue("prefix")) || "";
      const suffix = this.castToString(item.getPropValue("suffix")) || "";
      return { subtitle, title: itemTitle, description: itemDescription, number, prefix, suffix };
    });

    const hasAnyStatValues = stats.some((s) => s.number !== "" || s.prefix.trim() !== "" || s.suffix.trim() !== "");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={`${this.decorateCSS("wrapper")} ${!hasAnyStatValues ? this.decorateCSS("no-stat-values") : ""}`}>
            {(isSubtitleExist || isTitleExist || isDescriptionExist) && (
              <Base.VerticalContent className={this.decorateCSS("header")}>
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
              </Base.VerticalContent>
            )}

            {stats.length > 0 && (
              <Base.VerticalContent className={this.decorateCSS("stats-wrapper")}>
                <Base.ListGrid
                  gridCount={{ pc: itemCount, tablet: 3, phone: 1 }}
                  className={this.decorateCSS("stats-grid")}
                >
                  {stats.map((stat: StatItem, index: number) => {
                    const hasPrefix = stat.prefix && stat.prefix.trim() !== "";
                    const hasSuffix = stat.suffix && stat.suffix.trim() !== "";
                    const hasNumber = stat.number !== "" || hasPrefix || hasSuffix;
                    const hasSubtitle = this.castToString(stat.subtitle);
                    const hasTitle = this.castToString(stat.title);
                    const hasDescription = this.castToString(stat.description);

                    if (!hasNumber && !hasSubtitle && !hasTitle) return null;

                    return (
                      <Base.VerticalContent key={index} className={this.decorateCSS("stat-item")}>
                        {(hasNumber || hasSubtitle || hasTitle) && (
                          <Base.Row className={this.decorateCSS("stat-header")} style={!hasNumber ? { gridTemplateColumns: "1fr" } : undefined}>
                            {hasNumber && (
                              <span className={this.decorateCSS("stat-value")}>
                                {hasPrefix && (
                                  <span className={this.decorateCSS("stat-prefix")}>
                                    {stat.prefix}
                                  </span>
                                )}
                                <span className={this.decorateCSS("stat-number")}>
                                  {stat.number}
                                </span>
                                {hasSuffix && (
                                  <span className={this.decorateCSS("stat-suffix")}>
                                    {stat.suffix}
                                  </span>
                                )}
                              </span>
                            )}
                            {hasSubtitle && (
                              <Base.H6 className={this.decorateCSS("stat-subtitle")} style={!hasNumber ? { gridColumn: 1 } : undefined}>
                                {stat.subtitle}
                              </Base.H6>
                            )}
                            {hasTitle && (
                              <Base.H5
                                className={this.decorateCSS("stat-title")}
                                style={{ ...(!hasNumber ? { gridColumn: 1 } : {}), ...(!hasSubtitle ? { gridRow: "1 / span 2", alignSelf: "center" } : {}) }}
                              >
                                {stat.title}
                              </Base.H5>
                            )}
                          </Base.Row>
                        )}
                        {hasDescription && (
                          <Base.P className={this.decorateCSS("stat-desc")}>
                            {stat.description}
                          </Base.P>
                        )}
                      </Base.VerticalContent>
                    );
                  })}
                </Base.ListGrid>
              </Base.VerticalContent>
            )}

            {hasValidButtons && (
              <div className={this.decorateCSS("button-container")}>
                {buttons.map((item: INPUTS.CastedButton, index: number) =>
                  this.castToString(item.text) && (
                    <ComposerLink key={`stats19-btn-${index}`} path={item.url}>
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

    prefix: string;
    number: string;
    suffix: string;
    title: string;
    titleElement: JSX.Element;
    subtitle: string;
    subtitleElement: JSX.Element;
    description: string;
    descriptionElement: JSX.Element;
};

class Stats19 extends BaseStats {
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
            value: "Our Company In Numbers",
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
            value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
            ],
        });

        this.addProp({
            type: "array",
            key: "stats",
            displayer: "Stats",
            value: [
                {
                    type: "object", key: "stat", displayer: "Stat", value: [
                        { type: "string", key: "prefix", displayer: "Prefix", value: "" },
                        { type: "string", key: "number", displayer: "Value", value: "100" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "+" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "title", displayer: "Title", value: "Clients from 17 countries" },
                        { type: "string", key: "description", displayer: "Description", value: "" },
                    ]
                },
                {
                    type: "object", key: "stat", displayer: "Stat", value: [
                        { type: "string", key: "prefix", displayer: "Prefix", value: "$" },
                        { type: "string", key: "number", displayer: "Value", value: "280" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "title", displayer: "Title", value: "Million raised" },
                        { type: "string", key: "description", displayer: "Description", value: "" },
                    ]
                },
                {
                    type: "object", key: "stat", displayer: "Stat", value: [
                        { type: "string", key: "prefix", displayer: "Prefix", value: "" },
                        { type: "string", key: "number", displayer: "Value", value: "90" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "%" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "title", displayer: "Title", value: "Of our clients come back" },
                        { type: "string", key: "description", displayer: "Description", value: "" },
                    ]
                },
                {
                    type: "object", key: "stat", displayer: "Stat", value: [
                        { type: "string", key: "prefix", displayer: "Prefix", value: "" },
                        { type: "string", key: "number", displayer: "Value", value: "638" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "title", displayer: "Title", value: "Net Promoting Score" },
                        { type: "string", key: "description", displayer: "Description", value: "" },
                    ]
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

        this.addProp({
            type: "number",
            key: "itemCount",
            displayer: "Item Count in a Row",
            value: 2,
            max: 4,
        });
    }

    static getName(): string { return "Stats 19"; }

    private AnimatedStat = ({ stat, animationDuration = 2000, statsAnimation }: { stat: StatItem; animationDuration?: number; statsAnimation: boolean }) => {
        const originalNumberString = stat.number;
        const targetNumber = parseFloat(originalNumberString) || 0;

        const formatNumber = (num: number): string => {
            const decimals = originalNumberString.includes(".") ? (originalNumberString.split(".")[1]?.length || 0) : 0;
            return decimals > 0 ? num.toFixed(decimals) : Math.floor(num).toString();
        };

        const [animatedNumber, setAnimatedNumber] = React.useState<string>(statsAnimation ? "0" : formatNumber(targetNumber));
        const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

        React.useEffect(() => {
            if (!statsAnimation) {
                setAnimatedNumber(formatNumber(targetNumber));
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
                setAnimatedNumber(formatNumber(currentNumber));
            }, 30);

            return () => {
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                }
            };
        }, [targetNumber, statsAnimation, animationDuration, originalNumberString]);

        const titleExist = this.castToString(stat.title);
        const subtitleExist = this.castToString(stat.subtitle);
        const descriptionExist = this.castToString(stat.description);
        const valueExist = this.castToString(originalNumberString);

        if (!valueExist && !titleExist && !subtitleExist && !descriptionExist) return null;

        return (
            <Base.VerticalContent className={this.decorateCSS("stat-item")}>
                {valueExist && (
                    <span className={this.decorateCSS("stat-value")}>
                        {this.castToString(stat.prefix) && (
                            <span className={this.decorateCSS("stat-prefix")}>
                                {stat.prefix}
                            </span>
                        )}
                        <span className={this.decorateCSS("stat-number")}>
                            {statsAnimation ? formatNumber(parseFloat(animatedNumber) || 0) : formatNumber(targetNumber)}
                        </span>
                        {this.castToString(stat.suffix) && (
                            <span className={this.decorateCSS("stat-suffix")}>
                                {stat.suffix}
                            </span>
                        )}
                    </span>
                )}
                {(subtitleExist || titleExist || descriptionExist) && (
                    <Base.VerticalContent className={this.decorateCSS("stat-text-content")}>
                        {subtitleExist && (
                            <Base.H6 className={this.decorateCSS("stat-subtitle")}>
                                {stat.subtitleElement}
                            </Base.H6>
                        )}
                        {titleExist && (
                            <Base.H5 className={this.decorateCSS("stat-title")}>
                                {stat.titleElement}
                            </Base.H5>
                        )}
                        {descriptionExist && (
                            <Base.P className={this.decorateCSS("stat-description")}>
                                {stat.descriptionElement}
                            </Base.P>
                        )}
                    </Base.VerticalContent>
                )}
            </Base.VerticalContent>
        );
    };

    render() {
        const title = this.castToString(this.getPropValue("title"));
        const subtitle = this.castToString(this.getPropValue("subtitle"));
        const description = this.castToString(this.getPropValue("description"));
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
        const hasValidButtons = buttons.some((btn) => this.castToString(btn.text));

        const statsItems = this.castToObject<{ prefix: JSX.Element; number: JSX.Element; suffix: JSX.Element; title: JSX.Element; subtitle: JSX.Element; description: JSX.Element }[]>("stats");
        const stats: StatItem[] = statsItems.map((item) => {
            const prefix = this.castToString(item.prefix) || "";
            const number = this.castToString(item.number) || "0";
            const suffix = this.castToString(item.suffix) || "";
            const title = this.castToString(item.title) || "";
            const subtitle = this.castToString(item.subtitle) || "";
            const description = this.castToString(item.description) || "";
            return { prefix, number, suffix, title, titleElement: item.title, subtitle, subtitleElement: item.subtitle, description, descriptionElement: item.description };
        });

        const animationProps = this.castToObject<{ statsAnimation: boolean; animationDuration: number }>("animation");
        const statsAnimation = !!animationProps?.statsAnimation;
        const animationDuration = animationProps?.animationDuration || 2000;

        const itemCount = this.getPropValue("itemCount");

        const hasLeftSection = subtitle || title || description || hasValidButtons;
        const hasStats = stats.length > 0;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <Base.VerticalContent className={this.decorateCSS("content-wrapper")}>

                        {hasLeftSection && (
                            <Base.VerticalContent className={this.decorateCSS("left-container")}>
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
                                    <Base.SectionDescription className={this.decorateCSS("description")}>
                                        {this.getPropValue("description")}
                                    </Base.SectionDescription>
                                )}
                                {hasValidButtons && (
                                    <div className={this.decorateCSS("button-container")}>
                                        {buttons.map(
                                            (item: INPUTS.CastedButton, index: number) => {
                                                const buttonText = this.castToString(item.text);
                                                if (!buttonText) return null;

                                                return (
                                                    <ComposerLink key={index} path={item.url}>
                                                        <Base.Button
                                                            buttonType={item.type}
                                                            className={this.decorateCSS("button")}
                                                        >
                                                            <Base.P className={this.decorateCSS("button-text")}>
                                                                {item.text}
                                                            </Base.P>
                                                        </Base.Button>
                                                    </ComposerLink>
                                                );
                                            }
                                        )}
                                    </div>
                                )}
                            </Base.VerticalContent>
                        )}

                        {hasStats && (
                            <Base.ListGrid gridCount={{ pc: itemCount, tablet: 2, phone: 1 }} className={this.decorateCSS("stats-grid")}>
                                {stats.map((stat: StatItem, index: number) => (
                                    <this.AnimatedStat
                                        key={`stat23-${index}`}
                                        stat={stat}
                                        animationDuration={animationDuration}
                                        statsAnimation={statsAnimation}
                                    />
                                ))}
                            </Base.ListGrid>
                        )}

                    </Base.VerticalContent>
                </Base.MaxContent>
            </Base.Container>
        );
    }

}

export default Stats19;
