import * as React from "react";
import { BaseFooter } from "../../EditorComponent";
import styles from "./footer7.module.scss";

class Footer7Page extends BaseFooter {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "object",
      key: "footer",
      displayer: "Footer",
      value: [
        {
          type: "string",
          key: "footer-text",
          value: "© 2023 All rights reserved.",
          displayer: "Footer Text",
        },
      ],
    });
  }

  getName(): string {
    return "Footer 7";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("footer-page")}>
            <h2 className={this.decorateCSS("footer")}>{this.getPropValue("footer")[0].value}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer7Page;
