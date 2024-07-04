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
      value: "https://template.canva.com/EADaopxBna4/1/0/251w-ujD6UPGa9hw.jpg",
    });
    this.addProp({
      type: "string",
      key: "buttonText",
      displayer: "Button Text",
      value: "JOIN FOR FREE",
    });
    this.addProp({
      type: "page",
      key: "link",
      displayer: "Button Link",
      value: "",
    });
    this.addProp({
      type: "string",
      key: "placeholder",
      displayer: "Placeholder",
      value: "Enter your E-Mail!",
    });
  }

  getName(): string {
    return "Call To Action 7";
  }

  render() {
    const title = this.getPropValue("title") as string;
    const image = this.getPropValue("image") as string;
    const buttonText = this.getPropValue("buttonText") as string;
    const link = this.getPropValue("link") as string;
    const placeholder = this.getPropValue("placeholder") as string;

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <section className={this.decorateCSS("call-to-action7-container")}>
            <img className={this.decorateCSS("image")} src={image} alt="" />
            <div className={this.decorateCSS("call-to-action7")}>
              <h1 className={this.decorateCSS("title")}>{title}</h1>
              <div className={this.decorateCSS("input-button-wrapper")}>
                <div className={this.decorateCSS("input-box")}>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter your E-Mail!"
                  />
                  <span className={this.decorateCSS("placeholder")}>
                    {placeholder}
                  </span>
                </div>
                <div className={this.decorateCSS("button-container")}>
                  <ComposerLink path={link}>
                    <span className={this.decorateCSS("button")}>
                      {buttonText}
                    </span>
                  </ComposerLink>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default CallToAction7Page;
