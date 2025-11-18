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
        });

        this.addProp({
            type: "string",
            key: "subTitle",
            displayer: "Subtitle",
            value: ""
        })

        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "Best-Rated Pormmerce Solution",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: ""
        })

        this.addProp({
            type: "string",
            key: "rating-number",
            displayer: "Rating Number",
            value: "4.89",
        });

        this.addProp({
            type: "boolean",
            key: "enableAnimation",
            displayer: "Animation",
            value: true,
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
                            type: "media",
                            key: "icon",
                            displayer: "icon",
                            value: {
                                type: "icon",
                                name: "FaStar"
                            },
                        },
                    ],
                },
                {
                    type: "object",
                    key: "star2",
                    displayer: "star2",
                    value: [
                        {
                            type: "media",
                            key: "icon",
                            displayer: "icon",
                            value: {
                                type: "icon",
                                name: "FaStar"
                            },
                        },
                    ],
                },
                {
                    type: "object",
                    key: "star3",
                    displayer: "star3",
                    value: [
                        {
                            type: "media",
                            key: "icon",
                            displayer: "icon",
                            value: {
                                type: "icon",
                                name: "FaStar"
                            },
                        },
                    ],
                },
                {
                    type: "object",
                    key: "star4",
                    displayer: "star4",
                    value: [
                        {
                            type: "media",
                            key: "icon",
                            displayer: "icon",
                            value: {
                                type: "icon",
                                name: "FaStar"
                            },
                        },
                    ],
                },
                {
                    type: "object",
                    key: "star5",
                    displayer: "star5",
                    value: [
                        {
                            type: "media",
                            key: "icon",
                            displayer: "icon",
                            value: {
                                type: "icon",
                                name: "FaStar"
                            },
                        },
                    ],
                },
            ],
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
        const subTitle = this.castToString(this.getPropValue("subTitle")) as string;
        const titleProp = this.getPropValue("title");
        const description = this.castToString(this.getPropValue("description")) as string;
        const titleString = this.castToString(titleProp) as string;
        const enableAnimation = this.getPropValue("enableAnimation");
        const statsItems = this.getPropValue("stats-items");
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
        const hasContent = rating.length > 0 || !!titleString || buttons.length > 0 || statsItems.length > 0 || subTitle.length > 0 || description.length > 0;

        return (
            <Base.Container isFull className={this.decorateCSS("container")}>
                <div className={this.decorateCSS("wrapper")}>
                    <Base.MaxContent className={` ${this.decorateCSS("left-content")} ${!image?.url ? this.decorateCSS("full-width") : ""}`}>
                        {rating.length > 0 && (
                            <Base.Row className={this.decorateCSS("rating-container")}>
                                {this.castToObject<any>("rating").map((item: any, index: number) => {
                                    return (
                                        <div key={index} className={this.decorateCSS("rating-content")}>
                                            <Base.Media
                                                value={item.icon}
                                                className={this.decorateCSS("icon")}
                                            />
                                        </div>
                                    );
                                })}
                                <Base.SectionDescription className={this.decorateCSS("rating-number")}>{ratingNumber}</Base.SectionDescription>
                            </Base.Row>
                        )}
                        {subTitle && subTitle.length > 0 && (
                            <Base.SectionSubTitle className={this.decorateCSS("sub-title")}>
                                {subTitle}
                            </Base.SectionSubTitle>
                        )}
                        {titleString && (
                            <Base.SectionTitle className={this.decorateCSS("title")}>
                                <this.TypewriterText
                                    content={titleProp}
                                    text={titleString}
                                    enableAnimation={enableAnimation}
                                />
                            </Base.SectionTitle>
                        )}
                        {description && description.length > 0 && (
                            <Base.SectionDescription className={this.decorateCSS("description")}>
                                {description}
                            </Base.SectionDescription>
                        )}
                        <div className={this.decorateCSS("child-container")}>
                            {buttons.length > 0 && (
                                <Base.Row className={this.decorateCSS("button-container")}>
                                    {buttons.map((item, index) => {
                                        const buttonText = this.castToString(item.text || "");
                                        const buttonUrl = item.url || "#";
                                        if (!buttonText && !item.icon) return null;

                                        return (
                                            <ComposerLink key={`dw-btn-${index}`} path={buttonUrl}>
                                                <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                                                    {item.icon && (
                                                        <Base.Media
                                                            className={this.decorateCSS("button-icon")}
                                                            value={{ type: "icon", name: item.icon }}
                                                        />
                                                    )}
                                                    {buttonText && <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>}
                                                </Base.Button>
                                            </ComposerLink>
                                        );
                                    })}
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
                                                <span className={this.decorateCSS("stat-number")}>

                                                    {enableAnimation ? (
                                                        <this.AnimatedNumber targetValue={number} duration={3000} />
                                                    ) : (
                                                        number
                                                    )}

                                                    <span>{symbol}</span>
                                                </span>
                                                <Base.SectionDescription className={this.decorateCSS("stat-description")}>{description}</Base.SectionDescription>
                                            </div>
                                        );
                                    })}
                                </Base.Row>
                            )}
                        </div>
                    </Base.MaxContent>
                    <div className={`${this.decorateCSS("right-content")} ${!hasContent ? this.decorateCSS("full-width") : ""}`}>
                        {image?.url && (
                            <Base.Media
                                value={image}
                                className={this.decorateCSS("image")}
                            />
                        )}
                    </div>
                </div>
            </Base.Container>
        );
    }
}

export default Stats13;