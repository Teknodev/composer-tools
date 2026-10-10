import * as React from "react";
import { BaseSteps, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./steps4.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "../../../custom-hooks/input-templates";

type Step = {
  stepNumber: React.JSX.Element;
  step_title: React.JSX.Element;
  paragraphs: React.JSX.Element[];
};

class Steps4 extends BaseSteps {
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
      value: "Main Services",
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
            { type: "string", key: "stepNumber", displayer: "Step Number", value: "1." },
            { type: "string", key: "step_title", displayer: "Title", value: "Expertise" },
            {
              type: "array",
              key: "paragraphs",
              displayer: "Paragraphs",
              value: [
                {
                  type: "object",
                  key: "paragraph",
                  displayer: "Paragraph",
                  value: [{ type: "string", key: "text", displayer: "Text", value: "At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution." }],
                },
                {
                  type: "object",
                  key: "paragraph",
                  displayer: "Paragraph",
                  value: [{ type: "string", key: "text", displayer: "Text", value: "User generated content in real-time will have multiple touchpoints for offshoring. Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps." }],
                },
                {
                  type: "object",
                  key: "paragraph",
                  displayer: "Paragraph",
                  value: [{ type: "string", key: "text", displayer: "Text", value: "Override the digital divide with additional clickthroughs from DevOps. Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps." }],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "step",
          displayer: "Step",
          value: [
            { type: "string", key: "stepNumber", displayer: "Step Number", value: "2." },
            { type: "string", key: "step_title", displayer: "Title", value: "Consulting" },
            {
              type: "array",
              key: "paragraphs",
              displayer: "Paragraphs",
              value: [
                {
                  type: "object",
                  key: "paragraph",
                  displayer: "Paragraph",
                  value: [{ type: "string", key: "text", displayer: "Text", value: "User generated content in real-time will have multiple touchpoints for offshoring. Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps." }],
                },
                {
                  type: "object",
                  key: "paragraph",
                  displayer: "Paragraph",
                  value: [{ type: "string", key: "text", displayer: "Text", value: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution." }],
                },
                {
                  type: "object",
                  key: "paragraph",
                  displayer: "Paragraph",
                  value: [{ type: "string", key: "text", displayer: "Text", value: "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service." }],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "step",
          displayer: "Step",
          value: [
            { type: "string", key: "stepNumber", displayer: "Step Number", value: "3." },
            { type: "string", key: "step_title", displayer: "Title", value: "Insurance" },
            {
              type: "array",
              key: "paragraphs",
              displayer: "Paragraphs",
              value: [
                {
                  type: "object",
                  key: "paragraph",
                  displayer: "Paragraph",
                  value: [{ type: "string", key: "text", displayer: "Text", value: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring. Capitalize on low hanging fruit to identify a ballpark value added activity to beta test." }],
                },
                {
                  type: "object",
                  key: "paragraph",
                  displayer: "Paragraph",
                  value: [{ type: "string", key: "text", displayer: "Text", value: "Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line." }],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "step",
          displayer: "Step",
          value: [
            { type: "string", key: "stepNumber", displayer: "Step Number", value: "4." },
            { type: "string", key: "step_title", displayer: "Title", value: "Taxation" },
            {
              type: "array",
              key: "paragraphs",
              displayer: "Paragraphs",
              value: [
                {
                  type: "object",
                  key: "paragraph",
                  displayer: "Paragraph",
                  value: [{ type: "string", key: "text", displayer: "Text", value: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution." }],
                },
                {
                  type: "object",
                  key: "paragraph",
                  displayer: "Paragraph",
                  value: [{ type: "string", key: "text", displayer: "Text", value: "User generated content in real-time will have multiple touchpoints for offshoring. Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps." }],
                },
                {
                  type: "object",
                  key: "paragraph",
                  displayer: "Paragraph",
                  value: [{ type: "string", key: "text", displayer: "Text", value: "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service." }],
                },
              ],
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "media",
      key: "accordionIcon",
      displayer: "Accordion Icon",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "FiChevronDown" },
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "View All Service", "", "FaArrowRight", null, "Link")],
    });

    this.setComponentState("activeStep", 0);
    this.setComponentState("openStep", -1);
  }

  static getName(): string {
    return "Steps 4";
  }

  toggleAccordion(index: number) {
    this.setComponentState("openStep", this.getComponentState("openStep") === index ? -1 : index);
  }

  render() {
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    // Paragraphs live in an array inside each step object, so the steps are read through getPropValue (castToObject leaves nested arrays raw).
    const steps: Step[] = (this.getPropValue("steps") || [])
      .map((item: any) => ({
        stepNumber: item.getPropValue("stepNumber"),
        step_title: item.getPropValue("step_title"),
        paragraphs: (item.getPropValue("paragraphs") || [])
          .map((paragraph: any) => paragraph.getPropValue("text"))
          .filter((text: React.JSX.Element) => this.castToString(text)),
      }))
      .filter((step: Step) => this.castToString(step.stepNumber) || this.castToString(step.step_title) || step.paragraphs.length > 0);
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const accordionIcon = this.getPropValue("accordionIcon") as TypeMediaInputValue;
    const accordionIconExist = accordionIcon && (accordionIcon.type === "icon" ? accordionIcon.name : accordionIcon.url);

    const activeStep = Math.min(this.getComponentState("activeStep") ?? 0, Math.max(steps.length - 1, 0));
    const openStep = this.getComponentState("openStep");

    const visibleButtons = buttons.filter((button: INPUTS.CastedButton) => {
      const icon = button.icon as unknown as TypeMediaInputValue;
      return this.castToString(button.text) || (icon && (icon.type === "icon" ? icon.name : icon.url));
    });

    const renderStepLabel = (step: Step, className: string) =>
      (this.castToString(step.stepNumber) || this.castToString(step.step_title)) && (
        <Base.H5 className={this.decorateCSS(className)}>
          {this.castToString(step.stepNumber) && <span className={this.decorateCSS("step-number")}>{step.stepNumber}</span>}
          {this.castToString(step.step_title) && <span className={this.decorateCSS("step-title")}>{step.step_title}</span>}
        </Base.H5>
      );

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(subtitleExist || titleExist || descriptionExist) && (
            <Base.VerticalContent className={this.decorateCSS("header")}>
              {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
              {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
              {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
            </Base.VerticalContent>
          )}

          {steps.length > 0 && (
            <div className={this.decorateCSS("steps")}>
              <div className={this.decorateCSS("tab-list")}>
                {steps.map((step: Step, index: number) => (
                  <div
                    key={index}
                    className={`${this.decorateCSS("tab")} ${index === activeStep ? this.decorateCSS("active") : ""}`}
                    onClick={() => this.setComponentState("activeStep", index)}
                  >
                    {renderStepLabel(step, "tab-label")}
                  </div>
                ))}
              </div>

              <div className={this.decorateCSS("sections")}>
                {steps.map((step: Step, index: number) => (
                  <div
                    key={index}
                    className={`${this.decorateCSS("section")} ${index === activeStep ? this.decorateCSS("active") : ""} ${index === openStep ? this.decorateCSS("open") : ""}`}
                  >
                    <div className={this.decorateCSS("section-header")} onClick={() => this.toggleAccordion(index)}>
                      {renderStepLabel(step, "section-label")}
                      {accordionIconExist && <Base.Media value={accordionIcon} className={this.decorateCSS("accordion-icon")} />}
                    </div>
                    {step.paragraphs.length > 0 && (
                      <Base.VerticalContent className={this.decorateCSS("section-content")}>
                        {step.paragraphs.map((text: React.JSX.Element, paragraphIndex: number) => (
                          <Base.P key={paragraphIndex} className={this.decorateCSS("step-description")}>{text}</Base.P>
                        ))}
                      </Base.VerticalContent>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {visibleButtons.length > 0 && (
            <div className={this.decorateCSS("button-container")}>
              {visibleButtons.map((button: INPUTS.CastedButton, index: number) => {
                const buttonIcon = button.icon as unknown as TypeMediaInputValue;
                const iconExist = buttonIcon && (buttonIcon.type === "icon" ? buttonIcon.name : buttonIcon.url);
                return (
                  <ComposerLink key={index} path={button.url}>
                    <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                      {this.castToString(button.text) && <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>}
                      {iconExist && <Base.Media value={buttonIcon} className={this.decorateCSS("button-icon")} />}
                    </Base.Button>
                  </ComposerLink>
                );
              })}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Steps4;
