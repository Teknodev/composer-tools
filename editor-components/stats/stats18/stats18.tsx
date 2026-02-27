
import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats18.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";

type CardData = {
    prefix: string;
    prefixElement: JSX.Element;
    value: string;
    valueElement: JSX.Element;
    suffix: string;
    suffixElement: JSX.Element;
    subtitle: string;
    subtitleElement: JSX.Element;
    title: string;
    titleElement: JSX.Element;
    description: string;
    descriptionElement: JSX.Element;
};

class Stats18Page extends BaseStats {
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
            value: "Our success in numbers ",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
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
            key: "card-list",
            additionalParams: {
                maxElementCount: 4,
            },
            displayer: "Stats Items",
            value: [
                {
                    type: "object",
                    key: "card",
                    displayer: "Stats Item",
                    value: [
                        { type: "string", key: "prefix", displayer: "Prefix", value: "$" },
                        { type: "string", key: "value", displayer: "Value", value: "50" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "M+" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "title", displayer: "Title", value: "Total investment in 2022" },
                        { type: "string", key: "description", displayer: "Description", value: "" },
                    ],
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Stats Item",
                    value: [
                        { type: "string", key: "prefix", displayer: "Prefix", value: "" },
                        { type: "string", key: "value", displayer: "Value", value: "5000" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "+" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "title", displayer: "Title", value: "Employees" },
                        { type: "string", key: "description", displayer: "Description", value: "" },
                    ],
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Stats Item",
                    value: [
                        { type: "string", key: "prefix", displayer: "Prefix", value: "" },
                        { type: "string", key: "value", displayer: "Value", value: "12" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "x" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "title", displayer: "Title", value: "Increased website traffic" },
                        { type: "string", key: "description", displayer: "Description", value: "" },
                    ],
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Stats Item",
                    value: [
                        { type: "string", key: "prefix", displayer: "Prefix", value: "" },
                        { type: "string", key: "value", displayer: "Value", value: "99" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "%" },
                        { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "title", displayer: "Title", value: "Client Satisfaction" },
                        { type: "string", key: "description", displayer: "Description", value: "" },
                    ],
                },
            ],
        });

        this.addProp({
            type: "boolean",
            key: "showLine",
            displayer: "Line",
            value: true,
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
        return "Stats 18";
    }

    private AnimatedCard = ({ card, animationDuration = 2000, statsAnimation, showLine }: { card: CardData; animationDuration?: number; statsAnimation: boolean; showLine: boolean }) => {
        const originalString = card.value;
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

        const titleExist = card.title && card.title !== "";
        const subtitleExist = card.subtitle && card.subtitle !== "";
        const descriptionExist = card.description && card.description !== "";
        const valueExist = originalString && originalString !== "";

        if (!valueExist && !titleExist && !subtitleExist && !descriptionExist) return null;

        return (
            <Base.VerticalContent className={this.decorateCSS("stat-item")}>
                {valueExist && (
                    <div className={`${this.decorateCSS("stat-value")} ${showLine ? this.decorateCSS("has-line") : ""}`}>
                        {card.prefix && (
                            <span className={this.decorateCSS("stat-prefix")}>
                                {card.prefixElement}
                            </span>
                        )}
                        <span className={this.decorateCSS("display-value")}>
                            {statsAnimation ? formatNumber(animatedNumber) : formatNumber(targetNumber)}
                        </span>
                        {card.suffix && (
                            <span className={this.decorateCSS("stat-suffix")}>
                                {card.suffixElement}
                            </span>
                        )}
                    </div>
                )}
                {subtitleExist && (
                    <Base.H6 className={this.decorateCSS("stat-subtitle")}>
                        {card.subtitleElement}
                    </Base.H6>
                )}
                {titleExist && (
                    <Base.H5 className={this.decorateCSS("stat-title")}>
                        {card.titleElement}
                    </Base.H5>
                )}
                {descriptionExist && (
                    <Base.P className={this.decorateCSS("stat-description")}>
                        {card.descriptionElement}
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
        const showLine = !!this.getPropValue("showLine");
        const itemCount = this.getPropValue("itemCount");

        const statsListRaw = this.castToObject<{ prefix: JSX.Element; value: JSX.Element; suffix: JSX.Element; title: JSX.Element; subtitle: JSX.Element; description: JSX.Element }[]>("card-list");
        const statsList: CardData[] = statsListRaw.map((item) => {
            const prefix = this.castToString(item.prefix) || "";
            const value = this.castToString(item.value) || "0";
            const suffix = this.castToString(item.suffix) || "";
            const title = this.castToString(item.title) || "";
            const subtitle = this.castToString(item.subtitle) || "";
            const description = this.castToString(item.description) || "";
            return { prefix, prefixElement: item.prefix, value, valueElement: item.value, suffix, suffixElement: item.suffix, title, titleElement: item.title, subtitle, subtitleElement: item.subtitle, description, descriptionElement: item.description };
        });

        const animationProps = this.castToObject<{ statsAnimation: boolean; animationDuration: number }>("animation");
        const statsAnimation = !!animationProps?.statsAnimation;
        const animationDuration = animationProps?.animationDuration || 2000;

        const hasTopSection = subtitleExist || titleExist || descriptionExist || buttons.length > 0;


        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {hasTopSection && (
                        <Base.VerticalContent className={this.decorateCSS("header-section")}>
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
                            {buttons.length > 0 && (
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
                                                    {item.text}
                                                </Base.Button>
                                            </ComposerLink>
                                        );
                                    })}
                                </div>
                            )}
                        </Base.VerticalContent>
                    )}

                    {statsList.length > 0 && (
                        <Base.ListGrid
                            gridCount={{ pc: itemCount, tablet: itemCount, phone: 1 }}
                            className={this.decorateCSS("stats-grid")}
                        >
                            {statsList.map((card: CardData, index: number) => (
                                <this.AnimatedCard
                                    key={`stat18-${index}`}
                                    card={card}
                                    animationDuration={animationDuration}
                                    statsAnimation={statsAnimation}
                                    showLine={showLine}
                                />
                            ))}
                        </Base.ListGrid>
                    )}
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Stats18Page;