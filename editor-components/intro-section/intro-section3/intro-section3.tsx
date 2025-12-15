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

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Everything You Need to Run Your Websites",
    });

    this.addProp({ type: "string", key: "description", displayer: "Description", value: "" });

    this.addProp({
      type: "string",
      key: "subtitle1",
      displayer: "Text 1",
      value: "First 30 days for free.",
    });

    this.addProp({
      type: "string",
      key: "subtitle2",
      displayer: "Text 2",
      value: "No credit card required.",
    });

    this.addProp({
      type: "media",
      key: "image",
      displayer: "Image",
      additionalParams: { availableTypes: ["image", "video"] },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/691c5ca53596a1002b2a1afc?alt=media",
      } as TypeMediaInputValue,
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

  private hasMediaValue(value: TypeMediaInputValue | null | undefined): boolean {
    if (!value) return false;
    const maybeName = (value as unknown as { name?: string }).name;
    return !!(value.url || maybeName);
  }

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const subtitle1 = this.getPropValue("subtitle1");
    const subtitle2 = this.getPropValue("subtitle2");

    const subtitleText = this.castToString(subtitle);
    const titleText = this.castToString(title);
    const descriptionText = this.castToString(description);
    const subtitle1Text = this.castToString(subtitle1);
    const subtitle2Text = this.castToString(subtitle2);

    const alignment = Base.getContentAlignment();
    const isCenter = alignment === "center";

    const image = this.getPropValue("image") as TypeMediaInputValue | null;
    const hasImage = this.hasMediaValue(image);
    const overlay = this.getPropValue("overlay");

    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
    const validButtons = buttons.filter((btn) => {
      const text = this.castToString(btn?.text || "");
      const media = btn?.buttonImage as TypeMediaInputValue | null | undefined;
      return !!text || this.hasMediaValue(media);
    });

    const hasSubtitleGroup = !!subtitle1Text || !!subtitle2Text;

    const buttonGroupClassName = `${this.decorateCSS("button-group-container")} ${
      isCenter ? this.decorateCSS("center") : ""
    }`.trim();

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

            {(validButtons.length > 0 || hasSubtitleGroup) && (
              <div className={buttonGroupClassName}>
                {validButtons.length > 0 && (
                  <div className={this.decorateCSS("buttons-wrapper")}>
                    {validButtons.map((btn, index) => {
                      const url = btn.url || "#";
                      const buttonType = (btn.type as string) || "Primary";
                      const media = btn.buttonImage as TypeMediaInputValue | null | undefined;
                      const hasButtonMedia = this.hasMediaValue(media);

                      const hasButtonText = !!this.castToString(btn.text || "");

                      return (
                        <ComposerLink
                          key={`btn-${index}`}
                          path={url}
                          className={this.decorateCSS("button-link")}
                        >
                          <Base.Button
                            buttonType={buttonType}
                            className={this.decorateCSS("button")}
                          >
                            {hasButtonMedia && (
                              <Base.Media
                                value={media as TypeMediaInputValue}
                                className={this.decorateCSS("button-image")}
                              />
                            )}

                            {hasButtonText && (
                              <Base.P className={this.decorateCSS("button-text")}>
                                {btn.text}
                              </Base.P>
                            )}
                          </Base.Button>
                        </ComposerLink>
                      );
                    })}
                  </div>
                )}

                {hasSubtitleGroup && (
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
            )}

            {hasImage && (
              <div
                className={`${this.decorateCSS("image-wrapper")} ${
                  overlay ? this.decorateCSS("overlay") : ""
                }`.trim()}
              >
                <Base.Media
                  value={image as TypeMediaInputValue}
                  className={this.decorateCSS("image-media")}
                />
              </div>
            )}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default IntroSection3;
