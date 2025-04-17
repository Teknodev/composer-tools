import * as React from "react";
import { Base } from "composer-tools/composer-base-components/base/base";
import styles from "./e-commerce4.module.scss";
import { BaseECommerce } from "composer-tools/editor-components/EditorComponent";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "composer-tools/composer-base-components/icon/icon";

interface SizeOption {
    sizeName: string;
    isSoldOut: boolean;
    soldOutText: string;
    navigateTo2: string;
}

interface ColorOption {
    sectionColor: string;
    cardImage: string;
    hoverImage: string;
    sizeOptions: SizeOption[];
}

interface RightTextItems {
    cardRightText: string;
    cardRightTextIcon: string;
    cardRightTextNavigate: string;
}

interface ProductCard {
    cardTitle: string;
    cardPrice: string;
    cardLeftText: string;
    colorOptions: ColorOption[];
    navigateTo: string;
    rightTextItems: RightTextItems[];
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
                            type: "page",
                            key: "navigateTo",
                            displayer: "Card Navigate To",
                            value: "",
                        },
                        {
                            type: "array",
                            key: "rightTextItems",
                            displayer: "Right Texts",
                            value: [
                                {
                                    type: "object",
                                    key: "rightTextItem",
                                    displayer: "Right Text Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardRightText",
                                            displayer: "Right Text",
                                            value: "Add to Cart",
                                        },
                                        {
                                            type: "icon",
                                            key: "cardRightTextIcon",
                                            displayer: "Right Text Icon",
                                            value: "LuShoppingBag",
                                        },
                                        {
                                            type: "page",
                                            key: "cardRightTextNavigate",
                                            displayer: "Right Text Navigate To",
                                            value: "",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "rightTextItem",
                                    displayer: "Right Text Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardRightText",
                                            displayer: "Right Text",
                                            value: "Add to Wishlist",
                                        },
                                        {
                                            type: "icon",
                                            key: "cardRightTextIcon",
                                            displayer: "Right Text Icon",
                                            value: "RxHeart",
                                        },
                                        {
                                            type: "page",
                                            key: "cardRightTextNavigate",
                                            displayer: "Right Text Navigate To",
                                            value: "",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "rightTextItem",
                                    displayer: "Right Text Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardRightText",
                                            displayer: "Right Text",
                                            value: "Quick View",
                                        },
                                        {
                                            type: "icon",
                                            key: "cardRightTextIcon",
                                            displayer: "Right Text Icon",
                                            value: "GrView",
                                        },
                                        {
                                            type: "page",
                                            key: "cardRightTextNavigate",
                                            displayer: "Right Text Navigate To",
                                            value: "",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "rightTextItem",
                                    displayer: "Right Text Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardRightText",
                                            displayer: "Right Text",
                                            value: "Add to Compare",
                                        },
                                        {
                                            type: "icon",
                                            key: "cardRightTextIcon",
                                            displayer: "Right Text Icon",
                                            value: "MdCompareArrows",
                                        },
                                        {
                                            type: "page",
                                            key: "cardRightTextNavigate",
                                            displayer: "Right Text Navigate To",
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
                                            type: "image",
                                            key: "cardImage",
                                            displayer: "Card Image",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/product-19.jpg",
                                        },
                                        {
                                            type: "image",
                                            key: "hoverImage",
                                            displayer: "Hover Image",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/women-grey-2.jpg",
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
                                                            value: "L",
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
                                                            value: true,
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
                                            type: "image",
                                            key: "cardImage",
                                            displayer: "Card Image",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/product-2.jpg",
                                        },
                                        {
                                            type: "image",
                                            key: "hoverImage",
                                            displayer: "Hover Image",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/women-grey-2.jpg",
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
                                                            value: "L",
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
                                            type: "image",
                                            key: "cardImage",
                                            displayer: "Card Image",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/product-5.jpg",
                                        },
                                        {
                                            type: "image",
                                            key: "hoverImage",
                                            displayer: "Hover Image",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/women-grey-2.jpg",
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
                                                            value: true,
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
                                                            value: "L",
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
                            displayer: "Card Title",
                            value: "Regular Fit Pima Cotton Polo Shirt",
                        },
                        {
                            type: "string",
                            key: "cardPrice",
                            displayer: "Price",
                            value: "$130.00",
                        },
                        {
                            type: "string",
                            key: "cardLeftText",
                            displayer: "Left Text",
                            value: "20% Off",
                        },
                        {
                            type: "page",
                            key: "navigateTo",
                            displayer: "Card Navigate To",
                            value: "",
                        },
                        {
                            type: "array",
                            key: "rightTextItems",
                            displayer: "Right Texts",
                            value: [
                                {
                                    type: "object",
                                    key: "rightTextItem",
                                    displayer: "Right Text Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardRightText",
                                            displayer: "Right Text",
                                            value: "Add to Cart",
                                        },
                                        {
                                            type: "icon",
                                            key: "cardRightTextIcon",
                                            displayer: "Right Text Icon",
                                            value: "LuShoppingBag",
                                        },
                                        {
                                            type: "page",
                                            key: "cardRightTextNavigate",
                                            displayer: "Right Text Navigate To",
                                            value: "",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "rightTextItem",
                                    displayer: "Right Text Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardRightText",
                                            displayer: "Right Text",
                                            value: "Add to Wishlist",
                                        },
                                        {
                                            type: "icon",
                                            key: "cardRightTextIcon",
                                            displayer: "Right Text Icon",
                                            value: "RxHeart",
                                        },
                                        {
                                            type: "page",
                                            key: "cardRightTextNavigate",
                                            displayer: "Right Text Navigate To",
                                            value: "",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "rightTextItem",
                                    displayer: "Right Text Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardRightText",
                                            displayer: "Right Text",
                                            value: "Quick View",
                                        },
                                        {
                                            type: "icon",
                                            key: "cardRightTextIcon",
                                            displayer: "Right Text Icon",
                                            value: "GrView",
                                        },
                                        {
                                            type: "page",
                                            key: "cardRightTextNavigate",
                                            displayer: "Right Text Navigate To",
                                            value: "",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "rightTextItem",
                                    displayer: "Right Text Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardRightText",
                                            displayer: "Right Text",
                                            value: "Add to Compare",
                                        },
                                        {
                                            type: "icon",
                                            key: "cardRightTextIcon",
                                            displayer: "Right Text Icon",
                                            value: "MdCompareArrows",
                                        },
                                        {
                                            type: "page",
                                            key: "cardRightTextNavigate",
                                            displayer: "Right Text Navigate To",
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
                                            type: "image",
                                            key: "cardImage",
                                            displayer: "Card Image",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/product-2.jpg",
                                        },
                                        {
                                            type: "image",
                                            key: "hoverImage",
                                            displayer: "Hover Image",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/women-grey-2.jpg",
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
                            type: "page",
                            key: "navigateTo",
                            displayer: "Card Navigate To",
                            value: "",
                        },
                        {
                            type: "array",
                            key: "rightTextItems",
                            displayer: "Right Texts",
                            value: [
                                {
                                    type: "object",
                                    key: "rightTextItem",
                                    displayer: "Right Text Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardRightText",
                                            displayer: "Right Text",
                                            value: "Add to Cart",
                                        },
                                        {
                                            type: "icon",
                                            key: "cardRightTextIcon",
                                            displayer: "Right Text Icon",
                                            value: "LuShoppingBag",
                                        },
                                        {
                                            type: "page",
                                            key: "cardRightTextNavigate",
                                            displayer: "Right Text Navigate To",
                                            value: "",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "rightTextItem",
                                    displayer: "Right Text Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardRightText",
                                            displayer: "Right Text",
                                            value: "Add to Wishlist",
                                        },
                                        {
                                            type: "icon",
                                            key: "cardRightTextIcon",
                                            displayer: "Right Text Icon",
                                            value: "RxHeart",
                                        },
                                        {
                                            type: "page",
                                            key: "cardRightTextNavigate",
                                            displayer: "Right Text Navigate To",
                                            value: "",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "rightTextItem",
                                    displayer: "Right Text Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardRightText",
                                            displayer: "Right Text",
                                            value: "Quick View",
                                        },
                                        {
                                            type: "icon",
                                            key: "cardRightTextIcon",
                                            displayer: "Right Text Icon",
                                            value: "GrView",
                                        },
                                        {
                                            type: "page",
                                            key: "cardRightTextNavigate",
                                            displayer: "Right Text Navigate To",
                                            value: "",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "rightTextItem",
                                    displayer: "Right Text Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardRightText",
                                            displayer: "Right Text",
                                            value: "Add to Compare",
                                        },
                                        {
                                            type: "icon",
                                            key: "cardRightTextIcon",
                                            displayer: "Right Text Icon",
                                            value: "MdCompareArrows",
                                        },
                                        {
                                            type: "page",
                                            key: "cardRightTextNavigate",
                                            displayer: "Right Text Navigate To",
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
                                            type: "image",
                                            key: "cardImage",
                                            displayer: "Card Image",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/product-6.jpg",
                                        },
                                        {
                                            type: "image",
                                            key: "hoverImage",
                                            displayer: "Hover Image",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/product-4.jpg",
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
                                            type: "image",
                                            key: "cardImage",
                                            displayer: "Card Image",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/product-3.jpg",
                                        },
                                        {
                                            type: "image",
                                            key: "hoverImage",
                                            displayer: "Hover Image",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/product-4.jpg",
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
                                                            value: "XL",
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
                            type: "page",
                            key: "navigateTo",
                            displayer: "Card Navigate To",
                            value: "",
                        },
                        {
                            type: "array",
                            key: "rightTextItems",
                            displayer: "Right Texts",
                            value: [
                                {
                                    type: "object",
                                    key: "rightTextItem",
                                    displayer: "Right Text Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardRightText",
                                            displayer: "Right Text",
                                            value: "Add to Cart",
                                        },
                                        {
                                            type: "icon",
                                            key: "cardRightTextIcon",
                                            displayer: "Right Text Icon",
                                            value: "LuShoppingBag",
                                        },
                                        {
                                            type: "page",
                                            key: "cardRightTextNavigate",
                                            displayer: "Right Text Navigate To",
                                            value: "",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "rightTextItem",
                                    displayer: "Right Text Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardRightText",
                                            displayer: "Right Text",
                                            value: "Add to Wishlist",
                                        },
                                        {
                                            type: "icon",
                                            key: "cardRightTextIcon",
                                            displayer: "Right Text Icon",
                                            value: "RxHeart",
                                        },
                                        {
                                            type: "page",
                                            key: "cardRightTextNavigate",
                                            displayer: "Right Text Navigate To",
                                            value: "",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "rightTextItem",
                                    displayer: "Right Text Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardRightText",
                                            displayer: "Right Text",
                                            value: "Quick View",
                                        },
                                        {
                                            type: "icon",
                                            key: "cardRightTextIcon",
                                            displayer: "Right Text Icon",
                                            value: "GrView",
                                        },
                                        {
                                            type: "page",
                                            key: "cardRightTextNavigate",
                                            displayer: "Right Text Navigate To",
                                            value: "",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "rightTextItem",
                                    displayer: "Right Text Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardRightText",
                                            displayer: "Right Text",
                                            value: "Add to Compare",
                                        },
                                        {
                                            type: "icon",
                                            key: "cardRightTextIcon",
                                            displayer: "Right Text Icon",
                                            value: "MdCompareArrows",
                                        },
                                        {
                                            type: "page",
                                            key: "cardRightTextNavigate",
                                            displayer: "Right Text Navigate To",
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
                                            type: "image",
                                            key: "cardImage",
                                            displayer: "Card Image",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/product-17.jpg",
                                        },
                                        {
                                            type: "image",
                                            key: "hoverImage",
                                            displayer: "Hover Image",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/product-1.jpg",
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
                                            type: "image",
                                            key: "cardImage",
                                            displayer: "Card Image",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/product-8.jpg",
                                        },
                                        {
                                            type: "image",
                                            key: "hoverImage",
                                            displayer: "Hover Image",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/product-1.jpg",
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
                                                            value: "L",
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
                                                            value: "XL",
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
                            type: "page",
                            key: "navigateTo",
                            displayer: "Card Navigate To",
                            value: "",
                        },
                        {
                            type: "array",
                            key: "rightTextItems",
                            displayer: "Right Texts",
                            value: [
                                {
                                    type: "object",
                                    key: "rightTextItem",
                                    displayer: "Right Text Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardRightText",
                                            displayer: "Right Text",
                                            value: "Add to Cart",
                                        },
                                        {
                                            type: "icon",
                                            key: "cardRightTextIcon",
                                            displayer: "Right Text Icon",
                                            value: "LuShoppingBag",
                                        },
                                        {
                                            type: "page",
                                            key: "cardRightTextNavigate",
                                            displayer: "Right Text Navigate To",
                                            value: "",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "rightTextItem",
                                    displayer: "Right Text Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardRightText",
                                            displayer: "Right Text",
                                            value: "Add to Wishlist",
                                        },
                                        {
                                            type: "icon",
                                            key: "cardRightTextIcon",
                                            displayer: "Right Text Icon",
                                            value: "RxHeart",
                                        },
                                        {
                                            type: "page",
                                            key: "cardRightTextNavigate",
                                            displayer: "Right Text Navigate To",
                                            value: "",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "rightTextItem",
                                    displayer: "Right Text Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardRightText",
                                            displayer: "Right Text",
                                            value: "Quick View",
                                        },
                                        {
                                            type: "icon",
                                            key: "cardRightTextIcon",
                                            displayer: "Right Text Icon",
                                            value: "GrView",
                                        },
                                        {
                                            type: "page",
                                            key: "cardRightTextNavigate",
                                            displayer: "Right Text Navigate To",
                                            value: "",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "rightTextItem",
                                    displayer: "Right Text Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardRightText",
                                            displayer: "Right Text",
                                            value: "Add to Compare",
                                        },
                                        {
                                            type: "icon",
                                            key: "cardRightTextIcon",
                                            displayer: "Right Text Icon",
                                            value: "MdCompareArrows",
                                        },
                                        {
                                            type: "page",
                                            key: "cardRightTextNavigate",
                                            displayer: "Right Text Navigate To",
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
                                            type: "image",
                                            key: "cardImage",
                                            displayer: "Card Image",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/product-25.jpg",
                                        },
                                        {
                                            type: "image",
                                            key: "hoverImage",
                                            displayer: "Hover Image",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/product-24.jpg",
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
                                            type: "image",
                                            key: "cardImage",
                                            displayer: "Card Image",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/product-22.jpg",
                                        },
                                        {
                                            type: "image",
                                            key: "hoverImage",
                                            displayer: "Hover Image",
                                            value: "https://vineta-html.vercel.app/images/products/fashion/product-24.jpg",
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
        this.addProp(INPUTS.BUTTON("button", "Button", "Load More", null, null, null, "Primary"));
        this.setComponentState("moreImages", 0);

        this.setComponentState("selectedStates",
            this.castToObject<ProductCard[]>("productCards").map((card: ProductCard, index: number) => ({
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
                            const selectedState = selectedStates[cardIndex] || { selectedColor: "", selectedColorIndex: 0, selectedSize: "", selectedSizeIndex: 0 };
                            const selectedColorOption = productCard.colorOptions?.[selectedState.selectedColorIndex] || productCard.colorOptions?.[0];
                            const selectedSizeOption = selectedColorOption?.sizeOptions?.find(
                                option => option.sizeName === selectedState.selectedSize
                            ) || selectedColorOption?.sizeOptions?.[0];

                            return (
                                <div key={cardIndex} className={this.decorateCSS("card-container")}>
                                    <ComposerLink path={productCard.navigateTo} isFullWidth={true}>
                                        <div className={this.decorateCSS("image-container")}>
                                            <div
                                                className={`${this.decorateCSS("image-1-container")} ${selectedSizeOption?.isSoldOut ? this.decorateCSS("image-sold-out") : ""}`}
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
                                                className={`${this.decorateCSS("image-2-container")} ${selectedSizeOption?.isSoldOut ? this.decorateCSS("image-sold-out") : ""}`}
                                            >
                                                {selectedColorOption?.hoverImage && (
                                                    <img
                                                        alt={selectedSizeOption?.isSoldOut ? selectedColorOption?.cardImage : selectedColorOption?.hoverImage}
                                                        src={selectedSizeOption?.isSoldOut ? selectedColorOption?.cardImage : selectedColorOption?.hoverImage}
                                                        className={this.decorateCSS("image")}
                                                    />
                                                )}
                                            </div>
                                            {selectedSizeOption?.isSoldOut && (
                                                <div className={this.decorateCSS("sold-out")}>
                                                    {selectedSizeOption.soldOutText}
                                                </div>
                                            )}
                                            <div className={this.decorateCSS("image-text-left")}>
                                                {this.castToString(productCard.cardLeftText) && (
                                                    <div className={this.decorateCSS("cardLeftText")}>{productCard.cardLeftText}</div>
                                                )}
                                            </div>
                                            <div className={`${this.decorateCSS("section-size-container")} animate__animated animate__fadeInUp`}>
                                                {selectedColorOption?.sizeOptions?.map((sizeOption: SizeOption, sizeIndex: number) => (
                                                    <ComposerLink path={sizeOption.navigateTo2}>
                                                        <div
                                                            key={sizeIndex}
                                                            className={`${this.decorateCSS("section-size")} ${sizeOption.sizeName === selectedState.selectedSize
                                                                ? this.decorateCSS("active-section-size")
                                                                : ""
                                                                }`}
                                                            onClick={() => {
                                                                this.handleSizeClick(cardIndex, sizeOption.sizeName, sizeIndex)
                                                            }
                                                            }
                                                        >
                                                            {sizeOption.sizeName}
                                                        </div>
                                                    </ComposerLink>
                                                ))}
                                            </div>
                                            <div
                                                className={`${selectedSizeOption?.isSoldOut
                                                    ? this.decorateCSS("image-right-side-sold-out")
                                                    : this.decorateCSS("image-right-side")
                                                    } animate__animated animate__slideInRight`}
                                            >
                                                {productCard.rightTextItems?.map((item: RightTextItems, index: number) => (
                                                    <div className={this.decorateCSS("right-side-items")}>
                                                        <div className={this.decorateCSS("card-right-text-container")}>
                                                            {this.castToString(item.cardRightText) && (
                                                                <div className={this.decorateCSS("card-right-text")}>{item.cardRightText}</div>
                                                            )}
                                                        </div>
                                                        <ComposerLink path={item.cardRightTextNavigate}>
                                                            <div className={this.decorateCSS("image-icon-container")}>
                                                                <ComposerIcon
                                                                    name={item.cardRightTextIcon}
                                                                    propsIcon={{
                                                                        className: this.decorateCSS("image-right-icon"),
                                                                    }}
                                                                />
                                                            </div>
                                                        </ComposerLink>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </ComposerLink>
                                    <div className={`${this.decorateCSS("text-container")} ${selectedSizeOption?.isSoldOut ? this.decorateCSS("text-sold-out") : ""}`}>
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
                                                onClick={() => {
                                                    this.handleColorClick(cardIndex, colorOption.sectionColor, colorIndex)
                                                }
                                                }
                                                onMouseEnter={() => {
                                                    this.handleColorClick(cardIndex, colorOption.sectionColor, colorIndex)
                                                }}
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
            </Base.Container >
        );
    }
}

export default ECommerce4;