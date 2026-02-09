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
    overlay: boolean;
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
                            type: "boolean",
                            key: "overlay",
                            displayer: "Overlay",
                            value: false
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
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69859a132631ba002c00804f?alt=media"
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
                            type: "boolean",
                            key: "overlay",
                            displayer: "Overlay",
                            value: false
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
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69859a782631ba002c0080a5?alt=media"
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
                            type: "boolean",
                            key: "overlay",
                            displayer: "Overlay",
                            value: false
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
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69859aaf2631ba002c0080f9?alt=media"
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

        const hasHeaderContent = this.castToString(subtitle) || this.castToString(title) || this.castToString(description);

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {hasHeaderContent && (
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
                    )}

                    <Base.ListGrid
                        gridCount={{ pc: itemsPerRow || 3, tablet: 3, phone: 1 }}
                        className={this.decorateCSS("services-grid")}
                    >
                        {services?.map((service: ServiceCard, index: number) => (
                            <Base.VerticalContent key={index} className={this.decorateCSS("service-card")}>
                                {this.castToString(service.subtitle) && (
                                    <Base.H6 className={this.decorateCSS("card-subtitle")}>
                                        {service.subtitle}
                                    </Base.H6>
                                )}

                                {this.castToString(service.title) && (
                                    <Base.H4 className={this.decorateCSS("card-title")}>
                                        {service.title}
                                    </Base.H4>
                                )}

                                {service.media && (
                                    <div className={this.decorateCSS("media-wrapper")}>
                                        <Base.Media 
                                            value={service.media}
                                            className={this.decorateCSS("media")}
                                        />
                                        {service.overlay && (
                                            <div className={this.decorateCSS("overlay")}></div>
                                        )}
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
                        ))}
                    </Base.ListGrid>

                    {primaryButtons && primaryButtons.filter(b => this.castToString(b.text)).length > 0 && (
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
