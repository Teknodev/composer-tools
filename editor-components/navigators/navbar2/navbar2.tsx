import * as React from "react";
import { BaseNavigator } from "../../EditorComponent";
import styles from "./navbar2.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "composer-tools/composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";


type Image = {
  image: string;
  imageLink: string;
};

type Item = {
  title: JSX.Element;
  navigate_to: string;
};

class Navbar2 extends BaseNavigator {
  constructor(props?: any) {
    super(props, styles);

    this.addProp(INPUTS.NAVBAR_POSITION("position", "Navbar Position"));
    this.addProp({
      type: "array",
      key: "menuItems",
      displayer: "Menu",
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
              value: "Home",
            },
            {
              type: "page",
              key: "navigate_to",
              displayer: "Navigate to",
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
              value: "Portfolio",
            },
            {
              type: "page",
              key: "navigate_to",
              displayer: "Navigate to",
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
              value: "About",
            },
            {
              type: "page",
              key: "navigate_to",
              displayer: "Navigate to",
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
              value: "Books",
            },
            {
              type: "page",
              key: "navigate_to",
              displayer: "Navigate to",
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
              key: "navigate_to",
              displayer: "Navigate to",
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
              value: "Client Albums",
            },
            {
              type: "page",
              key: "navigate_to",
              displayer: "Navigate to",
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
              value: "Contact",
            },
            {
              type: "page",
              key: "navigate_to",
              displayer: "Navigate to",
              value: "",
            },
          ],
        }
      ],
    });
    this.addProp({
      type: "array",
      key: "logo-items",
      displayer: "Logos",
      value: [
        INPUTS.LOGO(
          "logo",
          "Logo",
          "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645515d3f72de2002caaefff?alt=media&timestamp=1719584962573"
        ),
        INPUTS.LOGO(
          "logo",
          "Logo",
          "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645515d3f72de2002caaefff?alt=media&timestamp=1719584962573"
        ),
      ],
      additionalParams: {
        maxElementCount: 2,
      },
    });

    this.addProp({
      type: "icon",
      key: "dropdownIcon",
      displayer: "Dropdown Icon",
      value: "MdArrowDropDown",
    });
    this.addProp({
      type: "icon",
      key: "rightIcon",
      displayer: "Right Arrow Icon",
      value: "MdKeyboardArrowRight",
    });

    this.addProp({
      type: "icon",
      key: "menuIcon",
      displayer: "Menu Icon",
      value: "FaBars",
    });

    this.addProp({
      type: "icon",
      key: "closeIcon",
      displayer: "Close Icon",
      value: "IoMdClose",
    });

    this.state["componentProps"]["isMobileMenuOpen"] = false;
  }
  getName(): string {
    return "Navbar 2";
  }

  toggleMobileMenu = () => {
    this.setComponentState(
      "isMobileMenuOpen",
      !this.getComponentState("isMobileMenuOpen")
    );
  };

  render() {
    const position = this.getPropValue("position");
    const logos = this.castToObject<Image[]>("logo-items");
    const logo = position === "Absolute" ? logos[0] : logos[1];
    const menuItems = this.castToObject<Item[]>("menuItems");

    const isMobileMenuOpen = this.getComponentState("isMobileMenuOpen");

    return (
      <Base.Navigator.Container position={position}>
         <Base.MaxContent className={this.decorateCSS("maxContent")}>
         <ComposerLink path={logo.imageLink}>
              <div className={this.decorateCSS("logo")}>
                <img src={logo.image} alt={""} />
              </div>
            </ComposerLink>
            <nav className={this.decorateCSS("largeMenu")}>
              <div className={this.decorateCSS("menu")}>
                {this.getPropValue("menuItems") &&
                  menuItems.map((item: any, index: any) => (
                      <ComposerLink path={item.navigate_to} key={index}>
                        <span className={this.decorateCSS("menuItem")}>{item.title}</span>
                      </ComposerLink>
                  ))}
              </div>
            </nav>

            <button 
              className={this.decorateCSS("mobileMenuButton")}
              onClick={this.toggleMobileMenu}
            >
              <ComposerIcon name={this.getPropValue("menuIcon")} propsIcon={{className: this.decorateCSS("menuIcon")}} />
            </button>

            <div className={`${this.decorateCSS("mobileMenu")} ${isMobileMenuOpen ? this.decorateCSS("open") : ""}`}>
              <button 
                className={this.decorateCSS("mobileCloseButton")}
                onClick={this.toggleMobileMenu}
              >
                <ComposerIcon name={this.getPropValue("closeIcon")} />
              </button>
              
              <div className={this.decorateCSS("mobileMenuItems")}>
                {menuItems.map((item: any, index: any) => (
                  <ComposerLink path={item.navigate_to} key={index}>
                    <span className={this.decorateCSS("menuItem")}>{item.title}</span>
                  </ComposerLink>
                ))}
              </div>
            </div>
         </Base.MaxContent>
      </Base.Navigator.Container>
    );
  }
}

export default Navbar2;