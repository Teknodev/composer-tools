
import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats18.module.scss";
import { Base } from "../../../composer-base-components/base/base";

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
            type: "number",
            key: "animationDuration",
            displayer: "Animation Duration (ms)",
            value: 2000,
        });

        this.addProp({
            type: "number",
            key: "incrementValue",
            displayer: "Increment Value",
            value: 10,
        });

        this.addProp({
            type: "number",
            key: "itemCount",
            displayer: "Item Count in a Row",
            value: 4,
            max: 4,
        });
    }

    static getName(): string {
        return "Stats 18";
    }

    render() {
        const subtitle = this.getPropValue("subtitle");
        const title = this.getPropValue("title");
        const boldTitle = this.getPropValue("boldTitle");
        const description = this.getPropValue("description");
        const cardList = this.castToObject<CardData[]>("card-list");
        const animationDuration = this.getPropValue("animationDuration");

        const AnimatedCard = ({ card }: { card: CardData }) => {
            const [displayValue, setDisplayValue] = React.useState<string>("0");
            const ref = React.useRef<HTMLDivElement>(null);
            const hasAnimated = React.useRef(false);

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
                const valueStr = this.castToString(card.cardValue) as string;
                const numericPart = parseInt(valueStr.replace(/[^\d]/g, ""), 10) || 0;
                const prefix = valueStr.match(/^[^\d]+/)?.[0] || "";
                const suffix = valueStr.match(/[^\d]+$/)?.[0] || "";

                if (numericPart === 0) {
                    setDisplayValue(valueStr);
                    return;
                }

                let start = 0;
                const stepTime = Math.abs(Math.floor(animationDuration / numericPart));
                const effectiveStepTime = Math.max(stepTime, 20); // Performans için minimum 20ms
                const increment = Math.ceil(numericPart / (animationDuration / effectiveStepTime));

                const timer = setInterval(() => {
                    start += increment;
                    if (start >= numericPart) {
                        setDisplayValue(valueStr);
                        clearInterval(timer);
                    } else {
                        setDisplayValue(`${prefix}${start}${suffix}`);
                    }
                }, effectiveStepTime);
            };

            return (
                <div ref={ref} className={this.decorateCSS("card")}>
                    <Base.H2 className={this.decorateCSS("card-value")}>{displayValue}</Base.H2>
                    <Base.P className={this.decorateCSS("card-label")}>{card.cardLabel}</Base.P>
                </div>
            );
        };

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <Base.VerticalContent className={this.decorateCSS("header-section")}>
                        {this.castToString(subtitle) && (
                            <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                                {subtitle}
                            </Base.SectionSubTitle>
                        )}
                        {(this.castToString(title) || this.castToString(boldTitle)) && (
                            <Base.SectionTitle className={this.decorateCSS("title")}>
                                {title}
                                <span className={this.decorateCSS("bold-title")}>{boldTitle}</span>
                            </Base.SectionTitle>
                        )}
                        {this.castToString(description) && (
                            <Base.SectionDescription className={this.decorateCSS("description")}>
                                {description}
                            </Base.SectionDescription>
                        )}
                    </Base.VerticalContent>

                    {cardList.length > 0 && (
                        <Base.ListGrid
                            gridCount={{ pc: this.getPropValue("itemCount"), tablet: 2, phone: 1 }}
                            className={this.decorateCSS("cards-grid")}
                        >
                            {cardList.map((card, index) => (
                                <AnimatedCard key={index} card={card} />
                            ))}
                        </Base.ListGrid>
                    )}
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Stats18Page;