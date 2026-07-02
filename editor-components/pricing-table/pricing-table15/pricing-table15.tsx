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
  leftIconBackground: boolean;
  leftFeatures: FeatureItem[];
  leftItemCount: number;
};

type RightSection = {
  rightSetupFeePrefix: React.JSX.Element;
  rightSetupFeeValue: React.JSX.Element;
  rightSetupFeeSuffix: React.JSX.Element;
  rightOperator: TypeMediaInputValue;
  rightMonthlyPrefix: React.JSX.Element;
  rightMonthlyValue: React.JSX.Element;
  enableStatAnimation: boolean;
  animationDuration: number;
  rightMonthlySuffix: React.JSX.Element;
  rightCheckmarkFeaturesOverlay: boolean;
  rightCheckmarkFeatures: CheckmarkFeature[];
  rightItemCount: number;
  rightButtons: ButtonTypeObj[];
};

class PricingTable15 extends BasePricingTable {
  constructor(props?: Record<string, unknown>) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Full-featured",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Everything you need to talk with customers",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Choose the package that fits your business needs.",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Black")],
    });

    this.addProp({
      type: "object",
      key: "left",
      displayer: "Left Section",
      value: [
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
          key: "rightSetupFeePrefix",
          displayer: "Setup Prefix",
          value: "$",
        },
        {
          type: "string",
          key: "rightSetupFeeValue",
          displayer: "Setup Value",
          value: "99",
        },
        {
          type: "string",
          key: "rightSetupFeeSuffix",
          displayer: "Setup Suffix",
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
          key: "rightMonthlyPrefix",
          displayer: "Monthly Prefix",
          value: "$",
        },
        {
          type: "string",
          key: "rightMonthlyValue",
          displayer: "Monthly Value",
          value: "4",
        },
        {
          type: "string",
          key: "rightMonthlySuffix",
          displayer: "Monthly Suffix",
          value: "Per month",
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
            INPUTS.BUTTON("button", "Button", "GET STARTED TODAY", "", null, null, "Black"),
            INPUTS.BUTTON("button", "Button", "TRY IMPREZA NOW", "", null, null, "Black"),
          ],
        },
      ],
    });

  }

  static getName(): string {
    return "Pricing 15";
  }

  AnimatedNumber = ({ targetValue, duration = 4000, children }: { targetValue: number, duration?: number, children?: React.ReactNode }) => {
    const [currentValue, setCurrentValue] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

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
        } else {
          setIsFinished(true);
        }
      };
      animationId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationId);
    }, [targetValue, duration]);

    if (isFinished && children) {
      return <>{children}</>;
    }

    const decimalPlaces = targetValue % 1 === 0 ? 0 : 1;
    return <span>{currentValue.toFixed(decimalPlaces)}</span>;
  };

  render() {
    const leftProps = this.getPropValue("left") as TypeUsableComponentProps[];
    const rightProps = this.getPropValue("right") as TypeUsableComponentProps[];

    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
    const SectionVisibleButtons = buttons.filter(btn => this.castToString(btn.text));
    const leftIconBackground = !!this.getPropValue("leftIconBackground", { parent_object: leftProps });
    const leftItemCount = this.getPropValue("leftItemCount", { parent_object: leftProps }) || 1;

    const leftFeatures: LeftSection["leftFeatures"] = (this.getPropValue("leftFeatures", { parent_object: leftProps }) || []).map((item: TypeUsableComponentProps) => ({
      icon: this.getPropValue("icon", { parent_object: item.value }),
      featureSubtitle: this.getPropValue("featureSubtitle", { parent_object: item.value }),
      featureTitle: this.getPropValue("featureTitle", { parent_object: item.value }),
      featureDescription: this.getPropValue("featureDescription", { parent_object: item.value }),
    }));

    const rightSetupFeePrefixRaw = this.getPropValue("rightSetupFeePrefix", { parent_object: rightProps });
    const rightSetupFeeValueRaw = this.getPropValue("rightSetupFeeValue", { parent_object: rightProps });
    const rightSetupFeeSuffixRaw = this.getPropValue("rightSetupFeeSuffix", { parent_object: rightProps });
    const rightOperatorExist = this.getPropValue("rightOperator", { parent_object: rightProps }) as TypeMediaInputValue;
    const rightMonthlyPrefixRaw = this.getPropValue("rightMonthlyPrefix", { parent_object: rightProps });
    const rightMonthlyValueRaw = this.getPropValue("rightMonthlyValue", { parent_object: rightProps });
    const rightMonthlySuffixRaw = this.getPropValue("rightMonthlySuffix", { parent_object: rightProps });

    const rightSetupFeePrefixExist = this.castToString(rightSetupFeePrefixRaw);
    const rightSetupFeeValueExist = this.castToString(rightSetupFeeValueRaw);
    const rightSetupFeeSuffixExist = this.castToString(rightSetupFeeSuffixRaw);
    const rightMonthlyPrefixExist = this.castToString(rightMonthlyPrefixRaw);
    const rightMonthlyValueExist = this.castToString(rightMonthlyValueRaw);
    const rightMonthlySuffixExist = this.castToString(rightMonthlySuffixRaw);

    const isEditor = typeof document !== "undefined" && !!document.getElementById("playground");
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
    const leftColumnExist = subtitle || title || description || leftFeatures.length > 0 || SectionVisibleButtons.length > 0;
    const rightColumnExist = rightSetupFeeValueExist || rightSetupFeeSuffixExist || rightMonthlyValueExist || rightMonthlySuffixExist || rightCheckmarkFeatures.length > 0 || visibleButtons.length > 0;

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${!leftColumnExist && this.decorateCSS("no-left-column")} ${!rightColumnExist && this.decorateCSS("no-right-column")}`}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {leftColumnExist && (
            <Base.VerticalContent className={this.decorateCSS("left-column")}>
              {subtitle && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {this.getPropValue("subtitle")}
                </Base.SectionSubTitle>
              )}
              {title && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {this.getPropValue("title")}
                </Base.SectionTitle>
              )}
              {description && (
                <Base.SectionDescription className={this.decorateCSS("description")}>
                  {this.getPropValue("description")}
                </Base.SectionDescription>
              )}
              {(SectionVisibleButtons.length > 0 || (leftFeatures && leftFeatures.length > 0)) && (
                <div className={this.decorateCSS("features-container")}>
                  {SectionVisibleButtons.length > 0 && (
                    <div className={this.decorateCSS("button-container")}>
                      {SectionVisibleButtons.map((item: INPUTS.CastedButton, index: number) => {
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
                                <Base.H6 className={this.decorateCSS("feature-title")}>
                                  {feature.featureTitle}
                                </Base.H6>
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
                </div>
              )}
            </Base.VerticalContent>
          )}
          {rightColumnExist && (
            <div className={this.decorateCSS("right-column")}>
              <div className={this.decorateCSS("pricing-card")}>
                {(rightSetupFeeValueExist || rightSetupFeeSuffixExist || rightMonthlyValueExist || rightMonthlySuffixExist) && (
                  <div className={this.decorateCSS("prices-container")}>
                    {(rightSetupFeeValueExist || rightSetupFeeSuffixExist) && (
                      <div className={this.decorateCSS("setup-price-box")}>
                        {(rightSetupFeeValueExist || rightSetupFeePrefixExist) && (
                          <div className={this.decorateCSS("setup-price-value-container")}>
                            {rightSetupFeePrefixExist && (
                              <Base.H1 className={this.decorateCSS("setup-price-prefix")}>
                                {rightSetupFeePrefixRaw}
                              </Base.H1>
                            )}
                            {rightSetupFeeValueExist && (
                              <Base.H1 className={this.decorateCSS("setup-price-value")}>
                                {enableStatAnimation ? (
                                  <this.AnimatedNumber targetValue={parseFloat(rightSetupFeeValueExist.replace(/\s/g, '')) || 0} duration={animationDuration * 1000}>
                                    {rightSetupFeeValueExist}
                                  </this.AnimatedNumber>
                                ) : (
                                  rightSetupFeeValueExist
                                )}
                              </Base.H1>
                            )}
                          </div>
                        )}
                        {rightSetupFeeSuffixExist && (
                          <Base.P className={this.decorateCSS("setup-price-suffix")}>
                            {rightSetupFeeSuffixRaw}
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
                    {(rightMonthlyValueExist || rightMonthlySuffixExist) && (
                      <div className={this.decorateCSS("monthly-price-box")}>
                        {(rightMonthlyValueExist || rightMonthlyPrefixExist) && (
                          <div className={this.decorateCSS("monthly-price-value-container")}>
                            {rightMonthlyPrefixExist && (
                              <Base.H1 className={this.decorateCSS("monthly-price-prefix")}>
                                {rightMonthlyPrefixRaw}
                              </Base.H1>
                            )}
                            {rightMonthlyValueExist && (
                              <Base.H1 className={this.decorateCSS("monthly-price-value")}>
                                {enableStatAnimation ? (
                                  <this.AnimatedNumber targetValue={parseFloat(rightMonthlyValueExist.replace(/\s/g, '')) || 0} duration={animationDuration * 1000}>
                                    {rightMonthlyValueExist}
                                  </this.AnimatedNumber>
                                ) : (
                                  rightMonthlyValueExist
                                )}
                              </Base.H1>
                            )}
                          </div>
                        )}
                        {rightMonthlySuffixExist && (
                          <Base.P className={this.decorateCSS("monthly-price-suffix")}>
                            {rightMonthlySuffixRaw}
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
                        return (itemLabelExist || item.icon) && (
                          <div key={idx} className={this.decorateCSS("checkmark-item")}>
                            {item.icon && (
                              <Base.Media
                                value={item.icon}
                                className={`${this.decorateCSS("checkmark-icon")} ${item.icon.type === "image" && this.decorateCSS("checkmark-has-image")}`}
                              />
                            )}
                            {itemLabelExist && (
                              <Base.P className={this.decorateCSS("checkmark-text")}>
                                {item.label}
                              </Base.P>
                            )}
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
                          <Base.Button buttonType={item.type} className={this.decorateCSS("card-button")}>
                            <Base.P className={this.decorateCSS("card-button-text")}>{item.text}</Base.P>
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