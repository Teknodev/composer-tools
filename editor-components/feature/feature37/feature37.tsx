import * as React from "react";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./feature37.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Card = {
    media: TypeMediaInputValue;
    title: React.JSX.Element;
    description: React.JSX.Element;
};

type Background = {
    "cover-image": TypeMediaInputValue;
    overlay: boolean;
};

class Feature37 extends BaseFeature {
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
            value: "Why Choose Us?",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "",
        });

        this.addProp({
            type: "object",
            key: "background",
            displayer: "Media",
            value: [
                {
                    type: "media",
                    key: "cover-image",
                    displayer: "Media",
                    value: {
                        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/694e36c0f959f6002d79b66c?alt=media",
                        type: "image",
                    },
                    additionalParams: { availableTypes: ["image", "video"] }
                },
                {
                    type: "boolean",
                    key: "overlay",
                    displayer: "Overlay",
                    value: false,
                }
            ]
        });

        this.addProp({
            type: "array",
            key: "cards",
            displayer: "Cards",
            value: [
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "media",
                            key: "media",
                            displayer: "Media",
                            additionalParams: { availableTypes: ["icon", "image"] },
                            value: { type: "icon", name: "MdDesignServices" },
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Perfect Design"
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world."
                        }
                    ]
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "media",
                            key: "media",
                            displayer: "Media",
                            additionalParams: { availableTypes: ["icon", "image"] },
                            value: { type: "icon", name: "BiSolidLike" },
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Good Quality"
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world."
                        }
                    ]
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "media",
                            key: "media",
                            displayer: "Media",
                            additionalParams: { availableTypes: ["icon", "image"] },
                            value: { type: "icon", name: "FaCarRear" },
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Free Test-Drive"
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world."
                        }
                    ]
                },
            ]
        });

        this.addProp({
            type: "number",
            key: "itemCount",
            displayer: "Item Count in a Row",
            value: 1,
        });

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
        });
    }

    static getName(): string {
        return "Feature 37";
    }

    render() {
        const background = this.castToObject<Background>("background");
        const image = background?.["cover-image"];
        const isImageExist = !!image?.url;
        const enableOverlay = background?.overlay;
        const subtitle = this.castToString(this.getPropValue("subtitle"));
        const title = this.castToString(this.getPropValue("title"));
        const description = this.castToString(this.getPropValue("description"));
        const cards = this.castToObject<Card[]>("cards");
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
        const visibleButtons = buttons.filter(btn => this.castToString(btn.text));
        const hasContent = subtitle || title || description;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {hasContent && (
                        <Base.VerticalContent className={this.decorateCSS("text-content")}>
                            {subtitle && (<Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>)}
                            {title && (<Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>)}
                            {description && (<Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>)}
                        </Base.VerticalContent>
                    )}
                    <div className={this.decorateCSS("cards-wrapper")}>
                        {cards?.length > 0 && (
                            <Base.ListGrid
                                className={`${this.decorateCSS("cards-content")} ${!isImageExist && this.decorateCSS("cards-full-width")}`}
                                gridCount={{ pc: this.getPropValue("itemCount"), tablet: 1, phone: 1 }}
                            >
                                {cards.map((card: Card, index: number) => {
                                    const titleExist = this.castToString(card.title);
                                    const descExist = this.castToString(card.description);
                                    const isImage = card.media?.type === "image";

                                    return (!titleExist && !descExist && !card.media) || (
                                        <div key={index} className={this.decorateCSS("card-container")}>
                                            {card.media && (
                                                <Base.Media value={card.media} className={`${this.decorateCSS("card-icon")} ${isImage && this.decorateCSS("is-image")}`} />
                                            )}
                                            <Base.VerticalContent className={this.decorateCSS("card-content")}>
                                                {titleExist && (<Base.H5 className={this.decorateCSS("card-title")}>{card.title}</Base.H5>)}
                                                {descExist && (<Base.P className={this.decorateCSS("card-description")}>{card.description}</Base.P>)}
                                            </Base.VerticalContent>
                                        </div>
                                    );
                                })}
                            </Base.ListGrid>
                        )}
                        {isImageExist && (
                            <div className={`${this.decorateCSS("right-content")} ${!cards?.length && this.decorateCSS("image-full-width")}`}>
                                <div className={this.decorateCSS("image-wrapper")}>
                                    <Base.Media value={image} className={this.decorateCSS("image")} />
                                    {enableOverlay && <div className={this.decorateCSS("overlay")}></div>}
                                </div>
                            </div>
                        )}
                    </div>
                    {visibleButtons.length > 0 && (
                        <div className={this.decorateCSS("button-container")}>
                            {visibleButtons.map((item: INPUTS.CastedButton, index: number) => {
                                return this.castToString(item.text) && (
                                    <ComposerLink key={`button-${index}`} path={item.url}>
                                        <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                                            <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                                        </Base.Button>
                                    </ComposerLink>
                                );
                            })}
                        </div>
                    )}
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Feature37;