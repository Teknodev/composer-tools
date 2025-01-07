import * as React from "react";
import ComposerModalClose from "../../../composer-base-components/close/close";
import { BaseModal } from "../../EditorComponent";
import styles from "./cookie4.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
interface TermItem {
  termTitle: JSX.Element,
  termDescription: JSX.Element,
  termDeactivable: boolean,
  termDeactivaIcon: string,
  termAccepted: boolean
}

class Cookie4 extends BaseModal {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Cookie settings"
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "We use cookies, some of them are essential, others are optional."
    });
    this.addProp(INPUTS.BUTTON("buttonLink", "Button Link", "Learn more", "", null, null, "Link"));
    this.addProp({
      type: "array",
      key: "terms",
      displayer: "Terms",
      value: [
        {
          type: "object",
          key: "term",
          displayer: "Term",
          value: [
            {
              type: "string",
              key: "termTitle",
              displayer: "Term Title",
              value: "Strictly Necessary"
            },
            {
              type: "string",
              key: "termDescription",
              displayer: "Term Description",
              value: "These cookies can necessary for the website and can't be deactivated."
            },
            {
              type: "boolean",
              key: "termDeactivable",
              displayer: "Term Deactivable",
              value: true
            },
            {
              type: "icon",
              key: "termDeactivaIcon",
              displayer: "Term Deactiva Icon",
              value: "CiLock"
            },
            {
              type: "boolean",
              key: "termAccepted",
              displayer: "Term Accepted",
              value: true
            },
          ]
        },
        {
          type: "object",
          key: "term",
          displayer: "Term",
          value: [
            {
              type: "string",
              key: "termTitle",
              displayer: "Term Title",
              value: "Marketing & Analytics"
            },
            {
              type: "string",
              key: "termDescription",
              displayer: "Term Description",
              value: "These cookies can be set by our advertising partners through our website."
            },
            {
              type: "boolean",
              key: "termDeactivable",
              displayer: "Term Deactivable",
              value: false
            },
            {
              type: "icon",
              key: "termDeactivaIcon",
              displayer: "Term Deactiva Icon",
              value: ""
            },
            {
              type: "boolean",
              key: "termAccepted",
              displayer: "Term Accepted",
              value: true
            },
          ]
        },
        {
          type: "object",
          key: "term",
          displayer: "Term",
          value: [
            {
              type: "string",
              key: "termTitle",
              displayer: "Term Title",
              value: "Preferences"
            },
            {
              type: "string",
              key: "termDescription",
              displayer: "Term Description",
              value: "To individualize your content, we use tools that personalize your web experience."
            },
            {
              type: "boolean",
              key: "termDeactivable",
              displayer: "Term Deactivable",
              value: false
            },
            {
              type: "icon",
              key: "termDeactivaIcon",
              displayer: "Term Deactiva Icon",
              value: ""
            },
            {
              type: "boolean",
              key: "termAccepted",
              displayer: "Term Accepted",
              value: false
            },
          ]
        }
      ]
    });
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Accept all cookies", null, null, null, "Primary"),
        INPUTS.BUTTON("button", "Button", "Save Settings", null, null, null, "Secondary")
      ]
    });
    this.setComponentState("accepted", null)

  }

  getName(): string {
    return "Cookie 4";
  }
  toggle(index: number) {
    const terms = this.castToObject<TermItem[]>("terms");
    terms[index].termAccepted = !terms[index].termAccepted;
    console.log("accpeted", this.castToObject<TermItem[]>("terms")[index].termAccepted)
    this.setComponentState("accepted", terms);
  }
  render() {
    const buttonLink: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("buttonLink");
    const termItem = this.castToObject<TermItem[]>("terms")
    const buttons: INPUTS.CastedButton[] = this.castToObject<INPUTS.CastedButton[]>("buttons");

    return (
      <Base.Container isModal={true} className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("heading")}>
            <div className={this.decorateCSS("title")}>{this.getPropValue("title")}</div>
            <div className={this.decorateCSS("description-contianer")}>
              <div className={this.decorateCSS("description-text")}>{this.getPropValue("description")}{" "}
                <ComposerLink path={buttonLink.url}>
                  <Base.Button buttonType={buttonLink.type} className={this.decorateCSS("description-link")}>
                    {buttonLink.text}
                  </Base.Button>
                </ComposerLink>
              </div>
            </div>
            <div className={this.decorateCSS("divider")}></div>
          </div>

          {termItem.map((item: TermItem, index: number) => {
            return (
              <div className={this.decorateCSS("terms-container")}>
                <div className={this.decorateCSS("terms-content")}>
                  <div className={this.decorateCSS("terms-title")}>
                    {item.termTitle}
                  </div>
                  <div className={this.decorateCSS("terms-description")}>
                    {item.termDescription}
                  </div>
                </div>
                {item.termDeactivaIcon && (
                  <div className={this.decorateCSS("icon-container")}>
                    <ComposerIcon name={item.termDeactivaIcon} propsIcon={{ className: this.decorateCSS("icon") }} />
                  </div>
                )}
                {(!item.termDeactivable) && (
                  <div className={`${this.decorateCSS("terms-toogle")} ${item.termAccepted ?
                    this.decorateCSS("accepted") : this.decorateCSS("rejected")}`} onClick={() => this.toggle(index)}>
                    <input className={this.decorateCSS("input")} type="checkbox" />
                    <span className={this.decorateCSS("round")}></span>
                  </div>
                )}
              </div>
            )
          })}
          <div className={this.decorateCSS("button-container")}>
            {buttons.map((item: INPUTS.CastedButton, index: number) => {
              return (

                <ComposerLink path={item.url}>
                  <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>{item.text}</Base.Button>
                </ComposerLink>

              )
            })}
          </div>
        </Base.MaxContent>
      </Base.Container >
    );
  }
}

export default Cookie4;
