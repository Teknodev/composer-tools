import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats30.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

export class Stats30Page extends BaseStats {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "boolean",
            key: "coloredBackground",
            displayer: "Colored Background",
            value: false,
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
            value: "",
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
            value: 2,
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
            type: "array",
            key: "cards",
            displayer: "Cards",
            value: [
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        { type: "string", key: "prefix", displayer: "Prefix", value: "" },
                        { type: "string", key: "value", displayer: "Value", value: "56" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "Teamwork" },
                        { type: "string", key: "title", displayer: "Title", value: "Experienced team members" },
                        { type: "string", key: "description", displayer: "Description", value: "" },
                    ],
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        { type: "string", key: "prefix", displayer: "Prefix", value: "" },
                        { type: "string", key: "value", displayer: "Value", value: "87" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "Process" },
                        { type: "string", key: "title", displayer: "Title", value: "Days of product development" },
                        { type: "string", key: "description", displayer: "Description", value: "" },
                    ],
                },

            ],
        });
    }

    static getName(): string {
        return "Stats 30";
    }

    getColoredBackground() {
        return this.getPropValue("coloredBackground") ? this.decorateCSS("colored-background") : "";
    }

    private AnimatedCard = ({
        stat,
        coloredBackgroundClass,
        statsAnimation,
        animationDuration,
    }: {
        stat: any;
        coloredBackgroundClass: string;
        statsAnimation: boolean;
        animationDuration: number;
    }) => {
        const originalValueString = stat.statValue;
        const targetNumber = parseFloat(originalValueString.replace(/[^\d.]/g, "")) || 0;

        const formatNumber = (num: number): string => {
            const decimals = originalValueString.includes(".") ? (originalValueString.split(".")[1]?.length || 0) : 0;
            return decimals > 0 ? num.toFixed(decimals) : Math.floor(num).toString();
        };

        const [display, setDisplay] = React.useState<string>(statsAnimation ? "0" : formatNumber(targetNumber));
        const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

        React.useEffect(() => {
            if (!statsAnimation || targetNumber === 0) {
                setDisplay(formatNumber(targetNumber));
                return;
            }

            setDisplay("0");

            const steps = animationDuration / 30;
            const increment = targetNumber / steps;
            let current = 0;

            if (intervalRef.current) clearInterval(intervalRef.current);

            intervalRef.current = setInterval(() => {
                current += increment;
                if (current >= targetNumber) {
                    current = targetNumber;
                    clearInterval(intervalRef.current!);
                }
                setDisplay(formatNumber(current));
            }, 30);

            return () => {
                if (intervalRef.current) clearInterval(intervalRef.current);
            };
        }, [targetNumber, statsAnimation, animationDuration, originalValueString]);

        const titleExist = !!this.castToString(stat.title);
        const subtitleExist = !!this.castToString(stat.subtitle);
        const descriptionExist = !!this.castToString(stat.description);
        const valueExist = !!this.castToString(originalValueString);
        const suffixExist = !!this.castToString(stat.suffix);

        return (
            <Base.VerticalContent className={`${this.decorateCSS("stat-item")} ${coloredBackgroundClass}`}>
                <Base.VerticalContent className={this.decorateCSS("stat-text-group")}>
                    {subtitleExist && (
                        <Base.H6 className={this.decorateCSS("stat-subtitle")}>
                            {stat.subtitleElement}
                        </Base.H6>
                    )}
                    {titleExist && (
                        <Base.H2 className={this.decorateCSS("stat-title")}>
                            {stat.titleElement}
                        </Base.H2>
                    )}
                    {descriptionExist && (
                        <Base.P className={this.decorateCSS("stat-description")}>
                            {stat.descriptionElement}
                        </Base.P>
                    )}
                </Base.VerticalContent>
                <Base.VerticalContent
                    className={this.decorateCSS("stat-value-wrapper")}
                >
                    {(valueExist || suffixExist) && (
                        <span className={this.decorateCSS("stat-value-container")}>
                            {stat.prefix && (
                                <span className={this.decorateCSS("stat-prefix")}>
                                    {stat.prefix}
                                </span>
                            )}
                            <span className={this.decorateCSS("stat-value")}>
                                {display}
                            </span>
                            {suffixExist && (
                                <span className={this.decorateCSS("stat-suffix")}>
                                    {stat.suffix}
                                </span>
                            )}
                        </span>
                    )}
                </Base.VerticalContent>
            </Base.VerticalContent >
        );

    };

    render() {
        const subtitleExist = this.castToString(this.getPropValue("subtitle"));
        const titleExist = this.castToString(this.getPropValue("title"));
        const descriptionExist = this.castToString(this.getPropValue("description"));
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
        const hasValidButtons = buttons.some((btn) => this.castToString(btn.text));
        const alignment = Base.getContentAlignment();
        const itemCount = this.getPropValue("itemCount") || 2;
        const hasTopSection = subtitleExist || titleExist || descriptionExist;

        const animationProps = this.castToObject<{ statsAnimation: boolean; animationDuration: number }>("animation");
        const statsAnimation = !!animationProps?.statsAnimation;
        const animationDuration = animationProps?.animationDuration || 2000;

        const rawCards = this.castToObject<any[]>("cards") || [];
        const cards = rawCards.map((item) => {
            const cardData = item?.card || item || {};
            return {
                prefix: this.castToString(cardData.prefix) || "",
                statValue: this.castToString(cardData.value) || this.castToString(cardData.number) || "",
                suffix: this.castToString(cardData.suffix) || "",
                subtitle: this.castToString(cardData.subtitle) || "",
                subtitleElement: cardData.subtitle,
                title: this.castToString(cardData.title) || "",
                titleElement: cardData.title,
                description: this.castToString(cardData.description) || "",
                descriptionElement: cardData.description,
            };
        });

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <Base.VerticalContent className={this.decorateCSS("content")}>
                        {hasTopSection && (
                            <Base.VerticalContent
                                className={this.decorateCSS("header-container")}
                                data-alignment={alignment}
                            >
                                <Base.VerticalContent className={this.decorateCSS("header-texts")}>
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
                                </Base.VerticalContent>
                            </Base.VerticalContent>
                        )}

                        {cards.length > 0 && (
                            <div
                                className={this.decorateCSS("stats-container")}
                                style={{ "--item-count": itemCount } as React.CSSProperties}
                            >
                                {cards.map((stat: any, index: number) => (
                                    <this.AnimatedCard
                                        key={index}
                                        stat={stat}
                                        coloredBackgroundClass={this.getColoredBackground()}
                                        statsAnimation={statsAnimation}
                                        animationDuration={animationDuration}
                                    />
                                ))}
                            </div>
                        )}

                        {hasValidButtons && (
                            <div className={this.decorateCSS("bottom-action-container")} data-alignment={alignment}>
                                {buttons.map((item: INPUTS.CastedButton, index: number) => {
                                    const buttonText = this.castToString(item.text);
                                    if (!buttonText) return null;
                                    return (
                                        <div key={index} className={this.decorateCSS("button-wrapper")}>
                                            <Base.Button
                                                buttonType={item.type}
                                                className={this.decorateCSS("button")}
                                            >
                                                <Base.P className={this.decorateCSS("button-text")}>
                                                    {item.text}
                                                </Base.P>
                                            </Base.Button>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </Base.VerticalContent>
                </Base.MaxContent>
            </Base.Container >
        );
    }
}

export default Stats30Page;