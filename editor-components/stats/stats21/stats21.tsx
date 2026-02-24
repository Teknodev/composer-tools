import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats21.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type StatItem = {
    number: string;
    suffix: string;
    label: string;
    labelElement: JSX.Element;
};

class Stats21 extends BaseStats {
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
            value: "About investing to the project",
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
                    type: "object",
                    key: "stat",
                    displayer: "Stat",
                    value: [
                        { type: "string", key: "number", displayer: "Number", value: "30" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "+" },
                        { type: "string", key: "label", displayer: "Label", value: "Experienced people on the team" },
                    ],
                },
                {
                    type: "object",
                    key: "stat",
                    displayer: "Stat",
                    value: [
                        { type: "string", key: "number", displayer: "Number", value: "45" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "+" },
                        { type: "string", key: "label", displayer: "Label", value: "Leverage agile frameworks" },
                    ],
                },
                {
                    type: "object",
                    key: "stat",
                    displayer: "Stat",
                    value: [
                        { type: "string", key: "number", displayer: "Number", value: "500" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "+" },
                        { type: "string", key: "label", displayer: "Label", value: "Days of product development" },
                    ],
                },
                {
                    type: "object",
                    key: "stat",
                    displayer: "Stat",
                    value: [
                        { type: "string", key: "number", displayer: "Number", value: "10" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "+" },
                        { type: "string", key: "label", displayer: "Label", value: "Transactions confirmed in second" },
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

        this.addProp({
            type: "number",
            key: "itemCount",
            displayer: "Item Count in a Row",
            value: 2,
            max: 4,
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
        return "Stats 21";
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

        const labelExist = stat.label && stat.label !== "";
        const valueExist = originalString && originalString !== "";

        if (!valueExist && !labelExist) return null;

        return (
            <Base.VerticalContent className={this.decorateCSS("stat-item")}>
                {valueExist && (
                    <span className={this.decorateCSS("stat-value")}>
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
                {labelExist && (
                    <Base.SectionDescription className={this.decorateCSS("stat-label")}>
                        {stat.labelElement}
                    </Base.SectionDescription>
                )}
            </Base.VerticalContent>
        );
    };

    render() {
        const subtitleExist = this.castToString(this.getPropValue("subtitle"));
        const titleExist = this.castToString(this.getPropValue("title"));
        const descriptionExist = this.castToString(this.getPropValue("description"));
        const itemCount = this.getPropValue("itemCount");
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

        const alignment = Base.getContentAlignment();

        const hasValidButtons = buttons.some((btn) => this.castToString(btn.text));
        const hasLeftSection = subtitleExist || titleExist || descriptionExist || hasValidButtons;

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

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("content-wrapper")}>
                        {hasLeftSection && (
                            <Base.VerticalContent className={`${this.decorateCSS("left-column")} ${alignment === "center" ? this.decorateCSS("alignment-center") : this.decorateCSS("alignment-left")}`}>
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
                        {stats.length > 0 && (
                            <div className={this.decorateCSS("right-column")}>
                                <Base.ListGrid gridCount={{ pc: itemCount, tablet: itemCount, phone: 1 }} className={this.decorateCSS("stats-grid")}>
                                    {stats.map((stat: StatItem, index: number) => (
                                        <this.AnimatedStat
                                            key={`stat21-${index}`}
                                            stat={stat}
                                            animationDuration={animationDuration}
                                            statsAnimation={statsAnimation}
                                        />
                                    ))}
                                </Base.ListGrid>
                            </div>
                        )}
                    </div>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Stats21;
