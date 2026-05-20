import * as React from "react";
import { useState, useEffect } from "react";
import styles from "./pricing-table15.module.scss";
import { BasePricingTable, TypeMediaInputValue, TypeUsableComponentProps } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base, TypeButton } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type FeatureItem = {
  icon: TypeMediaInputValue;
  featureSubtitle: React.JSX.Element;
  featureTitle: React.JSX.Element;
  featureDescription: React.JSX.Element;
};

type CheckmarkFeature = {
  icon: TypeMediaInputValue;
  label: React.JSX.Element;
};

type ButtonTypeObj = {
  text: React.JSX.Element;
  url: string;
  type: TypeButton;
};

type LeftSection = {
  leftSubtitle: React.JSX.Element;
  leftTitle: React.JSX.Element;
  leftDescription: React.JSX.Element;
  leftIconBackground: boolean;
  leftFeatures: FeatureItem[];
  leftItemCount: number;
};

type RightSection = {
  rightSetupFeeSymbol: React.JSX.Element;
  rightSetupFeePrice: React.JSX.Element;
  rightSetupFeeLabel: React.JSX.Element;
  rightOperator: TypeMediaInputValue;
  rightMonthlySymbol: React.JSX.Element;
  rightMonthlyPrice: React.JSX.Element;
  enableStatAnimation: boolean;
  animationDuration: number;
  rightMonthlyLabel: React.JSX.Element;
  rightCheckmarkFeaturesOverlay: boolean;
  rightCheckmarkFeatures: CheckmarkFeature[];
  rightItemCount: number;
  rightButtons: ButtonTypeObj[];
};

