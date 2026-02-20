import React from 'react';
import ComposerLink from '../../../../custom-hooks/composer-base-components/Link/link';
import { BaseCallToAction, TypeMediaInputValue } from '../../EditorComponent';
import styles from './call_to_action19.module.scss';
import { Base } from '../../../composer-base-components/base/base';
import { INPUTS } from 'composer-tools/custom-hooks/input-templates';

interface FeatureItem {
    description: React.ReactNode;
    icon?: TypeMediaInputValue;
}
type Button = INPUTS.CastedButton;

class CallToAction19 extends BaseCallToAction {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "boolean",
            key: "cardBackground",
            displayer: "Colored Background",
            value: true,
        });
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
            value: "Start your 7-day free trial today.",
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
                INPUTS.BUTTON("button", "Button", "Get Started", "", null, null, "White"),
            ],
            additionalParams: {
                maxElementCount: 4,
            },
        });
        this.addProp({
            type: "string",
            key: "ratingValue",
            displayer: "Rating Value",
            value: "4.8/5 ",
        });
        this.addProp({
            type: "string",
            key: "ratingText",
            displayer: "Rating Text",
            value: "from 300+ Reviews ",
        });
        this.addProp({
            type: "string",
            key: "featureTitle",
            displayer: "Feature Title",
            value: "EXCLUSIVE FEATURES"
        });
        this.addProp({
            type: "array",
            key: "features",
            displayer: "Feature Items",
            value: [
                {
                    type: "object",
                    key: "feature",
                    displayer: "Feature",
                    value: [
                        {
                            type: "media",
                            key: "icon",
                            displayer: "List Icon",
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                            value: {
                                type: "icon",
                                name: "FaCheck"
                            }
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Easily customize and edit fields and more",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "feature",
                    displayer: "Feature",
                    value: [
                        {
                            type: "media",
                            key: "icon",
                            displayer: "List Icon",
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                            value: {
                                type: "icon",
                                name: "FaCheck"
                            }
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "99.9% cheaper than alternative solutions",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "feature",
                    displayer: "Feature",
                    value: [
                        {
                            type: "media",
                            key: "icon",
                            displayer: "List Icon",
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                            value: {
                                type: "icon",
                                name: "FaCheck"
                            }
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Built to industry leading standards",
                        },
                    ],
                },
            ],
        });
        this.addProp({
            type: "number",
            key: "itemCountInARow",
            displayer: "Item Count in a Row",
            value: 1,
        });
    }

    static getName(): string {
        return "Call To Action 19";
    }

    render() {
        const subtitle = this.castToString(this.getPropValue("subtitle"));
        const title = this.castToString(this.getPropValue("title"));
        const description = this.castToString(this.getPropValue("description"));
        const buttons = this.castToObject<Button[]>("buttons");
        const features = this.castToObject<FeatureItem[]>("features");
        const ratingValue = this.getPropValue("ratingValue");
        const ratingText = this.getPropValue("ratingText");
        const itemCountInARow = this.getPropValue("itemCountInARow");
        const itemsPerRow = itemCountInARow > 0 ? itemCountInARow : 1;
        const cardBackground = this.getPropValue("cardBackground");
        const subtitleType = Base.getSectionSubTitleType();
        const hasHeader = subtitle || title || description;

        return (
            <Base.Container className={`${this.decorateCSS("container")} ${cardBackground ? this.decorateCSS("has-card-background") : ""}`}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("content")}>
                        {(hasHeader || ((Array.isArray(buttons) && buttons.some((b: Button) => this.castToString(b?.text))) || this.castToString(ratingValue) || this.castToString(ratingText))) && (
                            <div className={this.decorateCSS("left-section")}>
                                {hasHeader && (
                                    <Base.VerticalContent className={this.decorateCSS("header")}>
                                        {subtitle && (<Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>)}
                                        {title && (<Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>)}
                                        {description && (<Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>)}
                                    </Base.VerticalContent>
                                )}
                                {(Array.isArray(buttons) && buttons.some((b: Button) => this.castToString(b?.text))) || this.castToString(ratingValue) || this.castToString(ratingText) ? (
                                    <div className={this.decorateCSS("bottom-row")}>
                                        {Array.isArray(buttons) && buttons.some((b: Button) => this.castToString(b?.text)) && (
                                            <div className={this.decorateCSS("button-group")}>
                                                {buttons.map((button: Button, index: number) =>
                                                    this.castToString(button?.text) ? (
                                                        <ComposerLink key={index} path={button.url}>
                                                            <Base.Button className={`${this.decorateCSS("button")} ${this.decorateCSS(`button-${index}`)}`}
                                                                buttonType={button.type}>
                                                                <Base.P className={`${this.decorateCSS("button-text")} ${this.decorateCSS(`button-text-${index}`)}`}>
                                                                    {button.text}
                                                                </Base.P>
                                                            </Base.Button>
                                                        </ComposerLink>
                                                    ) : null
                                                )}
                                            </div>
                                        )}
                                        {(this.castToString(ratingValue) || this.castToString(ratingText)) && (
                                            <div className={this.decorateCSS("rating")}>
                                                {this.castToString(ratingValue) && (
                                                    <Base.P className={this.decorateCSS("rating-value")}>
                                                        {ratingValue}
                                                    </Base.P>
                                                )}
                                                {this.castToString(ratingText) && (
                                                    <Base.P className={this.decorateCSS("rating-text")}>
                                                        {ratingText}
                                                    </Base.P>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ) : null}
                            </div>
                        )}

                        {features.length > 0 && (
                            <div className={this.decorateCSS("right-section")}>
                                {this.castToString(this.getPropValue("featureTitle")) && (
                                    <Base.H5 className={this.decorateCSS("features-title")}>
                                        {this.getPropValue("featureTitle")}
                                    </Base.H5>
                                )}
                                <div
                                    className={this.decorateCSS("cards")}
                                    style={{ ["--cta19-cols" as any]: itemsPerRow }}
                                >
                                    {features.map((item: FeatureItem, index: number) => (
                                        <div key={index} className={this.decorateCSS("card")}>
                                            {item.icon && (
                                                <div className={this.decorateCSS("icon-wrapper")}>
                                                    <Base.Media
                                                        value={item.icon}
                                                        className={this.decorateCSS("icon")}
                                                    />
                                                </div>
                                            )}
                                            {this.castToString(item.description) && (
                                                <Base.P className={this.decorateCSS("card-text")}>
                                                    {item.description}
                                                </Base.P>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}
export default CallToAction19;