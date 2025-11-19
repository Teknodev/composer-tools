import { BaseIntroSection, TypeMediaInputValue, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./intro-section5.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class IntroSection5 extends BaseIntroSection {
  constructor(props?: any) {
    super(props, styles);

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
      value: "Bring Your Ideas to Life",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Nanotechnology immersion along the information highway will close the loop on focusing solely.",
    });

    this.addProp({
      type: "media",
      key: "backgroundImage",
      displayer: "Background Image",
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/691db9e13596a1002b2b69de?alt=media",
      } as TypeMediaInputValue,
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });

    const ButtonProp = INPUTS.BUTTON(
      "Button",
      "Button",
      "",
      "",
      "FaArrowDown",
      null,
      "Link"
    );

    if (Array.isArray(ButtonProp.value)) {
      ButtonProp.value.push({
        type: "boolean",
        key: "enableAnimation",
        displayer: "Button Animation",
        value: true
      } as TypeUsableComponentProps);
    }

    this.addProp({
      type: "array",
      key: "Buttons",
      displayer: "Buttons",
      max: 10,
      value: [ButtonProp],
    });
  }

  static getName(): string {
    return "Intro Section 5";
  }

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");

    const subtitleExist = this.castToString(subtitle);
    const titleExist = this.castToString(title);
    const descriptionExist = this.castToString(description);

    const bgImage = this.getPropValue("backgroundImage") as TypeMediaInputValue;
    const hasOverlay = this.getPropValue("overlay");

    const Buttons = this.castToObject<any[]>("Buttons");
    const Button = Buttons && Buttons.length > 0 ? Buttons[0] : null;

    const bgUrl = (bgImage && bgImage.type === "image") ? bgImage.url : "";
    const hasBgImage = !!bgUrl;

    const enableAnimation = Button?.enableAnimation;

    const hasIcon = Button && Button.icon && Button.icon.name;
    const hasText = Button && this.castToString(Button.text);

    const hasButtonData = !!Button && (hasIcon || hasText);

    return (
      <Base.Container
        className={`${this.decorateCSS("container")} ${
          hasBgImage ? this.decorateCSS("image-active") : ""
        } ${hasOverlay && hasBgImage ? this.decorateCSS("overlay-active") : ""}`}
      >
        {hasBgImage && (
          <Base.Media 
            value={bgImage} 
            className={this.decorateCSS("background-image")} 
          />
        )}

        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(subtitleExist || titleExist || descriptionExist) && (
            <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
              {subtitleExist && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {subtitle}
                </Base.SectionSubTitle>
              )}

              {titleExist && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {title}
                </Base.SectionTitle>
              )}

              {descriptionExist && (
                <Base.SectionDescription className={this.decorateCSS("description")}>
                  {description}
                </Base.SectionDescription>
              )}
            </Base.VerticalContent>
          )}
        </Base.MaxContent>

        {hasButtonData && (
          <div
            className={`${this.decorateCSS("scroll-indicator")} ${
              enableAnimation ? this.decorateCSS("has-animation") : ""
            }`}
          >
            <ComposerLink path={Button.url}>
              <Base.Button
                buttonType={Button.type || "Link"}
                className={this.decorateCSS("btn")}
              >
                {hasText && Button.text}
                {hasIcon && (
                  <Base.Media value={Button.icon} className={this.decorateCSS("icon")} />
                )}
              </Base.Button>
            </ComposerLink>
          </div>
        )}
      </Base.Container>
    );
  }
}

export default IntroSection5;