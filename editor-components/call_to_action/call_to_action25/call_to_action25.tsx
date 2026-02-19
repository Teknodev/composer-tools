import * as React from "react";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action25.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class CallToAction25 extends BaseCallToAction {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "string",
            key: "subtitle",
            displayer: "Subtitle",
            value: "Get Started Today",
        });

        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "Powerful Tools for Your Business",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "Discover the features that help you grow faster and smarter.",
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
                            key: "icon",
                            displayer: "Icon",
                            additionalParams: { availableTypes: ["icon"] },
                            value: { type: "icon", name: "FaStar" },
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Feature One",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Short description of this feature.",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "media",
                            key: "icon",
                            displayer: "Icon",
                            additionalParams: { availableTypes: ["icon"] },
                            value: { type: "icon", name: "FaBolt" },
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Feature Two",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Short description of this feature.",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "media",
                            key: "icon",
                            displayer: "Icon",
                            additionalParams: { availableTypes: ["icon"] },
                            value: { type: "icon", name: "FaShieldAlt" },
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Feature Three",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Short description of this feature.",
                        },
                    ],
                },
            ],
        });

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "Download", "", "FaArrowDown", null, "White"),
            ],
        });
    }

    static getName(): string {
        return "Call To Action 25";
    }

    render() {
        const subtitle = this.castToString(this.getPropValue("subtitle"));
        const title = this.castToString(this.getPropValue("title"));
        const description = this.castToString(this.getPropValue("description"));
        const cards = this.castToObject<any[]>("cards");
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <Base.VerticalContent className={this.decorateCSS("header")}>
                        {subtitle && (
                            <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                                {this.getPropValue("subtitle")}
                            </Base.SectionSubTitle>
                        )}
                        {title && (
                            <Base.SectionTitle className={this.decorateCSS("title")}>
                                {this.getPropValue("title")}
                            </Base.SectionTitle>
                        )}
                        {description && (
                            <Base.SectionDescription className={this.decorateCSS("description")}>
                                {this.getPropValue("description")}
                            </Base.SectionDescription>
                        )}
                    </Base.VerticalContent>

                    {cards.length > 0 && (
                        <div className={this.decorateCSS("cards-container")}>
                            {cards.map((card: any, index: number) => {
                                const cardTitle = this.castToString(card.title);
                                const cardDescription = this.castToString(card.description);
                                const iconExist = (card.icon as any)?.name;

                                if (!cardTitle && !cardDescription && !iconExist) return null;

                                return (
                                    <div key={index} className={this.decorateCSS("card")}>
                                        {iconExist && (
                                            <Base.Media
                                                className={this.decorateCSS("card-icon")}
                                                value={card.icon as any}
                                            />
                                        )}
                                        {cardTitle && (
                                            <Base.H3 className={this.decorateCSS("card-title")}>
                                                {card.title}
                                            </Base.H3>
                                        )}
                                        {cardDescription && (
                                            <Base.P className={this.decorateCSS("card-description")}>
                                                {card.description}
                                            </Base.P>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {buttons.length > 0 && (
                        <div className={this.decorateCSS("button-container")}>
                            {buttons.map((item: INPUTS.CastedButton, index: number) => {
                                const buttonText = this.castToString(item.text);
                                const iconExist = (item.icon as any)?.name;

                                if (!buttonText && !iconExist) return null;

                                return (
                                    <ComposerLink key={index} path={item.url}>
                                        <Base.Button
                                            buttonType={item.type}
                                            className={this.decorateCSS("button")}
                                        >
                                            {iconExist && (
                                                <Base.Media
                                                    className={this.decorateCSS("button-icon")}
                                                    value={item.icon as any}
                                                />
                                            )}
                                            {buttonText && (
                                                <Base.P className={this.decorateCSS("button-text")}>
                                                    {item.text}
                                                </Base.P>
                                            )}
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

export default CallToAction25;
