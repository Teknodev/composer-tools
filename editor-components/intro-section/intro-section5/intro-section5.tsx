import * as React from "react";
import {
  BaseIntroSection,
  TypeMediaInputValue,
  TypeUsableComponentProps,
} from "../../EditorComponent";
import styles from "./intro-section5.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type IntroSection5Button = INPUTS.CastedButton & { icon?: TypeMediaInputValue | null };

class IntroSection5 extends BaseIntroSection {
  constructor(props?: TypeUsableComponentProps) {
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
      value:
        "Nanotechnology immersion along the information highway will close the loop on focusing solely.",
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
    const subtitle = this.getPropValue("subtitle") || "";
    const title = this.getPropValue("title") || "";
    const description = this.getPropValue("description") || "";

    const hasSubtitle = !!this.castToString(subtitle);
    const hasTitle = !!this.castToString(title);
    const hasDescription = !!this.castToString(description);

    const bgMedia = this.getPropValue("backgroundMedia") as TypeMediaInputValue | null;
    const hasBgMedia = !!bgMedia?.url;
    const hasOverlay = hasBgMedia && !!this.getPropValue("overlay");

    const buttons = this.castToObject<IntroSection5Button[]>("buttons");
    const hasButtons = Array.isArray(buttons) && buttons.length > 0;

    const isAnimated = !!this.getPropValue("buttonsAnimation");

    const containerClasses =
      `${this.decorateCSS("container")}` +
      (hasBgMedia ? ` ${this.decorateCSS("has-background")}` : "") +
      (hasOverlay ? ` ${this.decorateCSS("overlay-active")}` : "");

    const buttonClassName =
      `${this.decorateCSS("button")}` +
      (isAnimated ? ` ${this.decorateCSS("has-animation")}` : "");

    return (
      <Base.Container className={containerClasses}>
        {hasBgMedia && bgMedia && (
          <Base.Media value={bgMedia} className={this.decorateCSS("background-media")} />
        )}

        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("content")}>
            {(hasSubtitle || hasTitle || hasDescription) && (
              <div className={this.decorateCSS("text-wrapper")}>
                {hasSubtitle && (
                  <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                    {subtitle}
                  </Base.SectionSubTitle>
                )}

                {hasTitle && (
                  <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>
                )}

                {hasDescription && (
                  <Base.SectionDescription className={this.decorateCSS("description")}>
                    {description}
                  </Base.SectionDescription>
                )}
              </div>
            )}

            {hasButtons && (
              <div className={this.decorateCSS("buttons")}>
                {buttons.map((item: IntroSection5Button, index: number) => {
                  const btnTextExist = this.castToString(item.text);
                  const btnIconExist =
                    this.castToString(item.icon?.name) || this.castToString(item.icon?.url);

                  if (!btnTextExist && !btnIconExist) return null;

                  const buttonUrl = item.url || "#";

                  return (
                    <ComposerLink
                      key={`is5-btn-${index}`}
                      path={buttonUrl}
                      className={`${this.decorateCSS("button-wrapper")} ${this.decorateCSS(
                        "button-link"
                      )}`}
                    >
                      <Base.Button buttonType={item.type} className={buttonClassName}>
                        {btnTextExist && (
                          <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                        )}
                        {btnIconExist && (
                          <Base.Media value={item.icon} className={this.decorateCSS("button-icon")} />
                        )}
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
