import * as React from "react";
import styles from "./download7.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseDownload } from "../../EditorComponent";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class Download7 extends BaseDownload {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Background Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a3651b2f8a5b002ce69dbd?alt=media",
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
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
        INPUTS.BUTTON("button", "Button", "Download for Android", "", "FaAndroid", "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67586eb80655f8002ca57e58?alt=media", "Primary"),
        INPUTS.BUTTON("button", "Button", "Download for iOS", "", "FaApple", "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6759e80e0655f8002ca61199?alt=media", "Primary"),
      ],
    });
  }

  static getName(): string {
    return "Download  7";
  }

  render() {
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const overlay = this.getPropValue("overlay");

    const titleExist = this.getPropValue("title", {
      as_string: true,
    });

    const descExist = this.getPropValue("description", { as_string: true });

    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

    const alignmentValue = Base.getContentAlignment();

    const backgroundImage = this.getPropValue("image");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")} style={{ backgroundImage: `url(${this.getPropValue("image")})` }}>
            {overlay && backgroundImage && <div className={this.decorateCSS("overlay")}></div>}

            <Base.VerticalContent className={`${this.decorateCSS("content-container")} ${backgroundImage && this.decorateCSS("image")}`}>
              {titleExist && <Base.SectionTitle className={`${this.decorateCSS("title")} ${backgroundImage && this.decorateCSS("image")}`}>{title}</Base.SectionTitle>}
              {descExist && <Base.SectionDescription className={`${this.decorateCSS("description")} ${backgroundImage && this.decorateCSS("image")}`}>{description}</Base.SectionDescription>}
              {buttons?.length > 0 && (
                <div className={`${this.decorateCSS("buttons-container")} ${(backgroundImage || (!backgroundImage && alignmentValue === "center")) && this.decorateCSS("center")}`}>
                  {buttons.map((button: INPUTS.CastedButton, index: number) => {
                    const imageExist = button.image;
                    const buttonTextExist = this.castToString(button.text);
                    return !button.image
                      ? (buttonTextExist || button.icon) && (
                        <div className={this.decorateCSS("button-wrapper")} key={index}>
                          <ComposerLink path={button.url}>
                            <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                              {button.icon && (
                                <ComposerIcon
                                  propsIcon={{
                                    className: this.decorateCSS("button-icon"),
                                  }}
                                  name={button.icon}
                                />
                              )}
                              {buttonTextExist && <div className={this.decorateCSS("button-text")}>{button.text}</div>}
                            </Base.Button>
                          </ComposerLink>
                        </div>
                      )
                      : imageExist && (
                        <div className={this.decorateCSS("button-wrapper")} key={index}>
                          <ComposerLink path={button.url}>
                            <img src={button.image} className={this.decorateCSS("button-image")} />
                          </ComposerLink>
                        </div>
                      );
                  })}
                </div>
              )}
            </Base.VerticalContent>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Download7;
