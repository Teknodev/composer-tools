import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action3.module.scss";

class CallToAction3Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Join Our NewsletterGet the latest news and updates about our products, special offers, and promotions delivered straight to your inbox.",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Join Our Newsletter ",
    });
    this.addProp({
      type: "image",
      key: "backgroundImage",
      displayer: "Background Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64e61314057bdf002c29caad?alt=media&timestamp=1692801618391",
    });
    this.addProp({
      type: "string",
      key: "buttonText",
      displayer: "Button Text",
      value: "Sign Up Now",
    });
    this.addProp({
      type: "page",
      key: "buttonLink",
      displayer: "Button Link",
      value: "",
    });
  }
  
  getName(): string {
    return "Call To Action 3";
  }

  render() {
    const styling = {
      backgroundImage: `url('${this.getPropValue("backgroundImage")}')`,
    };

    return (
      <div className={this.decorateCSS("container")} style={styling}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("call-to-action3-page")}>
            <h3>{this.getPropValue("subtitle")}</h3>
            <h1>{this.getPropValue("title")}</h1>
            <ComposerLink path={this.getPropValue("buttonLink")}>
              <span className={this.decorateCSS("button")}>
                {this.getPropValue("buttonText")}
              </span>
            </ComposerLink>
          </div>
        </div>
      </div>
    );
  }
}

export default CallToAction3Page;
