import * as React from "react";
import styles from "./download11.module.scss";
import { BaseDownload } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";

class Download11 extends BaseDownload {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "object",
      displayer: "Left Card",
      key: "left",
      value: [
        {
          type: "boolean",
          key: "Visibility",
          displayer: "visibility",
          value: true,
        },
        {
          type: "image",
          key: "image",
          value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6759ab4b0655f8002ca5eca4?alt=media",
          displayer: "Image",
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
        {
          type: "string",
          key: "buttonText",
          displayer: "Button Text",
          value: "More",
        },
        {
          type: "page",
          key: "buttonUrl",
          displayer: "Button Url",
          value: "",
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
          key: "Visibility",
          displayer: "visibility",
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
          type: "string",
          key: "buttonText",
          displayer: "Button Text",
          value: "More",
        },
        {
          type: "page",
          key: "buttonUrl",
          displayer: "Button Url",
          value: "",
        },
        {
          type: "image",
          key: "image",
          value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6759ac1d0655f8002ca5ecee?alt=media",
          displayer: "Image",
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
          key: "Visibility",
          displayer: "visibility",
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
          key: "buttonText",
          displayer: "Button Text",
          value: "Download app",
        },
        {
          type: "page",
          key: "buttonUrl",
          displayer: "Button Url",
          value: "",
        },
      ],
    });
  }

  getName(): string {
    return "Download-11";
  }

<<<<<<< HEAD
        this.addProp({
            type: "image",
            key: "logoimage",
            displayer: "LogoImage",
            value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c36f40655f8002ca6e303?alt=media&timestamp=1734096646977",
        });
=======
  render() {
    const leftItems = this.castToObject<any>("left");
    const rightItems = this.castToObject<any>("right");
    const rightBottomItems = this.castToObject<any>("rightBottom");
>>>>>>> 66e7db3ef05de9a24517add17dcaf42093a5840b

    const subtitleExist = this.castToString(leftItems.subtitle);
    const titleExist = this.castToString(leftItems.title);
    const descriptionExist = this.castToString(leftItems.description);
    const buttonTextExist = this.castToString(leftItems.buttonText);

    const leftCardExist = subtitleExist || titleExist || descriptionExist || buttonTextExist;
    const hasValidCard = (leftCardExist || leftItems.image) && leftItems.Visibility;

    const rightSubtitleExist = this.castToString(rightItems.subtitle);
    const rightTitleExist = this.castToString(rightItems.title);
    const rightDescriptionExist = this.castToString(rightItems.description);
    const rightbuttonTextExist = this.castToString(rightItems.buttonText);

    const hasValidRightCardTexts = rightSubtitleExist || rightTitleExist || rightDescriptionExist || rightbuttonTextExist;
    const hasValidRightCard = (hasValidRightCardTexts || rightItems.image) && rightItems.Visibility;

    const rightBottomTitleExist = this.castToString(rightBottomItems.title);
    const rightBottomButtonExist = this.castToString(rightBottomItems.buttonText);
    const hasValidBottomRightCard = (rightBottomTitleExist || rightBottomButtonExist) && rightBottomItems.Visibility;

    const hasValidRightCards = hasValidRightCard || hasValidBottomRightCard;

    const alignmentValue = Base.getContentAlignment();

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("cards")}>
            {hasValidCard && (
              <div className={hasValidRightCard || hasValidBottomRightCard ? this.decorateCSS("left-card") : this.decorateCSS("left-card-full")}>
                {hasValidCard && (
                  <Base.VerticalContent className={this.decorateCSS("card")}>
                    {leftItems.image && <img src={leftItems.image} className={leftCardExist ? this.decorateCSS("image") : this.decorateCSS("image-full")} />}
                    {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{leftItems.subtitle}</Base.SectionSubTitle>}
                    {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{leftItems.title}</Base.SectionTitle>}
                    {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{leftItems.description}</Base.SectionDescription>}
                    {buttonTextExist && (
                      <ComposerLink path={leftItems.buttonUrl}>
                        <Base.Button>{leftItems.buttonText}</Base.Button>
                      </ComposerLink>
                    )}
                  </Base.VerticalContent>
                )}
              </div>
            )}
            {hasValidRightCards && (
              <div className={this.decorateCSS("right-cards")}>
                {hasValidRightCard && rightItems.Visibility && (
                  <div className={this.decorateCSS("upper-card")}>
                    <div className={this.decorateCSS("card")}>
                      {hasValidRightCardTexts && (
                        <Base.VerticalContent className={this.decorateCSS("left")}>
                          {rightSubtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{rightItems.subtitle}</Base.SectionSubTitle>}
                          {rightTitleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{rightItems.title}</Base.SectionTitle>}
                          {rightDescriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{rightItems.description}</Base.SectionDescription>}
                          {rightbuttonTextExist && (
                            <ComposerLink path={rightItems.buttonUrl}>
                              <Base.Button>{rightItems.buttonText}</Base.Button>
                            </ComposerLink>
                          )}
                        </Base.VerticalContent>
                      )}
                      {rightItems.image && <img src={rightItems.image} className={hasValidRightCardTexts ? this.decorateCSS("image") : this.decorateCSS("image-full")} />}
                    </div>
                  </div>
                )}
                {hasValidBottomRightCard && rightBottomItems.Visibility && (
                  <div className={this.decorateCSS("buttom-card")}>
                    <div className={alignmentValue === "left" ? this.decorateCSS("card") : alignmentValue === "center" ? this.decorateCSS("card-center") : ""}>
                      {this.castToString(rightBottomItems.title) && <Base.SectionTitle className={this.decorateCSS("title")}>{rightBottomItems.title}</Base.SectionTitle>}
                      {rightBottomButtonExist && (
                        <ComposerLink path={rightBottomItems.buttonUrl}>
                          <Base.Button>{rightBottomItems.buttonText}</Base.Button>
                        </ComposerLink>
                      )}
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
