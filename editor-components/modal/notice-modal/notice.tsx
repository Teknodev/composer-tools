import * as React from "react";
import { BaseModal } from "../../EditorComponent";
import styles from "./notice.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import ComposerModalClose from "../../../composer-base-components/close/close";

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
      displayer: "Title",
      value: "VPS Servers Now Available",
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "SubTitle",
      value: "in New York",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "We would like to inform you that our VPS Servers, are now available to purchase in New York, United States. Fully new datacenter is now available to purchase in our order process!",
    });

    this.addProp({
      type: "string",
      key: "buttonText",
      displayer: "Button Text",
      value: "Get Started Now!",
    });

    this.addProp({
      type: "page",
      key: "buttonUrl",
      displayer: "Button URL",
      value: "",
    });
  }

  getName(): string {
    return "Notice";
  }

  render() {
    const icon = this.getPropValue("icon");
    const title = this.castToString(this.getPropValue("title"));
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const description = this.castToString(this.getPropValue("description"));
    const buttonText = this.castToString(this.getPropValue("buttonText"));

    return (
      <Base.Container isModal={true} className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("exit-icon")}>
              <ComposerModalClose>
                <ComposerIcon propsIcon={{ className: this.decorateCSS("exitIcon") }} name={this.getPropValue("exitIcon")} />
              </ComposerModalClose>
            </div>
            {icon && (
              <div className={this.decorateCSS("icon")}>
                <ComposerIcon propsIcon={{ className: this.decorateCSS("icon-element") }} name={icon} />
              </div>
            )}
            {title && <Base.H2 className={this.decorateCSS("title")}>{title}</Base.H2>}
            {subtitle && <Base.H2 className={this.decorateCSS("subtitle")}>{subtitle}</Base.H2>}

            {description && <Base.P className={this.decorateCSS("description")}>{description}</Base.P>}

            <div className={this.decorateCSS("button-container")}>
              <ComposerLink path={this.getPropValue("buttonUrl")}>
                <button className={this.decorateCSS("button-element")}>{buttonText}</button>
              </ComposerLink>
            </div>
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Notice;
