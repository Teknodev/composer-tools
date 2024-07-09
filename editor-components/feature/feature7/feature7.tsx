import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature7.module.scss";

type FeatureProps = {
  image: string;
  mainTitle: string;
  subtitle: string;
  features: string[];
  learnMore: string;
  arrow: string;
};

class Feature7 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "featureProps",
      displayer: "Feature Properties",
      value: [
        {
          type: "string",
          key: "image",
          displayer: "Image URL ",
          value:
            "https://vault.uicore.co/marketing-agency/wp-content/uploads/sites/41/2022/08/Marketing-Agency-Features-Image.webp",
        },
        {
          type: "string",
          key: "mainTitle",
          displayer: "Main Title",
          value: "Everything starts with a Marketing plan.",
        },
        {
          type: "string",
          key: "subtitle",
          displayer: "Subtitle",
          value:
            "Turn your business into a sales machine today with lorem Things go wrong have questions.",
        },
        {
          type: "array",
          key: "features",
          displayer: "Features",
          value: [
            {
              type: "string",
              key: "feature1",
              displayer: "Feature 1",
              value: "Amazing communication.",
            },
            {
              type: "string",
              key: "feature2",
              displayer: "Feature 2",
              value: "Best trending designing experience.",
            },
            {
              type: "string",
              key: "feature3",
              displayer: "Feature 3",
              value: "Email & Live chat.",
            },
          ],
        },
        {
          type: "string",
          key: "learnMore",
          displayer: "Learn More Text",
          value: "Want to learn more? Click here",
        },
        {
          type: "string",
          key: "arrow",
          displayer: "Arrow",
          value: "➜",
        },
      ],
    });
  }

  getName(): string {
    return "Feature 7";
  }

  render() {
    const featurePropsArray = this.getPropValue("featureProps") as any[];

    const featureProps: FeatureProps = featurePropsArray.reduce(
      (acc: any, prop: any) => {
        if (Array.isArray(prop.value)) {
          acc[prop.key] = prop.value.map((item: any) => item.value);
        } else {
          acc[prop.key] = prop.value;
        }
        return acc;
      },
      {} as FeatureProps
    );

    const mainTitleParts = featureProps.mainTitle.split("Marketing");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("image-container")}>
          <img
            src={featureProps.image}
            alt="Marketing Agency Features"
            className={this.decorateCSS("image")}
          />
        </div>
        <div className={this.decorateCSS("text-container")}>
          <p className={this.decorateCSS("features-heading")}>FEATURES</p>
          <h1>
            {mainTitleParts[0]}
            <span className={this.decorateCSS("highlight")}>Marketing</span>
            {mainTitleParts[1]}
          </h1>
          <p className={this.decorateCSS("subtitle")}>
            {featureProps.subtitle}
          </p>
          <ul className={this.decorateCSS("features-list")}>
            {featureProps.features.map((feature, index) => (
              <li key={index}>
                <span className={this.decorateCSS("tick")}>✔</span> {feature}
              </li>
            ))}
          </ul>
          <div className={this.decorateCSS("learn-more")}>
            <a
              href="https://vault.uicore.co/marketing-agency/about-us/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{featureProps.learnMore}</span>
              <span className={this.decorateCSS("arrow")}>
                {featureProps.arrow}
              </span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Feature7;
