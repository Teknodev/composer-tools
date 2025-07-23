import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content21.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

interface StatItem {
  value: string;
  label: string;
}

class Content21 extends BaseContent {
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
          key: "stat",
          displayer: "Stat",
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
          key: "stat",
          displayer: "Stat",
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
        "https://woodmart.xtemos.com/wp-content/uploads/2021/04/woodmart-architecture-landing-image.jpg",
    });

    this.addProp({
      type: "string",
      key: "sectionTitle",
      displayer: "Section Title",
      value: "Our services",
    });
    this.addProp({
      type: "string",
      key: "mainTitle",
      displayer: "Main Title",
      value: "Work with love",
    });
    this.addProp({
      type: "string",
      key: "description1",
      displayer: "Description 1",
      value:
        "We help our clients realise their ambitions through architecture that’s grounded in people, their experiences and their environments, applying our integrated expertise and the most advanced digital tools to unlock the potential in every project.",
    });
    this.addProp({
      type: "string",
      key: "description2",
      displayer: "Description 2",
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
  }

  static getName(): string {
    return "Content 21";
  }

  render() {
    const stats = this.castToObject<StatItem[]>("stats");
    const image = this.getPropValue("image");
    const sectionTitle = this.getPropValue("sectionTitle");
    const mainTitle = this.getPropValue("mainTitle");
    const description1 = this.getPropValue("description1");
    const description2 = this.getPropValue("description2");
    const buttonText = this.getPropValue("buttonText");
    const buttonLink = this.getPropValue("buttonLink");
    const alignment = Base.getContentAlignment();

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
                {stats.map((item, idx) => (
                  <div className={this.decorateCSS("stat-item")} key={idx}>
                    <Base.P className={this.decorateCSS("stat-value")}>
                      {item.value}
                    </Base.P>
                    <Base.P className={this.decorateCSS("stat-label")}>
                      {item.label}
                    </Base.P>
                  </div>
                ))}
              </div>
              {image && (
                <div className={this.decorateCSS("image-box")}>
                  <img
                    className={this.decorateCSS("image")}
                    src={image}
                    alt="stat"
                  />
                </div>
              )}
            </Base.GridCell>
            <Base.GridCell
              className={`${this.decorateCSS("right")} ${
                alignment === "center" && this.decorateCSS("center")
              }`}
            >
              {sectionTitle && (
                <Base.SectionSubTitle
                  className={this.decorateCSS("section-title")}
                >
                  {sectionTitle}
                </Base.SectionSubTitle>
              )}
              {mainTitle && (
                <Base.SectionTitle className={this.decorateCSS("main-title")}>
                  {mainTitle}
                </Base.SectionTitle>
              )}
              {description1 && (
                <Base.SectionDescription
                  className={this.decorateCSS("description")}
                >
                  {description1}
                </Base.SectionDescription>
              )}
              {description2 && (
                <Base.SectionDescription
                  className={this.decorateCSS("description")}
                >
                  {description2}
                </Base.SectionDescription>
              )}
              <div className={this.decorateCSS("button-container")}>
                <ComposerLink path={buttonLink}>
                  <Base.Button className={this.decorateCSS("button")}>
                    {buttonText}
                  </Base.Button>
                </ComposerLink>
              </div>
            </Base.GridCell>
          </Base.ContainerGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Content21;
