import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats19.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
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
        INPUTS.BUTTON("button", "Button", "fasfasfas", "", null, null, "Primary"),
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
    const itemCount = this.getPropValue("itemCount");
    const alignment = Base.getContentAlignment();
    const statsProp = this.getPropValue("stats");
    const stats: StatItem[] = statsProp.map((item: any) => {
      const subtitle = item.getPropValue("subtitle");
      const itemTitle = item.getPropValue("title");
      const itemDescription = item.getPropValue("description");
      const number = String(this.castToString(item.getPropValue("number")) || "0");
      const prefix = String(this.castToString(item.getPropValue("prefix")) || "");
      const suffix = String(this.castToString(item.getPropValue("suffix")) || "");
      return { subtitle, title: itemTitle, description: itemDescription, number, prefix, suffix };
    });

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={`${this.decorateCSS("wrapper")} ${alignment === "center" ? this.decorateCSS("alignment-center") : ""}`}>
            {(isSubtitleExist || isTitleExist || isDescriptionExist) && (
              <div className={this.decorateCSS("header")}>
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
              </div>
            )}

            {stats.length > 0 && (
              <Base.ListGrid
                gridCount={{ pc: itemCount, tablet: itemCount, phone: 1 }}
                className={this.decorateCSS("stats-grid")}
              >
                {stats.map((stat: StatItem, index: number) => {
                  const hasPrefix = stat.prefix && stat.prefix.trim() !== "";
                  const hasSuffix = stat.suffix && stat.suffix.trim() !== "";
                  const hasNumber = (parseFloat(stat.number) || 0) !== 0 || hasPrefix || hasSuffix;
                  const hasSubtitle = this.castToString(stat.subtitle);
                  const hasTitle = this.castToString(stat.title);
                  const hasDescription = this.castToString(stat.description);

                  if (!hasNumber && !hasTitle) return null;

                  return (
                    <div key={index} className={this.decorateCSS("stat-item")}>
                      {hasSubtitle && (
                        <Base.P className={this.decorateCSS("stat-subtitle")}>
                          {stat.subtitle}
                        </Base.P>
                      )}
                      <div className={this.decorateCSS("stat-header")}>
                        {hasNumber && (
                          <div className={this.decorateCSS("stat-value")}>
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
                          </div>
                        )}
                        {hasTitle && (
                          <Base.H6 className={this.decorateCSS("stat-title")}>
                            {stat.title}
                          </Base.H6>
                        )}
                      </div>
                      {hasDescription && (
                        <Base.P className={this.decorateCSS("stat-desc")}>
                          {stat.description}
                        </Base.P>
                      )}
                    </div>
                  );
                })}
              </Base.ListGrid>
            )}

            {buttons.length > 0 && (
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
