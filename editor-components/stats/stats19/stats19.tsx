import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats19.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type StatItem = {
  value: React.JSX.Element;
  label: React.JSX.Element;
  description: React.JSX.Element;
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
      key: "stats",
      displayer: "Stats",
      value: [
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            {
              type: "string",
              key: "value",
              displayer: "Value",
              value: "15K",
            },
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Covered Injuries",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
            },
          ],
        },
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            {
              type: "string",
              key: "value",
              displayer: "Value",
              value: "100%",
            },
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Guaranteed Issue",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination.",
            },
          ],
        },
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            {
              type: "string",
              key: "value",
              displayer: "Value",
              value: "5X",
            },
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "More covered conditions",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line. User generated content in real-time will have multiple touchpoints for offshoring.",
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
    const stats = this.castToObject<StatItem[]>("stats");

    const isHeaderExist = isSubtitleExist || isTitleExist || isDescriptionExist;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("wrapper")}>
            {isHeaderExist && (
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
              <Base.ListGrid
                gridCount={{ pc: 3, tablet: 1, phone: 1 }}
                className={this.decorateCSS("stats-grid")}
              >
                {stats.map((stat: StatItem, index: number) => {
                  const isValueExist = this.castToString(stat.value);
                  const isLabelExist = this.castToString(stat.label);
                  const isStatDescExist = this.castToString(stat.description);

                  if (!isValueExist && !isLabelExist && !isStatDescExist) return null;

                  return (
                    <div key={index} className={this.decorateCSS("stat-item")}>
                      <div className={this.decorateCSS("stat-header")}>
                        {isValueExist && (
                          <Base.SectionTitle className={this.decorateCSS("stat-value")}>
                            {stat.value}
                          </Base.SectionTitle>
                        )}
                        {isLabelExist && (
                          <Base.SectionSubTitle className={this.decorateCSS("stat-label")}>
                            {stat.label}
                          </Base.SectionSubTitle>
                        )}
                      </div>
                      {isStatDescExist && (
                        <Base.SectionDescription className={this.decorateCSS("stat-desc")}>
                          {stat.description}
                        </Base.SectionDescription>
                      )}
                    </div>
                  );
                })}
              </Base.ListGrid>
            )}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Stats19;
