import * as React from "react";
import {
  BaseIntroSection,
  TypeMediaInputValue,
  TypeUsableComponentProps,
} from "../../EditorComponent";
import styles from "./intro-section3.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type IntroSection3Props = TypeUsableComponentProps;

type CastedButton = INPUTS.CastedButton & {
  icon?: unknown;
  image?: unknown;
  type?: unknown;
  url?: unknown;
  text?: unknown;
};

class IntroSection3 extends BaseIntroSection {
  constructor(props?: IntroSection3Props) {
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

  private normalizeMedia(value: unknown): TypeMediaInputValue | null {
    if (!value) return null;

    if (typeof value === "string") {
      const name = this.castToString(value);
      return name ? ({ type: "icon", name } as unknown as TypeMediaInputValue) : null;
    }

    if (typeof value !== "object") return null;

    const v = value as { url?: unknown; name?: unknown; type?: unknown };
    const url = this.castToString(v.url || "");
    const name = this.castToString(v.name || "");

    if (!url && !name) return null;

    return value as TypeMediaInputValue;
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

    const image = this.normalizeMedia(this.getPropValue("image"));
    const overlay = !!this.getPropValue("overlay");

    const buttons = this.castToObject<CastedButton[]>("buttons") || [];
    const validButtons = buttons
      .map((btn) => {
        const rawText = btn?.text as unknown as React.JSX.Element;
        const text = this.castToString(rawText);
        const icon = this.normalizeMedia((btn as unknown as { icon?: unknown })?.icon);
        const image = this.normalizeMedia((btn as unknown as { image?: unknown })?.image);
        const media = icon || image;
        const url = this.castToString(btn?.url || "");
        const type = this.castToString(btn?.type || "") || "Primary";

        return { rawText, text, url, type, media };
      })
      .filter((btn) => !!btn.text || !!btn.media);

    const hasSubtitleGroup = !!subtitle1Text || !!subtitle2Text;
    const hasButtons = validButtons.length > 0;

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

            {(hasButtons || hasSubtitleGroup) && (
              <div className={buttonGroupClassName}>
                {hasButtons && (
                  <div className={this.decorateCSS("buttons-wrapper")}>
                    {validButtons.map((btn, index) => (
                      <ComposerLink
                        key={`btn-${index}`}
                        path={btn.url}
                        className={this.decorateCSS("button-link")}
                      >
                        <Base.Button
                          buttonType={btn.type}
                          className={this.decorateCSS("button")}
                        >
                          {btn.media && (
                            <Base.Media
                              value={btn.media}
                              className={this.decorateCSS("button-image")}
                            />
                          )}

                          {btn.text && (
                            <Base.P className={this.decorateCSS("button-text")}>
                              {btn.rawText}
                            </Base.P>
                          )}
                        </Base.Button>
                      </ComposerLink>
                    ))}
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

            {image && (
              <div
                className={`${this.decorateCSS("image-wrapper")} ${
                  overlay ? this.decorateCSS("overlay") : ""
                }`.trim()}
              >
                <Base.Media
                  value={image}
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
