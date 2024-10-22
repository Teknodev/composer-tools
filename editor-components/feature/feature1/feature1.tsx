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

interface Pair {
  first: CardComponent;
  sec?: CardComponent;
  pairIndex: number;
}

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
      value: 100,
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
    const rightSideText = this.castToString(this.getPropValue("rightSideText"));
    const leftSideIcon = this.castToString(this.getPropValue("left_side_icon"));
    const rightSideIcon = this.castToString(this.getPropValue("rightSideIcon"));
    const rightSideUrl = this.castToString(this.getPropValue("url"));
    //!--------------------------------------------------------------------------------------------------
    // const fullCards = cardContent.filter((card) => !card.mini);
    // const miniCards = cardContent.filter((card) => card.mini);

    // const miniCardPaires = [];
    // for (let i = 0; i < miniCards.length; i += 2) {
    //   miniCardPaires.push(miniCards.slice(i, i + 2));
    // }
    //!--------------------------------------------------------------------------------------------------
    // const miniItems = cardContent.filter((card) => card.mini);
    // const fullItems = cardContent.filter((card) => !card.mini);

    // const miniPairs: Pair[] = [];
    // for (let i = 0; i < miniItems.length; i += 2) {
    //   const isLast = i <= miniItems.length - 1;
    //   miniPairs.push({ first: miniItems[i], pairIndex: i, sec: isLast ? miniItems[i + 1] : undefined });
    // }
    //!--------------------------------------------------------------------------------------------------

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {/* Header */}
          {leftSideIcon || leftSideText || rightSideIcon || rightSideText ? (
            <div className={this.decorateCSS("header")}>
              {(leftSideText || leftSideIcon) && (
                <div className={this.decorateCSS("left-side")}>
                  <ComposerIcon
                    name={this.getPropValue("left_side_icon")}
                    propsIcon={{
                      className: this.decorateCSS("left-side-icon"),
                    }}
                  />
                  {leftSideText && <h1 className={this.decorateCSS("first-text")}>{leftSideText}</h1>}
                </div>
              )}
              <div className={this.decorateCSS("right-side")}>
                <ComposerLink path={rightSideUrl}>
                  <div className={this.decorateCSS("link-container")}>
                    <span className={this.decorateCSS("link-text")}>
                      {rightSideText ? (
                        <>
                          {rightSideText}
                          <ComposerIcon
                            name={rightSideIcon}
                            propsIcon={{
                              className: this.decorateCSS("right-side-icon"),
                            }}
                          />
                        </>
                      ) : (
                        ""
                      )}
                    </span>
                  </div>
                </ComposerLink>
              </div>
            </div>
          ) : (
            ""
          )}

          {/* Cards */}
          <div className={this.decorateCSS("features")}>
            <div className={this.decorateCSS("card-column")}>
              {/* Full kartlar doğrudan render edilir */}
              {cardContent.map((cardInfo: CardComponent, index: number) => (
                <div
                  key={index}
                  className={`${this.decorateCSS("card")} ${cardInfo.mini ? this.decorateCSS("mini") : this.decorateCSS("full")} `}>
                  <div className={this.decorateCSS("image-container")}>
                    <img
                      className={this.decorateCSS("image")}
                      src={cardInfo.image}
                      alt=""
                    />
                  </div>
                  <div className={this.decorateCSS("card-content")}>
                    {(cardInfo.date || cardInfo.readTime) && (
                      <div className={this.decorateCSS("date-time")}>
                        {cardInfo.date && (
                          <div className={this.decorateCSS("date")}>
                            <ComposerIcon
                              name={this.getPropValue("date_icon")}
                              propsIcon={{
                                className: this.decorateCSS("date_icon"),
                              }}
                            />
                            <h5 className={this.decorateCSS("date-text")}>{cardInfo.date}</h5>
                          </div>
                        )}
                        {cardInfo.readTime && (
                          <div className={this.decorateCSS("time")}>
                            <ComposerIcon
                              name={this.getPropValue("time_icon")}
                              propsIcon={{
                                className: this.decorateCSS("time_icon"),
                              }}
                            />
                            <h5 className={this.decorateCSS("time-text")}>{cardInfo.readTime}</h5>
                          </div>
                        )}
                      </div>
                    )}
                    {cardInfo.title && (
                      <ComposerLink path={cardInfo.url}>
                        <h1 className={this.decorateCSS("title")}>
                          {this.truncateText(this.castToString(cardInfo.title), this.getPropValue("maxTitleLength"), true)}
                        </h1>
                      </ComposerLink>
                    )}
                    {cardInfo.description && (
                      <p className={this.decorateCSS("description")}>
                        {this.truncateText(this.castToString(cardInfo.description), this.getPropValue("maxDescriptionLength"))}
                      </p>
                    )}

                    {(cardInfo.profileImage || cardInfo.profileDescription || cardInfo.fullname) && (
                      <div className={this.decorateCSS("user-info")}>
                        {cardInfo.profileImage && (
                          <img
                            className={this.decorateCSS("profile-image")}
                            src={cardInfo.profileImage}
                            alt=""
                          />
                        )}

                        {(cardInfo.profileDescription || cardInfo.fullname) && (
                          <div className={this.decorateCSS("user")}>
                            {cardInfo.profileDescription && (
                              <h3 className={this.decorateCSS("profile-description")}>{cardInfo.profileDescription}</h3>
                            )}
                            {cardInfo.fullname && <h3 className={this.decorateCSS("fullname")}>{cardInfo.fullname}</h3>}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              //!--------------------------------------------------------------------------------------------------
              {/* Mini kartlar çift olarak render edilir */}
              {/* {miniPairs.map((pair: Pair, index: number) => (
                <div
                  className={this.decorateCSS("mini-pair")}
                  key={index}>
                  {pair.first && (
                    <div className={`${this.decorateCSS("card")} ${this.decorateCSS("mini")}`}>
                      <div className={this.decorateCSS("image-container")}>
                        <img
                          className={this.decorateCSS("image")}
                          src={pair.first.image}
                          alt=""
                        />
                      </div>

                      <div className={this.decorateCSS("card-content")}>
                        {(pair.first.date || pair.first.readTime) && (
                          <div className={this.decorateCSS("date-time")}>
                            {pair.first.date && (
                              <div className={this.decorateCSS("date")}>
                                <ComposerIcon
                                  name={this.getPropValue("date_icon")}
                                  propsIcon={{
                                    className: this.decorateCSS("date_icon"),
                                  }}
                                />
                                <h5 className={this.decorateCSS("date-text")}>{pair.first.date}</h5>
                              </div>
                            )}
                            {pair.first.readTime && (
                              <div className={this.decorateCSS("time")}>
                                <ComposerIcon
                                  name={this.getPropValue("time_icon")}
                                  propsIcon={{
                                    className: this.decorateCSS("time_icon"),
                                  }}
                                />
                                <h5 className={this.decorateCSS("time-text")}>{pair.first.readTime}</h5>
                              </div>
                            )}
                          </div>
                        )}
                        {pair.first.title && (
                          <ComposerLink path={pair.first.url}>
                            <h1 className={this.decorateCSS("title")}>
                              {this.truncateText(this.castToString(pair.first.title), this.getPropValue("maxTitleLength"), true)}
                            </h1>
                          </ComposerLink>
                        )}
                        {pair.first.description && (
                          <p className={this.decorateCSS("description")}>
                            {this.truncateText(this.castToString(pair.first.description), this.getPropValue("maxDescriptionLength"))}
                          </p>
                        )}

                        {(pair.first.profileImage || pair.first.profileDescription || pair.first.fullname) && (
                          <div className={this.decorateCSS("user-info")}>
                            {pair.first.profileImage && (
                              <img
                                className={this.decorateCSS("profile-image")}
                                src={pair.first.profileImage}
                                alt=""
                              />
                            )}

                            {(pair.first.profileDescription || pair.first.fullname) && (
                              <div className={this.decorateCSS("user")}>
                                {pair.first.profileDescription && (
                                  <h3 className={this.decorateCSS("profile-description")}>{pair.first.profileDescription}</h3>
                                )}
                                {pair.first.fullname && <h3 className={this.decorateCSS("fullname")}>{pair.first.fullname}</h3>}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {pair.sec && (
                    <div className={`${this.decorateCSS("card")} ${this.decorateCSS("mini")}`}>
                      <div className={this.decorateCSS("image-container")}>
                        <img
                          className={this.decorateCSS("image")}
                          src={pair.sec.image}
                          alt=""
                        />
                      </div>

                      <div className={this.decorateCSS("card-content")}>
                        {(pair.sec.date || pair.sec.readTime) && (
                          <div className={this.decorateCSS("date-time")}>
                            {pair.sec.date && (
                              <div className={this.decorateCSS("date")}>
                                <ComposerIcon
                                  name={this.getPropValue("date_icon")}
                                  propsIcon={{
                                    className: this.decorateCSS("date_icon"),
                                  }}
                                />
                                <h5 className={this.decorateCSS("date-text")}>{pair.sec.date}</h5>
                              </div>
                            )}
                            {pair.sec.readTime && (
                              <div className={this.decorateCSS("time")}>
                                <ComposerIcon
                                  name={this.getPropValue("time_icon")}
                                  propsIcon={{
                                    className: this.decorateCSS("time_icon"),
                                  }}
                                />
                                <h5 className={this.decorateCSS("time-text")}>{pair.sec.readTime}</h5>
                              </div>
                            )}
                          </div>
                        )}
                        {pair.sec.title && (
                          <ComposerLink path={pair.sec.url}>
                            <h1 className={this.decorateCSS("title")}>
                              {this.truncateText(this.castToString(pair.sec.title), this.getPropValue("maxTitleLength"), true)}
                            </h1>
                          </ComposerLink>
                        )}
                        {pair.sec.description && (
                          <p className={this.decorateCSS("description")}>
                            {this.truncateText(this.castToString(pair.sec.description), this.getPropValue("maxDescriptionLength"))}
                          </p>
                        )}

                        {(pair.sec.profileImage || pair.sec.profileDescription || pair.sec.fullname) && (
                          <div className={this.decorateCSS("user-info")}>
                            {pair.sec.profileImage && (
                              <img
                                className={this.decorateCSS("profile-image")}
                                src={pair.sec.profileImage}
                                alt=""
                              />
                            )}

                            {(pair.sec.profileDescription || pair.sec.fullname) && (
                              <div className={this.decorateCSS("user")}>
                                {pair.sec.profileDescription && (
                                  <h3 className={this.decorateCSS("profile-description")}>{pair.sec.profileDescription}</h3>
                                )}
                                {pair.sec.fullname && <h3 className={this.decorateCSS("fullname")}>{pair.sec.fullname}</h3>}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feature1;

// // Mini çiftleri
// let miniPairs: Array<Pair> = [];

// // Mini çiftlerini oluşturan fonksiyon
// for (let i = 0; i < miniItems.length; i++) {
//     // Index çiftse
//     if (i % 2 === 0) {
//         // Eğer sonraki eleman bitmiyorsa
//         const isEnded = i >= miniItems.length - 1;
//         // Çift dizisine ekle
//         miniPairs.push({ first: miniItems[i], pairIndex: i, sec: isEnded ? miniItems[i + 1] : undefined })
//     }
// }

// items.map((item) => {
//     // Eğer fullse
//     if (!item.mini) {
//         // Fulleri render al
//         return (<Card>{item}</Card>)
//     } else if (item.mini) {
//         // Gelen mininin yerini bul
//         const index = miniItems.indexOf(item);
//         // Çifti bul
//         const pair = miniPairs.find((pair) => (pair.pairIndex == index));

//         // Çift varsa
//         if (pair) {
//             // Çiftte ikinci varsa
//             if (pair.sec) {
//                 // İki kutu olarak yazdır
//                 return (<>
//                     <MiniCard>{first}</MiniCard>
//                     <MiniCard>{sec}</MiniCard>
//                 </>
//                 )
//             } else {
//                 // Çiftte sadece tek kutu varsa
//                 // tek kutu olarak yazdır
//                 return (<>
//                     <MiniCard>{first}</MiniCard>
//                 </>
//                 )
//             }
//         }
//     }
// })

// Plan:
// Kart türünü belirle: Her item için mini veya full olup olmadığını kontrol edeceğiz.
// Mini kartlar için çift kontrolü: Mini kartlar sıradaki diğer mini kartlar ile çift olup olmadığını kontrol edecek.
// Eğer bir mini kart tek başına kalmışsa, yalnız olarak render edilecek.
// Eğer iki mini kart bir aradaysa, yan yana gösterilecek.
// Full kartlar: Her full kart, bağımsız olarak render edilecek.
// Pseudocode:
// Mini kartlar listesi (miniItems) üzerinden döngü ile geç.
// İkili (çift) mini kartları oluştur, her iki elemandan biri "çift" ise sıradaki mini kart ile birleştir.
// Full kartları listeye eklerken herhangi bir kontrol olmadan render et.
// Mini kartlar için bir eşleştirme mantığı kurarak, tek veya çift olduğuna göre farklı render al.
