import * as React from "react";
import { BaseStats, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./stats9.module.scss";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

interface Stat {
    number: React.JSX.Element;
    suffix: React.JSX.Element;
    description: React.JSX.Element;
}

class Stats9 extends BaseStats {
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
            value: "WE ARE THE GAME DEVELOPMENT STUDIO KNOWN FOR CRAFTING DISTINCTIVE AND <span style='color: var(--composer-tertiary-color); font-weight: bold;'>IMMERSE GAMES</span> THAT STAND OUT IN THE MARKET.",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "Qamico is a design studio focused on game development that works with companies around the world, helping them grow and expand their business. <br><br>Lorem ipsum dolor sit amet consectetur adipiscing diam tortor sit feugiat dictum eu diam euismod ultrices convallis eget vel velit posuere mi consequat leo egestas sed odio molestie non imperdiet malesuada."
        });

        this.addProp({
            type: "object",
            key: "media",
            displayer: "Media",
            value: [
                {
                    type: "media",
                    key: "source",
                    displayer: "Media",
                    additionalParams: { availableTypes: ["image", "video"] },
                    value: {
                        type: "image",
                        url: "https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h1_img-2.jpg"
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

        this.addProp(
            INPUTS.BUTTON(
                "button",
                "Button",
                "MORE ABOUT US",
                "",
                "MdArrowOutward",
                null,
                "Link"
            )
        );

        this.addProp({
            type: "array",
            key: "stats",
            displayer: "Statistics",
            value: [
                {
                    type: "object",
                    key: "stat",
                    displayer: "Statistic",
                    value: [
                        {
                            type: "string",
                            key: "number",
                            displayer: "Number",
                            value: "15",
                        },
                        {
                            type: "string",
                            key: "suffix",
                            displayer: "Suffix",
                            value: "+",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "years experience working",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "stat",
                    displayer: "Statistic",
                    value: [
                        {
                            type: "string",
                            key: "number",
                            displayer: "Number",
                            value: "30",
                        },
                        {
                            type: "string",
                            key: "suffix",
                            displayer: "Suffix",
                            value: "+",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "games completed",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "stat",
                    displayer: "Statistic",
                    value: [
                        {
                            type: "string",
                            key: "number",
                            displayer: "Number",
                            value: "80",
                        },
                        {
                            type: "string",
                            key: "suffix",
                            displayer: "Suffix",
                            value: "M+",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "downloads of all-time",
                        },
                    ],
                },
            ],
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
        return "Stats 9";
    }

    render() {
        const statsProp = this.getPropValue("stats");
        const stats: Stat[] = statsProp.map((item: any) => ({
            number: item.getPropValue("number"),
            suffix: item.getPropValue("suffix"),
            description: item.getPropValue("description"),
        }));

        const title = this.getPropValue("title");
        const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");
        const description = this.getPropValue("description");
        const isDescriptionExist = this.castToString(description);
        const media = this.castToObject<any>("media");
        const image = (media?.source ?? null) as TypeMediaInputValue | null;
        const showOverlay = media?.overlay;

        const shouldAnimate = this.castToObject<any>("settings")?.shouldAnimate ?? true;
        const animationDuration = (this.castToObject<any>("settings")?.animationDuration ?? 2000) as number;

        const AnimatedStat = ({ stat }: { stat: Stat }) => {
            const ref = React.useRef<HTMLDivElement>(null);
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
                    { threshold: 0.5 }
                );
                observer.observe(node);
                return () => {
                    observer.disconnect();
                    clear();
                };
            }, [rawNumber, animatable, animationDuration, target]);

            const suffixExist = this.castToString(stat.suffix);
            const descExist = this.castToString(stat.description);

            if (!display && !suffixExist && !descExist) return null;

            return (
                <div ref={ref} className={this.decorateCSS("stat-item")}>
                    <div className={this.decorateCSS("stat-number-container")}>
                        {!!display && (
                            <span className={this.decorateCSS("stat-number")}>
                                {display}
                            </span>
                        )}
                        {suffixExist && (
                            <span className={this.decorateCSS("stat-suffix")}>
                                {stat.suffix}
                            </span>
                        )}
                    </div>
                    {descExist && (
                        <Base.P className={this.decorateCSS("stat-description")}>
                            {stat.description}
                        </Base.P>
                    )}
                </div>
            );
        };

        const subtitle = this.getPropValue("subtitle");
        const subtitleExist = this.castToString(subtitle);

        const leftContentexist = subtitleExist || this.castToString(title) || isDescriptionExist || this.castToString(button.text) || button.icon || image;
        const hasStats = stats && stats.length > 0;

        let mainContentClass = this.decorateCSS("main-content");
        if (!leftContentexist && hasStats) {
            mainContentClass += ` ${this.decorateCSS("stats-only")}`;
        } else if (leftContentexist && !hasStats) {
            mainContentClass += ` ${this.decorateCSS("left-only")}`;
        }

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={mainContentClass}>
                        {leftContentexist && <div className={this.decorateCSS("left-content")}>
                            {subtitleExist && (
                                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                                    {subtitle}
                                </Base.SectionSubTitle>
                            )}
                            {(this.castToString(title)) && (
                                <div className={this.decorateCSS("title-section")}>
                                    <Base.SectionTitle className={this.decorateCSS("main-title")}>
                                        {this.getPropValue("title")}
                                    </Base.SectionTitle>
                                </div>
                            )}

                            <div className={this.decorateCSS("content-section")}>
                                {image?.url && (
                                    <div className={this.decorateCSS("image-container")}>
                                        <Base.Media
                                            value={image}
                                            className={this.decorateCSS("content-image")}
                                        />
                                        {showOverlay && <div className={this.decorateCSS("overlay")}></div>}
                                    </div>
                                )}

                                <div className={this.decorateCSS("text-content")}>
                                    {isDescriptionExist && (
                                        <p className={this.decorateCSS("description")}>
                                            {description}
                                        </p>
                                    )}

                                    {(this.castToString(button.text) || button.icon) && (
                                        <div className={this.decorateCSS("button-wrapper")}>
                                            <ComposerLink path={button.url}>
                                                <Base.Button
                                                    buttonType={button.type}
                                                    className={this.decorateCSS("more-button")}
                                                >
                                                    {this.castToString(button.text) && <span className={this.decorateCSS("button-text")}>{button.text}</span>}
                                                    {button.icon && (
                                                        <Base.Media
                                                            value={{ type: "icon", name: button.icon }}
                                                            className={this.decorateCSS("button-icon")}
                                                        />
                                                    )}
                                                </Base.Button>
                                            </ComposerLink>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>}
                        {stats && stats.length > 0 && <div className={this.decorateCSS("stats-section")}>
                            {stats.map((stat, index) => (
                                <AnimatedStat key={index} stat={stat} />
                            ))}
                        </div>}
                    </div>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Stats9;