import * as React from "react";
import { BaseStats, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./stats35.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type StatItem = {
    prefix: string;
    prefixElement: JSX.Element;
    number: string;
    suffix: string;
    suffixElement: JSX.Element;
    title: string;
    titleElement: JSX.Element;
};

class Stats35 extends BaseStats {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "Everything about investing plus way more",
        });

        this.addProp({
            type: "array",
            key: "descriptions",
            displayer: "Descriptions",
            value: [
                {
                    type: "object",
                    key: "description",
                    displayer: "Description",
                    value: [
                        {
                            type: "string",
                            key: "text",
                            displayer: "Text",
                            value: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation.",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "description",
                    displayer: "Description",
                    value: [
                        {
                            type: "string",
                            key: "text",
                            displayer: "Text",
                            value: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
                        },
                    ],
                },
            ],
        });

        this.addProp({
            type: "media",
            key: "backgroundImage",
            displayer: "Background Image",
            additionalParams: { availableTypes: ["image", "video"] },
            value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/698f381d771c03002cc28774?alt=media",
            },
        });

        this.addProp({
            type: "boolean",
            key: "overlay",
            displayer: "Overlay",
            value: true,
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
                        { type: "string", key: "title", displayer: "Stat Title", value: "Year of foundation" },
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
                        { type: "string", key: "title", displayer: "Stat Title", value: "Across ten total funds" },
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
                        { type: "string", key: "title", displayer: "Stat Title", value: "Companies invested in" },
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
        const titleExist = this.castToString(stat.title);

        if (!valueExist && !stat.prefix && !stat.suffix && !titleExist) return null;

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
                {titleExist && (
                    <Base.P className={this.decorateCSS("stat-title")}>
                        {stat.titleElement}
                    </Base.P>
                )}
            </div>
        );
    };

    render() {
        const title = this.castToString(this.getPropValue("title"));
        const descriptions = this.castToObject<{ text: JSX.Element }[]>("descriptions");
        const backgroundImage = this.getPropValue("backgroundImage") as TypeMediaInputValue;
        const showOverlay = this.getPropValue("overlay") !== false;

        const statsItems = this.castToObject<{
            prefix: JSX.Element;
            number: JSX.Element;
            suffix: JSX.Element;
            title: JSX.Element;
        }[]>("stats");

        const stats: StatItem[] = statsItems.map((item) => ({
            prefix: this.castToString(item.prefix) || "",
            prefixElement: item.prefix,
            number: this.castToString(item.number) || "",
            suffix: this.castToString(item.suffix) || "",
            suffixElement: item.suffix,
            title: this.castToString(item.title) || "",
            titleElement: item.title,
        }));

        const animationProps = this.castToObject<{ statsAnimation: boolean; animationDuration: number }>("animation");
        const statsAnimation = !!animationProps?.statsAnimation;
        const animationDuration = animationProps?.animationDuration || 2000;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("content-wrapper")}>
                        <div className={this.decorateCSS("left-column")}>
                            <Base.VerticalContent className={this.decorateCSS("text-group")}>
                                {title && (
                                    <Base.SectionTitle className={this.decorateCSS("title")}>
                                        {this.getPropValue("title")}
                                    </Base.SectionTitle>
                                )}
                                {descriptions.map((desc, index) => {
                                    const text = this.castToString(desc.text);
                                    return text ? (
                                        <Base.SectionDescription key={index} className={this.decorateCSS("description")}>
                                            {desc.text}
                                        </Base.SectionDescription>
                                    ) : null;
                                })}
                            </Base.VerticalContent>
                        </div>

                        <div className={this.decorateCSS("right-column")}>
                            <Base.Media
                                value={backgroundImage}
                                className={this.decorateCSS("background-image")}
                            />
                            {showOverlay && <div className={this.decorateCSS("overlay")} />}
                            <div className={this.decorateCSS("stats-list")}>
                                {stats.map((stat, index) => (
                                    <this.AnimatedStat
                                        key={`stat35-${index}`}
                                        stat={stat}
                                        animationDuration={animationDuration}
                                        statsAnimation={statsAnimation}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Stats35;
