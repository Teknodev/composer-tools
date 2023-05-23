import * as React from "react";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import styles from "./team1.module.scss";
import { Team, TypeUsableComponentProps } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
type Card = {
  image: string;
  name: string;
  position: string;
  description: string;
  platforms: { icon: string; url: string }[];
};

class Team1 extends Team {
  constructor(props?: any) {
    super(props, styles);
    let twitter: TypeUsableComponentProps = {
      type: "object",
      key: "twitter",
      displayer: "Twitter",
      value: [
        {
          type: "image",
          key: "icon",
          displayer: "Platform Icon",
          value: "https://cdn-icons-png.flaticon.com/512/3670/3670151.png",
        },
        {
          type: "page",
          key: "url",
          displayer: "Url",
          value: PlaceholderFiller.string(),
        },
      ],
    };

    let facebook: TypeUsableComponentProps = {
      type: "object",
      key: "facebook",
      displayer: "Platform",
      value: [
        {
          type: "image",
          key: "icon",
          displayer: "Platform Icon",
          value: "https://cdn-icons-png.flaticon.com/512/4494/4494475.png",
        },
        {
          type: "page",
          key: "url",
          displayer: "Url",
          value: PlaceholderFiller.string(),
        },
      ],
    };

    let instagram: TypeUsableComponentProps = {
      type: "object",
      key: "instagram",
      displayer: "Platform",
      value: [
        {
          type: "image",
          key: "icon",
          displayer: "Platform Icon",
          value: "https://cdn-icons-png.flaticon.com/512/3670/3670125.png",
        },
        {
          type: "page",
          key: "url",
          displayer: "Url",
          value: PlaceholderFiller.string(),
        },
      ],
    };

    let linkedin: TypeUsableComponentProps = {
      type: "object",
      key: "linkedin",
      displayer: "Platform",
      value: [
        {
          type: "image",
          key: "icon",
          displayer: "Platform Icon",
          value: "https://cdn-icons-png.flaticon.com/512/145/145807.png",
        },
        {
          type: "page",
          key: "url",
          displayer: "Url",
          value: PlaceholderFiller.string(),
        },
      ],
    };
    this.addProp({
      type: "string",
      key: "title1",
      displayer: "Title-1",
      value: "Our Team",
    });
    this.addProp({
      type: "string",
      key: "title2",
      displayer: "Title-3",
      value: "We work in collaboration, harmony, and trust to achieve our goals.",
    });

    this.addProp({
      type: "array",
      key: "items",
      displayer: "Card",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Items",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "Daryl Russell",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Ceo/Founder",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "We are a group of experienced professionals with diverse backgrounds and skill sets, working together to achieve common goals.",
            },
            {
              type: "array",
              key: "platforms",
              displayer: "Sosial Medias",
              value: [
                JSON.parse(JSON.stringify(facebook)),
                JSON.parse(JSON.stringify(twitter)),
                JSON.parse(JSON.stringify(instagram)),
                JSON.parse(JSON.stringify(linkedin)),
              ],
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Items",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://images.pexels.com/photos/716411/pexels-photo-716411.jpeg?auto=compress&cs=tinysrgb&w=1600",
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "Clover Ruth",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Ceo/Founder",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Their design skills are truly exceptional, and they have a keen eye for aesthetics that sets them apart from others in the field.",
            },
            {
              type: "array",
              key: "platforms",
              displayer: "Sosial Medias",
              value: [
                JSON.parse(JSON.stringify(facebook)),
                JSON.parse(JSON.stringify(twitter)),
                JSON.parse(JSON.stringify(instagram)),
                JSON.parse(JSON.stringify(linkedin)),
              ],
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Items",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1600",
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "Jaylyn Kaleigh",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Ceo/Founder",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "An online learning platform can provide access to educational content from anywhere with an internet connection.",
            },
            {
              type: "array",
              key: "platforms",
              displayer: "Sosial Medias",
              value: [
                JSON.parse(JSON.stringify(facebook)),
                JSON.parse(JSON.stringify(twitter)),
                JSON.parse(JSON.stringify(instagram)),
                JSON.parse(JSON.stringify(linkedin)),
              ],
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Items",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://images.pexels.com/photos/1820934/pexels-photo-1820934.jpeg?auto=compress&cs=tinysrgb&w=1600",
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "Candyce Jeannine",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Ceo/Founder",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "A personal finance website can be incredibly helpful for people looking to improve their financial literacy and manage their money better.",
            },
            {
              type: "array",
              key: "platforms",
              displayer: "Sosial Medias",
              value: [
                JSON.parse(JSON.stringify(facebook)),
                JSON.parse(JSON.stringify(twitter)),
                JSON.parse(JSON.stringify(instagram)),
                JSON.parse(JSON.stringify(linkedin)),
              ],
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 4,
    });
  }

  getName(): string {
    return "Team Meet-4";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("up-page")}>
            <div className={this.decorateCSS("text-group")}>
              <h1>{this.getPropValue("title1")}</h1>
              <p>{this.getPropValue("title2")}</p>
            </div>
          </div>
          <div className={this.decorateCSS("down-page")}>
            {this.castToObject<Card[]>("items").map((card: Card, indexItems: number) => {
              return (
                <div
                  key={indexItems}
                  className={this.decorateCSS("all-card")}
                  style={{
                    width: 90 / this.getPropValue("itemCount") + "%",
                  }}
                >
                  <div className={this.decorateCSS("card")}>
                    <div className={this.decorateCSS("top")}>
                      <img className={this.decorateCSS("image")} src={card.image} />
                      <h2>{card.name}</h2>
                      <p className={this.decorateCSS("position")}>{card.position}</p>
                    </div>
                    <p>{card.description}</p>
                    <div className={this.decorateCSS("icon-group")}>
                      {card.platforms.map((item: any, indexPlatforms: number) => {
                        return (
                          <ComposerLink key={indexPlatforms} path={item.url}>
                            <img src={item.icon} alt="" />
                          </ComposerLink>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Team1;
