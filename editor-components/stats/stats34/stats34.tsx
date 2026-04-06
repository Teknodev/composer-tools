import * as React from "react";
import { BaseStats, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./stats34.module.scss";
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

class Stats34 extends BaseStats {
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
            value: "We Help You Elevate Your Supporters Into Investors",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs",
        });

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "Who we are", "", null, null, "White"),
            ],
        });

        this.addProp({
            type: "object",
            key: "media",
            displayer: "Media",
            value: [
                {
                    type: "media",
                    key: "value",
                    displayer: "Media",
                    additionalParams: {
                        availableTypes: ["image", "video"],
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
            key: "stats",
            displayer: "Stats",
            value: [
                {
                    type: "object",
                    key: "stat",
                    displayer: "Stat",
                    value: [
                        { type: "string", key: "prefix", displayer: "Prefix", value: "$" },
                        { type: "string", key: "number", displayer: "Value", value: "8" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "M" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "Invested this month" },
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
                        { type: "string", key: "number", displayer: "Value", value: "3000" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "Community Investors" },
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
                        { type: "string", key: "number", displayer: "Value", value: "29" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "Projects financed" },
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
                        { type: "string", key: "number", displayer: "Value", value: "12" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "Countries we operate" },
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

        this.addProp({
            type: "number",
            key: "itemCount",
            displayer: "Item Count in a Row",
            value: 1,
            max: 4,
        });
    }

    static getName(): string {
        return "Stats 34";
    }

    private AnimatedStat = ({ stat, animationDuration = 2000, statsAnimation }: { stat: StatItem; animationDuration?: number; statsAnimation: boolean }) => {
        const originalString = stat.number;
        const targetNumber = parseFloat(originalString) || 0;

        const [animatedNumber, setAnimatedNumber] = React.useState<number>(statsAnimation ? 0 : targetNumber);
        const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

        React.useEffect(() => {
            if (!statsAnimation) {
                setAnimatedNumber(targetNumber);
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
                setAnimatedNumber(currentNumber);
            }, 30);

            return () => {
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                }
            };
        }, [targetNumber, statsAnimation, animationDuration, originalString]);

        const formatNumber = (num: number): string => {
            const decimals = originalString.includes(".") ? (originalString.split(".")[1]?.length || 0) : 0;
            return decimals > 0 ? num.toFixed(decimals) : Math.floor(num).toString();
        };

        const prefixExist = this.castToString(stat.prefix);
        const suffixExist = this.castToString(stat.suffix);
        const titleExist = stat.title && stat.title !== "";
        const subtitleExist = stat.subtitle && stat.subtitle !== "";
        const descriptionExist = stat.description && stat.description !== "";
        const valueExist = originalString && originalString !== "";
        const displayNumber = !valueExist ? "" : (statsAnimation ? formatNumber(animatedNumber) : formatNumber(targetNumber));

        if (!valueExist && !prefixExist && !suffixExist && !titleExist && !subtitleExist && !descriptionExist) return null;

        return (
            <Base.VerticalContent className={this.decorateCSS("stat-item")}>
                {(prefixExist || valueExist || suffixExist) && (
                    <span className={this.decorateCSS("stat-value")}>
                        {prefixExist && (
                            <span className={this.decorateCSS("stat-prefix")}>
                                {stat.prefix}
                            </span>
                        )}
                        <span className={this.decorateCSS("stat-number")}>
                            {displayNumber}
                        </span>
                        {suffixExist && (
                            <span className={this.decorateCSS("stat-suffix")}>
                                {stat.suffix}
                            </span>
                        )}
                    </span>
                )}
                {subtitleExist && (
                    <Base.H5 className={this.decorateCSS("stat-subtitle")}>
                        {stat.subtitleElement}
                    </Base.H5>
                )}
                {titleExist && (
                    <Base.H4 className={this.decorateCSS("stat-title")}>
                        {stat.titleElement}
                    </Base.H4>
                )}
                {descriptionExist && (
                    <Base.H6 className={this.decorateCSS("stat-description")}>
                        {stat.descriptionElement}
                    </Base.H6>
                )}
            </Base.VerticalContent>
        );
    };

    render() {
        const subtitleExist = this.castToString(this.getPropValue("subtitle"));
        const titleExist = this.castToString(this.getPropValue("title"));
        const descriptionExist = this.castToString(this.getPropValue("description"));
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
        const itemCount = this.getPropValue("itemCount");
        const alignment = Base.getContentAlignment();

        const statsItems = this.castToObject<{ prefix: JSX.Element; number: JSX.Element; suffix: JSX.Element; title: JSX.Element; subtitle: JSX.Element; description: JSX.Element }[]>("stats");
        const stats: StatItem[] = statsItems.map((item) => {
            const prefix = this.castToString(item.prefix) || "";
            const number = this.castToString(item.number) || "";
            const suffix = this.castToString(item.suffix) || "";
            const title = this.castToString(item.title) || "";
            const subtitle = this.castToString(item.subtitle) || "";
            const description = this.castToString(item.description) || "";
            return { prefix, number, suffix, title, titleElement: item.title, subtitle, subtitleElement: item.subtitle, description, descriptionElement: item.description };
        });

        const animationProps = this.castToObject<{ statsAnimation: boolean; animationDuration: number }>("animation");
        const statsAnimation = !!animationProps?.statsAnimation;
        const animationDuration = animationProps?.animationDuration || 2000;

        const mediaSection = this.castToObject<{ value?: TypeMediaInputValue; overlay?: boolean } & Partial<TypeMediaInputValue>>("media");
        const media = (mediaSection?.value ?? (mediaSection?.type ? (mediaSection as TypeMediaInputValue) : undefined)) as TypeMediaInputValue | undefined;
        const overlay = !!(mediaSection?.overlay ?? this.getPropValue("mediaOverlay"));

        const hasContent = subtitleExist || titleExist || descriptionExist;
        const visibleButtons = buttons.filter((btn) => this.castToString(btn.text));
        const visibleStats = stats.filter((s) => s.prefix || s.number || s.suffix || s.title || s.subtitle || s.description);

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={`${this.decorateCSS("wrapper")} ${alignment === "center" ? this.decorateCSS("alignment-center") : ""}`}>
                        {(hasContent || visibleButtons.length > 0) && (
                            <Base.VerticalContent className={this.decorateCSS("content")}>
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
                                {visibleButtons.length > 0 && (
                                    <div className={this.decorateCSS("buttons-wrapper")}>
                                        {visibleButtons.map((item: INPUTS.CastedButton, index: number) => this.castToString(item.text) && (
                                            <ComposerLink key={`button-${index}`} path={item.url}>
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

                        {media && (
                            <div className={this.decorateCSS("media-wrapper")}>
                                <div className={this.decorateCSS("media-container")}>
                                    <Base.Media
                                        value={media}
                                        className={this.decorateCSS("media")}
                                    />
                                    {overlay && (
                                        <div className={this.decorateCSS("media-overlay")} />
                                    )}
                                </div>
                            </div>
                        )}

                        {visibleStats.length > 0 && (
                            <Base.ListGrid gridCount={{ pc: itemCount, tablet: 1, phone: 1 }} className={this.decorateCSS("stats-grid")}>
                                {visibleStats.map((stat: StatItem, index: number) => (
                                    <this.AnimatedStat
                                        key={`stat34-${index}`}
                                        stat={stat}
                                        animationDuration={animationDuration}
                                        statsAnimation={statsAnimation}
                                    />
                                ))}
                            </Base.ListGrid>
                        )}
                    </div>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Stats34;
