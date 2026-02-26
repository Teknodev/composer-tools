import * as React from "react";
import { BaseCallToAction, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./call_to_action33.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Button = INPUTS.CastedButton;

class CallToAction33 extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "object",
      key: "cardMedia",
      displayer: "Media",
      value: [
        {
          type: "media",
          key: "media",
          displayer: "Media",
          additionalParams: {
            availableTypes: ["image", "video"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6996c59b771c03002cc51260?alt=media",
          },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: true,
        },
      ],
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
      value: "Creating Websites is Easy with BlinkPage",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Knowledge is limited. Imagination encircles the world.Imagination is more important than knowledge.",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Get Started", "", null, null, "Primary"),
      ],
    });
  }

  static getName(): string {
    return "Call To Action 33";
  }

  render() {
    const cardMedia = this.castToObject<{ media?: TypeMediaInputValue; overlay?: boolean }>("cardMedia");
    const mediaValue = cardMedia?.media as TypeMediaInputValue | undefined;
    const overlayEnabled = cardMedia?.overlay ?? true;

    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const buttons = this.castToObject<Button[]>("buttons");

    const hasMedia = !!(mediaValue && (("url" in mediaValue && mediaValue.url) || ("name" in mediaValue && mediaValue.name)));

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("card")}>
            {hasMedia && (
              <div className={this.decorateCSS("media-container")}>
                <Base.Media value={mediaValue} className={this.decorateCSS("media")} />
                {overlayEnabled && (
                  <div className={this.decorateCSS("overlay")} />
                )}
              </div>
            )}
            <Base.VerticalContent
              className={`${this.decorateCSS("content")} ${hasMedia ? this.decorateCSS("with-media") : ""}`}
            >
              {subtitleExist && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {this.getPropValue("subtitle")}
                </Base.SectionSubTitle>
              )}
              {titleExist && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {this.getPropValue("title")}
                </Base.SectionTitle>
              )}
              {descriptionExist && (
                <Base.SectionDescription className={this.decorateCSS("description")}>
                  {this.getPropValue("description")}
                </Base.SectionDescription>
              )}
              {buttons.length > 0 && (
                <div className={this.decorateCSS("button-container")}>
                  {buttons.map((button: Button, index: number) =>
                    this.castToString(button.text) ? (
                      <ComposerLink key={index} path={button.url}>
                        <Base.Button
                          buttonType={button.type}
                          className={this.decorateCSS("button")}
                        >
                          <Base.P className={this.decorateCSS("button-text")}>
                            {button.text}
                          </Base.P>
                        </Base.Button>
                      </ComposerLink>
                    ) : null
                  )}
                </div>
              )}
            </Base.VerticalContent>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default CallToAction33;
