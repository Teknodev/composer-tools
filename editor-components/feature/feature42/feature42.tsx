import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature42.module.scss";
import { Base, TypeButton } from "../../../composer-base-components/base/base";
import { TypeMediaInputValue } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type ButtonTypeObj = {
    text: React.JSX.Element;
    url: string;
    type: TypeButton;
}

interface ListItem {
    title: React.JSX.Element;
    cardTitle: React.JSX.Element;
    text1: React.JSX.Element;
    text2: React.JSX.Element;
    image: TypeMediaInputValue;
}

class Feature42 extends BaseFeature {
    constructor(props?: Record<string, unknown>) {
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
            value: "Everything you need to deploy your app",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "",
        });

        this.addProp({
            type: "array",
            key: "items",
            displayer: "Cards",
            value: [
                {
                    type: "object",
                    key: "item",
                    displayer: "Item",
                    value: [
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Design"
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Media",
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                            value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/696df5408ea13f002cfb2fc4?alt=media" }
                        },
                        {
                            type: "string",
                            key: "cardTitle",
                            displayer: "Card Title",
                            value: "Tools and software for every business"
                        },
                        {
                            type: "string",
                            key: "text1",
                            displayer: "Text 1",
                            value: "Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail."
                        },
                        {
                            type: "string",
                            key: "text2",
                            displayer: "Text 2",
                            value: "Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration."
                        },
                    ],
                },
                {
                    type: "object",
                    key: "item",
                    displayer: "Item",
                    value: [
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Analytics"
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Media",
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                            value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/696df56b8ea13f002cfb32a4?alt=media" }
                        },
                        {
                            type: "string",
                            key: "cardTitle",
                            displayer: "Card Title",
                            value: "Smart data analytics dashboards"
                        },
                        {
                            type: "string",
                            key: "text1",
                            displayer: "Text 1",
                            value: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps."
                        },
                        {
                            type: "string",
                            key: "text2",
                            displayer: "Text 2",
                            value: "Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line."
                        },
                    ],
                },
                {
                    type: "object",
                    key: "item",
                    displayer: "Item",
                    value: [
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Marketing"
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Media",
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                            value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/696dea738ea13f002cfb17a3?alt=media" }
                        },
                        {
                            type: "string",
                            key: "cardTitle",
                            displayer: "Card Title",
                            value: "Visual component of the project"
                        },
                        {
                            type: "string",
                            key: "text1",
                            displayer: "Text 1",
                            value: "Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. "
                        },
                        {
                            type: "string",
                            key: "text2",
                            displayer: "Text 2",
                            value: "Credibly innovate granular internal or “organic” sources whereas high standards in web-readiness. Energistically scale future-proof core competencies impactful experiences."
                        },
                    ],
                },
            ],
        });

        this.addProp({
            type: "boolean",
            key: "enableOverlay",
            displayer: "Overlay",
            value: false,
        });

        this.addProp({
            type: "media",
            key: "arrowIcon",
            displayer: "Arrow Icon",
            additionalParams: {
                availableTypes: ["icon"],
            },
            value: {
                type: "icon",
                name: "FiChevronDown"
            }
        });

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
        });
    }

    static getName(): string {
        return "Feature 42";
    }

    render() {
        const subtitleExist = this.castToString(this.getPropValue("subtitle"));
        const titleExist = this.castToString(this.getPropValue("title"));
        const descriptionExist = this.castToString(this.getPropValue("description"));
        const enableOverlay = this.getPropValue("enableOverlay");
        const arrowIcon = this.getPropValue("arrowIcon");
        const items = this.castToObject<ListItem[]>("items");
        const activeIndex = this.getComponentState("activeIndex");
        const effectiveIndex = activeIndex === undefined ? 0 : activeIndex;
        const hasItems = items.some((item: ListItem) => this.castToString(item.title));
        const buttons = this.castToObject<ButtonTypeObj[]>("buttons") || [];
        const visibleButtons = buttons.filter(btn => this.castToString(btn.text));
        const hasContent = subtitleExist || titleExist || descriptionExist || hasItems;
        const hasRightContent = items.some((item: ListItem) =>
            item.image ||
            this.castToString(item.cardTitle) ||
            this.castToString(item.text1) ||
            this.castToString(item.text2)
        );

        return (
            <Base.Container className={this.decorateCSS("container")} isFull={true}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {hasContent && (
                        <div className={this.decorateCSS("text-content")}>
                            <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
                                {subtitleExist && (<Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>)}
                                {titleExist && (<Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>)}
                                {descriptionExist && (<Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>)}
                            </Base.VerticalContent>
                        </div>
                    )}
                    {hasItems && (
                        <div className={this.decorateCSS("items-wrapper")}>
                            {items.map((item: ListItem, index: number) => {
                                const menuTitle = item.title;
                                const isActive = effectiveIndex === index;
                                return this.castToString(menuTitle) && (
                                    <Base.H5
                                        key={index}
                                        className={`${this.decorateCSS("itemTitle")} ${isActive && this.decorateCSS("active")}`}
                                        onClick={() => this.setComponentState("activeIndex", index)}
                                    >
                                        {menuTitle}
                                    </Base.H5>
                                );
                            })}
                        </div>
                    )}
                    {hasRightContent && (
                        <div className={this.decorateCSS("card-wrapper")}>
                            {items.map((item: ListItem, index: number) => {
                                const isActive = effectiveIndex === index;
                                const cardTitleExist = this.castToString(item.cardTitle);
                                const text1Exist = this.castToString(item.text1);
                                const text2Exist = this.castToString(item.text2);
                                return (
                                    <div
                                        key={index}
                                        className={`${this.decorateCSS("card-content")} ${isActive && this.decorateCSS("active-item")}`}
                                    >
                                        <div
                                            className={this.decorateCSS("mobile-title-wrapper")}
                                            onClick={() => {
                                                const newIndex = activeIndex === index ? -1 : index;
                                                this.setComponentState("activeIndex", newIndex);
                                            }}
                                        >
                                            <Base.H3 className={`${this.decorateCSS("mobile-title")} ${isActive && this.decorateCSS("active")}`}>
                                                {item.title}
                                            </Base.H3>
                                            <div className={`${this.decorateCSS("arrow-icon")} ${isActive && this.decorateCSS("active")}`}>
                                                {arrowIcon && (
                                                    <Base.Media value={arrowIcon} />
                                                )}
                                            </div>
                                        </div>
                                        {item.image && (
                                            <div className={this.decorateCSS("image-wrapper")}>
                                                <Base.Media
                                                    value={item.image}
                                                    className={this.decorateCSS("itemImage")}
                                                />
                                                {enableOverlay && (
                                                    <div className={this.decorateCSS("overlay")}></div>
                                                )}
                                            </div>
                                        )}
                                        {(cardTitleExist || text1Exist || text2Exist) && (
                                            <div className={`${this.decorateCSS("sectionsWrapper")} ${!item.image && this.decorateCSS("no-image")}`}>
                                                {cardTitleExist && (
                                                    <Base.H4 className={this.decorateCSS("cardTitle")}>{item.cardTitle}</Base.H4>
                                                )}
                                                {text1Exist && (
                                                    <Base.P className={this.decorateCSS("sectionText1")}>{item.text1}</Base.P>
                                                )}
                                                {text2Exist && (
                                                    <Base.P className={this.decorateCSS("sectionText2")}>{item.text2}</Base.P>
                                                )}
                                            </div>
                                        )}

                                    </div>
                                );
                            })}
                        </div>
                    )}
                    {visibleButtons.length > 0 && (
                        <div className={this.decorateCSS("button-container")}>
                            {visibleButtons.map((item: ButtonTypeObj, index: number) => {
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

export default Feature42;