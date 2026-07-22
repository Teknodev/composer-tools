import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats17.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type StatItem = {
    prefix: string;
    prefixElement: JSX.Element;
    number: string;
    suffix: string;
    suffixElement: JSX.Element;
    title: string;
    titleElement: JSX.Element;
    subtitle: string;
    subtitleElement: JSX.Element;
    infoText: string;
    infoTextElement: JSX.Element;
};

class Stats17 extends BaseStats {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "boolean",
            key: "enable_card",
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
            value: "Everything about investing plus way more",
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
                INPUTS.BUTTON("button", "Button", "", "", null, null, "White"),
            ],
        });

        this.addProp({
            type: "boolean",
            key: "enable_divider",
            displayer: "Divider",
            value: true,
        });

        this.addProp({
            type: "array",
            key: "stats",
            displayer: "Stats",
            value: [
                {
                    type: "object", key: "stat", displayer: "Stat", value: [
                        { type: "string", key: "prefix", displayer: "Prefix", value: "" },
                        { type: "string", key: "number", displayer: "Value", value: "300" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "+" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "title", displayer: "Title", value: "Experienced people on the team" },
                        { type: "string", key: "infoText", displayer: "Info Text", value: "" },
                    ]
                },
                {
                    type: "object", key: "stat", displayer: "Stat", value: [
                        { type: "string", key: "prefix", displayer: "Prefix", value: "" },
                        { type: "string", key: "number", displayer: "Value", value: "20" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "+" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "title", displayer: "Title", value: "Cities where employees work" },
                        { type: "string", key: "infoText", displayer: "Info Text", value: "" },
                    ]
                },
                {
                    type: "object", key: "stat", displayer: "Stat", value: [
                        { type: "string", key: "prefix", displayer: "Prefix", value: "" },
                        { type: "string", key: "number", displayer: "Value", value: "180" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "+" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "title", displayer: "Title", value: "Days of product development" },
                        { type: "string", key: "infoText", displayer: "Info Text", value: "" },
                    ]
                },
            ],
        });

        this.addProp({
            type: "number",
            key: "itemCount",
            displayer: "Item Count in a Row",
            value: 3,
            max: 4,
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

    static getName(): string { return "Stats 17"; }

    render() {
        const title = this.castToString(this.getPropValue("title"));
        const subtitle = this.castToString(this.getPropValue("subtitle"));
        const description = this.castToString(this.getPropValue("description"));
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
        const hasValidButtons = buttons.some((btn) => this.castToString(btn.text));
        const enable_card = this.getPropValue("enable_card");
        const enable_divider = this.getPropValue("enable_divider");

        const settings = this.castToObject<any>("settings");
        const shouldAnimate = settings?.shouldAnimate ?? true;
        const animationDuration = (settings?.animationDuration ?? 2000) as number;
        const itemCount = this.getPropValue("itemCount") ?? 3;

        const alignment = Base.getContentAlignment();

        const statsItems = this.castToObject<{ prefix: JSX.Element; number: JSX.Element; suffix: JSX.Element; title: JSX.Element; subtitle: JSX.Element; infoText: JSX.Element }[]>("stats");
        const stats: StatItem[] = statsItems.map((item) => {
            const prefix = this.castToString(item.prefix) || "";
            const number = this.castToString(item.number) || "0";
            const suffix = this.castToString(item.suffix) || "";
            const title = this.castToString(item.title) || "";
            const subtitle = this.castToString(item.subtitle) || "";
            const infoText = this.castToString(item.infoText) || "";
            return { prefix, prefixElement: item.prefix, number, suffix, suffixElement: item.suffix, title, titleElement: item.title, subtitle, subtitleElement: item.subtitle, infoText, infoTextElement: item.infoText };
        });

        const hasTopSection = subtitle || title || description || hasValidButtons;
        const hasStats = stats.length > 0;

        const AnimatedStat = ({ stat }: { stat: StatItem }) => {
            const ref = React.useRef<HTMLSpanElement>(null);
            const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

            const rawNumber = (this.castToString(stat.number) as string) || "";
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

            const suffixExist = this.castToString(stat.suffix);
            const numberExist = !!display;
            const titleExist = this.castToString(stat.title);
            const subtitleExist = this.castToString(stat.subtitle);
            const infoTextExist = this.castToString(stat.infoText);

            if (!numberExist && !suffixExist && !titleExist && !subtitleExist && !infoTextExist) return null;

            return (
                <Base.VerticalContent className={this.decorateCSS("stat-item")}>
                    {(numberExist || suffixExist) && (
                        <span className={this.decorateCSS("stat-value")}>
                            {stat.prefix && (
                                <span className={this.decorateCSS("stat-prefix")}>
                                    {stat.prefixElement}
                                </span>
                            )}
                            <span ref={ref} className={this.decorateCSS("stat-number")}>
                                {display}
                            </span>
                            {suffixExist && (
                                <span className={this.decorateCSS("stat-suffix")}>
                                    {stat.suffixElement}
                                </span>
                            )}
                        </span>
                    )}
                    {subtitleExist && (
                        <Base.H6 className={this.decorateCSS("stat-subtitle")}>
                            {stat.subtitleElement}
                        </Base.H6>
                    )}
                    {titleExist && (
                        <Base.H5 className={this.decorateCSS("stat-title")}>
                            {stat.titleElement}
                        </Base.H5>
                    )}
                    {infoTextExist && (
                        <Base.P className={this.decorateCSS("stat-info-text")}>
                            {stat.infoTextElement}
                        </Base.P>
                    )}
                </Base.VerticalContent>
            );
        };

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={`${this.decorateCSS("card")} ${enable_card ? this.decorateCSS("has-background") : ""}`}>
                        <div className={`${this.decorateCSS("card-content")} ${(hasTopSection && hasStats && enable_divider) ? this.decorateCSS("has-divider") : ""}`}>

                            {hasTopSection && (
                                <div className={`${this.decorateCSS("header-container")} ${alignment === "center" ? this.decorateCSS("alignment-center") : ""}`}>
                                    <Base.VerticalContent className={this.decorateCSS("left-container")}>
                                        {subtitle && (
                                            <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                                                {this.getPropValue("subtitle")}
                                            </Base.SectionSubTitle>
                                        )}
                                        {title && (
                                            <Base.SectionTitle className={this.decorateCSS("title")}>
                                                {this.getPropValue("title")}
                                            </Base.SectionTitle>
                                        )}
                                    </Base.VerticalContent>

                                    {(description || hasValidButtons) && (
                                        <Base.VerticalContent className={this.decorateCSS("right-container")}>
                                            {description && (
                                                <Base.SectionDescription className={this.decorateCSS("description")}>
                                                    {this.getPropValue("description")}
                                                </Base.SectionDescription>
                                            )}
                                            {hasValidButtons && (
                                                <div className={this.decorateCSS("button-container")}>
                                                    {buttons.map(
                                                        (item: INPUTS.CastedButton, index: number) => {
                                                            const buttonText = this.castToString(item.text);
                                                            if (!buttonText) return null;

                                                            return (
                                                                <ComposerLink key={index} path={item.url}>
                                                                    <Base.Button
                                                                        buttonType={item.type}
                                                                        className={this.decorateCSS("button")}
                                                                    >
                                                                        <Base.P className={this.decorateCSS("button-text")}>
                                                                            {item.text}
                                                                        </Base.P>
                                                                    </Base.Button>
                                                                </ComposerLink>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            )}
                                        </Base.VerticalContent>
                                    )}
                                </div>
                            )}

                            {(hasTopSection && hasStats && enable_divider) && (
                                <div className={this.decorateCSS("divider")} />
                            )}

                            {hasStats && (
                                <Base.VerticalContent className={this.decorateCSS("stats-container")}>
                                    <Base.ListGrid gridCount={{ pc: itemCount, tablet: itemCount, phone: 1 }} className={this.decorateCSS("stats-grid")}>
                                        {stats.map((stat: StatItem, index: number) => (
                                            <AnimatedStat
                                                key={`stat17-${index}`}
                                                stat={stat}
                                            />
                                        ))}
                                    </Base.ListGrid>
                                </Base.VerticalContent>
                            )}

                        </div>
                    </div>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Stats17;
