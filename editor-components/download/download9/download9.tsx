import * as React from "react";
import styles from "./download9.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseDownload, TypeUsableComponentProps } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";

import { INPUTS } from "composer-tools/custom-hooks/input-templates";
class Download9 extends BaseDownload {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Background Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c88ebd2970002c629244?alt=media&timestamp=1719564433798",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "If you want to download it",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: " It can be a part of a broader call-to-action that highlights the value and benefits of the product, encouraging users to take action and download it. ",
    });

    this.addProp({
      type: "string",
      key: "cardTitle",
      displayer: "Card Title",
      value: "Download now by clicking the button",
    });

    this.addProp({
      type: "string",
      key: "cardDescription",
      displayer: "Card Description",
      value: " By using clear and concise language, and providing a simple and easy-to-use download button, businesses and developers can increase the chances of users downloading and using their product.",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Download", "", "FaApple", "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675ad1cc0655f8002ca6552d?alt=media", "Primary"),
        INPUTS.BUTTON("button", "Button", "Download for iOS", "", "FaGooglePlay", "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/673f51e4506a40002c2cf6eb?alt=media&timestamp=1732790517206", "Primary"),
      ],
    });
  }

  static getName(): string {
    return "Download 9";
  }

  renderButtons() {
    return this.castToObject<INPUTS.CastedButton[]>("buttons").map((item: INPUTS.CastedButton, index: number) => {
      const buttonTextExist = this.castToString(item.text);
      return (
        <ComposerLink key={`dw-9-btn-${index}`} path={item.url}>
          {item.image ? (
            <div className={this.decorateCSS("image-container")}>
              <img src={item.image} className={this.decorateCSS("image")} alt="button" />
            </div>
          ) : (
            (item.icon || buttonTextExist) && (
              <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                {item.icon && <Base.Icon name={item.icon} propsIcon={{ className: this.decorateCSS("icon") }} />}
                {buttonTextExist && item.text && <div className={this.decorateCSS("text")}>{item.text}</div>}
              </Base.Button>
            )
          )}
        </ComposerLink>
      );
    });
  }

  render() {
    const imageExist = this.getPropValue("image");
    const overlay = this.getPropValue("overlay");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const cardTitle = this.getPropValue("cardTitle");
    const cardDescription = this.getPropValue("cardDescription");

    const titleExist = this.castToString(title);
    const descriptionExist = this.castToString(description);
    const cardTitleExist = this.castToString(cardTitle);
    const cardDescriptionExist = this.castToString(cardDescription);

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <div className={`${this.decorateCSS("page")} ${imageExist ? this.decorateCSS("image") : this.decorateCSS("no-image")}`}>
          {imageExist && <img className={this.decorateCSS("background-image")} src={this.getPropValue("image")} alt="" />}
          {overlay && imageExist && <div className={this.decorateCSS("overlay")}></div>}
          <Base.MaxContent className={`${this.decorateCSS("max-content")} ${imageExist && this.decorateCSS("image")}`}>
            {(titleExist || descriptionExist) && (
              <Base.VerticalContent className={this.decorateCSS("middle-container")}>
                {titleExist && <Base.SectionTitle className={`${this.decorateCSS("title")} ${imageExist && this.decorateCSS("image")}`}>{this.getPropValue("title")}</Base.SectionTitle>}
                {descriptionExist && <Base.SectionDescription className={`${this.decorateCSS("description")} ${imageExist && this.decorateCSS("image")}`}>{this.getPropValue("description")}</Base.SectionDescription>}
              </Base.VerticalContent>
            )}
            <Base.VerticalContent className={this.decorateCSS("hover-container")}>
              {cardTitleExist && <Base.SectionTitle className={`${this.decorateCSS("card-title")} ${imageExist && this.decorateCSS("image")}`}>{this.getPropValue("cardTitle")}</Base.SectionTitle>}
              {cardDescriptionExist && <Base.SectionDescription className={`${this.decorateCSS("card-title")} ${imageExist && this.decorateCSS("image")}`}>{this.getPropValue("cardDescription")}</Base.SectionDescription>}
              {this.castToObject<INPUTS.CastedButton[]>("buttons").length > 0 && <div className={this.decorateCSS("buttons-container")}>{this.renderButtons()}</div>}
            </Base.VerticalContent>
          </Base.MaxContent>
        </div>
      </Base.Container>
    );
  }
}

export default Download9;
