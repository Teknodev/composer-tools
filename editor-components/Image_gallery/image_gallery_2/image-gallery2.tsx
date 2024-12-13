import * as React from "react";
import { BaseImageGallery } from "../../EditorComponent";
import styles from "./image-gallery2.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";

type ImageType = {
    image: string;
    imageTitle: JSX.Element;
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
                                            type: "image",
                                            key: "image",
                                            displayer: "Image",
                                            value:
                                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c184d0655f8002ca6c8ad?alt=media&timestamp=1734088800237",
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
                                            type: "image",
                                            key: "image",
                                            displayer: "Image",
                                            value:
                                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c18760655f8002ca6c8ef?alt=media&timestamp=1734088839803",
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
                                            type: "image",
                                            key: "image",
                                            displayer: "Image",
                                            value:
                                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c18d60655f8002ca6c91b?alt=media&timestamp=1734088936647",
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
                                            type: "image",
                                            key: "image",
                                            displayer: "Image",
                                            value:
                                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c19060655f8002ca6c94e?alt=media&timestamp=1734088984563",
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
                                            type: "image",
                                            key: "image",
                                            displayer: "Image",
                                            value:
                                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c19300655f8002ca6c976?alt=media&timestamp=1734089025087",
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
                                            type: "image",
                                            key: "image",
                                            displayer: "Image",
                                            value:
                                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c194e0655f8002ca6c9ae?alt=media&timestamp=1734089056805",
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
                                            type: "image",
                                            key: "image",
                                            displayer: "Image",
                                            value:
                                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c197d0655f8002ca6c9cf?alt=media&timestamp=1734089103227",
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
                                            type: "image",
                                            key: "image",
                                            displayer: "Image",
                                            value:
                                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c19a40655f8002ca6c9df?alt=media&timestamp=1734089141820",
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
                                            type: "image",
                                            key: "image",
                                            displayer: "Image",
                                            value:
                                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c19cb0655f8002ca6ca0d?alt=media&timestamp=1734089180620",
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
                                            type: "image",
                                            key: "image",
                                            displayer: "Image",
                                            value:
                                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c1a030655f8002ca6caef?alt=media&timestamp=1734089237478",
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
                                            type: "image",
                                            key: "image",
                                            displayer: "Image",
                                            value:
                                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c1a290655f8002ca6cb3f?alt=media&timestamp=1734089274739",
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
                                            type: "image",
                                            key: "image",
                                            displayer: "Image",
                                            value:
                                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c1a4e0655f8002ca6cb9e?alt=media&timestamp=1734089314086",
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
                                            type: "image",
                                            key: "image",
                                            displayer: "Image",
                                            value:
                                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c1a770655f8002ca6cc41?alt=media&timestamp=1734089353975",
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
                                            type: "image",
                                            key: "image",
                                            displayer: "Image",
                                            value:
                                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c1aa20655f8002ca6cc60?alt=media&timestamp=1734089394814",
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
                                            type: "image",
                                            key: "image",
                                            displayer: "Image",
                                            value:
                                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c1ac30655f8002ca6cc94?alt=media&timestamp=1734089428606",
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
                                            type: "image",
                                            key: "image",
                                            displayer: "Image",
                                            value:
                                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c1ae60655f8002ca6cc9d?alt=media&timestamp=1734089464642",
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
                                            type: "image",
                                            key: "image",
                                            displayer: "Image",
                                            value:
                                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c1b0b0655f8002ca6ccaa?alt=media&timestamp=1734089500375",
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
                                            type: "image",
                                            key: "image",
                                            displayer: "Image",
                                            value:
                                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c1b370655f8002ca6ccb4?alt=media&timestamp=1734089545512",
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
                                            type: "image",
                                            key: "image",
                                            displayer: "Image",
                                            value:
                                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c1b820655f8002ca6ccd4?alt=media&timestamp=1734089620145",
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
                                            type: "image",
                                            key: "image",
                                            displayer: "Image",
                                            value:
                                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c1ba50655f8002ca6cce6?alt=media&timestamp=1734089656296",
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
                                            type: "image",
                                            key: "image",
                                            displayer: "Image",
                                            value:
                                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c1bcc0655f8002ca6ccfa?alt=media&timestamp=1734089693232",
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
                                            type: "image",
                                            key: "image",
                                            displayer: "Image",
                                            value:
                                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c1bed0655f8002ca6cd00?alt=media&timestamp=1734089726427",
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
                                            type: "image",
                                            key: "image",
                                            displayer: "Image",
                                            value:
                                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c1c150655f8002ca6cd05?alt=media&timestamp=1734089769165",
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
                                            type: "image",
                                            key: "image",
                                            displayer: "Image",
                                            value:
                                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c1c3f0655f8002ca6cd18?alt=media&timestamp=1734089808798",
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
            value: "FaSearch",
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
        this.addProp({
            type: "string",
            key: "buttonText",
            displayer: "Button Text",
            value: "Load More",
        });

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

    getName(): string {
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

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("content")}>
                        <div className={this.decorateCSS("section-selector-text")}>
                            {showAll && (
                                <div
                                    className={`${this.decorateCSS("section-text")} ${currentIndex === -1 ? this.decorateCSS("active") : ""
                                        }`}
                                    onClick={() => this.handleSectionClick(-1)}
                                >
                                    All
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
                                            <img
                                                src={section.image}
                                                alt={this.castToString(section.imageTitle)}
                                                className={this.decorateCSS("gallery-image")}
                                            />
                                            <div className={this.decorateCSS("overlay")} />
                                            <div className={this.decorateCSS("magnifier-icon-wrapper")}>
                                                <ComposerIcon
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
                                <Base.Button className={this.decorateCSS("button")} onClick={this.handleLoadMoreButton}> {this.getPropValue("buttonText")}</Base.Button>
                            </div>
                        )}

                    </div>
                    {modalOpen && (
                        <div className={this.decorateCSS("modal")}>
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
                                        <ComposerIcon
                                            propsIcon={{ className: this.decorateCSS("icon") }}
                                            name={closeModalIcon}
                                        />
                                    </div>

                                    <div className={this.decorateCSS("image-container")}>
                                        <img
                                            src={currentImage.image as string}
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
                                <ComposerIcon
                                    propsIcon={{ className: this.decorateCSS("icon") }}
                                    name={previousImageIcon}
                                />
                            </div>
                            <div
                                className={this.decorateCSS("next")}
                                onClick={this.nextImage}
                            >
                                <ComposerIcon
                                    propsIcon={{ className: this.decorateCSS("icon") }}
                                    name={nextImageIcon}
                                />
                            </div>
                        </div>
                    )}
                </Base.MaxContent>
            </Base.Container >
        );
    }
}

export default ImageGallery2;