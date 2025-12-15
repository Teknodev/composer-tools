import * as React from "react";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./feature28.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Feature28Props = Record<string, unknown>;

class Feature28Component extends BaseFeature {
  constructor(props?: Feature28Props) {
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
        INPUTS.BUTTON("button", "Button", "About us", "", null, null, "White"),
        INPUTS.BUTTON(
          "button",
          "Button",
          "Watch how we work",
          "",
          "FaArrowRight",
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

    const image = this.getPropValue("image") as TypeMediaInputValue | null;
    const overlayEnabled = this.getPropValue("overlay");

    const alignment = Base.getContentAlignment();
    const hasBackground = !!image?.url;
    const isVideo = image?.type === "video" && hasBackground;

    const buttonsList = this.castToObject<INPUTS.CastedButton[]>("buttons");

    const validButtons = Array.isArray(buttonsList)
      ? buttonsList.filter((item) => {
          const text = this.castToString(item.text || "");
          const iconValue = (item as any)?.icon as TypeMediaInputValue | null;
          return !!text || !!iconValue;
        })
      : [];

    const isSubtitleExist = this.castToString(subtitle);
    const isTitleExist = this.castToString(title);
    const isDescriptionExist = this.castToString(description);

    const isContentExist =
      isSubtitleExist ||
      isTitleExist ||
      isDescriptionExist ||
      validButtons.length > 0;

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
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {subtitle}
                </Base.SectionSubTitle>
              )}

              {isTitleExist && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {title}
                </Base.SectionTitle>
              )}

              {isDescriptionExist && (
                <Base.SectionDescription className={this.decorateCSS("description")}>
                  {description}
                </Base.SectionDescription>
              )}

              {validButtons.length > 0 && (
                <Base.Row className={this.decorateCSS("button-container")}>
                  {validButtons.map((item, index) => {
                    const text = this.castToString(item.text || "");
                    const iconValue = (item as any)?.icon as TypeMediaInputValue | null;

                    return (
                      <ComposerLink
                        key={`btn-${index}`}
                        path={item.url || ""}
                        className={this.decorateCSS("button-link")}
                      >
                        <Base.Button
                          className={this.decorateCSS("button")}
                          buttonType={item.type}
                        >
                          {iconValue && (
                            <Base.Media
                              className={this.decorateCSS("icon")}
                              value={iconValue}
                            />
                          )}

                          {text && (
                            <Base.P className={this.decorateCSS("button-text")}>
                              {item.text}
                            </Base.P>
                          )}
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
