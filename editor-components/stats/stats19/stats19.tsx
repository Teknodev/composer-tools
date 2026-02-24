import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats19.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type StatItem = {
  number: number;
  suffix: string;
  label: React.ReactNode;
  description: React.ReactNode;
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
            { type: "number", key: "number", displayer: "Number", value: 15 },
            { type: "string", key: "suffix", displayer: "Suffix", value: "K" },
            { type: "string", key: "label", displayer: "Label", value: "Covered Injuries" },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
            },
          ],
        },
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            { type: "number", key: "number", displayer: "Number", value: 100 },
            { type: "string", key: "suffix", displayer: "Suffix", value: "%" },
            { type: "string", key: "label", displayer: "Label", value: "Guaranteed Issue" },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination.",
            },
          ],
        },
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            { type: "number", key: "number", displayer: "Number", value: 5 },
            { type: "string", key: "suffix", displayer: "Suffix", value: "X" },
            { type: "string", key: "label", displayer: "Label", value: "More covered conditions" },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line. User generated content in real-time will have multiple touchpoints for offshoring.",
            },
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
    const statsProp = this.getPropValue("stats");
    const stats: StatItem[] = statsProp.map((item: any) => {
      const number = parseFloat(item.getPropValue("number")) || 0;
      const suffix = String(this.castToString(item.getPropValue("suffix")) || "");
      const label = item.getPropValue("label");
      const description = item.getPropValue("description");
      return { number, suffix, label, description };
    });

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("wrapper")}>
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

            {stats.length > 0 && (
              <Base.ListGrid
                gridCount={{ pc: itemCount, tablet: itemCount, phone: 1 }}
                className={this.decorateCSS("stats-grid")}
              >
                {stats.map((stat: StatItem, index: number) => {
                  const hasSuffix = stat.suffix && stat.suffix.trim() !== "";
                  const hasNumber = stat.number !== 0 || hasSuffix;
                  const isLabelExist = this.castToString(stat.label);
                  const isStatDescExist = this.castToString(stat.description);

                  if (!hasNumber && !hasSuffix && !isLabelExist && !isStatDescExist) return null;

                  return (
                    <div key={index} className={this.decorateCSS("stat-item")}>
                      <div className={this.decorateCSS("stat-header")}>
                        {hasNumber && (
                          <div className={this.decorateCSS("stat-value")}>
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
                        {isLabelExist && (
                          <Base.P className={this.decorateCSS("stat-label")}>
                            {stat.label}
                          </Base.P>
                        )}
                      </div>
                      {isStatDescExist && (
                        <Base.P className={this.decorateCSS("stat-desc")}>
                          {stat.description}
                        </Base.P>
                      )}
                    </div>
                  );
                })}
              </Base.ListGrid>
            )}

            {buttons.length > 0 && (() => {
              const validButtons = buttons.filter((item) => {
                const buttonText = this.castToString(item.text || "");
                const iconName = (item.icon as { name?: string })?.name;
                const hasValidIcon = iconName && iconName !== "";
                return buttonText || hasValidIcon;
              });
              return validButtons.length > 0 ? (
                <div className={this.decorateCSS("button-container")}>
                  {validButtons.map((item, index) => {
                    const buttonText = this.castToString(item.text || "");
                    const buttonUrl = item.url || "#";
                    const iconName = (item.icon as { name?: string })?.name;
                    const hasValidIcon = iconName && iconName !== "";
                    return (
                      <ComposerLink key={`stats19-btn-${index}`} path={buttonUrl}>
                        <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                          {hasValidIcon && (
                            <Base.Media className={this.decorateCSS("icon")} value={{ type: "icon", name: iconName }} />
                          )}
                          {buttonText && <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>}
                        </Base.Button>
                      </ComposerLink>
                    );
                  })}
                </div>
              ) : null;
            })()}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Stats19;
