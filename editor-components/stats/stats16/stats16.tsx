import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats16.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type StatType = {
    statValue: JSX.Element;
    statLabel: JSX.Element;
}

class Stats16 extends BaseStats {
    interval: NodeJS.Timeout | null = null;

    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "Think Like A Customer",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "Leverage agile frameworks to provide a robust synopsis for high level overviews. \nIterative approaches to corporate strategy foster collaborative thinking.",
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
                        { type: "string", key: "statValue", displayer: "Stat Value", value: "98%" },
                        { type: "string", key: "statLabel", displayer: "Stat Label", value: "Positive Feedback" },
                    ],
                },
                {
                    type: "object",
                    key: "stat",
                    displayer: "Stat",
                    value: [
                        { type: "string", key: "statValue", displayer: "Stat Value", value: "146" },
                        { type: "string", key: "statLabel", displayer: "Stat Label", value: "Project Completed" },
                    ],
                },
                {
                    type: "object",
                    key: "stat",
                    displayer: "Stat",
                    value: [
                        { type: "string", key: "statValue", displayer: "Stat Value", value: "$50" },
                        { type: "string", key: "statLabel", displayer: "Stat Label", value: "Average Cost Per Hour" },
                    ],
                },
                {
                    type: "object",
                    key: "stat",
                    displayer: "Stat",
                    value: [
                        { type: "string", key: "statValue", displayer: "Stat Value", value: "543" },
                        { type: "string", key: "statLabel", displayer: "Stat Label", value: "Pizzas Ordered" },
                    ],
                },
            ],
        });

        this.addProp({
            type: "number",
            key: "animationDuration",
            displayer: "Stat Animation Duration (ms)",
            value: 2000,
        });
    }

    static getName(): string {
        return "Stats 16";
    }

    componentDidMount() {
        super.componentDidMount();
        this.animate();
    }

    componentWillUnmount() {
        super.componentWillUnmount();
        if (this.interval) clearInterval(this.interval);
    }

    animate() {
        const stats = this.castToObject<StatType[]>("stats");
        const animationDuration = (this.getPropValue("animationDuration") as number) || 2000;
        const totalSteps = 40;
        const intervalTime = animationDuration / totalSteps;

        stats.forEach((_, index) => {
            this.setComponentState(`currentNumber-${index}`, 0);
        });

        let currentStep = 0;

        this.interval = setInterval(() => {
            currentStep++;
            let allDone = true;

            stats.forEach((statData: StatType, index: number) => {
                const counterString = this.castToString(statData.statValue);
                const numericPart = parseInt(counterString.replace(/[^\d]/g, ""), 10) || 0;

                if (currentStep < totalSteps) {
                    const nextValue = Math.min(numericPart, Math.ceil((numericPart / totalSteps) * currentStep));
                    this.setComponentState(`currentNumber-${index}`, nextValue);
                    allDone = false;
                } else {
                    this.setComponentState(`currentNumber-${index}`, numericPart);
                }
            });

            if (allDone || currentStep >= totalSteps) {
                if (this.interval) {
                    clearInterval(this.interval);
                    this.interval = null;
                }
            }
        }, intervalTime);
    }

    getRenderedStatValue(index: number, originalValue: string) {
        if (!originalValue) return "";
        const targetNumber = parseInt(originalValue.replace(/[^\d]/g, ""), 10);
        if (isNaN(targetNumber)) return originalValue;

        const currentNumber = this.getComponentState(`currentNumber-${index}`);
        const displayValue = currentNumber !== undefined ? currentNumber : targetNumber;

        const prefix = originalValue.match(/^\D+/)?.[0] || "";
        const suffix = originalValue.match(/\D+$/)?.[0] || "";

        return `${prefix}${displayValue}${suffix}`;
    }

    render() {
        const titleExist = this.castToString(this.getPropValue("title"));
        const descriptionExist = this.castToString(this.getPropValue("description"));
        const stats = this.castToObject<StatType[]>("stats");

        const hasTopSection = titleExist || descriptionExist;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <Base.VerticalContent className={this.decorateCSS("content-wrapper")}>
                        <Base.VerticalContent className={this.decorateCSS("stats-section")}>

                            {hasTopSection && (
                                <Base.VerticalContent className={this.decorateCSS("header-container")}>
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
                            )}

                            {stats.length > 0 && (
                                <div className={this.decorateCSS("stats-grid")}>
                                    {stats.map((item: StatType, index: number) => {
                                        const originalStatValue = this.castToString(item.statValue);
                                        const statLabelExist = this.castToString(item.statLabel);

                                        if (!originalStatValue && !statLabelExist) return null;

                                        return (
                                            <Base.VerticalContent
                                                key={`stat-item-${index}`}
                                                className={this.decorateCSS("stat-item")}
                                            >
                                                {originalStatValue && (
                                                    <Base.H1 className={this.decorateCSS("stat-value")}>
                                                        {this.getRenderedStatValue(index, originalStatValue)}
                                                    </Base.H1>
                                                )}
                                                {statLabelExist && (
                                                    <Base.SectionDescription className={this.decorateCSS("stat-label")}>
                                                        {item.statLabel}
                                                    </Base.SectionDescription>
                                                )}
                                            </Base.VerticalContent>
                                        );
                                    })}
                                </div>
                            )}

                        </Base.VerticalContent>
                    </Base.VerticalContent>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Stats16;
