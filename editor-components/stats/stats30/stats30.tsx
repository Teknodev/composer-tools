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
        })

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
            type: "array",
            key: "cards",
            displayer: "Cards",
            value: [
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "string",
                            key: "subtitle",
                            displayer: "Subtitle",
                            value: "Teamwork",
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Experienced team members",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "",
                        },
                        {
                            type: "number",
                            key: "number",
                            displayer: "Number",
                            value: 56,
                        }
                    ],
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "string",
                            key: "subtitle",
                            displayer: "Subtitle",
                            value: "Process",
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Days of product development",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "",
                        },
                        {
                            type: "number",
                            key: "number",
                            displayer: "Number",
                            value: 87,
                        }
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
    AnimatedCard = ({ card, coloredBackgroundClass, alignment }: { card: any, coloredBackgroundClass: string, alignment: string }) => {
        const [animatedNumber, setAnimatedNumber] = React.useState<string>("0");
        const ref = React.useRef<HTMLDivElement>(null);
        const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

        React.useEffect(() => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            animateNumber();
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.5 }
            );

            if (ref.current) {
                observer.observe(ref.current);
            }

            return () => {
                if (ref.current) observer.unobserve(ref.current);
                if (intervalRef.current) clearInterval(intervalRef.current);
            };
        }, [card.number]);
        const animateNumber = () => {
            const cleanNumber = String(card.number).replace(/[^\d.]/g, '');
            const targetNumber = parseFloat(cleanNumber) || 0;

            const animationDuration = 2000;
            const steps = animationDuration / 50;
            const increment = targetNumber / steps;

            let currentNumber = 0;

            intervalRef.current = setInterval(() => {
                currentNumber += increment;

                if (currentNumber >= targetNumber) {
                    currentNumber = targetNumber;
                    clearInterval(intervalRef.current!);
                }

                const formattedNumber = Math.floor(currentNumber).toString();
                setAnimatedNumber(formattedNumber);
            }, 30);
        };

        return (
            <div ref={ref} className={`${this.decorateCSS("card")} ${coloredBackgroundClass}`} data-alignment={alignment}>
                <Base.H6 className={this.decorateCSS("card-subtitle")}>
                    {card.subtitle}
                </Base.H6>
                <Base.H2 className={this.decorateCSS("card-title")}>
                    {card.title}
                </Base.H2>


                {this.castToString(card.description) && (
                    <Base.P className={this.decorateCSS("card-description")}>
                        {card.description}
                    </Base.P>
                )}

                <div className={this.decorateCSS("card-number")}>
                    {animatedNumber}
                </div>
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

        const hasTopSection = subtitleExist || titleExist || descriptionExist || hasValidButtons;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {hasTopSection && (
                        <div className={this.decorateCSS("header-container")} data-alignment={alignment}>
                            {subtitleExist && (
                                <Base.H6 className={this.decorateCSS("subtitle")}>
                                    {this.getPropValue("subtitle")}
                                </Base.H6>
                            )}
                            {titleExist && (
                                <Base.H2 className={this.decorateCSS("title")}>
                                    {this.getPropValue("title")}
                                </Base.H2>
                            )}
                            {descriptionExist && (
                                <Base.P className={this.decorateCSS("description")}>
                                    {this.getPropValue("description")}
                                </Base.P>
                            )}
                        </div>
                    )}

                    {this.getPropValue("cards")?.length > 0 && (
                        <div className={this.decorateCSS("cards-container")}>
                            {this.castToObject<any[]>("cards").map((card: any, index: number) => (
                                <this.AnimatedCard
                                    key={index}
                                    card={card}
                                    coloredBackgroundClass={this.getColoredBackground()}
                                    alignment={alignment}
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
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Stats30Page;
