import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseHeroSection } from "../../EditorComponent";
import styles from "./hero-section5.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class HeroSection5 extends BaseHeroSection {
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
      value: "Motivation",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "THE ART OF FOOD",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "PHOTOGRAPHY",
    });
    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });
    this.addProp({
      type: "media",
      key: "backgroundImage",
      displayer: "Media",
      additionalParams: {
        availableTypes: ["image", "video"],
      },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a765ee2f8a5b002ce6d6a7?alt=media",
      },
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "View More", "", null, null, "Tertiary")
      ],
    });
  }

  static getName(): string {
    return "Hero Section 5";
  }

  render() {
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const overlay = this.getPropValue("overlay");
    const backgroundImage = this.getPropValue("backgroundImage");
    const logo = this.getPropValue("logo");
    const isTitleExist = this.castToString(title);
    const isDescriptionExist = this.castToString(description);
    const isSubtitleExist = this.castToString(subtitle);

    const backgroundWithSettings = backgroundImage?.type === "video" ? {
      ...backgroundImage,
      settings: {
        autoplay: true,
        loop: true,
        muted: true,
        controls: false
      }
    } : backgroundImage;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div
            className={`${this.decorateCSS("background-layer")} ${backgroundImage && this.decorateCSS("with-image")
              }`}
          >
            {backgroundImage && (backgroundImage.type === "image" || backgroundImage.type === "video") && backgroundImage.url && (
              <Base.Media 
                value={backgroundWithSettings} 
                className={this.decorateCSS("background-image")}
              />
            )}
            {overlay && backgroundImage && (backgroundImage.type === "image" || backgroundImage.type === "video") && backgroundImage.url && <div className={this.decorateCSS("overlay")} />}
            <Base.VerticalContent className={this.decorateCSS("content")}>
              {logo && (
                <Base.Media 
                  value={logo} 
                  className={`${this.decorateCSS("logo")} ${logo?.type === "image" ? this.decorateCSS("logo-image") : this.decorateCSS("logo-icon")} ${backgroundImage?.url ? this.decorateCSS("with-background") : ""}`} 
                />
              )}
              {isSubtitleExist && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {subtitle}
                </Base.SectionSubTitle>
              )}
              {isTitleExist && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {title}
                </Base.SectionTitle>
              )}
              {isDescriptionExist && (
                <Base.SectionDescription className={this.decorateCSS("description")}>
                  {description}
                </Base.SectionDescription>
              )}
              {buttons.length > 0 && <div className={this.decorateCSS("button-container")}>
                {buttons.map((item: INPUTS.CastedButton, index: number) => {
                    const buttonTextExist = this.castToString(item.text);
                    const isTertiaryWithImage = item.type === "Tertiary" && backgroundImage?.url;
                    return buttonTextExist && (
                      <ComposerLink key={index} path={item.url}>
                        <Base.Button 
                          buttonType={item.type} 
                          className={`${this.decorateCSS("button")} ${isTertiaryWithImage ? this.decorateCSS("tertiary-with-image") : ""}`}
                        >
                          <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                        </Base.Button>
                      </ComposerLink>
                    );
                })}
              </div>}
            </Base.VerticalContent>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default HeroSection5;

