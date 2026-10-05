import * as React from "react";
import { BaseHeroSection, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./hero-section21.module.scss";

import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type CardState = {
  logo: TypeMediaInputValue;
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
};

type Button = INPUTS.CastedButton;

type VideoPlayer = {
  icon: TypeMediaInputValue;
  video: TypeMediaInputValue;
};

type InfoBox = {
  title: React.JSX.Element;
  description: React.JSX.Element;
};

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
      key: "media",
      displayer: "Media",
      additionalParams: {
        availableTypes: ["image", "video"],
      },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b08ed003b007002cc77884?alt=media",
      },
    });

    this.addProp({
      type: "object",
      key: "videoPlayer",
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
      key: "infoBox",
      displayer: "Info Box",
      value: [
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "STÖLKEN",
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: "Chair with armrests from $65",
        },
      ],
    });

    this.addProp({
      type: "media",
      key: "closeIcon",
      displayer: "Close Icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "IoMdClose",
      },
    });

    this.addProp({
      type: "boolean",
      key: "animation",
      displayer: "Animation",
      value: true,
    });

    this.setComponentState("is_video_visible", false);
  }
  static getName(): string {
    return "Hero Section 21";
  }
  hasMedia(media?: unknown) {
    return !!(media && ((media as any).url || (media as any).name));
  }

  withVideoSettings(media: TypeMediaInputValue) {
    return media?.type === "video"
      ? { ...media, settings: { autoplay: true, loop: true, muted: true, controls: false } }
      : media;
  }

  render() {
    const card = this.castToObject<CardState>("card");
    const buttons = this.castToObject<Button[]>("buttons");
    const infoBox = this.castToObject<InfoBox>("infoBox");
    const videoPlayer = this.castToObject<VideoPlayer>("videoPlayer");
    const media = this.getPropValue("media") as TypeMediaInputValue;
    const closeIcon = this.getPropValue("closeIcon") as TypeMediaInputValue;
    const animationEnabled = this.getPropValue("animation");

    const titleExist = this.castToString(card.title);
    const subtitleExist = this.castToString(card.subtitle);
    const descExist = this.castToString(card.description);
    const logoExist = this.hasMedia(card.logo);
    const infoTitleExist = this.castToString(infoBox?.title);
    const infoDescExist = this.castToString(infoBox?.description);

    const mediaExist = this.hasMedia(media);
    const videoExist = this.hasMedia(videoPlayer?.video);
    const playIconExist = this.hasMedia(videoPlayer?.icon) && videoExist;
    const closeIconExist = this.hasMedia(closeIcon);

    const visibleButtons = buttons.filter(
      (button: Button) => this.castToString(button.text) || this.hasMedia(button.icon)
    );
    const cardExist = logoExist || titleExist || subtitleExist || descExist || visibleButtons.length > 0;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {cardExist && (
              <div className={`${this.decorateCSS("card")} ${!mediaExist ? this.decorateCSS("card-no-image") : ""}`}>
                <Base.VerticalContent className={`${this.decorateCSS("card-box")} ${!mediaExist ? this.decorateCSS("card-box-no-image") : ""}`}>
                  {logoExist && <Base.Media value={card.logo} className={this.decorateCSS("logo")} />}
                  {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("card-subtitle")}>{card.subtitle}</Base.SectionSubTitle>}
                  {titleExist && <Base.SectionTitle className={this.decorateCSS("card-title")}>{card.title}</Base.SectionTitle>}
                  {descExist && <Base.SectionDescription className={this.decorateCSS("card-description")}>{card.description}</Base.SectionDescription>}
                  {visibleButtons.length > 0 && (
                    <div className={this.decorateCSS("buttons")}>
                      {visibleButtons.map((button: Button, index: number) => {
                        const buttonTextExist = this.castToString(button.text);
                        const buttonIconExist = this.hasMedia(button.icon);
                        return (
                          <ComposerLink key={index} path={button.url}>
                            <Base.Button buttonType={button.type} className={this.decorateCSS("card-button")}>
                              {buttonTextExist && <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>}
                              {buttonIconExist && <Base.Media value={button.icon as TypeMediaInputValue} className={this.decorateCSS("button-icon")} />}
                            </Base.Button>
                          </ComposerLink>
                        );
                      })}
                    </div>
                  )}
                </Base.VerticalContent>
              </div>
            )}
            {mediaExist && (
              <div className={`${this.decorateCSS("image-box")} ${!cardExist ? this.decorateCSS("image-box-full") : ""}`}>
                {playIconExist && (
                  <div
                    className={this.decorateCSS("button")}
                    onClick={() => {
                      this.setComponentState("is_video_visible", true);
                    }}
                  >
                    <Base.Media
                      value={videoPlayer.icon}
                      className={`${this.decorateCSS("btn-icon")} ${animationEnabled ? this.decorateCSS("pulse") : ""}`}
                    />
                  </div>
                )}
                <Base.Media value={this.withVideoSettings(media)} className={this.decorateCSS("image")} />
                {(infoTitleExist || infoDescExist) && (
                  <div className={this.decorateCSS("right-box")}>
                    {infoTitleExist && <Base.P className={this.decorateCSS("right-box-text")}>{infoBox.title}</Base.P>}
                    {infoDescExist && <Base.P className={this.decorateCSS("right-box-desc")}>{infoBox.description}</Base.P>}
                  </div>
                )}
              </div>
            )}
          </div>
        </Base.MaxContent>
        {this.getComponentState("is_video_visible") && videoExist && (
          <Base.Overlay isVisible={true} className={this.decorateCSS("video")}
            onClick={() => this.setComponentState("is_video_visible", false)}>
            <div className={this.decorateCSS("player-container")} onClick={(event) => event.stopPropagation()}>
              {closeIconExist && (
                <div
                  className={this.decorateCSS("close-button")}
                  onClick={() => this.setComponentState("is_video_visible", false)}
                >
                  <Base.Media value={closeIcon} className={this.decorateCSS("close-icon")} />
                </div>
              )}
              <Base.Media value={videoPlayer.video} className={this.decorateCSS("player")} />
            </div>
          </Base.Overlay>
        )}
      </Base.Container>
    );
  }
}

export default HeroSection21;

