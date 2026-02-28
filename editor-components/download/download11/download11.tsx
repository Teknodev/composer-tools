import * as React from "react";
import styles from "./download11.module.scss";
import { BaseDownload, TypeMediaInputValue } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type LeftCard = {
  visibility: boolean;
  image: TypeMediaInputValue;
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
  buttonLeft: INPUTS.CastedButton;
};

type RightUpperCard = {
  visibility: boolean;
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
  image: TypeMediaInputValue;
  buttonRight: INPUTS.CastedButton;
};

type RightBottomCard = {
  visibility: boolean;
  title: React.JSX.Element;
  subtitle: React.JSX.Element;
  description: React.JSX.Element;
  image: TypeMediaInputValue;
  buttonRightBottom: INPUTS.CastedButton;
};

class Download11 extends BaseDownload {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "object",
      displayer: "Left Card",
      key: "left",
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
          additionalParams: {
            availableTypes: ["image", "video"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6759ab4b0655f8002ca5eca4?alt=media",
          },
          displayer: "Media",
        },
        {
          type: "string",
          key: "subtitle",
          displayer: "Subtitle",
          value: "Support",
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Organize your time",
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: "Unlock the power of data with our advanced analytics tools. Gain actionable insignhts into customer behavior, market trends.",
        },
        INPUTS.BUTTON("buttonLeft", "Button", "More", "", "", "", "Primary"),
      ],
    });
    this.addProp({
      type: "object",
      displayer: "Right Card Upper",
      key: "right",
      value: [
        {
          type: "boolean",
          key: "visibility",
          displayer: "Visibility",
          value: true,
        },
        {
          type: "string",
          key: "subtitle",
          displayer: "Subtitle",
          value: "You're online",
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Edit, manage and share everywhere",
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: "Unlock the power of data with our advanced analytics tools. Gain actionable insights into customer behavior, market trends.",
        },
        {
          type: "media",
          key: "image",
          additionalParams: {
            availableTypes: ["image", "video"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6759ac1d0655f8002ca5ecee?alt=media",
          },
          displayer: "Media",
        },
        INPUTS.BUTTON("buttonRight", "Button", "More", "", "", "", "Primary"),
      ],
    });

    this.addProp({
      type: "object",
      displayer: "Right Card Bottom",
      key: "rightBottom",
      value: [
        {
          type: "boolean",
          key: "visibility",
          displayer: "Visibility",
          value: true,
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Best new app and updates*",
        },
        {
          type: "string",
          key: "subtitle",
          displayer: "Subtitle",
          value: "",
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: "",
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
        INPUTS.BUTTON("buttonRightBottom", "Button", "More", "", "", "", "Primary"),

      ],
    });
  }

  static getName(): string {
    return "Download 11";
  }

  render() {
    const leftItems = this.castToObject<LeftCard>("left");
    const rightItems = this.castToObject<RightUpperCard>("right");
    const rightBottomItems = this.castToObject<RightBottomCard>("rightBottom");
    const sectionSubtitle = this.getPropValue("subtitle");
    const sectionTitle = this.getPropValue("title");
    const sectionDescription = this.getPropValue("description");

    const buttonLeft = leftItems.buttonLeft;
    const buttonRight = rightItems.buttonRight;
    const buttonRightBottom = rightBottomItems.buttonRightBottom;

    const leftImageExist = leftItems.image && (leftItems.image).url;
    const rightImageExist = rightItems.image && (rightItems.image).url;
    const rightBottomMediaExist = rightBottomItems.image && (rightBottomItems.image).url;

    const buttonLeftTextExist = this.castToString(buttonLeft.text);
    const buttonLeftIconExist = (buttonLeft).icon && (buttonLeft).icon.name;
    const buttonLeftImageExist = (buttonLeft).image && (buttonLeft).image.url;
    const buttonRightTextExist = this.castToString(buttonRight.text);
    const buttonRightIconExist = (buttonRight).icon && (buttonRight).icon.name;
    const buttonRightImageExist = (buttonRight).image && (buttonRight).image.url;
    const buttonRightBottomTextExist = this.castToString(buttonRightBottom.text);
    const buttonRightBottomIconExist = (buttonRightBottom).icon && (buttonRightBottom).icon.name;
    const buttonRightBottomImageExist = (buttonRightBottom).image && (buttonRightBottom).image.url;

    const checkText = (item: LeftCard | RightUpperCard | RightBottomCard, btn: INPUTS.CastedButton) => this.castToString(item.subtitle) || this.castToString(item.title) || this.castToString(item.description) || this.castToString(btn.text) || (btn.icon && btn.icon.name) || (btn.image && btn.image.url);

    const leftTextExist = checkText(leftItems, buttonLeft);
    const rightTextExist = checkText(rightItems, buttonRight);
    const rightBottomTextExist = checkText(rightBottomItems, buttonRightBottom);

    const hasValidCard = (leftTextExist || leftImageExist) && leftItems.visibility;
    const hasValidRightCard = (rightTextExist || rightImageExist) && rightItems.visibility;
    const hasValidBottomRightCard = (rightBottomTextExist || rightBottomMediaExist) && rightBottomItems.visibility;

    const hasValidRightCards = hasValidRightCard || hasValidBottomRightCard;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(this.castToString(sectionSubtitle) || this.castToString(sectionTitle) || this.castToString(sectionDescription)) && (
            <Base.VerticalContent className={this.decorateCSS("header")}>
              {this.castToString(sectionSubtitle)
                && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {sectionSubtitle}
                </Base.SectionSubTitle>}
              {this.castToString(sectionTitle) && <Base.SectionTitle className={this.decorateCSS("title")}>{sectionTitle}</Base.SectionTitle>}
              {this.castToString(sectionDescription) && <Base.SectionDescription className={this.decorateCSS("description")}>{sectionDescription}</Base.SectionDescription>}
            </Base.VerticalContent>
          )}
          <div className={this.decorateCSS("cards")}>
            {hasValidCard && (
              <div className={`${this.decorateCSS("left-card")} ${(hasValidRightCard || hasValidBottomRightCard) ? this.decorateCSS("no-full") : this.decorateCSS("full")}`}>
                {hasValidCard && (
                  <Base.VerticalContent className={this.decorateCSS("card")}>
                    {leftImageExist && <Base.Media value={leftItems.image} className={`${this.decorateCSS("image")} ${leftTextExist ? this.decorateCSS("no-full") : this.decorateCSS("full")}`} />}
                    {this.castToString(leftItems.subtitle) && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{leftItems.subtitle}</Base.SectionSubTitle>}
                    {this.castToString(leftItems.title) && <Base.H2 className={this.decorateCSS("title")}>{leftItems.title}</Base.H2>}
                    {this.castToString(leftItems.description) && <Base.SectionDescription className={this.decorateCSS("description")}>{leftItems.description}</Base.SectionDescription>}
                    {(buttonLeftTextExist || buttonLeftIconExist || buttonLeftImageExist) && (
                      <div className={this.decorateCSS("button-wrapper")}>
                        <ComposerLink path={buttonLeft.url}>
                          {buttonLeftImageExist ? (
                            <Base.Media value={buttonLeft.image} className={this.decorateCSS("button-image")} />
                          ) : (
                            <Base.Button buttonType={buttonLeft.type} className={this.decorateCSS("button-element")}>
                              {buttonLeftTextExist && <Base.P className={this.decorateCSS("button-text")}>{buttonLeft.text}</Base.P>}
                              {buttonLeftIconExist && <Base.Media value={buttonLeft.icon} className={this.decorateCSS("button-icon")} />}
                            </Base.Button>
                          )}
                        </ComposerLink>
                      </div>
                    )}
                  </Base.VerticalContent>
                )}
              </div>
            )}
            {hasValidRightCards && (
              <div className={this.decorateCSS("right-cards")}>
                {hasValidRightCard && rightItems.visibility && (
                  <div className={this.decorateCSS("upper-card")}>
                    <div className={this.decorateCSS("card")}>
                      <Base.VerticalContent className={this.decorateCSS("left")}>
                        {this.castToString(rightItems.subtitle) && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{rightItems.subtitle}</Base.SectionSubTitle>}
                        {this.castToString(rightItems.title) && <Base.H2 className={this.decorateCSS("title")}>{rightItems.title}</Base.H2>}
                        {this.castToString(rightItems.description) && <Base.SectionDescription className={this.decorateCSS("description")}>{rightItems.description}</Base.SectionDescription>}
                        {(buttonRightTextExist || buttonRightIconExist || buttonRightImageExist) && (
                          <div className={this.decorateCSS("button-wrapper")}>
                            <ComposerLink path={buttonRight.url}>
                              {buttonRightImageExist ? (
                                <Base.Media value={buttonRight.image} className={this.decorateCSS("button-image")} />
                              ) : (
                                <Base.Button buttonType={buttonRight.type} className={this.decorateCSS("button-element")}>
                                  {buttonRightTextExist && <Base.P className={this.decorateCSS("button-text")}>{buttonRight.text}</Base.P>}
                                  {buttonRightIconExist && <Base.Media value={buttonRight.icon} className={this.decorateCSS("button-icon")} />}
                                </Base.Button>
                              )}
                            </ComposerLink>
                          </div>
                        )}
                      </Base.VerticalContent>
                      {rightImageExist && <Base.Media value={rightItems.image} className={`${this.decorateCSS("image")} ${!rightTextExist && this.decorateCSS("full")}`} />}
                    </div>
                  </div>
                )}
                {hasValidBottomRightCard && rightBottomItems.visibility && (
                  <div className={this.decorateCSS("button-card")}>
                    <div className={this.decorateCSS("card")}>
                      <Base.VerticalContent className={this.decorateCSS("left")}>
                        {this.castToString(rightBottomItems.subtitle) && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{rightBottomItems.subtitle}</Base.SectionSubTitle>}
                        {this.castToString(rightBottomItems.title) && <Base.H2 className={this.decorateCSS("title")}>{rightBottomItems.title}</Base.H2>}
                        {this.castToString(rightBottomItems.description) && <Base.SectionDescription className={this.decorateCSS("description")}>{rightBottomItems.description}</Base.SectionDescription>}
                        {(buttonRightBottomTextExist || buttonRightBottomIconExist || buttonRightBottomImageExist) && (
                          <div className={this.decorateCSS("button-wrapper")}>
                            <ComposerLink path={buttonRightBottom.url}>
                              {buttonRightBottomImageExist ? (
                                <Base.Media value={buttonRightBottom.image} className={this.decorateCSS("button-image")} />
                              ) : (
                                <Base.Button buttonType={buttonRightBottom.type} className={this.decorateCSS("button-element")}>
                                  {buttonRightBottomTextExist && <Base.P className={this.decorateCSS("button-text")}>{buttonRightBottom.text}</Base.P>}
                                  {buttonRightBottomIconExist && <Base.Media value={buttonRightBottom.icon} className={this.decorateCSS("button-icon")} />}
                                </Base.Button>
                              )}
                            </ComposerLink>
                          </div>
                        )}
                      </Base.VerticalContent>
                      {rightBottomMediaExist && <Base.Media value={rightBottomItems.image} className={this.decorateCSS("image")} />}
                    </div>
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

export default Download11;