import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats11.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
interface StatItem {
  value: React.JSX.Element;
  label: React.JSX.Element;
}

class Stats11 extends BaseStats {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "statItems",
      displayer: "Stat Items",
      value: [
        {
          type: "object",
          key: "statItem",
          displayer: "Stat Item",
          value: [
            { type: "string", key: "value", displayer: "Value", value: "12" },
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Years",
            },
          ],
        },
        {
          type: "object",
          key: "statItem",
          displayer: "Stat Item",
          value: [
            { type: "string", key: "value", displayer: "Value", value: "68" },
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Projects",
            },
          ],
        },
        {
          type: "object",
          key: "statItem",
          displayer: "Stat Item",
          value: [
            { type: "string", key: "value", displayer: "Value", value: "16" },
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Award",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value:
        "https://woodmart.xtemos.com/wp-content/uploads/2023/03/w-architecture-image.jpg.webp",
    });
    this.addProp({
      type: "boolean",
      key: "faintLine",
      displayer: "Faint Line",
      value: true,
    });

    this.addProp({
      type: "string",
      key: "subTitle",
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
      type: "string",
      key: "buttonText",
      displayer: "Button Text",
      value: "Send Request",
    });
    this.addProp({
      type: "page",
      key: "buttonLink",
      displayer: "Button Link",
      value: "",
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
    const statItems = this.castToObject<StatItem[]>("statItems");
    const image = this.getPropValue("image");
    const subTitle = this.getPropValue("subTitle");
    const title = this.getPropValue("title");
    const text1 = this.getPropValue("text1");
    const text2 = this.getPropValue("text2");
    const alignment = Base.getContentAlignment();
    const faintLine = this.getPropValue("faintLine");
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.ContainerGrid className={this.decorateCSS("content-grid")}>
            <Base.GridCell
              className={`${this.decorateCSS("left")} ${
                alignment === "center" && this.decorateCSS("center")
              }`}
            >
              <div className={this.decorateCSS("stats-list")}>
                {statItems.map((item, idx) => (
                  <div className={this.decorateCSS("stat-item")} key={idx}>
                    {this.castToString(item.value) && (
                      <Base.P className={this.decorateCSS("stat-value")}>
                        {item.value}
                      </Base.P>
                    )}
                    {this.castToString(item.label) && (
                      <Base.P className={this.decorateCSS("stat-label")}>
                        {item.label}
                      </Base.P>
                    )}
                  </div>
                ))}
              </div>
              {image && (
                <div className={this.decorateCSS("image-box")}>
                  <Base.Media
                    className={this.decorateCSS("image")}
                    value={{ type: "image", url: image }}
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
              {this.castToString(subTitle) && (
                <Base.SectionSubTitle className={this.decorateCSS("subTitle")}>
                  {subTitle}
                </Base.SectionSubTitle>
              )}
              {this.castToString(title) && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {title}
                </Base.SectionTitle>
              )}
              {text1 && (
                <Base.SectionDescription className={this.decorateCSS("text")}>
                  {text1}
                </Base.SectionDescription>
              )}
              {text2 && (
                <Base.SectionDescription className={this.decorateCSS("text")}>
                  {text2}
                </Base.SectionDescription>
              )}

              {buttons.length > 0 && (
                <div className={this.decorateCSS("button-container")}>
                  {buttons.map((item: INPUTS.CastedButton, index: number) => {
                    return (
                      <div>
                        {this.castToString(item.text) && (
                          <ComposerLink path={item.url}>
                            <Base.Button
                              buttonType={item.type}
                              className={this.decorateCSS("button")}
                            >
                              {item.text}
                            </Base.Button>
                          </ComposerLink>
                        )}
                      </div>
                    );
                  })}
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
