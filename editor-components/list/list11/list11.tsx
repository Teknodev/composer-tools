import * as React from "react";
import { Base } from "../../../composer-base-components/base/base";
import { BaseList } from "../../EditorComponent";
import styles from "./list11.module.scss";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "composer-tools/composer-base-components/icon/icon";

interface ListItems {
    itemTitle: React.ReactNode;
    itemDescription: string;
    itemImage: string;
    navigateTo: string;
    navigateToText: string;
    icon: string;
}

class List11 extends BaseList {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "number",
            key: "itemCount",
            displayer: "Item Count in a Row",
            value: 3,
        });
        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "Smart Features for your business"
        });
        this.addProp({
            type: "string",
            key: "subTitle",
            displayer: "Sub Title",
            value: "We focus on helping you to make useful content more accessible with an utlimate goal for a good sharing profit as a content creator."
        });
        this.addProp({
            type: "array",
            key: "listItems",
            displayer: "List Items",
            value: [
                {
                    type: "object",
                    key: "listItem",
                    displayer: "List Item",
                    value: [
                        {
                            type: "string",
                            key: "itemTitle",
                            displayer: "Title",
                            value: "Share tools quickly and confidently in minutes"
                        },
                        {
                            type: "string",
                            key: "itemDescription",
                            displayer: "Description",
                            value: "This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables. You can also customize your own dynamic versions."
                        },
                        {
                            type: "image",
                            key: "itemImage",
                            displayer: "Image",
                            value: "https://lexend-nextjs.vercel.app/assets/images/template/feature-01.svg"
                        },
                        {
                            type: "page",
                            key: "navigateTo",
                            displayer: "Navigate To",
                            value: ""
                        },
                        {
                            type: "string",
                            key: "navigateToText",
                            displayer: "Navigate To Text",
                            value: "See all integrations"
                        },
                        {
                            type: "icon",
                            key: "icon",
                            displayer: "Icon",
                            value: "FaArrowRight"
                        },
                    ]
                },
                {
                    type: "object",
                    key: "listItem",
                    displayer: "List Item",
                    value: [
                        {
                            type: "string",
                            key: "itemTitle",
                            displayer: "Title",
                            value: "Connect every part of your entire business"
                        },
                        {
                            type: "string",
                            key: "itemDescription",
                            displayer: "Description",
                            value: "Keep data consistent, with native CRM integrations that streamline your entire Tool workflow."
                        },
                        {
                            type: "image",
                            key: "itemImage",
                            displayer: "Image",
                            value: "https://lexend-nextjs.vercel.app/assets/images/template/feature-02.svg"
                        },
                        {
                            type: "page",
                            key: "navigateTo",
                            displayer: "Navigate To",
                            value: ""
                        },
                        {
                            type: "string",
                            key: "navigateToText",
                            displayer: "Navigate To Text",
                            value: "See all integrations"
                        },
                        {
                            type: "icon",
                            key: "icon",
                            displayer: "Icon",
                            value: "FaArrowRight"
                        },
                    ]
                },
                {
                    type: "object",
                    key: "listItem",
                    displayer: "List Item",
                    value: [
                        {
                            type: "string",
                            key: "itemTitle",
                            displayer: "Title",
                            value: "Maintain compliance and control your apps"
                        },
                        {
                            type: "string",
                            key: "itemDescription",
                            displayer: "Description",
                            value: "Improve security and trust with built-in legally binding e-Signatures. Create pre-approved templates, content blocks and lock all legal information to prevent costly mistakes."
                        },
                        {
                            type: "image",
                            key: "itemImage",
                            displayer: "Image",
                            value: "https://lexend-nextjs.vercel.app/assets/images/template/feature-03.svg"
                        },
                        {
                            type: "page",
                            key: "navigateTo",
                            displayer: "Navigate To",
                            value: ""
                        },
                        {
                            type: "string",
                            key: "navigateToText",
                            displayer: "Navigate To Text",
                            value: "See all integrations"
                        },
                        {
                            type: "icon",
                            key: "icon",
                            displayer: "Icon",
                            value: "FaArrowRight"
                        },
                    ]
                },
            ]
        })
    }

    static getName(): string {
        return "List11";
    }

    render() {
        const listItems = this.castToObject<ListItems[]>("listItems");

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("wrapper")}>
                        <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
                            {this.castToString(this.getPropValue("title")) && (
                                <div className={this.decorateCSS("title-container")}>
                                    <Base.SectionTitle className={this.decorateCSS("title")}>
                                        {this.getPropValue("title")}
                                    </Base.SectionTitle>
                                </div>
                            )}
                            {this.castToString(this.getPropValue("subTitle")) && (
                                <div className={this.decorateCSS("subTitle-container")}>
                                    <Base.SectionDescription className={this.decorateCSS("subTitle")}>
                                        {this.getPropValue("subTitle")}
                                    </Base.SectionDescription>
                                </div>
                            )}
                        </Base.VerticalContent>
                        <Base.ListGrid gridCount={{ pc: this.getPropValue("itemCount") }} className={this.decorateCSS("grid")}>
                            {listItems.map((item: ListItems, index: number) => (
                                <div key={index} className={this.decorateCSS("card")}>
                                    <div className={this.decorateCSS("card-items")}>
                                        {item.itemImage && (
                                            <div className={this.decorateCSS("card-image-container")}>
                                                <img className={this.decorateCSS("card-image")} src={item.itemImage} alt={item.itemImage} />
                                            </div>
                                        )}
                                        {this.castToString(item.itemTitle) && (
                                            <div className={this.decorateCSS("card-title")}>
                                                {item.itemTitle}
                                            </div>
                                        )}
                                        {this.castToString(item.itemDescription) && (
                                            <div className={this.decorateCSS("card-description")}>
                                                {item.itemDescription}
                                            </div>
                                        )}
                                        {(this.castToString(item.navigateToText) || (item.icon)) && (
                                            <ComposerLink path={item.navigateTo}>
                                                <div className={this.decorateCSS("navigate-container")}>
                                                    {this.castToString(item.navigateToText) && (
                                                        <div className={this.decorateCSS("navigate-to")}>
                                                            {item.navigateToText}
                                                        </div>
                                                    )}
                                                    {item.icon && (
                                                        <ComposerIcon
                                                            name={item.icon}
                                                            propsIcon={{
                                                                className: this.decorateCSS("navigate-icon"),
                                                            }}
                                                        />
                                                    )}
                                                </div>
                                            </ComposerLink>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </Base.ListGrid>
                    </div>
                </Base.MaxContent >
            </Base.Container >
        )
    }
}

export default List11;