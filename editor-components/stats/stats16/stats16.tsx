import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats16.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type StatItem = {
    number: number;
    suffix: string;
    label: string;
};

class Stats16 extends BaseStats {
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
            value: "Think Like A Customer",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking.",
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
                        { type: "string", key: "number", displayer: "Number", value: "98" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "%" },
                        { type: "string", key: "label", displayer: "Label", value: "Positive Feedback" },
                    ],
                },
                {
                    type: "object",
                    key: "stat",
                    displayer: "Stat",
                    value: [
                        { type: "string", key: "number", displayer: "Number", value: "146" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "" },
                        { type: "string", key: "label", displayer: "Label", value: "Project Completed" },
                    ],
                },
                {
                    type: "object",
                    key: "stat",
                    displayer: "Stat",
                    value: [
                        { type: "string", key: "number", displayer: "Number", value: "50" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "$" },
                        { type: "string", key: "label", displayer: "Label", value: "Average Cost Per Hour" },
                    ],
                },
                {
                    type: "object",
                    key: "stat",
                    displayer: "Stat",
                    value: [
                        { type: "string", key: "number", displayer: "Number", value: "543" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "" },
                        { type: "string", key: "label", displayer: "Label", value: "Pizzas Ordered" },
                    ],
                },
            ],
        });

        this.addProp({ type: "boolean", key: "statsAnimation", displayer: "Stats Animation", value: true });
        this.addProp({
            type: "number",
            key: "animationDuration",
            displayer: "Stat Animation Duration (ms)",
            value: 2000,
        });

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
            ],
        });
    }

    static getName(): string {
        return "Stats 16";
    }

    private AnimatedStat = ({ stat, item, animationDuration = 2000, statsAnimation }: { stat: StatItem; item: any; animationDuration?: number; statsAnimation: boolean }) => {
        const titleProp = item.getPropValue("number");
        const originalString = String(this.castToString(titleProp) || "0");
        const targetNumber = parseFloat(originalString.replace(/[^\d.]/g, '')) || 0;

        const [animatedNumber, setAnimatedNumber] = React.useState<number>(statsAnimation ? 0 : targetNumber);
        const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

        React.useEffect(() => {
            if (!statsAnimation) {
                setAnimatedNumber(targetNumber);
                return;
            }

            animateNumber();

            return () => {
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                }
            };
        }, [targetNumber, statsAnimation, animationDuration, originalString]);

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
                setAnimatedNumber(currentNumber);
            }, 30);
        };

        const formatNumber = (num: number): string => {
            const decimals = originalString.includes(".") ? (originalString.split(".")[1]?.length || 0) : 0;
            return decimals > 0 ? num.toFixed(decimals) : Math.floor(num).toString();
        };

        const labelExist = stat.label && stat.label !== "";
        const valueExist = originalString && originalString !== "";

        if (!valueExist && !labelExist) return null;

        return (
            <Base.VerticalContent className={this.decorateCSS("stat-item")}>
                {valueExist && (
                    <span className={this.decorateCSS("stat-value")}>
                        {statsAnimation ? formatNumber(animatedNumber) : formatNumber(targetNumber)}
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
            </Base.VerticalContent>
        );
    };

    render() {
        const subtitleExist = this.castToString(this.getPropValue("subtitle"));
        const titleExist = this.castToString(this.getPropValue("title"));
        const descriptionExist = this.castToString(this.getPropValue("description"));
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
        const statsProp = this.getPropValue("stats");
        const statsAnimation = !!this.getPropValue("statsAnimation");
        const animationDuration = this.getPropValue("animationDuration") || 2000;

        const stats = statsProp.map((item: any) => {
            const numberString = String(this.castToString(item.getPropValue("number") || "0"));
            const number = parseFloat(numberString.replace(/[^\d.]/g, '')) || 0;
            const suffix = String(this.castToString(item.getPropValue("suffix")) || "");
            const label = String(this.castToString(item.getPropValue("label")) || "");
            return { number, suffix, label };
        });

        const hasTopSection = subtitleExist || titleExist || descriptionExist || buttons.length > 0;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {hasTopSection && (
                        <Base.VerticalContent className={this.decorateCSS("content")}>
                            <Base.VerticalContent className={this.decorateCSS("header-container")}>
                                {subtitleExist && (
                                    <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                                        {this.getPropValue("subtitle")}
                                    </Base.SectionSubTitle>
                                )}
                                {titleExist && (
                                    <Base.SectionTitle className={this.decorateCSS("title")}>
                                        {this.getPropValue("title")}
                                    </Base.SectionTitle>
                                )}
                                {descriptionExist && (
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

                            {stats.length > 0 && (
                                <div className={this.decorateCSS("stats-grid")}>
                                    {statsProp.map((item: any, index: number) => {
                                        const stat = stats[index];
                                        return (
                                            <this.AnimatedStat
                                                key={`stat16-${index}`}
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
                    )}
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Stats16;
