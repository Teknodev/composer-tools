import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BaseHeroSection, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./hero-section6.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type Animations = {
  title: boolean;
  secondTitle: boolean;
  description: boolean;
  secondMedia: boolean;
  button: boolean;
};

class HeroSection6 extends BaseHeroSection {
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
      value: "Envision",
    });

    this.addProp({
      type: "string",
      key: "secondTitle",
      displayer: "Second Title",
      value: "Brand 2020",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Carefully crafted with unique layouts you can easily create websites.",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      additionalParams: {
        maxElementCount: 2,
      },
      value: [
        INPUTS.BUTTON("button", "Button", "Explore", "", null, null, "Black")
      ],
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
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617f52bd2970002c624523?alt=media&timestamp=1719483639150",
      },
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: false,
    });

    this.addProp({
      type: "media",
      key: "secondMedia",
      displayer: "Second Media",
      additionalParams: {
        availableTypes: ["image", "video"],
      },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617f52bd2970002c624524?alt=media&timestamp=1719483639150",
      },
    });

    this.addProp({
      type: "object",
      key: "animations",
      displayer: "Animations",
      value: [
        {
          type: "boolean",
          key: "title",
          displayer: "Title Animation",
          value: true,
        },
        {
          type: "boolean",
          key: "secondTitle",
          displayer: "Second Title Animation",
          value: true,
        },
        {
          type: "boolean",
          key: "description",
          displayer: "Description Animation",
          value: true,
        },
        {
          type: "boolean",
          key: "secondMedia",
          displayer: "Second Media Animation",
          value: true,
        },
        {
          type: "boolean",
          key: "button",
          displayer: "Button Animation",
          value: true,
        },
      ],
    });
  }

  static getName(): string {
    return "Hero Section 6";
  }

  withVideoSettings(media: TypeMediaInputValue) {
    return media?.type === "video"
      ? { ...media, settings: { autoplay: true, loop: true, muted: true, controls: false } }
      : media;
  }

  render() {
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const title = this.getPropValue("title");
    const secondTitle = this.getPropValue("secondTitle");
    const description = this.getPropValue("description");
    const animations = this.castToObject<Animations>("animations");
    const media = this.getPropValue("media");
    const secondMedia = this.getPropValue("secondMedia");
    const logo = this.getPropValue("logo");
    const subtitle = this.getPropValue("subtitle");
    const isTitleExist = this.castToString(title);
    const isSecondTitleExist = this.castToString(secondTitle);
    const isDescriptionExist = this.castToString(description);
    const isSubtitleExist = this.castToString(subtitle);
    const hasLogo = !!(logo?.url || logo?.name);
    const hasMedia = !!media?.url;
    const hasSecondMedia = !!secondMedia?.url;
    const hasButtons = buttons.some((item: INPUTS.CastedButton) => this.castToString(item.text));

    const showLeftContent =
      hasLogo ||
      isSubtitleExist ||
      isTitleExist ||
      isSecondTitleExist ||
      isDescriptionExist ||
      hasButtons;
    const hasImages = hasMedia || hasSecondMedia;
    const alignment = Base.getContentAlignment();

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${alignment === "center" ? this.decorateCSS("center-alignment") : ""}`}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {showLeftContent && (
            <Base.VerticalContent className={`${this.decorateCSS("left-content")} ${!hasImages ? this.decorateCSS("without-images") : ""}`}>
              {hasLogo && (
                <div className={this.decorateCSS("logo-container")}>
                  <Base.Media
                    value={logo}
                    className={`${this.decorateCSS("logo")} ${logo?.type === "image" ? this.decorateCSS("logo-image") : this.decorateCSS("logo-icon")}`}
                  />
                </div>
              )}
              {isSubtitleExist && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {subtitle}
                </Base.SectionSubTitle>
              )}
              {(isTitleExist || isSecondTitleExist) && (
                <div className={this.decorateCSS("title-container")}>
                  {isTitleExist && (
                    <Base.SectionTitle className={`${this.decorateCSS("title")} ${!animations?.title ? this.decorateCSS("noanimation") : ""}`}>
                      {title}
                    </Base.SectionTitle>
                  )}
                  {isSecondTitleExist && (
                    <Base.H3 className={`${this.decorateCSS("title2")} ${!animations?.secondTitle ? this.decorateCSS("noanimation") : ""}`}>
                      {secondTitle}
                    </Base.H3>
                  )}
                </div>
              )}
              {isDescriptionExist && (
                <Base.SectionDescription className={`${this.decorateCSS("description")} ${!animations?.description ? this.decorateCSS("noanimation") : ""}`}>
                  {description}
                </Base.SectionDescription>
              )}
              {hasButtons && (
                <div className={this.decorateCSS("button-container")}>
                  {buttons.map((item: INPUTS.CastedButton, indexButtons: number) => this.castToString(item.text) && (
                    <ComposerLink path={item.url} key={indexButtons}>
                      <Base.Button buttonType={item.type}
                        className={`${this.decorateCSS("button")} ${!animations?.button ? this.decorateCSS("noanimation") : ""}`}
                      >
                        <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                      </Base.Button>
                    </ComposerLink>
                  ))}
                </div>
              )}
            </Base.VerticalContent>
          )}
          {hasImages && (
            <div className={this.decorateCSS("right-content")}>
              {hasMedia && (
                <div className={this.decorateCSS("image1-wrapper")}>
                  <Base.Media
                    value={this.withVideoSettings(media)}
                    className={this.decorateCSS("image1")}
                  />
                  {this.getPropValue("overlay") && (
                    <div className={this.decorateCSS("overlay")} />
                  )}
                </div>
              )}
              {hasSecondMedia && (
                <Base.Media
                  value={this.withVideoSettings(secondMedia)}
                  className={`${this.decorateCSS("image2")} ${!animations?.secondMedia ? this.decorateCSS("noanimation") : ""} ${!hasMedia ? this.decorateCSS("without-image1") : ""}`}
                />
              )}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default HeroSection6;
