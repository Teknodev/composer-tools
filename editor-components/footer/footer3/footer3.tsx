import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseFooter } from "../../EditorComponent";
import styles from "./footer3.module.scss";

type FooterValues = {
  footerTitle: string;
  footerText: FooterTextValues[];
};

type FooterTextValues = {
  footerText: string;
  path: string;
};

class Footer3Page extends BaseFooter {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "image",
      key: "logo",
      displayer: "Logo",
      value: "https://dstal.com.au/wp-content/uploads/2021/09/logoipsum.png",
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
                      value: "",
                    },
                    {
                      type: "page",
                      key: "path",
                      displayer: "Path",
                      value: "Engage Your Audince",
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
        {
          type: "object",
          key: "footer-title",
          displayer: "Footer Column",
          value: [
            {
              type: "string",
              key: "footerTitle",
              displayer: "Footer Title",
              value: "Get Help",
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
                      value: "Help Center",
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
                      value: "Contact Us",
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
                      value: "Privacy Policy",
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
                      value: "Login",
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
    return "Footer 3";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("footer-page")}>
            <div className={this.decorateCSS("logo")}>
              <img src={this.getPropValue("logo")} width={200} height={100} />
            </div>
            <div className={this.decorateCSS("items")}>
              {this.castToObject<any[]>("footer").map((item: FooterValues, indexFooter: number) => (
                <ul key={indexFooter} className={this.decorateCSS("list-group")}>
                  <li className={this.decorateCSS("title")}>
                    <h2>{item.footerTitle}</h2>
                  </li>
                  {item.footerText.map((v: FooterTextValues, indexFooterText: number) => (
                    <ComposerLink key={indexFooterText} path={v.path}>
                      <li className={this.decorateCSS("text")}>
                        {v.footerText}
                      </li>
                    </ComposerLink>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer3Page;
