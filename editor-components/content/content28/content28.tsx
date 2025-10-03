import { BaseContent } from "../../EditorComponent";
import styles from "./content28.module.scss";
import { Base } from "../../../composer-base-components/base/base";

interface FeatureItem {
  title: string;
  text: string;
}

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
      type: "array",
      key: "headings",
      displayer: "Headings",
      value: [
        {
          type: "object",
          key: "headingItem",
          displayer: "Heading Item",
          value: [
            { type: "string", key: "text", displayer: "Heading", value: "I’m Alexander Green, an independent digital designer" }
          ]
        }
      ]
    });

    this.addProp({
      type: "array",
      key: "intros",
      displayer: "Intro Texts",
      value: [
        {
          type: "object",
          key: "introItem",
          displayer: "Intro Item",
          value: [
            { type: "string", key: "text", displayer: "Text", value: "I usually work in vanilla javascript without frameworks for small projects, allowing me a complete freedom on the architecture, a Headless CMS like Prismic for content management." }
          ]
        }
      ]
    });

    this.addProp({
      type: "array",
      key: "features",
      displayer: "Features",
      value: [
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            { type: "string", key: "title", displayer: "Title", value: "Performance" },
            { type: "string", key: "text", displayer: "Text", value: "On the web, every second counts, I pay particular attention to the performance of your project by respecting the best practices." }
          ]
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            { type: "string", key: "title", displayer: "Title", value: "Interaction" },
            { type: "string", key: "text", displayer: "Text", value: "A pleasant experience for your users goes through the animations and interactions of your project, I spend time to imagine and design them." }
          ]
        }
      ]
    });

  }

  static getName(): string {
    return "Content 28";
  }

  render() {
    const imageSrc = this.getPropValue("image") as any;
    const headingItems = (this.castToObject<{ text?: string }[]>("headings") || []) as { text?: string }[];
    const headingEl: any = headingItems[0]?.text;
    const introItems = (this.castToObject<{ text?: string }[]>("intros") || []) as { text?: string }[];
    const introEl: any = introItems[0]?.text;
    const featuresRaw = (this.castToObject<FeatureItem[]>("features") || []) as any[];
    const features = (featuresRaw || []).filter((f: any) => f && typeof f === "object") as FeatureItem[];

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("grid") }>
            {this.castToString(imageSrc as any) && (
              <div className={this.decorateCSS("col-image")}>
                <img src={imageSrc as any} alt={(typeof headingEl === "string" && headingEl) || "portrait"} className={this.decorateCSS("image")} />
              </div>
            )}
            <div className={this.decorateCSS("col-content")}>
              <div className={this.decorateCSS("block-header")}>
                {this.castToString(headingEl) && (
                  <Base.SectionTitle className={this.decorateCSS("heading")}>{headingEl as any}</Base.SectionTitle>
                )}
              </div>
              <div className={this.decorateCSS("block-intro")}>
                {this.castToString(introEl) && (
                  <Base.SectionDescription className={this.decorateCSS("intro")}>{introEl as any}</Base.SectionDescription>
                )}
              </div>
              {features.length > 0 && (
                <div className={this.decorateCSS("block-features")}>
                  <div className={this.decorateCSS("features") }>
                    {features.map((feature: FeatureItem, index: number) => (
                      <div className={this.decorateCSS("feature")} key={index}>
                        <div className={this.decorateCSS("feature-inner")}>
                          {this.castToString(feature?.title as any) && (
                            <Base.SectionSubTitle className={this.decorateCSS("feature-title")}>{feature?.title as any}</Base.SectionSubTitle>
                          )}
                          {this.castToString(feature?.text as any) && (
                            <Base.SectionDescription className={this.decorateCSS("feature-text")}>{feature?.text as any}</Base.SectionDescription>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              </div>
            </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Content28;
