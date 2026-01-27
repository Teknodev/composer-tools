import * as React from "react";
import { BaseStats, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./stats13.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { useState, useEffect } from "react";

type RatingItemType = {
    icon: TypeMediaInputValue;
}

type StatItemType = {
    number: React.JSX.Element;
    symbol: React.JSX.Element;
    description: React.JSX.Element;
}

class Stats13 extends BaseStats {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "media",
            key: "image",
            displayer: "Media",
            value: {
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69367e0a496aa1002ca9b081?alt=media",
                type: "image",
            },
            additionalParams: { availableTypes: ["image", "video"] }
        });

        this.addProp({
            type: "boolean",
            key: "enableOverlay",
            displayer: "Overlay",
            value: false,
        });


        this.addProp({
            type: "string",
            key: "subtitle",
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
            key: "ratingNumber",
            displayer: "Rating Number",
            value: "4.89",
        });

        this.addProp({
            type: "boolean",
            key: "enableTextAnimation",
            displayer: "Text Animation",
            value: true,
        });

        this.addProp({
            type: "boolean",
            key: "enableStatAnimation",
            displayer: "Stat Animation",
            value: true,
        });

        this.addProp({
            type: "array",
            key: "rating",
            displayer: "Rating",
            value: [
                {
                    type: "object",
                    key: "icon",
                    displayer: "Icon",
                    value: [
                        {
                            type: "media",
                            key: "icon",
                            displayer: "Icon",
                            additionalParams: {
                                availableTypes: ["image", "icon"]
                            },
                            value: {
                                type: "icon",
                                name: "FaStar"
                            },
                        },
                    ],
                },
                {
                    type: "object",
                    key: "icon",
                    displayer: "Icon",
                    value: [
                        {
                            type: "media",
                            key: "icon",
                            displayer: "Icon",
                            additionalParams: {
                                availableTypes: ["image", "icon"]
                            },
                            value: {
                                type: "icon",
                                name: "FaStar"
                            },
                        },
                    ],
                },
                {
                    type: "object",
                    key: "icon",
                    displayer: "Icon",
                    value: [
                        {
                            type: "media",
                            key: "icon",
                            displayer: "Icon",
                            additionalParams: {
                                availableTypes: ["image", "icon"]
                            },
                            value: {
                                type: "icon",
                                name: "FaStar"
                            },
                        },
                    ],
                },
                {
                    type: "object",
                    key: "icon",
                    displayer: "Icon",
                    value: [
                        {
                            type: "media",
                            key: "icon",
                            displayer: "Icon",
                            additionalParams: {
                                availableTypes: ["image", "icon"]
                            },
                            value: {
                                type: "icon",
                                name: "FaStar"
                            },
                        },
                    ],
                },
                {
                    type: "object",
                    key: "icon",
                    displayer: "Icon",
                    value: [
                        {
                            type: "media",
                            key: "icon",
                            displayer: "Icon",
                            additionalParams: {
                                availableTypes: ["image", "icon"]
                            },
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
            key: "statsItems",
            displayer: "Stats Items",
            value: [
                {
                    type: "object",
                    key: "stat",
                    displayer: "Stat Item",
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
                    key: "stat",
                    displayer: "Stat Item",
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
        const TYPE_SPEED = 100;

        useEffect(() => {
            setIsCompleted(false);
            setDisplayedText("");

            let currentIndex = 0;
            let timeoutId: NodeJS.Timeout;

            const typeNextChar = () => {
                if (currentIndex < text.length) {
                    setDisplayedText(text.slice(0, ++currentIndex));
                    timeoutId = setTimeout(typeNextChar, TYPE_SPEED);
                } else {
                    setIsCompleted(true);
                }
            };

            timeoutId = setTimeout(typeNextChar, TYPE_SPEED);

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
            let animationId: number;
            const easeOutQuart = (t: number): number => 1 - Math.pow(1 - t, 4);
            const lerp = (start: number, end: number, t: number): number => start + (end - start) * t;

            const animate = () => {
                const progress = Math.min((Date.now() - startTime) / duration, 1);
                const easedProgress = easeOutQuart(progress);

                setCurrentValue(lerp(0, targetValue, easedProgress));
                if (progress < 1) {
                    animationId = requestAnimationFrame(animate);
                }
            };
            animationId = requestAnimationFrame(animate);
            return () => cancelAnimationFrame(animationId);
        }, [targetValue, duration]);

        const decimalPlaces = targetValue % 1 === 0 ? 0 : 1;
        return <span>{currentValue.toFixed(decimalPlaces)}</span>;
    };

    render() {
        const image = this.getPropValue("image");
        const isImageExist = !!image?.url;
        const ratingItems = this.castToObject<RatingItemType[]>("rating");
        const subtitleExist = this.castToString(this.getPropValue("subtitle"));
        const titleProp = this.getPropValue("title");
        const titleExist = this.castToString(titleProp);
        const descriptionExist = this.castToString(this.getPropValue("description"));
        const enableTextAnimation = this.getPropValue("enableTextAnimation");
        const enableStatAnimation = this.getPropValue("enableStatAnimation");
        const statsItems = this.castToObject<StatItemType[]>("statsItems");
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
        const enableOverlay = this.getPropValue("enableOverlay");
        const hasContent = ratingItems.length > 0 || !!titleExist || buttons.length > 0 || statsItems.length > 0 || subtitleExist || descriptionExist;

        return (
            <Base.Container className={`${this.decorateCSS("container")} ${!isImageExist && this.decorateCSS("content-full-width")} ${!hasContent && this.decorateCSS("image-full-width")}`} isFull={true}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("wrapper")}>
                        {hasContent && (
                            <div className={this.decorateCSS("left-content")}>
                                <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
                                    {ratingItems.length > 0 && (
                                        <Base.Row className={this.decorateCSS("rating-container")}>
                                            {ratingItems.map((item: RatingItemType, index: number) => {
                                                return (
                                                    <div key={index} className={this.decorateCSS("rating-content")}>
                                                        <Base.Media
                                                            value={item.icon}
                                                            className={this.decorateCSS("icon")}
                                                        />
                                                    </div>
                                                );
                                            })}
                                            <Base.SectionDescription className={this.decorateCSS("rating-number")}>{this.getPropValue("ratingNumber")}</Base.SectionDescription>
                                        </Base.Row>
                                    )}
                                    {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}> {this.getPropValue("subtitle")} </Base.SectionSubTitle>}
                                    {titleExist && (<Base.SectionTitle className={this.decorateCSS("title")}><this.TypewriterText content={titleProp} text={titleExist as string} enableAnimation={enableTextAnimation} /></Base.SectionTitle>)}
                                    {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}> {this.getPropValue("description")} </Base.SectionDescription>}
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
                                                {statsItems.map((item: StatItemType, index: number) => {
                                                    const numberAsString = this.castToString(item.number);
                                                    const parsedNumber = parseFloat(numberAsString as string) || 0;
                                                    const symbol = item.symbol;
                                                    const description = item.description;

                                                    return (
                                                        <div key={`stat-${index}`} className={this.decorateCSS("stat-item")}>
                                                            <Base.H2 className={this.decorateCSS("stat-number")}>
                                                                {enableStatAnimation ? (
                                                                    <this.AnimatedNumber targetValue={parsedNumber} duration={3000} />
                                                                ) : (
                                                                    parsedNumber
                                                                )}
                                                                <span className={this.decorateCSS("stat-symbol")}>{symbol}</span>
                                                            </Base.H2>
                                                            <Base.SectionDescription className={this.decorateCSS("stat-description")}>{description}</Base.SectionDescription>
                                                        </div>
                                                    );
                                                })}
                                            </Base.Row>
                                        )}
                                    </div>
                                </Base.VerticalContent>
                            </div>
                        )}
                        {isImageExist && (
                            <div className={this.decorateCSS("right-content")}>
                                <div className={this.decorateCSS("image-wrapper")}>
                                    <Base.Media
                                        value={image}
                                        className={this.decorateCSS("image")}
                                    />
                                    {enableOverlay && (
                                        <div className={this.decorateCSS("overlay")}></div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Stats13;