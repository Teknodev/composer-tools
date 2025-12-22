import * as React from "react";
import { BaseHeroSection, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./hero-section21.module.scss";

import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type CardState = {
  logo: TypeMediaInputValue;
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
};

type Button = INPUTS.CastedButton;

class HeroSection21 extends BaseHeroSection {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "object",
      key: "card",
      displayer: "Card",
      value: [
        {
          type: "media",
          key: "logo",
          displayer: "Logo",
          additionalParams: {
            availableTypes: ["image", "icon"],
          },
          value: {
            type: "icon",
            name: "",
          },
        },
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
      type: "media",
      key: "image",
      displayer: "Thumbnail",
      additionalParams: {
        availableTypes: ["image"],
      },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b08ed003b007002cc77884?alt=media",
      },
    });

    this.addProp({
      type: "object",
      key: "video_player",
      displayer: "Video Player",
      value: [
        {
          type: "media",
          key: "icon",
          displayer: "Icon",
          additionalParams: {
            availableTypes: ["icon", "image"],
          },
          value: {
            type: "icon",
            name: "IoIosPlay",
          },
        },
        {
          type: "media",
          displayer: "Video",
          key: "video",
          additionalParams: {
            availableTypes: ["video"],
          },
          value: {
            type: "video",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b08ebb03b007002cc77877?alt=media",
          },
        },
      ],
    });

    this.addProp({
    type: "object",
    key: "right-box",
    displayer: "Right Box",
    value: [
        {
          type: "string",
          key: "card_text",
          displayer: "Card Text",
          value: "STÖLKEN",
        },
        {
          type: "string",
          key: "card_description",
          displayer: "Card Descirption",
          value: "Chair with armrests from $65",
        },
      ],
    });

    this.setComponentState("is_video_visible", false);
  }
  static getName(): string {
    return "Hero Section 21";
  }
  render() {
    const card = this.castToObject<CardState>("card");
    const buttons = this.castToObject<Button[]>("buttons");
    const rightBox = this.castToObject<any>("right-box");

    const titleExist = this.castToString(card.title);
    const subtitleExist = this.castToString(card.subtitle);
    const descExist = this.castToString(card.description);
    const logoExist = card.logo;

    const imageValue = this.getPropValue("image") as TypeMediaInputValue | undefined;
    const videoPlayer = this.castToObject<any>("video_player");
    const videoValue = videoPlayer?.video as TypeMediaInputValue | undefined;
    const iconValue = videoPlayer?.icon as TypeMediaInputValue | undefined;
    const image = imageValue;
    const video = videoValue;

    const cardExist = titleExist || subtitleExist || descExist || buttons?.length > 0;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {cardExist && (
              <div className={`${this.decorateCSS("card")} ${!image && this.decorateCSS("card-no-image")}`}>
                <Base.VerticalContent className={`${this.decorateCSS("card-box")} ${!image && this.decorateCSS("card-box-no-image")}`}>
                  {logoExist && (
                    <div className={this.decorateCSS("logo-wrapper")}>
                      <Base.Media value={card.logo} className={this.decorateCSS("logo")} />
                    </div>
                  )}
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
                                {button.icon && <Base.Media value={button.icon as TypeMediaInputValue} className={this.decorateCSS("button-icon")} />}
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
                {iconValue && <button
                  className={this.decorateCSS("button")}
                  onClick={() => {
                    this.setComponentState("is_video_visible", true);
                  }}
                >
                  <Base.Media value={iconValue} className={this.decorateCSS("btn-icon")} />
                </button>}
                {image && <Base.Media value={imageValue} className={this.decorateCSS("image")} />}
                {rightBox && (rightBox.card_text || rightBox.card_description) && (
                  <div className={this.decorateCSS("right-box")}> 
                    {rightBox.card_text && <Base.P className={this.decorateCSS("right-box-text")}>{rightBox.card_text}</Base.P>}
                    {rightBox.card_description && <Base.P className={this.decorateCSS("right-box-desc")}>{rightBox.card_description}</Base.P>}
                  </div>
                )}
              </div>
            )}
          </div>
        </Base.MaxContent>
        {this.getComponentState("is_video_visible") && video && image && (
          <Base.Overlay isVisible={true} className={this.decorateCSS("video")} onClick={() => this.setComponentState("is_video_visible", false)}>
            <div className={this.decorateCSS("player-container")} onClick={(event) => event.stopPropagation()}>
              <Base.Media
                value={video}
                className={this.decorateCSS("player")}
              />
            </div>
          </Base.Overlay>
        )}
      </Base.Container>
    );
  }
}

export default HeroSection21;

