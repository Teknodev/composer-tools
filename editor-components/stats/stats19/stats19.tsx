import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats19.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type StatItem = {
  subtitle: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  number: string;
  prefix: string;
  suffix: string;
};

class Stats19 extends BaseStats {
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
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
      ],
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 3,
      max: 6,
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
            { type: "string", key: "number", displayer: "Value", value: "15" },
            { type: "string", key: "suffix", displayer: "Suffix", value: "K" },
            { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
            { type: "string", key: "title", displayer: "Title", value: "Covered Injuries" },
            { type: "string", key: "description", displayer: "Description", value: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition." },
          ],
        },
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            { type: "string", key: "prefix", displayer: "Prefix", value: "" },
            { type: "string", key: "number", displayer: "Value", value: "100" },
            { type: "string", key: "suffix", displayer: "Suffix", value: "%" },
            { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
            { type: "string", key: "title", displayer: "Title", value: "Guaranteed Issue" },
            { type: "string", key: "description", displayer: "Description", value: "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination." },
          ],
        },
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            { type: "string", key: "prefix", displayer: "Prefix", value: "" },
            { type: "string", key: "number", displayer: "Value", value: "5" },
            { type: "string", key: "suffix", displayer: "Suffix", value: "X" },
            { type: "string", key: "subtitle", displayer: "Subtitle", value: "" },
            { type: "string", key: "title", displayer: "Title", value: "More covered conditions" },
            { type: "string", key: "description", displayer: "Description", value: "Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line. User generated content in real-time will have multiple touchpoints for offshoring." },
          ],
        },
      ],
    });
  }

  static getName(): string {
    return "Stats 19";
  }

  render() {
    const subtitle = this.getPropValue("subtitle");
    const isSubtitleExist = this.castToString(subtitle);
    const title = this.getPropValue("title");
    const isTitleExist = this.castToString(title);
    const description = this.getPropValue("description");
    const isDescriptionExist = this.castToString(description);
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const hasValidButtons = buttons.some((btn) => this.castToString(btn.text));
    const itemCount = this.getPropValue("itemCount");
    const statsProp = this.getPropValue("stats");
    const stats: StatItem[] = statsProp.map((item: any) => {
      const subtitle = item.getPropValue("subtitle");
      const itemTitle = item.getPropValue("title");
      const itemDescription = item.getPropValue("description");
      const number = this.castToString(item.getPropValue("number")) || "";
      const prefix = this.castToString(item.getPropValue("prefix")) || "";
      const suffix = this.castToString(item.getPropValue("suffix")) || "";
      return { subtitle, title: itemTitle, description: itemDescription, number, prefix, suffix };
    });

    const hasAnyStatValues = stats.some((s) => s.number !== "" || s.prefix.trim() !== "" || s.suffix.trim() !== "");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={`${this.decorateCSS("wrapper")} ${!hasAnyStatValues ? this.decorateCSS("no-stat-values") : ""}`}>
            {(isSubtitleExist || isTitleExist || isDescriptionExist) && (
              <Base.VerticalContent className={this.decorateCSS("header")}>
                {isSubtitleExist && (
                  <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                    {subtitle}
                  </Base.SectionSubTitle>
                )}
                {isTitleExist && (
                  <Base.SectionTitle className={this.decorateCSS("title")}>
                    {title}
                  </Base.SectionTitle>
                )}
                {isDescriptionExist && (
                  <Base.SectionDescription className={this.decorateCSS("description")}>
                    {description}
                  </Base.SectionDescription>
                )}
              </Base.VerticalContent>
            )}

            {stats.length > 0 && (
              <Base.VerticalContent className={this.decorateCSS("stats-wrapper")}>
                <Base.ListGrid
                  gridCount={{ pc: itemCount, tablet: 3, phone: 1 }}
                  className={this.decorateCSS("stats-grid")}
                >
                  {stats.map((stat: StatItem, index: number) => {
                    const hasPrefix = stat.prefix && stat.prefix.trim() !== "";
                    const hasSuffix = stat.suffix && stat.suffix.trim() !== "";
                    const hasNumber = stat.number !== "" || hasPrefix || hasSuffix;
                    const hasSubtitle = this.castToString(stat.subtitle);
                    const hasTitle = this.castToString(stat.title);
                    const hasDescription = this.castToString(stat.description);

                    if (!hasNumber && !hasSubtitle && !hasTitle) return null;

                    return (
                      <Base.VerticalContent key={index} className={this.decorateCSS("stat-item")}>
                        {(hasNumber || hasSubtitle || hasTitle) && (
                          <Base.Row className={this.decorateCSS("stat-header")} style={!hasNumber ? { gridTemplateColumns: "1fr" } : undefined}>
                            {hasNumber && (
                              <span className={this.decorateCSS("stat-value")}>
                                {hasPrefix && (
                                  <span className={this.decorateCSS("stat-prefix")}>
                                    {stat.prefix}
                                  </span>
                                )}
                                <span className={this.decorateCSS("stat-number")}>
                                  {stat.number}
                                </span>
                                {hasSuffix && (
                                  <span className={this.decorateCSS("stat-suffix")}>
                                    {stat.suffix}
                                  </span>
                                )}
                              </span>
                            )}
                            {hasSubtitle && (
                              <Base.H6 className={this.decorateCSS("stat-subtitle")} style={!hasNumber ? { gridColumn: 1 } : undefined}>
                                {stat.subtitle}
                              </Base.H6>
                            )}
                            {hasTitle && (
                              <Base.H5
                                className={this.decorateCSS("stat-title")}
                                style={{ ...(!hasNumber ? { gridColumn: 1 } : {}), ...(!hasSubtitle ? { gridRow: "1 / span 2", alignSelf: "center" } : {}) }}
                              >
                                {stat.title}
                              </Base.H5>
                            )}
                          </Base.Row>
                        )}
                        {hasDescription && (
                          <Base.P className={this.decorateCSS("stat-desc")}>
                            {stat.description}
                          </Base.P>
                        )}
                      </Base.VerticalContent>
                    );
                  })}
                </Base.ListGrid>
              </Base.VerticalContent>
            )}

            {hasValidButtons && (
              <div className={this.decorateCSS("button-container")}>
                {buttons.map((item: INPUTS.CastedButton, index: number) =>
                  this.castToString(item.text) && (
                    <ComposerLink key={`stats19-btn-${index}`} path={item.url}>
                      <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                        <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                      </Base.Button>
                    </ComposerLink>
                  )
                )}
              </div>
            )}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }

}

export default Stats19;