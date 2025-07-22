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
            { type: "string", key: "label", displayer: "Label", value: "Years" },
          ],
        },
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            { type: "string", key: "value", displayer: "Value", value: "68" },
            { type: "string", key: "label", displayer: "Label", value: "Projects" },
          ],
        },
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            { type: "string", key: "value", displayer: "Value", value: "16" },
            { type: "string", key: "label", displayer: "Label", value: "Award" },
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
      key: "description",
      displayer: "Description",
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
    const description = this.getPropValue("description");
    const buttonText = this.getPropValue("buttonText");
    const buttonLink = this.getPropValue("buttonLink");

    return (
      <Base.Container className={this.decorateCSS("container")}> 
        <Base.MaxContent className={this.decorateCSS("max-content")}> 
          <Base.ContainerGrid className={this.decorateCSS("content-grid")}> 
            <Base.GridCell className={this.decorateCSS("left")}> 
              <div className={this.decorateCSS("stats-list")}> 
                {stats.map((item, idx) => (
                  <div className={this.decorateCSS("stat-item")} key={idx}> 
                    <span className={this.decorateCSS("stat-value")}>{item.value}</span> 
                    <span className={this.decorateCSS("stat-label")}>{item.label}</span> 
                  </div>
                ))}
              </div>
              {image && (
                <div className={this.decorateCSS("image-box")}> 
                  <img className={this.decorateCSS("image")} src={image} alt="stat" />
                </div>
              )}
            </Base.GridCell>
            <Base.GridCell className={this.decorateCSS("right")}> 
              <div className={this.decorateCSS("section-title")}>{sectionTitle}</div>
              <h2 className={this.decorateCSS("main-title")}>{mainTitle}</h2>
              <div className={this.decorateCSS("description")}>{description}</div>
              <ComposerLink path={buttonLink}>
                <button className={this.decorateCSS("button")}>{buttonText}</button>
              </ComposerLink>
            </Base.GridCell>
          </Base.ContainerGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Content21;
