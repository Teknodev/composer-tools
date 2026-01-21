import * as React from "react";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./feature40.module.scss";
import { Base, TypeButton } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type ButtonTypeObj = {
    text: React.JSX.Element;
    url: string;
    type: TypeButton;
}

type Card = {
    icon: TypeMediaInputValue;
    title: React.JSX.Element;
    description: React.JSX.Element;
};

class Feature40 extends BaseFeature {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "boolean",
            key: "iconBackground",
            displayer: "Icon Background",
            value: true,
        });

        this.addProp({
            type: "media",
            key: "cover-image",
            displayer: "Media",
            value: {
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69678d578ea13f002cf936cd?alt=media",
                type: "image",
            },
            additionalParams: { availableTypes: ["image", "video"] }
        })

        this.addProp({
            type: "boolean",
            key: "overlay",
            displayer: "Overlay",
            value: false,
        });

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
            value: "Blink Page Core Features"
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "Podcasting operational change management inside of workflows to establish a framework. Taking seamless key indicators offline to maximise the long tail."
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
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                            value: {
                                type: "icon",
                                name: "HiMiniPencilSquare"
                            }
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Modern Design"
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Imagination is more important than knowledge. Imagination encircles the world."
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
                            key: "icon",
                            displayer: "Icon",
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                            value: {
                                type: "icon",
                                name: "AiFillLike"
                            }
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
                            value: "Imagination is more important than knowledge. Imagination encircles the world."
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
                            key: "icon",
                            displayer: "Icon",
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                            value: {
                                type: "icon",
                                name: "GoDeviceDesktop"
                            }
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Ultra Responsive"
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Imagination is more important than knowledge. Imagination encircles the world."
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
                            key: "icon",
                            displayer: "Icon",
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                            value: {
                                type: "icon",
                                name: "MdOutlineHeadsetMic"
                            }
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Dedicated Support"
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Imagination is more important than knowledge. Imagination encircles the world."
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
                            key: "icon",
                            displayer: "Icon",
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                            value: {
                                type: "icon",
                                name: "FaThLarge"
                            }
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Visual Page Builder"
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Imagination is more important than knowledge. Imagination encircles the world."
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
                            key: "icon",
                            displayer: "Icon",
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                            value: {
                                type: "icon",
                                name: "IoMdSettings"
                            }
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Fully Customizable"
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Imagination is more important than knowledge. Imagination encircles the world."
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
                            key: "icon",
                            displayer: "Icon",
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                            value: {
                                type: "icon",
                                name: "RiStarSFill"
                            }
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Premium Addons"
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Imagination is more important than knowledge. Imagination encircles the world."
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
                            key: "icon",
                            displayer: "Icon",
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                            value: {
                                type: "icon",
                                name: "FaEarthAmericas"
                            }
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "100% Translatable"
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Imagination is more important than knowledge. Imagination encircles the world."
                        }
                    ]
                },
            ]
        });

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "White")],
        });

        this.addProp({
            type: "number",
            key: "itemCount",
            displayer: "Item Count in a Row",
            value: 4,
        });
    }

    static getName(): string {
        return "Feature 40";
    }

    render() {
        const coverImage = this.getPropValue("cover-image");
        const hasMedia = !!coverImage?.url;
        const enableOverlay = hasMedia && this.getPropValue("overlay");
        const cards = this.castToObject<Card[]>("cards");
        const buttons = this.castToObject<ButtonTypeObj[]>("buttons") || [];
        const visibleButtons = buttons.filter(btn => this.castToString(btn.text));
        const subtitle = this.castToString(this.getPropValue("subtitle"));
        const title = this.castToString(this.getPropValue("title"));
        const description = this.castToString(this.getPropValue("description"));
        const enableIconBackground = this.getPropValue("iconBackground");
        const hasContent = subtitle || title || description;

        return (
            <Base.Container className={`${this.decorateCSS("container")} ${hasMedia && this.decorateCSS("has-media")}`}>
                {hasMedia && (
                    <div className={this.decorateCSS("background-container")}>
                        <Base.Media
                            value={coverImage}
                            className={this.decorateCSS("background-media")}
                        />
                        {enableOverlay && <div className={this.decorateCSS("overlay")}></div>}
                    </div>
                )}
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {hasContent && (
                        <Base.VerticalContent className={this.decorateCSS("text-content")}>
                            {subtitle && (<Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>)}
                            {title && (<Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>)}
                            {description && (<Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>)}
                        </Base.VerticalContent>
                    )}
                    {cards?.length > 0 && (
                        <Base.ListGrid
                            className={this.decorateCSS("card-container")}
                            gridCount={{ pc: this.getPropValue("itemCount") || 4, tablet: 2, phone: 1 }}
                        >
                            {cards.map((card: Card, index: number) => {
                                const titleExist = !!this.castToString(card.title);
                                const descExist = !!this.castToString(card.description);
                                const isImage = card.icon?.type === "image";

                                return (!titleExist && !descExist && !card.icon) || (
                                    <div key={index} className={this.decorateCSS("card-wrapper")}>
                                        {card.icon &&
                                            <div className={`${this.decorateCSS("icon-box")} ${!enableIconBackground && this.decorateCSS("no-bg")}`}>
                                                <Base.Media value={card.icon} className={`${this.decorateCSS("card-icon")} ${isImage && this.decorateCSS("is-image")}`} />
                                            </div>
                                        }
                                        {(titleExist || descExist) &&
                                            <div className={this.decorateCSS("card-content")}>
                                                {titleExist && <Base.H4 className={this.decorateCSS("card-title")}>{card.title}</Base.H4>}
                                                {descExist && <Base.P className={this.decorateCSS("card-description")}>{card.description}</Base.P>}
                                            </div>
                                        }
                                    </div>
                                );
                            })}
                        </Base.ListGrid>
                    )}
                    {visibleButtons.length > 0 && (
                        <div className={this.decorateCSS("button-container")}>
                            {visibleButtons.map((item: ButtonTypeObj, index: number) => {
                                return this.castToString(item.text) && (
                                    <ComposerLink key={`button-${index}`} path={item.url}>
                                        <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                                            <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
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

export default Feature40;