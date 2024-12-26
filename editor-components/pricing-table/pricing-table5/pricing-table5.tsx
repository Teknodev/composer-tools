import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import styles from "./pricing-table5.module.scss";
import { BasePricingTable } from "../../EditorComponent";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class PricingTable5 extends BasePricingTable {
  constructor(props?: any) {
    super(props, styles);
    this.setComponentState("activePlan", 0);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "FLEXIBLE PRICING",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Tailored pricing plans for everyone.",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description ",
      value: "We are excited for our work and how it positively impacts clients. With over 12 years of experience we have been constantly providing excellent solutions.",
    });
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "VIEW ALL PLANS",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "icon",
      key: "moreIcon",
      displayer: "More Icon",
      value: "FaAngleDown",
    });

    this.addProp({
      type: "icon",
      key: "lessIcon",
      displayer: "Less Icon",
      value: "FaAngleUp",
    });

    this.addProp(INPUTS.BUTTON("button", "Button", "", "", "Primary"));
    this.addProp(INPUTS.BUTTON("planbutton", "Plan Button", "", "", "Tertiary"));

    this.addProp({
      type: "array",
      key: "plans",
      displayer: "Plans",
      value: [
        {
          type: "object",
          key: "plan",
          displayer: "Plan",
          value: [
            {
              type: "string",
              key: "planTitle",
              displayer: "PlanType",
              value: "Basic Plan",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod. ",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$19.99",
            },
            {
              type: "string",
              key: "priceDescription",
              displayer: "Price Description",
              value: " / Monthly",
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "GET STARTED",
            },
            {
              type: "page",
              key: "link",
              displayer: "Button Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "plan",
          displayer: "Plans",
          value: [
            {
              type: "string",
              key: "planTitle",
              displayer: "PlanType",
              value: "Standard Plan",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod. ",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$29.99",
            },
            {
              type: "string",
              key: "priceDescription",
              displayer: "Price Description",
              value: " / Monthly",
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "GET STARTED",
            },
            {
              type: "page",
              key: "link",
              displayer: "Button Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "plans",
          displayer: "Plans",
          value: [
            {
              type: "string",
              key: "planTitle",
              displayer: "PlanType",
              value: "Premium Plan",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod. ",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$39.99",
            },
            {
              type: "string",
              key: "priceDescription",
              displayer: "Price Description",
              value: " / Monthly",
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "GET STARTED",
            },
            {
              type: "page",
              key: "link",
              displayer: "Button Link",
              value: "",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Pricing List 5";
  }

  onPlanClicked(index: number) {
    this.setComponentState("activePlan", index === this.getComponentState("activePlan") ? null : index);
  }

  render(): React.ReactNode {
    const buttons = this.getPropValue("buttons");

    const buttontype: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

    const planButton: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("planbutton");

    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");

    const subtitleExist = this.castToString(subtitle);
    const titleExist = this.castToString(title);
    const descriptionExist = this.castToString(description);
    const showLeftContent = subtitleExist || titleExist || descriptionExist || buttons.length > 0;

    const plans = this.getPropValue("plans");
    const rightItemsExist = plans.length > 0;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {showLeftContent && (
              <Base.VerticalContent className={rightItemsExist ? this.decorateCSS("left-content") : this.decorateCSS("left-content-single")}>
                {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
                {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
                <div className={this.decorateCSS("buttons")}>
                  {buttons?.map((button: any) => {
                    const buttonText = this.castToString(button.getPropValue("buttonText"));
                    return (
                      buttonText && (
                        <ComposerLink path={button.getPropValue("url")}>
                          <div className={this.decorateCSS("button-box")}>
                            <Base.Button buttonType={buttontype.type} className={this.decorateCSS("button-text")}>
                              {button.getPropValue("buttonText")}
                            </Base.Button>
                          </div>
                        </ComposerLink>
                      )
                    );
                  })}
                </div>
              </Base.VerticalContent>
            )}
            {rightItemsExist && (
              <div className={showLeftContent ? this.decorateCSS("right-content") : this.decorateCSS("right-content-single")}>
                {this.getPropValue("plans").map((plan: any, index: number) => {
                  const isActive = index === this.getComponentState("activePlan");
                  const planTitleExist = this.castToString(plan.getPropValue("planTitle"));
                  const priceExist = this.castToString(plan.getPropValue("price"));
                  const planDescription = this.castToString(plan.getPropValue("priceDescription"));
                  const planButtonText = this.castToString(plan.getPropValue("buttonText"));
                  return (
                    <div className={`${this.decorateCSS("plan")} ${isActive ? this.decorateCSS("active") : ""}`} onClick={() => this.onPlanClicked(index)}>
                      <div className={this.decorateCSS("plan-upper")}>
                        {planTitleExist && <Base.H5 className={this.decorateCSS("plan-title")}>{plan.getPropValue("planTitle")}</Base.H5>}
                        <div className={isActive ? this.decorateCSS("icon-box-active") : this.decorateCSS("icon-box")}>
                          <ComposerIcon propsIcon={{ className: this.decorateCSS("icon") }} name={this.getPropValue(isActive ? "lessIcon" : "moreIcon")} />
                        </div>
                      </div>

                      <Base.P className={this.decorateCSS("plan-description")}>{plan.getPropValue("description")}</Base.P>

                      <div className={this.decorateCSS("plan-price-box")}>
                        {(priceExist || planDescription) && (
                          <div className={this.decorateCSS("labels")}>
                            {priceExist && <Base.H5 className={this.decorateCSS("price")}>{plan.getPropValue("price")}</Base.H5>}
                            {planDescription && <Base.P className={this.decorateCSS("price-description")}>{plan.getPropValue("priceDescription")}</Base.P>}
                          </div>
                        )}

                        <ComposerLink path={plan.getPropValue("link")}>
                          {planButtonText && (
                            <Base.Button buttonType={planButton.type} className={this.decorateCSS("plan-button")}>
                              {plan.getPropValue("buttonText")}
                            </Base.Button>
                          )}
                        </ComposerLink>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default PricingTable5;
