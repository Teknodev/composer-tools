import * as React from "react";
import { BaseAbout, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./about13.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type About13Props = Record<string, unknown>;
type ButtonItem = INPUTS.CastedButton & { icon?: unknown };

class About13 extends BaseAbout {
  constructor(props?: About13Props) {
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
      value: "Get Started with Blinkpage Themes",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Learn More", "", "", null, "Link"),
      ],
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: false,
    });

    this.addProp({
      type: "media",
      key: "image",
      displayer: "Media",
      additionalParams: {
        availableTypes: ["image", "video"],
      },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/692d8a9e496aa1002ca4869f?alt=media",
      },
    });
  }

  static getName(): string {
    return "About 13";
  }

  private getIconValue(rawIcon: unknown): TypeMediaInputValue | null {
    if (!rawIcon) return null;

    if (typeof rawIcon === "string") {
      const name = this.castToString(rawIcon);
      return name
        ? ({ type: "icon", name } as unknown as TypeMediaInputValue)
        : null;
    }

    if (typeof rawIcon !== "object") return null;

    const iconObj = rawIcon as Partial<TypeMediaInputValue> & { name?: string };
    if (iconObj.url || iconObj.name) return rawIcon as TypeMediaInputValue;

    return null;
  }

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");

    const subtitleExist = !!this.castToString(subtitle);
    const titleExist = !!this.castToString(title);
    const descriptionExist = !!this.castToString(description);

    const image = this.getPropValue("image") as TypeMediaInputValue | null;
    const hasImage = !!image?.url;

    const buttonsRaw = this.castToObject<ButtonItem[]>("buttons");
    const buttons = Array.isArray(buttonsRaw) ? buttonsRaw : [];

    const hasButtons = buttons.some((item) => {
      const textExist = !!this.castToString(item.text || "");
      const iconExist = !!this.getIconValue(item.icon);
      return textExist || iconExist;
    });

    const isContentVisible =
      subtitleExist || titleExist || descriptionExist || hasButtons;

    const overlay = !!this.getPropValue("overlay");

    const alignment = Base.getContentAlignment();
    const isCentered = alignment === "center";

    const containerClassName = `${this.decorateCSS("container")} ${
      !hasImage ? this.decorateCSS("no-image") : ""
    }`.trim();

    const contentInnerClassName = `${this.decorateCSS("content-inner")} ${
      isCentered ? this.decorateCSS("center") : ""
    }`.trim();

    return (
      <Base.Container className={containerClassName}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("wrapper")}>
              {isContentVisible && (
                <div className={contentInnerClassName}>
                  {subtitleExist && (
                    <Base.SectionSubTitle
                      className={this.decorateCSS("subtitle")}
                    >
                      {subtitle}
                    </Base.SectionSubTitle>
                  )}

                  {titleExist && (
                    <Base.SectionTitle className={this.decorateCSS("title")}>
                      {title}
                    </Base.SectionTitle>
                  )}

                  {descriptionExist && (
                    <Base.SectionDescription
                      className={this.decorateCSS("description")}
                    >
                      {description}
                    </Base.SectionDescription>
                  )}

                  {hasButtons && (
                    <div className={this.decorateCSS("buttons-wrapper")}>
                      {buttons.map((item, index) => {
                        const buttonText = this.castToString(item.text || "");
                        const iconValue = this.getIconValue(item.icon);
                        const hasContent = !!buttonText || !!iconValue;

                        return (
                          hasContent && (
                            <ComposerLink
                              key={index}
                              path={item.url}
                              className={this.decorateCSS("link")}
                            >
                              <Base.Button
                                buttonType={item.type}
                                className={this.decorateCSS("button")}
                              >
                                {iconValue && (
                                  <Base.Media
                                    value={iconValue}
                                    className={this.decorateCSS("icon")}
                                  />
                                )}
                                {!!buttonText && (
                                  <Base.P
                                    className={this.decorateCSS("button-text")}
                                  >
                                    {item.text}
                                  </Base.P>
                                )}
                              </Base.Button>
                            </ComposerLink>
                          )
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {hasImage && (
                <div className={this.decorateCSS("image-wrapper")}>
                  <Base.Media
                    value={image as TypeMediaInputValue}
                    className={this.decorateCSS("image")}
                  />
                  {overlay && <div className={this.decorateCSS("overlay")} />}
                </div>
              )}
            </div>
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default About13;
