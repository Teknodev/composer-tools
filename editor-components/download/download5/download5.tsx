import * as React from "react";
import styles from "./download5.module.scss";
import { BaseDownload } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

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

    const title = this.getPropValue("title");
    const titleExist = this.castToString(title);

    const desc = this.getPropValue("description");
    const descExist = this.castToString(desc);

    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

    const alignmentValue = Base.getContentAlignment();

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${!backgroundImage && this.decorateCSS("single")}`} style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none" }}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={`${this.decorateCSS("page")} ${!backgroundImage && this.decorateCSS("no-image")}`}>
            <Base.VerticalContent className={this.decorateCSS("header")}>
              {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
              {descExist && <Base.SectionDescription className={this.decorateCSS("description")}>{desc}</Base.SectionDescription>}
            </Base.VerticalContent>

            {buttons.length > 0 && (
              <div className={`${this.decorateCSS("buttons-container")} ${alignmentValue === "center" && this.decorateCSS("center")}`}>
                {buttons.map((item: INPUTS.CastedButton, index: number) => {
                  const buttonTextExist = this.castToString(item?.text);
                  return (
                    (item.image || item.icon || buttonTextExist) && (
                      <div className={this.decorateCSS("button-wrapper")}>
                        <ComposerLink key={index} path={item.url}>
                          {item.image ? (

                            <img src={item.image} className={this.decorateCSS("button-image")} />

                          ) : (
                            (buttonTextExist || item.icon) && (
                              <Base.Button buttonType={item.type} className={this.decorateCSS("button-element")}>
                                {item.icon && (
                                  <ComposerIcon
                                    name={item.icon}
                                    propsIcon={{
                                      className: this.decorateCSS("icon"),
                                    }}
                                  />
                                )}
                                {buttonTextExist && <div className={this.decorateCSS("button-text")}>{item.text}</div>}
                              </Base.Button>
                            )
                          )}
                        </ComposerLink>
                      </div>
                    )
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
