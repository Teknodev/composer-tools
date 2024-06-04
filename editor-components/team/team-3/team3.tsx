import * as React from "react";
import { Team, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./team3.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Icons = {
  url: string;
  icon: string;
};

interface Card {
  profile: string;
  name: string;
  position: string;
  icons: { icon: string; url: string }[];
}

class Team3 extends Team {
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
          value: "FaTwitter",
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
          value: "BsFacebook",
        },
        {
          type: "page",
          key: "url",
          displayer: "Url",
          value: "",
        },
      ],
    };

    let linkedin: TypeUsableComponentProps = {
      type: "object",
      key: "linkedin",
      displayer: "Platform",
      value: [
        {
          type: "icon",
          key: "icon",
          displayer: "Platform Icon",
          value: "ImLinkedin",
        },
        {
          type: "page",
          key: "url",
          displayer: "Url",
          value: "",
        },
      ],
    };

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Our Team",
    });
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "The Best Team Ever!",
    });

    let card1: TypeUsableComponentProps = {
      type: "object",
      key: "card",
      displayer: "Items",
      value: [
        {
          type: "image",
          key: "profile",
          displayer: "Image",
          value:
            "https://images.pexels.com/photos/1800456/pexels-photo-1800456.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
          type: "string",
          key: "name",
          displayer: "Person",
          value: "Jacklyn Mia",
        },
        {
          type: "string",
          key: "position",
          displayer: "Position",
          value: "Ceo/Founder",
        },
        {
          type: "array",
          key: "icons",
          displayer: "Icons",
          value: [twitter, facebook, linkedin],
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
          key: "profile",
          displayer: "Image",
          value:
            "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
          type: "string",
          key: "name",
          displayer: "Person",
          value: "Kirsten Gertie",
        },
        {
          type: "string",
          key: "position",
          displayer: "Position",
          value: "Web Developer",
        },
        {
          type: "array",
          key: "icons",
          displayer: "Social Medias",
          value: [twitter, facebook, linkedin],
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
          key: "profile",
          displayer: "Image",
          value:
            "https://images.pexels.com/photos/1800456/pexels-photo-1800456.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
          type: "string",
          key: "name",
          displayer: "Person",
          value: "Lachlan Linnette",
        },
        {
          type: "string",
          key: "position",
          displayer: "Position",
          value: "UI/UX Developer",
        },
        {
          type: "array",
          key: "icons",
          displayer: "Social Medias",
          value: [twitter, facebook, linkedin],
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
          key: "profile",
          displayer: "Image",
          value:
            "https://images.pexels.com/photos/8434878/pexels-photo-8434878.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
        {
          type: "string",
          key: "name",
          displayer: "Person",
          value: "James Pearce",
        },
        {
          type: "string",
          key: "position",
          displayer: "Position",
          value: "Graphic Designer",
        },
        {
          type: "array",
          key: "icons",
          displayer: "Social Medias",
          value: [twitter, facebook, linkedin],
        },
      ],
    };

    let card5: TypeUsableComponentProps = {
      type: "object",
      key: "card",
      displayer: "Card",
      value: [
        {
          type: "image",
          key: "profile",
          displayer: "Image",
          value:
            "https://images.pexels.com/photos/5393594/pexels-photo-5393594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          type: "string",
          key: "name",
          displayer: "Person",
          value: "Mary Johnson",
        },
        {
          type: "string",
          key: "position",
          displayer: "Position",
          value: "Creative Director",
        },
        {
          type: "array",
          key: "icons",
          displayer: "Social Medias",
          value: [twitter, facebook, linkedin],
        },
      ],
    };

    let card6: TypeUsableComponentProps = {
      type: "object",
      key: "card",
      displayer: "Card",
      value: [
        {
          type: "image",
          key: "profile",
          displayer: "Image",
          value:
            "https://images.pexels.com/photos/8434878/pexels-photo-8434878.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
        {
          type: "string",
          key: "name",
          displayer: "Person",
          value: "Sarah Brown",
        },
        {
          type: "string",
          key: "position",
          displayer: "Position",
          value: "Marketing Manager",
        },
        {
          type: "array",
          key: "icons",
          displayer: "Social Medias",
          value: [twitter, facebook, linkedin],
        },
      ],
    };

    this.addProp({
      type: "array",
      key: "team-members",
      displayer: "Team Members",
      value: [card1, card2, card3, card4, card5, card6],
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 3,
      max: 3,
    });
  }

  getName(): string {
    return "Team 3";
  }

  render() {
    const title = this.getPropValue("title");
    const subtitle = this.getPropValue("subtitle");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            {title && (
              <div className={this.decorateCSS("text-group")}>
                <div className={this.decorateCSS("title-up")}>
                  <h1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h1>
                </div>
                {subtitle && (
                  <div className={this.decorateCSS("subtitle-up")}>
                    <p className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</p>
                  </div>
                )}
              </div>
            )}
            <div
              className={this.decorateCSS("down-page")}
              style={{ gridTemplateColumns: `repeat(${this.getPropValue("itemCount")}, 1fr)` }}
            >
              {this.castToObject<Card[]>("team-members").map((item: Card, indexCard: number) => (
                <div key={indexCard} className={this.decorateCSS("all-card")}>
                  <div className={this.decorateCSS("card")}>
                    <div className={this.decorateCSS("card-items")}>
                      <div className={this.decorateCSS("item-content")}>
                        <div className={this.decorateCSS("box-image")}>
                          {item.profile && (
                            <img
                              className={this.decorateCSS("profile-image")}
                              src={item.profile}
                              alt=""
                            />
                          )}
                        </div>
                        <div className={this.decorateCSS("box-text")}>
                          <h2 className={this.decorateCSS("item-name")}>{item.name}</h2>
                          <p className={this.decorateCSS("item-position")}>{item.position}</p>
                          <div className={this.decorateCSS("icon-group")}>
                            {item.icons &&
                              item.icons.map((card: Icons, indexIcons: number) => (
                                <ComposerLink key={indexIcons} path={card.url}>
                                  <ComposerIcon
                                    name={card.icon}
                                    propsIcon={{
                                      className: this.decorateCSS("icons"),
                                    }}
                                  />
                                </ComposerLink>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team3;
