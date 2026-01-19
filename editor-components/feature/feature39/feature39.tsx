import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature39.module.scss";
import { Base, TypeButton } from "../../../composer-base-components/base/base";
import { TypeMediaInputValue } from "../../EditorComponent";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type ButtonTypeObj = {
    text: React.JSX.Element;
    url: string;
    type: TypeButton;
}

interface Section {
    title: React.JSX.Element;
    text: React.JSX.Element;
}

interface ProductCard {
    title: React.JSX.Element;
    image: TypeMediaInputValue;
    sections: Section[];
    buttons: ButtonTypeObj[];
}

class Feature39 extends BaseFeature {
    constructor(props?: Record<string, unknown>) {
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
            value: "Thousands of Agencies Have Chosen Duda as Their White Label Web Design Platform",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "",
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
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Digital Solutions Provider"
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Media",
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                            value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6964a92af959f6002d8277e2?alt=media" }
                        },
                        {
                            type: "array",
                            key: "sections",
                            displayer: "Sections",
                            value: [
                                {
                                    type: "object",
                                    key: "section",
                                    displayer: "Section",
                                    value: [
                                        { type: "string", key: "title", displayer: "Title", value: "The Impact:" },
                                        { type: "string", key: "text", displayer: "Text", value: "Grew their customer base by 82%; shrank site build times by 40%; increased revenue with a restructured business model." },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "section",
                                    displayer: "Section",
                                    value: [
                                        { type: "string", key: "title", displayer: "Title", value: "How They Did it:" },
                                        { type: "string", key: "text", displayer: "Text", value: "Duda's dedicated account management team helped set tags & codes inside the platform, facilitate product flows, and offer guidance on the most efficient ways to use the platform" },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "section",
                                    displayer: "Section",
                                    value: [
                                        { type: "string", key: "title", displayer: "Title", value: "Favorite Duda Tool:" },
                                        { type: "string", key: "text", displayer: "Text", value: "Drag and drop editor for easy, client-managed design changes." },
                                    ],
                                },
                            ],
                        },
                        {
                            type: "array",
                            key: "buttons",
                            displayer: "Buttons",
                            value: [INPUTS.BUTTON("button", "Button", "Start a Free Trial", "", null, null, "Primary")],
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Award-Winning Marketing Firm"
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Media",
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                            value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6964a94ff959f6002d827822?alt=media" }
                        },
                        {
                            type: "array",
                            key: "sections",
                            displayer: "Sections",
                            value: [
                                {
                                    type: "object",
                                    key: "section",
                                    displayer: "Section",
                                    value: [
                                        { type: "string", key: "title", displayer: "Title", value: "The Impact:" },
                                        { type: "string", key: "text", displayer: "Text", value: "Reduced average site build times by 75%; increased revenue with expanded services; improved lifetime customer value." },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "section",
                                    displayer: "Section",
                                    value: [
                                        { type: "string", key: "title", displayer: "Title", value: "How They Did it:" },
                                        { type: "string", key: "text", displayer: "Text", value: "Successful team onboarding in 2–3 days, compared to 2–3 weeks on WordPress; design tools that reduced development work from 15 days to 5 hours!" },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "section",
                                    displayer: "Section",
                                    value: [
                                        { type: "string", key: "title", displayer: "Title", value: "Favorite Duda Tool:" },
                                        { type: "string", key: "text", displayer: "Text", value: "Personalization engine for serving targeted content by audience." },
                                    ],
                                },
                            ],
                        },
                        {
                            type: "array",
                            key: "buttons",
                            displayer: "Buttons",
                            value: [INPUTS.BUTTON("button", "Button", "Start a Free Trial", "", null, null, "Primary")],
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Digital Marketing Leader"
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Media",
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                            value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6964a966f959f6002d8278af?alt=media" }
                        },
                        {
                            type: "array",
                            key: "sections",
                            displayer: "Sections",
                            value: [
                                {
                                    type: "object",
                                    key: "section",
                                    displayer: "Section",
                                    value: [
                                        { type: "string", key: "title", displayer: "Title", value: "The Impact:" },
                                        { type: "string", key: "text", displayer: "Text", value: "Achieved their goals of offering a quality, industry-leading product and faster site creation & management at scale." },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "section",
                                    displayer: "Section",
                                    value: [
                                        { type: "string", key: "title", displayer: "Title", value: "How They Did it:" },
                                        { type: "string", key: "text", displayer: "Text", value: "Seamless migration of thousands of legacy websites in just a few months, using APIs to add metadata and create URL redirects." },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "section",
                                    displayer: "Section",
                                    value: [
                                        { type: "string", key: "title", displayer: "Title", value: "Favorite Duda Tool:" },
                                        { type: "string", key: "text", displayer: "Text", value: "Connected Data to prepopulate site templates with structured customer data." },
                                    ],
                                },
                            ],
                        },
                        {
                            type: "array",
                            key: "buttons",
                            displayer: "Buttons",
                            value: [INPUTS.BUTTON("button", "Button", "Start a Free Trial", "", null, null, "Primary")],
                        },
                    ],
                },
            ],
        });

        this.addProp({
            type: "boolean",
            key: "divider",
            displayer: "Divider",
            value: true,
        });
    }

