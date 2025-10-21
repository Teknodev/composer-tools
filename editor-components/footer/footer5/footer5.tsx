import * as React from "react";
import { BaseFooter } from "../../EditorComponent";
import styles from "./footer5.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

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

    this.addProp(INPUTS.BUTTON("button", "Button", "CONTACT US", "", null, null, "Primary"));

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
              displayer: "Navigate To",
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
              displayer: "Navigate To",
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

    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2", "animate3"]
      }
    });
  }

  static getName(): string {
    return "Footer 5";
  }

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const footerDescription = this.getPropValue("footerDescription");

    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

    const subtitleExist = this.castToString(subtitle);
    const titleExist = this.castToString(title);
    const footerDescriptionExist = this.castToString(footerDescription);

    const headerExist = subtitleExist || titleExist || this.castToString(button.text);

    const links = this.castToObject<any[]>("links");

    const line = this.getPropValue("line");

    const alignmentValue = Base.getContentAlignment();

    const textsExist = subtitleExist || titleExist;

    const bottomExist = links.length > 0 || footerDescriptionExist;


    const alignment = Base.getContentAlignment();

    return (
      <div className={this.decorateCSS("container")}>
        {headerExist && (
          <Base.Container className={this.decorateCSS("first-container")}>
            <Base.MaxContent className={this.decorateCSS("first-max-content")}>
              <div className={`${this.decorateCSS("header")} ${alignmentValue === "center" && this.decorateCSS("center")}`}>
                {textsExist && (
                  <Base.VerticalContent
                    className={`${this.decorateCSS("left")} ${!this.castToString(button.text) && this.decorateCSS("left-full")}`}>
                    {subtitleExist && <div className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</div>}
                    {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                  </Base.VerticalContent>
                )}
                {this.castToString(button.text) && (
                  <div className={this.decorateCSS("right")}>
                    <ComposerLink path={button.url}>
                      <Base.Button buttonType={button.type}
                        className={this.decorateCSS("button")}>{button.text}
                      </Base.Button>
                    </ComposerLink>
                  </div>
                )}
              </div>
            </Base.MaxContent>
          </Base.Container>
        )}

        {line && <div className={this.decorateCSS("line")}></div>}

        {bottomExist && (
          <Base.Container className={this.decorateCSS("second-container")}>
            <Base.MaxContent className={this.decorateCSS("second-max-content")}>
              <div className={this.decorateCSS("bottom")}>
                {links.length > 0 && (
                  <div className={`${this.decorateCSS("links")}  
                  ${alignment === "center" && this.decorateCSS("center")}`}>
                    {links.map((item: any, index: number) => {
                      const textExist = this.castToString(item.text);
                      return (
                        textExist && (
                          <div
                            className={`${this.decorateCSS("link-element")} ${item.url && this.decorateCSS("has-path")}`}>
                            <ComposerLink key={index} path={item.url}>
                              <Base.P 
                                className={this.decorateCSS("link-text")}
                                data-animation={item.url ? this.getPropValue("hoverAnimation").join(" ") : ""}
                              >
                                {item.text}
                              </Base.P>
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
    );
  }
}

export default Footer5Page;
