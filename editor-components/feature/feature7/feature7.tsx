import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature7.module.scss";

class Feature7 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "number",
      key: "width",
      displayer: "Width",
      value: 100,
    });

    this.addProp({
      type: "string",
      key: "image",
      displayer: "Image URL",
      value:
        "https://vault.uicore.co/marketing-agency/wp-content/uploads/sites/41/2022/08/Marketing-Agency-Features-Image.webp",
    });

    this.addProp({
      type: "string",
      key: "mainTitle",
      displayer: "Main Title",
      value: "Everything starts with a Marketing plan.",
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value:
        "Turn your business into a sales machine today with lorem Things go wrong have questions.",
    });

    this.addProp({
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
    });

    this.addProp({
      type: "array",
      key: "button",
      displayer: "Button",
      value: [
        {
          type: "string",
          key: "learnMore",
          displayer: "Learn More Text",
          value: "",
        },
        {
          type: "string",
          key: "arrow",
          displayer: "Arrow",
          value: "➔",
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "icons",
      displayer: "Icons",
      value: [
        {
          type: "string",
          key: "icon1",
          displayer: "Icon 1",
          value: "✔",
        },
        {
          type: "string",
          key: "icon2",
          displayer: "Icon 2",
          value: "✔",
        },
        {
          type: "string",
          key: "icon3",
          displayer: "Icon 3",
          value: "✔",
        },
      ],
    });
  }

  getName(): string {
    return "Feature 7";
  }

  render() {
    const width = this.getPropValue("width") as number;
    const image = this.getPropValue("image") as string;
    const mainTitle =
      (this.getPropValue("mainTitle") as string) ||
      "Everything starts with a Marketing plan.";
    const subtitle = this.getPropValue("subtitle") as string;
    const features = this.getPropValue("features") as any[];
    const buttonProps = this.getPropValue("button") as any[];
    const icons = this.getPropValue("icons") as any[];

    const learnMoreText =
      buttonProps[0].value || "Want to learn more? Click here";
    const arrow = buttonProps[1].value || "➔";

    return (
      <div
        className={this.decorateCSS("container")}
        style={{ width: `${width}%` }}
      >
        {image ? (
          <div className={this.decorateCSS("image-container")}>
            <img
              src={image}
              alt="Marketing Agency Features"
              className={this.decorateCSS("image")}
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/300";
              }}
            />
          </div>
        ) : null}
        <div className={this.decorateCSS("text-container")}>
          <p className={this.decorateCSS("features-heading")}>FEATURES</p>
          {mainTitle && <h1>{mainTitle}</h1>}
          {subtitle && (
            <p className={this.decorateCSS("subtitle")}>{subtitle}</p>
          )}
          <ul className={this.decorateCSS("features-list")}>
            {features.map((feature: any, index: number) => (
              <li key={index}>
                <span className={this.decorateCSS("tick")}>
                  {icons[index].value}
                </span>
                {feature.value}
              </li>
            ))}
          </ul>
          {learnMoreText && arrow && (
            <div className={this.decorateCSS("learn-more")}>
              <a
                href="https://vault.uicore.co/marketing-agency/about-us/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{learnMoreText}</span>
                <span className={this.decorateCSS("arrow")}>{arrow}</span>
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Feature7;
