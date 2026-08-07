import * as React from "react";
import styles from "./feature21.module.scss";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type Button = {
    text: React.JSX.Element;
    url: string;
    icon: TypeMediaInputValue;
    type: string;
};

interface Card{
    media: TypeMediaInputValue;
    video: TypeMediaInputValue;
    overlay: boolean;
    subtitle: React.JSX.Element;
    title: React.JSX.Element;
    description: React.JSX.Element;
    buttons: Button[];
}

class Feature21 extends BaseFeature{
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
            value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
            ],
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
                            additionalParams: {
                                availableTypes: ["image","video"],
                            },
                            value: {
                                type: "image",
                                url: "https://irp.cdn-website.com/a8ff2f1c/dms3rep/multi/1-5b099458.png",
                            },
                        },
                        {
                            type: "media",
                            key: "video",
                            displayer: "Video",
                            additionalParams: {
                                availableTypes: ["video"],
                            },
                            value: {
                                type: "video",
                                url: "https://vid.cdn-website.com/a8ff2f1c/videos/BvvOk7HTyMD2pdYOfkpg_Menu+HP+4-v.mp4",
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
                            key: "subtitle",
                            displayer: "Subtitle",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Slash your time-to-publish",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Go from plan to published in a third of the time—days, not weeks—with time saving tools specifically built for busy professionals like yourself.",
                        },
                        {
                            type: "array",
                            key: "buttons",
                            displayer: "Buttons",
                            value: [
                                INPUTS.BUTTON("button", "Button", "Learn More", "", null, null, "Tertiary"),
                            ],
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
                            key: "media",
                            displayer: "Media",
                            additionalParams: {
                                availableTypes: ["image","video"],
                            },
                            value: {
                                type: "image",
                                url: "https://irp.cdn-website.com/a8ff2f1c/dms3rep/multi/3-235ee343.png",
                            },
                        },
                        {
                            type: "media",
                            key: "video",
                            displayer: "Video",
                            additionalParams: {
                                availableTypes: ["video"],
                            },
                            value: {
                                type: "video",
                                url: "https://vid.cdn-website.com/a8ff2f1c/videos/GuiE89lkQ8WL3gB5WLFi_AI+Assistant+v14-v.mp4",
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
                            key: "subtitle",
                            displayer: "Subtitle",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Effortlessly scale your business",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Eliminate busy work and eradicate ongoing website maintenance to scale your client base without scaling your team, costs, or workload.",
                        },
                        {
                            type: "array",
                            key: "buttons",
                            displayer: "Buttons",
                            value: [
                                INPUTS.BUTTON("button", "Button", "Learn More", "", null, null, "Tertiary"),
                            ],
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
                            key: "media",
                            displayer: "Media",
                            additionalParams: {
                                availableTypes: ["image","video"],
                            },
                            value: {
                                type: "image",
                                url: "https://irp.cdn-website.com/a8ff2f1c/dms3rep/multi/2-10548e83.png",
                            },
                        },
                        {
                            type: "media",
                            key: "video",
                            displayer: "Video",
                            additionalParams: {
                                availableTypes: ["video"],
                            },
                            value: {
                                type: "video",
                                url: "https://vid.cdn-website.com/a8ff2f1c/videos/zDaRGClBRLKKg07DvBMv_next-gen+clitn+sites+%28jewllery+website%29-v3-v.mp4",
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
                            key: "subtitle",
                            displayer: "Subtitle",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Deliver sites that perform",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Rank higher and load faster with performance metrics 51% higher than the industry average and built traffic-boosting SEO and AEO tools built right in.",
                        },
                        {
                            type: "array",
                            key: "buttons",
                            displayer: "Buttons",
                            value: [
                                INPUTS.BUTTON("button", "Button", "Learn More", "", null, null, "Tertiary"),
                            ],
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
                            key: "media",
                            displayer: "Media",
                            additionalParams: {
                                availableTypes: ["image","video"],
                            },
                            value: {
                                type: "image",
                                url: "https://irp.cdn-website.com/a8ff2f1c/dms3rep/multi/Frame+1171275408-8d5e4fe1.png",
                            },
                        },
                        {
                            type: "media",
                            key: "video",
                            displayer: "Video",
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                            value: {
                                type: "video",
                                url: "",
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
                            key: "subtitle",
                            displayer: "Subtitle",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Your experience, monetized",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Seamlessly integrate Duda into your workflows with powerful APIs and automation tools. Deliver and monetize websites, stores, and over 70 apps—all under your brand.",
                        },
                        {
                            type: "array",
                            key: "buttons",
                            displayer: "Buttons",
                            value: [
                                INPUTS.BUTTON("button", "Button", "Learn More", "", null, null, "Tertiary"),
                            ],
                        },
                    ]
                },
            ]
        });
        
        this.handleCardHover = this.handleCardHover.bind(this);
        this.handleCardLeave = this.handleCardLeave.bind(this);
        this.handleCardClick = this.handleCardClick.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    static getName(): string {
        return "Feature 21"
    }

    onComponentDidMount() {
        this.setComponentState("hoveredIndex", null);
    }

    handleCardHover = (index: number): void => {
        this.setComponentState("hoveredIndex", index);
    };

    handleCardLeave = (): void => {
        this.setComponentState("hoveredIndex", null);
    };

    handleCardClick = (index: number): void => {
        const currentHoveredIndex = this.getComponentState("hoveredIndex");
        if (currentHoveredIndex === index) {
            return;
        }
        this.setComponentState("hoveredIndex", index);
    };

    handleButtonClick = (card: Card, event: React.MouseEvent): void => {
        event.stopPropagation();
    };

    getCardFlexClass = (index: number): string => {
        const hoveredIndex = this.getComponentState("hoveredIndex");
        
        if (hoveredIndex === null) {
            return "cardDefault";
        }
        if (hoveredIndex === index) {
            return "cardExpanded";
        }
        return "cardCollapsed";
    };

    render() {
        const cards = this.castToObject<Card[]>("cards") || [];
        const hoveredIndex = this.getComponentState("hoveredIndex");
        const subtitleExist = this.castToString(this.getPropValue("subtitle"));
        const titleExist = this.castToString(this.getPropValue("title"));
        const descriptionExist = this.castToString(this.getPropValue("description"));
        const topButtons = this.castToObject<Button[]>("buttons");
        const hasValidTopButtons = topButtons && topButtons.some((btn: Button) => {
            const buttonText = this.castToString(btn.text);
            const iconExist = btn.icon && (btn.icon.type === "icon" ? btn.icon.name : btn.icon.url);
            return buttonText || iconExist;
        });
        const hasAnyTopContent = subtitleExist || titleExist || descriptionExist || hasValidTopButtons;

        const alignment = Base.getContentAlignment();

        return(
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {hasAnyTopContent && (
                        <Base.VerticalContent className={this.decorateCSS("top-content")}>
                            {subtitleExist && (
                                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                                    {this.getPropValue("subtitle")}
                                </Base.SectionSubTitle>
                            )}
                            {titleExist && (
                                <Base.SectionTitle className={this.decorateCSS("title")}>
                                    {this.getPropValue("title")}
                                </Base.SectionTitle>
                            )}
                            {descriptionExist && (
                                <Base.SectionDescription className={this.decorateCSS("description")}>
                                    {this.getPropValue("description")}
                                </Base.SectionDescription>
                            )}
                            {hasValidTopButtons && (
                                <div className={this.decorateCSS("button-container")}>
                                    {topButtons.map((item: Button, index: number) => {
                                        const buttonText = this.castToString(item.text);
                                        const iconExist = item.icon && (item.icon.type === "icon" ? item.icon.name : item.icon.url);
                                        if (!buttonText && !iconExist) return null;
                                        return (
                                            <ComposerLink key={index} path={item.url}>
                                                <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                                                    {buttonText && (
                                                        <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                                                    )}
                                                    {iconExist && (
                                                        <Base.Media className={this.decorateCSS("button-icon")} value={item.icon} />
                                                    )}
                                                </Base.Button>
                                            </ComposerLink>
                                        );
                                    })}
                                </div>
                            )}
                        </Base.VerticalContent>
                    )}
                    <Base.ListGrid gridCount={{ pc: 4, tablet: 2, phone: 1 }} className={this.decorateCSS("grid-container")} >
                        {cards.map((card: Card, index: number) => {
                            const cardImage = card?.media;
                            const cardVideo = card?.video;
                            const cardSubtitle = card?.subtitle;
                            const cardSubtitleExist = this.castToString(cardSubtitle);
                            const cardTitle = card?.title;
                            const cardTitleExist = this.castToString(cardTitle);
                            const cardDescription = card?.description;
                            const cardDescriptionExist = this.castToString(cardDescription);
                            const buttons = card?.buttons || [];
                            const hasValidButtons = buttons.some((btn: Button) => {
                                const btnText = this.castToString(btn.text);
                                const iconExist = btn.icon && (btn.icon.type === "icon" ? btn.icon.name : btn.icon.url);
                                return btnText || iconExist;
                            });
                            const flexClass = this.getCardFlexClass(index);
                            const cardImageExist = (cardImage && cardImage.url) || (cardVideo && cardVideo.url)
                            const cardExist = cardImageExist || cardSubtitleExist || cardTitleExist || cardDescriptionExist || hasValidButtons

                            return cardExist && (
                                <div 
                                    key={`card-${index}`}
                                    className={`${this.decorateCSS("card")} ${this.decorateCSS(flexClass)}`}
                                    onMouseEnter={() => this.handleCardHover(index)}
                                    onMouseLeave={this.handleCardLeave}
                                    onClick={() => this.handleCardClick(index)}
                                >
                                    <div className={this.decorateCSS("card-content")}>
                                        {cardImageExist && <div className={this.decorateCSS("media-container")}>
                                            {hoveredIndex === index && cardVideo && cardVideo.url ? (
                                                <Base.Media
                                                    value={{
                                                        type: "video",
                                                        url: cardVideo.url,
                                                        settings: {
                                                            autoplay: true,
                                                            muted: true,
                                                            loop: true,
                                                        }
                                                    }}
                                                    className={this.decorateCSS("card-video")}
                                                />
                                            ) : cardImage && cardImage.url && (
                                                <Base.Media
                                                    value={card.media}
                                                    className={this.decorateCSS("card-image")}
                                                />
                                            )}
                                            {card.overlay && <div className={this.decorateCSS("overlay")} />}
                                        </div>}
                                        { 
                                        <div className={this.decorateCSS("text-content")}>
                                            {<Base.VerticalContent className={this.decorateCSS("left-side")}>
                                                {cardSubtitleExist && (
                                                    <Base.H6 className={this.decorateCSS("card-subtitle")}>
                                                        {cardSubtitle}
                                                    </Base.H6>
                                                )}
                                                {cardTitleExist && (
                                                    <Base.H5 className={this.decorateCSS("card-title")}>
                                                        {cardTitle}
                                                    </Base.H5>
                                                )}
                                                {cardDescriptionExist && (
                                                    <Base.P className={this.decorateCSS("card-description")}>
                                                        {cardDescription}
                                                    </Base.P>
                                                )}
                                            </Base.VerticalContent>}
                                            {hasValidButtons && <div className={`${this.decorateCSS("right-side")} ${alignment === "center" ? this.decorateCSS("center-alignment") : ""}`}>
                                                <div className={this.decorateCSS("button-container")}>
                                                    {buttons.map((btn: Button, btnIndex: number) => {
                                                        const btnText = this.castToString(btn.text);
                                                        const iconExist = btn.icon && (btn.icon.type === "icon" ? btn.icon.name : btn.icon.url);
                                                        if (!btnText && !iconExist) return null;
                                                        return (
                                                            <ComposerLink key={btnIndex} path={btn.url || "#"}>
                                                                <Base.Button
                                                                    buttonType={btn.type || "Tertiary"}
                                                                    className={this.decorateCSS("card-button")}
                                                                >
                                                                    {btnText && (
                                                                        <Base.P className={this.decorateCSS("button-text")}>{btn.text}</Base.P>
                                                                    )}
                                                                    {iconExist && (
                                                                        <Base.Media value={btn.icon} className={this.decorateCSS("button-icon")} />
                                                                    )}
                                                                </Base.Button>
                                                            </ComposerLink>
                                                        );
                                                    })}
                                                </div>
                                            </div>}
                                        </div>
                                        }
                                    </div>
                                </div>
                            );
                        })}
                    </Base.ListGrid>
                </Base.MaxContent>
            </Base.Container>
        )
    }
}

export default Feature21;