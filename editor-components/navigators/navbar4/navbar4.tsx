import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/link";
import { BaseNavigator } from "../../EditorComponent";
import styles from "./navbar4.module.scss";

class Navbar4 extends BaseNavigator {
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
              key: "title",
              displayer: "Title",
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
                  value: "",
                },
              ],
            },
          ],
        },
        {
          type: "array",
          key: "right-navbar_value",
          displayer: "Right Navbar Value",
          value: [
            {
              type: "object",
              key: "title",
              displayer: "Title",
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
                  value: "",
                },
              ],
            },
          ],
        },
        {
          type: "string",
          key: "logo",
          displayer: "Logo",
          value: "LOGO",
        },
      ],
    });
  }

  getName(): string {
    return "Navbar 4";
  }
  menu: boolean = false;

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <nav>
            <ul className={this.decorateCSS("list-group")}>
              <li className={this.decorateCSS("logo")}>
                {this.getPropValue("navbar")[2].value}
              </li>
            </ul>
            <ul className={this.decorateCSS("content")}>
              {this.getPropValue("navbar")[0].value.map(
                (item: any, index: number) => (
                  <li key={index} className={this.decorateCSS("hover-underline-animation")}>
                    <ComposerLink path={item.value[1].value}>
                      <a>{item.value[0].value}</a>
                    </ComposerLink>
                  </li>
                )
              )}
            </ul>
            <ul className={this.decorateCSS("right-side")}>
              {this.getPropValue("navbar")[1].value.map(
                (item: any, index: number) => (
                  <li key={index} className={this.decorateCSS("hover-underline-animation")}>
                    <ComposerLink path={item.value[1].value}>
                      <a>{item.value[0].value}</a>
                    </ComposerLink>
                  </li>
                )
              )}
            </ul>
            <ul
              className={this.decorateCSS("hamburger-menu")}
              onClick={() => (this.menu = !this.menu)}
            >
              <li className={this.decorateCSS("li")}>
                {!this.menu ? (
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3917/3917215.png"
                    alt=""
                  />
                ) : (
                  <img
                    src="https://icon-library.com/images/menu-icon-white-png/menu-icon-white-png-5.jpg"
                    alt=""
                  />
                )}
              </li>
            </ul>
          </nav>
          <div
            className={this.decorateCSS("menu")}
            style={{
              transform: this.menu ? "translateX(0)" : "",
              display: this.menu ? "flex" : "",
            }}
          >
            <ul className={this.decorateCSS("list-group")}>
              {this.getPropValue("navbar")[0].value.map(
                (item: any, index: number) => (
                  <li key={index} className={this.decorateCSS("hover-underline-animation")}>
                    <ComposerLink path={item.value[1].value}>
                      <a>{item.value[0].value}</a>
                    </ComposerLink>
                  </li>
                )
              )}
            </ul>
            <ul className={this.decorateCSS("list-group")}>
              {this.getPropValue("navbar")[1].value.map(
                (item: any, index: number) => (
                  <li key={index} className={this.decorateCSS("hover-underline-animation")}>
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
    );
  }
}

export default Navbar4;
