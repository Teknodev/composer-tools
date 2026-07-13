import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats18.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type CardData = {
    prefix: React.JSX.Element;
    value: React.JSX.Element;
    suffix: React.JSX.Element;
    subtitle: React.JSX.Element;
    title: React.JSX.Element;
    description: React.JSX.Element;
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
            key: "buttons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
            ],
        });

        this.addProp({
            type: "array",
            key: "card-list",
            displayer: "Stats Items",
            value: [
                {
                    type: "object",
                    key: "card",
                    displayer: "Stats Item",
                    value: [
                        { type: "string", key: "prefix", displayer: "Prefix", value: "$" },
                        { type: "string", key: "value", displayer: "Value", value: "50" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "M+" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "title", displayer: "Title", value: "Total investment in 2022" },
                        { type: "string", key: "description", displayer: "Description", value: "" },
                    ],
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Stats Item",
                    value: [
                        { type: "string", key: "prefix", displayer: "Prefix", value: "" },
                        { type: "string", key: "value", displayer: "Value", value: "5000" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "+" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "title", displayer: "Title", value: "Employees" },
                        { type: "string", key: "description", displayer: "Description", value: "" },
                    ],
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Stats Item",
                    value: [
                        { type: "string", key: "prefix", displayer: "Prefix", value: "" },
                        { type: "string", key: "value", displayer: "Value", value: "12" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "x" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "title", displayer: "Title", value: "Increased website traffic" },
                        { type: "string", key: "description", displayer: "Description", value: "" },
                    ],
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Stats Item",
                    value: [
                        { type: "string", key: "prefix", displayer: "Prefix", value: "" },
                        { type: "string", key: "value", displayer: "Value", value: "99" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "%" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "title", displayer: "Title", value: "Client Satisfaction" },
                        { type: "string", key: "description", displayer: "Description", value: "" },
                    ],
                },
            ],
        });

        this.addProp({
            type: "boolean",
            key: "showLine",
            displayer: "Line",
            value: true,
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
                {
                    type: "number",
                    key: "itemCount",
                    displayer: "Item Count in a Row",
                    value: 4,
                },
            ],
        });
    }

    static getName(): string {
        return "Stats 18";
    }

    render() {
        const subtitleExist = this.castToString(this.getPropValue("subtitle"));
        const titleExist = this.castToString(this.getPropValue("title"));
        const descriptionExist = this.castToString(this.getPropValue("description"));
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
        const hasValidButtons = buttons.some((btn) => this.castToString(btn.text));
        const showLine = !!this.getPropValue("showLine");

        const cards = this.castToObject<CardData[]>("card-list");

        const shouldAnimate = this.castToObject<any>("settings")?.shouldAnimate ?? true;
        const animationDuration = (this.castToObject<any>("settings")?.animationDuration ?? 2000) as number;
        const itemCount = this.castToObject<any>("settings")?.itemCount ?? 4;

        const hasTopSection = subtitleExist || titleExist || descriptionExist || hasValidButtons;

        const AnimatedCard = ({ card }: { card: CardData }) => {
            const ref = React.useRef<HTMLDivElement>(null);
            const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

            const rawValue = (this.castToString(card.value) as string) || "";
            const valPrefix = rawValue.match(/^[^\d]*/)?.[0] ?? "";
            const valSuffix = rawValue.match(/[^\d]*$/)?.[0] ?? "";
            const core = rawValue.slice(valPrefix.length, rawValue.length - valSuffix.length);
            const isNumeric = /\d/.test(core);
            const target = isNumeric ? parseFloat(core.replace(/,/g, "")) : NaN;
            const decimals = core.includes(".") ? core.split(".")[1]?.length ?? 0 : 0;
            const useGrouping = /,/.test(core);
            const reduceMotion = typeof window !== "undefined" && !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
            const animatable = shouldAnimate && isNumeric && !reduceMotion;

            const format = (n: number) => valPrefix + n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals, useGrouping }) + valSuffix;

            const [display, setDisplay] = React.useState<string>(() => (rawValue ? (animatable ? format(0) : rawValue) : ""));

            React.useEffect(() => {
                if (!rawValue) {
                    setDisplay("");
                    return;
                }
                if (!animatable) {
                    setDisplay(rawValue);
                    return;
                }
                const node = ref.current;
                if (!node || typeof IntersectionObserver === "undefined") {
                    setDisplay(rawValue);
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
                            setDisplay(rawValue);
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
            }, [rawValue, animatable, animationDuration, target]);

            const prefixExist = this.castToString(card.prefix);
            const suffixExist = this.castToString(card.suffix);
            const titleTextExist = this.castToString(card.title);
            const subtitleTextExist = this.castToString(card.subtitle);
            const descriptionTextExist = this.castToString(card.description);
            const valueExist = !!display;

            if (!valueExist && !prefixExist && !suffixExist && !titleTextExist && !subtitleTextExist && !descriptionTextExist) return null;

            return (
                <Base.VerticalContent className={this.decorateCSS("card")}>
                    {(valueExist || prefixExist || suffixExist) && (
                        <div ref={ref} className={`${this.decorateCSS("card-value")}${!showLine ? ` ${this.decorateCSS("no-line")}` : ""}`}>
                            {prefixExist && (
                                <span className={this.decorateCSS("stat-prefix")}>
                                    {card.prefix}
                                </span>
                            )}
                            {valueExist && (
                                <span className={this.decorateCSS("display-value")}>
                                    {display}
                                </span>
                            )}
                            {suffixExist && (
                                <span className={this.decorateCSS("stat-suffix")}>
                                    {card.suffix}
                                </span>
                            )}
                        </div>
                    )}
                    {showLine && <div className={this.decorateCSS("line")}></div>}
                    {subtitleTextExist && (
                        <Base.H6 className={this.decorateCSS("card-subtitle")}>
                            {card.subtitle}
                        </Base.H6>
                    )}
                    {titleTextExist && (
                        <Base.H5 className={this.decorateCSS("card-title")}>
                            {card.title}
                        </Base.H5>
                    )}
                    {descriptionTextExist && (
                        <Base.P className={this.decorateCSS("card-description")}>
                            {card.description}
                        </Base.P>
                    )}
                </Base.VerticalContent>
            );
        };

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {hasTopSection && (
                        <Base.VerticalContent className={this.decorateCSS("header-section")}>
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
                            {hasValidButtons && (
                                <Base.Row className={this.decorateCSS("button-container")}>
                                    {buttons.map((item: INPUTS.CastedButton, index: number) => {
                                        const buttonText = this.castToString(item.text);

                                        if (!buttonText) return null;

                                        return (
                                            <ComposerLink key={index} path={item.url}>
                                                <Base.Button
                                                    buttonType={item.type}
                                                    className={`${this.decorateCSS("button")} ${this.decorateCSS(`button-${index}`)}`}
                                                >
                                                    <Base.P className={`${this.decorateCSS("button-text")} ${this.decorateCSS(`button-text-${index}`)}`}>{item.text}</Base.P>
                                                </Base.Button>
                                            </ComposerLink>
                                        );
                                    })}
                                </Base.Row>
                            )}
                        </Base.VerticalContent>
                    )}

                    {cards.length > 0 && (
                        <Base.ListGrid
                            gridCount={{ pc: itemCount, tablet: 4, phone: 1 }}
                            className={this.decorateCSS("cards-grid")}
                        >
                            {cards.map((card: CardData, index: number) => (
                                <AnimatedCard key={`stat18-${index}`} card={card} />
                            ))}
                        </Base.ListGrid>
                    )}
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Stats18Page;
