import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import styles from "./pricing-table5.module.scss";
import { BasePricingTable, TypeMediaInputValue } from "../../EditorComponent";

import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type Card = {
  title: React.JSX.Element;
  description: React.JSX.Element;
  price: React.JSX.Element;
  duration: React.JSX.Element;
  buttons?: INPUTS.CastedButton[];
};

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
      value:
        "We are excited for our work and how it positively impacts clients. With over 12 years of experience we have been constantly providing excellent solutions.",
    });
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "VIEW ALL PLANS", "", "", null, "Primary"),
      ],
    });

    this.addProp({
      type: "media",
      key: "activeIcon",
      displayer: "Active Icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: { type: "icon", name: "FaAngleDown" },
    });

    this.addProp({
      type: "media",
      key: "deactiveIcon",
      displayer: "Deactive Icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: { type: "icon", name: "FaAngleUp" },
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
              key: "title",
              displayer: "Title",
              value: "Basic Plan",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod. ",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$19.99",
            },
            {
              type: "string",
              key: "duration",
              displayer: "Price Description",
              value: " / Monthly",
            },

            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "GET STARTED", "", "", null, "White"),
              ],
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
              key: "title",
              displayer: "Title",
              value: "Standard Plan",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod. ",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$29.99",
            },
            {
              type: "string",
              key: "duration",
              displayer: "Price Description",
              value: " / Monthly",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "GET STARTED", "", "", null, "White"),
              ],
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
              key: "title",
              displayer: "Title",
              value: "Premium Plan",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod. ",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$39.99",
            },
            {
              type: "string",
              key: "duration",
              displayer: "Price Description",
              value: " / Monthly",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "GET STARTED", "", "", null, "White"),
              ],
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "multiSelect",
      key: "animations",
      displayer: "Animations",
      value: ["animation1", "animation2"],
      additionalParams: {
        selectItems: ["animation1", "animation2", "animation3"],
      },
    });
  }

  private getButtonsFromItem(item: Card) {
    const buttonsArray = item?.buttons;
    if (!Array.isArray(buttonsArray)) return [];

    return buttonsArray.map((btn) => {
      const parent = btn?.value ?? btn;
      const icon = this.getPropValue("icon", { parent_object: parent });
      const media = icon || null;

      return {
        text: this.getPropValue("text", { parent_object: parent }),
        type: this.getPropValue("type", { parent_object: parent }),
        url: this.getPropValue("url", { parent_object: parent }),
        media,
      };
    });
  }

  private hasAnyButtonInItem(
    buttons: { text?: string; media?: TypeMediaInputValue }[]
  ) {
    if (!Array.isArray(buttons)) return false;
    return buttons.some(
      (b) =>
        this.castToString(b?.text) ||
        (b?.media && (b.media.name || b.media.url))
    );
  }

  static getName(): string {
    return "Pricing 5";
  }

  onPlanClicked(index: number) {
    this.setComponentState(
      "activePlan",
      index === this.getComponentState("activePlan") ? null : index
    );
  }

  render(): React.ReactNode {
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");

    const subtitleExist = this.castToString(subtitle);
    const titleExist = this.castToString(title);
    const descriptionExist = this.castToString(description);

    const hasValidButtons = buttons.some((btn) => {
      const buttonText = this.castToString(btn.text);
      const iconExist = btn.icon && btn.icon.name;
      return buttonText || iconExist;
    });

    const showLeftContent =
      subtitleExist || titleExist || descriptionExist || hasValidButtons;

    const plans = this.castToObject<Card[]>("plans");
    const rightItemsExist = plans.length > 0;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {showLeftContent && (
              <Base.VerticalContent
                className={`${this.decorateCSS("left-content")} ${!rightItemsExist && this.decorateCSS("left-content-single")
                  }`}
              >
                {subtitleExist && (
                  <Base.SectionSubTitle
                    className={this.decorateCSS("subtitle")}
                  >
                    {subtitle}
                  </Base.SectionSubTitle>
                )}
                {titleExist && (
                  <Base.SectionTitle className={this.decorateCSS("title")}>
                    {title}
                  </Base.SectionTitle>
                )}
                {descriptionExist && (
                  <Base.SectionDescription
                    className={this.decorateCSS("description")}
                  >
                    {description}
                  </Base.SectionDescription>
                )}
                {hasValidButtons && (
                  <div className={this.decorateCSS("buttons")}>
                    {buttons.map((btn, btnIndex: number) => {
                      const buttonText = this.castToString(btn.text);
                      const iconExist = btn.icon && btn.icon.name;

                      if (!buttonText && !iconExist) return null;

                      return (
                        <ComposerLink
                          path={btn.url}
                          key={`top-btn-${btnIndex}`}
                        >
                          <Base.Button
                            buttonType={btn.type}
                            className={this.decorateCSS("button-text")}
                          >
                            {iconExist && (
                              <Base.Media
                                value={btn.icon!}
                                className={this.decorateCSS("button-icon")}
                              />
                            )}
                            {buttonText && buttonText}
                          </Base.Button>
                        </ComposerLink>
                      );
                    })}
                  </div>
                )}
              </Base.VerticalContent>
            )}
            {rightItemsExist && (
              <div
                className={`${this.decorateCSS("right-content")} ${!showLeftContent && this.decorateCSS("right-content-single")
                  }`}
              >
                {plans.map((plan: Card, index: number) => {
                  const isActive =
                    index === this.getComponentState("activePlan");
                  const planTitleExist = this.castToString(plan.title);
                  const priceExist = this.castToString(plan.price);
                  const planDescription = this.castToString(
                    plan.duration
                  );

                  const planButtons = this.getButtonsFromItem(plan);
                  const hasPlanButtons = this.hasAnyButtonInItem(planButtons);

                  return (
                    <Base.VerticalContent
                      key={index}
                      className={`${this.decorateCSS("plan")} ${isActive && this.decorateCSS("active")
                        } 
                    ${this.getPropValue("animations") &&
                        this.getPropValue("animations")
                          .map((animation: string) => this.decorateCSS(animation))
                          .join(" ")
                        } `}
                      onClick={() => this.onPlanClicked(index)}
                    >
                      <div className={this.decorateCSS("plan-upper")}>
                        {planTitleExist && (
                          <Base.H6 className={this.decorateCSS("plan-title")}>
                            {plan.title}
                          </Base.H6>
                        )}
                        {(() => {
                          const icon = this.getPropValue(isActive ? "deactiveIcon" : "activeIcon");
                          const iconExist = icon && (icon.name || icon.url);
                          if (!iconExist) return null;
                          return (
                            <div
                              className={
                                isActive
                                  ? this.decorateCSS("icon-box-active")
                                  : this.decorateCSS("icon-box")
                              }
                            >
                              <Base.Media
                                value={icon}
                                className={this.decorateCSS("icon")}
                              />
                            </div>
                          );
                        })()}
                      </div>

                      {this.castToString(plan.description) && (
                        <Base.P className={this.decorateCSS("plan-description")}>
                          {plan.description}
                        </Base.P>
                      )}

                      <div className={this.decorateCSS("plan-price-box")}>
                        {(priceExist || planDescription) && (
                          <div className={this.decorateCSS("labels")}>
                            {priceExist && (
                              <Base.H5 className={this.decorateCSS("price")}>
                                {plan.price}
                              </Base.H5>
                            )}
                            {planDescription && (
                              <Base.P
                                className={this.decorateCSS(
                                  "price-description"
                                )}
                              >
                                {plan.duration}
                              </Base.P>
                            )}
                          </div>
                        )}
                        {hasPlanButtons && (
                          <div className={this.decorateCSS("plan-buttons")}>
                            {planButtons.map((btn, btnIndex: number) => {
                              const buttonText = btn.text;
                              const buttonMedia = btn.media;
                              const buttonUrl = btn.url || "#";
                              const buttonType = btn.type;

                              const btnTextExist =
                                this.castToString(buttonText);
                              const buttonMediaExist =
                                buttonMedia &&
                                (buttonMedia.name || buttonMedia.url);

                              if (!btnTextExist && !buttonMediaExist)
                                return null;

                              return (
                                <ComposerLink
                                  path={buttonUrl}
                                  key={`plan-btn-${index}-${btnIndex}`}
                                >
                                  <Base.Button
                                    buttonType={buttonType}
                                    className={this.decorateCSS("plan-button")}
                                  >
                                    {btnTextExist && (
                                      <Base.P
                                        className={this.decorateCSS(
                                          "button-text"
                                        )}
                                      >
                                        {buttonText}
                                      </Base.P>
                                    )}
                                    {buttonMediaExist && (
                                      <Base.Media
                                        value={buttonMedia}
                                        className={this.decorateCSS(
                                          "button-icon"
                                        )}
                                      />
                                    )}
                                  </Base.Button>
                                </ComposerLink>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </Base.VerticalContent>
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
