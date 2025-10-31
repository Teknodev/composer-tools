import * as React from "react";
import styles from "./image-gallery8.module.scss";
import { BaseImageGallery, TypeMediaInputValue } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";

interface Card {
    image: TypeMediaInputValue;
    title: React.JSX.Element;
    url: string;
    active: boolean;
}
class ImageGallery8 extends BaseImageGallery {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "array",
            key: "cards",
            displayer: "Cards",
            value: [
                {
                    type: "object",
                    key: "card",
                    displayer: "card",
                    value: [
                        {
                            type: "page",
                            key: "url",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "PORTRAIT",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Image",
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
                            key: "title",
                            displayer: "Title",
                            value: "ARCHITECTURE",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Image",
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
                            key: "title",
                            displayer: "Title",
                            value: "COMMERCIAL",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Image",
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
                            key: "title",
                            displayer: "Title",
                            value: "WEDDING",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Image",
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
                            key: "title",
                            displayer: "Title",
                            value: "EDITORIAL",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Image",
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
                            key: "title",
                            displayer: "Title",
                            value: "FOOD&BEVERAGE",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Image",
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
                            key: "title",
                            displayer: "Title",
                            value: "EVENTS",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Image",
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
                            key: "title",
                            displayer: "Title",
                            value: "CELEBRITY",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Image",
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
                            key: "title",
                            displayer: "Title",
                            value: "FASHION",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Image",
                            value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c243bd2970002c628c71?alt=media&timestamp=1719564433797",
                            },
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
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
                            key: "title",
                            displayer: "Title",
                            value: "DESIGN",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Image",
                            value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c243bd2970002c628c70?alt=media&timestamp=1719564433797",
                            },
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
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
        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <Base.ListGrid
                        gridCount={{ pc: this.getPropValue("itemCount"), tablet: 4 }}
                        className={this.decorateCSS("image-container")}
                    >
                        {this.castToObject<Card[]>("cards").map(
                            (item: Card, indexCards: number) => {
                                return (
                                    <div key={indexCards} className={`${this.decorateCSS("card")} ${item.active ? this.decorateCSS("active") : ""}`}>
                                        <ComposerLink path={item.url} isFullWidth={true}>
                                            {item.image && (
                                                <Base.Media value={item.image} className={this.decorateCSS("image")} />
                                            )}
                                            <div
                                                className={`${this.decorateCSS("category")} ${!item.image && this.decorateCSS("text-visible")
                                                    }`}
                                            >
                                                <Base.H3 className={this.decorateCSS("title")}>
                                                    {item.title}
                                                </Base.H3>
                                            </div>
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
