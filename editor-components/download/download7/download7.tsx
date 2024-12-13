import * as React from "react";
import styles from "./download7.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseDownload } from "../../EditorComponent";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";

type Button = {
  image: any;
  text: JSX.Element;
  link: string;
  icon: string;
};

class Download7 extends BaseDownload {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Background Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c353b0655f8002ca6e1ce?alt=media&timestamp=1734096206322",
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
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Button Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c358d0655f8002ca6e1e7?alt=media&timestamp=1734096287824",
            },
            {
              type: "string",
              key: "text",
              displayer: "Button Text",
              value: "Download for Android",
            },
            {
              type: "page",
              key: "link",
              displayer: "Button Link",
              value: "",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Button Icon",
              value: "FaAndroid",
            },
          ],
        },
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Button Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c35b40655f8002ca6e210?alt=media&timestamp=1734096327223",
            },
            {
              type: "string",
              key: "text",
              displayer: "Button Text",
              value: "Download for iOS",
            },
            {
              type: "page",
              key: "link",
              displayer: "Button Link",
              value: "",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Button Icon",
              value: "FaApple",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Download-7";
  }

  render() {
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const overlay = this.getPropValue("overlay");

    const titleExist = this.getPropValue("title", {
      as_string: true,
    });

    const descExist = this.getPropValue("description", { as_string: true });

    const buttons = this.castToObject<Button[]>("buttons");

    const alignmentValue = Base.getContentAlignment();

    const backgroundImage = this.getPropValue("image");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")} style={{ backgroundImage: `url(${this.getPropValue("image")})` }}>
            {overlay && backgroundImage && <div className={this.decorateCSS("overlay")}></div>}

            <Base.VerticalContent className={backgroundImage ? this.decorateCSS("content-container") : this.decorateCSS("content-container-no-image")}>
              {titleExist && <Base.SectionTitle className={!backgroundImage ? this.decorateCSS("title") : this.decorateCSS("title-no-image")}>{title}</Base.SectionTitle>}
              {descExist && <Base.SectionDescription className={!backgroundImage ? this.decorateCSS("description") : this.decorateCSS("description-no-image")}>{description}</Base.SectionDescription>}
              {buttons?.length > 0 && (
                <div className={backgroundImage ? this.decorateCSS("buttons-container-center") : alignmentValue === "left" ? this.decorateCSS("buttons-container") : alignmentValue === "center" ? this.decorateCSS("buttons-container-center") : ""}>
                  {buttons.map((button: Button, index: number) => {
                    const imageExist = button.image;
                    const buttonTextExist = this.castToString(button.text);
                    return !button.image
                      ? (buttonTextExist || button.icon) && (
                          <div className={this.decorateCSS("button-wrapper")} key={index}>
                            <ComposerLink path={button.link}>
                              <Base.Button className={this.decorateCSS("button")}>
                                {button.icon && (
                                  <ComposerIcon
                                    propsIcon={{
                                      className: this.decorateCSS("button-icon"),
                                    }}
                                    name={button.icon}
                                  />
                                )}
                                {buttonTextExist && <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>}
                              </Base.Button>
                            </ComposerLink>
                          </div>
                        )
                      : imageExist && (
                          <div className={this.decorateCSS("button-wrapper")} key={index}>
                            <ComposerLink path={button.link}>
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
