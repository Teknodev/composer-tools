import * as React from "react";
import styles from "./download1.module.scss";
import { BaseDownload } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type ButtonIcon = {
  icon: string;
};
class DownloadCard1 extends BaseDownload {
  constructor(props?: any) {
    super(props, styles);

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
        INPUTS.BUTTON("button", "Button", "PLAYSTORE", "", "ImAndroid", "Primary"),
        INPUTS.BUTTON("button", "Button", "APPSTORE", "", "GrApple", "Primary"),
        INPUTS.BUTTON("button", "Button", "WINDOWS", "", "FaWindows", "Primary")
      ],
    });
    this.addProp({
      type: "array",
      key: "buttonsIcons",
      displayer: "Button Icons ",
      value: [
        {
          type: "object",
          key: "buttonIcon",
          displayer: "Button Icon",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "ImAndroid",
            }
          ]
        },
        {
          type: "object",
          key: "buttonIcon",
          displayer: "Button Icon",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "GrApple",
            },
          ]
        },
        {
          type: "object",
          key: "buttonIcon",
          displayer: "Button Icon",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaWindows",
            },
          ]
        }
      ],
    });
  }

  getName(): string {
    return "Download-1";
  }

  render() {
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const buttonIcons = this.castToObject<ButtonIcon[]>("buttonsIcons");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");

    const titleExist = this.castToString(title);
    const descriptionExist = this.castToString(description);
    const line = this.getPropValue("line");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(titleExist || descriptionExist) && (
            <Base.VerticalContent className={this.decorateCSS("header")}>
              {titleExist && <Base.SectionTitle className={`${this.decorateCSS("title")} ${line && this.decorateCSS("line")}`}>{this.getPropValue("title")}</Base.SectionTitle>}
              {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")} </Base.SectionDescription>}
            </Base.VerticalContent>
          )}

          {buttons.length > 0 && (
            <div className={this.decorateCSS("box")}>
              {buttons.map((item: INPUTS.CastedButton, index: number) => {
                const buttonTitleExist = this.castToString(item.text);
                const iconExist = item.icon;
                const buttonExist = buttonTitleExist || iconExist;
                return (
                  buttonExist && (
                    <div className={this.decorateCSS("button-wrapper")}>
                      <ComposerLink key={`dw-1-btn-${index}`} path={item.url}>
                        <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                          <div className={this.decorateCSS("button-text")}>
                            {item.text}
                          </div>
                          <ComposerIcon
                            name={item.icon}
                            propsIcon={{
                              className: this.decorateCSS("icon"),
                            }}
                          />
                        </Base.Button>
                      </ComposerLink>
                    </div>
                  )
                );
              })}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default DownloadCard1;
