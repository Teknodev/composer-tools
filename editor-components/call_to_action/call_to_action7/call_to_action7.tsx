import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action7.module.scss";

type ButtonType = {
  buttonText: JSX.Element;
  link: string;
}

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
      type: "array",
      key: "arrayItem",
      displayer: "Button",
      value: [
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Get your FREE copy",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "string",
      key: "placeholder",
      displayer: "Placeholder",
      value: "Email *",
    },
    );
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
    const arrayItem = this.castToObject<ButtonType[]>("arrayItem");
    const input = this.castToString(this.getPropValue("placeholder"));
    const disableAnimation = this.getPropValue("disableAnimation");
    const isTitleTextExist = this.castToString(title);
    const isCallToActionExist = arrayItem || image || isTitleTextExist;
    const noRightsideItems = !arrayItem.length && !input && !(this.castToString(title));

    return (
      <div className={`${this.decorateCSS("container")}
      ${!image && this.decorateCSS("no-transparent-bg")}
      `}>
        <div className={this.decorateCSS("max-content")}>
          {isCallToActionExist && (
            <section className={`${this.decorateCSS("call-to-action7-container")} ${disableAnimation ? this.decorateCSS("no-animation") : ""} ${!image && this.decorateCSS("no-image")}`}>
              {image &&
                (<div className={`${this.decorateCSS("image-wrapper")} ${noRightsideItems && this.decorateCSS("no-rightside-items")}`}>
                  <img className={`${this.decorateCSS("image")} ${noRightsideItems && this.decorateCSS("no-rightside-items")}`} src={image} alt="" />
                </div>)
              }

              {(arrayItem.length || input || this.castToString(title)) &&
                (<div className={`${this.decorateCSS("call-to-action7")} ${!image && this.decorateCSS("no-image")}`}>
                  {this.castToString(title) && <h1 className={this.decorateCSS("title")}>{title}</h1>}
                  {(arrayItem.length > 0 || input) &&
                    <div className={this.decorateCSS("input-button-wrapper")}>
                      {input && arrayItem.length <= 1 &&
                        <div
                          className={this.decorateCSS("input-div")}>
                          <div className={this.decorateCSS("inputs")}>
                            {input && (
                              <input
                                className={this.decorateCSS("input")}
                                type={"text"}
                                id="email"
                                name="email"
                                placeholder={input}
                              />)}
                          </div>
                        </div>}

                      {arrayItem.length && (
                        <div className={this.decorateCSS("button-container")}>
                          {arrayItem.map((item: ButtonType, index: number) => (
                            <ComposerLink isFullWidth={true} path={item.link}>
                              {this.castToString(item.buttonText) && (
                                <div key={index} className={this.decorateCSS("button")}>
                                  <p className={this.decorateCSS("buttonText")}>{item.buttonText}</p>
                                </div>)}
                            </ComposerLink>
                          ))}
                        </div>
                      )}
                    </div>}
                </div>)}
            </section>
          )}
        </div>
      </div>
    );
  }
}

export default CallToAction7Page;
