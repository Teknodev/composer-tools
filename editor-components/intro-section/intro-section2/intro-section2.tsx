import * as React from "react";
import { BaseIntroSection } from "../../EditorComponent";
import styles from "./intro-section2.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class IntroSection2 extends BaseIntroSection {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "More Leads & More Customers",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "POWER UP YOUR WEBSITE",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Nanotechnology immersion along the information highway will close the loop on focusing solely",
    });

    this.addProp({
      type: "image",
      key: "cover-image",
      displayer: "Background Image",
      value:
        "https://impreza-landing.us-themes.com/wp-content/uploads/2023/10/windows-JW-T2BH5k5E-unsplash.jpg",
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });

    this.addProp(
      INPUTS.BUTTON("button", "Button", "START FREE TRIAL", "", null, "Primary")
    );
  }

  static getName(): string {
    return "Intro Section 2";
  }

  render() {
    const subtitle = this.castToString(this.getPropValue("subtitle")) || "";
    const title = this.castToString(this.getPropValue("title")) || "";
    const description =
      this.castToString(this.getPropValue("description")) || "";
    const coverImage = this.getPropValue("cover-image");
    const button = this.castToObject<any>("button");
    const hasButton = !!(button && this.castToString(button.text));

    return (
      <Base.Container
        className={`${this.decorateCSS("container")} ${
          coverImage
            ? this.decorateCSS("hasBackground")
            : this.decorateCSS("noBackground")
        } ${this.getPropValue("overlay") ? this.decorateCSS("overlay") : ""}`}
        style={{
          backgroundImage: coverImage ? `url(${coverImage})` : undefined,
        }}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent
            className={this.decorateCSS("vertical-content")}
          >
            <div className={this.decorateCSS("content")}>
              {subtitle && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {subtitle}
                </Base.SectionSubTitle>
              )}

              {title && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {title}
                </Base.SectionTitle>
              )}

              <div className={this.decorateCSS("description-wrapper")}>
                {hasButton && (
                  <div className={this.decorateCSS("button-wrapper")}>
                    <ComposerLink path={button.url}>
                      <Base.Button
                        buttonType={button.type || "Primary"}
                        className={this.decorateCSS("button")}
                      >
                        <Base.P className={this.decorateCSS("button-text")}>
                          {this.castToString(button.text)}
                        </Base.P>
                      </Base.Button>
                    </ComposerLink>
                  </div>
                )}

                {description && (
                  <Base.SectionDescription
                    className={this.decorateCSS("description")}
                  >
                    {description}
                  </Base.SectionDescription>
                )}
              </div>
            </div>
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default IntroSection2;
