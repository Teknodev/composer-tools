import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats36.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type StatItem = {
    prefix: string;
    number: string;
    suffix: string;
    title: string;
    titleElement: JSX.Element;
    subtitle: string;
    subtitleElement: JSX.Element;
    description: string;
    descriptionElement: JSX.Element;
};

class Stats36 extends BaseStats {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
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
            type: "object",
            key: "animation",
            displayer: "Animation",
            value: [
                { type: "boolean", key: "statsAnimation", displayer: "Stats Animation", value: true },
                { type: "number", key: "animationDuration", displayer: "Animation Duration (ms)", value: 2000 },
            ],
        });
    }

    static getName(): string { return "Stats 36"; }

    private AnimatedStat = ({
        stat,
        animationDuration = 2000,
        statsAnimation,
    }: {
        stat: StatItem;
        animationDuration?: number;
        statsAnimation: boolean;
    }) => {
        const originalNumberString = this.castToString(stat.number);
        const targetNumber = parseFloat(originalNumberString) || 0;

        const formatNumber = (num: number): string => {
            const decimals = originalNumberString.includes(".")
                ? (originalNumberString.split(".")[1]?.length || 0)
                : 0;
            return decimals > 0 ? num.toFixed(decimals) : Math.floor(num).toString();
        };

        const [animatedNumber, setAnimatedNumber] = React.useState<string>(
            statsAnimation ? "0" : formatNumber(targetNumber)
        );
        const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

        React.useEffect(() => {
            if (!statsAnimation) {
                setAnimatedNumber(formatNumber(targetNumber));
                return;
            }

            const steps = animationDuration / 30;
            let currentNumber = 0;
            const increment = targetNumber / steps;

            intervalRef.current = setInterval(() => {
                currentNumber += increment;
                if (currentNumber >= targetNumber) {
                    currentNumber = targetNumber;
                    clearInterval(intervalRef.current!);
                }
                setAnimatedNumber(formatNumber(currentNumber));
            }, 30);

            return () => {
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                }
            };
        }, [targetNumber, statsAnimation, animationDuration, originalNumberString]);

        const valueExist = originalNumberString && originalNumberString !== "" && originalNumberString !== "0";
        const subtitleExist = this.castToString(stat.subtitle);
        const titleExist = this.castToString(stat.title);
        const descriptionExist = this.castToString(stat.description);

        if (!valueExist && !titleExist && !subtitleExist && !descriptionExist) return null;

        return (
            <Base.VerticalContent className={this.decorateCSS("stat-item")}>
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
                            {stat.prefix && <span className={this.decorateCSS("stat-prefix")}>{stat.prefix}</span>}
                            <span className={this.decorateCSS("stat-value")}>
                                {statsAnimation ? animatedNumber : formatNumber(targetNumber)}
                            </span>
                            {stat.suffix && <span className={this.decorateCSS("stat-suffix")}>{stat.suffix}</span>}
                        </div>
                    )}
                </div>
                <div className={this.decorateCSS("progress-bar-container")}>
                    <div
                        className={this.decorateCSS("progress-bar-fill")}
                        style={{ width: `${statsAnimation ? animatedNumber : targetNumber}%` }}
                    />
                </div>
                {descriptionExist && (
                    <Base.P className={this.decorateCSS("stat-description")}>
                        {stat.descriptionElement}
                    </Base.P>
                )}
            </Base.VerticalContent>
        );
    };

    render() {
        const title = this.castToString(this.getPropValue("title"));
        const subtitle = this.castToString(this.getPropValue("subtitle"));
        const description = this.castToString(this.getPropValue("description"));
        const media = this.getPropValue("media");
        const statsRaw = this.castToObject<{ prefix: JSX.Element; number: JSX.Element; suffix: JSX.Element; title: JSX.Element; subtitle: JSX.Element; description: JSX.Element }[]>("stats");
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
        const hasValidButtons = buttons.some((btn) => this.castToString(btn.text));
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
                number,
                suffix,
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

        const animationProps = this.castToObject<{ statsAnimation: boolean; animationDuration: number }>("animation");
        const statsAnimation = !!animationProps?.statsAnimation;
        const animationDuration = animationProps?.animationDuration || 2000;

        const titleExist = this.castToString(title);
        const subtitleExist = this.castToString(subtitle);
        const descriptionExist = this.castToString(description);
        const mediaExist = !!media?.url;
        const fullWidth = !mediaExist;
        const hasContent = subtitleExist || titleExist || descriptionExist || hasValidButtons || statsItems.length > 0;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <Base.ContainerGrid className={this.decorateCSS("grid-wrapper")}>
                        {!fullWidth && (
                            <Base.GridCell className={this.decorateCSS("media-cell")}>
                                <Base.Media value={media} className={this.decorateCSS("media")} />
                            </Base.GridCell>
                        )}
                        {(!fullWidth || (fullWidth && hasContent)) && (
                            <Base.GridCell 
                                className={`${this.decorateCSS("content-cell")} ${fullWidth ? this.decorateCSS("full-width") : ""}`}
                                data-alignment={alignment}
                            >
                                <Base.VerticalContent 
                                    className={this.decorateCSS("content-header")}
                                    data-alignment={alignment}
                                >
                                    {subtitleExist && (
                                        <Base.SectionSubTitle className={this.decorateCSS("section-subtitle")}>
                                            {subtitle}
                                        </Base.SectionSubTitle>
                                    )}
                                    {titleExist && (
                                        <Base.SectionTitle className={this.decorateCSS("section-title")}>
                                            {title}
                                        </Base.SectionTitle>
                                    )}
                                    {descriptionExist && (
                                        <Base.SectionDescription className={this.decorateCSS("section-description")}>
                                            {description}
                                        </Base.SectionDescription>
                                    )}
                                    {hasValidButtons && (
                                        <div className={this.decorateCSS("button-container")}>
                                            {buttons.map((item: INPUTS.CastedButton, index: number) => {
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
                                            })}
                                        </div>
                                    )}
                                </Base.VerticalContent>
                                {statsItems.length > 0 && (
                                    <div className={this.decorateCSS("content-stats")}>
                                        <Base.ListGrid gridCount={{ pc: 1, tablet: 1, phone: 1 }} className={this.decorateCSS("stats-grid")}>
                                            {statsItems.map((item, index) => (
                                                <this.AnimatedStat
                                                    key={index}
                                                    stat={item}
                                                    statsAnimation={statsAnimation}
                                                    animationDuration={animationDuration}
                                                />
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
