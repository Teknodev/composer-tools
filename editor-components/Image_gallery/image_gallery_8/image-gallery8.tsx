import * as React from "react";
import styles from "./image-gallery8.module.scss";
import { BaseImageGallery, TypeMediaInputValue } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

interface Card {
    image: TypeMediaInputValue;
    overlay?: boolean;
    cardSubtitle: React.JSX.Element;
    title: React.JSX.Element;
    description: React.JSX.Element;
    url: string;
    active: boolean;
}
class ImageGallery8 extends BaseImageGallery {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "string",
            key: "subtitle",
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
            type: "array",
            key: "cards",
            displayer: "Gallery",
            value: [
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "page",
                            key: "url",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "cardSubtitle",
                            displayer: "Subtitle",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "PORTRAIT",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Media",
                            value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c243bd2970002c628c76?alt=media&timestamp=1719564433797",
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
                            type: "boolean",
                            key: "active",
                            displayer: "Active",
                            value: false,
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "page",
                            key: "url",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "cardSubtitle",
                            displayer: "Subtitle",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "ARCHITECTURE",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Media",
                            value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c243bd2970002c628c79?alt=media&timestamp=1719564433797",
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
                            type: "boolean",
                            key: "active",
                            displayer: "Active",
                            value: false,
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "page",
                            key: "url",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "cardSubtitle",
                            displayer: "Subtitle",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "COMMERCIAL",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Media",
                            value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c243bd2970002c628c75?alt=media&timestamp=1719564433797",
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
                            type: "boolean",
                            key: "active",
                            displayer: "Active",
                            value: false,
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "page",
                            key: "url",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "cardSubtitle",
                            displayer: "Subtitle",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "WEDDING",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Media",
                            value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c243bd2970002c628c75?alt=media&timestamp=1719564433797",
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
                            type: "boolean",
                            key: "active",
                            displayer: "Active",
                            value: false,
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "page",
                            key: "url",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "cardSubtitle",
                            displayer: "Subtitle",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "EDITORIAL",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Media",
                            value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c243bd2970002c628c75?alt=media&timestamp=1719564433797",
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
                            type: "boolean",
                            key: "active",
                            displayer: "Active",
                            value: false,
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "page",
                            key: "url",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "cardSubtitle",
                            displayer: "Subtitle",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "FOOD&BEVERAGE",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Media",
                            value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c243bd2970002c628c72?alt=media&timestamp=1719564433797",
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
                            type: "boolean",
                            key: "active",
                            displayer: "Active",
                            value: false,
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "page",
                            key: "url",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "cardSubtitle",
                            displayer: "Subtitle",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "EVENTS",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Media",
                            value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c243bd2970002c628c74?alt=media&timestamp=1719564433797",
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
                            type: "boolean",
                            key: "active",
                            displayer: "Active",
                            value: false,
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "page",
                            key: "url",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "cardSubtitle",
                            displayer: "Subtitle",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "CELEBRITY",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Media",
                            value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c243bd2970002c628c78?alt=media&timestamp=1719564433797",
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
                            type: "boolean",
                            key: "active",
                            displayer: "Active",
                            value: false,
                        },
                    ],
                },
            ],
        });
        this.addProp({
            type: "number",
            key: "itemCount",
            displayer: "Item Count in a Row",
            value: 4,
            max: 5,
        });
    }

    static getName(): string {
        return "Image Gallery 8";
    }
    render() {
        const subtitleExist = this.castToString(this.getPropValue("subtitle"));
        const titleExist = this.castToString(this.getPropValue("header_title"));
        const descriptionExist = this.castToString(this.getPropValue("header_description"));
        const buttons = this.castToObject<INPUTS.CastedButton[]>("headerButtons") || [];
        const hasButtons = buttons.some((button: INPUTS.CastedButton) => this.castToString(button.text));

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                {(subtitleExist || titleExist || descriptionExist || hasButtons) && (
                  <Base.VerticalContent className={this.decorateCSS("heading")}>
                    {subtitleExist && (
                      <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                        {this.getPropValue("subtitle")}
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
                      <div className={this.decorateCSS("button-container")}>
                        {buttons.map((button: INPUTS.CastedButton, index: number) => this.castToString(button.text) && (
                          <ComposerLink key={index} path={button.url}>
                            <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                              <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                            </Base.Button>
                          </ComposerLink>
                        ))}
                      </div>
                    )}
                  </Base.VerticalContent>
                )}
                <Base.ListGrid
                        gridCount={{ pc: this.getPropValue("itemCount"), tablet: 3 }}
                        className={this.decorateCSS("image-container")}
                    >
                        {this.castToObject<Card[]>("cards").map(
                            (item: Card, indexCards: number) => {
                            const cardSubtitleExist = this.castToString(item.cardSubtitle);
                            const cardTitleExist = this.castToString(item.title);
                            const cardDescriptionExist = this.castToString(item.description);
                            const textExist = cardSubtitleExist || cardTitleExist || cardDescriptionExist;
                            if (!item.image && !textExist) return null;
                            return (
                                    <div key={indexCards} className={`${this.decorateCSS("card")} ${item.active ? this.decorateCSS("active") : ""}`}>
                                        <ComposerLink path={item.url} isFullWidth={true}>
                                            {item.image && (
                                                <Base.Media value={item.image} className={this.decorateCSS("image")} />
                                            )}
                                            {item.image && item.overlay && <div className={this.decorateCSS("media-overlay")} />}
                                            {textExist && (
                                                <div className={`${this.decorateCSS("category")} ${!item.image ? this.decorateCSS("text-visible") : ""}`}>
                                                    {cardSubtitleExist && (
                                                        <Base.P className={this.decorateCSS("card-subtitle")}>{item.cardSubtitle}</Base.P>
                                                    )}
                                                    {cardTitleExist && (
                                                        <Base.H4 className={this.decorateCSS("title")}>{item.title}</Base.H4>
                                                    )}
                                                    {cardDescriptionExist && (
                                                        <Base.P className={this.decorateCSS("card-description")}>{item.description}</Base.P>
                                                    )}
                                                </div>
                                            )}
                                        </ComposerLink>
                                    </div>
                                );
                            }
                        )}
                    </Base.ListGrid>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default ImageGallery8;
