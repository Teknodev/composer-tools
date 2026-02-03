import * as React from "react";
import styles from "./feature46.module.scss";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import { Base, TypeButton } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";

type ServiceCard = {
    media: TypeMediaInputValue;
    subtitle: Element;
    title: Element;
    description: Element;
    buttons: {
        type: TypeButton;
        text: Element;
        url: string;
    }[];
};

type PrimaryButton = {
    type: TypeButton;
    text: Element;
    url: string;
}[];

class Feature46 extends BaseFeature {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "string",
            key: "subtitle",
            displayer: "Subtitle",
            value: ""
        });

        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "Services We Provide"
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "We help to quickly coordinate e-business applications through revolutionary catalysts."
        });

        this.addProp({
            type: "array",
            key: "services",
            displayer: "Services",
            value: [
                {
                    type: "object",
                    key: "service",
                    displayer: "Service",
                    value: [
                        {
                            type: "string",
                            key: "subtitle",
                            displayer: "Subtitle",
                            value: ""
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Web Design"
                        },
                        {
                            type: "media",
                            key: "media",
                            displayer: "Media",
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                            value: {
                                type: "image",
                                url: "https://ownit-images.s3.us-east-1.amazonaws.com/william-hook-9e9PD9blAto-unsplash-1070x713.jpg"
                            }
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Quickly cultivate optimal processes and tactical architectures. Completely iterate covalent strategic theme areas via accurate e-markets."
                        },
                        {
                            type: "array",
                            key: "buttons",
                            displayer: "Buttons",
                            value: [
                                INPUTS.BUTTON("button", "Button", "", "", null, null, "Link")
                            ]
                        }
                    ]
                },
                {
                    type: "object",
                    key: "service",
                    displayer: "Service",
                    value: [
                        {
                            type: "string",
                            key: "subtitle",
                            displayer: "Subtitle",
                            value: ""
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Development"
                        },
                        {
                            type: "media",
                            key: "media",
                            displayer: "Media",
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                            value: {
                                type: "image",
                                url: "https://ownit-images.s3.us-east-1.amazonaws.com/windows-JW-T2BH5k5E-unsplash-1070x713.jpg"
                            }
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Energistically scale future-proof core competencies. Credibly innovate granular internal or \"organic\" sources whereas high standards in web-readiness."
                        },
                        {
                            type: "array",
                            key: "buttons",
                            displayer: "Buttons",
                            value: [
                                INPUTS.BUTTON("button", "Button", "", "", null, null, "Link")
                            ]
                        }
                    ]
                },
                {
                    type: "object",
                    key: "service",
                    displayer: "Service",
                    value: [
                        {
                            type: "string",
                            key: "subtitle",
                            displayer: "Subtitle",
                            value: ""
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "SEO & Analytics"
                        },
                        {
                            type: "media",
                            key: "media",
                            displayer: "Media",
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                            value: {
                                type: "image",
                                url: "https://ownit-images.s3.us-east-1.amazonaws.com/balazs-ketyi-sScmok4Iq1o-unsplash-1070x803.jpg"
                            }
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy and overall value proposition."
                        },
                        {
                            type: "array",
                            key: "buttons",
                            displayer: "Buttons",
                            value: [
                                INPUTS.BUTTON("button", "Button", "", "", null, null, "Link")
                            ]
                        }
                    ]
                }
            ]
        });

        this.addProp({
            type: "number",
            key: "itemsPerRow",
            displayer: "Item Count in a Row",
            value: 3
        });

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")
            ]
        });
    }

    static getName(): string {
        return "Feature 46";
    }

    render() {
        const subtitle = this.getPropValue("subtitle");
        const title = this.getPropValue("title");
        const description = this.getPropValue("description");
        const itemsPerRow = Number(this.getPropValue("itemsPerRow")) || 3;
        const services = this.castToObject<ServiceCard[]>("services");
        const primaryButtons = this.castToObject<PrimaryButton>("buttons");

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <Base.VerticalContent className={`${this.decorateCSS("header-section")}`}>
                        {this.castToString(subtitle) && (
                            <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                                {subtitle}
                            </Base.SectionSubTitle>
                        )}
                        
                        {this.castToString(title) && (
                            <Base.SectionTitle className={this.decorateCSS("title")}>
                                {title}
                            </Base.SectionTitle>
                        )}
                        
                        {this.castToString(description) && (
                            <Base.SectionDescription className={this.decorateCSS("description")}>
                                {description}
                            </Base.SectionDescription>
                        )}
                    </Base.VerticalContent>

                    <Base.ListGrid
                        gridCount={{ pc: itemsPerRow || 3, tablet: 3, phone: 1 }}
                        className={this.decorateCSS("services-grid")}
                    >
                        {services?.map((service: ServiceCard, index: number) => (
                            <div key={index} className={this.decorateCSS("service-card")}>
                                <Base.VerticalContent className={this.decorateCSS("card-content")}>
                                    {this.castToString(service.subtitle) && (
                                        <Base.H6 className={this.decorateCSS("card-subtitle")}>
                                            {service.subtitle}
                                        </Base.H6>
                                    )}

                                    {this.castToString(service.title) && (
                                        <Base.H3 className={this.decorateCSS("card-title")}>
                                            {service.title}
                                        </Base.H3>
                                    )}

                                    {service.media && (
                                        <div className={this.decorateCSS("media-wrapper")}>
                                            <Base.Media 
                                                value={service.media}
                                                className={this.decorateCSS("media")}
                                            />
                                        </div>
                                    )}

                                    {this.castToString(service.description) && (
                                        <Base.P className={this.decorateCSS("card-description")}>
                                            {service.description}
                                        </Base.P>
                                    )}

                                    {service.buttons && service.buttons.length > 0 && (
                                        <div className={this.decorateCSS("card-buttons")}>
                                            {service.buttons.map((button, btnIndex) => (
                                                this.castToString(button.text) && (
                                                    <Base.Button
                                                        className={this.decorateCSS("card-button")}
                                                        key={btnIndex}
                                                        buttonType={button.type}
                                                    >
                                                        <ComposerLink path={button.url}>
                                                            <Base.P className={this.decorateCSS("card-button-text")}>
                                                                {button.text}
                                                            </Base.P>
                                                        </ComposerLink>
                                                    </Base.Button>
                                                )
                                            ))}
                                        </div>
                                    )}
                                </Base.VerticalContent>
                            </div>
                        ))}
                    </Base.ListGrid>

                    {primaryButtons && primaryButtons.length > 0 && (
                        <div className={this.decorateCSS("primary-buttons-container")}>
                            {primaryButtons.map((button, index) => (
                                this.castToString(button.text) && (
                                    <ComposerLink key={index} path={button.url}>
                                        <Base.Button
                                            buttonType={button.type}
                                            className={this.decorateCSS("primary-button")}
                                        >
                                            <Base.P className={this.decorateCSS("primary-button-text")}>
                                                {button.text}
                                            </Base.P>
                                        </Base.Button>
                                    </ComposerLink>
                                )
                            ))}
                        </div>
                    )}
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Feature46;
