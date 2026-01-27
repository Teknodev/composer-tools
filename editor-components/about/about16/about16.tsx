import * as React from "react";
import { BaseAbout, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./about16.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type CardItemType = {
    video: TypeMediaInputValue;
    subtitle: React.JSX.Element;
    title: React.JSX.Element;
    description: React.JSX.Element;
    icon: TypeMediaInputValue;
    navigateTo: string;
}

class About16 extends BaseAbout {
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
                            key: "video",
                            displayer: "Media",
                            additionalParams: { availableTypes: ["image", "video"] },
                            value: {
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/695dfbdff959f6002d7eac61?alt=media",
                                type: "video",
                            },
                        },
                        {
                            type: "string",
                            key: "subtitle",
                            displayer: "Subtitle",
                            value: "Supercars",
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Your Dream Drive Awaits!",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "",
                        },
                        {
                            type: "media",
                            key: "icon",
                            displayer: "Icon",
                            additionalParams: { availableTypes: ["icon", "image"] },
                            value: {
                                type: "icon",
                                name: "HiMiniArrowUpRight",
                            },
                        },
                        {
                            type: "page",
                            key: "navigateTo",
                            displayer: "Navigate To",
                            value: "",
                        },
                    ]
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "media",
                            key: "video",
                            displayer: "Media",
                            additionalParams: { availableTypes: ["image", "video"] },
                            value: {
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/695dfbb0f959f6002d7ea9e6?alt=media",
                                type: "video",
                            },
                        },
                        {
                            type: "string",
                            key: "subtitle",
                            displayer: "Subtitle",
                            value: "SUV Cars",
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Conquer The Off-Road",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "",
                        },
                        {
                            type: "media",
                            key: "icon",
                            displayer: "Icon",
                            additionalParams: { availableTypes: ["icon", "image"] },
                            value: {
                                type: "icon",
                                name: "HiMiniArrowUpRight",
                            },
                        },
                        {
                            type: "page",
                            key: "navigateTo",
                            displayer: "Navigate To",
                            value: "",
                        },
                    ]
                },
            ]
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
            type: "boolean",
            key: "enableOverlay",
            displayer: "Overlay",
            value: false,
        });

        this.addProp({
            type: "boolean",
            key: "enableAnimation",
            displayer: "Animation",
            value: true,
        });

        this.addProp({
            type: "number",
            key: "itemCount",
            displayer: "Item Count in Row",
            value: 2,
        });
    }

    static getName(): string {
        return "About 16";
    }

    render() {
        const subtitle = this.castToString(this.getPropValue("subtitle"));
        const title = this.castToString(this.getPropValue("title"));
        const description = this.castToString(this.getPropValue("description"));
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
        const textButtons = buttons.filter(btn => this.castToString(btn.text));
        const cards = this.castToObject<CardItemType[]>("cards") || [];
        const itemCount = this.getPropValue("itemCount") || 2;
        const enableOverlay = this.getPropValue("enableOverlay");
        const enableAnimation = this.getPropValue("enableAnimation");
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
                        {cards.length > 0 && (
                            <Base.ListGrid gridCount={{ pc: itemCount, tablet: 2, phone: 1 }} className={this.decorateCSS("list-container")}>
                                {cards.map((card, index) => {
                                    const cardSubtitle = this.castToString(card.subtitle);
                                    const cardTitle = this.castToString(card.title);
                                    const cardDescription = this.castToString(card.description);
                                    const isImage = card.icon?.type === "image";
                                    const hasTextDetails = cardTitle || cardDescription || cardSubtitle;
                                    const hasMedia = card.video && "url" in card.video && card.video.url;
                                    return (
                                        <div key={index} className={this.decorateCSS("list-item")}>
                                            <div className={`${this.decorateCSS("image-container")} ${enableAnimation && this.decorateCSS("animated")} ${!hasMedia && this.decorateCSS("no-media")}`}>
                                                <ComposerLink path={card.navigateTo} isFullWidth={true}>
                                                    {hasMedia && (
                                                        <Base.Media
                                                            value={card.video}
                                                            className={this.decorateCSS("image")}
                                                            autoPlay={true}
                                                            muted={true}
                                                            loop={true}
                                                            controls={false}
                                                            playsInline
                                                        />
                                                    )}
                                                    {enableOverlay && <div className={this.decorateCSS("overlay")}></div>}
                                                    <div className={this.decorateCSS("text-content")}>
                                                        {card.icon && (
                                                            <div className={this.decorateCSS("icon-wrapper")}>
                                                                <Base.Media value={card.icon} className={`${this.decorateCSS("icon")} ${isImage && this.decorateCSS("is-image")}`} />
                                                            </div>
                                                        )}
                                                        {hasTextDetails && (
                                                            <Base.VerticalContent className={this.decorateCSS("text-details")}>
                                                                {cardSubtitle && (<Base.H5 className={this.decorateCSS("card-subtitle")}>{card.subtitle}</Base.H5>)}
                                                                {cardTitle && (<Base.H4 className={this.decorateCSS("card-title")}>{card.title}</Base.H4>)}
                                                                {cardDescription && (<Base.P className={this.decorateCSS("card-description")}>{card.description}</Base.P>)}
                                                            </Base.VerticalContent>
                                                        )}
                                                    </div>
                                                </ComposerLink>
                                            </div>

                                        </div>
                                    );
                                })}
                            </Base.ListGrid>
                        )}
                        {textButtons.length > 0 && (
                            <Base.Row className={this.decorateCSS("button-container")}>
                                {buttons.map(
                                    (buttonObj, index: number) => {
                                        const buttonText = this.castToString(buttonObj.text);
                                        return buttonText && (
                                            <ComposerLink key={index} path={buttonObj.url}>
                                                <Base.Button buttonType={buttonObj.type} className={this.decorateCSS("button")}>
                                                    <Base.P className={this.decorateCSS("button-text")}>{buttonObj.text}</Base.P>
                                                </Base.Button>
                                            </ComposerLink>
                                        );
                                    }
                                )}
                            </Base.Row>
                        )}
                    </div>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default About16;