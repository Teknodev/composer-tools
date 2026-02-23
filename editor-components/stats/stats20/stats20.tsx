import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats20.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type StatItem = {
    number: number;
    suffix?: string;
    label: string;
};

class Stats20 extends BaseStats {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "boolean",
            key: "enable_card",
            displayer: "Colored Background",
            value: true,
        });

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
            value: "Everything about investing plus way more",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "",
        });

        this.addProp({
            type: "array",
            key: "stats",
            displayer: "Stats",
            value: [
                {
                    type: "object", key: "stat", displayer: "Stat", value: [
                        { type: "string", key: "number", displayer: "Number", value: "300" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "+" },
                        { type: "string", key: "label", displayer: "Label", value: "Experienced people on the team" },
                    ]
                },
                {
                    type: "object", key: "stat", displayer: "Stat", value: [
                        { type: "string", key: "number", displayer: "Number", value: "20" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "+" },
                        { type: "string", key: "label", displayer: "Label", value: "Cities where employees work" },
                    ]
                },
                {
                    type: "object", key: "stat", displayer: "Stat", value: [
                        { type: "string", key: "number", displayer: "Number", value: "180" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "+" },
                        { type: "string", key: "label", displayer: "Label", value: "Days of product development" },
                    ]
                },
            ],
        });

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [],
        });

        this.addProp({ type: "boolean", key: "statsAnimation", displayer: "Stats Animation", value: true });
        this.addProp({ type: "number", key: "animationDuration", displayer: "Number Animation Duration (ms)", value: 2000 });
    }

    static getName(): string { return "Stats 20"; }

    private AnimatedStat = ({ stat, item, animationDuration = 2000, statsAnimation }: { stat: StatItem; item: any; animationDuration?: number; statsAnimation: boolean }) => {
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
            <div className={this.decorateCSS("stat-item")}>
                {numberExist && (
                    <span className={this.decorateCSS("stat-value")}>
                        {displayNumber}
                        {stat.suffix && (
                            <span className={this.decorateCSS("stat-suffix")}>
                                {stat.suffix.replace(/<[^>]*>/g, '')}
                            </span>
                        )}
                    </span>
                )}
                {labelExist && (
                    <Base.SectionDescription className={this.decorateCSS("stat-label")}>
                        {item.getPropValue("label")}
                    </Base.SectionDescription>
                )}
            </div>
        );
    };

    render() {
        const title = this.castToString(this.getPropValue("title"));
        const subtitle = this.castToString(this.getPropValue("subtitle"));
        const description = this.castToString(this.getPropValue("description"));
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
        const enable_card = this.getPropValue("enable_card");

        const statsProp = this.getPropValue("stats");
        const statsAnimation = !!this.getPropValue("statsAnimation");
        const animationDuration = this.getPropValue("animationDuration") || 2000;
        const alignment = Base.getContentAlignment();

        const stats = statsProp.map((item: any) => {
            const numberString = String(this.castToString(item.getPropValue("number") || "0"));
            const number = parseFloat(numberString.replace(/[^\d.]/g, '')) || 0;
            const suffix = String(this.castToString(item.getPropValue("suffix")) || "");
            const label = String(this.castToString(item.getPropValue("label")) || "");
            return { number, suffix, label };
        });

        const hasTopSection = subtitle || title || description || buttons.length > 0;
        const hasStats = stats.length > 0;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={`${this.decorateCSS("card")} ${enable_card ? this.decorateCSS("has-background") : ""}`}>
                        <Base.VerticalContent className={this.decorateCSS("card-content")}>

                            {hasTopSection && (
                                <Base.VerticalContent className={`${this.decorateCSS("header-container")} ${alignment === "center" ? this.decorateCSS("alignment-center") : this.decorateCSS("alignment-left")}`}>
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
                                    {buttons.length > 0 && (
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

                            {(hasTopSection && hasStats) && (
                                <div className={this.decorateCSS("divider")} />
                            )}

                            {hasStats && (
                                <div className={this.decorateCSS("stats-grid")}>
                                    {statsProp.map((item: any, index: number) => {
                                        const stat = stats[index];
                                        return (
                                            <this.AnimatedStat
                                                key={`stat20-${index}`}
                                                stat={stat}
                                                item={item}
                                                animationDuration={animationDuration}
                                                statsAnimation={statsAnimation}
                                            />
                                        );
                                    })}
                                </div>
                            )}

                        </Base.VerticalContent>
                    </div>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Stats20;
