import * as React from "react";
import styles from "./download9.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseDownload, TypeUsableComponentProps } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Button = {
  buttonText: JSX.Element;
  buttonIcon: string;
  url: string;
  buttonImage: string;
};

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
        {
          type: "object",
          key: "button",
          displayer: "Displayer",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Download",
            },
            {
              type: "icon",
              key: "buttonIcon",
              displayer: "Button Icon",
              value: "FaApple",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
            {
              type: "image",
              key: "buttonImage",
              displayer: "Button Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/673f5276506a40002c2cf763?alt=media&timestamp=1732790517206",
            },
          ],
        },
        {
          type: "object",
          key: "button",
          displayer: "Displayer",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Download",
            },
            {
              type: "icon",
              key: "buttonIcon",
              displayer: "Button Icon",
              value: "FaGooglePlay",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
            {
              type: "image",
              key: "buttonImage",
              displayer: "Button Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/673f51e4506a40002c2cf6eb?alt=media&timestamp=1732790517206",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Download-9";
  }

  renderButtons() {
    return this.castToObject<Button[]>("buttons").map((item: Button, index: number) => {
      const buttonTextExist = this.castToString(item.buttonText);
      return (
        <ComposerLink key={`dw-4-btn-${index}`} path={item.url}>
          {item.buttonImage ? (
            <div className={this.decorateCSS("image-container")}>
              <img src={item.buttonImage} className={this.decorateCSS("image")} alt="button" />
            </div>
          ) : (
            (item.buttonIcon || buttonTextExist) && (
              <div className={this.decorateCSS("button")}>
                <Base.Button>
                  {item.buttonIcon && <ComposerIcon name={item.buttonIcon} propsIcon={{ className: this.decorateCSS("icon") }} />}
                  {buttonTextExist && item.buttonText && <Base.P className={this.decorateCSS("text")}>{item.buttonText}</Base.P>}
                </Base.Button>
              </div>
            )
          )}
        </ComposerLink>
      );
    });
  }

  renderContent() {
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const cardTitle = this.getPropValue("cardTitle");
    const cardDescription = this.getPropValue("cardDescription");
    const overlay = this.getPropValue("overlay");

    const titleExist = this.castToString(title);
    const descriptionExist = this.castToString(description);
    const cardTitleExist = this.castToString(cardTitle);
    const cardDescriptionExist = this.castToString(cardDescription);
    const imageExist = this.getPropValue("image");

    return (
      <div className={this.decorateCSS("page")}>
        {imageExist && <img className={overlay ? this.decorateCSS("background-image") : this.decorateCSS("background-image-no-overlay")} src={this.getPropValue("image")} alt="background" />}
        {(titleExist || descriptionExist) && (
          <Base.VerticalContent className={this.decorateCSS("middle-container")}>
            {titleExist && <Base.SectionTitle className={imageExist ? this.decorateCSS("title") : ""}>{this.getPropValue("title")}</Base.SectionTitle>}
            {descriptionExist && <Base.SectionDescription className={imageExist ? this.decorateCSS("description") : ""}>{this.getPropValue("description")}</Base.SectionDescription>}
          </Base.VerticalContent>
        )}
        <Base.VerticalContent className={this.decorateCSS("hover-container")}>
          {cardTitleExist && <Base.SectionTitle className={imageExist ? this.decorateCSS("card-title") : ""}>{this.getPropValue("cardTitle")}</Base.SectionTitle>}
          {cardDescriptionExist && <Base.SectionDescription className={imageExist ? this.decorateCSS("card-description") : ""}>{this.getPropValue("cardDescription")}</Base.SectionDescription>}
          <div className={this.decorateCSS("buttons-container")}>{this.renderButtons()}</div>
        </Base.VerticalContent>
      </div>
    );
  }

  render() {
    const imageExist = this.getPropValue("image");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        {imageExist ? <div className={this.decorateCSS("max-content")}>{this.renderContent()}</div> : <Base.MaxContent className={this.decorateCSS("max-content")}>{this.renderContent()}</Base.MaxContent>}
      </Base.Container>
    );
  }
}

export default Download9;
