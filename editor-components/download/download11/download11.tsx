import * as React from "react";
import styles from "./download11.module.scss";
import { BaseDownload } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";

class Download11 extends BaseDownload {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "left",
      displayer: "Left Card",
      value: [
        {
          type: "object",
          key: "listItem",
          displayer: "Displayer",
          value: [
            {
              type: "image",
              key: "image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6749b887506a40002c2f8ab0?alt=media&timestamp=1732884670612",
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
        },
      ],
      additionalParams: {
        maxElementCount: 1,
      },
    });

    this.addProp({
      type: "array",
      key: "right",
      displayer: "Right Card Upper",
      value: [
        {
          type: "object",
          key: "listItem",
          displayer: "Displayer",
          value: [
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6749b834506a40002c2f8a7a?alt=media&timestamp=1732884590972",
              displayer: "Image",
            },
          ],
        },
      ],
      additionalParams: {
        maxElementCount: 1,
      },
    });
    this.addProp({
      type: "array",
      key: "rightBottom",
      displayer: "Right Card Bottom",
      value: [
        {
          type: "object",
          key: "listItem",
          displayer: "Displayer",
          value: [
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
        },
      ],
      additionalParams: {
        maxElementCount: 1,
      },
    });
  }

  getName(): string {
    return "Download-11";
  }

  render() {
    const leftItems = this.castToObject<any[]>("left");
    const hasValidCard = leftItems.some((item: any) => {
      const subtitleExist = this.castToString(item.subtitle);
      const titleExist = this.castToString(item.title);
      const descriptionExist = this.castToString(item.description);
      return subtitleExist || titleExist || descriptionExist || item.image;
    });

    const rightItems = this.castToObject<any[]>("right");
    const hasValidRightCard = rightItems.some((item: any) => {
      const subtitleExist = this.castToString(item.subtitle);
      const titleExist = this.castToString(item.title);
      const descriptionExist = this.castToString(item.description);
      return subtitleExist || titleExist || descriptionExist || item.image;
    });

    const rightBottomItems = this.castToObject<any[]>("rightBottom");
    const hasValidBottomRightCard = rightBottomItems.some((item: any) => {
      const titleExist = this.castToString(item.title);
      const buttonExist = this.castToString(item.buttonText);
      return titleExist || buttonExist;
    });

    const hasValidRightCards = hasValidRightCard || hasValidBottomRightCard;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("cards")}>
            {hasValidCard && (
              <div className={hasValidRightCard || hasValidBottomRightCard ? this.decorateCSS("left-card") : this.decorateCSS("left-card-full")}>
                {this.castToObject<any[]>("left").map((item: any, index: number) => {
                  const subtitleExist = this.castToString(item.subtitle);
                  const titleExist = this.castToString(item.title);
                  const descriptionExist = this.castToString(item.description);
                  const buttonTextExist = this.castToString(item.buttonText);
                  const cardExist = subtitleExist || titleExist || descriptionExist || item.image;
                  return (
                    cardExist && (
                      <Base.VerticalContent className={this.decorateCSS("card")}>
                        {item.image && <img src={item.image} className={this.decorateCSS("image")} />}
                        {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{item.subtitle}</Base.SectionSubTitle>}
                        {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{item.title}</Base.SectionTitle>}
                        {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{item.description}</Base.SectionDescription>}
                        {buttonTextExist && (
                          <ComposerLink path={item.buttonUrl}>
                            <Base.Button>{item.buttonText}</Base.Button>
                          </ComposerLink>
                        )}
                      </Base.VerticalContent>
                    )
                  );
                })}
              </div>
            )}
            {hasValidRightCards && (
              <div className={this.decorateCSS("right-cards")}>
                {hasValidRightCard && (
                  <div className={this.decorateCSS("upper-card")}>
                    {this.castToObject<any[]>("right").map((item: any, index: number) => {
                      const subtitleExist = this.castToString(item.subtitle);
                      const titleExist = this.castToString(item.title);
                      const descriptionExist = this.castToString(item.description);
                      const buttonExist = this.castToString(item.buttonText);
                      const cardExist = subtitleExist || titleExist || descriptionExist || buttonExist || item.image;
                      return (
                        cardExist && (
                          <div className={this.decorateCSS("card")}>
                            <Base.VerticalContent className={this.decorateCSS("left")}>
                              {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{item.subtitle}</Base.SectionSubTitle>}
                              {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{item.title}</Base.SectionTitle>}
                              {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{item.description}</Base.SectionDescription>}
                              {buttonExist && (
                                <ComposerLink path={item.buttonUrl}>
                                  <Base.Button>{item.buttonText}</Base.Button>
                                </ComposerLink>
                              )}
                            </Base.VerticalContent>
                            {item.image && <img src={item.image} className={this.decorateCSS("image")} />}
                          </div>
                        )
                      );
                    })}
                  </div>
                )}
                {hasValidBottomRightCard && (
                  <div className={this.decorateCSS("buttom-card")}>
                    {this.castToObject<any[]>("rightBottom").map((item: any, index: number) => {
                      const titleExist = this.castToString(item.title);
                      const buttonExist = this.castToString(item.buttonText);

                      return (
                        (titleExist || buttonExist) && (
                          <div className={this.decorateCSS("card")}>
                            {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{item.title}</Base.SectionTitle>}
                            {buttonExist && (
                              <ComposerLink path={item.buttonUrl}>
                                <Base.Button>{item.buttonText}</Base.Button>
                              </ComposerLink>
                            )}
                          </div>
                        )
                      );
                    })}
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
