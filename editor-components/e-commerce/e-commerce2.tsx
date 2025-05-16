import * as React from "react";
import { Base } from "composer-tools/composer-base-components/base/base";
import styles from "./e-commerce2.module.scss";
import { BaseECommerce } from "composer-tools/editor-components/EditorComponent";
import { ComposerIcon } from "../../composer-base-components/icon/icon";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

interface ImageGallery {
    sectionTitle: string;
    images: Image[];
}

interface Image {
    popupImage: Image[];
}

interface ArrowItem {
    nextArrow: string;
    prevArrow: string;
}

interface Image {
    title: React.ReactNode;
    cardImage: string;
    price: string;
    leftText: string;
    rightText: string;
    bottomText: string;
    bottomIcon: string;
    subTitle: string;
}

class ECommerce2 extends BaseECommerce {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "boolean",
            key: "showAll",
            displayer: "Show All Category",
            value: true,
        });
        this.addProp({
            type: "string",
            key: "allText",
            displayer: "All Button Text",
            value: "All",
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
                            displayer: "Section Title",
                            value: "Home Decor",
                        },
                        {
                            type: "array",
                            key: "images",
                            displayer: "Image Gallery",
                            value: [
                                {
                                    type: "object",
                                    key: "image",
                                    displayer: "Image",
                                    value: [
                                        {
                                            type: "image",
                                            key: "cardImage",
                                            displayer: "Card Image",
                                            value:
                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-8-600x728.jpg",
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title 1",
                                            value: "Basket With Handles",
                                        },
                                        {
                                            type: "string",
                                            key: "price",
                                            displayer: "Price",
                                            value: "$160",
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
                                            type: "icon",
                                            key: "bottomIcon",
                                            displayer: "Icon",
                                            value: "RxHeartFilled",
                                        },
                                        {
                                            type: "string",
                                            key: "subTitle",
                                            displayer: "Sub Title",
                                            value: "Add to Cart",
                                        },
                                        {
                                            type: "array",
                                            key: "popupImages",
                                            displayer: "Popup Images",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image ",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-8-600x728.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image ",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-8-gallery-1-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-8-gallery-2-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-8-gallery-3-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-8-gallery-4-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "image",
                                    displayer: "Image",
                                    value: [
                                        {
                                            type: "image",
                                            key: "cardImage",
                                            displayer: "Card Image",
                                            value:
                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-6-600x728.jpg",
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title 1",
                                            value: "Deco Accessory",
                                        },
                                        {
                                            type: "string",
                                            key: "price",
                                            displayer: "Price",
                                            value: "$160",
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Tex",
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
                                            type: "icon",
                                            key: "bottomIcon",
                                            displayer: "Icon",
                                            value: "RxHeartFilled",
                                        },
                                        {
                                            type: "string",
                                            key: "subTitle",
                                            displayer: "Sub Title",
                                            value: "Add to Cart",
                                        },
                                        {
                                            type: "array",
                                            key: "popupImages",
                                            displayer: "Popup Images",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image ",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-6-600x728.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image ",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-6-gallery-1-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image 2",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-6-gallery-2-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-6-gallery-3-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-6-gallery-4-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "image",
                                    displayer: "Image",
                                    value: [
                                        {
                                            type: "image",
                                            key: "cardImage",
                                            displayer: "Card Image",
                                            value:
                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-7-600x728.jpg",
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title 1",
                                            value: "Flower Vase",
                                        },
                                        {
                                            type: "string",
                                            key: "price",
                                            displayer: "Price",
                                            value: "$160",
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Tex",
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
                                            type: "icon",
                                            key: "bottomIcon",
                                            displayer: "Icon",
                                            value: "RxHeartFilled",
                                        },
                                        {
                                            type: "string",
                                            key: "subTitle",
                                            displayer: "Sub Title",
                                            value: "Add to Cart",
                                        },
                                        {
                                            type: "array",
                                            key: "popupImages",
                                            displayer: "Popup Images",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image ",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-7-600x728.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image ",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-7-gallery-1-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-7-gallery-2-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-7-gallery-3-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-7-gallery-4-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "image",
                                    displayer: "Image",
                                    value: [
                                        {
                                            type: "image",
                                            key: "cardImage",
                                            displayer: "Card Image",
                                            value:
                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-5-600x728.jpg",
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title 1",
                                            value: "Wall Clock",
                                        },
                                        {
                                            type: "string",
                                            key: "price",
                                            displayer: "Price",
                                            value: "$160",
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Tex",
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
                                            type: "icon",
                                            key: "bottomIcon",
                                            displayer: "Icon",
                                            value: "RxHeartFilled",
                                        },
                                        {
                                            type: "string",
                                            key: "subTitle",
                                            displayer: "Sub Title",
                                            value: "Add to Cart",
                                        },
                                        {
                                            type: "array",
                                            key: "popupImages",
                                            displayer: "Popup Images",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image ",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-5-600x728.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image ",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-5-gallery-1-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-5-gallery-2-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-5-gallery-3-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-5-gallery-4-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "image",
                                    displayer: "Image",
                                    value: [
                                        {
                                            type: "image",
                                            key: "cardImage",
                                            displayer: "Card Image",
                                            value:
                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-4-600x728.jpg",
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title 1",
                                            value: "Newspaper Storage",
                                        },
                                        {
                                            type: "string",
                                            key: "price",
                                            displayer: "Price",
                                            value: "$160",
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Tex",
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
                                            type: "icon",
                                            key: "bottomIcon",
                                            displayer: "Icon",
                                            value: "RxHeartFilled",
                                        },
                                        {
                                            type: "string",
                                            key: "subTitle",
                                            displayer: "Sub Title",
                                            value: "Add to Cart",
                                        },
                                        {
                                            type: "array",
                                            key: "popupImages",
                                            displayer: "Popup Images",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image ",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-4-600x728.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image ",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-4-gallery-1-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-4-gallery-2-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-4-gallery-3-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-4-gallery-4-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "image",
                                    displayer: "Image",
                                    value: [
                                        {
                                            type: "image",
                                            key: "cardImage",
                                            displayer: "Card Image",
                                            value:
                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-2-600x728.jpg",
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title 1",
                                            value: "Pottery Vase",
                                        },
                                        {
                                            type: "string",
                                            key: "price",
                                            displayer: "Price",
                                            value: "$160",
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Tex",
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
                                            type: "icon",
                                            key: "bottomIcon",
                                            displayer: "Icon",
                                            value: "RxHeartFilled",
                                        },
                                        {
                                            type: "string",
                                            key: "subTitle",
                                            displayer: "Sub Title",
                                            value: "Add to Cart",
                                        },
                                        {
                                            type: "array",
                                            key: "popupImages",
                                            displayer: "Popup Images",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image ",
                                                            value: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-2-600x728.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image ",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-2-gallery-1-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-2-gallery-2-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-2-gallery-3-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-2-gallery-4-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "image",
                                    displayer: "Image",
                                    value: [
                                        {
                                            type: "image",
                                            key: "cardImage",
                                            displayer: "Card Image",
                                            value:
                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-3-1-600x728.jpg",
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title 1",
                                            value: "Rose Holdback",
                                        },
                                        {
                                            type: "string",
                                            key: "price",
                                            displayer: "Price",
                                            value: "$160",
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Tex",
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
                                            type: "icon",
                                            key: "bottomIcon",
                                            displayer: "Icon",
                                            value: "RxHeartFilled",
                                        },
                                        {
                                            type: "string",
                                            key: "subTitle",
                                            displayer: "Sub Title",
                                            value: "Add to Cart",
                                        },
                                        {
                                            type: "array",
                                            key: "popupImages",
                                            displayer: "Popup Images",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image ",
                                                            value: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-3-1-600x728.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image ",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-18-gallery-1-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-18-gallery-2-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-18-gallery-3-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-18-gallery-4-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "image",
                                    displayer: "Image",
                                    value: [
                                        {
                                            type: "image",
                                            key: "cardImage",
                                            displayer: "Card Image",
                                            value: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-1-600x728.jpg",
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title 1",
                                            value: "Table Lamp",
                                        },
                                        {
                                            type: "string",
                                            key: "price",
                                            displayer: "Price",
                                            value: "$160",
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Tex",
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
                                            type: "icon",
                                            key: "bottomIcon",
                                            displayer: "Icon",
                                            value: "RxHeartFilled",
                                        },
                                        {
                                            type: "string",
                                            key: "subTitle",
                                            displayer: "Sub Title",
                                            value: "Add to Cart",
                                        },
                                        {
                                            type: "array",
                                            key: "popupImages",
                                            displayer: "Popup Images",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image ",
                                                            value: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-1-600x728.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image ",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-1-gallery-4-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-1-gallery-3-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-1-gallery-2-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-1-gallery-1-505x505.jpg",
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
                            displayer: "Section Title",
                            value: "Lightning",
                        },
                        {
                            type: "array",
                            key: "images",
                            displayer: "Image Gallery",
                            value: [
                                {
                                    type: "object",
                                    key: "image",
                                    displayer: "Image",
                                    value: [
                                        {
                                            type: "image",
                                            key: "cardImage",
                                            displayer: "Card Image",
                                            value:
                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-1-600x728.jpg",
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title 1",
                                            value: "Table Lamp",
                                        },
                                        {
                                            type: "string",
                                            key: "price",
                                            displayer: "Price",
                                            value: "$160",
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Tex",
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
                                            type: "icon",
                                            key: "bottomIcon",
                                            displayer: "Icon",
                                            value: "RxHeartFilled",
                                        },
                                        {
                                            type: "string",
                                            key: "subTitle",
                                            displayer: "Sub Title",
                                            value: "Add to Cart",
                                        },
                                        {
                                            type: "array",
                                            key: "popupImages",
                                            displayer: "Popup Images",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image ",
                                                            value: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-1-600x728.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image ",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-1-gallery-4-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-1-gallery-3-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-1-gallery-2-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-1-gallery-1-505x505.jpg",
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
                            displayer: "Section Title",
                            value: "Decoration",
                        },
                        {
                            type: "array",
                            key: "images",
                            displayer: "Image Gallery",
                            value: [
                                {
                                    type: "object",
                                    key: "image",
                                    displayer: "Image",
                                    value: [
                                        {
                                            type: "image",
                                            key: "cardImage",
                                            displayer: "Card Image",
                                            value:
                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-8-600x728.jpg",
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title 1",
                                            value: "Basket With Handles",
                                        },
                                        {
                                            type: "string",
                                            key: "price",
                                            displayer: "Price",
                                            value: "$160",
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Tex",
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
                                            type: "icon",
                                            key: "bottomIcon",
                                            displayer: "Icon",
                                            value: "RxHeartFilled",
                                        },
                                        {
                                            type: "string",
                                            key: "subTitle",
                                            displayer: "Sub Title",
                                            value: "Add to Cart",
                                        },
                                        {
                                            type: "array",
                                            key: "popupImages",
                                            displayer: "Popup Images",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image ",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-8-600x728.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image ",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-8-gallery-1-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-8-gallery-2-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-8-gallery-3-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-8-gallery-4-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "image",
                                    displayer: "Image",
                                    value: [
                                        {
                                            type: "image",
                                            key: "cardImage",
                                            displayer: "Card Image",
                                            value:
                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-3-1-600x728.jpg",
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title 1",
                                            value: "Rose Holdback",
                                        },
                                        {
                                            type: "string",
                                            key: "price",
                                            displayer: "Price",
                                            value: "$160",
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Tex",
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
                                            type: "icon",
                                            key: "bottomIcon",
                                            displayer: "Icon",
                                            value: "RxHeartFilled",
                                        },
                                        {
                                            type: "string",
                                            key: "subTitle",
                                            displayer: "Sub Title",
                                            value: "Add to Cart",
                                        },
                                        {
                                            type: "array",
                                            key: "popupImages",
                                            displayer: "Popup Images",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image ",
                                                            value: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-3-1-600x728.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image ",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-18-gallery-1-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-18-gallery-2-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-18-gallery-3-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-18-gallery-4-505x505.jpg",
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
                            displayer: "Section Title",
                            value: "Vases",
                        },
                        {
                            type: "array",
                            key: "images",
                            displayer: "Image Gallery",
                            value: [
                                {
                                    type: "object",
                                    key: "image",
                                    displayer: "Image",
                                    value: [
                                        {
                                            type: "image",
                                            key: "cardImage",
                                            displayer: "Card Image",
                                            value:
                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-2-600x728.jpg",
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title 1",
                                            value: "Pottery Vase",
                                        },
                                        {
                                            type: "string",
                                            key: "price",
                                            displayer: "Price",
                                            value: "$160",
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Tex",
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
                                            type: "icon",
                                            key: "bottomIcon",
                                            displayer: "Icon",
                                            value: "RxHeartFilled",
                                        },
                                        {
                                            type: "string",
                                            key: "subTitle",
                                            displayer: "Sub Title",
                                            value: "Add to Cart",
                                        },
                                        {
                                            type: "array",
                                            key: "popupImages",
                                            displayer: "Popup Images",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image ",
                                                            value: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-2-600x728.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image ",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-2-gallery-1-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-2-gallery-2-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-2-gallery-3-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-2-gallery-4-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "image",
                                    displayer: "Image",
                                    value: [
                                        {
                                            type: "image",
                                            key: "cardImage",
                                            displayer: "Card Image",
                                            value:
                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-7-600x728.jpg",
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title 1",
                                            value: "Flower Vase",
                                        },
                                        {
                                            type: "string",
                                            key: "price",
                                            displayer: "Price",
                                            value: "$160",
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Tex",
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
                                            type: "icon",
                                            key: "bottomIcon",
                                            displayer: "Icon",
                                            value: "RxHeartFilled",
                                        },
                                        {
                                            type: "string",
                                            key: "subTitle",
                                            displayer: "Sub Title",
                                            value: "Add to Cart",
                                        },
                                        {
                                            type: "array",
                                            key: "popupImages",
                                            displayer: "Popup Images",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image ",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-7-600x728.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image ",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-7-gallery-1-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-7-gallery-2-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-7-gallery-3-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-7-gallery-4-505x505.jpg",
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
                            displayer: "Section Title",
                            value: "Basics",
                        },
                        {
                            type: "array",
                            key: "images",
                            displayer: "Image Gallery",
                            value: [
                                {
                                    type: "object",
                                    key: "image",
                                    displayer: "Image",
                                    value: [
                                        {
                                            type: "image",
                                            key: "cardImage",
                                            displayer: "Card Image",
                                            value:
                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-6-600x728.jpg",
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title 1",
                                            value: "Deco Accessory",
                                        },
                                        {
                                            type: "string",
                                            key: "price",
                                            displayer: "Price",
                                            value: "$160",
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Tex",
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
                                            type: "icon",
                                            key: "bottomIcon",
                                            displayer: "Icon",
                                            value: "RxHeartFilled",
                                        },
                                        {
                                            type: "string",
                                            key: "subTitle",
                                            displayer: "Sub Title",
                                            value: "Add to Cart",
                                        },
                                        {
                                            type: "array",
                                            key: "popupImages",
                                            displayer: "Popup Images",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image ",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-6-600x728.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image ",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-6-gallery-1-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image 2",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-6-gallery-2-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-6-gallery-3-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-6-gallery-4-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "image",
                                    displayer: "Image",
                                    value: [
                                        {
                                            type: "image",
                                            key: "cardImage",
                                            displayer: "Card Image",
                                            value:
                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-5-600x728.jpg",
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title 1",
                                            value: "Wall Clock",
                                        },
                                        {
                                            type: "string",
                                            key: "price",
                                            displayer: "Price",
                                            value: "$160",
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Tex",
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
                                            type: "icon",
                                            key: "bottomIcon",
                                            displayer: "Icon",
                                            value: "RxHeartFilled",
                                        },
                                        {
                                            type: "string",
                                            key: "subTitle",
                                            displayer: "Sub Title",
                                            value: "Add to Cart",
                                        },
                                        {
                                            type: "array",
                                            key: "popupImages",
                                            displayer: "Popup Images",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image ",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-5-600x728.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image ",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-5-gallery-1-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-5-gallery-2-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-5-gallery-3-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-5-gallery-4-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "image",
                                    displayer: "Image",
                                    value: [
                                        {
                                            type: "image",
                                            key: "cardImage",
                                            displayer: "Flower Vaseity",
                                            value:
                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-4-600x728.jpg",
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title 1",
                                            value: "Newspaper Storage",
                                        },
                                        {
                                            type: "string",
                                            key: "price",
                                            displayer: "Price",
                                            value: "$160",
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Tex",
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
                                            type: "icon",
                                            key: "bottomIcon",
                                            displayer: "Icon",
                                            value: "RxHeartFilled",
                                        },
                                        {
                                            type: "string",
                                            key: "subTitle",
                                            displayer: "Sub Title",
                                            value: "Add to Cart",
                                        },
                                        {
                                            type: "array",
                                            key: "popupImages",
                                            displayer: "Popup Images",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image ",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-4-600x728.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image ",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-4-gallery-1-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-4-gallery-2-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-4-gallery-3-505x505.jpg",
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: "object",
                                                    key: "popupImage",
                                                    displayer: "Popup Image",
                                                    value: [
                                                        {
                                                            type: "image",
                                                            key: "popupImg",
                                                            displayer: "Popup Image",
                                                            value:
                                                                "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-4-gallery-4-505x505.jpg",
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
            type: "number",
            key: "imageCountInitial",
            displayer: "Image Count Initial",
            value: 4,
        });
        this.addProp({
            type: "number",
            key: "imageCount",
            displayer: "More Image Count",
            value: 4,
        });
        this.addProp({
            type: "number",
            key: "itemCount",
            displayer: "Item Count in a Row",
            value: 4,
        });
        this.addProp({
            type: "object",
            key: "arrows",
            displayer: "Arrows",
            value: [
                {
                    type: "icon",
                    key: "prevArrow",
                    displayer: "Prev Icon",
                    value: "GrLinkPrevious",
                },
                {
                    type: "icon",
                    key: "nextArrow",
                    displayer: "Next Icon",
                    value: "GrLinkNext",
                },
            ],
        });
        this.addProp({
            type: "icon",
            key: "closeIcon",
            displayer: "Close Icon",
            value: "IoIosClose",
        })

        this.addProp(INPUTS.BUTTON("button", "Button", "Load More", null, null, null, "Primary"));

        this.setComponentState("selectedIndex", 0);
        this.setComponentState("moreImages", 0);
        this.setComponentState("activePopup", null);
        this.setComponentState("popupImageIndex", 0);
        this.setComponentState("imageCount", this.getPropValue("imageCountInitial"));

    }

    static getName(): string {
        return "ECommerce 2";
    }

    componentDidMount(): void {
        const imageGallery = this.castToObject<ImageGallery[]>("imageGalleries");
        let firstSectionTitle = null;
        if (imageGallery && imageGallery.length > 0 && imageGallery[0].sectionTitle !== undefined) {
            firstSectionTitle = this.castToString(imageGallery[0].sectionTitle);
        }
        this.setComponentState("selectedSection", firstSectionTitle);
    }

    handleSectionClick(sectionTitle: React.ReactNode, index: number): void {
        this.setComponentState("selectedSection", this.castToString(sectionTitle));
        this.setComponentState("selectedIndex", index);
        this.setComponentState("imageCount", this.getPropValue("imageCount"));
        this.setComponentState("moreImages", 0);
    }

    handleSectionClickAll(): void {
        this.setComponentState("selectedSection", this.castToString(this.getPropValue("allText")));
        this.setComponentState("selectedIndex", -1);
        this.setComponentState("moreImages", 0);
        const initialImageCount = this.getPropValue("imageCountInitial");
        this.setComponentState("imageCount", initialImageCount);
    }

    handleButtonClick = (): void => {
        const currentMoreImages = this.getComponentState("moreImages");
        const imageCountToAdd = this.getPropValue("imageCount");
        this.setComponentState("moreImages", currentMoreImages + imageCountToAdd);
    };

    handleQuickLookClick = (image: Image, event: React.MouseEvent): void => {
        event.stopPropagation();
        this.setComponentState("activePopup", image);
        this.setComponentState("popupImageIndex", 0);
    };

    handleNextImage = (e) => {
        e.stopPropagation();
        const activePopup = this.getComponentState("activePopup");
        const currentIndex = this.getComponentState("popupImageIndex");
        const totalImages = activePopup.popupImages.length;

        const newIndex = currentIndex === totalImages - 1 ? 0 : currentIndex + 1;

        this.setComponentState("popupImageIndex", newIndex);
    };

    handlePrevImage = (e) => {
        e.stopPropagation();
        const activePopup = this.getComponentState("activePopup");
        const currentIndex = this.getComponentState("popupImageIndex");
        const totalImages = activePopup.popupImages.length;

        const newIndex = currentIndex === 0 ? totalImages - 1 : currentIndex - 1;

        this.setComponentState("popupImageIndex", newIndex);
    };

    closePopup = (): void => {
        this.setComponentState("activePopup", null);
        this.setComponentState("popupImageIndex", 0);
    };

    render() {
        const imageGallery = this.castToObject<ImageGallery[]>("imageGalleries");
        const currentImageCount = this.getComponentState("imageCount");
        const initialImageCount = this.getPropValue("imageCountInitial");
        const moreImages = this.getComponentState("moreImages");
        const selectedSection = this.getComponentState("selectedSection");
        const selectedIndex = this.getComponentState("selectedIndex");
        const allText = this.castToString(this.getPropValue("allText"));
        const arrows = this.castToObject<ArrowItem>("arrows");
        const showAll = this.getPropValue("showAll");
        const button: INPUTS.CastedButton =
            this.castToObject<INPUTS.CastedButton>("button");

        if (currentImageCount !== initialImageCount + moreImages) {
            this.setComponentState("imageCount", initialImageCount + moreImages);
        }

        const allImages = imageGallery.reduce((acc: Image[], gallery) => {
            gallery.images.forEach((image) => {
                if (!acc.some((img) => img.cardImage === image.cardImage)) {
                    acc.push(image);
                }
            });
            return acc;
        }, []);

        const selectedImages =
            selectedIndex === -1 ? allImages : imageGallery[selectedIndex].images;

        const filteredImages = imageGallery
            .filter(
                (gallery) =>
                    selectedSection === allText ||
                    (gallery.sectionTitle &&
                        this.castToString(gallery.sectionTitle) === selectedSection)
            )
            .reduce((acc: Image[], gallery) => {
                acc.push(...gallery.images);
                return acc;
            }, [])
            .slice(0, currentImageCount);

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <Base.Row className={this.decorateCSS("section-title-container")}>
                        {showAll && allText && (
                            <button
                                className={`${this.decorateCSS("section-title")}
                                           ${selectedIndex === -1 ? this.decorateCSS("active-section-title") : ""
                                    }`}
                                onClick={() => this.handleSectionClickAll()}>
                                {allText}
                            </button>
                        )}
                        {imageGallery.map((item, index) => {
                            if (!item.sectionTitle) return null;
                            return (
                                <>
                                    {this.castToString(item.sectionTitle) && (
                                        <button
                                            key={index}
                                            className={`${this.decorateCSS("section-title")} ${index === selectedIndex ? this.decorateCSS("active-section-title") : "" // Burası zaten selectedIndex kullanıyordu
                                                }`}
                                            onClick={() =>
                                                this.handleSectionClick(item.sectionTitle, index)
                                            }>
                                            {item.sectionTitle}
                                        </button>
                                    )}
                                </>
                            );
                        })}
                    </Base.Row>
                    <Base.ListGrid
                        gridCount={{ pc: this.getPropValue("itemCount") }}
                        className={this.decorateCSS("grid")}>
                        {filteredImages.map((image, imgIndex) => {
                            const shouldRenderCard =
                                this.castToString(image.title) ||
                                this.castToString(image.price) ||
                                this.castToString(image.subTitle) ||
                                image.cardImage ||
                                this.castToString(image.bottomText) ||
                                image.bottomIcon ||
                                this.castToString(image.leftText) ||
                                this.castToString(image.rightText);

                            return (
                                shouldRenderCard && (
                                    <div key={imgIndex} className={this.decorateCSS("card-container")}>
                                        <div className={this.decorateCSS("image-container")}>
                                            <div
                                                className={`${this.decorateCSS("image-bottom")} animate__animated animate__fadeInUp`}>
                                                {this.castToString(image.bottomText) && (
                                                    <div
                                                        className={this.decorateCSS("image-bottom-text")}
                                                        onClick={(e) => this.handleQuickLookClick(image, e)}>
                                                        {image.bottomText}
                                                    </div>
                                                )}
                                                {image.bottomIcon && (
                                                    <div className={this.decorateCSS("image-bottom-icon")}>
                                                        <ComposerIcon name={image.bottomIcon} />
                                                    </div>
                                                )}
                                            </div>
                                            <div className={this.decorateCSS("image-text")}>
                                                {this.castToString(image.leftText) && (
                                                    <div className={this.decorateCSS("leftText")}>
                                                        {image.leftText}
                                                    </div>
                                                )}
                                                {this.castToString(image.rightText) && (
                                                    <div className={this.decorateCSS("rightText")}>
                                                        {image.rightText}
                                                    </div>
                                                )}
                                            </div>
                                            {image.cardImage && (
                                                <img
                                                    alt={image.cardImage}
                                                    src={image.cardImage}
                                                    className={this.decorateCSS("image")}
                                                />
                                            )}
                                        </div>
                                        <div className={this.decorateCSS("text-container")}>
                                            {this.castToString(image.title) && (
                                                <div className={this.decorateCSS("title")}>
                                                    {image.title}
                                                </div>
                                            )}
                                            {this.castToString(image.price) && (
                                                <div className={this.decorateCSS("price")}>
                                                    {image.price}
                                                </div>
                                            )}
                                            {this.castToString(image.subTitle) && (
                                                <div className={`${this.decorateCSS("subTitle")} animate__animated animate__fadeInLeft`}>
                                                    {image.subTitle}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )
                            );
                        })}
                    </Base.ListGrid>
                    {currentImageCount < selectedImages.length && this.castToString(button.text) && (
                        <div className={this.decorateCSS("button-wrapper")}>
                            <Base.Button
                                buttonType={button.type}
                                className={this.decorateCSS("button")}
                                onClick={this.handleButtonClick}>
                                {button.text}
                            </Base.Button>
                        </div>
                    )}
                    {this.getComponentState("activePopup") && (
                        <div className={this.decorateCSS("popup-overlay")} onClick={this.closePopup}>
                            <div className={this.decorateCSS("popup-content")} onClick={this.closePopup}>
                                <div className={this.decorateCSS("popup-image-container")} onClick={(e) => e.stopPropagation()}>
                                    <img src={this.getComponentState("activePopup").popupImages[this.getComponentState("popupImageIndex")].popupImg}
                                        alt="Popup Image" className={this.decorateCSS("popup-image")} />
                                    {this.getComponentState("activePopup").popupImages.length > 1 && (
                                        <>
                                            {arrows.prevArrow && (
                                                <button
                                                    className={this.decorateCSS("prevArrow")}
                                                    onClick={this.handlePrevImage}>
                                                    <ComposerIcon
                                                        name={arrows.prevArrow}
                                                        propsIcon={{ className: this.decorateCSS("arrow") }}
                                                    />
                                                </button>
                                            )}
                                            {arrows.nextArrow && (
                                                <button
                                                    className={this.decorateCSS("nextArrow")}
                                                    onClick={this.handleNextImage}>
                                                    <ComposerIcon
                                                        name={arrows.nextArrow}
                                                        propsIcon={{ className: this.decorateCSS("arrow") }}
                                                    />
                                                </button>
                                            )}
                                        </>
                                    )}
                                    {this.getPropValue("closeIcon") && (
                                        <button
                                            className={this.decorateCSS("popup-close")}
                                            onClick={this.closePopup}>
                                            <ComposerIcon
                                                name={this.getPropValue("closeIcon")}
                                                propsIcon={{ className: this.decorateCSS("arrow") }}
                                            />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default ECommerce2;