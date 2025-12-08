import * as React from "react";
import {
  BaseFeature,
  TypeUsableComponentProps,
  TypeMediaInputValue,
} from "../../EditorComponent";
import styles from "./feature28.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class Feature28Component extends BaseFeature {
  constructor(props?: TypeUsableComponentProps) {
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
      value: "The best-rated top-seller",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Nanotechnology immersion along the information highway will close the loop on focusing solely.",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON(
          "button",
          "Button",
          "About us",
          "",
          "",
          null,
          "White"
        ),
        INPUTS.BUTTON(
          "button",
          "Button",
          "Watch how we work",
          "",
          "",
          null,
          "White"
        ),
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
      } as TypeMediaInputValue,
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });

    this.addProp({
      type: "media",
      key: "buttonIcon",
      displayer: "Button Icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "FaArrowRight",
      } as TypeMediaInputValue,
    });
  }

  static getName(): string {
    return "Feature 28";
  }

  renderMedia(media: TypeMediaInputValue | null, className: string) {
    if (!media) return null;

    if (media.type === "image" && media.url) {
      return <img src={media.url} alt="button-icon" className={className} />;
    }

    if (media.type === "icon" && media.name) {
      return <Base.Icon name={media.name} propsIcon={{ className }} />;
    }

    return null;
  }

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");

    const image = this.getPropValue("image") as TypeMediaInputValue | null;
    const overlayEnabled = this.getPropValue("overlay");
    const buttonIcon = this.getPropValue("buttonIcon") as
      | TypeMediaInputValue
      | null;

    const alignment = Base.getContentAlignment();
    const hasBackground = !!image?.url;
    const isVideo = image?.type === "video" && hasBackground;

    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

    const isSubtitleExist = this.castToString(subtitle);
    const isTitleExist = this.castToString(title);
    const isDescriptionExist = this.castToString(description);

    const hasButtons =
      Array.isArray(buttons) &&
      buttons.some((button) => this.castToString(button.text || ""));

    const isContentExist =
      isSubtitleExist || isTitleExist || isDescriptionExist || hasButtons;

    return (
      <Base.Container
        className={`
          ${this.decorateCSS("container")}
          ${hasBackground ? this.decorateCSS("hasBackground") : ""}
          ${hasBackground && overlayEnabled ? this.decorateCSS("overlay") : ""}
        `}
      >
        {hasBackground && (
          <Base.Media
            className={this.decorateCSS("background-media")}
            value={{
              ...image,
              ...(isVideo && {
                autoPlay: true,
                muted: true,
                loop: true,
                playsInline: true,
              }),
            }}
          />
        )}

        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {isContentExist && (
            <Base.VerticalContent
              className={this.decorateCSS("content")}
              data-alignment={alignment}
            >
              {isSubtitleExist && (
                <Base.SectionSubTitle
                  className={this.decorateCSS("subtitle")}
                >
                  {subtitle}
                </Base.SectionSubTitle>
              )}

              {isTitleExist && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {title}
                </Base.SectionTitle>
              )}

              {isDescriptionExist && (
                <Base.SectionDescription
                  className={this.decorateCSS("description")}
                >
                  {description}
                </Base.SectionDescription>
              )}

              {hasButtons && (
                <Base.Row className={this.decorateCSS("button-container")}>
                  {buttons.map((buttonItem, index) => {
                    const text = buttonItem.text;

                    if (!this.castToString(text || "")) {
                      return null;
                    }

                    return (
                      <ComposerLink
                        key={`btn-${index}`}
                        path={buttonItem.url || "#"}
                      >
                        <Base.Button
                          className={this.decorateCSS("button")}
                          buttonType={buttonItem.type}
                        >
                          {this.renderMedia(
                            buttonIcon,
                            this.decorateCSS("button-icon")
                          )}
                          <Base.P className={this.decorateCSS("button-text")}>
                            {text}
                          </Base.P>
                        </Base.Button>
                      </ComposerLink>
                    );
                  })}
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
