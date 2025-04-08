import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content13.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class Content13 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "aboutTitle",
      displayer: "Subtitle",
      value: "About resorts",
    });

    this.addProp({
      type: "string",
      key: "mainTitle",
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
      displayer: "Right Weak Text",
      value: "Started In",
    });

    this.addProp({
      type: "string",
      key: "rightBoldText",
      displayer: "Right Bold Text",
      value: "1995",
    });

    this.addProp({
      type: "icon",
      key: "phoneIcon",
      displayer: "Icon",
      value: "BsTelephoneOutbound",
    });

    this.addProp({
      type: "image",
      key: "image1",
      displayer: "image1",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a39f132f8a5b002ce6b70b?alt=media",
    });

    this.addProp({
      type: "image",
      key: "image2",
      displayer: "image2",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a39f1b2f8a5b002ce6b716?alt=media",
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
    return "Content 13";
  }

  render() {
    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

    const isAboutTitleExist = this.castToString(
      this.getPropValue("aboutTitle")
    );
    const isMainTitleExist = this.castToString(this.getPropValue("mainTitle"));
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
    const isImage1Exist = this.getPropValue("image1");
    const isImage2Exist = this.getPropValue("image2");
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
                  className={this.decorateCSS("about-title")}
                >
                  {this.getPropValue("aboutTitle")}
                </Base.SectionSubTitle>
              )}
              {isMainTitleExist && (
                <Base.SectionTitle className={this.decorateCSS("maintitle")}>
                  {this.getPropValue("mainTitle")}
                </Base.SectionTitle>
              )}
              {isDescriptionExist && (
                <Base.SectionDescription
                  className={this.decorateCSS("description")}
                >
                  {this.getPropValue("description")}
                </Base.SectionDescription>
              )}

              <div className={this.decorateCSS("button-icon")}>
                {isButtonTextExist && (
                  <ComposerLink path={button.url}>
                    <Base.Button buttonType={button.type} className={this.decorateCSS("about-button")}>
                      {button.text}
                    </Base.Button>
                  </ComposerLink>
                )}

                {(this.getPropValue("phoneIcon") || isPhoneExist) && (
                  <div className={this.decorateCSS("phone-icon")}>
                    <ComposerIcon
                      propsIcon={{ className: this.decorateCSS("icon") }}
                      name={this.getPropValue("phoneIcon")}
                    />
                    {isPhoneExist && (
                      <Base.H2 className={this.decorateCSS("phone")}>
                        {this.getPropValue("phone")}
                      </Base.H2>
                    )}
                  </div>
                )}
              </div>
            </Base.VerticalContent>
          )}

          {showDiv && (
            <div className={`${this.decorateCSS("right-page")} ${!showLeftDiv ? this.decorateCSS("no-content") : ""}`}>
              <div 
                className={this.decorateCSS("image-container")}
                data-animation={this.getPropValue("hoverAnimation").join(" ")}
              >
                <div className={this.decorateCSS("image-text")}>
                  {isRightWeakTextExist && (
                    <Base.P className={this.decorateCSS("weak-text")}>
                      {this.getPropValue("rightWeakText")}
                    </Base.P>
                  )}
                  {isRightBoldTextExist && (
                    <Base.P className={this.decorateCSS("bold-text")}>
                      {this.getPropValue("rightBoldText")}
                    </Base.P>
                  )}
                </div>
                {isImage1Exist && (
                  <img
                    src={this.getPropValue("image1")}
                    alt="Image 1"
                    className={`${this.decorateCSS("image1")} ${!isImage2Exist ? this.decorateCSS("no-image") : ""}`}
                  />
                )}

                {isImage2Exist && (
                  <img
                    src={this.getPropValue("image2")}
                    alt="Image 2"
                    className={`${this.decorateCSS("image2")} ${!isImage1Exist ? this.decorateCSS("no-image") : ""} `}
                  />
                )}
              </div>
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Content13;
