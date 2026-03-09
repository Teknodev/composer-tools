import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats32.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type StatItem = {
    prefix: string;
    number: string;
    suffix: string;
    label: string;
    labelElement: JSX.Element;
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
            type: "media",
            key: "image",
            displayer: "Image",
            value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/698f381d771c03002cc28774?alt=media"
            },
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

        const labelExist = this.castToString(stat.label);
        const valueExist = originalNumberString && originalNumberString !== "";

        if (!valueExist && !labelExist) return null;

        return (
            <div className={this.decorateCSS("stat-item")}>
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
                {labelExist && (
                    <Base.H6 className={this.decorateCSS("stat-label")}>
                        {stat.labelElement}
                    </Base.H6>
                )}
            </div>
        );
    };

    render() {
        const title = this.castToString(this.getPropValue("title"));
        const subtitle = this.castToString(this.getPropValue("subtitle"));
        const description = this.castToString(this.getPropValue("description"));
        const image = this.getPropValue("image");
        const alignment = Base.getContentAlignment();

        const statsItems = this.castToObject<{
            prefix: JSX.Element;
            number: JSX.Element;
            suffix: JSX.Element;
            label: JSX.Element;
        }[]>("stats");

        const stats: StatItem[] = statsItems.map((item) => ({
            prefix: this.castToString(item.prefix) || "",
            number: this.castToString(item.number) || "0",
            suffix: this.castToString(item.suffix) || "",
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
        const hasTextSection = subtitleExist || titleExist || descriptionExist;
        const imageExist = image && image.url;
        const hasStats = stats.length > 0;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div
                        className={`${this.decorateCSS("content-wrapper")} ${alignment === "center" ? this.decorateCSS("alignment-center") : ""} ${!imageExist ? this.decorateCSS("no-image") : ""}`}
                    >
                        {hasTextSection && (
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

                        {imageExist && (
                            <div className={this.decorateCSS("image-container")}>
                                <Base.Media value={image} className={this.decorateCSS("image")} />
                            </div>
                        )}
                    </div>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Stats32;
