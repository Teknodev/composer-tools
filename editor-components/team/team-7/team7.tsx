import * as React from "react";
import styles from "./team7.module.scss";
import { Team, TypeUsableComponentProps } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

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
                    value: "https://images.pexels.com/photos/5792639/pexels-photo-5792639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
                    value: [
                        twitter,
                        facebook,
                        instagram,
                    ]
                }
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
                    value: "https://images.pexels.com/photos/5393594/pexels-photo-5393594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
                    value: [
                        twitter,
                        facebook,
                        instagram,
                    ]
                }
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
                    value: "https://images.pexels.com/photos/8434878/pexels-photo-8434878.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
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
                    value: [
                        twitter,
                        facebook,
                        instagram,
                    ]
                }
            ]
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
                    value: "https://images.pexels.com/photos/5697738/pexels-photo-5697738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
                    value: [
                        twitter,
                        facebook,
                        instagram,
                    ]
                }
            ]
        };

        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "Who is on the team",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "",
        });

        this.addProp({
            type: "array",
            key: "team-members",
            displayer: "Team Members",
            value: [
                card1,
                card2,
                card3,
                card4,
            ],
        });

        this.addProp({
            type: "number",
            key: "reverse",
            displayer: "Reverse Item Count",
            value: 4,
            max: 5
        });
    }


    getName(): string {
        return "Team 7";
    }


    render() {
        return (
            <div className={this.decorateCSS("container")}>
                <div className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("basic-page")}>
                        <div className={this.decorateCSS("up-page")}>
                            <h1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h1>
                            <p className={this.decorateCSS("description")}>{this.getPropValue("description")}</p>
                        </div>
                        <div className={this.decorateCSS("down-page")}>
                            {this.castToObject<Card[]>("team-members").map((item: Card, indexCard: number) => {
                                
                                return (
                                    <div key={indexCard} style={{ width: 90 / this.getPropValue("reverse") + "%" }} className={this.decorateCSS("card")}>
                                        <img className={this.decorateCSS("person-image")} src={item.image} alt="" />
                                        <div className={this.decorateCSS("person-info")}>
                                            <div className={this.decorateCSS("text-group")}>
                                                <h1 className={this.decorateCSS("item-name")}>{item.name}</h1>
                                                <p className={this.decorateCSS("item-position")}>{item.position}</p>
                                            </div>
                                            <div className={this.decorateCSS("icons-bar")}>
                                            {item.icons && item.icons.map(
                                           (card: Icons, indexIcons: number) => (
                                          <ComposerLink
                                            key={indexIcons}
                                            path={card.url}
                                         >
                                            <ComposerIcon name={card.icon} 
                                            propsIcon={{
                                                className:this.decorateCSS("icon")
                                            }}/>
                                         </ComposerLink>
                                            )
                                            )}
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

export default Team7;