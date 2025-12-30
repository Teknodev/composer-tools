import * as React from "react";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./feature38.module.scss";
import { Base, TypeButton } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type ButtonTypeObj = {
    text: React.JSX.Element;
    url: string;
    type: TypeButton;
}

type Card = {
    frontTitle: React.JSX.Element;
    backTitle: React.JSX.Element;
    backDescription: React.JSX.Element;
    frontIcon: TypeMediaInputValue;
};

class Feature38 extends BaseFeature {
    cardsRootRef: React.RefObject<HTMLDivElement | null> = React.createRef<HTMLDivElement>();
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
            value: "Built-In Advantages",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "Goodbuy unconvenient widget-oriented content of footer areas! Customize your footer as any other page section!",
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
                            value: "Quick Start",
                        },
                        {
                            type: "media",
                            key: "icon",
                            displayer: "Icon",
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                            value: {
                                type: "icon",
                                name: "MdRocketLaunch",
                            },
                        },
                        {
                            type: "string",
                            key: "hoverTitle",
                            displayer: "Hover Title",
                            value: "Quick Start",
                        },
                        {
                            type: "string",
                            key: "hoverDescription",
                            displayer: "Hover Description",
                            value: "Completely iterate covalent strategic theme areas via accurate e-markets.",
                        },
                    ]
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
                            value: "24/7 Support",
                        },
                        {
                            type: "media",
                            key: "icon",
                            displayer: "Icon",
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                            value: {
                                type: "icon",
                                name: "MdSupportAgent",
                            },
                        },
                        {
                            type: "string",
                            key: "hoverTitle",
                            displayer: "Hover Title",
                            value: "24/7 Support",
                        },
                        {
                            type: "string",
                            key: "hoverDescription",
                            displayer: "Hover Description",
                            value: "Completely iterate covalent strategic theme areas via accurate e-markets.",
                        },
                    ]
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
                            value: "Free Guides",
                        },
                        {
                            type: "media",
                            key: "icon",
                            displayer: "Icon",
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                            value: {
                                type: "icon",
                                name: "MdSupport",
                            },
                        },
                        {
                            type: "string",
                            key: "hoverTitle",
                            displayer: "Hover Title",
                            value: "Free Guides",
                        },
                        {
                            type: "string",
                            key: "hoverDescription",
                            displayer: "Hover Description",
                            value: "Completely iterate covalent strategic theme areas via accurate e-markets.",
                        },
                    ]
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
                            value: "Modern Design",
                        },
                        {
                            type: "media",
                            key: "icon",
                            displayer: "Icon",
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                            value: {
                                type: "icon",
                                name: "MdDesignServices",
                            },
                        },
                        {
                            type: "string",
                            key: "hoverTitle",
                            displayer: "Hover Title",
                            value: "Modern Design",
                        },
                        {
                            type: "string",
                            key: "hoverDescription",
                            displayer: "Hover Description",
                            value: "Completely iterate covalent strategic theme areas via accurate e-markets.",
                        },
                    ]
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
                            value: "High Quality",
                        },
                        {
                            type: "media",
                            key: "icon",
                            displayer: "Icon",
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                            value: {
                                type: "icon",
                                name: "MdThumbUpOffAlt",
                            },
                        },
                        {
                            type: "string",
                            key: "hoverTitle",
                            displayer: "Hover Title",
                            value: "High Quality",
                        },
                        {
                            type: "string",
                            key: "hoverDescription",
                            displayer: "Hover Description",
                            value: "Completely iterate covalent strategic theme areas via accurate e-markets.",
                        },
                    ]
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
                            value: "Premium Addons",
                        },
                        {
                            type: "media",
                            key: "icon",
                            displayer: "Icon",
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                            value: {
                                type: "icon",
                                name: "MdAddChart",
                            },
                        },
                        {
                            type: "string",
                            key: "hoverTitle",
                            displayer: "Hover Title",
                            value: "Premium Addons",
                        },
                        {
                            type: "string",
                            key: "hoverDescription",
                            displayer: "Hover Description",
                            value: "Completely iterate covalent strategic theme areas via accurate e-markets.",
                        },
                    ]
                },
            ],
        });

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
        });

        this.addProp({
            type: "number",
            key: "itemCount",
            displayer: "Item Count in a Row",
            value: 3,
        });
    }

    static getName(): string {
        return "Feature 38";
    }

    calculateMaxHeight = () => {
        if (!this.cardsRootRef.current) return;
        const cardElements = Array.from(this.cardsRootRef.current.querySelectorAll(`.${styles['card']}`)) as HTMLElement[];
        const itemCount = this.getPropValue("itemCount") || 3;

        const containerWidth = this.cardsRootRef.current.offsetWidth;
        const PHONE_WIDTH = 640;
        const TABLET_WIDTH = 1024;

        let itemsPerRow: number;
        if (containerWidth <= PHONE_WIDTH) {
            itemsPerRow = 1;
        } else if (containerWidth <= TABLET_WIDTH) {
            itemsPerRow = 2;
        } else {
            itemsPerRow = itemCount;
        }

        const rows: HTMLElement[][] = [];

        for (let i = 0; i < cardElements.length; i += itemsPerRow) {
            rows.push(cardElements.slice(i, i + itemsPerRow));
        }

        rows.forEach((rowCards) => {
            let rowMaxH = 0;
            rowCards.forEach((card) => {

                const frontFace = card.querySelector(`.${styles['front']}`) as HTMLElement;
                const backFace = card.querySelector(`.${styles['top']}`) as HTMLElement;

                if (frontFace) {
                    frontFace.style.overflow = 'visible';
                    frontFace.style.height = 'auto';
                }
                if (backFace) {
                    backFace.style.overflow = 'visible';
                    backFace.style.height = 'auto';
                }

                const frontH = frontFace ? frontFace.scrollHeight : 0;
                const backH = backFace ? backFace.scrollHeight : 0;
                rowMaxH = Math.max(rowMaxH, frontH, backH);

                if (frontFace) {
                    frontFace.style.overflow = '';
                    frontFace.style.height = '';
                }
                if (backFace) {
                    backFace.style.overflow = '';
                    backFace.style.height = '';
                }
            });

            rowMaxH = Math.max(rowMaxH, 300);
            rowCards.forEach((card) => {
                card.style.setProperty('--dynamic-card-height', `${rowMaxH}px`);
            });
        });
    }

    componentDidMount() {
        this.calculateMaxHeight();
        window.addEventListener('resize', this.calculateMaxHeight);
        setTimeout(this.calculateMaxHeight, 500);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.calculateMaxHeight);
    }

    componentDidUpdate() {
        this.calculateMaxHeight();
    }

    render() {
        const subtitleExist = this.castToString(this.getPropValue("subtitle"));
        const titleExist = this.castToString(this.getPropValue("title"));
        const descriptionExist = this.castToString(this.getPropValue("description"));
        const cards = this.castToObject<Card[]>("cards");
        const buttons = this.castToObject<ButtonTypeObj[]>("buttons") || [];
        const visibleButtons = buttons.filter(btn => this.castToString(btn.text));
        const hasContent = subtitleExist || titleExist || descriptionExist;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {(hasContent || cards?.length > 0) && (
                        <div className={this.decorateCSS("content-wrapper")}>
                            {hasContent && (
                                <Base.VerticalContent className={this.decorateCSS("text-content")}>
                                    {subtitleExist && (<Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>)}
                                    {titleExist && (<Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>)}
                                    {descriptionExist && (<Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>)}
                                </Base.VerticalContent>
                            )}
                            {cards?.length > 0 && (
                                <Base.ListGrid ref={this.cardsRootRef} gridCount={{ pc: this.getPropValue("itemCount") || 3, tablet: 2 }} className={this.decorateCSS("cards-container")}>
                                    {cards.map((card: Card, index: number) => {
                                        const frontTitleExist = this.castToString(card.frontTitle);
                                        const backTitleExist = this.castToString(card.backTitle);
                                        const backDescExist = this.castToString(card.backDescription);
                                        const iconExist = card.frontIcon;
                                        const isImage = card.frontIcon?.type === "image";
                                        const cardHasContent = frontTitleExist || backTitleExist || backDescExist || iconExist;
                                        if (!cardHasContent) return null;
                                        return (
                                            <div key={index} className={this.decorateCSS("card")}>
                                                <div className={this.decorateCSS("card-inner")}>
                                                    <div className={`${this.decorateCSS("face")} ${this.decorateCSS("front")}`}>
                                                        {iconExist && (<div className={this.decorateCSS("icon-wrapper")}> <Base.Media value={card.frontIcon} className={`${this.decorateCSS("icon")} ${isImage ? this.decorateCSS("is-image") : ""}`} />  </div>)}
                                                        {frontTitleExist && (<Base.H3 className={this.decorateCSS("front-title")}>{card.frontTitle}</Base.H3>)}
                                                    </div>
                                                    <Base.VerticalContent className={`${this.decorateCSS("face")} ${this.decorateCSS("top")}`}>
                                                        {backTitleExist && (<Base.H3 className={this.decorateCSS("back-title")}>{card.backTitle}</Base.H3>)}
                                                        {backDescExist && (<Base.P className={this.decorateCSS("card-description")}>{card.backDescription}</Base.P>)}
                                                    </Base.VerticalContent>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </Base.ListGrid>
                            )}
                        </div>
                    )}
                    {visibleButtons.length > 0 && (
                        <div className={this.decorateCSS("button-container")}>
                            {visibleButtons.map((item: ButtonTypeObj, index: number) => {
                                const buttonTextExist = this.castToString(item.text);
                                return (
                                    buttonTextExist && (
                                        <ComposerLink key={`button-${index}`} path={item.url}>
                                            <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                                                <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                                            </Base.Button>
                                        </ComposerLink>
                                    )
                                );
                            })}
                        </div>
                    )}
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Feature38;