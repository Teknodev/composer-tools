import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseFooter } from "../../EditorComponent";
import styles from "./footer9.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type link = {
  title: string;
  page: string;
  tag: boolean;
};

type icon = {
  title: string;
  page: string;
  icon: string;
};

type page = {
  title: string;
  page: string;
};

class Footer9Page extends BaseFooter {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "logo",
      displayer: "Logo",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676e80240655f8002cadb8be?alt=media",
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
              displayer: "Link",
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
              displayer: "Link",
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
              displayer: "Link",
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
              displayer: "Link",
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
              displayer: "Link",
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
              displayer: "Link",
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
              displayer: "Link",
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
              displayer: "Link",
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
              displayer: "Link",
              value: "",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaTwitter",
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
              displayer: "Link",
              value: "",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaInstagram",
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
              displayer: "Link",
              value: "",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaLinkedin",
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
              displayer: "Link",
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
              displayer: "Link",
              value: "",
            },
          ],
        },
      ],
    });
  }
  static getName(): string {
    return "Footer 9";
  }

  render() {
    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

    const logo = this.getPropValue("logo");
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
            {logo && <img src={logo} alt="" className={this.decorateCSS("logo")} />}
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
                    <Base.P className={this.decorateCSS("text")}>{item.title}</Base.P>
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
                    <div className={this.decorateCSS("icon-element")}>
                      <ComposerIcon propsIcon={{ className: this.decorateCSS("icon") }} name={item.icon} />
                      <Base.P className={this.decorateCSS("text")}>{item.title}</Base.P>
                    </div>
                  </ComposerLink>
                );
              })}
            </div>
          )}
          <div className={this.decorateCSS("bottom")}>
            {footerTextExist && <Base.P className={this.decorateCSS("text")}>{this.getPropValue("footerText")}</Base.P>}
            {pages.length > 0 && (
              <Base.Row className={this.decorateCSS("list")}>
                {pages.map((item: page,) => {
                  return (
                    <ComposerLink path={item.page}>
                      <Base.P className={this.decorateCSS("item")}>{item.title}</Base.P>
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
