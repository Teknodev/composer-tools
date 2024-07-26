import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action7.module.scss";

class CallToAction7Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Level up your portfolio, read the book today!",
    });
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6687a7beba6bbe002b63bb11?alt=media",
    });
    this.addProp({
      type: "object",
      key: "button",
      displayer: "Button",
      value: [
        {
          type: "string",
          key: "buttonText",
          displayer: "Button Text",
          value: "LOOK MORE",
        },
        {
          type: "page",
          key: "link",
          displayer: "Link",
          value: "",
        }
      ]
    });
    this.addProp({
      type: "string",
      key: "placeholder",
      displayer: "Placeholder",
      value: "Enter your E-Mail!",
    });
    this.addProp({
      type: "boolean",
      key: "disableAnimation",
      displayer: "Disable Animation",
      value: false,
    });
  }

  getName(): string {
    return "Call To Action 7";
  }

  render() {
    const title = this.getPropValue("title");
    const image = this.getPropValue("image");
    const button = this.getPropValue("button");
    const placeholder = this.getPropValue("placeholder", { as_string: true });
    const disableAnimation = this.getPropValue("disableAnimation");

    return (
      <div className={`${this.decorateCSS("container")}`}>
        <div className={this.decorateCSS("max-content")}>
          <section className={`${this.decorateCSS("call-to-action7-container")} ${disableAnimation ? this.decorateCSS("no-animation") : ""}`}>
            {image && (
              <img className={this.decorateCSS("image")} src={image} alt="" />
            )}
            {(title) && (
              <div className={this.decorateCSS("call-to-action7")}>
                {title && (
                  <h1 className={this.decorateCSS("title")}>{title}</h1>
                )}
                <div className={this.decorateCSS("input-button-wrapper")}>
                  <input
                    className={this.decorateCSS("input")}
                    type="text"
                    id="email"
                    name="email"
                    placeholder={placeholder}
                  />
                  {button[0].value && (
                    <div className={this.decorateCSS("button-container")}>
                      <ComposerLink path={button[1].value}>
                        <span className={this.decorateCSS("button")}>
                          {button[0].value}
                        </span>
                      </ComposerLink>
                    </div>
                  )}
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    );
  }
}

export default CallToAction7Page;
