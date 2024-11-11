import * as React from "react";
import ComposerModalClose from "../../../composer-base-components/close/close";
import { BaseModal } from "../../EditorComponent";
import styles from "./terms-of-use.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";

type Button = {
  buttonText: JSX.Element;
  link: string;
};

class TermsOfUseModal extends BaseModal {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/672b576c7acba6002c5ee19d?alt=media&timestamp=1730893727358",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Accept Terms and Conditions",
    });

    this.addProp({
      type: "string",
      key: "termsDescription",
      displayer: "Terms Description",
      value: "To proceed, please accept our",
    });

    this.addProp({
      type: "string",
      key: "termsText",
      displayer: "Terms Text",
      value: "Terms and Conditions",
    });

    this.addProp({
      type: "page",
      key: "termsLink",
      displayer: "Terms Link",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "It's important that you read and understand them before continuing to use our services.",
    });

    this.addProp({
      type: "icon",
      key: "exitIcon",
      displayer: "ExitIcon",
      value: "IoCloseSharp",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      additionalParams: {
        maxElementCount: 2,
      },
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Maybe later",
            },
            {
              type: "page",
              key: "link",
              displayer: "Button Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Accept",
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
  }

  getName(): string {
    return "TermsOfUseModal";
  }

  render() {
    const image = this.getPropValue("image");
    const title = this.castToString(this.getPropValue("title"));
    const termsText = this.castToString(this.getPropValue("termsText"));
    const termsDescription = this.castToString(this.getPropValue("termsDescription"));
    const description = this.castToString(this.getPropValue("description"));
    const buttons = this.castToObject<Button[]>("buttons");
    const validButtons = buttons.filter((item: Button) => this.castToString(item.buttonText));
    return (
      <Base.Container isModal={true} className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("top-wrapper")}>
              <div className={this.decorateCSS("exit-icon")}>
                <ComposerModalClose>
                  <ComposerIcon propsIcon={{ className: this.decorateCSS("icon") }} name={this.getPropValue("exitIcon")} />
                </ComposerModalClose>
              </div>

              {image && <img className={this.decorateCSS("image")} src={image} />}
            </div>

            <div className={this.decorateCSS("buttom-wrapper")}>
              <div className={this.decorateCSS("second-div")}>
                {title && <Base.H3 className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.H3>}
                <div className={this.decorateCSS("terms-container")}>
                  {(termsDescription || termsText) && (
                    <Base.P className={this.decorateCSS("terms")}>
                      <span className={this.decorateCSS("termsDescription")}>{termsDescription}</span>
                      <span className={this.decorateCSS("termsText")}>
                        <ComposerLink path={this.getPropValue("termsLink")}> {termsText}</ComposerLink>
                      </span>
                    </Base.P>
                  )}
                </div>

                {description && <Base.P className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.P>}
              </div>

              {validButtons.length > 0 && (
                <div className={this.decorateCSS("button-background")}>
                  {validButtons.map((item: Button, index: number) => (
                    <ComposerLink path={item.link}>
                      <div className={this.decorateCSS("button")}>{item.buttonText}</div>
                    </ComposerLink>
                  ))}
                </div>
              )}
            </div>
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default TermsOfUseModal;
