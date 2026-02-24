
import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats18.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";

type CardData = {
    cardValue: React.JSX.Element;
    cardLabel: React.JSX.Element;
};

class Stats18Page extends BaseStats {
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
            value: "Our success in numbers ",
        });
        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
        });

        this.addProp({
            type: "array",
            key: "card-list",
            additionalParams: {
                maxElementCount: 4,
            },
            displayer: "Card List",
            value: [
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "string",
                            key: "cardValue",
                            displayer: "Value",
                            value: "$50M+",
                        },
                        {
                            type: "string",
                            key: "cardLabel",
                            displayer: "Label",
                            value: "Total investment in 2022",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "string",
                            key: "cardValue",
                            displayer: "Value",
                            value: "5000+",
                        },
                        {
                            type: "string",
                            key: "cardLabel",
                            displayer: "Label",
                            value: "Employees",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "string",
                            key: "cardValue",
                            displayer: "Value",
                            value: "12x",
                        },
                        {
                            type: "string",
                            key: "cardLabel",
                            displayer: "Label",
                            value: "Increased website traffic",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "string",
                            key: "cardValue",
                            displayer: "Value",
                            value: "99%",
                        },
                        {
                            type: "string",
                            key: "cardLabel",
                            displayer: "Label",
                            value: "Client Satisfaction",
                        },
                    ],
                },
            ],
        });

        this.addProp({
            type: "object",
            key: "animationSettings",
            displayer: "Animation Settings",
            value: [
                {
                    type: "number",
                    key: "duration",
                    displayer: "Animation Duration (ms)",
                    value: 2000,
                },
                {
                    type: "number",
                    key: "incrementValue",
                    displayer: "Increment Value",
                    value: 10,
                },
            ],
        });

        this.addProp({
            type: "number",
            key: "itemCount",
            displayer: "Item Count in a Row",
            value: 4,
            max: 4,
        });
        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "White")
            ],
        });
    }

    static getName(): string {
        return "Stats 18";
    }

    private parseValue(valueStr: string) {
        const numericMatch = valueStr.match(/(\d+)/);
        const numericPart = numericMatch ? parseInt(numericMatch[0], 10) : 0;
        const prefix = valueStr.split(/\d+/)[0] || "";
        const suffix = valueStr.split(/\d+/).slice(1).join("") || "";
        return { numericPart, prefix, suffix };
    }

    private renderAnimatedCard(card: CardData, animationSettings: any, index: number) {
        const getNestedValue = (key: string) => {
            if (Array.isArray(animationSettings)) {
                const prop = animationSettings.find((p: any) => p.key === key);
                return prop ? prop.value : undefined;
            }
            return undefined;
        };

        const animationDuration = Number(getNestedValue("duration")) || 2000;
        const propIncrementValue = Number(getNestedValue("incrementValue")) || 10;

        const AnimatedCard = ({ card }: { card: CardData }) => {
            const [displayValue, setDisplayValue] = React.useState<number>(0);
            const ref = React.useRef<HTMLDivElement>(null);
            const hasAnimated = React.useRef(false);

            const { numericPart, prefix, suffix } = this.parseValue(this.castToString(card.cardValue));

            React.useEffect(() => {
                const observer = new IntersectionObserver(
                    (entries) => {
                        if (entries[0].isIntersecting && !hasAnimated.current) {
                            animate();
                            hasAnimated.current = true;
                        }
                    },
                    { threshold: 0.1 }
                );

                if (ref.current) {
                    observer.observe(ref.current);
                }

                return () => observer.disconnect();
            }, [card.cardValue]);

            const animate = () => {
                if (numericPart === 0) {
                    setDisplayValue(0);
                    return;
                }

                let start = 0;
                const totalSteps = Math.ceil(numericPart / propIncrementValue);
                const stepTime = Math.max(Math.floor(animationDuration / totalSteps), 20);
                const increment = propIncrementValue;

                const timer = setInterval(() => {
                    start += increment;
                    if (start >= numericPart) {
                        setDisplayValue(numericPart);
                        clearInterval(timer);
                    } else {
                        setDisplayValue(start);
                    }
                }, stepTime);
            };

            return (
                <div ref={ref} className={this.decorateCSS("card")}>
                    <Base.H2 className={this.decorateCSS("card-value")}>
                        {prefix && <span className={this.decorateCSS("card-value-prefix")}>{prefix}</span>}
                        {displayValue}
                        {suffix && <span className={this.decorateCSS("card-value-suffix")}>{suffix}</span>}
                    </Base.H2>
                    <Base.P className={this.decorateCSS("card-label")}>{card.cardLabel}</Base.P>
                </div>
            );
        };

        return <AnimatedCard key={index} card={card} />;
    }

    render() {
        const subtitle = this.getPropValue("subtitle");
        const title = this.getPropValue("title");
        const description = this.getPropValue("description");
        const cardList = this.castToObject<CardData[]>("card-list");
        const animationSettings = this.getPropValue("animationSettings");
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <Base.VerticalContent className={this.decorateCSS("header-section")}>
                        {this.castToString(subtitle) && (
                            <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                                {subtitle}
                            </Base.SectionSubTitle>
                        )}
                        {(this.castToString(title)) && (
                            <Base.SectionTitle className={this.decorateCSS("title")}>
                                {title}
                            </Base.SectionTitle>
                        )}
                        {this.castToString(description) && (
                            <Base.SectionDescription className={this.decorateCSS("description")}>
                                {description}
                            </Base.SectionDescription>
                        )}
                        {buttons.length > 0 && (
                            <div className={this.decorateCSS("button-container")}>
                                {buttons.map((item: INPUTS.CastedButton, index: number) => {
                                    return (
                                        <div>
                                            {this.castToString(item.text) && (
                                                <ComposerLink path={item.url}>
                                                    <Base.Button
                                                        buttonType={item.type}
                                                        className={this.decorateCSS("button")}
                                                    >
                                                        {item.text}
                                                    </Base.Button>
                                                </ComposerLink>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </Base.VerticalContent>

                    {cardList.length > 0 && (
                        <Base.ListGrid
                            gridCount={{ pc: this.getPropValue("itemCount"), tablet: 1, phone: 1 }}
                            className={this.decorateCSS("cards-grid")}
                        >
                            {cardList.map((card, index) => this.renderAnimatedCard(card, animationSettings, index))}
                        </Base.ListGrid>
                    )}
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Stats18Page;