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
  titleWithImageRef = React.createRef<HTMLDivElement>();
  inkObserver?: ResizeObserver;
  inkRoot?: HTMLElement;
  inkCanvas?: HTMLCanvasElement;

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

  componentDidMount() {
    super.componentDidMount?.();
    this.observeTitles();
    document.fonts?.ready.then(() => this.fitTitlesToInk());
  }

  componentDidUpdate(prevProps: any, prevState: any, snapshot?: any) {
    super.componentDidUpdate?.(prevProps, prevState, snapshot);
    this.observeTitles();
    this.fitTitlesToInk();
  }

  // The font size follows the container width, so the titles are measured again whenever their wrapper resizes.
  observeTitles() {
    const root = this.titleWithImageRef.current;
    if (!root || root === this.inkRoot) return;
    this.inkObserver?.disconnect();
    this.inkObserver = new ResizeObserver(() => this.fitTitlesToInk());
    this.inkObserver.observe(root);
    this.inkRoot = root;
  }

  componentWillUnmount() {
    super.componentWillUnmount?.();
    this.inkObserver?.disconnect();
  }

  // A title next to an image gives the image its letters' height. The title's line box is taller than its letters
  // (line-height space above the tallest letter and below the baseline) and how much depends on the theme font,
  // so it is measured on a canvas: the space is set as --ink-top / --ink-bottom (negative margins in the SCSS) and,
  // when a tall font reaches past the line box, the overflow as --ink-pad-top / --ink-pad-bottom (padding).
  // The title box always holds all of its letters, so round letters (S, C, O) are never clipped.
  fitTitlesToInk() {
    const root = this.titleWithImageRef.current;
    const context = (this.inkCanvas ||= document.createElement("canvas")).getContext("2d");
    if (!root || !context) return;
    root.querySelectorAll<HTMLElement>("[data-fit-ink]").forEach((title) => {
      const style = getComputedStyle(title);
      const lineHeight = parseFloat(style.lineHeight);
      const text = (title.textContent || "").trim();
      if (!text || !lineHeight) return;
      context.font = `${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
      const metrics = context.measureText(style.textTransform === "uppercase" ? text.toUpperCase() : text);
      const halfLeading = (lineHeight - metrics.fontBoundingBoxAscent - metrics.fontBoundingBoxDescent) / 2;
      const baseline = halfLeading + metrics.fontBoundingBoxAscent;
      const top = baseline - metrics.actualBoundingBoxAscent;
      const bottom = lineHeight - baseline - metrics.actualBoundingBoxDescent;
      this.setInkVariable(title, "--ink-top", Math.max(top, 0));
      this.setInkVariable(title, "--ink-pad-top", Math.max(-top, 0));
      this.setInkVariable(title, "--ink-bottom", Math.max(bottom, 0));
      this.setInkVariable(title, "--ink-pad-bottom", Math.max(-bottom, 0));
    });
  }

  setInkVariable(element: HTMLElement, name: string, value: number) {
    const px = `${value.toFixed(2)}px`;
    if (element.style.getPropertyValue(name) !== px) element.style.setProperty(name, px);
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
        className={`${this.decorateCSS("container")} ${!hasBackground ? this.decorateCSS("withoutVideoContainer") : ""} ${!hasBackground && Base.getViewType() === "colorful" ? this.decorateCSS("colorful-text") : ""}`}
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
              <div className={this.decorateCSS("title-with-image")} ref={this.titleWithImageRef}>
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
                    data-fit-ink
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
