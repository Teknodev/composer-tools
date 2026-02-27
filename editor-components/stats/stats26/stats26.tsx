import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats26.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type StatItem = {
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

class Stats26 extends BaseStats {
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
            value: "Business Indicators",
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
            type: "boolean",
            key: "enable_divider",
            displayer: "Divider",
            value: true,
        });

        this.addProp({
            type: "array",
            key: "stats",
            displayer: "Stats",
            value: [
                {
                    type: "object", key: "stat", displayer: "Stat", value: [
                        { type: "string", key: "prefix", displayer: "Prefix", value: "" },
                        { type: "string", key: "number", displayer: "Value", value: "2018" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "title", displayer: "Title", value: "Founded" },
                        { type: "string", key: "description", displayer: "Description", value: "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment." },
                    ]
                },
                {
                    type: "object", key: "stat", displayer: "Stat", value: [
                        { type: "string", key: "prefix", displayer: "Prefix", value: "$" },
                        { type: "string", key: "number", displayer: "Value", value: "17" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "M" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "title", displayer: "Title", value: "Funding" },
                        { type: "string", key: "description", displayer: "Description", value: "Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line." },
                    ]
                },
                {
                    type: "object", key: "stat", displayer: "Stat", value: [
                        { type: "string", key: "prefix", displayer: "Prefix", value: "" },
                        { type: "string", key: "number", displayer: "Value", value: "100" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "+" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "title", displayer: "Title", value: "People" },
                        { type: "string", key: "description", displayer: "Description", value: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test." },
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
            value: 3,
            max: 4,
        });
    }

    static getName(): string {
        return "Stats 26";
    }

    private AnimatedStat = ({ stat, animationDuration = 2000, statsAnimation, enableDivider }: { stat: StatItem; animationDuration?: number; statsAnimation: boolean; enableDivider: boolean }) => {
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
        const suffixExist = this.castToString(stat.suffix);
        const displayNumber = statsAnimation ? animatedNumber : formatNumber(targetNumber);

        if (!valueExist && !titleExist && !subtitleExist && !descriptionExist) return null;

        return (
            <>
                <div className={this.decorateCSS("stat-row")}>
                    <Base.VerticalContent className={this.decorateCSS("stat-label")}>
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
                    </Base.VerticalContent>
                    <div className={this.decorateCSS("stat-value-container")}>
                        {(valueExist || suffixExist) && (
                            <span className={this.decorateCSS("stat-value")}>
                                {stat.prefix && (
                                    <span className={this.decorateCSS("stat-prefix")}>
                                        {stat.prefix}
                                    </span>
                                )}
                                <span className={this.decorateCSS("stat-number")}>
                                    {displayNumber}
                                </span>
                                {suffixExist && (
                                    <span className={this.decorateCSS("stat-suffix")}>
                                        {stat.suffix}
                                    </span>
                                )}
                            </span>
                        )}
                    </div>
                    <div className={this.decorateCSS("stat-description-container")}>
                        {descriptionExist && (
                            <Base.P className={this.decorateCSS("stat-description")}>
                                {stat.descriptionElement}
                            </Base.P>
                        )}
                    </div>
                </div>
                {enableDivider && <div className={this.decorateCSS("divider")} />}
            </>
        );
    };

    render() {
        const title = this.castToString(this.getPropValue("title"));
        const subtitle = this.castToString(this.getPropValue("subtitle"));
        const description = this.castToString(this.getPropValue("description"));
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
        const hasValidButtons = buttons.some((btn) => this.castToString(btn.text));
        const enableDivider = this.getPropValue("enable_divider");
        const itemCount = this.getPropValue("itemCount");

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

        const hasTopSection = subtitle || title || description || hasValidButtons;
        const hasStats = stats.length > 0;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <Base.VerticalContent className={this.decorateCSS("content")}>
                        {hasTopSection && (
                            <Base.VerticalContent className={this.decorateCSS("header-container")}>
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
                            <Base.ListGrid
                                gridCount={{ pc: enableDivider ? 1 : itemCount, tablet: enableDivider ? 1 : itemCount, phone: 1 }}
                                className={`${this.decorateCSS("stats-list")} ${enableDivider ? this.decorateCSS("has-divider") : ""}`}
                            >
                                {enableDivider && <div className={this.decorateCSS("divider")} />}
                                {stats.map((stat: StatItem, index: number) => (
                                    <this.AnimatedStat
                                        key={`stat26-${index}`}
                                        stat={stat}
                                        animationDuration={animationDuration}
                                        statsAnimation={statsAnimation}
                                        enableDivider={enableDivider}
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

export default Stats26;
