import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content13.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";


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
      value: "A design-led approach guides the team, implementing practices, products and services that are thoughtful and environmentally sound. Family of professionals that creates intelligent designs that help the face of hospitality."
    })

    this.addProp({
      type: "string",
      key: "buttonText",
      displayer: "Button Text",
      value: "About resort"
    });

    this.addProp({
      type: "string",
      key: "phone",
      displayer: "Phone Number",
      value: "1 800 222 000"
    })

    this.addProp({
      type: "string",
      key: "text",
      displayer: "Text",
      value: "Started In"
    })

    this.addProp({
      type: "string",
      key: "year",
      displayer: "Year",
      value: "1995"
    });

    this.addProp({
      type: "icon",
      key: "phoneIcon",
      displayer: "Icon",
      value: "BsTelephoneOutbound"
    });

    this.addProp({
      type: "image",
      key: "image1",
      displayer: "image1",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a39f132f8a5b002ce6b70b?alt=media"
    })

    this.addProp({
      type: "image",
      key: "image2",
      displayer: "image2",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a39f1b2f8a5b002ce6b716?alt=media"
    })




  }

  getName(): string {
    return "Content 13";
  }

  render() {
    const isAboutTitleExist = this.castToString(this.getPropValue("aboutTitle"))
    const isMainTitleExist = this.castToString(this.getPropValue("mainTitle"))
    const isDescriptionExist = this.castToString(this.getPropValue("description"))
    const isButtonTextExist = this.castToString(this.getPropValue("buttonText"))
    const isPhoneExist = this.castToString(this.getPropValue("phone"))
    const isTextExist = this.castToString(this.getPropValue("text"))
    const isYearExist = this.castToString(this.getPropValue("year"))
    const isImage1Exist = this.getPropValue("image1")
    const isImage2Exist = this.getPropValue("image2")
    const showDiv = isTextExist || isYearExist || isImage1Exist || isImage2Exist


    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            <div className={this.decorateCSS("title-container")}>
              {isAboutTitleExist && <span className={this.decorateCSS("about-title")}>{this.getPropValue("aboutTitle")}</span>}
              {isMainTitleExist && <h2 className={this.decorateCSS("maintitle")}>{this.getPropValue("mainTitle")}</h2>}
              {isDescriptionExist && <p className={this.decorateCSS("description")}>{this.getPropValue("description")}</p>}

              <div className={this.decorateCSS("button-icon")} >
                {isButtonTextExist &&
                  <button className={this.decorateCSS("about-button")}>
                    <div className={this.decorateCSS("buttonText")}>
                      {this.getPropValue("buttonText")}
                    </div>
                  </button>}

                {(this.getPropValue("phoneIcon") || isPhoneExist) &&
                  <div className={this.decorateCSS("phone-icon")}>
                    <ComposerIcon
                      propsIcon={{ className: this.decorateCSS("icon") }}
                      name={this.getPropValue("phoneIcon")}
                    />
                    {isPhoneExist && <h1 className={this.decorateCSS("phone")}>{this.getPropValue("phone")}</h1>}
                  </div>}
              </div>
            </div>

            {showDiv && <div className={this.decorateCSS("right-page")}>
              <div className={this.decorateCSS("image-container")}>
                <div className={this.decorateCSS("image-text")}>
                  {isTextExist && <h1 className={this.decorateCSS("text")}>{this.getPropValue("text")}</h1>}
                  {isYearExist && <h2 className={this.decorateCSS("year")}>{this.getPropValue("year")}</h2>}

                </div>
                {isImage1Exist &&
                  <div className={this.decorateCSS("image1-container")}>
                    <img src={this.getPropValue("image1")} alt="Image 1" className={this.decorateCSS("image1")} />
                  </div>}

                {isImage2Exist &&
                  <div className={isImage1Exist ? this.decorateCSS("image2-container") : this.decorateCSS("image2-container-without-image1")}>
                    <img src={this.getPropValue("image2")} alt="Image 2" className={this.decorateCSS("image2")} />
                  </div>
                }

              </div>
            </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Content13;
