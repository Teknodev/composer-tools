import * as React from "react";
import styles from "./team9.module.scss";
import { Team, TypeUsableComponentProps } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerSlider from "../../../composer-base-components/slider/slider";

type Icons = {
  url: string;
  icon: string;
};

interface Card {
  image: string;
  name: string;
  position: string;
  icons: { icon: string; url: string }[];
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
          value: "JENIFER",
        },

        {
          type: "array",
          key: "icons",
          displayer: "Social Media Platforms",
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
      displayer: "Reverse Item Count",
      value: 4,
      max: 4,
    });
  }

  getName(): string {
    return "Team 9";
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      arrows:false,
      speed: 500,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: window.innerWidth > 500 ? 2 : 1,
    };
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("basic-page")}>
            <div className={this.decorateCSS("up-page")}>
              <h1 className={this.decorateCSS("title")}>
                {this.getPropValue("title")}
              </h1>
            </div>
            <div className={this.decorateCSS("down-page")}>
              {this.castToObject<Card[]>("team-members").map(
                (item: Card, indexCard: number) => {
                  return (
                    <div
                      key={indexCard}
                      style={{ width: 90 / this.getPropValue("reverse") + "%" }}
                      className={this.decorateCSS("card")}
                    >
                      <img
                        className={this.decorateCSS("person-image")}
                        src={item.image}
                        alt=""
                      />
                      <div className={this.decorateCSS("person-info")}>
                        <div className={this.decorateCSS("text-group")}>
                          <h1 className={this.decorateCSS("item-name")}>
                            {item.name}
                          </h1>
                        </div>
                        <div className={this.decorateCSS("icons-bar")}>
                          {item.icons &&
                            item.icons.map(
                              (card: Icons, indexIcons: number) => (
                                <ComposerLink key={indexIcons} path={card.url}>
                                  <ComposerIcon
                                    name={card.icon}
                                    propsIcon={{
                                      className: this.decorateCSS("icon"),
                                    }}
                                  />
                                </ComposerLink>
                              )
                            )}
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
            <ComposerSlider
              {...settings}
              className={this.decorateCSS("slider")}
            >
              {this.castToObject<Card[]>("team-members").map(
                (item: Card, indexCard: number) => {
                  return (
                    <div key={indexCard} className={this.decorateCSS("card")}>
                      <img
                        className={this.decorateCSS("person-image")}
                        src={item.image}
                        alt=""
                      />
                      <div className={this.decorateCSS("person-info")}>
                        <div className={this.decorateCSS("text-group")}>
                          <h1 className={this.decorateCSS("item-name")}>
                            {item.name}
                          </h1>
                        </div>
                        <div className={this.decorateCSS("icons-bar")}>
                          {item.icons &&
                            item.icons.map(
                              (card: Icons, indexIcons: number) => (
                                <ComposerLink key={indexIcons} path={card.url}>
                                  <ComposerIcon
                                    name={card.icon}
                                    propsIcon={{
                                      className: this.decorateCSS("icon"),
                                    }}
                                  />
                                </ComposerLink>
                              )
                            )}
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </ComposerSlider>
          </div>
        </div>
      </div>
    );
  }
}
export default Team9;
