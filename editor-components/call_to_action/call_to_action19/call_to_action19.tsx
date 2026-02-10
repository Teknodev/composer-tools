import React from 'react';
import ComposerLink from '../../../../custom-hooks/composer-base-components/Link/link';
import { BaseCallToAction } from '../../EditorComponent';
import styles from './call_to_action19.module.scss';
import { Base } from '../../../composer-base-components/base/base';
import { INPUTS } from 'composer-tools/custom-hooks/input-templates';

interface FeatureItem {
    description: React.JSX.Element;
}
type Button = INPUTS.CastedButton;

class CallToAction19 extends BaseCallToAction {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "string",
            key: "subtitle",
            displayer: "Subtitle",
            value: "Start your 7-day free trial today.",
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
        this.addProp(INPUTS.BUTTON("button", "Button", "Get Started", "", null, null, "White"));
        this.addProp({
            type: "string",
            key: "ratingValue",
            displayer: "Rating Value",
            value: "4.8/5"
        });
        this.addProp({
            type: "string",
            key: "ratingText",
            displayer: "Rating Text",
            value: "from 300+ Reviews"
        });
        this.addProp({
            type: "string",
            key: "featureTitle",
            displayer: "Feature Title",
            value: "EXCLUSIVE FEATURES"
        });
        this.addProp({
            type: "media",
            key: "icon",
            displayer: "Card Icon",
            additionalParams: {
                availableTypes: ["icon"],
            },
            value: {
                type: "icon",
                name: "FaCheck"
            }
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
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Built to industry leading standards",
                        },
                    ],
                },
            ],
        });
    }

    static getName(): string {
        return "Call To Action 19";
    }

    render() {
        const button: Button = this.castToObject<Button>("button");
        const features = this.castToObject<FeatureItem[]>("features");
        const ratingValue = this.getPropValue("ratingValue");
        const ratingText = this.getPropValue("ratingText");

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("content")}>
                        <div className={this.decorateCSS("left-section")}>
                            <Base.VerticalContent className={this.decorateCSS("header")}>
                                {this.castToString(this.getPropValue("subtitle")) && (
                                    <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                                        {this.getPropValue("subtitle")}
                                    </Base.SectionSubTitle>
                                )}
                                {this.castToString(this.getPropValue("title")) && (
                                    <Base.SectionTitle className={this.decorateCSS("title")}>
                                        {this.getPropValue("title")}
                                    </Base.SectionTitle>
                                )}
                                {this.castToString(this.getPropValue("description")) && (
                                    <Base.SectionDescription className={this.decorateCSS("description")}>
                                        {this.getPropValue("description")}
                                    </Base.SectionDescription>
                                )}
                            </Base.VerticalContent>

                            <div className={this.decorateCSS("bottom-row")}>
                                {this.castToString(button.text) && (
                                    <ComposerLink path={button.url}>
                                        <Base.Button className={this.decorateCSS("button")} buttonType={button.type}>
                                            <Base.P className={this.decorateCSS("button-text")}>
                                                {button.text}
                                            </Base.P>
                                        </Base.Button>
                                    </ComposerLink>
                                )}

                                {(this.castToString(ratingValue) || this.castToString(ratingText)) && (
                                    <div className={this.decorateCSS("rating")}>
                                        {this.castToString(ratingValue) && (
                                            <Base.H4 className={this.decorateCSS("rating-value")}>
                                                {ratingValue}
                                            </Base.H4>
                                        )}
                                        {this.castToString(ratingText) && (
                                            <Base.P className={this.decorateCSS("rating-text")}>
                                                {ratingText}
                                            </Base.P>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        {features.length > 0 && (
                            <div className={this.decorateCSS("right-section")}>
                                {this.castToString(this.getPropValue("featureTitle")) && (
                                    <Base.SectionSubTitle className={this.decorateCSS("features-title")}>
                                        {this.getPropValue("featureTitle")}
                                    </Base.SectionSubTitle>
                                )}

                                <div className={this.decorateCSS("cards")}>
                                    {features.map((item: FeatureItem, index: number) => (
                                        <div key={index} className={this.decorateCSS("card")}>
                                            {this.getPropValue("icon") && (
                                                <div className={this.decorateCSS("icon-wrapper")}>
                                                    <Base.Media
                                                        value={this.getPropValue("icon")}
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