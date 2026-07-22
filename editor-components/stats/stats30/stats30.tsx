import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats30.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type StatItem = {
    prefix: string;
    prefixElement: JSX.Element;
    statValue: string;
    suffix: string;
    suffixElement: JSX.Element;
    subtitle: string;
    subtitleElement: JSX.Element;
    title: string;
    titleElement: JSX.Element;
    description: string;
    descriptionElement: JSX.Element;
};

type RawStatItem = {
    prefix?: JSX.Element;
    value?: JSX.Element;
    number?: JSX.Element;
    suffix?: JSX.Element;
    title?: JSX.Element;
    subtitle?: JSX.Element;
    description?: JSX.Element;
};

export class Stats30 extends BaseStats {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "boolean",
            key: "coloredBackground",
            displayer: "Colored Background",
            value: true,
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

        this.addProp({
            type: "number",
            key: "itemCount",
            displayer: "Item Count in a Row",
            value: 2,
        });

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "Read More", "", null, null, "Primary"),
            ],
        });

        this.addProp({
            type: "object",
            key: "settings",
            displayer: "Settings",
            value: [
                { type: "boolean", key: "shouldAnimate", displayer: "Animate Numbers", value: true },
                { type: "number", key: "animationDuration", displayer: "Animation Duration (ms)", value: 2000 },
            ],
        });
    }

    static getName(): string {
        return "Stats 30";
    }

    getColoredBackground() {
        return this.getPropValue("coloredBackground") ? this.decorateCSS("colored-background") : "";
    }

    render() {
        const subtitleExist = this.castToString(this.getPropValue("subtitle"));
        const titleExist = this.castToString(this.getPropValue("title"));
        const descriptionExist = this.castToString(this.getPropValue("description"));
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
        const hasValidButtons = buttons.some((btn) => {
            const buttonText = this.castToString(btn.text);
            const iconExist = btn.icon && btn.icon.name;
            return buttonText || iconExist;
        });
        const alignment = Base.getContentAlignment();
        const hasTopSection = subtitleExist || titleExist || descriptionExist;

        const settings = this.castToObject<any>("settings");
        const shouldAnimate = settings?.shouldAnimate ?? true;
        const animationDuration = (settings?.animationDuration ?? 2000) as number;
        const itemCount = this.getPropValue("itemCount") ?? 2;

        const rawCards = this.castToObject<(RawStatItem & { card?: RawStatItem })[]>("cards") || [];
        const cards: StatItem[] = rawCards.map((item) => {
            const cardData = item?.card || item || {};
            return {
                prefix: this.castToString(cardData.prefix) || "",
                prefixElement: cardData.prefix,
                statValue: this.castToString(cardData.value) || this.castToString(cardData.number) || "",
                suffix: this.castToString(cardData.suffix) || "",
                suffixElement: cardData.suffix,
                subtitle: this.castToString(cardData.subtitle) || "",
                subtitleElement: cardData.subtitle,
                title: this.castToString(cardData.title) || "",
                titleElement: cardData.title,
                description: this.castToString(cardData.description) || "",
                descriptionElement: cardData.description,
            };
        });

        const AnimatedCard = ({ stat, coloredBackgroundClass }: { stat: StatItem; coloredBackgroundClass: string }) => {
            const ref = React.useRef<HTMLSpanElement>(null);
            const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

            const rawNumber = (this.castToString(stat.statValue) as string) || "";
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

            const titleExist = !!this.castToString(stat.title);
            const subtitleExist = !!this.castToString(stat.subtitle);
            const descriptionExist = !!this.castToString(stat.description);
            const valueExist = !!rawNumber;
            const suffixExist = !!this.castToString(stat.suffix);

            const hasValueGroup = valueExist || suffixExist || !!stat.prefix;
            const hasAnyContent = subtitleExist || titleExist || descriptionExist || hasValueGroup;
            if (!hasAnyContent) return null;

            return (
                <Base.VerticalContent className={`${this.decorateCSS("stat-item")}${coloredBackgroundClass ? ` ${coloredBackgroundClass}` : ""}`}>
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
                    {hasValueGroup && (
                        <span className={this.decorateCSS("stat-value-container")}>
                            {stat.prefix && (
                                <span className={this.decorateCSS("stat-prefix")}>
                                    {stat.prefixElement}
                                </span>
                            )}
                            {valueExist && (
                                <span ref={ref} className={this.decorateCSS("stat-value")}>
                                    {display}
                                </span>
                            )}
                            {suffixExist && (
                                <span className={this.decorateCSS("stat-suffix")}>
                                    {stat.suffixElement}
                                </span>
                            )}
                        </span>
                    )}
                </Base.VerticalContent>
            );
        };

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <Base.VerticalContent className={`${this.decorateCSS("content")} ${this.decorateCSS(`alignment-${alignment}`)}`}>
                        {hasTopSection && (
                            <Base.VerticalContent
                                className={this.decorateCSS("header-container")}
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
                                    <Base.SectionDescription className={this.decorateCSS("description")}>
                                        {this.getPropValue("description")}
                                    </Base.SectionDescription>
                                )}
                            </Base.VerticalContent>
                        )}

                        {cards.length > 0 && (
                            <Base.ListGrid
                                gridCount={{ pc: itemCount, tablet: 2, phone: 1 }}
                                className={this.decorateCSS("stats-container")}
                            >
                                {cards.map((stat: StatItem, index: number) => (
                                    <AnimatedCard
                                        key={index}
                                        stat={stat}
                                        coloredBackgroundClass={this.getColoredBackground()}
                                    />
                                ))}
                            </Base.ListGrid>
                        )}

                        {hasValidButtons && (
                            <div className={this.decorateCSS("button-container")}>
                                {buttons.map((item: INPUTS.CastedButton, index: number) => {
                                    const buttonText = this.castToString(item.text);
                                    const iconExist = item.icon && item.icon.name;
                                    if (!buttonText && !iconExist) return null;
                                    return (
                                        <ComposerLink key={index} path={item.url}>
                                            <Base.Button
                                                buttonType={item.type}
                                                className={this.decorateCSS("button")}
                                            >
                                                {buttonText && (
                                                    <Base.P className={this.decorateCSS("button-text")}>
                                                        {item.text}
                                                    </Base.P>
                                                )}
                                                {iconExist && (
                                                    <Base.Media className={this.decorateCSS("button-icon")} value={item.icon!} />
                                                )}
                                            </Base.Button>
                                        </ComposerLink>
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

export default Stats30;