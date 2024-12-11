import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature1.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";

type CardData = {
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
      displayer: "Right Side Text Url",
      value: "",
    });

    this.addProp({
      type: "icon",
      key: "rightSideIcon",
      displayer: "Right Side Icon",
      value: "MdArrowOutward",
    });

    this.addProp({
      type: "icon",
      key: "dateIcon",
      displayer: "Date Icon",
      value: "CiCalendarDate",
    });

    this.addProp({
      type: "icon",
      key: "timeIcon",
      displayer: "Time Icon",
      value: "CiClock2",
    });

    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Cards",
      value: [
        {
          type: "object",
          key: "cardInfo",
          displayer: "Card",
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
              displayer: "Date",
              value: "Jun 28, 2022",
            },
            {
              type: "string",
              key: "readTime",
              displayer: "Time",
              value: "2 min read",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "The nine-to-five Is Dead. Here's What to Replace It With",
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
              displayer: "Full Name",
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
              displayer: "Url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "cardInfo",
          displayer: "Card",
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
              displayer: "Date",
              value: "Jun 21, 2022",
            },
            {
              type: "string",
              key: "readTime",
              displayer: "Time",
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
              displayer: "Full Name",
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
              displayer: "Url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "cardInfo",
          displayer: "Card",
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
              displayer: "Date",
              value: "Jun 28, 2022",
            },
            {
              type: "string",
              key: "readTime",
              displayer: "Time",
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
              displayer: "Full Name",
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
              displayer: "Url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "cardInfo",
          displayer: "Card",
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
              displayer: "Date",
              value: "Apr 9, 2022",
            },
            {
              type: "string",
              key: "readTime",
              displayer: "Time",
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
              displayer: "Full Name",
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
              displayer: "Url",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "number",
      key: "itemCountInARow",
      displayer: "Item Count In A Row",
      value: 3,
      max: 4
    });

    this.addProp({
      type: "boolean",
      key: "underlineAnimation",
      displayer: "Card Title Underline Animation",
      value: true
    });

    this.addProp({
      type: "boolean",
      key: "enableEllipsisTitle",
      displayer: "Ellipsis For Title",
      value: true,
    });

    this.addProp({
      type: "boolean",
      key: "enableEllipsisDesc",
      displayer: "Ellipsis For Description",
      value: true,
    });

    this.addProp({
      type: "number",
      key: "maxTitleLength",
      displayer: "Title Max Length",
      value: 60,
      max: 90
    });

    this.addProp({
      type: "number",
      key: "maxDescriptionLength",
      displayer: "Description Max Length",
      value: 90,
      max: 200
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
    const itemCountInARow = this.getPropValue("itemCountInARow");

    const underlineAnimation = !!this.getPropValue("underlineAnimation");

    const leftSideTextExist = !!this.getPropValue("leftSideText", { as_string: true });

    const rightSideTextExist = !!this.getPropValue("rightSideText", { as_string: true });
    const rightSideIcon = this.getPropValue("rightSideIcon");
    const rightSideUrl = this.getPropValue("url");

    const timeIcon = this.getPropValue("timeIcon");
    const dateIcon = this.getPropValue("dateIcon");

    const Card = ({ data, style }: { data: CardData, style?: object; }) => {
      const title = this.castToString(data.title);
      const description = this.castToString(data.description);

      const profileDescriptionExist = !!this.castToString(data.profileDescription);
      const fullNameExist = !!this.castToString(data.fullname);
      const readTimeExist = !!this.castToString(data.readTime);
      const dateExist = !!this.castToString(data.date);

      return (
        <div
          className={`
              ${this.decorateCSS("card")}
              ${this.decorateCSS(data.mini ? "mini" : "")}
            `}
          style={style}
        >
          {data.image &&
            <div className={this.decorateCSS("image-container")}>
              <img
                className={this.decorateCSS("image")}
                src={data.image}
                alt={title}
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
                          className: this.decorateCSS("date-icon"),
                        }}
                      />
                    }
                    {dateExist &&
                      <Base.P className={this.decorateCSS("date-text")}>{data.date}</Base.P>
                    }
                  </div>
                )}
                {(readTimeExist) && (
                  <div className={this.decorateCSS("time")}>
                    {timeIcon &&
                      <ComposerIcon
                        name={timeIcon}
                        propsIcon={{
                          className: this.decorateCSS("time-icon"),
                        }}
                      />
                    }
                    {readTimeExist &&
                      <Base.P className={this.decorateCSS("time-text")}>{data.readTime}</Base.P>
                    }
                  </div>
                )}
              </div>
            )}
            {title && (
              <ComposerLink path={data.url}>
                <Base.H2
                  className={`
                    ${this.decorateCSS("title")}
                    ${underlineAnimation ? this.decorateCSS("underline-animation") : ""}
                  `}
                >
                  {this.truncateText(title, this.getPropValue("maxTitleLength"), true)}
                </Base.H2>
              </ComposerLink>
            )}
            {description && (
              <Base.P className={this.decorateCSS("description")}>
                {this.truncateText(description, this.getPropValue("maxDescriptionLength"))}
              </Base.P>
            )}

            {(data.profileImage || description || fullNameExist) && (
              <div className={this.decorateCSS("user-info")}>
                {data.profileImage && (
                  <img
                    className={this.decorateCSS("profile-image")}
                    src={data.profileImage}
                    alt={this.castToString(data.fullname)}
                  />
                )}

                {(profileDescriptionExist || fullNameExist) && (
                  <div className={this.decorateCSS("user")}>
                    {profileDescriptionExist &&
                      <Base.P className={this.decorateCSS("profile-description")}>
                        {data.profileDescription}
                      </Base.P>
                    }
                    {fullNameExist &&
                      <Base.P className={this.decorateCSS("fullname")}>
                        {data.fullname}
                      </Base.P>
                    }
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      );
    };

    const Blocks = ({ cards }: { cards: CardData[]; }) => {
      const blocks: JSX.Element[] = [];
      const data: any = [];

      for (let i = 0; i < cards.length; i++) {
        if (!(
          this.castToString(cards[i].title) ||
          this.castToString(cards[i].description) ||
          this.castToString(cards[i].date) ||
          this.castToString(cards[i].readTime) ||
          this.castToString(cards[i].fullname) ||
          this.castToString(cards[i].profileDescription) ||
          cards[i].image
        )) {
          continue;
        }

        if (i === cards.length - 1) {
          blocks.push(
            <Block>
              <Card data={cards[i]} />
            </Block>
          );
          data.push(null);
          return <>{blocks}</>;
        }

        if (cards[i].mini && cards[i + 1].mini) {
          blocks.push(
            <Block><>
              <Card data={cards[i]} />
              <Card data={cards[i + 1]} />
            </></Block>
          );
          data.push({
            card1: this.castToString(cards[i].title),
            card2: this.castToString(cards[i + 1].title),
          });

          ++i;
        } else {
          blocks.push(
            <Block>
              <Card data={cards[i]} />
            </Block>
          );
          data.push(this.castToString(cards[i].title));
        }
      }

      return <>{blocks.map((block, index) => <React.Fragment key={index}>{block}</React.Fragment>)}</>;
    };

    const Block = ({ children }: { children: JSX.Element; }) => {
      return (
        <div className={this.decorateCSS("block")}>
          {children}
        </div>
      );
    };

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {/* Header */}
          {(leftSideTextExist || !!rightSideIcon || rightSideTextExist) && (
            <header className={this.decorateCSS("header")}>
              {(rightSideTextExist || !!rightSideIcon) && (
                <div className={this.decorateCSS("right-side")}>
                  <ComposerLink path={rightSideUrl}>
                    <div className={this.decorateCSS("link-container")}>
                      <span className={this.decorateCSS("link-text")}>
                        {rightSideTextExist && (
                          this.getPropValue("rightSideText")
                        )}
                        {!!rightSideIcon && (
                          <ComposerIcon
                            name={rightSideIcon}
                            propsIcon={{ className: this.decorateCSS("right-side-icon") }}
                          />
                        )}
                      </span>
                    </div>
                  </ComposerLink>
                </div>
              )}
              {leftSideTextExist && (
                <Base.SectionTitle className={this.decorateCSS("section-title")}>
                  {this.getPropValue("leftSideText")}
                </Base.SectionTitle>
              )}
            </header>
          )}

          {/* Cards */}
          <Base.ListGrid gridCount={{ pc: itemCountInARow }} className={this.decorateCSS("cards-row")}>
            <Blocks cards={this.castToObject<CardData[]>("cards")} />
          </Base.ListGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature1;
