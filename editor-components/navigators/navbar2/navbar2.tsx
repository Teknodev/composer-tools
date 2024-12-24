import * as React from "react";
import { BaseNavigator } from "../../EditorComponent";
import styles from "./navbar2.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "composer-tools/composer-base-components/base/base";

class Navbar2 extends BaseNavigator {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "select",
      key: "position",
      displayer: "Position",
      value: "Normal",
      additionalParams: {
        selectItems: ["Normal", "Absolute", "Sticky Colorful", "Sticky Transparent"],
      },
    });
    this.addProp({
      type: "icon",
      key: "icon",
      displayer: "Icon",
      value:
        "MdMenu",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Title",
    });
    this.addProp({
      type: "image",
      key: "logo_default",
      displayer: "Logo 1",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676a9ac20655f8002caba0b7?alt=media",
    });

    this.addProp({
      type: "image",
      key: "logo_transparent",
      displayer: "Logo 2",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6762cc190655f8002ca8c66b?alt=media",
    });

    this.addProp({
      type: "page",
      key: "logo_navigate",
      displayer: "Logo Navigation",
      value: "",
    })
    this.addProp({
      type: "array",
      key: "itemList",
      displayer: "Item List",
      value: [
        {
          type: "object",
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "item",
              value: "Features",
              displayer: "Item",
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
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "item",
              value: "Solutions",
              displayer: "Item",
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
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "item",
              value: "Resources",
              displayer: "Item",
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
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "item",
              value: "Pricing",
              displayer: "Item",
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
    this.setComponentState("navActive", false);
    this.setComponentState("isAnimating", false);
    this.setComponentState("isVisible", false);
    this.setComponentState("isScrolled", false);
    this.setComponentState("maxheight", 0);
  }
  getName(): string {
    return "Navbar 2";
  }
  navClick() {
    const isActive = this.getComponentState("navActive");
    this.setComponentState("navActive", !isActive);

    if (!isActive) {
      this.setComponentState("isAnimating", true);
      this.setComponentState("isVisible", true);
    } else {
      this.setComponentState("isAnimating", false);
      setTimeout(() => {
        this.setComponentState("isVisible", false);
      }, 1000);
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;
      this.setComponentState("isScrolled", scrollPosition);
    });

    const elements = document.getElementsByClassName(this.decorateCSS("mobile-item-wrapper"));
    let height = 0;
    if (elements.length > 0) {
      const element = elements[0] as HTMLElement;
      height = element.offsetHeight;
      this.setComponentState("maxheight", height);
    }

  }

  render() {
    const title = this.castToString(this.getPropValue("title"));

    const navbarElement = document.getElementById(`navbar2`);
    const navbarHeight = navbarElement?.clientHeight || "auto";

    const navActive = this.getComponentState("navActive");
    const logoDefault = this.getPropValue("logo_default");
    const logoTransparent = this.getPropValue("logo_transparent");

    const position = this.getPropValue("position");
    const logo = position === "Absolute" || (position === "Sticky Transparent" && this.getComponentState("isScrolled") < navbarHeight) ? logoTransparent : logoDefault;
    const formatClassName = (className: any) => className.replace(/\s+/g, "");

    return (
      <Base.Container id={"navbar2"} className={`${this.decorateCSS("container")} 
      ${this.decorateCSS(formatClassName(this.getPropValue("position")))} 
      ${navActive && this.decorateCSS("active")} 
      ${this.getComponentState("isScrolled") > navbarHeight && this.decorateCSS("bg-color")}`}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("nav")}>
            {logo ? (
              <ComposerLink path={this.getPropValue("logo_navigate")}>
                <div className={this.decorateCSS("image-container")}>
                  <img src={logo} className={this.decorateCSS("image")} alt={logo} />
                </div>
              </ComposerLink>
            ) : (
              title && (
                <div className={this.decorateCSS("title")}>
                  {title}
                </div>
              )
            )}

            <div className={this.decorateCSS("item-container")}>
              <div
                className={this.decorateCSS("items")}>
                {this.castToObject<[]>("itemList").map(
                  (data: any, indexItemList: number) => {
                    return (
                      <ComposerLink
                        path={data.value[1].value}
                      >
                        <div className={this.decorateCSS("item-title")} key={indexItemList}>{data.value[0].value}</div>
                      </ComposerLink>
                    );
                  }
                )}
              </div>
            </div>
          </div>
          <div className={this.decorateCSS("navigator-mobile")}>
            <div className={this.decorateCSS("navbar")}>
              {logo ? (
                <div className={this.decorateCSS("image-container")}>
                  <img src={logo} className={this.decorateCSS("image")} alt="Image" />
                </div>
              ) : (
                title && (
                  <div className={this.decorateCSS("title")}>
                    {title}
                  </div>
                )
              )}
              <ComposerIcon
                propsIcon={{
                  className: `${this.decorateCSS("img-hamburger")} ${this.getComponentState("navActive")
                    ? this.decorateCSS("rotate")
                    : ""
                    }`,
                  onClick: () => {
                    this.navClick();
                  }
                }}
                name={this.getPropValue("icon")}
              />
            </div>
            <div className={this.decorateCSS("navbar-child")} style={this.getComponentState("navActive")
              ? { maxHeight: `${this.getComponentState("maxheight")}px` }
              : undefined}>
              <div className={`${this.decorateCSS("mobile-item-wrapper")} ${this.getComponentState("navActive") ? this.decorateCSS("active") : ""}`}>
                {this.castToObject<[]>("itemList").map((data: any, indexItemList: number) => {
                  const delay = indexItemList * 0.1;
                  return (
                    <div
                      className={`${this.decorateCSS("mobile-item")} ${this.getComponentState("isAnimating")
                        ? this.decorateCSS("open")
                        : this.decorateCSS("close")
                        }`}
                      key={indexItemList}
                    >
                      <ComposerLink path={data.value[1].value}>
                        <div className={this.decorateCSS("mobile-item-text")} style={{ animationDelay: `${delay}s` }}>{data.value[0].value}</div>
                      </ComposerLink>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Navbar2;