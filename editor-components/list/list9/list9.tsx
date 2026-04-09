import * as React from "react";
import { BaseList, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./list9.module.scss";

import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type CardItem = {
    icon: TypeMediaInputValue;
    image: TypeMediaInputValue;
    subtitle: React.JSX.Element;
    title: React.JSX.Element;
    description: React.JSX.Element;
    buttons: INPUTS.CastedButton[];
};

class List9 extends BaseList {
    constructor(props?: any) {
        super(props, styles);

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
            value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
        });
        this.addProp({
            type: "array",
            key: "cards",
            displayer: "Cards",
            value: [
                {
                    type: "object",
                    key: "card",
                    displayer: "Card Item",
                    value: [
                        {
                            type: "media",
                            key: "icon",
                            displayer: "Icon",
                            value: {
                                type: "icon",
                                name: "LiaBicycleSolid",
                            },
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                        },
                        {
                            type: "string",
                            key: "subtitle",
                            displayer: "Subtitle",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "CREATE AMAZING DESING WITH MINT THEME",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value:
                                "Creating a higher spacing for people through a unique campaigns.",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Media",
                            value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b814bd2970002c6285a5?alt=media&timestamp=1719561551671",
                            },
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                        },
                        {
                            type: "array",
                            key: "buttons",
                            displayer: "Buttons",
                            value: [
                                INPUTS.BUTTON("button", "Button", "", "", null, null, "White"),
                            ],
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card Item",
                    value: [
                        {
                            type: "media",
                            key: "icon",
                            displayer: "Icon",
                            value: {
                                type: "icon",
                                name: "FaDog",
                            },
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                        },
                        {
                            type: "string",
                            key: "subtitle",
                            displayer: "Subtitle",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "WE CRAFT BEAUTIFUL & AWESOME THEMES",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value:
                                "Creating a higher spacing for people through a unique campaigns.",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Media",
                            value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b814bd2970002c6285a4?alt=media&timestamp=1719561551671",
                            },
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                        },
                        {
                            type: "array",
                            key: "buttons",
                            displayer: "Buttons",
                            value: [
                                INPUTS.BUTTON("button", "Button", "", "", null, null, "White"),
                            ],
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card Item",
                    value: [
                        {
                            type: "media",
                            key: "icon",
                            displayer: "Icon",
                            value: {
                                type: "icon",
                                name: "FaHtml5",
                            },
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                        },
                        {
                            type: "string",
                            key: "subtitle",
                            displayer: "Subtitle",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "READY TO START YOUR NEXT WEB PROJECT NOW?",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value:
                                "Creating a higher spacing for people through a unique campaigns.",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Media",
                            value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b814bd2970002c6285a3?alt=media&timestamp=1719561551671",
                            },
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                        },
                        {
                            type: "array",
                            key: "buttons",
                            displayer: "Buttons",
                            value: [
                                INPUTS.BUTTON("button", "Button", "", "", null, null, "White"),
                            ],
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card Item",
                    value: [
                        {
                            type: "media",
                            key: "icon",
                            displayer: "Icon",
                            value: {
                                type: "icon",
                                name: "RiPaintBrushFill",
                            },
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                        },
                        {
                            type: "string",
                            key: "subtitle",
                            displayer: "Subtitle",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "WE BELIEVE IN THE POWER OF GREAT DESIGN",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value:
                                "Creating a higher spacing for people through a unique campaigns.",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Media",
                            value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b814bd2970002c6285a6?alt=media&timestamp=1719561551671",
                            },
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                        },
                        {
                            type: "array",
                            key: "buttons",
                            displayer: "Buttons",
                            value: [
                                INPUTS.BUTTON("button", "Button", "", "", null, null, "White"),
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

        this.addProp({
            type: "boolean",
            key: "overlay",
            displayer: "Overlay",
            value: false,
        });

        this.addProp({
            type: "boolean",
            key: "gradientOverlay",
            displayer: "Gradient Overlay",
            value: true,
        });

        this.addProp({
            type: "multiSelect",
            key: "hoverAnimation",
            displayer: "Hover Animation Style",
            value: ["animate1", "animate3", "animate5"],
            additionalParams: {
                selectItems: ["animate1", "animate2", "animate3", "animate4", "animate5"]
            }
        });
    }

    static getName(): string {
        return "List 9";
    }

    render() {
        const titleExist = this.castToString(this.getPropValue("title"));
        const subtitleExist = this.castToString(this.getPropValue("subtitle"));
        const descriptionExist = this.castToString(this.getPropValue("description"));

        const cards = this.castToObject<CardItem[]>("cards");
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

        const imageOverlay = this.getPropValue("overlay");
        const gradientOverlay = this.getPropValue("gradientOverlay");

        const alignment = Base.getContentAlignment();
        const isCenterAlignment = alignment === "center";

        const headerButtons = buttons.filter((button: INPUTS.CastedButton) => {
            const buttonTextExist = this.castToString(button.text);
            const buttonIconExist = button.icon && button.icon.name;
            return buttonTextExist || buttonIconExist;
        });

        const hasHeader = subtitleExist || titleExist || descriptionExist || headerButtons.length > 0;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {hasHeader && (
                        <Base.VerticalContent
                            className={`${this.decorateCSS("header-section")} ${isCenterAlignment ? this.decorateCSS("align-center") : ""}`}
                        >
                            {subtitleExist && (
                                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                                    {this.getPropValue("subtitle")}
                                </Base.SectionSubTitle>
                            )}
                            {titleExist && (
                                <Base.SectionTitle className={this.decorateCSS("header-title")}>
                                    {this.getPropValue("title")}
                                </Base.SectionTitle>
                            )}
                            {descriptionExist && (
                                <Base.SectionDescription className={this.decorateCSS("description")}>
                                    {this.getPropValue("description")}
                                </Base.SectionDescription>
                            )}
                            {headerButtons.length > 0 && (
                                <div className={this.decorateCSS("button-wrapper")}>
                                    {headerButtons.map((button: INPUTS.CastedButton, index: number) => {
                                        const buttonTextExist = this.castToString(button.text);
                                        const buttonIconExist = button.icon && button.icon.name;

                                        return (
                                            <ComposerLink key={index} path={button.url}>
                                                <Base.Button
                                                    buttonType={button.type}
                                                    className={this.decorateCSS("button")}
                                                >
                                                    {buttonTextExist && (
                                                        <Base.P className={this.decorateCSS("button-text")}>
                                                            {button.text}
                                                        </Base.P>
                                                    )}
                                                    {buttonIconExist && (
                                                        <Base.Media
                                                            className={this.decorateCSS("button-icon")}
                                                            value={button.icon!}
                                                        />
                                                    )}
                                                </Base.Button>
                                            </ComposerLink>
                                        );
                                    })}
                                </div>
                            )}
                        </Base.VerticalContent>
                    )}
                    <Base.ListGrid
                        gridCount={{ pc: this.getPropValue("itemCount"), tablet: 4, phone: 1 }}
                        className={this.decorateCSS("grid-container")}
                    >
                        {cards.map(
                            (card: CardItem, indexCard: number) => {
                                const cardTitleExist = this.castToString(card.title);
                                const cardSubtitleExist = this.castToString(card.subtitle);
                                const cardDescriptionExist = this.castToString(card.description);
                                const iconExist = card.icon && (card.icon.name || card.icon.url);
                                const imageExist = card.image && (card.image.name || card.image.url);
                                const cardButtons = card.buttons || [];
                                const hasValidCardButtons = cardButtons.some((btn: INPUTS.CastedButton) => this.castToString(btn.text) || (btn.icon && btn.icon.name));

                                if (!cardTitleExist && !cardDescriptionExist && !iconExist && !imageExist) return null;

                                return (
                                    <div
                                        key={indexCard}
                                        className={this.decorateCSS("card")}
                                        data-animation={this.getPropValue("hoverAnimation").join(" ")}
                                        tabIndex={0}
                                    >
                                        <div className={this.decorateCSS("image-container")}>
                                            {imageExist && (
                                                <Base.Media
                                                    className={`${this.decorateCSS("image")} ${this.decorateCSS("media-el")}`}
                                                    value={card.image}
                                                />
                                            )}
                                            {imageOverlay && (
                                                <div className={this.decorateCSS("overlay")} />
                                            )}
                                            {gradientOverlay && <div className={this.decorateCSS("gradient-overlay")} />}
                                        </div>
                                        <Base.VerticalContent
                                            className={this.decorateCSS("card-content")}
                                        >
                                            {iconExist && (
                                                <Base.Media
                                                    value={card.icon}
                                                    className={`${this.decorateCSS("icon")} ${this.decorateCSS("media-el")}`}
                                                />
                                            )}
                                            {cardSubtitleExist && (
                                                <Base.H5 className={this.decorateCSS("card-subtitle")}>
                                                    {card.subtitle}
                                                </Base.H5>
                                            )}
                                            {cardTitleExist && (
                                                <Base.H4 className={this.decorateCSS("card-title")}>
                                                    {card.title}
                                                </Base.H4>
                                            )}
                                            {cardDescriptionExist && (
                                                <Base.P className={this.decorateCSS("card-description")}>
                                                    {card.description}
                                                </Base.P>
                                            )}
                                            {hasValidCardButtons && (
                                                <div className={this.decorateCSS("card-button-container")}>
                                                    {cardButtons.map((btn: INPUTS.CastedButton, btnIndex: number) => {
                                                        const btnText = this.castToString(btn.text);
                                                        const btnIconExist = btn.icon && btn.icon.name;
                                                        if (!btnText && !btnIconExist) return null;
                                                        return (
                                                            <ComposerLink key={btnIndex} path={btn.url}>
                                                                <Base.Button buttonType={btn.type} className={this.decorateCSS("card-button")}>
                                                                    {btnText && <Base.P className={this.decorateCSS("card-button-text")}>{btn.text}</Base.P>}
                                                                    {btnIconExist && <Base.Media className={this.decorateCSS("card-button-icon")} value={btn.icon!} />}
                                                                </Base.Button>
                                                            </ComposerLink>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </Base.VerticalContent>
                                    </div>
                                );
                            }
                        )}
                    </Base.ListGrid>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default List9;
