import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats13.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { useState, useEffect } from "react";

class Stats13 extends BaseStats {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "media",
            key: "image",
            displayer: "Image",
            value: {
                url: "https://impreza-landing.us-themes.com/wp-content/uploads/2023/10/avel-chuklanov-DUmFLtMeAbQ-unsplash-1070x713.jpg",
                type: "image",
            }
        })

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Button",
            value: [
                INPUTS.BUTTON("button1", "Button 1", "Start Building", "", null, null, "Primary"),
                INPUTS.BUTTON("button2", "Button 2", "Test Drive FREE", "", null, null, "Primary")
            ],
        });

        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "Best-Rated Pormmerce Solution",
        });

        this.addProp({
            type: "boolean",
            key: "enableAnimation",
            displayer: "Title Animation",
            value: true,
        });

        // Rating Stars
        this.addProp({
            type: "array",
            key: "rating",
            displayer: "Rating",
            value: [
                {
                    type: "object",
                    key: "star1",
                    displayer: "star1",
                    value: [
                        {
                            type: "icon",
                            key: "icon",
                            displayer: "icon",
                            value: "FaStar",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "star2",
                    displayer: "star2",
                    value: [
                        {
                            type: "icon",
                            key: "icon",
                            displayer: "icon",
                            value: "FaStar",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "star3",
                    displayer: "star3",
                    value: [
                        {
                            type: "icon",
                            key: "icon",
                            displayer: "icon",
                            value: "FaStar",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "star4",
                    displayer: "star4",
                    value: [
                        {
                            type: "icon",
                            key: "icon",
                            displayer: "icon",
                            value: "FaStar",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "star4",
                    displayer: "star4",
                    value: [
                        {
                            type: "icon",
                            key: "icon",
                            displayer: "icon",
                            value: "FaStar",
                        },
                    ],
                },
            ],
        });

        // Stats Items
        this.addProp({
            type: "array",
            key: "stats-items",
            displayer: "Stats Items",
            value: [
                {
                    type: "object",
                    key: "stat1",
                    displayer: "Stat Item 1",
                    value: [
                        {
                            type: "string",
                            key: "number",
                            displayer: "Number",
                            value: "90"
                        },
                        {
                            type: "string",
                            key: "symbol",
                            displayer: "Symbol",
                            value: "k+"
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "People Trust Impreza"
                        }
                    ],
                },
                {
                    type: "object",
                    key: "stat2",
                    displayer: "Stat Item 2",
                    value: [
                        {
                            type: "string",
                            key: "number",
                            displayer: "Number",
                            value: "2.4"
                        },
                        {
                            type: "string",
                            key: "symbol",
                            displayer: "Symbol",
                            value: "k+"
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Average 5-Star Reviews"
                        }
                    ],
                },
            ],
        });
    }


    static getName(): string {
        return "Stats 13";
    }

    AnimatedNumber = ({ targetValue, duration = 4000 }: { targetValue: number, duration?: number }) => {
        const [currentValue, setCurrentValue] = useState(0);

        useEffect(() => {
            const startTime = Date.now();
            const startValue = 0;

            const updateNumber = () => {
                const now = Date.now();
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);

                const newValue = startValue + (targetValue - startValue) * easeOutQuart;
                setCurrentValue(newValue);

                if (progress < 1) {
                    requestAnimationFrame(updateNumber);
                } else {
                    setCurrentValue(targetValue);
                }
            };

            requestAnimationFrame(updateNumber);
        }, [targetValue, duration]);

        return <span>{currentValue.toFixed(targetValue % 1 === 0 ? 0 : 1)}</span>;
    };

    TypewriterText = ({ text, enableAnimation }: { text: string, enableAnimation: boolean }) => {
        const [displayedText, setDisplayedText] = useState(enableAnimation ? "" : (text || ""));
        useEffect(() => {
            if (!enableAnimation || !text) {
                if (!enableAnimation) {
                    setDisplayedText(text || "");
                }
                return;
            }
            const textToAnimate = text;
            const TYPE_SPEED = 100;
            let timeoutId: NodeJS.Timeout;
            let index = 0;
            setDisplayedText("");
            const animate = () => {
                if (index < textToAnimate.length) {
                    setDisplayedText(textToAnimate.substring(0, index + 1));
                    index++;
                    timeoutId = setTimeout(animate, TYPE_SPEED);
                }
            };
            timeoutId = setTimeout(animate, TYPE_SPEED);
            return () => clearTimeout(timeoutId);
        }, [text, enableAnimation]);

        return (
            <>{displayedText}</>
        );
    };

    render() {
        const image = this.getPropValue("image");
        const title = this.castToString(this.getPropValue("title"));
        const rating = this.getPropValue("rating");
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
        const enableAnimation = this.getPropValue("enableAnimation");
        const statsItems = this.getPropValue("stats-items");
        const hasContent = rating.length > 0 || !!title || buttons.length > 0 || statsItems.length > 0;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={`${this.decorateCSS("content")} ${!hasContent && this.decorateCSS("no-content")}`}>
                    <Base.ContainerGrid className={this.decorateCSS("grid")}>
                        {hasContent && (
                            <Base.GridCell className={this.decorateCSS("left-content")}>

                                {rating.length > 0 && (
                                    <div className={this.decorateCSS("rating-container")}>
                                        {this.castToObject<any>("rating").map((item: any, index: number) => {
                                            return (
                                                <div key={index} className={this.decorateCSS("rating-content")}>
                                                    <Base.Icon name={item.icon} propsIcon={{ className: this.decorateCSS("icon") }} />
                                                </div>
                                            );
                                        })}
                                        <Base.H3 className={this.decorateCSS("rating-number")}>4.89</Base.H3>
                                    </div>
                                )}

                                {title && (
                                    <div className={this.decorateCSS("title-container")}>
                                        <Base.SectionTitle className={this.decorateCSS("title")}>
                                            <this.TypewriterText
                                                text={title as string}
                                                enableAnimation={enableAnimation}
                                            />
                                        </Base.SectionTitle>
                                    </div>
                                )}

                                {buttons.length > 0 && (
                                    <div className={this.decorateCSS("button-container")}>
                                        {this.castToObject<any>("buttons").map((item: any, index: number) => {
                                            const buttonTextExist = this.castToString(item.text);
                                            return (
                                                buttonTextExist && (
                                                    <ComposerLink key={`stats-${index}`} path={item.url}>
                                                        <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                                                            {item.text}
                                                        </Base.Button>
                                                    </ComposerLink>
                                                )
                                            );
                                        })}
                                    </div>
                                )}

                                {statsItems.length > 0 && (
                                    <div className={this.decorateCSS("stats-container")}>
                                        {this.castToObject<any>("stats-items").map((item: any, index: number) => {
                                            const numberValue = this.castToString(item.getPropValue("number"));
                                            const number = parseFloat(numberValue) || 0;
                                            const symbol = this.castToString(item.getPropValue("symbol"));
                                            const description = this.castToString(item.getPropValue("description"));

                                            return (
                                                <div key={`stat-${index}`} className={this.decorateCSS("stat-item")}>
                                                    <div className={this.decorateCSS("stat-number")}>
                                                        <span className={this.decorateCSS("number")}>
                                                            <this.AnimatedNumber targetValue={number} duration={3000} />
                                                        </span>
                                                        <span className={this.decorateCSS("symbol")}>{symbol}</span>
                                                    </div>
                                                    <div className={this.decorateCSS("stat-description")}>{description}</div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}

                            </Base.GridCell>
                        )}
                        <Base.GridCell className={`${this.decorateCSS("right-content")} ${!hasContent && this.decorateCSS("full-width")}`}>
                            {image?.url && (
                                <img src={image.url} className={this.decorateCSS("image")} />
                            )}
                        </Base.GridCell>
                    </Base.ContainerGrid>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Stats13;