import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/link";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseFooter } from "../../EditorComponent";
import styles from "./footer6.module.scss";

class Footer6Page extends BaseFooter {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "company-name",
      displayer: "Company Name",
      value: PlaceholderFiller.string(),
    });
    this.addProp({
      type: "string",
      key: "company-desc",
      displayer: "Company Description",
      value: PlaceholderFiller.shortText(),
    });
    this.addProp({
      type: "image",
      key: "company-image",
      displayer: "Company Image",
      value: PlaceholderFiller.image(),
    });
    this.addProp({
      type: "string",
      key: "footer-text",
      displayer: "Footer Text",
      value: PlaceholderFiller.shortText(),
    });

    this.addProp({
      type: "object",
      key: "socialIconInstagram",
      displayer: "Social Icon Instgram",
      value: [
        {
          type: "page",
          key: "path",
          displayer: "Instgram Path",
          value: "",
        },
        {
          type: "image",
          key: "icon",
          displayer: "Instgram Icon",
          value: PlaceholderFiller.image(),
        },
      ],
    });
    this.addProp({
      type: "object",
      key: "socialIconFacebook",
      displayer: "Social Icon Facebook",
      value: [
        {
          type: "page",
          key: "path",
          displayer: "Facebook Path",
          value: "",
        },
        {
          type: "image",
          key: "icon",
          displayer: "Facebook Path",
          value: PlaceholderFiller.image(),
        },
      ],
    });
    this.addProp({
      type: "object",
      key: "socialIconLinkedin",
      displayer: "Social Icon Linkledin",
      value: [
        {
          type: "page",
          key: "path",
          displayer: "Linkledin Path",
          value: "",
        },
        {
          type: "image",
          key: "icon",
          displayer: "Linkledin Icon",
          value: PlaceholderFiller.image(),
        },
      ],
    });
    this.addProp({
      type: "object",
      key: "socialIconTwitter",
      displayer: "Social Icon Twitter",
      value: [
        {
          type: "page",
          key: "path",
          displayer: "Twitter Path",
          value: "",
        },
        {
          type: "image",
          key: "icon",
          displayer: "Twitter Icon",
          value: PlaceholderFiller.image(),
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "footer",
      displayer: "Footer",
      value: [
        {
          type: "object",
          key: "footer_value-Comp",
          displayer: "Footer Values",
          value: [
            {
              type: "array",
              key: "column",
              displayer: "Column",
              value: [
                {
                  type: "object",
                  key: "footer_value",
                  displayer: "Footer Column Values",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Column Title",
                      value: PlaceholderFiller.string(),
                    },
                    {
                      type: "array",
                      key: "title",
                      displayer: "Column Texts",
                      value: [
                        {
                          type: "object",
                          key: "title",
                          displayer: "Column Text",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: PlaceholderFiller.string(),
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
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Footer 6";
  }
  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("footer")}>
            <div className={this.decorateCSS("row")}>
              <div className={this.decorateCSS("footercol-company")}>
                <ul className={this.decorateCSS("list-group")}>
                  <li className={this.decorateCSS("li")}>
                    <img
                      className={this.decorateCSS("img")}
                      src={this.getPropValue("company-image")}
                      alt="logo"
                    />
                  </li>
                  <li className={this.decorateCSS("company-title")}>
                    <h4 className={this.decorateCSS("hover_underline")}>
                      {this.getPropValue("company-name")}
                    </h4>
                  </li>
                  <li className={this.decorateCSS("li")}>
                    <p>{this.getPropValue("company-desc")}</p>
                  </li>
                </ul>
              </div>
              {this.getPropValue("footer")[0].value[0].value.map(
                (item: any, index: number) => (
                  <div
                    key={"footer" + index}
                    className={this.decorateCSS("footer-col-content")}
                  >
                    <ul className={this.decorateCSS("list-group")}>
                      <li className={this.decorateCSS("li")}>
                        <h4 className={this.decorateCSS("hover_underline")}>
                          {item.value[0].value}
                        </h4>
                      </li>
                      {item.value[1].value.map((v: any, index: number) => {
                        return (
                          <li key={"item" + index}>
                            <span>{v.value[0].value}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )
              )}
            </div>
            <div className={this.decorateCSS("bottom-section")}>
              <span>{this.getPropValue("footer-text")}</span>
              <ul className={this.decorateCSS("social_links")}>
                <li className={this.decorateCSS("li")}>
                  <span>Follow:</span>
                </li>
                <li className={this.decorateCSS("li")}>
                  <ComposerLink
                    path={this.getPropValue("socialIconLinkedin")[0].value}
                  >
                    <img
                      src={this.getPropValue("socialIconLinkedin")[1].value}
                      className={this.decorateCSS("icon")}
                    />
                  </ComposerLink>
                </li>
                <li className={this.decorateCSS("li")}>
                  <ComposerLink
                    path={this.getPropValue("socialIconFacebook")[0].value}
                  >
                    <img
                      src={this.getPropValue("socialIconFacebook")[1].value}
                      className={this.decorateCSS("icon")}
                    />
                  </ComposerLink>
                </li>
                <li className={this.decorateCSS("li")}>
                  <ComposerLink
                    path={this.getPropValue("socialIconInstagram")[0].value}
                  >
                    <img
                      src={this.getPropValue("socialIconInstagram")[1].value}
                      className={this.decorateCSS("icon")}
                    />
                  </ComposerLink>
                </li>
                <li className={this.decorateCSS("li")}>
                  <ComposerLink
                    path={this.getPropValue("socialIconTwitter")[0].value}
                  >
                    <img
                      src={this.getPropValue("socialIconTwitter")[1].value}
                      className={this.decorateCSS("icon")}
                    />
                  </ComposerLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer6Page;
