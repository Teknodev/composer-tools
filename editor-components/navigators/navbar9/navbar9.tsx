import * as React from "react";
import { BaseNavigator } from "../../EditorComponent";
import styles from "./navbar9.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Link = {
  text: JSX.Element;
  url: string;
  type: "Normal" | "Dropdown";
  links: Link[];
};

type Language = {
  language: JSX.Element;
};

type Icon = {
  icon: string;
  url: string;
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
                      value: "Subitem 1"
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
                              value: "Subsubitem 1"
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
                      value: "Subitem 1"
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
                              value: "Subsubitem 1"
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
      type: "array",
      key: "localization",
      displayer: "Localization",
      value: [
        {
          type: "object",
          key: "option",
          displayer: "Option",
          value: [
            {
              type: "string",
              key: "language",
              displayer: "Language",
              value: "En"
            },
          ]
        },
        {
          type: "object",
          key: "option",
          displayer: "Option",
          value: [
            {
              type: "string",
              key: "language",
              displayer: "Language",
              value: "Tr"
            },
          ]
        },
        {
          type: "object",
          key: "option",
          displayer: "Option",
          value: [
            {
              type: "string",
              key: "language",
              displayer: "Language",
              value: "Ru"
            },
          ]
        },
      ]
    });

    this.addProp({
      type: "icon",
      key: "localizationIdleIcon",
      displayer: "Localization Idle Icon",
      value: "MdOutlineKeyboardArrowDown"
    });

    this.addProp({
      type: "icon",
      key: "localizationHoverIcon",
      displayer: "Localization Hover Icon",
      value: "MdOutlineKeyboardArrowUp"
    });

    this.addProp({
      type: "array",
      key: "icons",
      displayer: "Icons",
      value: [
        {
          type: "object",
          key: "icon",
          displayer: "Icon",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaSearch"
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: ""
            },
          ]
        },
        {
          type: "object",
          key: "icon",
          displayer: "Icon",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaUserAlt"
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: ""
            },
          ]
        },
        {
          type: "object",
          key: "icon",
          displayer: "Icon",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaHeart"
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: ""
            },
          ]
        },
        {
          type: "object",
          key: "icon",
          displayer: "Icon",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaShoppingBag"
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: ""
            },
          ]
        },
      ]
    });

    this.setComponentState("defaultLanguage", this.getPropValue("localization")[0].getPropValue("language", { as_string: true }));

    this.setComponentState("toggle", false);
    this.setComponentState("dropdownToggle", null);
  }

  getName(): string {
    return "Navbar 9";
  }

  switchLanguage(lang: string): void {
    this.setComponentState("defaultLanguage", lang);
  }

  render() {
    const title = this.getPropValue("title");
    const titleExist = !!this.getPropValue("title", { as_string: true });
    const subtitle = this.getPropValue("subtitle");
    const subtitleExist = !!this.getPropValue("subtitle", { as_string: true });

    const links = this.castToObject<Link[]>("links");
    const languages = this.castToObject<Language[]>("localization");
    const languagesOmitDefault = languages.filter(elem => this.castToString(elem.language) !== this.getComponentState("defaultLanguage"));

    const localizationIdleIcon = this.getPropValue("localizationIdleIcon");
    const localizationHoverIcon = this.getPropValue("localizationHoverIcon");

    const icons = this.castToObject<Icon[]>("icons");

    const toggleMenu = () => {
      const toggle = !!this.getComponentState("toggle");
      this.setComponentState("toggle", !toggle);
    };

    const switchDropdown = (index: number) => {
      if (this.getComponentState("dropdownToggle") === index) {
        this.setComponentState("dropdownToggle", null);
        return;
      }
      this.setComponentState("dropdownToggle", index);
    };

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {titleExist && (
            <Base.SectionTitle className={this.decorateCSS("title")}>
              {title}
            </Base.SectionTitle>
          )}
          {subtitleExist && (
            <Base.H2 className={this.decorateCSS("subtitle")}>
              {subtitle}
            </Base.H2>
          )}
          <div className={this.decorateCSS("hamburger-container")}>
            <div onClick={toggleMenu}>
              <ComposerIcon name="FaHamburger" propsIcon={{ className: this.decorateCSS("icon") }} />
            </div>
          </div>
          {(!!languages?.length || !!links?.length || !!icons?.length) && (
            <div
              className={`
                  ${this.decorateCSS("wrapper-mobile")}
                  ${!!this.getComponentState("toggle") ? this.decorateCSS("show") : ""}
                `}
            >
              {!!languages?.length && (
                <div className={this.decorateCSS("left-content")}>
                  <div className={this.decorateCSS("localization")}>
                    {this.getComponentState("defaultLanguage")}
                    <ComposerIcon name={localizationIdleIcon} propsIcon={{ className: this.decorateCSS("idle-icon") }} />
                    <ComposerIcon name={localizationHoverIcon} propsIcon={{ className: this.decorateCSS("clicked-icon") }} />

                    <div className={this.decorateCSS("options")}>
                      {languagesOmitDefault.map((option, index: number) => (
                        <div onClick={() => this.switchLanguage(this.castToString(option.language))} className={this.decorateCSS("option")} key={index}>
                          {option.language}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {!!links?.length && (
                <div className={this.decorateCSS("links")}>
                  {links.map((item, index) => {
                    if (!this.castToString(item.text)) return null;

                    return (
                      <ComposerLink path={item.url} key={index}>
                        <div className={this.decorateCSS("link")}>
                          <div
                            onClick={item.type === "Dropdown" ? () => switchDropdown(index) : null}
                            className={`
                              ${this.decorateCSS("content")}
                              ${this.getComponentState("dropdownToggle") === index ? this.decorateCSS("dropdown-open") : ""}
                            `}
                          >
                            {item.text}
                            {item.type === "Dropdown" && (
                              <ComposerIcon name={this.getComponentState("dropdownToggle") === index ? "MdOutlineKeyboardArrowUp" : "MdOutlineKeyboardArrowDown"} propsIcon={{ className: this.decorateCSS("dropdown-icon") }} />
                            )}
                          </div>
                          {(item.type === "Dropdown" && this.getComponentState("dropdownToggle") === index) && (
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
              )}
              {!!icons?.length && (
                <div className={this.decorateCSS("right-content")}>
                  {icons.map((icon, index) => {
                    if (!icon.icon) return null;

                    return (
                      <ComposerLink path={icon.url} key={index}>
                        <ComposerIcon name={icon.icon} propsIcon={{ className: this.decorateCSS("icon") }} />
                      </ComposerLink>
                    );
                  })}
                </div>
              )}
            </div>
          )}
          {(!!languages?.length || !!links?.length || !!icons?.length) && (
            <div className={this.decorateCSS("wrapper")}>
              {!!languages?.length && (
                <div className={this.decorateCSS("left-content")}>
                  <div className={this.decorateCSS("localization")}>
                    {this.getComponentState("defaultLanguage")}
                    <ComposerIcon name={localizationIdleIcon} propsIcon={{ className: this.decorateCSS("idle-icon") }} />
                    <ComposerIcon name={localizationHoverIcon} propsIcon={{ className: this.decorateCSS("clicked-icon") }} />

                    <div className={this.decorateCSS("options")}>
                      {languagesOmitDefault.map((option, index: number) => (
                        <div onClick={() => this.switchLanguage(this.castToString(option.language))} className={this.decorateCSS("option")} key={index}>
                          {option.language}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {!!links?.length && (
                <div className={this.decorateCSS("links")}>
                  {links.map((item, index) => {
                    if (!this.castToString(item.text)) return null;

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
              )}
              {!!icons?.length && (
                <div className={this.decorateCSS("right-content")}>
                  {icons.map((icon, index) => {
                    if (!icon.icon) return null;

                    return (
                      <ComposerLink path={icon.url} key={index}>
                        <ComposerIcon name={icon.icon} propsIcon={{ className: this.decorateCSS("icon") }} />
                      </ComposerLink>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Navbar9;
