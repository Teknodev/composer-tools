import * as React from "react";
import { BaseSteps, TypeMediaInputValue, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./steps6.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "../../../custom-hooks/input-templates";

type Step = {
  tab_title: React.JSX.Element;
  step_subtitle: React.JSX.Element;
  step_title: React.JSX.Element;
  step_description: React.JSX.Element;
  list_items: React.JSX.Element[];
  step_bottom_description: React.JSX.Element;
  step_buttons: INPUTS.CastedButton[];
};

const LIST_ITEMS = [
  "Egestas aliquet ullamcorper nunc sed pellentesque",
  "Lorem ipsum dolor sit amet",
  "Faucibus dolor mauris nascetur ut feugia",
  "Egestas aliquet ullamcorper nunc sed pellentesque",
];

const DESCRIPTION =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames tristique rutrum porta at eu tempus. Egestas aliquet ullamcorper nunc sed pellentesque. Faucibus dolor mauris nascetur ut feugiat hac rutrum tempor congue. Egestas eget adipiscing scelerisque.";

const BOTTOM_DESCRIPTION =
  "Egestas aliquet ullamcorper nunc sed pellentesque. Faucibus dolor mauris nascetur ut feugiat hac rutrum tempor congue. Egestas eget adipiscing scelerisque.";

class Steps6 extends BaseSteps {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "What We Do",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Work Algorithm",
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
        this.createStep("First Step", "Audit and Analysis of Competitors", DESCRIPTION, LIST_ITEMS, BOTTOM_DESCRIPTION),
        this.createStep("Second Step", "Implementation of the first changes", DESCRIPTION, [], BOTTOM_DESCRIPTION),
        this.createStep("Third Step", "Integrated development", BOTTOM_DESCRIPTION, LIST_ITEMS, ""),
        this.createStep("Fourth Step", "First results", DESCRIPTION, LIST_ITEMS, BOTTOM_DESCRIPTION),
      ],
    });

    this.addProp({
      type: "media",
      key: "listIcon",
      displayer: "List Icon",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "GoDotFill" },
    });

    this.addProp({
      type: "media",
      key: "activeIcon",
      displayer: "Active Icon",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "FiChevronUp" },
    });

    this.addProp({
      type: "media",
      key: "inactiveIcon",
      displayer: "Inactive Icon",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "FiChevronDown" },
    });

    this.addProp({
      type: "boolean",
      key: "mobileLine",
      displayer: "Mobile Line",
      value: true,
    });

    this.setComponentState("activeStep", 0);
    this.setComponentState("openStep", -1);
  }

  static getName(): string {
    return "Steps 6";
  }

  private createStep(tabTitle: string, title: string, description: string, listItems: string[], bottomDescription: string): TypeUsableComponentProps {
    return {
      type: "object",
      key: "step",
      displayer: "Step",
      value: [
        { type: "string", key: "tab_title", displayer: "Tab Title", value: tabTitle },
        { type: "string", key: "step_subtitle", displayer: "Subtitle", value: "" },
        { type: "string", key: "step_title", displayer: "Title", value: title },
        { type: "string", key: "step_description", displayer: "Description", value: description },
        {
          type: "array",
          key: "list_items",
          displayer: "List Items",
          value: listItems.map((text: string) => ({
            type: "object",
            key: "list_item",
            displayer: "List Item",
            value: [{ type: "string", key: "text", displayer: "Text", value: text }],
          })),
        },
        { type: "string", key: "step_bottom_description", displayer: "Bottom Description", value: bottomDescription },
        {
          type: "array",
          key: "step_buttons",
          displayer: "Buttons",
          value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
        },
      ],
    };
  }

  toggleAccordion(index: number) {
    this.setComponentState("openStep", this.getComponentState("openStep") === index ? -1 : index);
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
    const listIcon = this.getPropValue("listIcon") as TypeMediaInputValue;
    const activeIcon = this.getPropValue("activeIcon") as TypeMediaInputValue;
    const inactiveIcon = this.getPropValue("inactiveIcon") as TypeMediaInputValue;
    const mobileLine = this.getPropValue("mobileLine");

    // List items and buttons are arrays inside each step object, so the steps are read through getPropValue (castToObject leaves nested arrays raw).
    const steps: Step[] = (this.getPropValue("steps") || [])
      .map((item: any) => ({
        tab_title: item.getPropValue("tab_title"),
        step_subtitle: item.getPropValue("step_subtitle"),
        step_title: item.getPropValue("step_title"),
        step_description: item.getPropValue("step_description"),
        list_items: (item.getPropValue("list_items") || [])
          .map((listItem: any) => listItem.getPropValue("text"))
          .filter((text: React.JSX.Element) => this.castToString(text)),
        step_bottom_description: item.getPropValue("step_bottom_description"),
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
          this.castToString(step.tab_title) ||
          this.castToString(step.step_subtitle) ||
          this.castToString(step.step_title) ||
          this.castToString(step.step_description) ||
          step.list_items.length > 0 ||
          this.castToString(step.step_bottom_description) ||
          step.step_buttons.length > 0
      );

    const activeStep = Math.min(this.getComponentState("activeStep") ?? 0, Math.max(steps.length - 1, 0));
    const openStep = this.getComponentState("openStep");

    const renderCard = (step: Step) => {
      const stepSubtitleExist = this.castToString(step.step_subtitle);
      const stepTitleExist = this.castToString(step.step_title);
      const stepDescriptionExist = this.castToString(step.step_description);
      const bottomDescriptionExist = this.castToString(step.step_bottom_description);
      const hasCard =
        stepSubtitleExist || stepTitleExist || stepDescriptionExist || step.list_items.length > 0 || bottomDescriptionExist || step.step_buttons.length > 0;

      return (
        hasCard && (
          <div className={this.decorateCSS("card")}>
            <Base.VerticalContent className={this.decorateCSS("card-content")}>
              {stepSubtitleExist && <Base.H6 className={this.decorateCSS("step-subtitle")}>{step.step_subtitle}</Base.H6>}
              {stepTitleExist && <Base.H3 className={this.decorateCSS("step-title")}>{step.step_title}</Base.H3>}
              {stepDescriptionExist && <Base.P className={this.decorateCSS("step-description")}>{step.step_description}</Base.P>}
              {step.list_items.length > 0 && (
                <div className={this.decorateCSS("list")}>
                  {step.list_items.map((text: React.JSX.Element, listIndex: number) => (
                    <div key={listIndex} className={this.decorateCSS("list-item")}>
                      {this.mediaExist(listIcon) && <Base.Media value={listIcon} className={this.decorateCSS("list-icon")} />}
                      <Base.P className={this.decorateCSS("list-text")}>{text}</Base.P>
                    </div>
                  ))}
                </div>
              )}
              {bottomDescriptionExist && <Base.P className={this.decorateCSS("step-bottom-description")}>{step.step_bottom_description}</Base.P>}
              {step.step_buttons.length > 0 && this.renderButtons(step.step_buttons, "card-button-container")}
            </Base.VerticalContent>
          </div>
        )
      );
    };

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
            <div className={`${this.decorateCSS("steps")} ${!mobileLine ? this.decorateCSS("no-mobile-line") : ""}`}>
              <div className={this.decorateCSS("tab-list")}>
                {steps.map(
                  (step: Step, index: number) =>
                    this.castToString(step.tab_title) && (
                      <div
                        key={index}
                        className={`${this.decorateCSS("tab")} ${index === activeStep ? this.decorateCSS("active") : ""}`}
                        onClick={() => this.setComponentState("activeStep", index)}
                      >
                        <Base.P className={this.decorateCSS("tab-title")}>{step.tab_title}</Base.P>
                      </div>
                    )
                )}
              </div>

              <div className={this.decorateCSS("sections")}>
                {steps.map((step: Step, index: number) => {
                  const toggleIcon = index === openStep ? activeIcon : inactiveIcon;
                  return (
                    <div
                      key={index}
                      className={`${this.decorateCSS("section")} ${index === activeStep ? this.decorateCSS("active") : ""} ${index === openStep ? this.decorateCSS("open") : ""}`}
                    >
                      {(this.castToString(step.tab_title) || this.mediaExist(toggleIcon)) && (
                        <div className={this.decorateCSS("section-header")} onClick={() => this.toggleAccordion(index)}>
                          {this.castToString(step.tab_title) && <Base.P className={this.decorateCSS("section-title")}>{step.tab_title}</Base.P>}
                          {this.mediaExist(toggleIcon) && <Base.Media value={toggleIcon} className={this.decorateCSS("accordion-icon")} />}
                        </div>
                      )}
                      {renderCard(step)}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Steps6;
