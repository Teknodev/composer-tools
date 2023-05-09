import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/link";
import { BaseNavigator } from "../../EditorComponent";
import styles from "./navbar6.module.scss";

class Navbar6 extends BaseNavigator {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "object",
      key: "navbar",
      displayer: "Navbar",
      value: [
        {
          type: "array",
          key: "navbar_value",
          displayer: "Navbar Value",
          value: [
            {
              type: "object",
              key: "navbar_value",
              displayer: "Navbar Value",
              value: [
                {
                  type: "string",
                  key: "title",
                  displayer: "Title",
                  value: "Title",
                },
                {
                  type: "page",
                  key: "path",
                  displayer: "Path",
                  value: "Title",
                },
              ],
            },
          ],
        },
        {
          type: "string",
          key: "user_icon",
          displayer: "User Icon",
          value: "https://img.icons8.com/material-sharp/512/user.png",
        },
        {
          type: "string",
          key: "menu_icon",
          displayer: "Menu Icon",
          value:
            "https://cdn.icon-icons.com/icons2/2761/PNG/512/menu_hamburger_burger_icon_176431.png",
        },
        {
          type: "string",
          key: "menu_close_icon",
          displayer: "Menu Close Icon",
          value:
            "https://cdn.icon-icons.com/icons2/2518/PNG/512/x_icon_150997.png",
        },
      ],
    });
  }

  getName(): string {
    return "Navbar 6";
  }

  menu: boolean = false;

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            <div className={this.decorateCSS("page")}>
              <ul className={this.decorateCSS("list-group")}>
                {this.getPropValue("navbar")[0].value.map(
                  (item: any, index: number) => {
                    return (
                      <li key={index}>
                        <ComposerLink path={item.value[1].value}>
                          <a>{item.value[0].value}</a>
                        </ComposerLink>
                      </li>
                    );
                  }
                )}
              </ul>
              <ul className={this.decorateCSS("list-group")}>
                <li className={this.decorateCSS("li")}>
                  <img src={this.getPropValue("navbar")[1].value} />
                </li>
                <li className={this.decorateCSS("navbar-menu-icon")}>
                  {this.menu ? (
                    <img
                      src={this.getPropValue("navbar")[3].value}
                      onClick={() => (this.menu = !this.menu)}
                    />
                  ) : (
                    <img
                      src={this.getPropValue("navbar")[2].value}
                      onClick={() => (this.menu = !this.menu)}
                    />
                  )}
                </li>
              </ul>
            </div>
            <div
              className={
                this.decorateCSS("hamburger-menu") +
                " " +
                (this.menu ? this.decorateCSS("transaction") : "")
              }
              style={{ display: this.menu ? "flex" : "" }}
            >
              <ul className={this.decorateCSS("list-group")}>
                {this.getPropValue("navbar")[0].value.map(
                  (item: any, index: number) => (
                    <li key={index}>
                      <ComposerLink path={item.value[1].value}>
                        <a>{item.value[0].value}</a>
                      </ComposerLink>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar6;
