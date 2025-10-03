import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content28.module.scss";
import { Base } from "../../../composer-base-components/base/base";

class Content28 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://res.cloudinary.com/dyjpupuop/image/upload/v1759404710/content28_img.png"
    });

    this.addProp({
      type: "string",
      key: "heading",
      displayer: "Heading",
      value: "I’m Alexander Green, an independent digital designer"
    });

    this.addProp({
      type: "string",
      key: "intro",
      displayer: "Intro Text",
      value: "I usually work in vanilla javascript without frameworks for small projects, allowing me a complete freedom on the architecture, a Headless CMS like Prismic for content management."
    });

    // Feature left
    this.addProp({
      type: "object",
      key: "featureLeft",
      displayer: "Feature Left",
      value: [
        { type: "string", key: "title", displayer: "Title", value: "Performance" },
        { type: "string", key: "text", displayer: "Text", value: "On the web, every second counts, I pay particular attention to the performance of your project by respecting the best practices." }
      ]
    });

    // Feature right
    this.addProp({
      type: "object",
      key: "featureRight",
      displayer: "Feature Right",
      value: [
        { type: "string", key: "title", displayer: "Title", value: "Interaction" },
        { type: "string", key: "text", displayer: "Text", value: "A pleasant experience for your users goes through the animations and interactions of your project, I spend time to imagine and design them." }
      ]
    });

  }

  static getName(): string {
    return "Content 28";
  }

  render() {
    const image = this.getPropValue("image");
    const headingEl = this.getPropValue("heading");
    const introEl = this.getPropValue("intro");
    const featureLeft = this.castToObject("featureLeft") as { title?: string; text?: string };
    const featureRight = this.castToObject("featureRight") as { title?: string; text?: string };

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("grid") }>
            <div className={this.decorateCSS("col-image")}>
              {typeof image === "string" && (
                <img src={image} alt={(typeof headingEl === "string" && headingEl) || "portrait"} className={this.decorateCSS("image")} />
              )}
            </div>
            <div className={this.decorateCSS("col-content")}>
              <div className={this.decorateCSS("block-header")}>
                {this.castToString(headingEl) && (
                  <Base.SectionTitle className={this.decorateCSS("heading")}>{this.getPropValue("heading")}</Base.SectionTitle>
                )}
              </div>
              <div className={this.decorateCSS("block-intro")}>
                {this.castToString(introEl) && (
                  <Base.SectionDescription className={this.decorateCSS("intro")}>{this.getPropValue("intro")}</Base.SectionDescription>
                )}
              </div>
              <div className={this.decorateCSS("block-features")}>
                <div className={this.decorateCSS("features") }>
                <div className={this.decorateCSS("feature")}>
                  <div className={this.decorateCSS("feature-inner")}>
                    {this.castToString(featureLeft?.title as any) && (
                      <Base.SectionSubTitle className={this.decorateCSS("feature-title")}>{featureLeft?.title as any}</Base.SectionSubTitle>
                    )}
                    {this.castToString(featureLeft?.text as any) && (
                      <Base.SectionDescription className={this.decorateCSS("feature-text")}>{featureLeft?.text as any}</Base.SectionDescription>
                    )}
                  </div>
                </div>
                <div className={this.decorateCSS("feature")}>
                  <div className={this.decorateCSS("feature-inner")}>
                    {this.castToString(featureRight?.title as any) && (
                      <Base.SectionSubTitle className={this.decorateCSS("feature-title")}>{featureRight?.title as any}</Base.SectionSubTitle>
                    )}
                    {this.castToString(featureRight?.text as any) && (
                      <Base.SectionDescription className={this.decorateCSS("feature-text")}>{featureRight?.text as any}</Base.SectionDescription>
                    )}
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Content28;
