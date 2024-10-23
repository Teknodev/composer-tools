import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature1.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";

type CardComponent = {
  image: string;
  mini: boolean;
  date: JSX.Element;
  readTime: JSX.Element;
  title: JSX.Element;
  description: JSX.Element;
  profileImage: string;
  fullname: JSX.Element;
  profileDescription: JSX.Element;
  url: string;
};

class Feature1 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      key: "card",
      displayer: "Card",
      value: [
        {
          type: "object",
          key: "cardInfo",
          displayer: "Card Info",
          value: [
            {
              type: "boolean",
              key: "mini",
              displayer: "Mini",
              value: false,
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667adc8a4fe95d002b35e5b1?alt=media&timestamp=1719327900554",
            },
            {
              type: "string",
              key: "date",
              displayer: "date",
              value: "Jun 28, 2022",
            },
            {
              type: "string",
              key: "readTime",
              displayer: "time",
              value: "2 min read",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "The nine-to-five Is Dead. Here’s What to Replace It With",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Without even reducing the 40-hour work week. Time is money, right?",
            },
            {
              type: "image",
              key: "profileImage",
              displayer: "Profile Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667adc8a4fe95d002b35e5b2?alt=media&timestamp=1719327900554",
            },
            {
              type: "string",
              key: "fullname",
              displayer: "Fullname",
              value: "Alexander Hipp",
            },
            {
              type: "string",
              key: "profileDescription",
              displayer: "Profile Description",
              value: "written by",
            },
            {
              type: "page",
              key: "url",
              displayer: "url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "cardInfo",
          displayer: "Card Info",
          value: [
            {
              type: "boolean",
              key: "mini",
              displayer: "Mini",
              value: true,
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667adc8a4fe95d002b35e5b0?alt=media&timestamp=1719327900554",
            },
            {
              type: "string",
              key: "date",
              displayer: "date",
              value: "Jun 21, 2022",
            },
            {
              type: "string",
              key: "readTime",
              displayer: "time",
              value: "2 min read",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "The Power of Visualization in the 21st century",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "While futurists and fundraisers used to make bullish predictions about artificial general intelligence, they’ve become quieter lately. Peter Thiel — the tech billionaire and rumored vampire — says Silicon Valley big brains have lost enthusiasm for AGI.",
            },
            {
              type: "image",
              key: "profileImage",
              displayer: "Profile Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667adc8a4fe95d002b35e5b3?alt=media&timestamp=1719327900554",
            },
            {
              type: "string",
              key: "fullname",
              displayer: "Fullname",
              value: "Anil Vugels",
            },
            {
              type: "string",
              key: "profileDescription",
              displayer: "Profile Description",
              value: "written by",
            },
            {
              type: "page",
              key: "url",
              displayer: "url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "cardInfo",
          displayer: "Card Info",
          value: [
            {
              type: "boolean",
              key: "mini",
              displayer: "Mini",
              value: true,
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6711136797fe08002c76fc1f?alt=media",
            },
            {
              type: "string",
              key: "date",
              displayer: "date",
              value: "Jun 28, 2022",
            },
            {
              type: "string",
              key: "readTime",
              displayer: "time",
              value: "2 min read",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Why the security engineers loves working in fosec",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Working in cybersecurity means you’re constantly playing a game of catch-up. Every day you learn something new, but your work is also never finished.",
            },
            {
              type: "image",
              key: "profileImage",
              displayer: "Profile Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6711136797fe08002c76fc1f?alt=media",
            },
            {
              type: "string",
              key: "fullname",
              displayer: "Fullname",
              value: "Alexander Hipp",
            },
            {
              type: "string",
              key: "profileDescription",
              displayer: "Profile Description",
              value: "written by",
            },
            {
              type: "page",
              key: "url",
              displayer: "url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "cardInfo",
          displayer: "Card Info",
          value: [
            {
              type: "boolean",
              key: "mini",
              displayer: "Mini",
              value: false,
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6711143197fe08002c76fccc?alt=media",
            },
            {
              type: "string",
              key: "date",
              displayer: "date",
              value: "Apr 9, 2022",
            },
            {
              type: "string",
              key: "readTime",
              displayer: "time",
              value: "2 min read",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "There Are Zero Bridges Across The Amazon. Here Is Why",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Here is a fun fact to stick in the back of your mind for trivia night or to use as an interesting ice breaker: the Amazon River has no bridges. None. Zero. Zilch. That is in spite of the fact that the Amazon is 4,345 miles long.",
            },
            {
              type: "image",
              key: "profileImage",
              displayer: "Profile Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6711143197fe08002c76fccc?alt=media",
            },
            {
              type: "string",
              key: "fullname",
              displayer: "Fullname",
              value: "Anil Vugels",
            },
            {
              type: "string",
              key: "profileDescription",
              displayer: "Profile Description",
              value: "written by",
            },
            {
              type: "page",
              key: "url",
              displayer: "url",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "string",
      key: "leftSideText",
      displayer: "Left Side Text",
      value: "Featured Posts",
    });
    this.addProp({
      type: "string",
      key: "rightSideText",
      displayer: "Right Side Text",
      value: "Featured Posts",
    });
    this.addProp({
      type: "page",
      key: "url",
      displayer: "Right Side Text URL",
      value: "",
    });
    this.addProp({
      type: "icon",
      key: "left_side_icon",
      displayer: "Left Side Icon",
      value: "FaStarOfLife",
    });
    this.addProp({
      type: "icon",
      key: "rightSideIcon",
      displayer: "Right Side Icon",
      value: "MdArrowOutward",
    });
    this.addProp({
      type: "icon",
      key: "date_icon",
      displayer: "Date Icon",
      value: "CiCalendarDate",
    });
    this.addProp({
      type: "icon",
      key: "time_icon",
      displayer: "Time Icon",
      value: "CiClock2",
    });
    this.addProp({
      type: "boolean",
      key: "underlineAnimation",
      displayer: "Underline Animation",
      value: true,
    });
    this.addProp({
      type: "boolean",
      key: "enableEllipsisTitle",
      displayer: "Enable Ellipsis for Title",
      value: true,
    });
    this.addProp({
      type: "boolean",
      key: "enableEllipsisDesc",
      displayer: "Enable Ellipsis for Description",
      value: true,
    });
    this.addProp({
      type: "number",
      key: "maxTitleLength",
      displayer: "Max Title Length",
      value: 60,
    });
    this.addProp({
      type: "number",
      key: "maxDescriptionLength",
      displayer: "Max Description Length",
      value: 90,
    });
  }

  getName(): string {
    return "Feature 1";
  }

  truncateText(text: string, maxLength: number, isTitle: boolean = false): string {
    if (!text) return "";
    const shouldTruncate = isTitle ? this.getPropValue("enableEllipsisTitle") : this.getPropValue("enableEllipsisDesc");
    if (shouldTruncate && text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  }

  render() {
    const cardContent = this.castToObject<CardComponent[]>("card");

    const leftSideText = this.castToString(this.getPropValue("leftSideText"));
    const leftSideIcon = this.getPropValue("left_side_icon");

    const rightSideText = this.castToString(this.getPropValue("rightSideText"));
    const rightSideIcon = this.getPropValue("rightSideIcon");
    const rightSideUrl = this.getPropValue("url");
    
    const timeIcon = this.getPropValue("time_icon");
    const dateIcon = this.getPropValue("date_icon");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {/* Header */}
          {(leftSideIcon || leftSideText || rightSideIcon || rightSideText) && (
            <header className={this.decorateCSS("header")}>
              {(leftSideText || leftSideIcon) && (
                <div className={this.decorateCSS("left-side")}>
                  <ComposerIcon
                    name={this.getPropValue("left_side_icon")}
                    propsIcon={{ className: this.decorateCSS("left-side-icon") }}
                  />
                  {leftSideText &&
                    <Base.SectionTitle className={this.decorateCSS("first-text")}>{this.getPropValue("leftSideText")}</Base.SectionTitle>
                  }
                </div>
              )}
              {(rightSideText || rightSideIcon) && (
                <div className={this.decorateCSS("right-side")}>
                  <ComposerLink path={rightSideUrl}>
                    <div className={this.decorateCSS("link-container")}>
                      <span className={this.decorateCSS("link-text")}>
                        {this.getPropValue("rightSideText")}
                        <ComposerIcon
                          name={rightSideIcon}
                          propsIcon={{ className: this.decorateCSS("right-side-icon") }}
                        />
                      </span>
                    </div>
                  </ComposerLink>
                </div>
              )}
            </header>
          )}

          {/* Cards */}
          <Base.ListGrid className={this.decorateCSS("card-column")}>
            {cardContent.map((cardInfo: CardComponent, index: number) => {
              const title = this.castToString(cardInfo.title);
              const description = this.castToString(cardInfo.description);

              const profileDescriptionExist = this.castToString(cardInfo.profileDescription);
              const fullNameExist = this.castToString(cardInfo.fullname);
              const readTimeExist = this.castToString(cardInfo.readTime);
              const dateExist = this.castToString(cardInfo.date);

              if (title || description)
                return (
                  <Base.GridCell
                    key={index}
                    className={`
                    ${this.decorateCSS("card")}
                    ${this.decorateCSS(cardInfo.mini ? "mini" : "")}
                  `}
                  >
                    {cardInfo.image &&
                      <div className={this.decorateCSS("image-container")}>
                        <img
                          className={this.decorateCSS("image")}
                          src={cardInfo.image}
                          alt="Card Photo"
                        />
                      </div>
                    }
                    <div className={this.decorateCSS("card-content")}>
                      {(dateExist || readTimeExist) && (
                        <div className={this.decorateCSS("date-time")}>
                          {(dateExist) && (
                            <div className={this.decorateCSS("date")}>
                              {dateIcon &&
                                <ComposerIcon
                                  name={dateIcon}
                                  propsIcon={{
                                    className: this.decorateCSS("date_icon"),
                                  }}
                                />
                              }
                              {dateExist &&
                                <Base.P className={this.decorateCSS("date-text")}>{cardInfo.date}</Base.P>
                              }
                            </div>
                          )}
                          {(readTimeExist) && (
                            <div className={this.decorateCSS("time")}>
                              {timeIcon &&
                                <ComposerIcon
                                  name={timeIcon}
                                  propsIcon={{
                                    className: this.decorateCSS("time_icon"),
                                  }}
                                />
                              }
                              {readTimeExist &&
                                <Base.P className={this.decorateCSS("time-text")}>{cardInfo.readTime}</Base.P>
                              }
                            </div>
                          )}
                        </div>
                      )}
                      {title && (
                        <ComposerLink path={cardInfo.url}>
                          <Base.H2 className={this.decorateCSS("title")}>
                            {this.truncateText(title, this.getPropValue("maxTitleLength"), true)}
                          </Base.H2>
                        </ComposerLink>
                      )}
                      {description && (
                        <Base.P className={this.decorateCSS("description")}>
                          {this.truncateText(description, this.getPropValue("maxDescriptionLength"))}
                        </Base.P>
                      )}

                      {(cardInfo.profileImage || description || fullNameExist) && (
                        <div className={this.decorateCSS("user-info")}>
                          {cardInfo.profileImage && (
                            <img
                              className={this.decorateCSS("profile-image")}
                              src={cardInfo.profileImage}
                              alt={this.castToString(cardInfo.fullname)}
                            />
                          )}

                          {(profileDescriptionExist || fullNameExist) && (
                            <div className={this.decorateCSS("user")}>
                              {profileDescriptionExist &&
                                <Base.P className={this.decorateCSS("profile-description")}>
                                  {cardInfo.profileDescription}
                                </Base.P>
                              }
                              {fullNameExist &&
                                <Base.P className={this.decorateCSS("fullname")}>
                                  {cardInfo.fullname}
                                </Base.P>
                              }
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </Base.GridCell>
                );
              return null;
            })}
          </Base.ListGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature1;
