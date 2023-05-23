import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseFooter } from "../../EditorComponent";
import styles from "./footer6.module.scss";

type FooterValues = {
  footerTitle: string;
  footerText: FooterTextValues[];
};

type FooterTextValues = {
  footerText: string;
  path: string;
};

class Footer6Page extends BaseFooter {
  constructor(props?: any) {
    super(props, styles);
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
              value: "Product",
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
                      value: "Vision",
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
                      value: "Company Track",
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
                      value: "Learning Hub",
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
                      value: "Software Reviews",
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
                      value: "Add Your Product",
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
                      value: "Research Hub",
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
                      value: "Research Agenda",
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
              value: "Top Categories",
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
                      value: "CRM Software",
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
                      value: "Project Management Software",
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
                      value: "Expense Management Software",
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
                      value: "Video Conferencing Software",
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
                      value: "Online Backup Software",
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
                      value: "E-Commerce Platforms",
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
                      value: "Accounting Software",
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
                      value: "User Help Center",
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
                      value: "Company Gives",
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
                      value: "Team",
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
                      value: "News",
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
                      value: "Contact",
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
              value: "Policies",
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
                      value: "Community Guidelines",
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
                      value: "Company Scoring Methodologies",
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
                      value: "Terms of Use ",
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
                      value: "Privacy Policies",
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
                      value: "Legal",
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
                      value: "Do not sell my personal information",
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
                      value: "Content Usage Guidelines",
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
  getImageUrl(): string {
    return "https://static.thenounproject.com/png/105256-200.png";
  }
  getName(): string {
    return "Footer 6";
  }
  getDescription(): string {
    return "A nicely placed footer";
  }
  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("footer-page")}>
            {this.castToObject<any[]>("footer").map((item: FooterValues, indexFooter: number) => (
              <ul key={indexFooter} className={this.decorateCSS("list-group")}>
                <li className={this.decorateCSS("title")}>
                  <h3>{item.footerTitle}</h3>
                </li>
                {item.footerText.map((v: FooterTextValues, indexFooterText: number) => (
                  <ComposerLink key={indexFooterText} path={v.path}>
                    <li className={this.decorateCSS("text")}>{v.footerText}</li>
                  </ComposerLink>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Footer6Page;
