import * as React from "react";
import { BaseFeature, TypeMediaInputValue, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./feature29.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type Feature29CardSide = {
  visibility?: boolean;
  overlay?: boolean;
  image?: TypeMediaInputValue;
  title: React.JSX.Element;
  description: React.JSX.Element;
  button?: TypeUsableComponentProps[];
};

class Feature29 extends BaseFeature {
  constructor(props?: unknown) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "heading",
      displayer: "Subtitle",
      value: "Meeting your needs",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Reliable payouts engine, total dependability",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
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
          type: "media",
          key: "image",
          displayer: "Media",
          additionalParams: {
            availableTypes: ["image", "video"],
          },
          value: {
            type: "image",
            url: "",
          },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: false,
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "One integration, all your transaction needs",
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value:
            "Every payment option covered. Designed to support diverse gaming setups, including online casinos, sportsbooks, bookmakers, lotteries, bingo, draws and raffles, and more.",
        },
        INPUTS.BUTTON("button", "Button", "Link", "", "IoIosArrowForward", null, "Bare"),
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
          type: "media",
          key: "image",
          displayer: "Media",
          additionalParams: {
            availableTypes: ["image", "video"],
          },
          value: {
            type: "image",
            url: "",
          },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: false,
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Seamless setup, faster payments",
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value:
            "Streamlined onboarding that is quick, transparent, and efficient. Get full visibility at every step to help you speed up your market entry.",
        },
        INPUTS.BUTTON("button", "Button", "Link", "", "IoIosArrowForward", null, "Bare"),
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
          type: "media",
          key: "image",
          displayer: "Media",
          additionalParams: {
            availableTypes: ["image", "video"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69304acc496aa1002ca78ef1?alt=media",
          },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: false,
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "",
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: "",
        },
        INPUTS.BUTTON("button", "Button", "", "", "", null, "Bare"),
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
          type: "media",
          key: "image",
          displayer: "Media",
          additionalParams: {
            availableTypes: ["image", "video"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/690e36723596a1002b21464f?alt=media",
          },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: false,
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "",
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: "",
        },
        INPUTS.BUTTON("button", "Button", "", "", "", null, "Bare"),
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
          type: "media",
          key: "image",
          displayer: "Media",
          additionalParams: {
            availableTypes: ["image", "video"],
          },
          value: {
            type: "image",
            url: "",
          },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: false,
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "New payment methods, made easy",
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value:
            "Providing eWallets, SMS top-ups, and various alternative payment methods to step-up your gaming operations.",
        },
        INPUTS.BUTTON("button", "Button", "", "", "", null, "Bare"),
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
          type: "media",
          key: "image",
          displayer: "Media",
          additionalParams: {
            availableTypes: ["image", "video"],
          },
          value: {
            type: "image",
            url: "",
          },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: false,
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Reliable payouts engine, total dependability",
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value:
            "Timely and consistent player payments guaranteed, so no payout is ever missed. Processed through a single API request.",
        },
        INPUTS.BUTTON("button", "Button", "", "", "", null, "Bare"),
      ],
    });

    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate2"],
      additionalParams: { selectItems: ["animate1", "animate2"] },
    });
  }

  static getName(): string {
    return "Feature 29";
  }

  render() {
    const topLeftSide = this.castToObject<Feature29CardSide>("topLeftSide");
    const bottomLeftSide = this.castToObject<Feature29CardSide>("bottomLeftSide");
    const bottomLeftSide2 = this.castToObject<Feature29CardSide>("bottomLeftSide2");
    const middleSide = this.castToObject<Feature29CardSide>("middleSide");
    const topRightSide = this.castToObject<Feature29CardSide>("topRightSide");
    const bottomRightSide = this.castToObject<Feature29CardSide>("bottomRightSide");

    const heading = this.getPropValue("heading");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const hasHeading = this.castToString(heading) || this.castToString(title) || this.castToString(description);
    const hoverAnimation = this.getPropValue("hoverAnimation")[0];

    const renderButton = (buttonGroup?: TypeUsableComponentProps[]) => {
      const buttonText = this.getPropValue("text", { parent_object: buttonGroup });
      const buttonType = this.getPropValue("type", { parent_object: buttonGroup });
      const buttonUrl = this.getPropValue("url", { parent_object: buttonGroup });
      const buttonIcon = this.getPropValue("icon", { parent_object: buttonGroup });
      const buttonImage = this.getPropValue("image", { parent_object: buttonGroup });

      const buttonTextExist = this.castToString(buttonText);
      const iconExist = buttonIcon?.name || buttonIcon?.url;
      const imageExist = buttonImage?.url;

      return (
        <ComposerLink path={buttonUrl || "#"}>
          {imageExist ? (
            <Base.Media value={buttonImage} className={this.decorateCSS("button-image")} />
          ) : (
            <Base.Button buttonType={buttonType || "Primary"} className={this.decorateCSS("button")}>
              {buttonTextExist && <Base.P className={this.decorateCSS("button-text")}>{buttonText}</Base.P>}
              {iconExist && <Base.Media value={buttonIcon} className={this.decorateCSS("button-icon")} />}
            </Base.Button>
          )}
        </ComposerLink>
      );
    };

    const renderCard = (
      image: TypeMediaInputValue | undefined,
      overlay: boolean,
      title: React.JSX.Element,
      description: React.JSX.Element,
      button?: TypeUsableComponentProps[],
      additionalClass?: string
    ) => {
      const imageUrl = image && image.type !== "icon" ? image.url : undefined;
      const titleExist = this.castToString(title);
      const descriptionExist = this.castToString(description);

      return (
        <Base.VerticalContent
          className={`${this.decorateCSS("card")} ${additionalClass || ""} ${imageUrl ? this.decorateCSS("with-bg") : ""}`}
          data-animation={hoverAnimation}
        >
          {imageUrl && <Base.Media className={this.decorateCSS("card-media")} value={image} />}
          {overlay && imageUrl && <div className={this.decorateCSS("overlay-layer")} />}
          <Base.VerticalContent className={this.decorateCSS("card-text-container")}>
            {titleExist && <Base.H3 className={this.decorateCSS("card-title")}>{title}</Base.H3>}
            {descriptionExist && <Base.SectionDescription className={this.decorateCSS("card-description")}>{description}</Base.SectionDescription>}
            {button && renderButton(button)}
          </Base.VerticalContent>
        </Base.VerticalContent>
      );
    };

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {hasHeading && (
            <Base.VerticalContent className={this.decorateCSS("header-container")}>
              {this.castToString(heading) && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{heading}</Base.SectionSubTitle>
              )}
              {this.castToString(title) && (
                <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>
              )}
              {this.castToString(description) && (
                <Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>
              )}
            </Base.VerticalContent>
          )}

          <div className={this.decorateCSS("side-container")}>
            {(topLeftSide.visibility || bottomLeftSide.visibility || bottomLeftSide2.visibility) && (
              <Base.VerticalContent className={this.decorateCSS("left-side")}>
                {topLeftSide.visibility && (
                  <div className={this.decorateCSS("left-top-card")}>
                    {renderCard(
                      topLeftSide.image,
                      !!topLeftSide.overlay,
                      topLeftSide.title,
                      topLeftSide.description,
                      topLeftSide.button
                    )}
                  </div>
                )}

                {(bottomLeftSide.visibility || bottomLeftSide2.visibility) && (
                  <div className={this.decorateCSS("left-bottom-cards")}>
                    {bottomLeftSide.visibility &&
                      renderCard(
                        bottomLeftSide.image,
                        !!bottomLeftSide.overlay,
                        bottomLeftSide.title,
                        bottomLeftSide.description,
                        bottomLeftSide.button
                      )}
                    {bottomLeftSide2.visibility &&
                      renderCard(
                        bottomLeftSide2.image,
                        !!bottomLeftSide2.overlay,
                        bottomLeftSide2.title,
                        bottomLeftSide2.description,
                        bottomLeftSide2.button
                      )}
                  </div>
                )}
              </Base.VerticalContent>
            )}

            {middleSide.visibility && (
              <div className={this.decorateCSS("middle-side")}>
                {renderCard(
                  middleSide.image,
                  !!middleSide.overlay,
                  middleSide.title,
                  middleSide.description,
                  middleSide.button
                )}
              </div>
            )}

            {(topRightSide.visibility || bottomRightSide.visibility) && (
              <Base.VerticalContent className={this.decorateCSS("right-side")}>
                {topRightSide.visibility && (
                  <div className={this.decorateCSS("topRightSide")}>
                    {renderCard(
                      topRightSide.image,
                      !!topRightSide.overlay,
                      topRightSide.title,
                      topRightSide.description,
                      topRightSide.button,
                      this.decorateCSS("right-card")
                    )}
                  </div>
                )}
                {bottomRightSide.visibility && (
                  <div className={this.decorateCSS("bottom-right-card")}>
                    {renderCard(
                      bottomRightSide.image,
                      !!bottomRightSide.overlay,
                      bottomRightSide.title,
                      bottomRightSide.description,
                      bottomRightSide.button,
                      this.decorateCSS("right-card")
                    )}
                  </div>
                )}
              </Base.VerticalContent>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature29;

