import * as React from "react";
import { BaseNavigator } from "../../EditorComponent";
import styles from "./navbar9.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";

type Link = {
  text: JSX.Element;
  url: string;
  type: "Normal" | "Dropdown";
  links: Link[];
};

class Navbar9 extends BaseNavigator {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "DESERT GLOW"
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "cosmetics"
    });

    this.addProp({
      type: "array",
      key: "links",
      displayer: "Links",
      value: [
        {
          type: "object",
          key: "link",
          displayer: "Link",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Catalog"
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: ""
            },
            {
              type: "select",
              key: "type",
              displayer: "Type",
              additionalParams: {
                selectItems: ["Normal", "Dropdown"]
              },
              value: "Normal"
            },
            {
              type: "array",
              key: "links",
              displayer: "Links",
              value: [
                {
                  type: "object",
                  key: "link",
                  displayer: "Link",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "Catalog"
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Url",
                      value: ""
                    },
                    {
                      type: "select",
                      key: "type",
                      displayer: "Type",
                      additionalParams: {
                        selectItems: ["Normal", "Dropdown"]
                      },
                      value: "Normal"
                    },
                    {
                      type: "array",
                      key: "links",
                      displayer: "Links",
                      value: [
                        {
                          type: "object",
                          key: "link",
                          displayer: "Link",
                          value: [
                            {
                              type: "string",
                              key: "text",
                              displayer: "Text",
                              value: "Deneme 1"
                            },
                            {
                              type: "page",
                              key: "url",
                              displayer: "Url",
                              value: ""
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
              ]
            }
          ]
        },
        {
          type: "object",
          key: "link",
          displayer: "Link",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "About us"
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: ""
            },
            {
              type: "select",
              key: "type",
              displayer: "Type",
              additionalParams: {
                selectItems: ["Normal", "Dropdown"]
              },
              value: "Normal"
            },
            {
              type: "array",
              key: "links",
              displayer: "Links",
              value: [
                {
                  type: "object",
                  key: "link",
                  displayer: "Link",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "Catalog"
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Url",
                      value: ""
                    },
                    {
                      type: "select",
                      key: "type",
                      displayer: "Type",
                      additionalParams: {
                        selectItems: ["Normal", "Dropdown"]
                      },
                      value: "Normal"
                    },
                    {
                      type: "array",
                      key: "links",
                      displayer: "Links",
                      value: [
                        {
                          type: "object",
                          key: "link",
                          displayer: "Link",
                          value: [
                            {
                              type: "string",
                              key: "text",
                              displayer: "Text",
                              value: "Deneme 1"
                            },
                            {
                              type: "page",
                              key: "url",
                              displayer: "Url",
                              value: ""
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
              ]
            }
          ]
        },
        {
          type: "object",
          key: "link",
          displayer: "Link",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Blog"
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: ""
            },
            {
              type: "select",
              key: "type",
              displayer: "Type",
              additionalParams: {
                selectItems: ["Normal", "Dropdown"]
              },
              value: "Normal"
            },
            {
              type: "array",
              key: "links",
              displayer: "Links",
              value: [
                {
                  type: "object",
                  key: "link",
                  displayer: "Link",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "Catalog"
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Url",
                      value: ""
                    },
                    {
                      type: "select",
                      key: "type",
                      displayer: "Type",
                      additionalParams: {
                        selectItems: ["Normal", "Dropdown"]
                      },
                      value: "Normal"
                    },
                    {
                      type: "array",
                      key: "links",
                      displayer: "Links",
                      value: [
                        {
                          type: "object",
                          key: "link",
                          displayer: "Link",
                          value: [
                            {
                              type: "string",
                              key: "text",
                              displayer: "Text",
                              value: "Deneme 1"
                            },
                            {
                              type: "page",
                              key: "url",
                              displayer: "Url",
                              value: ""
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
              ]
            }
          ]
        },
        {
          type: "object",
          key: "link",
          displayer: "Link",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Contact"
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: ""
            },
            {
              type: "select",
              key: "type",
              displayer: "Type",
              additionalParams: {
                selectItems: ["Normal", "Dropdown"]
              },
              value: "Normal"
            },
            {
              type: "array",
              key: "links",
              displayer: "Links",
              value: [
                {
                  type: "object",
                  key: "link",
                  displayer: "Link",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "Catalog"
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Url",
                      value: ""
                    },
                    {
                      type: "select",
                      key: "type",
                      displayer: "Type",
                      additionalParams: {
                        selectItems: ["Normal", "Dropdown"]
                      },
                      value: "Normal"
                    },
                    {
                      type: "array",
                      key: "links",
                      displayer: "Links",
                      value: [
                        {
                          type: "object",
                          key: "link",
                          displayer: "Link",
                          value: [
                            {
                              type: "string",
                              key: "text",
                              displayer: "Text",
                              value: "Deneme 1"
                            },
                            {
                              type: "page",
                              key: "url",
                              displayer: "Url",
                              value: ""
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
              ]
            }
          ]
        },
      ]
    });

    this.addProp({
      type: "string",
      key: "leftContent",
      displayer: "Left Content",
      value: "Europe | EN"
    });

    this.addProp({
      type: "string",
      key: "rightContent",
      displayer: "Right Content",
      value: "Lorem ipsum"
    });
  }

  getName(): string {
    return "Navbar 9";
  }

  render() {
    const title = this.getPropValue("title");
    const titleExist = !!this.getPropValue("title", { as_string: true });
    const subtitle = this.getPropValue("subtitle");
    const subtitleExist = !!this.getPropValue("subtitle", { as_string: true });

    const links = this.castToObject<Link[]>("links");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {titleExist && (
            <Base.SectionTitle className={this.decorateCSS("title")}>
              {title}
            </Base.SectionTitle>
          )}
          {subtitleExist && (
            <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
              {subtitle}
            </Base.SectionSubTitle>
          )}
          <div className={this.decorateCSS("wrapper")}>
            <div className={this.decorateCSS("left-content")}>
              left content
            </div>
            <div className={this.decorateCSS("links")}>
              {links.map((item, index) => {
                if (!this.castToString(item.text)) return null;
                console.log(item.type);

                return (
                  <ComposerLink path={item.url} key={index}>
                    <div className={this.decorateCSS("link")}>
                      {item.text}

                      {item.type === "Dropdown" && (
                        <div className={this.decorateCSS("subitems")}>
                          {item.links.map((subitem, index) => {
                            if (!this.castToString(subitem.text)) return null;

                            return (
                              <ComposerLink path={subitem.url} key={index}>
                                <div className={this.decorateCSS("link")}>
                                  {subitem.text}

                                  {subitem.type === "Dropdown" && (
                                    <div className={this.decorateCSS("subitems")}>
                                      {subitem.links.map((subsubitem, index) => {
                                        if (!this.castToString(subsubitem.text)) return null;

                                        return (
                                          <ComposerLink path={subsubitem.url} key={index}>
                                            <div className={this.decorateCSS("link")}>
                                              {subsubitem.text}
                                            </div>
                                          </ComposerLink>
                                        );
                                      })}
                                    </div>
                                  )}
                                </div>
                              </ComposerLink>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </ComposerLink>
                );
              })}
            </div>
            <div className={this.decorateCSS("right-content")}>
              right content
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Navbar9;
