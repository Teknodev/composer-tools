import * as React from "react";
import { BaseIntroSection, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./intro-section5.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type IntroSection5Button = Omit<INPUTS.CastedButton, "icon"> & { icon?: TypeMediaInputValue };

class IntroSection5 extends BaseIntroSection {
  constructor(props?: {}) {
    super(props, styles);

    this.addProp({ type: "string", key: "subtitle", displayer: "Subtitle", value: "" });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Bring Your Ideas to Life",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Nanotechnology immersion along the information highway will close the loop on focusing solely.",
    });

    this.addProp({
      type: "media",
      key: "backgroundMedia",
      displayer: "Media",
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/691db9e13596a1002b2b69de?alt=media",
      },
      additionalParams: { availableTypes: ["image", "video"] },
    });

    this.addProp({ type: "boolean", key: "overlay", displayer: "Overlay", value: true });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "", "", "FaChevronDown", null, "Bare")],
    });

    this.addProp({
      type: "boolean",
      key: "buttonsAnimation",
      displayer: "Button Animation",
      value: true,
    });
  }

  static getName(): string {
    return "Intro Section 5";
  }

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const bgMedia = this.getPropValue("backgroundMedia") as TypeMediaInputValue;
    const buttons = this.castToObject<IntroSection5Button[]>("buttons");

    const hasSubtitle = !!this.castToString(subtitle);
    const hasTitle = !!this.castToString(title);
    const hasDescription = !!this.castToString(description);
    const hasBgMedia = bgMedia && (bgMedia.type === "image" || bgMedia.type === "video") && !!bgMedia.url;
    const hasOverlay = hasBgMedia && !!this.getPropValue("overlay");
    const isAnimated = !!this.getPropValue("buttonsAnimation");

    const validButtons = buttons.filter((btn) => {
      const hasText = !!this.castToString(btn?.text);
      const hasIcon = btn?.icon && (btn.icon.type === "icon" ? !!btn.icon.name : !!btn.icon.url);
      return hasText || hasIcon;
    });
    const hasButtons = validButtons.length > 0;
    const hasContent = hasSubtitle || hasTitle || hasDescription;

    const containerClasses = `${this.decorateCSS("container")}${hasBgMedia ? ` ${this.decorateCSS("has-background")}` : ""}${hasOverlay ? ` ${this.decorateCSS("overlay-active")}` : ""}`;
    const buttonClassName = `${this.decorateCSS("button")}${isAnimated ? ` ${this.decorateCSS("has-animation")}` : ""}`;

    return (
      <Base.Container className={containerClasses}>
        {hasBgMedia && <Base.Media value={bgMedia} className={this.decorateCSS("background-media")} />}
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("content")}>
            {hasContent && (
              <div className={this.decorateCSS("text-wrapper")}>
                {hasSubtitle && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>}
                {hasTitle && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
                {hasDescription && <Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>}
              </div>
            )}
            {hasButtons && (
              <div className={this.decorateCSS("buttons")}>
                {validButtons.map((btn, i) => {
                  const hasText = !!this.castToString(btn.text);
                  const hasIcon = btn.icon && (btn.icon.type === "icon" ? !!btn.icon.name : !!btn.icon.url);
                  return (
                    <ComposerLink key={`btn-${i}`} path={btn.url || ""} className={this.decorateCSS("button-wrapper")}>
                      <Base.Button buttonType={btn.type} className={buttonClassName}>
                        {hasText && <Base.P className={this.decorateCSS("button-text")}>{btn.text}</Base.P>}
                        {hasIcon && <Base.Media value={btn.icon} className={this.decorateCSS("button-icon")} />}
                      </Base.Button>
                    </ComposerLink>
                  );
                })}
              </div>
            )}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default IntroSection5;
