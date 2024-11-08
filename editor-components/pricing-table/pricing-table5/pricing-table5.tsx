import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import styles from "./pricing-table5.module.scss";
import { BasePricingTable } from "../../EditorComponent";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";

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
              value: "https://craftohtml.themezaa.com/demo-business-pricing.html",
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
              value: "https://craftohtml.themezaa.com/demo-business-pricing.html",
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
              value: "https://craftohtml.themezaa.com/demo-business-pricing.html",
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
              value: "https://craftohtml.themezaa.com/demo-business-pricing.html",
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
    const subTitle = this.getPropValue("subtitle", { as_string: true });
    const title = this.getPropValue("title", { as_string: true });
    const description = this.getPropValue("description", { as_string: true });
    const buttons = this.getPropValue("buttons");
    const showLeftContent = subTitle || title || description || !!buttons.length;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {showLeftContent && (
              <Base.VerticalContent className={this.decorateCSS("left-content")}>
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>
                <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>
                <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>
                <div className={this.decorateCSS("buttons")}>
                  {buttons?.map((button: any) => {
                    const buttonText = this.castToString(button.getPropValue("buttonText"));
                    return (
                      buttonText && (
                        <ComposerLink path={button.getPropValue("url")}>
                          <div className={this.decorateCSS("button-box")}>
                            <button className={this.decorateCSS("button-text")}>{buttonText}</button>
                          </div>
                        </ComposerLink>
                      )
                    );
                  })}
                </div>
              </Base.VerticalContent>
            )}
            <div className={this.decorateCSS("right-content")}>
              {this.getPropValue("plans").map((plan: any, index: number) => {
                const isActive = index === this.getComponentState("activePlan");
                return (
                  <div className={`${this.decorateCSS("plan")} ${isActive ? this.decorateCSS("active") : ""}`} onClick={() => this.onPlanClicked(index)}>
                    <div className={this.decorateCSS("plan-upper")}>
                      <Base.H5 className={this.decorateCSS("plan-title")}>{plan.getPropValue("planTitle")}</Base.H5>
                      <div className={this.decorateCSS("icon-box")}>
                        <ComposerIcon name={this.getPropValue(isActive ? "lessIcon" : "moreIcon")} />
                      </div>
                    </div>

                    <Base.P className={this.decorateCSS("plan-description")}>{plan.getPropValue("description")}</Base.P>

                    <div className={this.decorateCSS("plan-price-box")}>
                      <div className={this.decorateCSS("labels")}>
                        <Base.H5 className={this.decorateCSS("price")}>{plan.getPropValue("price")}</Base.H5>
                        <Base.P className={this.decorateCSS("price-description")}>{plan.getPropValue("priceDescription")}</Base.P>
                      </div>

                      <ComposerLink path={plan.getPropValue("link")}>
                        <div className={this.decorateCSS("plan-button")}>
                          <Base.H5 className={this.decorateCSS("plan-button-text")}>{plan.getPropValue("buttonText")}</Base.H5>
                        </div>
                      </ComposerLink>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default PricingTable5;
