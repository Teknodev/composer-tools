import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats21.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

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
    description: string;
    descriptionElement: JSX.Element;
};

class Stats21 extends BaseStats {
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
            value: "The most trusted way to build a value",
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
            key: "stats",
            displayer: "Stats",
            value: [
                {
                    type: "object",
                    key: "stat",
                    displayer: "Stat",
                    value: [
                        { type: "string", key: "prefix", displayer: "Prefix", value: "" },
                        { type: "string", key: "number", displayer: "Value", value: "2018" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "title", displayer: "Title", value: "History of success" },
                        { type: "string", key: "description", displayer: "Description", value: "" },
                    ],
                },
                {
                    type: "object",
                    key: "stat",
                    displayer: "Stat",
                    value: [
                        { type: "string", key: "prefix", displayer: "Prefix", value: "" },
                        { type: "string", key: "number", displayer: "Value", value: "1500" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "+" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "title", displayer: "Title", value: "Capitalize on low hanging fruit" },
                        { type: "string", key: "description", displayer: "Description", value: "" },
                    ],
                },
                {
                    type: "object",
                    key: "stat",
                    displayer: "Stat",
                    value: [
                        { type: "string", key: "prefix", displayer: "Prefix", value: "$" },
                        { type: "string", key: "number", displayer: "Value", value: "0.01" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "title", displayer: "Title", value: "Leverage agile frameworks" },
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
            max: 4,
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
        return "Stats 21";
    }

    render() {
        const subtitleExist = this.castToString(this.getPropValue("subtitle"));
        const titleExist = this.castToString(this.getPropValue("title"));
        const descriptionExist = this.castToString(this.getPropValue("description"));
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
        const hasValidButtons = buttons.some((btn) => this.castToString(btn.text));

        const hasHeaderSection = subtitleExist || titleExist || descriptionExist || hasValidButtons;

        const statsItems = this.castToObject<{ prefix: JSX.Element; number: JSX.Element; suffix: JSX.Element; title: JSX.Element; subtitle: JSX.Element; description: JSX.Element }[]>("stats");
        const stats: StatItem[] = statsItems.map((item) => {
            const prefix = this.castToString(item.prefix) || "";
            const number = this.castToString(item.number) || "0";
            const suffix = this.castToString(item.suffix) || "";
            const title = this.castToString(item.title) || "";
            const subtitle = this.castToString(item.subtitle) || "";
            const description = this.castToString(item.description) || "";
            return { prefix, prefixElement: item.prefix, number, suffix, suffixElement: item.suffix, title, titleElement: item.title, subtitle, subtitleElement: item.subtitle, description, descriptionElement: item.description };
        });

        const settings = this.castToObject<any>("settings");
        const shouldAnimate = settings?.shouldAnimate ?? true;
        const animationDuration = (settings?.animationDuration ?? 2000) as number;
        const itemCount = this.getPropValue("itemCount") ?? 2;
        const alignment = Base.getContentAlignment();

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

            const titleExist = this.castToString(stat.title);
            const subtitleExist = this.castToString(stat.subtitle);
            const descriptionExist = this.castToString(stat.description);

            if (!display && !titleExist && !subtitleExist && !descriptionExist) return null;

            return (
                <Base.VerticalContent className={this.decorateCSS("stat-item")}>
                    {!!display && (
                        <span ref={ref} className={this.decorateCSS("stat-value")}>
                            {stat.prefix && (
                                <span className={this.decorateCSS("stat-prefix")}>
                                    {stat.prefixElement}
                                </span>
                            )}
                            <span className={this.decorateCSS("stat-number")}>
                                {display}
                            </span>
                            {stat.suffix && (
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
                    {descriptionExist && (
                        <Base.P className={this.decorateCSS("stat-description")}>
                            {stat.descriptionElement}
                        </Base.P>
                    )}
                </Base.VerticalContent>
            );
        };

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <Base.ListGrid gridCount={{ pc: itemCount, tablet: 2, phone: 1 }} className={`${this.decorateCSS("stats-grid")} ${alignment === "center" ? this.decorateCSS("alignment-center") : ""}`}>
                        {hasHeaderSection && (
                            <Base.VerticalContent className={this.decorateCSS("header-item")}>
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
                        {stats.map((stat: StatItem, index: number) => (
                            <AnimatedStat key={`stat21-${index}`} stat={stat} />
                        ))}
                    </Base.ListGrid>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Stats21;
