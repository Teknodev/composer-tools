import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import styles from "./hero-section21.module.scss";

import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type CardState = {
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
};

type Button = INPUTS.CastedButton;

class HeroSection21 extends BaseHeader {
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
      value: [INPUTS.BUTTON("button", "Button", "Start Shopping", "", "IoIosArrowForward", null, "Primary")],
    });

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b08ed003b007002cc77884?alt=media",
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
  static getName(): string {
    return "Hero Section 21";
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
              <div className={`${this.decorateCSS("card")} ${!image && this.decorateCSS("card-no-image")}`}>
                <Base.VerticalContent className={`${this.decorateCSS("card-box")} ${!image && this.decorateCSS("card-box-no-image")}`}>
                  {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("card-subtitle")}>{card.subtitle}</Base.SectionSubTitle>}
                  {titleExist && <Base.SectionTitle className={this.decorateCSS("card-title")}>{card.title}</Base.SectionTitle>}
                  {descExist && <Base.SectionDescription className={this.decorateCSS("card-description")}>{card.description}</Base.SectionDescription>}
                  {buttons.length > 0 && (
                    <div className={this.decorateCSS("buttons")}>
                      {buttons.map((button: Button, index: number) => {
                        const buttonTextExist = this.castToString(button.text);                        
                        return (
                          (buttonTextExist || button.icon) && (
                            <ComposerLink path={button.url}>
                              <Base.Button buttonType={button.type} key={index} className={this.decorateCSS("card-button")}>
                                {buttonTextExist && <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>}
                                {button.icon && <Base.Icon name={button.icon} propsIcon={{ className: this.decorateCSS("button-icon") }} />}
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
              <div className={`${this.decorateCSS("image-box")} ${!cardExist && this.decorateCSS("image-box-full")}`}>
                {this.getPropValue("icon") && <button
                  className={this.decorateCSS("button")}
                  onClick={() => {
                    this.setComponentState("is_video_visible", true);
                  }}
                >
                  <Base.Icon name={this.getPropValue("icon")} propsIcon={{ className: this.decorateCSS("btn-icon") }} />
                </button>}
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

export default HeroSection21;

