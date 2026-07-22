import * as React from "react";
import { BaseStats, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./stats35.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type StatItem = {
    prefix: string;
    prefixElement: JSX.Element;
    number: string;
    suffix: string;
    suffixElement: JSX.Element;
    subtitle: string;
    subtitleElement: JSX.Element;
    title: string;
    titleElement: JSX.Element;
    description: string;
    descriptionElement: JSX.Element;
};

class Stats35 extends BaseStats {
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
            value: "Everything about investing plus way more",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation. Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
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
            type: "object",
            key: "media",
            displayer: "Media",
            value: [
                {
                    type: "media",
                    key: "backgroundImage",
                    displayer: "Media",
                    additionalParams: { availableTypes: ["image", "video"] },
                    value: {
                        type: "image",
                        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/698f381d771c03002cc28774?alt=media",
                    },
                },
                {
                    type: "boolean",
                    key: "overlay",
                    displayer: "Overlay",
                    value: true,
                },
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
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "Year of foundation" },
                        { type: "string", key: "title", displayer: "Title", value: "" },
                        { type: "string", key: "description", displayer: "Description", value: "" },
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
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "Across ten total funds" },
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
                        { type: "string", key: "number", displayer: "Value", value: "400" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "+" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "Companies invested in" },
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
            value: 1,
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
        return "Stats 35";
    }

    render() {
        const subtitleExist = this.castToString(this.getPropValue("subtitle"));
        const titleExist = this.castToString(this.getPropValue("title"));
        const descriptionExist = this.castToString(this.getPropValue("description"));
        const mediaProps = this.castToObject<{ backgroundImage: TypeMediaInputValue; overlay: boolean }>("media");
        const backgroundImage = mediaProps?.backgroundImage as TypeMediaInputValue;
        const hasMedia = !!backgroundImage && "url" in backgroundImage && !!backgroundImage.url;
        const showOverlay = hasMedia && !!mediaProps?.overlay;

        const statsItems = this.castToObject<{
            prefix: JSX.Element;
            number: JSX.Element;
            suffix: JSX.Element;
            subtitle: JSX.Element;
            title: JSX.Element;
            description: JSX.Element;
        }[]>("stats");

        const stats: StatItem[] = statsItems.map((item) => ({
            prefix: this.castToString(item.prefix) || "",
            prefixElement: item.prefix,
            number: this.castToString(item.number) || "",
            suffix: this.castToString(item.suffix) || "",
            suffixElement: item.suffix,
            subtitle: this.castToString(item.subtitle) || "",
            subtitleElement: item.subtitle,
            title: this.castToString(item.title) || "",
            titleElement: item.title,
            description: this.castToString(item.description) || "",
            descriptionElement: item.description,
        }));

        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
        const hasValidButtons = buttons.some((btn) => this.castToString(btn.text));

        const settings = this.castToObject<any>("settings");
        const shouldAnimate = settings?.shouldAnimate ?? true;
        const animationDuration = (settings?.animationDuration ?? 2000) as number;
        const itemCount = this.getPropValue("itemCount") ?? 1;

        const alignment = Base.getContentAlignment();
        const hasLeftSection = subtitleExist || titleExist || descriptionExist || hasValidButtons;
        const hasVisibleStats = stats.some(stat => stat.number || stat.prefix || stat.suffix || stat.subtitle || stat.title || stat.description);
        const hasRightSection = hasVisibleStats || hasMedia;

        const mediaOnly = hasMedia && !hasLeftSection && !hasVisibleStats;

        const AnimatedStat = ({ stat }: { stat: StatItem }) => {
            const ref = React.useRef<HTMLSpanElement>(null);
            const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

            const rawNumber = (this.castToString(stat.number) as string) || "";
            const innerPrefix = rawNumber.match(/^[^\d]*/)?.[0] ?? "";
            const innerSuffix = rawNumber.match(/[^\d]*$/)?.[0] ?? "";
            const core = rawNumber.slice(innerPrefix.length, rawNumber.length - innerSuffix.length);
            const isNumeric = /\d/.test(core);
            const target = isNumeric ? parseFloat(core.replace(/,/g, "")) : NaN;
            const decimals = core.includes(".") ? core.split(".")[1]?.length ?? 0 : 0;
            const useGrouping = /,/.test(core);
            const reduceMotion = typeof window !== "undefined" && !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
            const animatable = shouldAnimate && isNumeric && !reduceMotion;

            const format = (n: number) => innerPrefix + n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals, useGrouping }) + innerSuffix;

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

            const valueExist = this.castToString(stat.number);
            const subtitleExist = this.castToString(stat.subtitle);
            const titleExist = this.castToString(stat.title);
            const descriptionExist = this.castToString(stat.description);

            if (!valueExist && !stat.prefix && !stat.suffix && !subtitleExist && !titleExist && !descriptionExist) return null;

            return (
                <div className={this.decorateCSS("stat-item")}>
                    {(valueExist || stat.prefix || stat.suffix) && (
                        <span ref={ref} className={this.decorateCSS("stat-value")}>
                            {stat.prefix && (
                                <span className={this.decorateCSS("stat-prefix")}>
                                    {stat.prefixElement}
                                </span>
                            )}
                            {!!display && (
                                <span className={this.decorateCSS("stat-number")}>
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
                    {(subtitleExist || titleExist || descriptionExist) && (
                        <Base.VerticalContent className={this.decorateCSS("stat-info")}>
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
                    )}
                </div>
            );
        };

        return (
            <Base.Container className={`${this.decorateCSS("container")} ${hasMedia && !mediaOnly ? this.decorateCSS("has-media") : ""} ${mediaOnly ? this.decorateCSS("media-only") : ""} ${!hasLeftSection && hasRightSection ? this.decorateCSS("no-left-section") : ""}`}>
                {hasMedia && !mediaOnly && (
                    <div className={`${this.decorateCSS("background-media")} ${this.decorateCSS("desktop-bg")}`}>
                        <Base.Media
                            value={backgroundImage}
                            className={this.decorateCSS("background-image")}
                        />
                        {showOverlay && <div className={this.decorateCSS("media-overlay")} />}
                    </div>
                )}
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {mediaOnly ? (
                        <div className={this.decorateCSS("media-wrapper")}>
                            <Base.Media
                                value={backgroundImage}
                                className={this.decorateCSS("background-image")}
                            />
                            {showOverlay && <div className={this.decorateCSS("media-overlay")} />}
                        </div>
                    ) : (
                        <div className={`${this.decorateCSS("content-wrapper")} ${hasRightSection ? this.decorateCSS("has-right") : ""}`}>
                            {hasLeftSection && (
                                <Base.VerticalContent className={`${this.decorateCSS("left-column")} ${!hasRightSection ? this.decorateCSS("left-full-width") : ""} ${alignment === "center" ? this.decorateCSS("center-alignment") : ""}`}>
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
                                            {buttons.filter((btn) => this.castToString(btn.text)).map((item: INPUTS.CastedButton, index: number) => (
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
                                            ))}
                                        </div>
                                    )}
                                </Base.VerticalContent>
                            )}
                            {(hasVisibleStats || (hasMedia && hasLeftSection)) && (
                                <div className={`${this.decorateCSS("right-column")} ${alignment === "center" ? this.decorateCSS("center-alignment") : ""} ${!hasLeftSection ? this.decorateCSS("full-width") : ""}`}>
                                    {hasMedia && !mediaOnly && (
                                        <div className={`${this.decorateCSS("background-media")} ${this.decorateCSS("mobile-bg")}`}>
                                            <Base.Media
                                                value={backgroundImage}
                                                className={this.decorateCSS("background-image")}
                                            />
                                            {showOverlay && <div className={this.decorateCSS("media-overlay")} />}
                                        </div>
                                    )}
                                    {hasVisibleStats && (
                                        <div className={this.decorateCSS("stats-inner")}>
                                            <Base.ListGrid gridCount={{ pc: itemCount, tablet: 1, phone: 1 }} className={this.decorateCSS("stats-list")}>
                                                {stats.map((stat, index) => (
                                                    <AnimatedStat key={`stat35-${index}`} stat={stat} />
                                                ))}
                                            </Base.ListGrid>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Stats35;
