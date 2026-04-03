import * as React from "react";
import { BaseStats, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./stats33.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

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
                            type: "array",
                            key: "buttons",
                            displayer: "Buttons",
                            value: [
                                INPUTS.BUTTON("button", "Button", "About Us", "", "FaArrowRight", null, "Primary"),

                            ],
                        },
                        { type: "boolean", key: "rowReverse", displayer: "Row Reverse", value: false },
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
            type: "boolean",
            key: "enableOverlay",
            displayer: "Overlay",
            value: false,
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
        return "Stats 33";
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

        const valueExist = this.castToString(originalString);

        if (!valueExist && !stat.prefix && !stat.suffix) return null;

        return (
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
        );
    };

    render() {
        const statsItems = this.castToObject<{
            prefix: JSX.Element;
            number: JSX.Element;
            suffix: JSX.Element;
            subtitle: JSX.Element;
            title: JSX.Element;
            description: JSX.Element;
            media: TypeMediaInputValue;
            buttons: INPUTS.CastedButton[];
            rowReverse: boolean;
        }[]>("stats");

        const stats: StatItem[] = statsItems.map((item) => {
            const prefix = this.castToString(item.prefix) || "";
            const number = this.castToString(item.number);
            const suffix = this.castToString(item.suffix) || "";
            const subtitle = this.castToString(item.subtitle) || "";
            const title = this.castToString(item.title) || "";
            const description = this.castToString(item.description) || "";
            return {
                prefix,
                prefixElement: item.prefix,
                number,
                suffix,
                suffixElement: item.suffix,
                subtitle,
                subtitleElement: item.subtitle,
                title,
                titleElement: item.title,
                description,
                descriptionElement: item.description,
                media: item.media,
                buttons: item.buttons || [],
                rowReverse: !!item.rowReverse,
            };
        });

        const animationProps = this.castToObject<{ statsAnimation: boolean; animationDuration: number }>("animation");
        const statsAnimation = !!animationProps?.statsAnimation;
        const animationDuration = animationProps?.animationDuration || 2000;

        const enableOverlay = !!this.getPropValue("enableOverlay");

        const subtitle = this.castToString(this.getPropValue("subtitle"));
        const title = this.castToString(this.getPropValue("title"));
        const description = this.castToString(this.getPropValue("description"));
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
                            const hasValidButtons = stat.buttons.some((btn) => this.castToString(btn.text));
                            const hasTextContent = statSubtitleExist || statTitleExist || statDescriptionExist || numberExist || hasValidButtons;

                            if (!hasTextContent && !hasMedia) return null;

                            const textCell = hasTextContent && (
                                <Base.GridCell className={this.decorateCSS("text-content")}>
                                    <Base.VerticalContent className={this.decorateCSS("text-inner")}>
                                        <this.AnimatedStat
                                            stat={stat}
                                            animationDuration={animationDuration}
                                            statsAnimation={statsAnimation}
                                        />
                                        {statSubtitleExist && (
                                            <Base.H3 className={this.decorateCSS("stats-subtitle")}>
                                                {stat.subtitleElement}
                                            </Base.H3>
                                        )}
                                        {statTitleExist && (
                                            <Base.H1 className={this.decorateCSS("stats-title")}>
                                                {stat.titleElement}
                                            </Base.H1>
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
                                                    if (!buttonText && !item.icon) return null;

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
                                                                {item.icon && (
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
                                    {enableOverlay && (
                                        <div className={this.decorateCSS("overlay")}></div>
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
