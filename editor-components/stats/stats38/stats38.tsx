import * as React from "react";
import { BaseStats, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./stats38.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type MediaCard = {
    media: TypeMediaInputValue;
    overlay: boolean;
};

type StatItem = {
    prefix: string;
    prefixElement: React.JSX.Element;
    number: string;
    numberElement: React.JSX.Element;
    suffix: string;
    suffixElement: React.JSX.Element;
    subtitle: string;
    subtitleElement: React.JSX.Element;
    title: string;
    titleElement: React.JSX.Element;
    description: string;
    descriptionElement: React.JSX.Element;
};

class Stats38 extends BaseStats {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "string",
            key: "subtitle",
            displayer: "Subtitle",
            value: ""
        });

        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "Boost your sales productivity",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution."
        });

        this.addProp({
            type: "object",
            key: "mediaCard",
            displayer: "Media",
            value: [
                {
                    type: "media",
                    key: "media",
                    displayer: "Media",
                    additionalParams: {
                        availableTypes: ["image", "video"]
                    },
                    value: {
                        type: "image",
                        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/698f381d771c03002cc28774?alt=media",
                    },
                },
                {
                    type: "boolean",
                    key: "overlay",
                    displayer: "Overlay",
                    value: false,
                },
            ],
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
                        { type: "string", key: "number", displayer: "Value", value: "10" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "x" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "Increase in revenue" },
                        { type: "string", key: "title", displayer: "Title", value: "" },
                        { type: "string", key: "description", displayer: "Description", value: "" },
                    ],
                },
                {
                    type: "object",
                    key: "stat",
                    displayer: "Stat",
                    value: [
                        { type: "string", key: "prefix", displayer: "Prefix", value: "" },
                        { type: "string", key: "number", displayer: "Value", value: "250" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "%" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "Increase in signups" },
                        { type: "string", key: "title", displayer: "Title", value: "" },
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

    static getName(): string { return "Stats 38"; }

    render() {
        const title = this.castToString(this.getPropValue("title"));
        const subtitle = this.castToString(this.getPropValue("subtitle"));
        const description = this.castToString(this.getPropValue("description"));
        const mediaCard = this.castToObject<MediaCard>("mediaCard");
        const media = mediaCard.media;
        const overlay = !!mediaCard.overlay;
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
        const hasValidButtons = buttons.some(btn => this.castToString(btn.text) || (btn.icon && btn.icon.name));
        const alignment = Base.getContentAlignment();

        const mediaExist = media && media.url;

        const statsRaw = this.castToObject<{ prefix: React.JSX.Element; number: React.JSX.Element; suffix: React.JSX.Element; title: React.JSX.Element; subtitle: React.JSX.Element; description: React.JSX.Element }[]>("stats");

        const stats: StatItem[] = statsRaw.map((item) => ({
            prefix: this.castToString(item.prefix) || "",
            prefixElement: item.prefix,
            number: this.castToString(item.number) || "",
            numberElement: item.number,
            suffix: this.castToString(item.suffix) || "",
            suffixElement: item.suffix,
            subtitle: this.castToString(item.subtitle) || "",
            subtitleElement: item.subtitle,
            title: this.castToString(item.title) || "",
            titleElement: item.title,
            description: this.castToString(item.description) || "",
            descriptionElement: item.description,
        }));

        const settings = this.castToObject<any>("settings");
        const shouldAnimate = settings?.shouldAnimate ?? true;
        const animationDuration = (settings?.animationDuration ?? 2000) as number;
        const itemCountInRow = this.getPropValue("itemCount") ?? 2;

        const titleExist = this.castToString(title);
        const subtitleExist = this.castToString(subtitle);
        const descriptionExist = this.castToString(description);
        const hasTextSection = subtitleExist || titleExist || descriptionExist || hasValidButtons;
        const hasStats = stats.some(s => s.number || s.prefix || s.suffix || s.subtitle || s.title || s.description);
        const noText = !hasTextSection && !hasStats;

        const AnimatedStat = ({ stat }: { stat: StatItem }) => {
            const ref = React.useRef<HTMLSpanElement>(null);
            const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

            const rawNumber = (this.castToString(stat.numberElement) as string) || "";
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

            const valueExist = !!rawNumber;
            const prefixExist = !!stat.prefix;
            const suffixExist = !!stat.suffix;
            const subtitleExist = this.castToString(stat.subtitle);
            const titleExist = this.castToString(stat.title);
            const descriptionExist = this.castToString(stat.description);

            if (!valueExist && !prefixExist && !suffixExist && !subtitleExist && !titleExist && !descriptionExist) return null;

            return (
                <Base.VerticalContent
                    className={this.decorateCSS("stat-item")}
                    data-alignment="left"
                >
                    {(valueExist || prefixExist || suffixExist) && (
                        <span ref={ref} className={this.decorateCSS("stat-value-container")}>
                            {prefixExist && (
                                <span className={this.decorateCSS("stat-prefix")}>{stat.prefixElement}</span>
                            )}
                            {valueExist && (
                                <span className={this.decorateCSS("stat-value")}>{display}</span>
                            )}
                            {suffixExist && (
                                <span className={this.decorateCSS("stat-suffix")}>{stat.suffixElement}</span>
                            )}
                        </span>
                    )}
                    {subtitleExist && (
                        <Base.H6
                            className={this.decorateCSS("stat-subtitle")}
                        >
                            {stat.subtitleElement}
                        </Base.H6>
                    )}
                    {titleExist && (
                        <Base.H5
                            className={this.decorateCSS("stat-title")}
                        >
                            {stat.titleElement}
                        </Base.H5>
                    )}
                    {descriptionExist && (
                        <Base.P
                            className={this.decorateCSS("stat-description")}
                        >
                            {stat.descriptionElement}
                        </Base.P>
                    )}
                </Base.VerticalContent>
            );
        };

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <Base.ListGrid
                        className={`${this.decorateCSS("content-wrapper")} ${mediaExist ? this.decorateCSS("has-media") : this.decorateCSS("no-media")} ${noText ? this.decorateCSS("no-text") : ""}`}
                        gridCount={{ pc: !mediaExist || noText ? 1 : 2, tablet: !mediaExist || noText ? 1 : 2, phone: 1 }}
                    >
                        {(hasTextSection || hasStats) && (
                            <div
                                className={this.decorateCSS("text-card")}
                                data-alignment={alignment}
                            >
                                <Base.VerticalContent
                                    className={this.decorateCSS("text-container")}
                                    data-alignment={alignment}
                                >
                                    {subtitleExist && (
                                        <Base.SectionSubTitle
                                            className={this.decorateCSS("subtitle")}
                                        >
                                            {this.getPropValue("subtitle")}
                                        </Base.SectionSubTitle>
                                    )}
                                    {titleExist && (
                                        <Base.SectionTitle
                                            className={this.decorateCSS("title")}
                                        >
                                            {this.getPropValue("title")}
                                        </Base.SectionTitle>
                                    )}
                                    {descriptionExist && (
                                        <Base.SectionDescription
                                            className={this.decorateCSS("description")}

                                        >
                                            {this.getPropValue("description")}
                                        </Base.SectionDescription>
                                    )}
                                    {hasValidButtons && (
                                        <div
                                            className={this.decorateCSS("button-container")}
                                            data-alignment={!mediaExist ? alignment : "left"}
                                        >
                                            {buttons.map((item: INPUTS.CastedButton, index: number) => {
                                                const buttonText = this.castToString(item.text);
                                                const iconExist = item.icon && item.icon.name;
                                                if (!buttonText && !iconExist) return null;
                                                return (
                                                    <ComposerLink key={index} path={item.url}>
                                                        <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                                                            {buttonText && <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>}
                                                            {iconExist && <Base.Media className={this.decorateCSS("button-icon")} value={item.icon!} />}
                                                        </Base.Button>
                                                    </ComposerLink>
                                                );
                                            })}
                                        </div>
                                    )}
                                </Base.VerticalContent>

                                {hasStats && (
                                    <Base.VerticalContent
                                        className={this.decorateCSS("stats-container")}
                                        data-alignment={alignment}
                                    >
                                        <Base.ListGrid
                                            gridCount={{ pc: itemCountInRow, tablet: 2, phone: 2 }}
                                            className={this.decorateCSS("stats-grid")}
                                        >
                                            {stats.map((stat: StatItem, index: number) => (
                                                <AnimatedStat
                                                    key={`stat38-${index}`}
                                                    stat={stat}
                                                />
                                            ))}
                                        </Base.ListGrid>
                                    </Base.VerticalContent>
                                )}
                            </div>
                        )}

                        {mediaExist && (
                            <div className={this.decorateCSS("media-container")}>
                                {overlay && <div className={this.decorateCSS("media-overlay")} />}
                                <Base.Media value={media} className={this.decorateCSS("media")} />
                            </div>
                        )}
                    </Base.ListGrid>
                </Base.MaxContent>
            </Base.Container >
        );
    }
}

export default Stats38;