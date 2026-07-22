import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats32.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

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

class Stats32 extends BaseStats {
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
            value: "Number of Completed Projects",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "",
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
                        { type: "string", key: "number", displayer: "Value", value: "500" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "+" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "title", displayer: "Title", value: "Clip Editing" },
                        { type: "string", key: "description", displayer: "Description", value: "" },
                    ],
                },
                {
                    type: "object",
                    key: "stat",
                    displayer: "Stat",
                    value: [
                        { type: "string", key: "prefix", displayer: "Prefix", value: "" },
                        { type: "string", key: "number", displayer: "Value", value: "75" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "+" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "title", displayer: "Title", value: "Camera Work" },
                        { type: "string", key: "description", displayer: "Description", value: "" },
                    ],
                },
                {
                    type: "object",
                    key: "stat",
                    displayer: "Stat",
                    value: [
                        { type: "string", key: "prefix", displayer: "Prefix", value: "" },
                        { type: "string", key: "number", displayer: "Value", value: "980" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "+" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "title", displayer: "Title", value: "Commercial Projects" },
                        { type: "string", key: "description", displayer: "Description", value: "" },
                    ],
                },
            ],
        });

        this.addProp({
            type: "boolean",
            key: "line",
            displayer: "Line",
            value: true,
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

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "White"),
            ],
        });
    }

    static getName(): string {
        return "Stats 32";
    }

    render() {
        const subtitleExist = this.castToString(this.getPropValue("subtitle"));
        const titleExist = this.castToString(this.getPropValue("title"));
        const descriptionExist = this.castToString(this.getPropValue("description"));
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
        const hasValidButtons = buttons.some((btn) => this.castToString(btn.text));
        const hasLeftSection = subtitleExist || titleExist || descriptionExist || hasValidButtons;
        const showDivider = this.getPropValue("line") !== false;

        const statsItems = this.castToObject<{ prefix: JSX.Element; number: JSX.Element; suffix: JSX.Element; title: JSX.Element; subtitle: JSX.Element; description: JSX.Element }[]>("stats");
        const stats: StatItem[] = statsItems.map((item) => {
            const prefix = this.castToString(item.prefix) || "";
            const number = this.castToString(item.number);
            const suffix = this.castToString(item.suffix) || "";
            const title = this.castToString(item.title) || "";
            const subtitle = this.castToString(item.subtitle) || "";
            const description = this.castToString(item.description) || "";
            return { prefix, prefixElement: item.prefix, number, suffix, suffixElement: item.suffix, title, titleElement: item.title, subtitle, subtitleElement: item.subtitle, description, descriptionElement: item.description };
        });

        const settings = this.castToObject<any>("settings");
        const shouldAnimate = settings?.shouldAnimate ?? true;
        const animationDuration = (settings?.animationDuration ?? 2000) as number;
        const alignment = Base.getContentAlignment();

        const AnimatedStat = ({ stat, showDivider }: { stat: StatItem; showDivider: boolean }) => {
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

            const titleExist = this.castToString(stat.title);
            const subtitleExist = this.castToString(stat.subtitle);
            const descriptionExist = this.castToString(stat.description);
            const valueExist = !!rawNumber;

            if (!valueExist && !titleExist && !subtitleExist && !descriptionExist) return null;

            return (
                <div className={this.decorateCSS("stat-item")}>
                    <div className={this.decorateCSS("stat-row")}>
                        <Base.VerticalContent className={this.decorateCSS("stat-info")}>
                            {subtitleExist && (
                                <Base.H6 className={this.decorateCSS("stat-subtitle")}>
                                    {stat.subtitleElement}
                                </Base.H6>
                            )}
                            {titleExist && (
                                <Base.H4 className={this.decorateCSS("stat-title")}>
                                    {stat.titleElement}
                                </Base.H4>
                            )}
                            {descriptionExist && (
                                <Base.P className={this.decorateCSS("stat-description")}>
                                    {stat.descriptionElement}
                                </Base.P>
                            )}
                        </Base.VerticalContent>
                        {(valueExist || stat.prefix || stat.suffix) && (
                            <span className={this.decorateCSS("stat-value")}>
                                {stat.prefix && (
                                    <span className={this.decorateCSS("stat-prefix")}>
                                        {stat.prefixElement}
                                    </span>
                                )}
                                {valueExist && (
                                    <span ref={ref} className={this.decorateCSS("stat-number")}>
                                        {display}
                                    </span>
                                )}
                                {stat.suffix && (
                                    <span className={this.decorateCSS("stat-suffix")}>
                                        {stat.suffixElement}
                                    </span>
                                )}
                            </span>
                        )}
                    </div>
                    {showDivider && <div className={this.decorateCSS("divider")} />}
                </div>
            );
        };

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("content-wrapper")}>
                        {hasLeftSection && (
                            <Base.VerticalContent className={`${this.decorateCSS("left-column")} ${alignment === "center" ? this.decorateCSS("alignment-center") : ""}`}>
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
                        {stats.length > 0 && (
                            <div className={this.decorateCSS("right-column")}>
                                {stats.map((stat: StatItem, index: number) => (
                                    <AnimatedStat
                                        key={`stat32-${index}`}
                                        stat={stat}
                                        showDivider={showDivider}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Stats32;
