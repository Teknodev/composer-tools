import * as React from "react";
import styles from "./feature42.module.scss";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import { Base, TypeButton } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";

type ServiceCard = {
    media: TypeMediaInputValue;
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
};

class Feature42 extends BaseFeature {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "string",
            key: "baseTitle",
            displayer: "Base Title",
            value: "Services We Provide"
        });

        this.addProp({
            type: "string",
            key: "baseDescription",
            displayer: "Base Description",
            value: "We help to quickly coordinate e-business applications through revolutionary catalysts."
        });

        this.addProp(
            INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")
        );

        this.addProp({
            type: "array",
            key: "services",
            displayer: "Services",
            additionalParams: {
                maxElementCount: 6,
            },
            value: [
                {
                    type: "object",
                    key: "service",
                    displayer: "Service",
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
                                url: "https://ownit-images.s3.us-east-1.amazonaws.com/william-hook-9e9PD9blAto-unsplash-1070x713.jpg"
                            }
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Web Design"
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
                                INPUTS.BUTTON("button", "Button", "Read More", "#", null, null, "Link")
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
                            key: "title",
                            displayer: "Title",
                            value: "Development"
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
                                INPUTS.BUTTON("button", "Button", "Read More", "#", null, null, "Link")
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
                            key: "title",
                            displayer: "Title",
                            value: "SEO & Analytics"
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
                                INPUTS.BUTTON("button", "Button", "Read More", "#", null, null, "Link")
                            ]
                        }
                    ]
                }
            ]
        });
    }

    static getName(): string {
        return "Feature 42";
    }

    render() {
        const baseSubTitle = this.castToString(this.getPropValue("baseSubtitle"));
        const baseTitle = this.castToString(this.getPropValue("baseTitle"));
        const baseDescription = this.castToString(this.getPropValue("baseDescription"));
        const services = this.castToObject<ServiceCard[]>("services");
        const primaryButton = this.castToObject<PrimaryButton>("button");

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <Base.VerticalContent className={this.decorateCSS("header-section")}>
                        {baseSubTitle && (
                            <Base.SectionSubTitle className={this.decorateCSS("base-subtitle")}>
                                {baseSubTitle}
                            </Base.SectionSubTitle>
                        )}
                        
                        {baseTitle && (
                            <Base.SectionTitle className={this.decorateCSS("base-title")}>
                                {baseTitle}
                            </Base.SectionTitle>
                        )}
                        
                        {baseDescription && (
                            <Base.SectionDescription className={this.decorateCSS("base-description")}>
                                {baseDescription}
                            </Base.SectionDescription>
                        )}
                    </Base.VerticalContent>

                    <Base.ListGrid
                        gridCount={{ pc: services?.length || 1, tablet: 2, phone: 1 }}
                        className={this.decorateCSS("services-grid")}
                    >
                        {services?.map((service: ServiceCard, index: number) => (
                            <div key={index} className={this.decorateCSS("service-card")}>
                                {this.castToString(service.title) && (
                                    <Base.H3 className={this.decorateCSS("service-title")}>
                                        {this.castToString(service.title) || ""}
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
                                    <Base.P className={this.decorateCSS("service-description")}>
                                        {this.castToString(service.description) || ""}
                                    </Base.P>
                                )}

                                {service.buttons?.map((button, btnIndex) => (
                                    this.castToString(button.text) && (
                                        <Base.Button
                                            className={this.decorateCSS("service-button")}
                                            key={btnIndex}
                                            buttonType={button.type}
                                        >
                                            <ComposerLink path={button.url}>
                                                {this.castToString(button.text)}
                                            </ComposerLink>
                                        </Base.Button>
                                    )
                                ))}
                            </div>
                        ))}
                    </Base.ListGrid>

                    {!!this.castToString(primaryButton.text) && (
                        <div className={this.decorateCSS("base-buttons-container")}>
                            <ComposerLink path={primaryButton.url}>
                                <Base.Button
                                    buttonType={primaryButton.type}
                                    className={this.decorateCSS("base-button")}
                                >
                                    <Base.P className={this.decorateCSS("base-button-text")}>
                                        {this.castToString(primaryButton.text)}
                                    </Base.P>
                                </Base.Button>
                            </ComposerLink>
                        </div>
                    )}
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Feature42;
