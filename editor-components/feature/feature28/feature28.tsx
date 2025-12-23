import * as React from "react";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./feature28.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class Feature28Component extends BaseFeature {
  constructor(props?: {}) {
    super(props, styles);

    this.addProp({ type: "string", key: "subtitle", displayer: "Subtitle", value: "" });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "The best-rated top-seller",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Nanotechnology immersion along the information highway will close the loop on focusing solely.",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "About us", "", "", null, "White"),
        INPUTS.BUTTON("button", "Button", "Watch how we work", "", "FaArrowRight", null, "White"),
      ],
    });

    this.addProp({
      type: "media",
      key: "image",
      displayer: "Media",
      additionalParams: { availableTypes: ["image", "video"] },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/691b29523596a1002b29410a?alt=media",
      },
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });
  }

  static getName(): string {
    return "Feature 28";
  }

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const image = this.getPropValue("image") as TypeMediaInputValue;
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];

    const hasSubtitle = !!this.castToString(subtitle);
    const hasTitle = !!this.castToString(title);
    const hasDescription = !!this.castToString(description);
    const hasBackground = image && (image.type === "image" || image.type === "video") && !!image.url;
    const hasOverlay = hasBackground && !!this.getPropValue("overlay");
    const isVideo = image?.type === "video";

    const validButtons = buttons.filter((btn) => !!this.castToString(btn?.text));
    const hasButtons = validButtons.length > 0;
    const hasContent = hasSubtitle || hasTitle || hasDescription || hasButtons;

    const alignment = Base.getContentAlignment();

    const containerClassName = `${this.decorateCSS("container")}${hasBackground && ` ${this.decorateCSS("has-background")}`}${hasOverlay && ` ${this.decorateCSS("overlay")}`}`;

    const backgroundMedia = hasBackground && isVideo
      ? { ...image, settings: { autoplay: true, muted: true, loop: true, controls: false } }
      : image;

    return (
      <Base.Container className={containerClassName}>
        {hasBackground && <Base.Media className={this.decorateCSS("background-media")} value={backgroundMedia} />}
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {hasContent && (
            <Base.VerticalContent className={this.decorateCSS("content")} data-alignment={alignment}>
              {hasSubtitle && (
                <Base.SectionSubTitle className={`${this.decorateCSS("subtitle")}${hasBackground && ` ${this.decorateCSS("has-background")}`}`}>
                  {subtitle}
                </Base.SectionSubTitle>
              )}
              {hasTitle && (
                <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>
              )}
              {hasDescription && (
                <Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>
              )}
              {hasButtons && (
                <Base.Row className={this.decorateCSS("buttons")}>
                  {validButtons.map((btn, i) => (
                    <ComposerLink key={`btn-${i}`} path={btn.url || ""}>
                      <Base.Button buttonType={btn.type}>
                        {btn.icon && <Base.Media value={btn.icon as TypeMediaInputValue} />}
                        {this.castToString(btn.text) && <Base.P>{btn.text}</Base.P>}
                      </Base.Button>
                    </ComposerLink>
                  ))}
                </Base.Row>
              )}
            </Base.VerticalContent>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature28Component;
