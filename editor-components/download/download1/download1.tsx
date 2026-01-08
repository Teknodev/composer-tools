import * as React from "react";
import styles from "./download1.module.scss";
import { BaseDownload } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
class Download1 extends BaseDownload {
  constructor(props?: any) {
    super(props, styles);

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
      value: "Download Now!",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Eleifend morbi velit porttitor sed ipsum imperdiet ac ullamcorper fusce.",
    });

    this.addProp({
      type: "boolean",
      key: "line",
      displayer: "Enable Line",
      value: true,
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Button ",
      value: [
        INPUTS.BUTTON("button", "Button", "PLAYSTORE", "", "ImAndroid", "", "Primary"),
        INPUTS.BUTTON("button", "Button", "APPSTORE", "", "GrApple", "", "Primary"),
        INPUTS.BUTTON("button", "Button", "WINDOWS", "", "FaWindows", "", "Primary")
      ],
    });
  }

  static getName(): string {
    return "Download 1";
  }

  render() {
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const subtitle = this.getPropValue("subtitle");

    const titleExist = this.castToString(title);
    const descriptionExist = this.castToString(description);
    const subtitleExist = this.castToString(subtitle);
    const line = this.getPropValue("line");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(titleExist || subtitleExist || descriptionExist) && (
            <Base.VerticalContent className={this.decorateCSS("header")}>
              {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
              {titleExist && <Base.SectionTitle className={`${this.decorateCSS("title")}`}>{this.getPropValue("title")}</Base.SectionTitle>}
              {line && <div className={this.decorateCSS("title-line")}></div>}
              {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")} </Base.SectionDescription>}
            </Base.VerticalContent>
          )}

          {buttons.length > 0 && (
            <div className={this.decorateCSS("box")}>
              {buttons.map((item: INPUTS.CastedButton, index: number) => {
                const buttonTitleExist = this.castToString(item.text);
                const iconExist = item.icon && item.icon.name;
                const imageExist = item.image && item.image.url;
                const buttonExist = buttonTitleExist || iconExist || imageExist;
                return buttonExist && (
                  <div className={this.decorateCSS("button-wrapper")}>
                    <ComposerLink key={`dw-1-btn-${index}`} path={item.url}>
                      {imageExist ? (
                        <div className={this.decorateCSS("image-container")}>
                          <Base.Media value={item.image} className={this.decorateCSS("image")} />
                        </div>
                      ) : (
                        <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                          {buttonTitleExist && (
                            <Base.P className={this.decorateCSS("button-text")}>
                              {item.text}
                            </Base.P>
                          )}
                          {iconExist && (
                            <Base.Media
                              value={item.icon}
                              className={this.decorateCSS("icon")}
                            />
                          )}
                        </Base.Button>
                      )}
                    </ComposerLink>
                  </div>
                );
              })}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Download1;
