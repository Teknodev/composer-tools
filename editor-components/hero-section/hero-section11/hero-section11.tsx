import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BaseHeroSection, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./hero-section11.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type Background = {
  media: TypeMediaInputValue;
  overlay: boolean;
};

type VideoGroup = {
  playIcon: TypeMediaInputValue;
  media: TypeMediaInputValue;
  closeIcon: TypeMediaInputValue;
};

class HeroSection11 extends BaseHeroSection {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
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
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Explore the world",
    })

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Our world is full of wonders. Mountains, rivers, desserts, jungles and much more is waiting for you.",
    })
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "Get Started", "", null, null, "Primary")],
    });
    this.addProp({
      type: "object",
      key: "background",
      displayer: "Background",
      value: [
        {
          type: "media",
          key: "media",
          displayer: "Background Media",
          additionalParams: {
            availableTypes: ["image", "video"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675aa2fe0655f8002ca633bf?alt=media",
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
      key: "video",
      displayer: "Video",
      value: [
        {
          type: "media",
          key: "playIcon",
          displayer: "Play Icon",
          additionalParams: {
            availableTypes: ["icon", "image"],
          },
          value: {
            type: "icon",
            name: "IoMdPlay",
          },
        },
        {
          type: "media",
          key: "media",
          displayer: "Video",
          additionalParams: {
            availableTypes: ["video"],
          },
          value: {
            type: "video",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661a35bbd2970002c626c45?alt=media&timestamp=1719483639151",
          },
        },
        {
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
        },
      ],
    });
    this.setComponentState("isVideoModalOpen", false);
    this.setComponentState("videoUrl", null);
  }

  static getName(): string {
    return "Hero Section 11";
  }

  hasMedia(media?: TypeMediaInputValue) {
    return !!(media && ((media as any).url || (media as any).name));
  }

  handlePlayVideo = () => {
    const video = this.castToObject<VideoGroup>("video");

    if (this.hasMedia(video?.media)) {
      this.setComponentState("isVideoModalOpen", true);
      this.setComponentState("videoUrl", video.media);
    }
  };

  handleCloseVideoModal = () => {
    this.setComponentState("isVideoModalOpen", false);
    this.setComponentState("videoUrl", null);
  };

  render() {
    const logo = this.getPropValue("logo");
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const background = this.castToObject<Background>("background");
    const video = this.castToObject<VideoGroup>("video");

    const hasLogo = this.hasMedia(logo);
    const isSubtitleExist = this.castToString(subtitle);
    const isTitleExist = this.castToString(title);
    const isDescriptionExist = this.castToString(description);
    const visibleButtons = buttons.filter((item: INPUTS.CastedButton) => this.castToString(item.text));
    const hasLeft = hasLogo || isSubtitleExist || isTitleExist || isDescriptionExist || visibleButtons.length > 0;
    const hasBackgroundImage = this.hasMedia(background?.media);
    const hasPlayIcon = this.hasMedia(video?.playIcon) && this.hasMedia(video?.media);
    const alignment = Base.getContentAlignment();

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${alignment === "center" ? this.decorateCSS("center-alignment") : ""} ${!hasBackgroundImage ? this.decorateCSS("no-background-image") : ""}`}>
        {hasLeft && (
          <div className={this.decorateCSS("box")}>
            <Base.MaxContent className={this.decorateCSS("max-content")}>
              <Base.VerticalContent className={`${this.decorateCSS("content")} ${!hasBackgroundImage ? `${this.decorateCSS("no-image")} ${this.decorateCSS("without-background")}` : ""}`}>
                {hasLogo && (
                  <Base.Media
                    value={logo}
                    className={`${this.decorateCSS("logo")} ${logo?.type === "image" ? this.decorateCSS("logo-image") : this.decorateCSS("logo-icon")}`}
                  />
                )}
                {isSubtitleExist && (
                  <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>
                )}
                {isTitleExist && (
                  <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>
                )}
                {isDescriptionExist && (
                  <Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>
                )}
                {visibleButtons.length > 0 && (
                  <div className={this.decorateCSS("buttons")}>
                    {visibleButtons.map((item: INPUTS.CastedButton, index: number) => (
                      <ComposerLink key={index} path={item.url}>
                        <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                          <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                        </Base.Button>
                      </ComposerLink>
                    ))}
                  </div>
                )}
              </Base.VerticalContent>
            </Base.MaxContent>
          </div>
        )}
        {hasBackgroundImage && (
          <div className={`${this.decorateCSS("right")} ${!hasLeft ? this.decorateCSS("no-left") : ""}`}>
            <div className={this.decorateCSS("image-wrapper")}>
              <Base.Media value={background.media} className={this.decorateCSS("image")} />
              {background.overlay && <div className={this.decorateCSS("overlay")} />}
            </div>
            {hasPlayIcon && (
              <div className={this.decorateCSS("icon-box")} onClick={() => this.handlePlayVideo()}>
                <Base.Media value={video.playIcon} className={this.decorateCSS("play-button")} />
              </div>
            )}
          </div>
        )}

        {this.getComponentState("isVideoModalOpen") && (
          <Base.Overlay
            isVisible={true}
            onClick={this.handleCloseVideoModal}
            className={this.decorateCSS("video-modal")}
          >
            <div className={this.decorateCSS("video-modal-container")}>
              {this.hasMedia(video?.closeIcon) && (
                <div className={this.decorateCSS("close-button-wrapper")} onClick={this.handleCloseVideoModal}>
                  <Base.Media value={video.closeIcon} className={this.decorateCSS("close-button")} />
                </div>
              )}
              {this.getComponentState("videoUrl") && (
                <Base.Media value={this.getComponentState("videoUrl")} className={this.decorateCSS("video-player")} />
              )}
            </div>
          </Base.Overlay>
        )}
      </Base.Container>
    );
  }
}

export default HeroSection11;
