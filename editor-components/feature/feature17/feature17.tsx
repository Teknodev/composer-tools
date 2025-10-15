import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature17.module.scss";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

interface Card {
  icon: string;
  title: string;
  description: string;
}

class Feature17 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    // Başlık
    this.addProp({
      type: "string",
      key: "heading",
      displayer: "Title",
      value: "Unmatched security, privacy, and reliability"
    });

    // Alt başlık
    this.addProp({
      type: "string",
      key: "subheading",
      displayer: "Description",
      value: "Launch customer sites with confidence thanks to enterprise-grade security, built-in data privacy, and reliable hosting."
    });

    // Hizalama kontrolü
    this.addProp({
      type: "string",
      key: "alignment",
      displayer: "Alignment",
      value: "left",
      options: ["left", "center"]
    });

    // Kartlar
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
            { type: "icon", key: "icon", displayer: "Icon", value: "BsCloudCheck" },
            { type: "string", key: "title", displayer: "Title", value: "Worry-free data recovery" },
            { type: "string", key: "description", displayer: "Description", value: "Cloud-computing in multiple locations, automated backups in a separate location, and disaster recovery procedures." },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            { type: "icon", key: "icon", displayer: "Icon", value: "BsShieldLock" },
            { type: "string", key: "title", displayer: "Title", value: "Advanced cybersecurity" },
            { type: "string", key: "description", displayer: "Description", value: "Automated DDoS mitigation, robust data encryption, and strict access controls with SSO and identity management integration." },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            { type: "icon", key: "icon", displayer: "Icon", value: "BsEye" },
            { type: "string", key: "title", displayer: "Title", value: "Privacy and consent" },
            { type: "string", key: "description", displayer: "Description", value: "Built-in privacy and consent management to comply with global standards: GDPR, CCPA, and more." },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            { type: "icon", key: "icon", displayer: "Icon", value: "BsServer" },
            { type: "string", key: "title", displayer: "Title", value: "99.99% uptime" },
            { type: "string", key: "description", displayer: "Description", value: "Duda websites are hosted on AWS, one of the most trusted and secure cloud solutions – with no limits on bandwidth or storage." },
          ],
        },
      ],
    });

    // Butonlar
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "Talk to us", "", null, null, "Primary")]
    });

    // Satırda kaç öğe
    this.addProp({
      type: "number",
      key: "itemsPerRow",
      displayer: "Items Count in a Row",
      value: 4,
      min: 1,
      max: 6
    });
  }

  static getName(): string {
    return "Feature 17";
  }

  render() {
    const features = this.castToObject<Card[]>("features");
    const heading = this.getPropValue("heading");
    const subheading = this.getPropValue("subheading");
    const itemsPerRow = this.getPropValue("itemsPerRow");
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const alignment = this.getPropValue("alignment");

    // CSS grid class
    const gridClass = `${this.decorateCSS("features-grid")} ${this.decorateCSS(`features-grid-${itemsPerRow}`)} ${this.decorateCSS(`alignment-${alignment}`)}`;

    // Eksik öğeler için boş kutu ekle
    const filledFeatures = [...features];
    const remainder = features.length % itemsPerRow;
    if (remainder !== 0) {
      const emptyCount = itemsPerRow - remainder;
      for (let i = 0; i < emptyCount; i++) {
        filledFeatures.push({ icon: "", title: "", description: "" });
      }
    }

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>

          {/* Başlık varsa göster */}
          {(heading || subheading) && (
            <div className={this.decorateCSS("header")}>
              {heading && (
                <Base.SectionTitle className={this.decorateCSS("heading")}>
                  {heading}
                </Base.SectionTitle>
              )}
              {subheading && (
                <Base.SectionDescription className={this.decorateCSS("subheading")}>
                  {subheading}
                </Base.SectionDescription>
              )}
            </div>
          )}

          {/* Özellik kartları */}
          <div className={gridClass}>
            {filledFeatures.map((feature: Card, index: number) => (
              <div key={index} className={this.decorateCSS("feature-card")}>
                {feature.icon && (
                  <div className={this.decorateCSS("icon-container")}>
                    <Base.Icon
                      name={feature.icon}
                      propsIcon={{ className: this.decorateCSS("icon") }}
                    />
                  </div>
                )}
                <div className={this.decorateCSS("content")}>
                  <Base.H3 className={this.decorateCSS("title")}>{feature.title}</Base.H3>
                  <Base.P className={this.decorateCSS("description")}>{feature.description}</Base.P>
                </div>
              </div>
            ))}
          </div>

          <div className={this.decorateCSS("divider")} aria-label="divider" />

          {/* Butonlar */}
          {buttons?.length > 0 && (
            <div className={this.decorateCSS("buttons-container")}>
              {buttons.map((button: INPUTS.CastedButton, index: number) => {
                const text = this.castToString(button.text);
                if (text) {
                  return (
                    <ComposerLink key={index} path={button.url}>
                      <Base.Button
                        buttonType={button.type}
                        className={this.decorateCSS("button")}
                      >
                        {text}
                      </Base.Button>
                    </ComposerLink>
                  );
                }
                return null;
              })}
            </div>
          )}

        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature17;
