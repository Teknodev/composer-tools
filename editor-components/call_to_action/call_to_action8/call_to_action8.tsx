import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BaseCallToAction, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./call_to_action8.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type MediaObject = {
  image: TypeMediaInputValue;
  overlay: boolean;
};

class CallToAction8Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "boolean",
      key: "coloredBackground",
      displayer: "Colored Background",
      value: true,
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Our Features",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Discover new perspectives in a vibrant and inclusive community.",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "object",
      key: "mediaObject",
      displayer: "Media",
      value: [
        {
          type: "media",
          key: "image",
          displayer: "Media",
          additionalParams: {
            availableTypes: ["image", "video"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6683ec390181a1002c338033?alt=media&timestamp=1719921738698",
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
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Get Started", "", null, null, "Primary"),
      ],
    });
  }

  static getName(): string {
    return "Call To Action 8";
  }
  render() {
    const mediaObject = this.castToObject<MediaObject>("mediaObject");
    const image = mediaObject.image;
    const overlay = mediaObject.overlay;
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const title = this.castToString(this.getPropValue("title"));
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const description = this.castToString(this.getPropValue("description"));
    const coloredBackground = this.getPropValue("coloredBackground");

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${image && this.decorateCSS("has-image")} ${coloredBackground && this.decorateCSS("colored-background")}`}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {(subtitle || title || description || buttons.length > 0) && (
              <div className={this.decorateCSS("title-box")}>
                <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
                  {subtitle && (<Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>)}
                  {title && (<Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>)}
                  {description && (<Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>)}
                </Base.VerticalContent>
                {buttons.length > 0 && (
                  <Base.Row className={this.decorateCSS("button-container")}>
                    {buttons.map((button: INPUTS.CastedButton, index: number) => (
                      this.castToString(button.text) && (
                        <ComposerLink key={index} path={button.url}>
                          <Base.Button buttonType={button.type} className={this.decorateCSS("button")} >
                            <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                          </Base.Button>
                        </ComposerLink>
                      )
                    ))}
                  </Base.Row>
                )}
              </div>
            )}
            {image && (
              <div className={this.decorateCSS("image-box")}>
                <Base.Media
                  value={image}
                  className={this.decorateCSS("image")}
                />
                {overlay && <div className={this.decorateCSS("overlay")} />}
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default CallToAction8Page;