import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header21.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";

type CardState = {
  subtitle: JSX.Element;
  title: JSX.Element;
  description: JSX.Element;
};

type Button = {
  buttonText: JSX.Element;
  buttonLink: string;
  buttonIcon: string;
};

class Header21 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "object",
      key: "card",
      displayer: "Card",
      value: [
        {
          type: "string",
          key: "subtitle",
          displayer: "Subtitle",
          value: "Quick parcel delivery, from.",
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Get used to better entertaining",
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: "Holiday shopping with 3% back in rewards. Offer expires 12/31/2024",
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Start Shopping",
            },
            {
              type: "page",
              key: "buttonLink",
              displayer: "Url",
              value: "",
            },
            {
              type: "icon",
              key: "buttonIcon",
              displayer: "Button Icon",
              value: "IoIosArrowForward",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676be1ce0655f8002cac3b47?alt=media&timestamp=1735123426015",
    });

    this.addProp({
      type: "icon",
      key: "icon",
      displayer: "Icon",
      value: "MdOutlinePlayCircleOutline",
    });

    this.addProp({
      type: "video",
      displayer: "Video",
      key: "video",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b08ebb03b007002cc77877?alt=media",
    });

    this.setComponentState("is_video_visible", false);
  }
  getName(): string {
    return "Header 21";
  }
  render() {
    const card = this.castToObject<CardState>("card");
    const buttons = this.castToObject<Button[]>("buttons");

    const titleExist = this.castToString(card.title);
    const subtitleExist = this.castToString(card.subtitle);
    const descExist = this.castToString(card.description);

    const image = this.getPropValue("image");
    const video = this.getPropValue("video");

    const cardExist = titleExist || subtitleExist || descExist || buttons?.length > 0;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {cardExist && (
              <div className={image ? this.decorateCSS("card") : this.decorateCSS("card-no-image")}>
                <Base.VerticalContent className={image ? this.decorateCSS("card-box") : this.decorateCSS("card-box-no-image")}>
                  {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("card-subtitle")}>{card.subtitle}</Base.SectionSubTitle>}
                  {titleExist && <Base.SectionTitle className={this.decorateCSS("card-title")}>{card.title}</Base.SectionTitle>}
                  {descExist && <Base.SectionDescription className={this.decorateCSS("card-description")}>{card.description}</Base.SectionDescription>}
                  {buttons.length > 0 && (
                    <div className={this.decorateCSS("buttons")}>
                      {buttons.map((button: Button, index: number) => {
                        const buttonTextExist = this.castToString(button.buttonText);
                        return (
                          (buttonTextExist || button.buttonIcon) && (
                            <ComposerLink path={button.buttonLink}>
                              <Base.Button key={index} className={this.decorateCSS("card-button")}>
                                {buttonTextExist && <Base.P className={this.decorateCSS("button-text")}>{button.buttonText}</Base.P>}
                                {button.buttonIcon && <ComposerIcon name={button.buttonIcon} propsIcon={{ className: this.decorateCSS("button-icon") }} />}
                              </Base.Button>
                            </ComposerLink>
                          )
                        );
                      })}
                    </div>
                  )}
                </Base.VerticalContent>
              </div>
            )}
            {image && (
              <div className={cardExist ? this.decorateCSS("image-box") : this.decorateCSS("image-box-full")}>
                <button
                  className={this.decorateCSS("button")}
                  onClick={() => {
                    this.setComponentState("is_video_visible", true);
                  }}
                >
                  <ComposerIcon name={this.getPropValue("icon")} propsIcon={{ className: this.decorateCSS("btn-icon") }} />
                </button>
                {image && <img className={this.decorateCSS("image")} src={this.getPropValue("image")} alt="" />}
                {this.getComponentState("is_video_visible") && video && image && (
                  <div className={this.decorateCSS("video")} onClick={() => this.setComponentState("is_video_visible", false)}>
                    <video onClick={(event) => event.stopPropagation()} controls className={this.decorateCSS("player")} src={this.getPropValue("video")}></video>
                  </div>
                )}
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Header21;
