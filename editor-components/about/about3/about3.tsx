import * as React from "react";
import { BaseAbout } from "../../EditorComponent";
import styles from "./about3.module.scss";

import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

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
    this.addProp(INPUTS.BUTTON("button", "Button", "About Resort", "", null, null, "Primary"));

    this.addProp({
      type: "string",
      key: "phone",
      displayer: "Phone Number",
      value: "1 800 222 000",
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
      type: "media",
      key: "phoneIcon",
      displayer: "Icon",
      additionalParams: {
        availableTypes: ["icon"],
      },
      value: {
        type: "icon",
        name: "BsTelephoneOutbound",
      },
    });

    this.addProp({
      type: "object",
      key: "back-image",
      displayer: "Back Media",
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
          key: "image",
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
    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

    const isAboutTitleExist = this.castToString(
      this.getPropValue("subtitle")
    );
    const isMainTitleExist = this.castToString(this.getPropValue("title"));
    const isDescriptionExist = this.castToString(
      this.getPropValue("description")
    );
    const isButtonTextExist = this.castToString(button.text);
    const isPhoneExist = this.castToString(this.getPropValue("phone"));
    const isRightWeakTextExist = this.castToString(
      this.getPropValue("rightWeakText")
    );
    const isRightBoldTextExist = this.castToString(
      this.getPropValue("rightBoldText")
    );
    const backImage = this.castToObject<any>("back-image");
    const frontImage = this.castToObject<any>("front-image");
    const backMedia = backImage?.image;
    const frontMedia = frontImage?.image;
    const isImage1Exist = backImage?.image;
    const isImage2Exist = frontImage?.image;
    const showDiv =
      isRightWeakTextExist ||
      isRightBoldTextExist ||
      isImage1Exist ||
      isImage2Exist;
    const showLeftDiv =
      isAboutTitleExist ||
      isMainTitleExist ||
      isDescriptionExist ||
      isButtonTextExist ||
      isPhoneExist;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {showLeftDiv && (
            <Base.VerticalContent
              className={this.decorateCSS("title-container")}
            >
              {isAboutTitleExist && (
                <Base.SectionSubTitle
                  className={this.decorateCSS("subtitle")}
                >
                  {this.getPropValue("subtitle")}
                </Base.SectionSubTitle>
              )}
              {isMainTitleExist && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {this.getPropValue("title")}
                </Base.SectionTitle>
              )}
              {isDescriptionExist && (
                <Base.SectionDescription
                  className={this.decorateCSS("description")}
                >
                  {this.getPropValue("description")}
                </Base.SectionDescription>
              )}

              <div className={this.decorateCSS("button-container")}>
                {isButtonTextExist && (
                  <ComposerLink path={button.url}>
                    <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                      <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                    </Base.Button>
                  </ComposerLink>
                )}

                {(this.getPropValue("phoneIcon") || isPhoneExist) && (
                  <div className={this.decorateCSS("phone-section")}>
                    <Base.Media
                      value={this.getPropValue("phoneIcon")}
                      className={this.decorateCSS("icon")}
                    />
                    {isPhoneExist && (
                      <Base.H4 className={this.decorateCSS("text")}>
                        {this.getPropValue("phone")}
                      </Base.H4>
                    )}
                  </div>
                )}
              </div>
            </Base.VerticalContent>
          )}

          {showDiv && (
            <div className={`${this.decorateCSS("right-page")} ${!showLeftDiv ? this.decorateCSS("no-content") : ""}`}>
              <div 
                className={`${this.decorateCSS("image-container")} ${(!isImage1Exist || !isImage2Exist) && this.decorateCSS("center-single-image")}`}
                data-animation={this.getPropValue("hoverAnimation").join(" ")}
              >
                <div className={this.decorateCSS("image-text")}>
                  {isRightWeakTextExist && (
                    <Base.P className={this.decorateCSS("upper-text")}>
                      {this.getPropValue("rightWeakText")}
                    </Base.P>
                  )}
                  {isRightBoldTextExist && (
                    <Base.H2 className={this.decorateCSS("lower-text")}>
                      {this.getPropValue("rightBoldText")}
                    </Base.H2>
                  )}
                </div>
                {isImage1Exist && (
                  <div className={`${this.decorateCSS("back-image")} ${!isImage2Exist ? this.decorateCSS("no-image") : ""}`}>
                    <Base.Media value={backMedia} className={this.decorateCSS("image")} />
                    {backImage?.overlay && (
                      <div className={this.decorateCSS("overlay")} />
                    )}
                  </div>
                )}

                {isImage2Exist && (
                  <div className={`${this.decorateCSS("front-image")} ${!isImage1Exist ? this.decorateCSS("no-image") : ""} `}>
                    <Base.Media value={frontMedia} className={this.decorateCSS("image")} />
                    {frontImage?.overlay && (
                      <div className={this.decorateCSS("overlay")} />
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default About3;