class PricingTable15 extends BasePricingTable {
  constructor(props?: Record<string, unknown>) {
    super(props, styles);

    this.addProp({
      type: "object",
      key: "left",
      displayer: "Left Section",
      value: [
        {
          type: "string",
          key: "leftSubtitle",
          displayer: "Subtitle",
          value: "Full-featured",
        },
        {
          type: "string",
          key: "leftTitle",
          displayer: "Title",
          value: "Everything you need to talk with customers",
        },
        {
          type: "string",
          key: "leftDescription",
          displayer: "Description",
          value: "Choose the package that fits your business needs.",
        },
        {
          type: "boolean",
          key: "leftIconBackground",
          displayer: "Icon Background",
          value: true,
        },
        {
          type: "array",
          key: "leftFeatures",
          displayer: "Features",
          value: [
            {
              type: "object",
              key: "featureItem",
              displayer: "Feature",
              value: [
                {
                  type: "media",
                  key: "icon",
                  displayer: "Icon",
                  additionalParams: {
                    availableTypes: ["image", "icon"],
                  },
                  value: {
                    type: "icon",
                    name: "FaListUl",
                  },
                },
                {
                  type: "string",
                  key: "featureSubtitle",
                  displayer: "Subtitle",
                  value: "",
                },
                {
                  type: "string",
                  key: "featureTitle",
                  displayer: "Title",
                  value: "List view",
                },
                {
                  type: "string",
                  key: "featureDescription",
                  displayer: "Description",
                  value: "Leverage agile frameworks to provide a robust synopsis for high level overviews",
                },
              ],
            },
            {
              type: "object",
              key: "featureItem",
              displayer: "Feature",
              value: [
                {
                  type: "media",
                  key: "icon",
                  displayer: "Icon",
                  additionalParams: {
                    availableTypes: ["image", "icon"],
                  },
                  value: {
                    type: "icon",
                    name: "FaThLarge",
                  },
                },
                {
                  type: "string",
                  key: "featureSubtitle",
                  displayer: "Subtitle",
                  value: "",
                },
                {
                  type: "string",
                  key: "featureTitle",
                  displayer: "Title",
                  value: "Boards",
                },
                {
                  type: "string",
                  key: "featureDescription",
                  displayer: "Description",
                  value: "Leverage agile frameworks to provide a robust synopsis for high level overviews",
                },
              ],
            },
            {
              type: "object",
              key: "featureItem",
              displayer: "Feature",
              value: [
                {
                  type: "media",
                  key: "icon",
                  displayer: "Icon",
                  additionalParams: {
                    availableTypes: ["image", "icon"],
                  },
                  value: {
                    type: "icon",
                    name: "FaCalendarAlt",
                  },
                },
                {
                  type: "string",
                  key: "featureSubtitle",
                  displayer: "Subtitle",
                  value: "",
                },
                {
                  type: "string",
                  key: "featureTitle",
                  displayer: "Title",
                  value: "Calendar",
                },
                {
                  type: "string",
                  key: "featureDescription",
                  displayer: "Description",
                  value: "Leverage agile frameworks to provide a robust synopsis for high level overviews",
                },
              ],
            },
          ],
        },
        {
          type: "number",
          key: "leftItemCount",
          displayer: "Item Count in a Row",
          value: 1,
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "right",
      displayer: "Right Section",
      value: [
        {
          type: "string",
          key: "rightSetupFeeSymbol",
          displayer: "Setup Symbol",
          value: "$",
        },
        {
          type: "string",
          key: "rightSetupFeePrice",
          displayer: "Setup Price",
          value: "99",
        },
        {
          type: "string",
          key: "rightSetupFeeLabel",
          displayer: "Setup Fee Label",
          value: "Setup fee",
        },
        {
          type: "media",
          key: "rightOperator",
          displayer: "Operator",
          additionalParams: {
            availableTypes: ["image", "icon"],
          },
          value: {
            type: "icon",
            name: "FaPlus",
          },
        },
        {
          type: "string",
          key: "rightMonthlySymbol",
          displayer: "Monthly Symbol",
          value: "$",
        },
        {
          type: "string",
          key: "rightMonthlyPrice",
          displayer: "Monthly Price",
          value: "4",
        },
        {
          type: "boolean",
          key: "enableStatAnimation",
          displayer: "Stat Animation",
          value: true,
        },
        {
          type: "number",
          key: "animationDuration",
          displayer: "Stat Animation Duration",
          value: 3,
        },
        {
          type: "string",
          key: "rightMonthlyLabel",
          displayer: "Monthly Label",
          value: "Per month",
        },
        {
          type: "boolean",
          key: "rightCheckmarkFeaturesOverlay",
          displayer: "Features Overlay",
          value: true,
        },
        {
          type: "array",
          key: "rightCheckmarkFeatures",
          displayer: "Features",
          value: [
            {
              type: "object",
              key: "checkmarkItem",
              displayer: "Item",
              value: [
                {
                  type: "media",
                  key: "icon",
                  displayer: "Icon",
                  additionalParams: {
                    availableTypes: ["image", "icon"],
                  },
                  value: {
                    type: "icon",
                    name: "FaCheck",
                  },
                },
                {
                  type: "string",
                  key: "label",
                  displayer: "Label",
                  value: "Unlimited events",
                },
              ],
            },
            {
              type: "object",
              key: "checkmarkItem",
              displayer: "Item",
              value: [
                {
                  type: "media",
                  key: "icon",
                  displayer: "Icon",
                  additionalParams: {
                    availableTypes: ["image", "icon"],
                  },
                  value: {
                    type: "icon",
                    name: "FaCheck",
                  },
                },
                {
                  type: "string",
                  key: "label",
                  displayer: "Label",
                  value: "Unlimited sales",
                },
              ],
            },
            {
              type: "object",
              key: "checkmarkItem",
              displayer: "Item",
              value: [
                {
                  type: "media",
                  key: "icon",
                  displayer: "Icon",
                  additionalParams: {
                    availableTypes: ["image", "icon"],
                  },
                  value: {
                    type: "icon",
                    name: "FaCheck",
                  },
                },
                {
                  type: "string",
                  key: "label",
                  displayer: "Label",
                  value: "Own your data",
                },
              ],
            },
            {
              type: "object",
              key: "checkmarkItem",
              displayer: "Item",
              value: [
                {
                  type: "media",
                  key: "icon",
                  displayer: "Icon",
                  additionalParams: {
                    availableTypes: ["image", "icon"],
                  },
                  value: {
                    type: "icon",
                    name: "FaCheck",
                  },
                },
                {
                  type: "string",
                  key: "label",
                  displayer: "Label",
                  value: "No per user fees",
                },
              ],
            },
            {
              type: "object",
              key: "checkmarkItem",
              displayer: "Item",
              value: [
                {
                  type: "media",
                  key: "icon",
                  displayer: "Icon",
                  additionalParams: {
                    availableTypes: ["image", "icon"],
                  },
                  value: {
                    type: "icon",
                    name: "FaCheck",
                  },
                },
                {
                  type: "string",
                  key: "label",
                  displayer: "Label",
                  value: "24/7 support",
                },
              ],
            },
            {
              type: "object",
              key: "checkmarkItem",
              displayer: "Item",
              value: [
                {
                  type: "media",
                  key: "icon",
                  displayer: "Icon",
                  additionalParams: {
                    availableTypes: ["image", "icon"],
                  },
                  value: {
                    type: "icon",
                    name: "FaCheck",
                  },
                },
                {
                  type: "string",
                  key: "label",
                  displayer: "Label",
                  value: "14 days free",
                },
              ],
            },
          ],
        },
        {
          type: "number",
          key: "rightItemCount",
          displayer: "Item Count in a Row",
          value: 2,
        },
        {
          type: "array",
          key: "rightButtons",
          displayer: "Buttons",
          value: [
            INPUTS.BUTTON("button", "Button 1", "GET STARTED TODAY", "", null, null, "White"),
            INPUTS.BUTTON("button", "Button 2", "TRY IMPREZA NOW", "", null, null, "White"),
          ],
        },
      ],
    });

  }

  static getName(): string {
    return "Pricing 15";
  }

  AnimatedNumber = ({ targetValue, duration = 4000 }: { targetValue: number, duration?: number }) => {
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
      const startTime = Date.now();
      let animationId: number;
      const easeOutQuart = (t: number): number => 1 - Math.pow(1 - t, 4);
      const lerp = (start: number, end: number, t: number): number => start + (end - start) * t;

      const animate = () => {
        const progress = Math.min((Date.now() - startTime) / duration, 1);
        const easedProgress = easeOutQuart(progress);

        setCurrentValue(lerp(0, targetValue, easedProgress));
        if (progress < 1) {
          animationId = requestAnimationFrame(animate);
        }
      };
      animationId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationId);
    }, [targetValue, duration]);

