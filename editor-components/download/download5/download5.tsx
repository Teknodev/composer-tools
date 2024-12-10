import * as React from "react";
import styles from "./download5.module.scss";
import { BaseDownload } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";

class Download5 extends BaseDownload {
  constructor(props?: any) {
    super(props, styles);

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
      type: "image",
      key: "backgroundImage",
      displayer: "Background Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66bb0c0a3292c6002b23e266?alt=media",
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: false,
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Button",
      value: [
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "image",
              key: "buttonImage",
              displayer: "Button Image",
              value: "",
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Google Play",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Button Icon",
              value: "BsGooglePlay",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
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
              key: "buttonImage",
              displayer: "Button Image",
              value: "",
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "App Store",
            },

            {
              type: "icon",
              key: "icon",
              displayer: "Button Icon",
              value: "BsApple",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Download-5";
  }

  render() {
    const backgroundImage = this.getPropValue("backgroundImage");
    const overlay = this.getPropValue("overlay");

    const title = this.getPropValue("title");
    const titleExist = this.getPropValue("title", { as_string: true });

    const desc = this.getPropValue("description");
    const descExist = this.getPropValue("description", { as_string: true });

    const buttons = this.castToObject<any[]>("buttons");

    const alignmentValue = Base.getContentAlignment();

    const buttonContainerClass = alignmentValue === "left" ? this.decorateCSS("buttons-container") : alignmentValue === "center" ? this.decorateCSS("buttons-container-center") : null;

    return (
      <Base.Container className={this.decorateCSS("container")} style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={backgroundImage ? this.decorateCSS("page") : this.decorateCSS("page-no-image")}>
            <Base.VerticalContent className={this.decorateCSS("header")}>
              {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
              {descExist && <Base.SectionDescription className={this.decorateCSS("description")}>{desc}</Base.SectionDescription>}
            </Base.VerticalContent>

            {buttons.length > 0 && (
              <div className={buttonContainerClass}>
                {buttons.map((item: any, index: number) => {
                  const buttonTextExist = this.castToString(item?.buttonText);

                  return (
                    <div className={this.decorateCSS("button-wrapper")}>
                      <ComposerLink key={index} path={item.url}>
                        {item.buttonImage ? (
                          <div>
                            <img src={item.buttonImage} className={this.decorateCSS("button-image")} />
                          </div>
                        ) : (
                          (buttonTextExist || item.icon) && (
                            <Base.Button className={this.decorateCSS("button-element")}>
                              {item.icon && (
                                <ComposerIcon
                                  name={item.icon}
                                  propsIcon={{
                                    className: this.decorateCSS("icon"),
                                  }}
                                />
                              )}
                              {buttonTextExist && <Base.P className={this.decorateCSS("button-text")}>{item.buttonText}</Base.P>}
                            </Base.Button>
                          )
                        )}
                      </ComposerLink>
                    </div>
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
