import { Base } from "../../../composer-base-components/base/base";
import { BaseList, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./list11.module.scss";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

interface ListItems {
    itemTitle: React.JSX.Element;
    itemDescription: React.JSX.Element;
    itemImage: TypeMediaInputValue;
    url: string;
    navigateToText: React.JSX.Element;
    icon: TypeMediaInputValue;
}

class List11 extends BaseList {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "string",
            key: "subtitle",
            displayer: "Subtitle",
            value: "Smart solutions"
        });
        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "Smart Features for your business"
        });
        this.addProp({
            type: "string",
            key: "sectionDescription",
            displayer: "Description",
            value: "We focus on helping you to make useful content more accessible with an utlimate goal for a good sharing profit as a content creator."
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
            type: "array",
            key: "listItems",
            displayer: "List Item",
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
                            type: "media",
                            key: "itemImage",
                            displayer: "Media",
                            value: {
                                type: "image",
                                url: "https://lexend-nextjs.vercel.app/assets/images/template/feature-01.svg"
                            },
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                        },
                        {
                            type: "page",
                            key: "url",
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
                            type: "media",
                            key: "icon",
                            displayer: "Icon",
                            value: {
                                type: "icon",
                                name: "FaArrowRight"
                            },
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
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
                            type: "media",
                            key: "itemImage",
                            displayer: "Media",
                            value: {
                                type: "image",
                                url: "https://lexend-nextjs.vercel.app/assets/images/template/feature-02.svg"
                            },
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                        },
                        {
                            type: "page",
                            key: "url",
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
                            type: "media",
                            key: "icon",
                            displayer: "Icon",
                            value: {
                                type: "icon",
                                name: "FaArrowRight"
                            },
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
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
                            type: "media",
                            key: "itemImage",
                            displayer: "Media",
                            value: {
                                type: "image",
                                url: "https://lexend-nextjs.vercel.app/assets/images/template/feature-03.svg"
                            },
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                        },
                        {
                            type: "page",
                            key: "url",
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
                            type: "media",
                            key: "icon",
                            displayer: "Icon",
                            value: {
                                type: "icon",
                                name: "FaArrowRight"
                            },
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                        },
                    ]
                },
            ]
        });
        this.addProp({
            type: "multiSelect",
            key: "hoverAnimation",
            displayer: "Hover Animation Style",
            value: ["animate1"],
            additionalParams: {
                selectItems: ["animate1", "animate2", "animate3"]
            }
        });
        this.addProp({
            type: "number",
            key: "itemCount",
            displayer: "Item Count in a Row",
            value: 3,
        });
        this.addProp({
            type: "boolean",
            key: "overlay",
            displayer: "Overlay",
            value: false,
        });
    }

    static getName(): string {
        return "List 11";
    }

    render() {
        const titleExist = this.castToString(this.getPropValue("title"));
        const subtitleExist = this.castToString(this.getPropValue("subtitle"));
        const sectionDescriptionExist = this.castToString(this.getPropValue("sectionDescription"));
        const listItems = this.castToObject<ListItems[]>("listItems");
        const imageOverlay = this.getPropValue("overlay");
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

        const alignment = Base.getContentAlignment();
        const isCenterAlignment = alignment === "center";

        const headerButtons = buttons.filter((button: INPUTS.CastedButton) => {
            const buttonTextExist = this.castToString(button.text);
            const buttonIconExist = button.icon && button.icon.name;
            return buttonTextExist || buttonIconExist;
        });

        const hasHeader = subtitleExist || titleExist || sectionDescriptionExist || headerButtons.length > 0;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("content")}>
                        {hasHeader && (
                            <div className={`${this.decorateCSS("header-section")} ${isCenterAlignment ? this.decorateCSS("align-center") : ""}`}>
                                <Base.VerticalContent className={this.decorateCSS("header-content-wrapper")}>
                                    {subtitleExist && (
                                        <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                                            {this.getPropValue("subtitle")}
                                        </Base.SectionSubTitle>
                                    )}
                                    {titleExist && (
                                        <Base.SectionTitle className={this.decorateCSS("title")}>
                                            {this.getPropValue("title")}
                                        </Base.SectionTitle>
                                    )}
                                    {sectionDescriptionExist && (
                                        <Base.SectionDescription className={this.decorateCSS("section-description")}>
                                            {this.getPropValue("sectionDescription")}
                                        </Base.SectionDescription>
                                    )}
                                    {headerButtons.length > 0 && (
                                        <div className={this.decorateCSS("button-wrapper")}>
                                            {headerButtons.map((button: INPUTS.CastedButton, index: number) => {
                                                const buttonTextExist = this.castToString(button.text);
                                                const buttonIconExist = button.icon && button.icon.name;

                                                return (
                                                    <ComposerLink key={index} path={button.url}>
                                                        <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                                                            {buttonTextExist && <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>}
                                                            {buttonIconExist && <Base.Media className={this.decorateCSS("button-icon")} value={button.icon!} />}
                                                        </Base.Button>
                                                    </ComposerLink>
                                                );
                                            })}
                                        </div>
                                    )}
                                </Base.VerticalContent>
                            </div>
                        )}
                        <Base.ListGrid gridCount={{ pc: this.getPropValue("itemCount"), tablet: 3 }} className={this.decorateCSS("grid")}>
                            {listItems.map((item: ListItems, index: number) => {
                                const itemTitleExist = this.castToString(item.itemTitle);
                                const itemDescriptionExist = this.castToString(item.itemDescription);
                                const navigateToTextExist = this.castToString(item.navigateToText);
                                const iconExist = item.icon && !!item.icon.url;
                                const imageExist = !!item.itemImage;

                                return (
                                    <div key={index} className={this.decorateCSS("card")}
                                        data-animation={this.getPropValue("hoverAnimation").join(" ")}>
                                        <div className={this.decorateCSS("card-items")}>
                                            {imageExist && (
                                                <div className={this.decorateCSS("card-image-container")}>
                                                    <Base.Media className={`${this.decorateCSS("card-image")} ${this.decorateCSS("media-el")}`} value={item.itemImage} />
                                                    {imageOverlay && (
                                                        <div className={this.decorateCSS("overlay")} />
                                                    )}
                                                </div>
                                            )}
                                            <div className={this.decorateCSS("card-content")}>
                                                {itemTitleExist && (
                                                    <Base.H3 className={this.decorateCSS("card-title")}>
                                                        {item.itemTitle}
                                                    </Base.H3>
                                                )}
                                                {itemDescriptionExist && (
                                                    <Base.SectionDescription className={this.decorateCSS("card-description")}>
                                                        {item.itemDescription}
                                                    </Base.SectionDescription>
                                                )}
                                                {(navigateToTextExist || iconExist) && (
                                                    <ComposerLink path={item.url}>
                                                        <div className={this.decorateCSS("navigate-container")}>
                                                            {navigateToTextExist && (
                                                                <Base.P className={this.decorateCSS("navigate-to")}>
                                                                    {item.navigateToText}
                                                                </Base.P>
                                                            )}
                                                            {iconExist && (
                                                                <Base.Media
                                                                    value={item.icon}
                                                                    className={this.decorateCSS("navigate-icon")}
                                                                />
                                                            )}
                                                        </div>
                                                    </ComposerLink>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </Base.ListGrid>
                    </div>
                </Base.MaxContent >
            </Base.Container >
        )
    }
}

export default List11;
