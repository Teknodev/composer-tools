import { BaseFeature } from "../../EditorComponent";
import styles from "./feature29.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class Feature29 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "heading",
      displayer: "Heading",
      value: "Meeting your needs",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Reliable payouts engine, total dependability",
    });

    this.addProp({
      type: "object",
      key: "topLeftSide",
      displayer: "Left Side Top Card",
      value: [
        {
          type: "boolean",
          key: "visibility",
          displayer: "Visibility",
          value: true,
        },
        {
          type: "image",
          key: "topLeftSideImage",
          displayer: "Image",
          value: "",
        },
        {
          type: "string",
          key: "topLeftSideTitle",
          displayer: "Title",
          value: "One integration, all your transaction needs",
        },
        {
          type: "string",
          key: "topLeftSideDescription",
          displayer: "Description",
          value:
            "Every payment option covered. Designed to support diverse gaming setups...",
        },
        INPUTS.BUTTON("button", "Button", "Link", "", null, null, "Primary"),
      ],
    });

    this.addProp({
      type: "object",
      key: "bottomLeftSide",
      displayer: "Left Side Bottom Card",
      value: [
        {
          type: "boolean",
          key: "visibility",
          displayer: "Visibility",
          value: true,
        },
        {
          type: "image",
          key: "bottomLeftSideImage",
          displayer: "Image",
          value: "",
        },
        {
          type: "string",
          key: "bottomLeftSideTitle",
          displayer: "Title",
          value: "Seamless setup, faster payments",
        },
        {
          type: "string",
          key: "bottomLeftSideDescription",
          displayer: "Description",
          value:
            "Streamlined onboarding that is quick, transparent, and efficient.",
        },
        INPUTS.BUTTON("button", "Button", "Link", "", null, null, "Primary"),
      ],
    });

    this.addProp({
      type: "object",
      key: "bottomLeftSide2",
      displayer: "Left Side Bottom Card 2",
      value: [
        {
          type: "boolean",
          key: "visibility",
          displayer: "Visibility",
          value: true,
        },
        {
          type: "image",
          key: "bottomLeftSide2Image",
          displayer: "Image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/690e36303596a1002b214633?alt=media",
        },
        {
          type: "string",
          key: "bottomLeftSide2Title",
          displayer: "Title",
          value: "Seamless setup, faster payments",
        },
        {
          type: "string",
          key: "bottomLeftSide2Description",
          displayer: "Description",
          value:
            "Streamlined onboarding that is quick, transparent, and efficient.",
        },
        INPUTS.BUTTON(
          "button",
          "Button",
          "Select Now",
          "",
          null,
          null,
          "Primary"
        ),
      ],
    });

    this.addProp({
      type: "object",
      key: "middleSide",
      displayer: "Middle Side Card",
      value: [
        {
          type: "boolean",
          key: "visibility",
          displayer: "Visibility",
          value: true,
        },
        {
          type: "image",
          key: "middleSideImage",
          displayer: "Image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/690e36723596a1002b21464f?alt=media",
        },
        {
          type: "string",
          key: "middleSideTitle",
          displayer: "Title",
          value: "",
        },
        {
          type: "string",
          key: "middleSideDescription",
          displayer: "Description",
          value: "",
        },
        INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
      ],
    });

    this.addProp({
      type: "object",
      key: "topRightSide",
      displayer: "Right Side Top Card",
      value: [
        {
          type: "boolean",
          key: "visibility",
          displayer: "Visibility",
          value: true,
        },
        {
          type: "image",
          key: "topRightSideImage",
          displayer: "Image",
          value: "",
        },
        {
          type: "string",
          key: "topRightSideTitle",
          displayer: "Title",
          value: "New payment methods, made easy",
        },
        {
          type: "string",
          key: "topRightSideDescription",
          displayer: "Description",
          value:
            "Providing eWallets, SMS top-ups, and various alternative payment methods...",
        },
        INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
      ],
    });

    this.addProp({
      type: "object",
      key: "bottomRightSide",
      displayer: "Right Side Bottom Card",
      value: [
        {
          type: "boolean",
          key: "visibility",
          displayer: "Visibility",
          value: true,
        },
        {
          type: "image",
          key: "bottomRightSideImage",
          displayer: "Image",
          value: "",
        },
        {
          type: "string",
          key: "bottomRightSideTitle",
          displayer: "Title",
          value: "Reliable payouts engine, total dependability",
        },
        {
          type: "string",
          key: "bottomRightSideDescription",
          displayer: "Description",
          value: "Timely and consistent player payments guaranteed...",
        },
        INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
      ],
    });

    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: { selectItems: ["animate1"] },
    });
  }

  static getName(): string {
    return "Feature 29";
  }

  renderCard(cardData, prefix, isAlone = false) {
    const className = `${this.decorateCSS("card")} ${
      isAlone ? this.decorateCSS("single-card") : ""
    }`;
    return (
      <div
        className={className}
        data-animation={this.getPropValue("hoverAnimation").join(" ")}
      >
        {cardData[`${prefix}Image`] && (
          <div className={this.decorateCSS("card-image")}>
            <img
              src={cardData[`${prefix}Image`]}
              className={this.decorateCSS("image")}
              alt="Content"
            />
          </div>
        )}
        <div className={this.decorateCSS("card-text-container")}>
          {cardData[`${prefix}Title`] && (
            <div className={this.decorateCSS("card-title")}>
              {cardData[`${prefix}Title`]}
            </div>
          )}
          {cardData[`${prefix}Description`] && (
            <div className={this.decorateCSS("card-description")}>
              {cardData[`${prefix}Description`]}
            </div>
          )}
        </div>
      </div>
    );
  }

  render() {
    const topLeftSide = this.castToObject<any>("topLeftSide");
    const bottomLeftSide = this.castToObject<any>("bottomLeftSide");
    const bottomLeftSide2 = this.castToObject<any>("bottomLeftSide2");
    const middleSide = this.castToObject<any>("middleSide");
    const topRightSide = this.castToObject<any>("topRightSide");
    const bottomRightSide = this.castToObject<any>("bottomRightSide");

    const renderLeftSide =
      topLeftSide.visibility ||
      bottomLeftSide.visibility ||
      bottomLeftSide2.visibility;

    const renderRightSide =
      topRightSide.visibility ||
      middleSide.visibility ||
      bottomRightSide.visibility;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent
            className={this.decorateCSS("header-container")}
          >
            {this.getPropValue("heading") && (
              <div className={this.decorateCSS("heading")}>
                {this.getPropValue("heading")}
              </div>
            )}
            {this.getPropValue("title") && (
              <div className={this.decorateCSS("title")}>
                {this.getPropValue("title")}
              </div>
            )}
          </Base.VerticalContent>

          <div className={this.decorateCSS("side-container")}>
            {renderLeftSide && (
              <div className={this.decorateCSS("left-side")}>
                {topLeftSide.visibility &&
                  this.renderCard(topLeftSide, "topLeftSide")}
                {bottomLeftSide.visibility &&
                  this.renderCard(bottomLeftSide, "bottomLeftSide")}
                {bottomLeftSide2.visibility &&
                  this.renderCard(bottomLeftSide2, "bottomLeftSide2")}
              </div>
            )}
            {renderRightSide && (
              <div className={this.decorateCSS("right-side")}>
                {topRightSide.visibility &&
                  this.renderCard(topRightSide, "topRightSide")}
                {middleSide.visibility &&
                  this.renderCard(middleSide, "middleSide")}
                {bottomRightSide.visibility &&
                  this.renderCard(bottomRightSide, "bottomRightSide")}
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature29;
