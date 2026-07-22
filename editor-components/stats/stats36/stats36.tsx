import * as React from "react";
import { BaseStats, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./stats36.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type MediaGroup = {
    media: TypeMediaInputValue;
    overlay: boolean;
};

type StatItem = {
    prefix: string;
    prefixElement: React.JSX.Element;
    number: string;
    suffix: string;
    suffixElement: React.JSX.Element;
    title: string;
    titleElement: React.JSX.Element;
    subtitle: string;
    subtitleElement: React.JSX.Element;
    description: string;
    descriptionElement: React.JSX.Element;
};

class Stats36 extends BaseStats {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "object",
            key: "mediaGroup",
            displayer: "Media",
            value: [
                {
                    type: "media",
                    key: "media",
                    displayer: "Media",
                    additionalParams: {
                        availableTypes: ["image", "video"],
                    },
                    value: {
                        type: "image",
                        url: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
            type: "string",
            key: "subtitle",
            displayer: "Subtitle",
            value: ""
        });

        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "Emerging converge with urban",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.",
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
                        { type: "string", key: "number", displayer: "Value", value: "90" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "%" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "Work Progress" },
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
                        { type: "string", key: "number", displayer: "Value", value: "97" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "%" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "Projects Done" },
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

    static getName(): string { return "Stats 36"; }

    render() {
        const title = this.castToString(this.getPropValue("title"));
        const subtitle = this.castToString(this.getPropValue("subtitle"));
        const description = this.castToString(this.getPropValue("description"));
        const mediaGroup = this.castToObject<MediaGroup>("mediaGroup");
        const media = mediaGroup.media;
        const showOverlay = mediaGroup.overlay;
        const statsRaw = this.castToObject<{ prefix: React.JSX.Element; number: React.JSX.Element; suffix: React.JSX.Element; title: React.JSX.Element; subtitle: React.JSX.Element; description: React.JSX.Element }[]>("stats");
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
        const hasValidButtons = buttons.some((btn) => this.castToString(btn.text) || (btn.icon && btn.icon.name));
        const itemCount = this.getPropValue("itemCount") ?? 1;
        const alignment = Base.getContentAlignment();

        const statsItems: StatItem[] = statsRaw.map((item) => {
            const prefix = this.castToString(item.prefix) || "";
            const number = this.castToString(item.number) || "";
            const suffix = this.castToString(item.suffix) || "";
            const title = this.castToString(item.title) || "";
            const subtitle = this.castToString(item.subtitle) || "";
            const description = this.castToString(item.description) || "";

            return {
                prefix,
                prefixElement: item.prefix,
                number,
                suffix,
                suffixElement: item.suffix,
                title,
                titleElement: item.title,
                subtitle,
                subtitleElement: item.subtitle,
                description,
                descriptionElement: item.description,
            };
        }).filter(item => {
            return (item.number !== "" && item.number !== "0") || item.title !== "" || item.subtitle !== "" || item.description !== "";
        });

        const shouldAnimate = this.castToObject<any>("settings")?.shouldAnimate ?? true;
        const animationDuration = (this.castToObject<any>("settings")?.animationDuration ?? 2000) as number;

        const AnimatedStat = ({ stat }: { stat: StatItem }) => {
            const ref = React.useRef<HTMLDivElement>(null);
            const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

            const rawNumber = (this.castToString(stat.number) as string) || "";
            const core = rawNumber;
            const isNumeric = /\d/.test(core);
            const target = isNumeric ? parseFloat(core.replace(/,/g, "")) : NaN;
            const decimals = core.includes(".") ? core.split(".")[1]?.length ?? 0 : 0;
            const useGrouping = /,/.test(core);
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

            const valueExist = rawNumber !== "" && rawNumber !== "0";
            const subtitleExist = this.castToString(stat.subtitle);
            const titleExist = this.castToString(stat.title);
            const descriptionExist = this.castToString(stat.description);

            if (!valueExist && !titleExist && !subtitleExist && !descriptionExist) return null;

            const progressWidth = isNumeric ? (parseFloat(display.replace(/,/g, "")) || 0) : 0;

            return (
                <div ref={ref} className={this.decorateCSS("stat-item")}>
                    <div className={this.decorateCSS("stat-header")}>
                        <div className={this.decorateCSS("stat-info")}>
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
                        </div>
                        {valueExist && (
                            <div className={this.decorateCSS("stat-value-container")}>
                                {stat.prefix && <span className={this.decorateCSS("stat-prefix")}>{stat.prefixElement}</span>}
                                <span className={this.decorateCSS("stat-value")}>{display}</span>
                                {stat.suffix && <span className={this.decorateCSS("stat-suffix")}>{stat.suffixElement}</span>}
                            </div>
                        )}
                    </div>
                    {valueExist && (
                        <div className={this.decorateCSS("progress-bar-container")}>
                            <div
                                className={this.decorateCSS("progress-bar-fill")}
                                style={{ width: `${progressWidth}%` }}
                            />
                        </div>
                    )}
                    {descriptionExist && (
                        <Base.P className={this.decorateCSS("stat-description")}>
                            {stat.descriptionElement}
                        </Base.P>
                    )}
                </div>
            );
        };

        const titleExist = this.castToString(title);
        const subtitleExist = this.castToString(subtitle);
        const descriptionExist = this.castToString(description);
        const mediaExist = !!media?.url;
        const hasContent = subtitleExist || titleExist || descriptionExist || hasValidButtons || statsItems.length > 0;
        const fullWidth = !mediaExist;
        const mediaFullWidth = mediaExist && !hasContent;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <Base.ContainerGrid className={this.decorateCSS("grid-wrapper")}>
                        {!fullWidth && (
                            <Base.GridCell className={`${this.decorateCSS("media-cell")} ${mediaFullWidth ? this.decorateCSS("full-width") : ""}`}>
                                {showOverlay && <div className={this.decorateCSS("media-overlay")} />}
                                <Base.Media value={media} className={this.decorateCSS("media")} />
                            </Base.GridCell>
                        )}
                        {(!fullWidth || (fullWidth && hasContent)) && (
                            <Base.GridCell
                                className={`${this.decorateCSS("content-cell")} ${fullWidth ? this.decorateCSS("full-width") : ""} ${alignment === "center" ? this.decorateCSS("center") : ""}`}
                            >
                                <Base.VerticalContent
                                    className={`${this.decorateCSS("content-header")} ${alignment === "center" ? this.decorateCSS("center") : ""}`}
                                >
                                    {subtitleExist && (
                                        <Base.SectionSubTitle className={this.decorateCSS("section-subtitle")}>
                                            {this.getPropValue("subtitle")}
                                        </Base.SectionSubTitle>
                                    )}
                                    {titleExist && (
                                        <Base.SectionTitle className={this.decorateCSS("section-title")}>
                                            {this.getPropValue("title")}
                                        </Base.SectionTitle>
                                    )}
                                    {descriptionExist && (
                                        <Base.SectionDescription className={this.decorateCSS("section-description")}>
                                            {this.getPropValue("description")}
                                        </Base.SectionDescription>
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
                                                            {buttonText && <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>}
                                                            {iconExist && <Base.Media className={this.decorateCSS("button-icon")} value={item.icon!} />}
                                                        </Base.Button>
                                                    </ComposerLink>
                                                );
                                            })}
                                        </div>
                                    )}
                                </Base.VerticalContent>
                                {statsItems.length > 0 && (
                                    <div className={this.decorateCSS("content-stats")}>
                                        <Base.ListGrid gridCount={{ pc: itemCount, tablet: 1, phone: 1 }} className={this.decorateCSS("stats-grid")}>
                                            {statsItems.map((item, index) => (
                                                <AnimatedStat key={index} stat={item} />
                                            ))}
                                        </Base.ListGrid>
                                    </div>
                                )}
                            </Base.GridCell>
                        )}
                    </Base.ContainerGrid>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Stats36;