    const decimalPlaces = targetValue % 1 === 0 ? 0 : 1;
    return <span>{currentValue.toFixed(decimalPlaces)}</span>;
  };

  render() {
    const leftProps = this.getPropValue("left") as TypeUsableComponentProps[];
    const rightProps = this.getPropValue("right") as TypeUsableComponentProps[];

    const leftSubtitle = this.castToString(this.getPropValue("leftSubtitle", { parent_object: leftProps }));
    const leftTitle = this.castToString(this.getPropValue("leftTitle", { parent_object: leftProps }));
    const leftDescription = this.castToString(this.getPropValue("leftDescription", { parent_object: leftProps }));
    const leftIconBackground = !!this.getPropValue("leftIconBackground", { parent_object: leftProps });
    const leftItemCount = this.getPropValue("leftItemCount", { parent_object: leftProps }) || 1;

    const leftFeatures: LeftSection["leftFeatures"] = (this.getPropValue("leftFeatures", { parent_object: leftProps }) || []).map((item: TypeUsableComponentProps) => ({
      icon: this.getPropValue("icon", { parent_object: item.value }),
      featureSubtitle: this.getPropValue("featureSubtitle", { parent_object: item.value }),
      featureTitle: this.getPropValue("featureTitle", { parent_object: item.value }),
      featureDescription: this.getPropValue("featureDescription", { parent_object: item.value }),
    }));

    const rightSetupFeeSymbolExist = this.castToString(this.getPropValue("rightSetupFeeSymbol", { parent_object: rightProps }));
    const rightSetupFeePriceExist = this.castToString(this.getPropValue("rightSetupFeePrice", { parent_object: rightProps }));
    const rightSetupFeeLabelExist = this.castToString(this.getPropValue("rightSetupFeeLabel", { parent_object: rightProps }));
    const rightOperatorExist = this.getPropValue("rightOperator", { parent_object: rightProps }) as TypeMediaInputValue;
    const rightMonthlySymbolExist = this.castToString(this.getPropValue("rightMonthlySymbol", { parent_object: rightProps }));
    const rightMonthlyPriceExist = this.castToString(this.getPropValue("rightMonthlyPrice", { parent_object: rightProps }));
    const rightMonthlyLabelExist = this.castToString(this.getPropValue("rightMonthlyLabel", { parent_object: rightProps }));

    const enableStatAnimation = this.getPropValue("enableStatAnimation", { parent_object: rightProps });
    const animationDuration = this.getPropValue("animationDuration", { parent_object: rightProps }) || 3;
    const rightCheckmarkFeaturesOverlay = !!this.getPropValue("rightCheckmarkFeaturesOverlay", { parent_object: rightProps });
    const rightItemCount = this.getPropValue("rightItemCount", { parent_object: rightProps }) || 2;

    const rightCheckmarkFeatures: RightSection["rightCheckmarkFeatures"] = (this.getPropValue("rightCheckmarkFeatures", { parent_object: rightProps }) || []).map((item: TypeUsableComponentProps) => ({
      icon: this.getPropValue("icon", { parent_object: item.value }),
      label: this.getPropValue("label", { parent_object: item.value }),
    }));

    const rightButtons: RightSection["rightButtons"] = (this.getPropValue("rightButtons", { parent_object: rightProps }) || []).map((item: TypeUsableComponentProps) => ({
      text: this.getPropValue("text", { parent_object: item.value }),
      url: this.getPropValue("url", { parent_object: item.value }),
      type: this.getPropValue("type", { parent_object: item.value }),
    }));

    const visibleButtons = rightButtons.filter(btn => this.castToString(btn.text));

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(leftSubtitle || leftTitle || leftDescription || leftFeatures.length > 0) && (
            <Base.VerticalContent className={this.decorateCSS("left-column")}>
              {leftSubtitle && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {this.getPropValue("leftSubtitle", { parent_object: leftProps })}
                </Base.SectionSubTitle>
              )}
              {leftTitle && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {this.getPropValue("leftTitle", { parent_object: leftProps })}
                </Base.SectionTitle>
              )}
              {leftDescription && (
                <Base.SectionDescription className={this.decorateCSS("description")}>
                  {this.getPropValue("leftDescription", { parent_object: leftProps })}
                </Base.SectionDescription>
              )}
              {leftFeatures && leftFeatures.length > 0 && (
                <Base.ListGrid
                  gridCount={{
                    pc: leftItemCount,
                    tablet: 1,
                    phone: 1,
                  }}
                  className={this.decorateCSS("features-list")}
                >
                  {leftFeatures.map((feature: FeatureItem, idx: number) => {
                    const featureSubtitleExist = this.castToString(feature.featureSubtitle);
                    const featureTitleExist = this.castToString(feature.featureTitle);
                    const featureDescExist = this.castToString(feature.featureDescription);

                    return (
                      <div key={idx} className={this.decorateCSS("feature-item")}>
                        {feature.icon && (
                          <div className={`${this.decorateCSS("feature-icon-wrapper")} ${leftIconBackground && this.decorateCSS("has-bg")}`}>
                            <Base.Media
                              value={feature.icon}
                              className={`${this.decorateCSS("feature-icon")} ${feature.icon.type === "image" && this.decorateCSS("feature-has-image")}`}
                            />
                          </div>
                        )}
                        <Base.VerticalContent className={this.decorateCSS("feature-content")}>
                          {featureSubtitleExist && (
                            <Base.P className={this.decorateCSS("feature-subtitle")}>
                              {feature.featureSubtitle}
                            </Base.P>
                          )}
                          {featureTitleExist && (
                            <Base.H5 className={this.decorateCSS("feature-title")}>
                              {feature.featureTitle}
                            </Base.H5>
                          )}
                          {featureDescExist && (
                            <Base.P className={this.decorateCSS("feature-description")}>
                              {feature.featureDescription}
                            </Base.P>
                          )}
                        </Base.VerticalContent>
                      </div>
                    );
                  })}
                </Base.ListGrid>
              )}
            </Base.VerticalContent>
          )}
          {(rightSetupFeePriceExist || rightSetupFeeLabelExist || rightMonthlyPriceExist || rightMonthlyLabelExist || rightCheckmarkFeatures.length > 0 || visibleButtons.length > 0) && (
            <div className={this.decorateCSS("right-column")}>
              <div className={this.decorateCSS("pricing-card")}>
                {(rightSetupFeePriceExist || rightSetupFeeLabelExist || rightMonthlyPriceExist || rightMonthlyLabelExist) && (
                  <div className={this.decorateCSS("prices-container")}>
                    {(rightSetupFeePriceExist || rightSetupFeeLabelExist) && (
                      <div className={this.decorateCSS("setup-price-box")}>
                        {(rightSetupFeePriceExist || rightSetupFeeSymbolExist) && (
                          <Base.H1 className={this.decorateCSS("setup-price-value")}>
                            <span className={this.decorateCSS("stat-symbol")}>{rightSetupFeeSymbolExist}</span>
                            {enableStatAnimation ? (
                              <this.AnimatedNumber targetValue={parseFloat(rightSetupFeePriceExist) || 0} duration={animationDuration * 1000} />
                            ) : (
                              rightSetupFeePriceExist
                            )}
                          </Base.H1>
                        )}
                        {rightSetupFeeLabelExist && (
                          <Base.P className={this.decorateCSS("setup-price-label")}>
                            {this.getPropValue("rightSetupFeeLabel", { parent_object: rightProps })}
                          </Base.P>
                        )}
                      </div>
                    )}
                    {rightOperatorExist && (
                      <div className={this.decorateCSS("price-operator")}>
                        <Base.Media
                          value={rightOperatorExist}
                          className={`${this.decorateCSS("operator-icon")} ${rightOperatorExist.type === "image" && this.decorateCSS("operator-has-image")}`}
                        />
                      </div>
                    )}
                    {(rightMonthlyPriceExist || rightMonthlyLabelExist) && (
                      <div className={this.decorateCSS("monthly-price-box")}>
                        {(rightMonthlyPriceExist || rightMonthlySymbolExist) && (
                          <Base.H1 className={this.decorateCSS("monthly-price-value")}>
                            <span className={this.decorateCSS("stat-symbol")}>{rightMonthlySymbolExist}</span>
                            {enableStatAnimation ? (
                              <this.AnimatedNumber targetValue={parseFloat(rightMonthlyPriceExist) || 0} duration={animationDuration * 1000} />
                            ) : (
                              rightMonthlyPriceExist
                            )}
                          </Base.H1>
                        )}
                        {rightMonthlyLabelExist && (
                          <Base.P className={this.decorateCSS("monthly-price-label")}>
                            {this.getPropValue("rightMonthlyLabel", { parent_object: rightProps })}
                          </Base.P>
                        )}
                      </div>
                    )}
                  </div>
                )}
                {rightCheckmarkFeatures && rightCheckmarkFeatures.length > 0 && (
                  <div className={`${this.decorateCSS("checkmark-grid-container")} ${!rightCheckmarkFeaturesOverlay && this.decorateCSS("no-overlay")}`}>
                    {rightCheckmarkFeaturesOverlay && (
                      <div className={this.decorateCSS("checkmark-grid-overlay")} />
                    )}
                    <Base.ListGrid
                      gridCount={{
                        pc: rightItemCount,
                        tablet: 2,
                        phone: 1,
                      }}
                      className={this.decorateCSS("checkmark-grid")}
                    >
                      {rightCheckmarkFeatures.map((item: CheckmarkFeature, idx: number) => {
                        const itemLabelExist = this.castToString(item.label);
                        return itemLabelExist && (
                          <div key={idx} className={this.decorateCSS("checkmark-item")}>
                            {item.icon && (
                              <Base.Media
                                value={item.icon}
                                className={`${this.decorateCSS("checkmark-icon")} ${item.icon.type === "image" && this.decorateCSS("checkmark-has-image")}`}
                              />
                            )}
                            <Base.P className={this.decorateCSS("checkmark-text")}>
                              {item.label}
                            </Base.P>
                          </div>
                        );
                      })}
                    </Base.ListGrid>
                  </div>
                )}
                {visibleButtons.length > 0 && (
                  <div className={this.decorateCSS("card-actions")}>
                    {visibleButtons.map((item: ButtonTypeObj, index: number) => {
                      return this.castToString(item.text) && (
                        <ComposerLink key={`button-${index}`} path={item.url}>
                          <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                            <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                          </Base.Button>
                        </ComposerLink>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default PricingTable15;