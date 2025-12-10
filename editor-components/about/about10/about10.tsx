import * as React from "react";
import { BaseAbout, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./about10.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type ButtonData = {
  text?: React.JSX.Element;
  url?: string;
  icon?: TypeMediaInputValue;
  type?: INPUTS.CastedButton["type"];
};

interface FeatureItem {
  title: React.JSX.Element;
  description: React.JSX.Element;
}

class About10 extends BaseAbout {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "About Us",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Agile Framework to Improve Your Team",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail.",
    });

    this.addProp(INPUTS.BUTTON("button", "Button", "More About Us", "", "IoIosArrowForward", null, "Primary"));

    this.addProp({
      type: "media",
      key: "mainImage",
      displayer: "Media",
      additionalParams: {
        availableTypes: ["image", "video"],
      },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69133ed33596a1002b2462ba?alt=media",
      },
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: false,
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
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Location",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "5 min to the city center",
            },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Convenience",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "We work around the clock",
            },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Masters",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "High-class specialists",
            },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Universal",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Spa for men and women",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 4
    });

    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: [],
      additionalParams: {
        selectItems: ["animate1", "animate2"]
      }
    });

  }

  static getName(): string {
    return "About 10";
  }

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const buttonData = this.castToObject<ButtonData>("button");
    const buttonIcon = buttonData.icon;
    const hasButtonIcon = buttonIcon ? (buttonIcon.type === "icon" ? buttonIcon.name : buttonIcon.url) : "";
    const buttonTextValue = buttonData.text;
    const buttonText = buttonTextValue ? this.castToString(buttonTextValue) : "";
    const hasButtonText = !!buttonText;
    const mainImage = this.getPropValue("mainImage");
    const features = this.castToObject<FeatureItem[]>("features");
    const hoverAnimation = this.getPropValue("hoverAnimation") || [];
    const animationClass = hoverAnimation.length ? hoverAnimation.join(" ") : "";

    const hasSubtitleOrTitle = this.castToString(subtitle) || this.castToString(title);
    const hasDescriptionOrButton = this.castToString(description) || hasButtonText || hasButtonIcon;
    const isImageExist = mainImage;
    const isFeaturesExist = features.length > 0;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div
            className={`${this.decorateCSS("header")} ${!hasSubtitleOrTitle ? this.decorateCSS("no-left") : ""} ${!hasDescriptionOrButton ? this.decorateCSS("no-right") : ""}`}
          >
            {hasSubtitleOrTitle && (
              <div className={this.decorateCSS("content-section")}>
                <Base.VerticalContent className={this.decorateCSS("text-content")}>
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
                </Base.VerticalContent>
              </div>
            )}
            {hasDescriptionOrButton && (
              <div className={this.decorateCSS("content-section")}>
                <Base.VerticalContent className={this.decorateCSS("action-content")}>
                  {this.castToString(description) && (
                    <Base.SectionDescription className={this.decorateCSS("description")}>
                      {description}
                    </Base.SectionDescription>
                  )}
                  {(hasButtonText || hasButtonIcon) && (
                    <div className={this.decorateCSS("button-wrapper")}>
                      <ComposerLink path={buttonData.url}>
                        <Base.Button buttonType={buttonData.type || "Secondary"}>
                          {hasButtonIcon && (
                            <Base.Media value={buttonIcon} className={this.decorateCSS("button-icon")} />
                          )}
                          {hasButtonText && (
                            <Base.P className={this.decorateCSS("button-text")}>
                              {buttonText}
                            </Base.P>
                          )}
                        </Base.Button>
                      </ComposerLink>
                    </div>
                  )}
                </Base.VerticalContent>
              </div>
            )}
          </div>

          {isImageExist && (
            <div 
              className={this.decorateCSS("image-section")}
              data-animation={animationClass || undefined}
            >
              <Base.Media
                value={mainImage}
                className={this.decorateCSS("main-image")}
              />
              {this.getPropValue("overlay") && (
                <div className={this.decorateCSS("overlay")} />
              )}
            </div>
          )}

          {isFeaturesExist && (
            <div className={this.decorateCSS("features-section")}>
              <Base.ListGrid
                className={this.decorateCSS("features-grid")}
                gridCount={{ pc: this.getPropValue("itemCount"), tablet: 2, phone: 1 }}
              >
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={this.decorateCSS("feature-item")}
                  >
                    {this.castToString(feature.title) && (
                      <Base.H4 className={this.decorateCSS("feature-title")}>
                        {feature.title}
                      </Base.H4>
                    )}
                    {this.castToString(feature.description) && (
                      <Base.P className={this.decorateCSS("feature-description")}>
                        {feature.description}
                      </Base.P>
                    )}
                  </div>
                ))}
              </Base.ListGrid>
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default About10;