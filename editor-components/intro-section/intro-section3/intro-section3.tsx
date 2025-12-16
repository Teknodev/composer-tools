import * as React from "react";
import {
  BaseIntroSection,
  TypeUsableComponentProps,
  TypeMediaInputValue,
} from "../../EditorComponent";
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

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

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

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: false,
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

    const subtitleExist = !!this.castToString(subtitle);
    const titleExist = !!this.castToString(title);
    const descriptionExist = !!this.castToString(description);

    const subtitle1Exist = !!this.castToString(subtitle1);
    const subtitle2Exist = !!this.castToString(subtitle2);
    const hasSubtitleGroup = subtitle1Exist || subtitle2Exist;

    const alignment = Base.getContentAlignment();
    const isCenter = alignment === "center";

    const image = this.getPropValue("image") as TypeMediaInputValue | null;
    const hasImage = !!(image as any)?.url;

    const overlay = !!this.getPropValue("overlay");

    const buttonsRaw = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const buttons = Array.isArray(buttonsRaw) ? buttonsRaw : [];

    const buttonNodes: React.ReactNode[] = [];
    for (let index = 0; index < buttons.length; index++) {
      const btn = buttons[index];

      const textExist = !!this.castToString(btn?.text || "");

      const rawMedia = (btn as any)?.icon ?? (btn as any)?.buttonImage ?? null;
      let mediaValue: TypeMediaInputValue | null = null;

      if (typeof rawMedia === "string") {
        const name = this.castToString(rawMedia);
        if (name) mediaValue = { type: "icon", name } as unknown as TypeMediaInputValue;
      } else if (rawMedia && typeof rawMedia === "object") {
        const maybe = rawMedia as any;
        if (maybe?.url || maybe?.name) mediaValue = rawMedia as TypeMediaInputValue;
      }

      if (!textExist && !mediaValue) continue;

      buttonNodes.push(
        <ComposerLink
          key={`btn-${index}`}
          path={btn?.url || "#"}
          className={this.decorateCSS("button-link")}
        >
          <Base.Button
            buttonType={btn?.type}
            className={this.decorateCSS("button")}
          >
            {mediaValue && (
              <Base.Media
                value={mediaValue}
                className={this.decorateCSS("button-image")}
              />
            )}
            {textExist && (
              <Base.P className={this.decorateCSS("button-text")}>
                {btn.text}
              </Base.P>
            )}
          </Base.Button>
        </ComposerLink>
      );
    }

    const hasButtons = buttonNodes.length > 0;
    const showActions = hasButtons || hasSubtitleGroup;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("content")}>
            {subtitleExist && (
              <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                {subtitle}
              </Base.SectionSubTitle>
            )}

            {titleExist && (
              <Base.SectionTitle className={this.decorateCSS("title")}>
                {title}
              </Base.SectionTitle>
            )}

            {descriptionExist && (
              <Base.SectionDescription className={this.decorateCSS("description")}>
                {description}
              </Base.SectionDescription>
            )}

            {showActions && (
              <div
                className={`${this.decorateCSS("button-group-container")}${
                  isCenter ? ` ${this.decorateCSS("center")}` : ""
                }`}
              >
                {hasButtons && (
                  <div className={this.decorateCSS("buttons-wrapper")}>
                    {buttonNodes}
                  </div>
                )}

                {hasSubtitleGroup && (
                  <div className={this.decorateCSS("subtitle-group")}>
                    {subtitle1Exist && (
                      <Base.P className={this.decorateCSS("subtitle1")}>
                        {subtitle1}
                      </Base.P>
                    )}
                    {subtitle2Exist && (
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
                className={`${this.decorateCSS("image-wrapper")}${
                  overlay ? ` ${this.decorateCSS("overlay")}` : ""
                }`}
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
