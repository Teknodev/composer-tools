import * as React from "react";
import { BaseIntroSection, TypeUsableComponentProps, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./intro-section3.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class IntroSection3 extends BaseIntroSection {
  constructor(props?: TypeUsableComponentProps) {
    super(props, styles);

    this.addProp({ type: "string", key: "subtitle", displayer: "Subtitle", value: "" });
    this.addProp({ type: "string", key: "title", displayer: "Title", value: "Everything You Need to Run Your Websites" });
    this.addProp({ type: "string", key: "description", displayer: "Description", value: "" });
    this.addProp({ type: "string", key: "subtitle1", displayer: "Text 1", value: "First 30 days for free." });
    this.addProp({ type: "string", key: "subtitle2", displayer: "Text 2", value: "No credit card required." });

    this.addProp({
      type: "media",
      key: "image",
      displayer: "Image",
      additionalParams: { availableTypes: ["image", "video"] },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/691c5ca53596a1002b2a1afc?alt=media",
      },
    });

    this.addProp({ type: "boolean", key: "overlay", displayer: "Overlay", value: false });
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button 1", "Start Now", "", "", null, "Primary")],
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
    const image = this.getPropValue("image") as TypeMediaInputValue;
    const overlay = this.getPropValue("overlay");
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

    const subtitleExist = this.castToString(subtitle);
    const titleExist = this.castToString(title);
    const descriptionExist = this.castToString(description);
    const subtitle1Exist = this.castToString(subtitle1);
    const subtitle2Exist = this.castToString(subtitle2);
    const hasSubtitleGroup = subtitle1Exist || subtitle2Exist;
    const hasImage = image?.url;
    const isCenter = Base.getContentAlignment() === "center";

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("content")}>
            {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>}
            {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
            {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>}

            {(buttons.length > 0 || hasSubtitleGroup) && (
              <div className={`${this.decorateCSS("button-group-container")}${isCenter ? ` ${this.decorateCSS("center")}` : ""}`}>
                {buttons.length > 0 && (
                  <div className={this.decorateCSS("buttons-wrapper")}>
                    {buttons.map((btn, i) => {
                      const text = this.castToString(btn.text);
                      const iconName = btn.icon?.name;
                      if (!text && !iconName) return null;

                      return (
                        <ComposerLink key={i} path={btn.url}>
                          <Base.Button buttonType={btn.type} className={this.decorateCSS("button")}>
                            {iconName && <Base.Media value={{ type: "icon", name: iconName }} className={this.decorateCSS("button-icon")} />}
                            {text && <Base.P className={this.decorateCSS("button-text")}>{text}</Base.P>}
                          </Base.Button>
                        </ComposerLink>
                      );
                    })}
                  </div>
                )}

                {hasSubtitleGroup && (
                  <div className={this.decorateCSS("subtitle-group")}>
                    {subtitle1Exist && <Base.P className={this.decorateCSS("subtitle1")}>{subtitle1}</Base.P>}
                    {subtitle2Exist && <Base.P className={this.decorateCSS("subtitle2")}>{subtitle2}</Base.P>}
                  </div>
                )}
              </div>
            )}

            {hasImage && (
              <div className={`${this.decorateCSS("image-wrapper")}${overlay ? ` ${this.decorateCSS("overlay")}` : ""}`}>
                <Base.Media value={image} className={this.decorateCSS("image-media")} />
              </div>
            )}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default IntroSection3;
