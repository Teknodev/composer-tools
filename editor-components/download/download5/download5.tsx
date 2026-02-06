import styles from "./download5.module.scss";
import { BaseDownload } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class Download5 extends BaseDownload {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "media",
      key: "backgroundImage",
      displayer: "Background Media",
      additionalParams: {
        availableTypes: ["image", "video"],
      },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66bb0c0a3292c6002b23e266?alt=media",
      },
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: false,
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
      value: "Available On All App Store",
      displayer: "Title",
    });

    this.addProp({
      type: "string",
      key: "description",
      value: "Download now & enjoy app with unlimited features",
      displayer: "Description",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Button",
      value: [
        INPUTS.BUTTON("button", "Button", "Google Play", "", "BsGooglePlay", "", "Primary"),
        INPUTS.BUTTON("button", "Button", "App Store", "", "BsApple", "", "Primary"),
      ],
    });
  }

  static getName(): string {
    return "Download 5";
  }

  render() {
    const backgroundImage = this.getPropValue("backgroundImage");
    const overlay = this.getPropValue("overlay");
    const subtitle = this.getPropValue("subtitle");
    const subtitleExist = this.castToString(subtitle);
    const title = this.getPropValue("title");
    const titleExist = this.castToString(title);

    const desc = this.getPropValue("description");
    const descExist = this.castToString(desc);

    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

    const alignmentValue = Base.getContentAlignment();

    const backgroundImageUrl = backgroundImage && backgroundImage.url ? backgroundImage.url : null;

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${!backgroundImageUrl && this.decorateCSS("single")}`}>
        <Base.Media value={backgroundImage} className={this.decorateCSS("background-image")} />
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={`${this.decorateCSS("page")} ${!backgroundImageUrl && this.decorateCSS("no-image")} ${backgroundImageUrl && alignmentValue === "center" ? this.decorateCSS("image-center") : ""}`}>
            {(subtitleExist || titleExist || descExist) &&
              <Base.VerticalContent className={this.decorateCSS("header")}>
                {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
                {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
                {descExist && <Base.SectionDescription className={this.decorateCSS("description")}>{desc}</Base.SectionDescription>}
              </Base.VerticalContent>}

            {buttons.length > 0 && (
              <div className={`${this.decorateCSS("buttons-container")} ${alignmentValue === "center" && this.decorateCSS("center")}`}>
                {buttons.map((item: INPUTS.CastedButton, index: number) => {
                  const buttonTextExist = this.castToString(item?.text);
                  const iconExist = item.icon && (item.icon)?.name;
                  const imageExist = item.image && (item.image)?.url;
                  const buttonExist = buttonTextExist || iconExist || imageExist;
                  return buttonExist && (
                    <ComposerLink key={index} path={item.url}>
                      {imageExist ? (
                        <Base.Media value={item.image} className={this.decorateCSS("button-image")} />
                      ) : (
                        <Base.Button buttonType={item.type} className={this.decorateCSS("button-element")}>
                          {iconExist && (
                            <Base.Media
                              value={item.icon}
                              className={this.decorateCSS("icon")}
                            />
                          )}
                          {buttonTextExist && <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>}
                        </Base.Button>
                      )}
                    </ComposerLink>
                  );
                })}
              </div>
            )}
          </div>
        </Base.MaxContent>
        {overlay && <div className={this.decorateCSS("overlay")} />}
      </Base.Container>
    );
  }
}

export default Download5;
