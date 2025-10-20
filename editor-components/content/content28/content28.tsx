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
            { type: "string", key: "text", displayer: "Heading", value: "I'm Alexander Green, an\nindependent digital designer" }
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

    // Removed Active Feature Index and Items Per Row controls per requirement
  }

  static getName(): string {
    return "Content 28";
  }

  // Helpers
  private getAllTextsFromArray(propKey: string): string[] {
    const arr = this.castToObject<{ text?: string }[]>(propKey) || [];
    return arr.map((i) => i?.text).filter((t): t is string => !!t);
  }

  private getFeatures(): FeatureItem[] {
    const raw = this.castToObject<FeatureItem[]>("features") || [];
    return raw.filter((f) => f && typeof f === "object");
  }

  render() {
    // Extract and prepare data from props
    const imageSrc = this.getPropValue("image");
    const headingTexts = this.getAllTextsFromArray("headings");
    const introTexts = this.getAllTextsFromArray("intros");
    const features = this.getFeatures();
    const showLine = !!this.getPropValue("showLine");
    const activeIndex = Number(this.getPropValue("activeIndex") ?? 0);

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {/* Main grid: image + optional divider + content */}
          <Base.ContainerGrid className={`${this.decorateCSS("grid")} ${showLine ? this.decorateCSS("has-line") : ""}`}> 
            {/* Left column: Image */}
            {this.castToString(imageSrc) && (
            <Base.GridCell className={this.decorateCSS("col-image")} padding="none">
                <Base.Media
                  className={this.decorateCSS("image")}
                  value={{ type: "image", url: this.castToString(imageSrc) as string }}
                />
              </Base.GridCell>
            )}

            {/* Optional vertical divider */}
            {showLine && <hr className={this.decorateCSS("center-line")} />}

            {/* Right column: Content */}
            <Base.GridCell className={this.decorateCSS("col-content")} padding="none">
              <Base.VerticalContent>
              {/* Header section with heading and intro */}
              {(headingTexts.length > 0 || introTexts.length > 0) && (
                <Base.VerticalContent className={this.decorateCSS("header")}>
                  {headingTexts.map((h, idx) => (
                    <Base.SectionTitle className={this.decorateCSS("heading")} key={`h-${idx}`}>
                      {h}
                    </Base.SectionTitle>
                  ))}
                  {introTexts.map((it, idx) => (
                    <Base.SectionDescription className={this.decorateCSS("intro")} key={`i-${idx}`}>
                      {it}
                    </Base.SectionDescription>
                  ))}
                </Base.VerticalContent>
              )}

              {/* Features grid */}
              {features.length > 0 && (
                <div className={this.decorateCSS("features-block")}>
                  <div
                    className={this.decorateCSS("features")}
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
            </Base.GridCell>
          </Base.ContainerGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Content28;
