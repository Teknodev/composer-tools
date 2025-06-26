import * as React from "react";
import { Team, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./team3.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

import { Base } from "../../../composer-base-components/base/base";

type Icons = {
  url: string;
  icon: string;
};

interface Card {
  profile: string;
  name: React.JSX.Element;
  position: React.JSX.Element;
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
      key: "subtitle",
      displayer: "Subtitle",
      value: "Our Team",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
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
          value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/643707b368c3c2002cd307c2?alt=media&timestamp=1719483639147",
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
          value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/643707b368c3c2002cd307c1?alt=media&timestamp=1719483639146",
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
          value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/643707b368c3c2002cd307c2?alt=media&timestamp=1719483639147",
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
          value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661ac19bd2970002c627624?alt=media&timestamp=1719502692150",
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
          value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661ac19bd2970002c627623?alt=media&timestamp=1719502692150",
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
          value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661ac19bd2970002c627624?alt=media&timestamp=1719502692150",
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
      max: 5,
    });

    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1", "animate4"],
      additionalParams: {
        selectItems: ["animate1", "animate2", "animate3", "animate4"]
      }
    });
  }

  static getName(): string {
    return "Team 3";
  }

  render() {
    const title = this.getPropValue("title");
    const subtitle = this.getPropValue("subtitle");

    const titleValue = title.props.html;
    const subTitleValue = subtitle.props.html;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("page")}>
            <Base.VerticalContent className={this.decorateCSS("text-group")}>
              {subTitleValue && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
              {titleValue && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
            </Base.VerticalContent>
            <Base.ListGrid gridCount={{ pc: this.getPropValue("itemCount"), tablet: 2, phone: 1 }} className={this.decorateCSS("down-page")}>
              {this.castToObject<Card[]>("team-members").map((item: Card, indexCard: number) => {
                const itemName = this.castToString(item.name);
                const itemPosition = this.castToString(item.position);
                const hasContent = item.profile || itemName || itemPosition || (item.icons && item.icons.length > 0);

                return hasContent ? (
                  <div key={indexCard} className={this.decorateCSS("all-card")} data-animation={this.getPropValue("hoverAnimation").join(" ")}>
                    <div className={`${this.decorateCSS("card")} ${item.profile ? this.decorateCSS("card-image") : ""}`} data-animation={this.getPropValue("hoverAnimation").join(" ")}>
                      <div className={this.decorateCSS("card-items")}>
                        <div className={this.decorateCSS("item-content")}>
                          {item.profile && <div className={this.decorateCSS("box-image")}>{item.profile && <img className={this.decorateCSS("profile-image")} src={item.profile} alt="" />}</div>}
                          <Base.VerticalContent className={item.profile ? this.decorateCSS("box-text") : this.decorateCSS("no-image-box-text")}>
                            <Base.H2 className={this.decorateCSS("item-name")}>{item.name}</Base.H2>
                            <Base.P className={this.decorateCSS("item-position")}>{item.position}</Base.P>
                            <div className={this.decorateCSS("icon-group")} data-animation={this.getPropValue("hoverAnimation").join(" ")}>
                              {item.icons &&
                                item.icons.map((card: Icons, indexIcons: number) => (
                                  <ComposerLink key={indexIcons} path={card.url}>
                                    <Base.Icon
                                      name={card.icon}
                                      propsIcon={{
                                        className: this.decorateCSS("icons"),
                                        style: { "--icon-index": indexIcons } as React.CSSProperties
                                      }}
                                    />
                                  </ComposerLink>
                                ))}
                            </div>
                          </Base.VerticalContent>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null;
              })}
            </Base.ListGrid>
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Team3;
