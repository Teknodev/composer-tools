import * as React from "react";
import { Base } from "composer-tools/composer-base-components/base/base";
import styles from "./e-commerce2.module.scss";
import { BaseECommerce } from "composer-tools/editor-components/EditorComponent";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

interface ImageGallery {
    sectionTitle: React.ReactNode;
    images: Image[];
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
            type: "number",
            key: "imageCountInitial",
            displayer: "Image Count Initial",
            value: 4,
        })
        this.addProp({
            type: "number",
            key: "imageCount",
            displayer: "More Image Count",
            value: 4,
        })
        this.addProp({
            type: "number",
            key: "itemCount",
            displayer: "Item Count in a Row",
            value: 4,
        })
        this.addProp({
            type: "string",
            key: "allText",
            displayer: "All Button Text",
            value: "All",
        })
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
                            value: "Home Decor"
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
                                            value: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-8-600x728.jpg"

                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title 1",
                                            value: "Basket With Handles"
                                        },
                                        {
                                            type: "string",
                                            key: "price",
                                            displayer: "Price",
                                            value: "$160"
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Text",
                                            value: "NEW"
                                        },
                                        {
                                            type: "string",
                                            key: "rightText",
                                            displayer: "Right Text",
                                            value: "-19%"
                                        },
                                        {
                                            type: "string",
                                            key: "bottomText",
                                            displayer: "Bottom Text",
                                            value: "Quick Look"
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
                                    ]
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
                                            value: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-6-600x728.jpg"

                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title 1",
                                            value: "Deco Accessory"
                                        },
                                        {
                                            type: "string",
                                            key: "price",
                                            displayer: "Price",
                                            value: "$160"
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Tex",
                                            value: "NEW"
                                        },
                                        {
                                            type: "string",
                                            key: "rightText",
                                            displayer: "Right Text",
                                            value: "-19%"
                                        },
                                        {
                                            type: "string",
                                            key: "bottomText",
                                            displayer: "Bottom Text",
                                            value: "Quick Look"
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
                                    ]
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
                                            value: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-7-600x728.jpg"

                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title 1",
                                            value: "Flower Vase"
                                        },
                                        {
                                            type: "string",
                                            key: "price",
                                            displayer: "Price",
                                            value: "$160"
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Tex",
                                            value: "NEW"
                                        },
                                        {
                                            type: "string",
                                            key: "rightText",
                                            displayer: "Right Text",
                                            value: "-19%"
                                        },
                                        {
                                            type: "string",
                                            key: "bottomText",
                                            displayer: "Bottom Text",
                                            value: "Quick Look"
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
                                    ]
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
                                            value: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-5-600x728.jpg"

                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title 1",
                                            value: "Wall Clock"
                                        },
                                        {
                                            type: "string",
                                            key: "price",
                                            displayer: "Price",
                                            value: "$160"
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Tex",
                                            value: "NEW"
                                        },
                                        {
                                            type: "string",
                                            key: "rightText",
                                            displayer: "Right Text",
                                            value: "-19%"
                                        },
                                        {
                                            type: "string",
                                            key: "bottomText",
                                            displayer: "Bottom Text",
                                            value: "Quick Look"
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
                                    ]
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
                                            value: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-4-600x728.jpg"

                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title 1",
                                            value: "Newspaper Storage"
                                        },
                                        {
                                            type: "string",
                                            key: "price",
                                            displayer: "Price",
                                            value: "$160"
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Tex",
                                            value: "NEW"
                                        },
                                        {
                                            type: "string",
                                            key: "rightText",
                                            displayer: "Right Text",
                                            value: "-19%"
                                        },
                                        {
                                            type: "string",
                                            key: "bottomText",
                                            displayer: "Bottom Text",
                                            value: "Quick Look"
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
                                    ]
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
                                            value: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-2-600x728.jpg"

                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title 1",
                                            value: "Pottery Vase"
                                        },
                                        {
                                            type: "string",
                                            key: "price",
                                            displayer: "Price",
                                            value: "$160"
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Tex",
                                            value: "NEW"
                                        },
                                        {
                                            type: "string",
                                            key: "rightText",
                                            displayer: "Right Text",
                                            value: "-19%"
                                        },
                                        {
                                            type: "string",
                                            key: "bottomText",
                                            displayer: "Bottom Text",
                                            value: "Quick Look"
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
                                    ]
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
                                            value: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-3-1-600x728.jpg"

                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title 1",
                                            value: "Rose Holdback"
                                        },
                                        {
                                            type: "string",
                                            key: "price",
                                            displayer: "Price",
                                            value: "$160"
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Tex",
                                            value: "NEW"
                                        },
                                        {
                                            type: "string",
                                            key: "rightText",
                                            displayer: "Right Text",
                                            value: "-19%"
                                        },
                                        {
                                            type: "string",
                                            key: "bottomText",
                                            displayer: "Bottom Text",
                                            value: "Quick Look"
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
                                    ]
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
                                            value: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-1-600x728.jpg"

                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title 1",
                                            value: "Table Lamp"
                                        },
                                        {
                                            type: "string",
                                            key: "price",
                                            displayer: "Price",
                                            value: "$160"
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Tex",
                                            value: "NEW"
                                        },
                                        {
                                            type: "string",
                                            key: "rightText",
                                            displayer: "Right Text",
                                            value: "-19%"
                                        },
                                        {
                                            type: "string",
                                            key: "bottomText",
                                            displayer: "Bottom Text",
                                            value: "Quick Look"
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
                                    ]
                                },
                            ]
                        }

                    ]
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
                            value: "Lightning"
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
                                            value: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-1-600x728.jpg"
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title 1",
                                            value: "Table Lamp"
                                        },
                                        {
                                            type: "string",
                                            key: "price",
                                            displayer: "Price",
                                            value: "$160"
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Tex",
                                            value: "NEW"
                                        },
                                        {
                                            type: "string",
                                            key: "rightText",
                                            displayer: "Right Text",
                                            value: "-19%"
                                        },
                                        {
                                            type: "string",
                                            key: "bottomText",
                                            displayer: "Bottom Text",
                                            value: "Quick Look"
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
                                    ]
                                },
                            ]
                        }

                    ]
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
                            value: "Decoration"
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
                                            value: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-8-600x728.jpg"

                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title 1",
                                            value: "Basket With Handles"
                                        },
                                        {
                                            type: "string",
                                            key: "price",
                                            displayer: "Price",
                                            value: "$160"
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Tex",
                                            value: "NEW"
                                        },
                                        {
                                            type: "string",
                                            key: "rightText",
                                            displayer: "Right Text",
                                            value: "-19%"
                                        },
                                        {
                                            type: "string",
                                            key: "bottomText",
                                            displayer: "Bottom Text",
                                            value: "Quick Look"
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
                                    ]
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
                                            value: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-3-1-600x728.jpg"

                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title 1",
                                            value: "Rose Holdback"
                                        },
                                        {
                                            type: "string",
                                            key: "price",
                                            displayer: "Price",
                                            value: "$160"
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Tex",
                                            value: "NEW"
                                        },
                                        {
                                            type: "string",
                                            key: "rightText",
                                            displayer: "Right Text",
                                            value: "-19%"
                                        },
                                        {
                                            type: "string",
                                            key: "bottomText",
                                            displayer: "Bottom Text",
                                            value: "Quick Look"
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
                                    ]
                                },
                            ]
                        }

                    ]
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
                            value: "Vases"
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
                                            value: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-2-600x728.jpg"

                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title 1",
                                            value: "Pottery Vase"
                                        },
                                        {
                                            type: "string",
                                            key: "price",
                                            displayer: "Price",
                                            value: "$160"
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Tex",
                                            value: "NEW"
                                        },
                                        {
                                            type: "string",
                                            key: "rightText",
                                            displayer: "Right Text",
                                            value: "-19%"
                                        },
                                        {
                                            type: "string",
                                            key: "bottomText",
                                            displayer: "Bottom Text",
                                            value: "Quick Look"
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
                                    ]
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
                                            value: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-7-600x728.jpg"

                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title 1",
                                            value: "Flower Vase"
                                        },
                                        {
                                            type: "string",
                                            key: "price",
                                            displayer: "Price",
                                            value: "$160"
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Tex",
                                            value: "NEW"
                                        },
                                        {
                                            type: "string",
                                            key: "rightText",
                                            displayer: "Right Text",
                                            value: "-19%"
                                        },
                                        {
                                            type: "string",
                                            key: "bottomText",
                                            displayer: "Bottom Text",
                                            value: "Quick Look"
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
                                    ]
                                },
                            ]
                        }
                    ]
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
                            value: "Basics"
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
                                            value: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-6-600x728.jpg"

                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title 1",
                                            value: "Deco Accessory"
                                        },
                                        {
                                            type: "string",
                                            key: "price",
                                            displayer: "Price",
                                            value: "$160"
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Tex",
                                            value: "NEW"
                                        },
                                        {
                                            type: "string",
                                            key: "rightText",
                                            displayer: "Right Text",
                                            value: "-19%"
                                        },
                                        {
                                            type: "string",
                                            key: "bottomText",
                                            displayer: "Bottom Text",
                                            value: "Quick Look"
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
                                    ]
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
                                            value: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-5-600x728.jpg"

                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title 1",
                                            value: "Wall Clock"
                                        },
                                        {
                                            type: "string",
                                            key: "price",
                                            displayer: "Price",
                                            value: "$160"
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Tex",
                                            value: "NEW"
                                        },
                                        {
                                            type: "string",
                                            key: "rightText",
                                            displayer: "Right Text",
                                            value: "-19%"
                                        },
                                        {
                                            type: "string",
                                            key: "bottomText",
                                            displayer: "Bottom Text",
                                            value: "Quick Look"
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
                                    ]
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
                                            value: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-4-600x728.jpg"

                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title 1",
                                            value: "Newspaper Storage"
                                        },
                                        {
                                            type: "string",
                                            key: "price",
                                            displayer: "Price",
                                            value: "$160"
                                        },
                                        {
                                            type: "string",
                                            key: "leftText",
                                            displayer: "Left Tex",
                                            value: "NEW"
                                        },
                                        {
                                            type: "string",
                                            key: "rightText",
                                            displayer: "Right Text",
                                            value: "-19%"
                                        },
                                        {
                                            type: "string",
                                            key: "bottomText",
                                            displayer: "Bottom Text",
                                            value: "Quick Look"
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
                                    ]
                                },
                            ]
                        }
                    ]
                }
            ]
        });

        this.addProp(INPUTS.BUTTON("button", "Button", "Load More", null, null, null, "Primary"));

        this.setComponentState("selectedSection", this.castToString(this.getPropValue("allText")));
        this.setComponentState("selectedIndex", -1);
        this.setComponentState("moreImages", 0);
    }

    static getName(): string {
        return "ECommerce 2";
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
    }

    handleButtonClick = (): void => {
        const currentMoreImages = this.getComponentState("moreImages");
        const imageCountToAdd = this.getPropValue("imageCount");
        this.setComponentState("moreImages", currentMoreImages + imageCountToAdd);
    };

    render() {
        const currentImageCount = this.getComponentState("imageCount");
        const initialImageCount = this.getPropValue("imageCountInitial");
        const moreImages = this.getComponentState("moreImages");

        const imageGallery = this.castToObject<ImageGallery[]>("imageGalleries");
        const selectedSection = this.getComponentState("selectedSection");
        const selectedIndex = this.getComponentState("selectedIndex");
        const allText = this.castToString(this.getPropValue("allText"));

        // Image count kontrolü
        if (currentImageCount !== initialImageCount + moreImages) {
            this.setComponentState("imageCount", initialImageCount + moreImages);
        }

        // Tüm görselleri tekilleştir
        const allImages = imageGallery.reduce((acc: Image[], gallery) => {
            gallery.images.forEach((image) => {
                if (!acc.some((img) => img.cardImage === image.cardImage)) {
                    acc.push(image);
                }
            });
            return acc;
        }, []);

        // Seçilen bölümdeki görseller
        const selectedImages = selectedIndex === -1
            ? allImages
            : imageGallery[selectedIndex].images;

        const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

        // Filtrelenmiş ve slice edilmiş görseller
        const filteredImages = imageGallery
            .filter((gallery) =>
                selectedSection === allText ||
                (gallery.sectionTitle && this.castToString(gallery.sectionTitle) === selectedSection)
            )
            .reduce((acc: Image[], gallery) => {
                acc.push(...gallery.images);
                return acc;
            }, [])
            .slice(0, currentImageCount);

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>

                    {/* Başlık Butonları */}
                    <div className={this.decorateCSS("section-title-container")}>
                        <button
                            className={`${this.decorateCSS("section-title")} ${selectedSection === allText ? this.decorateCSS("active-section-title") : ""}`}
                            onClick={this.handleSectionClickAll}
                        >
                            {allText}
                        </button>
                        {imageGallery.map((item, index) => {
                            const title = this.castToString(item.sectionTitle);
                            const isActive = title === selectedSection;
                            return (
                                <button
                                    key={index}
                                    className={`${this.decorateCSS("section-title")} ${isActive ? this.decorateCSS("active-section-title") : ""}`}
                                    onClick={() => this.handleSectionClick(item.sectionTitle, index)}
                                >
                                    {item.sectionTitle}
                                </button>
                            );
                        })}
                    </div>

                    {/* Görsel Grid */}
                    <Base.ListGrid gridCount={{ pc: this.getPropValue("itemCount") }} className={this.decorateCSS("grid")}>
                        {filteredImages.map((image, imgIndex) => (
                            <div key={imgIndex} className={this.decorateCSS("card-container")}>
                                <div className={this.decorateCSS("image-container")}>

                                    {/* Alt Metin ve İkon */}
                                    <div className={`${this.decorateCSS("image-bottom")} animate__animated animate__fadeInUp`}>
                                        <div className={this.decorateCSS("image-bottom-text")}>{image.bottomText}</div>
                                        <div className={this.decorateCSS("image-bottom-icon")}>
                                            <ComposerIcon name={image.bottomIcon} />
                                        </div>
                                    </div>

                                    {/* Sol/Sağ Metin */}
                                    <div className={this.decorateCSS("image-text")}>
                                        {image.leftText && <div className={this.decorateCSS("leftText")}>{image.leftText}</div>}
                                        {image.rightText && <div className={this.decorateCSS("rightText")}>{image.rightText}</div>}
                                    </div>

                                    {/* Görsel */}
                                    {image.cardImage && (
                                        <img
                                            alt={image.cardImage}
                                            src={image.cardImage}
                                            className={this.decorateCSS("image")}
                                        />
                                    )}
                                </div>

                                {/* Açıklama Alanı */}
                                <div className={this.decorateCSS("text-container")}>
                                    {image.title && <div className={this.decorateCSS("title")}>{image.title}</div>}
                                    {image.price && <div className={this.decorateCSS("price")}>{image.price}</div>}
                                    {image.subTitle && (
                                        <div className={`${this.decorateCSS("subTitle")} animate__animated animate__fadeInLeft`}>
                                            {image.subTitle}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </Base.ListGrid>

                    {/* Daha Fazla Butonu */}
                    {currentImageCount < selectedImages.length && (
                        <div className={this.decorateCSS("button-wrapper")}>
                            <Base.Button
                                buttonType={button.type}
                                className={this.decorateCSS("button")}
                                onClick={this.handleButtonClick}
                            >
                                {button.text}
                            </Base.Button>
                        </div>
                    )}
                </Base.MaxContent>
            </Base.Container>
        );
    }
}