    static getName(): string {
        return "Feature 39";
    }

    render() {
        const subtitleExist = this.castToString(this.getPropValue("subtitle"));
        const titleExist = this.castToString(this.getPropValue("title"));
        const descriptionExist = this.castToString(this.getPropValue("description"));
        const cards = this.castToObject<ProductCard[]>("cards");
        const divider = this.getPropValue("divider");
        const activeIndex = this.getComponentState("activeIndex") || 0;
        const hasCards = cards.some((card: ProductCard) => this.castToString(card.title));
        const hasContent = subtitleExist || titleExist || descriptionExist || hasCards;
        const hasRightContent = cards.some((card: ProductCard) =>
            card.image ||
            card.sections?.length > 0 ||
            card.buttons?.some((btn) => this.castToString(btn.text))
        );

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={`${this.decorateCSS("max-content")} ${!divider && this.decorateCSS("no-show-divider")}`}>
                    {hasContent && (
                        <div className={`${this.decorateCSS("left-content")} ${!hasRightContent && this.decorateCSS("full-width")}`}>
                            <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
                                {subtitleExist && (<Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>)}
                                {titleExist && (<Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>)}
                                {descriptionExist && (<Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>)}
                            </Base.VerticalContent>
                            {hasCards && (
                                <div className={this.decorateCSS("items-wrapper")}>
                                    {cards.map((card: ProductCard, index: number) => {
                                        const cardTitle = card.title;
                                        const isActive = activeIndex === index;
                                        return this.castToString(cardTitle) && (
                                            <Base.H5
                                                key={index}
                                                className={`${this.decorateCSS("itemTitle")} ${isActive && this.decorateCSS("active")}`}
                                                onClick={() => this.setComponentState("activeIndex", index)}
                                            >
                                                {cardTitle}
                                            </Base.H5>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    )}
                    {divider && hasContent && hasRightContent && (
                        <div className={this.decorateCSS("dividerColumn")}>
                            <div className={this.decorateCSS("dividerLine")} />
                        </div>
                    )}
                    {hasRightContent && (
                        <div className={this.decorateCSS("right-wrapper")}>
                            {cards.map((card: ProductCard, index: number) => {
                                const isActive = activeIndex === index;
                                return (
                                    <div
                                        key={index}
                                        className={`${this.decorateCSS("right-content")} ${isActive && this.decorateCSS("active-item")}`}
                                    >
                                        {card.image && (
                                            <div className={this.decorateCSS("image-wrapper")}>
                                                <Base.Media
                                                    value={card.image}
                                                    className={this.decorateCSS("itemImage")}
                                                />
                                            </div>
                                        )}
                                        {card.sections.length > 0 && (
                                            <div className={this.decorateCSS("sectionsWrapper")}>
                                                {card.sections.map((section: Section, sectionIndex: number) => {
                                                    const sectionTitle = section.title;
                                                    const sectionText = section.text;
                                                    return (sectionTitle || sectionText) && (
                                                        <Base.P key={sectionIndex} className={this.decorateCSS("section")}>
                                                            {sectionTitle && (
                                                                <span className={this.decorateCSS("sectionTitle")}>{sectionTitle}</span>
                                                            )}
                                                            {sectionText && (
                                                                <span className={this.decorateCSS("sectionText")}>{sectionText}</span>
                                                            )}
                                                        </Base.P>
                                                    );
                                                })}
                                            </div>
                                        )}
                                        {(() => {
                                            const validButtons = card.buttons?.filter((btn) => this.castToString(btn.text)) || [];
                                            return validButtons.length > 0 && (
                                                <div className={this.decorateCSS("button-container")}>
                                                    {validButtons.map((buttonItem: ButtonTypeObj, buttonIndex: number) => (
                                                        <ComposerLink key={`button-${buttonIndex}`} path={buttonItem.url}>
                                                            <Base.Button buttonType={buttonItem.type} className={this.decorateCSS("button")}>
                                                                <Base.P className={this.decorateCSS("button-text")}>{buttonItem.text}</Base.P>
                                                            </Base.Button>
                                                        </ComposerLink>
                                                    ))}
                                                </div>
                                            );
                                        })()}
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Feature39;