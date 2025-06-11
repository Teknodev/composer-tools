import * as React from "react";
import { BaseModal } from "../../EditorComponent";
import styles from "./notice.module.scss";

import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import ComposerModalClose from "../../../composer-base-components/close/close";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class Notice extends BaseModal {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "icon",
      key: "exitIcon",
      displayer: "Exit Icon",
      value: "IoCloseSharp",
    });

    this.addProp({
      type: "icon",
      key: "icon",
      displayer: "Icon",
      value: "FaFlagUsa",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title1",
      value: "VPS Servers Now Available",
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Title2",
      value: "in New York",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "We would like to inform you that our VPS Servers, are now available to purchase in New York, United States. Fully new datacenter is now available to purchase in our order process!",
    });
    this.addProp(INPUTS.BUTTON("button", "Button", "Get Started Now!", "", null, null, "Primary"));
  }

  static getName(): string {
    return "Notice Modal";
  }

  render() {
    const icon = this.getPropValue("icon");
    const title = this.castToString(this.getPropValue("title"));
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const description = this.castToString(this.getPropValue("description"));
    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

    return (
      <Base.Container isModal={true} className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("exit-icon")}>
              <ComposerModalClose>
                <Base.Icon propsIcon={{ className: this.decorateCSS("exitIcon") }} name={this.getPropValue("exitIcon")} />
              </ComposerModalClose>
            </div>
            {icon && (
              <div className={this.decorateCSS("icon")}>
                <Base.Icon propsIcon={{ className: this.decorateCSS("icon-element") }} name={icon} />
              </div>
            )}
            <div>
              {title && <Base.H2 className={this.decorateCSS("title")}>{title}</Base.H2>}
              {subtitle && <Base.H2 className={this.decorateCSS("subtitle")}>{subtitle}</Base.H2>}
            </div>

            {description && <Base.P className={this.decorateCSS("description")}>{description}</Base.P>}

            {this.castToString(button.text) && (
              <div className={this.decorateCSS("button-container")}>
                <ComposerLink path={button.url}>
                  <Base.Button buttonType={button.type} className={this.decorateCSS("button-element")}>{button.text}</Base.Button>
                </ComposerLink>
              </div>
            )}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Notice;
