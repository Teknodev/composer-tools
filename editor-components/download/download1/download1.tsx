import * as React from "react";
import styles from "./download1.module.scss";
import { BaseDownload } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";

type Button = {
  buttonText: string;
  url: string;
  isPrimary: boolean;
  buttonIcon: string;
};
class DownloadCard1 extends BaseDownload {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "DON'T WASTE TIME,",
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
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "PLAYSTORE",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
            {
              type: "icon",
              key: "buttonIcon",
              displayer: "In Button Icon",
              value: "ImAndroid",
            },
          ],
        },
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "APPSTORE",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
            {
              type: "icon",
              key: "buttonIcon",
              displayer: "In Button Icon",
              value: "GrApple",
            },
          ],
        },
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "WINDOWS",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
            {
              type: "icon",
              key: "buttonIcon",
              displayer: "In Button Icon",
              value: "FaWindows",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Download-1";
  }

  render() {
    const title = this.getPropValue("title");
    const subtitle = this.getPropValue("subtitle");
    const description = this.getPropValue("description");

    const titleExist = this.castToString(title);
    const subtitleExist = this.castToString(subtitle);
    const descriptionExist = this.castToString(description);
    const line = this.getPropValue("line");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("header")}>
            {titleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
            {subtitleExist && <Base.SectionTitle className={line ? this.decorateCSS("title") : this.decorateCSS("disable-line-title")}>{this.getPropValue("title")}</Base.SectionTitle>}
            {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")} </Base.SectionDescription>}
          </Base.VerticalContent>

          <div className={this.decorateCSS("box")}>
            {this.castToObject<Button[]>("buttons").map((item: Button, index: number) => {
              return (
                <div className={this.decorateCSS("button-wrapper")}>
                  <ComposerLink key={`dw-1-btn-${index}`} path={item.url}>
                    <Base.Button className={`${this.decorateCSS("button")} ${item.isPrimary && this.decorateCSS("button-color")}`}>
                      <ComposerIcon
                        name={item.buttonIcon}
                        propsIcon={{
                          className: this.decorateCSS("icon"),
                        }}
                      />
                      {item.buttonText}
                    </Base.Button>
                  </ComposerLink>
                </div>
              );
            })}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default DownloadCard1;
