import * as React from "react";
import styles from "./download11.module.scss";
import { BaseDownload } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

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
    const leftItems = this.castToObject<any>("left");
    const rightItems = this.castToObject<any>("right");
    const rightBottomItems = this.castToObject<any>("rightBottom");
    const sectionSubtitle = this.getPropValue("subtitle");
    const sectionTitle = this.getPropValue("title");
    const sectionDescription = this.getPropValue("description");

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

    const subtitleExist = this.castToString(leftItems.subtitle);
    const titleExist = this.castToString(leftItems.title);
    const descriptionExist = this.castToString(leftItems.description);
    const buttonTextExist = this.castToString(buttonLeft.text);
    const buttonExist = buttonTextExist;

    const leftCardExist = subtitleExist || titleExist || descriptionExist || buttonTextExist;
    const leftImageExist = leftItems.image && leftItems.image.url;
    const hasValidCard = (leftCardExist || leftImageExist) && leftItems.visibility;

    const rightSubtitleExist = this.castToString(rightItems.subtitle);
    const rightTitleExist = this.castToString(rightItems.title);
    const rightDescriptionExist = this.castToString(rightItems.description);
    const rightbuttonTextExist = this.castToString(buttonRight.text);
    const rightButtonExist = rightbuttonTextExist;

    const hasValidRightCardTexts = rightSubtitleExist || rightTitleExist || rightDescriptionExist || rightbuttonTextExist;
    const rightImageExist = rightItems.image && rightItems.image.url;
    const hasValidRightCard = (hasValidRightCardTexts || rightImageExist) && rightItems.visibility;

    const rightBottomSubtitleExist = this.castToString(rightBottomItems.subtitle);
    const rightBottomTitleExist = this.castToString(rightBottomItems.title);
    const rightBottomDescriptionExist = this.castToString(rightBottomItems.description);
    const rightBottomMediaExist = rightBottomItems.image && rightBottomItems.image.url;
    const rightBottomButtonTextExist = this.castToString(buttonRightBottom.text);
    const rightBottomButtonExist = rightBottomButtonTextExist;
    const hasValidBottomRightCard =
      (rightBottomSubtitleExist ||
        rightBottomTitleExist ||
        rightBottomDescriptionExist ||
        rightBottomMediaExist ||
        rightBottomButtonExist) &&
      rightBottomItems.visibility;

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
                    {leftImageExist && <Base.Media value={leftItems.image} className={`${this.decorateCSS("image")} ${leftCardExist ? this.decorateCSS("no-full") : this.decorateCSS("full")}`} />}
                    {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{leftItems.subtitle}</Base.SectionSubTitle>}
                    {titleExist && <Base.H2 className={this.decorateCSS("title")}>{leftItems.title}</Base.H2>}
                    {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{leftItems.description}</Base.SectionDescription>}
                    {buttonExist && (
                      <div className={this.decorateCSS("button-wrapper")}>
                        <ComposerLink path={buttonLeft.url}>
                          <Base.Button buttonType={buttonLeft.type} className={this.decorateCSS("button")}>
                            {buttonTextExist && <Base.P className={this.decorateCSS("button-text")}>{buttonLeft.text}</Base.P>}
                          </Base.Button>
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
                        {rightSubtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{rightItems.subtitle}</Base.SectionSubTitle>}
                        {rightTitleExist && <Base.H2 className={this.decorateCSS("title")}>{rightItems.title}</Base.H2>}
                        {rightDescriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{rightItems.description}</Base.SectionDescription>}
                        {rightButtonExist && (
                          <div className={this.decorateCSS("button-wrapper")}>
                            <ComposerLink path={buttonRight.url}>
                              <Base.Button buttonType={buttonRight.type} className={this.decorateCSS("button")}>
                                {rightbuttonTextExist && <Base.P className={this.decorateCSS("button-text")}>{buttonRight.text}</Base.P>}
                              </Base.Button>
                            </ComposerLink>
                          </div>
                        )}
                      </Base.VerticalContent>
                      {rightImageExist && <Base.Media value={rightItems.image} className={`${this.decorateCSS("image")} ${!hasValidRightCardTexts && this.decorateCSS("full")}`} />}
                    </div>
                  </div>
                )}
                {hasValidBottomRightCard && rightBottomItems.visibility && (
                  <div className={this.decorateCSS("button-card")}>
                    <div className={this.decorateCSS("card")}>
                      <Base.VerticalContent className={this.decorateCSS("left")}>
                        {rightBottomSubtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{rightBottomItems.subtitle}</Base.SectionSubTitle>}
                        {rightBottomTitleExist && <Base.H2 className={this.decorateCSS("title")}>{rightBottomItems.title}</Base.H2>}
                        {rightBottomDescriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{rightBottomItems.description}</Base.SectionDescription>}
                        {rightBottomButtonExist && (
                          <div className={this.decorateCSS("button-wrapper")}>
                            <ComposerLink path={buttonRightBottom.url}>
                              <Base.Button buttonType={buttonRightBottom.type} className={this.decorateCSS("button")}>
                                {rightBottomButtonTextExist && <Base.P className={this.decorateCSS("button-text")}>{buttonRightBottom.text}</Base.P>}
                              </Base.Button>
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
