import * as React from "react";
import styles from "./team7.module.scss";
import { Team, TypeUsableComponentProps } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

interface Card {
    image: string,
    name: string,
    position: string
    icons: { icon: string, url: string }[],
}

class Team7 extends Team {
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
                    value: "https://cdn-icons-png.flaticon.com/512/123/123728.png?w=826&t=st=1680695413~exp=1680696013~hmac=53c1e21ad33373dd862cdea82c2df246d0675f62cf171d9a1044da2cbb6cf6ac"
                },
                {
                    type: "page",
                    key: "url",
                    displayer: "Url",
                    value: ""
                }
            ]
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
                    value: "https://i.pinimg.com/originals/1f/28/95/1f28956fb27c5ef5f44cbafd250cb84b.png"
                },
                {
                    type: "page",
                    key: "url",
                    displayer: "Url",
                    value:""
                }
            ]
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
                    value: "https://cdn-icons-png.flaticon.com/512/121/121520.png"
                },
                {
                    type: "page",
                    key: "url",
                    displayer: "Url",
                    value: ""
                }
            ]
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
                        JSON.parse(JSON.stringify(twitter)),
                        JSON.parse(JSON.stringify(facebook)),
                        JSON.parse(JSON.stringify(instagram)),
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
                        JSON.parse(JSON.stringify(twitter)),
                        JSON.parse(JSON.stringify(facebook)),
                        JSON.parse(JSON.stringify(instagram)),
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
                        JSON.parse(JSON.stringify(twitter)),
                        JSON.parse(JSON.stringify(facebook)),
                        JSON.parse(JSON.stringify(instagram)),
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
                        JSON.parse(JSON.stringify(twitter)),
                        JSON.parse(JSON.stringify(facebook)),
                        JSON.parse(JSON.stringify(instagram)),
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
            type: "number",
            key: "reverse",
            displayer: "Reverse Item Count",
            value: 4
        });

        this.addProp({
            type: "array",
            key: "team-members",
            displayer: "Team Members",
            value: [
                JSON.parse(JSON.stringify(card1)),
                JSON.parse(JSON.stringify(card2)),
                JSON.parse(JSON.stringify(card3)),
                JSON.parse(JSON.stringify(card4)),
            ],
        });
    }


    getName(): string {
        return "Team-7";
    }


    render() {
        return (
            <div
                className={this.decorateCSS("container")}
            >
                <div className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("basic-page")}>
                        <div className={this.decorateCSS("up-page")}>
                            <h1>{this.getPropValue("title")}</h1>
                            <p>{this.getPropValue("description")}</p>
                        </div>
                        <div className={this.decorateCSS("down-page")}>
                            {this.castToObject<Card[]>("team-members").map((item: Card, indexCard: number) => {
                                return (
                                    <div key={indexCard} style={{ width: 90 / this.getPropValue("reverse") + "%" }} className={this.decorateCSS("card")}>
                                        <img className={this.decorateCSS("person-image")} src={item.image} alt="" />
                                        <div className={this.decorateCSS("person-info")}>
                                            <div className={this.decorateCSS("text-group")}>
                                                <h1>{item.name}</h1>
                                                <p>{item.position}</p>
                                            </div>
                                            <div className={this.decorateCSS("icons-bar")}>
                                                 {item.icons.map((el: any, indexIcon: number) => {
                                                    return (
                                                        <ComposerLink path={el.url} key={indexIcon}>
                                                            <img src={el.icon} alt="icon" className={this.decorateCSS("icon")}/>
                                                        </ComposerLink>
                                                    )
                                                })}  
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