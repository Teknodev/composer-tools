import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats32.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type StatItem = {
    prefix: string;
    number: string;
    suffix: string;
    subtitle: string;
    subtitleElement: React.ReactNode;
    title: string;
    titleElement: React.ReactNode;
    description: string;
    descriptionElement: React.ReactNode;
    label: string;
    labelElement: React.ReactNode;
};

class Stats32 extends BaseStats {
    containerRef = React.createRef<HTMLDivElement>();

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
            value: "Boost your sales productivity",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.",
        });

        this.addProp({
            type: "object",
            key: "mediaGroup",
            displayer: "Media Settings",
            value: [
                {
                    type: "media",
                    key: "media",
                    displayer: "Media",
                    value: {
                        type: "image",
                        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/698f381d771c03002cc28774?alt=media"
                    },
                },
                {
                    type: "boolean",
                    key: "showOverlay",
                    displayer: "Show Overlay",
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
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "title", displayer: "Title", value: "" },
                        { type: "string", key: "description", displayer: "Description", value: "" },
                        { type: "string", key: "label", displayer: "Label", value: "Increase in revenue" },
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
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "title", displayer: "Title", value: "" },
                        { type: "string", key: "description", displayer: "Description", value: "" },
                        { type: "string", key: "label", displayer: "Label", value: "Increase in signups" },
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

    static getName(): string { return "Stats 32"; }

    private AnimatedStat = ({
        stat,
        animationDuration = 2000,
        statsAnimation,
    }: {
        stat: StatItem;
        animationDuration?: number;
        statsAnimation: boolean;
    }) => {
        const originalNumberString = stat.number;
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
        const intervalRef = React.useRef<any>(null);

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

        const valueExist = originalNumberString && originalNumberString !== "";
        const labelExist = this.castToString(stat.label);
        const subtitleExist = this.castToString(stat.subtitle);
        const titleExist = this.castToString(stat.title);
        const descriptionExist = this.castToString(stat.description);

        if (!valueExist && !labelExist && !subtitleExist && !titleExist && !descriptionExist) return null;

        return (
            <Base.VerticalContent className={this.decorateCSS("stat-item")}>
                {valueExist && (
                    <span className={this.decorateCSS("stat-value")}>
                        {stat.prefix && (
                            <span className={this.decorateCSS("stat-prefix")}>{stat.prefix}</span>
                        )}
                        <span className={this.decorateCSS("stat-number")}>
                            {statsAnimation ? animatedNumber : formatNumber(targetNumber)}
                        </span>
                        {stat.suffix && (
                            <span className={this.decorateCSS("stat-suffix")}>{stat.suffix}</span>
                        )}
                    </span>
                )}
                {subtitleExist && (
                    <Base.H6 className={this.decorateCSS("stat-subtitle")}>
                        {stat.subtitleElement}
                    </Base.H6>
                )}
                {titleExist && (
                    <Base.H3 className={this.decorateCSS("stat-title")}>
                        {stat.titleElement}
                    </Base.H3>
                )}
                {descriptionExist && (
                    <Base.P className={this.decorateCSS("stat-description")}>
                        {stat.descriptionElement}
                    </Base.P>
                )}
                {labelExist && (
                    <Base.H6 className={this.decorateCSS("stat-label")}>
                        {stat.labelElement}
                    </Base.H6>
                )}
            </Base.VerticalContent>
        );
    };

    render() {
        const title = this.castToString(this.getPropValue("title"));
        const subtitle = this.castToString(this.getPropValue("subtitle"));
        const description = this.castToString(this.getPropValue("description"));
        const alignment = Base.getContentAlignment();
        const mediaGroup = this.castToObject<any>("mediaGroup");
        const media = mediaGroup?.media || {};
        const showOverlay = !!mediaGroup?.showOverlay;
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
        const hasButtons = buttons.some(btn => this.castToString(btn.text));

        const mediaExist = media && media.url;

        const statsItems = this.castToObject<any[]>("stats");

        const stats: StatItem[] = statsItems.map((item) => ({
            prefix: this.castToString(item.prefix) || "",
            number: this.castToString(item.number) || "0",
            suffix: this.castToString(item.suffix) || "",
            subtitle: this.castToString(item.subtitle) || "",
            subtitleElement: item.subtitle,
            title: this.castToString(item.title) || "",
            titleElement: item.title,
            description: this.castToString(item.description) || "",
            descriptionElement: item.description,
            label: this.castToString(item.label) || "",
            labelElement: item.label,
        }));

        const animationProps = this.castToObject<{
            statsAnimation: boolean;
            animationDuration: number;
        }>("animation");
        const statsAnimation = !!animationProps?.statsAnimation;
        const animationDuration = animationProps?.animationDuration || 2000;

        const titleExist = this.castToString(title);
        const subtitleExist = this.castToString(subtitle);
        const descriptionExist = this.castToString(description);
        const hasTextSection = subtitleExist || titleExist || descriptionExist || hasButtons;
        const hasStats = stats.length > 0;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div
                        className={`${this.decorateCSS("content-wrapper")} ${alignment === "center" ? this.decorateCSS("alignment-center") : ""} ${!mediaExist ? this.decorateCSS("no-media") : ""}`}
                    >
                        {(hasTextSection || hasStats) && (
                            <div className={this.decorateCSS("text-card")}>
                                <Base.VerticalContent className={this.decorateCSS("text-container")}>
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
                                    {hasButtons && (
                                        <div className={this.decorateCSS("button-container")}>
                                            {buttons.map((item, index) => {
                                                if (!this.castToString(item.text)) return null;
                                                return (
                                                    <ComposerLink key={index} path={item.url}>
                                                        <Base.Button buttonType={item.type}>
                                                            <Base.P>{item.text}</Base.P>
                                                        </Base.Button>
                                                    </ComposerLink>
                                                );
                                            })}
                                        </div>
                                    )}
                                </Base.VerticalContent>

                                {hasStats && (
                                    <div className={this.decorateCSS("stats-grid")}>
                                        {stats.map((stat: StatItem, index: number) => (
                                            <this.AnimatedStat
                                                key={`stat32-${index}`}
                                                stat={stat}
                                                animationDuration={animationDuration}
                                                statsAnimation={statsAnimation}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {mediaExist && (
                            <div className={this.decorateCSS("media-container")}>
                                {showOverlay && <div className={this.decorateCSS("overlay")}></div>}
                                <Base.Media value={media} className={this.decorateCSS("media")} />
                            </div>
                        )}
                    </div>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Stats32;
