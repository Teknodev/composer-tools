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
      ],
    });
    this.addProp(INPUTS.BUTTON("buttonLeft", "Left Button", "More", "", "", "", "Primary"))
    this.addProp({
      type: "object",
      displayer: "Right Card Upper",
      key: "right",
      value: [
        {
          type: "boolean",
          key: "visibility",
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
          type: "image",
          key: "image",
          value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6759ac1d0655f8002ca5ecee?alt=media",
          displayer: "Image",
        },

      ],
    });
    this.addProp(INPUTS.BUTTON("buttonRight", "Right Button", "More", "", "", "", "Primary"));

      this.addProp({
        type: "object",
        displayer: "Right Card Bottom",
        key: "rightBottom",
        value: [
          {
            type: "boolean",
            key: "visibility",
            displayer: "visibility",
            value: true,
          },
          {
            type: "string",
            key: "title",
            displayer: "Title",
            value: "Best new app and updates*",
          },

        ],
      });
    this.addProp(INPUTS.BUTTON("buttonRightBottom", "Right Bottom Button", "More", "", "", "", "Primary"))
  }

  static getName(): string {
    return "Download 11";
  }

  render() {
    const leftItems = this.castToObject<any>("left");
    const rightItems = this.castToObject<any>("right");
    const rightBottomItems = this.castToObject<any>("rightBottom");
    const buttonLeft: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("buttonLeft");
    const buttonRight: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("buttonRight");
    const buttonRightBottom: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("buttonRightBottom");

    const subtitleExist = this.castToString(leftItems.subtitle);
    const titleExist = this.castToString(leftItems.title);
    const descriptionExist = this.castToString(leftItems.description);
    const buttonTextExist = this.castToString(buttonLeft.text);

    const leftCardExist = subtitleExist || titleExist || descriptionExist || buttonTextExist;
    const hasValidCard = (leftCardExist || leftItems.image) && leftItems.visibility;

    const rightSubtitleExist = this.castToString(rightItems.subtitle);
    const rightTitleExist = this.castToString(rightItems.title);
    const rightDescriptionExist = this.castToString(rightItems.description);
    const rightbuttonTextExist = this.castToString(buttonRight.text);

    const hasValidRightCardTexts = rightSubtitleExist || rightTitleExist || rightDescriptionExist || rightbuttonTextExist;
    const hasValidRightCard = (hasValidRightCardTexts || rightItems.image) && rightItems.visibility;

    const rightBottomTitleExist = this.castToString(rightBottomItems.title);
    const rightBottomButtonExist = this.castToString(buttonRightBottom.text);
    const hasValidBottomRightCard = (rightBottomTitleExist || rightBottomButtonExist) && rightBottomItems.visibility;

    const hasValidRightCards = hasValidRightCard || hasValidBottomRightCard;

    const alignmentValue = Base.getContentAlignment();

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("cards")}>
            {hasValidCard && (
              <div className={`${this.decorateCSS("left-card")} ${(hasValidRightCard || hasValidBottomRightCard) ? this.decorateCSS("no-full") : this.decorateCSS("full")}`}>
                {hasValidCard && (
                  <Base.VerticalContent className={this.decorateCSS("card")}>
                    {leftItems.image && <img src={leftItems.image} className={`${this.decorateCSS("image")} ${leftCardExist ? this.decorateCSS("no-full") : this.decorateCSS("full")}`} />}
                    {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{leftItems.subtitle}</Base.SectionSubTitle>}
                    {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{leftItems.title}</Base.SectionTitle>}
                    {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{leftItems.description}</Base.SectionDescription>}
                    {(!buttonLeft.image && (buttonLeft.icon || buttonLeft.text)) && (
                      <div className={this.decorateCSS("button-wrapper")}>
                        <ComposerLink path={buttonLeft.url}>
                          <Base.Button buttonType={buttonLeft.type} className={this.decorateCSS("button")}>
                            {buttonLeft.icon && (
                              <Base.Icon
                                propsIcon={{
                                  className: this.decorateCSS("button-icon"),
                                }}
                                name={buttonLeft.icon}
                              />
                            )}
                            {buttonTextExist && <div className={this.decorateCSS("button-text")}>{buttonLeft.text}</div>}
                          </Base.Button>
                        </ComposerLink>
                      </div>
                    )}
                    {buttonLeft.image && (
                      <div className={this.decorateCSS("button-wrapper")}>
                        <ComposerLink path={buttonLeft.url}>
                          <img src={buttonLeft.image} className={this.decorateCSS("button-image")} />
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
                      {hasValidRightCardTexts && (
                        <Base.VerticalContent className={this.decorateCSS("left")}>
                          {rightSubtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{rightItems.subtitle}</Base.SectionSubTitle>}
                          {rightTitleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{rightItems.title}</Base.SectionTitle>}
                          {rightDescriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{rightItems.description}</Base.SectionDescription>}
                          {(!buttonRight.image && (buttonRight.icon || buttonRight.text)) && (
                            <div className={this.decorateCSS("button-wrapper")}>
                              <ComposerLink path={buttonRight.url}>
                                <Base.Button buttonType={buttonRight.type} className={this.decorateCSS("button")}>
                                  {buttonRight.icon && (
                                    <Base.Icon
                                      propsIcon={{
                                        className: this.decorateCSS("button-icon"),
                                      }}
                                      name={buttonRight.icon}
                                    />
                                  )}
                                  {rightbuttonTextExist && <div className={this.decorateCSS("button-text")}>{buttonRight.text}</div>}
                                </Base.Button>
                              </ComposerLink>
                            </div>
                          )}
                          {buttonRight.image && (
                            <div className={this.decorateCSS("button-wrapper")}>
                              <ComposerLink path={buttonRight.url}>
                                <img src={buttonRight.image} className={this.decorateCSS("button-image")} />
                              </ComposerLink>
                            </div>
                          )}
                        </Base.VerticalContent>
                      )}
                      {rightItems.image && <img src={rightItems.image} className={`${this.decorateCSS("image")} ${!hasValidRightCardTexts && this.decorateCSS("full")}`} />}
                    </div>
                  </div>
                )}
                {hasValidBottomRightCard && rightBottomItems.visibility && (
                  <div className={this.decorateCSS("buttom-card")}>
                    <div className={`${this.decorateCSS("card")} ${alignmentValue === "center" && this.decorateCSS("center")}`}>
                      {this.castToString(rightBottomItems.title) && <Base.SectionTitle className={this.decorateCSS("title")}>{rightBottomItems.title}</Base.SectionTitle>}
                      {(!buttonRightBottom.image && (buttonRightBottom.icon || buttonRightBottom.text)) && (
                        <div className={this.decorateCSS("button-wrapper")}>
                          <ComposerLink path={buttonRightBottom.url}>
                            <Base.Button buttonType={buttonRightBottom.type} className={this.decorateCSS("button")}>
                              {buttonRightBottom.icon && (
                                <Base.Icon
                                  propsIcon={{
                                    className: this.decorateCSS("button-icon"),
                                  }}
                                  name={buttonRightBottom.icon}
                                />
                              )}
                              {rightBottomTitleExist && <div className={this.decorateCSS("button-text")}>{buttonRightBottom.text}</div>}
                            </Base.Button>
                          </ComposerLink>
                        </div>
                      )}
                      {buttonRightBottom.image && (
                        <div className={this.decorateCSS("button-wrapper")}>
                          <ComposerLink path={buttonRightBottom.url}>
                            <img src={buttonRightBottom.image} className={this.decorateCSS("button-image")} />
                          </ComposerLink>
                        </div>
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
