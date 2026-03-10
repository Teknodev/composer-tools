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
            max: 4,
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
                        // { type: "string", key: "statValue", displayer: "Value", value: "56" },
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
                        // { type: "string", key: "statValue", displayer: "Value", value: "87" },
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
        card,
        coloredBackgroundClass,
        alignment,
        statsAnimation,
        animationDuration,
    }: {
        card: any;
        coloredBackgroundClass: string;
        alignment: string;
        statsAnimation: boolean;
        animationDuration: number;
    }) => {
        const originalValueString = card.statValue;
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

        return (
            <div className={`${this.decorateCSS("card")} ${coloredBackgroundClass}`} data-alignment={alignment}>
                <Base.VerticalContent className={this.decorateCSS("card-content")}>
                    <Base.H6 className={this.decorateCSS("card-subtitle")}>{card.subtitleElement}</Base.H6>
                    <Base.H2 className={this.decorateCSS("card-title")}>{card.titleElement}</Base.H2>

                    {card.description && (
                        <Base.P className={this.decorateCSS("card-description")}>{card.descriptionElement}</Base.P>
                    )}

                    {card.statValue && (
                        <div className={this.decorateCSS("card-number")}>
                            {card.prefix && (
                                <span className={this.decorateCSS("card-prefix")}>{card.prefix}</span>
                            )}
                            <span>{display}</span>
                            {card.suffix && (
                                <span className={this.decorateCSS("card-suffix")}>{card.suffix}</span>
                            )}
                        </div>
                    )}
                </Base.VerticalContent>
            </div>
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
                statValue: this.castToString(cardData.value) || this.castToString(cardData.number) || "0",
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
                    <div className={this.decorateCSS("content")}>
                        {hasTopSection && (
                            <Base.VerticalContent
                                className={this.decorateCSS("header-container")}
                                data-alignment={alignment}
                            >
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
                                    <Base.P className={this.decorateCSS("description")}>
                                        {this.getPropValue("description")}
                                    </Base.P>
                                )}
                            </Base.VerticalContent>
                        )}

                        {cards.length > 0 && (
                            <div
                                className={this.decorateCSS("cards-container")}
                                style={{ "--item-count": itemCount } as React.CSSProperties}
                            >
                                {cards.map((card: any, index: number) => (
                                    <this.AnimatedCard
                                        key={index}
                                        card={card}
                                        coloredBackgroundClass={this.getColoredBackground()}
                                        alignment={alignment}
                                        statsAnimation={statsAnimation}
                                        animationDuration={animationDuration}
                                    />
                                ))}
                            </div>
                        )}

                        {hasValidButtons && (
                            <div className={this.decorateCSS("bottom-action-container")}>
                                {buttons.map((item: INPUTS.CastedButton, index: number) => {
                                    const buttonText = this.castToString(item.text);
                                    if (!buttonText) return null;
                                    return (
                                        <div key={index}>
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
                    </div>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Stats30Page;