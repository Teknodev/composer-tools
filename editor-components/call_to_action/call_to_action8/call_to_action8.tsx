import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action8.module.scss";

class CallToAction8Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Discover new perspectives in a vibrant and inclusive community.",
    });

    this.addProp({
      type: "string",
      key: "button-text",
      displayer: "Button",
      value: "Get Started",
    });

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value:
        "https://site.sociolib.com/dash/wp-content/uploads/sites/25/2024/04/10.png",
    });
  }

  getName(): string {
    return "Call To Action 8";
  }

  render() {
    const image = this.getPropValue("image")
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("title-box")}>
              <div>
              <h1>{this.getPropValue("title")}</h1>
              </div>
              <div className={this.decorateCSS("title")}>

              </div>
              <div className={this.decorateCSS("button")}>
                <button>{this.getPropValue("button-text")}</button>
              </div>
            </div>
          {image &&<div className={this.decorateCSS("image-box")}>
              <img src={this.getPropValue("image")} alt="" />
            </div>}
          </div>
        </div>
      </div>
    );
  }
}

export default CallToAction8Page;
