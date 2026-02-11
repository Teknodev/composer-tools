import * as React from "react";
import styles from "./download6.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseDownload, TypeMediaInputValue } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Background = {
  media: TypeMediaInputValue;
  overlay: boolean;
};

class Download6 extends BaseDownload {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Let's start now!",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Create amazing posts and share with the world.",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "Download Now", "", "", "", "Primary")],
    });

    this.addProp({
      type: "object",
      key: "background",
      displayer: "Background",
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
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66bdb43307399d002cb4160b?alt=media",
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
  }

  static getName(): string {
    return "Download 6";
  }

  render() {
    const title = this.castToString(this.getPropValue("title"));
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const description = this.castToString(this.getPropValue("description"));
    const background = this.castToObject<Background>("background");
    const media = background?.media;
    const overlay = background?.overlay;
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const hasContent = title || description || subtitle || buttons?.length > 0;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {hasContent && (
            <div className={`${this.decorateCSS("wrapper")} ${media && this.decorateCSS("has-image")}`}>
              <Base.VerticalContent className={this.decorateCSS("left-content")}>
                {subtitle && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
                {title && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                {description && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
              </Base.VerticalContent>
              {buttons?.length > 0 && (
                <Base.Row className={this.decorateCSS("buttons-container")}>
                  {buttons.map((item: INPUTS.CastedButton, index: number) => {
                    const buttonTextExist = this.castToString(item?.text);
                    const iconExist = item.icon && item.icon.name;
                    const imageExist = item.image && item.image.url;
                    return (buttonTextExist || iconExist || imageExist) && (
                      <ComposerLink key={index} path={item.url}>
                        {imageExist ? (
                          <Base.Media value={item.image} className={this.decorateCSS("button-image")} />
                        ) : (
                          <Base.Button buttonType={item.type} className={this.decorateCSS("button-element")}>
                            {buttonTextExist && <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>}
                            {iconExist && (<Base.Media value={item.icon} className={this.decorateCSS("icon")} />)}
                          </Base.Button>
                        )}
                      </ComposerLink>
                    );
                  })}
                </Base.Row>
              )}
            </div>
          )}
          {media && (
            <div className={this.decorateCSS("right-content")}>
              <Base.Media value={media} className={this.decorateCSS("image")} />
              {overlay && <div className={this.decorateCSS("overlay")} />}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Download6;