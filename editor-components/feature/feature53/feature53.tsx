import * as React from "react";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./feature53.module.scss";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type ICard = {
    cardLabel: string;
    cardSubtitle: string;
    cardTitle: string;
    cardDescription: string;
    cardMedia: {
        media?: TypeMediaInputValue;
        overlay?: boolean;
    };
    cardButtons: INPUTS.CastedButton[];
};

class Feature53 extends BaseFeature {
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
            value: "How we can help you",
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
                    displayer: "Card",
                    value: [
                        {
                            type: "string",
                            key: "cardLabel",
                            displayer: "Label",
                            value: "Analytics",
                        },
                        {
                            type: "string",
                            key: "cardSubtitle",
                            displayer: "Subtitle",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "cardTitle",
                            displayer: "Title",
                            value: "Smart data analytics",
                        },
                        {
                            type: "string",
                            key: "cardDescription",
                            displayer: "Description",
                            value:
                                "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.\n\nNanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
                        },
                        {
                            type: "object",
                            key: "cardMedia",
                            displayer: "Media",
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
                                        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/692da708496aa1002ca4c1c1?alt=media",
                                    },
                                },
                                {
                                    type: "boolean",
                                    key: "overlay",
                                    displayer: "Overlay",
                                    value: false,
                                },
                            ],
                        },
                        {
                            type: "array",
                            key: "cardButtons",
                            displayer: "Buttons",
                            value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
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
                            key: "cardLabel",
                            displayer: "Label",
                            value: "Web design",
                        },
                        {
                            type: "string",
                            key: "cardSubtitle",
                            displayer: "Subtitle",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "cardTitle",
                            displayer: "Title",
                            value: "Visual component of the project",
                        },
                        {
                            type: "string",
                            key: "cardDescription",
                            displayer: "Description",
                            value: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
                        },
                        {
                            type: "object",
                            key: "cardMedia",
                            displayer: "Media",
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
                                        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/692da716496aa1002ca4c1da?alt=media",
                                    },
                                },
                                {
                                    type: "boolean",
                                    key: "overlay",
                                    displayer: "Overlay",
                                    value: false,
                                },
                            ],
                        },
                        {
                            type: "array",
                            key: "cardButtons",
                            displayer: "Buttons",
                            value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
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
                            key: "cardLabel",
                            displayer: "Label",
                            value: "Animation",
                        },
                        {
                            type: "string",
                            key: "cardSubtitle",
                            displayer: "Subtitle",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "cardTitle",
                            displayer: "Title",
                            value: "CSS and JavaScript animation",
                        },
                        {
                            type: "string",
                            key: "cardDescription",
                            displayer: "Description",
                            value: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.User generated content in real-time will have multiple touchpoints for offshoring.",
                        },
                        {
                            type: "object",
                            key: "cardMedia",
                            displayer: "Media",
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
                                        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/692da722496aa1002ca4c1e8?alt=media",
                                    },
                                },
                                {
                                    type: "boolean",
                                    key: "overlay",
                                    displayer: "Overlay",
                                    value: false,
                                },
                            ],
                        },
                        {
                            type: "array",
                            key: "cardButtons",
                            displayer: "Buttons",
                            value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
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
                            key: "cardLabel",
                            displayer: "Label",
                            value: "Marketing",
                        },
                        {
                            type: "string",
                            key: "cardSubtitle",
                            displayer: "Subtitle",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "cardTitle",
                            displayer: "Title",
                            value: "Tools for every business",
                        },
                        {
                            type: "string",
                            key: "cardDescription",
                            displayer: "Description",
                            value: "Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail.Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.",
                        },
                        {
                            type: "object",
                            key: "cardMedia",
                            displayer: "Media",
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
                                        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/692da72d496aa1002ca4c1f9?alt=media",
                                    },
                                },
                                {
                                    type: "boolean",
                                    key: "overlay",
                                    displayer: "Overlay",
                                    value: false,
                                },
                            ],
                        },
                        {
                            type: "array",
                            key: "cardButtons",
                            displayer: "Buttons",
                            value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
                        },
                    ],
                },
            ],
        });

        this.addProp({
            type: "boolean",
            key: "showMobileLines",
            displayer: "Mobile Lines",
            value: true,
        });

        this.addProp({
            type: "media",
            key: "mobileIcon",
            displayer: "Mobile Icon",
            additionalParams: {
                availableTypes: ["icon", "image"],
            },
            value: {
                type: "icon",
                name: "MdKeyboardArrowDown",
            },
        });

        this.setComponentState("activeCard", -1);
    }

    setActiveCard(index: number) {
        const currentActive = this.getComponentState("activeCard");
        this.setComponentState("activeCard", currentActive === index ? -1 : index);
    }

    setDesktopCard(index: number) {
        this.setComponentState("activeCard", index);
    }

    static getName(): string {
        return "Feature 53";
    }

    render() {
        const subtitle = this.castToString(this.getPropValue("subtitle"));
        const title = this.castToString(this.getPropValue("title"));
        const description = this.castToString(this.getPropValue("description"));

        const cards = this.castToObject<ICard[]>("cards") || [];
        const headingButtons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
        const mobileIcon = this.getPropValue("mobileIcon");
        const activeCard = this.getComponentState("activeCard") ?? -1;
        const desktopActive = activeCard === -1 ? 0 : activeCard;

        const hasMediaValue = (value?: TypeMediaInputValue) =>
            !!value && (("url" in value && value.url) || ("name" in value && value.name));
        const hasHeadingButtons = headingButtons.some((btn) => this.castToString(btn.text));
        const mobileIconExist = hasMediaValue(mobileIcon);
        const mobileIconIsImage = mobileIcon?.type === "image";

        const filteredCards = cards.filter((card: ICard) => {
            const cardMedia = card.cardMedia;
            const mediaValue = cardMedia?.media as TypeMediaInputValue;
            const hasMedia = hasMediaValue(mediaValue);
            const cardButtons = card.cardButtons || [];
            const hasAnyCardButton = cardButtons.some((btn) => this.castToString(btn.text));

            const itemTitle = this.castToString(card.cardTitle);
            const itemSubtitle = this.castToString(card.cardSubtitle);
            const itemDescription = this.castToString(card.cardDescription);

            return this.castToString(card.cardLabel) || itemTitle || itemSubtitle || itemDescription || hasMedia || hasAnyCardButton;
        });

        const viewType = Base.getViewType();
        const subtitleType = Base.getSectionSubTitleType();
        const hasAnyCardLabel = filteredCards.some((card: ICard) => this.castToString(card.cardLabel));

        return (
            <Base.Container className={`${this.decorateCSS("container")} ${this.decorateCSS(viewType)}`}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {(subtitle || title || description || hasHeadingButtons) && (
                        <Base.VerticalContent className={`${this.decorateCSS("heading")} ${this.getPropValue("showMobileLines") === false ? this.decorateCSS("no-lines") : ""}`}>
                            {subtitle && (
                                <Base.SectionSubTitle className={subtitleType === "badge" ? this.decorateCSS("subtitle-badge") : this.decorateCSS("subtitle")}>
                                    {this.getPropValue("subtitle")}
                                </Base.SectionSubTitle>
                            )}
                            {title && (
                                <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>
                            )}
                            {description && (
                                <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>
                            )}
                            {hasHeadingButtons && (
                                <div className={this.decorateCSS("button-container")}>
                                    {headingButtons.map((button, btnIndex) => {
                                        const buttonTextExist = this.castToString(button.text);
                                        return (
                                            buttonTextExist && (
                                                <ComposerLink key={`feature53-heading-btn-${btnIndex}`} path={button.url}>
                                                    <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                                                        <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                                                    </Base.Button>
                                                </ComposerLink>
                                            )
                                        );
                                    })}
                                </div>
                            )}
                        </Base.VerticalContent>
                    )}
                    {filteredCards.length > 0 && (
                        <Base.VerticalContent className={`${this.decorateCSS("tabs")} ${activeCard === -1 ? this.decorateCSS("tablet-closed-default") : ""} ${this.getPropValue("showMobileLines") === false ? this.decorateCSS("no-lines") : ""}`}>
                            {hasAnyCardLabel && (
                                <div className={this.decorateCSS("tab-buttons")}>
                                    {filteredCards.map((card: ICard, index: number) => {
                                        const cardLabelExist = this.castToString(card.cardLabel);
                                        return cardLabelExist && (
                                            <Base.H5
                                                key={`feature53-tab-btn-${index}`}
                                                className={`${this.decorateCSS("tab-button")} ${desktopActive === index ? this.decorateCSS("active") : ""}`}
                                                onClick={() => this.setDesktopCard(index)}
                                            >
                                                {card.cardLabel}
                                            </Base.H5>
                                        );
                                    })}
                                </div>
                            )}

                            <Base.VerticalContent className={this.decorateCSS("tab-content-area")}>
                                {filteredCards.map((card: ICard, index: number) => {
                                    const cardLabelExist = this.castToString(card.cardLabel);
                                    const cardMedia = card.cardMedia;
                                    const mediaValue = cardMedia?.media as TypeMediaInputValue;
                                    const overlayEnabled = cardMedia?.overlay ?? false;
                                    const hasMedia = hasMediaValue(mediaValue);

                                    const cardButtons = card.cardButtons || [];
                                    const hasAnyButton = cardButtons.some((btn) => this.castToString(btn.text));

                                    const itemSubtitleExist = this.castToString(card.cardSubtitle);
                                    const itemTitleExist = this.castToString(card.cardTitle);
                                    const itemDescriptionExist = this.castToString(card.cardDescription);
                                    const hasAnyContent = !!(itemSubtitleExist || itemTitleExist || itemDescriptionExist || hasAnyButton);
                                    const mediaOnly = !hasAnyContent && hasMedia;

                                    return (
                                        <div key={`feature53-tab-${index}`} className={`${this.decorateCSS("tab")} ${desktopActive === index ? this.decorateCSS("active") : ""} ${mediaOnly ? this.decorateCSS("media-only") : ""}`} >
                                            {(cardLabelExist || mobileIconExist) && (
                                                <Base.H5 className={`${this.decorateCSS("tab-header")} ${activeCard === index ? this.decorateCSS("active") : ""}`} onClick={() => this.setActiveCard(index)} >
                                                    {cardLabelExist && (
                                                        <Base.P className={this.decorateCSS("tab-header-title")}>{card.cardLabel}</Base.P>
                                                    )}
                                                    {mobileIconExist && (
                                                        <Base.Media
                                                            value={mobileIcon}
                                                            className={`${this.decorateCSS("tab-header-icon")} ${activeCard === index ? this.decorateCSS("active") : ""} ${mobileIconIsImage ? this.decorateCSS("is-image") : ""}`}
                                                        />
                                                    )}
                                                </Base.H5>
                                            )}
                                            {(hasAnyContent || mediaOnly) && (
                                                <div className={this.decorateCSS("tab-content")}>
                                                    {hasAnyContent && (
                                                        <Base.VerticalContent className={this.decorateCSS("content")}>
                                                            {itemSubtitleExist && (
                                                                <Base.H5 className={this.decorateCSS("card-subtitle")}>{card.cardSubtitle}</Base.H5>
                                                            )}
                                                            {itemTitleExist && (
                                                                <Base.H4 className={this.decorateCSS("card-title")}>{card.cardTitle}</Base.H4>
                                                            )}
                                                            {itemDescriptionExist && (
                                                                <Base.P className={this.decorateCSS("card-description")}>{card.cardDescription}</Base.P>
                                                            )}
                                                            {hasAnyButton && (
                                                                <div className={this.decorateCSS("card-button-container")}>
                                                                    {cardButtons.map((button, btnIndex) => {
                                                                        const buttonTextExist = this.castToString(button.text);
                                                                        return (
                                                                            buttonTextExist && (
                                                                                <ComposerLink key={`feature53-btn-${index}-${btnIndex}`} path={button.url}>
                                                                                    <Base.Button buttonType={button.type} className={this.decorateCSS("card-button")}>
                                                                                        <Base.P className={this.decorateCSS("card-button-text")}>{button.text}</Base.P>
                                                                                    </Base.Button>
                                                                                </ComposerLink>
                                                                            )
                                                                        );
                                                                    })}
                                                                </div>
                                                            )}
                                                        </Base.VerticalContent>
                                                    )}
                                                    {hasMedia && (
                                                        <div className={this.decorateCSS("media-container")}>
                                                            <Base.Media value={mediaValue} className={this.decorateCSS("media")} />
                                                            {overlayEnabled && <div className={this.decorateCSS("overlay")} />}
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </Base.VerticalContent>
                        </Base.VerticalContent>
                    )}
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Feature53;