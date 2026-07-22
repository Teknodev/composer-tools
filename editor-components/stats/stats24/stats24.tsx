import * as React from "react";
import { BaseStats, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./stats24.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type StatItem = {
    icon: TypeMediaInputValue | string;
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

class Stats24 extends BaseStats {
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
                        { type: "media", key: "icon", displayer: "Icon", additionalParams: { availableTypes: ["image", "icon"] }, value: { type: "icon", name: "" } },
                        { type: "string", key: "prefix", displayer: "Prefix", value: "" },
                        { type: "string", key: "number", displayer: "Value", value: "25" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "+" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "title", displayer: "Title", value: "Experienced people on the team" },
                        { type: "string", key: "description", displayer: "Description", value: "" },
                    ],
                },
                {
                    type: "object",
                    key: "stat",
                    displayer: "Stat",
                    value: [
                        { type: "media", key: "icon", displayer: "Icon", additionalParams: { availableTypes: ["image", "icon"] }, value: { type: "icon", name: "" } },
                        { type: "string", key: "prefix", displayer: "Prefix", value: "" },
                        { type: "string", key: "number", displayer: "Value", value: "14" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "title", displayer: "Title", value: "Cities where employees work" },
                        { type: "string", key: "description", displayer: "Description", value: "" },
                    ],
                },
                {
                    type: "object",
                    key: "stat",
                    displayer: "Stat",
                    value: [
                        { type: "media", key: "icon", displayer: "Icon", additionalParams: { availableTypes: ["image", "icon"] }, value: { type: "icon", name: "" } },
                        { type: "string", key: "prefix", displayer: "Prefix", value: "" },
                        { type: "string", key: "number", displayer: "Value", value: "180" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "title", displayer: "Title", value: "Days of product development" },
                        { type: "string", key: "description", displayer: "Description", value: "" },
                    ],
                },
                {
                    type: "object",
                    key: "stat",
                    displayer: "Stat",
                    value: [
                        { type: "media", key: "icon", displayer: "Icon", additionalParams: { availableTypes: ["image", "icon"] }, value: { type: "icon", name: "IoInfiniteSharp" } },
                        { type: "string", key: "prefix", displayer: "Prefix", value: "" },
                        { type: "string", key: "number", displayer: "Value", value: "" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "title", displayer: "Title", value: "Infinite possibilities" },
                        { type: "string", key: "description", displayer: "Description", value: "" },
                    ],
                },
            ],
        });

        this.addProp({
            type: "number",
            key: "itemCount",
            displayer: "Item Count in a Row",
            value: 4,
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
        return "Stats 24";
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
        const itemCount = this.getPropValue("itemCount") ?? 4;

        const AnimatedStat = ({ stat }: { stat: StatItem }) => {
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
            const valueExist = this.castToString(stat.number);
            const suffixExist = this.castToString(stat.suffix);
            const prefixExist = this.castToString(stat.prefix);

            let iconObj: TypeMediaInputValue | undefined;
            let iconString = "";

            if (typeof stat.icon === "object") {
                iconObj = stat.icon as TypeMediaInputValue;
            } else if (typeof stat.icon === "string") {
                iconString = stat.icon;
            }

            const iconExist = iconObj ? !!((iconObj as any).name || (iconObj as any).url) : !!iconString;

            if (!valueExist && !suffixExist && !titleExist && !subtitleExist && !descriptionExist && !prefixExist && !iconExist) return null;

            return (
                <Base.VerticalContent className={this.decorateCSS("stat-item")}>
                    {(iconExist || valueExist || suffixExist || prefixExist) && (
                    <div className={this.decorateCSS("stat-header")}>
                        {iconExist && (
                            <div className={this.decorateCSS("stat-icon-wrapper")}>
                                <Base.Media
                                    value={iconObj ?? { type: "icon", name: iconString }}
                                    className={this.decorateCSS(iconObj?.type === "image" ? "stat-image" : "stat-icon")}
                                />
                            </div>
                        )}
                        {(valueExist || suffixExist || prefixExist) && (
                            <span className={this.decorateCSS("stat-value")}>
                                {prefixExist && (
                                    <span className={this.decorateCSS("stat-prefix")}>
                                        {stat.prefixElement}
                                    </span>
                                )}
                                {valueExist && (
                                    <span ref={ref} className={this.decorateCSS("stat-number")}>
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
                    </div>
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

        const hasTopSection = subtitleExist || titleExist || descriptionExist || hasValidButtons;

        const statsItems = this.castToObject<{ icon: any; prefix: JSX.Element; number: JSX.Element; suffix: JSX.Element; title: JSX.Element; subtitle: JSX.Element; description: JSX.Element }[]>("stats");
        const stats: StatItem[] = statsItems.map((item: any) => {
            const icon = item.icon;

            let iconProp: TypeMediaInputValue | string = "";
            if (icon && typeof icon === "object") {
                iconProp = icon;
            } else {
                iconProp = this.castToString(icon) || "";
            }

            const prefix = this.castToString(item.prefix) || "";
            const number = this.castToString(item.number) || "";
            const suffix = this.castToString(item.suffix) || "";
            const title = this.castToString(item.title) || "";
            const subtitle = this.castToString(item.subtitle) || "";
            const description = this.castToString(item.description) || "";

            return { icon: iconProp, prefix, prefixElement: item.prefix, number, suffix, suffixElement: item.suffix, title, titleElement: item.title, subtitle, subtitleElement: item.subtitle, description, descriptionElement: item.description };
        });

        const hasStats = stats.length > 0;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <Base.VerticalContent className={`${this.decorateCSS("content")} ${alignment === "center" ? this.decorateCSS("alignment-center") : ""}`}>
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
                            <div className={this.decorateCSS("card")}>
                                <Base.ListGrid gridCount={{ pc: itemCount, tablet: 4, phone: 1 }} className={this.decorateCSS("stats-grid")}>
                                    {stats.map((stat: StatItem, index: number) => (
                                        <AnimatedStat key={`stat24-${index}`} stat={stat} />
                                    ))}
                                </Base.ListGrid>
                            </div>
                        )}
                    </Base.VerticalContent>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Stats24;