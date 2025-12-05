import * as React from "react";
import { BaseFeature, TypeMediaInputValue, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./feature29.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type Feature29TopLeftSide = {
  visibility?: boolean;
  overlay?: boolean;
  topLeftSideImage?: TypeMediaInputValue;
  topLeftSideTitle: React.JSX.Element;
  topLeftSideDescription: React.JSX.Element;
  topLeftSideButton?: TypeUsableComponentProps[];
};

type Feature29BottomLeftSide = {
  visibility?: boolean;
  overlay?: boolean;
  bottomLeftSideImage?: TypeMediaInputValue;
  bottomLeftSideTitle: React.JSX.Element;
  bottomLeftSideDescription: React.JSX.Element;
  bottomLeftSideButton?: TypeUsableComponentProps[];
};

type Feature29BottomLeftSide2 = {
  visibility?: boolean;
  overlay?: boolean;
  bottomLeftSide2Image?: TypeMediaInputValue;
  bottomLeftSide2Title: React.JSX.Element;
  bottomLeftSide2Description: React.JSX.Element;
  bottomLeftSide2Button?: TypeUsableComponentProps[];
};

type Feature29MiddleSide = {
  visibility?: boolean;
  overlay?: boolean;
  middleSideImage?: TypeMediaInputValue;
  middleSideTitle: React.JSX.Element;
  middleSideDescription: React.JSX.Element;
  middleSideButton?: TypeUsableComponentProps[];
};

type Feature29TopRightSide = {
  visibility?: boolean;
  overlay?: boolean;
  topRightSideImage?: TypeMediaInputValue;
  topRightSideTitle: React.JSX.Element;
  topRightSideDescription: React.JSX.Element;
  topRightSideButton?: TypeUsableComponentProps[];
};

type Feature29BottomRightSide = {
  visibility?: boolean;
  overlay?: boolean;
  bottomRightSideImage?: TypeMediaInputValue;
  bottomRightSideTitle: React.JSX.Element;
  bottomRightSideDescription: React.JSX.Element;
  bottomRightSideButton?: TypeUsableComponentProps[];
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
          key: "topLeftSideImage",
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
        INPUTS.BUTTON("topLeftSideButton", "Button", "Link", "", "IoIosArrowForward", null, "Bare"),
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
          key: "bottomLeftSideImage",
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
        INPUTS.BUTTON("bottomLeftSideButton", "Button", "Link", "", "IoIosArrowForward", null, "Bare"),
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
          key: "bottomLeftSide2Image",
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
        INPUTS.BUTTON("bottomLeftSide2Button", "Button", "", "", "", null, "Bare"),
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
          key: "middleSideImage",
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
        INPUTS.BUTTON("middleSideButton", "Button", "", "", "", null, "Bare"),
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
          key: "topRightSideImage",
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
        INPUTS.BUTTON("topRightSideButton", "Button", "", "", "", null, "Bare"),
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
          key: "bottomRightSideImage",
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
        INPUTS.BUTTON("bottomRightSideButton", "Button", "", "", "", null, "Bare"),
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
    const topLeftSide = this.castToObject<Feature29TopLeftSide>("topLeftSide");
    const bottomLeftSide = this.castToObject<Feature29BottomLeftSide>("bottomLeftSide");
    const bottomLeftSide2 = this.castToObject<Feature29BottomLeftSide2>("bottomLeftSide2");
    const middleSide = this.castToObject<Feature29MiddleSide>("middleSide");
    const topRightSide = this.castToObject<Feature29TopRightSide>("topRightSide");
    const bottomRightSide = this.castToObject<Feature29BottomRightSide>("bottomRightSide");

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
      const mediaWithUrl = image as { url?: string } | undefined;
      const imageUrl = mediaWithUrl?.url;
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
              <div className={this.decorateCSS("left-side")}>
                {topLeftSide.visibility && (
                  <div className={this.decorateCSS("left-top-card")}>
                    {renderCard(
                      topLeftSide.topLeftSideImage,
                      !!topLeftSide.overlay,
                      topLeftSide.topLeftSideTitle,
                      topLeftSide.topLeftSideDescription,
                      topLeftSide.topLeftSideButton
                    )}
                  </div>
                )}

                {(bottomLeftSide.visibility || bottomLeftSide2.visibility) && (
                  <div className={this.decorateCSS("left-bottom-cards")}>
                    {bottomLeftSide.visibility &&
                      renderCard(
                        bottomLeftSide.bottomLeftSideImage,
                        !!bottomLeftSide.overlay,
                        bottomLeftSide.bottomLeftSideTitle,
                        bottomLeftSide.bottomLeftSideDescription,
                        bottomLeftSide.bottomLeftSideButton
                      )}
                    {bottomLeftSide2.visibility &&
                      renderCard(
                        bottomLeftSide2.bottomLeftSide2Image,
                        !!bottomLeftSide2.overlay,
                        bottomLeftSide2.bottomLeftSide2Title,
                        bottomLeftSide2.bottomLeftSide2Description,
                        bottomLeftSide2.bottomLeftSide2Button
                      )}
                  </div>
                )}
              </div>
            )}

            {middleSide.visibility && (
              <div className={this.decorateCSS("middle-side")}>
                {renderCard(
                  middleSide.middleSideImage,
                  !!middleSide.overlay,
                  middleSide.middleSideTitle,
                  middleSide.middleSideDescription,
                  middleSide.middleSideButton
                )}
              </div>
            )}

            {(topRightSide.visibility || bottomRightSide.visibility) && (
              <div className={this.decorateCSS("right-side")}>
                {topRightSide.visibility && (
                  <div className={this.decorateCSS("topRightSide")}>
                    {renderCard(
                      topRightSide.topRightSideImage,
                      !!topRightSide.overlay,
                      topRightSide.topRightSideTitle,
                      topRightSide.topRightSideDescription,
                      topRightSide.topRightSideButton,
                      this.decorateCSS("right-card")
                    )}
                  </div>
                )}
                {bottomRightSide.visibility && (
                  <div className={this.decorateCSS("bottom-right-card")}>
                    {renderCard(
                      bottomRightSide.bottomRightSideImage,
                      !!bottomRightSide.overlay,
                      bottomRightSide.bottomRightSideTitle,
                      bottomRightSide.bottomRightSideDescription,
                      bottomRightSide.bottomRightSideButton,
                      this.decorateCSS("right-card")
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature29;

