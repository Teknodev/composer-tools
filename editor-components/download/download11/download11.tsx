import * as React from "react";
import styles from "./download11.module.scss";
import { BaseDownload, TypeMediaInputValue } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "../../../custom-hooks/input-templates";

type LeftCard = {
  left_visibility: boolean;
  left_image: TypeMediaInputValue;
  left_subtitle: React.JSX.Element;
  left_title: React.JSX.Element;
  left_description: React.JSX.Element;
  buttonLeft: any;
};

type RightUpperCard = {
  right_visibility: boolean;
  right_subtitle: React.JSX.Element;
  right_title: React.JSX.Element;
  right_description: React.JSX.Element;
  right_image: TypeMediaInputValue;
  buttonRight: any;
};

type RightBottomCard = {
  rightBottom_visibility: boolean;
  rightBottom_title: React.JSX.Element;
  rightBottom_subtitle: React.JSX.Element;
  rightBottom_description: React.JSX.Element;
  rightBottom_image: TypeMediaInputValue;
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
          key: "left_visibility",
          displayer: "Visibility",
          value: true,
        },
        {
          type: "media",
          key: "left_image",
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
          key: "left_subtitle",
          displayer: "Subtitle",
          value: "Support",
        },
        {
          type: "string",
          key: "left_title",
          displayer: "Title",
          value: "Organize your time",
        },
        {
          type: "string",
          key: "left_description",
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
          key: "right_visibility",
          displayer: "Visibility",
          value: true,
        },
        {
          type: "string",
          key: "right_subtitle",
          displayer: "Subtitle",
          value: "You're online",
        },
        {
          type: "string",
          key: "right_title",
          displayer: "Title",
          value: "Edit, manage and share everywhere",
        },
        {
          type: "string",
          key: "right_description",
          displayer: "Description",
          value: "Unlock the power of data with our advanced analytics tools. Gain actionable insights into customer behavior, market trends.",
        },
        {
          type: "media",
          key: "right_image",
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
          key: "rightBottom_visibility",
          displayer: "Visibility",
          value: true,
        },
        {
          type: "string",
          key: "rightBottom_subtitle",
          displayer: "Subtitle",
          value: "",
        },
        {
          type: "string",
          key: "rightBottom_title",
          displayer: "Title",
          value: "Best new app and updates*",
        },
        {
          type: "string",
          key: "rightBottom_description",
          displayer: "Description",
          value: "",
        },
        {
          type: "media",
          key: "rightBottom_image",
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

    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));

    const hasContent = subtitleExist || titleExist || descriptionExist;

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

    const leftImageExist = leftItems.left_image && (leftItems.left_image).url;
    const rightImageExist = rightItems.right_image && (rightItems.right_image).url;
    const rightBottomMediaExist = rightBottomItems.rightBottom_image && (rightBottomItems.rightBottom_image).url;

    const buttonLeftTextExist = this.castToString(buttonLeft.text);
    const buttonLeftExist = buttonLeftTextExist;

    const buttonRightTextExist = this.castToString(buttonRight.text);
    const buttonRightExist = buttonRightTextExist;

    const buttonRightBottomTextExist = this.castToString(buttonRightBottom.text);
    const buttonRightBottomExist = buttonRightBottomTextExist;

    const leftTextExist = this.castToString(leftItems.left_subtitle) || this.castToString(leftItems.left_title) || this.castToString(leftItems.left_description);
    const rightTextExist = this.castToString(rightItems.right_subtitle) || this.castToString(rightItems.right_title) || this.castToString(rightItems.right_description);
    const rightBottomTextExist = this.castToString(rightBottomItems.rightBottom_subtitle) || this.castToString(rightBottomItems.rightBottom_title) || this.castToString(rightBottomItems.rightBottom_description);

    const hasValidCard = (leftTextExist || leftImageExist) && leftItems.left_visibility;
    const hasValidRightCard = (rightTextExist || rightImageExist) && rightItems.right_visibility;
    const hasValidBottomRightCard = (rightBottomTextExist || rightBottomMediaExist) && rightBottomItems.rightBottom_visibility;
    const hasValidRightCards = hasValidRightCard || hasValidBottomRightCard;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {hasContent && (
            <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
              {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
              {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
              {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
            </Base.VerticalContent>
          )}
          <div className={this.decorateCSS("cards")}>
            {hasValidCard && (
              <div className={`${this.decorateCSS("left-card")} ${(hasValidRightCard || hasValidBottomRightCard) ? this.decorateCSS("no-full") : this.decorateCSS("full")}`}>
                {hasValidCard && (
                  <Base.VerticalContent className={this.decorateCSS("left-card-vertical-content")}>
                    {leftImageExist && <Base.Media value={leftItems.left_image} className={`${this.decorateCSS("left-card-image")} ${leftTextExist ? this.decorateCSS("no-full") : this.decorateCSS("full")}`} />}
                    {this.castToString(leftItems.left_subtitle) && <Base.H5 className={this.decorateCSS("left-card-subtitle")}>{leftItems.left_subtitle}</Base.H5>}
                    {this.castToString(leftItems.left_title) && <Base.H4 className={this.decorateCSS("left-card-title")}>{leftItems.left_title}</Base.H4>}
                    {this.castToString(leftItems.left_description) && <Base.P className={this.decorateCSS("left-card-description")}>{leftItems.left_description}</Base.P>}
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
                {hasValidRightCard && rightItems.right_visibility && (
                  <div className={this.decorateCSS("upper-card")}>
                    {rightTextExist && (
                      <Base.VerticalContent className={this.decorateCSS("upper-card-vertical-content")}>
                        {this.castToString(rightItems.right_subtitle) && <Base.H5 className={this.decorateCSS("upper-card-subtitle")}>{rightItems.right_subtitle}</Base.H5>}
                        {this.castToString(rightItems.right_title) && <Base.H4 className={this.decorateCSS("upper-card-title")}>{rightItems.right_title}</Base.H4>}
                        {this.castToString(rightItems.right_description) && <Base.P className={this.decorateCSS("upper-card-description")}>{rightItems.right_description}</Base.P>}
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
                    {rightImageExist && <Base.Media value={rightItems.right_image} className={`${this.decorateCSS("upper-card-image")} ${!rightTextExist && this.decorateCSS("full")}`} />}
                  </div>
                )}
                {hasValidBottomRightCard && rightBottomItems.rightBottom_visibility && (
                  <div className={this.decorateCSS("button-card")}>
                    {rightBottomTextExist && (
                      <Base.VerticalContent className={this.decorateCSS("button-card-vertical-content")}>
                        {this.castToString(rightBottomItems.rightBottom_subtitle) && <Base.H5 className={this.decorateCSS("button-card-subtitle")}>{rightBottomItems.rightBottom_subtitle}</Base.H5>}
                        {this.castToString(rightBottomItems.rightBottom_title) && <Base.H4 className={this.decorateCSS("button-card-title")}>{rightBottomItems.rightBottom_title}</Base.H4>}
                        {this.castToString(rightBottomItems.rightBottom_description) && <Base.P className={this.decorateCSS("button-card-description")}>{rightBottomItems.rightBottom_description}</Base.P>}
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
                    {rightBottomMediaExist && <Base.Media value={rightBottomItems.rightBottom_image} className={`${this.decorateCSS("button-card-image")} ${!rightBottomTextExist && this.decorateCSS("full")}`} />}
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