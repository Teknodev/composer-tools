import * as React from "react";
import { BaseSteps, TypeMediaInputValue, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./steps8.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "../../../custom-hooks/input-templates";

type StepMedia = {
  media: TypeMediaInputValue;
  overlay: boolean;
};

type Step = {
  step_number: React.JSX.Element;
  step_subtitle: React.JSX.Element;
  step_title: React.JSX.Element;
  step_description: React.JSX.Element;
  step_buttons: INPUTS.CastedButton[];
  step_media: StepMedia;
};

class Steps8 extends BaseSteps {
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
      value: "",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
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
              type: "object",
              key: "step_media",
              displayer: "Media",
              value: [
                {
                  type: "media",
                  key: "media",
                  displayer: "Media",
                  additionalParams: {
                    availableTypes: ["image", "video"],
                  },
                  value: {
                    type: "image",
                    url: "https://hq-blinkpage-dev-1b2e6.s3.eu-central-1.amazonaws.com/user_content/6a8d513ace843e1cc08fe836/6ab3e368c883d8c204c28d30/library/steps8-no1.jpg",
                  },
                },
                {
                  type: "boolean",
                  key: "overlay",
                  displayer: "Overlay",
                  value: false,
                },
              ],
            },
            {
              type: "string",
              key: "step_number",
              displayer: "Number",
              value: "01",
            },
            {
              type: "string",
              key: "step_subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "step_title",
              displayer: "Title",
              value: "Years of Development",
            },
            {
              type: "string",
              key: "step_description",
              displayer: "Description",
              value: "",
            },
            {
              type: "array",
              key: "step_buttons",
              displayer: "Buttons",
              value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
            },
          ],
        },
        {
          type: "object",
          key: "step",
          displayer: "Step",
          value: [
            {
              type: "object",
              key: "step_media",
              displayer: "Media",
              value: [
                {
                  type: "media",
                  key: "media",
                  displayer: "Media",
                  additionalParams: {
                    availableTypes: ["image", "video"],
                  },
                  value: {
                    type: "image",
                    url: "https://hq-blinkpage-dev-1b2e6.s3.eu-central-1.amazonaws.com/user_content/6a8d513ace843e1cc08fe836/6ab3e368c883d8c204c28d30/library/steps8-no2.jpg",
                  },
                },
                {
                  type: "boolean",
                  key: "overlay",
                  displayer: "Overlay",
                  value: false,
                },
              ],
            },
            {
              type: "string",
              key: "step_number",
              displayer: "Number",
              value: "02",
            },
            {
              type: "string",
              key: "step_subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "step_title",
              displayer: "Title",
              value: "Professional Managers",
            },
            {
              type: "string",
              key: "step_description",
              displayer: "Description",
              value: "",
            },
            {
              type: "array",
              key: "step_buttons",
              displayer: "Buttons",
              value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
            },
          ],
        },
        {
          type: "object",
          key: "step",
          displayer: "Step",
          value: [
            {
              type: "object",
              key: "step_media",
              displayer: "Media",
              value: [
                {
                  type: "media",
                  key: "media",
                  displayer: "Media",
                  additionalParams: {
                    availableTypes: ["image", "video"],
                  },
                  value: {
                    type: "image",
                    url: "https://hq-blinkpage-dev-1b2e6.s3.eu-central-1.amazonaws.com/user_content/6a8d513ace843e1cc08fe836/6ab3e368c883d8c204c28d30/library/steps8-no3.jpg",
                  },
                },
                {
                  type: "boolean",
                  key: "overlay",
                  displayer: "Overlay",
                  value: false,
                },
              ],
            },
            {
              type: "string",
              key: "step_number",
              displayer: "Number",
              value: "03",
            },
            {
              type: "string",
              key: "step_subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "step_title",
              displayer: "Title",
              value: "High Visual Quality",
            },
            {
              type: "string",
              key: "step_description",
              displayer: "Description",
              value: "",
            },
            {
              type: "array",
              key: "step_buttons",
              displayer: "Buttons",
              value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
            },
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
  }

  static getName(): string {
    return "Steps 8";
  }

  mediaExist(media?: TypeMediaInputValue) {
    return !!(media && (media.type === "icon" ? media.name : media.url));
  }

  private getVisibleButtons(buttons: INPUTS.CastedButton[]) {
    return (buttons || []).filter(
      (button: INPUTS.CastedButton) => this.castToString(button.text) || this.mediaExist(button.icon as unknown as TypeMediaInputValue)
    );
  }

  private renderButtons(buttons: INPUTS.CastedButton[], className: string) {
    return (
      <div className={this.decorateCSS(className)}>
        {buttons.map((button: INPUTS.CastedButton, index: number) => {
          const buttonIcon = button.icon as unknown as TypeMediaInputValue;
          return (
            <ComposerLink key={index} path={button.url}>
              <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                {this.castToString(button.text) && <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>}
                {this.mediaExist(buttonIcon) && <Base.Media value={buttonIcon} className={this.decorateCSS("button-icon")} />}
              </Base.Button>
            </ComposerLink>
          );
        })}
      </div>
    );
  }

  render() {
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const visibleButtons = this.getVisibleButtons(this.castToObject<INPUTS.CastedButton[]>("buttons"));
    const line = this.getPropValue("line");

    // Buttons are an array inside each step object, so the steps are read through getPropValue (castToObject leaves nested arrays raw).
    const steps: Step[] = (this.getPropValue("steps") || [])
      .map((item: any) => {
        const stepMedia = item.getPropValue("step_media") || [];
        return {
          step_number: item.getPropValue("step_number"),
          step_subtitle: item.getPropValue("step_subtitle"),
          step_title: item.getPropValue("step_title"),
          step_description: item.getPropValue("step_description"),
          step_buttons: this.getVisibleButtons(
            (item.getPropValue("step_buttons") || []).map((button: any) => ({
              text: button.getPropValue("text"),
              type: button.getPropValue("type"),
              url: button.getPropValue("url"),
              icon: button.getPropValue("icon"),
            }))
          ),
          step_media: {
            media: stepMedia.find((prop: TypeUsableComponentProps) => prop.key === "media")?.value,
            overlay: stepMedia.find((prop: TypeUsableComponentProps) => prop.key === "overlay")?.value,
          },
        };
      })
      .filter(
        (step: Step) =>
          this.castToString(step.step_number) ||
          this.castToString(step.step_subtitle) ||
          this.castToString(step.step_title) ||
          this.castToString(step.step_description) ||
          step.step_buttons.length > 0 ||
          this.mediaExist(step.step_media.media)
      );

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={`${this.decorateCSS("max-content")} ${this.decorateCSS(Base.getContentAlignment())}`}>
          {(subtitleExist || titleExist || descriptionExist || visibleButtons.length > 0) && (
            <Base.VerticalContent className={this.decorateCSS("header")}>
              {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
              {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
              {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
              {visibleButtons.length > 0 && this.renderButtons(visibleButtons, "button-container")}
            </Base.VerticalContent>
          )}

          {steps.length > 0 && (
            <div className={`${this.decorateCSS("steps")} ${line ? this.decorateCSS("with-line") : ""}`}>
              {steps.map((step: Step, index: number) => {
                const hasText =
                  this.castToString(step.step_number) ||
                  this.castToString(step.step_subtitle) ||
                  this.castToString(step.step_title) ||
                  this.castToString(step.step_description) ||
                  step.step_buttons.length > 0;
                const stepMediaExist = this.mediaExist(step.step_media.media);

                return (
                  <div key={index} className={this.decorateCSS("step")}>
                    {hasText && (
                      <Base.VerticalContent className={this.decorateCSS("step-content")}>
                        {this.castToString(step.step_number) && <Base.H1 className={this.decorateCSS("step-number")}>{step.step_number}</Base.H1>}
                        {this.castToString(step.step_subtitle) && <Base.H6 className={this.decorateCSS("step-subtitle")}>{step.step_subtitle}</Base.H6>}
                        {this.castToString(step.step_title) && <Base.H3 className={this.decorateCSS("step-title")}>{step.step_title}</Base.H3>}
                        {this.castToString(step.step_description) && <Base.P className={this.decorateCSS("step-description")}>{step.step_description}</Base.P>}
                        {step.step_buttons.length > 0 && this.renderButtons(step.step_buttons, "step-button-container")}
                      </Base.VerticalContent>
                    )}

                    {stepMediaExist && (
                      <div className={this.decorateCSS("media-container")}>
                        <Base.Media value={step.step_media.media} className={this.decorateCSS("media")} />
                        {step.step_media.overlay && <div className={this.decorateCSS("media-overlay")} />}
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

export default Steps8;
