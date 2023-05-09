import * as React from "react";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import styles from "./team1.module.scss";
import { Team, TypeUsableComponentProps } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/link";
type Card = {
    image: string,
    name: string,
    position: string,
    description: string,
    platforms: { icon: string, url: string }[],

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
                    value: "https://cdn-icons-png.flaticon.com/512/3670/3670151.png"
                },
                {
                    type: "page",
                    key: "url",
                    displayer: "Url",
                    value: PlaceholderFiller.string()
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
                    value: "https://cdn-icons-png.flaticon.com/512/4494/4494475.png"
                },
                {
                    type: "page",
                    key: "url",
                    displayer: "Url",
                    value: PlaceholderFiller.string()
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
                    value: "https://cdn-icons-png.flaticon.com/512/3670/3670125.png"
                },
                {
                    type: "page",
                    key: "url",
                    displayer: "Url",
                    value: PlaceholderFiller.string()
                }
            ]
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
                    value: "https://cdn-icons-png.flaticon.com/512/145/145807.png"
                },
                {
                    type: "page",
                    key: "url",
                    displayer: "Url",
                    value: PlaceholderFiller.string()
                }
            ]
        };
        let placeholder: TypeUsableComponentProps = {
            type: "object",
            key: "item",
            displayer: "Items",
            value: [
                {
                    type: "image",
                    key: "image",
                    displayer: "Image",
                    value: PlaceholderFiller.image()
                },
                {
                    type: "string",
                    key: "name",
                    displayer: "Person Name",
                    value: PlaceholderFiller.string()
                },
                {
                    type: "string",
                    key: "position",
                    displayer: "Position",
                    value: PlaceholderFiller.string()
                },
                {
                    type: "string",
                    key: "description",
                    displayer: "Description",
                    value: PlaceholderFiller.string()
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
                    ]
                }
            ]
        };
        this.addProp({
            type: "string",
            key: "badge",
            displayer: "Badge",
            value: "Team",
        });

        this.addProp({
            type: "string",
            key: "title1",
            displayer: "Title-1",
            value: PlaceholderFiller.string(),
        });
        this.addProp({
            type: "string",
            key: "title2",
            displayer: "Title-3",
            value: PlaceholderFiller.string()
        });


        this.addProp({
            type: "array",
            key: "items",
            displayer: "Card",
            value: [
                JSON.parse(JSON.stringify(placeholder)),
                JSON.parse(JSON.stringify(placeholder)),
                JSON.parse(JSON.stringify(placeholder)),
                JSON.parse(JSON.stringify(placeholder)),
                JSON.parse(JSON.stringify(placeholder)),
                JSON.parse(JSON.stringify(placeholder)),
                JSON.parse(JSON.stringify(placeholder)),
                JSON.parse(JSON.stringify(placeholder)),
            ]
        });

        this.addProp({
            type: "number",
            key: "itemCount",
            displayer: "Item count in a row",
            value: 4,
        });
    }

    getName(): string {
        return "Team Meet-4"
    }

    render() {
        return (
            <div className={this.decorateCSS("container")}>
                <div className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("page")}>
                        <div className={this.decorateCSS("up-page")}>
                            <div
                                className={this.decorateCSS("badge")}
                                
                            >
                                {this.getPropValue("badge")}
                            </div>
                            <div
                                className={this.decorateCSS("text-group")}
                                
                            >
                                <h1>{this.getPropValue("title1")}</h1>
                                <p>{this.getPropValue("title2")}</p>
                            </div>
                        </div>
                        <div
                            className={this.decorateCSS("down-page")}
                            
                        >
                            {this.castToObject<Card[]>("items").map((card: Card) => {
                                return (
                                    <div className={this.decorateCSS("all-card")} style={{width: 100 / this.getPropValue("itemCount") + "%"}}>
                                        <div
                                            className={this.decorateCSS("card")}
                                            
                                        >
                                            <img src={card.image} alt="" />
                                            <h2>{card.name}</h2>
                                            <p className={this.decorateCSS("position")}>{card.position}</p>
                                            <p>{card.description}</p>
                                            <div className={this.decorateCSS("icon-group")}>
                                                {card.platforms.map((item: any) => {
                                                    return (
                                                        <ComposerLink path={item.url}>
                                                            <img src={item.icon} alt="" />
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
        )
    }
}
export default Team1;