import * as React from "react";
import styles from "./team9.module.scss";
import { Team, TypeUsableComponentProps } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerSlider from "../../../composer-base-components/slider/slider";

type Icon = {
  url: string;
  icon: string;
};

interface Card {
  image: string;
  name: JSX.Element;
  icons: Icon[];
}

class Team9 extends Team {
  constructor(props?: any) {
    super(props, styles);
    let twitter: TypeUsableComponentProps = {
      type: "object",
      key: "twitter",
      displayer: "Platform",
      value: [
        {
          type: "icon",
          key: "icon",
          displayer: "Platform Icon",
          value: "IoLogoTwitter",
        },
        {
          type: "page",
          key: "url",
          displayer: "Url",
          value: "",
        },
      ],
    };

    let facebook: TypeUsableComponentProps = {
      type: "object",
      key: "facebook",
      displayer: "Platform",
      value: [
        {
          type: "icon",
          key: "icon",
          displayer: "Platform Icon",
          value: "IoLogoFacebook",
        },
        {
          type: "page",
          key: "url",
          displayer: "Url",
          value: "",
        },
      ],
    };

    let instagram: TypeUsableComponentProps = {
      type: "object",
      key: "instagram",
      displayer: "Platform",
      value: [
        {
          type: "icon",
          key: "icon",
          displayer: "Platform Icon",
          value: "FaInstagram",
        },
        {
          type: "page",
          key: "url",
          displayer: "Url",
          value: "",
        },
      ],
    };

    let card1: TypeUsableComponentProps = {
      type: "object",
      key: "card",
      displayer: "Card",
      value: [
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b493bd2970002c62816a?alt=media&timestamp=1719558632841",
        },
        {
          type: "string",
          key: "name",
          displayer: "Person Name",
          value: "JENNY",
        },

        {
          type: "array",
          key: "icons",
          displayer: "Social Media Platforms",
          additionalParams: {
            maxElementCount: 6,
          },
          value: [twitter, facebook, instagram],
        },
      ],
    };

    let card2: TypeUsableComponentProps = {
      type: "object",
      key: "card",
      displayer: "Card",
      value: [
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b493bd2970002c62816b?alt=media&timestamp=1719558632841",
        },
        {
          type: "string",
          key: "name",
          displayer: "Person Name",
          value: "DAVID",
        },

        {
          type: "array",
          key: "icons",
          displayer: "Social Media Platforms",
          additionalParams: {
            maxElementCount: 6,
          },
          value: [twitter, facebook, instagram],
        },
      ],
    };

    let card3: TypeUsableComponentProps = {
      type: "object",
      key: "card",
      displayer: "Card",
      value: [
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b493bd2970002c62816c?alt=media&timestamp=1719558632841",
        },
        {
          type: "string",
          key: "name",
          displayer: "Person Name",
          value: "JENNIFER",
        },

        {
          type: "array",
          key: "icons",
          displayer: "Social Media Platforms",
          additionalParams: {
            maxElementCount: 6,
          },
          value: [twitter, facebook, instagram],
        },
      ],
    };

    let card4: TypeUsableComponentProps = {
      type: "object",
      key: "card",
      displayer: "Card",
      value: [
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b493bd2970002c62816d?alt=media&timestamp=1719558632841",
        },
        {
          type: "string",
          key: "name",
          displayer: "Person Name",
          value: "MATHEW",
        },

        {
          type: "array",
          key: "icons",
          displayer: "Social Media Platforms",
          additionalParams: {
            maxElementCount: 6,
          },
          value: [twitter, facebook, instagram],
        },
      ],
    };

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "OUR TEAM",
    });

    this.addProp({
      type: "array",
      key: "team-members",
      displayer: "Team Members",
      value: [card1, card2, card3, card4],
    });

    this.addProp({
      type: "number",
      key: "reverse",
      displayer: "Item Count",
      value: 4,
      max: 4,
    });
  }

  getName(): string {
    return "Team 9";
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      autoplay: false,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    const titleExist = this.getPropValue("title", { as_string: true });
    const members = this.castToObject<Card[]>("team-members");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("basic-page")}>
            {titleExist && (
              <div className={this.decorateCSS("up-page")}>
                <h1 className={this.decorateCSS("title")}>
                  {this.getPropValue("title")}
                </h1>
              </div>
            )}
            {members.length > 0 && (
              <div className={this.decorateCSS("down-page")}>
                {members.map((item: Card, index: number) => {
                  const nameExist = this.castToString(item.name);
                  return (
                    <div
                      key={index}
                      style={{ width: 90 / this.getPropValue("reverse") + "%" }}
                      className={`${this.decorateCSS("card")} ${!item.image ? this.decorateCSS("card-noimg") : ""}`}
                    >
                      {item.image && (
                        <img
                          className={this.decorateCSS("person-image")}
                          src={item.image}
                          alt={nameExist}
                        />
                      )}
                      {(nameExist || item.icons.length > 0) && (
                        <div
                          className={`${this.decorateCSS("person-info")} ${!item.image ? this.decorateCSS("personinfo-noimg") : ""}`}
                        >
                          {nameExist && (
                            <div className={this.decorateCSS("text-group")}>
                              <h1
                                className={`${this.decorateCSS("item-name")} ${!item.image ? this.decorateCSS("itemname-noimg") : ""}`}
                              >
                                {item.name}
                              </h1>
                            </div>
                          )}
                          {item.icons.length > 0 && (
                            <div className={this.decorateCSS("icons-bar")}>
                              {item.icons.map((card: Icon, index: number) => {
                                if (card.icon)
                                  return (
                                    <ComposerLink key={index} path={card.url}>
                                      <ComposerIcon
                                        name={card.icon}
                                        propsIcon={{
                                          className: this.decorateCSS("icon"),
                                        }}
                                      />
                                    </ComposerLink>
                                  );
                                return null;
                              })}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
            {members.length > 0 && (
              <ComposerSlider
                {...settings}
                className={this.decorateCSS("slider")}
              >
                {members.map((item: Card, indexCard: number) => {
                  const nameExist = this.castToString(item.name);

                  if (item.image || nameExist || item.icons.length > 0)
                    return (
                      <div key={indexCard} className={this.decorateCSS("card")}>
                        {item.image && (
                          <img
                            className={this.decorateCSS("person-image")}
                            src={item.image}
                            alt={nameExist}
                          />
                        )}
                        {(nameExist || item.icons.length > 0) && (
                          <div className={this.decorateCSS("person-info")}>
                            {nameExist && (
                              <div className={this.decorateCSS("text-group")}>
                                <h1 className={this.decorateCSS("item-name")}>
                                  {item.name}
                                </h1>
                              </div>
                            )}
                            {item.icons.length > 0 && (
                              <div className={this.decorateCSS("icons-bar")}>
                                {item.icons.map(
                                  (card: Icon, indexIcons: number) => {
                                    if (card.icon)
                                      return (
                                        <ComposerLink
                                          key={indexIcons}
                                          path={card.url}
                                        >
                                          <ComposerIcon
                                            name={card.icon}
                                            propsIcon={{
                                              className:
                                                this.decorateCSS("icon"),
                                            }}
                                          />
                                        </ComposerLink>
                                      );
                                    return null;
                                  },
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  return null;
                })}
              </ComposerSlider>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default Team9;
