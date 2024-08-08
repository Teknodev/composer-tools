import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature7.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type Feature = {
  title: string;
  iconFeature: string;
};

class Feature7 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a25bdb2f8a5b002ce67862?alt=media",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "FEATURES",
    });

    this.addProp({
      type: "string",
      key: "mainTitle",
      displayer: "Main Title",
      value: "Everything starts with a Marketing plan.",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Turn your business into a sales machine today with lorem Things go wrong have questions.",
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
              displayer: "Feature 1",
              value: "Amazing communication.",
            },
            {
              type: "icon",
              key: "iconFeature",
              displayer: "Icon",
              value: "FaCheck",
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
              displayer: "Feature 2",
              value: "Best trending designing experience.",
            },
            {
              type: "icon",
              key: "iconFeature",
              displayer: "Icon",
              value: "FaCheck",
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
              displayer: "Feature 3",
              value: "Email & Live chat.",
            },
            {
              type: "icon",
              key: "iconFeature",
              displayer: "Icon",
              value: "FaCheck",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "string",
      key: "linkText",
      displayer: "Link Text",
      value: "Want to learn more? Click here",
    });

    this.addProp({
      type: "icon",
      key: "iconLink",
      displayer: "Icon",
      value: "FaArrowRight",
    });
  }

  getName(): string {
    return "Feature 7";
  }

  render() {
    const hasTitle = this.castToString(this.getPropValue("title"));
    const hasMainTitle = this.castToString(this.getPropValue("mainTitle"));
    const hasdescription = this.castToString(this.getPropValue("description"));
    const hasFeatures = this.getPropValue("features");
    const hasLinkText = this.castToString(this.getPropValue("linkText"));
    const hasIconLink = this.getPropValue("iconLink");
    const hasTextContent =
      hasTitle ||
      hasMainTitle ||
      hasdescription ||
      hasFeatures ||
      hasLinkText ||
      hasIconLink;

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {this.getPropValue("image") && (
            <div className={this.decorateCSS("image-container")}>
              <img
                src={this.getPropValue("image")}
                className={this.decorateCSS("image")}
              />
            </div>
          )}
          {hasTextContent && (
            <div className={this.decorateCSS("textContainer")}>
              {hasTitle && (
                <h2 className={this.decorateCSS("title")}>
                  {this.getPropValue("title")}
                </h2>
              )}
              {hasMainTitle && (
                <h1 className={this.decorateCSS("mainTitle")}>
                  {this.getPropValue("mainTitle")}
                </h1>
              )}
              {hasdescription && (
                <p className={this.decorateCSS("description")}>
                  {this.getPropValue("description")}
                </p>
              )}
              {hasFeatures && (
                <ul className={this.decorateCSS("featuresList")}>
                  {this.castToObject<Feature[]>("features").map(
                    (feature: Feature, index: number) => (
                      <li key={index} className={this.decorateCSS("feature")}>
                        {feature.iconFeature && (
                          <ComposerIcon
                            name={feature.iconFeature}
                            propsIcon={{
                              className: this.decorateCSS("iconFeature"),
                            }}
                          />
                        )}
                        {feature.title && (
                          <span className={this.decorateCSS("featureTitle")}>
                            {feature.title}
                          </span>
                        )}
                      </li>
                    )
                  )}
                </ul>
              )}
              {(hasLinkText || hasIconLink) && (
                <ComposerLink
                  path={this.getPropValue("linkText")}
                >
                  <div className={this.decorateCSS("linkContainer")}>
                    {hasLinkText && (
                      <span className={this.decorateCSS("linkText")}>
                        {this.getPropValue("linkText")}
                      </span>
                    )}

                    {hasIconLink && (
                      <ComposerIcon
                        name={this.getPropValue("iconLink")}
                        propsIcon={{ className: this.decorateCSS("iconLink") }}
                      />
                    )}
                  </div>
                </ComposerLink>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Feature7;
