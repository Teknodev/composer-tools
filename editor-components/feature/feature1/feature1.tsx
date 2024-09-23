import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature1.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

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

type Link = {
  url: string;
  text: string;
  icon: string;
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
              value:
                "Without even reducing the 40-hour work week. Time is money, right?",
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
              value: "Written by",
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
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667adc8a4fe95d002b35e5b0?alt=media&timestamp=1719327900554",
            },
            {
              type: "string",
              key: "date",
              displayer: "date",
              value: "21 Jun 2022",
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
              value: "Written by",
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
              value: "by",
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
              value: "by",
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
      type: "array",
      key: "links",
      displayer: "Links",
      value: [
        {
          type: "object",
          key: "link",
          displayer: "Link",
          value: [
            {
              type: "page",
              key: "url",
              displayer: "URL",
              value: "",
            },
            {
              type: "string",
              key: "leftSideText",
              displayer: "Left Side Text",
              value: "Featured Posts",
            },
            {
              type: "string",
              key: "rightSideText",
              displayer: "Right Side Text",
              value: "Featured Posts",
            },
            {
              type: "icon",
              key: "rightSideIcon",
              displayer: "Right Side Icon",
              value: "MdArrowOutward",
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
      value: 100,
    });
  }

  getName(): string {
    return "Feature 1";
  }

  truncateText(
    text: string,
    maxLength: number,
    isTitle: boolean = false
  ): string {
    if (!text) return "";
    const shouldTruncate = isTitle
      ? this.getPropValue("enableEllipsisTitle")
      : this.getPropValue("enableEllipsisDesc");
    if (shouldTruncate && text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  }

  render() {
    const leftSideText = this.castToString(this.getPropValue("leftSideText"));
    const rightSideText = this.castToString(this.getPropValue("rightSideText"));
    const leftSideIcon = this.castToString(this.getPropValue("left_side_icon"));
    const rightSideIcon = this.castToString(this.getPropValue("rightSideIcon"));
    const cardContent = this.castToObject<CardComponent[]>("card");
    const links = this.castToObject<Link[]>("links");

    const leftContent = cardContent.filter(
      (card, index: number) => index % 2 === 0 && !card.mini
    );
    const rightContent = cardContent.filter(
      (card, index: number) => index % 2 === 1 && !card.mini
    );
    const middleContent = cardContent.filter((card) => card.mini);

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {leftSideIcon || leftSideText || rightSideIcon || rightSideText ? (
            <div className={this.decorateCSS("header")}>
              {(leftSideText || leftSideIcon) && (
                <div className={this.decorateCSS("left-side")}>
                  {
                    <ComposerIcon
                      name={this.getPropValue("left_side_icon")}
                      propsIcon={{
                        className: this.decorateCSS("left-side-icon"),
                      }}
                    />
                  }
                  {leftSideText && (
                    <h1 className={this.decorateCSS("first-text")}>
                      {leftSideText}
                    </h1>
                  )}
                </div>
              )}

              {links.length > 0 && (
                <div className={this.decorateCSS("right-side")}>
                  {links.map((link: Link, index: number) => {
                    return (
                      <ComposerLink path={link.url}>
                        <div className={this.decorateCSS("link-container")}>
                          <span className={this.decorateCSS("link-text")}>
                            {rightSideText ? (
                              <>
                                {rightSideText}
                                {
                                  <ComposerIcon
                                    name={this.getPropValue("rightSideIcon")}
                                    propsIcon={{
                                      className:
                                        this.decorateCSS("right-side-icon"),
                                    }}
                                  />
                                }
                              </>
                            ) : (
                              ""
                            )}
                          </span>
                        </div>
                      </ComposerLink>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            ""
          )}

          <div className={this.decorateCSS("features")}>
            {leftContent.length > 0 && (
              <div className={this.decorateCSS("card-column")}>
                {leftContent.slice(0, 1).map((cardInfo: CardComponent) => (
                  <div className={this.decorateCSS("card")}>
                    {cardInfo.image && (
                      <div className={this.decorateCSS("image-container")}>
                        <img
                          className={this.decorateCSS("image")}
                          src={cardInfo.image}
                          alt=""
                        />
                      </div>
                    )}
                    <div className={this.decorateCSS("card-content")}>
                      {(this.castToString(cardInfo.date) ||
                        this.castToString(cardInfo.readTime)) && (
                        <div className={this.decorateCSS("date-time")}>
                          {this.castToString(cardInfo.date) && (
                            <div className={this.decorateCSS("date")}>
                              <ComposerIcon
                                name={this.getPropValue("date_icon")}
                                propsIcon={{
                                  className: this.decorateCSS("date_icon"),
                                }}
                              />
                              <h5 className={this.decorateCSS("date-text")}>
                                {cardInfo.date}
                              </h5>
                            </div>
                          )}
                          {this.castToString(cardInfo.readTime) && (
                            <div className={this.decorateCSS("time")}>
                              <ComposerIcon
                                name={this.getPropValue("time_icon")}
                                propsIcon={{
                                  className: this.decorateCSS("time_icon"),
                                }}
                              />
                              <h5 className={this.decorateCSS("time-text")}>
                                {cardInfo.readTime}
                              </h5>
                            </div>
                          )}
                        </div>
                      )}
                      {this.castToString(cardInfo.title) && (
                        <ComposerLink path={cardInfo.url}>
                          <h1 className={this.decorateCSS("title")}>
                            {this.truncateText(
                              this.castToString(cardInfo.title),
                              this.getPropValue("maxTitleLength"),
                              true
                            )}
                          </h1>
                        </ComposerLink>
                      )}
                      {this.castToString(cardInfo.description) && (
                        <p className={this.decorateCSS("description")}>
                          {this.truncateText(
                            this.castToString(cardInfo.description) || "",
                            this.getPropValue("maxDescriptionLength")
                          )}
                        </p>
                      )}
                      {(cardInfo.profileImage ||
                        this.castToString(cardInfo.profileDescription) ||
                        this.castToString(cardInfo.fullname)) && (
                        <div
                          className={
                            this.decorateCSS("user-info") +
                            (cardInfo.profileImage ? "" : " no-profile")
                          }
                        >
                          {cardInfo.profileImage && (
                            <img
                              className={this.decorateCSS("profile-image")}
                              src={cardInfo.profileImage}
                              alt="profile image"
                            />
                          )}
                          {(this.castToString(cardInfo.profileDescription) ||
                            this.castToString(cardInfo.fullname)) && (
                            <div className={this.decorateCSS("user")}>
                              {this.castToString(
                                cardInfo.profileDescription
                              ) && (
                                <h3
                                  className={this.decorateCSS(
                                    "profile-description"
                                  )}
                                >
                                  {cardInfo.profileDescription}
                                </h3>
                              )}
                              {this.castToString(cardInfo.fullname) && (
                                <h3 className={this.decorateCSS("fullname")}>
                                  {cardInfo.fullname}
                                </h3>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {middleContent.length > 0 && (
              <div className={this.decorateCSS("middle-content")}>
                {middleContent.slice(0, 2).map((cardInfo: CardComponent) => (
                  <div className={this.decorateCSS("card")}>
                    {(this.castToString(cardInfo.date) ||
                      this.castToString(cardInfo.readTime)) && (
                      <div className={this.decorateCSS("date-time")}>
                        {this.castToString(cardInfo.date) && (
                          <div className={this.decorateCSS("date")}>
                            <ComposerIcon
                              name={this.getPropValue("date_icon")}
                              propsIcon={{
                                className: this.decorateCSS("date_icon"),
                              }}
                            />
                            <h5 className={this.decorateCSS("date-text")}>
                              {cardInfo.date}
                            </h5>
                          </div>
                        )}
                        {this.castToString(cardInfo.readTime) && (
                          <div className={this.decorateCSS("time")}>
                            <ComposerIcon
                              name={this.getPropValue("time_icon")}
                              propsIcon={{
                                className: this.decorateCSS("time_icon"),
                              }}
                            />
                            <h5 className={this.decorateCSS("time-text")}>
                              {cardInfo.readTime}
                            </h5>
                          </div>
                        )}
                      </div>
                    )}
                    {this.castToString(cardInfo.title) && (
                      <ComposerLink path={cardInfo.url}>
                        <h1 className={this.decorateCSS("title")}>
                          {this.truncateText(
                            this.castToString(cardInfo.title),
                            this.getPropValue("maxTitleLength"),
                            true
                          )}
                        </h1>
                      </ComposerLink>
                    )}
                    {this.castToString(cardInfo.description) && (
                      <p className={this.decorateCSS("description")}>
                        {this.truncateText(
                          this.castToString(cardInfo.description) || "",
                          this.getPropValue("maxDescriptionLength")
                        )}
                      </p>
                    )}
                    <div
                      className={
                        this.decorateCSS("user-info") +
                        (cardInfo.profileImage ? "" : " no-profile")
                      }
                    >
                      {cardInfo.profileImage && (
                        <img
                          className={this.decorateCSS("profile-image")}
                          src={cardInfo.profileImage}
                          alt="profile image"
                        />
                      )}
                      {(this.castToString(cardInfo.profileDescription) ||
                        this.castToString(cardInfo.fullname)) && (
                        <div className={this.decorateCSS("user")}>
                          {this.castToString(cardInfo.profileDescription) && (
                            <h3
                              className={this.decorateCSS(
                                "profile-description"
                              )}
                            >
                              {cardInfo.profileDescription}
                            </h3>
                          )}
                          {this.castToString(cardInfo.fullname) && (
                            <h3 className={this.decorateCSS("fullname")}>
                              {cardInfo.fullname}
                            </h3>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {rightContent.length > 0 && (
              <div className={this.decorateCSS("card-column")}>
                {rightContent.slice(0, 1).map((cardInfo: CardComponent) => (
                  <div className={this.decorateCSS("card")}>
                    {cardInfo.image && (
                      <div className={this.decorateCSS("image-container")}>
                        <img
                          className={this.decorateCSS("image")}
                          src={cardInfo.image}
                          alt=""
                        />
                      </div>
                    )}
                    <div className={this.decorateCSS("card-content")}>
                      {(this.castToString(cardInfo.date) ||
                        this.castToString(cardInfo.readTime)) && (
                        <div className={this.decorateCSS("date-time")}>
                          {this.castToString(cardInfo.date) && (
                            <div className={this.decorateCSS("date")}>
                              <ComposerIcon
                                name={this.getPropValue("date_icon")}
                                propsIcon={{
                                  className: this.decorateCSS("date_icon"),
                                }}
                              />
                              <h5 className={this.decorateCSS("date-text")}>
                                {cardInfo.date}
                              </h5>
                            </div>
                          )}
                          {this.castToString(cardInfo.readTime) && (
                            <div className={this.decorateCSS("time")}>
                              <ComposerIcon
                                name={this.getPropValue("time_icon")}
                                propsIcon={{
                                  className: this.decorateCSS("time_icon"),
                                }}
                              />
                              <h5 className={this.decorateCSS("time-text")}>
                                {cardInfo.readTime}
                              </h5>
                            </div>
                          )}
                        </div>
                      )}
                      {this.castToString(cardInfo.title) && (
                        <ComposerLink path={cardInfo.url}>
                          <h1 className={this.decorateCSS("title")}>
                            {this.truncateText(
                              this.castToString(cardInfo.title),
                              this.getPropValue("maxTitleLength"),
                              true
                            )}
                          </h1>
                        </ComposerLink>
                      )}
                      {this.castToString(cardInfo.description) && (
                        <p className={this.decorateCSS("description")}>
                          {this.truncateText(
                            this.castToString(cardInfo.description) || "",
                            this.getPropValue("maxDescriptionLength")
                          )}
                        </p>
                      )}
                      {(cardInfo.profileImage ||
                        this.castToString(cardInfo.profileDescription) ||
                        this.castToString(cardInfo.fullname)) && (
                        <div
                          className={
                            this.decorateCSS("user-info") +
                            (cardInfo.profileImage ? "" : " no-profile")
                          }
                        >
                          {cardInfo.profileImage && (
                            <img
                              className={this.decorateCSS("profile-image")}
                              src={cardInfo.profileImage}
                              alt="profile image"
                            />
                          )}
                          {(this.castToString(cardInfo.profileDescription) ||
                            this.castToString(cardInfo.fullname)) && (
                            <div className={this.decorateCSS("user")}>
                              {this.castToString(
                                cardInfo.profileDescription
                              ) && (
                                <h3
                                  className={this.decorateCSS(
                                    "profile-description"
                                  )}
                                >
                                  {cardInfo.profileDescription}
                                </h3>
                              )}
                              {this.castToString(cardInfo.fullname) && (
                                <h3 className={this.decorateCSS("fullname")}>
                                  {cardInfo.fullname}
                                </h3>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {(leftContent.length + rightContent.length > 2 ||
            middleContent.length > 2) && (
            <div className={this.decorateCSS("additional-cards")}>
              <div className={this.decorateCSS("card-column")}>
                {leftContent.slice(1, 2).map((cardInfo: CardComponent) => (
                  <div className={this.decorateCSS("card")}>
                    {cardInfo.image && (
                      <div className={this.decorateCSS("image-container")}>
                        <img
                          className={this.decorateCSS("image")}
                          src={cardInfo.image}
                          alt=""
                        />
                      </div>
                    )}
                    <div className={this.decorateCSS("card-content")}>
                      {(this.castToString(cardInfo.date) ||
                        this.castToString(cardInfo.readTime)) && (
                        <div className={this.decorateCSS("date-time")}>
                          {this.castToString(cardInfo.date) && (
                            <div className={this.decorateCSS("date")}>
                              <ComposerIcon
                                name={this.getPropValue("date_icon")}
                                propsIcon={{
                                  className: this.decorateCSS("date_icon"),
                                }}
                              />
                              <h5 className={this.decorateCSS("date-text")}>
                                {cardInfo.date}
                              </h5>
                            </div>
                          )}
                          {this.castToString(cardInfo.readTime) && (
                            <div className={this.decorateCSS("time")}>
                              <ComposerIcon
                                name={this.getPropValue("time_icon")}
                                propsIcon={{
                                  className: this.decorateCSS("time_icon"),
                                }}
                              />
                              <h5 className={this.decorateCSS("time-text")}>
                                {cardInfo.readTime}
                              </h5>
                            </div>
                          )}
                        </div>
                      )}
                      {this.castToString(cardInfo.title) && (
                        <ComposerLink path={cardInfo.url}>
                          <h1 className={this.decorateCSS("title")}>
                            {this.truncateText(
                              this.castToString(cardInfo.title),
                              this.getPropValue("maxTitleLength"),
                              true
                            )}
                          </h1>
                        </ComposerLink>
                      )}
                      {this.castToString(cardInfo.description) && (
                        <p className={this.decorateCSS("description")}>
                          {this.truncateText(
                            this.castToString(cardInfo.description) || "",
                            this.getPropValue("maxDescriptionLength")
                          )}
                        </p>
                      )}
                      {(cardInfo.profileImage ||
                        this.castToString(cardInfo.profileDescription) ||
                        this.castToString(cardInfo.fullname)) && (
                        <div
                          className={
                            this.decorateCSS("user-info") +
                            (cardInfo.profileImage ? "" : " no-profile")
                          }
                        >
                          {cardInfo.profileImage && (
                            <img
                              className={this.decorateCSS("profile-image")}
                              src={cardInfo.profileImage}
                              alt="profile image"
                            />
                          )}
                          {(this.castToString(cardInfo.profileDescription) ||
                            this.castToString(cardInfo.fullname)) && (
                            <div className={this.decorateCSS("user")}>
                              {this.castToString(
                                cardInfo.profileDescription
                              ) && (
                                <h3
                                  className={this.decorateCSS(
                                    "profile-description"
                                  )}
                                >
                                  {cardInfo.profileDescription}
                                </h3>
                              )}
                              {this.castToString(cardInfo.fullname) && (
                                <h3 className={this.decorateCSS("fullname")}>
                                  {cardInfo.fullname}
                                </h3>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className={this.decorateCSS("middle-content")}>
                {middleContent.slice(2, 3).map((bottomCard: CardComponent) => (
                  <div className={this.decorateCSS("card")}>
                    {(this.castToString(bottomCard.date) ||
                      this.castToString(bottomCard.readTime)) && (
                      <div className={this.decorateCSS("date-time")}>
                        {this.castToString(bottomCard.date) && (
                          <div className={this.decorateCSS("date")}>
                            <ComposerIcon
                              name={this.getPropValue("date_icon")}
                              propsIcon={{
                                className: this.decorateCSS("date_icon"),
                              }}
                            />
                            <h5 className={this.decorateCSS("date-text")}>
                              {bottomCard.date}
                            </h5>
                          </div>
                        )}
                        {this.castToString(bottomCard.readTime) && (
                          <div className={this.decorateCSS("time")}>
                            <ComposerIcon
                              name={this.getPropValue("time_icon")}
                              propsIcon={{
                                className: this.decorateCSS("time_icon"),
                              }}
                            />
                            <h5 className={this.decorateCSS("time-text")}>
                              {bottomCard.readTime}
                            </h5>
                          </div>
                        )}
                      </div>
                    )}
                    {this.castToString(bottomCard.title) && (
                      <ComposerLink path={bottomCard.url}>
                        <h1 className={this.decorateCSS("title")}>
                          {this.truncateText(
                            this.castToString(bottomCard.title),
                            this.getPropValue("maxTitleLength"),
                            true
                          )}
                        </h1>
                      </ComposerLink>
                    )}
                    {this.castToString(bottomCard.description) && (
                      <p className={this.decorateCSS("description")}>
                        {this.truncateText(
                          this.castToString(bottomCard.description) || "",
                          this.getPropValue("maxDescriptionLength")
                        )}
                      </p>
                    )}
                    <div
                      className={
                        this.decorateCSS("user-info") +
                        (bottomCard.profileImage ? "" : " no-profile")
                      }
                    >
                      {bottomCard.profileImage && (
                        <img
                          className={this.decorateCSS("profile-image")}
                          src={bottomCard.profileImage}
                          alt="profile image"
                        />
                      )}
                      {(this.castToString(bottomCard.profileDescription) ||
                        this.castToString(bottomCard.fullname)) && (
                        <div className={this.decorateCSS("user")}>
                          {this.castToString(bottomCard.profileDescription) && (
                            <h3
                              className={this.decorateCSS(
                                "profile-description"
                              )}
                            >
                              {bottomCard.profileDescription}
                            </h3>
                          )}
                          {this.castToString(bottomCard.fullname) && (
                            <h3 className={this.decorateCSS("fullname")}>
                              {bottomCard.fullname}
                            </h3>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className={this.decorateCSS("card-column")}>
                {rightContent.slice(1, 2).map((cardInfo: CardComponent) => (
                  <div className={this.decorateCSS("card")}>
                    {cardInfo.image && (
                      <img
                        className={this.decorateCSS("image")}
                        src={cardInfo.image}
                        alt=""
                      />
                    )}
                    <div className={this.decorateCSS("card-content")}>
                      {(this.castToString(cardInfo.date) ||
                        this.castToString(cardInfo.readTime)) && (
                        <div className={this.decorateCSS("date-time")}>
                          {this.castToString(cardInfo.date) && (
                            <div className={this.decorateCSS("date")}>
                              <ComposerIcon
                                name={this.getPropValue("date_icon")}
                                propsIcon={{
                                  className: this.decorateCSS("date_icon"),
                                }}
                              />
                              <h5 className={this.decorateCSS("date-text")}>
                                {cardInfo.date}
                              </h5>
                            </div>
                          )}
                          {this.castToString(cardInfo.readTime) && (
                            <div className={this.decorateCSS("time")}>
                              <ComposerIcon
                                name={this.getPropValue("time_icon")}
                                propsIcon={{
                                  className: this.decorateCSS("time_icon"),
                                }}
                              />
                              <h5 className={this.decorateCSS("time-text")}>
                                {cardInfo.readTime}
                              </h5>
                            </div>
                          )}
                        </div>
                      )}
                      {this.castToString(cardInfo.title) && (
                        <ComposerLink path={cardInfo.url}>
                          <h1 className={this.decorateCSS("title")}>
                            {this.truncateText(
                              this.castToString(cardInfo.title),
                              this.getPropValue("maxTitleLength"),
                              true
                            )}
                          </h1>
                        </ComposerLink>
                      )}
                      {this.castToString(cardInfo.description) && (
                        <p className={this.decorateCSS("description")}>
                          {this.truncateText(
                            this.castToString(cardInfo.description) || "",
                            this.getPropValue("maxDescriptionLength")
                          )}
                        </p>
                      )}
                      {(cardInfo.profileImage ||
                        this.castToString(cardInfo.profileDescription) ||
                        this.castToString(cardInfo.fullname)) && (
                        <div
                          className={
                            this.decorateCSS("user-info") +
                            (cardInfo.profileImage ? "" : " no-profile")
                          }
                        >
                          {cardInfo.profileImage && (
                            <img
                              className={this.decorateCSS("profile-image")}
                              src={cardInfo.profileImage}
                              alt="profile image"
                            />
                          )}
                          {(this.castToString(cardInfo.profileDescription) ||
                            this.castToString(cardInfo.fullname)) && (
                            <div className={this.decorateCSS("user")}>
                              {this.castToString(
                                cardInfo.profileDescription
                              ) && (
                                <h3
                                  className={this.decorateCSS(
                                    "profile-description"
                                  )}
                                >
                                  {cardInfo.profileDescription}
                                </h3>
                              )}
                              {this.castToString(cardInfo.fullname) && (
                                <h3 className={this.decorateCSS("fullname")}>
                                  {cardInfo.fullname}
                                </h3>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Feature1;
