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
  buttonLeft: any;
};

type RightUpperCard = {
  visibility: boolean;
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
  image: TypeMediaInputValue;
  buttonRight: any;
};

type RightBottomCard = {
  visibility: boolean;
  title: React.JSX.Element;
  subtitle: React.JSX.Element;
  description: React.JSX.Element;
  image: TypeMediaInputValue;
  buttonRightBottom: any;
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
        INPUTS.BUTTON("buttonLeft", "Button", "More", "", null, null, "Primary"),
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
        INPUTS.BUTTON("buttonRight", "Button", "More", "", null, null, "Primary"),
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
          key: "subtitle",
          displayer: "Subtitle",
          value: "",
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Best new app and updates*",
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
        INPUTS.BUTTON("buttonRightBottom", "Button", "More", "", null, null, "Primary"),
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

    const buttonLeft = {
      text: this.getPropValue("text", { parent_object: leftItems.buttonLeft }),
      type: this.getPropValue("type", { parent_object: leftItems.buttonLeft }),
      url: this.getPropValue("url", { parent_object: leftItems.buttonLeft })
    };

    const buttonRight = {
      text: this.getPropValue("text", { parent_object: rightItems.buttonRight }),
      type: this.getPropValue("type", { parent_object: rightItems.buttonRight }),
      url: this.getPropValue("url", { parent_object: rightItems.buttonRight })
    };

    const buttonRightBottom = {
      text: this.getPropValue("text", { parent_object: rightBottomItems.buttonRightBottom }),
      type: this.getPropValue("type", { parent_object: rightBottomItems.buttonRightBottom }),
      url: this.getPropValue("url", { parent_object: rightBottomItems.buttonRightBottom })
    };

    const leftImageExist = leftItems.image && (leftItems.image).url;
    const rightImageExist = rightItems.image && (rightItems.image).url;
    const rightBottomMediaExist = rightBottomItems.image && (rightBottomItems.image).url;

    const buttonLeftTextExist = this.castToString(buttonLeft.text);
    const buttonLeftExist = buttonLeftTextExist;

    const buttonRightTextExist = this.castToString(buttonRight.text);
    const buttonRightExist = buttonRightTextExist;

    const buttonRightBottomTextExist = this.castToString(buttonRightBottom.text);
    const buttonRightBottomExist = buttonRightBottomTextExist;

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
                    {this.castToString(leftItems.subtitle) && <Base.H5 className={this.decorateCSS("left-card-subtitle")}>{leftItems.subtitle}</Base.H5>}
                    {this.castToString(leftItems.title) && <Base.H4 className={this.decorateCSS("left-card-title")}>{leftItems.title}</Base.H4>}
                    {this.castToString(leftItems.description) && <Base.P className={this.decorateCSS("left-card-description")}>{leftItems.description}</Base.P>}
                    {buttonLeftExist && (
                      <Base.Row className={this.decorateCSS("left-button-wrapper")}>
                        <ComposerLink path={buttonLeft.url}>
                          <Base.Button buttonType={buttonLeft.type} className={this.decorateCSS("left-card-button")}>
                            {buttonLeftTextExist && <Base.P className={this.decorateCSS("left-button-text")}>{buttonLeft.text}</Base.P>}
                          </Base.Button>
                        </ComposerLink>
                      </Base.Row>
                    )}
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
                        {this.castToString(rightItems.subtitle) && <Base.H5 className={this.decorateCSS("upper-card-subtitle")}>{rightItems.subtitle}</Base.H5>}
                        {this.castToString(rightItems.title) && <Base.H4 className={this.decorateCSS("upper-card-title")}>{rightItems.title}</Base.H4>}
                        {this.castToString(rightItems.description) && <Base.P className={this.decorateCSS("upper-card-description")}>{rightItems.description}</Base.P>}
                        {buttonRightExist && (
                          <Base.Row className={this.decorateCSS("upper-button-wrapper")}>
                            <ComposerLink path={buttonRight.url}>
                              <Base.Button buttonType={buttonRight.type} className={this.decorateCSS("upper-card-button")}>
                                {buttonRightTextExist && <Base.P className={this.decorateCSS("upper-button-text")}>{buttonRight.text}</Base.P>}
                              </Base.Button>
                            </ComposerLink>
                          </Base.Row>
                        )}
                      </Base.VerticalContent>
                    )}
                    {rightImageExist && <Base.Media value={rightItems.image} className={`${this.decorateCSS("upper-card-image")} ${!rightTextExist && this.decorateCSS("full")}`} />}
                  </div>
                )}
                {hasValidBottomRightCard && rightBottomItems.visibility && (
                  <div className={this.decorateCSS("button-card")}>
                    {rightBottomTextExist && (
                      <Base.VerticalContent className={this.decorateCSS("button-card-vertical-content")}>
                        {this.castToString(rightBottomItems.subtitle) && <Base.H5 className={this.decorateCSS("button-card-subtitle")}>{rightBottomItems.subtitle}</Base.H5>}
                        {this.castToString(rightBottomItems.title) && <Base.H4 className={this.decorateCSS("button-card-title")}>{rightBottomItems.title}</Base.H4>}
                        {this.castToString(rightBottomItems.description) && <Base.P className={this.decorateCSS("button-card-description")}>{rightBottomItems.description}</Base.P>}
                        {buttonRightBottomExist && (
                          <Base.Row className={this.decorateCSS("bottom-button-wrapper")}>
                            <ComposerLink path={buttonRightBottom.url}>
                              <Base.Button buttonType={buttonRightBottom.type} className={this.decorateCSS("bottom-card-button")}>
                                {buttonRightBottomTextExist && <Base.P className={this.decorateCSS("bottom-button-text")}>{buttonRightBottom.text}</Base.P>}
                              </Base.Button>
                            </ComposerLink>
                          </Base.Row>
                        )}
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