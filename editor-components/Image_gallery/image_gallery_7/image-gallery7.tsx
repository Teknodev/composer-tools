import * as React from "react";
import { BaseImageGallery, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./image-gallery7.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type CardItemType = {
    image: TypeMediaInputValue;
    overlay?: boolean;
    title: React.JSX.Element;
    subtitle: React.JSX.Element;
    description: React.JSX.Element;
    url: string;
};
class ImageGallery7 extends BaseImageGallery {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "string",
            key: "sectionSubtitle",
            displayer: "Subtitle",
            value: "",
        });
        this.addProp({
            type: "string",
            key: "header_title",
            displayer: "Title",
            value: "",
        });
        this.addProp({
            type: "string",
            key: "header_description",
            displayer: "Description",
            value: "",
        });
        this.addProp({
            type: "array",
            key: "headerButtons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
            ],
        });
        this.addProp({
            type: "object",
            key: "countSettings",
            displayer: "Count Settings",
            value: [
                {
                    type: "number",
                    key: "imageCountInitial",
                    displayer: "Media Count Initial",
                    value: 8
                },
                {
                    type: "number",
                    key: "imageCount",
                    displayer: "More Media Count",
                    value: 4
                },
            ]
        });
        this.addProp({
            type: "array",
            key: "gallery",
            displayer: "Gallery",
            value:
                [
                    {
                        type: "object",
                        key: "card",
                        displayer: "Card",
                        value: [
                            {
                                type: "media",
                                key: "image",
                                displayer: "Media",
                                value: {
                                    type: "image",
                                    url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669dfff22f8a5b002ce60115?alt=media",
                                },
                                additionalParams: {
                                    availableTypes: ["image", "video"],
                                },
                            },
                            {
                                type: "boolean",
                                key: "overlay",
                                displayer: "Overlay",
                                value: false,
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "Subtitle",
                                value: "Summer, Fashion"
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "Title",
                                value: "Dubai",
                            },
                            {
                                type: "string",
                                key: "description",
                                displayer: "Description",
                                value: "",
                            },
                            {
                                type: "page",
                                key: "url",
                                displayer: "Navigate To",
                                value: ""
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
                                key: "image",
                                displayer: "Media",
                                value: {
                                    type: "image",
                                    url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e00122f8a5b002ce60121?alt=media",
                                },
                                additionalParams: {
                                    availableTypes: ["image", "video"],
                                },
                            },
                            {
                                type: "boolean",
                                key: "overlay",
                                displayer: "Overlay",
                                value: false,
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "Subtitle",
                                value: "Architecture"
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "Title",
                                value: "Cosmoso",
                            },
                            {
                                type: "string",
                                key: "description",
                                displayer: "Description",
                                value: "",
                            },
                            {
                                type: "page",
                                key: "url",
                                displayer: "Navigate To",
                                value: ""
                            },
                        ]
                    },
                    {
                        type: "object",
                        key: "card",
                        displayer: "Card",
                        value: [
                            {
                                type: "media",
                                key: "image",
                                displayer: "Media",
                                value: {
                                    type: "image",
                                    url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e003a2f8a5b002ce6012d?alt=media",
                                },
                                additionalParams: {
                                    availableTypes: ["image", "video"],
                                },
                            },
                            {
                                type: "boolean",
                                key: "overlay",
                                displayer: "Overlay",
                                value: false,
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "Subtitle",
                                value: "Portraits, Summer"
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "Title",
                                value: "Ron Mcclenny",
                            },
                            {
                                type: "string",
                                key: "description",
                                displayer: "Description",
                                value: "",
                            },
                            {
                                type: "page",
                                key: "url",
                                displayer: "Navigate To",
                                value: ""
                            },
                        ]
                    },
                    {
                        type: "object",
                        key: "card",
                        displayer: "Card",
                        value: [
                            {
                                type: "media",
                                key: "image",
                                displayer: "Media",
                                value: {
                                    type: "image",
                                    url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e005b2f8a5b002ce60139?alt=media",
                                },
                                additionalParams: {
                                    availableTypes: ["image", "video"],
                                },
                            },
                            {
                                type: "boolean",
                                key: "overlay",
                                displayer: "Overlay",
                                value: false,
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "Subtitle",
                                value: "Architecture, Interior"
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "Title",
                                value: "Curitiba Brasil",
                            },
                            {
                                type: "string",
                                key: "description",
                                displayer: "Description",
                                value: "",
                            },
                            {
                                type: "page",
                                key: "url",
                                displayer: "Navigate To",
                                value: ""
                            },
                        ]
                    },
                    {
                        type: "object",
                        key: "card",
                        displayer: "Card",
                        value: [
                            {
                                type: "media",
                                key: "image",
                                displayer: "Media",
                                value: {
                                    type: "image",
                                    url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e00772f8a5b002ce60145?alt=media",
                                },
                                additionalParams: {
                                    availableTypes: ["image", "video"],
                                },
                            },
                            {
                                type: "boolean",
                                key: "overlay",
                                displayer: "Overlay",
                                value: false,
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "Subtitle",
                                value: "Architecture, Interior"
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "Title",
                                value: "John Doe",
                            },
                            {
                                type: "string",
                                key: "description",
                                displayer: "Description",
                                value: "",
                            },
                            {
                                type: "page",
                                key: "url",
                                displayer: "Navigate To",
                                value: ""
                            },
                        ]
                    },
                    {
                        type: "object",
                        key: "card",
                        displayer: "Card",
                        value: [
                            {
                                type: "media",
                                key: "image",
                                displayer: "Media",
                                value: {
                                    type: "image",
                                    url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e00952f8a5b002ce60151?alt=media",
                                },
                                additionalParams: {
                                    availableTypes: ["image", "video"],
                                },
                            },
                            {
                                type: "boolean",
                                key: "overlay",
                                displayer: "Overlay",
                                value: false,
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "Subtitle",
                                value: "Architecture, Interior"
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "Title",
                                value: "Creme",
                            },
                            {
                                type: "string",
                                key: "description",
                                displayer: "Description",
                                value: "",
                            },
                            {
                                type: "page",
                                key: "url",
                                displayer: "Navigate To",
                                value: ""
                            }
                        ]
                    }
                    ,
                    {
                        type: "object",
                        key: "card",
                        displayer: "Card",
                        value: [
                            {
                                type: "media",
                                key: "image",
                                displayer: "Media",
                                value: {
                                    type: "image",
                                    url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e00ba2f8a5b002ce6015d?alt=media",
                                },
                                additionalParams: {
                                    availableTypes: ["image", "video"],
                                },
                            },
                            {
                                type: "boolean",
                                key: "overlay",
                                displayer: "Overlay",
                                value: false,
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "Subtitle",
                                value: "Brutalism, Portraits"
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "Title",
                                value: "Dublin",
                            },
                            {
                                type: "string",
                                key: "description",
                                displayer: "Description",
                                value: "",
                            },
                            {
                                type: "page",
                                key: "url",
                                displayer: "Navigate To",
                                value: ""
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
                                key: "image",
                                displayer: "Media",
                                value: {
                                    type: "image",
                                    url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e00d52f8a5b002ce60169?alt=media",
                                },
                                additionalParams: {
                                    availableTypes: ["image", "video"],
                                },
                            },
                            {
                                type: "boolean",
                                key: "overlay",
                                displayer: "Overlay",
                                value: false,
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "Subtitle",
                                value: "Portraits Summer"
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "Title",
                                value: "Annie Spratt",
                            },
                            {
                                type: "string",
                                key: "description",
                                displayer: "Description",
                                value: "",
                            },
                            {
                                type: "page",
                                key: "url",
                                displayer: "Navigate To",
                                value: ""
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
                                key: "image",
                                displayer: "Media",
                                value: {
                                    type: "image",
                                    url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e00f72f8a5b002ce60175?alt=media",
                                },
                                additionalParams: {
                                    availableTypes: ["image", "video"],
                                },
                            },
                            {
                                type: "boolean",
                                key: "overlay",
                                displayer: "Overlay",
                                value: false,
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "Subtitle",
                                value: "Brutalism, Portraits"
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "Title",
                                value: "Ulitsa",
                            },
                            {
                                type: "string",
                                key: "description",
                                displayer: "Description",
                                value: "",
                            },
                            {
                                type: "page",
                                key: "url",
                                displayer: "Navigate To",
                                value: ""
                            },


                        ]
                    },
                    {
                        type: "object",
                        key: "card",
                        displayer: "Card",
                        value: [
                            {
                                type: "media",
                                key: "image",
                                displayer: "Media",
                                value: {
                                    type: "image",
                                    url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e01132f8a5b002ce60181?alt=media",
                                },
                                additionalParams: {
                                    availableTypes: ["image", "video"],
                                },
                            },
                            {
                                type: "boolean",
                                key: "overlay",
                                displayer: "Overlay",
                                value: false,
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "Subtitle",
                                value: "Summer, Fashion"
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "Title",
                                value: "Brabant",
                            },
                            {
                                type: "string",
                                key: "description",
                                displayer: "Description",
                                value: "",
                            },
                            {
                                type: "page",
                                key: "url",
                                displayer: "Navigate To",
                                value: ""
                            },

                        ]
                    },
                    {
                        type: "object",
                        key: "card",
                        displayer: "Card",
                        value: [
                            {
                                type: "media",
                                key: "image",
                                displayer: "Media",
                                value: {
                                    type: "image",
                                    url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e00122f8a5b002ce60121?alt=media",
                                },
                                additionalParams: {
                                    availableTypes: ["image", "video"],
                                },
                            },
                            {
                                type: "boolean",
                                key: "overlay",
                                displayer: "Overlay",
                                value: false,
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "Subtitle",
                                value: "Summer, Fashion"
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "Title",
                                value: "Snowy Swiss Alps",
                            },
                            {
                                type: "string",
                                key: "description",
                                displayer: "Description",
                                value: "",
                            },
                            {
                                type: "page",
                                key: "url",
                                displayer: "Navigate To",
                                value: ""
                            },

                        ]
                    },
                    {
                        type: "object",
                        key: "card",
                        displayer: "Card",
                        value: [
                            {
                                type: "media",
                                key: "image",
                                displayer: "Media",
                                value: {
                                    type: "image",
                                    url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e01732f8a5b002ce6018d?alt=media",
                                },
                                additionalParams: {
                                    availableTypes: ["image", "video"],
                                },
                            },
                            {
                                type: "boolean",
                                key: "overlay",
                                displayer: "Overlay",
                                value: false,
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "Subtitle",
                                value: "Brutalism, Portraits"
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "Title",
                                value: "National Aquarium Dubai",
                            },
                            {
                                type: "string",
                                key: "description",
                                displayer: "Description",
                                value: "",
                            },
                            {
                                type: "page",
                                key: "url",
                                displayer: "Navigate To",
                                value: ""
                            }
                        ]
                    }
                ]
        });
        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "Load More", "", null, null, "Primary"),
            ],
        });

        this.setComponentState("scroll", 0);
        this.handleScroll = this.handleScroll.bind(this);
        this.setComponentState("moreImages", 0);
    }


    static getName(): string {
        return "Image Gallery 7";
    }
    getCountSettings(): { imageCountInitial: number; imageCount: number } {
        return this.castToObject<{ imageCountInitial: number; imageCount: number }>("countSettings");
    }
    private timeoutId: NodeJS.Timeout | null = null;
    private scrollOffset: number = 0;
    private previousScrollY: number = 0;
    debounce(func: Function, wait: number) {
        return (...args: any[]) => {
            if (this.timeoutId) {
                clearTimeout(this.timeoutId);
            }
            this.timeoutId = setTimeout(() => {
                func(...args);
            }, wait);
        };
    }

    handleScroll = (event: any): void => {
        const currentScrollY = event.target.scrollTop;
        const contentClass = this.decorateCSS("columnOdd");
        const columns = document.querySelectorAll(`.${contentClass}`);

        if (currentScrollY === 0) {
            this.scrollOffset = 0;
        } else if (currentScrollY > this.previousScrollY) {
            this.scrollOffset += 10;
        } else {
            this.scrollOffset = Math.max(0, this.scrollOffset - 10);
        }
        columns.forEach((column) => {
            (column as HTMLElement).style.transform = `translateY(-${this.scrollOffset}px)`;
        });
        this.previousScrollY = currentScrollY;

    }

    debouncedHandleScroll = this.debounce(this.handleScroll, 12);
    handleButtonClick = () => {
        this.setComponentState("moreImages", this.getComponentState("moreImages") + this.getCountSettings().imageCount)

    };

    render() {
        const gallery = this.castToObject<CardItemType[]>("gallery");
        if (this.getComponentState("imageCount") != this.getCountSettings().imageCountInitial + this.getComponentState("moreImages"))
            this.setComponentState("imageCount", this.getCountSettings().imageCountInitial + this.getComponentState("moreImages"));

        const subtitleExist = this.castToString(this.getPropValue("sectionSubtitle"));
        const titleExist = this.castToString(this.getPropValue("header_title"));
        const descriptionExist = this.castToString(this.getPropValue("header_description"));
        const buttons = this.castToObject<INPUTS.CastedButton[]>("headerButtons") || [];
        const hasButtons = buttons.some((button: INPUTS.CastedButton) => this.castToString(button.text));
        const loadMoreButtons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
        const hasLoadMoreButtons = loadMoreButtons.some((button: INPUTS.CastedButton) => this.castToString(button.text));

        return (
            <Base.Container className={this.decorateCSS("container")} onScroll={this.debouncedHandleScroll}>
                <Base.MaxContent className={this.decorateCSS("maxContent")}>
                    {(subtitleExist || titleExist || descriptionExist || hasButtons) && (
                        <Base.VerticalContent className={this.decorateCSS("heading")}>
                            {subtitleExist && (
                                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                                    {this.getPropValue("sectionSubtitle")}
                                </Base.SectionSubTitle>
                            )}
                            {titleExist && (
                                <Base.SectionTitle className={this.decorateCSS("heading-title")}>
                                    {this.getPropValue("header_title")}
                                </Base.SectionTitle>
                            )}
                            {descriptionExist && (
                                <Base.SectionDescription className={this.decorateCSS("heading-description")}>
                                    {this.getPropValue("header_description")}
                                </Base.SectionDescription>
                            )}
                            {hasButtons && (
                                <div className={this.decorateCSS("header-button-container")}>
                                    {buttons.map((button: INPUTS.CastedButton, index: number) => this.castToString(button.text) && (
                                        <ComposerLink key={index} path={button.url}>
                                            <Base.Button buttonType={button.type} className={this.decorateCSS("header-button")}>
                                                <Base.P className={this.decorateCSS("header-button-text")}>{button.text}</Base.P>
                                            </Base.Button>
                                        </ComposerLink>
                                    ))}
                                </div>
                            )}
                        </Base.VerticalContent>
                    )}
                    <Base.ListGrid gridCount={{ pc: 4, tablet: 4, phone: 1 }} className={this.decorateCSS("gridContainer")} >
                        {gallery.slice(0, this.getComponentState("imageCount")).map((cards: CardItemType, columnIndex: number) => {
                            const isEven = (columnIndex) % 2 !== 0;
                            const columnClass = isEven ? "columnEven" : "columnOdd";
                            const style = isEven ? null : { transform: `translateY(-${this.scrollOffset}px)` };
                            return (
                                <div className={`${this.decorateCSS("column")} ${this.decorateCSS(columnClass)}`}
                                    style={style as React.CSSProperties}>
                                    <div className={this.decorateCSS("wrapper")}>
                                        {(this.castToString(cards.title) || this.castToString(cards.subtitle) || this.castToString(cards.description) || cards.image) &&
                                            <ComposerLink path={cards.url} isFullWidth>
                                            <div className={this.decorateCSS("card")}>
                                                {cards.image && (
                                                    <Base.Media value={cards.image} className={this.decorateCSS("image")} />
                                                )}
                                                {cards.image && cards.overlay && <div className={this.decorateCSS("media-overlay")} />}
                                                {(this.castToString(cards.title) || this.castToString(cards.subtitle) || this.castToString(cards.description)) && (
                                                    <div className={this.decorateCSS("textContainer")}>
                                                        {this.castToString(cards.title) && (
                                                            <Base.H6 className={this.decorateCSS("title")}>{cards.title}</Base.H6>
                                                        )}
                                                        {this.castToString(cards.subtitle) && (
                                                            <Base.P className={this.decorateCSS("subtitle")}>{cards.subtitle}</Base.P>
                                                        )}
                                                        {this.castToString(cards.description) && (
                                                            <Base.P className={this.decorateCSS("description")}>{cards.description}</Base.P>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                            </ComposerLink>
                                        }
                                    </div>
                                </div>
                            );
                        })}
                    </Base.ListGrid>
                    {(this.getComponentState("imageCount") < gallery.length) && hasLoadMoreButtons && (
                        <div className={this.decorateCSS("button-wrapper")}>
                            {loadMoreButtons.map((button: INPUTS.CastedButton, index: number) => this.castToString(button.text) && (
                                <ComposerLink key={index} path={button.url}>
                                    <Base.Button className={this.decorateCSS("button")} buttonType={button.type} onClick={this.handleButtonClick}>
                                        <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                                    </Base.Button>
                                </ComposerLink>
                            ))}
                        </div>
                    )}
                </Base.MaxContent>
            </Base.Container>
        );
    }
}
export default ImageGallery7;