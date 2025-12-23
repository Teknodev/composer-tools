import * as React from "react";
import { BaseIntroSection, TypeMediaInputValue, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./intro-section8.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class IntroSection8 extends BaseIntroSection {
  constructor(props?: TypeUsableComponentProps) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Find the Best Suitable Solution",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Inspiration to Design and Create",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Completely iterate covalent strategic theme areas via accurate e-markets.",
    });

    this.addProp({
      type: "media",
      key: "media",
      displayer: "Media",
      value: {
        type: "video",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6925587a3596a1002b2ec2a1?alt=media",
      },
      additionalParams: { availableTypes: ["image", "video"] },
    });

    this.addProp({
      type: "media",
      key: "thumbnail",
      displayer: "Thumbnail",
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6936735a496aa1002ca98cfa?alt=media",
      },
      additionalParams: { availableTypes: ["image"] },
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });

    this.addProp({
      type: "boolean",
      key: "background",
      displayer: "Background",
      value: true,
    });

    this.addProp({
      type: "media",
      key: "playIcon",
      displayer: "Play Icon",
      value: { type: "icon", name: "FaPlay" },
      additionalParams: { availableTypes: ["icon", "image"] },
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "White")],
    });
  }

  static getName(): string {
    return "Intro Section 8";
  }

  handlePlayVideo = () => {
    this.setComponentState("isPlaying", true);
  };

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const media = this.getPropValue("media") as TypeMediaInputValue;
    const thumbnail = this.getPropValue("thumbnail") as TypeMediaInputValue;
    const playIcon = this.getPropValue("playIcon") as TypeMediaInputValue;
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

    const hasSubtitle = !!this.castToString(subtitle);
    const hasTitle = !!this.castToString(title);
    const hasDescription = !!this.castToString(description);
    const hasBackground = !!this.getPropValue("background");
    const hasOverlay = !!this.getPropValue("overlay");
    const hasMedia = !!media?.url;
    const hasThumbnail = !!thumbnail?.url;
    const hasPlayIcon = !!(playIcon?.name || playIcon?.url);
    const isVideo = media?.type === "video";
    const isPlaying = !!this.getComponentState("isPlaying");

    const validButtons = buttons.filter((btn) => !!this.castToString(btn?.text));
    const hasButtons = validButtons.length > 0;
    const hasContent = hasSubtitle || hasTitle || hasDescription;

    const alignment = Base.getContentAlignment();

    return (
      <Base.Container className={this.decorateCSS("container")}>
        {hasBackground && <div className={this.decorateCSS("background")} />}
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("content")}>
            {hasContent && (
              <div className={this.decorateCSS("text-content")}>
                {hasSubtitle && (
                  <Base.SectionSubTitle className={`${this.decorateCSS("subtitle")}${hasBackground ? ` ${this.decorateCSS("has-background")}` : ""}${alignment === "left" ? ` ${this.decorateCSS("align-left")}` : ""}`}>
                    {subtitle}
                  </Base.SectionSubTitle>
                )}
                {hasTitle && (
                  <Base.SectionTitle className={`${this.decorateCSS("title")}${hasBackground ? ` ${this.decorateCSS("has-background")}` : ""}`}>
                    {title}
                  </Base.SectionTitle>
                )}
                {hasDescription && (
                  <Base.SectionDescription className={`${this.decorateCSS("description")}${hasBackground ? ` ${this.decorateCSS("has-background")}` : ""}`}>
                    {description}
                  </Base.SectionDescription>
                )}
              </div>
            )}

            {hasButtons && (
              <div className={this.decorateCSS("buttons")}>
                {validButtons.map((btn, i) => (
                  <ComposerLink key={`btn-${i}`} path={btn.url || ""}>
                    <Base.Button buttonType={btn.type} className={this.decorateCSS("button")}>
                      <Base.P className={this.decorateCSS("button-text")}>{btn.text}</Base.P>
                    </Base.Button>
                  </ComposerLink>
                ))}
              </div>
            )}

            {hasMedia && (
              <div className={this.decorateCSS("media-wrapper")}>
                {isVideo ? (
                  !isPlaying ? (
                    <div className={this.decorateCSS("thumbnail-container")} onClick={this.handlePlayVideo}>
                      {hasThumbnail && <Base.Media value={thumbnail} className={this.decorateCSS("thumbnail-image")} />}
                      {hasOverlay && <div className={this.decorateCSS("overlay")} />}
                      {hasPlayIcon && (
                        <div className={this.decorateCSS("play-icon-wrapper")}>
                          <Base.Media value={playIcon} className={this.decorateCSS("play-icon")} />
                        </div>
                      )}
                    </div>
                  ) : (
                    <Base.Media value={{ type: "video", url: media.url, settings: { autoplay: true, controls: true } }} className={this.decorateCSS("video")} />
                  )
                ) : (
                  <div className={this.decorateCSS("thumbnail-container")}>
                    <Base.Media value={media} className={this.decorateCSS("image")} />
                    {hasOverlay && <div className={this.decorateCSS("overlay")} />}
                  </div>
                )}
              </div>
            )}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default IntroSection8;
