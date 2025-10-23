import * as React from "react";
import { BaseImageGallery, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./image-gallery2.module.scss";

import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type ImageType = {
    image: TypeMediaInputValue;
    imageTitle: React.JSX.Element;
};

type sectionType = {
    title: string;
    imageGallery: ImageType[];
};

class ImageGallery2 extends BaseImageGallery {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "boolean",
            key: "showAll",
            displayer: "Show All Category",
            value: true,
        });
        this.addProp({
            type: "number",
            key: "imageCountInitial",
            displayer: "Image Count Initial",
            value: 3
        })
        this.addProp({
            type: "number",
            key: "imageCount",
            displayer: "More Image Count",
            value: 3
        })
        this.addProp({
            type: "number",
            key: "itemCount",
            displayer: "Item Count in a Row",
            value: 3,
        });
        this.addProp({
            type: "string",
            key: "allText",
            displayer: "All Button Text",
            value: "All",
        })
        this.addProp({
            type: "array",
            key: "gallery",
            displayer: "gallery",
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
                            displayer: "Image Gallery 2",
                            value: [
                                {
                                    type: "object",
                                    key: "section",
                                    displayer: "Section",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Image",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66db15cc343034002c4597b8?alt=media",
                                            },
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "imageTitle",
                                            displayer: "Image Title",
                                            value: "Nonveg Image",
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "section",
                                    displayer: "Section",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Image",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66db161b343034002c4597d7?alt=media",
                                            },
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "imageTitle",
                                            displayer: "Image Title",
                                            value: "Nonveg Image",
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "section",
                                    displayer: "Section",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Image",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66e060a8343034002c466d8f?alt=media",
                                            },
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "imageTitle",
                                            displayer: "Image Title",
                                            value: "Nonveg Image",
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "section",
                                    displayer: "Section",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Image",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66e060e1343034002c466db5?alt=media",
                                            },
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "imageTitle",
                                            displayer: "Image Title",
                                            value: "Nonveg Image",
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "section",
                                    displayer: "Section",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Image",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66e065c4343034002c46704f?alt=media",
                                            },
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "imageTitle",
                                            displayer: "Image Title",
                                            value: "Nonveg Image",
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "section",
                                    displayer: "Section",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Image",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcded9e8fb8002c915338?alt=media",
                                            },
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "imageTitle",
                                            displayer: "Image Title",
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
                            displayer: "Image Gallery 2",
                            value: [
                                {
                                    type: "object",
                                    key: "section",
                                    displayer: "Section",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Image",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66dec9e1343034002c45cd6b?alt=media",
                                            },
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "imageTitle",
                                            displayer: "Image Title",
                                            value: "Vegetarian Image",
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "section",
                                    displayer: "Section",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Image",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66deca37343034002c45cd7a?alt=media",
                                            },
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "imageTitle",
                                            displayer: "Image Title",
                                            value: "Vegetarian Image",
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "section",
                                    displayer: "Section",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Image",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66e064db343034002c466fad?alt=media",
                                            },
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "imageTitle",
                                            displayer: "Image Title",
                                            value: "Vegetarian Image",
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "section",
                                    displayer: "Section",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Image",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66e06518343034002c466fc5?alt=media",
                                            },
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "imageTitle",
                                            displayer: "Image Title",
                                            value: "Vegetarian Image",
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "section",
                                    displayer: "Section",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Image",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66decb45343034002c45ce26?alt=media",
                                            },
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "imageTitle",
                                            displayer: "Image Title",
                                            value: "Vegetarian Image",
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "section",
                                    displayer: "Section",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Image",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66e06576343034002c466fff?alt=media",
                                            },
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "imageTitle",
                                            displayer: "Image Title",
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
                            displayer: "Image Gallery 2",
                            value: [
                                {
                                    type: "object",
                                    key: "section",
                                    displayer: "Section",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Image",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66decbec343034002c45ced2?alt=media",
                                            },
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "imageTitle",
                                            displayer: "Image Title",
                                            value: "Dessert Image",
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "section",
                                    displayer: "Section",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Image",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66e05f8e343034002c466d17?alt=media",
                                            },
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "imageTitle",
                                            displayer: "Image Title",
                                            value: "Dessert Image",
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "section",
                                    displayer: "Section",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Image",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66decc48343034002c45cf57?alt=media",
                                            },
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "imageTitle",
                                            displayer: "Image Title",
                                            value: "Dessert Image",
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "section",
                                    displayer: "Section",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Image",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66decc61343034002c45cf65?alt=media",
                                            },
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "imageTitle",
                                            displayer: "Image Title",
                                            value: "Dessert Image",
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "section",
                                    displayer: "Section",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Image",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66decc7c343034002c45cf7c?alt=media",
                                            },
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "imageTitle",
                                            displayer: "Image Title",
                                            value: "Dessert Image",
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "section",
                                    displayer: "Section",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Image",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66e05fc0343034002c466d32?alt=media",
                                            },
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "imageTitle",
                                            displayer: "Image Title",
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
                            displayer: "Image Gallery 2",
                            value: [
                                {
                                    type: "object",
                                    key: "section",
                                    displayer: "Section",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Image",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66e0624e343034002c466e5a?alt=media",
                                            },
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "imageTitle",
                                            displayer: "Image Title",
                                            value: "Drinks Image",
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "section",
                                    displayer: "Section",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Image",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66e06274343034002c466e66?alt=media",
                                            },
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "imageTitle",
                                            displayer: "Image Title",
                                            value: "Drinks Image",
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "section",
                                    displayer: "Section",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Image",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66e062b5343034002c466e83?alt=media",
                                            },
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "imageTitle",
                                            displayer: "Image Title",
                                            value: "Drinks Image",
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "section",
                                    displayer: "Section",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Image",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66e062cf343034002c466ea6?alt=media",
                                            },
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "imageTitle",
                                            displayer: "Image Title",
                                            value: "Drinks Image",
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "section",
                                    displayer: "Section",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Image",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66e06383343034002c466f1f?alt=media",
                                            },
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "imageTitle",
                                            displayer: "Image Title",
                                            value: "Drinks Image",
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "section",
                                    displayer: "Section",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Image",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66e0639b343034002c466f35?alt=media",
                                            },
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "imageTitle",
                                            displayer: "Image Title",
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
            type: "icon",
            key: "icon",
            displayer: "Magnifier Icon",
            value: "IoSearchOutline",
        });

        this.addProp({
            type: "icon",
            key: "nextImageIcon",
            displayer: "Next Image Icon",
            value: "FaArrowRight",
        });

        this.addProp({
            type: "icon",
            key: "previousImageIcon",
            displayer: "Previous Image Icon",
            value: "FaArrowLeft",
        });

        this.addProp({
            type: "icon",
            key: "closeModalIcon",
            displayer: "Close Modal Icon",
            value: "IoCloseOutline",
        });

        this.addProp({
            type: "boolean",
            key: "imgCounter",
            displayer: "Image Page Number",
            value: true,
        });

        this.addProp(INPUTS.BUTTON("button", "Button", "Load More", null, null, null, "Primary"));

        document.addEventListener("keydown", this.handleKeyDown);
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
        this.setComponentState("modalOpen", true);
        this.setComponentState("currentImageIndex", index);
    };

    closeModal = () => {
        this.setComponentState("modalOpen", false);
    };

    changeImage = (direction: string) => {
        const currentImageIndex = this.getComponentState("currentImageIndex");
        const currentGallery = this.getCurrentGallery();
        const galleryLength = currentGallery.length;
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

        if (this.getPropValue("showAll") && currentIndex === -1) {
            return galleryCollection.flatMap((section) => section.imageGallery) || [];
        }
        return galleryCollection[currentIndex]?.imageGallery || [];
    }

    static getName(): string {
        return "Image Gallery 2";
    }
    handleLoadMoreButton = () => {
        this.setComponentState("moreImages", this.getComponentState("moreImages") + this.getPropValue("imageCount"))
    };
    handleSectionClick(index: number): void {
        this.setComponentState("default", index)
        this.setComponentState("imageCount", this.getPropValue("imageCountInitial"));
        this.setComponentState("moreImages", 0);
    }
    render() {
        if (this.getComponentState("imageCount") != this.getPropValue("imageCountInitial") + this.getComponentState("moreImages"))
            this.setComponentState("imageCount", this.getPropValue("imageCountInitial") + this.getComponentState("moreImages"));

        const galleryCollection = this.getPropValue("gallery");
        const currentIndex = this.getComponentState("default");
        const modalOpen = this.getComponentState("modalOpen");
        const currentImageIndex = this.getComponentState("currentImageIndex");
        const currentGallery = this.getCurrentGallery();
        const currentImage = currentGallery[currentImageIndex];
        const nextImageIcon = this.getPropValue("nextImageIcon");
        const previousImageIcon = this.getPropValue("previousImageIcon");
        const closeModalIcon = this.getPropValue("closeModalIcon");
        const imgCounter = this.getPropValue("imgCounter");
        const magnifierIcon = this.getPropValue("icon");
        const imgCount = `${currentImageIndex + 1} of ${currentGallery.length}`;
        const showAll = this.getPropValue("showAll");
        const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

        return (
            <Base.Container className={`${this.decorateCSS("container")}${modalOpen && this.decorateCSS("with-overlay")}`}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("content")}>
                        <div className={this.decorateCSS("section-selector-text")}>
                            {showAll && (
                                <div
                                    className={`${this.decorateCSS("section-text")} ${currentIndex === -1 ? this.decorateCSS("active") : ""
                                        }`}
                                    onClick={() => this.handleSectionClick(-1)}
                                >
                                    {this.getPropValue("allText")}
                                </div>
                            )}
                            {galleryCollection.map((element: any, index: number) => (
                                <div
                                    className={`${this.decorateCSS("section-text")} ${index === currentIndex ? this.decorateCSS("active") : ""
                                        }`}
                                    onClick={() => this.handleSectionClick(index)}
                                >
                                    {element.getPropValue("title")}
                                </div>
                            ))}
                        </div>
                        <Base.ListGrid gridCount={{ pc: this.getPropValue("itemCount") }} className={this.decorateCSS("gallery-grid")}>
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
                                                className={this.decorateCSS("gallery-image")}
                                            />
                                            <div className={this.decorateCSS("overlay")} />
                                            <div className={this.decorateCSS("magnifier-icon-wrapper")}>
                                                <Base.Icon
                                                    propsIcon={{
                                                        className: this.decorateCSS("magnifier-icon"),
                                                    }}
                                                    name={magnifierIcon}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </Base.ListGrid>
                        {(currentGallery.length > this.getComponentState("imageCount")) && (
                            <div className={this.decorateCSS("button-wrapper")}>
                                <Base.Button className={this.decorateCSS("button")} buttonType={button.type} onClick={this.handleLoadMoreButton}>
                                    <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                                </Base.Button>
                            </div>
                        )}

                    </div>
                    {modalOpen && (
                        <Base.Overlay isVisible={true} className={this.decorateCSS("modal")}>
                            <div className={this.decorateCSS("modal-wrapper")}
                                onClick={this.closeModal}>
                                <div
                                    className={this.decorateCSS("modal-content")}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <div
                                        className={this.decorateCSS("close")}
                                        onClick={this.closeModal}
                                    >
                                        <Base.Media
                                            value={closeModalIcon}
                                            className={this.decorateCSS("icon")}
                                        />
                                    </div>

                                    <div className={this.decorateCSS("image-container")}>
                                        <Base.Media
                                            value={currentImage.image}
                                            className={this.decorateCSS("modal-image")}
                                        />
                                    </div>
                                    <div className={this.decorateCSS("image-info")}>
                                        <div className={this.decorateCSS("image-title")}>
                                            {currentImage.imageTitle}
                                        </div>
                                        {imgCounter && (
                                            <div className={this.decorateCSS("image-count")}>
                                                {imgCount}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div
                                className={this.decorateCSS("prev")}
                                onClick={this.prevImage}
                            >
                                <Base.Media
                                    value={previousImageIcon}
                                    className={this.decorateCSS("icon")}
                                />
                            </div>
                            <div
                                className={this.decorateCSS("next")}
                                onClick={this.nextImage}
                            >
                                <Base.Media
                                    value={nextImageIcon}
                                    className={this.decorateCSS("icon")}
                                />
                            </div>
                        </Base.Overlay>
                    )}
                </Base.MaxContent>
            </Base.Container >
        );
    }
}

export default ImageGallery2;