import * as React from "react";
import ComposerModalClose from "../../../composer-base-components/close/close";
import { BaseModal } from "../../EditorComponent";
import styles from "./terms-of-use.module.scss";

import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Button = {
  buttonText: React.JSX.Element;
  link: string;
};

class TermsOfUseModal extends BaseModal {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b08a9003b007002cc77628?alt=media&timestamp=1732521893813",
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
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
    this.addProp(INPUTS.BUTTON("buttonTerms", "Button Terms", "Terms and Conditions", "", null, null, "Link"));
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
      value: "MdCancel",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      additionalParams: {
        maxElementCount: 2,
      },
      value: [
        INPUTS.BUTTON("button", "Button", "Maybe later", "", null, null, "Primary"),
        INPUTS.BUTTON("button", "Button", "Accept", "", null, null, "Primary"),
      ],
    });
  }

  static getName(): string {
    return "Terms Of Use Modal";
  }

  render() {
    const image = this.getPropValue("image");
    const overlay = this.getPropValue("overlay");
    const buttonTerms: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("buttonTerms");
    const title = this.castToString(this.getPropValue("title"));
    const termsText = this.castToString(buttonTerms.text);
    const termsDescription = this.castToString(this.getPropValue("termsDescription"));
    const description = this.castToString(this.getPropValue("description"));
    const buttons: INPUTS.CastedButton[] = this.castToObject<INPUTS.CastedButton[]>("buttons");

    return (
      <Base.Container isModal={true} className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("top-wrapper")}>
              <div className={this.decorateCSS("exit-icon")}>
                <ComposerModalClose>
                  <Base.Icon propsIcon={{ className: `${this.decorateCSS("icon")} ${!image && this.decorateCSS("no-image")}` }} name={this.getPropValue("exitIcon")} />
                </ComposerModalClose>
              </div>

              {image && <img className={this.decorateCSS("image")} src={image} />}
              {image && overlay && <div className={this.decorateCSS("overlay")}></div>}
            </div>

            <div className={this.decorateCSS("buttom-wrapper")}>
              <div className={this.decorateCSS("second-div")}>
                {title && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                <div className={this.decorateCSS("terms-container")}>
                  {(termsDescription || termsText) && (
                    <Base.SectionDescription className={this.decorateCSS("terms")}>
                      <Base.SectionDescription className={this.decorateCSS("termsDescription")}>{termsDescription}</Base.SectionDescription>
                      <span className={this.decorateCSS("termsButton")}>
                        <ComposerLink path={buttonTerms.url}>
                          <Base.Button buttonType={buttonTerms.type} className={this.decorateCSS("termsText")} >
                            {buttonTerms.text}
                          </Base.Button>
                        </ComposerLink>
                      </span>
                    </Base.SectionDescription>
                  )}
                </div>

                {description && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
              </div>

              {buttons.length > 0 && (
                <div className={this.decorateCSS("button-background")}>
                  {buttons.map((item: INPUTS.CastedButton, index: number) => (
                    <ComposerLink path={item.url}>
                      <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>{item.text}</Base.Button>
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
