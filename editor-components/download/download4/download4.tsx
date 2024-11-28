import * as React from "react";
import styles from "./download4.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseDownload } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Button = {
  buttonText: JSX.Element;
  buttonIcon: string;
  url: string;
  buttonImage: string;
};

class Download4 extends BaseDownload {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Full Time",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Download app",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "It is a long established fact that a reader will ve distracted by the readabla content of a page when",
    });

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6748510e506a40002c2f0943?alt=media&timestamp=1732792647249",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        {
          type: "object",
          key: "button",
          displayer: "Displayer",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Download",
            },
            {
              type: "icon",
              key: "buttonIcon",
              displayer: "Button Icon",
              value: "FaApple",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
            {
              type: "image",
              key: "buttonImage",
              displayer: "Button Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/673f5276506a40002c2cf763?alt=media&timestamp=1732790517206",
            },
          ],
        },
        {
          type: "object",
          key: "button",
          displayer: "Displayer",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Download",
            },
            {
              type: "icon",
              key: "buttonIcon",
              displayer: "Button Icon",
              value: "FaGooglePlay",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
            {
              type: "image",
              key: "buttonImage",
              displayer: "Button Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/673f51e4506a40002c2cf6eb?alt=media&timestamp=1732790517206",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Download-4";
  }

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const image = this.getPropValue("image");

    const subtitleExist = this.castToString(subtitle);
    const titleExist = this.castToString(title);
    const descriptionExist = this.castToString(description);

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            <Base.VerticalContent className={this.decorateCSS("header")}>
              {subtitleExist && <Base.SectionSubTitle>{subtitle}</Base.SectionSubTitle>}
              {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
              {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>}
            </Base.VerticalContent>
            <div className={this.decorateCSS("buttons-container")}>
              {this.castToObject<Button[]>("buttons").map((item: Button, index: number) => {
                const buttonTextExist = this.castToString(item.buttonText);
                return (
                  <ComposerLink key={`dw-4-btn-${index}`} path={item.url}>
                    {item.buttonImage ? (
                      <div className={this.decorateCSS("image-container")}>
                        <img src={item.buttonImage} className={this.decorateCSS("image")} />
                      </div>
                    ) : (
                      (item.buttonIcon || buttonTextExist) && (
                        <div className={this.decorateCSS("button")}>
                          <Base.Button>
                            {item.buttonIcon && <ComposerIcon name={item.buttonIcon} propsIcon={{ className: this.decorateCSS("icon") }} />}
                            {buttonTextExist && item.buttonText && <Base.P className={this.decorateCSS("text")}>{item.buttonText}</Base.P>}
                          </Base.Button>
                        </div>
                      )
                    )}
                  </ComposerLink>
                );
              })}
            </div>
            {image && (
              <div className={this.decorateCSS("image-container")}>
                <img className={this.decorateCSS("image")} src={this.getPropValue("image")} />
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Download4;
