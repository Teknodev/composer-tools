import * as React from "react";
import { BaseIntroSection } from "../../EditorComponent";
import styles from "./intro-section3.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class IntroSection3 extends BaseIntroSection {
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
      value: "Everything You Need to Run Your Websites",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "subtitle1",
      displayer: "Button Text 1",
      value: "First 30 days for free.",
    });

    this.addProp({
      type: "string",
      key: "subtitle2",
      displayer: "Button Text 2",
      value: "No credit card required.",
    });

    this.addProp({
      type: "media",
      key: "image",
      displayer: "Image",
      additionalParams: {
        availableTypes: ["image"],
      },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/691c5ca53596a1002b2a1afc?alt=media",
      },
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button 1", "Start Now", "", "", null, "Primary"),
      ],
    });
  }

  static getName(): string {
    return "Intro Section 3";
  }

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    
    const subtitle1 = this.getPropValue("subtitle1");
    const subtitle2 = this.getPropValue("subtitle2");
    
    const image = this.getPropValue("image");

    const buttonsList = this.castToObject<INPUTS.CastedButton[]>("buttons");
    
    const subtitleText = this.castToString(subtitle);
    const titleText = this.castToString(title);
    const descriptionText = this.castToString(description);
    const subtitle1Text = this.castToString(subtitle1);
    const subtitle2Text = this.castToString(subtitle2);

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("content")}>
            
            {subtitleText && (
              <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                {subtitle}
              </Base.SectionSubTitle>
            )}

            {titleText && (
              <Base.SectionTitle className={this.decorateCSS("title")}>
                {title}
              </Base.SectionTitle>
            )}

            {descriptionText && (
              <Base.SectionDescription className={this.decorateCSS("description")}>
                {description}
              </Base.SectionDescription>
            )}

            <div className={this.decorateCSS("button-subtitle-wrapper")}>
              {buttonsList && buttonsList.map((button: any, index: number) => {
                  const hasButtonText = !!this.castToString(button.text);
                  if (!hasButtonText) return null;
                  
                  return (
                    <ComposerLink key={index} path={button.url || "#"}>
                      <Base.Button 
                        buttonType={button.type || "Primary"} 
                        className={this.decorateCSS("button")}
                      >
                        <Base.P className={this.decorateCSS("button-text")}>
                          {button.text}
                        </Base.P>
                      </Base.Button>
                    </ComposerLink>
                  );
              })}

              {(subtitle1Text || subtitle2Text) && (
                <div className={this.decorateCSS("subtitle-group")}>
                  {subtitle1Text && (
                    <Base.P className={this.decorateCSS("subtitle1")}>
                      {subtitle1}
                    </Base.P>
                  )}
                  {subtitle2Text && (
                    <Base.P className={this.decorateCSS("subtitle2")}>
                      {subtitle2}
                    </Base.P>
                  )}
                </div>
              )}
            </div>

            {image?.url && (
              <Base.Media
                value={image}
                className={this.decorateCSS("image")}
              />
            )}

          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default IntroSection3;