import * as React from "react";
import { BaseStats, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./stats11.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "../../../custom-hooks/input-templates";
interface StatItem {
  number: React.JSX.Element;
  description: React.JSX.Element;
}

class Stats11 extends BaseStats {
  constructor(props?: any) {
    super(props, styles);

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
            { type: "string", key: "number", displayer: "Value", value: "12" },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Years",
            },
          ],
        },
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            { type: "string", key: "number", displayer: "Value", value: "68" },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Projects",
            },
          ],
        },
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            { type: "string", key: "number", displayer: "Value", value: "16" },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Award",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "media",
      key: "image",
      displayer: "Image",
      additionalParams: { availableTypes: ["image", "video"] },
      value: {
        type: "image",
        url: "https://woodmart.xtemos.com/wp-content/uploads/2023/03/w-architecture-image.jpg.webp",
      },
    });
    this.addProp({
      type: "boolean",
      key: "faintLine",
      displayer: "Line",
      value: true,
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Our services",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Work with love",
    });
    this.addProp({
      type: "string",
      key: "text1",
      displayer: "Text",
      value:
        "We help our clients realise their ambitions through architecture that’s grounded in people, their experiences and their environments, applying our integrated expertise and the most advanced digital tools to unlock the potential in every project.",
    });
    this.addProp({
      type: "string",
      key: "text2",
      displayer: "Text 2",
      value:
        "It’s an approach that’s allowed us to create exhilarating sporting venues, bring greener futures to commercial developments, connect communities through more intuitive and efficient transport systems, and deliver cutting edge scientific and industrial facilities.",
    });



    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON(
          "button",
          "Button",
          "Send Request",
          "",
          null,
          null,
          "Primary"
        ),
      ],
    });
  }

  static getName(): string {
    return "Stats 11";
  }

  render() {
    const statItems = this.castToObject<StatItem[]>("stats");
    const image = this.getPropValue("image") as TypeMediaInputValue;
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const text1 = this.getPropValue("text1");
    const text2 = this.getPropValue("text2");
    const alignment = Base.getContentAlignment();
    const faintLine = this.getPropValue("faintLine");
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const hasValidButtons = buttons.some((b) => this.castToString(b.text));

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.ContainerGrid className={this.decorateCSS("content-grid")}>
            <Base.GridCell
              className={`${this.decorateCSS("left")} ${
                alignment === "center" && this.decorateCSS("center")
              }`}
            >
              {statItems.length > 0 && (
                <div className={this.decorateCSS("stats-list")}>
                  {statItems.map((item, idx) => {
                    const numberExist = this.castToString(item.number);
                    const descriptionExist = this.castToString(item.description);
                    if (!numberExist && !descriptionExist) return null;
                    return (
                      <div className={this.decorateCSS("stat-item")} key={idx}>
                        {numberExist && (
                          <Base.P className={this.decorateCSS("stat-value")}>
                            {item.number}
                          </Base.P>
                        )}
                        {descriptionExist && (
                          <Base.P className={this.decorateCSS("stat-label")}>
                            {item.description}
                          </Base.P>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
              {image?.url && (
                <div className={this.decorateCSS("image-box")}>
                  <Base.Media
                    className={this.decorateCSS("image")}
                    value={image}
                  />
                </div>
              )}
            </Base.GridCell>
            {faintLine && <hr className={this.decorateCSS("stick")} />}
            <Base.GridCell
              className={`${this.decorateCSS("right")} ${
                alignment === "center" && this.decorateCSS("center")
              }`}
            >
              {this.castToString(subtitle) && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {subtitle}
                </Base.SectionSubTitle>
              )}
              {this.castToString(title) && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {title}
                </Base.SectionTitle>
              )}
              {this.castToString(text1) && (
                <Base.SectionDescription className={this.decorateCSS("text")}>
                  {text1}
                </Base.SectionDescription>
              )}
              {this.castToString(text2) && (
                <Base.SectionDescription className={this.decorateCSS("text")}>
                  {text2}
                </Base.SectionDescription>
              )}

              {hasValidButtons && (
                <div className={this.decorateCSS("button-container")}>
                  {buttons.map(
                    (item: INPUTS.CastedButton, index: number) =>
                      this.castToString(item.text) && (
                        <ComposerLink key={index} path={item.url}>
                          <Base.Button
                            buttonType={item.type}
                            className={this.decorateCSS("button")}
                          >
                            {item.text}
                          </Base.Button>
                        </ComposerLink>
                      )
                  )}
                </div>
              )}
            </Base.GridCell>
          </Base.ContainerGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Stats11;
