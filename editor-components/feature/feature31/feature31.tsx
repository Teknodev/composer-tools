import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature31.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type FeatureItem = {
  icon: { type: "icon"; name: string } | { type: "image"; url: string };
  title: React.JSX.Element;
  description: React.JSX.Element;
};

class Feature31 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "All-in-one solution",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Podcasting operational change management inside of workflows to establish indicators offline to maximise the long tail.",
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
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "BiCheck",
              },
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Modern Design",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Completely iterate covalent strategic theme areas via accurate e-markets.",
            },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "BiCheck",
              },
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "High Quality",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Imagination is more important than knowledge. Imagination encircles the world.",
            },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "BiCheck",
              },
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Ultra Responsive",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Completely iterate covalent strategic theme areas via accurate e-markets.",
            },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "BiCheck",
              },
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Dedicated Support",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Imagination is more important than knowledge. Imagination encircles the world.",
            },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "BiCheck",
              },
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Fully Customizable",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Imagination is more important than knowledge. Imagination encircles the world.",
            },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "BiCheck",
              },
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Premium Addons",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Completely iterate covalent strategic theme areas via accurate e-markets.",
            },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "BiCheck",
              },
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "100% Translatable",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Imagination is more important than knowledge. Imagination encircles the world.",
            },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "BiCheck",
              },
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Free Test-Drive",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Completely iterate covalent strategic theme areas via accurate e-markets.",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count In a Row",
      value: 4,
    });
  }

  static getName(): string {
    return "Feature 31";
  }

  render() {
    const title = this.getPropValue("title");
    const subtitle = this.getPropValue("subtitle");
    const description = this.getPropValue("description");
    const features = this.castToObject<FeatureItem[]>("features");
    const itemCount = this.getPropValue("itemCount");

    const showHeader = this.castToString(title) || this.castToString(subtitle) || this.castToString(description);
    const showFeatures = features.length > 0;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {showHeader && (
            <Base.VerticalContent className={this.decorateCSS("header")}>
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
              {this.castToString(description) && (
                <Base.SectionDescription className={this.decorateCSS("description")}>
                  {description}
                </Base.SectionDescription>
              )}
            </Base.VerticalContent>
          )}

          {showFeatures && (
            <Base.ListGrid
              gridCount={{ pc: itemCount }}
              className={this.decorateCSS("features-grid")}
            >
              {features.map((feature, index) => {
                const hasContent = this.castToString(feature.title) || this.castToString(feature.description) || feature.icon;

                if (!hasContent) {
                  return null;
                }

                return (
                  <div key={index} className={this.decorateCSS("feature-item")}>
                    {feature.icon && (
                      <div className={this.decorateCSS("icon-container")}>
                        <Base.Media value={feature.icon} className={this.decorateCSS("icon")} />
                      </div>
                    )}
                    <Base.VerticalContent className={this.decorateCSS("content")}>
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
                    </Base.VerticalContent>
                  </div>
                );
              })}
            </Base.ListGrid>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature31;

