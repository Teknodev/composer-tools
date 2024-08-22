import * as React from "react";
import { BaseFeature, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./feature1.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type CardComponent = {
  image: string;
  date: JSX.Element;
  read_time: JSX.Element;
  title: JSX.Element;
  description: JSX.Element;
  profile_image: string;
  fullname: JSX.Element;
  profileDescription: JSX.Element;
  url: string;
};

type MiniCardComponent = {
  date2: JSX.Element;
  read_time2: JSX.Element;
  title2: JSX.Element;
  description2: JSX.Element;
  profile_image2: string;
  fullname2: JSX.Element;
  profileDescription2: JSX.Element;
  url2: string;
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
          key: "card_info",
          displayer: "Card Info",
          value: [
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
              key: "read_time",
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
              key: "profile_image",
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
          key: "card_info",
          displayer: "Card Info",
          value: [
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
              key: "read_time",
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
              key: "profile_image",
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
      ],
    });

    this.addProp({
      type: "array",
      key: "miniCard",
      displayer: "Mini Card",
      value: [
        {
          type: "object",
          key: "mini_card_info",
          displayer: "Mini Card Info",
          value: [
            {
              type: "string",
              key: "date2",
              displayer: "date",
              value: "Jun 28, 2022",
            },
            {
              type: "string",
              key: "read_time2",
              displayer: "time",
              value: "2 min read",
            },
            {
              type: "string",
              key: "title2",
              displayer: "Title",
              value: "Why the security engineers loves working in fosec",
            },
            {
              type: "string",
              key: "description2",
              displayer: "Description",
              value:
                "Working in cybersecurity means you’re constantly playing a game of catch-up. Every day you learn something new, but your work is also never finished.",
            },
            {
              type: "image",
              key: "profile_image2",
              displayer: "Profile Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667adc8a4fe95d002b35e5b2?alt=media&timestamp=1719327900554",
            },
            {
              type: "string",
              key: "fullname2",
              displayer: "Fullname",
              value: "Alexander Hipp",
            },
            {
              type: "string",
              key: "profileDescription2",
              displayer: "Profile Description",
              value: "by",
            },
            {
              type: "page",
              key: "url2",
              displayer: "url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "mini_card_info",
          displayer: "Mini Card Info",
          value: [
            {
              type: "string",
              key: "date2",
              displayer: "date",
              value: "Apr 9, 2022",
            },
            {
              type: "string",
              key: "read_time2",
              displayer: "time",
              value: "2 min read",
            },
            {
              type: "string",
              key: "title2",
              displayer: "Title",
              value: "There Are Zero Bridges Across The Amazon. Here Is Why",
            },
            {
              type: "string",
              key: "description2",
              displayer: "Description",
              value:
                "Here is a fun fact to stick in the back of your mind for trivia night or to use as an interesting ice breaker: the Amazon River has no bridges. None. Zero. Zilch. That is in spite of the fact that the Amazon is 4,345 miles long.",
            },
            {
              type: "image",
              key: "profile_image2",
              displayer: "Profile Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667adc8a4fe95d002b35e5b3?alt=media&timestamp=1719327900554",
            },
            {
              type: "string",
              key: "fullname2",
              displayer: "Fullname",
              value: "Anil Vugels",
            },
            {
              type: "string",
              key: "profileDescription2",
              displayer: "Profile Description",
              value: "by",
            },
            {
              type: "page",
              key: "url2",
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
              key: "text",
              displayer: "Text",
              value: "Featured Posts",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "MdArrowOutward",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "string",
      key: "text",
      displayer: "Text",
      value: "Featured Posts",
    });

    this.addProp({
      type: "icon",
      key: "icon1",
      displayer: "Icon",
      value: "FaStarOfLife",
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
      value: 40,
    });

    this.addProp({
      type: "number",
      key: "maxDescriptionLength",
      displayer: "Max Description Length",
      value: 60,
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
    const leftSideText = this.castToString(this.getPropValue("text"));
    const leftSideIcon = this.castToString(this.getPropValue("icon1"));
    const cardContent = this.castToObject<CardComponent[]>("card");
    const middleContent = this.castToObject<MiniCardComponent[]>("miniCard");
    const links = this.castToObject<Link[]>("links");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("header")}>
            {(leftSideText || leftSideIcon) && (
              <div className={this.decorateCSS("left-side")}>
                {leftSideIcon && (
                  <ComposerIcon
                    name={leftSideIcon}
                    propsIcon={{
                      className: this.decorateCSS("icon1"),
                    }}
                  />
                )}
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
                          {link.text}
                        </span>
                        <ComposerIcon
                          name={link.icon}
                          propsIcon={{
                            className: this.decorateCSS("icon2"),
                          }}
                        />
                      </div>
                    </ComposerLink>
                  );
                })}
              </div>
            )}
          </div>

          <div className={this.decorateCSS("features")}>
            {cardContent.filter((_: any, index: number) => index % 2 === 0)
              .length > 0 && (
              <div className={this.decorateCSS("card-column")}>
                {cardContent
                  .slice(0, 1)
                  .map((card_info: CardComponent, index: number) => (
                    <div className={this.decorateCSS("card")}>
                      {card_info.image && (
                        <img
                          className={this.decorateCSS("image")}
                          src={card_info.image}
                          alt=""
                        />
                      )}
                      <div className={this.decorateCSS("card-content")}>
                        {(this.castToString(card_info.date) ||
                          this.castToString(card_info.read_time)) && (
                          <div className={this.decorateCSS("date-time")}>
                            {this.castToString(card_info.date) && (
                              <div className={this.decorateCSS("date")}>
                                <ComposerIcon
                                  name={this.getPropValue("date_icon")}
                                  propsIcon={{
                                    className: this.decorateCSS("date_icon"),
                                  }}
                                />
                                <h5 className={this.decorateCSS("date-text")}>
                                  {card_info.date}
                                </h5>
                              </div>
                            )}
                            {this.castToString(card_info.read_time) && (
                              <div className={this.decorateCSS("time")}>
                                <ComposerIcon
                                  name={this.getPropValue("time_icon")}
                                  propsIcon={{
                                    className: this.decorateCSS("time_icon"),
                                  }}
                                />
                                <h5 className={this.decorateCSS("time-text")}>
                                  {card_info.read_time}
                                </h5>
                              </div>
                            )}
                          </div>
                        )}
                        {this.castToString(card_info.title) && (
                          <ComposerLink path={card_info.url}>
                            <h1 className={this.decorateCSS("title")}>
                              {this.truncateText(
                                this.castToString(card_info.title),
                                this.getPropValue("maxTitleLength"),
                                true
                              )}
                            </h1>
                          </ComposerLink>
                        )}
                        {this.castToString(card_info.description) && (
                          <p className={this.decorateCSS("description")}>
                            {this.truncateText(
                              this.castToString(card_info.description) || "",
                              this.getPropValue("maxDescriptionLength")
                            )}
                          </p>
                        )}
                        {(card_info.profile_image ||
                          this.castToString(card_info.profileDescription) ||
                          this.castToString(card_info.fullname)) && (
                          <div
                            className={
                              this.decorateCSS("user-info") +
                              (card_info.profile_image ? "" : " no-profile")
                            }
                          >
                            {card_info.profile_image && (
                              <img
                                className={this.decorateCSS("profile-image")}
                                src={card_info.profile_image}
                                alt="profile image"
                              />
                            )}
                            {(this.castToString(card_info.profileDescription) ||
                              this.castToString(card_info.fullname)) && (
                              <div className={this.decorateCSS("user")}>
                                {this.castToString(
                                  card_info.profileDescription
                                ) && (
                                  <h3
                                    className={this.decorateCSS(
                                      "profile-description"
                                    )}
                                  >
                                    {card_info.profileDescription}
                                  </h3>
                                )}
                                {this.castToString(card_info.fullname) && (
                                  <h3 className={this.decorateCSS("fullname")}>
                                    {card_info.fullname}
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
                {middleContent
                  .slice(0, 2)
                  .map((mini_card_info: MiniCardComponent, index: number) => (
                    <div className={this.decorateCSS("card")}>
                      {(this.castToString(mini_card_info.date2) ||
                        this.castToString(mini_card_info.read_time2)) && (
                        <div className={this.decorateCSS("date-time")}>
                          {this.castToString(mini_card_info.date2) && (
                            <div className={this.decorateCSS("date")}>
                              <ComposerIcon
                                name={this.getPropValue("date_icon")}
                                propsIcon={{
                                  className: this.decorateCSS("date_icon"),
                                }}
                              />
                              <h5 className={this.decorateCSS("date-text")}>
                                {mini_card_info.date2}
                              </h5>
                            </div>
                          )}
                          {this.castToString(mini_card_info.read_time2) && (
                            <div className={this.decorateCSS("time")}>
                              <ComposerIcon
                                name={this.getPropValue("time_icon")}
                                propsIcon={{
                                  className: this.decorateCSS("time_icon"),
                                }}
                              />
                              <h5 className={this.decorateCSS("time-text")}>
                                {mini_card_info.read_time2}
                              </h5>
                            </div>
                          )}
                        </div>
                      )}
                      {this.castToString(mini_card_info.title2) && (
                        <ComposerLink path={mini_card_info.url2}>
                          <h1 className={this.decorateCSS("title")}>
                            {this.truncateText(
                              this.castToString(mini_card_info.title2),
                              this.getPropValue("maxTitleLength"),
                              true
                            )}
                          </h1>
                        </ComposerLink>
                      )}
                      {this.castToString(mini_card_info.description2) && (
                        <p className={this.decorateCSS("description")}>
                          {this.truncateText(
                            this.castToString(mini_card_info.description2) ||
                              "",
                            this.getPropValue("maxDescriptionLength")
                          )}
                        </p>
                      )}
                      <div
                        className={
                          this.decorateCSS("user-info") +
                          (mini_card_info.profile_image2 ? "" : " no-profile")
                        }
                      >
                        {mini_card_info.profile_image2 && (
                          <img
                            className={this.decorateCSS("profile-image")}
                            src={mini_card_info.profile_image2}
                            alt="profile image"
                          />
                        )}
                        {(this.castToString(
                          mini_card_info.profileDescription2
                        ) ||
                          this.castToString(mini_card_info.fullname2)) && (
                          <div className={this.decorateCSS("user")}>
                            {this.castToString(
                              mini_card_info.profileDescription2
                            ) && (
                              <h3
                                className={this.decorateCSS(
                                  "profile-description"
                                )}
                              >
                                {mini_card_info.profileDescription2}
                              </h3>
                            )}
                            {this.castToString(mini_card_info.fullname2) && (
                              <h3 className={this.decorateCSS("fullname")}>
                                {mini_card_info.fullname2}
                              </h3>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            )}

            {cardContent.filter((_: any, index: number) => index % 2 === 1)
              .length > 0 && (
              <div className={this.decorateCSS("card-column")}>
                {cardContent
                  .slice(1, 2)
                  .map((card_info: CardComponent, index: number) => (
                    <div className={this.decorateCSS("card")}>
                      {card_info.image && (
                        <img
                          className={this.decorateCSS("image")}
                          src={card_info.image}
                          alt=""
                        />
                      )}
                      <div className={this.decorateCSS("card-content")}>
                        {(this.castToString(card_info.date) ||
                          this.castToString(card_info.read_time)) && (
                          <div className={this.decorateCSS("date-time")}>
                            {this.castToString(card_info.date) && (
                              <div className={this.decorateCSS("date")}>
                                <ComposerIcon
                                  name={this.getPropValue("date_icon")}
                                  propsIcon={{
                                    className: this.decorateCSS("date_icon"),
                                  }}
                                />
                                <h5 className={this.decorateCSS("date-text")}>
                                  {card_info.date}
                                </h5>
                              </div>
                            )}
                            {this.castToString(card_info.read_time) && (
                              <div className={this.decorateCSS("time")}>
                                <ComposerIcon
                                  name={this.getPropValue("time_icon")}
                                  propsIcon={{
                                    className: this.decorateCSS("time_icon"),
                                  }}
                                />
                                <h5 className={this.decorateCSS("time-text")}>
                                  {card_info.read_time}
                                </h5>
                              </div>
                            )}
                          </div>
                        )}
                        {this.castToString(card_info.title) && (
                          <ComposerLink path={card_info.url}>
                            <h1 className={this.decorateCSS("title")}>
                              {this.truncateText(
                                this.castToString(card_info.title),
                                this.getPropValue("maxTitleLength"),
                                true
                              )}
                            </h1>
                          </ComposerLink>
                        )}
                        {this.castToString(card_info.description) && (
                          <p className={this.decorateCSS("description")}>
                            {this.truncateText(
                              this.castToString(card_info.description) || "",
                              this.getPropValue("maxDescriptionLength")
                            )}
                          </p>
                        )}
                        {(card_info.profile_image ||
                          this.castToString(card_info.profileDescription) ||
                          this.castToString(card_info.fullname)) && (
                          <div
                            className={
                              this.decorateCSS("user-info") +
                              (card_info.profile_image ? "" : " no-profile")
                            }
                          >
                            {card_info.profile_image && (
                              <img
                                className={this.decorateCSS("profile-image")}
                                src={card_info.profile_image}
                                alt="profile image"
                              />
                            )}
                            {(this.castToString(card_info.profileDescription) ||
                              this.castToString(card_info.fullname)) && (
                              <div className={this.decorateCSS("user")}>
                                {this.castToString(
                                  card_info.profileDescription
                                ) && (
                                  <h3
                                    className={this.decorateCSS(
                                      "profile-description"
                                    )}
                                  >
                                    {card_info.profileDescription}
                                  </h3>
                                )}
                                {this.castToString(card_info.fullname) && (
                                  <h3 className={this.decorateCSS("fullname")}>
                                    {card_info.fullname}
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

          {(cardContent.length > 2 || middleContent.length > 2) && (
            <div className={this.decorateCSS("additional-cards")}>
              <div className={this.decorateCSS("card-column")}>
                {cardContent
                  .slice(2, 3)
                  .map((card_info: CardComponent, index: number) => (
                    <div className={this.decorateCSS("card")}>
                      {card_info.image && (
                        <img
                          className={this.decorateCSS("image")}
                          src={card_info.image}
                          alt=""
                        />
                      )}
                      <div className={this.decorateCSS("card-content")}>
                        {(this.castToString(card_info.date) ||
                          this.castToString(card_info.read_time)) && (
                          <div className={this.decorateCSS("date-time")}>
                            {this.castToString(card_info.date) && (
                              <div className={this.decorateCSS("date")}>
                                <ComposerIcon
                                  name={this.getPropValue("date_icon")}
                                  propsIcon={{
                                    className: this.decorateCSS("date_icon"),
                                  }}
                                />
                                <h5 className={this.decorateCSS("date-text")}>
                                  {card_info.date}
                                </h5>
                              </div>
                            )}
                            {this.castToString(card_info.read_time) && (
                              <div className={this.decorateCSS("time")}>
                                <ComposerIcon
                                  name={this.getPropValue("time_icon")}
                                  propsIcon={{
                                    className: this.decorateCSS("time_icon"),
                                  }}
                                />
                                <h5 className={this.decorateCSS("time-text")}>
                                  {card_info.read_time}
                                </h5>
                              </div>
                            )}
                          </div>
                        )}
                        {this.castToString(card_info.title) && (
                          <ComposerLink path={card_info.url}>
                            <h1 className={this.decorateCSS("title")}>
                              {this.truncateText(
                                this.castToString(card_info.title),
                                this.getPropValue("maxTitleLength"),
                                true
                              )}
                            </h1>
                          </ComposerLink>
                        )}
                        {this.castToString(card_info.description) && (
                          <p className={this.decorateCSS("description")}>
                            {this.truncateText(
                              this.castToString(card_info.description) || "",
                              this.getPropValue("maxDescriptionLength")
                            )}
                          </p>
                        )}
                        {(card_info.profile_image ||
                          this.castToString(card_info.profileDescription) ||
                          this.castToString(card_info.fullname)) && (
                          <div
                            className={
                              this.decorateCSS("user-info") +
                              (card_info.profile_image ? "" : " no-profile")
                            }
                          >
                            {card_info.profile_image && (
                              <img
                                className={this.decorateCSS("profile-image")}
                                src={card_info.profile_image}
                                alt="profile image"
                              />
                            )}
                            {(this.castToString(card_info.profileDescription) ||
                              this.castToString(card_info.fullname)) && (
                              <div className={this.decorateCSS("user")}>
                                {this.castToString(
                                  card_info.profileDescription
                                ) && (
                                  <h3
                                    className={this.decorateCSS(
                                      "profile-description"
                                    )}
                                  >
                                    {card_info.profileDescription}
                                  </h3>
                                )}
                                {this.castToString(card_info.fullname) && (
                                  <h3 className={this.decorateCSS("fullname")}>
                                    {card_info.fullname}
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
                {middleContent
                  .slice(2)
                  .map((mini_card_info: MiniCardComponent, index: number) => (
                    <div className={this.decorateCSS("card")}>
                      {(this.castToString(mini_card_info.date2) ||
                        this.castToString(mini_card_info.read_time2)) && (
                        <div className={this.decorateCSS("date-time")}>
                          {this.castToString(mini_card_info.date2) && (
                            <div className={this.decorateCSS("date")}>
                              <ComposerIcon
                                name={this.getPropValue("date_icon")}
                                propsIcon={{
                                  className: this.decorateCSS("date_icon"),
                                }}
                              />
                              <h5 className={this.decorateCSS("date-text")}>
                                {mini_card_info.date2}
                              </h5>
                            </div>
                          )}
                          {this.castToString(mini_card_info.read_time2) && (
                            <div className={this.decorateCSS("time")}>
                              <ComposerIcon
                                name={this.getPropValue("time_icon")}
                                propsIcon={{
                                  className: this.decorateCSS("time_icon"),
                                }}
                              />
                              <h5 className={this.decorateCSS("time-text")}>
                                {mini_card_info.read_time2}
                              </h5>
                            </div>
                          )}
                        </div>
                      )}
                      {this.castToString(mini_card_info.title2) && (
                        <ComposerLink path={mini_card_info.url2}>
                          <h1 className={this.decorateCSS("title")}>
                            {this.truncateText(
                              this.castToString(mini_card_info.title2),
                              this.getPropValue("maxTitleLength"),
                              true
                            )}
                          </h1>
                        </ComposerLink>
                      )}
                      {this.castToString(mini_card_info.description2) && (
                        <p className={this.decorateCSS("description")}>
                          {this.truncateText(
                            this.castToString(mini_card_info.description2) ||
                              "",
                            this.getPropValue("maxDescriptionLength")
                          )}
                        </p>
                      )}
                      <div
                        className={
                          this.decorateCSS("user-info") +
                          (mini_card_info.profile_image2 ? "" : " no-profile")
                        }
                      >
                        {mini_card_info.profile_image2 && (
                          <img
                            className={this.decorateCSS("profile-image")}
                            src={mini_card_info.profile_image2}
                            alt="profile image"
                          />
                        )}
                        {(this.castToString(
                          mini_card_info.profileDescription2
                        ) ||
                          this.castToString(mini_card_info.fullname2)) && (
                          <div className={this.decorateCSS("user")}>
                            {this.castToString(
                              mini_card_info.profileDescription2
                            ) && (
                              <h3
                                className={this.decorateCSS(
                                  "profile-description"
                                )}
                              >
                                {mini_card_info.profileDescription2}
                              </h3>
                            )}
                            {this.castToString(mini_card_info.fullname2) && (
                              <h3 className={this.decorateCSS("fullname")}>
                                {mini_card_info.fullname2}
                              </h3>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
              </div>

              <div className={this.decorateCSS("card-column")}>
                {cardContent
                  .slice(3, 4)
                  .map((card_info: CardComponent, index: number) => (
                    <div className={this.decorateCSS("card")}>
                      {card_info.image && (
                        <img
                          className={this.decorateCSS("image")}
                          src={card_info.image}
                          alt=""
                        />
                      )}
                      <div className={this.decorateCSS("card-content")}>
                        {(this.castToString(card_info.date) ||
                          this.castToString(card_info.read_time)) && (
                          <div className={this.decorateCSS("date-time")}>
                            {this.castToString(card_info.date) && (
                              <div className={this.decorateCSS("date")}>
                                <ComposerIcon
                                  name={this.getPropValue("date_icon")}
                                  propsIcon={{
                                    className: this.decorateCSS("date_icon"),
                                  }}
                                />
                                <h5 className={this.decorateCSS("date-text")}>
                                  {card_info.date}
                                </h5>
                              </div>
                            )}
                            {this.castToString(card_info.read_time) && (
                              <div className={this.decorateCSS("time")}>
                                <ComposerIcon
                                  name={this.getPropValue("time_icon")}
                                  propsIcon={{
                                    className: this.decorateCSS("time_icon"),
                                  }}
                                />
                                <h5 className={this.decorateCSS("time-text")}>
                                  {card_info.read_time}
                                </h5>
                              </div>
                            )}
                          </div>
                        )}
                        {this.castToString(card_info.title) && (
                          <ComposerLink path={card_info.url}>
                            <h1 className={this.decorateCSS("title")}>
                              {this.truncateText(
                                this.castToString(card_info.title),
                                this.getPropValue("maxTitleLength"),
                                true
                              )}
                            </h1>
                          </ComposerLink>
                        )}
                        {this.castToString(card_info.description) && (
                          <p className={this.decorateCSS("description")}>
                            {this.truncateText(
                              this.castToString(card_info.description) || "",
                              this.getPropValue("maxDescriptionLength")
                            )}
                          </p>
                        )}
                        {(card_info.profile_image ||
                          this.castToString(card_info.profileDescription) ||
                          this.castToString(card_info.fullname)) && (
                          <div
                            className={
                              this.decorateCSS("user-info") +
                              (card_info.profile_image ? "" : " no-profile")
                            }
                          >
                            {card_info.profile_image && (
                              <img
                                className={this.decorateCSS("profile-image")}
                                src={card_info.profile_image}
                                alt="profile image"
                              />
                            )}
                            {(this.castToString(card_info.profileDescription) ||
                              this.castToString(card_info.fullname)) && (
                              <div className={this.decorateCSS("user")}>
                                {this.castToString(
                                  card_info.profileDescription
                                ) && (
                                  <h3
                                    className={this.decorateCSS(
                                      "profile-description"
                                    )}
                                  >
                                    {card_info.profileDescription}
                                  </h3>
                                )}
                                {this.castToString(card_info.fullname) && (
                                  <h3 className={this.decorateCSS("fullname")}>
                                    {card_info.fullname}
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
