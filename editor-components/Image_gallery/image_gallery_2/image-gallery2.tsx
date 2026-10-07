import * as React from "react";
import { BaseImageGallery, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./image-gallery2.module.scss";

import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type ImageType = {
    image: TypeMediaInputValue;
    overlay?: boolean;
    imageTitle: React.JSX.Element;
};

type CountSettings = {
    imageCountInitial: number;
    imageCount: number;
    itemCount: number;
};

type AllCategory = {
    showAll: boolean;
    allText: React.JSX.Element;
};

type sectionType = {
    title: string;
    imageGallery: ImageType[];
};

class ImageGallery2 extends BaseImageGallery {
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
            key: "description",
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
            key: "allCategory",
            displayer: "All Category",
            value: [
                {
                    type: "boolean",
                    key: "showAll",
                    displayer: "Show",
                    value: true,
                },
                {
                    type: "string",
                    key: "allText",
                    displayer: "Text",
                    value: "All",
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
                    displayer: "Media Count Initial",
                    value: 3
                },
                {
                    type: "number",
                    key: "imageCount",
                    displayer: "More Media Count",
                    value: 3
                },
                {
                    type: "number",
                    key: "itemCount",
                    displayer: "Item Count in a Row",
                    value: 3
                },
            ]
        });

        this.addProp({
            type: "array",
            key: "gallery",
            displayer: "Gallery",
            value: [
                {
                    type: "object",
                    key: "section",
                    displayer: "Section",
                    value: [
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Nonveg",
                        },
                        {
                            type: "array",
                            key: "imageGallery",
                            displayer: "Media",
                            value: [
                                {
                                    type: "object",
                                    key: "imageGallery_section",
                                    displayer: "Media Item",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Media",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66db15cc343034002c4597b8?alt=media",
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
                                            key: "imageTitle",
                                            displayer: "Title",
                                            value: "Nonveg Image",
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "imageGallery_section",
                                    displayer: "Media Item",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Media",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66db161b343034002c4597d7?alt=media",
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
                                            key: "imageTitle",
                                            displayer: "Title",
                                            value: "Nonveg Image",
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "imageGallery_section",
                                    displayer: "Media Item",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Media",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66e060a8343034002c466d8f?alt=media",
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
                                            key: "imageTitle",
                                            displayer: "Title",
                                            value: "Nonveg Image",
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "imageGallery_section",
                                    displayer: "Media Item",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Media",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66e060e1343034002c466db5?alt=media",
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
                                            key: "imageTitle",
                                            displayer: "Title",
                                            value: "Nonveg Image",
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "imageGallery_section",
                                    displayer: "Media Item",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Media",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66e065c4343034002c46704f?alt=media",
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
                                            key: "imageTitle",
                                            displayer: "Title",
                                            value: "Nonveg Image",
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "imageGallery_section",
                                    displayer: "Media Item",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Media",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcded9e8fb8002c915338?alt=media",
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
                                            key: "imageTitle",
                                            displayer: "Title",
                                            value: "Nonveg Image",
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    type: "object",
                    key: "section",
                    displayer: "Section",
                    value: [
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Vegetarian",
                        },
                        {
                            type: "array",
                            key: "imageGallery",
                            displayer: "Media",
                            value: [
                                {
                                    type: "object",
                                    key: "imageGallery_section",
                                    displayer: "Media Item",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Media",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66dec9e1343034002c45cd6b?alt=media",
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
                                            key: "imageTitle",
                                            displayer: "Title",
                                            value: "Vegetarian Image",
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "imageGallery_section",
                                    displayer: "Media Item",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Media",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66deca37343034002c45cd7a?alt=media",
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
                                            key: "imageTitle",
                                            displayer: "Title",
                                            value: "Vegetarian Image",
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "imageGallery_section",
                                    displayer: "Media Item",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Media",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66e064db343034002c466fad?alt=media",
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
                                            key: "imageTitle",
                                            displayer: "Title",
                                            value: "Vegetarian Image",
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "imageGallery_section",
                                    displayer: "Media Item",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Media",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66e06518343034002c466fc5?alt=media",
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
                                            key: "imageTitle",
                                            displayer: "Title",
                                            value: "Vegetarian Image",
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "imageGallery_section",
                                    displayer: "Media Item",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Media",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66decb45343034002c45ce26?alt=media",
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
                                            key: "imageTitle",
                                            displayer: "Title",
                                            value: "Vegetarian Image",
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "imageGallery_section",
                                    displayer: "Media Item",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Media",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66e06576343034002c466fff?alt=media",
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
                                            key: "imageTitle",
                                            displayer: "Title",
                                            value: "Vegetarian Image",
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    type: "object",
                    key: "section",
                    displayer: "Section",
                    value: [
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Dessert",
                        },
                        {
                            type: "array",
                            key: "imageGallery",
                            displayer: "Media",
                            value: [
                                {
                                    type: "object",
                                    key: "imageGallery_section",
                                    displayer: "Media Item",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Media",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66decbec343034002c45ced2?alt=media",
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
                                            key: "imageTitle",
                                            displayer: "Title",
                                            value: "Dessert Image",
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "imageGallery_section",
                                    displayer: "Media Item",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Media",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66e05f8e343034002c466d17?alt=media",
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
                                            key: "imageTitle",
                                            displayer: "Title",
                                            value: "Dessert Image",
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "imageGallery_section",
                                    displayer: "Media Item",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Media",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66decc48343034002c45cf57?alt=media",
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
                                            key: "imageTitle",
                                            displayer: "Title",
                                            value: "Dessert Image",
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "imageGallery_section",
                                    displayer: "Media Item",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Media",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66decc61343034002c45cf65?alt=media",
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
                                            key: "imageTitle",
                                            displayer: "Title",
                                            value: "Dessert Image",
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "imageGallery_section",
                                    displayer: "Media Item",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Media",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66decc7c343034002c45cf7c?alt=media",
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
                                            key: "imageTitle",
                                            displayer: "Title",
                                            value: "Dessert Image",
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "imageGallery_section",
                                    displayer: "Media Item",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Media",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66e05fc0343034002c466d32?alt=media",
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
                                            key: "imageTitle",
                                            displayer: "Title",
                                            value: "Dessert Image",
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    type: "object",
                    key: "section",
                    displayer: "Section",
                    value: [
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Drinks",
                        },
                        {
                            type: "array",
                            key: "imageGallery",
                            displayer: "Media",
                            value: [
                                {
                                    type: "object",
                                    key: "imageGallery_section",
                                    displayer: "Media Item",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Media",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66e0624e343034002c466e5a?alt=media",
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
                                            key: "imageTitle",
                                            displayer: "Title",
                                            value: "Drinks Image",
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "imageGallery_section",
                                    displayer: "Media Item",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Media",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66e06274343034002c466e66?alt=media",
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
                                            key: "imageTitle",
                                            displayer: "Title",
                                            value: "Drinks Image",
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "imageGallery_section",
                                    displayer: "Media Item",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Media",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66e062b5343034002c466e83?alt=media",
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
                                            key: "imageTitle",
                                            displayer: "Title",
                                            value: "Drinks Image",
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "imageGallery_section",
                                    displayer: "Media Item",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Media",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66e062cf343034002c466ea6?alt=media",
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
                                            key: "imageTitle",
                                            displayer: "Title",
                                            value: "Drinks Image",
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "imageGallery_section",
                                    displayer: "Media Item",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Media",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66e06383343034002c466f1f?alt=media",
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
                                            key: "imageTitle",
                                            displayer: "Title",
                                            value: "Drinks Image",
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "imageGallery_section",
                                    displayer: "Media Item",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Media",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66e0639b343034002c466f35?alt=media",
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
                                            key: "imageTitle",
                                            displayer: "Title",
                                            value: "Drinks Image",
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
            key: "modal",
            displayer: "Modal",
            value: [
                {
                    type: "media",
                    key: "hoverIcon",
                    displayer: "Hover Icon",
                    value: {
                        type: "icon",
                        name: "IoSearchOutline",
                    },
                    additionalParams: {
                        availableTypes: ["icon", "image"],
                    },
                },
                {
                    type: "media",
                    key: "nextIcon",
                    displayer: "Next Icon",
                    value: {
                        type: "icon",
                        name: "FaArrowRight",
                    },
                    additionalParams: {
                        availableTypes: ["icon", "image"],
                    },
                },
                {
                    type: "media",
                    key: "previousIcon",
                    displayer: "Previous Icon",
                    value: {
                        type: "icon",
                        name: "FaArrowLeft",
                    },
                    additionalParams: {
                        availableTypes: ["icon", "image"],
                    },
                },
                {
                    type: "media",
                    key: "closeIcon",
                    displayer: "Close Icon",
                    value: {
                        type: "icon",
                        name: "IoCloseOutline",
                    },
                    additionalParams: {
                        availableTypes: ["icon", "image"],
                    },
                },
                {
                    type: "boolean",
                    key: "showImageCounter",
                    displayer: "Show Page Number",
                    value: true,
                },
            ],
        });


        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "Load More", "", null, null, "Primary"),
            ],
        });

        if (typeof document !== "undefined") {
            document.addEventListener("keydown", this.handleKeyDown);
        }
        this.setComponentState("default", 0);
        this.setComponentState("modalOpen", false);
        this.setComponentState("currentImageIndex", 0);
        this.setComponentState("moreImages", 0);

    }

    handleKeyDown = (event: KeyboardEvent) => {
        switch (event.key) {
            case "ArrowLeft":
                this.prevImage();
                break;
            case "ArrowRight":
                this.nextImage();
                break;
            case "Escape":
                this.closeModal();
                break;
            default:
                break;
        }
    };

    openModal = (index: number) => {
        const currentGallery = this.getCurrentGallery();
        if (currentGallery && currentGallery[index]) {
            this.setComponentState("modalOpen", true);
            this.setComponentState("currentImageIndex", index);
        }
    };

    closeModal = () => {
        this.setComponentState("modalOpen", false);
    };

    changeImage = (direction: string) => {
        const currentImageIndex = this.getComponentState("currentImageIndex");
        const currentGallery = this.getCurrentGallery();
        const galleryLength = currentGallery.length;
        
        if (galleryLength === 0) return;
        
        let newIndex;
        if (direction === "prev") {
            newIndex = (currentImageIndex - 1 + galleryLength) % galleryLength;
        } else if (direction === "next") {
            newIndex = (currentImageIndex + 1) % galleryLength;
        }
        this.setComponentState("currentImageIndex", newIndex);
    };

    prevImage = () => {
        this.changeImage("prev");
    };

    nextImage = () => {
        this.changeImage("next");
    };

    getCurrentGallery() {
        const galleryCollection = this.castToObject<sectionType[]>("gallery");
        const currentIndex: number = this.getComponentState("default");

        if (this.getAllCategory().showAll && currentIndex === -1) {
            return galleryCollection.flatMap((section) => section.imageGallery) || [];
        }
        return galleryCollection[currentIndex]?.imageGallery || [];
    }

    static getName(): string {
        return "Image Gallery 2";
    }
    getAllCategory(): AllCategory {
        return this.castToObject<AllCategory>("allCategory");
    }
    getCountSettings(): CountSettings {
        return this.castToObject<CountSettings>("countSettings");
    }
    handleLoadMoreButton = () => {
        this.setComponentState("moreImages", this.getComponentState("moreImages") + this.getCountSettings().imageCount)
    };
    handleSectionClick(index: number): void {
        this.setComponentState("default", index)
        this.setComponentState("imageCount", this.getCountSettings().imageCountInitial);
        this.setComponentState("moreImages", 0);
    }
    render() {
        if (this.getComponentState("imageCount") != this.getCountSettings().imageCountInitial + this.getComponentState("moreImages"))
            this.setComponentState("imageCount", this.getCountSettings().imageCountInitial + this.getComponentState("moreImages"));

        const galleryCollection = this.getPropValue("gallery");
        const currentIndex = this.getComponentState("default");
        const modalOpen = this.getComponentState("modalOpen");
        const currentImageIndex = this.getComponentState("currentImageIndex");
        const currentGallery = this.getCurrentGallery();
        const currentImage = currentGallery[currentImageIndex];
        const modal = this.castToObject<any>("modal");
        const nextImageIcon = modal.nextIcon;
        const previousImageIcon = modal.previousIcon;
        const closeModalIcon = modal.closeIcon;
        const magnifierIcon = modal.hoverIcon;
        const imgCounter = modal.showImageCounter;
        const imgCount = `${currentImageIndex + 1} of ${currentGallery.length}`;
        const showAll = this.getAllCategory().showAll;
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
        const hasButtons = buttons.some((item: INPUTS.CastedButton) => this.castToString(item.text));
        const subtitleExist = this.castToString(this.getPropValue("subtitle"));
        const titleExist = this.castToString(this.getPropValue("header_title"));
        const descriptionExist = this.castToString(this.getPropValue("description"));
        const headerButtons = this.castToObject<INPUTS.CastedButton[]>("headerButtons") || [];
        const hasHeaderButtons = headerButtons.some((item: INPUTS.CastedButton) => this.castToString(item.text));

        return (
            <Base.Container className={`${this.decorateCSS("container")}${modalOpen && this.decorateCSS("with-overlay")}`}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {(subtitleExist || titleExist || descriptionExist || hasHeaderButtons) && (
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
                                <Base.SectionDescription className={this.decorateCSS("description")}>
                                    {this.getPropValue("description")}
                                </Base.SectionDescription>
                            )}
                            {hasHeaderButtons && (
                                <div className={this.decorateCSS("header-buttons")}>
                                    {headerButtons.map((item: INPUTS.CastedButton, index: number) => this.castToString(item.text) && (
                                        <ComposerLink key={index} path={item.url}>
                                            <Base.Button buttonType={item.type} className={this.decorateCSS("header-button")}>
                                                <Base.P className={this.decorateCSS("header-button-text")}>{item.text}</Base.P>
                                            </Base.Button>
                                        </ComposerLink>
                                    ))}
                                </div>
                            )}
                        </Base.VerticalContent>
                    )}
                    <Base.Row className={this.decorateCSS("tab-container")}>
                        {showAll && this.castToString(this.getAllCategory().allText) && (
                            <Base.P
                                className={`${this.decorateCSS("tab")} ${currentIndex === -1 ? this.decorateCSS("active-tab") : ""
                                    }`}
                                onClick={() => this.handleSectionClick(-1)}
                            >
                                {this.getAllCategory().allText}
                            </Base.P>
                        )}
                        {galleryCollection.map((element: any, index: number) => this.castToString(element.getPropValue("title")) && (
                            <Base.P
                                key={index}
                                className={`${this.decorateCSS("tab")} ${index === currentIndex ? this.decorateCSS("active-tab") : ""
                                    }`}
                                onClick={() => this.handleSectionClick(index)}
                            >
                                {element.getPropValue("title")}
                            </Base.P>
                        ))}
                    </Base.Row>
                    <Base.ListGrid gridCount={{ pc: this.getCountSettings().itemCount, tablet: 3 }} className={this.decorateCSS("gallery-container")}>
                        {currentGallery.slice(0, this.getComponentState("imageCount")).map((section: ImageType, imageIndex: number) => {
                            if (!section.image) return null;
                            return (
                                <div
                                    className={this.decorateCSS("gallery-item")}
                                    key={imageIndex}
                                    onClick={() => this.openModal(imageIndex)}
                                >
                                    <div className={this.decorateCSS("image-container")}>
                                        <Base.Media
                                            value={section.image}
                                            className={this.decorateCSS("image")}
                                        />
                                        {section.overlay && <div className={this.decorateCSS("media-overlay")} />}
                                        <div className={this.decorateCSS("overlay")} />
                                        {magnifierIcon && (
                                            <div className={this.decorateCSS("icon-wrapper")}>
                                                <Base.Media
                                                    value={magnifierIcon}
                                                    className={this.decorateCSS("icon")}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </Base.ListGrid>
                    {(currentGallery.length > this.getComponentState("imageCount")) && hasButtons && (
                        <div className={this.decorateCSS("button-wrapper")}>
                            {buttons.map((item: INPUTS.CastedButton, index: number) => this.castToString(item.text) && (
                                <ComposerLink key={index} path={item.url}>
                                    <Base.Button className={this.decorateCSS("button")} buttonType={item.type} onClick={this.handleLoadMoreButton}>
                                        <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                                    </Base.Button>
                                </ComposerLink>
                            ))}
                        </div>
                    )}
                    {modalOpen && currentImage && (
                        <Base.Overlay isVisible={true} className={this.decorateCSS("modal")}>
                            <div className={this.decorateCSS("modal-wrapper")}
                                onClick={this.closeModal}>
                                <div
                                    className={this.decorateCSS("modal-content")}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {closeModalIcon && (
                                        <div
                                            className={this.decorateCSS("close")}
                                            onClick={this.closeModal}
                                        >
                                            <Base.Media
                                                value={closeModalIcon}
                                                className={this.decorateCSS("icon")}
                                            />
                                        </div>
                                    )}

                                    <div className={this.decorateCSS("image-container")}>
                                        <Base.Media
                                            value={currentImage.image}
                                            className={this.decorateCSS("modal-image")}
                                        />
                                    </div>
                                    <div className={this.decorateCSS("image-info")}>
                                        {this.castToString(currentImage.imageTitle) && (
                                            <Base.P className={this.decorateCSS("image-title")}>
                                                {currentImage.imageTitle}
                                            </Base.P>
                                        )}
                                        {imgCounter && (
                                            <Base.P className={this.decorateCSS("image-count")}>
                                                {imgCount}
                                            </Base.P>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {currentImage && (
                                <>
                                    {previousImageIcon && (
                                        <div
                                            className={this.decorateCSS("prev")}
                                            onClick={this.prevImage}
                                        >
                                            <Base.Media
                                                value={previousImageIcon}
                                                className={this.decorateCSS("icon")}
                                            />
                                        </div>
                                    )}
                                    {nextImageIcon && (
                                        <div
                                            className={this.decorateCSS("next")}
                                            onClick={this.nextImage}
                                        >
                                            <Base.Media
                                                value={nextImageIcon}
                                                className={this.decorateCSS("icon")}
                                            />
                                        </div>
                                    )}
                                </>
                            )}
                        </Base.Overlay>
                    )}
                </Base.MaxContent>
            </Base.Container >
        );
    }
}

export default ImageGallery2;