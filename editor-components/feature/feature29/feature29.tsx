import { BaseFeature } from "../../EditorComponent";
import styles from "./feature29.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

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
            "Every payment option covered. Designed to support diverse gaming setups, including online casinos, sportsbooks, bookmakers, lotteries, bingo, draws and raffles, and more.",
        },
        INPUTS.BUTTON(
          "topLeftSideButton",
          "Button",
          "Link",
          "",
          "",
          null,
          "Link"
        ),
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
            "Streamlined onboarding that is quick, transparent, and efficient. Get full visibility at every step to help you speed up your market entry.",
        },
        INPUTS.BUTTON(
          "bottomLeftSideButton",
          "Button",
          "Link",
          "",
          "",
          null,
          "Link"
        ),
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
          value: "",
        },
        {
          type: "string",
          key: "bottomLeftSide2Description",
          displayer: "Description",
          value: "",
        },
        INPUTS.BUTTON(
          "bottomLeftSide2Button",
          "Button",
          "",
          "",
          "",
          null,
          "Link"
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
        INPUTS.BUTTON("middleSideButton", "Button", "", "", "", null, "Link"),
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
            "Providing eWallets, SMS top-ups, and various alternative payment methods to step-up your gaming operations.",
        },
        INPUTS.BUTTON("topRightSideButton", "Button", "", "", "", null, "Link"),
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
          value:
            "Timely and consistent player payments guaranteed, so no payout is ever missed. Processed through a single API request.",
        },
        INPUTS.BUTTON(
          "bottomRightSideButton",
          "Button",
          "",
          "",
          "",
          null,
          "Link"
        ),
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

  renderCard(cardData, prefix) {
    const hasImage = cardData[`${prefix}Image`];
    const buttonData = cardData[`${prefix}Button`];

    const button = buttonData
      ? {
          text: this.getPropValue("text", {
            parent_object: buttonData,
          }),
          type: this.getPropValue("type", {
            parent_object: buttonData,
          }),
          url: this.getPropValue("url", {
            parent_object: buttonData,
          }),
          icon: this.getPropValue("icon", {
            parent_object: buttonData,
          }),
        }
      : null;

    return (
      <Base.VerticalContent
        className={this.decorateCSS("card")}
        style={
          hasImage
            ? { backgroundImage: `url(${cardData[`${prefix}Image`]})` }
            : {}
        }
        data-animation={this.getPropValue("hoverAnimation").join(" ")}
      >
        <div className={`${this.decorateCSS("card-text-container")} `}>
          {this.castToString(cardData[`${prefix}Title`]) && (
            <Base.H3 className={this.decorateCSS("card-title")}>
              {cardData[`${prefix}Title`]}
            </Base.H3>
          )}

          {this.castToString(cardData[`${prefix}Description`]) && (
            <Base.SectionDescription
              className={this.decorateCSS("card-description")}
            >
              {cardData[`${prefix}Description`]}
            </Base.SectionDescription>
          )}

          {button && button.text && (
            <ComposerLink path={button.url}>
              <Base.Button
                buttonType={button.type}
                className={this.decorateCSS("button")}
              >
                <Base.P className={this.decorateCSS("button-text")}>
                  {button.text}
                </Base.P>
                <Base.Media value={button.icon} />
              </Base.Button>
            </ComposerLink>
          )}
        </div>
      </Base.VerticalContent>
    );
  }

  render() {
    const topLeftSide = this.castToObject<any>("topLeftSide");
    const bottomLeftSide = this.castToObject<any>("bottomLeftSide");
    const bottomLeftSide2 = this.castToObject<any>("bottomLeftSide2");
    const middleSide = this.castToObject<any>("middleSide");
    const topRightSide = this.castToObject<any>("topRightSide");
    const bottomRightSide = this.castToObject<any>("bottomRightSide");
    const leftBottomCardsVisible =
      bottomLeftSide.visibility || bottomLeftSide2.visibility;

    const isLeftVisible =
      topLeftSide.visibility ||
      bottomLeftSide.visibility ||
      bottomLeftSide2.visibility;

    const isMiddleVisible = middleSide.visibility;

    const isRightVisible =
      topRightSide.visibility || bottomRightSide.visibility;

    const heading = this.getPropValue("heading");
    const title = this.getPropValue("title");
    const hasHeading = this.castToString(heading) || this.castToString(title);

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {hasHeading && (
            <Base.VerticalContent
              className={this.decorateCSS("header-container")}
            >
              {this.castToString(heading) && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {this.getPropValue("heading")}
                </Base.SectionSubTitle>
              )}
              {this.castToString(title) && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {this.getPropValue("title")}
                </Base.SectionTitle>
              )}
            </Base.VerticalContent>
          )}

          <div className={this.decorateCSS("side-container")}>
            {isLeftVisible && (
              <div className={this.decorateCSS("left-side")}>
                {topLeftSide.visibility && (
                  <div className={this.decorateCSS("left-top-card")}>
                    {this.renderCard(topLeftSide, "topLeftSide")}
                  </div>
                )}
                {leftBottomCardsVisible && (
                  <div className={this.decorateCSS("left-bottom-cards")}>
                    {bottomLeftSide.visibility &&
                      this.renderCard(bottomLeftSide, "bottomLeftSide")}
                    {bottomLeftSide2.visibility &&
                      this.renderCard(bottomLeftSide2, "bottomLeftSide2")}
                  </div>
                )}
              </div>
            )}

            {isMiddleVisible && (
              <div className={this.decorateCSS("middle-side")}>
                {this.renderCard(middleSide, "middleSide")}
              </div>
            )}

            {isRightVisible && (
              <div className={this.decorateCSS("right-side")}>
                {topRightSide.visibility && (
                  <div className={this.decorateCSS("topRightSide")}>
                    {this.renderCard(topRightSide, "topRightSide")}
                  </div>
                )}
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
