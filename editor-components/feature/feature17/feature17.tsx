import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature17.module.scss";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

interface Card {
  media?: {
    type: "icon" | "image";
    name?: string;
    url?: string;
  };
  title: string;
  description: string;
}

class Feature17 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "heading",
      displayer: "Title",
      value: "Unmatched security, privacy, and reliability"
    });

    this.addProp({
      type: "string",
      key: "subheading",
      displayer: "Description",
      value:
        "Launch customer sites with confidence thanks to enterprise-grade security, built-in data privacy, and reliable hosting."
    });

    this.addProp({
      type: "array",
      displayer: "Features",
      key: "features",
      value: [
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            {
              type: "media",
              key: "media",
              displayer: "Icon or Image",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "BsCloudCheck" }
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Worry-free data recovery"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Cloud-computing in multiple locations, automated backups in a separate location, and disaster recovery procedures."
            }
          ]
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            {
              type: "media",
              key: "media",
              displayer: "Icon or Image",
               additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "BsShieldCheck" }
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Advanced cybersecurity"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Automated DDoS mitigation, robust data encryption, and strict access controls with SSO and identity management integration."
            }
          ]
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            {
              type: "media",
              key: "media",
              displayer: "Icon or Image",
               additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "BsLock" }
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Privacy and consent"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Built-in privacy and consent management to comply with global standards: GDPR, CCPA, and more."
            }
          ]
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            {
              type: "media",
              key: "media",
              displayer: "Icon or Image",
               additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "BsGraphUp" }
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "99.99% uptime"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Duda websites are hosted on AWS, one of the most trusted and secure cloud solutions – with no limits on bandwidth or storage."
            }
          ]
        }
      ]
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON(
          "button",
          "Button",
          "Talk to us",
          null,
          null,
          null,
          "Primary"
        )
      ]
    });

    this.addProp({
      type: "number",
      key: "itemsPerRow",
      displayer: "Items Count in a Row",
      value: 4,
    });
  }

  static getName(): string {
    return "Feature 17";
  }

  render() {
    const features = this.castToObject<Card[]>("features") || [];
    const heading = this.getPropValue("heading");
    const subheading = this.getPropValue("subheading");
    const itemsPerRow = this.getPropValue("itemsPerRow") || 4;
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];

    const headingExist = this.castToString(heading);
    const subheadingExist = this.castToString(subheading);

    const gridClass = `${this.decorateCSS("features-grid")} ${this.decorateCSS(`features-grid-${itemsPerRow}`)}`;
    const validFeatures = features.filter(
      (f) => f.title || f.description || f.media
    );

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(headingExist || subheadingExist) && (
            <Base.VerticalContent className={this.decorateCSS("header")}>
              {headingExist && (
                <Base.SectionTitle className={this.decorateCSS("heading")}>
                  {heading}
                </Base.SectionTitle>
              )}
              {subheadingExist && (
                <Base.SectionDescription
                  className={this.decorateCSS("subheading")}
                >
                  {subheading}
                </Base.SectionDescription>
              )}
            </Base.VerticalContent>
          )}

          {headingExist && subheadingExist && (
            <div className={this.decorateCSS("divider")} aria-hidden="true" />
          )}

          {validFeatures.length > 0 && (
            <div className={gridClass}>
              {validFeatures.map((feature: Card, index: number) => {
                const titleExist = this.castToString(feature.title);
                const descriptionExist = this.castToString(feature.description);
                const media = feature.media;
                console.log('media', media);
                return (
                  <Base.VerticalContent
                    key={index}
                    className={this.decorateCSS("feature-card")}
                  >
                    {media && (
                      <div className={this.decorateCSS("icon-container")}>
                        <Base.Media
                          value={media}
                          className={this.decorateCSS("icon")}
                        />
                      </div>
                    )}

                    {(titleExist || descriptionExist) && (
                      <Base.VerticalContent className={this.decorateCSS("content")}>
                        {titleExist && (
                          <Base.H3 className={this.decorateCSS("title")}>
                            {feature.title}
                          </Base.H3>
                        )}
                        {descriptionExist && (
                          <Base.P className={this.decorateCSS("description")}>
                            {feature.description}
                          </Base.P>
                        )}
                      </Base.VerticalContent>
                    )}
                  </Base.VerticalContent>
                );
              })}
            </div>
          )}

          {(headingExist || subheadingExist) && (
            <div className={this.decorateCSS("divider")} aria-label="divider" />
          )}

          {buttons.length > 0 && (
            <div className={this.decorateCSS("buttons-group")}>
              {buttons.map((item: INPUTS.CastedButton, index: number) => {
                const buttonTitleExist = this.castToString(item.text);
                const iconExist = item.icon;
                const buttonExist = buttonTitleExist || iconExist;

                return (
                  buttonExist && (
                    <div
                      key={`ft-17-btn-${index}`}
                      className={this.decorateCSS("button-wrapper")}
                    >
                      <ComposerLink path={item.url}>
                        <Base.Button
                          buttonType={item.type}
                          className={this.decorateCSS("button")}
                        >
                          {buttonTitleExist && (
                            <Base.P className={this.decorateCSS("button-text")}>
                              {item.text}
                            </Base.P>
                          )}
                        </Base.Button>
                      </ComposerLink>
                    </div>
                  )
                );
              })}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature17;
