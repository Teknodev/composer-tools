import * as React from "react";
import styles from "./download4.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseDownload, TypeMediaInputValue } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Background = {
  media: TypeMediaInputValue;
  overlay: boolean;
};

class Download4 extends BaseDownload {
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
      value: "Download App",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Download", "", "", "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/68e79205ffd791002b7e7482?alt=media", "Primary"),
        INPUTS.BUTTON("button", "Button", "Download", "", "", "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/673f51e4506a40002c2cf6eb?alt=media&timestamp=1732203035257", "Primary"),
      ],
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
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6748510e506a40002c2f0943?alt=media&timestamp=1732792647249",
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
  }

  static getName(): string {
    return "Download 4";
  }

  render() {
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const background = this.castToObject<Background>("background");
    const media = background?.media;
    const overlay = background?.overlay;
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const hasContent = title || description || subtitle;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            <div className={this.decorateCSS("content")}>
              {hasContent && (
                <Base.VerticalContent className={this.decorateCSS("header")}>
                  {subtitle && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
                  {title && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                  {description && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
                </Base.VerticalContent>
              )}
              {buttons.length > 0 && (
                <div className={this.decorateCSS("button-group")}>
                  {buttons.map((item: INPUTS.CastedButton, index: number) => {
                    const buttonTextExist = this.castToString(item.text);
                    const iconExist = item.icon && item.icon.name;
                    const imageExist = item.image && item.image.url;

                    return (!buttonTextExist && !iconExist && !imageExist) || (
                      <ComposerLink key={`dw-4-btn-${index}`} path={item.url}>
                        {imageExist ? (
                          <div className={this.decorateCSS("image-button-wrapper")}>
                            <Base.Media value={item.image} className={this.decorateCSS("button-image")} />
                          </div>
                        ) : (
                          <Base.Button buttonType={item.type} className={this.decorateCSS("button-element")}>
                            {iconExist && <Base.Media value={item.icon} className={this.decorateCSS("button-icon")} />}
                            {buttonTextExist && <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>}
                          </Base.Button>
                        )}
                      </ComposerLink>
                    );
                  })}
                </div>
              )}
            </div>
            {media && 'url' in media && media.url && (
              <div className={this.decorateCSS("image-container")}>
                <Base.Media value={media} className={this.decorateCSS("image")} />
                {overlay && <div className={this.decorateCSS("overlay")} />}
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Download4;