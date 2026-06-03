import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats37.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type StatItem = {
    prefix: React.JSX.Element;
    value: React.JSX.Element;
    suffix: React.JSX.Element;
    cardSubtitle: React.JSX.Element;
    cardTitle: React.JSX.Element;
    cardDescription: React.JSX.Element;
};

class Stats37 extends BaseStats {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "string",
            key: "subtitle",
            displayer: "Subtitle",
            value: "ONE PLAN. MORE COVERAGE",
        });

        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "No one can predict which issues might come their way",
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
                        { type: "string", key: "value", displayer: "Value", value: "15" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "K" },
                        { type: "string", key: "cardSubtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "cardTitle", displayer: "Title", value: "Covered <br /> Injuries" },
                        { type: "string", key: "cardDescription", displayer: "Description", value: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition." },
                    ],
                },
                {
                    type: "object",
                    key: "stat",
                    displayer: "Stat",
                    value: [
                        { type: "string", key: "prefix", displayer: "Prefix", value: "" },
                        { type: "string", key: "value", displayer: "Value", value: "100" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "%" },
                        { type: "string", key: "cardSubtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "cardTitle", displayer: "Title", value: "Guaranteed <br /> Issue" },
                        { type: "string", key: "cardDescription", displayer: "Description", value: "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination." },
                    ],
                },
                {
                    type: "object",
                    key: "stat",
                    displayer: "Stat",
                    value: [
                        { type: "string", key: "prefix", displayer: "Prefix", value: "" },
                        { type: "string", key: "value", displayer: "Value", value: "5" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "X" },
                        { type: "string", key: "cardSubtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "cardTitle", displayer: "Title", value: "More covered <br /> conditions" },
                        { type: "string", key: "cardDescription", displayer: "Description", value: "Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.User generated content in real-time will have multiple touchpoints for offshoring" },
                    ],
                },
            ],
        });

        this.addProp({
            type: "number",
            key: "itemCount",
            displayer: "Item Count in a Row",
            value: 3,
        });
    }

    static getName(): string {
        return "Stats 37";
    }

    render() {
        const subtitle = this.castToString(this.getPropValue("subtitle"));
        const title = this.castToString(this.getPropValue("title"));
        const description = this.castToString(this.getPropValue("description"));
        const stats = this.castToObject<StatItem[]>("stats");
        const itemCount = this.getPropValue("itemCount") || 3;
        const hasHeader = !!subtitle || !!title || !!description;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {hasHeader && (
                        <Base.VerticalContent className={this.decorateCSS("header-section")}>
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
                    {stats.length > 0 && (
                        <Base.ListGrid gridCount={{ pc: itemCount, tablet: 3, phone: 1 }} className={this.decorateCSS("stats-grid")}>
                            {stats.map((item, index) => {
                                const prefixExist = this.castToString(item.prefix);
                                const valueExist = this.castToString(item.value);
                                const suffixExist = this.castToString(item.suffix);
                                const statSubTitleExist = this.castToString(item.cardSubtitle);
                                const statTitleExist = this.castToString(item.cardTitle);
                                const statDescriptionExist = this.castToString(item.cardDescription);
                                const hasValueSection = prefixExist || valueExist || suffixExist;

                                if (!hasValueSection && !statSubTitleExist && !statTitleExist && !statDescriptionExist) return null;

                                return (
                                    <Base.VerticalContent key={index} className={this.decorateCSS("stat-item")}>
                                        {hasValueSection && (
                                            <div className={this.decorateCSS("stat-value-row")}>
                                                <span className={this.decorateCSS("stat-value")}>
                                                    {prefixExist && (
                                                        <Base.H1 className={this.decorateCSS("stat-prefix")}>{item.prefix}</Base.H1>
                                                    )}
                                                    {valueExist && (
                                                        <Base.H1 className={this.decorateCSS("stat-number")}>{item.value}</Base.H1>
                                                    )}
                                                    {suffixExist && (
                                                        <Base.H1 className={this.decorateCSS("stat-suffix")}>{item.suffix}</Base.H1>
                                                    )}
                                                </span>
                                                <Base.VerticalContent className={this.decorateCSS("stat-info")}>
                                                    {statSubTitleExist && (
                                                        <Base.P className={this.decorateCSS("stat-subtitle")}>
                                                            {item.cardSubtitle}
                                                        </Base.P>
                                                    )}
                                                    {statTitleExist && (
                                                        <Base.H6 className={this.decorateCSS("stat-title")}>
                                                            {item.cardTitle}
                                                        </Base.H6>
                                                    )}
                                                </Base.VerticalContent>
                                            </div>
                                        )}
                                        {statDescriptionExist && (
                                            <Base.P className={this.decorateCSS("stat-description")}>
                                                {item.cardDescription}
                                            </Base.P>
                                        )}
                                    </Base.VerticalContent>
                                );
                            })}
                        </Base.ListGrid>
                    )}
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Stats37;
