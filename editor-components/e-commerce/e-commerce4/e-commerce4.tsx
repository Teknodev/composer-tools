import * as React from "react";
import { Base } from "composer-tools/composer-base-components/base/base";
import styles from "./e-commerce4.module.scss";
import { BaseECommerce } from "composer-tools/editor-components/EditorComponent";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

interface ColorOption {
    sectionColor: string;
    cardImage: string;
    cardImage2: string;
    isSoldOut: boolean;
    soldOutText: string;
}

interface ProductCard {
    cardTitle: string;
    cardPrice: string;
    cardLeftText: string;
    cardRightText1: string;
    cardRightText1Icon: string;
    cardRightText2: string;
    cardRightText2Icon: string;
    cardRightText3: string;
    cardRightText3Icon: string;
    cardRightText4: string;
    cardRightText4Icon: string;
    cardBottomSize: string;
    colorOptions: ColorOption[];
}

class ECommerce4 extends BaseECommerce {
    constructor(props?: any) {
        super(props, styles);
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
            value: 2,
        });
        this.addProp({
            type: "number",
            key: "itemCount",
            displayer: "Item Count in a Row",
            value: 4,
        });
        this.addProp({
            type: "array",
            key: "productCards",
            displayer: "Product Cards",
            value: [
                {
                    type: "object",
                    key: "productCard",
                    displayer: "Product Card",
                    value: [
                        {
                            type: "string",
                            key: "cardTitle",
                            displayer: "Card Title",
                            value: "Loose Fit Tee",
                        },
                        {
                            type: "string",
                            key: "cardPrice",
                            displayer: "Price",
                            value: "$120.00",
                        },
                        {
                            type: "string",
                            key: "cardLeftText",
                            displayer: "Left Text",
                            value: "20% Off",
                        },
                        {
                            type: "string",
                            key: "cardRightText1",
                            displayer: "Right Text 1",
                            value: "Add to Cart",
                        },
                        {
                            type: "icon",
                            key: "cardRightText1Icon",
                            displayer: "Right Text 1 Icon",
                            value: "LuShoppingBag",
                        },
                        {
                            type: "string",
                            key: "cardRightText2",
                            displayer: "Right Text 2",
                            value: "Add to Wishlist",
                        },
                        {
                            type: "icon",
                            key: "cardRightText2Icon",
                            displayer: "Right Text 2 Icon",
                            value: "RxHeart",
                        },
                        {
                            type: "string",
                            key: "cardRightText3",
                            displayer: "Right Text 3",
                            value: "Quick View",
                        },
                        {
                            type: "icon",
                            key: "cardRightText3Icon",
                            displayer: "Right Text 3 Icon",
                            value: "GrView",
                        },
                        {
                            type: "string",
                            key: "cardRightText4",
                            displayer: "Right Text 4",
                            value: "Add to Compare",
                        },
                        {
                            type: "icon",
                            key: "cardRightText4Icon",
                            displayer: "Right Text 4 Icon",
                            value: "MdCompareArrows",
                        },
                        {
                            type: "string",
                            key: "cardBottomSize",
                            displayer: "Size",
                            value: "XS S M L XL 2XL",
                        },
                        {
                            type: "array",
                            key: "colorOptions",
                            displayer: "Color Options",
                            value: [
                                {
                                    type: "object",
                                    key: "colorOption",
                                    displayer: "Color Option",
                                    value: [
                                        {
                                            type: "color",
                                            key: "sectionColor",
                                            displayer: "Section Color",
                                            value: "lightgrey",
                                        },
                                        {
                                            type: "image",
                                            key: "cardImage",
                                            displayer: "Card Image",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/product-19.jpg",
                                        },
                                        {
                                            type: "image",
                                            key: "cardImage2",
                                            displayer: "Card Image 2",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/women-grey-2.jpg",
                                        },
                                        {
                                            type: "boolean",
                                            key: "isSoldOut",
                                            displayer: "Show Sold Out",
                                            value: false,
                                        },
                                        {
                                            type: "string",
                                            key: "soldOutText",
                                            displayer: "Sold Out Text",
                                            value: "Sold Out",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "colorOption",
                                    displayer: "Color Option",
                                    value: [
                                        {
                                            type: "color",
                                            key: "sectionColor",
                                            displayer: "Section Color",
                                            value: "orange",
                                        },
                                        {
                                            type: "image",
                                            key: "cardImage",
                                            displayer: "Card Image",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/product-2.jpg",
                                        },
                                        {
                                            type: "image",
                                            key: "cardImage2",
                                            displayer: "Card Image 2",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/women-grey-2.jpg",
                                        },
                                        {
                                            type: "boolean",
                                            key: "isSoldOut",
                                            displayer: "Show Sold Out",
                                            value: false,
                                        },
                                        {
                                            type: "string",
                                            key: "soldOutText",
                                            displayer: "Sold Out Text",
                                            value: "Sold Out",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "colorOption",
                                    displayer: "Color Option",
                                    value: [
                                        {
                                            type: "color",
                                            key: "sectionColor",
                                            displayer: "Section Color",
                                            value: "green",
                                        },
                                        {
                                            type: "image",
                                            key: "cardImage",
                                            displayer: "Card Image",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/product-3.jpg",
                                        },
                                        {
                                            type: "image",
                                            key: "cardImage2",
                                            displayer: "Card Image 2",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/women-grey-2.jpg",
                                        },
                                        {
                                            type: "boolean",
                                            key: "isSoldOut",
                                            displayer: "Show Sold Out",
                                            value: false,
                                        },
                                        {
                                            type: "string",
                                            key: "soldOutText",
                                            displayer: "Sold Out Text",
                                            value: "Sold Out",
                                        },
                                    ]
                                },
                            ]
                        }
                    ]
                },
                {
                    type: "object",
                    key: "productCard",
                    displayer: "Product Card",
                    value: [
                        {
                            type: "string",
                            key: "cardTitle",
                            displayer: "Card Title",
                            value: "Loose Fit Tee",
                        },
                        {
                            type: "string",
                            key: "cardPrice",
                            displayer: "Price",
                            value: "$120.00",
                        },
                        {
                            type: "string",
                            key: "cardLeftText",
                            displayer: "Left Text",
                            value: "20% Off",
                        },
                        {
                            type: "string",
                            key: "cardRightText1",
                            displayer: "Right Text 1",
                            value: "Add to Cart",
                        },
                        {
                            type: "icon",
                            key: "cardRightText1Icon",
                            displayer: "Right Text 1 Icon",
                            value: "LuShoppingBag",
                        },
                        {
                            type: "string",
                            key: "cardRightText2",
                            displayer: "Right Text 2",
                            value: "Add to Wishlist",
                        },
                        {
                            type: "icon",
                            key: "cardRightText2Icon",
                            displayer: "Right Text 2 Icon",
                            value: "RxHeart",
                        },
                        {
                            type: "string",
                            key: "cardRightText3",
                            displayer: "Right Text 3",
                            value: "Quick View",
                        },
                        {
                            type: "icon",
                            key: "cardRightText3Icon",
                            displayer: "Right Text 3 Icon",
                            value: "GrView",
                        },
                        {
                            type: "string",
                            key: "cardRightText4",
                            displayer: "Right Text 4",
                            value: "Add to Compare",
                        },
                        {
                            type: "icon",
                            key: "cardRightText4Icon",
                            displayer: "Right Text 4 Icon",
                            value: "MdCompareArrows",
                        },
                        {
                            type: "string",
                            key: "cardBottomSize",
                            displayer: "Size",
                            value: "XS S M L XL 2XL",
                        },
                        {
                            type: "array",
                            key: "colorOptions",
                            displayer: "Color Options",
                            value: [
                                {
                                    type: "object",
                                    key: "colorOption",
                                    displayer: "Color Option",
                                    value: [
                                        {
                                            type: "color",
                                            key: "sectionColor",
                                            displayer: "Section Color",
                                            value: "lightgrey",
                                        },
                                        {
                                            type: "image",
                                            key: "cardImage",
                                            displayer: "Card Image",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/product-2.jpg",
                                        },
                                        {
                                            type: "image",
                                            key: "cardImage2",
                                            displayer: "Card Image 2",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/women-grey-2.jpg",
                                        },
                                        {
                                            type: "boolean",
                                            key: "isSoldOut",
                                            displayer: "Show Sold Out",
                                            value: true,
                                        },
                                        {
                                            type: "string",
                                            key: "soldOutText",
                                            displayer: "Sold Out Text",
                                            value: "Sold Out",
                                        },
                                    ]
                                },
                            ]
                        }
                    ]
                },
                {
                    type: "object",
                    key: "productCard",
                    displayer: "Product Card",
                    value: [
                        {
                            type: "string",
                            key: "cardTitle",
                            displayer: "Card Title",
                            value: "Long Regular Fit Tee",
                        },
                        {
                            type: "string",
                            key: "cardPrice",
                            displayer: "Price",
                            value: "$60.00",
                        },
                        {
                            type: "string",
                            key: "cardLeftText",
                            displayer: "Left Text",
                            value: "20% Off",
                        },
                        {
                            type: "string",
                            key: "cardRightText1",
                            displayer: "Right Text 1",
                            value: "Add to Cart",
                        },
                        {
                            type: "icon",
                            key: "cardRightText1Icon",
                            displayer: "Right Text 1 Icon",
                            value: "LuShoppingBag",
                        },
                        {
                            type: "string",
                            key: "cardRightText2",
                            displayer: "Right Text 2",
                            value: "Add to Wishlist",
                        },
                        {
                            type: "icon",
                            key: "cardRightText2Icon",
                            displayer: "Right Text 2 Icon",
                            value: "RxHeart",
                        },
                        {
                            type: "string",
                            key: "cardRightText3",
                            displayer: "Right Text 3",
                            value: "Quick View",
                        },
                        {
                            type: "icon",
                            key: "cardRightText3Icon",
                            displayer: "Right Text 3 Icon",
                            value: "GrView",
                        },
                        {
                            type: "string",
                            key: "cardRightText4",
                            displayer: "Right Text 4",
                            value: "Add to Compare",
                        },
                        {
                            type: "icon",
                            key: "cardRightText4Icon",
                            displayer: "Right Text 4 Icon",
                            value: "MdCompareArrows",
                        },
                        {
                            type: "string",
                            key: "cardBottomSize",
                            displayer: "Size",
                            value: "XS S M L XL 2XL",
                        },
                        {
                            type: "array",
                            key: "colorOptions",
                            displayer: "Color Options",
                            value: [
                                {
                                    type: "object",
                                    key: "colorOption",
                                    displayer: "Color Option",
                                    value: [
                                        {
                                            type: "color",
                                            key: "sectionColor",
                                            displayer: "Section Color",
                                            value: "#bbb355",
                                        },
                                        {
                                            type: "image",
                                            key: "cardImage",
                                            displayer: "Card Image",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/product-3.jpg",
                                        },
                                        {
                                            type: "image",
                                            key: "cardImage2",
                                            displayer: "Card Image 2",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/product-4.jpg",
                                        },
                                        {
                                            type: "boolean",
                                            key: "isSoldOut",
                                            displayer: "Show Sold Out",
                                            value: false,
                                        },
                                        {
                                            type: "string",
                                            key: "soldOutText",
                                            displayer: "Sold Out Text",
                                            value: "Sold Out",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "colorOption",
                                    displayer: "Color Option",
                                    value: [
                                        {
                                            type: "color",
                                            key: "sectionColor",
                                            displayer: "Section Color",
                                            value: "grey",
                                        },
                                        {
                                            type: "image",
                                            key: "cardImage",
                                            displayer: "Card Image",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/product-6.jpg",
                                        },
                                        {
                                            type: "image",
                                            key: "cardImage2",
                                            displayer: "Card Image 2",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/product-4.jpg",
                                        },
                                        {
                                            type: "boolean",
                                            key: "isSoldOut",
                                            displayer: "Show Sold Out",
                                            value: false,
                                        },
                                        {
                                            type: "string",
                                            key: "soldOutText",
                                            displayer: "Sold Out Text",
                                            value: "Sold Out",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "colorOption",
                                    displayer: "Color Option",
                                    value: [
                                        {
                                            type: "color",
                                            key: "sectionColor",
                                            displayer: "Section Color",
                                            value: "white",
                                        },
                                        {
                                            type: "image",
                                            key: "cardImage",
                                            displayer: "Card Image",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/product-4.jpg",
                                        },
                                        {
                                            type: "image",
                                            key: "cardImage2",
                                            displayer: "Card Image 2",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/product-4.jpg",
                                        },
                                        {
                                            type: "boolean",
                                            key: "isSoldOut",
                                            displayer: "Show Sold Out",
                                            value: false,
                                        },
                                        {
                                            type: "string",
                                            key: "soldOutText",
                                            displayer: "Sold Out Text",
                                            value: "Sold Out",
                                        },
                                    ]
                                },
                            ]
                        }
                    ]
                },
                {
                    type: "object",
                    key: "productCard",
                    displayer: "Product Card",
                    value: [
                        {
                            type: "string",
                            key: "cardTitle",
                            displayer: "Card Title",
                            value: "Regular Fit Pima Cotton Polo Shirt",
                        },
                        {
                            type: "string",
                            key: "cardPrice",
                            displayer: "Price",
                            value: "$80.00",
                        },
                        {
                            type: "string",
                            key: "cardLeftText",
                            displayer: "Left Text",
                            value: "20% Off",
                        },
                        {
                            type: "string",
                            key: "cardRightText1",
                            displayer: "Right Text 1",
                            value: "Add to Cart",
                        },
                        {
                            type: "icon",
                            key: "cardRightText1Icon",
                            displayer: "Right Text 1 Icon",
                            value: "LuShoppingBag",
                        },
                        {
                            type: "string",
                            key: "cardRightText2",
                            displayer: "Right Text 2",
                            value: "Add to Wishlist",
                        },
                        {
                            type: "icon",
                            key: "cardRightText2Icon",
                            displayer: "Right Text 2 Icon",
                            value: "RxHeart",
                        },
                        {
                            type: "string",
                            key: "cardRightText3",
                            displayer: "Right Text 3",
                            value: "Quick View",
                        },
                        {
                            type: "icon",
                            key: "cardRightText3Icon",
                            displayer: "Right Text 3 Icon",
                            value: "GrView",
                        },
                        {
                            type: "string",
                            key: "cardRightText4",
                            displayer: "Right Text 4",
                            value: "Add to Compare",
                        },
                        {
                            type: "icon",
                            key: "cardRightText4Icon",
                            displayer: "Right Text 4 Icon",
                            value: "MdCompareArrows",
                        },
                        {
                            type: "string",
                            key: "cardBottomSize",
                            displayer: "Size",
                            value: "XS S M L XL 2XL",
                        },
                        {
                            type: "array",
                            key: "colorOptions",
                            displayer: "Color Options",
                            value: [
                                {
                                    type: "object",
                                    key: "colorOption",
                                    displayer: "Color Option",
                                    value: [
                                        {
                                            type: "color",
                                            key: "sectionColor",
                                            displayer: "Section Color",
                                            value: "white",
                                        },
                                        {
                                            type: "image",
                                            key: "cardImage",
                                            displayer: "Card Image",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/product-17.jpg",
                                        },
                                        {
                                            type: "image",
                                            key: "cardImage2",
                                            displayer: "Card Image 2",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/product-1.jpg",
                                        },
                                        {
                                            type: "boolean",
                                            key: "isSoldOut",
                                            displayer: "Show Sold Out",
                                            value: false,
                                        },
                                        {
                                            type: "string",
                                            key: "soldOutText",
                                            displayer: "Sold Out Text",
                                            value: "Sold Out",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "colorOption",
                                    displayer: "Color Option",
                                    value: [
                                        {
                                            type: "color",
                                            key: "sectionColor",
                                            displayer: "Section Color",
                                            value: "#fb9a74",
                                        },
                                        {
                                            type: "image",
                                            key: "cardImage",
                                            displayer: "Card Image",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/product-16.jpg",
                                        },
                                        {
                                            type: "image",
                                            key: "cardImage2",
                                            displayer: "Card Image 2",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/product-1.jpg",
                                        },
                                        {
                                            type: "boolean",
                                            key: "isSoldOut",
                                            displayer: "Show Sold Out",
                                            value: false,
                                        },
                                        {
                                            type: "string",
                                            key: "soldOutText",
                                            displayer: "Sold Out Text",
                                            value: "Sold Out",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "colorOption",
                                    displayer: "Color Option",
                                    value: [
                                        {
                                            type: "color",
                                            key: "sectionColor",
                                            displayer: "Section Color",
                                            value: "lightgrey",
                                        },
                                        {
                                            type: "image",
                                            key: "cardImage",
                                            displayer: "Card Image",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/product-5.jpg",
                                        },
                                        {
                                            type: "image",
                                            key: "cardImage2",
                                            displayer: "Card Image 2",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/product-1.jpg",
                                        },
                                        {
                                            type: "boolean",
                                            key: "isSoldOut",
                                            displayer: "Show Sold Out",
                                            value: false,
                                        },
                                        {
                                            type: "string",
                                            key: "soldOutText",
                                            displayer: "Sold Out Text",
                                            value: "Sold Out",
                                        },
                                    ]
                                },
                            ]
                        }
                    ]
                },
                {
                    type: "object",
                    key: "productCard",
                    displayer: "Product Card",
                    value: [
                        {
                            type: "string",
                            key: "cardTitle",
                            displayer: "Card Title",
                            value: "Midi Knit Dress",
                        },
                        {
                            type: "string",
                            key: "cardPrice",
                            displayer: "Price",
                            value: "$40.00",
                        },
                        {
                            type: "string",
                            key: "cardLeftText",
                            displayer: "Left Text",
                            value: "20% Off",
                        },
                        {
                            type: "string",
                            key: "cardRightText1",
                            displayer: "Right Text 1",
                            value: "Add to Cart",
                        },
                        {
                            type: "icon",
                            key: "cardRightText1Icon",
                            displayer: "Right Text 1 Icon",
                            value: "LuShoppingBag",
                        },
                        {
                            type: "string",
                            key: "cardRightText2",
                            displayer: "Right Text 2",
                            value: "Add to Wishlist",
                        },
                        {
                            type: "icon",
                            key: "cardRightText2Icon",
                            displayer: "Right Text 2 Icon",
                            value: "RxHeart",
                        },
                        {
                            type: "string",
                            key: "cardRightText3",
                            displayer: "Right Text 3",
                            value: "Quick View",
                        },
                        {
                            type: "icon",
                            key: "cardRightText3Icon",
                            displayer: "Right Text 3 Icon",
                            value: "GrView",
                        },
                        {
                            type: "string",
                            key: "cardRightText4",
                            displayer: "Right Text 4",
                            value: "Add to Compare",
                        },
                        {
                            type: "icon",
                            key: "cardRightText4Icon",
                            displayer: "Right Text 4 Icon",
                            value: "MdCompareArrows",
                        },
                        {
                            type: "string",
                            key: "cardBottomSize",
                            displayer: "Size",
                            value: "XS S M L XL 2XL",
                        },
                        {
                            type: "array",
                            key: "colorOptions",
                            displayer: "Color Options",
                            value: [
                                {
                                    type: "object",
                                    key: "colorOption",
                                    displayer: "Color Option",
                                    value: [
                                        {
                                            type: "color",
                                            key: "sectionColor",
                                            displayer: "Section Color",
                                            value: "beige",
                                        },
                                        {
                                            type: "image",
                                            key: "cardImage",
                                            displayer: "Card Image",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/product-25.jpg",
                                        },
                                        {
                                            type: "image",
                                            key: "cardImage2",
                                            displayer: "Card Image 2",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/product-24.jpg",
                                        },
                                        {
                                            type: "boolean",
                                            key: "isSoldOut",
                                            displayer: "Show Sold Out",
                                            value: false,
                                        },
                                        {
                                            type: "string",
                                            key: "soldOutText",
                                            displayer: "Sold Out Text",
                                            value: "Sold Out",
                                        },
                                    ]
                                },
                            ]
                        }
                    ]
                },
            ],
        });
        this.addProp(INPUTS.BUTTON("button", "Button", "Load More", null, null, null, "Primary"));
        this.setComponentState("moreImages", 0);

        this.setComponentState("selectedStates",
            this.castToObject<ProductCard[]>("productCards").map((card: ProductCard, index: number) => ({
                selectedColor: card.colorOptions?.[0]?.sectionColor || "",
                selectedIndex: 0
            }))
        );
    }

    static getName(): string {
        return "ECommerce 4";
    }

    handleSectionClick(cardIndex: number, sectionColor: string, colorIndex: number): void {
        const selectedStates = [...this.getComponentState("selectedStates")];
        selectedStates[cardIndex] = {
            selectedColor: sectionColor,
            selectedIndex: colorIndex
        };
        this.setComponentState("selectedStates", selectedStates);
    }

    handleButtonClick = () => {
        this.setComponentState("moreImages", this.getComponentState("moreImages") + this.getPropValue("imageCount"))
    };

    render() {
        const productCards = this.castToObject<ProductCard[]>("productCards") || [];
        const selectedStates = this.getComponentState("selectedStates") || [];
        const itemCount = this.getPropValue("itemCount");
        if (this.getComponentState("imageCount") !== this.getPropValue("imageCountInitial") + this.getComponentState("moreImages"))
            this.setComponentState("imageCount", this.getPropValue("imageCountInitial") + this.getComponentState("moreImages"));

        const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <Base.ListGrid gridCount={{ pc: Math.min(itemCount, 4) }} className={this.decorateCSS("grid")}>
                        {productCards.slice(0, this.getComponentState("imageCount")).map((productCard: ProductCard, cardIndex: number) => {
                            const selectedState = selectedStates[cardIndex] || { selectedColor: "", selectedIndex: 0 };
                            const selectedColorOption = productCard.colorOptions?.find(
                                option => option.sectionColor === selectedState.selectedColor
                            ) || productCard.colorOptions?.[0];

                            return (
                                <div key={cardIndex} className={this.decorateCSS("card-container")}>
                                    <div className={this.decorateCSS("image-container")}>
                                        <div className={`${this.decorateCSS("image-bottom")} animate__animated animate__fadeInUp`}>
                                            <div className={this.decorateCSS("image-bottom-text")}>
                                                {productCard.cardTitle}
                                            </div>
                                        </div>
                                        <div
                                            className={`${this.decorateCSS("image-1-container")} ${selectedColorOption.isSoldOut ? this.decorateCSS("image-sold-out") : ""}`}
                                        >
                                            {selectedColorOption?.cardImage && (
                                                <img
                                                    alt={selectedColorOption.cardImage}
                                                    src={selectedColorOption.cardImage}
                                                    className={this.decorateCSS("image")}
                                                />
                                            )}
                                        </div>
                                        <div
                                            className={`${this.decorateCSS("image-2-container")} ${selectedColorOption.isSoldOut ? this.decorateCSS("image-sold-out") : ""}`}
                                        >
                                            {selectedColorOption.cardImage2 && (
                                                <img
                                                    alt={selectedColorOption.isSoldOut ? selectedColorOption?.cardImage : selectedColorOption?.cardImage2}
                                                    src={selectedColorOption.isSoldOut ? selectedColorOption?.cardImage : selectedColorOption?.cardImage2}
                                                    className={this.decorateCSS("image")}
                                                />
                                            )}
                                        </div>
                                        {selectedColorOption.isSoldOut && (
                                            <div className={this.decorateCSS("sold-out")}>
                                                {selectedColorOption.soldOutText}
                                            </div>
                                        )}
                                        <div className={`${selectedColorOption.isSoldOut ? this.decorateCSS("image-bottom-size-sold-out") : this.decorateCSS("image-bottom-size")}]  animate__animated animate__fadeInUp`}>
                                            {productCard.cardBottomSize}
                                        </div>
                                        <div className={this.decorateCSS("image-text-left")}>
                                            {this.castToString(productCard.cardLeftText) && (
                                                <div className={this.decorateCSS("cardLeftText")}>{productCard.cardLeftText}</div>
                                            )}
                                        </div>
                                        <div
                                            className={`${selectedColorOption.isSoldOut
                                                ? this.decorateCSS("image-right-side-sold-out")
                                                : this.decorateCSS("image-right-side")
                                                } animate__animated animate__slideInRight`}
                                        >
                                            <div className={this.decorateCSS("right-side-items-1")}>
                                                <div className={this.decorateCSS("card-right-text-container-1")}>
                                                    {this.castToString(productCard.cardRightText1) && (
                                                        <div className={this.decorateCSS("card-right-text")}>{productCard.cardRightText1}</div>
                                                    )}
                                                </div>
                                                <div className={this.decorateCSS("image-icon-container")}>
                                                    <ComposerIcon
                                                        name={productCard.cardRightText1Icon}
                                                        propsIcon={{
                                                            className: this.decorateCSS("image-right-icon"),
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className={this.decorateCSS("right-side-items-2")}>
                                                <div className={this.decorateCSS("card-right-text-container-2")}>
                                                    {this.castToString(productCard.cardRightText2) && (
                                                        <div className={this.decorateCSS("card-right-text")}>{productCard.cardRightText2}</div>
                                                    )}
                                                </div>
                                                <div className={this.decorateCSS("image-icon-container")}>
                                                    <ComposerIcon
                                                        name={productCard.cardRightText2Icon}
                                                        propsIcon={{
                                                            className: this.decorateCSS("image-right-icon"),
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className={this.decorateCSS("right-side-items-3")}>
                                                <div className={this.decorateCSS("card-right-text-container-3")}>
                                                    {this.castToString(productCard.cardRightText3) && (
                                                        <div className={this.decorateCSS("card-right-text")}>{productCard.cardRightText3}</div>
                                                    )}
                                                </div>
                                                <div className={this.decorateCSS("image-icon-container")}>
                                                    <ComposerIcon
                                                        name={productCard.cardRightText3Icon}
                                                        propsIcon={{
                                                            className: this.decorateCSS("image-right-icon"),
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className={this.decorateCSS("right-side-items-4")}>
                                                <div className={this.decorateCSS("card-right-text-container-4")}>
                                                    {this.castToString(productCard.cardRightText4) && (
                                                        <div className={this.decorateCSS("card-right-text")}>{productCard.cardRightText4}</div>
                                                    )}
                                                </div>
                                                <div className={this.decorateCSS("image-icon-container")}>
                                                    <ComposerIcon
                                                        name={productCard.cardRightText4Icon}
                                                        propsIcon={{
                                                            className: this.decorateCSS("image-right-icon"),
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${this.decorateCSS("text-container")} ${selectedColorOption.isSoldOut ? this.decorateCSS("text-sold-out") : ""}`}>
                                        {this.castToString(productCard.cardTitle) && (
                                            <div className={this.decorateCSS("title")}>{productCard.cardTitle}</div>
                                        )}
                                        {this.castToString(productCard.cardPrice) && (
                                            <div className={this.decorateCSS("price")}>{productCard.cardPrice}</div>
                                        )}
                                    </div>
                                    <div className={this.decorateCSS("section-color-container")}>
                                        {productCard.colorOptions?.map((colorOption: ColorOption, colorIndex: number) => (
                                            <button
                                                key={colorIndex}
                                                className={`${this.decorateCSS("section-color")} ${colorOption.sectionColor === selectedState.selectedColor
                                                    ? this.decorateCSS("active-section-color")
                                                    : ""
                                                    }`}
                                                onClick={() => this.handleSectionClick(cardIndex, colorOption.sectionColor, colorIndex)}
                                                onMouseEnter={() => this.handleSectionClick(cardIndex, colorOption.sectionColor, colorIndex)}
                                                style={{ backgroundColor: colorOption.sectionColor }}
                                            >
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </Base.ListGrid>
                    {(productCards.length > this.getComponentState("imageCount")) && (
                        <div className={this.decorateCSS("button-wrapper")}>
                            <Base.Button className={this.decorateCSS("button")} buttonType={button.type} onClick={this.handleButtonClick} >
                                {button.text}
                            </Base.Button>
                        </div>
                    )}
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default ECommerce4;
