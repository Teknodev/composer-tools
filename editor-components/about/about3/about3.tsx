import * as React from "react";
import { BaseAbout, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./about3.module.scss";

import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "../../../custom-hooks/input-templates";

type ImageMedia = {
  media: TypeMediaInputValue;
  overlay: boolean;
};

class About3 extends BaseAbout {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "About resorts",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Relax at the luxury resorts around the entire world.",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "A design-led approach guides the team, implementing practices, products and services that are thoughtful and environmentally sound. Family of professionals that creates intelligent designs that help the face of hospitality.",
    });
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "About Resort", "", null, null, "Primary")],
    });

    this.addProp({
      type: "string",
      key: "phone",
      displayer: "Phone Number",
      value: "1 800 222 000",
    });

    this.addProp({
      type: "media",
      key: "phoneIcon",
      displayer: "Media",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "BsTelephoneOutbound",
      },
    });

    this.addProp({
      type: "string",
      key: "rightWeakText",
      displayer: "Upper Text",
      value: "Started In",
    });

    this.addProp({
      type: "string",
      key: "rightBoldText",
      displayer: "Lower Text",
      value: "1995",
    });

    this.addProp({
      type: "object",
      key: "back-image",
      displayer: "Back Media",
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
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a39f132f8a5b002ce6b70b?alt=media",
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
      type: "object",
      key: "front-image",
      displayer: "Front Media",
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
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a39f1b2f8a5b002ce6b716?alt=media",
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
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2"]
      }
    });
  }

  static getName(): string {
    return "About 3";
  }

  render() {
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const hasValidButtons = buttons.some((btn) => this.castToString(btn.text));

    const subtitleStr = this.castToString(this.getPropValue("subtitle"));
    const titleStr = this.castToString(this.getPropValue("title"));
    const descriptionStr = this.castToString(this.getPropValue("description"));

    const phoneStr = this.castToString(this.getPropValue("phone"));
    const rightWeakTextStr = this.castToString(this.getPropValue("rightWeakText"));
    const rightBoldTextStr = this.castToString(this.getPropValue("rightBoldText"));

    const backImage = this.castToObject<ImageMedia>("back-image");
    const frontImage = this.castToObject<ImageMedia>("front-image");
    const backMedia = backImage?.media;
    const frontMedia = frontImage?.media;

    const isImage1Exist = !!backMedia;
    const isImage2Exist = !!frontMedia;
    const phoneIconValue = this.getPropValue("phoneIcon");
    const hasPhoneSection = phoneIconValue || phoneStr;

    const showDiv = isImage1Exist || isImage2Exist;
    const showLeftDiv = subtitleStr || titleStr || descriptionStr || hasValidButtons || hasPhoneSection;
    const noImages = !isImage1Exist && !isImage2Exist;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={`${this.decorateCSS("max-content")} ${noImages ? this.decorateCSS("no-images") : ""}`}>
          {showLeftDiv && (
            <Base.VerticalContent className={this.decorateCSS("title-container")}>
              {subtitleStr && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {this.getPropValue("subtitle")}
                </Base.SectionSubTitle>
              )}
              {titleStr && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {this.getPropValue("title")}
                </Base.SectionTitle>
              )}
              {descriptionStr && (
                <Base.SectionDescription className={this.decorateCSS("description")}>
                  {this.getPropValue("description")}
                </Base.SectionDescription>
              )}

              {(hasValidButtons || hasPhoneSection) && (
                <div className={this.decorateCSS("button-container")}>
                  {hasValidButtons && (
                    <div className={this.decorateCSS("buttons-wrapper")}>
                      {buttons.map((button: INPUTS.CastedButton, index: number) => {
                        if (!this.castToString(button.text)) return null;

                        return (
                          <ComposerLink key={index} path={button.url}>
                            <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                              <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                            </Base.Button>
                          </ComposerLink>
                        );
                      })}
                    </div>
                  )}

                  {hasPhoneSection && (
                    <div className={this.decorateCSS("phone-section")}>
                      {phoneIconValue && (
                        <Base.Media value={phoneIconValue} className={this.decorateCSS("icon")} />
                      )}
                      {phoneStr && (
                        <Base.H6 className={this.decorateCSS("text")}>
                          {this.getPropValue("phone")}
                        </Base.H6>
                      )}
                    </div>
                  )}
                </div>
              )}
            </Base.VerticalContent>
          )}

          {showDiv && (
            <div className={`${this.decorateCSS("right-page")} ${!showLeftDiv ? this.decorateCSS("no-content") : ""}`}>
              <div
                className={`${this.decorateCSS("image-container")} ${(!isImage1Exist || !isImage2Exist) && this.decorateCSS("center-single-image")}`}
                data-animation={this.getPropValue("hoverAnimation").join(" ")}
              >

                {(isImage1Exist || isImage2Exist) && (rightWeakTextStr || rightBoldTextStr) && (
                  <div className={this.decorateCSS("image-text")}>
                    {rightWeakTextStr && (
                      <Base.P className={this.decorateCSS("upper-text")}>
                        {this.getPropValue("rightWeakText")}
                      </Base.P>
                    )}
                    {rightBoldTextStr && (
                      <Base.H2 className={this.decorateCSS("lower-text")}>
                        {this.getPropValue("rightBoldText")}
                      </Base.H2>
                    )}
                  </div>
                )}
                {isImage1Exist && (
                  <div className={`${this.decorateCSS("back-image")} ${!isImage2Exist && this.decorateCSS("no-image")}`}>
                    <Base.Media
                      value={backMedia}
                      className={`${this.decorateCSS("image")} ${backMedia?.type === "video" ? this.decorateCSS("is-video") : ""}`}
                      autoPlay={true}
                      muted={true}
                      loop={true}
                    />
                    {backImage?.overlay && (
                      <div className={this.decorateCSS("overlay")} />
                    )}
                  </div>
                )}

                {isImage2Exist && (
                  <div className={`${this.decorateCSS("front-image")} ${!isImage1Exist && this.decorateCSS("no-image")} `}>
                    <Base.Media
                      value={frontMedia}
                      className={`${this.decorateCSS("image")} ${frontMedia?.type === "video" ? this.decorateCSS("is-video") : ""}`}
                      autoPlay={true}
                      muted={true}
                      loop={true}
                    />
                    {frontImage?.overlay && (
                      <div className={this.decorateCSS("overlay")} />
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </Base.MaxContent>
      </Base.Container >
    );
  }
}

export default About3;
