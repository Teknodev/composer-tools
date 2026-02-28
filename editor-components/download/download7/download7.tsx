import styles from "./download7.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseDownload, TypeMediaInputValue } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Background = {
  media: TypeMediaInputValue;
  overlay: boolean;
};

class Download7 extends BaseDownload {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "object",
      key: "media",
      displayer: "Media",
      value: [
        {
          type: "media",
          key: "media",
          displayer: "Media",
          additionalParams: {
            availableTypes: ["image", "video"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a3651b2f8a5b002ce69dbd?alt=media",
          },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: true,
        },
      ],
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Let's start now!",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "DO IT NOW",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Join millions of users worldwide on Dash, where the power of social networking lies in your hands.",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Download for IOS", "", "FaApple", "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/68e79205ffd791002b7e7482?alt=media", "Primary"),
        INPUTS.BUTTON("button", "Button", "Download for Android", "", "IoLogoAndroid", "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/673f51e4506a40002c2cf6eb?alt=media&timestamp=1732203035257", "Primary"),
      ],
    });
  }

  static getName(): string {
    return "Download 7";
  }

  render() {
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const background = this.castToObject<Background>("media");
    const backgroundImage = background?.media;
    const overlay = background?.overlay;
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.Media value={backgroundImage} className={this.decorateCSS("background-image")} />
        <Base.MaxContent className={`${this.decorateCSS("max-content")} ${backgroundImage && this.decorateCSS("has-image")}`}>
          {overlay && backgroundImage && <div className={this.decorateCSS("overlay")}></div>}
          <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
            {subtitle && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
            {title && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
            {description && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
            {buttons?.length > 0 && (
              <Base.Row className={this.decorateCSS("buttons-container")}>
                {buttons.map((item: INPUTS.CastedButton, index: number) => {
                  const buttonTextExist = this.castToString(item?.text);
                  const iconExist = item.icon && item.icon.name;
                  const imageExist = item.image && item.image.url;
                  return (buttonTextExist || iconExist || imageExist) && (
                    <ComposerLink key={index} path={item.url}>
                      {imageExist ? (
                        <Base.Media value={item.image} className={this.decorateCSS("button-image")} />
                      ) : (
                        <Base.Button buttonType={item.type} className={this.decorateCSS("button-element")}>
                          {buttonTextExist && <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>}
                          {iconExist && (<Base.Media value={item.icon} className={this.decorateCSS("button-icon")} />)}
                        </Base.Button>
                      )}
                    </ComposerLink>
                  );
                })}
              </Base.Row>
            )}
          </Base.VerticalContent >
        </Base.MaxContent >
      </Base.Container >
    );
  }
}

export default Download7;