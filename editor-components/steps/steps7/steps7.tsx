import * as React from "react";
import { BaseSteps, TypeMediaInputValue, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./steps7.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "../../../custom-hooks/input-templates";

type ImageMedia = {
  media: TypeMediaInputValue;
  overlay: boolean;
};

type Step = {
  step_number: React.JSX.Element;
  step_subtitle: React.JSX.Element;
  step_title: React.JSX.Element;
  step_description: React.JSX.Element;
  step_buttons: INPUTS.CastedButton[];
};

class Steps7 extends BaseSteps {
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
        this.createStep("01", "Contact Us", "Leverage agile frameworks to provide a robust synopsis for high level overviews"),
        this.createStep("02", "Conversation", "Iterative approaches to corporate strategy foster collaborative thinking"),
        this.createStep("03", "Contract", "Bring to the table win-win survival strategies to ensure proactive domination"),
        this.createStep("04", "Work!", "Capitalize on low hanging fruit to identify a ballpark value added activity"),
      ],
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 2,
    });

    this.addProp({
      type: "object",
      key: "image",
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
            url: "https://impreza-landing.us-themes.com/wp-content/uploads/2023/10/balazs-ketyi-sScmok4Iq1o-unsplash-1070x803.jpg",
          },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: false,
        },
      ],
    });
  }

  static getName(): string {
    return "Steps 7";
  }

  private createStep(number: string, title: string, description: string): TypeUsableComponentProps {
    return {
      type: "object",
      key: "step",
      displayer: "Step",
      value: [
        { type: "string", key: "step_number", displayer: "Number", value: number },
        { type: "string", key: "step_subtitle", displayer: "Subtitle", value: "" },
        { type: "string", key: "step_title", displayer: "Title", value: title },
        { type: "string", key: "step_description", displayer: "Description", value: description },
        {
          type: "array",
          key: "step_buttons",
          displayer: "Buttons",
          value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
        },
      ],
    };
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
    const image = this.castToObject<ImageMedia>("image");
    const imageExist = this.mediaExist(image?.media);
    const itemCount = this.getPropValue("itemCount") || 2;

    // Buttons are an array inside each step object, so the steps are read through getPropValue (castToObject leaves nested arrays raw).
    const steps: Step[] = (this.getPropValue("steps") || [])
      .map((item: any) => ({
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
      }))
      .filter(
        (step: Step) =>
          this.castToString(step.step_number) ||
          this.castToString(step.step_subtitle) ||
          this.castToString(step.step_title) ||
          this.castToString(step.step_description) ||
          step.step_buttons.length > 0
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

          {(steps.length > 0 || imageExist) && (
            <div className={this.decorateCSS("content")}>
              {steps.length > 0 && (
                <Base.ListGrid gridCount={{ pc: itemCount, tablet: itemCount, phone: 1 }} className={this.decorateCSS("steps")}>
                  {steps.map((step: Step, index: number) => (
                    <Base.VerticalContent key={index} className={this.decorateCSS("step")}>
                      {this.castToString(step.step_number) && <Base.H1 className={this.decorateCSS("step-number")}>{step.step_number}</Base.H1>}
                      {this.castToString(step.step_subtitle) && <Base.H6 className={this.decorateCSS("step-subtitle")}>{step.step_subtitle}</Base.H6>}
                      {this.castToString(step.step_title) && <Base.H3 className={this.decorateCSS("step-title")}>{step.step_title}</Base.H3>}
                      {this.castToString(step.step_description) && <Base.P className={this.decorateCSS("step-description")}>{step.step_description}</Base.P>}
                      {step.step_buttons.length > 0 && this.renderButtons(step.step_buttons, "step-button-container")}
                    </Base.VerticalContent>
                  ))}
                </Base.ListGrid>
              )}

              {imageExist && (
                <div className={this.decorateCSS("image-container")}>
                  <Base.Media value={image.media} className={this.decorateCSS("image")} />
                  {image.overlay && <div className={this.decorateCSS("media-overlay")} />}
                </div>
              )}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Steps7;
