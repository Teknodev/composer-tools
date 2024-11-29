import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action6.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";

type Button = {
  text: JSX.Element;
  link: string;
  icon: string;
};

class CallToAction6Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "backgroundImage",
      displayer: "Background Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66bdaa2707399d002cb4130f?alt=media",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Get notified on latest updates and new releases.",
    });

    this.addProp({
      type: "string",
      key: "placeholder",
      displayer: "Place Holder",
      value: "Enter E-mail Address",
    });

    this.addProp({
      type: "string",
      key: "comment",
      displayer: "Comment",
      value: "* We promise we will never spam your account. *",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Button Array",
      value: [
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Button Text",
              value: "Subscribe",
            },
            {
              type: "page",
              key: "link",
              displayer: "Button Link",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "spaceLine",
      displayer: "Space Line",
      value: true,
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });
  }

  getName(): string {
    return "Call To Action 6";
  }

  render() {
    const spaceLineExist = this.getPropValue("spaceLine");

    const titleExist = this.getPropValue("title", { as_string: true });
    const placeholderExist = this.getPropValue("placeholder", {
      as_string: true,
    });
    const commentExist = this.getPropValue("comment", { as_string: true });

    const buttons = this.castToObject<Button[]>("buttons");
    return (
      <Base.Container
        className={`${this.decorateCSS("container")}
        ${this.getPropValue("overlay") ? this.decorateCSS("overlay-active") : ""}`}
        style={{
          backgroundImage: `url(${this.getPropValue("backgroundImage")})`,
        }}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("content")}>
            {titleExist && (
              <Base.SectionTitle className={this.decorateCSS("title")}>
                {this.getPropValue("title")}
              </Base.SectionTitle>
            )}

            {spaceLineExist && (
              <div className={this.decorateCSS("space-container")}>
                <div className={this.decorateCSS("space")} />
              </div>
            )}

            {placeholderExist && (
              <input
                type="text"
                className={this.decorateCSS("placeholder")}
                placeholder={placeholderExist}
              />
            )}
            {(commentExist || buttons?.length > 0) && (
              <div className={this.decorateCSS("bottom-container")}>
                {commentExist && (
                  <h3 className={this.decorateCSS("comment")}>
                    {this.getPropValue("comment")}
                  </h3>
                )}
                {buttons?.length > 0 && (
                  <div className={this.decorateCSS("buttons")}>
                    {buttons.map((item: Button, index: number) => {
                      const textExist = this.castToString(item.text);

                      if (textExist || item.icon)
                        return (
                          <ComposerLink key={index} path={item.link}>
                            <Base.Button className={this.decorateCSS("button")}>
                              {textExist && (
                                <div className={this.decorateCSS("button_text")}>
                                  {item.text}
                                </div>
                              )}
                            </Base.Button>
                          </ComposerLink>
                        );
                      return null;
                    })}
                  </div>
                )}
              </div>
            )}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default CallToAction6Page;
