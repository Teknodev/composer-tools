import * as React from "react";
import { BaseFooter } from "../../EditorComponent";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import styles from "./rich-footer.module.scss"
import ComposerLink from "../../../composer-base-components/Link/link";


type Footer = {
    title: string,
    text1: string,
}

class RichFooter extends BaseFooter {

    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "array",
            key: "items",
            displayer: "Card",
            value: [
                {
                    type: "object",
                    key: "item",
                    displayer: "Item",
                    value: [
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: PlaceholderFiller.string()
                        },
                        {
                            type: "array",
                            key: "text1",
                            displayer: "Text",
                            value: [
                                {
                                    type: "string",
                                    key: "text",
                                    displayer: "Text",
                                    value: PlaceholderFiller.string()
                                },

                            ]
                        },
                    ]
                }
            ]
        });

        this.addProp({
            type: "object",
            key: "link",
            displayer: "Links of Icon",
            value: Array(4).fill(0).map((_, index) => {
                return {
                    type: "page",
                    key: `link${index + 1}`,
                    displayer: `Link-${index + 1}`,
                    value: PlaceholderFiller.string(),
                }
            })
        });

        this.addProp({
            type: "string",
            key: "title3",
            displayer: "Subtitle",
            value: PlaceholderFiller.string()
        });

    }

    getName(): string {
        return "Rich Footer"
    }

    render() {
        return (
            <div
                className={this.decorateCSS("container")}
                
            >
                <div className={this.decorateCSS("little-container")}>
                    <div className={this.decorateCSS("page-1")}>
                        {this.castToObject<Footer[]>("items").map((item: any, index: number) => {
                            return (
                                <div key={`box-${index}`} className={this.decorateCSS("box")}>
                                    <h1>{item.title}</h1>
                                    {(item.text1.map((key: any) =>
                                        <p key={key.value}>{key.value}</p>
                                    ))}
                                </div>
                            )

                        })}
    
                    </div>
                    <div className={this.decorateCSS("page-2")}>
                        <div className={this.decorateCSS("left")} >
                            <h2>{this.getPropValue("title3")}</h2>
                        </div>
                        <div className={this.decorateCSS("right")} >
                            <ComposerLink path={this.getPropValue("link")[0].value}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" />
                            </ComposerLink>
                            <ComposerLink path={this.getPropValue("link")[1].value}>
                                <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" />
                            </ComposerLink>
                            <ComposerLink path={this.getPropValue("link")[2].value}>
                                <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" />
                            </ComposerLink>
                            <ComposerLink path={this.getPropValue("link")[3].value}>
                                <img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" />
                            </ComposerLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RichFooter;
