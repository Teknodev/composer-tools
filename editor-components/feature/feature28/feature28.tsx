import * as React from "react";
import { BaseFeature, TypeMediaInputValue, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./feature28.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type Feature29CardSide = {
  visibility?: boolean;
  overlay?: boolean;
  media?: TypeMediaInputValue;
  title: React.JSX.Element;
  subtitle: React.JSX.Element;
  description: React.JSX.Element;
  buttons?: TypeUsableComponentProps[];
};

class Feature28 extends BaseFeature {
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
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
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
          key: "media",
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
          key: "subtitle",
          displayer: "Subtitle",
          value: "",
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
        {
          type: "array",
          key: "buttons",
          displayer: "Buttons",
          value: [INPUTS.BUTTON("button", "Button", "Link", "", "IoIosArrowForward", null, "Bare")],
        },
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
          key: "media",
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
          key: "subtitle",
          displayer: "Subtitle",
          value: "",
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
        {
          type: "array",
          key: "buttons",
          displayer: "Buttons",
          value: [INPUTS.BUTTON("button", "Button", "Link", "", "IoIosArrowForward", null, "Bare")],
        },
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
          key: "media",
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
          key: "subtitle",
          displayer: "Subtitle",
          value: "",
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
        {
          type: "array",
          key: "buttons",
          displayer: "Buttons",
          value: [INPUTS.BUTTON("button", "Button", "", "", "", null, "Bare")],
        },
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
          key: "media",
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
          key: "subtitle",
          displayer: "Subtitle",
          value: "",
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
        {
          type: "array",
          key: "buttons",
          displayer: "Buttons",
          value: [INPUTS.BUTTON("button", "Button", "", "", "", null, "Bare")],
        },
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
          key: "media",
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
          key: "subtitle",
          displayer: "Subtitle",
          value: "",
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
        {
          type: "array",
          key: "buttons",
          displayer: "Buttons",
          value: [INPUTS.BUTTON("button", "Button", "", "", "", null, "Bare")],
        },
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
          key: "media",
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
          key: "subtitle",
          displayer: "Subtitle",
          value: "",
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
        {
          type: "array",
          key: "buttons",
          displayer: "Buttons",
          value: [INPUTS.BUTTON("button", "Button", "", "", "", null, "Bare")],
        },
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
    return "Feature 28";
  }

  render() {
    const topLeftSide = this.castToObject<Feature29CardSide>("topLeftSide");
    const bottomLeftSide = this.castToObject<Feature29CardSide>("bottomLeftSide");
    const bottomLeftSide2 = this.castToObject<Feature29CardSide>("bottomLeftSide2");
    const middleSide = this.castToObject<Feature29CardSide>("middleSide");
    const topRightSide = this.castToObject<Feature29CardSide>("topRightSide");
    const bottomRightSide = this.castToObject<Feature29CardSide>("bottomRightSide");
    const leftVisible = topLeftSide.visibility || bottomLeftSide.visibility || bottomLeftSide2.visibility;
    const bottomLeftCards = [bottomLeftSide, bottomLeftSide2].filter((card) => card.visibility);
    const rightCards = [
      { data: topRightSide, className: this.decorateCSS("topRightSide") },
      { data: bottomRightSide, className: this.decorateCSS("bottom-right-card") },
    ].filter((card) => card.data.visibility);

    const heading = this.getPropValue("heading");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const headerButtons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
    const validHeaderButtons = headerButtons.filter((button: INPUTS.CastedButton) => this.castToString(button.text));
    const hasHeading =
      this.castToString(heading) || this.castToString(title) || this.castToString(description) || validHeaderButtons.length > 0;
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

      if (!buttonTextExist && !iconExist && !imageExist) return null;

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

    const renderCardButtons = (buttonGroups?: TypeUsableComponentProps[]) => {
      if (!buttonGroups?.length) return null;

      const renderedButtons = buttonGroups
        .map((buttonGroup, index) => {
          const button = renderButton(buttonGroup.value as TypeUsableComponentProps[]);
          return button && <React.Fragment key={`card-button-${index}`}>{button}</React.Fragment>;
        })
        .filter(Boolean);

      if (!renderedButtons.length) return null;

      return <div className={this.decorateCSS("card-button-container")}>{renderedButtons}</div>;
    };

    const renderCard = (
      media: TypeMediaInputValue | undefined,
      overlay: boolean,
      title: React.JSX.Element,
      subtitle: React.JSX.Element,
      description: React.JSX.Element,
      buttons?: TypeUsableComponentProps[],
      additionalClass?: string
    ) => {
      const mediaUrl = media && media.type !== "icon" && media.url;
      const titleExist = !!this.castToString(title);
      const subtitleExist = !!this.castToString(subtitle);
      const descriptionExist = this.castToString(description);

      return (
        <div
          className={[this.decorateCSS("card"), additionalClass, mediaUrl && this.decorateCSS("with-bg")]}
          data-animation={hoverAnimation}
        >
          {mediaUrl && <Base.Media className={this.decorateCSS("card-media")} value={media} />}
          {overlay && <div className={this.decorateCSS("overlay-layer")} />}
          <Base.VerticalContent className={this.decorateCSS("card-text-container")}>
            {subtitleExist && <Base.H6 className={this.decorateCSS("card-subtitle")}>{subtitle}</Base.H6>}
            {titleExist && <Base.H5 className={this.decorateCSS("card-title")}>{title}</Base.H5>}
            {descriptionExist && <Base.SectionDescription className={this.decorateCSS("card-description")}>{description}</Base.SectionDescription>}
            {renderCardButtons(buttons)}
          </Base.VerticalContent>
        </div>
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
              {validHeaderButtons.length > 0 && (
                <div className={this.decorateCSS("header-button-container")}>
                  {validHeaderButtons.map((button: INPUTS.CastedButton, index: number) => (
                    <ComposerLink key={`header-button-${index}`} path={button.url}>
                      <Base.Button buttonType={button.type} className={this.decorateCSS("header-button")}>
                        <Base.P className={this.decorateCSS("header-button-text")}>{button.text}</Base.P>
                      </Base.Button>
                    </ComposerLink>
                  ))}
                </div>
              )}
            </Base.VerticalContent>
          )}

          <div className={this.decorateCSS("side-container")}>
            {leftVisible && (
              <div className={this.decorateCSS("left-side")}>
                {topLeftSide.visibility && (
                  <div className={this.decorateCSS("left-top-card")}>
                    {renderCard(
                      topLeftSide.media,
                      !!topLeftSide.overlay,
                      topLeftSide.title,
                      topLeftSide.subtitle,
                      topLeftSide.description,
                      topLeftSide.buttons
                    )}
                  </div>
                )}

                {bottomLeftCards.length > 0 && (
                  <div className={this.decorateCSS("left-bottom-cards")}>
                    {bottomLeftCards.map((card, index) => (
                      <React.Fragment key={`left-card-${index}`}>
                        {renderCard(card.media, !!card.overlay, card.title, card.subtitle, card.description, card.buttons)}
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </div>
            )}

            {middleSide.visibility && (
              <div className={this.decorateCSS("middle-side")}>
                {renderCard(
                  middleSide.media,
                  !!middleSide.overlay,
                  middleSide.title,
                  middleSide.subtitle,
                  middleSide.description,
                  middleSide.buttons
                )}
              </div>
            )}

            {rightCards.length > 0 && (
              <div className={this.decorateCSS("right-side")}>
                {rightCards.map((card, index) => (
                  <div className={card.className} key={`${card.className}-${index}`}>
                    {renderCard(
                      card.data.media,
                      !!card.data.overlay,
                      card.data.title,
                      card.data.subtitle,
                      card.data.description,
                      card.data.buttons,
                      this.decorateCSS("right-card")
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature28;

