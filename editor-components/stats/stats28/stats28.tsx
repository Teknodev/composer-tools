import * as React from "react";
import { BaseStats, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./stats28.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type StatItem = {
    icon: TypeMediaInputValue | string;
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

class Stats28 extends BaseStats {
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
                        { type: "icon", key: "icon", displayer: "Icon", value: "" },
                        { type: "string", key: "prefix", displayer: "Prefix", value: "" },
                        { type: "string", key: "number", displayer: "Value", value: "25" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "+" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "title", displayer: "Title", value: "Experienced people on the team" },
                        { type: "string", key: "description", displayer: "Description", value: "" },
                    ],
                },
                {
                    type: "object",
                    key: "stat",
                    displayer: "Stat",
                    value: [
                        { type: "icon", key: "icon", displayer: "Icon", value: "" },
                        { type: "string", key: "prefix", displayer: "Prefix", value: "" },
                        { type: "string", key: "number", displayer: "Value", value: "14" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "title", displayer: "Title", value: "Cities where employees work" },
                        { type: "string", key: "description", displayer: "Description", value: "" },
                    ],
                },
                {
                    type: "object",
                    key: "stat",
                    displayer: "Stat",
                    value: [
                        { type: "icon", key: "icon", displayer: "Icon", value: "" },
                        { type: "string", key: "prefix", displayer: "Prefix", value: "" },
                        { type: "string", key: "number", displayer: "Value", value: "180" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "title", displayer: "Title", value: "Days of product development" },
                        { type: "string", key: "description", displayer: "Description", value: "" },
                    ],
                },
                {
                    type: "object",
                    key: "stat",
                    displayer: "Stat",
                    value: [
                        { type: "icon", key: "icon", displayer: "Icon", value: "IoInfiniteSharp" },
                        { type: "string", key: "prefix", displayer: "Prefix", value: "" },
                        { type: "string", key: "number", displayer: "Value", value: "" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "title", displayer: "Title", value: "Infinite possibilities" },
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
            value: 4,
            max: 4,
        });
    }

    static getName(): string {
        return "Stats 28";
    }

    private AnimatedStat = ({ stat, animationDuration = 2000, statsAnimation }: { stat: StatItem; animationDuration?: number; statsAnimation: boolean }) => {
        const originalNumberString = stat.number;
        const targetNumber = parseFloat(originalNumberString) || 0;

        const formatNumber = (num: number): string => {
            const decimals = originalNumberString.includes(".") ? (originalNumberString.split(".")[1]?.length || 0) : 0;
            return decimals > 0 ? num.toFixed(decimals) : Math.floor(num).toString();
        };

        const [animatedNumber, setAnimatedNumber] = React.useState<string>(statsAnimation ? "0" : formatNumber(targetNumber));
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

        const titleExist = this.castToString(stat.title);
        const subtitleExist = this.castToString(stat.subtitle);
        const descriptionExist = this.castToString(stat.description);
        const valueExist = this.castToString(originalNumberString);
        const suffixExist = this.castToString(stat.suffix);
        const displayNumber = statsAnimation ? animatedNumber : formatNumber(targetNumber);

        const prefixExist = stat.prefix;

        let iconObj: TypeMediaInputValue | undefined;
        let iconString = "";

        if (typeof stat.icon === "object" && stat.icon?.type === "image") {
            iconObj = stat.icon as TypeMediaInputValue;
        } else if (typeof stat.icon === "string") {
            iconString = stat.icon;
        }

        const iconExist = !!iconObj || !!iconString;

        if (!valueExist && !suffixExist && !titleExist && !subtitleExist && !descriptionExist && !prefixExist && !iconExist) return null;

        return (
            <Base.VerticalContent className={this.decorateCSS("stat-item")}>
                {iconExist && (
                    <div className={this.decorateCSS("stat-icon-wrapper")}>
                        {iconObj ? (
                            <Base.Media value={iconObj} className={this.decorateCSS("stat-image")} />
                        ) : (iconString ? (
                            <Base.Icon name={iconString} propsIcon={{ className: this.decorateCSS("stat-icon") }} />
                        ) : null)}
                    </div>
                )}
                {(valueExist || suffixExist || prefixExist) && (
                    <span className={this.decorateCSS("stat-value")}>
                        {prefixExist && (
                            <span className={this.decorateCSS("stat-prefix")}>
                                {stat.prefix}
                            </span>
                        )}
                        {valueExist && (
                            <span className={this.decorateCSS("stat-number")}>
                                {displayNumber}
                            </span>
                        )}
                        {suffixExist && (
                            <span className={this.decorateCSS("stat-suffix")}>
                                {stat.suffix}
                            </span>
                        )}
                    </span>
                )}
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
                {descriptionExist && (
                    <Base.P className={this.decorateCSS("stat-description")}>
                        {stat.descriptionElement}
                    </Base.P>
                )}
            </Base.VerticalContent>
        );
    };

    render() {
        const subtitleExist = this.castToString(this.getPropValue("subtitle"));
        const titleExist = this.castToString(this.getPropValue("title"));
        const descriptionExist = this.castToString(this.getPropValue("description"));
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
        const hasValidButtons = buttons.some((btn) => this.castToString(btn.text));
        const itemCount = this.getPropValue("itemCount");
        const alignment = Base.getContentAlignment();

        const hasTopSection = subtitleExist || titleExist || descriptionExist || hasValidButtons;

        const statsItems = this.getPropValue("stats");
        const stats: StatItem[] = statsItems.map((item: any) => {
            const icon = item.getPropValue ? item.getPropValue("icon") : item.icon;

            let iconProp: TypeMediaInputValue | string = "";
            if (icon && typeof icon === "object") {
                iconProp = icon;
            } else {
                iconProp = this.castToString(icon) || "";
            }

            const prefix = this.castToString(item.getPropValue ? item.getPropValue("prefix") : item.prefix) || "";
            const number = this.castToString(item.getPropValue ? item.getPropValue("number") : item.number) || "";
            const suffix = this.castToString(item.getPropValue ? item.getPropValue("suffix") : item.suffix) || "";
            const title = this.castToString(item.getPropValue ? item.getPropValue("title") : item.title) || "";
            const subtitle = this.castToString(item.getPropValue ? item.getPropValue("subtitle") : item.subtitle) || "";
            const description = this.castToString(item.getPropValue ? item.getPropValue("description") : item.description) || "";

            return { icon: iconProp, prefix, number, suffix, title, titleElement: item.title, subtitle, subtitleElement: item.subtitle, description, descriptionElement: item.description };
        });

        const animationProps = this.castToObject<{ statsAnimation: boolean; animationDuration: number }>("animation");
        const statsAnimation = !!animationProps?.statsAnimation;
        const animationDuration = animationProps?.animationDuration || 2000;

        const hasStats = stats.length > 0;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <Base.VerticalContent className={`${this.decorateCSS("content")} ${alignment === "center" ? this.decorateCSS("alignment-center") : ""}`}>
                        {hasTopSection && (
                            <Base.VerticalContent className={this.decorateCSS("header-container")}>
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

                        {hasStats && (
                            <div className={this.decorateCSS("card")}>
                                <Base.ListGrid gridCount={{ pc: itemCount, tablet: 4, phone: 1 }} className={this.decorateCSS("stats-grid")}>
                                    {stats.map((stat: StatItem, index: number) => (
                                        <this.AnimatedStat
                                            key={`stat28-${index}`}
                                            stat={stat}
                                            animationDuration={animationDuration}
                                            statsAnimation={statsAnimation}
                                        />
                                    ))}
                                </Base.ListGrid>
                            </div>
                        )}
                    </Base.VerticalContent>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Stats28;
