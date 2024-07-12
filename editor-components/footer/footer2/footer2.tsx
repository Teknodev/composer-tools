import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseFooter } from "../../EditorComponent";
import styles from "./footer2.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type IconsValues = {
  socialIcon: string;
  socialLink: string;
};

type FooterValues = {
  footerTitle: string;
  footerText: FooterTextValues[];
};

type FooterTextValues = {
  footerText: string;
  path: string;
};

class Footer2Page extends BaseFooter {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "image",
      key: "logo",
      displayer: "Logo",
      value: "https://dstal.com.au/wp-content/uploads/2021/09/logoipsum.png",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Contact Us: Get in touch with us for customer support, sales inquiries, and more.",
    });
    this.addProp({
      type: "string",
      key: "footerDescription",
      displayer: "Footer Text",
      value: "Copyright © 2023 All rights reserved.",
    });

    this.addProp({
      type: "array",
      key: "social",
      displayer: "Social",
      value: [
        {
          type: "object",
          key: "footer-social",
          displayer: "Item",
          value: [
            {
              type: "icon",
              key: "socialIcon",
              displayer: "Social Icon",
              value: "FaInstagram",
            },
            {
              type: "page",
              key: "socialLink",
              displayer: "Social Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "footer-social",
          displayer: "Item",
          value: [
            {
              type: "icon",
              key: "socialIcon",
              displayer: "Social Icon",
              value: "FaFacebook",
            },
            {
              type: "page",
              key: "socialLink",
              displayer: "Social Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "footer-social",
          displayer: "Item",
          value: [
            {
              type: "icon",
              key: "socialIcon",
              displayer: "Social Icon",
              value: "FaTwitter",
            },
            {
              type: "page",
              key: "socialLink",
              displayer: "Social Link",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "footer",
      displayer: "Footer",
      value: [
        {
          type: "object",
          key: "footer-title",
          displayer: "Footer Column",
          value: [
            {
              type: "string",
              key: "footerTitle",
              displayer: "Footer Title",
              value: "Menu",
            },
            {
              type: "array",
              key: "footerText",
              displayer: "Footer Text",
              value: [
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "footerText",
                      displayer: "Text",
                      value: "Products",
                    },
                    {
                      type: "page",
                      displayer: "Path",
                      key: "path",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "footerText",
                      displayer: "Text",
                      value: "Create Website",
                    },
                    {
                      type: "page",
                      key: "path",
                      displayer: "Path",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "footerText",
                      displayer: "Text",
                      value: "Secure Cloud Hosting",
                    },
                    {
                      type: "page",
                      key: "path",
                      displayer: "Path",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "footerText",
                      displayer: "Text",
                      value: "Engage Your Audince",
                    },
                    {
                      type: "page",
                      key: "path",
                      displayer: "Path",
                      value: "",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "footer-title",
          displayer: "Footer Column",
          value: [
            {
              type: "string",
              key: "footerTitle",
              displayer: "Footer Title",
              value: "Company",
            },
            {
              type: "array",
              key: "footerText",
              displayer: "Footer Text",
              value: [
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "footerText",
                      displayer: "Text",
                      value: "About",
                    },
                    {
                      type: "page",
                      displayer: "Path",
                      key: "path",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "footerText",
                      displayer: "Text",
                      value: "Careers",
                    },
                    {
                      type: "page",
                      key: "path",
                      displayer: "Path",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "footerText",
                      displayer: "Text",
                      value: "Support",
                    },
                    {
                      type: "page",
                      key: "path",
                      displayer: "Path",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "footerText",
                      displayer: "Text",
                      value: "Pricing",
                    },
                    {
                      type: "page",
                      key: "path",
                      displayer: "Path",
                      value: "",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "footer-title",
          displayer: "Footer Column",
          value: [
            {
              type: "string",
              key: "footerTitle",
              displayer: "Footer Title",
              value: "Resources",
            },
            {
              type: "array",
              key: "footerText",
              displayer: "Footer Text",
              value: [
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "footerText",
                      displayer: "Text",
                      value: "Blog",
                    },
                    {
                      type: "page",
                      displayer: "Path",
                      key: "path",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "footerText",
                      displayer: "Text",
                      value: "Ebooks",
                    },
                    {
                      type: "page",
                      key: "path",
                      displayer: "Path",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "footerText",
                      displayer: "Text",
                      value: "Whitepapers",
                    },
                    {
                      type: "page",
                      key: "path",
                      displayer: "Path",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "footer-text",
                  displayer: "Text Values",
                  value: [
                    {
                      type: "string",
                      key: "footerText",
                      displayer: "Text",
                      value: "Website Grader",
                    },
                    {
                      type: "page",
                      key: "path",
                      displayer: "Path",
                      value: "",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Footer 2";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("footer-page")}>
            <div className={this.decorateCSS("subscribe")}>
              <img
                src={this.getPropValue("logo")}
                width={200}
                height={100}
                alt=""
              />
              <p className={this.decorateCSS("description")}>
                {this.getPropValue("description")}
              </p>
              <div className={this.decorateCSS("social")}>
                {this.castToObject<any[]>("social").map(
                  (item: IconsValues, indexSocial: number) => (
                    <ComposerLink key={indexSocial} path={item.socialLink}>
                      <ComposerIcon
                        propsIcon={{
                          className: this.decorateCSS("socialIcon"),
                        }}
                        name={item.socialIcon}
                      />
                    </ComposerLink>
                  )
                )}
              </div>
            </div>
            <div className={this.decorateCSS("items")}>
              {this.castToObject<any[]>("footer").map(
                (item: FooterValues, indexFooter: number) => (
                  <ul key={indexFooter} className={this.decorateCSS("list")}>
                    <li className={this.decorateCSS("title")}>
                      <h2 className={this.decorateCSS("item-footerTitle")}>
                        {item.footerTitle}
                      </h2>
                    </li>
                    {item.footerText.map(
                      (v: FooterTextValues, indexFooterText: number) => (
                        <ComposerLink key={indexFooterText} path={v.path}>
                          <li className={this.decorateCSS("text")}>
                            {v.footerText}
                          </li>
                        </ComposerLink>
                      )
                    )}
                  </ul>
                )
              )}
            </div>
          </div>
          <div className={this.decorateCSS("footer-bottom")}>
            <h2 className={this.decorateCSS("footerDescription")}>
              {this.getPropValue("footerDescription")}
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer2Page;
