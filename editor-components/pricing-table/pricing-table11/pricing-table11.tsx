import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import styles from "./pricing-table11.module.scss";
import { BasePricingTable } from "../../EditorComponent";

import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type FeatureItem = {
  text: React.JSX.Element;
  icon: string;
};

class PricingTable11 extends BasePricingTable {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "bannerTitle",
      displayer: "Banner Title",
      value: "Everything you need for",
    });

    this.addProp({
      type: "string",
      key: "bannerHighlight",
      displayer: "Banner Highlight",
      value: "$99 a month",
    });

    this.addProp({
      type: "string",
      key: "bannerDescription",
      displayer: "Banner Description",
      value:
        "Includes every feature we offer plus unlimited events and unlimited team members.",
    });

    this.addProp(
      INPUTS.BUTTON(
        "bannerButton",
        "Banner Button",
        "START A 30 DAY FREE TRIAL",
        "",
        null,
        null,
        "Black"
      )
    );

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Everything you need",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "All-in-one platform",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Get the full TicketBalloon platform to power all your events at a single flat monthly price.",
    });

    this.addProp({
      type: "array",
      key: "features",
      displayer: "Features",
      value: [
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Unlimited events",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaCheckCircle",
            },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Secure payments",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaCheckCircle",
            },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Unlimited team members",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaCheckCircle",
            },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Own your data",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaCheckCircle",
            },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Unlimited bookings",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaCheckCircle",
            },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Real-time dashboards",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaCheckCircle",
            },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Group and individual bookings",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaCheckCircle",
            },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "CSV data exports",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaCheckCircle",
            },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Group leader admin panel",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaCheckCircle",
            },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Priority 24/7 support",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaCheckCircle",
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

  static getName(): string {
    return "Pricing 11";
  }

  render(): React.ReactNode {
    const bannerTitle = this.getPropValue("bannerTitle");
    const bannerHighlight = this.getPropValue("bannerHighlight");
    const bannerDescription = this.getPropValue("bannerDescription");
    const bannerButton = this.castToObject<INPUTS.CastedButton>("bannerButton");
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const features = this.castToObject<FeatureItem[]>("features");

    const bannerTitleExist = this.castToString(bannerTitle);
    const bannerHighlightExist = this.castToString(bannerHighlight);
    const bannerDescriptionExist = this.castToString(bannerDescription);
    const bannerButtonExist = this.castToString(bannerButton?.text);

    const showBannerLeft =
      bannerTitleExist || bannerHighlightExist || bannerDescriptionExist;
    const showBannerRight = bannerButtonExist;
    const showBanner = showBannerLeft || showBannerRight;

    const subtitleExist = this.castToString(subtitle);
    const titleExist = this.castToString(title);
    const descriptionExist = this.castToString(description);
    const showInfoLeft = subtitleExist || titleExist || descriptionExist;
    const showFeatures = features.length > 0;
    const showInfo = showInfoLeft || showFeatures;

    if (!showBanner && !showInfo) return null;

    const animations =
      (this.getPropValue("animations") &&
        this.getPropValue("animations")
          .map((animation: string) => this.decorateCSS(animation))
          .join(" ")) ||
      "";

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {showBanner && (
            <div className={this.decorateCSS("header")}>
              {showBannerLeft && (
                <div
                  className={`${this.decorateCSS("header-left")} ${
                    !showBannerRight
                      ? this.decorateCSS("header-left-single")
                      : ""
                  }`}
                >
                  {(bannerTitleExist || bannerHighlightExist) && (
                    <Base.H2 className={this.decorateCSS("header-title")}>
                      {bannerTitleExist && (
                        <span
                          className={this.decorateCSS("header-title-lead")}
                        >
                          {bannerTitle}
                        </span>
                      )}
                      {bannerTitleExist && bannerHighlightExist && " "}
                      {bannerHighlightExist && (
                        <span
                          className={this.decorateCSS("header-title-highlight")}
                        >
                          {bannerHighlight}
                        </span>
                      )}
                    </Base.H2>
                  )}
                  {bannerDescriptionExist && (
                    <Base.P className={this.decorateCSS("header-description")}>
                      {bannerDescription}
                    </Base.P>
                  )}
                </div>
              )}
              {showBannerRight && (
                <div
                  className={`${this.decorateCSS("header-right")} ${
                    !showBannerLeft
                      ? this.decorateCSS("header-right-single")
                      : ""
                  }`}
                >
                  <div className={this.decorateCSS("header-button-wrapper")}>
                    <ComposerLink path={bannerButton.url}>
                      <Base.Button
                        buttonType={bannerButton.type}
                        className={this.decorateCSS("header-button")}
                      >
                        {bannerButton.text}
                      </Base.Button>
                    </ComposerLink>
                  </div>
                </div>
              )}
            </div>
          )}

          {showInfo && (
            <div className={this.decorateCSS("info")}>
              {showInfoLeft && (
                <Base.VerticalContent
                  className={`${this.decorateCSS("info-left")} ${
                    !showFeatures ? this.decorateCSS("info-left-single") : ""
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
                </Base.VerticalContent>
              )}
              {showFeatures && (
                <div
                  className={`${this.decorateCSS("features")} ${
                    !showInfoLeft ? this.decorateCSS("features-single") : ""
                  }`}
                >
                  {features.map((item: FeatureItem, index: number) => {
                    const itemTextExist = this.castToString(item.text);
                    if (!itemTextExist && !item.icon) return null;
                    return (
                      <div
                        key={index}
                        className={`${this.decorateCSS("feature-item")} ${animations}`}
                      >
                        {item.icon && (
                          <Base.Icon
                            name={item.icon}
                            propsIcon={{
                              className: this.decorateCSS("feature-icon"),
                            }}
                          />
                        )}
                        {itemTextExist && (
                          <Base.P className={this.decorateCSS("feature-text")}>
                            {item.text}
                          </Base.P>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default PricingTable11;
