import * as React from "react";
import styles from "./team11.module.scss";
import { Team, TypeUsableComponentProps } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

interface Card {
  image: string,
  name: string,
  position: string
  icons: { icon: string, url: string }[],
  getPropValue: (key: string) => any
  
}
class Team11 extends Team {
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
      displayer: "Facebook",
      value: [
        {
          type: "image",
          key: "icon",
          displayer: "Platform Icon",
          value: "FaFacebook",
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
      displayer: "Instagram",
      value: [
        {
          type: "image",
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
    let youtube: TypeUsableComponentProps = {
      type: "object",
      key: "youtube",
      displayer: "Youtube",
      value: [
        {
          type: "image",
          key: "icon",
          displayer: "Platform Icon",
          value: "TfiYoutube",
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
    let card1: TypeUsableComponentProps = {
      type: "object",
      key: "card",
      displayer: "Card",
      value: [
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value: "https://images.pexels.com/photos/5792639/pexels-photo-5792639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          type: "array",
          key: "icons",
          displayer: "Social Media Platforms",
          value: [
            JSON.parse(JSON.stringify(twitter)),
            JSON.parse(JSON.stringify(facebook)),
            JSON.parse(JSON.stringify(instagram)),
            JSON.parse(JSON.stringify(youtube)),
          ]
        },
        {
          type: "string",
          key: "name",
          displayer: "Person Name",
          value: "Willie Perry",
        },
        {
          type: "string",
          key: "position",
          displayer: "position",
          value: "Defender",
        },

      ]
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
          value: "https://images.pexels.com/photos/5792639/pexels-photo-5792639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          type: "array",
          key: "icons",
          displayer: "Social Media Platforms",
          value: [
            JSON.parse(JSON.stringify(twitter)),
            JSON.parse(JSON.stringify(facebook)),
            JSON.parse(JSON.stringify(instagram)),
            JSON.parse(JSON.stringify(youtube)),
          ]
        },
        {
          type: "string",
          key: "name",
          displayer: "Person Name",
          value: "Paul Hicks",
        },
        {
          type: "string",
          key: "position",
          displayer: "position",
          value: "Defender",
        },
      ]
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
          value: "https://images.pexels.com/photos/5792639/pexels-photo-5792639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          type: "array",
          key: "icons",
          displayer: "Social Media Platforms",
          value: [
            JSON.parse(JSON.stringify(twitter)),
            JSON.parse(JSON.stringify(facebook)),
            JSON.parse(JSON.stringify(instagram)),
            JSON.parse(JSON.stringify(youtube)),
          ]
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
          displayer: "position",
          value: "Defender",
        },
      ]
    };
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 3,
      max:3
    });
    this.addProp({
      type: "array",
      key: "team-members",
      displayer: "Team Members",
      value: [
        JSON.parse(JSON.stringify(card1)),
        JSON.parse(JSON.stringify(card2)),
        JSON.parse(JSON.stringify(card3)),
      ],
    });
  }
  getName(): string {
    return "Team 11";
  }
  render() {
    
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("basic-page")}>
            <div className={this.decorateCSS("up-page")}>
              <h1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h1>
            </div>   
            <div className={this.decorateCSS("down-page")}>
              {this.castToObject<Card[]>("team-members").map((item: Card, indexCard: number) => {
                return (
                <div className={this.decorateCSS("item")} style={{ width: 90 / this.getPropValue("itemCount") + "%",}}>                                 
                  <div key={indexCard} className={this.decorateCSS("card")}>                 
                    <div className={this.decorateCSS("hover")}>
                      <img className={this.decorateCSS("person-image")} src={item.image} alt="" />
                      <div className={this.decorateCSS("icons-bar")}>
                        {item.icons.map((el: any, indexIcon: number) => {
                          return (
                            <ComposerLink path={el.url} key={indexIcon}>
                              <ComposerIcon name={el.icon} propsIcon={{ className: this.decorateCSS("icon") }}></ComposerIcon>
                            </ComposerLink>
                          )
                        })}
                      </div>
                    </div>
                    <div className={this.decorateCSS("person-info")}>
                      <div className={this.decorateCSS("text-group")}>
                        <h1 className={this.decorateCSS("item-name")}>{item.getPropValue("name")}</h1>
                        <h2 className={this.decorateCSS("item-position")}>{item.getPropValue("position")}</h2>
                      </div>
                    </div>
                  </div>
                  </div>
                )
              })}
     
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team11;
