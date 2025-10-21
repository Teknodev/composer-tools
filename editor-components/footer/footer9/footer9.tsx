import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseFooter, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./footer9.module.scss";
import { Base } from "../../../composer-base-components/base/base";

import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type link = {
  title: string;
  page: string;
  tag: boolean;
};

type icon = {
  title: string;
  page: string;
  icon: TypeMediaInputValue;
};

type page = {
  title: string;
  page: string;
};

class Footer9Page extends BaseFooter {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "media",
      key: "logo",
      displayer: "Logo",
      additionalParams: {
        availableTypes: ["image"],
      },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676e80240655f8002cadb8be?alt=media",
      },
    });
    this.addProp({
      type: "page",
      key: "logoUrl",
      displayer: "Navigate To",
      value:""
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Join our newsletter to stay up to date on features and realases",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "During this phase to design is developed to meet the reuired technical standards",
    });

    this.addProp(INPUTS.BUTTON("button", "Button", "Subscribe", "", null, null, "Primary"));

    this.addProp({
      type: "array",
      key: "links",
      displayer: "Links",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Contact",
            },
            {
              type: "page",
              key: "page",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Blog",
            },
            {
              type: "page",
              key: "page",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Out Story",
            },
            {
              type: "page",
              key: "page",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Help centre",
            },
            {
              type: "page",
              key: "page",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Careers",
            },
            {
              type: "page",
              key: "page",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Changelong",
            },
            {
              type: "page",
              key: "page",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Community",
            },
            {
              type: "page",
              key: "page",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Guidelines",
            },
            {
              type: "page",
              key: "page",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "icons",
      displayer: "Icons",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Twitter",
            },
            {
              type: "page",
              key: "page",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "FaTwitter",
              },
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Instagram",
            },
            {
              type: "page",
              key: "page",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "FaInstagram",
              },
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Linkedin",
            },
            {
              type: "page",
              key: "page",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "FaLinkedin",
              },
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "string",
      key: "footerText",
      displayer: "Footer Text",
      value: "©2024 Blinkpage",
    });

    this.addProp({
      type: "array",
      key: "pages",
      displayer: "Policies",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Terms of Use",
            },
            {
              type: "page",
              key: "page",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Privacy Policy",
            },
            {
              type: "page",
              key: "page",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2", "animate3", "animate4", "animate5"]
      }
    });
  }
  static getName(): string {
    return "Footer 9";
  }

  render() {
    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

    const logo = this.getPropValue("logo");
    const logoUrl = this.getPropValue("logoUrl");
    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const buttonTextExist = this.castToString(button.text);
    const footerTextExist = this.castToString(this.getPropValue("footerText"));

    const links = this.castToObject<link[]>("links");
    const icons = this.castToObject<icon[]>("icons");
    const pages = this.castToObject<page[]>("pages");


    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("header")}>
            {logo?.url && 
            <ComposerLink path={logoUrl}>
              <Base.Media value={logo} className={this.decorateCSS("logo")} />
            </ComposerLink>
            }
            <div className={this.decorateCSS("content")}>
              {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
              {descriptionExist && <Base.P className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.P>}
              {buttonTextExist && (
                <ComposerLink path={button.url}>
                  <Base.Button className={this.decorateCSS("button")} buttonType={button.type}>{button.text}</Base.Button>
                </ComposerLink>
              )}
            </div>
          </div>

          {links.length > 0 && (
            <div className={this.decorateCSS("list-group")}>
              {links.map((item: link) => {
                return (
                  <ComposerLink path={item.page}>
                    <Base.P 
                      className={this.decorateCSS("text")}
                      data-animation={item.page ? this.getPropValue("hoverAnimation").join(" ") : ""}
                    >
                      {item.title}
                    </Base.P>
                  </ComposerLink>
                );
              })}
            </div>
          )}

          {icons.length > 0 && (
            <div className={this.decorateCSS("icon-container")}>
              {icons.map((item: icon) => {
                return (
                  <ComposerLink path={item.page}>
                    <div 
                      className={this.decorateCSS("icon-element")}
                      data-animation={item.page ? this.getPropValue("hoverAnimation").join(" ") : ""}
                    >
                      <Base.Media value={item.icon} className={this.decorateCSS("icon")} />
                      <Base.P className={this.decorateCSS("icon-text")}>{item.title}</Base.P>
                    </div>
                  </ComposerLink>
                );
              })}
            </div>
          )}
          <div className={this.decorateCSS("bottom")}>
            {footerTextExist && <Base.P className={this.decorateCSS("bottom-text")}>{this.getPropValue("footerText")}</Base.P>}
            {pages.length > 0 && (
              <Base.Row className={this.decorateCSS("list")}>
                {pages.map((item: page,) => {
                  return (
                    <ComposerLink path={item.page}>
                      <Base.P 
                        className={this.decorateCSS("item")}
                        data-animation={item.page ? this.getPropValue("hoverAnimation").join(" ") : ""}
                      >
                        {item.title}
                      </Base.P>
                    </ComposerLink>
                  );
                })}
              </Base.Row>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Footer9Page;
