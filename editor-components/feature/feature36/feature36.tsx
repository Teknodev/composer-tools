import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature36.module.scss";
import { Base, TypeButton } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type ButtonTypeObj = {
    text: React.JSX.Element;
    url: string;
    type: TypeButton;
}

type Card = {
    title: React.JSX.Element;
    description: React.JSX.Element;
    button: ButtonTypeObj;
};

class Feature36 extends BaseFeature {
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
                            value: "Modern Design",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
                        },
                        INPUTS.BUTTON("button", "Button", "Learn More", "", null, null, "Link"),
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
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
                        },
                        INPUTS.BUTTON("button", "Button", "Learn More", "", null, null, "Link"),
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
                            value: "Free Test-Drive",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
                        },
                        INPUTS.BUTTON("button", "Button", "Learn More", "", null, null, "Link"),
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
        return "Feature 36";
    }

    render() {
        const subtitleExist = this.castToString(this.getPropValue("subtitle"));
        const titleExist = this.castToString(this.getPropValue("title"));
        const descriptionExist = this.castToString(this.getPropValue("description"));
        const cards = this.castToObject<Card[]>("cards");
        const buttons = this.castToObject<ButtonTypeObj[]>("buttons") || [];
        const textButtons = buttons.filter(btn => this.castToString(btn.text));
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
                                    {cards.map((card: Card) => {
                                        const titleExist = this.castToString(card.title);
                                        const descExist = this.castToString(card.description);
                                        const btnTextExist = this.castToString(card.button.text);
                                        const cardExist = titleExist || descExist || btnTextExist;
                                        return cardExist && (
                                            <div className={this.decorateCSS("card")}>
                                                {titleExist && (<Base.H3 className={this.decorateCSS("card-title")}>{card.title}</Base.H3>)}
                                                {descExist && (<Base.P className={this.decorateCSS("card-description")}>{card.description}</Base.P>)}
                                                {btnTextExist && (<ComposerLink path={card.button.url}><Base.Button buttonType={card.button.type} className={this.decorateCSS("card-button")} ><Base.P className={this.decorateCSS("button-text")}> {card.button.text} </Base.P></Base.Button></ComposerLink>)}
                                            </div>
                                        );
                                    })}
                                </Base.ListGrid>
                            )}
                        </div>
                    )}
                    {textButtons.length > 0 && (
                        <div className={this.decorateCSS("button-container")}>
                            {textButtons.map((item: ButtonTypeObj, index: number) => {
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

export default Feature36;