import * as React from "react";
import { BaseAbout, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./about13.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class About13 extends BaseAbout {
  constructor(props?: any) {
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
        INPUTS.BUTTON(
          "button",
          "Button",
          "Learn More",
          "",
          "",
          null,
          "Link"
        ),
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
      } as TypeMediaInputValue,
    });
  }

  static getName(): string {
    return "About 13";
  }

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const image = this.getPropValue("image");
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const overlay = this.getPropValue("overlay");
    const alignment = Base.getContentAlignment();

    const validButtons = Array.isArray(buttons)
      ? buttons.filter((item) => {
          const text = this.castToString(item.text || "");
          const iconName = (item as any)?.icon?.name;
          const hasValidIcon = iconName && iconName !== "";
          return !!text || hasValidIcon;
        })
      : [];

    const isContentVisible =
      this.castToString(subtitle) ||
      this.castToString(title) ||
      this.castToString(description) ||
      validButtons.length > 0;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            {isContentVisible && (
              <div
                className={`${this.decorateCSS("content")} ${
                  alignment === "center" ? this.decorateCSS("center") : ""
                }`}
              >
                {this.castToString(subtitle) && (
                  <Base.SectionSubTitle
                    className={this.decorateCSS("subtitle")}
                  >
                    {subtitle}
                  </Base.SectionSubTitle>
                )}

                {this.castToString(title) && (
                  <Base.SectionTitle className={this.decorateCSS("title")}>
                    {title}
                  </Base.SectionTitle>
                )}

                {this.castToString(description) && (
                  <Base.SectionDescription
                    className={this.decorateCSS("description")}
                  >
                    {description}
                  </Base.SectionDescription>
                )}

                {validButtons.length > 0 && (
                  <div className={this.decorateCSS("buttons-wrapper")}>
                    {validButtons.map((item, index) => {
                      const buttonTextExist = this.castToString(item.text || "");
                      const iconExist = item.icon && item.icon.name;
                      return (
                        <ComposerLink key={index} path={item.url}>
                          <Base.Button
                            buttonType={item.type}
                            className={this.decorateCSS("button")}
                          >
                            {iconExist && (
                              <Base.Media
                                value={item.icon}
                                className={this.decorateCSS("icon")}
                              />
                            )}
                            {buttonTextExist && (
                              <Base.P className={this.decorateCSS("button-text")}>
                                {item.text}
                              </Base.P>
                            )}
                          </Base.Button>
                        </ComposerLink>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            <div
              className={`${this.decorateCSS("image-wrapper")} ${
                !isContentVisible ? this.decorateCSS("full-width") : ""
              }`}
            >
              {image && (
                <Base.Media
                  value={image}
                  className={this.decorateCSS("image")}
                />
              )}
              {overlay && image?.url && (
                <div className={this.decorateCSS("overlay")}></div>
              )}
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default About13;