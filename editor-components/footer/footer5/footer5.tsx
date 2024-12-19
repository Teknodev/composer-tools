import * as React from "react";
import { BaseFooter } from "../../EditorComponent";
import styles from "./footer5.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";

class Footer5Page extends BaseFooter {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Don't be weird",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Would you like more information or do you have a question?",
    });

    this.addProp({
      type: "string",
      key: "buttonText",
      displayer: "Button Text",
      value: "CONTACT US",
    });

    this.addProp({
      type: "page",
      key: "buttonLink",
      displayer: "Button Link",
      value: "",
    });

    this.addProp({
      type: "boolean",
      key: "line",
      displayer: "Line",
      value: true,
    });

    this.addProp({
      type: "array",
      key: "links",
      displayer: "Footer Links",
      value: [
        {
          type: "object",
          key: "content",
          displayer: "Content Elements",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Privacy Policy",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "content",
          displayer: "Content Elements",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Terms and Conditions",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "string",
      key: "footerDescription",
      displayer: "Footer Text",
      value: "2024 © Made with by Blinkpage.",
    });
  }

  getName(): string {
    return "Footer 5";
  }

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const buttonText = this.getPropValue("buttonText");
    const footerDescription = this.getPropValue("footerDescription");

    const subtitleExist = this.castToString(subtitle);
    const titleExist = this.castToString(title);
    const buttonTextExist = this.castToString(buttonText);
    const footerDescriptionExist = this.castToString(footerDescription);

    const headerExist = subtitleExist || titleExist || buttonTextExist;

    const links = this.castToObject<any[]>("links");

    const line = this.getPropValue("line");

    const alignmentValue = Base.getContentAlignment();

    const headerBottomClass = alignmentValue === "left" ? this.decorateCSS("header") : alignmentValue === "center" ? this.decorateCSS("header-center") : "";

    const textsExist = subtitleExist || titleExist;

    const bottomExist = links.length > 0 || footerDescriptionExist;

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {headerExist && (
            <Base.Container>
              <Base.MaxContent>
                <div className={headerBottomClass}>
                  {textsExist && (
                    <Base.VerticalContent className={buttonTextExist ? this.decorateCSS("left") : this.decorateCSS("left-full")}>
                      {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
                      {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                    </Base.VerticalContent>
                  )}
                  {buttonTextExist && (
                    <div className={this.decorateCSS("right")}>
                      {buttonTextExist && (
                        <ComposerLink path={this.getPropValue("buttonLink")}>
                          <Base.Button className={this.decorateCSS("button")}>{this.getPropValue("buttonText")}</Base.Button>
                        </ComposerLink>
                      )}
                    </div>
                  )}
                </div>
              </Base.MaxContent>
            </Base.Container>
          )}

          {line && <div className={this.decorateCSS("line")}></div>}

          {bottomExist && (
            <Base.Container>
              <Base.MaxContent>
                <div className={this.decorateCSS("bottom")}>
                  {links.length > 0 && (
                    <div className={this.decorateCSS("links")}>
                      {links.map((item: any, index: number) => {
                        const textExist = this.castToString(item.text);
                        return (
                          textExist && (
                            <div className={this.decorateCSS(item.url ? "link-element-has-path" : "link-element")}>
                              <ComposerLink key={index} path={item.url}>
                                <Base.P className={this.decorateCSS("link-text")}>{item.text}</Base.P>
                              </ComposerLink>
                            </div>
                          )
                        );
                      })}
                    </div>
                  )}

                  {footerDescriptionExist && <Base.P className={this.decorateCSS("footer-text")}>{this.getPropValue("footerDescription")}</Base.P>}
                </div>
              </Base.MaxContent>
            </Base.Container>
          )}
        </div>
      </div>
    );
  }
}

export default Footer5Page;
