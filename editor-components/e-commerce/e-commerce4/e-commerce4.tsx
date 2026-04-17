import * as React from "react";
import { Base } from "../../../composer-base-components/base/base";
import styles from "./e-commerce4.module.scss";
import { BaseECommerce, TypeMediaInputValue } from "../../EditorComponent";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { CurrencyCode, getCurrencyInfo } from "../../../utils/currency";

interface SizeOption {
    sizeName: string;
    soldOutText: string;
    navigateTo2: string;
}

interface ColorOption {
    sectionColor: string;
    cardImage: TypeMediaInputValue;
    hoverImage: TypeMediaInputValue;
    isSoldOut: boolean;
    overlay: boolean;
    sizeOptions: SizeOption[];
}

interface RightTextItems {
    cardRightText: React.JSX.Element;
    cardRightTextIcon: TypeMediaInputValue;
    cardRightTextNavigate: string;
}

interface ProductCard {
    cardTitle: React.JSX.Element;
    cost: { value: React.JSX.Element; currency: CurrencyCode };
    cardLeftText: React.JSX.Element;
    colorOptions: ColorOption[];
    navigateTo: string;
    rightTextItems: RightTextItems[];
}

class ECommerce4 extends BaseECommerce {
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
                    value: 2,
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
                            displayer: "Title",
                            value: "Loose Fit Tee",
                        },
                        {
                            type: "currency",
                            key: "cost",
                            displayer: "Cost",
                            value: { value: "120", currency: "USD" },
                        },
                        {
                            type: "string",
                            key: "cardLeftText",
                            displayer: "Badge Text",
                            value: "20% Off",
                        },
                        {
                            type: "page",
                            key: "navigateTo",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "array",
                            key: "rightTextItems",
                            displayer: "Hover Items",
                            value: [
                                {
                                    type: "object",
                                    key: "rightTextItem",
                                    displayer: "Right Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardRightText",
                                            displayer: "Text",
                                            value: "Add to Cart",
                                        },
                                        {
                                            type: "media",
                                            key: "cardRightTextIcon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "LuShoppingBag",
                                            },
                                        },
                                        {
                                            type: "page",
                                            key: "cardRightTextNavigate",
                                            displayer: "Navigate To",
                                            value: "",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "rightTextItem",
                                    displayer: "Right Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardRightText",
                                            displayer: "Text",
                                            value: "Add to Wishlist",
                                        },
                                        {
                                            type: "media",
                                            key: "cardRightTextIcon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "RxHeart",
                                            },
                                        },
                                        {
                                            type: "page",
                                            key: "cardRightTextNavigate",
                                            displayer: "Navigate To",
                                            value: "",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "rightTextItem",
                                    displayer: "Right Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardRightText",
                                            displayer: "Text",
                                            value: "Quick View",
                                        },
                                        {
                                            type: "media",
                                            key: "cardRightTextIcon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "GrView",
                                            },
                                        },
                                        {
                                            type: "page",
                                            key: "cardRightTextNavigate",
                                            displayer: "Navigate To",
                                            value: "",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "rightTextItem",
                                    displayer: "Right Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardRightText",
                                            displayer: "Text",
                                            value: "Add to Compare",
                                        },
                                        {
                                            type: "media",
                                            key: "cardRightTextIcon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "MdCompareArrows",
                                            },
                                        },
                                        {
                                            type: "page",
                                            key: "cardRightTextNavigate",
                                            displayer: "Navigate To",
                                            value: "",
                                        },
                                    ]
                                },
                            ]
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
                                            type: "media",
                                            key: "cardImage",
                                            displayer: "Card Media",
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                            value: {
                                                type: "image",
                                                url: "https://vineta-html.vercel.app/images/products/fashion/product-19.jpg",
                                            },
                                        },
                                        {
                                            type: "media",
                                            key: "hoverImage",
                                            displayer: "Hover Media",
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                            value: {
                                                type: "image",
                                                url: "https://vineta-html.vercel.app/images/products/fashion/women-grey-2.jpg",
                                            },
                                        },
                                        {
                                            type: "boolean",
                                            key: "isSoldOut",
                                            displayer: "Show Sold Out",
                                            value: false,
                                        },
                                        {
                                            type: "boolean",
                                            key: "overlay",
                                            displayer: "Overlay",
                                            value: false,
                                        },
                                        {
                                            type: "array",
                                            key: "sizeOptions",
                                            displayer: "Size Options",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "sizeOption",
                                                    displayer: "Size Option",
                                                    value: [
                                                        {
                                                            type: "string",
                                                            key: "sizeName",
                                                            displayer: "Size Name",
                                                            value: "S",
                                                        },
                                                        {
                                                            type: "page",
                                                            key: "navigateTo2",
                                                            displayer: "Navigate To",
                                                            value: ""
                                                        },
                                                        {
                                                            type: "string",
                                                            key: "soldOutText",
                                                            displayer: "Sold Out Text",
                                                            value: "Sold Out",
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: "object",
                                                    key: "sizeOption",
                                                    displayer: "Size Option",
                                                    value: [
                                                        {
                                                            type: "string",
                                                            key: "sizeName",
                                                            displayer: "Size Name",
                                                            value: "M",
                                                        },
                                                        {
                                                            type: "page",
                                                            key: "navigateTo2",
                                                            displayer: "Navigate To",
                                                            value: ""
                                                        },
                                                        {
                                                            type: "string",
                                                            key: "soldOutText",
                                                            displayer: "Sold Out Text",
                                                            value: "Sold Out",
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: "object",
                                                    key: "sizeOption",
                                                    displayer: "Size Option",
                                                    value: [
                                                        {
                                                            type: "string",
                                                            key: "sizeName",
                                                            displayer: "Size Name",
                                                            value: "L",
                                                        },
                                                        {
                                                            type: "page",
                                                            key: "navigateTo2",
                                                            displayer: "Navigate To",
                                                            value: ""
                                                        },
                                                        {
                                                            type: "string",
                                                            key: "soldOutText",
                                                            displayer: "Sold Out Text",
                                                            value: "Sold Out",
                                                        }
                                                    ]
                                                },
                                            ]
                                        }
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
                                            type: "media",
                                            key: "cardImage",
                                            displayer: "Card Media",
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                            value: {
                                                type: "image",
                                                url: "https://vineta-html.vercel.app/images/products/fashion/product-2.jpg",
                                            },
                                        },
                                        {
                                            type: "media",
                                            key: "hoverImage",
                                            displayer: "Hover Media",
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                            value: {
                                                type: "image",
                                                url: "https://vineta-html.vercel.app/images/products/fashion/women-grey-2.jpg",
                                            },
                                        },
                                        {
                                            type: "boolean",
                                            key: "isSoldOut",
                                            displayer: "Show Sold Out",
                                            value: false,
                                        },
                                        {
                                            type: "boolean",
                                            key: "overlay",
                                            displayer: "Overlay",
                                            value: false,
                                        },
                                        {
                                            type: "array",
                                            key: "sizeOptions",
                                            displayer: "Size Options",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "sizeOption",
                                                    displayer: "Size Option",
                                                    value: [
                                                        {
                                                            type: "string",
                                                            key: "sizeName",
                                                            displayer: "Size Name",
                                                            value: "S",
                                                        },
                                                        {
                                                            type: "page",
                                                            key: "navigateTo2",
                                                            displayer: "Navigate To",
                                                            value: ""
                                                        },
                                                        {
                                                            type: "string",
                                                            key: "soldOutText",
                                                            displayer: "Sold Out Text",
                                                            value: "Sold Out",
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: "object",
                                                    key: "sizeOption",
                                                    displayer: "Size Option",
                                                    value: [
                                                        {
                                                            type: "string",
                                                            key: "sizeName",
                                                            displayer: "Size Name",
                                                            value: "M",
                                                        },
                                                        {
                                                            type: "page",
                                                            key: "navigateTo2",
                                                            displayer: "Navigate To",
                                                            value: ""
                                                        },
                                                        {
                                                            type: "string",
                                                            key: "soldOutText",
                                                            displayer: "Sold Out Text",
                                                            value: "Sold Out",
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: "object",
                                                    key: "sizeOption",
                                                    displayer: "Size Option",
                                                    value: [
                                                        {
                                                            type: "string",
                                                            key: "sizeName",
                                                            displayer: "Size Name",
                                                            value: "L",
                                                        },
                                                        {
                                                            type: "page",
                                                            key: "navigateTo2",
                                                            displayer: "Navigate To",
                                                            value: ""
                                                        },
                                                        {
                                                            type: "string",
                                                            key: "soldOutText",
                                                            displayer: "Sold Out Text",
                                                            value: "Sold Out",
                                                        }
                                                    ]
                                                },
                                            ]
                                        }
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
                                            value: "brown",
                                        },
                                        {
                                            type: "media",
                                            key: "cardImage",
                                            displayer: "Card Media",
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                            value: {
                                                type: "image",
                                                url: "https://vineta-html.vercel.app/images/products/fashion/product-5.jpg",
                                            },
                                        },
                                        {
                                            type: "media",
                                            key: "hoverImage",
                                            displayer: "Hover Media",
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                            value: {
                                                type: "image",
                                                url: "https://vineta-html.vercel.app/images/products/fashion/women-grey-2.jpg",
                                            },
                                        },
                                        {
                                            type: "boolean",
                                            key: "isSoldOut",
                                            displayer: "Show Sold Out",
                                            value: true,
                                        },
                                        {
                                            type: "array",
                                            key: "sizeOptions",
                                            displayer: "Size Options",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "sizeOption",
                                                    displayer: "Size Option",
                                                    value: [
                                                        {
                                                            type: "string",
                                                            key: "sizeName",
                                                            displayer: "Size Name",
                                                            value: "S",
                                                        },
                                                        {
                                                            type: "page",
                                                            key: "navigateTo2",
                                                            displayer: "Navigate To",
                                                            value: ""
                                                        },
                                                        {
                                                            type: "string",
                                                            key: "soldOutText",
                                                            displayer: "Sold Out Text",
                                                            value: "Sold Out",
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: "object",
                                                    key: "sizeOption",
                                                    displayer: "Size Option",
                                                    value: [
                                                        {
                                                            type: "string",
                                                            key: "sizeName",
                                                            displayer: "Size Name",
                                                            value: "M",
                                                        },
                                                        {
                                                            type: "page",
                                                            key: "navigateTo2",
                                                            displayer: "Navigate To",
                                                            value: ""
                                                        },
                                                        {
                                                            type: "string",
                                                            key: "soldOutText",
                                                            displayer: "Sold Out Text",
                                                            value: "Sold Out",
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: "object",
                                                    key: "sizeOption",
                                                    displayer: "Size Option",
                                                    value: [
                                                        {
                                                            type: "string",
                                                            key: "sizeName",
                                                            displayer: "Size Name",
                                                            value: "L",
                                                        },
                                                        {
                                                            type: "page",
                                                            key: "navigateTo2",
                                                            displayer: "Navigate To",
                                                            value: ""
                                                        },
                                                        {
                                                            type: "string",
                                                            key: "soldOutText",
                                                            displayer: "Sold Out Text",
                                                            value: "Sold Out",
                                                        }
                                                    ]
                                                },
                                            ]
                                        }
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
                            displayer: "Title",
                            value: "Regular Fit Pima Cotton Polo Shirt",
                        },
                        {
                            type: "currency",
                            key: "cost",
                            displayer: "Cost",
                            value: { value: "130", currency: "USD" },
                        },
                        {
                            type: "string",
                            key: "cardLeftText",
                            displayer: "Badge Text",
                            value: "20% Off",
                        },
                        {
                            type: "page",
                            key: "navigateTo",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "array",
                            key: "rightTextItems",
                            displayer: "Hover Items",
                            value: [
                                {
                                    type: "object",
                                    key: "rightTextItem",
                                    displayer: "Right Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardRightText",
                                            displayer: "Text",
                                            value: "Add to Cart",
                                        },
                                        {
                                            type: "media",
                                            key: "cardRightTextIcon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "LuShoppingBag",
                                            },
                                        },
                                        {
                                            type: "page",
                                            key: "cardRightTextNavigate",
                                            displayer: "Navigate To",
                                            value: "",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "rightTextItem",
                                    displayer: "Right Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardRightText",
                                            displayer: "Text",
                                            value: "Add to Wishlist",
                                        },
                                        {
                                            type: "media",
                                            key: "cardRightTextIcon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "RxHeart",
                                            },
                                        },
                                        {
                                            type: "page",
                                            key: "cardRightTextNavigate",
                                            displayer: "Navigate To",
                                            value: "",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "rightTextItem",
                                    displayer: "Right Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardRightText",
                                            displayer: "Text",
                                            value: "Quick View",
                                        },
                                        {
                                            type: "media",
                                            key: "cardRightTextIcon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "GrView",
                                            },
                                        },
                                        {
                                            type: "page",
                                            key: "cardRightTextNavigate",
                                            displayer: "Navigate To",
                                            value: "",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "rightTextItem",
                                    displayer: "Right Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardRightText",
                                            displayer: "Text",
                                            value: "Add to Compare",
                                        },
                                        {
                                            type: "media",
                                            key: "cardRightTextIcon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "MdCompareArrows",
                                            },
                                        },
                                        {
                                            type: "page",
                                            key: "cardRightTextNavigate",
                                            displayer: "Navigate To",
                                            value: "",
                                        },
                                    ]
                                },
                            ]
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
                                            value: "lightblue",
                                        },
                                        {
                                            type: "media",
                                            key: "cardImage",
                                            displayer: "Card Media",
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                            value: {
                                                type: "image",
                                                url: "https://vineta-html.vercel.app/images/products/fashion/product-2.jpg",
                                            },
                                        },
                                        {
                                            type: "media",
                                            key: "hoverImage",
                                            displayer: "Hover Media",
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                            value: {
                                                type: "image",
                                                url: "https://vineta-html.vercel.app/images/products/fashion/women-grey-2.jpg",
                                            },
                                        },
                                        {
                                            type: "boolean",
                                            key: "isSoldOut",
                                            displayer: "Show Sold Out",
                                            value: true,
                                        },
                                        {
                                            type: "array",
                                            key: "sizeOptions",
                                            displayer: "Size Options",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "sizeOption",
                                                    displayer: "Size Option",
                                                    value: [
                                                        {
                                                            type: "string",
                                                            key: "sizeName",
                                                            displayer: "Size Name",
                                                            value: "M",
                                                        },
                                                        {
                                                            type: "page",
                                                            key: "navigateTo2",
                                                            displayer: "Navigate To",
                                                            value: ""
                                                        },
                                                        {
                                                            type: "string",
                                                            key: "soldOutText",
                                                            displayer: "Sold Out Text",
                                                            value: "Sold Out",
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: "object",
                                                    key: "sizeOption",
                                                    displayer: "Size Option",
                                                    value: [
                                                        {
                                                            type: "string",
                                                            key: "sizeName",
                                                            displayer: "Size Name",
                                                            value: "L",
                                                        },
                                                        {
                                                            type: "page",
                                                            key: "navigateTo2",
                                                            displayer: "Navigate To",
                                                            value: ""
                                                        },
                                                        {
                                                            type: "string",
                                                            key: "soldOutText",
                                                            displayer: "Sold Out Text",
                                                            value: "Sold Out",
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
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
                            displayer: "Title",
                            value: "Long Regular Fit Tee",
                        },
                        {
                            type: "currency",
                            key: "cost",
                            displayer: "Cost",
                            value: { value: "60", currency: "USD" },
                        },
                        {
                            type: "string",
                            key: "cardLeftText",
                            displayer: "Badge Text",
                            value: "20% Off",
                        },
                        {
                            type: "page",
                            key: "navigateTo",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "array",
                            key: "rightTextItems",
                            displayer: "Hover Items",
                            value: [
                                {
                                    type: "object",
                                    key: "rightTextItem",
                                    displayer: "Right Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardRightText",
                                            displayer: "Text",
                                            value: "Add to Cart",
                                        },
                                        {
                                            type: "media",
                                            key: "cardRightTextIcon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "LuShoppingBag",
                                            },
                                        },
                                        {
                                            type: "page",
                                            key: "cardRightTextNavigate",
                                            displayer: "Navigate To",
                                            value: "",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "rightTextItem",
                                    displayer: "Right Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardRightText",
                                            displayer: "Text",
                                            value: "Add to Wishlist",
                                        },
                                        {
                                            type: "media",
                                            key: "cardRightTextIcon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "RxHeart",
                                            },
                                        },
                                        {
                                            type: "page",
                                            key: "cardRightTextNavigate",
                                            displayer: "Navigate To",
                                            value: "",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "rightTextItem",
                                    displayer: "Right Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardRightText",
                                            displayer: "Text",
                                            value: "Quick View",
                                        },
                                        {
                                            type: "media",
                                            key: "cardRightTextIcon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "GrView",
                                            },
                                        },
                                        {
                                            type: "page",
                                            key: "cardRightTextNavigate",
                                            displayer: "Navigate To",
                                            value: "",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "rightTextItem",
                                    displayer: "Right Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardRightText",
                                            displayer: "Text",
                                            value: "Add to Compare",
                                        },
                                        {
                                            type: "media",
                                            key: "cardRightTextIcon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "MdCompareArrows",
                                            },
                                        },
                                        {
                                            type: "page",
                                            key: "cardRightTextNavigate",
                                            displayer: "Navigate To",
                                            value: "",
                                        },
                                    ]
                                },
                            ]
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
                                            type: "media",
                                            key: "cardImage",
                                            displayer: "Card Media",
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                            value: {
                                                type: "image",
                                                url: "https://vineta-html.vercel.app/images/products/fashion/product-6.jpg",
                                            },
                                        },
                                        {
                                            type: "media",
                                            key: "hoverImage",
                                            displayer: "Hover Media",
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                            value: {
                                                type: "image",
                                                url: "https://vineta-html.vercel.app/images/products/fashion/product-4.jpg",
                                            },
                                        },
                                        {
                                            type: "boolean",
                                            key: "isSoldOut",
                                            displayer: "Show Sold Out",
                                            value: false,
                                        },
                                        {
                                            type: "boolean",
                                            key: "overlay",
                                            displayer: "Overlay",
                                            value: false,
                                        },
                                        {
                                            type: "array",
                                            key: "sizeOptions",
                                            displayer: "Size Options",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "sizeOption",
                                                    displayer: "Size Option",
                                                    value: [
                                                        {
                                                            type: "string",
                                                            key: "sizeName",
                                                            displayer: "Size Name",
                                                            value: "S",
                                                        },
                                                        {
                                                            type: "page",
                                                            key: "navigateTo2",
                                                            displayer: "Navigate To",
                                                            value: ""
                                                        },
                                                        {
                                                            type: "string",
                                                            key: "soldOutText",
                                                            displayer: "Sold Out Text",
                                                            value: "Sold Out",
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: "object",
                                                    key: "sizeOption",
                                                    displayer: "Size Option",
                                                    value: [
                                                        {
                                                            type: "string",
                                                            key: "sizeName",
                                                            displayer: "Size Name",
                                                            value: "M",
                                                        },
                                                        {
                                                            type: "page",
                                                            key: "navigateTo2",
                                                            displayer: "Navigate To",
                                                            value: ""
                                                        },
                                                        {
                                                            type: "string",
                                                            key: "soldOutText",
                                                            displayer: "Sold Out Text",
                                                            value: "Sold Out",
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
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
                                            value: "purple",
                                        },
                                        {
                                            type: "media",
                                            key: "cardImage",
                                            displayer: "Card Media",
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                            value: {
                                                type: "image",
                                                url: "https://vineta-html.vercel.app/images/products/fashion/product-3.jpg",
                                            },
                                        },
                                        {
                                            type: "media",
                                            key: "hoverImage",
                                            displayer: "Hover Media",
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                            value: {
                                                type: "image",
                                                url: "https://vineta-html.vercel.app/images/products/fashion/product-4.jpg",
                                            },
                                        },
                                        {
                                            type: "boolean",
                                            key: "isSoldOut",
                                            displayer: "Show Sold Out",
                                            value: false,
                                        },
                                        {
                                            type: "boolean",
                                            key: "overlay",
                                            displayer: "Overlay",
                                            value: false,
                                        },
                                        {
                                            type: "array",
                                            key: "sizeOptions",
                                            displayer: "Size Options",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "sizeOption",
                                                    displayer: "Size Option",
                                                    value: [
                                                        {
                                                            type: "string",
                                                            key: "sizeName",
                                                            displayer: "Size Name",
                                                            value: "M",
                                                        },
                                                        {
                                                            type: "page",
                                                            key: "navigateTo2",
                                                            displayer: "Navigate To",
                                                            value: ""
                                                        },
                                                        {
                                                            type: "string",
                                                            key: "soldOutText",
                                                            displayer: "Sold Out Text",
                                                            value: "Sold Out",
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: "object",
                                                    key: "sizeOption",
                                                    displayer: "Size Option",
                                                    value: [
                                                        {
                                                            type: "string",
                                                            key: "sizeName",
                                                            displayer: "Size Name",
                                                            value: "L",
                                                        },
                                                        {
                                                            type: "page",
                                                            key: "navigateTo2",
                                                            displayer: "Navigate To",
                                                            value: ""
                                                        },
                                                        {
                                                            type: "string",
                                                            key: "soldOutText",
                                                            displayer: "Sold Out Text",
                                                            value: "Sold Out",
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: "object",
                                                    key: "sizeOption",
                                                    displayer: "Size Option",
                                                    value: [
                                                        {
                                                            type: "string",
                                                            key: "sizeName",
                                                            displayer: "Size Name",
                                                            value: "XL",
                                                        },
                                                        {
                                                            type: "page",
                                                            key: "navigateTo2",
                                                            displayer: "Navigate To",
                                                            value: ""
                                                        },
                                                        {
                                                            type: "string",
                                                            key: "soldOutText",
                                                            displayer: "Sold Out Text",
                                                            value: "Sold Out",
                                                        }
                                                    ]
                                                },
                                            ]
                                        }
                                    ]
                                }
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
                            displayer: "Title",
                            value: "Regular Fit Pima Cotton Polo Shirt",
                        },
                        {
                            type: "currency",
                            key: "cost",
                            displayer: "Cost",
                            value: { value: "80", currency: "USD" },
                        },
                        {
                            type: "string",
                            key: "cardLeftText",
                            displayer: "Badge Text",
                            value: "20% Off",
                        },
                        {
                            type: "page",
                            key: "navigateTo",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "array",
                            key: "rightTextItems",
                            displayer: "Hover Items",
                            value: [
                                {
                                    type: "object",
                                    key: "rightTextItem",
                                    displayer: "Right Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardRightText",
                                            displayer: "Text",
                                            value: "Add to Cart",
                                        },
                                        {
                                            type: "media",
                                            key: "cardRightTextIcon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "LuShoppingBag",
                                            },
                                        },
                                        {
                                            type: "page",
                                            key: "cardRightTextNavigate",
                                            displayer: "Navigate To",
                                            value: "",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "rightTextItem",
                                    displayer: "Right Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardRightText",
                                            displayer: "Text",
                                            value: "Add to Wishlist",
                                        },
                                        {
                                            type: "media",
                                            key: "cardRightTextIcon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "RxHeart",
                                            },
                                        },
                                        {
                                            type: "page",
                                            key: "cardRightTextNavigate",
                                            displayer: "Navigate To",
                                            value: "",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "rightTextItem",
                                    displayer: "Right Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardRightText",
                                            displayer: "Text",
                                            value: "Quick View",
                                        },
                                        {
                                            type: "media",
                                            key: "cardRightTextIcon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "GrView",
                                            },
                                        },
                                        {
                                            type: "page",
                                            key: "cardRightTextNavigate",
                                            displayer: "Navigate To",
                                            value: "",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "rightTextItem",
                                    displayer: "Right Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardRightText",
                                            displayer: "Text",
                                            value: "Add to Compare",
                                        },
                                        {
                                            type: "media",
                                            key: "cardRightTextIcon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "MdCompareArrows",
                                            },
                                        },
                                        {
                                            type: "page",
                                            key: "cardRightTextNavigate",
                                            displayer: "Navigate To",
                                            value: "",
                                        },
                                    ]
                                },
                            ]
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
                                            value: "pink",
                                        },
                                        {
                                            type: "media",
                                            key: "cardImage",
                                            displayer: "Card Media",
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                            value: {
                                                type: "image",
                                                url: "https://vineta-html.vercel.app/images/products/fashion/product-17.jpg",
                                            },
                                        },
                                        {
                                            type: "media",
                                            key: "hoverImage",
                                            displayer: "Hover Media",
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                            value: {
                                                type: "image",
                                                url: "https://vineta-html.vercel.app/images/products/fashion/product-1.jpg",
                                            },
                                        },
                                        {
                                            type: "boolean",
                                            key: "isSoldOut",
                                            displayer: "Show Sold Out",
                                            value: false,
                                        },
                                        {
                                            type: "boolean",
                                            key: "overlay",
                                            displayer: "Overlay",
                                            value: false,
                                        },
                                        {
                                            type: "array",
                                            key: "sizeOptions",
                                            displayer: "Size Options",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "sizeOption",
                                                    displayer: "Size Option",
                                                    value: [
                                                        {
                                                            type: "string",
                                                            key: "sizeName",
                                                            displayer: "Size Name",
                                                            value: "S",
                                                        },
                                                        {
                                                            type: "page",
                                                            key: "navigateTo2",
                                                            displayer: "Navigate To",
                                                            value: ""
                                                        },
                                                        {
                                                            type: "string",
                                                            key: "soldOutText",
                                                            displayer: "Sold Out Text",
                                                            value: "Sold Out",
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: "object",
                                                    key: "sizeOption",
                                                    displayer: "Size Option",
                                                    value: [
                                                        {
                                                            type: "string",
                                                            key: "sizeName",
                                                            displayer: "Size Name",
                                                            value: "M",
                                                        },
                                                        {
                                                            type: "page",
                                                            key: "navigateTo2",
                                                            displayer: "Navigate To",
                                                            value: ""
                                                        },
                                                        {
                                                            type: "string",
                                                            key: "soldOutText",
                                                            displayer: "Sold Out Text",
                                                            value: "Sold Out",
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
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
                                            value: "maroon",
                                        },
                                        {
                                            type: "media",
                                            key: "cardImage",
                                            displayer: "Card Media",
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                            value: {
                                                type: "image",
                                                url: "https://vineta-html.vercel.app/images/products/fashion/product-8.jpg",
                                            },
                                        },
                                        {
                                            type: "media",
                                            key: "hoverImage",
                                            displayer: "Hover Media",
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                            value: {
                                                type: "image",
                                                url: "https://vineta-html.vercel.app/images/products/fashion/product-1.jpg",
                                            },
                                        },
                                        {
                                            type: "boolean",
                                            key: "isSoldOut",
                                            displayer: "Show Sold Out",
                                            value: false,
                                        },
                                        {
                                            type: "boolean",
                                            key: "overlay",
                                            displayer: "Overlay",
                                            value: false,
                                        },
                                        {
                                            type: "array",
                                            key: "sizeOptions",
                                            displayer: "Size Options",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "sizeOption",
                                                    displayer: "Size Option",
                                                    value: [
                                                        {
                                                            type: "string",
                                                            key: "sizeName",
                                                            displayer: "Size Name",
                                                            value: "M",
                                                        },
                                                        {
                                                            type: "page",
                                                            key: "navigateTo2",
                                                            displayer: "Navigate To",
                                                            value: ""
                                                        },
                                                        {
                                                            type: "string",
                                                            key: "soldOutText",
                                                            displayer: "Sold Out Text",
                                                            value: "Sold Out",
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: "object",
                                                    key: "sizeOption",
                                                    displayer: "Size Option",
                                                    value: [
                                                        {
                                                            type: "string",
                                                            key: "sizeName",
                                                            displayer: "Size Name",
                                                            value: "L",
                                                        },
                                                        {
                                                            type: "page",
                                                            key: "navigateTo2",
                                                            displayer: "Navigate To",
                                                            value: ""
                                                        },
                                                        {
                                                            type: "string",
                                                            key: "soldOutText",
                                                            displayer: "Sold Out Text",
                                                            value: "Sold Out",
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: "object",
                                                    key: "sizeOption",
                                                    displayer: "Size Option",
                                                    value: [
                                                        {
                                                            type: "string",
                                                            key: "sizeName",
                                                            displayer: "Size Name",
                                                            value: "XL",
                                                        },
                                                        {
                                                            type: "page",
                                                            key: "navigateTo2",
                                                            displayer: "Navigate To",
                                                            value: ""
                                                        },
                                                        {
                                                            type: "string",
                                                            key: "soldOutText",
                                                            displayer: "Sold Out Text",
                                                            value: "Sold Out",
                                                        }
                                                    ]
                                                },
                                            ]
                                        }
                                    ]
                                }
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
                            displayer: "Title",
                            value: "Midi Knit Dress",
                        },
                        {
                            type: "currency",
                            key: "cost",
                            displayer: "Cost",
                            value: { value: "40", currency: "USD" },
                        },
                        {
                            type: "string",
                            key: "cardLeftText",
                            displayer: "Badge Text",
                            value: "20% Off",
                        },
                        {
                            type: "page",
                            key: "navigateTo",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "array",
                            key: "rightTextItems",
                            displayer: "Hover Items",
                            value: [
                                {
                                    type: "object",
                                    key: "rightTextItem",
                                    displayer: "Right Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardRightText",
                                            displayer: "Text",
                                            value: "Add to Cart",
                                        },
                                        {
                                            type: "media",
                                            key: "cardRightTextIcon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "LuShoppingBag",
                                            },
                                        },
                                        {
                                            type: "page",
                                            key: "cardRightTextNavigate",
                                            displayer: "Navigate To",
                                            value: "",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "rightTextItem",
                                    displayer: "Right Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardRightText",
                                            displayer: "Text",
                                            value: "Add to Wishlist",
                                        },
                                        {
                                            type: "media",
                                            key: "cardRightTextIcon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "RxHeart",
                                            },
                                        },
                                        {
                                            type: "page",
                                            key: "cardRightTextNavigate",
                                            displayer: "Navigate To",
                                            value: "",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "rightTextItem",
                                    displayer: "Right Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardRightText",
                                            displayer: "Text",
                                            value: "Quick View",
                                        },
                                        {
                                            type: "media",
                                            key: "cardRightTextIcon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "GrView",
                                            },
                                        },
                                        {
                                            type: "page",
                                            key: "cardRightTextNavigate",
                                            displayer: "Navigate To",
                                            value: "",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "rightTextItem",
                                    displayer: "Right Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardRightText",
                                            displayer: "Text",
                                            value: "Add to Compare",
                                        },
                                        {
                                            type: "media",
                                            key: "cardRightTextIcon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "MdCompareArrows",
                                            },
                                        },
                                        {
                                            type: "page",
                                            key: "cardRightTextNavigate",
                                            displayer: "Navigate To",
                                            value: "",
                                        },
                                    ]
                                },
                            ]
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
                                            value: "teal",
                                        },
                                        {
                                            type: "media",
                                            key: "cardImage",
                                            displayer: "Card Media",
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                            value: {
                                                type: "image",
                                                url: "https://vineta-html.vercel.app/images/products/fashion/product-25.jpg",
                                            },
                                        },
                                        {
                                            type: "media",
                                            key: "hoverImage",
                                            displayer: "Hover Media",
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                            value: {
                                                type: "image",
                                                url: "https://vineta-html.vercel.app/images/products/fashion/product-24.jpg",
                                            },
                                        },
                                        {
                                            type: "boolean",
                                            key: "isSoldOut",
                                            displayer: "Show Sold Out",
                                            value: false,
                                        },
                                        {
                                            type: "boolean",
                                            key: "overlay",
                                            displayer: "Overlay",
                                            value: false,
                                        },
                                        {
                                            type: "array",
                                            key: "sizeOptions",
                                            displayer: "Size Options",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "sizeOption",
                                                    displayer: "Size Option",
                                                    value: [
                                                        {
                                                            type: "string",
                                                            key: "sizeName",
                                                            displayer: "Size Name",
                                                            value: "S",
                                                        },
                                                        {
                                                            type: "page",
                                                            key: "navigateTo2",
                                                            displayer: "Navigate To",
                                                            value: ""
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
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: "object",
                                                    key: "sizeOption",
                                                    displayer: "Size Option",
                                                    value: [
                                                        {
                                                            type: "string",
                                                            key: "sizeName",
                                                            displayer: "Size Name",
                                                            value: "M",
                                                        },
                                                        {
                                                            type: "page",
                                                            key: "navigateTo2",
                                                            displayer: "Navigate To",
                                                            value: ""
                                                        },
                                                        {
                                                            type: "string",
                                                            key: "soldOutText",
                                                            displayer: "Sold Out Text",
                                                            value: "Sold Out",
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
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
                                            value: "coral",
                                        },
                                        {
                                            type: "media",
                                            key: "cardImage",
                                            displayer: "Card Media",
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                            value: {
                                                type: "image",
                                                url: "https://vineta-html.vercel.app/images/products/fashion/product-22.jpg",
                                            },
                                        },
                                        {
                                            type: "media",
                                            key: "hoverImage",
                                            displayer: "Hover Media",
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                            value: {
                                                type: "image",
                                                url: "https://vineta-html.vercel.app/images/products/fashion/product-24.jpg",
                                            },
                                        },
                                        {
                                            type: "boolean",
                                            key: "isSoldOut",
                                            displayer: "Show Sold Out",
                                            value: false,
                                        },
                                        {
                                            type: "boolean",
                                            key: "overlay",
                                            displayer: "Overlay",
                                            value: false,
                                        },
                                        {
                                            type: "array",
                                            key: "sizeOptions",
                                            displayer: "Size Options",
                                            value: [
                                                {
                                                    type: "object",
                                                    key: "sizeOption",
                                                    displayer: "Size Option",
                                                    value: [
                                                        {
                                                            type: "string",
                                                            key: "sizeName",
                                                            displayer: "Size Name",
                                                            value: "S",
                                                        },
                                                        {
                                                            type: "page",
                                                            key: "navigateTo2",
                                                            displayer: "Navigate To",
                                                            value: ""
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
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: "object",
                                                    key: "sizeOption",
                                                    displayer: "Size Option",
                                                    value: [
                                                        {
                                                            type: "string",
                                                            key: "sizeName",
                                                            displayer: "Size Name",
                                                            value: "M",
                                                        },
                                                        {
                                                            type: "page",
                                                            key: "navigateTo2",
                                                            displayer: "Navigate To",
                                                            value: ""
                                                        },
                                                        {
                                                            type: "string",
                                                            key: "soldOutText",
                                                            displayer: "Sold Out Text",
                                                            value: "Sold Out",
                                                        }
                                                    ]
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
            ]
        });
        this.addProp(INPUTS.BUTTON("button", "Button", "Load More", "", null, null, "Primary"));
        this.setComponentState("moreImages", 0);

        this.setComponentState("selectedStates",
            this.castToObject<ProductCard[]>("productCards").map((card: ProductCard, _: number) => ({
                selectedColor: card.colorOptions?.[0]?.sectionColor || "",
                selectedColorIndex: 0,
                selectedSize: card.colorOptions?.[0]?.sizeOptions?.[0]?.sizeName || "",
                selectedSizeIndex: 0
            }))
        );
    }

    static getName(): string {
        return "ECommerce 4";
    }

    handleColorClick(cardIndex: number, sectionColor: string, colorIndex: number): void {
        const selectedStates = [...this.getComponentState("selectedStates")];
        const productCard = this.castToObject<ProductCard[]>("productCards")[cardIndex];
        selectedStates[cardIndex] = {
            ...selectedStates[cardIndex],
            selectedColor: sectionColor,
            selectedColorIndex: colorIndex,
            selectedSize: productCard.colorOptions[colorIndex]?.sizeOptions?.[0]?.sizeName || "",
            selectedSizeIndex: 0
        };
        this.setComponentState("selectedStates", selectedStates);
    }

    handleSizeClick(cardIndex: number, sizeName: string, sizeIndex: number): void {
        const selectedStates = [...this.getComponentState("selectedStates")];
        selectedStates[cardIndex] = {
            ...selectedStates[cardIndex],
            selectedSize: sizeName,
            selectedSizeIndex: sizeIndex
        };
        this.setComponentState("selectedStates", selectedStates);
    }

    handleButtonClick = () => {
        const countSettings = this.castToObject<{ imageCountInitial: number; imageCount: number; itemCount: number }>("countSettings");
        this.setComponentState("moreImages", this.getComponentState("moreImages") + countSettings.imageCount);
    };

    render() {
        const productCards = this.castToObject<ProductCard[]>("productCards") || [];
        const selectedStates = this.getComponentState("selectedStates") || [];
        const countSettings = this.castToObject<{ imageCountInitial: number; imageCount: number; itemCount: number }>("countSettings");
        const itemCount = countSettings.itemCount;
        if (this.getComponentState("imageCount") !== countSettings.imageCountInitial + this.getComponentState("moreImages"))
            this.setComponentState("imageCount", countSettings.imageCountInitial + this.getComponentState("moreImages"));
        const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");
        const headerButton: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("headerButton");
        const subtitle = this.getPropValue("subtitle");
        const subtitleStr = this.castToString(subtitle);
        const title = this.getPropValue("title");
        const titleStr = this.castToString(title);
        const description = this.getPropValue("description");
        const descriptionStr = this.castToString(description);

        return (
            <Base.Container className={this.decorateCSS("container")}>
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
                    <Base.ListGrid gridCount={{ pc: Math.min(itemCount, 4), tablet: 3, phone: 1 }} className={this.decorateCSS("grid")}>
                        {productCards.slice(0, this.getComponentState("imageCount")).map((productCard: ProductCard, cardIndex: number) => {
                            const selectedState = selectedStates[cardIndex] || { selectedColor: "", selectedColorIndex: 0, selectedSize: "", selectedSizeIndex: 0 };
                            const selectedColorOption = productCard.colorOptions?.[selectedState.selectedColorIndex] || productCard.colorOptions?.[0];
                            const selectedSizeOption = selectedColorOption?.sizeOptions?.find(
                                option => option.sizeName === selectedState.selectedSize
                            ) || selectedColorOption?.sizeOptions?.[0];

                            return (
                                <Base.VerticalContent key={cardIndex} className={this.decorateCSS("card-container")}>
                                    <ComposerLink path={productCard.navigateTo} isFullWidth={true}>
                                        <div className={this.decorateCSS("image-container")}>
                                            <div
                                                className={`${this.decorateCSS("image-1-container")} ${selectedColorOption?.isSoldOut ? this.decorateCSS("image-sold-out") : ""}`}>
                                                {(selectedColorOption?.cardImage as { url?: string })?.url && (
                                                    <Base.Media
                                                        value={selectedColorOption.cardImage}
                                                        className={this.decorateCSS("image")}
                                                    />
                                                )}
                                            </div>
                                            <div
                                                className={`${this.decorateCSS("image-2-container")} ${selectedColorOption?.isSoldOut ? this.decorateCSS("image-sold-out") : ""}`}>
                                                {(selectedColorOption?.hoverImage as { url?: string })?.url && (
                                                    <Base.Media
                                                        value={selectedColorOption?.isSoldOut ? selectedColorOption?.cardImage : selectedColorOption?.hoverImage}
                                                        className={this.decorateCSS("image")}
                                                    />
                                                )}
                                            </div>
                                            {selectedColorOption?.overlay && <div className={this.decorateCSS("overlay")} />}
                                            {selectedColorOption?.isSoldOut && (
                                                <Base.P className={this.decorateCSS("sold-out")}>
                                                    {selectedSizeOption.soldOutText}
                                                </Base.P>
                                            )}
                                            <div className={this.decorateCSS("image-text-left")}>
                                                {this.castToString(productCard.cardLeftText) && (
                                                    <Base.P className={this.decorateCSS("cardLeftText")}>{productCard.cardLeftText}</Base.P>
                                                )}
                                            </div>
                                            {selectedColorOption?.sizeOptions && selectedColorOption.sizeOptions.length > 0 && (
                                                <div className={`${selectedColorOption.isSoldOut ? this.decorateCSS("section-size-container-sold-out") : this.decorateCSS("section-size-container")} animate__animated animate__fadeInUp`}>
                                                    {selectedColorOption.sizeOptions.map((sizeOption: SizeOption, sizeIndex: number) => (
                                                        <ComposerLink path={sizeOption.navigateTo2}>
                                                            <div
                                                                key={sizeIndex}
                                                                className={`${this.decorateCSS("section-size")} ${sizeOption.sizeName === selectedState.selectedSize
                                                                    ? this.decorateCSS("active-section-size") : ""}`}
                                                                onClick={() => {
                                                                    this.handleSizeClick(cardIndex, sizeOption.sizeName, sizeIndex)
                                                                }}>
                                                                {sizeOption.sizeName}
                                                            </div>
                                                        </ComposerLink>
                                                    ))}
                                                </div>
                                            )}
                                            <div className={`${selectedColorOption?.isSoldOut
                                                ? this.decorateCSS("image-right-side-sold-out")
                                                : this.decorateCSS("image-right-side")
                                                }`}>
                                                {productCard.rightTextItems?.map((item: RightTextItems, index: number) => (
                                                    <div
                                                        key={index}
                                                        className={`${this.decorateCSS("right-side-items")} animate__animated animate__fadeInRight`}
                                                        style={{ animationDelay: `${index * 0.08}s` }}>
                                                        <ComposerLink path={item.cardRightTextNavigate}>
                                                            <div className={this.decorateCSS("image-icon-container")}>
                                                                <Base.Media value={item.cardRightTextIcon} className={this.decorateCSS("image-right-icon")} />
                                                            </div>
                                                        </ComposerLink>
                                                        <Base.P className={this.decorateCSS("card-right-text-container")}>
                                                            {this.castToString(item.cardRightText) && (
                                                                <Base.P className={this.decorateCSS("card-right-text")}>{item.cardRightText}</Base.P>
                                                            )}s
                                                        </Base.P>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </ComposerLink>
                                    <Base.VerticalContent className={`${this.decorateCSS("text-container")} ${selectedColorOption?.isSoldOut ? this.decorateCSS("text-sold-out") : ""}`}>
                                        {this.castToString(productCard.cardTitle) && (
                                            <Base.H6 className={this.decorateCSS("title")}>{productCard.cardTitle}</Base.H6>
                                        )}
                                        {productCard.cost.value && (
                                            <div className={this.decorateCSS("price")}>
                                                <Base.P className={this.decorateCSS("value")}>
                                                    {productCard.cost?.value}
                                                </Base.P>
                                                <Base.P className={this.decorateCSS("currency-code")}>
                                                    {getCurrencyInfo(productCard.cost.currency)?.symbol}
                                                </Base.P>
                                            </div>
                                        )}
                                    </Base.VerticalContent>
                                    <div className={this.decorateCSS("section-color-container")}>
                                        {productCard.colorOptions?.map((colorOption: ColorOption, colorIndex: number) => (
                                            <button
                                                key={colorIndex}
                                                className={`${this.decorateCSS("section-color")}
                                                ${colorOption.sectionColor === selectedState.selectedColor ? this.decorateCSS("active-section-color") : ""}`}
                                                onClick={() => {
                                                    this.handleColorClick(cardIndex, colorOption.sectionColor, colorIndex)
                                                }}
                                                onMouseEnter={() => {
                                                    this.handleColorClick(cardIndex, colorOption.sectionColor, colorIndex)
                                                }}
                                                style={{ backgroundColor: colorOption.sectionColor }}>
                                            </button>
                                        ))}
                                    </div>
                                </Base.VerticalContent>
                            );
                        })}
                    </Base.ListGrid>
                    {this.castToString(button.text) && (() => {
                        const hasMoreItems = productCards.length > this.getComponentState("imageCount");
                        return (
                            <div className={this.decorateCSS("button-wrapper")}>
                                <ComposerLink path={hasMoreItems ? "" : button.url}>
                                    <Base.Button className={this.decorateCSS("button")} buttonType={button.type} onClick={hasMoreItems ? this.handleButtonClick : undefined}>
                                        <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                                    </Base.Button>
                                </ComposerLink>
                            </div>
                        );
                    })()}
                </Base.MaxContent >
            </Base.Container >
        );
    }
}

export default ECommerce4;