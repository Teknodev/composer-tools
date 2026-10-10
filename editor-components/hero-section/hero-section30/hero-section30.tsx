import * as React from "react";
import styles from "./hero-section30.module.scss";
import { BaseHeroSection, TypeMediaInputValue } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type Background = {
  media: TypeMediaInputValue;
  overlay: boolean;
};

class HeroSection30 extends BaseHeroSection {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "object",
      key: "background",
      displayer: "Background Media",
      value: [
        {
          type: "media",
          key: "media",
          displayer: "Media",
          additionalParams: { availableTypes: ["image", "video"] },
          value: {
            type: "video",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661a35bbd2970002c626c45?alt=media&timestamp=1719483639151",
          },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: false,
        },
      ],
    });

    this.addProp({
      type: "media",
      key: "logo",
      displayer: "Logo",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "" },
    });

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
      value: "WE MAKE",
    });

    this.addProp({
      type: "string",
      key: "secondTitle",
      displayer: "Second Title",
      value: "GAMES",
    });

    this.addProp({
      type: "object",
      key: "titleMedia",
      displayer: "Media",
      value: [
        {
          type: "media",
          key: "media",
          displayer: "Media",
          additionalParams: { availableTypes: ["image", "video"] },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661a311bd2970002c626c17?alt=media&timestamp=1719483639151",
          },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: false,
        },
      ],
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "An award-winning Prague-based indie game studio pushing the boundaries of narrative and serious games",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "OUR PROJECTS", "", "FiArrowRight", null, "Primary"),
      ],
    });

    this.addProp({
      type: "boolean",
      key: "animation",
      displayer: "Animation",
      value: true,
    });
  }

  static getName(): string {
    return "Hero Section 30";
  }

  hasMedia(media?: TypeMediaInputValue) {
    return !!(media && ((media as any).url || (media as any).name));
  }

  withVideoSettings(media: TypeMediaInputValue) {
    return media?.type === "video"
      ? { ...media, settings: { autoplay: true, loop: true, muted: true, controls: false } }
      : media;
  }

  render() {
    const background = this.castToObject<Background>("background");
    const backgroundMedia = background?.media;
    const hasBackground = this.hasMedia(backgroundMedia);
    const titleMedia = this.castToObject<{ media: any; overlay: boolean }>("titleMedia");
    const image = titleMedia?.media;
    const hasImage = this.hasMedia(image);
    const logo = this.getPropValue("logo");
    const hasLogo = this.hasMedia(logo);
    const animationEnabled = this.getPropValue("animation");

    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons").filter(
      (button: INPUTS.CastedButton) => this.castToString(button.text)
    );

    return (
      <Base.Container
        className={`${this.decorateCSS("container")} ${!hasBackground ? this.decorateCSS("withoutVideoContainer") : ""}`}
      >
        {hasBackground && (
          <>
            <Base.Media
              value={this.withVideoSettings(backgroundMedia)}
              className={this.decorateCSS("video-section")}
            />
            {background.overlay && (
              <div className={this.decorateCSS("video-overlay")} />
            )}
          </>
        )}
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent
            className={`${this.decorateCSS("content")} ${!animationEnabled ? this.decorateCSS("no-animation") : ""}`}
          >
            {hasLogo && (
              <Base.Media
                value={logo}
                className={`${this.decorateCSS("logo")} ${!hasBackground ? this.decorateCSS("logo-no-image") : ""}`}
              />
            )}

            {this.castToString(this.getPropValue("subtitle")) && (
              <Base.SectionSubTitle className={`${this.decorateCSS("subtitle")} ${hasBackground ? this.decorateCSS("subtitle-transparent") : ""}`}>
                {this.getPropValue("subtitle")}
              </Base.SectionSubTitle>
            )}
            {this.castToString(this.getPropValue("title")) && (
              <Base.SectionTitle
                className={`${this.decorateCSS("titles")} ${this.decorateCSS("first-title")}`}
              >
                {this.getPropValue("title")}
              </Base.SectionTitle>
            )}

            {(hasImage || this.castToString(this.getPropValue("secondTitle"))) && (
              <div className={this.decorateCSS("title-with-image")}>
                {hasImage && (
                  <div className={this.decorateCSS("title-image-wrapper")}>
                    <Base.Media
                      value={this.withVideoSettings(image)}
                      className={this.decorateCSS("title-image")}
                    />
                    {titleMedia?.overlay && (
                      <div className={this.decorateCSS("title-image-overlay")} />
                    )}
                  </div>
                )}

                {this.castToString(this.getPropValue("secondTitle")) && (
                  <Base.H1
                    className={`${this.decorateCSS("titles")} ${this.decorateCSS("second-title")} ${!hasImage ? this.decorateCSS("withoutImage") : ""}`}
                  >
                    {this.getPropValue("secondTitle")}
                  </Base.H1>
                )}
              </div>
            )}

            {this.castToString(this.getPropValue("description")) && (
              <Base.SectionDescription className={this.decorateCSS("description")}>
                {this.getPropValue("description")}
              </Base.SectionDescription>
            )}

            {buttons.length > 0 && (
              <div className={this.decorateCSS("buttons")}>
                {buttons.map((button: INPUTS.CastedButton, i: number) => (
                    <ComposerLink path={button.url} key={i}>
                      <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                        <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                        {this.hasMedia(button.icon as any) && (
                          <Base.Media value={button.icon as any} className={this.decorateCSS("button-icon-right")} />
                        )}
                      </Base.Button>
                    </ComposerLink>
                  )
                )}
              </div>
            )}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default HeroSection30;
