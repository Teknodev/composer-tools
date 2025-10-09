import { BaseContent } from "../../EditorComponent";
import styles from "./content28.module.scss";
import { Base } from "../../../composer-base-components/base/base";

// Feature item structure
interface FeatureItem {
  title: string;
  text: string;
}

/**
 * Content28: Two-column layout with image and feature showcase
 * Features: Optional vertical divider, hover effects, responsive grid
 */
class Content28 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);

    // Main portrait/profile image
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://res.cloudinary.com/dyjpupuop/image/upload/v1759404710/content28_img.png"
    });

    // Main heading text
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
            { type: "string", key: "text", displayer: "Heading", value: "I'm Alexander Green, an independent digital designer" }
          ]
        }
      ]
    });

    // Introduction paragraph
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

    // Feature items with title and description
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

    // Toggle vertical divider line between columns
    this.addProp({
      type: "boolean",
      key: "showLine",
      displayer: "Line (enabled/disabled)",
      value: false
    });

    // Highlight specific feature (for future use)
    this.addProp({
      type: "number",
      key: "activeIndex",
      displayer: "Active Feature Index",
      value: 0
    });

    // Number of feature items per row
    this.addProp({
      type: "number",
      key: "itemsPerRow",
      displayer: "Items Per Row",
      value: 2
    });
  }

  static getName(): string {
    return "Content 28";
  }

  // Helpers
  private getFirstTextFromArray(propKey: string): string | undefined {
    const arr = this.castToObject<{ text?: string }[]>(propKey) || [];
    return arr[0]?.text;
  }

  private getFeatures(): FeatureItem[] {
    const raw = this.castToObject<FeatureItem[]>("features") || [];
    return raw.filter((f) => f && typeof f === "object");
  }

  render() {
    // Extract and prepare data from props
    const imageSrc = this.getPropValue("image");
    const heading = this.getFirstTextFromArray("headings");
    const intro = this.getFirstTextFromArray("intros");
    const features = this.getFeatures();
    const showLine = !!this.getPropValue("showLine");
    const activeIndex = Number(this.getPropValue("activeIndex") ?? 0);
    const itemsPerRow = Number(this.getPropValue("itemsPerRow") ?? 2);

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {/* Main grid: image + optional divider + content */}
          <div className={`${this.decorateCSS("grid")} ${showLine ? this.decorateCSS("has-line") : ""}`}>
            {/* Left column: Image */}
            {this.castToString(imageSrc) && (
              <div className={this.decorateCSS("col-image")}>
                <img
                  src={imageSrc}
                  alt={heading || "portrait"}
                  className={this.decorateCSS("image")}
                />
              </div>
            )}

            {/* Optional vertical divider */}
            {showLine && <div className={this.decorateCSS("center-line")} />}

            {/* Right column: Content */}
            <Base.VerticalContent className={this.decorateCSS("col-content")}>
              {/* Header section with heading and intro */}
              {(heading || intro) && (
                <Base.VerticalContent className={this.decorateCSS("header")}>
                  {heading && (
                    <Base.SectionTitle className={this.decorateCSS("heading")}>
                      {heading}
                    </Base.SectionTitle>
                  )}
                  {intro && (
                    <Base.SectionDescription className={this.decorateCSS("intro")}>
                      {intro}
                    </Base.SectionDescription>
                  )}
                </Base.VerticalContent>
              )}

              {/* Features grid */}
              {features.length > 0 && (
                <div className={this.decorateCSS("features-block")}>
                  <div
                    className={this.decorateCSS("features")}
                    style={{ "--items-per-row": itemsPerRow } as React.CSSProperties}
                  >
                    {features.map((feature, index) => (
                      <Base.VerticalContent
                        className={`${this.decorateCSS("feature")} ${index === activeIndex ? this.decorateCSS("active") : ""}`}
                        key={index}
                      >
                        {feature?.title && (
                          <Base.SectionSubTitle className={this.decorateCSS("feature-title")}>
                            {feature.title}
                          </Base.SectionSubTitle>
                        )}
                        {feature?.text && (
                          <Base.P className={this.decorateCSS("feature-text")}>
                            {feature.text}
                          </Base.P>
                        )}
                      </Base.VerticalContent>
                    ))}
                  </div>
                </div>
              )}
            </Base.VerticalContent>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Content28;
