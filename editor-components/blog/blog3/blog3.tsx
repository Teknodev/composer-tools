import * as React from "react";
import { BaseBlog } from "../../EditorComponent";
import styles from "./blog3.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type CardData = {
  image: { type: "image"; url: string };
  mini: boolean;
  date: React.JSX.Element;
  readTime: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
  profileImage: { type: "image"; url: string };
  fullname: React.JSX.Element;
  profileDescription: React.JSX.Element;
  url: string;
};

class Blog3 extends BaseBlog {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Featured Posts",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "OUR BLOG",
    });



    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "array",
      key: "rightText",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Featured Posts", "", "MdArrowOutward", "", "Link"),
      ],
    });

    this.addProp({
      type: "boolean",
      key: "line",
      displayer: "Line",
      value: true,
    });

    this.addProp({
      type: "object",
      key: "icons",
      displayer: "Icons",
      value: [
        {
          type: "media",
          key: "dateIcon",
          displayer: "Date Icon",
          additionalParams: {
            availableTypes: ["icon", "image"],
          },
          value: {
            type: "icon",
            name: "CiCalendarDate",
          },
        },
        {
          type: "media",
          key: "timeIcon",
          displayer: "Time Icon",
          additionalParams: {
            availableTypes: ["icon", "image"],
          },
          value: {
            type: "icon",
            name: "CiClock2",
          },
        },
      ],
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
              displayer: "Mini Card",
              value: false,
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667adc8a4fe95d002b35e5b1?alt=media&timestamp=1719327900554",
              },
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
              type: "media",
              key: "profileImage",
              displayer: "Profile Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667adc8a4fe95d002b35e5b2?alt=media&timestamp=1719327900554",
              },
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
              displayer: "Navigate To",
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
              displayer: "Mini Card",
              value: true,
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667adc8a4fe95d002b35e5b0?alt=media&timestamp=1719327900554",
              },
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
              type: "media",
              key: "profileImage",
              displayer: "Profile Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667adc8a4fe95d002b35e5b3?alt=media&timestamp=1719327900554",
              },
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
              displayer: "Navigate To",
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
              displayer: "Mini Card",
              value: true,
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6711136797fe08002c76fc1f?alt=media",
              },
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
              type: "media",
              key: "profileImage",
              displayer: "Profile Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6711136797fe08002c76fc1f?alt=media",
              },
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
              displayer: "Navigate To",
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
              displayer: "Mini Card",
              value: false,
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6711143197fe08002c76fccc?alt=media",
              },
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
              type: "media",
              key: "profileImage",
              displayer: "Profile Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6711143197fe08002c76fccc?alt=media",
              },
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
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "number",
      key: "itemCountInARow",
      displayer: "Item Count In a Row",
      value: 3,
      max: 4
    });


    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2"]
      }
    });
  }

  static getName(): string {
    return "Blog 3";
  }


  render() {
    const itemCountInARow = this.getPropValue("itemCountInARow");

    const title = this.getPropValue("title");
    const subtitle = this.getPropValue("subtitle");
    const line = this.getPropValue("line");
    const underlineAnimation = !!this.getPropValue("underlineAnimation");
    const hoverAnimation = this.getPropValue("hoverAnimation");

    const subtitleExist = this.castToString(subtitle);
    const isTitleExist = this.castToString(title);
    const rightTextItems = this.castToObject<any[]>("rightText");
    const description = this.getPropValue("description");
    const descriptionExist = this.castToString(description);

    const icons = this.castToObject<{
      dateIcon: { type: "icon"; name: string };
      timeIcon: { type: "icon"; name: string };
    }>("icons");

    const Card = ({ data, style }: { data: CardData, style?: object; }) => {
      const title = this.castToString(data.title);
      const description = this.castToString(data.description);

      const profileDescriptionExist = !!this.castToString(data.profileDescription);
      const fullNameExist = !!this.castToString(data.fullname);
      const readTimeExist = !!this.castToString(data.readTime);
      const dateExist = !!this.castToString(data.date);
      const isHoverAnimation = Array.isArray(hoverAnimation) ? hoverAnimation.length > 0 : !!hoverAnimation;

      return (
        <div
          className={`
              ${this.decorateCSS("card")}
              ${this.decorateCSS(data.mini ? "mini" : "")}
            `}
          style={style}
          data-animation={Array.isArray(hoverAnimation) ? hoverAnimation.join(" ") : ""}
        >
          <div className={this.decorateCSS("gradient-overlay")} />
          {data.image &&
            <div className={this.decorateCSS("image-container")}>
              <Base.Media
                value={data.image}
                className={`
                  ${this.decorateCSS("image")}
                  ${isHoverAnimation && this.decorateCSS("hover-animation")}
                `}
              />
            </div>
          }
          <div className={this.decorateCSS("card-content")}>
            {(dateExist || readTimeExist) && (
              <div className={this.decorateCSS("date-time")}>
                {(dateExist) && (
                  <div className={this.decorateCSS("date")}>
                    {icons.dateIcon &&
                      <Base.Media
                        value={icons.dateIcon}
                        className={this.decorateCSS("date-icon")}
                      />
                    }
                    {dateExist &&
                      <Base.P className={this.decorateCSS("date-text")}>{data.date}</Base.P>
                    }
                  </div>
                )}
                {(readTimeExist) && (
                  <div className={this.decorateCSS("time")}>
                    {icons.timeIcon &&
                      <Base.Media
                        value={icons.timeIcon}
                        className={this.decorateCSS("time-icon")}
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
                <Base.H5
                  className={`
                    ${this.decorateCSS("title")}
                    ${underlineAnimation ? this.decorateCSS("underline-animation") : ""}
                  `}
                >
                  {data.title}
                  <div className={this.decorateCSS("title-underline")} />
                </Base.H5>
              </ComposerLink>
            )}
            {description && (
              <Base.SectionDescription className={this.decorateCSS("description")}>
                {data.description}
              </Base.SectionDescription>
            )}

            {(data.profileImage || description || fullNameExist) && (
              <div className={this.decorateCSS("user-info")}>
                {data.profileImage && (
                  <Base.Media
                    value={data.profileImage}
                    className={this.decorateCSS("profile-image")}
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
      const blocks: React.JSX.Element[] = [];
      const data: any = [];

      for (let i = 0; i < cards.length; i++) {
        if (!(
          this.castToString(cards[i].title) ||
          this.castToString(cards[i].description) ||
          this.castToString(cards[i].date) ||
          this.castToString(cards[i].readTime) ||
          this.castToString(cards[i].fullname) ||
          this.castToString(cards[i].profileDescription) ||
          cards[i].image?.url
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

    const Block = ({ children }: { children: React.JSX.Element; }) => {
      return (
        <div className={this.decorateCSS("block")}>
          {children}
        </div>
      );
    };

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(descriptionExist || subtitleExist || isTitleExist || rightTextItems.some(item => item.text || (item.icon && item.icon.name))) && (
            <div className={this.decorateCSS("header-wrapper")}>
              <Base.VerticalContent className={`${this.decorateCSS("header")} ${this.decorateCSS("header-left")}`}>
                {subtitleExist && (
                  <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>
                )}
                {isTitleExist && (
                  <Base.SectionTitle className={this.decorateCSS("title")}>
                    {title}
                  </Base.SectionTitle>
                )}

              </Base.VerticalContent>
              <div className={this.decorateCSS("button-container")}>
                {rightTextItems.map((item: any, index: number) => {
                  const buttonTextExist = this.castToString(item.text);
                  const iconExist = item.icon && item.icon.name;
                  const buttonExist = buttonTextExist || iconExist;

                  return buttonExist && (
                    <div key={`blog-3-btn-${index}`} className={this.decorateCSS("button-wrapper")}>
                      <ComposerLink path={item.url}>
                        <Base.Button className={this.decorateCSS("button")} buttonType={item.type || "Link"}>
                          {buttonTextExist && <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>}
                          {iconExist && <Base.Media value={item.icon} className={this.decorateCSS("button-icon")} />}
                        </Base.Button>
                      </ComposerLink>
                    </div>
                  );
                })}
              </div>

              <div className={this.decorateCSS("header-bottom")}>
                {line && <hr className={this.decorateCSS("line")} />}
                {descriptionExist && (
                  <Base.SectionDescription className={this.decorateCSS("description")}>
                    {description}
                  </Base.SectionDescription>
                )}
              </div>
            </div>
          )}
          <Base.ListGrid gridCount={{ pc: itemCountInARow, tablet: 3, phone: 1 }} className={this.decorateCSS("cards-row")}>
            <Blocks cards={this.castToObject<CardData[]>("cards")} />
          </Base.ListGrid>
          <div className={this.decorateCSS("mobile-right-side")}>
            {rightTextItems.map((item: any, index: number) => {
              const buttonTextExist = this.castToString(item.text);
              const iconExist = item.icon && item.icon.name;
              const buttonExist = buttonTextExist || iconExist;

              return buttonExist && (
                <div key={`blog-3-mobile-btn-${index}`} className={this.decorateCSS("button-wrapper")}>
                  <ComposerLink path={item.url}>
                    <Base.Button className={this.decorateCSS("button")} buttonType={item.type || "Link"}>
                      {buttonTextExist && <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>}
                      {iconExist && <Base.Media value={item.icon} className={this.decorateCSS("button-icon")} />}
                    </Base.Button>
                  </ComposerLink>
                </div>
              );
            })}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Blog3;


