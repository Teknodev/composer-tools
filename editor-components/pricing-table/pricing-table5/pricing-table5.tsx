import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import styles from "./pricing-table5.module.scss";
import { BasePricingTable } from "../../EditorComponent";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

class PricingTable5 extends BasePricingTable {
  
    
    constructor(props?: any) {
      super(props, styles);
      this.setComponentState("activePlan",0)

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
          ]
        }
      ]
    })

    this.addProp({
      type: "icon",
      key: "downIcon",
      displayer: "Down Icons",
      value: "FaAngleDown",

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
              value: " / Monthly"
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
              value: " / Monthly"
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
              value: " / Monthly"
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
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("left-content")}>
              <h6 className={this.decorateCSS("subtitle")}>
                {this.getPropValue("subtitle")}
              </h6>
              <h2 className={this.decorateCSS("title")}>
                {this.getPropValue("title")}
              </h2>
              <p className={this.decorateCSS("description")}>
                {this.getPropValue("description")}
              </p>

              <div className={this.decorateCSS("buttons")}>
                {this.getPropValue("buttons").map((button: any) =>
                  <ComposerLink path={button.getPropValue("url")}>
                    <div className={this.decorateCSS("button-box")}>
                      <span className={this.decorateCSS("button-text")}>{button.getPropValue("buttonText")}</span>
                    </div>
                  </ComposerLink>
                )}
              </div>

            </div>

            <div className={this.decorateCSS("right-content")}>
              {this.getPropValue("plans").map((plan: any, index: number) =>
                <div className={`${this.decorateCSS("plan")} ${index === this.getComponentState("activePlan") ? this.decorateCSS("active") : ""}`} onClick={() => this.onPlanClicked(index)}>
                  <div className={this.decorateCSS("plan-upper")}>
                    <span className={this.decorateCSS("plan-title")}>{plan.getPropValue("planTitle")}</span>
                    <div className={this.decorateCSS("icon-box")}>
                      <ComposerIcon name={this.getPropValue("downIcon")} />
                    </div>
                  </div>

                  <span className={this.decorateCSS("plan-description")}>{plan.getPropValue("description")}</span>
                  <div className={this.decorateCSS("plan-price-box")}>
                    <div className={this.decorateCSS("labels")}>
                      <span className={this.decorateCSS("price")}>{plan.getPropValue("price")}</span>
                      <span className={this.decorateCSS("price-description")}>{plan.getPropValue("priceDescription")}</span>
                    </div>

                    <ComposerLink path={plan.getPropValue("link")}>
                      <div className={this.decorateCSS("plan-button")}>
                        <span className={this.decorateCSS("plan-button-text")}>{plan.getPropValue("buttonText")}</span>
                      </div>
                    </ComposerLink>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
}
}


export default PricingTable5;
