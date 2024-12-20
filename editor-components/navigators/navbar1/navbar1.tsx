import * as React from "react";
import { BaseNavigator } from "../../EditorComponent";
import styles from "./navbar1.module.scss";
import { Base } from "composer-tools/composer-base-components/base/base";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "composer-tools/composer-base-components/icon/icon";

type page = {
  title: string,
  page: string,
}

type button = {
  title: string,
  page: string,
}

class Navbar1 extends BaseNavigator {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "logo",
      displayer: "Logo",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6762cc190655f8002ca8c66b?alt=media",
    });
    this.addProp({
      type: "boolean",
      key: "isSticky",
      displayer: "is Sticky",
      value: false,
    });
    this.addProp({
      type: "icon",
      key: "hamburgerIcon",
      displayer: "Hamburger Menu Icon",
      value: "RxHamburgerMenu",
    });
    this.addProp({
      type: "array",
      key: "pages",
      displayer: "Pages",
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
              value: "FAQ",
            },
            {
              type: "page",
              key: "page",
              displayer: "Page",
              value: "",
            }
          ]
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
              value: "Docs",
            },
            {
              type: "page",
              key: "page",
              displayer: "Page",
              value: "",
            }
          ]
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
              value: "Integrations",
            },
            {
              type: "page",
              key: "page",
              displayer: "Page",
              value: "",
            }
          ]
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
              value: "Pricing",
            },
            {
              type: "page",
              key: "page",
              displayer: "Page",
              value: "",
            }
          ]
        },
      ],
    });
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
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
              value: "Login",
            },
            {
              type: "page",
              key: "page",
              displayer: "Page",
              value: "",
            }
          ]
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
              value: "Sign Up",
            },
            {
              type: "page",
              key: "page",
              displayer: "Page",
              value: "",
            }
          ]
        },
      ],
    });
    this.setComponentState("hamburgerMenuActive", false);
  }

  getName(): string {
    return "Navbar 1";
  }

  active() {
    const status = this.getComponentState("hamburgerMenuActive");
    if(status) {
      this.setComponentState("hamburgerMenuActive", false);
    } else {
      this.setComponentState("hamburgerMenuActive", true);
    }
  }

  render() {
    const logo = this.getPropValue("logo");
    const isSticky = this.getPropValue("isSticky");
    const hamburgerIcon = this.getPropValue("hamburgerIcon");

    const pages = this.castToObject<page[]>("pages");
    const buttons = this.castToObject<button[]>("buttons");

    const hamburgerActive = this.getComponentState("hamburgerMenuActive");

    return (
      <>
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("section")}>
            {logo && (
              <img src={logo} alt="logo" className={this.decorateCSS("logo")} />
            )}
            {pages.length > 0 && (
              <div className={this.decorateCSS("list-group")}>
                {pages.map((item: page, index: number) => {
                  return (
                    <ComposerLink path={item.page}>
                      <Base.P>{item.title}</Base.P>
                    </ComposerLink>
                  );
                })}
              </div>
            )}
            <div className={this.decorateCSS("right-section")}>
              {buttons.length > 0 && (
                <div className={this.decorateCSS("list-group-buttons")}>
                  {buttons.map((item: button, index: number) => {
                    return (
                      <Base.Button>
                        <ComposerLink path={item.page}>
                          <span>{item.title}</span>
                        </ComposerLink>
                      </Base.Button>
                    );
                  })}
                </div>
              )}
              {hamburgerIcon && (
                <div className={this.decorateCSS("hamburger-menu")} onClick={() => this.active()}>
                  <ComposerIcon name={hamburgerIcon} />
                </div>
              )}
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
      <Base.Container className={this.decorateCSS("container")} style={{display: hamburgerActive ? "block" : "none"}}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={hamburgerActive ? this.decorateCSS("mobile-menu-active") : this.decorateCSS("mobile-menu")}>
            <div className={this.decorateCSS("list-group")}>
              {pages.map((item: page, index: number) => {
                return (
                  <ComposerLink path={item.page}>
                    <Base.P>{item.title}</Base.P>
                  </ComposerLink>
                );
              })}
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
      <Base.Container className={this.decorateCSS("container")} isFull="true" style={{display: hamburgerActive ? "block" : "none"}}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={hamburgerActive ? this.decorateCSS("mobile-menu-active") : this.decorateCSS("mobile-menu")}>
            <div className={this.decorateCSS("line")}></div>
          </div>
        </Base.MaxContent>
      </Base.Container>
      <Base.Container className={this.decorateCSS("container")} style={{display: hamburgerActive ? "block" : "none"}}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={hamburgerActive ? this.decorateCSS("mobile-menu-active") : this.decorateCSS("mobile-menu")}>
            <div className={this.decorateCSS("list-group-buttons")}>
              {buttons.map((item: button, index: number) => {
                return (
                  <Base.Button className={this.decorateCSS("button")}>
                    <ComposerLink path={item.page}>
                      <span>{item.title}</span>
                    </ComposerLink>
                  </Base.Button>
                );
              })}
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
      </>
    )
  }
}

export default Navbar1;
