import * as React from "react";
import { BaseStats, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./stats13.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
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
            type: "object",
            key: "imageCard",
            displayer: "Media",
            value: [
                {
                    type: "media",
                    key: "image",
                    displayer: "Media",
                    value: {
                        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69367e0a496aa1002ca9b081?alt=media",
                        type: "image",
                    },
                    additionalParams: { availableTypes: ["image", "video"] },
                },
                {
                    type: "boolean",
                    key: "enableOverlay",
                    displayer: "Overlay",
                    value: false,
                },
            ],
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
            key: "stats",
            displayer: "Stats",
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

        this.addProp({
            type: "object",
            key: "settings",
            displayer: "Settings",
            value: [
                {
                    type: "boolean",
                    key: "shouldAnimate",
                    displayer: "Animate Numbers",
                    value: true,
                },
                {
                    type: "number",
                    key: "animationDuration",
                    displayer: "Animation Duration (ms)",
                    value: 2000,
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

    render() {
        const imageCard = this.castToObject<any>("imageCard");
        const image = imageCard?.image;
        const isImageExist = !!image?.url;
        const ratingItems = this.castToObject<RatingItemType[]>("rating");
        const ratingNumberExist = this.castToString(this.getPropValue("ratingNumber"));
        const subtitleExist = this.castToString(this.getPropValue("subtitle"));
        const titleProp = this.getPropValue("title");
        const titleExist = this.castToString(titleProp);
        const descriptionExist = this.castToString(this.getPropValue("description"));
        const enableTextAnimation = this.getPropValue("enableTextAnimation");
        const statsItems = this.castToObject<StatItemType[]>("stats");
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
        const enableOverlay = !!imageCard?.enableOverlay;
        const hasContent = ratingItems.length > 0 || !!titleExist || buttons.length > 0 || statsItems.length > 0 || subtitleExist || descriptionExist;

        const settings = this.castToObject<any>("settings");
        const shouldAnimate = settings?.shouldAnimate ?? true;
        const animationDuration = (settings?.animationDuration ?? 2000) as number;

        const AnimatedStat = ({ item }: { item: StatItemType }) => {
            const ref = React.useRef<HTMLDivElement>(null);
            const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

            const rawNumber = (this.castToString(item.number) as string) || "";
            const prefix = rawNumber.match(/^[^\d]*/)?.[0] ?? "";
            const suffix = rawNumber.match(/[^\d]*$/)?.[0] ?? "";
            const core = rawNumber.slice(prefix.length, rawNumber.length - suffix.length);
            const isNumeric = /\d/.test(core);
            const target = isNumeric ? parseFloat(core.replace(/,/g, "")) : NaN;
            const decimals = core.includes(".") ? core.split(".")[1]?.length ?? 0 : 0;
            const useGrouping = /,/.test(core);
            const reduceMotion = typeof window !== "undefined" && !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
            const animatable = shouldAnimate && isNumeric && !reduceMotion;

            const format = (n: number) => prefix + n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals, useGrouping }) + suffix;

            const [display, setDisplay] = React.useState<string>(() => (rawNumber ? (animatable ? format(0) : rawNumber) : ""));

            React.useEffect(() => {
                if (!rawNumber) {
                    setDisplay("");
                    return;
                }
                if (!animatable) {
                    setDisplay(rawNumber);
                    return;
                }
                const node = ref.current;
                if (!node || typeof IntersectionObserver === "undefined") {
                    setDisplay(rawNumber);
                    return;
                }
                const clear = () => {
                    if (intervalRef.current) {
                        clearInterval(intervalRef.current);
                        intervalRef.current = null;
                    }
                };
                const run = () => {
                    clear();
                    setDisplay(format(0));
                    const steps = Math.max(1, Math.round(animationDuration / 30));
                    const increment = target / steps;
                    let current = 0;
                    intervalRef.current = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            clear();
                            setDisplay(rawNumber);
                            return;
                        }
                        setDisplay(format(current));
                    }, 30);
                };
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                run();
                                observer.unobserve(entry.target);
                            }
                        });
                    },
                    { threshold: 0.4 }
                );
                observer.observe(node);
                return () => {
                    observer.disconnect();
                    clear();
                };
            }, [rawNumber, animatable, animationDuration, target]);

            const symbol = item.symbol;
            const description = item.description;
            const symbolExist = this.castToString(symbol);
            const descriptionExist = this.castToString(description);

            if (!rawNumber && !symbolExist && !descriptionExist) return null;

            return (
                <div ref={ref} className={this.decorateCSS("stat-item")}>
                    {(!!display || symbolExist) && (
                        <Base.H2 className={this.decorateCSS("stat-number")}>
                            {!!display && display}
                            {symbolExist && <span className={this.decorateCSS("stat-symbol")}>{symbol}</span>}
                        </Base.H2>
                    )}
                    {descriptionExist && <Base.SectionDescription className={this.decorateCSS("stat-description")}>{description}</Base.SectionDescription>}
                </div>
            );
        };

        const alignment = Base.getContentAlignment();

        return (
            <Base.Container className={`${this.decorateCSS("container")} ${alignment === "center" ? this.decorateCSS("alignment-center") : ""} ${!isImageExist && this.decorateCSS("content-full-width")} ${!hasContent && this.decorateCSS("image-full-width")}`} isFull={true}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("wrapper")}>
                        {hasContent && (
                            <div className={this.decorateCSS("left-content")}>
                                <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
                                    {(ratingItems.length > 0 || ratingNumberExist) && (
                                        <Base.Row className={this.decorateCSS("rating-container")}>
                                            {ratingItems.map((item: RatingItemType, index: number) => {
                                                const iconExist = item.icon?.name || item.icon?.url;
                                                if (!iconExist) return null;
                                                return (
                                                    <div key={index} className={this.decorateCSS("rating-content")}>
                                                        <Base.Media
                                                            value={item.icon}
                                                            className={this.decorateCSS("icon")}
                                                        />
                                                    </div>
                                                );
                                            })}
                                            {ratingNumberExist && <Base.SectionDescription className={this.decorateCSS("rating-number")}>{this.getPropValue("ratingNumber")}</Base.SectionDescription>}
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
                                                    if (!buttonText && !item.icon) return null;

                                                    return (
                                                        <ComposerLink key={`dw-btn-${index}`} path={item.url || "#"}>
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
                                                {statsItems.map((item: StatItemType, index: number) => (
                                                    <AnimatedStat key={`stat-${index}`} item={item} />
                                                ))}
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
                                        <div className={this.decorateCSS("media-overlay")} />
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