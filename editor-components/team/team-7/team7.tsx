import * as React from "react";
import styles from "./team7.module.scss";
import { Team, TypeUsableComponentProps } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

import { Base } from "../../../composer-base-components/base/base";

type Icons = {
  url: string;
  icon: string;
};

interface Card {
  image: string;
  name: React.JSX.Element;
  position: React.JSX.Element;
  icons: { icon: string; url: string }[];
}

class Team7 extends Team {
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
          value: "GrInstagram",
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
          value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b1fabd2970002c627d1b?alt=media&timestamp=1719558632841",
        },
        {
          type: "string",
          key: "name",
          displayer: "Person Name",
          value: "John Smith",
        },
        {
          type: "string",
          key: "position",
          displayer: "Position",
          value: "CEO",
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
          value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b1fabd2970002c627d19?alt=media&timestamp=1719558632841",
        },
        {
          type: "string",
          key: "name",
          displayer: "Person Name",
          value: "Mary Johnson",
        },
        {
          type: "string",
          key: "position",
          displayer: "Position",
          value: "CEO",
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
          value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b1fabd2970002c627d1c?alt=media&timestamp=1719558632841",
        },
        {
          type: "string",
          key: "name",
          displayer: "Person Name",
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
          value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b1fabd2970002c627d1a?alt=media&timestamp=1719558632841",
        },
        {
          type: "string",
          key: "name",
          displayer: "Person Name",
          value: "Jessica Anderson",
        },
        {
          type: "string",
          key: "position",
          displayer: "Position",
          value: "Business Representative",
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
      key: "badge",
      displayer: "Subtitle",
      value: "Our Team",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Skilled Team Innovating the Product",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Our skilled team continuously innovates, ensuring our product stays ahead of industry standards.",
    });

    this.addProp({
      type: "array",
      key: "team-members",
      displayer: "Team Members",
      value: [card1, card2, card3, card4],
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count",
      value: 4,
      max: 5,
    });
  }

  static getName(): string {
    return "Team 7";
  }

  render() {
    const titleValue = this.castToString(this.getPropValue("title"));
    const description = this.getPropValue("description");

    const badgeValue = this.castToString(this.getPropValue("badge"))
    const descriptionValue = this.castToString(description);

    const contentAlignment = Base.getContentAlignment();

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("basic-page")}>
            {contentAlignment === "left" ? (
              <Base.VerticalContent className={this.decorateCSS("up-page")}>
                {badgeValue && <Base.SectionSubTitle className={this.decorateCSS("badge")}>{this.getPropValue("badge")}</Base.SectionSubTitle>}
                <div className={this.decorateCSS("up-page-bottom")}>
                  {titleValue && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                  {descriptionValue && <Base.SectionDescription className={`${this.decorateCSS("description")} ${titleValue ? this.decorateCSS("middle") : this.decorateCSS("left")}`}>{this.getPropValue("description")}</Base.SectionDescription>}
                </div>
              </Base.VerticalContent>
            ) : contentAlignment === "center" ? (
              <Base.VerticalContent className={this.decorateCSS("up-page-center")}>
                {badgeValue && <Base.SectionSubTitle className={this.decorateCSS("badge")}>{this.getPropValue("badge")}</Base.SectionSubTitle>}
                {titleValue && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                {descriptionValue && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
              </Base.VerticalContent>
            ) : null}

            <Base.ListGrid gridCount={{ pc: this.getPropValue("itemCount"), tablet: 2, phone: 1 }} className={this.decorateCSS("down-page")}>
              {this.castToObject<Card[]>("team-members").map((item: Card, indexCard: number) => {
                const itemName = this.castToString(item.name);
                const itemPosition = this.castToString(item.position);

                const hasItem = itemName || itemPosition || item.image || item.icons.length > 0;
                return (
                  hasItem && (
                    <div key={indexCard} className={this.decorateCSS("card")}>
                      <div className={this.decorateCSS("image-container")}>
                        {item.image && (
                          <div className={this.decorateCSS("image-wrapper")}>
                            <img className={this.decorateCSS("person-image")} src={item.image} alt="" />
                          </div>
                        )}

                        <div className={this.decorateCSS("icons-bar")}>
                          {item.icons &&
                            item.icons.map((card: Icons, indexIcons: number) => (
                              <ComposerLink key={indexIcons} path={card.url}>
                                <Base.Icon name={card.icon} propsIcon={{ className: this.decorateCSS("icon") }} />
                              </ComposerLink>
                            ))}
                        </div>
                        <div className={this.decorateCSS("overlay")}></div>
                      </div>

                      <Base.VerticalContent className={this.decorateCSS("text-group")}>
                        {itemName && <Base.H3 className={this.decorateCSS("item-name")}>{item.name}</Base.H3>}
                        {itemPosition && <Base.P className={this.decorateCSS("item-position")}>{item.position}</Base.P>}
                      </Base.VerticalContent>
                    </div>
                  )
                );
              })}
            </Base.ListGrid>
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Team7;
