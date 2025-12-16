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
      value:
        "Nanotechnology immersion along the information highway will close the loop on focusing solely.",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "About us", "", null, null, "White"),
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

    const subtitleExist = !!this.castToString(subtitle);
    const titleExist = !!this.castToString(title);
    const descriptionExist = !!this.castToString(description);

    const image = this.getPropValue("image") as TypeMediaInputValue | null;
    const hasBackground = !!image?.url;

    const overlayEnabled = !!this.getPropValue("overlay");
    const alignment = Base.getContentAlignment();

    const buttonsRaw = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const buttons = Array.isArray(buttonsRaw) ? buttonsRaw : [];

    const buttonNodes: React.ReactNode[] = [];
    for (let index = 0; index < buttons.length; index++) {
      const item = buttons[index];
      const textExist = !!this.castToString(item?.text || "");

      const iconInput = (item as any)?.icon as unknown;
      const iconName = typeof iconInput === "string" ? this.castToString(iconInput) : "";

      const iconValue =
        iconName
          ? ({ type: "icon", name: iconName } as unknown as TypeMediaInputValue)
          : iconInput && typeof iconInput === "object"
            ? (iconInput as TypeMediaInputValue)
            : null;

      const iconExist =
        !!iconValue &&
        ((iconValue.type === "icon" && !!(iconValue as any)?.name) ||
          ((iconValue.type === "image" || iconValue.type === "video") &&
            !!(iconValue as any)?.url));

      if (!textExist && !iconExist) continue;

      buttonNodes.push(
        <ComposerLink
          key={`btn-${index}`}
          path={item?.url || ""}
          className={this.decorateCSS("button-link")}
        >
          <Base.Button className={this.decorateCSS("button")} buttonType={item?.type}>
            {iconExist && (
              <Base.Media
                className={this.decorateCSS("icon")}
                value={iconValue as TypeMediaInputValue}
              />
            )}
            {textExist && (
              <Base.P className={this.decorateCSS("button-text")}>{item?.text}</Base.P>
            )}
          </Base.Button>
        </ComposerLink>
      );
    }

    const hasButtons = buttonNodes.length > 0;
    const isContentExist = subtitleExist || titleExist || descriptionExist || hasButtons;

    const containerClassName = `${this.decorateCSS("container")}${
      hasBackground ? ` ${this.decorateCSS("hasBackground")}` : ""
    }${hasBackground && overlayEnabled ? ` ${this.decorateCSS("overlay")}` : ""}`;

    const subtitleClassName = `${this.decorateCSS("subtitle")}${
      hasBackground ? ` ${this.decorateCSS("subtitle-no-badge")}` : ""
    }`;

    const backgroundMediaValue =
      hasBackground && image
        ? (image.type === "video"
            ? ({
                ...image,
                settings: {
                  ...(image as any)?.settings,
                  autoplay: true,
                  muted: true,
                  loop: true,
                  controls: false,
                },
              } as TypeMediaInputValue)
            : image)
        : null;

    return (
      <Base.Container className={containerClassName}>
        {hasBackground && backgroundMediaValue && (
          <Base.Media
            className={this.decorateCSS("background-media")}
            value={backgroundMediaValue}
          />
        )}

        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {isContentExist && (
            <Base.VerticalContent className={this.decorateCSS("content")} data-alignment={alignment}>
              {subtitleExist && (
                <Base.SectionSubTitle className={subtitleClassName}>{subtitle}</Base.SectionSubTitle>
              )}

              {titleExist && (
                <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>
              )}

              {descriptionExist && (
                <Base.SectionDescription className={this.decorateCSS("description")}>
                  {description}
                </Base.SectionDescription>
              )}

              {hasButtons && (
                <Base.Row className={this.decorateCSS("button-container")}>{buttonNodes}</Base.Row>
              )}
            </Base.VerticalContent>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature28Component;
