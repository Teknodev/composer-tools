import * as React from "react";
import ComposerModalClose from "../../../composer-base-components/close/close";
import { BaseModal } from "../../EditorComponent";
import styles from "./cookies2.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class Cookies2 extends BaseModal {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "icon",
      key: "icon",
      displayer: "Icon",
      value: "FaCookieBite",
    });

    this.addProp({
      type: "string",
      key: "text",
      displayer: "Text",
      value: "We use third-arty cookies in order to personalize your site experience.",
    });

    this.addProp(INPUTS.BUTTON("buttonAccept", "Accept Button", "Allow", null, null, null, "Tertiary"));
    this.addProp(INPUTS.BUTTON("buttonDecline", "Decline Button", "Decline", null, null, null, "Tertiary"));
  }

  getName(): string {
    return "Cookies 2";
  }

  handleAccept = () => {
    console.log("Accept button clicked");
  };

  handleDecline = () => {
    console.log("Decline button clicked");
  };

  render() {
    const textExist = this.castToString(this.getPropValue("text"));
    const icon = this.getPropValue("icon");

    const buttonAccept: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("buttonAccept");
    const buttonDecline: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("buttonDecline");

    return (
      <Base.Container isModal={true} className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {icon && (
              <div className={this.decorateCSS("icon")}>
                <ComposerModalClose>
                  <ComposerIcon propsIcon={{ className: this.decorateCSS("icon") }} name={this.getPropValue("icon")} />
                </ComposerModalClose>
              </div>
            )}

            {textExist && <Base.P className={this.decorateCSS("text")}>{this.getPropValue("text")}</Base.P>}

            {(this.castToString(buttonAccept.text) || this.castToString(buttonDecline.text)) && (
              <div className={this.decorateCSS("button-wrapper")}>
                {this.castToString(buttonAccept.text) && (
                  <Base.Button onClick={this.handleAccept} buttonType={buttonAccept.type} className={this.decorateCSS("button")}>
                    {buttonAccept.text}
                  </Base.Button>
                )}

                {this.castToString(buttonDecline.text) && (
                  <Base.Button onClick={this.handleDecline} buttonType={buttonDecline.type} className={this.decorateCSS("button")}>
                    {buttonDecline.text}
                  </Base.Button>
                )}
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Cookies2;
