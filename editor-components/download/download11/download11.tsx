import * as React from "react";
import styles from "./download11.module.scss";
import { BaseDownload, TypeMediaInputValue } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "../../../custom-hooks/input-templates";

type LeftCard = {
  visibility: boolean;
  image: TypeMediaInputValue;
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
};

type RightUpperCard = {
  visibility: boolean;
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
  image: TypeMediaInputValue;
};

type RightBottomCard = {
  visibility: boolean;
  title: React.JSX.Element;
  subtitle: React.JSX.Element;
  description: React.JSX.Element;
  image: TypeMediaInputValue;
  button: INPUTS.CastedButton;
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
        INPUTS.BUTTON("button", "Button", "", "", "", "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/68e79205ffd791002b7e7482?alt=media", "Primary"),
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
    const Subtitle = this.castToString(this.getPropValue("subtitle"));
    const Title = this.castToString(this.getPropValue("title"));
    const Description = this.castToString(this.getPropValue("description"));
    const hasContent = Subtitle || Title || Description;

    const leftImageExist = leftItems.image && (leftItems.image).url;
    const rightImageExist = rightItems.image && (rightItems.image).url;
    const rightBottomMediaExist = rightBottomItems.image && (rightBottomItems.image).url;

    const buttonTextExist = this.castToString(rightBottomItems.button?.text);
    const buttonIconExist = rightBottomItems.button?.icon && rightBottomItems.button?.icon?.name;
    const buttonImageExist = rightBottomItems.button?.image && rightBottomItems.button?.image?.url;
    const buttonExist = buttonTextExist || buttonIconExist || buttonImageExist;

    const checkText = (item: LeftCard | RightUpperCard | RightBottomCard) => this.castToString(item.subtitle) || this.castToString(item.title) || this.castToString(item.description);

    const leftTextExist = checkText(leftItems);
    const rightTextExist = checkText(rightItems);
    const rightBottomTextExist = checkText(rightBottomItems);

    const hasValidCard = (leftTextExist || leftImageExist) && leftItems.visibility;
    const hasValidRightCard = (rightTextExist || rightImageExist) && rightItems.visibility;
    const hasValidBottomRightCard = (rightBottomTextExist || rightBottomMediaExist) && rightBottomItems.visibility;
    const hasValidRightCards = hasValidRightCard || hasValidBottomRightCard;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {hasContent && (
            <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
              {Subtitle && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{Subtitle}</Base.SectionSubTitle>}
              {Title && <Base.SectionTitle className={this.decorateCSS("title")}>{Title}</Base.SectionTitle>}
              {Description && <Base.SectionDescription className={this.decorateCSS("description")}>{Description}</Base.SectionDescription>}
            </Base.VerticalContent>
          )}
          <div className={this.decorateCSS("cards")}>
            {hasValidCard && (
              <div className={`${this.decorateCSS("left-card")} ${(hasValidRightCard || hasValidBottomRightCard) ? this.decorateCSS("no-full") : this.decorateCSS("full")}`}>
                {hasValidCard && (
                  <Base.VerticalContent className={this.decorateCSS("left-card-vertical-content")}>
                    {leftImageExist && <Base.Media value={leftItems.image} className={`${this.decorateCSS("left-card-image")} ${leftTextExist ? this.decorateCSS("no-full") : this.decorateCSS("full")}`} />}
                    {this.castToString(leftItems.subtitle) && <Base.H3 className={this.decorateCSS("left-card-subtitle")}>{leftItems.subtitle}</Base.H3>}
                    {this.castToString(leftItems.title) && <Base.H2 className={this.decorateCSS("left-card-title")}>{leftItems.title}</Base.H2>}
                    {this.castToString(leftItems.description) && <Base.P className={this.decorateCSS("left-card-description")}>{leftItems.description}</Base.P>}
                  </Base.VerticalContent>
                )}
              </div>
            )}
            {hasValidRightCards && (
              <div className={this.decorateCSS("right-cards")}>
                {hasValidRightCard && rightItems.visibility && (
                  <div className={this.decorateCSS("upper-card")}>
                    {rightTextExist && (
                      <Base.VerticalContent className={this.decorateCSS("upper-card-vertical-content")}>
                        {this.castToString(rightItems.subtitle) && <Base.H3 className={this.decorateCSS("upper-card-subtitle")}>{rightItems.subtitle}</Base.H3>}
                        {this.castToString(rightItems.title) && <Base.H2 className={this.decorateCSS("upper-card-title")}>{rightItems.title}</Base.H2>}
                        {this.castToString(rightItems.description) && <Base.P className={this.decorateCSS("upper-card-description")}>{rightItems.description}</Base.P>}
                      </Base.VerticalContent>
                    )}
                    {rightImageExist && <Base.Media value={rightItems.image} className={`${this.decorateCSS("upper-card-image")} ${!rightTextExist && this.decorateCSS("full")}`} />}
                  </div>
                )}
                {hasValidBottomRightCard && rightBottomItems.visibility && (
                  <div className={this.decorateCSS("button-card")}>
                    {rightBottomTextExist && (
                      <Base.VerticalContent className={this.decorateCSS("button-card-vertical-content")}>
                        {this.castToString(rightBottomItems.subtitle) && <Base.H3 className={this.decorateCSS("button-card-subtitle")}>{rightBottomItems.subtitle}</Base.H3>}
                        {this.castToString(rightBottomItems.title) && <Base.H2 className={this.decorateCSS("button-card-title")}>{rightBottomItems.title}</Base.H2>}
                        {this.castToString(rightBottomItems.description) && <Base.P className={this.decorateCSS("button-card-description")}>{rightBottomItems.description}</Base.P>}
                        {buttonExist &&
                          <div className={this.decorateCSS("card-button-container")}>
                            <ComposerLink path={rightBottomItems?.button?.url}>
                              {rightBottomItems?.button?.image && rightBottomItems?.button?.image?.url ? (
                                <div className={this.decorateCSS("card-button-element")}>
                                  <div className={this.decorateCSS("card-button")}>
                                    <Base.Media value={rightBottomItems?.button?.image} className={this.decorateCSS("card-button-image")} />
                                  </div>
                                </div>
                              ) : (
                                <Base.Button buttonType={rightBottomItems?.button?.type} className={this.decorateCSS("card-button")}>
                                  {this.castToString(rightBottomItems?.button?.text) && <Base.P className={this.decorateCSS("card-button-text")}>{rightBottomItems?.button?.text}</Base.P>}
                                  {rightBottomItems?.button?.icon && rightBottomItems?.button?.icon?.name && (<Base.Media value={rightBottomItems?.button?.icon} className={this.decorateCSS("card-button-icon")} />)}
                                </Base.Button>
                              )}
                            </ComposerLink>
                          </div>}
                      </Base.VerticalContent>
                    )}
                    {rightBottomMediaExist && <Base.Media value={rightBottomItems.image} className={`${this.decorateCSS("button-card-image")} ${!rightBottomTextExist && this.decorateCSS("full")}`} />}
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