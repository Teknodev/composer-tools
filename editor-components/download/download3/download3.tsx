import * as React from "react";
import styles from "./download3.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseDownload } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";

import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class Download3 extends BaseDownload {
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
      value: "Online Yoga, from Home",
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
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/674030b7506a40002c2d16c7?alt=media&timestamp=1732260086754",
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
      key: "description",
      displayer: "Description",
      value: "With the rise of virtual platforms and technology, individuals can now participate in online yoga classes and receive instruction from qualified teachers without leaving their house.",
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
  }

  static getName(): string {
    return "Download 3";
  }

  render() {
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const overlay = this.getPropValue("overlay");
    const subtitle = this.getPropValue("subtitle");

    const imageExist = this.getPropValue("image");
    const titleExist = this.castToString(title);
    const subtitleExist = this.castToString(subtitle);
    const descriptionExist = this.castToString(description);

    const buttonsExist = this.castToObject<INPUTS.CastedButton[]>("buttons").length > 0;

    const alignmentValue = Base.getContentAlignment();
    return (
      <Base.Container className={this.decorateCSS("container")}>
        {imageExist && (
          <div className={this.decorateCSS("image-container")}>
            <Base.Media value={this.getPropValue("image")} className={this.decorateCSS("image")} />
            {overlay && <div className={this.decorateCSS("overlay")} />}
          </div>
        )}
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            {alignmentValue === "left" && (
              <div className={this.decorateCSS("group-container")}>
                <div className={this.decorateCSS("title-block")}>
                  {subtitleExist && (
                    <div className={this.decorateCSS("subtitle-wrapper")}>
                      <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>
                    </div>
                  )}
                  {titleExist && <Base.SectionTitle className={`${this.decorateCSS("title")} ${!buttonsExist && this.decorateCSS("full")}`}>{this.getPropValue("title")}</Base.SectionTitle>}
                </div>
                <Base.SectionDescription className={`${this.decorateCSS("description")} ${!titleExist && this.decorateCSS("full")}`}>{this.getPropValue("description")}</Base.SectionDescription>
                {buttonsExist && (
                  <div className={this.decorateCSS("button-group")}>
                    {this.castToObject<INPUTS.CastedButton[]>("buttons").map((item: INPUTS.CastedButton, index: number) => {
                      const buttonTextExist = this.castToString(item.text);
                      const iconExist = item.icon && item.icon.name;
                      const imageExist = item.image && item.image.url;
                      const buttonExist = buttonTextExist || iconExist || imageExist;
                      return buttonExist && (
                        <div key={`dw-3-btn-${index}`} className={this.decorateCSS("button")}>
                          <div className={this.decorateCSS("button-link")}>
                            <ComposerLink path={item.url}>
                              {imageExist ? (
                                <Base.Media value={item.image} className={this.decorateCSS("button-logo")} />
                              ) : (
                                <Base.Button buttonType={item.type} className={this.decorateCSS("button-element")}>
                                  {iconExist && (
                                    <Base.Media
                                      value={item.icon}
                                      className={this.decorateCSS("button-icon")}
                                    />
                                  )}
                                  {buttonTextExist && <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>}
                                </Base.Button>
                              )}
                            </ComposerLink>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {alignmentValue === "center" && (
              <div className={this.decorateCSS("group-container-center")}>
                {subtitleExist && (
                  <div className={this.decorateCSS("subtitle-wrapper")}>
                    <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>
                  </div>
                )}
                {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
                <div className={this.decorateCSS("button-group")}>
                  {this.castToObject<INPUTS.CastedButton[]>("buttons").map((item: INPUTS.CastedButton, index: number) => {
                    const buttonTextExist = this.castToString(item.text);
                    const iconExist = item.icon && item.icon.name;
                    const imageExist = item.image && item.image.url;
                    return (
                      <div key={`dw-3-btn-${index}`} className={this.decorateCSS("button")}>
                        <div className={this.decorateCSS("button-link")}>
                          <ComposerLink path={item.url}>
                            {imageExist ? (
                              <Base.Media value={item.image} className={this.decorateCSS("button-logo")} />
                            ) : (
                              <Base.Button className={this.decorateCSS("button-element")}>
                                {iconExist && (
                                  <Base.Media
                                    value={item.icon}
                                    className={this.decorateCSS("button-icon")}
                                  />
                                )}
                                {buttonTextExist && <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>}
                              </Base.Button>
                            )}
                          </ComposerLink>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Download3;
