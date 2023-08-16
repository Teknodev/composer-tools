import * as React from "react";
import { Team, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./team3.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type Card = {
  profile: string;
  name: string;
  position: string;
  url1: string;
  url2: string;
  url3: string;
  url4: string;
  platforms: { url: string; icon: string }[];
};

class Team3 extends Team {
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
          type: "image",
          key: "icon",
          displayer: "Platform Icon",
          value: "https://cdn-icons-png.flaticon.com/512/4494/4494475.png",
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
      key: "badge",
      displayer: "Badge",
      value: "Team",
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Our Team",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "We work in collaboration, harmony, and trust to achieve our goals.",
    });

    this.addProp({
      type: "array",
      key: "card",
      displayer: "Card",
      value: [
        {
          type: "object",
          key: "items",
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
              key: "platforms",
              displayer: "Social Medias",
              value: [
                JSON.parse(JSON.stringify(twitter)),
                JSON.parse(JSON.stringify(facebook)),
              ],
            },
          ],
        },
        {
          type: "object",
          key: "items",
          displayer: "Items",
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
              key: "platforms",
              displayer: "Social Medias",
              value: [
                JSON.parse(JSON.stringify(twitter)),
                JSON.parse(JSON.stringify(facebook)),
              ],
            },
          ],
        },
        {
          type: "object",
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "image",
              key: "profile",
              displayer: "Image",
              value:
                "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
              key: "platforms",
              displayer: "Social Medias",
              value: [
                JSON.parse(JSON.stringify(twitter)),
                JSON.parse(JSON.stringify(facebook)),
              ],
            },
          ],
        },
        {
          type: "object",
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "image",
              key: "profile",
              displayer: "Image",
              value:
                "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
              key: "platforms",
              displayer: "Social Medias",
              value: [
                JSON.parse(JSON.stringify(twitter)),
                JSON.parse(JSON.stringify(facebook)),
              ],
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 4,
    });
  }

  getName(): string {
    return "Team Content";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            <div className={this.decorateCSS("text-group")}>
              <h1>{this.getPropValue("subtitle")}</h1>
              <p>{this.getPropValue("description")}</p>
            </div>
            <div className={this.decorateCSS("down-page")}>
              {this.castToObject<Card[]>("card").map((item: Card, indexCard: number) => {
                return (
                  <div
                    key={indexCard}
                    className={this.decorateCSS("all-card")}
                    style={{
                      width: 90 / this.getPropValue("itemCount") + "%",
                    }}
                  >
                    <div className={this.decorateCSS("card")}>
                      <img
                        className={this.decorateCSS("profile-image")}
                        src={item.profile}
                        alt=""
                      />
                      <h2>{item.name}</h2>
                      <p>{item.position}</p>
                      <div className={this.decorateCSS("icon-group")}>
                        {item.platforms.map((item: any, indexIconGroup: number) => {
                          return (
                            <ComposerLink key={indexIconGroup} path={item.url}>
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
      </div>
    );
  }
}

export default Team3;
