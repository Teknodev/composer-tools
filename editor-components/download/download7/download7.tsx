import * as React from "react";
import styles from "./download7.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseDownload } from "../../EditorComponent";

import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class Download7 extends BaseDownload {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "media",
      key: "image",
      displayer: "Background Image",
      additionalParams: {
        availableTypes: ["image"],
      },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a3651b2f8a5b002ce69dbd?alt=media",
      },
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "DO IT NOW",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Join millions of users worldwide on Dash, where the power of social networking lies in your hands.",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Download for Android", "", "FaAndroid", "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67586eb80655f8002ca57e58?alt=media", "Primary"),
        INPUTS.BUTTON("button", "Button", "Download for iOS", "", "FaApple", "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6759e80e0655f8002ca61199?alt=media", "Primary"),
      ],
    });
  }

  static getName(): string {
    return "Download 7";
  }

  render() {
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const overlay = this.getPropValue("overlay");

    const titleExist = this.getPropValue("title", {
      as_string: true,
    });

    const descExist = this.getPropValue("description", { as_string: true });

    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

    const alignmentValue = Base.getContentAlignment();

    const backgroundImage = this.getPropValue("image");
    const backgroundImageUrl = backgroundImage && backgroundImage.url ? backgroundImage.url : null;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")} style={{ backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : "none" }}>
            {overlay && backgroundImageUrl && <div className={this.decorateCSS("overlay")}></div>}

            <Base.VerticalContent className={`${this.decorateCSS("content-container")} ${backgroundImageUrl && this.decorateCSS("image")}`}>
              {titleExist && <Base.SectionTitle className={`${this.decorateCSS("title")} ${backgroundImageUrl && this.decorateCSS("image")}`}>{title}</Base.SectionTitle>}
              {descExist && <Base.SectionDescription className={`${this.decorateCSS("description")} ${backgroundImageUrl && this.decorateCSS("image")}`}>{description}</Base.SectionDescription>}
              {buttons?.length > 0 && (
                <div className={`${this.decorateCSS("buttons-container")} ${(backgroundImageUrl || (!backgroundImageUrl && alignmentValue === "center")) && this.decorateCSS("center")}`}>
                  {buttons.map((button: INPUTS.CastedButton, index: number) => {
                    const buttonTextExist = this.castToString(button.text);
                    const iconExist = button.icon && button.icon.name;
                    const imageExist = button.image && button.image.url;
                    return (
                      <div className={this.decorateCSS("button-wrapper")} key={index}>
                        <ComposerLink path={button.url}>
                          {imageExist ? (
                            <Base.Media value={button.image} className={this.decorateCSS("button-image")} />
                          ) : (
                            <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                              {iconExist && (
                                <Base.Media
                                  value={button.icon}
                                  className={this.decorateCSS("button-icon")}
                                />
                              )}
                              {buttonTextExist && <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>}
                            </Base.Button>
                          )}
                        </ComposerLink>
                      </div>
                    );
                  })}
                </div>
              )}
            </Base.VerticalContent>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Download7;
