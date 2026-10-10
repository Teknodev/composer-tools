import * as React from "react";
import { BaseSteps, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./steps5.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "../../../custom-hooks/input-templates";

type Step = {
  icon: TypeMediaInputValue;
  step_subtitle: React.JSX.Element;
  step_title: React.JSX.Element;
  step_description: React.JSX.Element;
};

class Steps5 extends BaseSteps {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Fine-tuned Process",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "array",
      key: "steps",
      displayer: "Steps",
      value: [
        {
          type: "object",
          key: "step",
          displayer: "Step",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "FaArrowDown" },
            },
            { type: "string", key: "step_subtitle", displayer: "Subtitle", value: "" },
            { type: "string", key: "step_title", displayer: "Title", value: "Discover" },
            { type: "string", key: "step_description", displayer: "Description", value: "With over 25 years of experience, we have crafted thousands of strategic discovery process." },
          ],
        },
        {
          type: "object",
          key: "step",
          displayer: "Step",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "FaArrowDown" },
            },
            { type: "string", key: "step_subtitle", displayer: "Subtitle", value: "" },
            { type: "string", key: "step_title", displayer: "Title", value: "Prototype" },
            { type: "string", key: "step_description", displayer: "Description", value: "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world." },
          ],
        },
        {
          type: "object",
          key: "step",
          displayer: "Step",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "FaArrowDown" },
            },
            { type: "string", key: "step_subtitle", displayer: "Subtitle", value: "" },
            { type: "string", key: "step_title", displayer: "Title", value: "Create" },
            { type: "string", key: "step_description", displayer: "Description", value: "Performing at the junction of minimalism and mathematics to craft experiences that go beyond design." },
          ],
        },
        {
          type: "object",
          key: "step",
          displayer: "Step",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "FaArrowDown" },
            },
            { type: "string", key: "step_subtitle", displayer: "Subtitle", value: "" },
            { type: "string", key: "step_title", displayer: "Title", value: "Sell Online" },
            { type: "string", key: "step_description", displayer: "Description", value: "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world." },
          ],
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "line",
      displayer: "Line",
      value: true,
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
    });
  }

  static getName(): string {
    return "Steps 5";
  }

  render() {
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const showLine = this.getPropValue("line");
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

    const mediaExist = (media?: TypeMediaInputValue) => media && (media.type === "icon" ? media.name : media.url);
    const steps = this.castToObject<Step[]>("steps").filter(
      (step: Step) => mediaExist(step.icon) || this.castToString(step.step_subtitle) || this.castToString(step.step_title) || this.castToString(step.step_description)
    );
    const visibleButtons = buttons.filter(
      (button: INPUTS.CastedButton) => this.castToString(button.text) || mediaExist(button.icon as unknown as TypeMediaInputValue)
    );

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(subtitleExist || titleExist || descriptionExist || visibleButtons.length > 0) && (
            <Base.VerticalContent className={this.decorateCSS("header")}>
              {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
              {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
              {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
              {visibleButtons.length > 0 && (
                <div className={this.decorateCSS("button-container")}>
                  {visibleButtons.map((button: INPUTS.CastedButton, index: number) => {
                    const buttonIcon = button.icon as unknown as TypeMediaInputValue;
                    return (
                      <ComposerLink key={index} path={button.url}>
                        <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                          {this.castToString(button.text) && <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>}
                          {mediaExist(buttonIcon) && <Base.Media value={buttonIcon} className={this.decorateCSS("button-icon")} />}
                        </Base.Button>
                      </ComposerLink>
                    );
                  })}
                </div>
              )}
            </Base.VerticalContent>
          )}

          {steps.length > 0 && (
            <div className={this.decorateCSS("steps")}>
              {steps.map((step: Step, index: number) => {
                const iconExist = mediaExist(step.icon);
                const stepSubtitleExist = this.castToString(step.step_subtitle);
                const stepTitleExist = this.castToString(step.step_title);
                const stepDescriptionExist = this.castToString(step.step_description);

                return (
                  <div key={index} className={this.decorateCSS("step")}>
                    {(iconExist || showLine) && (
                      <div className={this.decorateCSS("step-divider")}>
                        {iconExist && <Base.Media value={step.icon} className={this.decorateCSS("step-icon")} />}
                        {showLine && <div className={this.decorateCSS("line")} />}
                      </div>
                    )}
                    {(stepSubtitleExist || stepTitleExist || stepDescriptionExist) && (
                      <div className={this.decorateCSS("step-content")}>
                        {(stepSubtitleExist || stepTitleExist) && (
                          <div className={this.decorateCSS("step-heading")}>
                            {stepSubtitleExist && <Base.H6 className={this.decorateCSS("step-subtitle")}>{step.step_subtitle}</Base.H6>}
                            {stepTitleExist && <Base.H3 className={this.decorateCSS("step-title")}>{step.step_title}</Base.H3>}
                          </div>
                        )}
                        {stepDescriptionExist && <Base.P className={this.decorateCSS("step-description")}>{step.step_description}</Base.P>}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Steps5;
