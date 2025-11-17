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
                url: "https://res.cloudinary.com/dmydg7kum/image/upload/v1763361329/avel-chuklanov-DUmFLtMeAbQ-unsplash-1070x713_heioka.jpg",
                type: "image",
            },

            additionalParams: { availableTypes: ["image", "video"] }
        })

        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "Best-Rated Pormmerce Solution",
        });

        this.addProp({
            type: "boolean",
            key: "enableAnimation",
            displayer: "Animation",
            value: true,
        });

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "Start Building", "", null, null, "Primary"),
                INPUTS.BUTTON("button", "Button", "Test Drive FREE", "", null, null, "White")
            ],
        });

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

        this.addProp({
            type: "string",
            key: "rating-number",
            displayer: "Rating Number",
            value: "4.89",
        });


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

    TypewriterText = ({ content, text, enableAnimation }: { content: any, text: string, enableAnimation: boolean }) => {
        if (!enableAnimation || !text) {
            return <>{content}</>;
        }

        const [displayedText, setDisplayedText] = useState("");
        const [isCompleted, setIsCompleted] = useState(false);
        useEffect(() => {
            setIsCompleted(false);
            setDisplayedText("");

            const textToAnimate = text;
            const TYPE_SPEED = 100;
            let timeoutId: NodeJS.Timeout;
            let index = 0;

            const animate = () => {
                if (index < textToAnimate.length) {
                    setDisplayedText(textToAnimate.substring(0, index + 1));
                    index++;
                    timeoutId = setTimeout(animate, TYPE_SPEED);
                } else {
                    setIsCompleted(true);
                }
            };
            timeoutId = setTimeout(animate, TYPE_SPEED);
            return () => clearTimeout(timeoutId);
        }, [text, enableAnimation]);

        if (isCompleted) {
            return <>{content}</>;
        }

        return <>{displayedText}</>;
    };

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

    render() {
        const image = this.getPropValue("image");
        const rating = this.getPropValue("rating");
        const ratingNumber = this.getPropValue("rating-number");
        const titleNode = this.getPropValue("title");
        const titleString = this.castToString(titleNode) as string;
        const enableAnimation = this.getPropValue("enableAnimation");
        const buttonItem = this.castToObject<INPUTS.CastedButton[]>("buttons");
        const statsItems = this.getPropValue("stats-items");
        const hasContent = rating.length > 0 || !!titleString || buttonItem.length > 0 || statsItems.length > 0;

        return (
            <Base.Container className={`${this.decorateCSS("container")} ${!image?.url ? this.decorateCSS("no-image") : ""}`}>
                <Base.MaxContent className={`${this.decorateCSS("content")} ${!hasContent && this.decorateCSS("no-content")}`}>
                    <div className={`${this.decorateCSS("wrapper")} ${!image?.url ? this.decorateCSS("full-width") : ""}`}>
                        {hasContent && (
                            <Base.VerticalContent className={this.decorateCSS("left-content")}>

                                {rating.length > 0 && (
                                    <Base.Row className={this.decorateCSS("rating-container")}>
                                        {this.castToObject<any>("rating").map((item: any, index: number) => {
                                            return (
                                                <div key={index} className={this.decorateCSS("rating-content")}>
                                                    <Base.Icon name={item.icon} propsIcon={{ className: this.decorateCSS("icon") }} />
                                                </div>
                                            );
                                        })}
                                        <Base.SectionDescription className={this.decorateCSS("rating-number")}>{ratingNumber}</Base.SectionDescription>
                                    </Base.Row>
                                )}
                                {titleString && (
                                    <Base.SectionTitle className={this.decorateCSS("title")}>
                                        <this.TypewriterText
                                            content={titleNode}
                                            text={titleString}
                                            enableAnimation={enableAnimation}
                                        />
                                    </Base.SectionTitle>
                                )}
                                {buttonItem.length > 0 && (
                                    <Base.Row className={this.decorateCSS("button-container")}>
                                        {buttonItem.map(
                                            (buttonObj, index: number) => {
                                                const buttonText = this.castToString(
                                                    buttonObj.text
                                                );
                                                const url = buttonObj.url;
                                                if (buttonText) {
                                                    return (
                                                        <ComposerLink key={index} path={url}>
                                                            <Base.Button buttonType={buttonObj.type} className={this.decorateCSS("button")}>
                                                                {buttonObj.text}
                                                            </Base.Button>
                                                        </ComposerLink>
                                                    );
                                                }
                                            }
                                        )}
                                    </Base.Row>
                                )}
                                {statsItems.length > 0 && (
                                    <Base.Row className={this.decorateCSS("stats-container")}>
                                        {this.castToObject<any>("stats-items").map((item: any, index: number) => {
                                            const numberValue = this.castToString(item.getPropValue("number")) as string;
                                            const number = parseFloat(numberValue) || 0;
                                            const symbol = this.castToString(item.getPropValue("symbol"));
                                            const description = item.getPropValue("description");

                                            return (
                                                <div key={`stat-${index}`} className={this.decorateCSS("stat-item")}>
                                                    <Base.H3 className={this.decorateCSS("stat-number")}>
                                                        <span>
                                                            {enableAnimation ? (
                                                                <this.AnimatedNumber targetValue={number} duration={3000} />
                                                            ) : (
                                                                number
                                                            )}
                                                        </span>
                                                        <span>{symbol}</span>
                                                    </Base.H3>
                                                    <Base.SectionDescription className={this.decorateCSS("stat-description")}>{description}</Base.SectionDescription>
                                                </div>
                                            );
                                        })}
                                    </Base.Row>
                                )}
                            </Base.VerticalContent>
                        )}
                        <div className={!!hasContent ? this.decorateCSS("right-content") : this.decorateCSS("has-content")}>
                            {image?.url && (
                                <img src={image.url} className={this.decorateCSS("image")} />
                            )}
                        </div>
                    </div>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Stats13;