import * as React from "react";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { Team, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./team3.module.scss";
import ComposerLink from "../../../composer-base-components/Link/link";

type Card = {
    profile: string,
    name: string,
    position: string,
    url1: string,
    url2: string,
    url3: string,
    platforms: { url: string, icon: string }[]
};


class Team3 extends Team {
    constructor(props?: any) {
        super(props, styles)

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


        let items: TypeUsableComponentProps = {
            type: "object",
            key: "items",
            displayer: "Items",
            value: [
                {
                    type: "image",
                    key: "profile",
                    displayer: "Image",
                    value: PlaceholderFiller.image()
                },
                {
                    type: "string",
                    key: "name",
                    displayer: "Person",
                    value: PlaceholderFiller.string()
                },
                {
                    type: "string",
                    key: "position",
                    displayer: "Position",
                    value: PlaceholderFiller.string()
                },
                {
                    type: "array",
                    key: "platforms",
                    displayer: "Social Medias",
                    value: [
                        JSON.parse(JSON.stringify(twitter)),
                        JSON.parse(JSON.stringify(facebook)),
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
            key: "subtitle",
            displayer: "Subtitle",
            value: PlaceholderFiller.string()
        });
        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: PlaceholderFiller.string()
        });

        this.addProp({
            type: "array",
            key: "card",
            displayer: "Card",
            value: [
                JSON.parse(JSON.stringify(items)),
                JSON.parse(JSON.stringify(items)),
                JSON.parse(JSON.stringify(items)),
                JSON.parse(JSON.stringify(items)),
                JSON.parse(JSON.stringify(items)),
                JSON.parse(JSON.stringify(items)),
            ]
        });

        this.addProp({
            type: "number",
            key: "itemCount",
            displayer: "Row",
            value: 3
        });
    }

    getName(): string {
        return "Team Content"
    }

    render() {
        return (
            <div className={this.decorateCSS("container")}>
                <div className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("page")}>
                        <div
                            className={this.decorateCSS("badge")}

                        >
                            {this.getPropValue("badge")}
                        </div>
                        <div
                            className={this.decorateCSS("text-group")}

                        >
                            <h1>{this.getPropValue("subtitle")}</h1>
                            <p>{this.getPropValue("description")}</p>
                        </div>
                        <div
                            className={this.decorateCSS("down-page")}

                        >
                            {this.castToObject<Card[]>("card").map((item: Card) => {
                                return (
                                    <div
                                        className={this.decorateCSS("all-card")}
                                        style={{ width: 100 / this.getPropValue("itemCount") + "%" }}
                                    >
                                        <div
                                            className={this.decorateCSS("card")}

                                        >
                                            <img className={this.decorateCSS("profile-image")} src={item.profile} alt="" />
                                            <h2>{item.name}</h2>
                                            <p>{item.position}</p>
                                            <div className={this.decorateCSS("icon-group")}>
                                                {item.platforms.map((item: any) => {
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

export default Team3;