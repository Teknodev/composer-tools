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
            key: "animation",
            displayer: "Animation",
            value: [
                { type: "boolean", key: "statsAnimation", displayer: "Stats Animation", value: true },
                { type: "number", key: "animationDuration", displayer: "Animation Duration (ms)", value: 2000 },
            ],
        });
    }

    static getName(): string {
        return "Stats 35";
    }

    private AnimatedStat = ({
        stat,
        animationDuration = 2000,
        statsAnimation,
    }: {
        stat: StatItem;
        animationDuration?: number;
        statsAnimation: boolean;
    }) => {
        const originalString = stat.number;
        const targetNumber = parseFloat(originalString) || 0;

        const formatNumber = (num: number): string => {
            const decimals = originalString.includes(".")
                ? originalString.split(".")[1]?.length || 0
                : 0;
            return decimals > 0 ? num.toFixed(decimals) : Math.floor(num).toString();
        };

        const [animatedNumber, setAnimatedNumber] = React.useState<number>(
            statsAnimation ? 0 : targetNumber
        );
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
                if (intervalRef.current) clearInterval(intervalRef.current);
            };
        }, [targetNumber, statsAnimation, animationDuration, originalString]);

        const valueExist = this.castToString(originalString);
        const subtitleExist = this.castToString(stat.subtitle);
        const titleExist = this.castToString(stat.title);
        const descriptionExist = this.castToString(stat.description);

        if (!valueExist && !stat.prefix && !stat.suffix && !subtitleExist && !titleExist && !descriptionExist) return null;

        return (
            <div className={this.decorateCSS("stat-item")}>
                {(valueExist || stat.prefix || stat.suffix) && (
                    <span className={this.decorateCSS("stat-value")}>
                        {stat.prefix && (
                            <span className={this.decorateCSS("stat-prefix")}>
                                {stat.prefixElement}
                            </span>
                        )}
                        {valueExist && (
                            <span className={this.decorateCSS("stat-number")}>
                                {statsAnimation ? formatNumber(animatedNumber) : formatNumber(targetNumber)}
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
                )}
            </div>
        );
    };

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

        const animationProps = this.castToObject<{ statsAnimation: boolean; animationDuration: number }>("animation");
        const statsAnimation = !!animationProps?.statsAnimation;
        const animationDuration = animationProps?.animationDuration || 2000;

        const itemCount = this.getPropValue("itemCount") || 1;
        const alignment = Base.getContentAlignment();
        const hasLeftSection = subtitleExist || titleExist || descriptionExist || hasValidButtons;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                    <div className={this.decorateCSS("content-wrapper")}>
                         <Base.MaxContent className={this.decorateCSS("max-content")}>
                            {hasLeftSection && (
                            <Base.VerticalContent className={`${this.decorateCSS("left-column")} ${alignment === "center" ? this.decorateCSS("center-alignment") : ""}`}>
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
                        </Base.MaxContent>
                        {(stats.length > 0 || hasMedia) && (
                            <div className={`${this.decorateCSS("right-column")} ${alignment === "center" ? this.decorateCSS("center-alignment") : ""} ${!hasMedia ? this.decorateCSS("no-media") : ""} ${!hasLeftSection ? this.decorateCSS("full-width") : ""}`}>
                                {hasMedia && (
                                    <div className={this.decorateCSS("right-background")}>
                                        <Base.Media
                                            value={backgroundImage}
                                            className={this.decorateCSS("background-image")}
                                        />
                                        {showOverlay && <div className={this.decorateCSS("overlay")} />}
                                    </div>
                                )}
                                <Base.ListGrid gridCount={{ pc: itemCount, tablet: 1, phone: 1 }} className={this.decorateCSS("stats-list")}>
                                    {stats.map((stat, index) => (
                                        <this.AnimatedStat
                                            key={`stat35-${index}`}
                                            stat={stat}
                                            animationDuration={animationDuration}
                                            statsAnimation={statsAnimation}
                                        />
                                    ))}
                                </Base.ListGrid>
                            </div>
                        )}
                    </div>
            </Base.Container>
        );
    }
}

export default Stats35;
