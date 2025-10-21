import { BaseContent } from "../../EditorComponent";
import styles from "./content28.module.scss";
import { Base } from "../../../composer-base-components/base/base";

// Feature item interface for type safety
interface FeatureItem {
  title?: string;
  text?: string;
}

/**
 * Content28: Two-column layout with image and feature showcase
 * Features: Responsive grid, hover effects, customizable feature count
 */
class Content28 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);

    // Main profile/portrait image
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://res.cloudinary.com/dyjpupuop/image/upload/v1759404710/content28_img.png"
    });

    // Main heading text
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "I'm Alexander Green, an\nindependent digital designer"
    });

    // Introduction/description text
    this.addProp({
      type: "string",
      key: "intro",
      displayer: "Intro",
      value: "I usually work in vanilla javascript without frameworks for small projects, allowing me a complete freedom on the architecture, a Headless CMS like Prismic for content management."
    });

    // Feature items array with title and description
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

    // Number of feature items per row (desktop layout)
    this.addProp({
      type: "number",
      key: "itemsPerRow",
      displayer: "Item Count in a Row",
      value: 2,
      max: 6
    });
  }

  static getName(): string {
    return "Content 28";
  }

  // Extract and format feature items from props
  private getFeatures(): FeatureItem[] {
    const raw = (this.castToObject<any[]>("features") || []).filter((f) => !!f);
    return raw.map((item) => {
      const value = (item as any)?.value || item;
      const title = this.getPropValue("title", { parent_object: value }) as string;
      const text = this.getPropValue("text", { parent_object: value }) as string;
      return { title, text } as FeatureItem;
    });
  }

  // Get number of items per row for grid layout
  private getItemCount(): number {
    return this.getPropValue("itemsPerRow");
  }

  render() {
    // Get all component data from props
    const imageSrc = this.getPropValue("image");
    const titleText = this.getPropValue("title");
    const introText = this.getPropValue("intro");
    const features = this.getFeatures();
    const activeIndex = Number(this.getPropValue("activeIndex") ?? 0);
    const itemCount = this.getItemCount();

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {/* Two-column layout: image and content */}
          <Base.ContainerGrid className={this.decorateCSS("grid")}> 
            {/* Left column: Profile image */}
            {this.castToString(imageSrc) && (
            <Base.GridCell className={this.decorateCSS("col-image")} padding="none">
                <Base.Media
                  className={this.decorateCSS("image")}
                  value={{ type: "image", url: this.castToString(imageSrc) as string }}
                />
              </Base.GridCell>
            )}

            {/* Right column: Text content and features */}
            <Base.GridCell className={this.decorateCSS("col-content")} padding="none">
              <Base.VerticalContent>
              {/* Header section with title and introduction */}
              {(titleText || introText) && (
                <Base.VerticalContent className={this.decorateCSS("header")}>
                  {titleText ? (
                    <Base.SectionTitle className={this.decorateCSS("heading")}>
                      <span className={this.decorateCSS("heading-text")}>
                        {titleText}
                      </span>
                    </Base.SectionTitle>
                  ) : null}
                  {introText ? (
                    <Base.SectionDescription className={this.decorateCSS("intro")}>
                      {introText}
                    </Base.SectionDescription>
                  ) : null}
                </Base.VerticalContent>
              )}

              {/* Features grid section */}
              {features.length > 0 && (
                <div className={this.decorateCSS("features-block")}>
                  <div 
                    className={this.decorateCSS("features")}
                    style={{ gridTemplateColumns: `repeat(${itemCount}, 1fr)` }}
                  > 
                    {features.map((_, index) => {
                      const featuresArray = this.getPropValue("features") as any[];
                      const featureObj = featuresArray?.[index];
                      const titleProp = featureObj?.value?.find((v: any) => v.key === "title");
                      const textProp = featureObj?.value?.find((v: any) => v.key === "text");

                      return (
                        <Base.VerticalContent
                          className={`${this.decorateCSS("feature")} ${index === activeIndex ? this.decorateCSS("active") : ""}`}
                          key={index}
                        >
                          {titleProp && (
                            <Base.SectionSubTitle className={this.decorateCSS("feature-title")}>
                              {this.getPropValue("title", { parent_object: featureObj.value })}
                            </Base.SectionSubTitle>
                          )}
                          {textProp && (
                            <Base.P className={this.decorateCSS("feature-text")}>
                              {this.getPropValue("text", { parent_object: featureObj.value })}
                            </Base.P>
                          )}
                        </Base.VerticalContent>
                      );
                    })}
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
