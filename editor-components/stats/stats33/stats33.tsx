import * as React from "react";
import { BaseStats, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./stats33.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type RawStatItem = {
    prefix: JSX.Element;
    number: JSX.Element;
    suffix: JSX.Element;
    subtitle: JSX.Element;
    title: JSX.Element;
    description: JSX.Element;
    mediaCard: {
        media: TypeMediaInputValue;
        overlay: boolean;
    };
    buttons: INPUTS.CastedButton[];
    rowReverse: boolean;
};

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
    media: TypeMediaInputValue;
    overlay: boolean;
    buttons: INPUTS.CastedButton[];
    rowReverse: boolean;
};

class Stats33 extends BaseStats {
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
                        { type: "string", key: "number", displayer: "Value", value: "17" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "title", displayer: "Title", value: "Years Of Experience" },
                        { type: "string", key: "description", displayer: "Description", value: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps" },
                        {
                            type: "object",
                            key: "mediaCard",
                            displayer: "Media",
                            value: [
                                {
                                    type: "media",
                                    key: "media",
                                    displayer: "Media",
                                    value: {
                                        type: "image",
                                        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/698f381d771c03002cc28774?alt=media",
                                    },
                                    additionalParams: { availableTypes: ["image", "video"] },
                                },
                                {
                                    type: "boolean",
                                    key: "overlay",
                                    displayer: "Overlay",
                                    value: false,
                                },
                            ],
                        },
                        {
                            type: "array",
                            key: "buttons",
                            displayer: "Buttons",
                            value: [
                                INPUTS.BUTTON("button", "Button", "About Us", "", "FaArrowRight", null, "Primary"),

                            ],
                        },
                        { type: "boolean", key: "rowReverse", displayer: "Row Reverse", value: false }
                    ],
                },
                {
                    type: "object",
                    key: "stat",
                    displayer: "Stat",
                    value: [
                        { type: "string", key: "prefix", displayer: "Prefix", value: "" },
                        { type: "string", key: "number", displayer: "Value", value: "84" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "title", displayer: "Title", value: "Completed Projects" },
                        { type: "string", key: "description", displayer: "Description", value: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative" },
                        {
                            type: "object",
                            key: "mediaCard",
                            displayer: "Media",
                            value: [
                                {
                                    type: "media",
                                    key: "media",
                                    displayer: "Media",
                                    value: {
                                        type: "image",
                                        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/698f381d771c03002cc28774?alt=media",
                                    },
                                    additionalParams: { availableTypes: ["image", "video"] },
                                },
                                {
                                    type: "boolean",
                                    key: "overlay",
                                    displayer: "Overlay",
                                    value: false,
                                },
                            ],
                        },
                        {
                            type: "array",
                            key: "buttons",
                            displayer: "Buttons",
                            value: [
                                INPUTS.BUTTON("button", "Button", "View All Projects", "", "FaArrowRight", null, "Primary"),

                            ],
                        },
                        { type: "boolean", key: "rowReverse", displayer: "Row Reverse", value: true },
                    ],
                },
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
        return "Stats 33";
    }

    render() {
        const statsItems = this.castToObject<RawStatItem[]>("stats");

        const stats: StatItem[] = statsItems.map((item) => ({
            prefix: this.castToString(item.prefix) || "",
            prefixElement: item.prefix,
            number: this.castToString(item.number),
            suffix: this.castToString(item.suffix) || "",
            suffixElement: item.suffix,
            subtitle: this.castToString(item.subtitle) || "",
            subtitleElement: item.subtitle,
            title: this.castToString(item.title) || "",
            titleElement: item.title,
            description: this.castToString(item.description) || "",
            descriptionElement: item.description,
            media: item.mediaCard?.media,
            overlay: !!item.mediaCard?.overlay,
            buttons: item.buttons || [],
            rowReverse: !!item.rowReverse,
        }));

        const settings = this.castToObject<any>("settings");
        const shouldAnimate = settings?.shouldAnimate ?? true;
        const animationDuration = (settings?.animationDuration ?? 2000) as number;

        const AnimatedStat = ({ stat }: { stat: StatItem }) => {
            const ref = React.useRef<HTMLSpanElement>(null);
            const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

            const rawNumber = (this.castToString(stat.number) as string) || "";
            const numPrefix = rawNumber.match(/^[^\d]*/)?.[0] ?? "";
            const numSuffix = rawNumber.match(/[^\d]*$/)?.[0] ?? "";
            const core = rawNumber.slice(numPrefix.length, rawNumber.length - numSuffix.length);
            const isNumeric = /\d/.test(core);
            const target = isNumeric ? parseFloat(core.replace(/,/g, "")) : NaN;
            const decimals = core.includes(".") ? core.split(".")[1]?.length ?? 0 : 0;
            const useGrouping = /,/.test(core);
            const reduceMotion = typeof window !== "undefined" && !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
            const animatable = shouldAnimate && isNumeric && !reduceMotion;

            const format = (n: number) => numPrefix + n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals, useGrouping }) + numSuffix;

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
            if (!valueExist && !stat.prefix && !stat.suffix) return null;

            return (
                <span ref={ref} className={this.decorateCSS("stat-value")}>
                    {stat.prefix && (
                        <span className={this.decorateCSS("stat-prefix")}>
                            {stat.prefixElement}
                        </span>
                    )}
                    {valueExist && (
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
            );
        };

        const subtitle = this.castToString(this.getPropValue("subtitle"));
        const title = this.castToString(this.getPropValue("title"));
        const description = this.castToString(this.getPropValue("description"));
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
        const hasValidButtons = buttons.some((btn) => this.castToString(btn.text));

        const hasHeader = subtitle || title || description;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {hasHeader && (
                        <Base.VerticalContent className={this.decorateCSS("header")}>
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
                    <div className={this.decorateCSS("content")}>
                        {stats.map((stat: StatItem, index: number) => {
                            const isReversed = stat.rowReverse;
                            const hasMedia = !!stat.media && "url" in stat.media && !!stat.media.url;
                            const statSubtitleExist = !!stat.subtitle;
                            const statTitleExist = !!stat.title;
                            const statDescriptionExist = !!stat.description;
                            const numberExist = !!stat.number;
                            const hasRenderableButtonContent = (btn: INPUTS.CastedButton) =>
                                !!this.castToString(btn.text) || !!(btn.icon && btn.icon.name);
                            const hasValidButtons = stat.buttons.some(hasRenderableButtonContent);
                            const hasTextContent = statSubtitleExist || statTitleExist || statDescriptionExist || numberExist || hasValidButtons;

                            if (!hasTextContent && !hasMedia) return null;

                            const textCell = hasTextContent && (
                                <Base.GridCell className={this.decorateCSS("text-content")}>
                                    <Base.VerticalContent className={this.decorateCSS("text-inner")}>
                                        <AnimatedStat stat={stat} />
                                        {statSubtitleExist && (
                                            <Base.H5 className={this.decorateCSS("stats-subtitle")}>
                                                {stat.subtitleElement}
                                            </Base.H5>
                                        )}
                                        {statTitleExist && (
                                            <Base.H3 className={this.decorateCSS("stats-title")}>
                                                {stat.titleElement}
                                            </Base.H3>
                                        )}
                                        {statDescriptionExist && (
                                            <Base.P className={this.decorateCSS("stats-description")}>
                                                {stat.descriptionElement}
                                            </Base.P>
                                        )}

                                        {hasValidButtons && (
                                            <div className={this.decorateCSS("button-container")}>
                                                {stat.buttons.map((item: INPUTS.CastedButton, btnIndex: number) => {
                                                    const buttonText = this.castToString(item.text);
                                                    const iconExist = item.icon && item.icon.name;
                                                    if (!buttonText && !iconExist) return null;

                                                    return (
                                                        <ComposerLink key={btnIndex} path={item.url}>
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
                                                                    <Base.Media
                                                                        className={this.decorateCSS("button-icon")}
                                                                        value={item.icon}
                                                                    />
                                                                )}
                                                            </Base.Button>
                                                        </ComposerLink>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </Base.VerticalContent>
                                </Base.GridCell>
                            );

                            const mediaCell = hasMedia && (
                                <Base.GridCell className={this.decorateCSS("media-wrapper")}>
                                    <Base.Media
                                        value={stat.media}
                                        className={this.decorateCSS("image")}
                                    />
                                     {stat.overlay && (
                                         <div className={this.decorateCSS("media-overlay")} />
                                     )}
                                </Base.GridCell>
                            );

                            return (
                                <Base.ContainerGrid
                                    key={`stat33-${index}`}
                                    className={`${this.decorateCSS("row")} ${isReversed ? this.decorateCSS("row-reverse") : ""}`}
                                >
                                    {textCell}{mediaCell}
                                </Base.ContainerGrid>
                            );
                        })}
                    </div>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Stats33;
