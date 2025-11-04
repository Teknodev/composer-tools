import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats13.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class Stats13 extends BaseStats {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "media",
            key: "image",
            displayer: "Image",
            value: {
                url: "https://impreza-landing.us-themes.com/wp-content/uploads/2023/10/avel-chuklanov-DUmFLtMeAbQ-unsplash-1070x713.jpg",
                type: "image",
            }
        })

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Button",
            additionalParams: {
                maxElementCount: 2,
            },
            value: [INPUTS.BUTTON("button", "Button", "READ MORE", "", null, null, "Primary")],
        });

        this.addProp({
            type: "array",
            key: "title",
            displayer: "Title",
            value: [
                { type: "string", key: "line1", displayer: "Line 1", value: "Best-Rated" },
                { type: "string", key: "line2", displayer: "Line 2", value: "Pormmerce" },
                { type: "string", key: "line3", displayer: "Line 3", value: "Solution" },
            ],
        });

        this.addProp({
            type: "array",
            key: "rating",
            displayer: "Rating",
            value: [
                {
                    type: "object",
                    key: "star1",
                    displayer: "star1",
                    value: [
                        {
                            type: "icon",
                            key: "icon",
                            displayer: "icon",
                            value: "FaStar",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "star2",
                    displayer: "star2",
                    value: [
                        {
                            type: "icon",
                            key: "icon",
                            displayer: "icon",
                            value: "FaStar",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "star3",
                    displayer: "star3",
                    value: [
                        {
                            type: "icon",
                            key: "icon",
                            displayer: "icon",
                            value: "FaStar",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "star4",
                    displayer: "star4",
                    value: [
                        {
                            type: "icon",
                            key: "icon",
                            displayer: "icon",
                            value: "FaStar",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "star4",
                    displayer: "star4",
                    value: [
                        {
                            type: "icon",
                            key: "icon",
                            displayer: "icon",
                            value: "FaStar",
                        },
                    ],
                },
            ],
        });
        this.addProp({
            type: "array",
            key: "contact-items",
            displayer: "Contact Items",
            value: [
                {
                    type: "object",
                    key: "contact",
                    displayer: "Contact",
                    value: [
                        {
                            type: "string",
                            key: "title",
                            value: "Email:",
                            displayer: "Text",
                        }
                    ],
                },
                {
                    type: "object",
                    key: "contact",
                    displayer: "Contact",
                    value: [
                        {
                            type: "string",
                            key: "title",
                            value: "Phone:",
                            displayer: "Text",
                        }
                    ],
                },
            ],
        });
    }


    static getName(): string {
        return "Stats 13";
    }

    render() {
        const image = this.getPropValue("image");
        const title = this.getPropValue("title");
        const rating = this.getPropValue("rating");
        const buttons = this.getPropValue("buttons");

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("content")}>
                    <Base.ContainerGrid>
                        <Base.GridCell className={this.decorateCSS("left-content")}>
                            {rating.length > 0 && (
                                <div className={this.decorateCSS("rating-container")}>
                                    {this.castToObject<any>("rating").map((item: any, index: number) => {
                                        return (
                                            <div className={this.decorateCSS("rating-content")}>
                                                <Base.Icon name={item.icon} propsIcon={{ className: this.decorateCSS("icon") }} />
                                            </div>
                                        );
                                    })}
                                    <Base.H3 className={this.decorateCSS("rating-number")}>4.89</Base.H3>
                                </div>
                            )}
                            {Array.isArray(title) && title.length > 0 && (
                                title.map((item: any, index: number) => (
                                    <Base.SectionTitle key={index} className={this.decorateCSS("title")}>{item.value}</Base.SectionTitle>
                                ))
                            )}
                            {buttons.length > 0 && (
                                <div className={this.decorateCSS("button-container")}>
                                    {this.castToObject<any>("buttons").map((item: any, index: number) => {
                                        const buttonTextExist = this.castToString(item.text);
                                        return (
                                            buttonTextExist && (
                                                <ComposerLink key={`stats-${index}`} path={item.url}>
                                                    <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                                                        {item.text}
                                                    </Base.Button>
                                                </ComposerLink>
                                            )
                                        );
                                    })}
                                </div>
                            )}
                        </Base.GridCell>
                        <Base.GridCell className={this.decorateCSS("right-content")}>
                            {image?.url && (
                                <img src={image.url} className={this.decorateCSS("image")} />
                            )}
                        </Base.GridCell>
                    </Base.ContainerGrid>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Stats13;
