import * as React from "react";
import { BaseAbout, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./about7.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type ItemType = {
    media: TypeMediaInputValue;
    overlay: boolean;
    year: string;
    subtitle: string;
    title: string;
    description: string;
    rowReverse: boolean;
    middleLineActive: boolean;
    lineActive: boolean;
    dotActive: boolean;
}

type BackgroundImageType = {
    image: TypeMediaInputValue;
    overlay: boolean;
}

class About7 extends BaseAbout {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "object",
            key: "background-image",
            displayer: "Background Media",
            value: [
                {
                    type: "media",
                    key: "image",
                    displayer: "Media",
                    additionalParams: {
                        availableTypes: ["image", "video"],
                    },
                    value: {
                        type: "image",
                        url: "https://swissdelight.qodeinteractive.com/wp-content/uploads/2021/04/history-offset-img1.png",
                    },
                },
                {
                    type: "boolean",
                    key: "overlay",
                    displayer: "Overlay",
                    value: false,
                },
            ],
        });

        this.addProp({
            type: "string",
            key: "subtitle",
            displayer: "Subtitle",
            value: "",
        });

        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "",
        });

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
            ],
        });

        this.addProp({
            type: "array",
            key: "items",
            displayer: "Items",
            value: [
                {
                    type: "object",
                    key: "item",
                    displayer: "Item",
                    value: [
                        {
                            type: "media",
                            key: "media",
                            displayer: "Media",
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                            value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/680f7e4bc1ef0f002c966f97?alt=media&timestamp=1745845837054",
                            },
                        },
                        {
                            type: "boolean",
                            key: "overlay",
                            displayer: "Overlay",
                            value: false,
                        },
                        {
                            type: "string",
                            key: "year",
                            displayer: "Progress Text",
                            value: "1930",
                        },
                        {
                            type: "string",
                            key: "subtitle",
                            displayer: "Subtitle",
                            value: "CHOCO HISTORY",
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "EARLY BEGGINING",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
                        },
                        {
                            type: "boolean",
                            key: "rowReverse",
                            displayer: "Row Reverse",
                            value: false,
                        },
                        {
                            type: "boolean",
                            key: "middleLineActive",
                            displayer: "Middle Line Active",
                            value: true,
                        },
                        {
                            type: "boolean",
                            key: "lineActive",
                            displayer: "Line Active",
                            value: true,
                        },
                        {
                            type: "boolean",
                            key: "dotActive",
                            displayer: "Dot Active",
                            value: true,
                        },
                    ]
                },
                {
                    type: "object",
                    key: "item",
                    displayer: "Item",
                    value: [
                        {
                            type: "media",
                            key: "media",
                            displayer: "Media",
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                            value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/680f8a2bc1ef0f002c967e7e?alt=media&timestamp=1745848879366",
                            },
                        },
                        {
                            type: "boolean",
                            key: "overlay",
                            displayer: "Overlay",
                            value: false,
                        },
                        {
                            type: "string",
                            key: "year",
                            displayer: "Year",
                            value: "1960",
                        },
                        {
                            type: "string",
                            key: "subtitle",
                            displayer: "Subtitle",
                            value: "THE PROGRESS",
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "FACTORY ESTABLISHED",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
                        },
                        {
                            type: "boolean",
                            key: "rowReverse",
                            displayer: "Row Reverse",
                            value: true,
                        },
                        {
                            type: "boolean",
                            key: "middleLineActive",
                            displayer: "Middle Line Active",
                            value: true,
                        },
                        {
                            type: "boolean",
                            key: "lineActive",
                            displayer: "Line Active",
                            value: true,
                        },
                        {
                            type: "boolean",
                            key: "dotActive",
                            displayer: "Dot Active",
                            value: true,
                        },
                    ]
                }
            ]
        })
    }

    static getName(): string {
        return "About 7";
    }

    render() {
        const items = this.castToObject<ItemType[]>("items");
        const backgroundImage = this.castToObject<BackgroundImageType>("background-image");
        const bgMedia = backgroundImage?.image;
        const isBackgroundImageExist = !!bgMedia;

        const subtitleStr = this.castToString(this.getPropValue("subtitle"));
        const titleStr = this.castToString(this.getPropValue("title"));
        const descriptionStr = this.castToString(this.getPropValue("description"));
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

        const hasValidButtons = buttons.some((button) => this.castToString(button.text));
        const hasTopContent = subtitleStr || titleStr || descriptionStr || hasValidButtons;

        const alignment = Base.getContentAlignment();

        return (
            <Base.Container className={this.decorateCSS("container")}>
                {bgMedia && (
                    <Base.Media value={bgMedia} className={this.decorateCSS("background-media-element")} />
                )}
                {backgroundImage?.overlay && bgMedia && (
                    <div className={this.decorateCSS("background-overlay")} />
                )}
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {hasTopContent && (
                        <Base.VerticalContent className={this.decorateCSS("top-content")}>
                            {subtitleStr && (
                                <Base.SectionSubTitle className={`${this.decorateCSS("top-subtitle")} ${isBackgroundImageExist && this.decorateCSS("with-image")}`}>
                                    {this.getPropValue("subtitle")}
                                </Base.SectionSubTitle>
                            )}
                            {titleStr && (
                                <Base.SectionTitle className={`${this.decorateCSS("top-title")} ${isBackgroundImageExist && this.decorateCSS("with-image")}`}>
                                    {this.getPropValue("title")}
                                </Base.SectionTitle>
                            )}
                            {descriptionStr && (
                                <Base.SectionDescription className={`${this.decorateCSS("top-description")} ${isBackgroundImageExist && this.decorateCSS("with-image")}`}>
                                    {this.getPropValue("description")}
                                </Base.SectionDescription>
                            )}
                            {hasValidButtons && (
                                <div className={this.decorateCSS("buttons-container")}>
                                    {buttons.map((button: INPUTS.CastedButton, index: number) => {
                                        if (!this.castToString(button.text)) return null;

                                        return (
                                            <ComposerLink key={index} path={button.url}>
                                                <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                                                    <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                                                </Base.Button>
                                            </ComposerLink>
                                        );
                                    })}
                                </div>
                            )}
                        </Base.VerticalContent>
                    )}
                    {items.map((item, index: number) => {
                        return (
                            <div className={`${this.decorateCSS("items-wrapper")} ${item.rowReverse && this.decorateCSS("row-reverse")} ${alignment === "center" && this.decorateCSS("center-alignment")}`} key={index}>
                                <div className={this.decorateCSS("left-container")}>
                                    {item.media && (
                                        <div className={this.decorateCSS("image-wrapper")}>
                                            <Base.Media
                                                value={item.media}
                                                className={this.decorateCSS("image")}
                                            />
                                            {item.overlay && (
                                                <div className={this.decorateCSS("overlay")} />
                                            )}
                                        </div>
                                    )}
                                </div>
                                {(item.lineActive || item.dotActive || item.middleLineActive || this.castToString(item.year)) && (
                                    <div className={this.decorateCSS("middle-container")}>
                                        {item.lineActive && (<div className={this.decorateCSS("line-wrapper")}><div className={`${this.decorateCSS("line")} ${!isBackgroundImageExist && (this.decorateCSS("without-image"))}`}></div></div>)}
                                        {item.dotActive && (
                                            <div className={this.decorateCSS("dot-wrapper")}>
                                                <div className={`${this.decorateCSS("dot")} ${!isBackgroundImageExist && this.decorateCSS("without-image")}`}></div>
                                            </div>
                                        )}
                                        {(item.middleLineActive || this.castToString(item.year)) && (
                                            <div className={`${this.decorateCSS("middle-line-and-year")} ${item.rowReverse && this.decorateCSS("row-reverse")}}`}>
                                                <div className={`${this.decorateCSS("line-and-year")} ${item.rowReverse && this.decorateCSS("row-reverse")}}`}>
                                                    {item.middleLineActive && (<div className={`${this.decorateCSS("middle-line")} ${!isBackgroundImageExist && (this.decorateCSS("without-image"))}`}></div>)}
                                                    {this.castToString(item.year) && (<div className={`${this.decorateCSS("year")} ${!item.middleLineActive && (this.decorateCSS("without-middle-line"))} ${!isBackgroundImageExist && this.decorateCSS("without-image")}`}>{item.year}</div>)}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                                {(this.castToString(item.subtitle) || this.castToString(item.title) || this.castToString(item.description)) && (
                                    <Base.VerticalContent className={`${this.decorateCSS("right-container")} ${item.rowReverse ? this.decorateCSS("row-reverse") : ""}`}>
                                        {this.castToString(item.subtitle) && (<Base.H3 className={`${this.decorateCSS("item-subtitle")} ${isBackgroundImageExist && this.decorateCSS("with-image")}`}>{item.subtitle}</Base.H3>)}
                                        {this.castToString(item.title) && (<Base.H2 className={`${this.decorateCSS("item-title")} ${isBackgroundImageExist && this.decorateCSS("with-image")}`}>{item.title}</Base.H2>)}
                                        {this.castToString(item.description) && (<Base.SectionDescription className={`${this.decorateCSS("item-description")} ${isBackgroundImageExist && this.decorateCSS("with-image")}`}>{item.description}</Base.SectionDescription>)}
                                    </Base.VerticalContent>
                                )}
                            </div>
                        )
                    })}
                </Base.MaxContent>
            </Base.Container>
        );
    }
}
export default About7;
