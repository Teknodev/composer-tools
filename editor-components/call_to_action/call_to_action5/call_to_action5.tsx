import * as React from "react";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action5.module.scss";

type Field = {
  placeholder: JSX.Element;
  isVisible: boolean;
  isRequired: boolean;
}

class CallToAction5Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "image",
      key: "background",
      displayer: "Background Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66bb46cb3292c6002b23faeb?alt=media"
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "NEWSLETTER SIGN UP",
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "JOIN FOR NEW UPDATES.",
    });

    this.addProp({
      type: "string",
      key: "buttonText",
      displayer: "Button Text",
      value: "SUBSCRIBE NOW",
    });

    this.addProp({
      type: "object",
      key: "email",
      displayer: "E-mail Field",
      value: [
        {
          type: "string",
          key: "placeholder",
          displayer: "Placeholder",
          value: "Enter e-mail address"
        },
        {
          type: "boolean",
          key: "isVisible",
          displayer: "Is visible?",
          value: true
        },
        {
          type: "boolean",
          key: "isRequired",
          displayer: "Is required?",
          value: true
        }
      ]
    });

    this.addProp({
      type: "object",
      key: "phone",
      displayer: "Phone Field",
      value: [
        {
          type: "string",
          key: "placeholder",
          displayer: "Placeholder",
          value: "Enter phone number"
        },
        {
          type: "boolean",
          key: "isVisible",
          displayer: "Is visible?",
          value: true
        },
        {
          type: "boolean",
          key: "isRequired",
          displayer: "Is required?",
          value: true
        }
      ]
    });
  }

  getName(): string {
    return "Call To Action 5";
  }

  render() {

    const titleExist = this.getPropValue("title", { as_string: true });
    const subtitleExist = this.getPropValue("subtitle", { as_string: true });
    const buttonTextExist = this.getPropValue("buttonText", { as_string: true });

    const email = this.castToObject<Field>("email");
    const phone = this.castToObject<Field>("phone");

    const backgroundImage = this.getPropValue("background");

    const insertBackground = backgroundImage
      ? {
        background: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }
      : {};

    return (
      <div className={this.decorateCSS("container")}
        style={insertBackground}
      >
        <div className={this.decorateCSS("max-content")}>
          {(titleExist || subtitleExist) &&
            <div className={this.decorateCSS("header")}>
              {titleExist && (
                <h1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h1>
              )}
              {subtitleExist && (
                <p className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</p>
              )}
            </div>
          }
          {(email.isVisible || phone.isVisible || buttonTextExist) &&
            <div className={`${this.decorateCSS("newsletter")} 
              ${email.isVisible && phone.isVisible ? this.decorateCSS("vertical") : ""}`}
            >
              {(email.isVisible || phone.isVisible) &&
                <div className={this.decorateCSS("inputs")}>
                  {email.isVisible &&
                    <input className={this.decorateCSS("input")} type="email" placeholder={this.castToString(email.placeholder)} required={email.isRequired} />
                  }
                  {phone.isVisible &&
                    <input className={this.decorateCSS("input")} type="tel" placeholder={this.castToString(phone.placeholder)} required={phone.isRequired} />
                  }
                </div>
              }
              {buttonTextExist &&
                <button
                  className={this.decorateCSS("submit-button")}
                  type="submit"
                >
                  {this.getPropValue("buttonText")}
                </button>
              }
            </div>
          }
        </div>
      </div>
    );
  }
}
export default CallToAction5Page;