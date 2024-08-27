import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature7.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type Feature = {
  title: string;
  iconFeature: string;
};

type Link = {
  linkText: string;
  iconLink: string;
  url: string;
}

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
      type: "array",
      key: "links",
      displayer: "Links",
      value: [
        {
          type: "object",
          key: "link",
          displayer: "link",
          value: [
            {
              type: "string",
              key: "linkText",
              displayer: "Link Text",
              value: "Want to learn more? Click here",
            },
            {
              type: "icon",
              key: "iconLink",
              displayer: "Icon",
              value: "FaArrowRight",
            },
            {
              type: "page",
              key: "url",
              displayer: "URL",
              value: "",
            }
          ],
        },
      ],
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
    const hasLinks = this.getPropValue("links");
    const hasTextContent =
      hasTitle ||
      hasMainTitle ||
      hasdescription ||
      hasLinks ||
      hasFeatures;

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {this.getPropValue("image") && (
            <div className={this.decorateCSS("image-container")}>
              <img
                src={this.getPropValue("image")}
                className={`${this.decorateCSS("image")} ${(hasTextContent.length < 1) && this.decorateCSS("no-text-container")}`}
              />
            </div>
          )}
          {hasTextContent.length > 0 && (
            <div className={`${this.decorateCSS("textContainer")} ${!this.getPropValue("image") && this.decorateCSS("no-image")}`}>
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
              {hasFeatures.length > 0 && (
                <ul className={this.decorateCSS("featuresList")}>
                  {this.castToObject<Feature[]>("features").map(
                    (feature: Feature, index: number) => (
                      <li key={index} className={this.decorateCSS("feature")}>
                        {feature.iconFeature && (
                          <div className={this.decorateCSS("icon-wrapper")}>
                            <ComposerIcon
                              name={feature.iconFeature}
                              propsIcon={{
                                className: this.decorateCSS("iconFeature"),
                              }}
                            />
                          </div>
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

              {hasLinks.length > 0 && (
                <ul className={this.decorateCSS("linkList")}>
                  {this.castToObject<Link[]>("links").map(
                    (link: Link, index: number) => (
                      <div className={this.decorateCSS("linkContainer")}>
                        <li key={index} className={this.decorateCSS("link")}>
                          {link.linkText && (
                            <ComposerLink path={link.url}>
                              <span className={this.decorateCSS("linkText")}>
                                {link.linkText}
                              </span>
                            </ComposerLink>
                          )}
                          {link.iconLink && (
                            <ComposerIcon
                              name={link.iconLink}
                              propsIcon={{
                                className: this.decorateCSS("iconLink"),
                              }}
                            />
                          )}
                        </li>
                      </div>
                    )
                  )}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Feature7;
