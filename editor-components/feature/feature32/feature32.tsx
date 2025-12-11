import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature32.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type MediaType =
    | { type: "icon"; name: string; url?: never }
    | { type: "image"; url: string; name?: never };

type Card = {
    media: MediaType;
    title: React.JSX.Element;
    description: React.JSX.Element;
};

class Feature32 extends BaseFeature {
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
            value: "Imagination is more important than knowledge. Knowledge is limited.",
        });

        this.addProp({
            type: "array",
            key: "cards",
            displayer: "Features",
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
                            value: "Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration."
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
                            value: "Podcasting operational change management inside of workflows to establish a framework. Taking seamlessly key performance indicators offline to maximise the long tail."
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
                            value: "High Quality"
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration."
                        }
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
            type: "number",
            key: "itemCount",
            displayer: "Item count in a row",
            value: 1,
        });
    }

    static getName(): string {
        return "Feature 32";
    }

    render() {
        const subtitle = this.getPropValue("subtitle");
        const subtitleExist = this.castToString(subtitle);
        const title = this.getPropValue("title");
        const titleExist = this.castToString(title);
        const description = this.getPropValue("description");
        const descriptionExist = this.castToString(description);
        const buttonItem = this.castToObject<INPUTS.CastedButton[]>("buttons");
        const hasContent = subtitleExist || titleExist || descriptionExist || (buttonItem && buttonItem.length > 0);
        const cards = this.castToObject<Card[]>("cards");

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("wrapper")}>
                        {hasContent && (
                            <Base.VerticalContent className={this.decorateCSS("text-content")}>
                                {subtitleExist && (<Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>)}
                                {titleExist && (<Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>)}
                                {descriptionExist && (<Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>)}
                            </Base.VerticalContent>
                        )}
                        {cards?.length > 0 && (
                            <Base.ListGrid
                                className={this.decorateCSS("features-content")}
                                gridCount={{ pc: this.getPropValue("itemCount") }}
                            >
                                {cards.map((card: Card, index: number) => {
                                    const titleExist = !!this.castToString(card.title);
                                    const descExist = !!this.castToString(card.description);
                                    if (!titleExist && !descExist && !card.media) return null;

                                    return (
                                        <div
                                            key={index}
                                            className={this.decorateCSS("card-container")}
                                        >
                                            {card.media && (
                                                <div className={this.decorateCSS("icon-box")}>
                                                    <Base.Media
                                                        value={card.media}
                                                        className={this.decorateCSS("card-icon")}
                                                    />
                                                </div>
                                            )}
                                            <Base.VerticalContent className={this.decorateCSS("card-content")}>
                                                {titleExist && (
                                                    <Base.H4 className={this.decorateCSS("card-title")}>
                                                        {card.title}
                                                    </Base.H4>
                                                )}
                                                {descExist && (
                                                    <Base.P className={this.decorateCSS("card-description")}>
                                                        {card.description}
                                                    </Base.P>
                                                )}
                                            </Base.VerticalContent>
                                        </div>
                                    );
                                })}
                            </Base.ListGrid>
                        )}
                        {buttonItem.length > 0 && (
                            <Base.Row className={this.decorateCSS("button-container")}>
                                {buttonItem.map(
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

export default Feature32;
