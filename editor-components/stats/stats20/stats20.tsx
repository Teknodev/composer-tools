import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats20.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type StatItem = {
    number: string;
    suffix: string;
    label: string;
    labelElement: JSX.Element;
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
            key: "buttons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "White"),
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

    static getName(): string { return "Stats 20"; }

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

            animateNumber();

            return () => {
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                }
            };
        }, [targetNumber, statsAnimation, animationDuration, originalNumberString]);

        const animateNumber = () => {
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
                    if (intervalRef.current) {
                        clearInterval(intervalRef.current);
                    }
                }
                setAnimatedNumber(formatNumber(currentNumber));
            }, 30);
        };

        const suffixExist = stat.suffix && stat.suffix !== "";
        const numberExist = originalNumberString && originalNumberString !== "" && originalNumberString !== "0";
        const labelExist = stat.label && stat.label !== "";
        const displayNumber = statsAnimation ? animatedNumber : formatNumber(targetNumber);

        if (!numberExist && !suffixExist && !labelExist) return null;

        return (
            <div className={this.decorateCSS("stat-item")}>
                {(numberExist || suffixExist) && (
                    <span className={this.decorateCSS("stat-value")}>
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
                {labelExist && (
                    <Base.SectionDescription className={this.decorateCSS("stat-label")}>
                        {stat.labelElement}
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
        const enable_divider = this.getPropValue("enable_divider");
        const itemCount = this.getPropValue("itemCount");

        const alignment = Base.getContentAlignment();

        const statsItems = this.castToObject<{ number: JSX.Element; suffix: JSX.Element; label: JSX.Element }[]>("stats");
        const stats: StatItem[] = statsItems.map((item) => {
            const number = String(this.castToString(item.number) || "0");
            const suffix = String(this.castToString(item.suffix) || "");
            const label = String(this.castToString(item.label) || "");
            return { number, suffix, label, labelElement: item.label };
        });

        const animationProps = this.castToObject<{ statsAnimation: boolean; animationDuration: number }>("animation");
        const statsAnimation = !!animationProps?.statsAnimation;
        const animationDuration = animationProps?.animationDuration || 2000;

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

                            {(hasTopSection && hasStats && enable_divider) && (
                                <div className={this.decorateCSS("divider")} />
                            )}

                            {hasStats && (
                                <Base.ListGrid gridCount={{ pc: itemCount, tablet: itemCount, phone: 1 }} className={this.decorateCSS("stats-grid")}>
                                    {stats.map((stat: StatItem, index: number) => (
                                        <this.AnimatedStat
                                            key={`stat20-${index}`}
                                            stat={stat}
                                            animationDuration={animationDuration}
                                            statsAnimation={statsAnimation}
                                        />
                                    ))}
                                </Base.ListGrid>
                            )}

                        </Base.VerticalContent>
                    </div>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Stats20;
