import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats23.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type Stat = {
    prefix: React.JSX.Element;
    number: React.JSX.Element;
    suffix: React.JSX.Element;
    title: React.JSX.Element;
    subtitle: React.JSX.Element;
    description: React.JSX.Element;
};

class Stats23 extends BaseStats {
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
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "FOUNDED" },
                        { type: "string", key: "title", displayer: "Title", value: "" },
                        { type: "string", key: "description", displayer: "Description", value: "Leverage agile frameworks to provide a robust synopsis for high level overviews" },
                    ],
                },
                {
                    type: "object",
                    key: "stat",
                    displayer: "Stat",
                    value: [
                        { type: "string", key: "prefix", displayer: "Prefix", value: "$" },
                        { type: "string", key: "number", displayer: "Value", value: "171" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "M" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "FUNDING" },
                        { type: "string", key: "title", displayer: "Title", value: "" },
                        { type: "string", key: "description", displayer: "Description", value: "Organically grow the holistic world view of disruptive innovation via workplace" },
                    ],
                },
                {
                    type: "object",
                    key: "stat",
                    displayer: "Stat",
                    value: [
                        { type: "string", key: "prefix", displayer: "Prefix", value: "" },
                        { type: "string", key: "number", displayer: "Value", value: "300" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "+" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "PEOPLE" },
                        { type: "string", key: "title", displayer: "Title", value: "" },
                        { type: "string", key: "description", displayer: "Description", value: "Bring to the table win-win survival strategies to ensure proactive domination" },
                    ],
                },
                {
                    type: "object",
                    key: "stat",
                    displayer: "Stat",
                    value: [
                        { type: "string", key: "prefix", displayer: "Prefix", value: "" },
                        { type: "string", key: "number", displayer: "Value", value: "4.500" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "+" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "SQUARE FEET" },
                        { type: "string", key: "title", displayer: "Title", value: "" },
                        { type: "string", key: "description", displayer: "Description", value: "Capitalize on low hanging fruit to identify a ballpark value added activity" },
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
        return "Stats 23";
    }

    render() {
        const subtitleExist = this.castToString(this.getPropValue("subtitle"));
        const titleExist = this.castToString(this.getPropValue("title"));
        const descriptionExist = this.castToString(this.getPropValue("description"));
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
        const hasValidButtons = buttons.some((btn) => this.castToString(btn.text));
        const alignment = Base.getContentAlignment();

        const settings = this.castToObject<any>("settings");
        const shouldAnimate = settings?.shouldAnimate ?? true;
        const animationDuration = (settings?.animationDuration ?? 2000) as number;
        const itemCount = this.getPropValue("itemCount") ?? 2;

        const hasTopSection = subtitleExist || titleExist || descriptionExist || hasValidButtons;

        const stats = this.castToObject<Stat[]>("stats");
        const hasStats = stats.length > 0;

        const AnimatedStat = ({ stat }: { stat: Stat }) => {
            const ref = React.useRef<HTMLSpanElement>(null);
            const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

            const rawNumber = (this.castToString(stat.number) as string) || "";
            const isNumeric = /\d/.test(rawNumber);
            const target = isNumeric ? parseFloat(rawNumber.replace(/,/g, "")) : NaN;
            const decimals = rawNumber.includes(".") ? rawNumber.split(".")[1]?.length ?? 0 : 0;
            const useGrouping = /,/.test(rawNumber);
            const reduceMotion = typeof window !== "undefined" && !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
            const animatable = shouldAnimate && isNumeric && !reduceMotion;

            const format = (n: number) => n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals, useGrouping });

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

            const titleTextExist = this.castToString(stat.title);
            const subtitleTextExist = this.castToString(stat.subtitle);
            const descriptionTextExist = this.castToString(stat.description);
            const prefixExist = this.castToString(stat.prefix);
            const suffixExist = this.castToString(stat.suffix);
            const valueExist = !!rawNumber;

            if (!valueExist && !suffixExist && !titleTextExist && !subtitleTextExist && !descriptionTextExist) return null;

            return (
                <Base.VerticalContent className={this.decorateCSS("stat-item")}>
                    {subtitleTextExist && (
                        <Base.P className={this.decorateCSS("stat-subtitle")}>
                            {stat.subtitle}
                        </Base.P>
                    )}
                    {titleTextExist && (
                        <Base.H5 className={this.decorateCSS("stat-title")}>
                            {stat.title}
                        </Base.H5>
                    )}
                    {(valueExist || suffixExist) && (
                        <span className={this.decorateCSS("stat-value")}>
                            {prefixExist && (
                                <span className={this.decorateCSS("stat-prefix")}>
                                    {stat.prefix}
                                </span>
                            )}
                            <span ref={ref} className={this.decorateCSS("stat-number")}>
                                {display}
                            </span>
                            {suffixExist && (
                                <span className={this.decorateCSS("stat-suffix")}>
                                    {stat.suffix}
                                </span>
                            )}
                        </span>
                    )}
                    {descriptionTextExist && (
                        <Base.H6 className={this.decorateCSS("stat-description")}>
                            {stat.description}
                        </Base.H6>
                    )}
                </Base.VerticalContent>
            );
        };

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={`${this.decorateCSS("content")} ${alignment === "center" ? this.decorateCSS("alignment-center") : ""}`}>
                        {hasTopSection && (
                            <Base.VerticalContent className={this.decorateCSS("header-container")}>
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

                        {hasStats && (
                            <Base.VerticalContent className={this.decorateCSS("stats-container")}>
                                <Base.ListGrid gridCount={{ pc: itemCount, tablet: 2, phone: 1 }} className={this.decorateCSS("stats-grid")}>
                                    {stats.map((stat: Stat, index: number) => (
                                        <AnimatedStat key={`stat23-${index}`} stat={stat} />
                                    ))}
                                </Base.ListGrid>
                            </Base.VerticalContent>
                        )}
                    </div>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Stats23;
