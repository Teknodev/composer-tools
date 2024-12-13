import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content13.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

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

    this.addProp({
      type: "string",
      key: "buttonText",
      displayer: "Button Text",
      value: "About resort",
    });

    this.addProp({
      type: "page",
      key: "buttonLink",
      displayer: "Button Link",
      value: "",
    });

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
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c49ba0655f8002ca6f9ed?alt=media&timestamp=1734101452896",
    });

    this.addProp({
      type: "image",
      key: "image2",
      displayer: "image2",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c49dc0655f8002ca6fa0c?alt=media&timestamp=1734101486003",
    });
  }

  getName(): string {
    return "Content 13";
  }

  render() {
    const isAboutTitleExist = this.castToString(
      this.getPropValue("aboutTitle")
    );
    const isMainTitleExist = this.castToString(this.getPropValue("mainTitle"));
    const isDescriptionExist = this.castToString(
      this.getPropValue("description")
    );
    const isButtonTextExist = this.castToString(
      this.getPropValue("buttonText")
    );
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
                  <ComposerLink path={this.getPropValue("buttonLink")}>
                    <button className={this.decorateCSS("about-button")}>
                      {this.getPropValue("buttonText")}
                    </button>
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
            <div className={`${!showLeftDiv ? this.decorateCSS("no-content") : ""} ${this.decorateCSS("right-page")}`}>
              <div className={this.decorateCSS("image-container")}>
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
                    className={`${
                      !isImage2Exist ? this.decorateCSS("no-image") : ""
                    } ${this.decorateCSS("image1")}`}
                  />
                )}

                {isImage2Exist && (
                  <img
                    src={this.getPropValue("image2")}
                    alt="Image 2"
                    className={`${
                      !isImage1Exist ? this.decorateCSS("no-image") : ""
                    } ${this.decorateCSS("image2")}`}
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
