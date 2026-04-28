import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header8.module.scss";
import { Base, TypeButton } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { TypeMediaInputValue } from "../../EditorComponent";

interface ButtonItem {
  text: React.JSX.Element;
  icon: TypeMediaInputValue;
  url: string;
  buttonAnimation: boolean;
  type: TypeButton;
}

class Header8 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "object",
      key: "background",
      displayer: "Background",
      value: [
        {
          type: "media",
          key: "componentBackground",
          displayer: "Media",
          value: {
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/691db9e13596a1002b2b69de?alt=media",
            type: "image",
          },
          additionalParams: { availableTypes: ["image", "video"] }
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: true,
        }
      ]
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
      value: "Bring Your Ideas to Life",
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
        INPUTS.BUTTON("button", "Button", "", "", "FaChevronDown", null, "Bare")
      ],
    });

    this.addProp({
      type: "boolean",
      key: "buttonAnimation",
      displayer: "Animation",
      value: true,
    });
  }

  static getName(): string {
    return "Header 8";
  }

  render() {
    const background = this.castToObject<{ componentBackground: TypeMediaInputValue; overlay: boolean }>("background");
    const coverImage = background?.componentBackground;
    const buttons = this.castToObject<ButtonItem[]>("buttons");
    const visibleButtons = buttons.filter(btn => {
      const hasText = this.castToString(btn.text);
      const hasIcon = btn.icon && (btn.icon.type === "icon" ? !!btn.icon.name : !!btn.icon.url);
      return hasText || hasIcon;
    });
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const hasMedia = !!(coverImage && "url" in coverImage && coverImage.url);
    const enableOverlay = hasMedia && background?.overlay;
    const buttonAnimation = this.getPropValue("buttonAnimation");
    const hasContent = subtitle || title || description || visibleButtons.length > 0;

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${hasMedia && this.decorateCSS("has-media")}`}>
        {hasMedia && (
          <div className={this.decorateCSS("background-container")}>
            <Base.Media value={coverImage} className={this.decorateCSS("background-media")} />
            {enableOverlay && <div className={this.decorateCSS("overlay")}></div>}
          </div>
        )}
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {hasContent && (
            <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
              {subtitle && (<Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>)}
              {title && (<Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>)}
              {description && (<Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>)}
            </Base.VerticalContent>
          )}
          {visibleButtons.length > 0 && (
            <div className={`${this.decorateCSS("button-wrapper")} ${buttonAnimation && this.decorateCSS("animated")}`}>
              {visibleButtons.map((btn, i) => {
                const hasIcon = btn.icon && (btn.icon.type === "icon" ? !!btn.icon.name : !!btn.icon.url);
                const hasText = this.castToString(btn.text);
                return (hasIcon || hasText) && (
                  <ComposerLink path={btn.url || ""} key={`btn-${i}`}>
                    <Base.Button buttonType={btn.type} className={this.decorateCSS("button")}>
                      {hasText && <Base.P className={this.decorateCSS("button-text")}>{btn.text}</Base.P>}
                      {hasIcon && <Base.Media value={btn.icon} className={this.decorateCSS("button-icon")} />}
                    </Base.Button>
                  </ComposerLink>
                );
              })}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    )
  }
}

export default Header8;