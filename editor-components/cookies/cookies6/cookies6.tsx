import * as React from "react";
import styles from "./cookies6.module.scss";
import { BaseModal } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";

class Cookies6 extends BaseModal {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "icon",
      key: "close-icon",
      displayer: "Close Icon",
      value: "GrClose"
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Manage Cookie Consent"
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "We use cookies to optimize out website and services. Your consent allow us to process data such as browsing behavior. Not consenting may affect some features."
    });

    this.addProp(INPUTS.BUTTON("accept", "Accept Button", "Accept", null, null, null, "Primary"));
    this.addProp(INPUTS.BUTTON("decline", "Decline Button", "Decline", null, null, null, "Tertiary"));
    this.addProp(INPUTS.BUTTON("view", "View Button", "View", "", null, null, "Tertiary"));
  }

  getName(): string {
    return "Cookies6";
  }

  handleAccept = () => {
    console.log("Accept button clicked");
  };

  handleDecline = () => {
    console.log("Decline button clicked");
  };

  render() {
    const acceptButton = this.castToObject<INPUTS.CastedButton>("accept");
    const declineButton = this.castToObject<INPUTS.CastedButton>("decline");
    const viewButton = this.castToObject<INPUTS.CastedButton>("view");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("content")}>
            {this.castToString(this.getPropValue("title")) && (
              <Base.H4 className={this.decorateCSS("title")}>
                {this.getPropValue("title")}
              </Base.H4>
            )}
            {this.castToString(this.getPropValue("description")) && (
              <Base.P className={this.decorateCSS("description")}>
                {this.getPropValue("description")}
              </Base.P>
            )}
            {(this.castToString(acceptButton.text) ||
              this.castToString(declineButton.text) ||
              this.castToString(viewButton.text)) &&
              <Base.Row className={this.decorateCSS("button-row")}>
                {this.castToString(acceptButton.text) &&
                  <Base.Button buttonType={acceptButton.type}
                    className={`${this.decorateCSS("button")} ${this.decorateCSS("accept-button")}`}
                    onClick={this.handleAccept}>
                    {acceptButton.text}
                  </Base.Button>}
                {this.castToString(declineButton.text) &&
                  <Base.Button buttonType={declineButton.type}
                    className={`${this.decorateCSS("button")} ${this.decorateCSS("decline-button")}`}
                    onClick={this.handleDecline}>
                    {declineButton.text}
                  </Base.Button>}
                {this.castToString(viewButton.text) &&
                  <ComposerLink path={viewButton.url}>
                    <Base.Button buttonType={viewButton.type} className={`${this.decorateCSS("button")} ${this.decorateCSS("view-button")}`}>
                      {viewButton.text}
                    </Base.Button>
                  </ComposerLink>}
              </Base.Row>}
          </Base.VerticalContent>
        </Base.MaxContent>
        <ComposerIcon propsIcon={{ className: this.decorateCSS("close-icon") }} name={this.getPropValue("close-icon")}></ComposerIcon>
      </Base.Container>
    );
  }
}

export default Cookies6;
