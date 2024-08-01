import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action9.module.scss";

class CallToAction9Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Join Our Exclusive Club",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Be the first to know about new products, receive exclusive discounts, and get access to VIP events by joining our club today.",
    });
    this.addProp({
      type: "string",
      key: "buttonText",
      displayer: "Button Text",
      value: "Sign Up Now",
    });
    this.addProp({
      type: "page",
      key: "link",
      displayer: "Button Link",
      value: "",
    });
    this.addProp({
      type: "image",
      key: "top-left",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436994368c3c2002cd2f369?alt=media&timestamp=1719584962572",
      displayer: "Top Left",
    });
    this.addProp({
      type: "image",
      key: "top-center",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436994368c3c2002cd2f36a?alt=media&timestamp=1719584962572",
      displayer: "Top Center",
    });
    this.addProp({
      type: "image",
      key: "top-right",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436994368c3c2002cd2f36b?alt=media&timestamp=1719584962572",
      displayer: "Top Right",
    });
    this.addProp({
      type: "image",
      key: "bottom-left",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436994368c3c2002cd2f36c?alt=media&timestamp=1719584962572",
      displayer: "Bottom Left",
    });
    this.addProp({
      type: "image",
      key: "bottom-center",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436994368c3c2002cd2f36d?alt=media&timestamp=1719584962572",
      displayer: "Bottom Center",
    });
    this.addProp({
      type: "image",
      key: "bottom-right",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436994368c3c2002cd2f36e?alt=media&timestamp=1719584962572",
      displayer: "Bottom Right",
    });
  }

  getName(): string {
    return "Call To Action 9";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("call-to-action9-page")}>
            <h1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h1>
            <ComposerLink path={this.getPropValue("link")}>
              <span className={this.decorateCSS("button")}>
                {this.getPropValue("buttonText")}
              </span>
            </ComposerLink>
            <h3 className={this.decorateCSS("description")}>{this.getPropValue("description")}</h3>

            <div className={this.decorateCSS("sponsor-container")}>
              <div className={this.decorateCSS("sponsor")} >
                <img src={this.getPropValue("top-left")} alt=""/>
                <img src={this.getPropValue("top-center")} alt=""/>
                <img src={this.getPropValue("top-right")} alt=""/>
              </div>
              <div className={this.decorateCSS("sponsor")}>
                <img src={this.getPropValue("bottom-left")} alt=""/>
                <img src={this.getPropValue("bottom-center")} alt=""/>
                <img src={this.getPropValue("bottom-right")} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CallToAction9Page;
