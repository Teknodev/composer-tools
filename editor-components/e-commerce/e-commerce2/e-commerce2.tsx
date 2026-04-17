import * as React from "react";
import { Base } from "../../../composer-base-components/base/base";
import styles from "./e-commerce2.module.scss";
import { BaseECommerce, TypeMediaInputValue } from "../../EditorComponent";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { getCurrencyInfo } from "../../../utils/currency";

interface ImageGallery {
    sectionTitle: React.JSX.Element;
    images: Image[];
}

interface PopupImage {
    popupImg: TypeMediaInputValue;
}

interface PopupSettings {
    nextArrow: TypeMediaInputValue;
    prevArrow: TypeMediaInputValue;
    closeIcon: TypeMediaInputValue;
    mediaPageNumber: boolean;
}

interface Image {
    title: React.JSX.Element;
    cardImage: TypeMediaInputValue;
    price: { value: string, currency: string };
    leftText: React.JSX.Element;
    rightText: React.JSX.Element;
    bottomText: React.JSX.Element;
    bottomIcon: TypeMediaInputValue;
    subTitle: React.JSX.Element;
    navigateTo: string;
    overlay: boolean;
    popupImages: PopupImage[];
}

class ECommerce2 extends BaseECommerce {
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
            key: "title",
            displayer: "Title",
            value: "",
        });
        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "",
        });
        this.addProp(INPUTS.BUTTON("headerButton", "Button", "", null, null, null, "Primary"));
        this.addProp({
            type: "object",
            key: "showAllSettings",
            displayer: "Show All Settings",
            value: [
                {
                    type: "boolean",
                    key: "showAll",
                    displayer: "Show All Category",
                    value: true,
                },
                {
                    type: "string",
                    key: "allText",
                    displayer: "All Text",
                    value: "ALL",
                },
            ],
        });
        this.addProp({
            type: "array",
            key: "imageGalleries",
            displayer: "Categories",
            value: [
                {
                    type: "object",
                    key: "imageGallery",
                    displayer: "Category Properties",
                    value: [
                        {
                            type: "string",
                            key: "sectionTitle",
                            displayer: "Category Title",
                            value: "HOME DECOR",
                        },
                        {
                            type: "array",
                            key: "images",
                            displayer: "Image Gallery",
                            value: [
                                {
                                    type: "object",
                                    key: "media",
                                    displayer: "Image",
                                    value: [
                                        {
                                            type: "media",
                                            key: "cardImage",
                                            displayer: "Card Media",
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                            value: {
                                                type: "image",
                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-8-600x728.jpg",
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title",
                                            value: "BASKET WITH HANDLES",
                                        },
                                        {
                                            type: "currency",
                                            key: "price",
                                            displayer: "Price",
                                            value: { value: "160", currency: "USD" },
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Text",
                                            value: "NEW",
                                        },
                                        {
                                            type: "string",
                                            key: "rightText",
                                            displayer: "Right Text",
                                            value: "-19%",
                                        },
                                        {
                                            type: "string",
                                            key: "bottomText",
                                            displayer: "Bottom Text",
                                            value: "QUICK LOOK",
                                        },
                                        {
                                            type: "media",
                                            key: "bottomIcon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "RxHeartFilled",
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "subTitle",
                                            displayer: "Subtitle",
                                            value: "ADD TO CART",
                                        },
                                        {
                                            type: "page",
                                            key: "navigateTo",
                                            displayer: "Navigate To",
                                            value: "",
                                        },
                                        {
                                            type: "boolean",
                                            key: "overlay",
                                            displayer: "Overlay",
                                            value: false,
                                        },
                                        {
                                            type: "array",
                                            key: "popupImages",
                                            displayer: "Popup Medias",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            displayer: "Popup Media ",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-8-600x728.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media ",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-8-gallery-1-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-8-gallery-2-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-8-gallery-3-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-8-gallery-4-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "media",
                                    displayer: "Image",
                                    value: [
                                        {
                                            type: "media",
                                            key: "cardImage",
                                            displayer: "Card Media",
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                            value: {
                                                type: "image",
                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-6-600x728.jpg",
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title",
                                            value: "DEPO ACCESSORY",
                                        },
                                        {
                                            type: "currency",
                                            key: "price",
                                            displayer: "Price",
                                            value: { value: "160", currency: "USD" },
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Text",
                                            value: "NEW",
                                        },
                                        {
                                            type: "string",
                                            key: "rightText",
                                            displayer: "Right Text",
                                            value: "-19%",
                                        },
                                        {
                                            type: "string",
                                            key: "bottomText",
                                            displayer: "Bottom Text",
                                            value: "QUICK LOOK",
                                        },
                                        {
                                            type: "media",
                                            key: "bottomIcon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "RxHeartFilled",
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "subTitle",
                                            displayer: "Subtitle",
                                            value: "ADD TO CART",
                                        },
                                        {
                                            type: "page",
                                            key: "navigateTo",
                                            displayer: "Navigate To",
                                            value: "",
                                        },
                                        {
                                            type: "boolean",
                                            key: "overlay",
                                            displayer: "Overlay",
                                            value: false,
                                        },
                                        {
                                            type: "array",
                                            key: "popupImages",
                                            displayer: "Popup Medias",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media ",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-6-600x728.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media ",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-6-gallery-1-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media 2",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-6-gallery-2-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-6-gallery-3-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-6-gallery-4-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "media",
                                    displayer: "Image",
                                    value: [
                                        {
                                            type: "media",
                                            key: "cardImage",
                                            displayer: "Card Media",
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                            value: {
                                                type: "image",
                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-7-600x728.jpg",
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title",
                                            value: "FLOWER VASE",
                                        },
                                        {
                                            type: "currency",
                                            key: "price",
                                            displayer: "Price",
                                            value: { value: "160", currency: "USD" },
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Text",
                                            value: "NEW",
                                        },
                                        {
                                            type: "string",
                                            key: "rightText",
                                            displayer: "Right Text",
                                            value: "-19%",
                                        },
                                        {
                                            type: "string",
                                            key: "bottomText",
                                            displayer: "Bottom Text",
                                            value: "QUICK LOOK",
                                        },
                                        {
                                            type: "media",
                                            key: "bottomIcon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "RxHeartFilled",
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "subTitle",
                                            displayer: "Subtitle",
                                            value: "ADD TO CART",
                                        },
                                        {
                                            type: "page",
                                            key: "navigateTo",
                                            displayer: "Navigate To",
                                            value: "",
                                        },
                                        {
                                            type: "boolean",
                                            key: "overlay",
                                            displayer: "Overlay",
                                            value: false,
                                        },
                                        {
                                            type: "array",
                                            key: "popupImages",
                                            displayer: "Popup Medias",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media ",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-7-600x728.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media ",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-7-gallery-1-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-7-gallery-2-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-7-gallery-3-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-7-gallery-4-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "media",
                                    displayer: "Image",
                                    value: [
                                        {
                                            type: "media",
                                            key: "cardImage",
                                            displayer: "Card Media",
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                            value: {
                                                type: "image",
                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-5-600x728.jpg",
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title",
                                            value: "WALL CLOCK",
                                        },
                                        {
                                            type: "currency",
                                            key: "price",
                                            displayer: "Price",
                                            value: { value: "160", currency: "USD" },
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Text",
                                            value: "NEW",
                                        },
                                        {
                                            type: "string",
                                            key: "rightText",
                                            displayer: "Right Text",
                                            value: "-19%",
                                        },
                                        {
                                            type: "string",
                                            key: "bottomText",
                                            displayer: "Bottom Text",
                                            value: "QUICK LOOK",
                                        },
                                        {
                                            type: "media",
                                            key: "bottomIcon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "RxHeartFilled",
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "subTitle",
                                            displayer: "Subtitle",
                                            value: "ADD TO CART",
                                        },
                                        {
                                            type: "page",
                                            key: "navigateTo",
                                            displayer: "Navigate To",
                                            value: "",
                                        },
                                        {
                                            type: "boolean",
                                            key: "overlay",
                                            displayer: "Overlay",
                                            value: false,
                                        },
                                        {
                                            type: "array",
                                            key: "popupImages",
                                            displayer: "Popup Medias",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media ",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-5-600x728.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media ",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-5-gallery-1-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-5-gallery-2-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-5-gallery-3-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-5-gallery-4-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "media",
                                    displayer: "Image",
                                    value: [
                                        {
                                            type: "media",
                                            key: "cardImage",
                                            displayer: "Card Media",
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                            value: {
                                                type: "image",
                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-4-600x728.jpg",
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title",
                                            value: "NEWSPAPER STORAGE",
                                        },
                                        {
                                            type: "currency",
                                            key: "price",
                                            displayer: "Price",
                                            value: { value: "160", currency: "USD" },
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Text",
                                            value: "NEW",
                                        },
                                        {
                                            type: "string",
                                            key: "rightText",
                                            displayer: "Right Text",
                                            value: "-19%",
                                        },
                                        {
                                            type: "string",
                                            key: "bottomText",
                                            displayer: "Bottom Text",
                                            value: "QUICK LOOK",
                                        },
                                        {
                                            type: "media",
                                            key: "bottomIcon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "RxHeartFilled",
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "subTitle",
                                            displayer: "Subtitle",
                                            value: "ADD TO CART",
                                        },
                                        {
                                            type: "page",
                                            key: "navigateTo",
                                            displayer: "Navigate To",
                                            value: "",
                                        },
                                        {
                                            type: "boolean",
                                            key: "overlay",
                                            displayer: "Overlay",
                                            value: false,
                                        },
                                        {
                                            type: "array",
                                            key: "popupImages",
                                            displayer: "Popup Medias",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media ",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-4-600x728.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media ",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-4-gallery-1-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-4-gallery-2-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-4-gallery-3-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-4-gallery-4-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "media",
                                    displayer: "Image",
                                    value: [
                                        {
                                            type: "media",
                                            key: "cardImage",
                                            displayer: "Card Media",
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                            value: {
                                                type: "image",
                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-2-600x728.jpg",
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title",
                                            value: "POTTERY VASE",
                                        },
                                        {
                                            type: "currency",
                                            key: "price",
                                            displayer: "Price",
                                            value: { value: "160", currency: "USD" },
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Text",
                                            value: "NEW",
                                        },
                                        {
                                            type: "string",
                                            key: "rightText",
                                            displayer: "Right Text",
                                            value: "-19%",
                                        },
                                        {
                                            type: "string",
                                            key: "bottomText",
                                            displayer: "Bottom Text",
                                            value: "QUICK LOOK",
                                        },
                                        {
                                            type: "media",
                                            key: "bottomIcon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "RxHeartFilled",
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "subTitle",
                                            displayer: "Subtitle",
                                            value: "ADD TO CART",
                                        },
                                        {
                                            type: "page",
                                            key: "navigateTo",
                                            displayer: "Navigate To",
                                            value: "",
                                        },
                                        {
                                            type: "boolean",
                                            key: "overlay",
                                            displayer: "Overlay",
                                            value: false,
                                        },
                                        {
                                            type: "array",
                                            key: "popupImages",
                                            displayer: "Popup Medias",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media ",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-2-600x728.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media ",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-2-gallery-1-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-2-gallery-2-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-2-gallery-3-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-2-gallery-4-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "media",
                                    displayer: "Image",
                                    value: [
                                        {
                                            type: "media",
                                            key: "cardImage",
                                            displayer: "Card Media",
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                            value: {
                                                type: "image",
                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-3-1-600x728.jpg",
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title",
                                            value: "ROSE HOLDBACK",
                                        },
                                        {
                                            type: "currency",
                                            key: "price",
                                            displayer: "Price",
                                            value: { value: "160", currency: "USD" },
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Text",
                                            value: "NEW",
                                        },
                                        {
                                            type: "string",
                                            key: "rightText",
                                            displayer: "Right Text",
                                            value: "-19%",
                                        },
                                        {
                                            type: "string",
                                            key: "bottomText",
                                            displayer: "Bottom Text",
                                            value: "QUICK LOOK",
                                        },
                                        {
                                            type: "media",
                                            key: "bottomIcon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "RxHeartFilled",
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "subTitle",
                                            displayer: "Subtitle",
                                            value: "ADD TO CART",
                                        },
                                        {
                                            type: "page",
                                            key: "navigateTo",
                                            displayer: "Navigate To",
                                            value: "",
                                        },
                                        {
                                            type: "boolean",
                                            key: "overlay",
                                            displayer: "Overlay",
                                            value: false,
                                        },
                                        {
                                            type: "array",
                                            key: "popupImages",
                                            displayer: "Popup Medias",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media ",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-3-1-600x728.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media ",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-18-gallery-1-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-18-gallery-2-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-18-gallery-3-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-18-gallery-4-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "media",
                                    displayer: "Image",
                                    value: [
                                        {
                                            type: "media",
                                            key: "cardImage",
                                            displayer: "Card Media",
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                            value: {
                                                type: "image",
                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-1-600x728.jpg",
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title",
                                            value: "TABLE LAMP",
                                        },
                                        {
                                            type: "currency",
                                            key: "price",
                                            displayer: "Price",
                                            value: { value: "160", currency: "USD" },
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Text",
                                            value: "NEW",
                                        },
                                        {
                                            type: "string",
                                            key: "rightText",
                                            displayer: "Right Text",
                                            value: "-19%",
                                        },
                                        {
                                            type: "string",
                                            key: "bottomText",
                                            displayer: "Bottom Text",
                                            value: "QUICK LOOK",
                                        },
                                        {
                                            type: "media",
                                            key: "bottomIcon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "RxHeartFilled",
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "subTitle",
                                            displayer: "Subtitle",
                                            value: "ADD TO CART",
                                        },
                                        {
                                            type: "page",
                                            key: "navigateTo",
                                            displayer: "Navigate To",
                                            value: "",
                                        },
                                        {
                                            type: "boolean",
                                            key: "overlay",
                                            displayer: "Overlay",
                                            value: false,
                                        },
                                        {
                                            type: "array",
                                            key: "popupImages",
                                            displayer: "Popup Medias",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media ",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-1-600x728.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media ",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-1-gallery-4-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-1-gallery-3-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-1-gallery-2-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-1-gallery-1-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    type: "object",
                    key: "imageGallery",
                    displayer: "Category Properties",
                    value: [
                        {
                            type: "string",
                            key: "sectionTitle",
                            displayer: "Category Title",
                            value: "LIGHTNING",
                        },
                        {
                            type: "array",
                            key: "images",
                            displayer: "Image Gallery",
                            value: [
                                {
                                    type: "object",
                                    key: "media",
                                    displayer: "Image",
                                    value: [
                                        {
                                            type: "media",
                                            key: "cardImage",
                                            displayer: "Card Media",
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                            value: {
                                                type: "image",
                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-1-600x728.jpg",
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title",
                                            value: "TABLE LAMP",
                                        },
                                        {
                                            type: "currency",
                                            key: "price",
                                            displayer: "Price",
                                            value: { value: "160", currency: "USD" },
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Text",
                                            value: "NEW",
                                        },
                                        {
                                            type: "string",
                                            key: "rightText",
                                            displayer: "Right Text",
                                            value: "-19%",
                                        },
                                        {
                                            type: "string",
                                            key: "bottomText",
                                            displayer: "Bottom Text",
                                            value: "QUICK LOOK",
                                        },
                                        {
                                            type: "media",
                                            key: "bottomIcon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "RxHeartFilled",
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "subTitle",
                                            displayer: "Subtitle",
                                            value: "ADD TO CART",
                                        },
                                        {
                                            type: "page",
                                            key: "navigateTo",
                                            displayer: "Navigate To",
                                            value: "",
                                        },
                                        {
                                            type: "boolean",
                                            key: "overlay",
                                            displayer: "Overlay",
                                            value: false,
                                        },
                                        {
                                            type: "array",
                                            key: "popupImages",
                                            displayer: "Popup Medias",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media ",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-1-600x728.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media ",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-1-gallery-4-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-1-gallery-3-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-1-gallery-2-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-1-gallery-1-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    type: "object",
                    key: "imageGallery",
                    displayer: "Category Properties",
                    value: [
                        {
                            type: "string",
                            key: "sectionTitle",
                            displayer: "Category Title",
                            value: "DECORATION",
                        },
                        {
                            type: "array",
                            key: "images",
                            displayer: "Image Gallery",
                            value: [
                                {
                                    type: "object",
                                    key: "media",
                                    displayer: "Image",
                                    value: [
                                        {
                                            type: "media",
                                            key: "cardImage",
                                            displayer: "Card Media",
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                            value: {
                                                type: "image",
                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-8-600x728.jpg",
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title",
                                            value: "BASKET WITH HANDLES",
                                        },
                                        {
                                            type: "currency",
                                            key: "price",
                                            displayer: "Price",
                                            value: { value: "160", currency: "USD" },
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Text",
                                            value: "NEW",
                                        },
                                        {
                                            type: "string",
                                            key: "rightText",
                                            displayer: "Right Text",
                                            value: "-19%",
                                        },
                                        {
                                            type: "string",
                                            key: "bottomText",
                                            displayer: "Bottom Text",
                                            value: "QUICK LOOK",
                                        },
                                        {
                                            type: "media",
                                            key: "bottomIcon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "RxHeartFilled",
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "subTitle",
                                            displayer: "Subtitle",
                                            value: "ADD TO CART",
                                        },
                                        {
                                            type: "page",
                                            key: "navigateTo",
                                            displayer: "Navigate To",
                                            value: "",
                                        },
                                        {
                                            type: "boolean",
                                            key: "overlay",
                                            displayer: "Overlay",
                                            value: false,
                                        },
                                        {
                                            type: "array",
                                            key: "popupImages",
                                            displayer: "Popup Medias",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            displayer: "Popup Media ",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-8-600x728.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media ",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-8-gallery-1-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-8-gallery-2-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-8-gallery-3-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-8-gallery-4-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "media",
                                    displayer: "Image",
                                    value: [
                                        {
                                            type: "media",
                                            key: "cardImage",
                                            displayer: "Card Media",
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                            value: {
                                                type: "image",
                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-3-1-600x728.jpg",
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title",
                                            value: "ROSE HOLDBACK",
                                        },
                                        {
                                            type: "currency",
                                            key: "price",
                                            displayer: "Price",
                                            value: { value: "160", currency: "USD" },
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Text",
                                            value: "NEW",
                                        },
                                        {
                                            type: "string",
                                            key: "rightText",
                                            displayer: "Right Text",
                                            value: "-19%",
                                        },
                                        {
                                            type: "string",
                                            key: "bottomText",
                                            displayer: "Bottom Text",
                                            value: "QUICK LOOK",
                                        },
                                        {
                                            type: "media",
                                            key: "bottomIcon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "RxHeartFilled",
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "subTitle",
                                            displayer: "Subtitle",
                                            value: "ADD TO CART",
                                        },
                                        {
                                            type: "page",
                                            key: "navigateTo",
                                            displayer: "Navigate To",
                                            value: "",
                                        },
                                        {
                                            type: "boolean",
                                            key: "overlay",
                                            displayer: "Overlay",
                                            value: false,
                                        },
                                        {
                                            type: "array",
                                            key: "popupImages",
                                            displayer: "Popup Medias",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media ",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-3-1-600x728.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media ",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-18-gallery-1-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-18-gallery-2-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-18-gallery-3-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-18-gallery-4-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    type: "object",
                    key: "imageGallery",
                    displayer: "Category Properties",
                    value: [
                        {
                            type: "string",
                            key: "sectionTitle",
                            displayer: "Category Title",
                            value: "VASES",
                        },
                        {
                            type: "array",
                            key: "images",
                            displayer: "Image Gallery",
                            value: [
                                {
                                    type: "object",
                                    key: "media",
                                    displayer: "Image",
                                    value: [
                                        {
                                            type: "media",
                                            key: "cardImage",
                                            displayer: "Card Media",
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                            value: {
                                                type: "image",
                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-2-600x728.jpg",
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title",
                                            value: "POTTERY VASE",
                                        },
                                        {
                                            type: "currency",
                                            key: "price",
                                            displayer: "Price",
                                            value: { value: "160", currency: "USD" },
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Text",
                                            value: "NEW",
                                        },
                                        {
                                            type: "string",
                                            key: "rightText",
                                            displayer: "Right Text",
                                            value: "-19%",
                                        },
                                        {
                                            type: "string",
                                            key: "bottomText",
                                            displayer: "Bottom Text",
                                            value: "QUICK LOOK",
                                        },
                                        {
                                            type: "media",
                                            key: "bottomIcon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "RxHeartFilled",
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "subTitle",
                                            displayer: "Subtitle",
                                            value: "ADD TO CART",
                                        },
                                        {
                                            type: "page",
                                            key: "navigateTo",
                                            displayer: "Navigate To",
                                            value: "",
                                        },
                                        {
                                            type: "boolean",
                                            key: "overlay",
                                            displayer: "Overlay",
                                            value: false,
                                        },
                                        {
                                            type: "array",
                                            key: "popupImages",
                                            displayer: "Popup Medias",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media ",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-2-600x728.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media ",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-2-gallery-1-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-2-gallery-2-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-2-gallery-3-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-2-gallery-4-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "media",
                                    displayer: "Image",
                                    value: [
                                        {
                                            type: "media",
                                            key: "cardImage",
                                            displayer: "Card Media",
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                            value: {
                                                type: "image",
                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-7-600x728.jpg",
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title",
                                            value: "FLOWER VASE",
                                        },
                                        {
                                            type: "currency",
                                            key: "price",
                                            displayer: "Price",
                                            value: { value: "160", currency: "USD" },
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Text",
                                            value: "NEW",
                                        },
                                        {
                                            type: "string",
                                            key: "rightText",
                                            displayer: "Right Text",
                                            value: "-19%",
                                        },
                                        {
                                            type: "string",
                                            key: "bottomText",
                                            displayer: "Bottom Text",
                                            value: "QUICK LOOK",
                                        },
                                        {
                                            type: "media",
                                            key: "bottomIcon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "RxHeartFilled",
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "subTitle",
                                            displayer: "Subtitle",
                                            value: "ADD TO CART",
                                        },
                                        {
                                            type: "page",
                                            key: "navigateTo",
                                            displayer: "Navigate To",
                                            value: "",
                                        },
                                        {
                                            type: "boolean",
                                            key: "overlay",
                                            displayer: "Overlay",
                                            value: false,
                                        },
                                        {
                                            type: "array",
                                            key: "popupImages",
                                            displayer: "Popup Medias",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media ",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-7-600x728.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media ",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-7-gallery-1-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-7-gallery-2-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-7-gallery-3-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-7-gallery-4-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    type: "object",
                    key: "imageGallery",
                    displayer: "Category Properties",
                    value: [
                        {
                            type: "string",
                            key: "sectionTitle",
                            displayer: "Category Title",
                            value: "BASICS",
                        },
                        {
                            type: "array",
                            key: "images",
                            displayer: "Image Gallery",
                            value: [
                                {
                                    type: "object",
                                    key: "media",
                                    displayer: "Image",
                                    value: [
                                        {
                                            type: "media",
                                            key: "cardImage",
                                            displayer: "Card Media",
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                            value: {
                                                type: "image",
                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-6-600x728.jpg",
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title",
                                            value: "DECO ACCESSORY",
                                        },
                                        {
                                            type: "currency",
                                            key: "price",
                                            displayer: "Price",
                                            value: { value: "160", currency: "USD" },
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Text",
                                            value: "NEW",
                                        },
                                        {
                                            type: "string",
                                            key: "rightText",
                                            displayer: "Right Text",
                                            value: "-19%",
                                        },
                                        {
                                            type: "string",
                                            key: "bottomText",
                                            displayer: "Bottom Text",
                                            value: "QUICK LOOK",
                                        },
                                        {
                                            type: "media",
                                            key: "bottomIcon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "RxHeartFilled",
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "subTitle",
                                            displayer: "Subtitle",
                                            value: "ADD TO CART",
                                        },
                                        {
                                            type: "page",
                                            key: "navigateTo",
                                            displayer: "Navigate To",
                                            value: "",
                                        },
                                        {
                                            type: "boolean",
                                            key: "overlay",
                                            displayer: "Overlay",
                                            value: false,
                                        },
                                        {
                                            type: "array",
                                            key: "popupImages",
                                            displayer: "Popup Medias",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media ",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-6-600x728.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media ",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-6-gallery-1-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media 2",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-6-gallery-2-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-6-gallery-3-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-6-gallery-4-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "media",
                                    displayer: "Image",
                                    value: [
                                        {
                                            type: "media",
                                            key: "cardImage",
                                            displayer: "Card Media",
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                            value: {
                                                type: "image",
                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-5-600x728.jpg",
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title",
                                            value: "WALL CLOCK",
                                        },
                                        {
                                            type: "currency",
                                            key: "price",
                                            displayer: "Price",
                                            value: { value: "160", currency: "USD" },
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Text",
                                            value: "NEW",
                                        },
                                        {
                                            type: "string",
                                            key: "rightText",
                                            displayer: "Right Text",
                                            value: "-19%",
                                        },
                                        {
                                            type: "string",
                                            key: "bottomText",
                                            displayer: "Bottom Text",
                                            value: "QUICK LOOK",
                                        },
                                        {
                                            type: "media",
                                            key: "bottomIcon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "RxHeartFilled",
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "subTitle",
                                            displayer: "Subtitle",
                                            value: "ADD TO CART",
                                        },
                                        {
                                            type: "page",
                                            key: "navigateTo",
                                            displayer: "Navigate To",
                                            value: "",
                                        },
                                        {
                                            type: "boolean",
                                            key: "overlay",
                                            displayer: "Overlay",
                                            value: false,
                                        },
                                        {
                                            type: "array",
                                            key: "popupImages",
                                            displayer: "Popup Medias",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media ",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-5-600x728.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media ",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-5-gallery-1-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-5-gallery-2-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-5-gallery-3-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-5-gallery-4-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "media",
                                    displayer: "Image",
                                    value: [
                                        {
                                            type: "media",
                                            key: "cardImage",
                                            displayer: "Card Media",
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                            value: {
                                                type: "image",
                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-4-600x728.jpg",
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title",
                                            value: "NEWSPAPER STORAGE",
                                        },
                                        {
                                            type: "currency",
                                            key: "price",
                                            displayer: "Price",
                                            value: { value: "160", currency: "USD" },
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Text",
                                            value: "NEW",
                                        },
                                        {
                                            type: "string",
                                            key: "rightText",
                                            displayer: "Right Text",
                                            value: "-19%",
                                        },
                                        {
                                            type: "string",
                                            key: "bottomText",
                                            displayer: "Bottom Text",
                                            value: "QUICK LOOK",
                                        },
                                        {
                                            type: "media",
                                            key: "bottomIcon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "RxHeartFilled",
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "subTitle",
                                            displayer: "Subtitle",
                                            value: "ADD TO CART",
                                        },
                                        {
                                            type: "page",
                                            key: "navigateTo",
                                            displayer: "Navigate To",
                                            value: "",
                                        },
                                        {
                                            type: "boolean",
                                            key: "overlay",
                                            displayer: "Overlay",
                                            value: false,
                                        },
                                        {
                                            type: "array",
                                            key: "popupImages",
                                            displayer: "Popup Medias",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media ",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-4-600x728.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media ",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-4-gallery-1-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-4-gallery-2-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-4-gallery-3-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Media",
                                                    value: [
                                                        {
                                                            type: "media",
                                                            key: "popupImg",
                                                            additionalParams: {
                                                                availableTypes: ["image", "video"],
                                                            },
                                                            displayer: "Popup Media",
                                                            value: {
                                                                type: "image",
                                                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-4-gallery-4-505x505.jpg",
                                                            },
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
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
                    displayer: "Image Count Initial",
                    value: 4,
                },
                {
                    type: "number",
                    key: "imageCount",
                    displayer: "More Image Count",
                    value: 4,
                },
                {
                    type: "number",
                    key: "itemCount",
                    displayer: "Item Count in a Row",
                    value: 4,
                },
            ],
        });
        this.addProp({
            type: "object",
            key: "popupSettings",
            displayer: "Popup Settings",
            value: [
                {
                    type: "media",
                    key: "prevArrow",
                    displayer: "Prev Icon",
                    additionalParams: {
                        availableTypes: ["icon", "image"],
                    },
                    value: {
                        type: "icon",
                        name: "GrLinkPrevious",
                    },
                },
                {
                    type: "media",
                    key: "nextArrow",
                    displayer: "Next Icon",
                    additionalParams: {
                        availableTypes: ["icon", "image"],
                    },
                    value: {
                        type: "icon",
                        name: "GrLinkNext",
                    },
                },
                {
                    type: "media",
                    key: "closeIcon",
                    displayer: "Close Icon",
                    additionalParams: {
                        availableTypes: ["icon", "image"],
                    },
                    value: {
                        type: "icon",
                        name: "IoIosClose",
                    },
                },
                {
                    type: "boolean",
                    key: "mediaPageNumber",
                    displayer: "Media Page Number",
                    value: true,
                },
            ],
        });

        this.addProp(INPUTS.BUTTON("button", "Button", "Load More", "", null, null, "Primary"));

        this.setComponentState("selectedIndex", 0);
        this.setComponentState("moreImages", 0);
        this.setComponentState("activePopup", null);
        this.setComponentState("popupImageIndex", 0);
        this.setComponentState(
            "imageCount",
            this.castToObject<{ imageCountInitial: number }>("countSettings").imageCountInitial
        );
    }

    static getName(): string {
        return "ECommerce 2";
    }

    componentDidMount(): void {
        const imageGallery = this.castToObject<ImageGallery[]>("imageGalleries");
        let firstSectionTitle = null;
        if (
            imageGallery &&
            imageGallery.length > 0 &&
            imageGallery[0].sectionTitle !== undefined
        ) {
            firstSectionTitle = this.castToString(imageGallery[0].sectionTitle);
        }
        this.setComponentState("selectedSection", firstSectionTitle);
        document.addEventListener("keydown", this.handleKeyDown);
    }
    onComponentWillUnmount(): void {
        document.removeEventListener("keydown", this.handleKeyDown);
    }
    handleSectionClick(sectionTitle: React.ReactNode, index: number): void {
        this.setComponentState("selectedSection", String(sectionTitle));
        this.setComponentState("selectedIndex", index);
        const countSettings = this.castToObject<{ imageCountInitial: number; imageCount: number; itemCount: number }>("countSettings");
        this.setComponentState("imageCount", countSettings.imageCount);
        this.setComponentState("moreImages", 0);
    }

    handleSectionClickAll(): void {
        const showAllSettings = this.castToObject<{ showAll: boolean; allText: React.JSX.Element }>("showAllSettings");
        const countSettings = this.castToObject<{ imageCountInitial: number; imageCount: number; itemCount: number }>("countSettings");
        this.setComponentState("selectedSection", this.castToString(showAllSettings.allText));
        this.setComponentState("selectedIndex", -1);
        this.setComponentState("moreImages", 0);
        this.setComponentState("imageCount", countSettings.imageCountInitial);
    }

    handleButtonClick = (): void => {
        const currentMoreImages = this.getComponentState("moreImages");
        const countSettings = this.castToObject<{ imageCountInitial: number; imageCount: number; itemCount: number }>("countSettings");
        this.setComponentState("moreImages", currentMoreImages + countSettings.imageCount);
    };

    handleQuickLookClick = (image: Image, event: React.MouseEvent): void => {
        event.preventDefault();
        this.setComponentState("activePopup", image);
        this.setComponentState("popupImageIndex", 0);
    };

    handleNextImage = () => {
        const activePopup = this.getComponentState("activePopup");
        const currentIndex = this.getComponentState("popupImageIndex");
        const totalImages = activePopup?.popupImages?.length || 0;

        const newIndex = currentIndex === totalImages - 1 ? 0 : currentIndex + 1;

        this.setComponentState("popupImageIndex", newIndex);
    };

    handlePrevImage = () => {
        const activePopup = this.getComponentState("activePopup");
        const currentIndex = this.getComponentState("popupImageIndex");
        const totalImages = activePopup?.popupImages?.length || 0;

        const newIndex = currentIndex === 0 ? totalImages - 1 : currentIndex - 1;

        this.setComponentState("popupImageIndex", newIndex);
    };

    closePopup = (): void => {
        this.setComponentState("activePopup", null);
        this.setComponentState("popupImageIndex", 0);
    };

    handleKeyDown = (event: KeyboardEvent) => {
        switch (event.key) {
            case "ArrowLeft":
                this.handlePrevImage();
                break;
            case "ArrowRight":
                this.handleNextImage();
                break;
            case "Escape":
                this.closePopup();
                break;
            default:
                break;
        }
    };

    render() {
        const imageGallery = this.castToObject<ImageGallery[]>("imageGalleries");

        if (
            !imageGallery ||
            imageGallery.length === 0 ||
            !imageGallery.some((gallery) => gallery.sectionTitle)
        ) {
            return null;
        }

        const currentImageCount = this.getComponentState("imageCount");
        const countSettings = this.castToObject<{ imageCountInitial: number; imageCount: number; itemCount: number }>("countSettings");
        const initialImageCount = countSettings.imageCountInitial;
        const itemCount = countSettings.itemCount;
        const showAllSettings = this.castToObject<{ showAll: boolean; allText: React.JSX.Element }>("showAllSettings");
        const allText = this.castToString(showAllSettings.allText);
        const showAll = showAllSettings.showAll;
        const moreImages = this.getComponentState("moreImages");
        const selectedIndex = this.getComponentState("selectedIndex");
        const popupSettings = this.castToObject<PopupSettings>("popupSettings");
        const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");
        const headerButton: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("headerButton");
        const imgCounter = popupSettings.mediaPageNumber;
        const subtitle = this.getPropValue("subtitle");
        const subtitleStr = this.castToString(subtitle);
        const title = this.getPropValue("title");
        const titleStr = this.castToString(title);
        const description = this.getPropValue("description");
        const descriptionStr = this.castToString(description);
        const activePopup = this.getComponentState("activePopup");
        const imgCount = activePopup ? `${this.getComponentState("popupImageIndex") + 1} of ${activePopup?.popupImages?.length || 0}` : "";

        if (currentImageCount !== initialImageCount + moreImages) {
            this.setComponentState("imageCount", initialImageCount + moreImages);
        }

        const allImages = imageGallery.reduce((acc: Image[], gallery) => {
            gallery.images.forEach((image) => {
                if (!acc.some((img) => (img.cardImage as { url?: string })?.url === (image.cardImage as { url?: string })?.url)) {
                    acc.push(image);
                }
            });
            return acc;
        }, []);

        const totalImages = selectedIndex === -1 ? allImages.length : (imageGallery[selectedIndex]?.images?.length || 0);

        const filteredImages = selectedIndex === -1
            ? allImages.slice(0, currentImageCount)
            : imageGallery[selectedIndex]?.images?.slice(0, currentImageCount) || [];

        return (
            <Base.Container
                className={`${this.decorateCSS("container")} ${this.decorateCSS("with-overlay")}`}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {(subtitleStr || titleStr || descriptionStr || this.castToString(headerButton.text)) && (
                        <Base.VerticalContent className={this.decorateCSS("header")}>
                            {subtitleStr && (
                                <Base.SectionSubTitle className={this.decorateCSS("header-subtitle")}>
                                    {subtitle}
                                </Base.SectionSubTitle>
                            )}
                            {titleStr && (
                                <Base.SectionTitle className={this.decorateCSS("header-title")}>
                                    {title}
                                </Base.SectionTitle>
                            )}
                            {descriptionStr && (
                                <Base.SectionDescription className={this.decorateCSS("header-description")}>
                                    {description}
                                </Base.SectionDescription>
                            )}
                            {this.castToString(headerButton.text) && (
                                <Base.Button
                                    buttonType={headerButton.type}
                                    className={this.decorateCSS("header-button")}>
                                    <Base.P className={this.decorateCSS("header-button-text")}>{headerButton.text}</Base.P>
                                </Base.Button>
                            )}
                        </Base.VerticalContent>
                    )}
                    <Base.Row className={this.decorateCSS("tab-container")}>
                        {showAll && allText && (
                            <Base.P
                                className={`${this.decorateCSS("tab")} 
                                ${selectedIndex === -1 ? this.decorateCSS("active-tab") : ""}`}
                                onClick={() => this.handleSectionClickAll()}>
                                {showAllSettings.allText}
                            </Base.P>
                        )}
                        {imageGallery.map((item, index) => {
                            if (!item.sectionTitle) return null;
                            return (
                                <>
                                    {this.castToString(item.sectionTitle) && (
                                        <Base.P
                                            key={index}
                                            className={`${this.decorateCSS("tab")} 
                                            ${index === selectedIndex ? this.decorateCSS("active-tab") : ""}`}
                                            onClick={() => this.handleSectionClick(item.sectionTitle, index)}>
                                            {item.sectionTitle}
                                        </Base.P>
                                    )}
                                </>
                            );
                        })}
                    </Base.Row>
                    <Base.ListGrid gridCount={{ pc: itemCount }} className={this.decorateCSS("grid")}>
                        {filteredImages.map((image, imgIndex) => {
                            const shouldRenderCard =
                                this.castToString(image.title) ||
                                image.price?.value ||
                                this.castToString(image.subTitle) ||
                                (image.cardImage as { url?: string })?.url ||
                                this.castToString(image.bottomText) ||
                                image.bottomIcon ||
                                this.castToString(image.leftText) ||
                                this.castToString(image.rightText);

                            return (
                                shouldRenderCard && (
                                    <Base.VerticalContent key={imgIndex} className={this.decorateCSS("card-container")}>
                                        <ComposerLink path={image.navigateTo}>
                                            <div className={this.decorateCSS("image-container")}>
                                                <div className={`${this.decorateCSS("image-bottom")} animate__animated animate__fadeInUp`}>
                                                    {this.castToString(image.bottomText) && (
                                                        <Base.P
                                                            className={this.decorateCSS("image-bottom-text")}
                                                            onClick={(e: React.MouseEvent<HTMLParagraphElement>) =>
                                                                this.handleQuickLookClick(image, e)
                                                            }>

                                                            {image.bottomText}
                                                        </Base.P>
                                                    )}
                                                    {image.bottomIcon && (
                                                        <div className={this.decorateCSS("image-bottom-icon")}>
                                                            <Base.Media value={image.bottomIcon} className={this.decorateCSS("icon")} />
                                                        </div>
                                                    )}
                                                </div>
                                                <div className={this.decorateCSS("image-text")}>
                                                    {this.castToString(image.leftText) && (
                                                        <Base.P className={this.decorateCSS("leftText")}>
                                                            {image.leftText}
                                                        </Base.P>
                                                    )}
                                                    {this.castToString(image.rightText) && (
                                                        <Base.P className={this.decorateCSS("rightText")}>
                                                            {image.rightText}
                                                        </Base.P>
                                                    )}
                                                </div>
                                                {(image.cardImage as { url?: string })?.url && (
                                                    <Base.Media
                                                        value={image.cardImage}
                                                        className={this.decorateCSS("image")}
                                                    />
                                                )}
                                                {image.overlay && <div className={this.decorateCSS("overlay")}></div>}
                                            </div>
                                        </ComposerLink>
                                        <Base.VerticalContent className={this.decorateCSS("text-container")}>
                                            {this.castToString(image.title) && (
                                                <Base.P className={this.decorateCSS("title")}>
                                                    {image.title}
                                                </Base.P>
                                            )}
                                            {image.price?.value && (
                                                <Base.P className={this.decorateCSS("price")}>
                                                    {image.price.value} {getCurrencyInfo(image.price.currency)?.symbol}
                                                </Base.P>
                                            )}
                                            {this.castToString(image.subTitle) && (
                                                <Base.P
                                                    className={`${this.decorateCSS("subTitle")} animate__animated animate__fadeInLeft`}>
                                                    {image.subTitle}
                                                </Base.P>
                                            )}
                                        </Base.VerticalContent>
                                    </Base.VerticalContent>
                                )
                            );
                        })}
                    </Base.ListGrid>
                    {this.castToString(button.text) && (() => {
                        const hasMoreItems = currentImageCount < totalImages;
                        return (
                            <div className={this.decorateCSS("button-wrapper")}>
                                <ComposerLink path={hasMoreItems ? "" : button.url}>
                                    <Base.Button
                                        buttonType={button.type}
                                        className={this.decorateCSS("button")}
                                        onClick={hasMoreItems ? this.handleButtonClick : undefined}>
                                        <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                                    </Base.Button>
                                </ComposerLink>
                            </div>
                        );
                    })()}
                    {activePopup &&
                        activePopup.popupImages &&
                        activePopup.popupImages.length > 0 && (
                            <Base.Overlay
                                className={this.decorateCSS("popup-overlay")}
                                onClick={this.closePopup}
                                isVisible={true}>
                                <div
                                    className={this.decorateCSS("popup-content-wrapper")}
                                    onClick={this.closePopup}
                                >
                                    <div className={this.decorateCSS("popup-image-container")}
                                        onClick={(e) => e.stopPropagation()}>
                                        <Base.Media
                                            value={activePopup.popupImages[this.getComponentState("popupImageIndex")]?.popupImg}
                                            className={this.decorateCSS("popup-image")}
                                        />
                                        {activePopup.popupImages.length > 1 && (
                                            <>
                                                {popupSettings.prevArrow && (
                                                    <button
                                                        className={this.decorateCSS("prevArrow")}
                                                        onClick={this.handlePrevImage}>
                                                        <Base.Media
                                                            value={popupSettings.prevArrow}
                                                            className={this.decorateCSS("arrow")}
                                                        />
                                                    </button>
                                                )}
                                                {popupSettings.nextArrow && (
                                                    <button
                                                        className={this.decorateCSS("nextArrow")}
                                                        onClick={this.handleNextImage}>
                                                        <Base.Media
                                                            value={popupSettings.nextArrow}
                                                            className={this.decorateCSS("arrow")}
                                                        />
                                                    </button>
                                                )}
                                            </>
                                        )}
                                        {popupSettings.closeIcon && (
                                            <button
                                                className={this.decorateCSS("popup-close")}
                                                onClick={this.closePopup}>
                                                <Base.Media
                                                    value={popupSettings.closeIcon}
                                                    className={this.decorateCSS("arrow")}
                                                />
                                            </button>
                                        )}
                                    </div>
                                    <div className={this.decorateCSS("image-info")}>
                                        <Base.P className={this.decorateCSS("image-title")}>
                                            {activePopup.title}
                                        </Base.P>
                                        {imgCounter && (
                                            <Base.P className={this.decorateCSS("image-count")}>
                                                {imgCount}
                                            </Base.P>
                                        )}
                                    </div>
                                </div>
                            </Base.Overlay>
                        )}
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default ECommerce2;
